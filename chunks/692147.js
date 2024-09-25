n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(392711);
var o = n(399606),
    s = n(351780),
    l = n(576125),
    u = n(465858),
    c = n(112843),
    d = n(524484);
function _(e) {
    let { reactionRef: t, count: n } = e,
        r = i.useRef(n),
        l = (0, o.e7)([s.Z], () => s.Z.getState()),
        d = (0, c.Z)(),
        _ = (0, u.Z)(t);
    return (
        i.useEffect(() => {
            if (n > r.current && null != _) {
                let e = (0, a.clamp)(n, l.confettiCount / 2, 2 * l.confettiCount);
                d.fire(_.x, _.y, { count: e });
            }
            r.current = n;
        }, [n, _, d, l.confettiCount]),
        null
    );
}
function E(e) {
    return (0, r.jsx)(l.Z, {
        confettiLocation: d.Hn.REACTION,
        children: (0, r.jsx)(_, { ...e })
    });
}
