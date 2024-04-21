import type IsRecord from "./IsRecord";
import type Config from "./Config";

type Nested<T> = IsRecord<T> extends never
    ? {}
    : {
        nested?: [Config<T>, ...[Config<T>]];
    }