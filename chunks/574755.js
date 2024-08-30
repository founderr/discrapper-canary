t.d(s, {
    Z: function () {
        return p;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(704215),
    o = t(481060),
    l = t(906732),
    c = t(605236),
    d = t(441167),
    u = t(695346),
    _ = t(131951),
    E = t(924557),
    T = t(435064),
    I = t(779618),
    S = t(39604),
    N = t(703288),
    m = t(491758),
    C = t(183632),
    g = t(689938),
    A = t(514651),
    h = t(992133),
    O = t(224499);
function p(e) {
    let { className: s, showHeader: t = !0 } = e,
        p = u.tU.useSetting(),
        { enableViewerClipping: x } = d.Z.useExperiment({ location: 'Clips Settings' }, { autoTrackExposure: !1 }),
        { analyticsLocations: R } = (0, l.ZP)(),
        f = (0, E.Go)(),
        { viewerClipsEnabled: M } = (0, i.cj)([T.Z], () => T.Z.getSettings()),
        D = (0, I.Z)(_.Z);
    return (
        a.useEffect(() => {
            (0, c.EW)(r.z.CLIPS_SETTINGS_BETA_TAG);
        }),
        (0, n.jsxs)(l.Gt, {
            value: R,
            children: [
                (f || t) &&
                    (0, n.jsx)(o.FormSection, {
                        className: s,
                        tag: o.FormTitleTags.H1,
                        title: t
                            ? (0, n.jsxs)('div', {
                                  className: A.headerContainer,
                                  children: [g.Z.Messages.CLIPS, (0, n.jsx)(N.Z, {})]
                              })
                            : null,
                        children:
                            f &&
                            (0, n.jsxs)('form', {
                                onSubmit: (e) => e.preventDefault(),
                                children: [(0, n.jsx)(m.Z, {}), (0, n.jsx)(C.Z, {})]
                            })
                    }),
                f && (0, n.jsx)(o.FormDivider, {}),
                (0, n.jsxs)(o.FormSection, {
                    className: t || f ? O.marginTop20 : s,
                    children: [
                        (0, n.jsx)(o.FormSwitch, {
                            hideBorder: !0,
                            className: h.formItem,
                            value: p,
                            note: g.Z.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING_DESCRIPTION,
                            onChange: (e) => S.yg({ allowVoiceRecording: e }),
                            children: g.Z.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING
                        }),
                        x &&
                            D &&
                            (0, n.jsx)(o.FormSwitch, {
                                hideBorder: !0,
                                className: h.formItem,
                                value: M,
                                note: g.Z.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE_DESCRIPTION,
                                onChange: (e) =>
                                    S.yl({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: g.Z.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE
                            })
                    ]
                })
            ]
        })
    );
}
