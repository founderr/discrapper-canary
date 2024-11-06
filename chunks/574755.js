n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(906732),
    c = n(605236),
    d = n(441167),
    u = n(695346),
    m = n(131951),
    h = n(924557),
    g = n(435064),
    p = n(779618),
    x = n(39604),
    S = n(703288),
    T = n(491758),
    C = n(233685),
    _ = n(388032),
    E = n(590288),
    f = n(595362),
    I = n(113207);
function N(e) {
    let { className: t, showHeader: n = !0 } = e,
        N = u.tU.useSetting(),
        { enableViewerClipping: b } = d.Z.useExperiment({ location: 'Clips Settings' }, { autoTrackExposure: !1 }),
        { analyticsLocations: A } = (0, o.ZP)(),
        v = (0, h.Go)(),
        { viewerClipsEnabled: j } = (0, r.cj)([g.Z], () => g.Z.getSettings()),
        O = (0, p.Z)(m.Z);
    return (
        s.useEffect(() => {
            (0, c.EW)(l.z.CLIPS_SETTINGS_BETA_TAG);
        }),
        (0, i.jsxs)(o.Gt, {
            value: A,
            children: [
                (v || n) &&
                    (0, i.jsx)(a.FormSection, {
                        className: t,
                        tag: a.FormTitleTags.H1,
                        title: n
                            ? (0, i.jsxs)('div', {
                                  className: E.headerContainer,
                                  children: [_.intl.string(_.t.z2jK6e), (0, i.jsx)(S.Z, {})]
                              })
                            : null,
                        children:
                            v &&
                            (0, i.jsxs)('form', {
                                onSubmit: (e) => e.preventDefault(),
                                children: [(0, i.jsx)(T.Z, {}), (0, i.jsx)(C.Z, {})]
                            })
                    }),
                v && (0, i.jsx)(a.FormDivider, {}),
                (0, i.jsxs)(a.FormSection, {
                    className: n || v ? I.marginTop20 : t,
                    children: [
                        (0, i.jsx)(a.FormSwitch, {
                            hideBorder: !0,
                            className: f.formItem,
                            value: N,
                            note: _.intl.string(_.t['wW9/zc']),
                            onChange: (e) => x.yg({ allowVoiceRecording: e }),
                            children: _.intl.string(_.t.AGDDkJ)
                        }),
                        b &&
                            O &&
                            (0, i.jsx)(a.FormSwitch, {
                                hideBorder: !0,
                                className: f.formItem,
                                value: j,
                                note: _.intl.string(_.t['0vjy8P']),
                                onChange: (e) =>
                                    x.yl({
                                        enabled: e,
                                        trackAnalytics: !0
                                    }),
                                children: _.intl.string(_.t.NWw7kZ)
                            })
                    ]
                })
            ]
        })
    );
}
