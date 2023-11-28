(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["21318"], {
        969176: function(e, t, n) {
            var a = n("354069");
            e.exports = function(e, t) {
                return a(e, t)
            }
        },
        665718: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5420f8fd9d89897c6448.svg"
        },
        897327: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d8197d45ef3e7289594d.svg"
        },
        289867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("913144"),
                l = {
                    toggleMembersSection() {
                        a.default.dispatch({
                            type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
                        })
                    },
                    toggleProfilePanelSection() {
                        a.default.dispatch({
                            type: "PROFILE_PANEL_TOGGLE_SECTION"
                        })
                    },
                    toggleSummariesSection() {
                        a.default.dispatch({
                            type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
                        })
                    }
                }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("685665");

            function i(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: i
                    } = (0, l.default)(t);
                    return (0, a.jsx)(i, {
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        746164: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2023-02_voice_channel_statuses",
                label: "Voice Channel Status Guild Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable viewing and setting voice channel statuses for guild",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "A/A test, identical to treatment 1",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        219352: function(e, t, n) {
            "use strict";
            var a, l;
            n.r(t), n.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return a
                }
            }), (l = a || (a = {}))[l.STREAM = 0] = "STREAM", l[l.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                l = n("629109"),
                i = n("271938"),
                u = n("42887"),
                d = n("49111"),
                s = n("353927");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([i.default], () => i.default.getId()),
                    r = (0, a.useStateFromStores)([u.default], () => u.default.supports(s.Features.DISABLE_VIDEO) && u.default.isVideoEnabled()),
                    o = (0, a.useStateFromStores)([u.default], () => u.default.isLocalVideoDisabled(n, t), [n, t]),
                    c = null == e || e === n;
                return [c && (r || o), o, e => {
                    let a = e ? d.VideoToggleState.DISABLED : d.VideoToggleState.MANUAL_ENABLED;
                    l.default.setDisableLocalVideo(n, a, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("452804"),
                i = n("135230"),
                u = n("219352"),
                d = n("782340");

            function s(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...s
                } = e, r = t === u.SelfStreamAndVideoAlertType.STREAM ? d.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : d.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, o = t === u.SelfStreamAndVideoAlertType.STREAM ? d.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : d.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(i.default, {
                    confirmText: d.default.Messages.CONFIRM,
                    secondaryConfirmText: d.default.Messages.DONT_ASK_AGAIN,
                    title: r,
                    cancelText: d.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        l.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: o,
                    ...s
                })
            }
        },
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("255397"),
                d = n("191145"),
                s = n("782340");

            function r(e) {
                let t = (0, l.useStateFromStores)([d.default], () => d.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: s.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => u.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        321135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("168973"),
                d = n("301603"),
                s = n("632616"),
                r = n("219352"),
                o = n("353927"),
                c = n("782340");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    [n, f, E] = (0, d.default)(e, t),
                    _ = (0, l.useStateFromStores)([u.default], () => u.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: c.default.Messages.SHOW_SELF_VIDEO,
                    checked: !f,
                    action: () => {
                        if (_ || f) return E(!f);
                        (0, i.openModal)(e => (0, a.jsx)(s.default, {
                            ...e,
                            type: r.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => E(!f)
                        }))
                    }
                }) : null
            }
        },
        873254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("648911"),
                d = n("271938"),
                s = n("42887"),
                r = n("782340"),
                o = n("431024");

            function c(e) {
                let t = (0, i.useModalContext)(),
                    c = (0, l.useStateFromStores)([s.default], () => s.default.isVideoEnabled()),
                    f = (0, l.useStateFromStores)([d.default], () => d.default.getId() === e),
                    E = (0, u.default)();
                return (!c || E) && f ? (0, a.jsx)(i.MenuItem, {
                    id: "change-video-background",
                    label: (0, a.jsx)("div", {
                        className: o.item,
                        children: c ? r.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : r.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                videoEnabled: c
                            })
                        }, {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                }) : null
            }
        },
        207273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var a = n("298386"),
                l = n("446674"),
                i = n("913144"),
                u = n("619443");
            let d = new Set,
                s = {};

            function r() {
                d.clear()
            }

            function o(e) {
                d.delete(e.guild.id)
            }
            class c extends l.default.Store {
                getChannelStatus(e) {
                    var t;
                    if (null != e && null != e.guild_id) {
                        if (e.type === a.ChannelTypes.GUILD_VOICE) return !d.has(e.guild_id) && (d.add(e.guild_id), u.default.getSocket().requestChannelStatuses(e.guild_id)), null === (t = s[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
                    }
                }
            }
            c.displayName = "ChannelStatusStore";
            var f = new c(i.default, {
                GUILD_CREATE: o,
                GUILD_DELETE: o,
                CONNECTION_RESUMED: r,
                CONNECTION_OPEN: r,
                VOICE_CHANNEL_STATUS_UPDATE: function(e) {
                    null == s[e.guildId] && (s[e.guildId] = {}), s[e.guildId][e.id] = e.status
                },
                CHANNEL_STATUSES: function(e) {
                    for (let {
                            id: t,
                            status: n
                        }
                        of(s[e.guildId] = {}, e.channels)) s[e.guildId][t] = n
                }
            })
        },
        913452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOpenInPopoutExperiment: function() {
                    return i
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08-30_open-in-popout",
                label: "Open Channel in Popout",
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

            function i(e) {
                return l.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled
            }
        },
        229233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("272030"),
                u = n("158534"),
                d = n("812204"),
                s = n("861370"),
                r = n("715243"),
                o = n("261675"),
                c = n("963150"),
                f = n("308798"),
                E = n("47006"),
                _ = n("878526"),
                C = n("531674"),
                p = n("619436"),
                T = n("731390"),
                A = n("339876"),
                I = n("49111"),
                m = n("782340"),
                S = (0, u.default)(function(e) {
                    let {
                        channel: t,
                        guild: n,
                        includeTopic: u = !1,
                        onSelect: d
                    } = e, S = (0, A.default)(t), g = (0, C.default)(t), h = (0, p.default)(t), N = (0, o.default)(t), M = (0, E.default)(t), O = (0, _.default)(t, n), v = (0, r.default)(t, n), L = (0, c.default)(t, n, I.ChannelTypes.GUILD_TEXT), x = (0, c.default)(t, n, I.ChannelTypes.GUILD_VOICE), y = (0, f.default)(t), b = (0, s.default)({
                        id: t.id,
                        label: m.default.Messages.COPY_ID_CHANNEL
                    }), D = (0, T.default)(t, "title_context_menu");
                    return (0, a.jsxs)(l.Menu, {
                        navId: "channel-context",
                        onClose: i.closeContextMenu,
                        "aria-label": m.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onSelect: d,
                        children: [(0, a.jsx)(l.MenuGroup, {
                            children: S
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: g
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [u ? N : h, M]
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [O, v, L, x]
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: D
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: y
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: b
                        })]
                    })
                }, [d.default.CONTEXT_MENU, d.default.CHANNEL_TITLE_MENU])
        },
        715243: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("957255"),
                d = n("49111"),
                s = n("782340");

            function r(e, t) {
                let r = (0, l.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                return __OVERLAY__ || !r ? null : (0, a.jsx)(i.MenuItem, {
                    id: "clone-channel",
                    label: s.default.Messages.CLONE_CHANNEL,
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(l, {
                            ...n,
                            channelType: e.type,
                            guildId: t.id,
                            categoryId: e.parent_id,
                            cloneChannelId: e.id
                        })
                    })
                })
            }
        },
        261675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("306160"),
                u = n("782340");

            function d(e) {
                return i.SUPPORTS_COPY ? (0, a.jsx)(l.MenuItem, {
                    id: "copy-channel-topic",
                    label: u.default.Messages.COPY_CHANNEL_TOPIC,
                    action: () => (0, i.copy)(e.topic)
                }) : null
            }
        },
        963150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("957255"),
                d = n("49111"),
                s = n("782340");

            function r(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, l.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let c = () => {
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: r,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (r) {
                    case d.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(i.MenuItem, {
                            id: "create-text-channel",
                            label: s.default.Messages.CREATE_TEXT_CHANNEL,
                            action: c
                        });
                    case d.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(i.MenuItem, {
                            id: "create-voice-channel",
                            label: s.default.Messages.CREATE_VOICE_CHANNEL,
                            action: c
                        });
                    default:
                        return null
                }
            }
        },
        47006: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("18054"),
                d = n("957255"),
                s = n("49111"),
                r = n("782340");

            function o(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: o,
                    canAccessChannel: c
                } = (0, l.useStateFromStoresObject)([d.default], () => ({
                    canManageChannels: d.default.can(s.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: d.default.can(s.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: d.default.can(s.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: d.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && c && (t || n || o) ? (0, a.jsx)(i.MenuItem, {
                    id: "edit-channel",
                    label: e.type === s.ChannelTypes.GUILD_CATEGORY ? r.default.Messages.EDIT_CATEGORY : r.default.Messages.EDIT_CHANNEL,
                    action: () => u.default.open(e.id)
                }) : null
            }
        },
        878526: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("58622"),
                l = n("49111");

            function i(e, t, n) {
                return (0, a.default)({
                    guild: t,
                    channel: e,
                    stageInstance: n,
                    source: l.InstantInviteSources.CONTEXT_MENU
                })
            }
        },
        731390: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("77078"),
                u = n("390236"),
                d = n("292508"),
                s = n("383294"),
                r = n("913452"),
                o = n("533466"),
                c = n("49111"),
                f = n("268333");

            function E(e) {
                let {
                    windowKey: t,
                    channel: n
                } = e;
                return (0, a.jsx)(d.default, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: n.name,
                    channelId: n.id,
                    contentClassName: f.popoutContent,
                    children: (0, a.jsx)(u.default.Provider, {
                        value: n.guild_id,
                        children: (0, a.jsx)(o.default, {
                            providedChannel: n
                        })
                    })
                })
            }

            function _(e, t) {
                let n = (0, r.useOpenInPopoutExperiment)(t),
                    u = l.useCallback(() => {
                        s.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, a.jsx)(E, {
                            windowKey: t,
                            channel: e
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }, [e]);
                return n ? (0, a.jsx)(i.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: () => u()
                }) : null
            }
        },
        339876: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("629220"),
                d = n("512395"),
                s = n("282109"),
                r = n("49111"),
                o = n("782340");

            function c(e) {
                let t = (0, d.useOptInEnabledForGuild)(e.guild_id),
                    n = (0, l.useStateFromStores)([s.default], () => s.default.isChannelOptedIn(e.guild_id, e.id)),
                    c = (0, l.useStateFromStores)([s.default], () => null != e.parent_id && s.default.isChannelOptedIn(e.guild_id, e.parent_id)),
                    f = (0, l.useStateFromStores)([s.default], () => s.default.isFavorite(e.guild_id, e.id)),
                    E = () => {
                        (0, u.setOptInChannel)(e.guild_id, e.id, !n, {
                            section: r.AnalyticsSections.CONTEXT_MENU
                        })
                    },
                    _ = () => {
                        null != e.parent_id && (0, u.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                            section: r.AnalyticsSections.CONTEXT_MENU
                        })
                    };
                return !t || e.isThread() ? null : e.isCategory() ? (0, a.jsx)(i.MenuItem, {
                    id: "opt-into-category",
                    label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                    action: () => E()
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: f ? o.default.Messages.REMOVE_FAVORITE : o.default.Messages.ADD_FAVORITE,
                        action: () => {
                            (0, u.setIsFavorite)(e.guild_id, e.id, !f, {
                                section: r.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), c ? (0, a.jsx)(i.MenuItem, {
                        id: "opt-out-category",
                        label: o.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => _()
                    }) : (0, a.jsx)(i.MenuItem, {
                        id: "opt-into-channel",
                        label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                        action: () => E()
                    })]
                })
            }
        },
        58622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("242757"),
                d = n("923959"),
                s = n("957255"),
                r = n("76539"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    source: t,
                    guild: n,
                    channel: a,
                    stageInstance: i
                } = e, r = (0, l.useStateFromStores)([d.default, s.default], () => {
                    var e;
                    let t = d.default.getChannels(n.id);
                    return null === (e = t[0, d.GUILD_SELECTABLE_CHANNELS_KEY].find(e => s.default.can(o.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, l.useStateFromStores)([s.default], () => (0, u.canViewInviteModal)(s.default, n, a, i)), f = E(t, n, c && null != a ? a : r), C = _(t);
                return null == a && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != r ? f : C
            }
            let E = (e, t, l) => (0, a.jsx)(i.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await n.el("310688").then(n.bind(n, "310688"));
                        return n => (0, a.jsx)(i, {
                            ...n,
                            guild: t,
                            channel: l,
                            source: e
                        })
                    })
                }),
                _ = e => (0, a.jsx)(i.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("973132").then(n.bind(n, "973132"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                })
        },
        893980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return s
                },
                trackProfilePanelToggled: function() {
                    return r
                }
            });
            var a = n("373469"),
                l = n("824563"),
                i = n("27618"),
                u = n("599110"),
                d = n("49111");
            let s = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: a,
                        activity: l,
                        customStatusActivity: i,
                        status: s
                    } = e;
                    u.default.track(d.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != l && (null == l ? void 0 : l.type) !== d.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == l ? void 0 : l.type) === d.ActivityTypes.PLAYING,
                        load_duration_ms: a,
                        profile_user_status: s,
                        has_custom_status: null != i,
                        has_profile_effect: null != t.profileEffectID,
                        ...o(t)
                    })
                },
                r = (e, t) => {
                    u.default.track(d.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...o(e)
                    })
                },
                o = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        u = null != a.default.getAnyStreamForUser(n),
                        s = l.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return u ? t === d.ActivityTypes.PLAYING : t !== d.ActivityTypes.CUSTOM_STATUS
                        }),
                        r = null == s ? void 0 : s.assets,
                        o = i.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == r ? void 0 : r.large_image) && void 0 !== t ? t : null == r ? void 0 : r.small_image),
                        is_friend: o,
                        viewed_profile_user_id: n,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                l = n("42887"),
                i = n("512244");

            function u() {
                return (0, a.useStateFromStores)([l.default], () => (0, i.default)(l.default))
            }
        },
        830210: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                },
                getChannelVideoLimit: function() {
                    return s
                }
            });
            var a = n("446674"),
                l = n("305961"),
                i = n("316133"),
                u = n("49111");

            function d(e) {
                return (0, a.useStateFromStoresObject)([i.default, l.default], () => {
                    let t = i.default.countVoiceStatesForChannel(e.id),
                        n = l.default.getGuild(e.getGuildId());
                    return null == n ? {
                        reachedLimit: !1,
                        limit: -1
                    } : e.type === u.ChannelTypes.GUILD_STAGE_VOICE ? {
                        reachedLimit: t > n.maxStageVideoChannelUsers,
                        limit: n.maxStageVideoChannelUsers
                    } : {
                        reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                        limit: n.maxVideoChannelUsers
                    }
                }, [e])
            }

            function s(e) {
                let t = i.default.countVoiceStatesForChannel(e.id),
                    n = l.default.getGuild(e.getGuildId());
                return null == n ? {
                    reachedLimit: !1,
                    limit: -1
                } : e.type === u.ChannelTypes.GUILD_STAGE_VOICE ? {
                    reachedLimit: t > n.maxStageVideoChannelUsers,
                    limit: n.maxStageVideoChannelUsers
                } : {
                    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                    limit: n.maxVideoChannelUsers
                }
            }
        },
        727284: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("845579"),
                u = n("49111");

            function d(e, t) {
                i.AlwaysPreviewVideo.getSetting() ? (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("381736").then(n.bind(n, "381736"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        onEnable: e,
                        videoEnabled: !1
                    })
                }, {
                    modalKey: "camera-preview",
                    contextKey: t === u.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT
                }) : null == e || e()
            }
        },
        440351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                u = n.n(i),
                d = n("77078"),
                s = n("145131"),
                r = n("296165"),
                o = n("926622");
            class c extends l.PureComponent {
                render() {
                    let {
                        title: e,
                        description: t,
                        agreement: n,
                        disagreement: l,
                        onAgree: i,
                        onDisagree: c,
                        imageClassName: f
                    } = this.props;
                    return (0, a.jsxs)(s.default, {
                        className: r.gatedContent,
                        justify: s.default.Justify.CENTER,
                        align: s.default.Align.CENTER,
                        direction: s.default.Direction.VERTICAL,
                        children: [(0, a.jsx)("div", {
                            className: u(r.image, f)
                        }), (0, a.jsx)("div", {
                            className: u(r.title, o.marginBottom8),
                            children: e
                        }), (0, a.jsx)("div", {
                            className: u(r.description, o.marginBottom20),
                            children: t
                        }), (0, a.jsxs)(s.default, {
                            justify: s.default.Justify.CENTER,
                            align: s.default.Align.CENTER,
                            grow: 0,
                            children: [null != l ? (0, a.jsx)(d.Button, {
                                className: r.action,
                                size: d.ButtonSizes.LARGE,
                                color: d.ButtonColors.PRIMARY,
                                onClick: c,
                                children: l
                            }) : null, null != n ? (0, a.jsx)(d.Button, {
                                className: r.action,
                                color: d.Button.Colors.RED,
                                size: d.ButtonSizes.LARGE,
                                onClick: i,
                                children: n
                            }) : null]
                        })]
                    })
                }
            }
            var f = c
        }
    }
]);