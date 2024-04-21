type Hideable<T> = {
    hidden?: true | (() => boolean) | {
        match: 'some' | 'every';
        fn: (item: T) => boolean;
    } | {
        match: 'outer';
        fn: () => boolean;
    };
};

export default Hideable;