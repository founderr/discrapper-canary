n.d(t, {
    b: function () {
        return j;
    }
}),
    n(47120),
    n(773603);
var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(848246),
    o = n(793030),
    c = n(442837),
    u = n(46973),
    d = n(481060),
    h = n(846027),
    p = n(607070),
    m = n(361291),
    _ = n(131951),
    f = n(626135),
    E = n(120522),
    g = n(386542),
    C = n(933843),
    I = n(746599),
    T = n(1163),
    x = n(738672),
    v = n(981631),
    S = n(37113),
    N = n(689938),
    A = n(351065);
function Z(e) {
    let { className: t, onDismiss: n } = e;
    return (0, i.jsx)(d.Button, {
        className: t,
        'aria-label': N.Z.Messages.CLOSE,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.NONE,
        onClick: n,
        children: (0, i.jsx)(d.XSmallIcon, {
            size: 'xs',
            className: A.closeIcon,
            color: 'white'
        })
    });
}
let M = S.LY.RESOLUTION_1440,
    b = S.ws.FPS_60;
function R(e) {
    let { channel: t } = e,
        n = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        [a, l] = s.useState(!1),
        { preset: o } = (0, c.cj)([m.Z], () => m.Z.getState()),
        g = (0, c.e7)([_.Z], () => _.Z.getGoLiveSource()),
        T = s.useCallback(() => {
            l(!0),
                (0, E.S)(r.q.STREAM_HIGH_QUALITY)
                    .then((e) => {
                        if (e) {
                            if (
                                ((0, I.J1)(!(0, C.mc)(M, b)),
                                f.default.track(v.rMx.PERK_DEMO_OFFER_ACCEPTED, {
                                    guild_id: t.guild_id,
                                    channel_id: t.id,
                                    perk_type: r.q.STREAM_HIGH_QUALITY,
                                    resolution: M,
                                    max_fps: b
                                }),
                                (0, I.cD)(!1),
                                null == g)
                            )
                                return;
                            let e = {
                                qualityOptions: {
                                    preset: o,
                                    resolution: M,
                                    frameRate: b
                                },
                                context: u.Yn.STREAM
                            };
                            null != g.desktopSource
                                ? (e.desktopSettings = {
                                      sourceId: g.desktopSource.id,
                                      sound: !0
                                  })
                                : null != g.cameraSource &&
                                  (e.cameraSettings = {
                                      videoDeviceGuid: g.cameraSource.videoDeviceGuid,
                                      audioDeviceGuid: g.cameraSource.audioDeviceGuid
                                  }),
                                h.Z.setGoLiveSource(e);
                        }
                    })
                    .catch(() => {})
                    .finally(() => {
                        l(!1);
                    });
        }, [o, t, g]);
    return (0, i.jsx)(d.ShinyButton, {
        fullWidth: !0,
        pauseAnimation: n,
        color: d.Button.Colors.GREEN,
        size: d.Button.Sizes.SMALL,
        className: A.optInButton,
        onClick: T,
        submitting: a,
        children: N.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_POPOUT_CTA_V2
    });
}
function L(e) {
    let { channel: t, hidden: n, onDismiss: s } = e,
        a = T.Z.useExperiment({ location: 'StreamButtonDemoOptInPopoutContent' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, i.jsxs)('div', {
        className: l()(A.optInPopout, A.variant2OptInPopout, { [A.hidden]: n }),
        children: [
            (0, i.jsx)('img', {
                className: A.image,
                src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png',
                alt: 'HD Streaming Nitro Perk'
            }),
            (0, i.jsx)(Z, {
                className: A.variant2CloseButton,
                onDismiss: s
            }),
            (0, i.jsx)('div', {
                className: A.variant2InfoContainerParent,
                children: (0, i.jsxs)('div', {
                    className: A.variant2InfoContainer,
                    children: [
                        (0, i.jsx)(o.xv, {
                            className: A.variant2Text,
                            variant: 'text-sm/medium',
                            children: a ? N.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_POPOUT_BODY : N.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_POPOUT_BODY
                        }),
                        (0, i.jsx)(R, { channel: t })
                    ]
                })
            })
        ]
    });
}
function j(e) {
    let { channel: t, ...n } = e,
        { shouldShowOptInPopout: a } = (0, g.k)(r.q.STREAM_HIGH_QUALITY),
        { enabled: l } = T.Z.useExperiment(
            { location: 'StreamButtonDemoOptInPopout' },
            {
                autoTrackExposure: !1,
                disable: !a
            }
        ),
        o = s.useRef(!1);
    return (s.useEffect(() => {
        a &&
            l &&
            !o.current &&
            ((o.current = !0),
            f.default.track(v.rMx.PERK_DEMO_OFFER_VIEWED, {
                guild_id: t.guild_id,
                channel_id: t.id,
                perk_type: r.q.STREAM_HIGH_QUALITY
            }));
    }, [a, l, t]),
    a && l)
        ? (0, i.jsx)(x.h, {
              ...n,
              renderComponent: (e) =>
                  (0, i.jsx)(L, {
                      ...e,
                      channel: t
                  })
          })
        : null;
}
