n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(100621),
    o = n(442837),
    c = n(481060),
    d = n(846027),
    u = n(358221),
    h = n(909820),
    p = n(518950),
    m = n(937995),
    f = n(131951),
    g = n(594174),
    C = n(63063),
    x = n(120619),
    v = n(578976),
    _ = n(981631),
    I = n(37113),
    E = n(388032),
    b = n(277865),
    Z = n(454120);
function N(e) {
    let { buttonRef: t, channel: a, userId: N, streaming: S, onClose: T } = e,
        j = (0, o.e7)([g.default], () => g.default.getUser(N)),
        A = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        y = (0, o.e7)([x.Z], () => x.Z.getPreviousGoLiveSettings()),
        P = (0, o.e7)([u.Z], () => u.Z.getChatOpen(a.id)),
        M = S && null != y && y.resolution !== I.LY.RESOLUTION_1440 && y.frameRate !== I.ws.FPS_60,
        L = l.useContext(m.h9),
        R = l.useRef(0),
        [k, O] = l.useState('0');
    l.useEffect(() => {
        (R.current += 1), O(String(R.current));
    }, [P]);
    let D = l.useMemo(() => {
            let e = 30;
            return L && (e = -30), (R.current += 1), O(String(R.current)), e;
        }, [L]),
        w = (0, c.useSpring)({
            from: {
                opacity: 0,
                transform: 'translateY(20px)'
            },
            to: {
                opacity: 1,
                transform: 'translateY(0px)'
            },
            config: { duration: 500 }
        }),
        { avatarSrc: B, eventHandlers: U } = (0, p.Z)({
            user: j,
            size: c.AvatarSizes.SIZE_48,
            animateOnHover: !0
        }),
        H = l.useMemo(
            () =>
                null == j || null == A
                    ? ''
                    : j.id === A.id
                      ? E.intl.string(E.t.IjKvNT)
                      : !0 === S
                        ? E.intl.format(E.t.JkWoqK, {
                              username: j.username,
                              helpCenterLink: C.Z.getArticleURL(_.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
                          })
                        : E.intl.formatToPlainString(E.t.vNbVXF, { username: j.username }),
            [j, A, S]
        ),
        G = S && !M,
        F = l.useMemo(() => (M ? E.intl.string(E.t.o7NIjY) : G ? E.intl.string(E.t.r6xhBw) : E.intl.string(E.t.yKw8Dg)), [G, M]);
    if (null == j || null == A) return null;
    let V = () => {
        if (M) {
            let e = x.Z.getPreviousGoLiveSettings(),
                t = f.Z.getGoLiveSource();
            if (null == e) {
                T();
                return;
            }
            let n = (0, v.s)(e.resolution, e.frameRate, t);
            d.Z.setGoLiveSource(n), T();
            return;
        }
        if (G) {
            T();
            return;
        }
        (0, c.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('46746'), n.e('19942')]).then(n.bind(n, 60594));
            return (t) =>
                (0, i.jsx)(e, {
                    analyticsLocation: 'HDStreamingPotionBanner',
                    ...t
                });
        }),
            T();
    };
    return (0, i.jsx)(h.ZP, {
        children: (0, i.jsx)(c.ReferencePositionLayer, {
            targetRef: t,
            position: 'top',
            align: 'center',
            spacing: D,
            nudgeAlignIntoViewport: !1,
            positionKey: k,
            children: () =>
                (0, i.jsxs)(s.animated.div, {
                    style: w,
                    className: b.banner,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(c.Avatar, {
                                    src: B,
                                    'aria-label': j.username,
                                    size: c.AvatarSizes.SIZE_48,
                                    ...U
                                }),
                                (0, i.jsx)('img', {
                                    className: b.potion,
                                    src: Z,
                                    alt: ''
                                })
                            ]
                        }),
                        (0, i.jsx)(c.Heading, {
                            variant: 'heading-sm/medium',
                            children: H
                        }),
                        (0, i.jsxs)('div', {
                            className: b.subsection,
                            children: [
                                (0, i.jsx)(c.Button, {
                                    onClick: V,
                                    className: r()({ [b.actionButton]: !0 !== S }),
                                    children: F
                                }),
                                !G &&
                                    (0, i.jsx)(c.Clickable, {
                                        className: b.x,
                                        onClick: T,
                                        children: (0, i.jsx)(c.XSmallIcon, { name: 'close' })
                                    })
                            ]
                        })
                    ]
                })
        })
    });
}
