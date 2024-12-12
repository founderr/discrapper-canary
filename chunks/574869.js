r.d(n, {
    d: function () {
        return o;
    }
});
var i = r(932143),
    a = r(155263),
    s = r(192379);
function o(e) {
    let n = (0, i.W)(e),
        r = (0, a.BA)({
            ...e,
            onSelectionChange: (r) => {
                null != e.onSelectionChange && e.onSelectionChange(r), n.close();
            }
        }),
        [o, l] = (0, s.useState)(!1);
    return {
        ...r,
        ...n,
        open() {
            0 !== r.collection.size && n.open();
        },
        toggle(e) {
            0 !== r.collection.size && n.toggle(e);
        },
        isFocused: o,
        setFocused: l
    };
}
