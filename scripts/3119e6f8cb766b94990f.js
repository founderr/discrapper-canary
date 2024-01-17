(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["96328"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    l = e.length;
                if (l > n) return !1;
                if (l === n) return e === t;
                e: for (var i = 0, a = 0; i < l; i++) {
                    for (var u = e.charCodeAt(i); a < n;)
                        if (t.charCodeAt(a++) === u) continue e;
                    return !1
                }
                return !0
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return S
                },
                accountDetailsClose: function() {
                    return T
                },
                disableAccount: function() {
                    return A
                },
                saveAccountRequest: function() {
                    return p
                },
                saveAccountChanges: function() {
                    return g
                },
                getHarvestStatus: function() {
                    return I
                },
                requestHarvest: function() {
                    return N
                },
                setPendingAvatar: function() {
                    return C
                },
                setPendingGlobalNameName: function() {
                    return O
                },
                setPendingAvatarDecoration: function() {
                    return m
                },
                setPendingProfileEffectId: function() {
                    return U
                },
                clearErrors: function() {
                    return R
                },
                resetPendingAccountChanges: function() {
                    return v
                },
                resetAllPending: function() {
                    return h
                },
                resetAndCloseUserProfileForm: function() {
                    return y
                },
                setDisableSubmit: function() {
                    return P
                }
            });
            var l = n("872717"),
                i = n("95410"),
                a = n("819855"),
                u = n("913144"),
                o = n("393414"),
                d = n("599110"),
                r = n("315102"),
                s = n("730622"),
                c = n("437822"),
                f = n("49111"),
                E = n("191349"),
                _ = n("782340");

            function S() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function T() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function A(e, t) {
                let n = t ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
                    i = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
                return (0, s.default)(t => l.default.post({
                    url: i,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    c.default.logoutInternal(), (0, o.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function p(e) {
                let t = await l.default.patch({
                        url: f.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, u.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && u.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return u.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function g(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: l,
                    emailToken: a,
                    password: o,
                    avatar: c,
                    avatarDecoration: S,
                    newPassword: T,
                    globalName: A
                } = e;
                return u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, s.default)(e => {
                    let u = {
                        username: t,
                        email: l,
                        email_token: a,
                        password: o,
                        avatar: c,
                        discriminator: n,
                        global_name: A,
                        new_password: T,
                        ...e
                    };
                    null === S && (u.avatar_decoration_id = null), null != S && (u.avatar_decoration_id = S.id, u.avatar_decoration_sku_id = S.skuId);
                    let d = i.default.get(f.DEVICE_TOKEN),
                        r = (0, E.getDevicePushProvider)();
                    null != r && null != d && (u.push_provider = r, u.push_token = d);
                    let s = i.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != s && (u.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, u.push_voip_token = s), p(u)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => u.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return d.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, r.isAnimatedIconHash)(t.avatar)
                    }), u.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function I() {
                return l.default.get({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function N() {
                return l.default.post({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? a.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : a.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function O(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function m(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function U(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: e
                })
            }

            function R() {
                u.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function v() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function h() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function y() {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function P(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
                        className: o
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return a
                }
            });
            var l = n("884691"),
                i = n("599110");
            let a = () => l.useContext(i.AnalyticsContext)
        },
        651057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var l = n("872717"),
                i = n("913144"),
                a = n("568734"),
                u = n("299285"),
                o = n("49111"),
                d = {
                    async createApplication(e) {
                        let {
                            name: t,
                            guildId: n,
                            type: a,
                            teamId: u
                        } = e, d = await l.default.post({
                            url: o.Endpoints.APPLICATIONS,
                            body: {
                                name: t,
                                type: a,
                                guild_id: n,
                                team_id: u
                            }
                        }), r = d.body;
                        return null != n && null != a && i.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: r
                        }), r
                    },
                    async getApplicationsForGuild(e) {
                        let {
                            includeTeam: t,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = await l.default.get({
                            url: o.Endpoints.GUILD_APPLICATIONS(e),
                            query: {
                                ...n,
                                include_team: t
                            }
                        }), u = a.body;
                        return i.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: u
                        }), u
                    },
                    async transferApplication(e) {
                        let {
                            applicationId: t,
                            teamId: n
                        } = e, a = await l.default.post({
                            url: o.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                            body: {
                                team_id: n
                            }
                        }), u = a.body;
                        return i.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: u
                        }), u
                    },
                    async fetchApplications(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = e;
                        if (!t && (n = e.filter(e => {
                                var t, n;
                                let l = u.default.getApplication(e),
                                    i = (0, a.hasFlag)(null !== (n = null == l ? void 0 : l.flags) && void 0 !== n ? n : 0, o.ApplicationFlags.EMBEDDED),
                                    d = i && (null == l ? void 0 : null === (t = l.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                return !(null != l && !d) && !u.default.isFetchingApplication(e) && !u.default.didFetchingApplicationFail(e) && e.length > 0
                            })), n.length > 0) {
                            let e;
                            i.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                e = await l.default.get({
                                    url: o.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (e) {
                                throw i.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), e
                            }
                            i.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: e.body
                            })
                        }
                    },
                    fetchApplication(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return i.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: e
                        }), l.default.get({
                            url: o.Endpoints.APPLICATION_PUBLIC(e),
                            query: {
                                with_guild: t
                            },
                            oldFormErrors: !0
                        }).then(e => (i.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: e.body
                        }), e.body)).catch(t => (i.default.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: e
                        }), Promise.reject(t)))
                    }
                }
        },
        535348: function(e, t, n) {
            "use strict";
            var l, i;
            n.r(t), n.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return l
                }
            }), (i = l || (l = {}))[i.STREAM = 0] = "STREAM", i[i.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                i = n("629109"),
                a = n("271938"),
                u = n("42887"),
                o = n("49111"),
                d = n("353927");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
                    n = (0, l.useStateFromStores)([a.default], () => a.default.getId()),
                    r = (0, l.useStateFromStores)([u.default], () => u.default.supports(d.Features.DISABLE_VIDEO) && u.default.isVideoEnabled()),
                    s = (0, l.useStateFromStores)([u.default], () => u.default.isLocalVideoDisabled(n, t), [n, t]),
                    c = null == e || e === n;
                return [c && (r || s), s, e => {
                    let l = e ? o.VideoToggleState.DISABLED : o.VideoToggleState.MANUAL_ENABLED;
                    i.default.setDisableLocalVideo(n, l, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("452804"),
                a = n("135230"),
                u = n("535348"),
                o = n("782340");

            function d(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...d
                } = e, r = t === u.SelfStreamAndVideoAlertType.STREAM ? o.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : o.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, s = t === u.SelfStreamAndVideoAlertType.STREAM ? o.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : o.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, l.jsx)(a.default, {
                    confirmText: o.default.Messages.CONFIRM,
                    secondaryConfirmText: o.default.Messages.DONT_ASK_AGAIN,
                    title: r,
                    cancelText: o.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        i.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: s,
                    ...d
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
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                u = n("255397"),
                o = n("191145"),
                d = n("782340");

            function r(e) {
                let t = (0, i.useStateFromStores)([o.default], () => o.default.getVoiceParticipantsHidden(e));
                return (0, l.jsx)(a.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: d.default.Messages.STREAM_SHOW_NON_VIDEO,
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
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                u = n("168973"),
                o = n("301603"),
                d = n("632616"),
                r = n("535348"),
                s = n("353927"),
                c = n("782340");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MediaEngineContextTypes.DEFAULT,
                    [n, f, E] = (0, o.default)(e, t),
                    _ = (0, i.useStateFromStores)([u.default], () => u.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, l.jsx)(a.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: c.default.Messages.SHOW_SELF_VIDEO,
                    checked: !f,
                    action: () => {
                        if (_ || f) return E(!f);
                        (0, a.openModal)(e => (0, l.jsx)(d.default, {
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
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                u = n("648911"),
                o = n("271938"),
                d = n("42887"),
                r = n("782340"),
                s = n("431024");

            function c(e) {
                let t = (0, a.useModalContext)(),
                    c = (0, i.useStateFromStores)([d.default], () => d.default.isVideoEnabled()),
                    f = (0, i.useStateFromStores)([o.default], () => o.default.getId() === e),
                    E = (0, u.default)();
                return (!c || E) && f ? (0, l.jsx)(a.MenuItem, {
                    id: "change-video-background",
                    label: (0, l.jsx)("div", {
                        className: s.item,
                        children: c ? r.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : r.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, l.jsx)(e, {
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
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("845579"),
                u = n("662255"),
                o = n("306160");

            function d(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: d,
                    shiftId: r,
                    showIconFirst: s
                } = e, c = a.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !o.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, l.jsx)(i.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != r && e.shiftKey ? r : t;
                        (0, o.copy)(n), null == d || d()
                    },
                    icon: u.default,
                    showIconFirst: s
                }, f)
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return i
                }
            });
            var l = n("49111");

            function i(e, t, n, i) {
                let a = null != n ? n : t,
                    u = null != a && e.can(l.Permissions.CREATE_INSTANT_INVITE, a);
                return u || null != t && null != t.vanityURLCode || (null == i ? void 0 : i.invite_code) != null
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return s
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return E
                }
            });
            var l = n("65597"),
                i = n("862205"),
                a = n("697218"),
                u = n("719923"),
                o = n("782340");
            let d = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1,
                        collectOffOverride: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 8,
                        label: "Collection off everywhere",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !0
                        }
                    }]
                }),
                r = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: l,
                        mobileViewAndUseEnabled: i,
                        mobileAndFreemiumCollectEnabled: a,
                        autoUnfurlReactionTooltip: o,
                        collectOffOverride: d
                    } = n, r = u.default.isPremium(t);
                    return {
                        viewAndUseEnabled: l,
                        showTryPacksModalAndV2Copy: a,
                        collectEnabled: !d && (r ? l : a),
                        autoUnfurlReactionTooltip: o
                    }
                },
                s = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    } : r({
                        user: t,
                        config: d.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                c = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, i = (0, l.default)([a.default], () => a.default.getCurrentUser()), u = d.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: o,
                        showTryPacksModalAndV2Copy: s,
                        collectEnabled: c,
                        autoUnfurlReactionTooltip: f
                    } = r({
                        user: i,
                        config: u
                    }), E = o && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: o,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: s,
                        autoUnfurlReactionTooltip: f
                    }
                },
                f = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescriptionLine1: () => null,
                        getNewSettingsDescriptionLine2: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 4,
                        label: "Show settings toggle, allow collection for guild setting, and show rollback admin coachmark",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => o.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_1,
                            getNewSettingsDescriptionLine2: () => o.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_2
                        }
                    }]
                }),
                E = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = f.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescriptionLine1: n.getNewSettingsDescriptionLine1,
                        getNewSettingsDescriptionLine2: n.getNewSettingsDescriptionLine2
                    }
                }
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return d
                },
                setNewPendingUserBio: function() {
                    return r
                },
                setNewPendingAvatar: function() {
                    return s
                },
                setNewPendingAvatarDecoration: function() {
                    return c
                },
                setNewPendingProfileEffectId: function() {
                    return f
                },
                getProfilePreviewField: function() {
                    return E
                },
                showRemoveAvatar: function() {
                    return _
                },
                showRemoveBanner: function() {
                    return S
                }
            }), n("424973");
            var l = n("884691"),
                i = n("152584"),
                a = n("234251"),
                u = n("783142"),
                o = n("26989");

            function d(e) {
                return l.useMemo(() => {
                    let t = o.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let i in t) {
                        var l;
                        let a = t[i],
                            u = null === (l = a[e]) || void 0 === l ? void 0 : l.avatar;
                        null != u && (null == n[u] && (n[u] = []), n[u].push(i))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function r(e, t) {
                (0, u.setPendingBio)(e === t ? void 0 : e)
            }

            function s(e, t) {
                (0, i.setPendingAvatar)(e === t ? void 0 : e)
            }

            function c(e, t) {
                if ((0, a.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, i.setPendingAvatarDecoration)(void 0);
                    return
                }(0, i.setPendingAvatarDecoration)(e)
            }

            function f(e, t) {
                if (e === t) {
                    (0, i.setPendingProfileEffectId)(void 0);
                    return
                }(0, i.setPendingProfileEffectId)(e)
            }

            function E(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: l ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: l
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function _(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function S(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("49111");

            function i(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(l.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(l.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return p
                },
                inviteUserToStage: function() {
                    return g
                },
                audienceAckRequestToSpeak: function() {
                    return I
                },
                moveSelfToAudience: function() {
                    return N
                },
                setUserSuppress: function() {
                    return C
                },
                moveUserToAudience: function() {
                    return O
                },
                setEveryoneRolePermissionAllowed: function() {
                    return m
                },
                startStage: function() {
                    return U
                },
                editStage: function() {
                    return R
                },
                endStage: function() {
                    return v
                }
            });
            var l = n("627445"),
                i = n.n(l),
                a = n("316693"),
                u = n("872717"),
                o = n("450911");
            n("851387");
            var d = n("798609"),
                r = n("716241"),
                s = n("18494"),
                c = n("800762"),
                f = n("991170"),
                E = n("716214"),
                _ = n("230324"),
                S = n("738983"),
                T = n("808422"),
                A = n("49111");

            function p(e, t) {
                let n = e.getGuildId();
                return i(null != n, "This channel cannot be guildless."), t && (0, r.trackWithMetadata)(A.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), u.default.patch({
                    url: A.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function g(e, t) {
                let n = e.getGuildId();
                return i(null != n, "This channel cannot be guildless."), u.default.patch({
                    url: A.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function I(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null == e ? void 0 : e.getGuildId();
                i(null != l, "This channel cannot be guildless.");
                let a = c.default.getVoiceStateForChannel(e.id),
                    o = (0, T.getAudienceRequestToSpeakState)(a);
                return o === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, r.trackWithMetadata)(A.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), u.default.patch({
                    url: A.Endpoints.UPDATE_VOICE_STATE(l),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function N(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return i(null != t, "This channel cannot be guildless."), u.default.patch({
                    url: A.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function C(e, t, n) {
                let l = e.getGuildId();
                return i(null != l, "This channel cannot be guildless."), u.default.patch({
                    url: A.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function O(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return i(null != n, "This channel cannot be guildless."), C(t, e.id, !0), u.default.patch({
                    url: A.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function m(e, t, n) {
                let l = e.getGuildId();
                i(null != l, "Channel cannot be guildless");
                let u = e.permissionOverwrites[l],
                    r = {
                        id: l,
                        type: d.PermissionOverwriteType.ROLE,
                        allow: f.default.NONE,
                        deny: f.default.NONE,
                        ...u
                    };
                n ? (r.allow = a.default.add(r.allow, t), r.deny = a.default.remove(r.deny, t)) : (r.allow = a.default.remove(r.allow, t), r.deny = a.default.add(r.deny, t)), o.default.updatePermissionOverwrite(e.id, r)
            }
            async function U(e, t, n, l) {
                if ("" === t) return;
                let i = s.default.getVoiceChannelId() === e.id;
                !i && (0, E.connectToStage)(e);
                let a = await (0, S.startStageInstance)(e.id, t, n, l);
                return I(e, !1, !0), a
            }
            async function R(e, t, n) {
                if ("" === t) return;
                let l = await (0, S.updateStageInstance)(e.id, t, n);
                return l
            }
            async function v(e) {
                await (0, S.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return f
                },
                getStageChannelMetadata: function() {
                    return E
                }
            }), n("808653"), n("222007"), n("917351");
            var l = n("945956"),
                i = n("387111"),
                a = n("991170"),
                u = n("834052"),
                o = n("837979"),
                d = n("49111"),
                r = n("606762"),
                s = n("782340");

            function c(e, t, n, l) {
                let a = t[0],
                    u = i.default.getName(e, n, a),
                    o = null != l ? l : t.length;
                return 1 === o && null != a ? u : null == a ? s.default.Messages.SPEAKING_COUNT.format({
                    count: o
                }) : s.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: u,
                    count: o - 1
                })
            }

            function f(e, t) {
                switch (e) {
                    case r.RowType.OWNER:
                        return s.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case r.RowType.ADMINISTRATOR:
                        return s.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case r.RowType.MEMBER:
                    case r.RowType.ROLE:
                        return t ? s.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : s.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case r.RowType.EMPTY_STATE:
                }
                return null
            }

            function E(e) {
                let t = u.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(d.Permissions.REQUEST_TO_SPEAK, e) ? o.RequestToSpeakPermissionStates.EVERYONE : o.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return a
                },
                updateStageInstance: function() {
                    return u
                },
                endStageInstance: function() {
                    return o
                }
            });
            var l = n("872717"),
                i = n("49111");
            async function a(e, t, n, a, u) {
                let o = await l.default.post({
                    url: i.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: u,
                        send_start_notification: a
                    }
                });
                return o.body
            }
            async function u(e, t, n) {
                let a = await l.default.patch({
                    url: i.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return a.body
            }

            function o(e) {
                return l.default.delete(i.Endpoints.STAGE_INSTANCE(e))
            }
        },
        77445: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                i = n("271938"),
                a = n("18494"),
                u = n("808422");

            function o() {
                let e = (0, l.useStateFromStores)([a.default], () => a.default.getVoiceChannelId()),
                    t = (0, l.useStateFromStores)([i.default], () => i.default.getId()),
                    n = (0, u.default)(t, e);
                return n === u.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }
        },
        130563: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                i = n("42203"),
                a = n("18494");

            function u() {
                return (0, l.useStateFromStores)([a.default, i.default], () => {
                    let e = a.default.getVoiceChannelId();
                    if (null != e) {
                        let t = i.default.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                })
            }
        },
        726750: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                u = n("305961"),
                o = n("697218"),
                d = n("800762"),
                r = n("244480"),
                s = n("619395"),
                c = n("325861"),
                f = n("77445"),
                E = n("130563"),
                _ = n("782340");

            function S(e) {
                var t;
                let n = (0, E.default)(),
                    S = null == n ? void 0 : n.id,
                    T = null == n ? void 0 : n.guild_id,
                    A = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(T), [T]),
                    p = (0, i.useStateFromStores)([d.default], () => null != S ? d.default.getVoiceStateForChannel(S, e.id) : null, [S, e.id]),
                    g = (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
                    I = (0, f.default)(),
                    N = (0, i.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, S), [S, e.id]),
                    C = (0, s.useCanModerateRequestToSpeak)(S);
                if (null == n || null == A || null == p || N.speaker) return null;
                let O = () => {
                    g ? (0, r.audienceAckRequestToSpeak)(n, !1) : (0, r.inviteUserToStage)(n, e.id)
                };
                return C ? (0, l.jsx)(a.MenuItem, {
                    id: "invite-speaker",
                    label: g ? _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : _.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: O
                }) : I && g ? (0, l.jsx)(a.MenuItem, {
                    id: "invite-speaker",
                    label: _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: O
                }) : null
            }
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return i
                },
                getStickerSendability: function() {
                    return r
                },
                isSendableSticker: function() {
                    return s
                }
            });
            var l, i, a = n("991170"),
                u = n("719923"),
                o = n("24373"),
                d = n("49111");
            (l = i || (i = {}))[l.SENDABLE = 0] = "SENDABLE", l[l.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", l[l.NONSENDABLE = 2] = "NONSENDABLE", l[l.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let r = (e, t, n) => {
                    if (null == t) return 2;
                    let l = u.default.canUseCustomStickersEverywhere(t);
                    if ((0, o.isStandardSticker)(e)) return 0;
                    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || a.default.can({
                        permission: d.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? l ? 0 : 1 : 2 : 3;
                    return 2
                },
                s = (e, t, n) => 0 === r(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("424973");
            var l = n("917351"),
                i = n.n(l),
                a = n("446674"),
                u = n("913144"),
                o = n("80507"),
                d = n("374363"),
                r = n("718517"),
                s = n("364685"),
                c = n("397336");
            let f = {
                pendingUsages: []
            };
            r.default.Millis.DAY;
            let E = new o.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => s.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                _ = () => {
                    s.default.isLoaded && E.compute()
                },
                S = () => {
                    _()
                };

            function T() {
                var e;
                let t = null === (e = d.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                E.overwriteHistory(i.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class A extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (f = e), this.syncWith([s.default], S), this.syncWith([d.default], T)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return E
                }
            }
            A.displayName = "StickersPersistedStore", A.persistKey = "StickersPersistedStoreV2";
            var p = new A(u.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        E.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), _()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    f.pendingUsages = []
                }
            })
        },
        502533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                u = n("255397"),
                o = n("191145"),
                d = n("800762"),
                r = n("49111"),
                s = n("782340");

            function c(e, t) {
                let n = (0, i.useStateFromStores)([o.default], () => e === o.default.getSelectedParticipantId(t), [t, e]),
                    c = (0, i.useStateFromStores)([o.default, d.default], () => {
                        let n = d.default.isInChannel(t, e) && d.default.hasVideo(t),
                            l = o.default.getLayout(t),
                            i = l === r.ChannelLayouts.MINIMUM || l === r.ChannelLayouts.NORMAL;
                        return !n || i
                    }, [t, e]);
                return c ? null : (0, l.jsx)(a.MenuItem, {
                    id: "focus-video",
                    label: n ? s.default.Messages.UNFOCUS_PARTICIPANT : s.default.Messages.FOCUS_PARTICIPANT,
                    action: () => u.default.selectParticipant(t, n ? null : e)
                })
            }
        },
        692986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                u = n("404118"),
                o = n("629109"),
                d = n("235004"),
                r = n("42887"),
                s = n("945956"),
                c = n("162771"),
                f = n("697218"),
                E = n("423487"),
                _ = n("599110"),
                S = n("49111"),
                T = n("353927"),
                A = n("782340"),
                p = n("113508");

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.MediaEngineContextTypes.DEFAULT,
                    n = (0, i.useStateFromStores)([f.default], () => {
                        var t;
                        return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
                    }),
                    g = (0, i.useStateFromStores)([d.default], () => d.default.isLocalSoundboardMuted(e)),
                    {
                        muted: I,
                        deafened: N = !1,
                        localVideoDisabled: C = !1,
                        localVideoAutoDisabled: O = !1
                    } = (0, i.useStateFromStoresObject)([r.default], () => n ? {
                        muted: r.default.isSelfMute(t),
                        deafened: r.default.isSelfDeaf(t)
                    } : {
                        muted: r.default.isLocalMute(e, t),
                        localVideoDisabled: r.default.isLocalVideoDisabled(e, t),
                        localVideoAutoDisabled: r.default.isLocalVideoAutoDisabled(e, t)
                    }, [n, t, e]),
                    m = r.default.supports(T.Features.DISABLE_VIDEO) && !n ? (0, l.jsx)(a.MenuCheckboxItem, {
                        id: "disable-video",
                        label: A.default.Messages.DISABLE_VIDEO,
                        action: () => {
                            if (O) {
                                u.default.show({
                                    title: A.default.Messages.UNSTABLE_CONNECTION,
                                    body: A.default.Messages.UNSTABLE_CONNECTION_REASON_2,
                                    confirmText: A.default.Messages.TURN_ON_VIDEO_ANYWAY,
                                    cancelText: A.default.Messages.LEAVE_VIDEO_OFF,
                                    onConfirm: () => o.default.setDisableLocalVideo(e, S.VideoToggleState.MANUAL_ENABLED)
                                });
                                return
                            }
                            let n = C ? S.VideoToggleState.MANUAL_ENABLED : S.VideoToggleState.DISABLED;
                            o.default.setDisableLocalVideo(e, n, t)
                        },
                        checked: C,
                        subtext: O ? (0, l.jsxs)("div", {
                            className: p.videoPaused,
                            children: [(0, l.jsx)(E.default, {
                                width: 12,
                                className: p.warningCircle
                            }), A.default.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    U = n ? null : (0, l.jsx)(a.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: A.default.Messages.MUTE_SOUNDBOARD,
                        action: () => {
                            let n = s.default.getRTCConnection();
                            _.default.track(S.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: c.default.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                                parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                                mute_soundboard: !g
                            }), o.default.toggleLocalSoundboardMute(e, t)
                        },
                        checked: g
                    }, "soundboard-sound-mute");
                return n ? [(0, l.jsx)(a.MenuCheckboxItem, {
                    id: "mute",
                    label: A.default.Messages.SOUND_MUTE,
                    action: () => o.default.toggleSelfMute({
                        context: t
                    }),
                    checked: I
                }, "self-mute"), (0, l.jsx)(a.MenuCheckboxItem, {
                    id: "deafen",
                    label: A.default.Messages.DEAFEN,
                    action: () => o.default.toggleSelfDeaf({
                        context: t
                    }),
                    checked: N
                }, "self-deafen"), m] : [(0, l.jsx)(a.MenuCheckboxItem, {
                    id: "mute",
                    label: A.default.Messages.SOUND_MUTE,
                    action: () => o.default.toggleLocalMute(e, t),
                    checked: I
                }, "self-mute"), U, m]
            }
        },
        816106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                u = n("629109"),
                o = n("42887"),
                d = n("697218"),
                r = n("829536"),
                s = n("773336"),
                c = n("353927"),
                f = n("782340");

            function E(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT,
                    E = (0, i.useStateFromStores)([o.default], () => o.default.getLocalVolume(e, n), [e, n]),
                    _ = e === (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    S = n === c.MediaEngineContextTypes.STREAM;
                return _ ? null : (0, l.jsx)(a.MenuControlItem, {
                    id: "user-volume",
                    label: S ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME,
                    control: (t, i) => (0, l.jsx)(a.MenuSliderControl, {
                        ...t,
                        ref: i,
                        value: (0, r.amplitudeToPerceptual)(E),
                        maxValue: s.isPlatformEmbedded ? 200 : 100,
                        onChange: t => u.default.setLocalVolume(e, (0, r.perceptualToAmplitude)(t), n),
                        "aria-label": S ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME
                    })
                })
            }
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return E
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return _
                },
                resetPendingProfileChanges: function() {
                    return S
                },
                setPendingBanner: function() {
                    return T
                },
                setPendingBio: function() {
                    return A
                },
                setPendingPronouns: function() {
                    return p
                },
                setPendingAccentColor: function() {
                    return g
                },
                setPendingThemeColors: function() {
                    return I
                },
                setTryItOutAvatar: function() {
                    return N
                },
                setTryItOutAvatarDecoration: function() {
                    return C
                },
                setTryItOutBanner: function() {
                    return O
                },
                setTryItOutThemeColors: function() {
                    return m
                }
            });
            var l = n("872717"),
                i = n("913144"),
                a = n("448993"),
                u = n("884351"),
                o = n("845579"),
                d = n("697218"),
                r = n("599110"),
                s = n("49111"),
                c = n("646718");

            function f(e) {
                r.default.track(s.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function E(e, t) {
                var n, r;
                let c = null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == c) return;
                let f = o.UseLegacyChatInput.getSetting();
                null != e.bio && f && (e.bio = u.default.parse(void 0, e.bio).content);
                try {
                    i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: c
                    });
                    let n = await l.default.patch({
                        url: null != t ? s.Endpoints.GUILD_PROFILE(t, s.ME) : s.Endpoints.USER_PROFILE(s.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (r = n.body.profile_effect) || void 0 === r ? void 0 : r.id;
                        i.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: c,
                            profileEffectId: e,
                            ...n.body
                        })
                    } else {
                        let e = new a.APIError(n);
                        i.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new a.APIError(t);
                    i.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function _() {
                i.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function S() {
                i.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function T(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function A(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function p(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function g(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function I(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), f(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function C(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), f(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function O(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), f(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function m(e) {
                i.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), f(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                i = n("42887"),
                a = n("512244");

            function u() {
                return (0, l.useStateFromStores)([i.default], () => (0, a.default)(i.default))
            }
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("35647"),
                u = n("75196"),
                o = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, a.IdIcon, void 0, {
                    size: 24
                })
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return u
                },
                copy: function() {
                    return o
                }
            }), n("70102");
            var l = n("281071"),
                i = n("773336"),
                a = n("50885");
            let u = (() => {
                if (i.isPlatformEmbedded) return null != a.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function o(e) {
                return !!u && (i.isPlatformEmbedded ? (a.default.copy(e), !0) : l.copy(e))
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function l(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    l = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = e, i.contentEditable = "true", i.style.visibility = "none", t.appendChild(i), n.selectNodeContents(i), null == l || l.removeAllRanges(), null == l || l.addRange(n), i.focus(), i.setSelectionRange(0, e.length);
                let a = document.execCommand("copy");
                return t.removeChild(i), a
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return l
                }
            }), n("70102")
        }
    }
]);