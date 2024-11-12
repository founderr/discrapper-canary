n.d(t, {
    S: function () {
        return f;
    }
}),
    n(47120);
var r = n(192379),
    i = n(392711),
    a = n.n(i),
    s = n(941028),
    o = n(509848),
    l = n(849522),
    u = n(439170);
let c = '@here';
function d(e) {
    return !!(e.length > 1) || !(1 === e.length && 'GROUP' === e[0].type && 'unknown' === e[0].id);
}
function f(e, t, n) {
    let i = (0, l.Z)(),
        [f, _] = r.useState(!1),
        p = r.useMemo(
            () =>
                a().debounce(
                    (e) => {
                        var r, a, l, f;
                        if (((r = e), (a = i), (l = t), (f = n), d(u.ZP.getProps(l, f).groups) || (!(r.length < c.length) && !(r.length > a) && -1 !== r.indexOf(c) && ((0, s.b8)(l, f, o.KV), 1)))) _(!0);
                    },
                    200,
                    { maxWait: 500 }
                ),
            [i, t, n]
        );
    r.useEffect(() => {
        let r = u.ZP.getProps(t, n).groups;
        if (null != t && !d(r) && !f)
            return (
                e.addListener('text-changed', p),
                () => {
                    e.removeListener('text-changed', p), p.cancel();
                }
            );
    }, [f, p, e, t, n]);
}
