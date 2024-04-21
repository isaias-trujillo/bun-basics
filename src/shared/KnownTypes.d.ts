type Empty = null | undefined;
type Simple = string | number | boolean | Date | Empty;

type KnownTypes = Simple | {
    [key: PropertyKey]: KnownTypes;
}

export default KnownTypes;