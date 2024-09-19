n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(907040),
    s = n(823379),
    o = n(51144),
    l = n(785717),
    u = n(448197),
    c = n(698305),
    d = n(825801),
    _ = n(228168),
    E = n(185923),
    f = n(420212),
    h = n(231338),
    p = n(689938);
let I = (e) => {
    let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
        a = ':'.concat(t.name, ':');
    switch (r) {
        case _.n_.ACTIVITY:
            let o = p.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({ username: n });
            return ''.concat(d.jd).concat(o, '*\n').concat(a);
        case _.n_.AVATAR:
            let l = p.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({ username: n });
            return ''.concat(d.jd).concat(l, '*\n').concat(a);
        case _.n_.STATUS:
            let u = p.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({ username: n });
            return null != i ? ''.concat(d.jd).concat(u, '*').concat('\n> '.concat(i), '\n').concat(a) : ''.concat(d.jd).concat(u, '*\n').concat(a);
        default:
            (0, s.vE)(r);
    }
};
function m(e) {
    let { user: t, guildId: n, sourceType: s, sourceDetails: p, onInteraction: m, setPopoutRef: T, setInteractionToastShown: S, setInteractionTypeSent: g, onClose: A } = e,
        { trackUserProfileAction: N } = (0, l.KZ)(),
        { sendReact: O } = (0, u.Q)(s),
        R = i.useRef(null);
    i.useEffect(() => {
        null == T || T(null == R ? void 0 : R.current);
    }, [R, T]),
        i.useEffect(() => {
            let e = (e) => {
                e.key === f.vn.ESCAPE &&
                    (e.stopPropagation(),
                    null == m ||
                        m({
                            interactionType: null,
                            interactionSourceType: null
                        }),
                    null == A || A());
            };
            return (
                document.addEventListener('keydown', e),
                () => {
                    document.removeEventListener('keydown', e);
                }
            );
        }, [A, m]);
    let v = async (e) => {
        if (null == e) return;
        N({ action: O });
        let n = I({
            emoji: e,
            username: o.ZP.getName(t),
            sourceType: s,
            sourceDetails: p
        });
        g(null), S(!0);
        try {
            await (0, c.Z)({
                userId: t.id,
                content: n,
                location: 'UserProfileReactReplyBar',
                openChannel: !1,
                whenReady: !1
            });
        } catch (e) {}
        g(_.P.REACT),
            setTimeout(() => {
                S(!1);
            }, d._1);
    };
    return (0, r.jsx)(a.Z, {
        guildId: null != n ? n : void 0,
        closePopout: h.dG,
        onSelectEmoji: async (e, t) => {
            await v(e),
                t &&
                    (null == m ||
                        m({
                            interactionType: null,
                            interactionSourceType: null
                        }),
                    null == A || A());
        },
        pickerIntention: E.Hz.PROFILE
    });
}
