n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(848246),
    s = n(442837),
    o = n(481060),
    l = n(846027),
    u = n(2052),
    c = n(451467),
    d = n(386542),
    _ = n(933843),
    E = n(746599),
    f = n(361291),
    h = n(592125),
    p = n(430824),
    I = n(131951),
    m = n(944486),
    T = n(594174),
    S = n(981631),
    g = n(37113),
    A = n(65154),
    N = n(689938);
function R(e, t) {
    let { preset: R, resolution: O, fps: v } = (0, s.cj)([f.Z], () => f.Z.getState()),
        C = (0, s.e7)([I.Z], () => I.Z.getGoLiveSource()),
        L = (0, s.e7)([T.default], () => T.default.getCurrentUser()),
        D = (0, s.e7)([p.Z], () => {
            var t;
            return null === (t = p.Z.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier;
        }),
        { location: y } = (0, u.O)(),
        { available: b, activated: M } = (0, d.k)(a.q.STREAM_HIGH_QUALITY),
        P = (0, s.e7)([m.Z, h.Z], () => h.Z.getChannel(m.Z.getVoiceChannelId())),
        U = i.useCallback(
            (e, i, a, s) => {
                if (e) {
                    if (null != C) {
                        let e = {
                            qualityOptions: {
                                preset: g.tI.PRESET_CUSTOM,
                                resolution: i,
                                frameRate: a
                            },
                            context: A.Yn.STREAM
                        };
                        null != C.desktopSource
                            ? (e.desktopSettings = {
                                  sourceId: C.desktopSource.id,
                                  sound: !0
                              })
                            : null != C.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: C.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: C.cameraSource.audioDeviceGuid
                              }),
                            b && (0, E.J1)(!(0, _.mc)(i, a)),
                            l.Z.setGoLiveSource(e);
                    }
                } else {
                    var u, c;
                    (u = t),
                        (c = {
                            ...y,
                            object: S.qAy.RADIO_ITEM,
                            objectType: s
                        }),
                        (0, o.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e('28479').then(n.bind(n, 78865));
                                return (t) =>
                                    (0, r.jsx)(e, {
                                        ...t,
                                        analyticsSource: c
                                    });
                            },
                            { contextKey: u === S.IlC.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT }
                        );
                }
            },
            [t, y, C, b]
        );
    if (null == e) return null;
    let w = R === g.tI.PRESET_DOCUMENTS ? g.ws.FPS_30 : v,
        x = g.af.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.Z)(g.tI.PRESET_CUSTOM, O, t, L, D, P);
            return (0, r.jsx)(
                o.MenuRadioItem,
                {
                    group: 'stream-settings-fps',
                    id: 'stream-settings-fps-'.concat(t),
                    label: n,
                    checked: t === v,
                    action: () => U(i, O, t, S.Qqv.RESOLUTION)
                },
                'stream-settings-fps-'.concat(t)
            );
        }),
        G = g.km.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.Z)(g.tI.PRESET_CUSTOM, t, w, L, D, P);
            return (
                b && !M && (i = !1),
                (0, r.jsx)(
                    o.MenuRadioItem,
                    {
                        group: 'stream-settings-resolution',
                        id: 'stream-settings-resolution-'.concat(t),
                        label: n,
                        checked: t === O,
                        action: () => U(i, t, w, S.Qqv.RESOLUTION)
                    },
                    'stream-settings-resolution-'.concat(t)
                )
            );
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.MenuGroup, {
                label: N.Z.Messages.SCREENSHARE_FRAME_RATE,
                children: x
            }),
            (0, r.jsx)(o.MenuGroup, {
                label: N.Z.Messages.STREAM_RESOLUTION,
                children: G
            })
        ]
    });
}
