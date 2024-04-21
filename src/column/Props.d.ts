import type Sortable from "./Comparing";
import type {Nested} from "./Nested";
import type Hideable from "./Hideable";

type Props<T, K extends keyof T> = {
    field: K;
    header?: false | string | (() => string);
    format?: (cell: T[K]) => string;
} & Nested<T[K]> & Sortable<T[K]> & Hideable<T[K]>

export default Props;