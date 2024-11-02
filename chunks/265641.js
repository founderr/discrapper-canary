n(47120);
var i = n(192379);
t.Z = (e) => {
    let [t, n] = i.useState(!1),
        o = i.useCallback(
            (t) => {
                e(t), n(!0);
            },
            [e, n]
        );
    return {
        isFocused: t,
        handleFocus: o,
        handleBlur: () => {
            n(!1);
        }
    };
};
