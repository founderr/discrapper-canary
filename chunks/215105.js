n.d(t, {
    Z: function () {
        return L;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(106351),
    u = n(507274),
    c = n(541716),
    d = n(752305),
    _ = n(893718),
    E = n(131704),
    f = n(823379),
    h = n(5192),
    p = n(51144),
    m = n(785717),
    I = n(448197),
    T = n(698305),
    g = n(510659),
    S = n(825801),
    A = n(228168),
    v = n(420212),
    N = n(689938),
    O = n(639899);
let R = (0, E.kt)({
        id: '1',
        type: l.d.DM
    }),
    C = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case A.n_.ACTIVITY:
                let a = N.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({ username: n });
                return ''.concat(S.jd).concat(a, '*\n').concat(t);
            case A.n_.AVATAR:
                let o = N.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({ username: n });
                return ''.concat(S.jd).concat(o, '*\n').concat(t);
            case A.n_.STATUS:
                let s = N.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({ username: n }),
                    l = '\n> '.concat(i);
                return null != i ? ''.concat(S.jd).concat(s, '*').concat(l, '\n').concat(t) : ''.concat(S.jd).concat(s, '*\n').concat(t);
            default:
                (0, f.vE)(r);
        }
    },
    y = (e) => {
        switch (e) {
            case A.n_.ACTIVITY:
                return N.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_PLACEHOLDER;
            case A.n_.AVATAR:
                return N.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_PLACEHOLDER;
            case A.n_.STATUS:
                return N.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_PLACEHOLDER;
            default:
                (0, f.vE)(e);
        }
    };
function L(e) {
    let { user: t, guildId: n, channelId: r, profileType: o, sourceType: l, sourceDetails: E, setPopoutRef: f, modalKey: N, onClose: L } = e,
        { trackUserProfileAction: b } = (0, m.KZ)(),
        { sendReply: D } = (0, I.Q)(l),
        { resetInteraction: M, setInteractionToastShown: P, setInteractionTypeSent: U } = (0, g.Xo)(),
        [w, x] = a.useState(''),
        [G, k] = a.useState((0, d.JM)(w)),
        B = a.useRef(!1),
        F = a.useRef(null),
        Z = a.useCallback(
            (e) => {
                e.key === v.vn.ESCAPE && (e.stopPropagation(), M());
            },
            [M]
        );
    a.useEffect(() => {
        null == f || f(null == F ? void 0 : F.current);
    }, [F, f]);
    let V = async (e) => {
            if (null == e) return;
            b({ action: D });
            let n = C({
                input: e,
                username: p.ZP.getName(t),
                sourceType: l,
                sourceDetails: E
            });
            U(null), P(!0);
            try {
                await (0, T.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReactReplyBar',
                    openChannel: !1,
                    whenReady: !1
                });
            } catch (e) {}
            U(A.P.REPLY),
                setTimeout(() => {
                    P(!1);
                }, S._1);
        },
        H = {
            [O.biteSize]: o === A.y0.BITE_SIZE,
            [O.panel]: o === A.y0.PANEL
        },
        Y = {
            [O.status]: l === A.n_.STATUS,
            [O.avatar]: l === A.n_.AVATAR
        };
    return (0, i.jsx)(u.V, {
        ref: F,
        onKeyDown: Z,
        children: (0, i.jsx)('div', {
            className: s()(O.container, H, Y),
            children: (0, i.jsx)(_.Z, {
                parentModalKey: N,
                emojiPickerCloseOnModalOuterClick: !0,
                innerClassName: O.inner,
                editorClassName: O.editor,
                type: c.I.USER_PROFILE_REPLY,
                placeholder: y(l).format({ username: h.ZP.getName(n, r, t) }),
                channel: R,
                textValue: w,
                richValue: G,
                onChange: (e, t, n) => {
                    if (t !== w) x(t), k(n);
                },
                focused: B.current,
                onFocus: () => {
                    B.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: t } = e,
                        n = t.trim();
                    if (0 === n.length)
                        return {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                    try {
                        return (
                            await V(n),
                            M(),
                            null == L || L(),
                            {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        );
                    } catch {
                        return {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                    }
                }
            })
        })
    });
}
