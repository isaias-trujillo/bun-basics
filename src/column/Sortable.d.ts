import type IsRecord from "./IsRecord";
import type Compare from "../shared/Compare";
import type KnownTypes from "../shared/KnownTypes";

type Prop<T> = { compare?: false | Compare<T> };

type Sortable<T> = IsRecord<T> extends never
    ? Prop<T>
    : T extends KnownTypes
        ? Prop<T>
        : Required<Prop<T>>

export default Sortable;