n.d(t, {
    b: function () {
        return M;
    }
}),
    n(47120),
    n(773603);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(848246),
    o = n(793030),
    c = n(442837),
    u = n(46973),
    d = n(481060),
    h = n(846027),
    m = n(607070),
    p = n(361291),
    f = n(131951),
    g = n(626135),
    C = n(120522),
    x = n(386542),
    v = n(933843),
    _ = n(746599),
    I = n(1163),
    E = n(738672),
    b = n(981631),
    S = n(37113),
    Z = n(388032),
    T = n(351065);
function N(e) {
    let { className: t, onDismiss: n } = e;
    return (0, i.jsx)(d.Button, {
        className: t,
        'aria-label': Z.intl.string(Z.t.cpT0Cg),
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.NONE,
        onClick: n,
        children: (0, i.jsx)(d.XSmallIcon, {
            size: 'xs',
            className: T.closeIcon,
            color: 'white'
        })
    });
}
let j = S.LY.RESOLUTION_1440,
    A = S.ws.FPS_60;
function y(e) {
    let { channel: t } = e,
        n = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        [r, s] = l.useState(!1),
        { preset: o } = (0, c.cj)([p.Z], () => p.Z.getState()),
        x = (0, c.e7)([f.Z], () => f.Z.getGoLiveSource()),
        I = l.useCallback(() => {
            s(!0),
                (0, C.S)(a.q.STREAM_HIGH_QUALITY)
                    .then((e) => {
                        if (e) {
                            if (
                                ((0, _.J1)(!(0, v.mc)(j, A)),
                                g.default.track(b.rMx.PERK_DEMO_OFFER_ACCEPTED, {
                                    guild_id: t.guild_id,
                                    channel_id: t.id,
                                    perk_type: a.q.STREAM_HIGH_QUALITY,
                                    resolution: j,
                                    max_fps: A
                                }),
                                (0, _.cD)(!1),
                                null == x)
                            )
                                return;
                            let e = {
                                qualityOptions: {
                                    preset: o,
                                    resolution: j,
                                    frameRate: A
                                },
                                context: u.Yn.STREAM
                            };
                            null != x.desktopSource
                                ? (e.desktopSettings = {
                                      sourceId: x.desktopSource.id,
                                      sound: !0
                                  })
                                : null != x.cameraSource &&
                                  (e.cameraSettings = {
                                      videoDeviceGuid: x.cameraSource.videoDeviceGuid,
                                      audioDeviceGuid: x.cameraSource.audioDeviceGuid
                                  }),
                                h.Z.setGoLiveSource(e);
                        }
                    })
                    .catch(() => {})
                    .finally(() => {
                        s(!1);
                    });
        }, [o, t, x]);
    return (0, i.jsx)(d.ShinyButton, {
        fullWidth: !0,
        pauseAnimation: n,
        color: d.Button.Colors.GREEN,
        size: d.Button.Sizes.SMALL,
        className: T.optInButton,
        onClick: I,
        submitting: r,
        children: Z.intl.string(Z.t['Rpn/09'])
    });
}
function P(e) {
    let { channel: t, hidden: n, onDismiss: l } = e,
        r = I.Z.useExperiment({ location: 'StreamButtonDemoOptInPopoutContent' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, i.jsxs)('div', {
        className: s()(T.optInPopout, T.variant2OptInPopout, { [T.hidden]: n }),
        children: [
            (0, i.jsx)('img', {
                className: T.image,
                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                alt: 'HD Streaming Nitro Perk'
            }),
            (0, i.jsx)(N, {
                className: T.variant2CloseButton,
                onDismiss: l
            }),
            (0, i.jsx)('div', {
                className: T.variant2InfoContainerParent,
                children: (0, i.jsxs)('div', {
                    className: T.variant2InfoContainer,
                    children: [
                        (0, i.jsx)(o.xv, {
                            className: T.variant2Text,
                            variant: 'text-sm/medium',
                            children: r ? Z.intl.string(Z.t.ZYQ2zc) : Z.intl.string(Z.t.kr8AEx)
                        }),
                        (0, i.jsx)(y, { channel: t })
                    ]
                })
            })
        ]
    });
}
function M(e) {
    let { channel: t, ...n } = e,
        { shouldShowOptInPopout: r } = (0, x.k)(a.q.STREAM_HIGH_QUALITY),
        { enabled: s } = I.Z.useExperiment(
            { location: 'StreamButtonDemoOptInPopout' },
            {
                autoTrackExposure: !1,
                disable: !r
            }
        ),
        o = l.useRef(!1);
    return (l.useEffect(() => {
        r &&
            s &&
            !o.current &&
            ((o.current = !0),
            g.default.track(b.rMx.PERK_DEMO_OFFER_VIEWED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: a.q.STREAM_HIGH_QUALITY
            }));
    }, [r, s, t]),
    r && s)
        ? (0, i.jsx)(E.h, {
              ...n,
              renderComponent: (e) =>
                  (0, i.jsx)(P, {
                      ...e,
                      channel: t
                  })
          })
        : null;
}
