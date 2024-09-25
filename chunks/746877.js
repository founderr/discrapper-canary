n.d(t, {
    S: function () {
        return f;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(392711),
    o = n.n(a),
    s = n(941028),
    l = n(509848),
    u = n(849522),
    c = n(439170);
let d = '@here';
function _(e) {
    return !!(e.length > 1) || !(1 === e.length && 'GROUP' === e[0].type && 'unknown' === e[0].id);
}
function E(e, t, n, r) {
    return !!_(c.ZP.getProps(n, r).groups) || (!(e.length < d.length) && !(e.length > t) && -1 !== e.indexOf(d) && ((0, s.b8)(n, r, l.KV), !0));
}
function f(e, t, n) {
    let r = (0, u.Z)(),
        [a, s] = i.useState(!1),
        l = i.useMemo(
            () =>
                o().debounce(
                    (e) => {
                        E(e, r, t, n) && s(!0);
                    },
                    200,
                    { maxWait: 500 }
                ),
            [r, t, n]
        );
    i.useEffect(() => {
        let r = c.ZP.getProps(t, n).groups;
        if (null != t && !_(r) && !a)
            return (
                e.addListener('text-changed', l),
                () => {
                    e.removeListener('text-changed', l), l.cancel();
                }
            );
    }, [a, l, e, t, n]);
}
