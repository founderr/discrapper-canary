"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [95953], {
        567678: (e, n, r) => {
            r.d(n, {
                Z: () => l
            });
            var s = r(785893),
                o = (r(667294), r(19585));

            function a(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function t(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        s = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    s.forEach((function(n) {
                        a(e, n, r[n])
                    }))
                }
                return e
            }

            function l(e, n) {
                return function(r) {
                    var a = (0, o.Z)(n).AnalyticsLocationProvider;
                    return (0, s.jsx)(a, {
                        children: (0, s.jsx)(e, t({}, r))
                    })
                }
            }
        },
        95953: (e, n, r) => {
            r.r(n);
            r.d(n, {
                default: () => b
            });
            var s = r(785893),
                o = (r(667294), r(304548)),
                a = r(971402),
                t = r(567678),
                l = r(153686),
                i = r(112897),
                u = (0, r(260561).B)({
                    kind: "user",
                    id: "2023-09_iar_user_reporting",
                    label: "Safety Experience IAR User Reporting",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                });
            var c = r(2590),
                d = r(473708);
            const b = (0, t.Z)((function(e) {
                var n, r = e.user,
                    t = e.relationshipType,
                    l = e.onRemoveFriend,
                    b = e.onBlock,
                    p = e.onReport,
                    O = e.onMessage,
                    E = e.onSelect,
                    M = r.isNonUserBot(),
                    g = [],
                    _ = (n = "User Profile Actions Menu", u.useExperiment({
                        location: n
                    }, {
                        autoTrackExposure: !0
                    }).enabled);
                if (!M) switch (t) {
                    case c.OGo.BLOCKED:
                        g.push((0, s.jsx)(o.MenuItem, {
                            id: "user-unblock",
                            label: d.Z.Messages.UNBLOCK,
                            action: l
                        }));
                        break;
                    case c.OGo.FRIEND:
                        g.push((0, s.jsx)(o.MenuItem, {
                            id: "user-remove",
                            label: d.Z.Messages.REMOVE_FRIEND,
                            action: l,
                            color: "danger"
                        }));
                        g.push((0, s.jsx)(o.MenuItem, {
                            id: "user-block",
                            label: d.Z.Messages.BLOCK,
                            action: b,
                            color: "danger"
                        }));
                        _ && g.push((0, s.jsx)(o.MenuItem, {
                            id: "user-report",
                            label: d.Z.Messages.REPORTS_USER_BUTTON_TITLE,
                            action: p,
                            color: "danger"
                        }));
                        break;
                    case c.OGo.NONE:
                    case c.OGo.PENDING_INCOMING:
                    default:
                        g.push((0, s.jsx)(o.MenuItem, {
                            id: "user-block",
                            label: d.Z.Messages.BLOCK,
                            action: b,
                            color: "danger"
                        }));
                        _ && g.push((0, s.jsx)(o.MenuItem, {
                            id: "user-report",
                            label: d.Z.Messages.REPORTS_USER_BUTTON_TITLE,
                            action: p,
                            color: "danger"
                        }))
                }
                M || t === c.OGo.BLOCKED || g.push((0, s.jsx)(o.MenuItem, {
                    id: "user-message",
                    label: d.Z.Messages.USER_POPOUT_MESSAGE,
                    action: O
                }));
                var f = (0, i.Z)({
                    id: r.id,
                    label: d.Z.Messages.COPY_ID_USER,
                    onSuccess: a.Zy
                });
                return (0, s.jsxs)(o.Menu, {
                    navId: "user-profile-actions",
                    "aria-label": d.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onClose: a.Zy,
                    onSelect: E,
                    children: [(0, s.jsx)(o.MenuGroup, {
                        children: g
                    }), null != f ? (0, s.jsx)(o.MenuGroup, {
                        children: f
                    }) : null]
                })
            }), [l.Z.CONTEXT_MENU, l.Z.USER_PROFILE_ACTIONS_MENU])
        }
    }
]);