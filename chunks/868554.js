n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(913527),
    o = n.n(s),
    c = n(100621),
    d = n(442837),
    u = n(481060),
    h = n(846027),
    p = n(358221),
    m = n(909820),
    f = n(518950),
    g = n(937995),
    C = n(131951),
    x = n(594174),
    _ = n(63063),
    v = n(120619),
    I = n(578976),
    E = n(981631),
    b = n(37113),
    Z = n(388032),
    N = n(382873),
    S = n(454120);
function T(e) {
    let { buttonRef: t, channel: r, userId: s, streaming: T, onClose: j, dismissibleContent: A } = e,
        y = (0, d.e7)([x.default], () => x.default.getUser(s)),
        P = (0, d.e7)([x.default], () => x.default.getCurrentUser()),
        M = (0, d.e7)([v.Z], () => v.Z.getPreviousGoLiveSettings()),
        L = (0, d.e7)([p.Z], () => p.Z.getChatOpen(r.id)),
        R = T && null != M && M.resolution !== b.LY.RESOLUTION_1440 && M.frameRate !== b.ws.FPS_60,
        k = l.useContext(g.h9),
        O = l.useRef(0),
        [D, w] = l.useState('0');
    l.useEffect(() => {
        (O.current += 1), w(String(O.current));
    }, [L]);
    let B = l.useMemo(() => {
            let e = 30;
            return k && (e = -30), (O.current += 1), w(String(O.current)), e;
        }, [k]),
        U = (0, u.useSpring)({
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
        { avatarSrc: H, eventHandlers: G } = (0, f.Z)({
            user: y,
            size: u.AvatarSizes.SIZE_48,
            animateOnHover: !0
        }),
        F = T && !R,
        V = r.hdStreamingUntil;
    if (null == V || null == y || null == P) return null;
    let z = o()(V).diff(o()(), 'hours'),
        W = (() => {
            if (A) {
                var e;
                return Z.intl.format(Z.t['6LrV9f'], {
                    username: null !== (e = y.globalName) && void 0 !== e ? e : y.username,
                    num: z,
                    helpCenterLink: _.Z.getArticleURL(E.BhN.HD_STREAMING_POTION)
                });
            }
            return y.id === P.id
                ? Z.intl.string(Z.t.IjKvNT)
                : !0 === T
                  ? Z.intl.format(Z.t.JkWoqK, {
                        username: y.username,
                        helpCenterLink: _.Z.getArticleURL(E.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
                    })
                  : Z.intl.formatToPlainString(Z.t.vNbVXF, { username: y.username });
        })(),
        K = R ? Z.intl.string(Z.t.o7NIjY) : F ? Z.intl.string(Z.t.r6xhBw) : Z.intl.string(Z.t.yKw8Dg);
    if (null == y || null == P) return null;
    let Y = () => {
        if (R) {
            let e = v.Z.getPreviousGoLiveSettings(),
                t = C.Z.getGoLiveSource();
            if (null == e) {
                j();
                return;
            }
            let n = (0, I.s)(e.resolution, e.frameRate, t);
            h.Z.setGoLiveSource(n), j();
            return;
        }
        if (F) {
            j();
            return;
        }
        (0, u.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('46746'), n.e('19942')]).then(n.bind(n, 60594));
            return (t) =>
                (0, i.jsx)(e, {
                    analyticsLocation: 'HDStreamingPotionBanner',
                    ...t
                });
        }),
            j();
    };
    return (0, i.jsx)(m.ZP, {
        children: (0, i.jsx)(u.ReferencePositionLayer, {
            targetRef: t,
            position: 'top',
            align: 'center',
            spacing: B,
            nudgeAlignIntoViewport: !1,
            positionKey: D,
            children: () =>
                (0, i.jsxs)(c.animated.div, {
                    style: U,
                    className: N.banner,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(u.Avatar, {
                                    src: H,
                                    'aria-label': y.username,
                                    size: u.AvatarSizes.SIZE_48,
                                    ...G
                                }),
                                (0, i.jsx)('img', {
                                    className: N.potion,
                                    src: S,
                                    alt: ''
                                })
                            ]
                        }),
                        (0, i.jsx)(u.Heading, {
                            variant: 'heading-sm/medium',
                            children: W
                        }),
                        (0, i.jsxs)('div', {
                            className: N.subsection,
                            children: [
                                (0, i.jsx)(u.Button, {
                                    onClick: Y,
                                    className: a()({ [N.actionButton]: !0 !== T }),
                                    children: K
                                }),
                                !F &&
                                    (0, i.jsx)(u.Clickable, {
                                        className: N.x,
                                        onClick: j,
                                        children: (0, i.jsx)(u.XSmallIcon, { name: 'close' })
                                    })
                            ]
                        })
                    ]
                })
        })
    });
}
