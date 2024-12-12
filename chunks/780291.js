r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(606992),
    l = r(314897),
    u = r(944486),
    c = r(843693),
    d = r(576125),
    f = r(112843),
    _ = r(524484),
    h = r(981631),
    p = r(675654);
let m = 16,
    g = 0.05;
function E(e) {
    var n, r;
    let { editorHeight: i, textValue: d } = e,
        _ = a.useRef(d),
        E = (0, o.Z)({ editorHeight: i }),
        v = (0, f.Z)(),
        I = (0, s.e7)([c.ZP, l.default, u.Z], () => {
            var e;
            return c.ZP.isComboing(l.default.getId(), null !== (e = u.Z.getChannelId()) && void 0 !== e ? e : h.lds);
        }),
        T = null !== (n = null == E ? void 0 : E.left) && void 0 !== n ? n : 0,
        b = (null !== (r = null == E ? void 0 : E.top) && void 0 !== r ? r : 0) - m,
        y = a.useMemo(() => Math.random() < g, [0 === d.length]);
    return (
        a.useEffect(() => {
            0 !== d.length && d !== _.current && I && (v.fire(T, b, y ? { sprite: p.vv } : null), (_.current = d));
        }, [d, I, T, b, y, v]),
        null
    );
}
function v(e) {
    return (0, i.jsx)(d.Z, {
        confettiLocation: _.Hn.CHAT_INPUT,
        children: (0, i.jsx)(E, { ...e })
    });
}
