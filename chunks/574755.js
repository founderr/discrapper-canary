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
    E = n(233685),
    _ = n(388032),
    C = n(644517),
    I = n(277253),
    f = n(232186);
function N(e) {
    let { className: t, showHeader: n = !0 } = e,
        N = u.tU.useSetting(),
        { enableViewerClipping: A } = d.Z.useExperiment({ location: 'Clips Settings' }, { autoTrackExposure: !1 }),
        { analyticsLocations: b } = (0, o.ZP)(),
        v = (0, h.Go)(),
        { viewerClipsEnabled: j } = (0, r.cj)([g.Z], () => g.Z.getSettings()),
        O = (0, p.Z)(m.Z);
    return (
        s.useEffect(() => {
            (0, c.EW)(l.z.CLIPS_SETTINGS_BETA_TAG);
        }),
        (0, i.jsxs)(o.Gt, {
            value: b,
            children: [
                (v || n) &&
                    (0, i.jsx)(a.FormSection, {
                        className: t,
                        tag: a.FormTitleTags.H1,
                        title: n
                            ? (0, i.jsxs)('div', {
                                  className: C.headerContainer,
                                  children: [_.intl.string(_.t.z2jK6e), (0, i.jsx)(S.Z, {})]
                              })
                            : null,
                        children:
                            v &&
                            (0, i.jsxs)('form', {
                                onSubmit: (e) => e.preventDefault(),
                                children: [(0, i.jsx)(T.Z, {}), (0, i.jsx)(E.Z, {})]
                            })
                    }),
                v && (0, i.jsx)(a.FormDivider, {}),
                (0, i.jsxs)(a.FormSection, {
                    className: n || v ? f.marginTop20 : t,
                    children: [
                        (0, i.jsx)(a.FormSwitch, {
                            hideBorder: !0,
                            className: I.formItem,
                            value: N,
                            note: _.intl.string(_.t['wW9/zc']),
                            onChange: (e) => x.yg({ allowVoiceRecording: e }),
                            children: _.intl.string(_.t.AGDDkJ)
                        }),
                        A &&
                            O &&
                            (0, i.jsx)(a.FormSwitch, {
                                hideBorder: !0,
                                className: I.formItem,
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
