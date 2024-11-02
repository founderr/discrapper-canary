n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(399606),
    o = n(704215),
    c = n(923462),
    d = n(481060),
    u = n(239091),
    h = n(100527),
    m = n(906732),
    p = n(706140),
    g = n(294629),
    f = n(131951),
    _ = n(459273),
    E = n(242291),
    I = n(792165),
    C = n(603074),
    v = n(981631),
    S = n(921944),
    N = n(388032),
    T = n(663031);
function x(e) {
    let { channel: t, iconClassName: l, className: x, innerClassName: b, ...A } = e,
        { mute: Z, suppress: y } = (0, g.Z)(t),
        L = (0, s.e7)([f.Z], () => f.Z.isDeaf()),
        R = Z || y || L,
        [P, O] = r.useState(!1),
        j = t.getGuildId(),
        D = (0, E.sR)({ isSoundboardButtonDisabled: R }),
        [M, w] = (0, p.cv)(D),
        { analyticsLocations: k } = (0, m.ZP)(h.Z.SOUNDBOARD_BUTTON);
    function U(e) {
        null != j &&
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) =>
                    (0, i.jsx)(e, {
                        guildId: j,
                        ...t
                    });
            });
    }
    let {
            Component: G,
            play: B,
            events: { onMouseEnter: H, onMouseLeave: V }
        } = (0, c.j)(),
        F = (e) =>
            (0, i.jsx)(d.Popout, {
                animation: d.Popout.Animation.FADE,
                shouldShow: P,
                position: 'top',
                onRequestClose: () => O(!1),
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsx)(C.Z, {
                        guildId: j,
                        channel: t,
                        onClose: n,
                        gridNotice:
                            M === o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                            (0, i.jsx)(I.o, {
                                onClose: n,
                                markAsDismissed: w
                            }),
                        analyticsSource: 'rtc panel'
                    });
                },
                children: (t) =>
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.Button, {
                            ...e,
                            ...t,
                            className: a()(x, {
                                [T.buttonActive]: P,
                                [T.disabled]: R
                            }),
                            wrapperClassName: x,
                            innerClassName: b,
                            disabled: R,
                            onClick: () => {
                                var t, n;
                                null != M && M !== o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && w(S.L.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), O(!P), B();
                            },
                            onMouseEnter: (t) => {
                                var n, i;
                                null === (n = A.onMouseEnter) || void 0 === n || n.call(A, t), null == e || null === (i = e.onMouseEnter) || void 0 === i || i.call(e), H();
                            },
                            onMouseLeave: (t) => {
                                var n, i;
                                null === (n = A.onMouseLeave) || void 0 === n || n.call(A, t), null == e || null === (i = e.onMouseLeave) || void 0 === i || i.call(e), V();
                            },
                            onContextMenu: U,
                            fullWidth: !0,
                            size: d.Button.Sizes.SMALL,
                            ...A,
                            children: (0, i.jsx)(G, {
                                className: l,
                                size: 'sm',
                                color: P ? 'white' : d.tokens.colors.INTERACTIVE_ACTIVE
                            })
                        })
                    })
            }),
        z = r.useCallback(() => {
            !R && O(!P);
        }, [R, P]);
    return (
        (0, _.yp)({
            event: v.CkL.TOGGLE_SOUNDBOARD,
            handler: z
        }),
        (0, i.jsx)(m.Gt, {
            value: k,
            children: (0, i.jsx)(d.Tooltip, {
                text: (function () {
                    if (Z) return N.intl.string(N.t['Ox4/zc']);
                    if (y) return N.intl.string(N.t['+YBKYG']);
                    if (L) return N.intl.string(N.t.X1lQlp);
                    return N.intl.string(N.t['6EJvHh']);
                })(),
                children: (e) => F(e)
            })
        })
    );
}
