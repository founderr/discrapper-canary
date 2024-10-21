n.d(t, {
    Z: function () {
        return A;
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
    h = n(430824),
    p = n(131951),
    I = n(594174),
    m = n(981631),
    T = n(37113),
    S = n(65154),
    g = n(689938);
function A(e, t) {
    let { preset: A, resolution: N, fps: R } = (0, s.cj)([f.Z], () => f.Z.getState()),
        O = (0, s.e7)([p.Z], () => p.Z.getGoLiveSource()),
        v = (0, s.e7)([I.default], () => I.default.getCurrentUser()),
        C = (0, s.e7)([h.Z], () => {
            var t;
            return null === (t = h.Z.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier;
        }),
        { location: L } = (0, u.O)(),
        { available: D, activated: y } = (0, d.k)(a.q.STREAM_HIGH_QUALITY),
        b = i.useCallback(
            (e, i, a, s) => {
                if (e) {
                    if (null != O) {
                        let e = {
                            qualityOptions: {
                                preset: T.tI.PRESET_CUSTOM,
                                resolution: i,
                                frameRate: a
                            },
                            context: S.Yn.STREAM
                        };
                        null != O.desktopSource
                            ? (e.desktopSettings = {
                                  sourceId: O.desktopSource.id,
                                  sound: !0
                              })
                            : null != O.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: O.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: O.cameraSource.audioDeviceGuid
                              }),
                            D && (0, E.J1)(!(0, _.mc)(i, a)),
                            l.Z.setGoLiveSource(e);
                    }
                } else {
                    var u, c;
                    (u = t),
                        (c = {
                            ...L,
                            object: m.qAy.RADIO_ITEM,
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
                            { contextKey: u === m.IlC.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT }
                        );
                }
            },
            [t, L, O, D]
        );
    if (null == e) return null;
    let M = A === T.tI.PRESET_DOCUMENTS ? T.ws.FPS_30 : R,
        P = T.af.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.Z)(T.tI.PRESET_CUSTOM, N, t, v, C);
            return (0, r.jsx)(
                o.MenuRadioItem,
                {
                    group: 'stream-settings-fps',
                    id: 'stream-settings-fps-'.concat(t),
                    label: n,
                    checked: t === R,
                    action: () => b(i, N, t, m.Qqv.RESOLUTION)
                },
                'stream-settings-fps-'.concat(t)
            );
        }),
        U = T.km.map((e) => {
            let { value: t, label: n } = e,
                i = (0, c.Z)(T.tI.PRESET_CUSTOM, t, M, v, C);
            return (
                D && !y && (i = !1),
                (0, r.jsx)(
                    o.MenuRadioItem,
                    {
                        group: 'stream-settings-resolution',
                        id: 'stream-settings-resolution-'.concat(t),
                        label: n,
                        checked: t === N,
                        action: () => b(i, t, M, m.Qqv.RESOLUTION)
                    },
                    'stream-settings-resolution-'.concat(t)
                )
            );
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.MenuGroup, {
                label: g.Z.Messages.SCREENSHARE_FRAME_RATE,
                children: P
            }),
            (0, r.jsx)(o.MenuGroup, {
                label: g.Z.Messages.STREAM_RESOLUTION,
                children: U
            })
        ]
    });
}
