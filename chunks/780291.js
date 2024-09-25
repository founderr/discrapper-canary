n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(606992),
    s = n(314897),
    l = n(944486),
    u = n(843693),
    c = n(576125),
    d = n(112843),
    _ = n(524484),
    E = n(981631),
    f = n(675654);
let h = 16,
    p = 0.05;
function m(e) {
    var t, n;
    let { editorHeight: r, textValue: c } = e,
        _ = i.useRef(c),
        m = (0, o.Z)({ editorHeight: r }),
        I = (0, d.Z)(),
        T = (0, a.e7)([u.ZP, s.default, l.Z], () => {
            var e;
            return u.ZP.isComboing(s.default.getId(), null !== (e = l.Z.getChannelId()) && void 0 !== e ? e : E.lds);
        }),
        g = null !== (t = null == m ? void 0 : m.left) && void 0 !== t ? t : 0,
        S = (null !== (n = null == m ? void 0 : m.top) && void 0 !== n ? n : 0) - h,
        A = i.useMemo(() => Math.random() < p, [0 === c.length]);
    return (
        i.useEffect(() => {
            0 !== c.length && c !== _.current && T && (I.fire(g, S, A ? { sprite: f.vv } : null), (_.current = c));
        }, [c, T, g, S, A, I]),
        null
    );
}
function I(e) {
    return (0, r.jsx)(c.Z, {
        confettiLocation: _.Hn.CHAT_INPUT,
        children: (0, r.jsx)(m, { ...e })
    });
}
