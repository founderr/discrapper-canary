n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(106351),
    l = n(507274),
    u = n(541716),
    c = n(752305),
    d = n(893718),
    _ = n(131704),
    E = n(823379),
    f = n(5192),
    h = n(51144),
    p = n(785717),
    I = n(448197),
    m = n(698305),
    T = n(510659),
    S = n(825801),
    g = n(228168),
    A = n(420212),
    N = n(689938),
    O = n(639899);
let R = (0, _.kt)({
        id: '1',
        type: o.d.DM
    }),
    v = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case g.n_.ACTIVITY:
                let a = N.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({ username: n });
                return ''.concat(S.jd).concat(a, '*\n').concat(t);
            case g.n_.AVATAR:
                let s = N.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({ username: n });
                return ''.concat(S.jd).concat(s, '*\n').concat(t);
            case g.n_.STATUS:
                let o = N.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({ username: n });
                return null != i ? ''.concat(S.jd).concat(o, '*').concat('\n> '.concat(i), '\n').concat(t) : ''.concat(S.jd).concat(o, '*\n').concat(t);
            default:
                (0, E.vE)(r);
        }
    },
    C = (e) => {
        switch (e) {
            case g.n_.ACTIVITY:
                return N.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_PLACEHOLDER;
            case g.n_.AVATAR:
                return N.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_PLACEHOLDER;
            case g.n_.STATUS:
                return N.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_PLACEHOLDER;
            default:
                (0, E.vE)(e);
        }
    };
function y(e) {
    let { user: t, guildId: n, channelId: a, profileType: o, sourceType: _, sourceDetails: E, setPopoutRef: N, modalKey: y, onClose: L } = e,
        { trackUserProfileAction: D } = (0, p.KZ)(),
        { sendReply: b } = (0, I.Q)(_),
        { resetInteraction: M, setInteractionToastShown: P, setInteractionTypeSent: U } = (0, T.X)(),
        [w, x] = i.useState(''),
        [G, k] = i.useState((0, c.JM)(w)),
        B = i.useRef(!1),
        F = i.useRef(null),
        V = i.useCallback(
            (e) => {
                e.key === A.vn.ESCAPE && (e.stopPropagation(), M(), null == L || L());
            },
            [M, L]
        );
    i.useEffect(() => {
        null == N || N(null == F ? void 0 : F.current);
    }, [F, N]);
    let H = async (e) => {
            if (null == e) return;
            D({ action: b });
            let n = v({
                input: e,
                username: h.ZP.getName(t),
                sourceType: _,
                sourceDetails: E
            });
            U(null), P(!0);
            try {
                await (0, m.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReactReplyBar',
                    openChannel: !1,
                    whenReady: !1
                });
            } catch (e) {}
            U(g.P.REPLY),
                setTimeout(() => {
                    P(!1);
                }, S._1);
        },
        Z = {
            [O.biteSize]: o === g.y0.BITE_SIZE,
            [O.panel]: o === g.y0.PANEL
        },
        Y = {
            [O.status]: _ === g.n_.STATUS,
            [O.avatar]: _ === g.n_.AVATAR
        };
    return (0, r.jsx)(l.V, {
        ref: F,
        onKeyDown: V,
        children: (0, r.jsx)('div', {
            className: s()(O.container, Z, Y),
            children: (0, r.jsx)(d.Z, {
                parentModalKey: y,
                emojiPickerCloseOnModalOuterClick: !0,
                innerClassName: O.inner,
                editorClassName: O.editor,
                type: u.I.USER_PROFILE_REPLY,
                placeholder: C(_).format({ username: f.ZP.getName(n, a, t) }),
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
                onBlur: (e) => {
                    var t;
                    if (null === (t = F.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) {
                        B.current = !1;
                        return;
                    }
                    null !== F.current && ((B.current = !1), M(), null == L || L());
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
                            await H(n),
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
