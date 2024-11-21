n.d(t, {
    r: function () {
        return i;
    }
});
var r = n(192379);
function i(e, t) {
    let n = (0, r.useRef)(!0),
        i = (0, r.useRef)(null);
    (0, r.useEffect)(
        () => (
            (n.current = !0),
            () => {
                n.current = !1;
            }
        ),
        []
    ),
        (0, r.useEffect)(() => {
            n.current ? (n.current = !1) : (!i.current || t.some((e, t) => !Object.is(e, i[t]))) && e(), (i.current = t);
        }, t);
}
