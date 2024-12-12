r.d(n, {
    Z: function () {
        return N;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(848246),
    o = r(442837),
    l = r(481060),
    u = r(846027),
    c = r(2052),
    d = r(451467),
    f = r(386542),
    _ = r(933843),
    h = r(746599),
    p = r(361291),
    m = r(592125),
    g = r(430824),
    E = r(131951),
    v = r(944486),
    I = r(594174),
    T = r(981631),
    b = r(37113),
    y = r(65154),
    S = r(388032);
function A(e, n) {
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await r.e('28479').then(r.bind(r, 78865));
            return (r) =>
                (0, i.jsx)(e, {
                    ...r,
                    analyticsSource: n
                });
        },
        { contextKey: e === T.IlC.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT }
    );
}
function N(e, n) {
    let { preset: r, resolution: N, fps: C } = (0, o.cj)([p.Z], () => p.Z.getState()),
        R = (0, o.e7)([E.Z], () => E.Z.getGoLiveSource()),
        O = (0, o.e7)([I.default], () => I.default.getCurrentUser()),
        D = (0, o.e7)([g.Z], () => {
            var n;
            return null === (n = g.Z.getGuild(null == e ? void 0 : e.guildId)) || void 0 === n ? void 0 : n.premiumTier;
        }),
        { location: L } = (0, c.O)(),
        { available: x, activated: w } = (0, f.k)(s.q.STREAM_HIGH_QUALITY),
        P = (0, o.e7)([v.Z, m.Z], () => m.Z.getChannel(v.Z.getVoiceChannelId())),
        M = a.useCallback(
            (e, r, i, a) => {
                if (e) {
                    if (null != R) {
                        let e = {
                            qualityOptions: {
                                preset: b.tI.PRESET_CUSTOM,
                                resolution: r,
                                frameRate: i
                            },
                            context: y.Yn.STREAM
                        };
                        null != R.desktopSource
                            ? (e.desktopSettings = {
                                  sourceId: R.desktopSource.id,
                                  sound: !0
                              })
                            : null != R.cameraSource &&
                              (e.cameraSettings = {
                                  videoDeviceGuid: R.cameraSource.videoDeviceGuid,
                                  audioDeviceGuid: R.cameraSource.audioDeviceGuid
                              }),
                            x && (0, h.J1)(!(0, _.mc)(r, i)),
                            u.Z.setGoLiveSource(e);
                    }
                } else
                    A(n, {
                        ...L,
                        object: T.qAy.RADIO_ITEM,
                        objectType: a
                    });
            },
            [n, L, R, x]
        );
    if (null == e) return null;
    let k = r === b.tI.PRESET_DOCUMENTS ? b.ws.FPS_30 : C,
        U = b.af.map((e) => {
            let { value: n, label: r } = e,
                a = (0, d.Z)(b.tI.PRESET_CUSTOM, N, n, O, D, P);
            return (0, i.jsx)(
                l.MenuRadioItem,
                {
                    group: 'stream-settings-fps',
                    id: 'stream-settings-fps-'.concat(n),
                    label: r,
                    checked: n === C,
                    action: () => M(a, N, n, T.Qqv.RESOLUTION)
                },
                'stream-settings-fps-'.concat(n)
            );
        }),
        B = b.km.map((e) => {
            let { value: n, label: r } = e,
                a = (0, d.Z)(b.tI.PRESET_CUSTOM, n, k, O, D, P);
            return (
                x && !w && (a = !1),
                (0, i.jsx)(
                    l.MenuRadioItem,
                    {
                        group: 'stream-settings-resolution',
                        id: 'stream-settings-resolution-'.concat(n),
                        label: r,
                        checked: n === N,
                        action: () => M(a, n, k, T.Qqv.RESOLUTION)
                    },
                    'stream-settings-resolution-'.concat(n)
                )
            );
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.MenuGroup, {
                label: S.intl.string(S.t.SkkeIi),
                children: U
            }),
            (0, i.jsx)(l.MenuGroup, {
                label: S.intl.string(S.t.rHyPXl),
                children: B
            })
        ]
    });
}
