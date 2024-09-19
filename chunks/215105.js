n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(106351),
    l = n(399606),
    u = n(507274),
    c = n(481060),
    d = n(541716),
    _ = n(752305),
    E = n(893718),
    f = n(210887),
    h = n(131704),
    p = n(823379),
    I = n(5192),
    m = n(51144),
    T = n(785717),
    S = n(448197),
    g = n(698305),
    A = n(825801),
    N = n(228168),
    O = n(420212),
    R = n(689938),
    v = n(639899);
let C = (0, h.kt)({
        id: '1',
        type: o.d.DM
    }),
    y = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case N.n_.ACTIVITY:
                let a = R.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({ username: n });
                return ''.concat(A.jd).concat(a, '*\n').concat(t);
            case N.n_.AVATAR:
                let s = R.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({ username: n });
                return ''.concat(A.jd).concat(s, '*\n').concat(t);
            case N.n_.STATUS:
                let o = R.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({ username: n });
                return null != i ? ''.concat(A.jd).concat(o, '*').concat('\n> '.concat(i), '\n').concat(t) : ''.concat(A.jd).concat(o, '*\n').concat(t);
            default:
                (0, p.vE)(r);
        }
    },
    L = (e) => {
        switch (e) {
            case N.n_.ACTIVITY:
                return R.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_PLACEHOLDER;
            case N.n_.AVATAR:
                return R.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_PLACEHOLDER;
            case N.n_.STATUS:
                return R.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_PLACEHOLDER;
            default:
                (0, p.vE)(e);
        }
    };
function D(e) {
    let { user: t, guildId: n, channelId: a, profileType: o, sourceType: h, sourceDetails: p, onInteraction: R, setPopoutRef: D, modalKey: b, setInteractionToastShown: M, setInteractionTypeSent: P, onClose: U } = e,
        { trackUserProfileAction: w } = (0, T.KZ)(),
        x = (0, l.e7)([f.Z], () => f.Z.theme),
        { sendReply: G } = (0, S.Q)(h),
        [k, B] = i.useState(''),
        [F, V] = i.useState((0, _.JM)(k)),
        H = i.useRef(!1),
        Z = i.useRef(null),
        Y = i.useCallback(
            (e) => {
                e.key === O.vn.ESCAPE &&
                    (e.stopPropagation(),
                    null == R ||
                        R({
                            interactionType: null,
                            interactionSourceType: null
                        }),
                    null == U || U());
            },
            [U, R]
        );
    i.useEffect(() => {
        null == D || D(null == Z ? void 0 : Z.current);
    }, [Z, D]);
    let j = async (e) => {
            if (null == e) return;
            w({ action: G });
            let n = y({
                input: e,
                username: m.ZP.getName(t),
                sourceType: h,
                sourceDetails: p
            });
            P(null), M(!0);
            try {
                await (0, g.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReactReplyBar',
                    openChannel: !1,
                    whenReady: !1
                });
            } catch (e) {}
            P(N.P.REPLY),
                setTimeout(() => {
                    M(!1);
                }, A._1);
        },
        W = {
            [v.biteSize]: o === N.y0.BITE_SIZE,
            [v.panel]: o === N.y0.PANEL
        },
        K = {
            [v.status]: h === N.n_.STATUS,
            [v.avatar]: h === N.n_.AVATAR
        };
    return (0, r.jsx)(u.V, {
        ref: Z,
        onKeyDown: Y,
        children: (0, r.jsx)(c.ThemeProvider, {
            theme: x,
            children: (e) =>
                (0, r.jsx)('div', {
                    className: s()(v.container, W, K, e),
                    children: (0, r.jsx)(E.Z, {
                        parentModalKey: b,
                        emojiPickerCloseOnModalOuterClick: !0,
                        innerClassName: v.inner,
                        editorClassName: v.editor,
                        type: d.I.USER_PROFILE_REPLY,
                        placeholder: L(h).format({ username: I.ZP.getName(n, a, t) }),
                        channel: C,
                        textValue: k,
                        richValue: F,
                        onChange: (e, t, n) => {
                            if (t !== k) B(t), V(n);
                        },
                        focused: H.current,
                        onFocus: () => {
                            H.current = !0;
                        },
                        onBlur: (e) => {
                            var t;
                            if (null === (t = Z.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) {
                                H.current = !1;
                                return;
                            }
                            null !== Z.current &&
                                ((H.current = !1),
                                null == R ||
                                    R({
                                        interactionType: null,
                                        interactionSourceType: null
                                    }),
                                null == U || U());
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
                                    await j(n),
                                    null == R ||
                                        R({
                                            interactionType: null,
                                            interactionSourceType: null
                                        }),
                                    null == U || U(),
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
        })
    });
}
