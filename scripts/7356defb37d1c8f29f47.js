"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [95813], {
        285991: (e, t, n) => {
            n.d(t, {
                k: () => O,
                Lr: () => m,
                mB: () => A,
                PR: () => R,
                In: () => N,
                Sr: () => f
            });
            var i = n(441143),
                r = n.n(i),
                o = n(495414),
                l = n(281110),
                a = n(744564),
                u = n(722406),
                _ = n(473903),
                c = n(2590);

            function E(e, t, n, i, r, o, l) {
                try {
                    var a = e[o](l),
                        u = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(u) : Promise.resolve(u).then(i, r)
            }

            function s(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(i, r) {
                        var o = e.apply(t, n);

                        function l(e) {
                            E(o, i, r, l, a, "next", e)
                        }

                        function a(e) {
                            E(o, i, r, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    i.forEach((function(t) {
                        I(e, t, n[t])
                    }))
                }
                return e
            }
            var T = function(e, t) {
                    var n, i, r, o, l = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                    (i = 0, r) && (o = [2 & o[0], r.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            i = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = l.trys, r = r.length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < r[1]) {
                                                l.label = r[1];
                                                r = o;
                                                break
                                            }
                                            if (r && l.label < r[2]) {
                                                l.label = r[2];
                                                l.ops.push(o);
                                                break
                                            }
                                            r[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, l)
                                } catch (e) {
                                    o = [6, e];
                                    i = 0
                                } finally {
                                    n = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                p = new o.Z("UserProfileModalActionCreators");

            function O() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.withAnalyticsToken,
                    n = void 0 !== t && t;
                return l.ZP.get({
                    url: c.ANM.ME,
                    query: {
                        with_analytics_token: n
                    },
                    oldFormErrors: !0
                }).then((function(e) {
                    a.Z.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: e.body,
                        analyticsToken: n ? e.body.analytics_token : void 0
                    });
                    return new u.Z(e.body)
                }))
            }

            function m() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return l.ZP.patch({
                    url: c.ANM.USER_AGREEMENTS,
                    body: {
                        terms: e,
                        privacy: t
                    },
                    oldFormErrors: !0
                }).then((function() {
                    return !0
                }), (function() {
                    return !1
                }))
            }

            function A(e, t) {
                var n = _.default.getCurrentUser();
                r()(null != n, "setFlag: user cannot be undefined");
                var i = t ? n.flags | e : n.flags & ~e;
                return l.ZP.patch({
                    url: c.ANM.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: i
                    }
                })
            }

            function R(e) {
                var t = _.default.getUser(e);
                return null != t ? Promise.resolve(t) : l.ZP.get({
                    url: c.ANM.USER(e),
                    oldFormErrors: !0
                }).then((function(t) {
                    a.Z.dispatch({
                        type: "USER_UPDATE",
                        user: t.body
                    });
                    return _.default.getUser(e)
                }))
            }

            function N(e) {
                return L.apply(this, arguments)
            }

            function L() {
                L = s((function(e) {
                    var t, n, i, r, o, u, _, E, s, I = arguments;
                    return T(this, (function(T) {
                        switch (T.label) {
                            case 0:
                                t = I.length > 1 && void 0 !== I[1] ? I[1] : {}, n = t.friendToken, i = t.withMutualGuilds, r = t.withMutualFriendsCount, o = t.guildId, u = t.connectionsRoleId, _ = I.length > 2 ? I[2] : void 0;
                                a.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_START",
                                    userId: e
                                });
                                T.label = 1;
                            case 1:
                                T.trys.push([1, 3, , 4]);
                                return [4, l.ZP.get({
                                    url: c.ANM.USER_PROFILE(e),
                                    query: {
                                        friend_token: n,
                                        with_mutual_guilds: i,
                                        with_mutual_friends_count: r,
                                        guild_id: o,
                                        connections_role_id: u
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                E = T.sent();
                                null == _ || _(E.body, o);
                                a.Z.dispatch({
                                    type: "USER_UPDATE",
                                    user: E.body.user
                                });
                                a.Z.dispatch(d({
                                    type: "USER_PROFILE_FETCH_SUCCESS"
                                }, E.body));
                                null != o && null != E.body.guild_member && a.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildId: o,
                                    guildMember: E.body.guild_member
                                });
                                return [2, E.body];
                            case 3:
                                null != (s = T.sent()) && null != (null == s ? void 0 : s.body) && p.warn("fetchProfile error: ".concat(s.body.code, " - ").concat(s.body.message));
                                a.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_FAILURE",
                                    userId: e
                                });
                                throw s;
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return L.apply(this, arguments)
            }

            function f(e) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = s((function(e) {
                    var t, n;
                    return T(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                a.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_START",
                                    userId: e
                                });
                                i.label = 1;
                            case 1:
                                i.trys.push([1, 3, , 4]);
                                return [4, l.ZP.get({
                                    url: c.ANM.USER_RELATIONSHIPS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                t = i.sent();
                                a.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                                    userId: e,
                                    mutualFriends: t.body
                                });
                                return [3, 4];
                            case 3:
                                null != (null == (n = i.sent()) ? void 0 : n.body) && p.warn("fetchMutualFriends error: ".concat(n.body.code, " - ").concat(n.body.message));
                                a.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                                    userId: e
                                });
                                throw n;
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        153686: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var i;
            ! function(e) {
                e.POPOUT_WINDOW = "popout window";
                e.OVERLAY = "overlay";
                e.NOTICE = "notice";
                e.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip";
                e.BADGE = "badge";
                e.USER_SETTINGS = "user settings";
                e.USER_SETTINGS_MENU = "user settings menu";
                e.ACCOUNT = "account";
                e.TEXT_AND_IMAGES = "text and images";
                e.GUILD_SETTINGS = "guild settings";
                e.OVERVIEW = "overview";
                e.STICKERS = "stickers";
                e.VANITY_URL = "vanity url";
                e.PREMIUM_MARKETING = "premium marketing";
                e.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison";
                e.PREMIUM_PAYMENT_MODAL = "premium payment modal";
                e.PREMIUM_UPSELL_ALERT = "premium upsell alert";
                e.PREMIUM_UPSELL_MODAL = "premium upsell modal";
                e.PREMIUM_SETTINGS = "premium settings";
                e.PAYMENT_FLOW_TEST_PAGE = "payment flow test page";
                e.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet";
                e.CHANNEL_CALL = "channel call";
                e.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen";
                e.RTC_PANEL = "rtc panel";
                e.SOUNDBOARD_BUTTON = "soundboard button";
                e.SOUNDBOARD_POPOUT = "soundboard popout";
                e.SOUNDBOARD_WHEEL = "soundboard wheel";
                e.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet";
                e.GIFT_BUTTON = "gift button";
                e.EXPRESSION_SUGGESTIONS = "expression suggestions";
                e.EMOJI_PICKER = "emoji picker";
                e.STICKER_PICKER = "sticker picker";
                e.STICKER_POPOUT = "sticker popout";
                e.PREMIUM_UPSELL = "premium upsell";
                e.EMPTY_STATE = "empty state";
                e.SUBSCRIPTION_DETAILS = "subscription details";
                e.SUBSCRIPTION_HEADER = "subscription header";
                e.ACCOUNT_CREDIT_BANNER = "account credit banner";
                e.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal";
                e.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner";
                e.STREAM_QUALITY_INDICATOR = "stream quality indicator";
                e.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice";
                e.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice";
                e.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal";
                e.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell";
                e.RPC = "rpc";
                e.BILLING_STANDALONE = "billing standalone";
                e.GUILD_CHANNEL_LIST = "guild channel list";
                e.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer";
                e.STICKER_MESSAGE = "sticker message";
                e.CHANNEL_TEXT_AREA = "channel text area";
                e.HEADER_BAR = "header bar";
                e.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal";
                e.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell";
                e.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell";
                e.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal";
                e.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal";
                e.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice";
                e.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal";
                e.GUILD_HEADER = "guild header";
                e.GUILD_BANNER = "guild banner";
                e.GUILD_BANNER_NOTICE = "guild banner notice";
                e.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal";
                e.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal";
                e.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal";
                e.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar";
                e.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none";
                e.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1";
                e.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2";
                e.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3";
                e.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display";
                e.GUILDS_LIST = "guilds list";
                e.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector";
                e.ACTIVITY_DIRECTORY = "activity directory";
                e.ACTIVITY_TILE = "activity tile";
                e.ACTIVITY_UPSELL = "activity upsell";
                e.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle";
                e.INSTANT_INVITE_MODAL = "instant invite modal";
                e.IMAGE_CROPPING_MODAL = "image cropping modal";
                e.GIF_PICKER = "gif picker";
                e.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal";
                e.INVITE_MODAL = "invite modal";
                e.INVITE_EMBED = "invite embed";
                e.NEW_GUILD_BUTTON = "new guild button";
                e.CHARACTER_COUNT = "character count";
                e.DM_CHANNEL = "dm channel";
                e.GUILD_CHANNEL = "guild channel";
                e.FORUM_CHANNEL = "forum channel";
                e.FILE_UPLOAD_POPOUT = "file upload popout";
                e.EMOJI = "emoji";
                e.PROFILE = "profile";
                e.PROFILE_MODAL = "profile modal";
                e.PROFILE_POPOUT = "profile popout";
                e.GUILD_PROFILE = "guild profile";
                e.EDIT_AVATAR = "edit avatar";
                e.EDIT_BANNER = "edit banner";
                e.CHAT_INPUT = "chat input";
                e.CREATE_THREAD = "create thread";
                e.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header";
                e.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay";
                e.SELECT_IMAGE_MODAL = "select image modal";
                e.VIDEO_BACKGROUND_OPTIONS = "video background options";
                e.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option";
                e.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell";
                e.CAMERA_PREVIEW = "camera preview";
                e.HOME_PAGE_PREMIUM_TAB = "home page premium tab";
                e.PREMIUM_MARKETING_SURFACE = "premium marketing surface";
                e.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta";
                e.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta";
                e.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta";
                e.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta";
                e.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta";
                e.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card";
                e.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card";
                e.PREMIUM_MARKETING_FEATURE = "premium marketing feature";
                e.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table";
                e.PREMIUM_MARKETING_FOOTER = "premium marketing footer";
                e.CHANNEL_CALL_ACTION_BAR = "channel call action bar";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads";
                e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo";
                e.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls";
                e.VOICE_CONTROL_TRAY = "voice control tray";
                e.ACTIVE_NOW_COLUMN = "active now column";
                e.CONTEXT_MENU = "context menu";
                e.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu";
                e.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu";
                e.CHANNEL_CATEGORY_MENU = "channel category menu";
                e.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu";
                e.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu";
                e.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu";
                e.CHANNEL_LIST_THREAD_MENU = "channel list thread menu";
                e.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu";
                e.CHANNEL_TITLE_MENU = "channel title menu";
                e.GROUP_DM_MENU = "group dm menu";
                e.AUDIT_LOG_USER_MENU = "audit log user menu";
                e.BANNED_USER_MENU = "banned user menu";
                e.DM_USER_MENU = "dm user menu";
                e.GROUP_DM_USER_MENU = "group dm user menu";
                e.GUILD_CHANNEL_USER_MENU = "guild channel user menu";
                e.GUILD_MODERATION_USER_MENU = "guild moderation user menu";
                e.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu";
                e.GUILD_SETTINGS_USER_MENU = "guild settings user menu";
                e.GUILD_USER_MENU = "guild user menu";
                e.THREAD_USER_MENU = "thread user menu";
                e.USER_GENERIC_MENU = "user generic menu";
                e.USER_PROFILE_ACTIONS_MENU = "user profile actions menu";
                e.VOICE_ACTION_SHEET = "voice action sheet";
                e.FOCUSED_VOICE_CONTROLS = "focused voice controls";
                e.MASKED_LINK = "masked link";
                e.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet";
                e.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet";
                e.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet";
                e.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell";
                e.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal";
                e.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal";
                e.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet";
                e.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal";
                e.ACCOUNT_PROFILE_POPOUT = "account profile popout";
                e.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet";
                e.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium";
                e.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro";
                e.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting";
                e.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022";
                e.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark";
                e.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip";
                e.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out";
                e.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker";
                e.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone";
                e.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night";
                e.STAGE_VIDEO_LIMIT = "stage video limit";
                e.ACTIVITIES_MINI_SHELF = "activities mini shelf";
                e.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner";
                e.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite";
                e.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion";
                e.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button";
                e.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark";
                e.CLIENT_THEMES_EDITOR = "client themes editor";
                e.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector";
                e.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert";
                e.SHARE_NITRO_EMBED = "share nitro embed";
                e.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message";
                e.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button";
                e.REFERRAL_TRIALS_POPOUT = "referral trials popout";
                e.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal";
                e.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner";
                e.ACTIVITY_BOOKMARK = "activity bookmark";
                e.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher";
                e.ACTIVITY_DETAIL_PAGE = "activity detail page";
                e.ACTIVITIES_PAGE = "activities page";
                e.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta";
                e.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile";
                e.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content";
                e.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky";
                e.ACTIVITIES_HAPPENING_NOW = "activities happening now";
                e.MEDIA_VIEWER = "media viewer";
                e.MESSAGE_LONG_PRESS_MENU = "message long press menu";
                e.COLLECTIBLES_SHOP = "collectibles shop";
                e.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                e.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal";
                e.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal";
                e.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell";
                e.PREMIUM_BILLING_INFO = "premium billing info";
                e.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details";
                e.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview";
                e.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview";
                e.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated";
                e.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal";
                e.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice";
                e.PREMIUM_PLAN_SELECT = "premium_plan_select";
                e.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview";
                e.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content";
                e.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview";
                e.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview";
                e.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT";
                e.MEMBER_SAFETY_PAGE = "member safety page";
                e.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page";
                e.GUILD_MEMBER_MOD_VIEW = "guild member mod view";
                e.GUILD_PRODUCT_EMBED_CARD = "guild product embed card";
                e.GUILD_PRODUCT_INFO_MODAL = "guild product info modal";
                e.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal";
                e.GUILD_SHOP_PAGE = "guild shop page";
                e.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details";
                e.MESSAGE_REMIX_TAG = "message remix tag";
                e.MESSAGE_REMIX_BUTTON = "message remix button";
                e.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity";
                e.CLIPS_SETTINGS = "clips settings";
                e.CLIPS_GALLERY = "clips gallery";
                e.CLIPS_GALLERY_ITEM = "clips gallery item";
                e.CLIPS_EDITOR = "clips editor";
                e.CLIPS_SHARE_MODAL = "clips share modal";
                e.CHANNEL_ATTACH_BUTTON = "channel attach button";
                e.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet"
            }(i || (i = {}));
            const r = i
        },
        479373: (e, t, n) => {
            n.d(t, {
                Z: () => N,
                Y: () => L
            });
            var i = n(667294),
                r = n(110251),
                o = n.n(r),
                l = n(873955),
                a = n.n(l),
                u = n(993231),
                _ = n(744564),
                c = n(61209),
                E = n(715107),
                s = n(464187),
                I = n(652591),
                d = n(396043),
                T = n(930114);

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    i.forEach((function(t) {
                        p(e, t, n[t])
                    }))
                }
                return e
            }

            function m(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, i)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var A = (0, u.Gb)({
                analyticEventConfigs: I.AnalyticEventConfigs,
                dispatcher: _.Z,
                TRACK_ACTION_NAME: "TRACK"
            });

            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.name,
                    i = e.type,
                    r = e.properties;
                if (e.type !== u.nv.MODAL || null != e.name || !(0, T.Ez)().some((function(e) {
                        var t;
                        return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide
                    }))) {
                    (0, T.Ps)(e);
                    var o, l, a = null !== (o = null == r ? void 0 : r.guild_id) && void 0 !== o ? o : s.Z.getGuildId(),
                        _ = null !== (l = null == r ? void 0 : r.channel_id) && void 0 !== l ? l : E.Z.getChannelId(a),
                        p = (0, I.expandEventProperties)(O({
                            impression_type: i,
                            location: (0, T.k$)()
                        }, (0, d.hH)(a), (0, d.v_)(c.Z.getChannel(_)), r));
                    if (t)(0, T.dT)(null, null);
                    else {
                        if (null != n && null != i) {
                            (0, I.debugLogEvent)(n, p);
                            A(n, p)
                        }(0, T.dT)(n, p)
                    }
                }
            }

            function N(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        disableTrack: !1,
                        trackOnInitialLoad: !1
                    },
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = i.useRef(),
                    l = i.useRef();
                i.useEffect((function() {
                    var i = !o()(r.current, e);
                    i && (r.current = e);
                    var u = !o()(l.current, n);
                    u && (l.current = n);
                    if (i || u) {
                        var _ = m(O({}, e), {
                            sequenceId: a()("impression_")
                        });
                        R(_, t.disableTrack);
                        return function() {
                            null != _ && (0, T.dw)(_)
                        }
                    }
                }), t.trackOnInitialLoad ? [] : void 0)
            }

            function L(e, t) {
                var n = e.impressionName,
                    i = e.impressionProperties,
                    r = "function" == typeof i ? i(t.params) : i;
                N({
                    type: u.nv.PAGE,
                    name: n,
                    properties: r
                })
            }
        },
        638042: (e, t, n) => {
            n.d(t, {
                Z: () => s,
                e: () => I
            });
            var i = n(785893),
                r = (n(667294), n(712861)),
                o = n(142643),
                l = n(525044),
                a = n(675728);

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    i.forEach((function(t) {
                        u(e, t, n[t])
                    }))
                }
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, i, r = function(e, t) {
                    if (null == e) return {};
                    var n, i, r = {},
                        o = Object.keys(e);
                    for (i = 0; i < o.length; i++) {
                        n = o[i];
                        t.indexOf(n) >= 0 || (r[n] = e[n])
                    }
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < o.length; i++) {
                        n = o[i];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                    }
                }
                return r
            }
            var E = (0,
                r.Mg)(o.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function s(e) {
                var t = e.listing,
                    n = e.imageSize,
                    r = e.alt,
                    o = c(e, ["listing", "imageSize", "alt"]),
                    a = (0, l.U)(t, n);
                return (0, i.jsx)("img", _({
                    src: a,
                    alt: r
                }, o))
            }

            function I(e) {
                var t = e.listing,
                    n = e.aspectRatio,
                    r = void 0 === n ? 16 / 9 : n,
                    o = e.height,
                    u = c(e, ["listing", "aspectRatio", "height"]),
                    s = (o - 2 * E) * r,
                    I = (0, l.U)(t, s),
                    d = (0, l.U)(t, s, {
                        shouldAnimate: !1
                    });
                return (0, i.jsx)(a.Z, _({
                    src: I,
                    backgroundSrc: d,
                    aspectRatio: r
                }, u))
            }
        },
        695813: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => P
            });
            var i = n(785893),
                r = n(667294),
                o = n(441143),
                l = n.n(o),
                a = n(993231),
                u = n(202351),
                _ = n(882723),
                c = n(153686),
                E = n(479373),
                s = n(285991),
                I = n(90459),
                d = n(567403),
                T = n(491260),
                p = n(473903),
                O = n(773148);
            var m = n(434131),
                A = n(638042),
                R = n(223430),
                N = n(835807),
                L = n(332013),
                f = n(486229),
                S = n(984560),
                g = n(473708),
                C = n(182983),
                U = n.n(C);

            function M(e) {
                var t = e.listing,
                    n = e.role;
                return (0, i.jsx)(S.Z, {
                    role: n,
                    textVariant: "text-md/medium",
                    locked: !t.has_entitlement
                })
            }

            function P(e) {
                var t, n = e.transitionState,
                    o = e.guildProductListingId,
                    S = e.guildId,
                    C = e.onClose,
                    P = (0, u.e7)([N.Z], (function() {
                        return N.Z.getGuildProduct(o)
                    }));
                l()(null != P, "guildProductListing cannot be null");
                (0, E.Z)({
                    type: a.nv.MODAL,
                    name: a.zs.GUILD_PRODUCT_LISTING_INFO_MODAL,
                    properties: {
                        guild_product_listing_id: o,
                        has_entitlement: !0 === P.has_entitlement
                    }
                });
                var b, v = null !== (t = (0, L.C)(P)) && void 0 !== t ? t : "",
                    h = (0, L.k)(P),
                    D = function(e) {
                        var t = (0, u.e7)([d.Z], (function() {
                                return d.Z.getGuild(e)
                            })),
                            n = null == t ? void 0 : t.ownerId;
                        l()(null != n, "ownerId cannot be null");
                        r.useEffect((function() {
                            I.Z.isFetchingProfile(n) || null != I.Z.getUserProfile(n) || (0, s.In)(n, {
                                guildId: e
                            })
                        }), [e, n]);
                        var i = (0, u.e7)([p.default], (function() {
                                return p.default.getUser(n)
                            })),
                            o = (0, u.e7)([T.Z], (function() {
                                return T.Z.getStatus(n)
                            })),
                            a = null != i;
                        return {
                            name: O.ZP.useName(e, null, i),
                            status: o,
                            user: i,
                            loaded: a
                        }
                    }(S),
                    y = D.name,
                    G = (0, u.e7)([d.Z], (function() {
                        var e;
                        return null === (e = d.Z.getGuild(P.guild_id)) || void 0 === e ? void 0 : e.roles[null !== (b = P.role_id) && void 0 !== b ? b : ""]
                    }));
                return (0, i.jsxs)(_.ModalRoot, {
                    className: U().modal,
                    size: _.ModalSize.MEDIUM,
                    transitionState: n,
                    "aria-label": P.name,
                    children: [(0, i.jsxs)(_.ModalHeader, {
                        separator: !1,
                        children: [(0, i.jsx)(A.e, {
                            height: 267,
                            listing: P,
                            className: U().headerImage,
                            alt: ""
                        }), (0, i.jsx)(_.ModalCloseButton, {
                            className: U().closeButton,
                            onClick: C,
                            withCircleBackground: !0
                        })]
                    }), (0, i.jsx)(_.ModalContent, {
                        children: (0, i.jsxs)("div", {
                            className: U().body,
                            children: [(0, i.jsx)(_.Heading, {
                                variant: "heading-xl/medium",
                                color: "header-primary",
                                children: P.name
                            }), (0, i.jsx)(R.Z, {
                                size: 4
                            }), (0, i.jsx)(_.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: g.Z.Messages.GUILD_PRODUCT_INFO_MODAL_PRODUCT_OFFER.format({
                                    productType: v,
                                    personName: y
                                })
                            }), null != G && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(R.Z, {
                                    size: 16
                                }), (0, i.jsx)(M, {
                                    listing: P,
                                    role: G
                                })]
                            }), (0, i.jsx)(R.Z, {
                                size: 16
                            }), (0, i.jsx)("div", {
                                className: U().seperator
                            }), (0, i.jsx)(R.Z, {
                                size: 16
                            }), (0, i.jsx)(_.Heading, {
                                variant: "heading-lg/medium",
                                color: "header-primary",
                                children: g.Z.Messages.GUILD_PRODUCT_INFO_MODAL_DETAIL_HEADER
                            }), (0, i.jsx)(R.Z, {
                                size: 12
                            }), (0, i.jsx)(m.Z, {
                                className: U().description,
                                variant: "text-md/normal",
                                color: "text-muted",
                                text: P.description
                            })]
                        })
                    }), (0, i.jsxs)(_.ModalFooter, {
                        className: U().footer,
                        children: [(0, i.jsx)(f.Z, {
                            guildId: S,
                            guildProductListingId: o,
                            sourceAnalyticsLocations: c.Z.GUILD_PRODUCT_INFO_MODAL
                        }), (0, i.jsx)(_.Text, {
                            tag: "div",
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: h
                        })]
                    })]
                })
            }
        },
        90459: (e, t, n) => {
            n.d(t, {
                Z: () => Z
            });
            var i = n(496486),
                r = n.n(i),
                o = n(265688),
                l = n(384411),
                a = n(722406),
                u = n(664625),
                _ = n(567403),
                c = n(491260),
                E = n(637493),
                s = n(107218);

            function I(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    i.forEach((function(t) {
                        I(e, t, n[t])
                    }))
                }
                return e
            }

            function p(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, i)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function O(e, t) {
                return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
            }
            var A = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function R(e) {
                var t = function() {
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
                    var n, i = d(e);
                    if (t) {
                        var r = d(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return O(this, n)
                }
            }
            var N = new Set,
                L = new Set,
                f = {},
                S = {},
                g = {},
                C = {},
                U = {},
                M = !1;

            function P() {
                N.clear();
                L.clear();
                f = {};
                S = {};
                g = {};
                C = {};
                U = {}
            }

            function b(e) {
                var t = e.userId;
                L.add(t)
            }

            function v(e) {
                var t = e.userId;
                L.delete(t)
            }

            function h(e) {
                L.delete(e.userId);
                g[e.userId] = r()(e.mutualFriends).map((function(e) {
                    return {
                        key: e.id,
                        user: new a.Z(e),
                        status: c.Z.getStatus(e.id)
                    }
                })).sortBy((function(e) {
                    return e.user.username.toLowerCase()
                })).value();
                C[e.userId] = e.mutualFriends.length
            }

            function D() {
                if (0 === Object.keys(U).length) return !1;
                U = {}
            }

            function y(e) {
                if (null == U[e.user.id]) return !1;
                delete U[e.user.id]
            }

            function G(e) {
                var t, n, i, r, l, a, u, c, E;
                N.delete(e.user.id);
                if (null != e.mutual_guilds) {
                    var d = {};
                    e.mutual_guilds.forEach((function(e) {
                        var t = e.id,
                            n = e.nick,
                            i = _.Z.getGuild(t);
                        null != i && (d[t] = {
                            guild: i,
                            nick: n
                        })
                    }));
                    U[e.user.id] = s.Z.getFlattenedGuildIds().filter((function(e) {
                        return null != d[e]
                    })).map((function(e) {
                        return {
                            guild: d[e].guild,
                            nick: d[e].nick
                        }
                    }))
                }
                if (null != e.mutual_friends_count) {
                    var T = e.mutual_friends_count;
                    C[e.user.id] = T
                }
                var p, O, m, A, R = null !== (E = e.premium_since) && void 0 !== E ? E : null,
                    L = e.application;
                f[e.user.id] = {
                    userId: e.user.id,
                    banner: null === (t = e.user_profile) || void 0 === t ? void 0 : t.banner,
                    accentColor: null === (n = e.user_profile) || void 0 === n ? void 0 : n.accent_color,
                    themeColors: null === (i = e.user_profile) || void 0 === i ? void 0 : i.theme_colors,
                    popoutAnimationParticleType: null === (r = e.user_profile) || void 0 === r ? void 0 : r.popout_animation_particle_type,
                    bio: null !== (p = null === (l = e.user_profile) || void 0 === l ? void 0 : l.bio) && void 0 !== p ? p : "",
                    profileEffectID: null === (a = e.user_profile) || void 0 === a || null === (u = a.profile_effect) || void 0 === u ? void 0 : u.id,
                    pronouns: null !== (O = null === (c = e.user_profile) || void 0 === c ? void 0 : c.pronouns) && void 0 !== O ? O : "",
                    connectedAccounts: null !== (m = e.connected_accounts.filter((function(e) {
                        return o.Z.isSupported(e.type)
                    }))) && void 0 !== m ? m : [],
                    applicationRoleConnections: null !== (A = e.application_role_connections) && void 0 !== A ? A : [],
                    premiumSince: null != R ? new Date(R) : null,
                    premiumType: e.premium_type,
                    premiumGuildSince: null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
                    lastFetched: Date.now(),
                    legacyUsername: e.legacy_username,
                    profileFetchFailed: !1,
                    application: null != L ? {
                        id: L.id,
                        primarySkuId: L.primary_sku_id,
                        customInstallUrl: L.custom_install_url,
                        installParams: L.install_params,
                        flags: L.flags,
                        popularApplicationCommandIds: L.popular_application_command_ids
                    } : null,
                    badges: e.badges
                };
                if (null != e.guild_member_profile) {
                    var g, M, P, b, v = {
                        userId: e.user.id,
                        guildId: e.guild_member_profile.guild_id,
                        banner: e.guild_member_profile.banner,
                        accentColor: e.guild_member_profile.accent_color,
                        themeColors: null === (g = e.guild_member_profile) || void 0 === g ? void 0 : g.theme_colors,
                        popoutAnimationParticleType: null === (M = e.guild_member_profile) || void 0 === M ? void 0 : M.popout_animation_particle_type,
                        profileEffectID: null === (P = e.guild_member_profile) || void 0 === P || null === (b = P.profile_effect) || void 0 === b ? void 0 : b.id,
                        bio: e.guild_member_profile.bio,
                        pronouns: e.guild_member_profile.pronouns,
                        badges: e.guild_badges
                    };
                    null != S[e.user.id] ? S[e.user.id][e.guild_member_profile.guild_id] = v : S[e.user.id] = I({}, e.guild_member_profile.guild_id, v)
                }
            }

            function F(e) {
                var t = e.userId;
                N.add(t)
            }

            function H(e) {
                var t, n = e.userId;
                f[n] = null !== (t = f[n]) && void 0 !== t ? t : {
                    connectedAccounts: [],
                    applicationRoleConnections: [],
                    premiumSince: null,
                    premiumGuildSince: null,
                    lastFetched: Date.now(),
                    profileFetchFailed: !0,
                    application: null,
                    legacyUsername: null,
                    userId: n,
                    banner: null,
                    accentColor: null,
                    bio: "",
                    pronouns: ""
                };
                N.delete(n)
            }

            function w(e) {
                return null != e.guild_id ? function(e) {
                    var t = e.userId,
                        n = e.guild_id,
                        i = e.accent_color,
                        r = e.banner,
                        o = e.bio,
                        l = e.pronouns,
                        a = e.popout_animation_particle_type,
                        u = e.theme_colors,
                        _ = e.profileEffectID;
                    if (null == n || null == S[t]) return !1;
                    var c = S[t][n];
                    if (null == c) return !1;
                    S[t][n] = p(T({}, c), {
                        accentColor: i,
                        banner: r,
                        bio: o,
                        pronouns: l,
                        popoutAnimationParticleType: a,
                        themeColors: u,
                        profileEffectID: _
                    })
                }(e) : function(e) {
                    var t = e.userId,
                        n = e.accent_color,
                        i = e.banner,
                        r = e.bio,
                        o = e.pronouns,
                        l = e.popout_animation_particle_type,
                        a = e.theme_colors,
                        u = e.profileEffectID,
                        _ = f[t];
                    if (null == _) return !1;
                    f[t] = p(T({}, _), {
                        accentColor: n,
                        banner: i,
                        bio: r,
                        pronouns: o,
                        popoutAnimationParticleType: l,
                        themeColors: a,
                        profileEffectID: u
                    })
                }(e)
            }

            function B(e) {
                M = !0
            }

            function k(e) {
                var t = e.user;
                if (N.has(t.id) || null == f[t.id]) return !1;
                f[t.id].lastFetched = 0
            }

            function V() {
                N.clear();
                f = {};
                S = {}
            }
            var j = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && m(e, t)
                }(n, e);
                var t = R(n);

                function n() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e;
                    (e = t.call(this)).loadCache = function() {
                        var t = e.readSnapshot(n.LATEST_SNAPSHOT_VERSION);
                        null != t && t.forEach((function(e) {
                            var t = e.userId,
                                n = e.profile;
                            f[t] = n
                        }))
                    };
                    e.registerActionHandlers({
                        CACHE_LOADED_LAZY: e.loadCache,
                        USER_PROFILE_FETCH_START: F,
                        USER_PROFILE_FETCH_FAILURE: H,
                        USER_PROFILE_FETCH_SUCCESS: G,
                        USER_PROFILE_UPDATE_SUCCESS: w,
                        USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED: B,
                        MUTUAL_FRIENDS_FETCH_START: b,
                        MUTUAL_FRIENDS_FETCH_SUCCESS: h,
                        MUTUAL_FRIENDS_FETCH_FAILURE: v,
                        GUILD_JOIN: D,
                        GUILD_DELETE: D,
                        GUILD_MEMBER_ADD: y,
                        GUILD_MEMBER_REMOVE: y,
                        GUILD_MEMBER_UPDATE: k,
                        USER_UPDATE: k,
                        LOGOUT: P
                    });
                    e.waitFor(s.Z);
                    e.syncWith([l.default], V);
                    return e
                }
                var i = n.prototype;
                i.isFetchingProfile = function(e) {
                    return N.has(e)
                };
                i.isFetchingFriends = function(e) {
                    return L.has(e)
                };
                i.getUserProfile = function(e) {
                    return f[e]
                };
                i.getGuildMemberProfile = function(e, t) {
                    var n;
                    return null == t ? null : null === (n = S[e]) || void 0 === n ? void 0 : n[t]
                };
                i.getMutualFriends = function(e) {
                    return g[e]
                };
                i.getMutualFriendsCount = function(e) {
                    return C[e]
                };
                i.getMutualGuilds = function(e) {
                    return U[e]
                };
                i.getIsAccessibilityTooltipViewed = function() {
                    return M
                };
                i.takeSnapshot = function() {
                    var e = u.default.getId();
                    return {
                        version: n.LATEST_SNAPSHOT_VERSION,
                        data: [{
                            userId: e,
                            profile: f[e]
                        }]
                    }
                };
                i.__getLocalVars = function() {
                    return {
                        fetchingProfile: N,
                        fetchingFriends: L,
                        userProfiles: f,
                        guildMemberProfiles: S,
                        mutualFriends: g,
                        mutualFriendsCounts: C,
                        mutualGuilds: U,
                        isAccessibilityTooltipViewed: M
                    }
                };
                return n
            }(E.Z);
            j.displayName = "UserProfileStore";
            j.LATEST_SNAPSHOT_VERSION = 1;
            const Z = new j
        },
        223430: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var i = n(785893);
            n(667294);

            function r(e) {
                var t = e.size,
                    n = e.horizontal,
                    r = void 0 !== n && n,
                    o = r ? t : 1,
                    l = r ? 1 : t;
                return (0, i.jsx)("span", {
                    style: {
                        display: "block",
                        width: o,
                        minWidth: o,
                        height: l,
                        minHeight: l
                    }
                })
            }
        },
        773148: (e, t, n) => {
            n.d(t, {
                ZP: () => E
            });
            var i = n(202351),
                r = n(61209),
                o = n(21372),
                l = n(840922),
                a = n(749565),
                u = n(473708);

            function _(e, t, n) {
                if (null == n) return null;
                if (null != e) return o.ZP.getNick(e, n.id);
                if (null != t) {
                    var i = r.Z.getChannel(t);
                    if (null == i ? void 0 : i.isPrivate()) return l.Z.getNickname(n.id)
                }
                return null
            }

            function c(e, t, n) {
                return null == n ? u.Z.Messages.UNKNOWN_USER : null !== (i = _(e, t, n)) && void 0 !== i ? i : a.ZP.getName(n);
                var i
            }
            const E = {
                getNickname: _,
                getName: c,
                useName: function(e, t, n) {
                    return (0, i.e7)([o.ZP, r.Z, l.Z], (function() {
                        return c(e, t, n)
                    }))
                }
            }
        }
    }
]);