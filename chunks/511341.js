n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(780384),
    o = n(907040),
    l = n(210887),
    u = n(823379),
    c = n(51144),
    d = n(785717),
    f = n(448197),
    _ = n(698305),
    p = n(510659),
    h = n(810097),
    m = n(652853),
    g = n(228168),
    E = n(185923),
    v = n(420212),
    I = n(231338),
    b = n(388032),
    S = n(209960);
let T = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        a = ':'.concat(t.name, ':');
    switch (r) {
        case g.n_.ACTIVITY:
            let s = b.intl.formatToPlainString(b.t.EUFEJi, { username: n }),
                o = '\n> '.concat(i);
            return null != i ? ''.concat(h.jd).concat(s, '*').concat(o, '\n').concat(a) : ''.concat(h.jd).concat(s, '*\n').concat(a);
        case g.n_.AVATAR:
            let l = b.intl.formatToPlainString(b.t.E6H15u, { username: n });
            return ''.concat(h.jd).concat(l, '*\n').concat(a);
        case g.n_.STATUS:
            let c = b.intl.formatToPlainString(b.t.XPQgLy, { username: n }),
                d = '\n> '.concat(i);
            return null != i ? ''.concat(h.jd).concat(c, '*').concat(d, '\n').concat(a) : ''.concat(h.jd).concat(c, '*\n').concat(a);
        default:
            (0, u.vE)(r);
    }
};
function y(e) {
    let { user: t, guildId: n, sourceType: u, sourceDetails: h, setPopoutRef: b, onClose: y } = e,
        { trackUserProfileAction: A } = (0, d.KZ)(),
        { sendReact: N } = (0, f.Q)(u),
        { resetInteraction: C, setInteractionToast: R } = (0, p.Xo)(),
        { theme: O } = (0, m.z)(),
        D = (0, a.e7)([l.Z], () => l.Z.theme),
        L = (0, s.wj)(D) ? !(0, s.wj)(O) : (0, s.wj)(O),
        x = i.useRef(null);
    i.useEffect(() => {
        null == b || b(null == x ? void 0 : x.current);
    }, [x, b]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === v.vn.ESCAPE && (e.stopPropagation(), C());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [y, C]);
    let w = async (e) => {
        if (null == e) return;
        A({ action: N });
        let n = T({
            emoji: e,
            username: c.ZP.getName(t),
            sourceType: u,
            sourceDetails: h
        });
        R(null);
        try {
            await (0, _.Z)({
                userId: t.id,
                content: n,
                location: 'UserProfileReactPopout',
                openChannel: !1,
                whenReady: !1
            });
        } catch (e) {}
        R(g.P.REACT);
    };
    return (0, r.jsx)(o.Z, {
        headerClassName: L ? S.noBoxShadowMargin : void 0,
        guildId: null != n ? n : void 0,
        closePopout: I.dG,
        onSelectEmoji: async (e, t) => {
            await w(e), t && (C(), null == y || y());
        },
        pickerIntention: E.Hz.PROFILE
    });
}
