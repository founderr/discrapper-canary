n.d(t, {
    Z: function () {
        return N;
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
    f = n(825801),
    h = n(652853),
    p = n(228168),
    I = n(185923),
    m = n(420212),
    T = n(231338),
    S = n(689938),
    g = n(209960);
let A = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        a = ':'.concat(t.name, ':');
    switch (r) {
        case p.n_.ACTIVITY:
            let s = S.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({ username: n });
            return ''.concat(f.jd).concat(s, '*\n').concat(a);
        case p.n_.AVATAR:
            let o = S.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({ username: n });
            return ''.concat(f.jd).concat(o, '*\n').concat(a);
        case p.n_.STATUS:
            let l = S.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({ username: n });
            return null != i ? ''.concat(f.jd).concat(l, '*').concat('\n> '.concat(i), '\n').concat(a) : ''.concat(f.jd).concat(l, '*\n').concat(a);
        default:
            (0, u.vE)(r);
    }
};
function N(e) {
    let { user: t, guildId: n, sourceType: u, sourceDetails: S, onInteraction: N, setPopoutRef: O, setInteractionToastShown: R, setInteractionTypeSent: v, onClose: C } = e,
        { trackUserProfileAction: y } = (0, d.KZ)(),
        { sendReact: L } = (0, _.Q)(u),
        { theme: D } = (0, h.z)(),
        b = (0, a.e7)([l.Z], () => l.Z.theme),
        M = (0, s.wj)(b) ? !(0, s.wj)(D) : (0, s.wj)(D),
        P = i.useRef(null);
    i.useEffect(() => {
        null == O || O(null == P ? void 0 : P.current);
    }, [P, O]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === m.vn.ESCAPE &&
                    (e.stopPropagation(),
                    null == N ||
                        N({
                            interactionType: null,
                            interactionSourceType: null
                        }),
                    null == C || C());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [C, N]);
    let U = async (e) => {
        if (null == e) return;
        y({ action: L });
        let n = A({
            emoji: e,
            username: c.ZP.getName(t),
            sourceType: u,
            sourceDetails: S
        });
        v(null), R(!0);
        try {
            await (0, E.Z)({
                userId: t.id,
                content: n,
                location: 'UserProfileReactReplyBar',
                openChannel: !1,
                whenReady: !1
            });
        } catch (e) {}
        v(p.P.REACT),
            setTimeout(() => {
                R(!1);
            }, f._1);
    };
    return (0, r.jsx)(o.Z, {
        headerClassName: M ? g.noBoxShadowMargin : void 0,
        guildId: null != n ? n : void 0,
        closePopout: T.dG,
        onSelectEmoji: async (e, t) => {
            await U(e),
                t &&
                    (null == N ||
                        N({
                            interactionType: null,
                            interactionSourceType: null
                        }),
                    null == C || C());
        },
        pickerIntention: I.Hz.PROFILE
    });
}
