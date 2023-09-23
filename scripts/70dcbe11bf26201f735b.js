"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [95813], {
        285991: (e, _, t) => {
            t.d(_, {
                k: () => R,
                Lr: () => N,
                mB: () => s,
                PR: () => C,
                In: () => p,
                Sr: () => d
            });
            var n = t(441143),
                i = t.n(n),
                E = t(495414),
                r = t(281110),
                I = t(744564),
                o = t(722406),
                l = t(473903),
                T = t(2590);

            function a(e, _, t, n, i, E, r) {
                try {
                    var I = e[E](r),
                        o = I.value
                } catch (e) {
                    t(e);
                    return
                }
                I.done ? _(o) : Promise.resolve(o).then(n, i)
            }

            function u(e) {
                return function() {
                    var _ = this,
                        t = arguments;
                    return new Promise((function(n, i) {
                        var E = e.apply(_, t);

                        function r(e) {
                            a(E, n, i, r, I, "next", e)
                        }

                        function I(e) {
                            a(E, n, i, r, I, "throw", e)
                        }
                        r(void 0)
                    }))
                }
            }

            function c(e, _, t) {
                _ in e ? Object.defineProperty(e, _, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[_] = t;
                return e
            }

            function O(e) {
                for (var _ = 1; _ < arguments.length; _++) {
                    var t = null != arguments[_] ? arguments[_] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(_) {
                        c(e, _, t[_])
                    }))
                }
                return e
            }
            var A = function(e, _) {
                    var t, n, i, E, r = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return E = {
                        next: I(0),
                        throw: I(1),
                        return: I(2)
                    }, "function" == typeof Symbol && (E[Symbol.iterator] = function() {
                        return this
                    }), E;

                    function I(E) {
                        return function(I) {
                            return function(E) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; r;) try {
                                    if (t = 1, n && (i = 2 & E[0] ? n.return : E[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, E[1])).done) return i;
                                    (n = 0, i) && (E = [2 & E[0], i.value]);
                                    switch (E[0]) {
                                        case 0:
                                        case 1:
                                            i = E;
                                            break;
                                        case 4:
                                            r.label++;
                                            return {
                                                value: E[1], done: !1
                                            };
                                        case 5:
                                            r.label++;
                                            n = E[1];
                                            E = [0];
                                            continue;
                                        case 7:
                                            E = r.ops.pop();
                                            r.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = r.trys, i = i.length > 0 && i[i.length - 1]) && (6 === E[0] || 2 === E[0])) {
                                                r = 0;
                                                continue
                                            }
                                            if (3 === E[0] && (!i || E[1] > i[0] && E[1] < i[3])) {
                                                r.label = E[1];
                                                break
                                            }
                                            if (6 === E[0] && r.label < i[1]) {
                                                r.label = i[1];
                                                i = E;
                                                break
                                            }
                                            if (i && r.label < i[2]) {
                                                r.label = i[2];
                                                r.ops.push(E);
                                                break
                                            }
                                            i[2] && r.ops.pop();
                                            r.trys.pop();
                                            continue
                                    }
                                    E = _.call(e, r)
                                } catch (e) {
                                    E = [6, e];
                                    n = 0
                                } finally {
                                    t = i = 0
                                }
                                if (5 & E[0]) throw E[1];
                                return {
                                    value: E[0] ? E[1] : void 0,
                                    done: !0
                                }
                            }([E, I])
                        }
                    }
                },
                S = new E.Z("UserProfileModalActionCreators");

            function R() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    _ = e.withAnalyticsToken,
                    t = void 0 !== _ && _;
                return r.ZP.get({
                    url: T.ANM.ME,
                    query: {
                        with_analytics_token: t
                    },
                    oldFormErrors: !0
                }).then((function(e) {
                    I.Z.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: e.body,
                        analyticsToken: t ? e.body.analytics_token : void 0
                    });
                    return new o.Z(e.body)
                }))
            }

            function N() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    _ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return r.ZP.patch({
                    url: T.ANM.USER_AGREEMENTS,
                    body: {
                        terms: e,
                        privacy: _
                    },
                    oldFormErrors: !0
                }).then((function() {
                    return !0
                }), (function() {
                    return !1
                }))
            }

            function s(e, _) {
                var t = l.default.getCurrentUser();
                i()(null != t, "setFlag: user cannot be undefined");
                var n = _ ? t.flags | e : t.flags & ~e;
                return r.ZP.patch({
                    url: T.ANM.ME,
                    oldFormErrors: !0,
                    body: {
                        flags: n
                    }
                })
            }

            function C(e) {
                var _ = l.default.getUser(e);
                return null != _ ? Promise.resolve(_) : r.ZP.get({
                    url: T.ANM.USER(e),
                    oldFormErrors: !0
                }).then((function(_) {
                    I.Z.dispatch({
                        type: "USER_UPDATE",
                        user: _.body
                    });
                    return l.default.getUser(e)
                }))
            }

            function p(e) {
                return L.apply(this, arguments)
            }

            function L() {
                L = u((function(e) {
                    var _, t, n, i, E, o, l, a, u, c = arguments;
                    return A(this, (function(A) {
                        switch (A.label) {
                            case 0:
                                _ = c.length > 1 && void 0 !== c[1] ? c[1] : {}, t = _.friendToken, n = _.withMutualGuilds, i = _.withMutualFriendsCount, E = _.guildId, o = _.connectionsRoleId, l = c.length > 2 ? c[2] : void 0;
                                I.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_START",
                                    userId: e
                                });
                                A.label = 1;
                            case 1:
                                A.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: T.ANM.USER_PROFILE(e),
                                    query: {
                                        friend_token: t,
                                        with_mutual_guilds: n,
                                        with_mutual_friends_count: i,
                                        guild_id: E,
                                        connections_role_id: o
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                a = A.sent();
                                null == l || l(a.body, E);
                                I.Z.dispatch({
                                    type: "USER_UPDATE",
                                    user: a.body.user
                                });
                                I.Z.dispatch(O({
                                    type: "USER_PROFILE_FETCH_SUCCESS"
                                }, a.body));
                                null != E && null != a.body.guild_member && I.Z.dispatch({
                                    type: "GUILD_MEMBER_PROFILE_UPDATE",
                                    guildId: E,
                                    guildMember: a.body.guild_member
                                });
                                return [2, a.body];
                            case 3:
                                null != (u = A.sent()) && null != (null == u ? void 0 : u.body) && S.warn("fetchProfile error: ".concat(u.body.code, " - ").concat(u.body.message));
                                I.Z.dispatch({
                                    type: "USER_PROFILE_FETCH_FAILURE",
                                    userId: e
                                });
                                throw u;
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return L.apply(this, arguments)
            }

            function d(e) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = u((function(e) {
                    var _, t;
                    return A(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                I.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_START",
                                    userId: e
                                });
                                n.label = 1;
                            case 1:
                                n.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get({
                                    url: T.ANM.USER_RELATIONSHIPS(e),
                                    oldFormErrors: !0
                                })];
                            case 2:
                                _ = n.sent();
                                I.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_SUCCESS",
                                    userId: e,
                                    mutualFriends: _.body
                                });
                                return [3, 4];
                            case 3:
                                null != (null == (t = n.sent()) ? void 0 : t.body) && S.warn("fetchMutualFriends error: ".concat(t.body.code, " - ").concat(t.body.message));
                                I.Z.dispatch({
                                    type: "MUTUAL_FRIENDS_FETCH_FAILURE",
                                    userId: e
                                });
                                throw t;
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        142643: (e, _, t) => {
            t.d(_, {
                Z: () => i
            });
            var n;
            ! function(e) {
                e.CHANNEL_CHAT_RESIZABLE_SIDEBAR_RESIZE_HANDLE_WIDTH = "8px";
                e.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE = "485px";
                e.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH = "224px";
                e.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN = "10px";
                e.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH = "305px";
                e.ACTIVITIES_HOME_HAPPENING_NOW_GAP = "16px";
                e.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH = "356px";
                e.FOLDER_ITEM_ANIMATION_DURATION = "150ms";
                e.FOLDER_ITEM_GUILD_ICON_SIZE = "48px";
                e.GUILD_TOOLTIP_ICON_SIZE = "20px";
                e.GUILD_TOOLTIP_ICON_SIZE_V_2 = "16px";
                e.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING = "2px";
                e.FULL_SCREEN_LAYER_ANIMATION_DURATION = "150ms";
                e.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP = "7px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS = "76px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING = "2px";
                e.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN = "0";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING = "8px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE = "32px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN = "8px";
                e.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE = "24px";
                e.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                e.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL = "360px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM = "446px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS = "8px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM = "0";
                e.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT = "8px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT = "30px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS = "96px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL = "80px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING = "2px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN = "12px";
                e.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT = "54px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT = "32px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS = "28px";
                e.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS = "32px";
                e.STICKERS_CONSTANTS_STICKER_DIMENSION = "160px";
                e.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL = "4px";
                e.ASPECT_STABLE_IMAGE_CONTAINER_PADDING = "20px";
                e.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING = "4px";
                e.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH = "340px";
                e.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH = "280px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT = "120px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT = "90px";
                e.USER_BANNER_BANNER_HEIGHT_POPOUT = "60px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE = "212px";
                e.USER_BANNER_BANNER_HEIGHT_PROFILE = "106px";
                e.USER_BANNER_BANNER_HEIGHT_POMELO = "64px";
                e.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS = "100px";
                e.USER_BANNER_BANNER_HEIGHT_PANEL = "120px";
                e.USER_BANNER_CANCEL_MODAL_HEIGHT = "42px";
                e.PREMIUM_GUILD_PROGRESS_BAR_PROGRESS_BAR_WIDTH = "24px";
                e.PREMIUM_GUILD_PROGRESS_BAR_TIER_MARKER_SIZE = "16px";
                e.ACTIVITY_SHELF_MODAL_MODAL_PADDING = "80px";
                e.ACTIVITY_SHELF_MODAL_MODAL_WIDTH = "496px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MIN_WIDTH = "496px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MAX_WIDTH = "1024px";
                e.ACTIVITY_SHELF_MODAL_MODAL_MAX_HEIGHT = "720px";
                e.ACTIVITY_SHELF_MODAL_MODAL_ART_HEIGHT = "64px";
                e.ACTIVITY_SHELF_ITEM_ACTIVITY_ITEM_HEIGHT = "230px";
                e.ACTIVITY_SHELF_ITEM_LARGE_ACTIVITY_ITEM_HEIGHT = "143px";
                e.ACTIVITY_SHELF_SLIDE_ACTIVITY_DIRECTORY_SHELF_GRID_GAP = "16px";
                e.LIVE_INDICATOR_BORDER_RADIUS = "16px";
                e.GUILD_PRODUCT_DOWNLOAD_MODAL_HEADER_IMAGE_WIDTH = "119px";
                e.FOLDER_ITEM_GUILD_ICON_MARGIN = "8px";
                e.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE = "288px";
                e.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL = "225px";
                e.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH = "576px";
                e.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE = "80px";
                e.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE = "48px";
                e.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH = "1024px";
                e.GUILD_COUNT_SMALL_ICON_SIZE = "16px";
                e.GUILD_COUNT_LARGE_ICON_SIZE = "20px";
                e.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN = "12px";
                e.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE = "196px";
                e.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE = "40px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL = "4px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT = "8px";
                e.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE = "32px";
                e.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL = "8px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE = "24px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL = "2px";
                e.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING = "4px";
                e.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE = "1px";
                e.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL = "12px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL = "4px";
                e.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE = "24px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP = "0";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT = "0";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM = "8px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP = "8px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM = "12px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_HEIGHT = "54px";
                e.EMOJI_PICKER_CONSTANTS_EMOJI_PREMIUM_UPSELL_MARGIN_TOP = "16px";
                e.VOICE_WIDGET_TOP_MARGIN = "var(--custom-widget-bar-height) + calc(2 * var(--custom-widget-bar-padding))";
                e.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING = "8px";
                e.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE = "48px";
                e.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN = "8px";
                e.COLLECTION_GALLERY_MEDIA_BREAKPOINT = "1024px";
                e.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT = "600px";
                e.COLLECTION_GALLERY_ROW_CARD_HEIGHT = "283px";
                e.COLLECTION_LIST_CARD_GAP = "16px";
                e.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH = "520px";
                e.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE = "40px";
                e.ROLE_ICON_UPLOADER_ICON_SIZE = "24px";
                e.GRADIENT_PROGRESS_NOTCH_WIDTH = "8px";
                e.GAME_LIST_ROW_MIN_HEIGHT = "62px";
                e.GAME_LIST_LINKED_TO_GLOW_DURATION = "2000ms";
                e.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH = "320px";
                e.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH = "1280px";
                e.INTERACTION_IFRAME_MODAL_MODAL_MARGIN = "80px";
                e.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT = "52px";
                e.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE = "122px"
            }(n || (n = {}));
            const i = n
        },
        153686: (e, _, t) => {
            t.d(_, {
                Z: () => i
            });
            var n;
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
                e.COLLECTIBLES_SHOP_CARD = "collectibles shop card";
                e.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button";
                e.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal";
                e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell";
                e.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell";
                e.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal";
                e.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal";
                e.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell";
                e.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell";
                e.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip";
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
                e.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet";
                e.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home"
            }(n || (n = {}));
            const i = n
        },
        479373: (e, _, t) => {
            t.d(_, {
                Z: () => p,
                Y: () => L
            });
            var n = t(667294),
                i = t(110251),
                E = t.n(i),
                r = t(873955),
                I = t.n(r),
                o = t(993231),
                l = t(744564),
                T = t(61209),
                a = t(715107),
                u = t(464187),
                c = t(652591),
                O = t(396043),
                A = t(930114);

            function S(e, _, t) {
                _ in e ? Object.defineProperty(e, _, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[_] = t;
                return e
            }

            function R(e) {
                for (var _ = 1; _ < arguments.length; _++) {
                    var t = null != arguments[_] ? arguments[_] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(_) {
                        S(e, _, t[_])
                    }))
                }
                return e
            }

            function N(e, _) {
                _ = null != _ ? _ : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(_)) : function(e, _) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        _ && (n = n.filter((function(_) {
                            return Object.getOwnPropertyDescriptor(e, _).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(_)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(_, t))
                }));
                return e
            }
            var s = (0, o.Gb)({
                analyticEventConfigs: c.AnalyticEventConfigs,
                dispatcher: l.Z,
                TRACK_ACTION_NAME: "TRACK"
            });

            function C(e) {
                var _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = e.name,
                    n = e.type,
                    i = e.properties;
                if (e.type !== o.nv.MODAL || null != e.name || !(0, A.Ez)().some((function(e) {
                        var _;
                        return null === (_ = e._stackContext) || void 0 === _ ? void 0 : _.isSlide
                    }))) {
                    (0, A.Ps)(e);
                    var E, r, I = null !== (E = null == i ? void 0 : i.guild_id) && void 0 !== E ? E : u.Z.getGuildId(),
                        l = null !== (r = null == i ? void 0 : i.channel_id) && void 0 !== r ? r : a.Z.getChannelId(I),
                        S = (0, c.expandEventProperties)(R({
                            impression_type: n,
                            location: (0, A.k$)()
                        }, (0, O.hH)(I), (0, O.v_)(T.Z.getChannel(l)), i));
                    if (_)(0, A.dT)(null, null);
                    else {
                        if (null != t && null != n) {
                            (0, c.debugLogEvent)(t, S);
                            s(t, S)
                        }(0, A.dT)(t, S)
                    }
                }
            }

            function p(e) {
                var _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        disableTrack: !1,
                        trackOnInitialLoad: !1
                    },
                    t = arguments.length > 2 ? arguments[2] : void 0,
                    i = n.useRef(),
                    r = n.useRef();
                n.useEffect((function() {
                    var n = !E()(i.current, e);
                    n && (i.current = e);
                    var o = !E()(r.current, t);
                    o && (r.current = t);
                    if (n || o) {
                        var l = N(R({}, e), {
                            sequenceId: I()("impression_")
                        });
                        C(l, _.disableTrack);
                        return function() {
                            null != l && (0, A.dw)(l)
                        }
                    }
                }), _.trackOnInitialLoad ? [] : void 0)
            }

            function L(e, _) {
                var t = e.impressionName,
                    n = e.impressionProperties,
                    i = "function" == typeof n ? n(_.params) : n;
                p({
                    type: o.nv.PAGE,
                    name: t,
                    properties: i
                })
            }
        },
        638042: (e, _, t) => {
            t.d(_, {
                Z: () => u,
                e: () => c
            });
            var n = t(785893),
                i = (t(667294), t(712861)),
                E = t(142643),
                r = t(525044),
                I = t(675728);

            function o(e, _, t) {
                _ in e ? Object.defineProperty(e, _, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[_] = t;
                return e
            }

            function l(e) {
                for (var _ = 1; _ < arguments.length; _++) {
                    var t = null != arguments[_] ? arguments[_] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(_) {
                        o(e, _, t[_])
                    }))
                }
                return e
            }

            function T(e, _) {
                if (null == e) return {};
                var t, n, i = function(e, _) {
                    if (null == e) return {};
                    var t, n, i = {},
                        E = Object.keys(e);
                    for (n = 0; n < E.length; n++) {
                        t = E[n];
                        _.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, _);
                if (Object.getOwnPropertySymbols) {
                    var E = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < E.length; n++) {
                        t = E[n];
                        _.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }
            var a = (0, i.Mg)(E.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

            function u(e) {
                var _ = e.listing,
                    t = e.imageSize,
                    i = e.alt,
                    E = T(e, ["listing", "imageSize", "alt"]),
                    I = (0, r.U)(_, t);
                return (0, n.jsx)("img", l({
                    src: I,
                    alt: i
                }, E))
            }

            function c(e) {
                var _ = e.listing,
                    t = e.aspectRatio,
                    i = void 0 === t ? 16 / 9 : t,
                    E = e.height,
                    o = T(e, ["listing", "aspectRatio", "height"]),
                    u = (E - 2 * a) * i,
                    c = (0, r.U)(_, u),
                    O = (0, r.U)(_, u, {
                        shouldAnimate: !1
                    });
                return (0, n.jsx)(I.Z, l({
                    src: c,
                    backgroundSrc: O,
                    aspectRatio: i
                }, o))
            }
        },
        695813: (e, _, t) => {
            t.r(_);
            t.d(_, {
                default: () => f
            });
            var n = t(785893),
                i = t(667294),
                E = t(441143),
                r = t.n(E),
                I = t(993231),
                o = t(202351),
                l = t(882723),
                T = t(153686),
                a = t(479373),
                u = t(285991),
                c = t(90459),
                O = t(567403),
                A = t(491260),
                S = t(473903),
                R = t(773148);
            var N = t(434131),
                s = t(638042),
                C = t(223430),
                p = t(835807),
                L = t(332013),
                d = t(486229),
                P = t(984560),
                M = t(473708),
                m = t(182983),
                D = t.n(m);

            function U(e) {
                var _ = e.listing,
                    t = e.role;
                return (0, n.jsx)(P.Z, {
                    role: t,
                    textVariant: "text-md/medium",
                    locked: !_.has_entitlement
                })
            }

            function f(e) {
                var _, t = e.transitionState,
                    E = e.guildProductListingId,
                    P = e.guildId,
                    m = e.onClose,
                    f = (0, o.e7)([p.Z], (function() {
                        return p.Z.getGuildProduct(E)
                    }));
                r()(null != f, "guildProductListing cannot be null");
                (0, a.Z)({
                    type: I.nv.MODAL,
                    name: I.zs.GUILD_PRODUCT_LISTING_INFO_MODAL,
                    properties: {
                        guild_product_listing_id: E,
                        has_entitlement: !0 === f.has_entitlement
                    }
                });
                var g, G = null !== (_ = (0, L.C)(f)) && void 0 !== _ ? _ : "",
                    b = (0, L.k)(f),
                    v = function(e) {
                        var _ = (0, o.e7)([O.Z], (function() {
                                return O.Z.getGuild(e)
                            })),
                            t = null == _ ? void 0 : _.ownerId;
                        r()(null != t, "ownerId cannot be null");
                        i.useEffect((function() {
                            c.Z.isFetchingProfile(t) || null != c.Z.getUserProfile(t) || (0, u.In)(t, {
                                guildId: e
                            })
                        }), [e, t]);
                        var n = (0, o.e7)([S.default], (function() {
                                return S.default.getUser(t)
                            })),
                            E = (0, o.e7)([A.Z], (function() {
                                return A.Z.getStatus(t)
                            })),
                            I = null != n;
                        return {
                            name: R.ZP.useName(e, null, n),
                            status: E,
                            user: n,
                            loaded: I
                        }
                    }(P),
                    h = v.name,
                    H = (0, o.e7)([O.Z], (function() {
                        var e;
                        return null === (e = O.Z.getGuild(f.guild_id)) || void 0 === e ? void 0 : e.roles[null !== (g = f.role_id) && void 0 !== g ? g : ""]
                    }));
                return (0, n.jsxs)(l.ModalRoot, {
                    className: D().modal,
                    size: l.ModalSize.MEDIUM,
                    transitionState: t,
                    "aria-label": f.name,
                    children: [(0,
                        n.jsxs)(l.ModalHeader, {
                        separator: !1,
                        children: [(0, n.jsx)(s.e, {
                            height: 267,
                            listing: f,
                            className: D().headerImage,
                            alt: ""
                        }), (0, n.jsx)(l.ModalCloseButton, {
                            className: D().closeButton,
                            onClick: m,
                            withCircleBackground: !0
                        })]
                    }), (0, n.jsx)(l.ModalContent, {
                        children: (0, n.jsxs)("div", {
                            className: D().body,
                            children: [(0, n.jsx)(l.Heading, {
                                variant: "heading-xl/medium",
                                color: "header-primary",
                                children: f.name
                            }), (0, n.jsx)(C.Z, {
                                size: 4
                            }), (0, n.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: M.Z.Messages.GUILD_PRODUCT_INFO_MODAL_PRODUCT_OFFER.format({
                                    productType: G,
                                    personName: h
                                })
                            }), null != H && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(C.Z, {
                                    size: 16
                                }), (0, n.jsx)(U, {
                                    listing: f,
                                    role: H
                                })]
                            }), (0, n.jsx)(C.Z, {
                                size: 16
                            }), (0, n.jsx)("div", {
                                className: D().seperator
                            }), (0, n.jsx)(C.Z, {
                                size: 16
                            }), (0, n.jsx)(l.Heading, {
                                variant: "heading-lg/medium",
                                color: "header-primary",
                                children: M.Z.Messages.GUILD_PRODUCT_INFO_MODAL_DETAIL_HEADER
                            }), (0, n.jsx)(C.Z, {
                                size: 12
                            }), (0, n.jsx)(N.Z, {
                                className: D().description,
                                variant: "text-md/normal",
                                color: "text-muted",
                                text: f.description
                            })]
                        })
                    }), (0, n.jsxs)(l.ModalFooter, {
                        className: D().footer,
                        children: [(0, n.jsx)(d.Z, {
                            guildId: P,
                            guildProductListingId: E,
                            sourceAnalyticsLocations: T.Z.GUILD_PRODUCT_INFO_MODAL
                        }), (0, n.jsx)(l.Text, {
                            tag: "div",
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: b
                        })]
                    })]
                })
            }
        },
        90459: (e, _, t) => {
            t.d(_, {
                Z: () => Z
            });
            var n = t(496486),
                i = t.n(n),
                E = t(265688),
                r = t(384411),
                I = t(722406),
                o = t(664625),
                l = t(567403),
                T = t(491260),
                a = t(637493),
                u = t(107218);

            function c(e, _, t) {
                _ in e ? Object.defineProperty(e, _, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[_] = t;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function A(e) {
                for (var _ = 1; _ < arguments.length; _++) {
                    var t = null != arguments[_] ? arguments[_] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(_) {
                        c(e, _, t[_])
                    }))
                }
                return e
            }

            function S(e, _) {
                _ = null != _ ? _ : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(_)) : function(e, _) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        _ && (n = n.filter((function(_) {
                            return Object.getOwnPropertyDescriptor(e, _).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(_)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(_, t))
                }));
                return e
            }

            function R(e, _) {
                return !_ || "object" !== s(_) && "function" != typeof _ ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : _
            }

            function N(e, _) {
                N = Object.setPrototypeOf || function(e, _) {
                    e.__proto__ = _;
                    return e
                };
                return N(e, _)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
                var _ = function() {
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
                    var t, n = O(e);
                    if (_) {
                        var i = O(this).constructor;
                        t = Reflect.construct(n, arguments, i)
                    } else t = n.apply(this, arguments);
                    return R(this, t)
                }
            }
            var p = new Set,
                L = new Set,
                d = {},
                P = {},
                M = {},
                m = {},
                D = {},
                U = !1;

            function f() {
                p.clear();
                L.clear();
                d = {};
                P = {};
                M = {};
                m = {};
                D = {}
            }

            function g(e) {
                var _ = e.userId;
                L.add(_)
            }

            function G(e) {
                var _ = e.userId;
                L.delete(_)
            }

            function b(e) {
                L.delete(e.userId);
                M[e.userId] = i()(e.mutualFriends).map((function(e) {
                    return {
                        key: e.id,
                        user: new I.Z(e),
                        status: T.Z.getStatus(e.id)
                    }
                })).sortBy((function(e) {
                    return e.user.username.toLowerCase()
                })).value();
                m[e.userId] = e.mutualFriends.length
            }

            function v() {
                if (0 === Object.keys(D).length) return !1;
                D = {}
            }

            function h(e) {
                if (null == D[e.user.id]) return !1;
                delete D[e.user.id]
            }

            function H(e) {
                var _, t, n, i, r, I, o, T, a;
                p.delete(e.user.id);
                if (null != e.mutual_guilds) {
                    var O = {};
                    e.mutual_guilds.forEach((function(e) {
                        var _ = e.id,
                            t = e.nick,
                            n = l.Z.getGuild(_);
                        null != n && (O[_] = {
                            guild: n,
                            nick: t
                        })
                    }));
                    D[e.user.id] = u.Z.getFlattenedGuildIds().filter((function(e) {
                        return null != O[e]
                    })).map((function(e) {
                        return {
                            guild: O[e].guild,
                            nick: O[e].nick
                        }
                    }))
                }
                if (null != e.mutual_friends_count) {
                    var A = e.mutual_friends_count;
                    m[e.user.id] = A
                }
                var S, R, N, s, C = null !== (a = e.premium_since) && void 0 !== a ? a : null,
                    L = e.application;
                d[e.user.id] = {
                    userId: e.user.id,
                    banner: null === (_ = e.user_profile) || void 0 === _ ? void 0 : _.banner,
                    accentColor: null === (t = e.user_profile) || void 0 === t ? void 0 : t.accent_color,
                    themeColors: null === (n = e.user_profile) || void 0 === n ? void 0 : n.theme_colors,
                    popoutAnimationParticleType: null === (i = e.user_profile) || void 0 === i ? void 0 : i.popout_animation_particle_type,
                    bio: null !== (S = null === (r = e.user_profile) || void 0 === r ? void 0 : r.bio) && void 0 !== S ? S : "",
                    profileEffectID: null === (I = e.user_profile) || void 0 === I || null === (o = I.profile_effect) || void 0 === o ? void 0 : o.id,
                    pronouns: null !== (R = null === (T = e.user_profile) || void 0 === T ? void 0 : T.pronouns) && void 0 !== R ? R : "",
                    connectedAccounts: null !== (N = e.connected_accounts.filter((function(e) {
                        return E.Z.isSupported(e.type)
                    }))) && void 0 !== N ? N : [],
                    applicationRoleConnections: null !== (s = e.application_role_connections) && void 0 !== s ? s : [],
                    premiumSince: null != C ? new Date(C) : null,
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
                    var M, U, f, g, G = {
                        userId: e.user.id,
                        guildId: e.guild_member_profile.guild_id,
                        banner: e.guild_member_profile.banner,
                        accentColor: e.guild_member_profile.accent_color,
                        themeColors: null === (M = e.guild_member_profile) || void 0 === M ? void 0 : M.theme_colors,
                        popoutAnimationParticleType: null === (U = e.guild_member_profile) || void 0 === U ? void 0 : U.popout_animation_particle_type,
                        profileEffectID: null === (f = e.guild_member_profile) || void 0 === f || null === (g = f.profile_effect) || void 0 === g ? void 0 : g.id,
                        bio: e.guild_member_profile.bio,
                        pronouns: e.guild_member_profile.pronouns,
                        badges: e.guild_badges
                    };
                    null != P[e.user.id] ? P[e.user.id][e.guild_member_profile.guild_id] = G : P[e.user.id] = c({}, e.guild_member_profile.guild_id, G)
                }
            }

            function y(e) {
                var _ = e.userId;
                p.add(_)
            }

            function x(e) {
                var _, t = e.userId;
                d[t] = null !== (_ = d[t]) && void 0 !== _ ? _ : {
                    connectedAccounts: [],
                    applicationRoleConnections: [],
                    premiumSince: null,
                    premiumGuildSince: null,
                    lastFetched: Date.now(),
                    profileFetchFailed: !0,
                    application: null,
                    legacyUsername: null,
                    userId: t,
                    banner: null,
                    accentColor: null,
                    bio: "",
                    pronouns: ""
                };
                p.delete(t)
            }

            function B(e) {
                return null != e.guild_id ? function(e) {
                    var _ = e.userId,
                        t = e.guild_id,
                        n = e.accent_color,
                        i = e.banner,
                        E = e.bio,
                        r = e.pronouns,
                        I = e.popout_animation_particle_type,
                        o = e.theme_colors,
                        l = e.profileEffectID;
                    if (null == t || null == P[_]) return !1;
                    var T = P[_][t];
                    if (null == T) return !1;
                    P[_][t] = S(A({}, T), {
                        accentColor: n,
                        banner: i,
                        bio: E,
                        pronouns: r,
                        popoutAnimationParticleType: I,
                        themeColors: o,
                        profileEffectID: l
                    })
                }(e) : function(e) {
                    var _ = e.userId,
                        t = e.accent_color,
                        n = e.banner,
                        i = e.bio,
                        E = e.pronouns,
                        r = e.popout_animation_particle_type,
                        I = e.theme_colors,
                        o = e.profileEffectID,
                        l = d[_];
                    if (null == l) return !1;
                    d[_] = S(A({}, l), {
                        accentColor: t,
                        banner: n,
                        bio: i,
                        pronouns: E,
                        popoutAnimationParticleType: r,
                        themeColors: I,
                        profileEffectID: o
                    })
                }(e)
            }

            function F(e) {
                U = !0
            }

            function K(e) {
                var _ = e.user;
                if (p.has(_.id) || null == d[_.id]) return !1;
                d[_.id].lastFetched = 0
            }

            function V() {
                p.clear();
                d = {};
                P = {}
            }
            var w = function(e) {
                ! function(e, _) {
                    if ("function" != typeof _ && null !== _) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(_ && _.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    _ && N(e, _)
                }(t, e);
                var _ = C(t);

                function t() {
                    ! function(e, _) {
                        if (!(e instanceof _)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var e;
                    (e = _.call(this)).loadCache = function() {
                        var _ = e.readSnapshot(t.LATEST_SNAPSHOT_VERSION);
                        null != _ && _.forEach((function(e) {
                            var _ = e.userId,
                                t = e.profile;
                            d[_] = t
                        }))
                    };
                    e.registerActionHandlers({
                        CACHE_LOADED_LAZY: e.loadCache,
                        USER_PROFILE_FETCH_START: y,
                        USER_PROFILE_FETCH_FAILURE: x,
                        USER_PROFILE_FETCH_SUCCESS: H,
                        USER_PROFILE_UPDATE_SUCCESS: B,
                        USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED: F,
                        MUTUAL_FRIENDS_FETCH_START: g,
                        MUTUAL_FRIENDS_FETCH_SUCCESS: b,
                        MUTUAL_FRIENDS_FETCH_FAILURE: G,
                        GUILD_JOIN: v,
                        GUILD_DELETE: v,
                        GUILD_MEMBER_ADD: h,
                        GUILD_MEMBER_REMOVE: h,
                        GUILD_MEMBER_UPDATE: K,
                        USER_UPDATE: K,
                        LOGOUT: f
                    });
                    e.waitFor(u.Z);
                    e.syncWith([r.default], V);
                    return e
                }
                var n = t.prototype;
                n.isFetchingProfile = function(e) {
                    return p.has(e)
                };
                n.isFetchingFriends = function(e) {
                    return L.has(e)
                };
                n.getUserProfile = function(e) {
                    return d[e]
                };
                n.getGuildMemberProfile = function(e, _) {
                    var t;
                    return null == _ ? null : null === (t = P[e]) || void 0 === t ? void 0 : t[_]
                };
                n.getMutualFriends = function(e) {
                    return M[e]
                };
                n.getMutualFriendsCount = function(e) {
                    return m[e]
                };
                n.getMutualGuilds = function(e) {
                    return D[e]
                };
                n.getIsAccessibilityTooltipViewed = function() {
                    return U
                };
                n.takeSnapshot = function() {
                    var e = o.default.getId();
                    return {
                        version: t.LATEST_SNAPSHOT_VERSION,
                        data: [{
                            userId: e,
                            profile: d[e]
                        }]
                    }
                };
                return t
            }(a.Z);
            w.displayName = "UserProfileStore";
            w.LATEST_SNAPSHOT_VERSION = 1;
            const Z = new w
        },
        223430: (e, _, t) => {
            t.d(_, {
                Z: () => i
            });
            var n = t(785893);
            t(667294);

            function i(e) {
                var _ = e.size,
                    t = e.horizontal,
                    i = void 0 !== t && t,
                    E = i ? _ : 1,
                    r = i ? 1 : _;
                return (0, n.jsx)("span", {
                    style: {
                        display: "block",
                        width: E,
                        minWidth: E,
                        height: r,
                        minHeight: r
                    }
                })
            }
        },
        773148: (e, _, t) => {
            t.d(_, {
                ZP: () => a
            });
            var n = t(202351),
                i = t(61209),
                E = t(21372),
                r = t(840922),
                I = t(749565),
                o = t(473708);

            function l(e, _, t) {
                if (null == t) return null;
                if (null != e) return E.ZP.getNick(e, t.id);
                if (null != _) {
                    var n = i.Z.getChannel(_);
                    if (null == n ? void 0 : n.isPrivate()) return r.Z.getNickname(t.id)
                }
                return null
            }

            function T(e, _, t) {
                return null == t ? o.Z.Messages.UNKNOWN_USER : null !== (n = l(e, _, t)) && void 0 !== n ? n : I.ZP.getName(t);
                var n
            }
            const a = {
                getNickname: l,
                getName: T,
                useName: function(e, _, t) {
                    return (0, n.e7)([E.ZP, i.Z, r.Z], (function() {
                        return T(e, _, t)
                    }))
                }
            }
        }
    }
]);