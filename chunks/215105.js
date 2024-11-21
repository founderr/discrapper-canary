n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(106351),
    l = n(507274),
    u = n(541716),
    c = n(752305),
    d = n(893718),
    f = n(131704),
    _ = n(823379),
    p = n(5192),
    h = n(51144),
    m = n(785717),
    g = n(448197),
    E = n(698305),
    v = n(510659),
    I = n(810097),
    b = n(652853),
    T = n(228168),
    S = n(420212),
    y = n(388032),
    A = n(639899);
let N = (0, f.kt)({
        id: '1',
        type: o.d.DM
    }),
    C = (e) => {
        let { input: t, username: n, sourceType: r, sourceDetails: i } = e;
        switch (r) {
            case T.n_.ACTIVITY:
                let a = y.intl.formatToPlainString(y.t.WmvMCg, { username: n }),
                    s = '\n> '.concat(i);
                return null != i ? ''.concat(I.jd).concat(a, '*').concat(s, '\n').concat(t) : ''.concat(I.jd).concat(a, '*\n').concat(t);
            case T.n_.AVATAR:
                let o = y.intl.formatToPlainString(y.t.lpaBsL, { username: n });
                return ''.concat(I.jd).concat(o, '*\n').concat(t);
            case T.n_.STATUS:
                let l = y.intl.formatToPlainString(y.t.lFXgFR, { username: n }),
                    u = '\n> '.concat(i);
                return null != i ? ''.concat(I.jd).concat(l, '*').concat(u, '\n').concat(t) : ''.concat(I.jd).concat(l, '*\n').concat(t);
            default:
                (0, _.vE)(r);
        }
    },
    R = (e) => {
        switch (e) {
            case T.n_.ACTIVITY:
                return y.t.Qn081N;
            case T.n_.AVATAR:
                return y.t.xGNPFB;
            case T.n_.STATUS:
                return y.t.g9BTCA;
            default:
                (0, _.vE)(e);
        }
    };
function O(e) {
    let { user: t, guildId: n, channelId: a, profileType: o, sourceType: f, sourceDetails: _, setPopoutRef: I, modalKey: O, onClose: D, entry: L } = e,
        { trackUserProfileAction: x } = (0, m.KZ)(),
        { sendReply: w } = (0, g.Q)(f),
        { resetInteraction: M, setInteractionToast: P } = (0, v.Xo)(),
        { primaryColor: k } = (0, b.z)(),
        [U, G] = i.useState(''),
        [B, Z] = i.useState((0, c.JM)(U)),
        F = i.useRef(!1),
        V = i.useRef(null),
        j = i.useCallback(
            (e) => {
                e.key === S.vn.ESCAPE && (e.stopPropagation(), M());
            },
            [M]
        );
    i.useEffect(() => {
        null == I || I(null == V ? void 0 : V.current);
    }, [V, I]);
    let H = async (e) => {
            if (null == e) return;
            x({ action: w });
            let n = C({
                input: e,
                username: h.ZP.getName(t),
                sourceType: f,
                sourceDetails: _
            });
            P(null);
            try {
                await (0, E.Z)({
                    userId: t.id,
                    content: n,
                    location: 'UserProfileReplyPopout',
                    openChannel: !1,
                    whenReady: !1,
                    entry: L
                });
            } catch (e) {}
            P(T.P.REPLY);
        },
        Y = {
            [A.biteSize]: o === T.y0.BITE_SIZE,
            [A.panel]: o === T.y0.PANEL,
            [A.fullSize]: o === T.y0.FULL_SIZE
        },
        W = {
            [A.status]: f === T.n_.STATUS,
            [A.avatar]: f === T.n_.AVATAR,
            [A.activity]: f === T.n_.ACTIVITY
        };
    return (0, r.jsx)(l.V, {
        ref: V,
        onKeyDown: j,
        children: (0, r.jsx)('div', {
            className: s()(A.container, Y, W, { [A.customProfileTheme]: null != k }),
            children: (0, r.jsx)(d.Z, {
                parentModalKey: O,
                emojiPickerCloseOnModalOuterClick: !0,
                innerClassName: A.inner,
                editorClassName: A.editor,
                type: u.I.USER_PROFILE_REPLY,
                placeholder: y.intl.formatToPlainString(R(f), { username: p.ZP.getName(n, a, t) }),
                channel: N,
                textValue: U,
                richValue: B,
                onChange: (e, t, n) => {
                    if (t !== U) G(t), Z(n);
                },
                focused: F.current,
                onFocus: () => {
                    F.current = !0;
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
                            null == D || D(),
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
