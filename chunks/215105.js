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
                return null != i ? ''.concat(A.jd).concat(o, '*').concat('\n > '.concat(i), '\n').concat(t) : ''.concat(A.jd).concat(o, '*\n').concat(t);
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
    let { user: t, guildId: n, channelId: a, profileType: o, sourceType: h, sourceDetails: p, onInteraction: R, setPopoutRef: D, modalKey: b, setInteractionToastShown: M, setInteractionSent: P, setIsReplyInteraction: U, onClose: w } = e,
        { trackUserProfileAction: x } = (0, T.KZ)(),
        G = (0, l.e7)([f.Z], () => f.Z.theme),
        { sendReply: k } = (0, S.Q)(h),
        [B, F] = i.useState(''),
        [V, H] = i.useState((0, _.JM)(B)),
        Z = i.useRef(!1),
        Y = i.useRef(null),
        j = i.useCallback(
            (e) => {
                e.key === O.vn.ESCAPE &&
                    (e.stopPropagation(),
                    null == R ||
                        R({
                            interactionType: null,
                            interactionSourceType: null
                        }),
                    null == w || w());
            },
            [w, R]
        );
    i.useEffect(() => {
        null == D || D(null == Y ? void 0 : Y.current);
    }, [Y, D]);
    let W = async (e) => {
            if (null == e) return;
            x({ action: k });
            let n = y({
                input: e,
                username: m.ZP.getName(t),
                sourceType: h,
                sourceDetails: p
            });
            U(!0), P(!1), M(!0);
            try {
                await (0, g.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReactReplyBar',
                    openChannel: !1,
                    whenReady: !1
                });
            } catch (e) {}
            P(!0),
                setTimeout(() => {
                    M(!1);
                }, A._1);
        },
        K = {
            [v.biteSize]: o === N.y0.BITE_SIZE,
            [v.panel]: o === N.y0.PANEL
        },
        z = {
            [v.status]: h === N.n_.STATUS,
            [v.avatar]: h === N.n_.AVATAR
        };
    return (0, r.jsx)(u.V, {
        ref: Y,
        onKeyDown: j,
        children: (0, r.jsx)(c.ThemeProvider, {
            theme: G,
            children: (e) =>
                (0, r.jsx)('div', {
                    className: s()(v.container, K, z, e),
                    children: (0, r.jsx)(E.Z, {
                        parentModalKey: b,
                        emojiPickerCloseOnModalOuterClick: !0,
                        innerClassName: v.inner,
                        editorClassName: v.editor,
                        type: d.I.USER_PROFILE_REPLY,
                        placeholder: L(h).format({ username: I.ZP.getName(n, a, t) }),
                        channel: C,
                        textValue: B,
                        richValue: V,
                        onChange: (e, t, n) => {
                            if (t !== B) F(t), H(n);
                        },
                        focused: Z.current,
                        onFocus: () => {
                            Z.current = !0;
                        },
                        onBlur: (e) => {
                            var t;
                            if (null === (t = Y.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) {
                                Z.current = !1;
                                return;
                            }
                            null !== Y.current &&
                                ((Z.current = !1),
                                null == R ||
                                    R({
                                        interactionType: null,
                                        interactionSourceType: null
                                    }),
                                null == w || w());
                        },
                        onSubmit: async (e) => {
                            let { value: t } = e;
                            try {
                                return (
                                    await W(t.trim()),
                                    null == R ||
                                        R({
                                            interactionType: null,
                                            interactionSourceType: null
                                        }),
                                    null == w || w(),
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
