"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [54313], {
        259367: (t, n, e) => {
            e.r(n);
            e.d(n, {
                default: () => P
            });
            var o = e(785893),
                i = e(667294),
                a = e(202351),
                s = e(735885),
                c = e(396179),
                r = e(213276),
                l = e(19292),
                u = e(634698),
                d = e(153686),
                Z = e(396043),
                f = e(19585),
                _ = e(787965);
            const S = (0, e(249139).Z)({
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
            var b = e(50034),
                p = e(223219),
                E = e(64234),
                g = e(695691),
                v = e(2590),
                k = e(473708);
            var h = i.forwardRef((function() {
                S.trackExposure({
                    location: "cd25e4_1"
                });
                _.Z.useExperiment({
                    location: "user_setting_auto"
                }, {
                    autoTrackExposure: !1
                });
                _.Z.trackExposure({
                    location: "user_setting_manual"
                });
                var t = (0, a.e7)([E.Z], (function() {
                        return E.Z.theme
                    })),
                    n = (0, a.e7)([E.Z], (function() {
                        return E.Z.darkSidebar ? v.BRd.DARK : void 0
                    })),
                    e = (0, a.cj)([p.Z], (function() {
                        var t = p.Z.getSection(),
                            n = p.Z.getSubsection(),
                            e = p.Z.getProps();
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
                    T = (0, u.Z)(h),
                    m = (0, u.Z)(P),
                    L = (0, f.Z)(d.Z.USER_SETTINGS).AnalyticsLocationProvider;
                i.useEffect((function() {
                    null != h && (h !== T || P !== m) && function(t) {
                        var n = t.destinationPane,
                            e = t.originPane,
                            o = void 0 === e ? null : e,
                            i = t.source,
                            a = void 0 === i ? null : i,
                            s = t.subsection,
                            c = void 0 === s ? null : s,
                            r = t.locationStack,
                            l = void 0 === r ? null : r;
                        Z.ZP.trackWithMetadata(v.rMx.SETTINGS_PANE_VIEWED, {
                            settings_type: "user",
                            origin_pane: o,
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
                    R = (0, b.b)(),
                    j = i.useCallback((function(t) {
                        c.Z.setSection(t)
                    }), []);
                return (0, o.jsx)(L, {
                    children: (0, o.jsx)(r.Z, {
                        root: !0,
                        page: v.ZY5.USER_SETTINGS,
                        children: (0, o.jsx)(l.ZP, {
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
            const P = i.forwardRef((function() {
                var t = (0, a.e7)([p.Z], (function() {
                        return p.Z.getProps().analyticsLocations
                    })),
                    n = (0, f.Z)(t).AnalyticsLocationProvider;
                return (0, o.jsx)(n, {
                    children: (0, o.jsx)(h, {})
                })
            }))
        }
    }
]);