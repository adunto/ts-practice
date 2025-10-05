// 함수의 반환 타입 R 을 추론합니다.
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type Fn = () => number;
type MyFnReturn = MyReturnType<Fn>; // number 타입