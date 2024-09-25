n.d(t, {
    e: function () {
        return H;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(526629),
    l = n(442837),
    u = n(704215),
    c = n(780384),
    d = n(481060),
    _ = n(845538),
    E = n(410030),
    f = n(100527),
    h = n(906732),
    p = n(605236),
    m = n(243778),
    I = n(963249),
    T = n(646476),
    g = n(819640),
    S = n(594174),
    A = n(965645),
    v = n(362061),
    N = n(70956),
    O = n(709054),
    R = n(51144),
    C = n(443603),
    y = n(981631),
    b = n(921944),
    L = n(474936),
    D = n(689938),
    M = n(746734),
    P = n(933283);
let U = [
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
    x = 7,
    G = 1 / 300,
    k = N.Z.Millis.DAYS_30;
function B(e) {
    let [t, n] = o.useState(!1),
        [r, i] = o.useState(Math.floor(Math.random() * x));
    return (
        o.useEffect(() => {
            if (e) return;
            let t = Math.random() <= G;
            if ((n(t), !t)) {
                let e;
                do e = Math.floor(Math.random() * x);
                while (e === r);
                i(e);
            }
        }, [e]),
        [t, r]
    );
}
let F = (0, s.animated)(A.Z),
    Z = (0, s.animated)(v.Z),
    V = (0, s.animated)(d.GiftIcon);
function H(e) {
    let {
            themeOverride: t,
            hovered: n,
            isContentDismissed: r,
            boxColors: i = {
                dark: U,
                light: w
            }
        } = e,
        o = (0, E.ZP)(),
        [s, l] = B(n),
        u = (0, d.useSpring)({
            reverse: !n,
            reset: !0,
            from: { scale: 1 },
            to: { scale: 1.14 },
            config: {
                tension: 800,
                friction: 24
            }
        }),
        _ = !!r && s,
        f = r ? l : 0,
        h = (0, c.wj)(null != t ? t : o) ? i.dark[f] : i.light[f];
    return !n && r
        ? (0, a.jsx)(V, {})
        : _
          ? (0, a.jsx)(Z, {
                isDark: (0, c.wj)(o),
                style: u
            })
          : (0, a.jsx)(F, {
                boxColor: h.box,
                ribbonColor: h.ribbon,
                style: u
            });
}
function Y(e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: r } = (0, h.ZP)(f.Z.GIFT_BUTTON),
        [i, s] = o.useState(!1),
        c = (0, l.e7)([g.Z], () => !(null === g.Z || void 0 === g.Z ? void 0 : g.Z.hasLayers())),
        E = (0, l.e7)([S.default], () => S.default.getCurrentUser()),
        A = null != E ? O.default.age(E.id) : 0,
        v = !t && c && A >= k,
        { enabled: N } = T.RO.useExperiment({ location: 'ChannelPremiumGiftButton' }, { autoTrackExposure: v }),
        U = [];
    N && v && U.push(u.z.SEASONAL_GIFTING_COACHMARK_2023);
    let [w, x] = (0, m.US)(U),
        G = null != w,
        B = (0, R.Ft)(n),
        F = null != B;
    if (t) return null;
    let Z = () => {
            (0, I.Z)({
                isGift: !0,
                giftRecipient: null == B ? void 0 : B,
                initialPlanId: null,
                subscriptionTier: L.Si.TIER_2,
                analyticsLocations: r,
                analyticsObject: {
                    page: n.isPrivate() ? y.ZY5.DM_CHANNEL : y.ZY5.GUILD_CHANNEL,
                    section: y.jXE.CHANNEL_TEXT_AREA,
                    object: y.qAy.SEASONAL_BUTTON_ICON,
                    objectType: y.Qqv.GIFT
                }
            });
        },
        V = (0, a.jsxs)('div', {
            className: M.container,
            onMouseEnter: () => {
                !i && s(!0);
            },
            onMouseLeave: () => {
                s(!1);
            },
            children: [
                G &&
                    (0, a.jsx)(_.Z, {
                        onComplete: () => s(!1),
                        onDMCheckItOutClick: Z,
                        markAsDismissed: x,
                        isDM: F
                    }),
                (0, a.jsx)(C.Z, {
                    innerClassName: P.button,
                    'aria-label': D.Z.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                    isActive: !1,
                    onClick: () => {
                        s(!1), (0, p.EW)(u.z.SEASONAL_GIFTING_COACHMARK_2023, { dismissAction: b.L.TAKE_ACTION }), Z();
                    },
                    children: (0, a.jsx)('div', {
                        className: M.noPointerEvents,
                        children: (0, a.jsx)(H, {
                            hovered: i,
                            isContentDismissed: !G
                        })
                    })
                })
            ]
        });
    return G
        ? V
        : (0, a.jsx)(d.TooltipContainer, {
              className: M.container,
              text: (0, _.i)(F),
              children: V
          });
}
t.Z = o.memo(Y);
