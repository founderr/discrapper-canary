n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(780384),
    o = n(907040),
    l = n(210887),
    u = n(823379),
    c = n(51144),
    d = n(785717),
    _ = n(448197),
    E = n(698305),
    f = n(510659),
    h = n(810097),
    p = n(652853),
    I = n(228168),
    m = n(185923),
    T = n(420212),
    S = n(231338),
    g = n(689938),
    A = n(209960);
let N = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        a = ':'.concat(t.name, ':');
    switch (r) {
        case I.n_.ACTIVITY:
            let s = g.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({ username: n });
            return ''.concat(h.jd).concat(s, '*\n').concat(a);
        case I.n_.AVATAR:
            let o = g.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({ username: n });
            return ''.concat(h.jd).concat(o, '*\n').concat(a);
        case I.n_.STATUS:
            let l = g.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({ username: n });
            return null != i ? ''.concat(h.jd).concat(l, '*').concat('\n> '.concat(i), '\n').concat(a) : ''.concat(h.jd).concat(l, '*\n').concat(a);
        default:
            (0, u.vE)(r);
    }
};
function R(e) {
    let { user: t, guildId: n, sourceType: u, sourceDetails: h, setPopoutRef: g, onClose: R } = e,
        { trackUserProfileAction: O } = (0, d.KZ)(),
        { sendReact: v } = (0, _.Q)(u),
        { resetInteraction: C, setInteractionToast: L } = (0, f.Xo)(),
        { theme: y } = (0, p.z)(),
        D = (0, a.e7)([l.Z], () => l.Z.theme),
        b = (0, s.wj)(D) ? !(0, s.wj)(y) : (0, s.wj)(y),
        M = i.useRef(null);
    i.useEffect(() => {
        null == g || g(null == M ? void 0 : M.current);
    }, [M, g]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === T.vn.ESCAPE && (e.stopPropagation(), C());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [R, C]);
    let P = async (e) => {
        if (null == e) return;
        O({ action: v });
        let n = N({
            emoji: e,
            username: c.ZP.getName(t),
            sourceType: u,
            sourceDetails: h
        });
        L(null);
        try {
            await (0, E.Z)({
                userId: t.id,
                content: n,
                location: 'UserProfileReactPopout',
                openChannel: !1,
                whenReady: !1
            });
        } catch (e) {}
        L(I.P.REACT);
    };
    return (0, r.jsx)(o.Z, {
        headerClassName: b ? A.noBoxShadowMargin : void 0,
        guildId: null != n ? n : void 0,
        closePopout: S.dG,
        onSelectEmoji: async (e, t) => {
            await P(e), t && (C(), null == R || R());
        },
        pickerIntention: m.Hz.PROFILE
    });
}
