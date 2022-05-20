/** @public */
export declare const enum ConstEnum {
    Zero = 0,
    One = 1
}

/** @public */
export declare interface _IInternalThing {
    title: string;
}

/** @public */
export declare class MyClass {
    get _writableThing(): _IInternalThing;
    set _writableThing(value: _IInternalThing);
    get _onlyHasGetterThing(): _IInternalThing;
    readonly declaredReadonlyThing: _IInternalThing;
    /**
     * Technically isn't but for testing purposes
     * @readonly
     */
    tsDocReadonlyThing: _IInternalThing;
}

export { }
