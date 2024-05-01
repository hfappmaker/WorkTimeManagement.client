import { useRef, useEffect } from "react";
import { Subject, queueScheduler, Observable, Observer } from "rxjs";
import { observeOn } from "rxjs/operators";

export default function useEpic<T extends ReadonlyArray<unknown>, U>(epic: (param: Observable<T[number]>[]) => Observable<U>, subscriber: Observer<U>, inputs: [...T]) {
  // holds the latest values for dependencies & epic subscriber
  const inputs$Ref = useRef<Subject<T[number]>[]>([]);
  const subscriberRef = useRef(subscriber);
  useEffect(
    () => {
      subscriberRef.current = subscriber;
    },
    [subscriber]
  );

  useEffect(() => {
    inputs.forEach(d => {
      const input$ = new Subject<typeof d>();
      inputs$Ref.current.push(input$);
    });
    const effect$ = epic(inputs$Ref.current.map(input => input.pipe(observeOn(queueScheduler))));
    const subscription = effect$.subscribe({
      next: x => subscriberRef.current.next(x),
      error: e => subscriberRef.current.error(e),
      complete: () => subscriberRef.current.complete()
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    inputs.forEach((d, i) => {
      inputs$Ref.current[i].next(d)
    });
    return () => { };
  }, inputs);
}
