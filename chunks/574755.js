t.d(s, {
    Z: function () {
        return p;
    }
});
var n = t(200651),
    a = t(192379),
    i = t(442837),
    r = t(704215),
    o = t(481060),
    l = t(906732),
    c = t(605236),
    d = t(441167),
    _ = t(695346),
    u = t(131951),
    E = t(924557),
    T = t(435064),
    S = t(779618),
    I = t(39604),
    N = t(703288),
    m = t(491758),
    C = t(183632),
    A = t(689938),
    g = t(590288),
    h = t(595362),
    O = t(113207);
function p(e) {
    let { className: s, showHeader: t = !0 } = e,
        p = _.tU.useSetting(),
        { enableViewerClipping: R } = d.Z.useExperiment({ location: 'Clips Settings' }, { autoTrackExposure: !1 }),
        { analyticsLocations: x } = (0, l.ZP)(),
        M = (0, E.Go)(),
        { viewerClipsEnabled: f } = (0, i.cj)([T.Z], () => T.Z.getSettings()),
        D = (0, S.Z)(u.Z);
    return (
        a.useEffect(() => {
            (0, c.EW)(r.z.CLIPS_SETTINGS_BETA_TAG);
        }),
        (0, n.jsxs)(l.Gt, {
            value: x,
            children: [
                (M || t) &&
                    (0, n.jsx)(o.FormSection, {
                        className: s,
                        tag: o.FormTitleTags.H1,
                        title: t
                            ? (0, n.jsxs)('div', {
                                  className: g.headerContainer,
                                  children: [A.Z.Messages.CLIPS, (0, n.jsx)(N.Z, {})]
                              })
                            : null,
                        children:
                            M &&
                            (0, n.jsxs)('form', {
                                onSubmit: (e) => e.preventDefault(),
                                children: [(0, n.jsx)(m.Z, {}), (0, n.jsx)(C.Z, {})]
                            })
                    }),
                M && (0, n.jsx)(o.FormDivider, {}),
                (0, n.jsxs)(o.FormSection, {
                    className: t || M ? O.marginTop20 : s,
                    children: [
                        (0, n.jsx)(o.FormSwitch, {
                            hideBorder: !0,
                            className: h.formItem,
                            value: p,
                            note: A.Z.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING_DESCRIPTION,
                            onChange: (e) => I.yg({ allowVoiceRecording: e }),
                            children: A.Z.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING
                        }),
                        R &&
                            D &&
                            (0, n.jsx)(o.FormSwitch, {
                                hideBorder: !0,
                                className: h.formItem,
                                value: f,
                                note: A.Z.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE_DESCRIPTION,
                                onChange: (e) =>
                                    I.yl({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: A.Z.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE
                            })
                    ]
                })
            ]
        })
    );
}
