r.d(n, {
    Z: function () {
        return L;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(106351),
    c = r(507274),
    d = r(541716),
    f = r(752305),
    _ = r(893718),
    h = r(131704),
    p = r(823379),
    m = r(5192),
    g = r(51144),
    E = r(785717),
    v = r(448197),
    I = r(698305),
    T = r(510659),
    b = r(810097),
    y = r(652853),
    S = r(228168),
    A = r(420212),
    N = r(388032),
    C = r(583677);
let R = (0, h.kt)({
        id: '1',
        type: u.d.DM
    }),
    O = (e) => {
        let { input: n, username: r, sourceType: i, sourceDetails: a } = e;
        switch (i) {
            case S.n_.ACTIVITY:
                let s = N.intl.formatToPlainString(N.t.WmvMCg, { username: r }),
                    o = '\n> '.concat(a);
                return null != a ? ''.concat(b.jd).concat(s, '*').concat(o, '\n').concat(n) : ''.concat(b.jd).concat(s, '*\n').concat(n);
            case S.n_.AVATAR:
                let l = N.intl.formatToPlainString(N.t.lpaBsL, { username: r });
                return ''.concat(b.jd).concat(l, '*\n').concat(n);
            case S.n_.STATUS:
                let u = N.intl.formatToPlainString(N.t.lFXgFR, { username: r }),
                    c = '\n> '.concat(a);
                return null != a ? ''.concat(b.jd).concat(u, '*').concat(c, '\n').concat(n) : ''.concat(b.jd).concat(u, '*\n').concat(n);
            default:
                (0, p.vE)(i);
        }
    },
    D = (e) => {
        switch (e) {
            case S.n_.ACTIVITY:
                return N.t.Qn081N;
            case S.n_.AVATAR:
                return N.t.xGNPFB;
            case S.n_.STATUS:
                return N.t.g9BTCA;
            default:
                (0, p.vE)(e);
        }
    };
function L(e) {
    let { user: n, guildId: r, channelId: i, profileType: o, sourceType: u, sourceDetails: h, setPopoutRef: p, modalKey: b, onClose: L, entry: x } = e,
        { trackUserProfileAction: w } = (0, E.KZ)(),
        { sendReply: P } = (0, v.Q)(u),
        { resetInteraction: M, setInteractionToast: k } = (0, T.Xo)(),
        { primaryColor: U } = (0, y.z)(),
        [B, G] = s.useState(''),
        [Z, F] = s.useState((0, f.JM)(B)),
        V = s.useRef(!1),
        j = s.useRef(null),
        H = s.useCallback(
            (e) => {
                e.key === A.vn.ESCAPE && (e.stopPropagation(), M());
            },
            [M]
        );
    s.useEffect(() => {
        null == p || p(null == j ? void 0 : j.current);
    }, [j, p]);
    let Y = async (e) => {
            if (null == e) return;
            w({ action: P });
            let r = O({
                input: e,
                username: g.ZP.getName(n),
                sourceType: u,
                sourceDetails: h
            });
            k(null);
            try {
                await (0, I.Z)({
                    userId: n.id,
                    content: r,
                    location: 'UserProfileReplyPopout',
                    openChannel: !1,
                    whenReady: !1,
                    entry: x
                });
            } catch (e) {}
            k(S.P.REPLY);
        },
        W = {
            [C.biteSize]: o === S.y0.BITE_SIZE,
            [C.panel]: o === S.y0.PANEL,
            [C.fullSize]: o === S.y0.FULL_SIZE
        },
        K = {
            [C.status]: u === S.n_.STATUS,
            [C.avatar]: u === S.n_.AVATAR,
            [C.activity]: u === S.n_.ACTIVITY
        };
    return (0, a.jsx)(c.V, {
        ref: j,
        onKeyDown: H,
        children: (0, a.jsx)('div', {
            className: l()(C.container, W, K, { [C.customProfileTheme]: null != U }),
            children: (0, a.jsx)(_.Z, {
                parentModalKey: b,
                emojiPickerCloseOnModalOuterClick: !0,
                innerClassName: C.inner,
                editorClassName: C.editor,
                type: d.Ie.USER_PROFILE_REPLY,
                placeholder: N.intl.formatToPlainString(D(u), { username: m.ZP.getName(r, i, n) }),
                channel: R,
                textValue: B,
                richValue: Z,
                onChange: (e, n, r) => {
                    if (n !== B) G(n), F(r);
                },
                focused: V.current,
                onFocus: () => {
                    V.current = !0;
                },
                onSubmit: async (e) => {
                    let { value: n } = e,
                        r = n.trim();
                    if (0 === r.length)
                        return {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                    try {
                        return (
                            await Y(r),
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
