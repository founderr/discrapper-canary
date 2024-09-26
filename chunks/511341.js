n.d(t, {
    Z: function () {
        return N;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(780384),
    s = n(907040),
    l = n(210887),
    u = n(823379),
    c = n(51144),
    d = n(785717),
    _ = n(448197),
    E = n(698305),
    f = n(510659),
    h = n(825801),
    p = n(652853),
    m = n(228168),
    I = n(185923),
    T = n(420212),
    g = n(231338),
    S = n(689938),
    A = n(209960);
let v = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        a = ':'.concat(t.name, ':');
    switch (r) {
        case m.n_.ACTIVITY:
            let o = S.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({ username: n });
            return ''.concat(h.jd).concat(o, '*\n').concat(a);
        case m.n_.AVATAR:
            let s = S.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({ username: n });
            return ''.concat(h.jd).concat(s, '*\n').concat(a);
        case m.n_.STATUS:
            let l = S.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({ username: n }),
                c = '\n> '.concat(i);
            return null != i ? ''.concat(h.jd).concat(l, '*').concat(c, '\n').concat(a) : ''.concat(h.jd).concat(l, '*\n').concat(a);
        default:
            (0, u.vE)(r);
    }
};
function N(e) {
    let { user: t, guildId: n, sourceType: u, sourceDetails: S, setPopoutRef: N, onClose: O } = e,
        { trackUserProfileAction: R } = (0, d.KZ)(),
        { sendReact: C } = (0, _.Q)(u),
        { setInteractionTypeSent: y, setInteractionToastShown: L, resetInteraction: b } = (0, f.Xo)(),
        { theme: D } = (0, p.z)(),
        M = (0, a.e7)([l.Z], () => l.Z.theme),
        P = (0, o.wj)(M) ? !(0, o.wj)(D) : (0, o.wj)(D),
        U = i.useRef(null);
    i.useEffect(() => {
        null == N || N(null == U ? void 0 : U.current);
    }, [U, N]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === T.vn.ESCAPE && (e.stopPropagation(), b());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [O, b]);
    let w = async (e) => {
        if (null == e) return;
        R({ action: C });
        let n = v({
            emoji: e,
            username: c.ZP.getName(t),
            sourceType: u,
            sourceDetails: S
        });
        y(null), L(!0);
        try {
            await (0, E.Z)({
                userId: t.id,
                content: n,
                location: 'UserProfileReactReplyBar',
                openChannel: !1,
                whenReady: !1
            });
        } catch (e) {}
        y(m.P.REACT),
            setTimeout(() => {
                L(!1);
            }, h._1);
    };
    return (0, r.jsx)(s.Z, {
        headerClassName: P ? A.noBoxShadowMargin : void 0,
        guildId: null != n ? n : void 0,
        closePopout: g.dG,
        onSelectEmoji: async (e, t) => {
            await w(e), t && (b(), null == O || O());
        },
        pickerIntention: I.Hz.PROFILE
    });
}
