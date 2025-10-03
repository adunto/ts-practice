type TypeName<T> = T extends string ? "string type" : "other type";

type t1 = TypeName<string>  // string type
type t2 = TypeName<number>  // other type