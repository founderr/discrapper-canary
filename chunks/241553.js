n.d(t, {
    e: function () {
        return G;
    }
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    a = n(100621),
    s = n(442837),
    o = n(704215),
    l = n(780384),
    u = n(481060),
    c = n(845538),
    d = n(410030),
    f = n(100527),
    _ = n(906732),
    p = n(605236),
    h = n(243778),
    m = n(963249),
    g = n(646476),
    E = n(819640),
    v = n(594174),
    b = n(965645),
    I = n(362061),
    T = n(70956),
    S = n(709054),
    y = n(51144),
    A = n(443603),
    N = n(981631),
    C = n(921944),
    R = n(474936),
    O = n(388032),
    D = n(746734),
    L = n(703130);
let x = [
        {
            box: '#FFD89E',
            ribbon: '#FF7476'
        },
        {
            box: '#17B5E2',
            ribbon: '#FFFFFF'
        },
        {
            box: '#EED169',
            ribbon: '#51A1EB'
        },
        {
            box: '#509C65',
            ribbon: '#FFC96E'
        },
        {
            box: '#E4578A',
            ribbon: '#BEC4FF'
        },
        {
            box: '#AFE0FC',
            ribbon: '#FF9356'
        },
        {
            box: '#DB6D6D',
            ribbon: '#67DA9C'
        }
    ],
    w = [
        {
            box: '#EABB75',
            ribbon: '#E4595C'
        },
        {
            box: '#2D7AA5',
            ribbon: '#64C7C2'
        },
        {
            box: '#ECBF21',
            ribbon: '#51A1EB'
        },
        {
            box: '#439359',
            ribbon: '#D5A24C'
        },
        {
            box: '#FC90C4',
            ribbon: '#777FCE'
        },
        {
            box: '#549DC6',
            ribbon: '#FF9356'
        },
        {
            box: '#DB6F6F',
            ribbon: '#81C29F'
        }
    ],
    M = 1 / 300,
    P = T.Z.Millis.DAYS_30,
    k = (0, a.animated)(b.Z),
    U = (0, a.animated)(I.Z),
    B = (0, a.animated)(u.GiftIcon);
function G(e) {
    let {
            themeOverride: t,
            hovered: n,
            isContentDismissed: a,
            boxColors: s = {
                dark: x,
                light: w
            }
        } = e,
        o = (0, d.ZP)(),
        [c, f] = (function (e) {
            let [t, n] = i.useState(!1),
                [r, a] = i.useState(Math.floor(7 * Math.random()));
            return (
                i.useEffect(() => {
                    if (e) return;
                    let t = Math.random() <= M;
                    if ((n(t), !t)) {
                        let e;
                        do e = Math.floor(7 * Math.random());
                        while (e === r);
                        a(e);
                    }
                }, [e]),
                [t, r]
            );
        })(n),
        _ = (0, u.useSpring)({
            reverse: !n,
            reset: !0,
            from: { scale: 1 },
            to: { scale: 1.14 },
            config: {
                tension: 800,
                friction: 24
            }
        }),
        p = a ? f : 0,
        h = (0, l.wj)(null != t ? t : o) ? s.dark[p] : s.light[p];
    return !n && a
        ? (0, r.jsx)(B, {})
        : a && c
          ? (0, r.jsx)(U, {
                isDark: (0, l.wj)(o),
                style: _
            })
          : (0, r.jsx)(k, {
                boxColor: h.box,
                ribbonColor: h.ribbon,
                style: _
            });
}
t.Z = i.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: a } = (0, _.ZP)(f.Z.GIFT_BUTTON),
        [l, d] = i.useState(!1),
        b = (0, s.e7)([E.Z], () => !(null === E.Z || void 0 === E.Z ? void 0 : E.Z.hasLayers())),
        I = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        T = null != I ? S.default.age(I.id) : 0,
        x = !t && b && T >= P,
        { enabled: w } = g.RO.useExperiment({ location: 'ChannelPremiumGiftButton' }, { autoTrackExposure: x }),
        M = [];
    w && x && M.push(o.z.SEASONAL_GIFTING_COACHMARK_2023);
    let [k, U] = (0, h.US)(M),
        B = null != k,
        Z = (0, y.Ft)(n),
        F = null != Z;
    if (t) return null;
    let V = () => {
            (0, m.Z)({
                isGift: !0,
                giftRecipient: null == Z ? void 0 : Z,
                initialPlanId: null,
                subscriptionTier: R.Si.TIER_2,
                analyticsLocations: a,
                analyticsObject: {
                    page: n.isPrivate() ? N.ZY5.DM_CHANNEL : N.ZY5.GUILD_CHANNEL,
                    section: N.jXE.CHANNEL_TEXT_AREA,
                    object: N.qAy.SEASONAL_BUTTON_ICON,
                    objectType: N.Qqv.GIFT
                }
            });
        },
        j = (0, r.jsxs)('div', {
            className: D.container,
            onMouseEnter: () => {
                !l && d(!0);
            },
            onMouseLeave: () => {
                d(!1);
            },
            children: [
                B &&
                    (0, r.jsx)(c.Z, {
                        onComplete: () => d(!1),
                        onDMCheckItOutClick: V,
                        markAsDismissed: U,
                        isDM: F
                    }),
                (0, r.jsx)(A.Z, {
                    innerClassName: L.button,
                    'aria-label': O.intl.string(O.t.Z1RnTk),
                    isActive: !1,
                    onClick: () => {
                        d(!1), (0, p.EW)(o.z.SEASONAL_GIFTING_COACHMARK_2023, { dismissAction: C.L.TAKE_ACTION }), V();
                    },
                    children: (0, r.jsx)('div', {
                        className: D.noPointerEvents,
                        children: (0, r.jsx)(G, {
                            hovered: l,
                            isContentDismissed: !B
                        })
                    })
                })
            ]
        });
    return B
        ? j
        : (0, r.jsx)(u.TooltipContainer, {
              className: D.container,
              text: (0, c.i)(F),
              children: j
          });
});
