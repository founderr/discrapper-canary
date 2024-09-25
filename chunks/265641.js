var r = n(47120);
var i = n(470079);
let a = (e) => {
    let [t, n] = i.useState(!1),
        r = i.useCallback(
            (t) => {
                e(t), n(!0);
            },
            [e, n]
        );
    return {
        isFocused: t,
        handleFocus: r,
        handleBlur: () => {
            n(!1);
        }
    };
};
t.Z = a;
