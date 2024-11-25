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
    T = n(894639);
let S = (e) => {
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
    let { user: t, guildId: n, sourceType: u, sourceDetails: h, setPopoutRef: b, onClose: y, entry: A } = e,
        { trackUserProfileAction: N } = (0, d.KZ)(),
        { sendReact: C } = (0, f.Q)(u),
        { resetInteraction: R, setInteractionToast: O } = (0, p.Xo)(),
        { theme: D } = (0, m.z)(),
        L = (0, a.e7)([l.Z], () => l.Z.theme),
        x = (0, s.wj)(L) ? !(0, s.wj)(D) : (0, s.wj)(D),
        w = i.useRef(null);
    i.useEffect(() => {
        null == b || b(null == w ? void 0 : w.current);
    }, [w, b]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === v.vn.ESCAPE && (e.stopPropagation(), R());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [y, R]);
    let M = async (e) => {
        if (null == e) return;
        N({ action: C });
        let n = S({
            emoji: e,
            username: c.ZP.getName(t),
            sourceType: u,
            sourceDetails: h
        });
        O(null);
        try {
            await (0, _.Z)({
                userId: t.id,
                content: n,
                location: 'UserProfileReactPopout',
                openChannel: !1,
                whenReady: !1,
                entry: A
            });
        } catch (e) {}
        O(g.P.REACT);
    };
    return (0, r.jsx)(o.Z, {
        headerClassName: x ? T.noBoxShadowMargin : void 0,
        guildId: null != n ? n : void 0,
        closePopout: I.dG,
        onSelectEmoji: async (e, t) => {
            await M(e), t && (R(), null == y || y());
        },
        pickerIntention: E.Hz.PROFILE
    });
}
