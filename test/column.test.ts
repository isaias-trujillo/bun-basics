import {expect, test} from "bun:test";
import type Config from "../src/column/Config";

type Animal = {
    name: string;
    age: number;
    gender: 'female' | 'male';
    alive: boolean;
    taxonomy: {
        kingdom: string;
        phylum: string;
        class: string;
        order: string;
        family: string;
        genus: string;
        species: string;
    };
    friends: Animal[] | [];
}

const columns = [
    'name',
    'age',
    'taxonomy',
    'alive',
    'friends'
] satisfies Config<Animal>[];

test("Animal columns", () => {
    expect(columns).toStrictEqual(['name', 'age', 'taxonomy', 'alive', 'friends']);
});