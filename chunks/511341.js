n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(399606),
    s = n(481060),
    o = n(907040),
    l = n(210887),
    u = n(823379),
    c = n(51144),
    d = n(785717),
    _ = n(448197),
    E = n(698305),
    f = n(825801),
    h = n(228168),
    p = n(185923),
    I = n(420212),
    m = n(231338),
    T = n(689938);
let S = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        a = ':'.concat(t.name, ':');
    switch (r) {
        case h.n_.ACTIVITY:
            let s = T.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({ username: n });
            return ''.concat(f.jd).concat(s, '*\n').concat(a);
        case h.n_.AVATAR:
            let o = T.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({ username: n });
            return ''.concat(f.jd).concat(o, '*\n').concat(a);
        case h.n_.STATUS:
            let l = T.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({ username: n });
            return null != i ? ''.concat(f.jd).concat(l, '*').concat('\n> '.concat(i), '\n').concat(a) : ''.concat(f.jd).concat(l, '*\n').concat(a);
        default:
            (0, u.vE)(r);
    }
};
function g(e) {
    let { user: t, guildId: n, sourceType: u, sourceDetails: T, onInteraction: g, setPopoutRef: A, setInteractionToastShown: N, setInteractionTypeSent: O, onClose: R } = e,
        { trackUserProfileAction: v } = (0, d.KZ)(),
        C = (0, a.e7)([l.Z], () => l.Z.theme),
        { sendReact: y } = (0, _.Q)(u),
        L = i.useRef(null);
    i.useEffect(() => {
        null == A || A(null == L ? void 0 : L.current);
    }, [L, A]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === I.vn.ESCAPE &&
                    (e.stopPropagation(),
                    null == g ||
                        g({
                            interactionType: null,
                            interactionSourceType: null
                        }),
                    null == R || R());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [R, g]);
    let D = async (e) => {
        if (null == e) return;
        v({ action: y });
        let n = S({
            emoji: e,
            username: c.ZP.getName(t),
            sourceType: u,
            sourceDetails: T
        });
        O(null), N(!0);
        try {
            await (0, E.Z)({
                userId: t.id,
                content: n,
                location: 'UserProfileReactReplyBar',
                openChannel: !1,
                whenReady: !1
            });
        } catch (e) {}
        O(h.P.REACT),
            setTimeout(() => {
                N(!1);
            }, f._1);
    };
    return (0, r.jsx)(s.ThemeProvider, {
        theme: C,
        children: (e) =>
            (0, r.jsx)(o.Z, {
                guildId: null != n ? n : void 0,
                closePopout: m.dG,
                onSelectEmoji: async (e, t) => {
                    await D(e),
                        t &&
                            (null == g ||
                                g({
                                    interactionType: null,
                                    interactionSourceType: null
                                }),
                            null == R || R());
                },
                pickerIntention: p.Hz.PROFILE,
                className: e,
                headerClassName: e,
                listHeaderClassName: e,
                categoryListClassName: e
            })
    });
}
