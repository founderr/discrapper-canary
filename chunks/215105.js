n.d(t, {
    Z: function () {
        return v;
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
    I = n(790286),
    m = n(485216),
    T = n(825801),
    g = n(228168),
    S = n(689938),
    A = n(227795);
let N = (0, _.kt)({
        id: '1',
        type: o.d.DM
    }),
    O = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case g.n_.ACTIVITY:
                let a = S.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({ username: n });
                return '> -# *'.concat(a, '*\n').concat(t);
            case g.n_.AVATAR:
                let s = S.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({ username: n });
                return '> -# *'.concat(s, '*\n').concat(t);
            case g.n_.STATUS:
                let o = S.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({ username: n });
                return null != i ? '> -# *'.concat(o, '*').concat('\n > '.concat(i), '\n').concat(t) : '> -# *'.concat(o, '*\n').concat(t);
            default:
                (0, E.vE)(r);
        }
    },
    R = (e) => {
        switch (e) {
            case g.n_.ACTIVITY:
                return S.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_PLACEHOLDER;
            case g.n_.AVATAR:
                return S.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_PLACEHOLDER;
            case g.n_.STATUS:
                return S.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_PLACEHOLDER;
            default:
                (0, E.vE)(e);
        }
    };
function v(e) {
    let { user: t, guildId: n, channelId: a, profileType: o, sourceType: _, sourceDetails: E, onInteraction: S, setPopoutRef: v, modalKey: C, setInteractionToastShown: y, setInteractionSent: L, setIsReplyInteraction: D, onClose: b } = e,
        { trackUserProfileAction: M } = (0, p.KZ)(),
        { sendReply: P } = (0, I.Q)(_),
        [U, w] = i.useState(''),
        [x, G] = i.useState((0, c.JM)(U)),
        k = i.useRef(!1),
        B = i.useRef(null);
    i.useEffect(() => {
        null == v || v(null == B ? void 0 : B.current);
    }, [B, v]);
    let F = async (e) => {
            if (null == e) return;
            M({ action: P });
            let n = O({
                input: e,
                username: h.ZP.getName(t),
                sourceType: _,
                sourceDetails: E
            });
            D(!0), L(!1), y(!0);
            try {
                await (0, m.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReactReplyBar',
                    openChannel: !1,
                    whenReady: !1
                });
            } catch (e) {}
            L(!0),
                setTimeout(() => {
                    y(!1);
                }, T._);
        },
        V = {
            [A.biteSize]: o === g.y0.BITE_SIZE,
            [A.panel]: o === g.y0.PANEL
        },
        H = {
            [A.status]: _ === g.n_.STATUS,
            [A.avatar]: _ === g.n_.AVATAR
        };
    return (0, r.jsx)(l.V, {
        ref: B,
        children: (0, r.jsx)('div', {
            className: s()(A.container, V, H),
            children: (0, r.jsx)(d.Z, {
                parentModalKey: C,
                emojiPickerCloseOnModalOuterClick: !0,
                innerClassName: A.inner,
                editorClassName: A.editor,
                type: u.I.USER_PROFILE_REPLY,
                placeholder: R(_).format({ username: f.ZP.getName(n, a, t) }),
                channel: N,
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
                        null == S ||
                            S({
                                interactionType: null,
                                interactionSourceType: null
                            }),
                        null == b || b());
                },
                onSubmit: async (e) => {
                    let { value: t } = e;
                    try {
                        return (
                            await F(t.trim()),
                            null == S ||
                                S({
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
