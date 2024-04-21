type IsRecord<T> = T extends Record<PropertyKey, unknown>
    ? T extends Array<unknown>
        ? never
        : T
    : never;

export default IsRecord;