import type Order from "../shared/Order.ts";
import type IsRecord from "./IsRecord";

type Nested<T, K extends keyof T> = IsRecord<T> extends never
    ? {}
    : {
        nested: {
            [K2 in keyof T[K]] : Column<T[K], K2>
        }
    }

type Column<T, K extends keyof T> = {
    field: K;
    header: () => string;
    format: (cell: T[K]) => string;
    sort: (order?: Order | 'toggle') => void;
    hidden: () => boolean;
} & Nested<T, K>
