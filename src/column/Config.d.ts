import type Props from "./Props";

type Config<T> = keyof T | ({
    field: keyof T;
} extends {
        field: infer K;
    } ? K extends keyof T
        ? Props<T, K>
        : never
    : never)

export default Config;