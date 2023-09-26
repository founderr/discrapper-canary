"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [1904], {
        601904: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => M
            });
            var a = t(785893),
                s = t(667294),
                u = t(202351),
                l = t(304548),
                c = t(971402),
                r = t(734691),
                i = t(335072),
                o = t(384411),
                S = t(453790),
                d = t(473708);
            var p = t(860123),
                I = t(2590);

            function M(e) {
                var n, t = e.onSelect,
                    M = (0, u.cj)([i.Z], (function() {
                        return i.Z.getSettings()
                    })).clipsLength,
                    T = (n = (0, u.e7)([o.default], (function() {
                        return o.default.locale
                    })), s.useMemo((function() {
                        return [{
                            value: S.OT.SECONDS_30,
                            label: d.Z.Messages.CLIPS_LENGTH_SECONDS.format({
                                count: 30
                            })
                        }, {
                            value: S.OT.MINUTES_1,
                            label: d.Z.Messages.CLIPS_LENGTH_MINUTES.format({
                                count: 1
                            })
                        }, {
                            value: S.OT.MINUTES_2,
                            label: d.Z.Messages.CLIPS_LENGTH_MINUTES.format({
                                count: 2
                            })
                        }]
                    }), [n]));
                return (0, a.jsxs)(l.Menu, {
                    navId: "clips-context",
                    "aria-label": d.Z.Messages.CLIPS_SETTINGS,
                    onClose: c.Zy,
                    onSelect: t,
                    children: [(0, a.jsx)(l.MenuGroup, {
                        children: (0, a.jsx)(l.MenuItem, {
                            id: "clips-duration",
                            label: d.Z.Messages.CLIPS_SETTINGS_LENGTH,
                            children: T.map((function(e) {
                                var n = e.value,
                                    t = e.label;
                                return (0, a.jsx)(l.MenuRadioItem, {
                                    id: "clips-duration-".concat(n),
                                    group: "clips-duration",
                                    label: t,
                                    action: function() {
                                        return (0, p.eU)(n)
                                    },
                                    checked: n === M
                                }, n)
                            }))
                        })
                    }), (0, a.jsx)(l.MenuGroup, {
                        children: (0, a.jsx)(l.MenuItem, {
                            id: "clips-settings",
                            label: d.Z.Messages.CLIPS_SETTINGS,
                            action: function() {
                                return r.Z.open(I.oAB.CLIPS)
                            }
                        })
                    })]
                })
            }
        }
    }
]);