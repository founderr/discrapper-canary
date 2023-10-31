(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40592"], {
        243704: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6418419524dd1e583beb.svg"
        },
        812952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r, i, l, a, s = n("37983"),
                u = n("884691"),
                o = n("414456"),
                d = n.n(o),
                E = n("145131"),
                _ = n("298754");
            (r = l || (l = {})).PRIMARY = "primary", r.SECONDARY = "secondary", r.WARNING = "warning", r.ERROR = "error", (i = a || (a = {})).SMALL = "small", i.LARGE = "large", i.NONE = "none";
            let c = {
                    [l.PRIMARY]: _.colorPrimary,
                    [l.SECONDARY]: _.colorSecondary,
                    [l.WARNING]: _.colorWarning,
                    [l.ERROR]: _.colorError
                },
                S = {
                    [a.SMALL]: _.small,
                    [a.LARGE]: _.large,
                    [a.NONE]: null
                };
            class I extends u.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: t,
                        children: n,
                        iconSize: r,
                        className: i,
                        iconClassName: l
                    } = this.props;
                    return (0, s.jsxs)(E.default, {
                        className: d(_.note, c[t], i),
                        align: E.default.Align.CENTER,
                        children: [(0, s.jsx)(e, {
                            className: d(_.icon, S[r], l)
                        }), (0, s.jsx)("div", {
                            children: n
                        })]
                    })
                }
            }
            I.Colors = l, I.Sizes = a;
            var T = I
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(e, t) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), l = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("605250"),
                i = n("802493");
            let l = new r.default("GuildStickers");
            var a = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = i.default.stickers(e).getMapEntriesSyncUnsafe(),
                        r = performance.now();
                    return l.log("synchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (l.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (l.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    i.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    i.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    i.default.stickersTransaction(e).delete()
                }
                update(e, t, n, r) {
                    let l = i.default.stickersTransaction(r);
                    for (let r of (l.putAll(e, t), n)) l.delete(e, r)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, l, a;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (l = r || (r = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (a = i || (i = {}))[a.BOT = 0] = "BOT", a[a.SERVER = 1] = "SERVER", a[a.SYSTEM_DM = 2] = "SYSTEM_DM", a[a.OFFICIAL = 3] = "OFFICIAL", a[a.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", a[a.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", a[a.AI = 6] = "AI", a[a.REMIX = 7] = "REMIX"
        },
        686298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationStreamResolutions: function() {
                    return a
                },
                getApplicationResolution: function() {
                    return _
                },
                ApplicationStreamFPS: function() {
                    return s
                },
                ApplicationStreamPresets: function() {
                    return u
                },
                getApplicationFramerate: function() {
                    return c
                },
                ApplicationStreamPresetValues: function() {
                    return S
                },
                ApplicationStreamSettingRequirements: function() {
                    return I
                },
                ApplicationStreamResolutionButtons: function() {
                    return N
                },
                GoLiveDeviceResolutionButtons: function() {
                    return O
                },
                ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
                    return A
                },
                ApplicationStreamFPSButtons: function() {
                    return L
                },
                ApplicationStreamFPSButtonsWithSuffixLabel: function() {
                    return R
                }
            });
            var r, i, l, a, s, u, o = n("49111"),
                d = n("646718"),
                E = n("782340");

            function _(e) {
                switch (e) {
                    case a.RESOLUTION_480:
                        return a.RESOLUTION_480;
                    case a.RESOLUTION_720:
                        return a.RESOLUTION_720;
                    case a.RESOLUTION_1080:
                        return a.RESOLUTION_1080;
                    case a.RESOLUTION_SOURCE:
                        return a.RESOLUTION_SOURCE;
                    default:
                        throw Error("Unknown resolution: ".concat(e))
                }
            }

            function c(e) {
                switch (e) {
                    case s.FPS_5:
                        return s.FPS_5;
                    case s.FPS_15:
                        return s.FPS_15;
                    case s.FPS_30:
                        return s.FPS_30;
                    case s.FPS_60:
                        return s.FPS_60;
                    default:
                        throw Error("Unknown frame rate: ".concat(e))
                }
            }(r = a || (a = {}))[r.RESOLUTION_480 = 480] = "RESOLUTION_480", r[r.RESOLUTION_720 = 720] = "RESOLUTION_720", r[r.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", r[r.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", r[r.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (i = s || (s = {}))[i.FPS_5 = 5] = "FPS_5", i[i.FPS_15 = 15] = "FPS_15", i[i.FPS_30 = 30] = "FPS_30", i[i.FPS_60 = 60] = "FPS_60", (l = u || (u = {}))[l.PRESET_VIDEO = 1] = "PRESET_VIDEO", l[l.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", l[l.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
            let S = {
                    [u.PRESET_DOCUMENTS]: [{
                        resolution: a.RESOLUTION_SOURCE,
                        fps: s.FPS_15
                    }, {
                        resolution: a.RESOLUTION_SOURCE,
                        fps: s.FPS_5
                    }],
                    [u.PRESET_VIDEO]: [{
                        resolution: a.RESOLUTION_1440,
                        fps: s.FPS_60
                    }, {
                        resolution: a.RESOLUTION_1080,
                        fps: s.FPS_60
                    }, {
                        resolution: a.RESOLUTION_720,
                        fps: s.FPS_60
                    }, {
                        resolution: a.RESOLUTION_720,
                        fps: s.FPS_30
                    }],
                    [u.PRESET_CUSTOM]: []
                },
                I = [{
                    resolution: a.RESOLUTION_SOURCE,
                    fps: s.FPS_60,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: s.FPS_30,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: s.FPS_15,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_SOURCE,
                    fps: s.FPS_5,
                    preset: u.PRESET_DOCUMENTS
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: s.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: s.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1440,
                    fps: s.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: s.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: s.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_1080,
                    fps: s.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: s.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: s.FPS_30
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: s.FPS_15
                }, {
                    resolution: a.RESOLUTION_720,
                    fps: s.FPS_5
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: s.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: s.FPS_30
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: s.FPS_15
                }, {
                    resolution: a.RESOLUTION_480,
                    fps: s.FPS_5
                }];

            function T(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            let N = [T(a.RESOLUTION_720), T(a.RESOLUTION_1080), T(a.RESOLUTION_1440), T(a.RESOLUTION_SOURCE, () => E.default.Messages.SCREENSHARE_SOURCE)],
                O = [T(a.RESOLUTION_720), T(a.RESOLUTION_1080), T(a.RESOLUTION_1440)],
                f = e => "".concat(e, "p"),
                A = [T(a.RESOLUTION_480, () => f(a.RESOLUTION_480)), T(a.RESOLUTION_720, () => f(a.RESOLUTION_720)), T(a.RESOLUTION_1080, () => f(a.RESOLUTION_1080)), T(a.RESOLUTION_1440, () => f(a.RESOLUTION_1440)), T(a.RESOLUTION_SOURCE, () => E.default.Messages.SCREENSHARE_SOURCE)],
                L = [T(s.FPS_15), T(s.FPS_30), T(s.FPS_60)],
                R = [T(s.FPS_15, () => E.default.Messages.STREAM_FPS_OPTION.format({
                    value: s.FPS_15
                })), T(s.FPS_30, () => E.default.Messages.STREAM_FPS_OPTION.format({
                    value: s.FPS_30
                })), T(s.FPS_60, () => E.default.Messages.STREAM_FPS_OPTION.format({
                    value: s.FPS_60
                }))]
        },
        874642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("77078"),
                a = n("812204"),
                s = n("685665"),
                u = n("642906"),
                o = n("85336"),
                d = n("273619"),
                E = n("674158"),
                _ = n("427459"),
                c = n("617917"),
                S = n("49111"),
                I = n("782340"),
                T = n("315706"),
                N = n("926622");
            let O = "premium-guild-subscription-upsell-modal-header";

            function f(e) {
                let {
                    title: t,
                    subtitle: n,
                    image: i
                } = e;
                return (0, r.jsxs)("div", {
                    className: T.header,
                    children: [(0, r.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        id: O,
                        color: "header-primary",
                        className: N.marginBottom8,
                        children: t
                    }), (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        className: T.subtitleText,
                        children: n
                    }), i]
                })
            }
            let A = e => {
                    let {
                        onClose: t,
                        perks: n,
                        perkIntro: i = I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
                        headerProps: a
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: T.wrapper,
                        children: [(0, r.jsx)(l.ModalCloseButton, {
                            className: T.closeButton,
                            onClick: () => {
                                t()
                            }
                        }), (0, r.jsx)(L, {
                            headerProps: a,
                            perkIntro: i
                        }), (0, r.jsx)("div", {
                            className: T.perks,
                            children: n.map((e, t) => {
                                let {
                                    icon: n,
                                    iconClassName: i,
                                    description: l,
                                    color: a
                                } = e;
                                return (0, r.jsx)(E.default, {
                                    icon: n,
                                    iconClassName: i,
                                    description: l,
                                    color: a
                                }, t)
                            })
                        })]
                    })
                },
                L = e => {
                    let {
                        headerProps: t,
                        perkIntro: a
                    } = e;
                    return (0, r.jsxs)(i.Fragment, {
                        children: [null != t ? (0, r.jsx)(f, {
                            ...t
                        }) : (0, r.jsx)("img", {
                            className: T.heroImage,
                            src: n("243704"),
                            alt: I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            className: T.heading,
                            children: a
                        })]
                    })
                },
                R = e => {
                    let {
                        guild: t,
                        targetBoostedGuildTier: n,
                        onClose: i,
                        analyticsSourceLocation: a
                    } = e, s = {
                        section: S.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL,
                        object: S.AnalyticsObjects.BUTTON_CTA,
                        objectType: null != n ? (0, _.boostedGuildTierToAnalyticsObjectType)(n) : null
                    };
                    return (0, r.jsxs)(l.ModalFooter, {
                        className: T.footer,
                        children: [(0, r.jsx)(l.Button, {
                            size: l.Button.Sizes.SMALL,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            onClick: () => {
                                i()
                            },
                            children: I.default.Messages.CLOSE
                        }), (0, r.jsx)(c.default, {
                            analyticsLocation: s,
                            analyticsSourceLocation: a,
                            guild: t,
                            targetBoostedGuildTier: n,
                            onClose: () => {
                                i()
                            }
                        })]
                    })
                };

            function C(e) {
                let {
                    analyticsSourceLocation: t,
                    guild: n,
                    targetBoostedGuildTier: i,
                    perks: E,
                    perkIntro: _,
                    headerProps: c,
                    onClose: S,
                    ...I
                } = e, {
                    AnalyticsLocationProvider: T
                } = (0, s.default)(a.default.ACTIVITY_DIRECTORY);
                return (0, r.jsx)(T, {
                    children: (0, r.jsx)(u.PaymentContextProvider, {
                        activeSubscription: null,
                        stepConfigs: [],
                        skuIDs: [],
                        children: (0, r.jsx)(l.ModalRoot, {
                            ...I,
                            "aria-labelledby": O,
                            children: (0, r.jsx)(d.default, {
                                hideBreadcrumbs: !0,
                                body: (0, r.jsx)(A, {
                                    onClose: S,
                                    perks: E,
                                    perkIntro: _,
                                    headerProps: c
                                }),
                                footer: (0, r.jsx)(R, {
                                    guild: n,
                                    targetBoostedGuildTier: i,
                                    onClose: S,
                                    analyticsSourceLocation: t
                                }),
                                steps: [o.Step.PREMIUM_GUILD_UPSELL],
                                currentStep: o.Step.PREMIUM_GUILD_UPSELL
                            })
                        })
                    })
                })
            }
        },
        533613: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return r
                }
            }), (i = r || (r = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", i.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", i.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", i.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", i.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", i.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", i.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", i.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", i.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", i.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", i.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", i.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", i.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", i.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", i.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", i.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", i.HUB_NEW = "HUB_NEW", i.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", i.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", i.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", i.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", i.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", i.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", i.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", i.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", i.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", i.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", i.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", i.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", i.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", i.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", i.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", i.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", i.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", i.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", i.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", i.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", i.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", i.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return a
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return u
                },
                parseInviteCodeFromInviteKey: function() {
                    return o
                }
            });
            var r = n("522632"),
                i = n("833858");
            let l = "event";

            function a(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return s({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function s(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function u(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let a = r.parse(n),
                    s = (0, i.getFirstQueryStringValue)(a[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
                }
            }

            function o(e) {
                let [t] = e.split("?");
                return t
            }
        },
        153727: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("454589"),
                s = n("659632"),
                u = n("642906"),
                o = n("85336"),
                d = n("109872");

            function E(e) {
                let {
                    className: t,
                    isEligibleForTrial: n = !1
                } = e, {
                    step: i,
                    breadcrumbs: E,
                    startedPaymentFlowWithPaymentSourcesRef: _,
                    giftRecipient: c
                } = (0, u.usePaymentContext)();
                if (null == E || 0 === E.length || (0, s.isCustomGiftEnabled)(c)) return null;
                let S = E.flatMap(e => {
                    let t = e.useBreadcrumbLabel();
                    return null != t ? {
                        id: e.id,
                        label: t
                    } : []
                });
                return 0 === S.length ? null : (S = S.filter(e => {
                    let t = e.id !== o.Step.ADD_PAYMENT_STEPS,
                        r = e.id === o.Step.ADD_PAYMENT_STEPS && !_.current;
                    return !n || n && (t || r)
                }), (0, r.jsx)("div", {
                    className: l("breadcrumb", d.wrapper, t),
                    children: (0, r.jsx)(a.default, {
                        activeId: i,
                        breadcrumbs: S
                    })
                }))
            }
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                },
                PaymentPortalBody: function() {
                    return I
                },
                PaymentPortalFooter: function() {
                    return T
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("627445"),
                u = n.n(s),
                o = n("817736"),
                d = n.n(o),
                E = n("77078"),
                _ = n("642906"),
                c = n("990893");

            function S(e) {
                var t, n, l, s, o, d;
                let {
                    header: S,
                    isLargeModal: I,
                    stepProps: T
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...r
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: r
                    }
                }(e), {
                    step: N,
                    stepConfigs: O,
                    setBodyNode: f,
                    setFooterNode: A,
                    setModalOverlayNode: L,
                    setReadySlideId: R
                } = (0, _.usePaymentContext)(), C = O.find(e => e.key === N);
                i.useEffect(() => {
                    L(null)
                }, [N, L]), u(null != C, "Unknown step for current payment flow.");
                let U = null !== (o = null == C ? void 0 : null === (t = C.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== o && o,
                    D = null == C ? void 0 : null === (n = C.options) || void 0 === n ? void 0 : n.bodyClassName,
                    p = void 0 !== I && I ? c.sliderBodyLarge : null == C ? void 0 : null === (l = C.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null === (d = null == C ? void 0 : null === (s = C.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === d || d ? S : null, C.renderStep(T), null == N || U ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(E.ModalContent, {
                            className: a(c.body, D),
                            children: (0, r.jsx)(E.Slides, {
                                activeSlide: N,
                                centered: !1,
                                onSlideReady: e => R(e),
                                children: O.filter(e => null != e.key).map(e => (0, r.jsx)(E.Slide, {
                                    id: e.key,
                                    children: (0, r.jsx)("form", {
                                        className: a(c.sliderBody, p),
                                        ref: e => f(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, r.jsx)("div", {
                            ref: e => A(e)
                        }), (0, r.jsx)("div", {
                            ref: e => L(e)
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, _.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function T(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, _.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        273619: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("685635"),
                a = n("414456"),
                s = n.n(a),
                u = n("862337"),
                o = n("77078"),
                d = n("812952"),
                E = n("448993"),
                _ = n("736978"),
                c = n("642906"),
                S = n("85336");
            n("153727"), n("650484");
            var I = n("454589"),
                T = n("978679"),
                N = n("745279"),
                O = n("49111"),
                f = n("782340"),
                A = n("129429");
            let L = new Set([S.Step.SKU_SELECT, S.Step.AWAITING_AUTHENTICATION, S.Step.AWAITING_PURCHASE_TOKEN_AUTH, S.Step.CONFIRM]);

            function R(e) {
                let {
                    steps: t,
                    currentStep: n,
                    body: a,
                    paymentError: R,
                    header: C,
                    footer: U,
                    isGift: D = !1,
                    giftMessage: p = f.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    isSeasonalGift: P = !1,
                    hideBreadcrumbs: v = !1,
                    isLoading: h = !1,
                    purchaseError: m,
                    purchaseErrorBlockRef: g,
                    planError: M,
                    onScroll: G,
                    scrollerClassName: F,
                    hasCurrencies: y = !1
                } = e, B = null;
                null != R && null == (0, S.errorToStep)(R) ? B = R : null != m ? B = m : null != M && (B = M);
                let k = null != B ? B.message : "";
                null != B && B instanceof E.BillingError && (B.code === _.ErrorCodes.CARD_DECLINED && y && (k += " ".concat(f.default.Messages.BILLING_ERROR_TRY_ANOTHER)), B.code === _.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (k = f.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), B.code === O.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (k = f.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: x
                } = (0, c.usePaymentContext)();
                h = h || null == x;
                let b = i.useRef(new u.Timeout);
                i.useEffect(() => {
                    let e = b.current;
                    return null != x || e.isStarted() ? null != x && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, N.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [x]);
                let H = t.includes(S.Step.PAYMENT_TYPE) ? S.Step.PAYMENT_TYPE : S.Step.ADD_PAYMENT_STEPS;
                return (0, r.jsxs)(l.Elements, {
                    options: O.StripeElementsOptions,
                    stripe: x,
                    children: [C, (0, r.jsxs)("div", {
                        className: s("paymentModalContent", A.content),
                        children: [D && !P && n !== S.Step.CONFIRM ? (0, r.jsx)(d.default, {
                            className: A.paymentNote,
                            iconSize: d.default.Sizes.SMALL,
                            icon: T.default,
                            color: null == p ? d.default.Colors.PRIMARY : d.default.Colors.SECONDARY,
                            children: p
                        }) : null, v ? null : (0, r.jsx)("div", {
                            className: A.breadcrumbsWrapper,
                            children: (0, r.jsx)(I.default, {
                                activeId: S.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(n) ? H : n,
                                breadcrumbs: t.filter(e => !S.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !L.has(e)).map(e => ({
                                    id: e,
                                    label: (0, S.getLabelForStep)(e)
                                }))
                            })
                        }), (0, r.jsxs)("div", {
                            className: A.bodyWrapper,
                            children: [null == B ? null : (0, r.jsx)("div", {
                                className: A.errorBlockWrapper,
                                children: (0, r.jsx)(o.FormErrorBlock, {
                                    ref: g,
                                    children: k
                                })
                            }), h ? (0, r.jsx)(o.Spinner, {
                                className: A.loadingBlock
                            }) : (0, r.jsx)(o.Sequencer, {
                                className: A.sequencer,
                                staticClassName: A.sequencerStatic,
                                animatedNodeClassName: A.sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: t,
                                sideMargin: 20,
                                children: (0, r.jsx)(o.AdvancedScrollerThin, {
                                    onScroll: G,
                                    className: s(A.scroller, F),
                                    children: a
                                })
                            })]
                        })]
                    }), U]
                })
            }
        },
        674158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("288264");

            function s(e) {
                let {
                    icon: t,
                    iconClassName: n,
                    description: i,
                    color: s
                } = e;
                return (0, r.jsxs)("div", {
                    className: a.perkRow,
                    children: [(0, r.jsx)("div", {
                        className: a.perkIconContainer,
                        children: (0, r.jsx)(t, {
                            color: s,
                            className: l(a.perkIcon, n)
                        })
                    }), (0, r.jsx)("div", {
                        className: a.perkDescription,
                        children: i
                    })]
                })
            }
        },
        846325: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return l
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return a
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
                },
                SoundboardWheelSize: function() {
                    return u
                },
                DEFAULT_KEYBIND: function() {
                    return o
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return E
                }
            });
            let l = 32,
                a = 5,
                s = "DEFAULT";
            (i = r || (r = {}))[i.SUCCESS = 0] = "SUCCESS", i[i.INTERRUPTED = 1] = "INTERRUPTED", r.SUCCESS, r.INTERRUPTED;
            let u = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                o = "ctrl+`",
                d = [],
                E = "0"
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r, i, l = n("917351"),
                a = n.n(l),
                s = n("446674"),
                u = n("913144"),
                o = n("845579"),
                d = n("374363"),
                E = n("697218"),
                _ = n("599110"),
                c = n("829536"),
                S = n("846325"),
                I = n("49111"),
                T = n("397336");
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            let N = new Map,
                O = new Map,
                f = new Set,
                A = i.NOT_FETCHED,
                L = i.NOT_FETCHED,
                R = new Set,
                C = new Map,
                U = !1;

            function D(e) {
                let {
                    sound: t
                } = e, n = N.get(t.guildId), r = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != r && -1 !== r ? (n[r] = t, N.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), N.set(t.guildId, [...n]))
            }
            let p = a.debounce(e => {
                _.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, c.amplitudeToPerceptual)(e))
                }), o.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function P(e) {
                var t, n;
                let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(r)) t.soundboardMuted ? f.add(e) : f.delete(e);
                for (let e of f.keys()) null == r[e] && f.delete(e)
            }
            class v extends s.default.Store {
                initialize() {
                    this.waitFor(d.default), P(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(N),
                        favoritedSoundIds: Array.from(R),
                        localSoundboardMutes: Array.from(f)
                    }
                }
                getSounds() {
                    return N
                }
                getSoundsForGuild(e) {
                    return N.get(e)
                }
                getDefaultSounds() {
                    return this.getSoundsForGuild(S.DEFAULT_SOUND_GUILD_ID)
                }
                getSound(e, t) {
                    var n;
                    let r = null !== (n = N.get(e)) && void 0 !== n ? n : [];
                    return r.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(N.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return L === i.FETCHING
                }
                isFetchingDefaultSounds() {
                    return A === i.FETCHING
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return A === i.NOT_FETCHED
                }
                hasFetchedDefaultSounds() {
                    return A === i.FETCHED
                }
                isUserPlayingSounds(e) {
                    let t = C.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != O.get(e)
                }
                isFavoriteSound(e) {
                    return R.has(e)
                }
                getFavorites() {
                    return R
                }
                isLocalSoundboardMuted(e) {
                    return f.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return U
                }
                hasFetchedAllSounds() {
                    return L === i.FETCHED && A === i.FETCHED
                }
            }
            v.displayName = "SoundboardStore";
            var h = new v(u.default, {
                LOGOUT: function() {
                    N.clear(), O.clear(), C.clear(), U = !1, L = i.NOT_FETCHED, A = i.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    L = i.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: D,
                GUILD_SOUNDBOARD_SOUND_UPDATE: D,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    N.delete(t);
                    let r = N.get(n),
                        i = null == r ? void 0 : r.findIndex(e => e.soundId === t);
                    null != r && null != i && !(i < 0) && (r.splice(i, 1), N.set(n, [...r]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, r;
                    let {
                        soundId: i,
                        userId: l
                    } = e, a = (null !== (n = O.get(i)) && void 0 !== n ? n : 0) + 1, s = (null !== (r = C.get(l)) && void 0 !== r ? r : 0) + 1;
                    O.set(i, a), C.set(l, s), l !== (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (U = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: r,
                        userId: i
                    } = e, l = (null !== (t = O.get(r)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = C.get(i)) && void 0 !== n ? n : 0) - 1;
                    l <= 0 ? O.delete(r) : O.set(r, l), a <= 0 ? C.delete(i) : C.set(i, a)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    p(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    O.clear(), C.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: r
                    } = t;
                    if (n === T.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, l;
                        R = new Set(null !== (l = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== l ? l : [])
                    } else n === T.UserSettingsTypes.PRELOADED_USER_SETTINGS && P(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    A = i.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    N.set(S.DEFAULT_SOUND_GUILD_ID, t), A = i.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        N.set(t, n)
                    }), L = i.FETCHED
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    N.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    f.has(t) ? f.delete(t) : f.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    N = new Map(Object.entries(t.soundboardSounds)), R = new Set(t.favoritedSoundIds), f = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    N.set(t, n)
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            });
            var r, i, l = n("102053"),
                a = n("446674"),
                s = n("913144"),
                u = n("802493"),
                o = n("595525"),
                d = n("212084"),
                E = n("867805"),
                _ = n("267567"),
                c = n("813006"),
                S = n("778689"),
                I = n("305961"),
                T = n("161585"),
                N = n("24373"),
                O = n("49111");
            (r = i || (i = {}))[r.Unloaded = 0] = "Unloaded", r[r.MaybeLoaded = 1] = "MaybeLoaded", r[r.Loaded = 2] = "Loaded";
            let f = 2,
                A = new Map,
                L = new Map,
                R = null,
                C = [],
                U = null,
                D = !1,
                p = new Map,
                P = (e, t) => {
                    p = new Map(p.set(e, t))
                },
                v = 1e3 * O.Durations.HOUR,
                h = () => {
                    if (0 !== f) return;
                    let e = u.default.database();
                    if (null == e) return;
                    f = 2;
                    let t = (0, o.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => l.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (S.default.isMember(e) && !p.has(e)) {
                                for (let t of n) m(t, !0, I.default.getGuild(e));
                                P(e, n)
                            }
                    }
                },
                m = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    L.set(e.id, e), t && g(e, n)
                },
                g = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == R) return;
                    let {
                        tags: n
                    } = e, r = {
                        type: T.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, N.isStandardSticker)(e)) {
                        let t = C.find(t => t.id === e.pack_id),
                            i = [r, ...(null != n ? n : "").split(",").map(e => ({
                                type: T.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && i.push({
                            type: T.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), R.set(e.id, i)
                    } else if ((0, N.isGuildSticker)(e) && null != n) {
                        let i = E.default.getByName(n),
                            l = {
                                type: T.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            a = [r, l];
                        if (null != t) {
                            let e = (t instanceof(0, c.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && a.push({
                                type: T.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == i) {
                            R.set(e.id, a);
                            return
                        }
                        a.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: i.surrogates
                        }), i.forEachDiversity(e => a.push({
                            type: T.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), R.set(e.id, a)
                    }
                },
                M = (e, t, n) => {
                    A.set(e.id, e);
                    let r = [...C];
                    if (t) {
                        let t = r.findIndex(t => t.id === e.id); - 1 !== t ? r[t] = e : r.push(e), C = r
                    }(t || n) && e.stickers.forEach(e => m(e))
                },
                G = () => {
                    p.forEach((e, t) => {
                        let n = I.default.getGuild(t);
                        null != n && e.forEach(e => g(e, n))
                    }), C.forEach(e => {
                        e.stickers.forEach(e => g(e))
                    })
                };

            function F(e) {
                null != e.stickers && (e.stickers.forEach(t => m(t, !0, e)), P(e.id, e.stickers))
            }
            class y extends a.default.Store {
                initialize() {
                    this.waitFor(u.default, S.default, I.default)
                }
                get isLoaded() {
                    return 0 !== f
                }
                get stickerMetadata() {
                    return h(), null == R && (R = new Map, G()), R
                }
                get hasLoadedStickerPacks() {
                    return null != U && U + v > Date.now()
                }
                get isFetchingStickerPacks() {
                    return D
                }
                getStickerById(e) {
                    return !L.has(e) && h(), L.get(e)
                }
                getStickerPack(e) {
                    return A.get(e)
                }
                getPremiumPacks() {
                    return C
                }
                isPremiumPack(e) {
                    return C.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return p
                }
                getAllStickersIterator() {
                    return h(), L.values()
                }
                getAllGuildStickers() {
                    return h(), p
                }
                getStickersByGuildId(e) {
                    return h(), p.get(e)
                }
            }
            y.displayName = "StickersStore";
            var B = new y(s.default, {
                BACKGROUND_SYNC: () => {
                    R = null, L = new Map, p = new Map, f = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    R = null, L = new Map, p = new Map, t.forEach(F), f = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !_.default.isLurking(t.id) && (F(t), 1 === f && null == t.stickers && null != t.stickerUpdates && (f = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, r = null !== (t = p.get(n.id)) && void 0 !== t ? t : [];
                    r.forEach(e => {
                        null != R && R.delete(e.id), L.delete(e.id)
                    }), p.delete(n.id), p = new Map(p)
                },
                LOGOUT: () => {
                    f = 0, C = [], L.clear(), A.clear(), R = null, p.clear(), p = new Map(p), D = !1, U = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    D = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => M(e, !0)), U = Date.now(), D = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    M(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => m(e)), P(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: r,
                        sticker: i
                    } = e, l = null !== (t = p.get(r)) && void 0 !== t ? t : [];
                    P(r, [...null !== (n = l.filter(e => e.id !== i.id)) && void 0 !== n ? n : [], i]), m(i)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    m(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: r
                    } = e, i = e => {
                        let t;
                        let n = L.get(e.id);
                        return null != n && (0, N.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, l = null !== (t = p.get(n)) && void 0 !== t ? t : [], a = l.filter(e => null == r.find(t => t.id === e.id));
                    a.forEach(e => {
                        L.delete(e.id), null != R && R.delete(e.id)
                    });
                    let s = r.map(e => i(e));
                    s.forEach(e => m(e)), P(n, s)
                }
            })
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("666038");
            class i extends r.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var r = n("446674"),
                i = n("913144"),
                l = n("619340"),
                a = n("376556"),
                s = n("450205"),
                u = n("813006"),
                o = n("49111");
            let d = new Set([o.PlatformTypes.CONTACTS]),
                E = !0,
                _ = [],
                c = [],
                S = {},
                I = {},
                T = e => {
                    _ = e.filter(e => !d.has(e.type) && a.default.isSupported(e.type)), c = e.filter(e => d.has(e.type)), E = !1
                };
            class N extends r.default.Store {
                isJoining(e) {
                    return S[e] || !1
                }
                isFetching() {
                    return E
                }
                getAccounts() {
                    return _
                }
                getLocalAccounts() {
                    return c
                }
                getAccount(e, t) {
                    return _.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return c.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return I[e] || !1
                }
            }
            N.displayName = "ConnectedAccountsStore";
            var O = new N(i.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new s.default(e));
                    T(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new s.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new u.default(e.guild)
                            }))
                        }));
                        T(t)
                    } else l.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    S[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: r,
                        accessToken: i
                    } = e, l = _.find(e => e.id === n && e.type === t);
                    if (null == l) return !1;
                    null != r && (l.revoked = r), null != i && (l.accessToken = i)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("446674"),
                i = n("913144"),
                l = n("9294"),
                a = n("49111");
            let s = {},
                u = {},
                o = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, l.parseExtraDataFromInviteKey)(e),
                    i = s[e],
                    u = null != i ? {
                        state: a.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: a.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(u), s = {
                    ...s,
                    [e]: u
                }, (null === (n = u.guild) || void 0 === n ? void 0 : n.id) != null && (o = {
                    ...o,
                    [u.guild.id]: e
                })
            }

            function E(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? a.InviteStates.BANNED : a.InviteStates.EXPIRED
                })
            }
            class _ extends r.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return u[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return o[e]
                }
            }
            _.displayName = "InviteStore";
            var c = new _(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: a.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, r;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: E,
                INSTANT_INVITE_REVOKE_SUCCESS: E,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = a.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = a.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, r;
                        t.state = a.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = a.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return u[e.code] = e.error, d(e.code, e => {
                        e.state = a.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = a.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        454589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                s = n("77078"),
                u = n("145131"),
                o = n("461380"),
                d = n("298619");
            class E extends i.PureComponent {
                handleClick(e) {
                    let {
                        onBreadcrumbClick: t
                    } = this.props;
                    null != t && t(e)
                }
                render() {
                    let {
                        breadcrumbs: e,
                        className: t
                    } = this.props, n = e.map(this.renderBreadcrumb);
                    return (0, r.jsx)(u.default, {
                        justify: u.default.Justify.START,
                        className: a(d.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: i,
                            breadcrumbs: l,
                            renderCustomBreadcrumb: u,
                            separatorClassName: E
                        } = this.props, _ = e.id === n, c = t === l.length - 1, S = null != u ? u(e, _) : (0, r.jsx)("span", {
                            className: a(d.breadcrumb, {
                                [d.activeBreadcrumb]: _,
                                [d.interactiveBreadcrumb]: null != i
                            }),
                            children: e.label
                        });
                        return (0, r.jsxs)("div", {
                            className: a(d.breadcrumbWrapper, {
                                [d.breadcrumbFinalWrapper]: c
                            }),
                            children: [null != i ? (0, r.jsx)(s.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: d.breadcrumbClickWrapper,
                                children: S
                            }) : S, c ? null : (0, r.jsx)(o.default, {
                                className: a(d.breadcrumbArrow, E),
                                direction: o.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var _ = E
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("384737"),
                s = n("448052"),
                u = n("748802"),
                o = n("260792"),
                d = n("77078"),
                E = n("75196"),
                _ = n("4177");
            let c = {
                    UP: _.directionUp,
                    RIGHT: _.directionRight,
                    DOWN: _.directionDown,
                    LEFT: _.directionLeft
                },
                S = e => {
                    let {
                        direction: t = c.DOWN,
                        width: n = 24,
                        height: i = 24,
                        color: S = "currentColor",
                        transition: I = _.transition,
                        className: T,
                        foreground: N,
                        expanded: O,
                        ...f
                    } = e, {
                        enabled: A
                    } = (0, d.useRedesignIconContext)(), L = t;
                    if (!0 === O ? L = c.DOWN : !1 === O && (L = c.RIGHT), A) {
                        let e = {
                            [c.UP]: o.ChevronSmallUpIcon,
                            [c.DOWN]: a.ChevronSmallDownIcon,
                            [c.LEFT]: s.ChevronSmallLeftIcon,
                            [c.RIGHT]: u.ChevronSmallRightIcon
                        } [L];
                        return (0, r.jsx)(e, {
                            ...f,
                            className: T,
                            width: n,
                            height: i,
                            color: S,
                            colorClass: N
                        })
                    }
                    return (0, r.jsx)("svg", {
                        className: l(T, I, L),
                        width: n,
                        height: i,
                        viewBox: "0 0 24 24",
                        ...(0, E.default)(f),
                        children: (0, r.jsx)("path", {
                            className: N,
                            fill: "none",
                            stroke: S,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            S.Directions = c;
            var I = S
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return r
                },
                amplitudeToPerceptual: function() {
                    return i
                }
            });

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let r = 20 * Math.log10(e / n);
                return n * (t = r > 0 ? r / 6 + 1 : (50 + r) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        }
    }
]);