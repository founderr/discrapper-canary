r.d(n, {
    h: function () {
        return a;
    }
});
var i = r(558883);
function a(e, n, r) {
    let { labelProps: a, inputProps: s, isSelected: o, isPressed: l, isDisabled: u, isReadOnly: c } = (0, i.O)(e, n, r);
    return {
        labelProps: a,
        inputProps: {
            ...s,
            role: 'switch',
            checked: o
        },
        isSelected: o,
        isPressed: l,
        isDisabled: u,
        isReadOnly: c
    };
}
