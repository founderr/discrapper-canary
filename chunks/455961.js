n.d(t, {
    b: function () {
        return M;
    }
}),
    n(47120),
    n(773603);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(848246),
    o = n(793030),
    c = n(442837),
    d = n(46973),
    u = n(481060),
    h = n(846027),
    p = n(607070),
    m = n(361291),
    f = n(131951),
    g = n(626135),
    C = n(120522),
    x = n(386542),
    _ = n(933843),
    v = n(746599),
    I = n(1163),
    E = n(738672),
    b = n(981631),
    Z = n(37113),
    N = n(388032),
    S = n(664281);
function T(e) {
    let { className: t, onDismiss: n } = e;
    return (0, i.jsx)(u.Button, {
        className: t,
        'aria-label': N.intl.string(N.t.cpT0Cg),
        look: u.Button.Looks.BLANK,
        size: u.Button.Sizes.NONE,
        onClick: n,
        children: (0, i.jsx)(u.XSmallIcon, {
            size: 'xs',
            className: S.closeIcon,
            color: 'white'
        })
    });
}
let j = Z.LY.RESOLUTION_1440,
    A = Z.ws.FPS_60;
function y(e) {
    let { channel: t } = e,
        n = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        [a, r] = l.useState(!1),
        { preset: o } = (0, c.cj)([m.Z], () => m.Z.getState()),
        x = (0, c.e7)([f.Z], () => f.Z.getGoLiveSource()),
        I = l.useCallback(() => {
            r(!0),
                (0, C.S)(s.q.STREAM_HIGH_QUALITY)
                    .then((e) => {
                        if (e) {
                            if (
                                ((0, v.J1)(!(0, _.mc)(j, A)),
                                g.default.track(b.rMx.PERK_DEMO_OFFER_ACCEPTED, {
                                    guild_id: t.guild_id,
                                    channel_id: t.id,
                                    perk_type: s.q.STREAM_HIGH_QUALITY,
                                    resolution: j,
                                    max_fps: A
                                }),
                                (0, v.cD)(!1),
                                null == x)
                            )
                                return;
                            let e = {
                                qualityOptions: {
                                    preset: o,
                                    resolution: j,
                                    frameRate: A
                                },
                                context: d.Yn.STREAM
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
                        r(!1);
                    });
        }, [o, t, x]);
    return (0, i.jsx)(u.ShinyButton, {
        fullWidth: !0,
        pauseAnimation: n,
        color: u.Button.Colors.GREEN,
        size: u.Button.Sizes.SMALL,
        className: S.optInButton,
        onClick: I,
        submitting: a,
        children: N.intl.string(N.t['Rpn/09'])
    });
}
function P(e) {
    let { channel: t, hidden: n, onDismiss: l } = e,
        a = I.Z.useExperiment({ location: 'StreamButtonDemoOptInPopoutContent' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, i.jsxs)('div', {
        className: r()(S.optInPopout, S.variant2OptInPopout, { [S.hidden]: n }),
        children: [
            (0, i.jsx)('img', {
                className: S.image,
                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                alt: 'HD Streaming Nitro Perk'
            }),
            (0, i.jsx)(T, {
                className: S.variant2CloseButton,
                onDismiss: l
            }),
            (0, i.jsx)('div', {
                className: S.variant2InfoContainerParent,
                children: (0, i.jsxs)('div', {
                    className: S.variant2InfoContainer,
                    children: [
                        (0, i.jsx)(o.xv, {
                            className: S.variant2Text,
                            variant: 'text-sm/medium',
                            children: a ? N.intl.string(N.t.ZYQ2zc) : N.intl.string(N.t.kr8AEx)
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
        { shouldShowOptInPopout: a } = (0, x.k)(s.q.STREAM_HIGH_QUALITY),
        { enabled: r } = I.Z.useExperiment(
            { location: 'StreamButtonDemoOptInPopout' },
            {
                autoTrackExposure: !1,
                disable: !a
            }
        ),
        o = l.useRef(!1);
    return (l.useEffect(() => {
        a &&
            r &&
            !o.current &&
            ((o.current = !0),
            g.default.track(b.rMx.PERK_DEMO_OFFER_VIEWED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: s.q.STREAM_HIGH_QUALITY
            }));
    }, [a, r, t]),
    a && r)
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
