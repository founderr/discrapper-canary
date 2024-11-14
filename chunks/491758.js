n.d(t, {
    Z: function () {
        return R;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(660216),
    d = n(230711),
    u = n(825209),
    m = n(706454),
    h = n(494620),
    g = n(131951),
    p = n(556296),
    x = n(924557),
    S = n(435064),
    T = n(894694),
    C = n(779618),
    _ = n(39604),
    E = n(442334),
    I = n(356659),
    f = n(981631),
    N = n(37113),
    A = n(526761),
    b = n(388032),
    v = n(703353),
    j = n(595362),
    O = n(113207);
function R() {
    let e = (0, a.e7)([g.Z], () => g.Z.getHardwareEncoding()),
        { clipsEnabled: t, remindersEnabled: n, decoupledClipsEnabled: r, clipsLength: R, clipsQuality: P } = (0, a.cj)([S.Z], () => S.Z.getSettings()),
        D = (0, a.e7)([S.Z], () => S.Z.getHardwareClassification()),
        y = (0, a.e7)([p.Z], () => p.Z.getKeybindForAction(f.kg4.SAVE_CLIP, !0)),
        B = S.Z.isDecoupledGameClippingEnabled(),
        L = (0, C.Z)(g.Z),
        { showClipsHeaderEntrypoint: Z } = x.NV.useExperiment({ location: 'clips_recording_settings' }, { autoTrackExposure: !1 });
    l()(null != y, 'Save clip keybind unset');
    let F = (0, a.e7)([m.default], () => m.default.locale),
        M = s.useMemo(
            () => [
                {
                    value: I.OT.SECONDS_30,
                    label: b.intl.formatToPlainString(b.t['bTFv//'], { count: 30 })
                },
                {
                    value: I.OT.MINUTES_1,
                    label: b.intl.formatToPlainString(b.t.ICo9Nj, { count: 1 })
                },
                {
                    value: I.OT.MINUTES_2,
                    label: b.intl.formatToPlainString(b.t.ICo9Nj, { count: 2 })
                }
            ],
            [F]
        ),
        k = s.useMemo(
            () => [
                {
                    value: N.LY.RESOLUTION_480,
                    label: b.intl.formatToPlainString(b.t.TEOC0N, { resolution: N.LY.RESOLUTION_480 })
                },
                {
                    value: N.LY.RESOLUTION_720,
                    label: b.intl.formatToPlainString(b.t.TEOC0N, { resolution: N.LY.RESOLUTION_720 })
                },
                {
                    value: N.LY.RESOLUTION_1080,
                    label: b.intl.formatToPlainString(b.t.TEOC0N, { resolution: N.LY.RESOLUTION_1080 })
                },
                {
                    value: N.LY.RESOLUTION_1440,
                    label: b.intl.formatToPlainString(b.t.TEOC0N, { resolution: N.LY.RESOLUTION_1440 })
                },
                {
                    value: N.LY.RESOLUTION_SOURCE,
                    label: b.intl.string(b.t.XjXqzs)
                }
            ],
            [F]
        ),
        w = s.useMemo(
            () => [
                {
                    value: N.ws.FPS_15,
                    label: b.intl.formatToPlainString(b.t.Qb44XF, { fps: N.ws.FPS_15 })
                },
                {
                    value: N.ws.FPS_30,
                    label: b.intl.formatToPlainString(b.t.Qb44XF, { fps: N.ws.FPS_30 })
                },
                {
                    value: N.ws.FPS_60,
                    label: b.intl.formatToPlainString(b.t.Qb44XF, { fps: N.ws.FPS_60 })
                }
            ],
            [F]
        ),
        U = s.useCallback(
            (e) => {
                c.Z.setKeybind({
                    ...y,
                    shortcut: e
                });
            },
            [y]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.FormSection, {
                disabled: !e,
                children: [
                    !e &&
                        (0, i.jsx)(h.Z, {
                            look: h.z.WARNING,
                            className: j.formItem,
                            children: b.intl.format(b.t.kiaF4e, { onClick: () => d.Z.open(f.oAB.VOICE, null, { scrollPosition: A.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION }) })
                        }),
                    D === T.x.BELOW_MINIMUM
                        ? (0, i.jsx)(h.Z, {
                              look: h.z.WARNING,
                              className: j.formItem,
                              children: b.intl.string(b.t.SIxrIC)
                          })
                        : null,
                    (0, i.jsx)(o.FormSwitch, {
                        hideBorder: !0,
                        disabled: !e,
                        className: j.formItem,
                        value: t,
                        note: b.intl.string(b.t['4Qw3ND']),
                        onChange: (e) =>
                            _.em({
                                clipsEnabled: e,
                                trackAnalytics: !0
                            }),
                        children: b.intl.string(b.t.h8rgrK)
                    }),
                    e &&
                        (0, i.jsx)(h.Z, {
                            className: j.formItem,
                            children: b.intl.string(b.t['Z+Mfqa'])
                        })
                ]
            }),
            B &&
                L &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.FormDivider, {}),
                        (0, i.jsx)(o.FormSection, {
                            className: O.marginTop20,
                            disabled: !e,
                            children: (0, i.jsx)(o.FormSwitch, {
                                hideBorder: !0,
                                disabled: !e,
                                className: j.formItem,
                                value: r,
                                note: b.intl.string(b.t.YP3ujo),
                                onChange: (e) =>
                                    _._Q({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: b.intl.string(b.t.yXvykp)
                            })
                        })
                    ]
                }),
            Z &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.FormDivider, {}),
                        (0, i.jsx)(o.FormSection, {
                            className: O.marginTop20,
                            children: (0, i.jsx)(o.FormSwitch, {
                                hideBorder: !0,
                                className: j.formItem,
                                value: n,
                                note: b.intl.string(b.t.m4Cjj4),
                                onChange: (e) => _.N0(e),
                                children: b.intl.string(b.t['3zwNf3'])
                            })
                        })
                    ]
                }),
            (0, i.jsx)(o.FormDivider, {}),
            (0, i.jsxs)(o.FormSection, {
                className: O.marginTop20,
                children: [
                    (0, i.jsx)(E.Q, {
                        className: j.formItem,
                        select: _.eU,
                        title: b.intl.string(b.t.OgfUio),
                        note: b.intl.string(b.t.H7j4tb),
                        value: R,
                        options: M
                    }),
                    (0, i.jsx)(E.Q, {
                        className: j.formItem,
                        select: (e) =>
                            _.yi({
                                resolution: e,
                                frameRate: P.frameRate
                            }),
                        title: b.intl.string(b.t.aFudZG),
                        note: b.intl.string(b.t.nIrkW1),
                        value: P.resolution,
                        options: k
                    }),
                    (0, i.jsx)(E.Q, {
                        className: j.formItem,
                        select: (e) =>
                            _.yi({
                                resolution: P.resolution,
                                frameRate: e
                            }),
                        title: b.intl.string(b.t['2wScLy']),
                        note: b.intl.string(b.t['Rf9+f3']),
                        value: P.frameRate,
                        options: w
                    }),
                    (0, i.jsx)(E.O, {
                        className: j.formItem,
                        title: b.intl.string(b.t.pf54ER),
                        note: b.intl.string(b.t['QyB/jI']),
                        children: (0, i.jsx)('div', {
                            className: v.keyRecorder,
                            children: (0, i.jsx)(u.Z, {
                                defaultValue: y.shortcut,
                                onChange: U
                            })
                        })
                    })
                ]
            })
        ]
    });
}
