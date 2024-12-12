r.d(n, {
    Z: function () {
        return A;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(780384),
    l = r(907040),
    u = r(210887),
    c = r(823379),
    d = r(51144),
    f = r(785717),
    _ = r(448197),
    h = r(698305),
    p = r(510659),
    m = r(810097),
    g = r(652853),
    E = r(228168),
    v = r(185923),
    I = r(420212),
    T = r(231338),
    b = r(388032),
    y = r(894639);
let S = (e) => {
    let { emoji: n, username: r, sourceType: i, sourceDetails: a } = e,
        s = ':'.concat(n.name, ':');
    switch (i) {
        case E.n_.ACTIVITY:
            let o = b.intl.formatToPlainString(b.t.EUFEJi, { username: r }),
                l = '\n> '.concat(a);
            return null != a ? ''.concat(m.jd).concat(o, '*').concat(l, '\n').concat(s) : ''.concat(m.jd).concat(o, '*\n').concat(s);
        case E.n_.AVATAR:
            let u = b.intl.formatToPlainString(b.t.E6H15u, { username: r });
            return ''.concat(m.jd).concat(u, '*\n').concat(s);
        case E.n_.STATUS:
            let d = b.intl.formatToPlainString(b.t.XPQgLy, { username: r }),
                f = '\n> '.concat(a);
            return null != a ? ''.concat(m.jd).concat(d, '*').concat(f, '\n').concat(s) : ''.concat(m.jd).concat(d, '*\n').concat(s);
        default:
            (0, c.vE)(i);
    }
};
function A(e) {
    let { user: n, guildId: r, sourceType: c, sourceDetails: m, setPopoutRef: b, onClose: A, entry: N } = e,
        { trackUserProfileAction: C } = (0, f.KZ)(),
        { sendReact: R } = (0, _.Q)(c),
        { resetInteraction: O, setInteractionToast: D } = (0, p.Xo)(),
        { theme: L } = (0, g.z)(),
        x = (0, s.e7)([u.Z], () => u.Z.theme),
        w = (0, o.wj)(x) ? !(0, o.wj)(L) : (0, o.wj)(L),
        P = a.useRef(null);
    a.useEffect(() => {
        null == b || b(null == P ? void 0 : P.current);
    }, [P, b]),
        a.useEffect(() => {
            let e = (e) => {
                e.key === I.vn.ESCAPE && (e.stopPropagation(), O());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [A, O]);
    let M = async (e) => {
        if (null == e) return;
        C({ action: R });
        let r = S({
            emoji: e,
            username: d.ZP.getName(n),
            sourceType: c,
            sourceDetails: m
        });
        D(null);
        try {
            await (0, h.Z)({
                userId: n.id,
                content: r,
                location: 'UserProfileReactPopout',
                openChannel: !1,
                whenReady: !1,
                entry: N
            });
        } catch (e) {}
        D(E.P.REACT);
    };
    return (0, i.jsx)(l.Z, {
        headerClassName: w ? y.noBoxShadowMargin : void 0,
        guildId: null != r ? r : void 0,
        closePopout: T.dG,
        onSelectEmoji: async (e, n) => {
            await M(e), n && (O(), null == A || A());
        },
        pickerIntention: v.Hz.PROFILE
    });
}
