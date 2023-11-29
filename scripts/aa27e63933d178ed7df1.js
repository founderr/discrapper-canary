(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43151"], {
        35647: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                IdIcon: function() {
                    return s
                }
            });
            var l = t("37983");
            t("884691");
            var i = t("669491"),
                r = t("75196");
            let s = e => {
                let {
                    width: n = 24,
                    height: t = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    width: n,
                    height: t,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M15.2979 14.48C14.8405 14.928 14.2199 15.152 13.4359 15.152H12.0499V9.18803H13.4359C14.2199 9.18803 14.8405 9.41203 15.2979 9.86003C15.7552 10.308 15.9839 11.078 15.9839 12.17C15.9839 13.262 15.7552 14.032 15.2979 14.48Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM6 17H8.044V7.34003H6V17ZM10.0059 7.34003V17H13.4359C14.9012 17 16.0305 16.5847 16.8239 15.754C17.6265 14.9234 18.0279 13.7287 18.0279 12.17C18.0279 10.6114 17.6265 9.41669 16.8239 8.58603C16.0305 7.75536 14.9012 7.34003 13.4359 7.34003H10.0059Z",
                        fill: "string" == typeof s ? s : s.css,
                        className: o
                    })]
                })
            }
        },
        861370: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return u
                }
            });
            var l = t("37983");
            t("884691");
            var i = t("77078"),
                r = t("845579"),
                s = t("662255"),
                o = t("306160");

            function u(e) {
                let {
                    id: n,
                    label: t,
                    onSuccess: u,
                    shiftId: a,
                    showIconFirst: d
                } = e, c = r.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !o.SUPPORTS_COPY) return null;
                let C = "devmode-copy-id-".concat(n);
                return (0, l.jsx)(i.MenuItem, {
                    id: C,
                    label: t,
                    action: function(e) {
                        let t = null != a && e.shiftKey ? a : n;
                        (0, o.copy)(t), null == u || u()
                    },
                    icon: s.default,
                    showIconFirst: d
                }, C)
            }
        },
        348866: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return a
                }
            });
            var l = t("37983");
            t("884691");
            var i = t("77078"),
                r = t("272030"),
                s = t("861370"),
                o = t("970755"),
                u = t("782340");

            function a(e) {
                let {
                    channel: n,
                    integration: t,
                    onSelect: a
                } = e, d = (0, s.default)({
                    id: n.id,
                    label: u.default.Messages.COPY_ID_APPLICATION
                });
                return (0, l.jsxs)(i.Menu, {
                    "aria-label": u.default.Messages.MANAGE_INTEGRATION,
                    navId: "manage-integration",
                    onClose: r.closeContextMenu,
                    onSelect: a,
                    children: [(0, l.jsx)(i.MenuGroup, {
                        children: (0, l.jsx)(i.MenuItem, {
                            id: "remove-integration",
                            label: u.default.Messages.BOT_PROFILE_REMOVE_PRIVATE_CHANNEL_INTEGRATION,
                            action: () => {
                                (0, o.deletePrivateChannelIntegration)(n.id, t.application.id), null != a && a()
                            },
                            color: "danger"
                        })
                    }), (0, l.jsx)(i.MenuGroup, {
                        children: d
                    })]
                })
            }
        },
        662255: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return o
                }
            });
            var l = t("37983");
            t("884691");
            var i = t("469563"),
                r = t("35647"),
                s = t("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: n = 24,
                        height: t = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: n,
                        height: t,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, r.IdIcon, void 0, {
                    size: 24
                })
        }
    }
]);