n.d(t, {
    Z: function () {
        return b;
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
    A = n(652853),
    v = n(228168),
    N = n(420212),
    O = n(689938),
    R = n(639899);
let C = (0, E.kt)({
        id: '1',
        type: l.d.DM
    }),
    y = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case v.n_.ACTIVITY:
                let a = O.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({ username: n });
                return ''.concat(S.jd).concat(a, '*\n').concat(t);
            case v.n_.AVATAR:
                let o = O.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({ username: n });
                return ''.concat(S.jd).concat(o, '*\n').concat(t);
            case v.n_.STATUS:
                let s = O.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({ username: n }),
                    l = '\n> '.concat(i);
                return null != i ? ''.concat(S.jd).concat(s, '*').concat(l, '\n').concat(t) : ''.concat(S.jd).concat(s, '*\n').concat(t);
            default:
                (0, f.vE)(r);
        }
    },
    L = (e) => {
        switch (e) {
            case v.n_.ACTIVITY:
                return O.Z.Messages.USER_PROFILE_REPLY_TO_ACTIVITY_PLACEHOLDER;
            case v.n_.AVATAR:
                return O.Z.Messages.USER_PROFILE_REPLY_TO_AVATAR_PLACEHOLDER;
            case v.n_.STATUS:
                return O.Z.Messages.USER_PROFILE_REPLY_TO_STATUS_PLACEHOLDER;
            default:
                (0, f.vE)(e);
        }
    };
function b(e) {
    let { user: t, guildId: n, channelId: r, profileType: o, sourceType: l, sourceDetails: E, setPopoutRef: f, modalKey: O, onClose: b } = e,
        { trackUserProfileAction: D } = (0, m.KZ)(),
        { sendReply: M } = (0, I.Q)(l),
        { resetInteraction: P, setInteractionToastShown: U, setInteractionTypeSent: w } = (0, g.Xo)(),
        { primaryColor: x } = (0, A.z)(),
        [G, k] = a.useState(''),
        [B, F] = a.useState((0, d.JM)(G)),
        Z = a.useRef(!1),
        V = a.useRef(null),
        H = a.useCallback(
            (e) => {
                e.key === N.vn.ESCAPE && (e.stopPropagation(), P());
            },
            [P]
        );
    a.useEffect(() => {
        null == f || f(null == V ? void 0 : V.current);
    }, [V, f]);
    let Y = async (e) => {
            if (null == e) return;
            D({ action: M });
            let n = y({
                input: e,
                username: p.ZP.getName(t),
                sourceType: l,
                sourceDetails: E
            });
            w(null), U(!0);
            try {
                await (0, T.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReactReplyBar',
                    openChannel: !1,
                    whenReady: !1
                });
            } catch (e) {}
            w(v.P.REPLY),
                setTimeout(() => {
                    U(!1);
                }, S._1);
        },
        j = {
            [R.biteSize]: o === v.y0.BITE_SIZE,
            [R.panel]: o === v.y0.PANEL
        },
        W = {
            [R.status]: l === v.n_.STATUS,
            [R.avatar]: l === v.n_.AVATAR
        };
    return (0, i.jsx)(u.V, {
        ref: V,
        onKeyDown: H,
        children: (0, i.jsx)('div', {
            className: s()(R.container, j, W, { [R.customProfileTheme]: null != x }),
            children: (0, i.jsx)(_.Z, {
                parentModalKey: O,
                emojiPickerCloseOnModalOuterClick: !0,
                innerClassName: R.inner,
                editorClassName: R.editor,
                type: c.I.USER_PROFILE_REPLY,
                placeholder: L(l).format({ username: h.ZP.getName(n, r, t) }),
                channel: C,
                textValue: G,
                richValue: B,
                onChange: (e, t, n) => {
                    if (t !== G) k(t), F(n);
                },
                focused: Z.current,
                onFocus: () => {
                    Z.current = !0;
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
                            await Y(n),
                            P(),
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
