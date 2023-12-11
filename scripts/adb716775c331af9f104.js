(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["9669"], {
        969176: function(e, t, n) {
            var a = n("354069");
            e.exports = function(e, t) {
                return a(e, t)
            }
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
        535348: function(e, t, n) {
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
                    return s
                }
            });
            var a = n("446674"),
                l = n("629109"),
                i = n("271938"),
                u = n("42887"),
                d = n("49111"),
                r = n("353927");

            function s(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.MediaEngineContextTypes.DEFAULT,
                    n = (0, a.useStateFromStores)([i.default], () => i.default.getId()),
                    s = (0, a.useStateFromStores)([u.default], () => u.default.supports(r.Features.DISABLE_VIDEO) && u.default.isVideoEnabled()),
                    o = (0, a.useStateFromStores)([u.default], () => u.default.isLocalVideoDisabled(n, t), [n, t]),
                    c = null == e || e === n;
                return [c && (s || o), o, e => {
                    let a = e ? d.VideoToggleState.DISABLED : d.VideoToggleState.MANUAL_ENABLED;
                    l.default.setDisableLocalVideo(n, a, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("452804"),
                i = n("135230"),
                u = n("535348"),
                d = n("782340");

            function r(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...r
                } = e, s = t === u.SelfStreamAndVideoAlertType.STREAM ? d.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : d.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, o = t === u.SelfStreamAndVideoAlertType.STREAM ? d.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : d.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, a.jsx)(i.default, {
                    confirmText: d.default.Messages.CONFIRM,
                    secondaryConfirmText: d.default.Messages.DONT_ASK_AGAIN,
                    title: s,
                    cancelText: d.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        l.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: o,
                    ...r
                })
            }
        },
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("255397"),
                d = n("191145"),
                r = n("782340");

            function s(e) {
                let t = (0, l.useStateFromStores)([d.default], () => d.default.getVoiceParticipantsHidden(e));
                return (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: r.default.Messages.STREAM_SHOW_NON_VIDEO,
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
                r = n("632616"),
                s = n("535348"),
                o = n("353927"),
                c = n("782340");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    [n, f, _] = (0, d.default)(e, t),
                    E = (0, l.useStateFromStores)([u.default], () => u.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, a.jsx)(i.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: c.default.Messages.SHOW_SELF_VIDEO,
                    checked: !f,
                    action: () => {
                        if (E || f) return _(!f);
                        (0, i.openModal)(e => (0, a.jsx)(r.default, {
                            ...e,
                            type: s.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => _(!f)
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
                r = n("42887"),
                s = n("782340"),
                o = n("431024");

            function c(e) {
                let t = (0, i.useModalContext)(),
                    c = (0, l.useStateFromStores)([r.default], () => r.default.isVideoEnabled()),
                    f = (0, l.useStateFromStores)([d.default], () => d.default.getId() === e),
                    _ = (0, u.default)();
                return (!c || _) && f ? (0, a.jsx)(i.MenuItem, {
                    id: "change-video-background",
                    label: (0, a.jsx)("div", {
                        className: o.item,
                        children: c ? s.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : s.default.Messages.CAMERA_PREVIEW_MENU_ITEM
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
                r = {};

            function s() {
                d.clear()
            }

            function o(e) {
                d.delete(e.guild.id)
            }
            class c extends l.default.Store {
                getChannelStatus(e) {
                    var t;
                    if (null != e && null != e.guild_id) {
                        if (e.type === a.ChannelTypes.GUILD_VOICE) return !d.has(e.guild_id) && (d.add(e.guild_id), u.default.getSocket().requestChannelStatuses(e.guild_id)), null === (t = r[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
                    }
                }
            }
            c.displayName = "ChannelStatusStore";
            var f = new c(i.default, {
                GUILD_CREATE: o,
                GUILD_DELETE: o,
                CONNECTION_RESUMED: s,
                CONNECTION_OPEN: s,
                VOICE_CHANNEL_STATUS_UPDATE: function(e) {
                    null == r[e.guildId] && (r[e.guildId] = {}), r[e.guildId][e.id] = e.status
                },
                CHANNEL_STATUSES: function(e) {
                    for (let {
                            id: t,
                            status: n
                        }
                        of(r[e.guildId] = {}, e.channels)) r[e.guildId][t] = n
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
                    return N
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                i = n("272030"),
                u = n("158534"),
                d = n("812204"),
                r = n("861370"),
                s = n("715243"),
                o = n("261675"),
                c = n("963150"),
                f = n("308798"),
                _ = n("47006"),
                E = n("878526"),
                I = n("531674"),
                C = n("619436"),
                p = n("731390"),
                T = n("339876"),
                S = n("49111"),
                A = n("782340"),
                N = (0, u.default)(function(e) {
                    let {
                        channel: t,
                        guild: n,
                        includeTopic: u = !1,
                        onSelect: d
                    } = e, N = (0, T.default)(t), m = (0, I.default)(t), h = (0, C.default)(t), M = (0, o.default)(t), g = (0, _.default)(t), O = (0, E.default)(t, n), v = (0, s.default)(t, n), L = (0, c.default)(t, n, S.ChannelTypes.GUILD_TEXT), y = (0, c.default)(t, n, S.ChannelTypes.GUILD_VOICE), x = (0, f.default)(t), D = (0, r.default)({
                        id: t.id,
                        label: A.default.Messages.COPY_ID_CHANNEL
                    }), P = (0, p.default)(t, "title_context_menu");
                    return (0, a.jsxs)(l.Menu, {
                        navId: "channel-context",
                        onClose: i.closeContextMenu,
                        "aria-label": A.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onSelect: d,
                        children: [(0, a.jsx)(l.MenuGroup, {
                            children: N
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: m
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [u ? M : h, g]
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [O, v, L, y]
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: P
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: x
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: D
                        })]
                    })
                }, [d.default.CONTEXT_MENU, d.default.CHANNEL_TITLE_MENU])
        },
        715243: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("957255"),
                d = n("49111"),
                r = n("782340");

            function s(e, t) {
                let s = (0, l.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                return __OVERLAY__ || !s ? null : (0, a.jsx)(i.MenuItem, {
                    id: "clone-channel",
                    label: r.default.Messages.CLONE_CHANNEL,
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
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("957255"),
                d = n("49111"),
                r = n("782340");

            function s(e, t) {
                let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, l.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let c = () => {
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: s,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (s) {
                    case d.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(i.MenuItem, {
                            id: "create-text-channel",
                            label: r.default.Messages.CREATE_TEXT_CHANNEL,
                            action: c
                        });
                    case d.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(i.MenuItem, {
                            id: "create-voice-channel",
                            label: r.default.Messages.CREATE_VOICE_CHANNEL,
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
                r = n("49111"),
                s = n("782340");

            function o(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: o,
                    canAccessChannel: c
                } = (0, l.useStateFromStoresObject)([d.default], () => ({
                    canManageChannels: d.default.can(r.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: d.default.can(r.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: d.default.can(r.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: d.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && c && (t || n || o) ? (0, a.jsx)(i.MenuItem, {
                    id: "edit-channel",
                    label: e.type === r.ChannelTypes.GUILD_CATEGORY ? s.default.Messages.EDIT_CATEGORY : s.default.Messages.EDIT_CHANNEL,
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
                    return E
                }
            });
            var a = n("37983"),
                l = n("884691"),
                i = n("77078"),
                u = n("390236"),
                d = n("292508"),
                r = n("383294"),
                s = n("913452"),
                o = n("533466"),
                c = n("49111"),
                f = n("268333");

            function _(e) {
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

            function E(e, t) {
                let n = (0, s.useOpenInPopoutExperiment)(t),
                    u = l.useCallback(() => {
                        r.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, a.jsx)(_, {
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
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("498139"),
                d = n("629220"),
                r = n("512395"),
                s = n("282109"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    isFavoritesPerk: t
                } = (0, u.useFavoritesServerExperiment)("useChannelOptInItems"), n = (0, r.useOptInEnabledForGuild)(e.guild_id), f = (0, l.useStateFromStores)([s.default], () => s.default.isChannelOptedIn(e.guild_id, e.id)), _ = (0, l.useStateFromStores)([s.default], () => null != e.parent_id && s.default.isChannelOptedIn(e.guild_id, e.parent_id)), E = (0, l.useStateFromStores)([s.default], () => s.default.isFavorite(e.guild_id, e.id)), I = () => {
                    (0, d.setOptInChannel)(e.guild_id, e.id, !f, {
                        section: o.AnalyticsSections.CONTEXT_MENU
                    })
                }, C = () => {
                    null != e.parent_id && (0, d.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                        section: o.AnalyticsSections.CONTEXT_MENU
                    })
                };
                if (!n || e.isThread()) return null;
                if (e.isCategory()) return (0, a.jsx)(i.MenuItem, {
                    id: "opt-into-category",
                    label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
                    action: () => I()
                });
                let p = E ? c.default.Messages.REMOVE_FAVORITE : c.default.Messages.ADD_FAVORITE,
                    T = E ? c.default.Messages.UNPIN_CHANNEL : c.default.Messages.PIN_CHANNEL_TO_TOP;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: t ? T : p,
                        action: () => {
                            (0, d.setIsFavorite)(e.guild_id, e.id, !E, {
                                section: o.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), _ ? (0, a.jsx)(i.MenuItem, {
                        id: "opt-out-category",
                        label: c.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => C()
                    }) : (0, a.jsx)(i.MenuItem, {
                        id: "opt-into-channel",
                        label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
                        action: () => I()
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
                r = n("957255"),
                s = n("76539"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    source: t,
                    guild: n,
                    channel: a,
                    stageInstance: i
                } = e, s = (0, l.useStateFromStores)([d.default], () => d.default.getDefaultChannel(n.id, !0, o.Permissions.CREATE_INSTANT_INVITE)), c = (0, l.useStateFromStores)([r.default], () => (0, u.canViewInviteModal)(r.default, n, a, i)), f = _(t, n, c && null != a ? a : s), I = E(t);
                return null == a && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != s ? f : I
            }
            let _ = (e, t, l) => (0, a.jsx)(i.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? s.default : void 0,
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
                E = e => (0, a.jsx)(i.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? s.default : void 0,
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
                    return r
                },
                trackProfilePanelToggled: function() {
                    return s
                }
            });
            var a = n("373469"),
                l = n("824563"),
                i = n("27618"),
                u = n("599110"),
                d = n("49111");
            let r = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: a,
                        activity: l,
                        customStatusActivity: i,
                        status: r
                    } = e;
                    u.default.track(d.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != l && (null == l ? void 0 : l.type) !== d.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == l ? void 0 : l.type) === d.ActivityTypes.PLAYING,
                        load_duration_ms: a,
                        profile_user_status: r,
                        has_custom_status: null != i,
                        has_profile_effect: null != t.profileEffectID,
                        ...o(t)
                    })
                },
                s = (e, t) => {
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
                        r = l.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return u ? t === d.ActivityTypes.PLAYING : t !== d.ActivityTypes.CUSTOM_STATUS
                        }),
                        s = null == r ? void 0 : r.assets,
                        o = i.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == s ? void 0 : s.large_image) && void 0 !== t ? t : null == s ? void 0 : s.small_image),
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
                    return r
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

            function r(e) {
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
        }
    }
]);