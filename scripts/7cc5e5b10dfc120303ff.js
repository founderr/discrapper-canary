"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [3790], {
        743219: (e, n, t) => {
            t.d(n, {
                r: () => i,
                l: () => o
            });
            var r = t(260561),
                i = (0, r.B)({
                    kind: "guild",
                    id: "2022-07_report_raids",
                    label: "Report Raids",
                    defaultConfig: {
                        enableRaidReporting: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Reporting Of Raids",
                        config: {
                            enableRaidReporting: !0
                        }
                    }]
                }),
                o = (0, r.B)({
                    kind: "guild",
                    id: "2022-10_guild_raid_messaging",
                    label: "Raid Alerts",
                    defaultConfig: {
                        enableRaidAlerts: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Reporting Of Raids",
                        config: {
                            enableRaidAlerts: !0
                        }
                    }]
                })
        },
        703790: (e, n, t) => {
            t.d(n, {
                Z: () => O
            });
            var r = t(993231),
                i = t(281110),
                o = t(744564),
                l = t(735885),
                u = t(296602),
                a = t(743219),
                s = t(10390),
                c = t(189651),
                d = t(861426),
                f = t(944522),
                E = t(664625),
                _ = t(21372),
                I = t(567403),
                p = t(488110),
                S = t(391438),
                T = t(424127),
                y = t(2590),
                b = t(473708);

            function A(e, n, t, r, i, o, l) {
                try {
                    var u = e[o](l),
                        a = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(a) : Promise.resolve(a).then(r, i)
            }

            function h(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function l(e) {
                            A(o, r, i, l, u, "next", e)
                        }

                        function u(e) {
                            A(o, r, i, l, u, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function N(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function G(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        N(e, n, t[n])
                    }))
                }
                return e
            }

            function g(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }
            var D = function(e, n) {
                    var t, r, i, o, l = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function u(o) {
                        return function(u) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < i[1]) {
                                                l.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2];
                                                l.ops.push(o);
                                                break
                                            }
                                            i[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    o = n.call(e, l)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    t = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, u])
                        }
                    }
                },
                v = new u.Z("GuildSettingsActionCreators"),
                L = {
                    init: function(e, n, t, r) {
                        o.Z.dispatch({
                            type: "GUILD_SETTINGS_INIT",
                            guildId: e,
                            section: n,
                            subsection: r,
                            location: t
                        })
                    },
                    open: function(e, n, t, r) {
                        var i;
                        if (null === (i = I.Z.getGuild(e)) || void 0 === i ? void 0 : i.hasFeature(y.oNc.COMMUNITY)) {
                            if (n === y.pNK.GUILD_AUTOMOD) {
                                n = y.pNK.SAFETY;
                                r = y.KsC.SAFETY_AUTOMOD
                            }
                            if (n === y.pNK.MEMBER_VERIFICATION) {
                                n = y.pNK.SAFETY;
                                r = y.KsC.SAFETY_DM_AND_SPAM_PROTECTION
                            }
                        }
                        L.init(e, n, t, r);
                        (0, l.jN)(y.S9g.GUILD_SETTINGS)
                    },
                    close: function() {
                        o.Z.dispatch({
                            type: "GUILD_SETTINGS_CLOSE"
                        })
                    },
                    saveRouteStack: function(e) {
                        o.Z.dispatch({
                            type: "GUILD_SETTINGS_SAVE_ROUTE_STACK",
                            state: e
                        })
                    },
                    setSection: function(e, n) {
                        var t, r = T.Z.getGuildId();
                        if (null != r) {
                            if (null === (t = I.Z.getGuild(r)) || void 0 === t ? void 0 : t.hasFeature(y.oNc.COMMUNITY)) {
                                if (e === y.pNK.GUILD_AUTOMOD) {
                                    e = y.pNK.SAFETY;
                                    n = y.KsC.SAFETY_AUTOMOD
                                }
                                if (e === y.pNK.MEMBER_VERIFICATION) {
                                    e = y.pNK.SAFETY;
                                    n = y.KsC.SAFETY_DM_AND_SPAM_PROTECTION
                                }
                            }
                            o.Z.dispatch({
                                type: "GUILD_SETTINGS_SET_SECTION",
                                section: e,
                                subsection: n
                            })
                        }
                    },
                    setSearchQuery: function(e) {
                        o.Z.dispatch({
                            type: "GUILD_SETTINGS_SET_SEARCH_QUERY",
                            searchQuery: e
                        })
                    },
                    selectRole: function(e, n) {
                        o.Z.dispatch({
                            type: "GUILD_SETTINGS_ROLE_SELECT",
                            roleId: e,
                            searchQuery: n
                        })
                    },
                    updateEmbed: function(e, n, t) {
                        i.ZP.patch({
                            url: y.ANM.GUILD_WIDGET(e),
                            body: {
                                enabled: n,
                                channel_id: t
                            },
                            oldFormErrors: !0
                        }).then((function(n) {
                            o.Z.dispatch({
                                type: "GUILD_SETTINGS_SET_WIDGET",
                                guildId: e,
                                enabled: n.body.enabled,
                                channelId: n.body.channel_id
                            })
                        }))
                    },
                    updateMFALevel: function(e) {
                        var n = e.guildId,
                            t = e.level,
                            r = e.isEnabled;
                        return (0, p.Z)((function(e) {
                            return i.ZP.post({
                                url: y.ANM.GUILD_MFA(n),
                                body: G({
                                    level: t
                                }, e),
                                oldFormErrors: !0
                            })
                        }), {
                            modalProps: {
                                title: b.Z.Messages.GUILD_SECURITY_REQ_MFA_LABEL,
                                actionText: r ? b.Z.Messages.GUILD_SECURITY_REQ_MFA_TURN_OFF : b.Z.Messages.GUILD_SECURITY_REQ_MFA_TURN_ON
                            },
                            checkEnabled: !1
                        }).then((function(e) {
                            return o.Z.dispatch({
                                type: "GUILD_SETTINGS_SET_MFA_SUCCESS",
                                level: e.body.level
                            })
                        }))
                    },
                    updateIcon: function(e, n) {
                        i.ZP.patch({
                            url: y.ANM.GUILD(e),
                            body: {
                                icon: n
                            },
                            oldFormErrors: !0
                        }).then((function() {
                            o.Z.dispatch({
                                type: "GUILD_SETTINGS_UPDATE",
                                icon: n
                            });
                            s.Z.checkGuildTemplateDirty(e)
                        }), (function(e) {
                            return o.Z.dispatch({
                                type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                                errors: e.body
                            })
                        }))
                    },
                    cancelChanges: function(e) {
                        o.Z.dispatch({
                            type: "GUILD_SETTINGS_CANCEL_CHANGES",
                            guildId: e
                        })
                    },
                    updateGuild: function(e) {
                        var n = e.safetyAlertsChannelId,
                            t = G({}, g(e, ["safetyAlertsChannelId"])),
                            r = T.Z.getGuildId();
                        if (null != r) {
                            var i;
                            (null === (i = a.l.getCurrentConfig({
                                guildId: r,
                                location: "be0372_1"
                            })) || void 0 === i ? void 0 : i.enableRaidAlerts) && null != n && (t.safetyAlertsChannelId = n)
                        }
                        o.Z.dispatch(G({
                            type: "GUILD_SETTINGS_UPDATE"
                        }, t))
                    },
                    saveGuild: function(e, n) {
                        var t = n.name,
                            r = n.description,
                            l = n.icon,
                            u = n.splash,
                            a = n.banner,
                            c = n.homeHeader,
                            d = n.afkChannelId,
                            f = n.afkTimeout,
                            E = n.systemChannelId,
                            _ = n.verificationLevel,
                            I = n.defaultMessageNotifications,
                            p = n.explicitContentFilter,
                            S = n.features,
                            T = n.systemChannelFlags,
                            b = n.preferredLocale,
                            A = n.rulesChannelId,
                            h = n.safetyAlertsChannelId,
                            N = n.discoverySplash,
                            g = n.publicUpdatesChannelId,
                            D = n.premiumProgressBarEnabled,
                            L = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            O = G({
                                name: t,
                                description: r,
                                icon: l,
                                splash: u,
                                banner: a,
                                home_header: c,
                                features: S,
                                preferred_locale: b,
                                afk_channel_id: d,
                                afk_timeout: f,
                                system_channel_id: E,
                                verification_level: _,
                                default_message_notifications: I,
                                explicit_content_filter: p,
                                system_channel_flags: T,
                                rules_channel_id: A,
                                discovery_splash: N,
                                public_updates_channel_id: g,
                                safety_alerts_channel_id: h
                            }, null != D ? {
                                premium_progress_bar_enabled: D
                            } : null);
                        o.Z.dispatch({
                            type: "GUILD_SETTINGS_SUBMIT"
                        });
                        return i.ZP.patch({
                            url: y.ANM.GUILD(e),
                            query: {
                                for_discovery: L.isForDiscovery
                            },
                            body: O,
                            oldFormErrors: !0
                        }).then((function(n) {
                            o.Z.dispatch({
                                type: "GUILD_SETTINGS_SUBMIT_SUCCESS",
                                guild: n.body
                            });
                            s.Z.checkGuildTemplateDirty(e)
                        }), (function(e) {
                            o.Z.dispatch({
                                type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                                errors: e.body
                            });
                            v.error("Failed to save guild settings", {
                                errors: e.body
                            });
                            if (L.throwErr) throw e.body
                        }))
                    },
                    updateGuildModeration: function(e, n) {
                        return i.ZP.patch({
                            url: y.ANM.GUILD(e),
                            body: {
                                verification_level: n.verificationLevel,
                                explicit_content_filter: n.explicitContentFilter
                            },
                            oldFormErrors: !0
                        }).then((function(n) {
                            s.Z.checkGuildTemplateDirty(e);
                            return n
                        }))
                    },
                    transferOwnership: function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return (0, p.Z)((function(o) {
                            return S.Z.patch({
                                url: y.ANM.GUILD(e),
                                body: G({
                                    owner_id: n,
                                    code: i
                                }, o),
                                oldFormErrors: !0,
                                trackedActionData: {
                                    event: r.a9.GUILD_TRANSFER_OWNERSHIP,
                                    properties: {
                                        guild_id: e,
                                        verification_type: t
                                    }
                                }
                            })
                        }), {
                            modalProps: {
                                title: b.Z.Messages.TRANSFER_OWNERSHIP,
                                actionText: b.Z.Messages.TRANSFER_OWNERSHIP
                            },
                            checkEnabled: !1
                        })
                    },
                    sendTransferOwnershipPincode: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return S.Z.put({
                            url: y.ANM.GUILD_PINCODE(e),
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: r.a9.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                                properties: {
                                    guild_id: e,
                                    is_resend: n
                                }
                            }
                        })
                    },
                    deleteGuild: function(e, n) {
                        return (0, p.Z)((function(n) {
                            return i.ZP.post({
                                url: y.ANM.GUILD_DELETE(e),
                                body: n,
                                oldFormErrors: !0
                            })
                        }), {
                            modalProps: {
                                title: b.Z.Messages.DELETE_SERVER_TITLE.format({
                                    name: n
                                }),
                                actionText: b.Z.Messages.DELETE_SERVER,
                                disallowBackupCodes: !0
                            },
                            checkEnabled: !1
                        }).then((function() {
                            L.close()
                        }))
                    },
                    leaveGuild: function(e) {
                        return h((function() {
                            return D(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, i.ZP.delete({
                                            url: y.ANM.GUILD_LEAVE(e),
                                            body: {
                                                lurking: f.Z.isLurking(e) || _.ZP.isCurrentUserGuest(e)
                                            },
                                            oldFormErrors: !0
                                        })];
                                    case 1:
                                        n.sent();
                                        L.close();
                                        return [2]
                                }
                            }))
                        }))()
                    },
                    updateMemberRoles: function(e, n, t, r, l) {
                        return h((function() {
                            return D(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (d.Z.isFullServerPreview(e) && n === E.default.getId()) {
                                            (0, c.og)(e, t);
                                            return [2]
                                        }
                                        return [4, i.ZP.patch({
                                            url: y.ANM.GUILD_MEMBER(e, n),
                                            body: {
                                                roles: t
                                            },
                                            oldFormErrors: !0
                                        })];
                                    case 1:
                                        u.sent();
                                        r.forEach((function(t) {
                                            return o.Z.dispatch({
                                                type: "GUILD_ROLE_MEMBER_ADD",
                                                guildId: e,
                                                roleId: t,
                                                userId: n
                                            })
                                        }));
                                        l.forEach((function(t) {
                                            return o.Z.dispatch({
                                                type: "GUILD_ROLE_MEMBER_REMOVE",
                                                guildId: e,
                                                roleId: t,
                                                userId: n
                                            })
                                        }));
                                        return [2]
                                }
                            }))
                        }))()
                    },
                    bulkAddMemberRoles: function(e, n, t) {
                        return i.ZP.patch({
                            url: y.ANM.GUILD_ROLE_MEMBERS(e, n),
                            body: {
                                member_ids: t
                            }
                        }).then((function(t) {
                            o.Z.dispatch({
                                type: "GUILD_ROLE_MEMBER_BULK_ADD",
                                guildId: e,
                                roleId: n,
                                added: t.body
                            })
                        }))
                    },
                    updateRolesEditSection: function(e) {
                        o.Z.dispatch({
                            type: "GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE",
                            section: e
                        })
                    },
                    enableIntegration: function(e, n, t) {
                        return i.ZP.post({
                            url: y.ANM.GUILD_INTEGRATIONS(e),
                            body: {
                                type: n,
                                id: t
                            },
                            oldFormErrors: !0
                        })
                    },
                    disableIntegration: function(e, n) {
                        return i.ZP.delete({
                            url: y.ANM.GUILD_INTEGRATION(e, n),
                            oldFormErrors: !0
                        })
                    },
                    updateIntegration: function(e, n, t, r, o) {
                        var l = {
                            expire_behavior: t,
                            expire_grace_period: r,
                            enable_emoticons: o
                        };
                        return i.ZP.patch({
                            url: y.ANM.GUILD_INTEGRATION(e, n),
                            body: l,
                            oldFormErrors: !0
                        })
                    },
                    syncIntegration: function(e, n) {
                        i.ZP.post({
                            url: y.ANM.GUILD_INTEGRATION_SYNC(e, n),
                            oldFormErrors: !0
                        })
                    }
                };
            const O = L
        },
        229937: (e, n, t) => {
            t.d(n, {
                T: () => r
            });
            var r = (0, t(249139).Z)({
                kind: "guild",
                id: "2023-08_improved_bans_page",
                label: "Guild Settings Improved Bans Page",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Guild Settings Improved Bans Page",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        425902: (e, n, t) => {
            t.d(n, {
                i: () => a,
                _: () => s
            });
            var r = t(281110),
                i = t(744564),
                o = t(451936),
                l = t(722406),
                u = t(2590);

            function a(e) {
                r.ZP.get({
                    url: u.ANM.GUILD_INTEGRATIONS(e),
                    query: {
                        include_applications: !0,
                        include_role_connections_metadata: !0
                    },
                    oldFormErrors: !0
                }).then((function(n) {
                    var t = n.body.map((function(e) {
                        null != e.user && (e.user = new l.Z(e.user));
                        null != e.application && (e.application = o.Z.createFromServer(e.application));
                        return e
                    }));
                    i.Z.dispatch({
                        type: "GUILD_SETTINGS_LOADED_INTEGRATIONS",
                        guildId: e,
                        integrations: t
                    })
                })).catch((function() {}))
            }

            function s(e) {
                r.ZP.get({
                    url: u.ANM.GUILD_INTEGRATIONS(e),
                    query: {
                        has_commands: !0
                    },
                    oldFormErrors: !0
                }).then((function(n) {
                    var t = n.body.map((function(e) {
                        return e.id
                    }));
                    i.Z.dispatch({
                        type: "GUILD_SETTINGS_LOADED_INTEGRATIONS_WITH_COMMANDS",
                        guildId: e,
                        integrationIds: t
                    })
                })).catch((function() {}))
            }
        },
        424127: (e, n, t) => {
            t.d(n, {
                Z: () => Ie
            });
            var r = t(496486),
                i = t.n(r),
                o = t(730381),
                l = t.n(o),
                u = t(202351),
                a = t(281110),
                s = t(630631),
                c = t(744564),
                d = t(327499),
                f = t(382060),
                E = t(848285),
                _ = t(424158),
                I = t(722406),
                p = t(567403),
                S = t(473903),
                T = t(229937),
                y = t(425902),
                b = t(2590),
                A = t(594697),
                h = t(940455);

            function N(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function G(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function D(e) {
                D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return D(e)
            }

            function v(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        g(e, n, t[n])
                    }))
                }
                return e
            }

            function L(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function O(e, n) {
                return !n || "object" !== C(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function U(e, n) {
                U = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return U(e, n)
            }

            function m(e) {
                return function(e) {
                    if (Array.isArray(e)) return N(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return N(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var C = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function R(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = D(e);
                    if (n) {
                        var i = D(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return O(this, t)
                }
            }
            var M, P, Z, w, F, k, j, B, V = ["name", "description", "icon", "splash", "banner", "homeHeader", "afkChannelId", "afkTimeout", "systemChannelId", "verificationLevel", "defaultMessageNotifications", "explicitContentFilter", "features", "systemChannelFlags", "preferredLocale", "rulesChannelId", "safetyAlertsChannelId", "discoverySplash", "publicUpdatesChannelId", "premiumProgressBarEnabled"],
                Y = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
                K = !1,
                x = b.QZA.CLOSED,
                H = {},
                Q = !1,
                q = null,
                W = null,
                J = 0,
                z = b.BpS.NONE,
                X = null,
                $ = {
                    primaryCategoryId: A.o3,
                    secondaryCategoryIds: [],
                    keywords: [],
                    emojiDiscoverabilityEnabled: A.Vb,
                    partnerActionedTimestamp: null,
                    partnerApplicationTimestamp: null,
                    isPublished: !1,
                    reasonsToJoin: [],
                    socialLinks: [],
                    about: ""
                },
                ee = !1,
                ne = $,
                te = $,
                re = null,
                ie = 0,
                oe = null,
                le = null,
                ue = null;

            function ae(e) {
                if (null == F || null == w || w.id !== e) return !1;
                var n = p.Z.getGuild(e);
                if (null == n) return !1;
                if (w === F) F = w = n;
                else {
                    w = n;
                    F = F.set("roles", w.roles)
                }
                return !0
            }

            function se(e) {
                var n, t = e.guildId,
                    r = e.section,
                    i = e.subsection,
                    o = e.location,
                    l = p.Z.getGuild(t);
                if (null == l) return ce();
                w = F = l;
                x = b.QZA.OPEN;
                H = {};
                k = t;
                z = F.mfaLevel;
                te = ne;
                B = null;
                X = o;
                de({
                    section: null !== (n = null != r ? r : M) && void 0 !== n ? n : b.pNK.OVERVIEW,
                    subsection: null != i ? i : null
                })
            }

            function ce() {
                K = !1;
                x = b.QZA.CLOSED;
                w = F = null;
                Q = !1;
                q = null;
                W = null;
                J = 0;
                re = null;
                le = null;
                ue = null;
                M = null;
                P = null;
                Z = null;
                z = b.BpS.NONE;
                j = void 0
            }

            function de(e) {
                if (null == F) return !1;
                var n = M;
                M = e.section;
                P = e.subsection;
                if (M === b.pNK.BANS) {
                    T.T.getCurrentConfig({
                        guildId: F.id,
                        location: "7f0c91_1"
                    }).enabled || d.Z.fetchGuildBans(F.id)
                } else if (M === b.pNK.INSTANT_INVITES) a.ZP.get({
                    url: b.ANM.GUILD_INSTANT_INVITES(F.id),
                    oldFormErrors: !0
                }).then((function(e) {
                    c.Z.dispatch({
                        type: "GUILD_SETTINGS_LOADED_INVITES",
                        invites: e.body
                    })
                }));
                else if (M === b.pNK.WIDGET) a.ZP.get({
                    url: b.ANM.GUILD_WIDGET(F.id),
                    oldFormErrors: !0
                }).then((function(e) {
                    c.Z.dispatch({
                        type: "GUILD_SETTINGS_SET_WIDGET",
                        enabled: e.body.enabled,
                        channelId: e.body.channel_id
                    })
                }));
                else if (M === b.pNK.INTEGRATIONS || M === b.pNK.ROLES) {
                    k = null;
                    if (n !== e.section) return Ee(e)
                } else M === b.pNK.MEMBERS ? k = F.id : M === b.pNK.VANITY_URL ? a.ZP.get({
                    url: b.ANM.GUILD_VANITY_URL(F.id),
                    oldFormErrors: !0
                }).then((function(e) {
                    var n = e.body,
                        t = n.code,
                        r = n.uses,
                        i = n.error;
                    c.Z.dispatch({
                        type: "GUILD_SETTINGS_SET_VANITY_URL",
                        code: t,
                        uses: r,
                        error: i
                    })
                })) : M === b.pNK.SAFETY && c.Z.dispatch({
                    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
                    subsection: null == P ? b.KsC.SAFETY_OVERVIEW : P
                })
            }

            function fe(e) {
                var n;
                return new _.Z({
                    code: e.code,
                    temporary: e.temporary,
                    revoked: e.revoked,
                    inviter: null != e.inviter ? new I.Z(e.inviter) : null,
                    channel: (0, f.jD)(e.channel),
                    guild: null != e.guild ? new E.Z(e.guild) : null,
                    uses: e.uses,
                    maxUses: e.max_uses,
                    maxAge: e.max_age,
                    createdAt: l()(null !== (n = e.created_at) && void 0 !== n ? n : void 0)
                })
            }

            function Ee(e) {
                if (null == F || x !== b.QZA.OPEN) return !1;
                if ("GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== F.id) return !1;
                (0, y.i)(F.id);
                (0, y._)(F.id)
            }
            var _e = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && U(e, n)
                }(t, e);
                var n = R(t);

                function t() {
                    G(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(p.Z, S.default)
                };
                r.getMetadata = function() {
                    return te
                };
                r.hasChanges = function() {
                    return !i().isEqual(F, w) || !i().isEqual(te, ne)
                };
                r.isOpen = function() {
                    return K
                };
                r.getSavedRouteState = function() {
                    return j
                };
                r.getSection = function() {
                    return M
                };
                r.showNotice = function() {
                    return this.hasChanges()
                };
                r.getGuildId = function() {
                    return null != F ? F.id : null
                };
                r.showPublicSuccessModal = function() {
                    return !s.Z.get(h.zs)
                };
                r.getGuild = function() {
                    return F
                };
                r.isSubmitting = function() {
                    return x === b.QZA.SUBMITTING
                };
                r.isGuildMetadataLoaded = function() {
                    return ee
                };
                r.getErrors = function() {
                    return H
                };
                r.getSelectedRoleId = function() {
                    return k
                };
                r.getSlug = function() {
                    return B
                };
                r.getBans = function() {
                    return [re, ie]
                };
                r.getProps = function() {
                    return {
                        submitting: this.isSubmitting(),
                        integrations: ue,
                        section: M,
                        subsection: P,
                        errors: H,
                        guild: F,
                        bans: re,
                        bansVersion: ie,
                        invites: le,
                        selectedRoleId: k,
                        embedEnabled: Q,
                        embedChannelId: q,
                        mfaLevel: z,
                        searchQuery: Z,
                        vanityURLCode: W,
                        vanityURLUses: J,
                        originalGuild: w,
                        hasChanges: this.hasChanges(),
                        guildMetadata: te,
                        analyticsLocation: X,
                        isGuildMetadataLoaded: ee
                    }
                };
                return t
            }(u.ZP.Store);
            _e.displayName = "GuildSettingsStore";
            const Ie = new _e(c.Z, __OVERLAY__ ? {} : {
                GUILD_SETTINGS_INIT: se,
                GUILD_SETTINGS_OPEN: function(e) {
                    K = !0;
                    se(e)
                },
                GUILD_SETTINGS_CLOSE: ce,
                GUILD_SETTINGS_UPDATE: function(e) {
                    if (null == F) return !1;
                    V.forEach((function(n) {
                        null != F && e.hasOwnProperty(n) && (F = F.set(n, e[n]))
                    }));
                    ! function() {
                        if (null == F) return !1;
                        var e = F.toJS(),
                            n = w.toJS();
                        V.some((function(t) {
                            return e[t] !== n[t]
                        })) || (F = w)
                    }()
                },
                GUILD_SETTINGS_CANCEL_CHANGES: function(e) {
                    var n = e.guildId;
                    H = {};
                    var t = p.Z.getGuild(n);
                    null != t && (w = F = t)
                },
                GUILD_SETTINGS_SAVE_ROUTE_STACK: function(e) {
                    var n = e.state;
                    j = n;
                    return !1
                },
                GUILD_SETTINGS_SUBMIT: function() {
                    x = b.QZA.SUBMITTING;
                    H = {}
                },
                GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
                    x = b.QZA.OPEN
                },
                GUILD_SETTINGS_SUBMIT_FAILURE: function(e) {
                    x = b.QZA.OPEN;
                    M = null != M ? M : b.pNK.OVERVIEW;
                    P = null;
                    var n;
                    H = null !== (n = e.errors) && void 0 !== n ? n : {}
                },
                GUILD_SETTINGS_SET_SECTION: de,
                GUILD_SETTINGS_SET_SEARCH_QUERY: function(e) {
                    Z = e.searchQuery
                },
                GUILD_SETTINGS_LOADED_BANS: function(e) {
                    re = e.bans.reduce((function(e, n) {
                        null != n.user && null != n.user.id && e.set(n.user.id, n);
                        return e
                    }), new Map);
                    ie++
                },
                GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
                    var n = e.bans,
                        t = e.guildId;
                    if (oe !== t || null == re) {
                        oe = t;
                        re = new Map
                    }
                    re = n.reduce((function(e, n) {
                        null != n.user && null != n.user.id && e.set(n.user.id, n);
                        return e
                    }), re);
                    ie++
                },
                GUILD_SETTINGS_LOADED_INVITES: function(e) {
                    le = e.invites.reduce((function(e, n) {
                        e[n.code] = fe(n);
                        return e
                    }), {})
                },
                GUILD_SETTINGS_SET_WIDGET: function(e) {
                    Q = e.enabled;
                    q = e.channelId
                },
                GUILD_SETTINGS_SET_VANITY_URL: function(e) {
                    var n;
                    W = null !== (n = e.code) && void 0 !== n ? n : null;
                    J = e.uses
                },
                GUILD_SETTINGS_SET_MFA_SUCCESS: function(e) {
                    var n = e.level;
                    z = n
                },
                GUILD_SETTINGS_ROLE_SELECT: function(e) {
                    var n = e.roleId;
                    k = null != n ? n : null
                },
                GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
                    ue = e.integrations
                },
                GUILD_BAN_ADD: function(e) {
                    var n = e.user,
                        t = e.guildId;
                    if (null == re) return !1;
                    if (null == F || F.id !== t) return !1;
                    re.set(n.id, {
                        user: n,
                        reason: null
                    });
                    ie++
                },
                GUILD_BAN_REMOVE: function(e) {
                    var n = e.user,
                        t = e.guildId;
                    if (null == re) return !1;
                    if (null == F || F.id !== t) return !1;
                    re.delete(n.id);
                    ie++
                },
                GUILD_ROLE_CREATE: function(e) {
                    if (!ae(e.guildId)) return !1
                },
                GUILD_ROLE_UPDATE: function(e) {
                    if (!ae(e.guildId)) return !1
                },
                GUILD_ROLE_DELETE: function(e) {
                    var n = e.guildId,
                        t = e.roleId;
                    if (!ae(n)) return !1;
                    k === t && (k = null)
                },
                GUILD_UPDATE: function(e) {
                    if (null == F || F.id !== e.guild.id) return !1;
                    var n = p.Z.getGuild(F.id);
                    if (null == n) return !1;
                    var t = w = n,
                        r = F.toJS();
                    V.forEach((function(e) {
                        Y.has(e) || ("rulesChannelId" !== e && "publicUpdatesChannelId" !== e || r[e] !== h.b4) && ("features" !== e ? t = t.set(e, r[e]) : t.set(e, new Set(r[e])))
                    }));
                    F = t
                },
                GUILD_DELETE: function(e) {
                    if (null == F || F.id !== e.guild.id) return !1;
                    ce()
                },
                USER_CONNECTIONS_UPDATE: Ee,
                GUILD_INTEGRATIONS_UPDATE: Ee,
                INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
                    delete(le = v({}, le))[e.code]
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    le = L(v({}, le), g({}, e.invite.code, fe(e.invite)))
                },
                GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function(e) {
                    var n = e.guildId,
                        t = e.metadata;
                    if (null != F && n === F.id) {
                        !1 === ee && (ee = !0);
                        var r, i, o, l, u, a, s, c, d, f;
                        ne = {
                            primaryCategoryId: null !== (r = t.primaryCategoryId) && void 0 !== r ? r : A.o3,
                            secondaryCategoryIds: null !== (i = t.secondaryCategoryIds) && void 0 !== i ? i : [],
                            keywords: null !== (o = t.keywords) && void 0 !== o ? o : [],
                            emojiDiscoverabilityEnabled: null !== (l = t.emojiDiscoverabilityEnabled) && void 0 !== l ? l : A.Vb,
                            partnerActionedTimestamp: null !== (u = t.partnerActionedTimestamp) && void 0 !== u ? u : null,
                            partnerApplicationTimestamp: null !== (a = t.partnerApplicationTimestamp) && void 0 !== a ? a : null,
                            isPublished: null !== (s = t.isPublished) && void 0 !== s && s,
                            reasonsToJoin: null !== (c = t.reasonsToJoin) && void 0 !== c ? c : [],
                            socialLinks: null !== (d = t.socialLinks) && void 0 !== d ? d : [],
                            about: null !== (f = t.about) && void 0 !== f ? f : ""
                        };
                        te = ne;
                        H = {}
                    }
                },
                GUILD_DISCOVERY_METADATA_FETCH_FAIL: function() {
                    ne = te = $
                },
                GUILD_DISCOVERY_CATEGORY_ADD: function(e) {
                    var n = e.guildId,
                        t = e.categoryId;
                    if (null != F && n === F.id) {
                        te = L(v({}, te), {
                            secondaryCategoryIds: m(te.secondaryCategoryIds).concat([t])
                        });
                        ne = L(v({}, ne), {
                            secondaryCategoryIds: m(ne.secondaryCategoryIds).concat([t])
                        })
                    }
                },
                GUILD_DISCOVERY_CATEGORY_DELETE: function(e) {
                    var n = e.guildId,
                        t = e.categoryId;
                    if (null != F && n === F.id) {
                        var r, i = te.secondaryCategoryIds.indexOf(t);
                        if (-1 !== i) {
                            (r = m(te.secondaryCategoryIds)).splice(i, 1);
                            te = L(v({}, te), {
                                secondaryCategoryIds: r
                            })
                        }
                        if (-1 !== (i = ne.secondaryCategoryIds.indexOf(t))) {
                            (r = m(ne.secondaryCategoryIds)).splice(i, 1);
                            ne = L(v({}, ne), {
                                secondaryCategoryIds: r
                            })
                        }
                    }
                },
                GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function(e) {
                    var n = e.guildId,
                        t = e.errors;
                    null != F && n === F.id && (H = null != t ? t : {})
                },
                GUILD_UPDATE_DISCOVERY_METADATA: function(e) {
                    var n = e.guildId,
                        t = e.primaryCategoryId,
                        r = e.keywords,
                        i = e.emojiDiscoverabilityEnabled,
                        o = e.isPublished,
                        l = e.reasonsToJoin,
                        u = e.socialLinks,
                        a = e.about;
                    null != F && n === F.id && (te = L(v({}, te), {
                        primaryCategoryId: null != t ? t : te.primaryCategoryId,
                        keywords: null != r ? r : te.keywords,
                        emojiDiscoverabilityEnabled: null != i ? i : te.emojiDiscoverabilityEnabled,
                        isPublished: null != o ? o : te.isPublished,
                        reasonsToJoin: null != l ? l : te.reasonsToJoin,
                        socialLinks: null != u ? u : te.socialLinks,
                        about: null != a ? a : te.about
                    }))
                },
                GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function(e) {
                    var n = e.guildId,
                        t = e.errors;
                    null != F && n === F.id && (H = null != t ? t : {})
                },
                GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function(e) {
                    var n = e.slug;
                    B = n
                },
                GUILD_DISCOVERY_SLUG_FETCH_FAIL: function(e) {
                    e = null !== e ? e : function(e) {
                        throw e
                    }(new TypeError("Cannot destructure undefined"));
                    B = null
                }
            })
        },
        940455: (e, n, t) => {
            t.d(n, {
                zs: () => s,
                M_: () => c,
                c9: () => d,
                b4: () => f,
                $X: () => E,
                mu: () => _,
                U3: () => I,
                tA: () => p,
                IO: () => a
            });
            var r, i = t(940060),
                o = t(2590);

            function l(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }
            var u, a, s = "publicSuccessModalSeen",
                c = "667560445975986187",
                d = "669627189624307712",
                f = "1",
                E = [o.Plq.ADMINISTRATOR, o.Plq.MANAGE_GUILD, o.Plq.MANAGE_CHANNELS, o.Plq.MANAGE_ROLES, o.Plq.KICK_MEMBERS, o.Plq.BAN_MEMBERS, o.Plq.MANAGE_MESSAGES, o.Plq.MENTION_EVERYONE, o.Plq.MANAGE_GUILD_EXPRESSIONS, o.Plq.CREATE_GUILD_EXPRESSIONS, o.Plq.MANAGE_EVENTS, o.Plq.CREATE_EVENTS],
                _ = (r = i.Z).combine.apply(r, function(e) {
                    if (Array.isArray(e)) return l(e)
                }(u = E) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(u) || function(e, n) {
                    if (e) {
                        if ("string" == typeof e) return l(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? l(e, n) : void 0
                    }
                }(u) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                I = 1e3,
                p = "Enable Community Modal";
            ! function(e) {
                e.SAFETY_CHECK = "safety_check";
                e.BASICS = "basics";
                e.FINISH = "finish"
            }(a || (a = {}))
        }
    }
]);