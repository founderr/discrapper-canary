n.d(t, {
    Z: function () {
        return C;
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
    T = n(825801),
    S = n(228168),
    g = n(420212),
    A = n(689938),
    N = n(639899);
let O = (0, _.kt)({
        id: '1',
        type: o.d.DM
    }),
    R = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case S.n_.ACTIVITY:
                let a = A.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({ username: n });
                return ''.concat(T.jd).concat(a, '*\n').concat(t);
            case S.n_.AVATAR:
                let s = A.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({ username: n });
                return ''.concat(T.jd).concat(s, '*\n').concat(t);
            case S.n_.STATUS:
                let o = A.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({ username: n });
                return null != i ? ''.concat(T.jd).concat(o, '*').concat('\n> '.concat(i), '\n').concat(t) : ''.concat(T.jd).concat(o, '*\n').concat(t);
            default:
                (0, E.vE)(r);
        }
    },
    v = (e) => {
        switch (e) {
            case S.n_.ACTIVITY:
                return A.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_PLACEHOLDER;
            case S.n_.AVATAR:
                return A.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_PLACEHOLDER;
            case S.n_.STATUS:
                return A.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_PLACEHOLDER;
            default:
                (0, E.vE)(e);
        }
    };
function C(e) {
    let { user: t, guildId: n, channelId: a, profileType: o, sourceType: _, sourceDetails: E, onInteraction: A, setPopoutRef: C, modalKey: y, setInteractionToastShown: L, setInteractionTypeSent: D, onClose: b } = e,
        { trackUserProfileAction: M } = (0, p.KZ)(),
        { sendReply: P } = (0, I.Q)(_),
        [U, w] = i.useState(''),
        [x, G] = i.useState((0, c.JM)(U)),
        k = i.useRef(!1),
        B = i.useRef(null),
        F = i.useCallback(
            (e) => {
                e.key === g.vn.ESCAPE &&
                    (e.stopPropagation(),
                    null == A ||
                        A({
                            interactionType: null,
                            interactionSourceType: null
                        }),
                    null == b || b());
            },
            [b, A]
        );
    i.useEffect(() => {
        null == C || C(null == B ? void 0 : B.current);
    }, [B, C]);
    let V = async (e) => {
            if (null == e) return;
            M({ action: P });
            let n = R({
                input: e,
                username: h.ZP.getName(t),
                sourceType: _,
                sourceDetails: E
            });
            D(null), L(!0);
            try {
                await (0, m.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReactReplyBar',
                    openChannel: !1,
                    whenReady: !1
                });
            } catch (e) {}
            D(S.P.REPLY),
                setTimeout(() => {
                    L(!1);
                }, T._1);
        },
        H = {
            [N.biteSize]: o === S.y0.BITE_SIZE,
            [N.panel]: o === S.y0.PANEL
        },
        Z = {
            [N.status]: _ === S.n_.STATUS,
            [N.avatar]: _ === S.n_.AVATAR
        };
    return (0, r.jsx)(l.V, {
        ref: B,
        onKeyDown: F,
        children: (0, r.jsx)('div', {
            className: s()(N.container, H, Z),
            children: (0, r.jsx)(d.Z, {
                parentModalKey: y,
                emojiPickerCloseOnModalOuterClick: !0,
                innerClassName: N.inner,
                editorClassName: N.editor,
                type: u.I.USER_PROFILE_REPLY,
                placeholder: v(_).format({ username: f.ZP.getName(n, a, t) }),
                channel: O,
                textValue: U,
                richValue: x,
                onChange: (e, t, n) => {
                    if (t !== U) w(t), G(n);
                },
                focused: k.current,
                onFocus: () => {
                    k.current = !0;
                },
                onBlur: (e) => {
                    var t;
                    if (null === (t = B.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) {
                        k.current = !1;
                        return;
                    }
                    null !== B.current &&
                        ((k.current = !1),
                        null == A ||
                            A({
                                interactionType: null,
                                interactionSourceType: null
                            }),
                        null == b || b());
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
                            null == A ||
                                A({
                                    interactionType: null,
                                    interactionSourceType: null
                                }),
                            null == b || b(),
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
