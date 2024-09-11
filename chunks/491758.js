t.d(s, {
    Z: function () {
        return L;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(512722),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(660216),
    d = t(230711),
    _ = t(825209),
    u = t(836157),
    E = t(706454),
    T = t(494620),
    S = t(131951),
    I = t(556296),
    N = t(924557),
    m = t(435064),
    C = t(894694),
    A = t(779618),
    g = t(39604),
    h = t(442334),
    O = t(356659),
    p = t(981631),
    R = t(37113),
    x = t(526761),
    f = t(689938),
    M = t(703353),
    D = t(595362),
    P = t(113207);
function L() {
    let e = (0, o.e7)([S.Z], () => S.Z.getHardwareEncoding()),
        { clipsEnabled: s, remindersEnabled: t, decoupledClipsEnabled: i, clipsLength: L, clipsQuality: b } = (0, o.cj)([m.Z], () => m.Z.getSettings()),
        Z = (0, o.e7)([m.Z], () => m.Z.getHardwareClassification()),
        v = (0, o.e7)([I.Z], () => I.Z.getKeybindForAction(p.kg4.SAVE_CLIP, !0)),
        { enableDecoupledGameClipping: j } = u.Z.useExperiment({ location: 'clips_recording_settings' }, { autoTrackExposure: !1 }),
        B = (0, A.Z)(S.Z),
        { showClipsHeaderEntrypoint: U } = N.NV.useExperiment({ location: 'clips_recording_settings' }, { autoTrackExposure: !1 });
    r()(null != v, 'Save clip keybind unset');
    let G = (0, o.e7)([E.default], () => E.default.locale),
        F = a.useMemo(
            () => [
                {
                    value: O.OT.SECONDS_30,
                    label: f.Z.Messages.CLIPS_LENGTH_SECONDS.format({ count: 30 })
                },
                {
                    value: O.OT.MINUTES_1,
                    label: f.Z.Messages.CLIPS_LENGTH_MINUTES.format({ count: 1 })
                },
                {
                    value: O.OT.MINUTES_2,
                    label: f.Z.Messages.CLIPS_LENGTH_MINUTES.format({ count: 2 })
                }
            ],
            [G]
        ),
        y = a.useMemo(
            () => [
                {
                    value: R.LY.RESOLUTION_480,
                    label: f.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({ resolution: R.LY.RESOLUTION_480 })
                },
                {
                    value: R.LY.RESOLUTION_720,
                    label: f.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({ resolution: R.LY.RESOLUTION_720 })
                },
                {
                    value: R.LY.RESOLUTION_1080,
                    label: f.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({ resolution: R.LY.RESOLUTION_1080 })
                },
                {
                    value: R.LY.RESOLUTION_1440,
                    label: f.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({ resolution: R.LY.RESOLUTION_1440 })
                },
                {
                    value: R.LY.RESOLUTION_SOURCE,
                    label: f.Z.Messages.SCREENSHARE_SOURCE
                }
            ],
            [G]
        ),
        V = a.useMemo(
            () => [
                {
                    value: R.ws.FPS_15,
                    label: f.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({ fps: R.ws.FPS_15 })
                },
                {
                    value: R.ws.FPS_30,
                    label: f.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({ fps: R.ws.FPS_30 })
                },
                {
                    value: R.ws.FPS_60,
                    label: f.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({ fps: R.ws.FPS_60 })
                }
            ],
            [G]
        ),
        Y = a.useCallback(
            (e) => {
                c.Z.setKeybind({
                    ...v,
                    shortcut: e
                });
            },
            [v]
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.FormSection, {
                disabled: !e,
                children: [
                    !e &&
                        (0, n.jsx)(T.Z, {
                            look: T.z.WARNING,
                            className: D.formItem,
                            children: f.Z.Messages.CLIPS_SETTINGS_HW_ENCODING_MUST_BE_ENABLED_INFOBOX.format({ onClick: () => d.Z.open(p.oAB.VOICE, null, { scrollPosition: x.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION }) })
                        }),
                    Z === C.x.BELOW_MINIMUM
                        ? (0, n.jsx)(T.Z, {
                              look: T.z.WARNING,
                              className: D.formItem,
                              children: f.Z.Messages.CLIPS_SETTINGS_UNDER_MIN_SPECS
                          })
                        : null,
                    (0, n.jsx)(l.FormSwitch, {
                        hideBorder: !0,
                        disabled: !e,
                        className: D.formItem,
                        value: s,
                        note: f.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS_HELP,
                        onChange: (e) =>
                            g.em({
                                clipsEnabled: e,
                                trackAnalytics: !0
                            }),
                        children: f.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
                    }),
                    e &&
                        (0, n.jsx)(T.Z, {
                            className: D.formItem,
                            children: f.Z.Messages.CLIPS_SETTINGS_QUALITY_INFOBOX
                        })
                ]
            }),
            j &&
                B &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(l.FormDivider, {}),
                        (0, n.jsx)(l.FormSection, {
                            className: P.marginTop20,
                            disabled: !e,
                            children: (0, n.jsx)(l.FormSwitch, {
                                hideBorder: !0,
                                disabled: !e,
                                className: D.formItem,
                                value: i,
                                note: f.Z.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS_HELP,
                                onChange: (e) =>
                                    g._Q({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: f.Z.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS
                            })
                        })
                    ]
                }),
            U &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(l.FormDivider, {}),
                        (0, n.jsx)(l.FormSection, {
                            className: P.marginTop20,
                            children: (0, n.jsx)(l.FormSwitch, {
                                hideBorder: !0,
                                className: D.formItem,
                                value: t,
                                note: f.Z.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS_HELP,
                                onChange: (e) => g.N0(e),
                                children: f.Z.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS
                            })
                        })
                    ]
                }),
            (0, n.jsx)(l.FormDivider, {}),
            (0, n.jsxs)(l.FormSection, {
                className: P.marginTop20,
                children: [
                    (0, n.jsx)(h.Q, {
                        className: D.formItem,
                        select: g.eU,
                        title: f.Z.Messages.CLIPS_SETTINGS_LENGTH,
                        note: f.Z.Messages.CLIPS_SETTINGS_LENGTH_HELP,
                        value: L,
                        options: F
                    }),
                    (0, n.jsx)(h.Q, {
                        className: D.formItem,
                        select: (e) =>
                            g.yi({
                                resolution: e,
                                frameRate: b.frameRate
                            }),
                        title: f.Z.Messages.CLIPS_SETTINGS_RESOLUTION,
                        note: f.Z.Messages.CLIPS_SETTINGS_RESOLUTION_NOTE,
                        value: b.resolution,
                        options: y
                    }),
                    (0, n.jsx)(h.Q, {
                        className: D.formItem,
                        select: (e) =>
                            g.yi({
                                resolution: b.resolution,
                                frameRate: e
                            }),
                        title: f.Z.Messages.CLIPS_SETTINGS_FRAMERATE,
                        note: f.Z.Messages.CLIPS_SETTINGS_FRAMERATE_NOTE,
                        value: b.frameRate,
                        options: V
                    }),
                    (0, n.jsx)(h.O, {
                        className: D.formItem,
                        title: f.Z.Messages.CLIPS_SETTINGS_KEYBIND,
                        note: f.Z.Messages.CLIPS_SETTINGS_KEYBIND_HELP,
                        children: (0, n.jsx)('div', {
                            className: M.keyRecorder,
                            children: (0, n.jsx)(_.Z, {
                                defaultValue: v.shortcut,
                                onChange: Y
                            })
                        })
                    })
                ]
            })
        ]
    });
}
