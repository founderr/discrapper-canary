"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [54313], {
        95581: (t, n, e) => {
            e.r(n);
            e.d(n, {
                default: () => P
            });
            var i = e(785893),
                o = e(667294),
                a = e(202351),
                s = e(735885),
                c = e(734691),
                r = e(213276),
                l = e(19292),
                u = e(373710);
            const d = (0, e(260561).B)({
                kind: "user",
                id: "2023-03_aa_user_segment_filter",
                label: "AA test to validate segmentation filter",
                defaultConfig: {
                    isEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "AA test enabled. Noop on UI effect.",
                    config: {
                        isEnabled: !0
                    }
                }]
            });
            var f = e(634698),
                Z = e(153686),
                _ = e(396043),
                b = e(19585),
                E = e(50034),
                S = e(223219),
                p = e(64234),
                g = e(49929),
                v = e(2590),
                k = e(473708);
            var h = o.forwardRef((function() {
                d.trackExposure({
                    location: "cd25e4_1"
                });
                u.Z.useExperiment({
                    location: "user_setting_auto"
                }, {
                    autoTrackExposure: !1
                }).isEnabled && u.Z.trackExposure({
                    location: "user_setting_manual"
                });
                var t = (0, a.e7)([p.Z], (function() {
                        return p.Z.theme
                    })),
                    n = (0, a.e7)([p.Z], (function() {
                        return p.Z.darkSidebar ? v.BRd.DARK : void 0
                    })),
                    e = (0, a.cj)([S.Z], (function() {
                        var t = S.Z.getSection(),
                            n = S.Z.getSubsection(),
                            e = S.Z.getProps();
                        return {
                            section: t,
                            subsection: n,
                            analyticsLocation: e.analyticsLocation,
                            analyticsLocations: e.analyticsLocations
                        }
                    })),
                    h = e.section,
                    P = e.subsection,
                    x = e.analyticsLocation,
                    y = e.analyticsLocations,
                    T = (0, f.Z)(h),
                    m = (0, f.Z)(P),
                    L = (0, b.Z)(Z.Z.USER_SETTINGS).AnalyticsLocationProvider;
                o.useEffect((function() {
                    null != h && (h !== T || P !== m) && function(t) {
                        var n = t.destinationPane,
                            e = t.originPane,
                            i = void 0 === e ? null : e,
                            o = t.source,
                            a = void 0 === o ? null : o,
                            s = t.subsection,
                            c = void 0 === s ? null : s,
                            r = t.locationStack,
                            l = void 0 === r ? null : r;
                        _.ZP.trackWithMetadata(v.rMx.SETTINGS_PANE_VIEWED, {
                            settings_type: "user",
                            origin_pane: i,
                            destination_pane: n,
                            location_stack: l,
                            source: a,
                            subsection: c
                        })
                    }({
                        destinationPane: h,
                        originPane: null != T ? T : null,
                        source: x,
                        subsection: P,
                        locationStack: y
                    })
                }), [h, T, P, m, x, y]);
                var A = (0, g.Z)(),
                    R = (0, E.b)(),
                    j = o.useCallback((function(t) {
                        c.Z.setSection(t)
                    }), []);
                return (0, i.jsx)(L, {
                    children: (0, i.jsx)(r.Z, {
                        root: !0,
                        page: v.ZY5.USER_SETTINGS,
                        children: (0, i.jsx)(l.ZP, {
                            theme: t,
                            title: k.Z.Messages.USER_SETTINGS,
                            sidebarTheme: n,
                            section: h,
                            onSetSection: j,
                            onClose: s.xf,
                            sections: A,
                            isEligibleForPomelo: R
                        })
                    })
                })
            }));
            const P = o.forwardRef((function() {
                var t = (0, a.e7)([S.Z], (function() {
                        return S.Z.getProps().analyticsLocations
                    })),
                    n = (0, b.Z)(t).AnalyticsLocationProvider;
                return (0, i.jsx)(n, {
                    children: (0, i.jsx)(h, {})
                })
            }))
        }
    }
]);