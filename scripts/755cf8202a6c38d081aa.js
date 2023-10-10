"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [92465], {
        560213: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var r = t(202351),
                i = t(744564),
                o = t(661123),
                u = t(2590);

            function l(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e, n) {
                return !n || "object" !== d(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function f(e, n) {
                f = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return f(e, n)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                    var t, r = c(e);
                    if (n) {
                        var i = c(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return s(this, t)
                }
            }
            var v = {
                    isEnabled: !1,
                    lastUsedObject: {},
                    useActivityUrlOverride: !1,
                    activityUrlOverride: null,
                    filter: ""
                },
                p = null,
                g = [];
            var h = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && f(e, n)
                }(t, e);
                var n = E(t);

                function t() {
                    l(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function(e) {
                    v = function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))));
                            r.forEach((function(n) {
                                a(e, n, t[n])
                            }))
                        }
                        return e
                    }({}, {
                        isEnabled: !1,
                        lastUsedObject: {},
                        useActivityUrlOverride: !1,
                        activityUrlOverride: null,
                        filter: ""
                    }, null != e ? e : {})
                };
                r.getState = function() {
                    return v
                };
                r.getIsEnabled = function() {
                    return v.isEnabled
                };
                r.getLastUsedObject = function() {
                    return v.lastUsedObject
                };
                r.getUseActivityUrlOverride = function() {
                    return v.useActivityUrlOverride
                };
                r.getActivityUrlOverride = function() {
                    return v.activityUrlOverride
                };
                r.getFetchState = function() {
                    return p
                };
                r.getFilter = function() {
                    return v.filter
                };
                r.getDeveloperShelfItems = function() {
                    return g
                };
                r.isApplicationInDevShelf = function(e) {
                    return null != g.find((function(n) {
                        return n.id === e
                    }))
                };
                r.inDevModeForApplication = function(e) {
                    return v.isEnabled && this.isApplicationInDevShelf(e)
                };
                return t
            }(r.ZP.PersistedStore);
            h.displayName = "DeveloperActivityShelfStore";
            h.persistKey = "DeveloperActivityShelfStore";
            const _ = new h(i.Z, {
                LOGOUT: function() {
                    v = {
                        isEnabled: !1,
                        lastUsedObject: {},
                        useActivityUrlOverride: !1,
                        activityUrlOverride: null,
                        filter: ""
                    };
                    p = null;
                    g = []
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_ENABLED: function() {
                    v.isEnabled = !v.isEnabled
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
                    v.useActivityUrlOverride = !v.useActivityUrlOverride
                },
                DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
                    var n = e.activityUrlOverride;
                    v.activityUrlOverride = n
                },
                DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
                    var n = e.applicationId,
                        t = e.timestamp;
                    if (null == g.find((function(e) {
                            return e.id === n
                        }))) return !1;
                    v.lastUsedObject[n] = t
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_START: function() {
                    p = "loading"
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
                    var n = e.items;
                    p = "loaded";
                    g = n.filter((function(e) {
                        return null != e.flags && (0, o.yE)(e.flags, u.udG.EMBEDDED)
                    }))
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
                    e.type;
                    p = "errored"
                },
                DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
                    var n = e.filter;
                    v.filter = n
                }
            })
        },
        99440: (e, n, t) => {
            t.d(n, {
                dE: () => g,
                Ah: () => r,
                Wv: () => O,
                aU: () => S,
                zy: () => T,
                eL: () => A,
                vg: () => I,
                CB: () => b,
                cp: () => M
            });
            var r, i = t(667294),
                o = t(591684),
                u = t(968449),
                l = t(61209),
                a = t(352980),
                c = t(473903),
                s = t(661123),
                f = t(72580),
                d = t(2590),
                E = t(493254);

            function v(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function p(e) {
                return function(e) {
                    if (Array.isArray(e)) return v(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return v(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e, n) {
                if (null != e && null != e.embeds[0]) {
                    var t = e.embeds[0].color;
                    return null != t && "#ffffff" === t.toLowerCase() || n ? void 0 : t
                }
            }

            function h(e) {
                if (null == e) return !1;
                var n = e.filename,
                    t = e.height,
                    r = e.width;
                return E.IQ.test(n) && null != t && t > 0 && null != r && r > 0
            }

            function _(e) {
                return null != e && (null != e && E.XH.test(e.filename) && null != e.proxy_url)
            }

            function y(e) {
                return h(e) || _(e)
            }! function(e) {
                e.EMBED = "embed";
                e.ATTACHMENT = "attachment"
            }(r || (r = {}));

            function O(e) {
                return E.XH.test(e)
            }

            function m(e) {
                return function(e) {
                    if (!(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.x4.getSetting())) return [];
                    var n = null == e ? void 0 : e.attachments;
                    return null == e || null == n ? [] : n.filter(y).map((function(e) {
                        var n = e.proxy_url,
                            t = e.url,
                            i = e.description,
                            o = e.spoiler,
                            u = e.flags,
                            l = e.width,
                            a = e.height,
                            c = e.filename,
                            f = e.content_scan_version;
                        if (null == l || null == a) return null;
                        var E = O(c),
                            v = null != e.flags && (0, s.yE)(e.flags, d.J0y.IS_THUMBNAIL);
                        return {
                            src: E ? "".concat(n, "?format=jpeg") : null != n ? n : t,
                            width: l,
                            height: a,
                            spoiler: null != o && o,
                            flags: u,
                            contentScanVersion: f,
                            alt: i,
                            isVideo: E,
                            isThumbnail: v,
                            type: r.ATTACHMENT
                        }
                    })).filter(f.lm)
                }(e, u.x4.useSetting())
            }

            function R(e, n) {
                var t = u.RS.useSetting(),
                    i = u.NA.useSetting();
                if (null == e) return [];
                var o = e.embeds;
                return t && i && null != o ? o.map((function(e) {
                    var t, i = null !== (t = e.image) && void 0 !== t ? t : e.thumbnail;
                    null == i && null != e.images && (i = e.images[0]);
                    if (null != i && null != i.url) {
                        var o = i.height,
                            u = i.proxyURL,
                            l = i.url,
                            a = i.width,
                            c = null != u && E.XH.test(u);
                        return {
                            src: null != u && "" !== u ? u : l,
                            height: o,
                            width: a,
                            spoiler: n,
                            flags: e.flags,
                            contentScanVersion: e.contentScanVersion,
                            isVideo: c,
                            type: r.EMBED
                        }
                    }
                })).filter(f.lm) : []
            }

            function S(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = T(e, t);
                return i.useMemo((function() {
                    if (null == n) return [];
                    if (n.isMediaChannel()) {
                        var e = r.find((function(e) {
                            return e.isThumbnail
                        }));
                        return null != e ? [e] : r
                    }
                    return r
                }), [n, r])
            }

            function T(e, n) {
                var t = m(e),
                    r = R(e, n);
                return p(t).concat(p(r))
            }

            function A(e, n) {
                var t, r, i = m(e),
                    o = R(e, n);
                return null !== (r = null !== (t = i[0]) && void 0 !== t ? t : o[0]) && void 0 !== r ? r : null
            }

            function I(e, n) {
                var t = m(e),
                    r = R(e, n);
                return null == t[0] && null != r[0]
            }

            function b(e, n) {
                var t, r = l.Z.getChannel(n);
                if (null == r) return !1;
                var i = a.Z.getMessage(r.id, r.id);
                return null != i && (e.length > 0 && null != e.find((function(e) {
                    return e.isImage || e.isVideo
                })) && r.isForumPost() && r.ownerId === (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && 0 === o.Z.getCount(r.id) && (0 === i.attachments.length || null == i.attachments.find((function(e) {
                    return h(e) || _(e)
                }))))
            }

            function M(e) {
                return e.reduce((function(e, n) {
                    return {
                        containsVideo: e.containsVideo || n.isVideo,
                        containsGif: e.containsGif || E.LR.test(n.src)
                    }
                }), {
                    containsVideo: !1,
                    containsGif: !1
                })
            }
        },
        913302: (e, n, t) => {
            t.d(n, {
                a: () => r
            });

            function r(e) {
                if (null == e) return !1;
                for (var n = 0; n < e.length; n++)
                    if (e[n].voiceState.selfStream) return !0;
                return !1
            }
        },
        970286: (e, n, t) => {
            t.d(n, {
                ku: () => d,
                LR: () => E,
                BC: () => v
            });
            var r = t(861323),
                i = t(327930),
                o = t(567403),
                u = t(775173),
                l = t(773148),
                a = t(594952),
                c = t(2590),
                s = t(493254),
                f = t(473708);

            function d(e) {
                var n, t, r, i = e.mediaPostEmbedData,
                    o = e.guild,
                    c = e.parentChannel,
                    d = e.postThread,
                    E = e.user,
                    v = e.selectedGuildId,
                    p = e.canAccess,
                    g = void 0 !== p && p;
                if (null == i) return null;
                var h = (0, a.EY)(i.thumbnail),
                    _ = !g && i.has_media_attachment,
                    y = g ? f.Z.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : f.Z.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
                    O = null != E ? l.ZP.getName(i.guild_id, i.channel_id, E) : void 0,
                    m = null == E ? void 0 : E.getAvatarURL(null == o ? void 0 : o.id, 40);
                null != m && v === i.guild_id || (m = u.ZP.getGuildIconURL({
                    id: i.guild_id,
                    icon: i.guild_icon,
                    size: 40,
                    canAnimate: !1
                }));
                var R, S, T = function(e) {
                        if (null == e) return !1;
                        var n = e.height,
                            t = e.width;
                        return null != n && null != t && n >= t
                    }(i.thumbnail) && !_,
                    A = null != (null === (n = i.thumbnail) || void 0 === n ? void 0 : n.filename) && (null === (t = i.thumbnail) || void 0 === t || null === (r = t.filename) || void 0 === r ? void 0 : r.startsWith(s._j));
                return {
                    title: null !== (R = i.title) && void 0 !== R ? R : "",
                    subtitle: i.description,
                    ctaText: y,
                    coverImage: h,
                    coverImageOverlayText: _ ? f.Z.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
                    parentChannelId: i.parent_channel_id,
                    threadId: i.channel_id,
                    postThread: d,
                    messageId: i.message_id,
                    canAccess: g,
                    guildId: i.guild_id,
                    guildName: null !== (S = null == o ? void 0 : o.name) && void 0 !== S ? S : i.guild_name,
                    authorId: null == i ? void 0 : i.author_id,
                    authorName: O,
                    channelName: null == c ? void 0 : c.name,
                    avatarUrl: m,
                    shouldShowBlurredThumbnailImage: _,
                    shouldContainMediaWithBackground: T,
                    shouldSpoiler: A,
                    obscureAwaitingScan: !1,
                    flags: i.flags,
                    contentScanVersion: i.content_scan_version
                }
            }

            function E(e) {
                if (null != e) {
                    var n = (0, r.FO)(e);
                    if (null != n) {
                        var t = (0, r.Sq)(n);
                        if (null != t) return (0, i.Qj)(t)
                    }
                }
            }

            function v(e, n) {
                var t = o.Z.getGuild(e);
                if (null == t || null == n) return !1;
                var r = t.hasFeature(c.oNc.CREATOR_MONETIZABLE) || t.hasFeature(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
                return !0 === n.isMediaChannel() && r
            }
        },
        594952: (e, n, t) => {
            t.d(n, {
                Yh: () => o,
                Vh: () => u,
                EY: () => l,
                oP: () => a
            });
            var r = t(99440),
                i = t(493254),
                o = 4;

            function u(e) {
                if (null != e) {
                    var n = e.thumbnail,
                        t = e.image;
                    if (null != n) {
                        var r;
                        return null !== (r = n.proxy_url) && void 0 !== r ? r : n.url
                    }
                    if (null != t) {
                        var i;
                        return null !== (i = t.proxy_url) && void 0 !== i ? i : t.url
                    }
                }
            }

            function l(e) {
                if (null != e) {
                    var n = e.url,
                        t = e.proxy_url;
                    if (null != n && null != t) {
                        return (0, r.Wv)(n) ? "".concat(t, "?format=jpeg") : t
                    }
                    return n
                }
            }

            function a(e) {
                return i.LR.test(e)
            }
        },
        525261: (e, n, t) => {
            t.d(n, {
                xO: () => r,
                gf: () => u,
                ZP: () => l
            });
            var r, i = t(202351),
                o = t(407561);
            ! function(e) {
                e[e.NONE = 0] = "NONE";
                e[e.REQUESTED_TO_SPEAK = 1] = "REQUESTED_TO_SPEAK";
                e[e.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK";
                e[e.ON_STAGE = 3] = "ON_STAGE"
            }(r || (r = {}));

            function u(e) {
                return null == e ? r.NONE : e.suppress && null != e.requestToSpeakTimestamp ? r.REQUESTED_TO_SPEAK : e.suppress || null == e.requestToSpeakTimestamp ? e.suppress || null != e.requestToSpeakTimestamp ? r.NONE : r.ON_STAGE : r.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }

            function l(e, n) {
                return (0, i.e7)([o.Z], (function() {
                    return null == e || null == n ? r.NONE : u(o.Z.getVoiceStateForChannel(n, e))
                }), [e, n])
            }
        },
        591684: (e, n, t) => {
            t.d(n, {
                Z: () => Z
            });
            var r = t(496486),
                i = t.n(r),
                o = t(202351),
                u = t(744564),
                l = t(659436),
                a = t(649536),
                c = t(382060),
                s = t(4798),
                f = t(722406),
                d = t(61209),
                E = t(352980),
                v = t(379364),
                p = t(2590);

            function g(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function y(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        h(e, n, t[n])
                    }))
                }
                return e
            }

            function O(e, n) {
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

            function m(e, n) {
                return !n || "object" !== S(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function R(e, n) {
                R = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return R(e, n)
            }
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
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
                    var t, r = _(e);
                    if (n) {
                        var i = _(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return m(this, t)
                }
            }
            var A = new Set,
                I = {},
                b = {};

            function M(e, n) {
                c.AW.has(e.type) && C(function(e) {
                    if (!(e.id in I)) {
                        var n;
                        I[e.id] = {
                            guildId: e.guild_id,
                            parentId: e.parent_id,
                            count: null !== (n = e.messageCount) && void 0 !== n ? n : 0,
                            mostRecentRawMessage: null,
                            mostRecentMessage: null
                        }
                    }
                    return I[e.id]
                }(e), n)
            }

            function C(e, n) {
                var t, r = (null !== (t = b[e.parentId]) && void 0 !== t ? t : 0) + 1;
                b[e.parentId] = r;
                n(e)
            }

            function N(e) {
                var n;
                null === (n = e.threads) || void 0 === n || n.forEach(D)
            }

            function D(e) {
                M(e, (function(n) {
                    null != e.messageCount && (n.count = e.messageCount);
                    var t, r = null !== (t = n.mostRecentRawMessage) && void 0 !== t ? t : n.mostRecentMessage;
                    if (null != e.lastMessageId && (null == r ? void 0 : r.id) !== e.lastMessageId) {
                        n.mostRecentRawMessage = null;
                        n.mostRecentMessage = null
                    }
                }))
            }

            function L(e) {
                if (null != e && !(e.id in I)) {
                    var n = d.Z.getChannel(e.id);
                    if (null != n) {
                        D(n);
                        return !0
                    }
                }
                return !1
            }

            function P(e) {
                D(e.channel)
            }

            function w(e) {
                e.threads.forEach(L)
            }
            var U = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && R(e, n)
                }(t, e);
                var n = T(t);

                function t() {
                    g(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(d.Z, E.Z)
                };
                r.getCount = function(e) {
                    var n, t;
                    return null !== (t = null === (n = I[e]) || void 0 === n ? void 0 : n.count) && void 0 !== t ? t : null
                };
                r.getMostRecentMessage = function(e) {
                    var n, t = I[e];
                    if (null == t) return null;
                    if (null == t.mostRecentMessage && null != t.mostRecentRawMessage) {
                        var r;
                        t.mostRecentMessage = null !== (r = E.Z.getMessage(e, t.mostRecentRawMessage.id)) && void 0 !== r ? r : (0, a.e5)(t.mostRecentRawMessage);
                        t.mostRecentRawMessage = null
                    }
                    return null !== (n = t.mostRecentMessage) && void 0 !== n ? n : null
                };
                r.getChannelThreadsVersion = function(e) {
                    return b[e]
                };
                r.getInitialOverlayState = function() {
                    return I
                };
                return t
            }(o.ZP.Store);
            U.displayName = "ThreadMessageStore";
            const Z = new U(u.Z, {
                CONNECTION_OPEN: function(e) {
                    b = {};
                    A.clear();
                    e.guilds.forEach(N)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var n = e.threadMessages;
                    I = y({}, n);
                    for (var t in I) {
                        var r = n[t].mostRecentMessage;
                        null != r && (n[t].mostRecentMessage = new s.Z(O(y({}, r), {
                            author: new f.Z(r.author)
                        })))
                    }
                },
                GUILD_CREATE: function(e) {
                    N(e.guild)
                },
                GUILD_DELETE: function(e) {
                    var n, t = e.guild;
                    n = t.id, I = i().omitBy(I, (function(e) {
                        var t = e.guildId === n;
                        t && delete b[e.parentId];
                        return t
                    }))
                },
                THREAD_CREATE: P,
                THREAD_UPDATE: P,
                THREAD_LIST_SYNC: function(e) {
                    var n = e.threads,
                        t = e.mostRecentMessages;
                    n.forEach(D);
                    null == t || t.forEach((function(e) {
                        var n = d.Z.getChannel(e.channel_id);
                        null != n && e.type !== p.uaV.THREAD_STARTER_MESSAGE && M(n, (function(n) {
                            n.mostRecentRawMessage = e;
                            n.mostRecentMessage = null
                        }))
                    }))
                },
                LOAD_THREADS_SUCCESS: w,
                LOAD_ARCHIVED_THREADS_SUCCESS: w,
                SEARCH_FINISH: function(e) {
                    var n = e.messages,
                        t = e.threads,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, l = n[Symbol.iterator](); !(r = (u = l.next()).done); r = !0) {
                            var a = u.value,
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, E = a[Symbol.iterator](); !(c = (d = E.next()).done); c = !0) {
                                    L(d.value.thread)
                                }
                            } catch (e) {
                                s = !0;
                                f = e
                            } finally {
                                try {
                                    c || null == E.return || E.return()
                                } finally {
                                    if (s) throw f
                                }
                            }
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    t.forEach(L)
                },
                THREAD_DELETE: function(e) {
                    var n = e.channel;
                    delete I[n.id]
                },
                CHANNEL_DELETE: function(e) {
                    ! function(e) {
                        I = i().omitBy(I, (function(n) {
                            return n.parentId === e
                        }));
                        delete b[e]
                    }(e.channel.id)
                },
                MESSAGE_CREATE: function(e) {
                    var n = e.message,
                        t = e.optimistic,
                        r = e.isPushNotification,
                        i = e.sendMessageOptions;
                    if (t || r || null != i) return !1;
                    var o = d.Z.getChannel(n.channel_id);
                    if (null == o || !c.Ec.has(o.type)) return !1;
                    if (! function(e, n) {
                            return n.type !== p.uaV.THREAD_STARTER_MESSAGE && (!e.isForumPost() || n.id !== e.id)
                        }(o, n)) return !1;
                    M(o, (function(e) {
                        e.count = Math.min(e.count + 1, v.M3);
                        e.mostRecentRawMessage = n;
                        e.mostRecentMessage = null
                    }))
                },
                MESSAGE_UPDATE: function(e) {
                    var n, t = e.message,
                        r = I[t.channel_id],
                        i = null !== (n = null == r ? void 0 : r.mostRecentRawMessage) && void 0 !== n ? n : null == r ? void 0 : r.mostRecentMessage;
                    if (null == r || null == i || i.id !== t.id) return !1;
                    C(r, (function(e) {
                        null != e.mostRecentMessage && (e.mostRecentMessage = (0, a.wi)(e.mostRecentMessage, t));
                        null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, a.gx)(e.mostRecentRawMessage, t))
                    }))
                },
                MESSAGE_DELETE: function(e) {
                    var n = e.id,
                        t = e.channelId,
                        r = I[t];
                    if (null == r) return !1;
                    var i = t !== n,
                        o = !A.has(n);
                    C(r, (function(e) {
                        var t, r = null !== (t = e.mostRecentRawMessage) && void 0 !== t ? t : e.mostRecentMessage;
                        if (null != r && r.id === n) {
                            e.mostRecentMessage = null;
                            e.mostRecentRawMessage = null
                        }
                        e.count = i && o ? Math.max(e.count - 1, 0) : e.count;
                        A.add(n)
                    }))
                },
                MESSAGE_DELETE_BULK: function(e) {
                    var n = e.ids,
                        t = e.channelId,
                        r = I[t];
                    if (null == r) return !1;
                    var i = n.filter((function(e) {
                        var n = t !== e,
                            r = !A.has(e);
                        return n && r
                    })).length;
                    i > 0 && C(r, (function(e) {
                        var t, r = null !== (t = e.mostRecentRawMessage) && void 0 !== t ? t : e.mostRecentMessage;
                        if (null != r && n.includes(r.id)) {
                            e.mostRecentMessage = null;
                            e.mostRecentRawMessage = null
                        }
                        e.count -= i;
                        n.forEach((function(e) {
                            return A.add(e)
                        }))
                    }))
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    var n = !1,
                        t = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = e.messages[Symbol.iterator](); !(t = (o = u.next()).done); t = !0) {
                            n = L(o.value.thread) || n
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            t || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    if (e.isAfter || e.isBefore || e.hasMoreAfter) return n;
                    var l = d.Z.getChannel(e.channelId);
                    if (null == l || !c.Ec.has(l.type)) return n;
                    M(l, (function(n) {
                        if (0 === e.messages.length) {
                            n.mostRecentRawMessage = null;
                            n.mostRecentMessage = null;
                            n.count = 0
                        } else {
                            var t, r = null !== (t = e.messages[0]) && void 0 !== t ? t : null;
                            n.count = e.messages.length >= v.M3 ? v.M3 : n.count;
                            if ((null == r ? void 0 : r.type) !== p.uaV.THREAD_STARTER_MESSAGE) {
                                n.mostRecentRawMessage = r;
                                n.mostRecentMessage = null
                            }
                        }
                    }))
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var n = e.data,
                        t = !1,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, a = (0,
                                l.J)(n)[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            t = L(u.value) || t
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return t
                }
            })
        },
        325213: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var r = t(202351),
                i = t(744564),
                o = t(121534),
                u = t(968449),
                l = t(473419),
                a = t(761814);

            function c(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function E(e, n) {
                return !n || "object" !== p(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function v(e, n) {
                v = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return v(e, n)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
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
                    var t, r = d(e);
                    if (n) {
                        var i = d(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return E(this, t)
                }
            }
            var h, _, y, O = {
                    applicationId: null,
                    originURL: null
                },
                m = O,
                R = new Set,
                S = !1;

            function T() {
                y = null
            }

            function A() {
                h = null;
                _ = null;
                R = new Set;
                m.applicationId = null;
                m.originURL = null;
                T()
            }
            var I = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && v(e, n)
                }(t, e);
                var n = g(t);

                function t() {
                    c(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function(e) {
                    m = function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))));
                            r.forEach((function(n) {
                                f(e, n, t[n])
                            }))
                        }
                        return e
                    }({}, null != e ? e : O);
                    h = m.applicationId;
                    _ = m.originURL;
                    this.waitFor(l.Z, o.Z);
                    this.syncWith([l.Z, o.Z], (function() {
                        return !0
                    }));
                    a.Z.whenInitialized((function() {
                        S = !0
                    }))
                };
                r.inTestModeForApplication = function(e) {
                    return h === e
                };
                r.inTestModeForEmbeddedApplication = function(e) {
                    return h === e && null != _
                };
                r.shouldDisplayTestMode = function(e) {
                    return u.Sb.getSetting() && this.inTestModeForApplication(e)
                };
                r.getState = function() {
                    return m
                };
                r.whenInitialized = function(e) {
                    this.addConditionalChangeListener((function() {
                        if (S) {
                            setImmediate(e);
                            return !1
                        }
                    }))
                };
                ! function(e, n, t) {
                    n && s(e.prototype, n);
                    t && s(e, t)
                }(t, [{
                    key: "isTestMode",
                    get: function() {
                        return null != h
                    }
                }, {
                    key: "isFetchingAuthorization",
                    get: function() {
                        return R.size > 0
                    }
                }, {
                    key: "testModeEmbeddedApplicationId",
                    get: function() {
                        return null != _ ? h : null
                    }
                }, {
                    key: "testModeApplicationId",
                    get: function() {
                        return h
                    }
                }, {
                    key: "testModeOriginURL",
                    get: function() {
                        return _
                    }
                }, {
                    key: "error",
                    get: function() {
                        return y
                    }
                }]);
                return t
            }(r.ZP.PersistedStore);
            I.displayName = "TestModeStore";
            I.persistKey = "TestModeStore";
            const b = new I(i.Z, {
                DEVELOPER_TEST_MODE_AUTHORIZATION_START: function(e) {
                    var n = e.applicationId;
                    R.add(n);
                    y = null
                },
                DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function(e) {
                    var n = e.applicationId,
                        t = e.originURL;
                    h = n;
                    _ = t;
                    R.delete(n);
                    y = null;
                    m.applicationId = n;
                    m.originURL = t
                },
                DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function(e) {
                    var n = e.applicationId,
                        t = e.error;
                    R.delete(n);
                    y = t
                },
                OVERLAY_INITIALIZE: function(e) {
                    var n = e.testModeApplicationId;
                    h = n
                },
                DEVELOPER_TEST_MODE_RESET_ERROR: T,
                LOGOUT: A,
                DEVELOPER_TEST_MODE_RESET: A
            })
        },
        176758: (e, n, t) => {
            t.d(n, {
                a5: () => L,
                c4: () => D,
                g7: () => N,
                EO: () => Z,
                wR: () => U,
                wl: () => P,
                rY: () => C,
                rX: () => b,
                jZ: () => I,
                rt: () => M,
                oQ: () => A,
                LY: () => w,
                Nj: () => o
            });
            var r = t(940060),
                i = t(73904);

            function o(e) {
                return e.replace(/[\s-~]+/g, "-").replace(/^-+/, "").replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").toLowerCase()
            }
            var u = t(913302),
                l = t(970286),
                a = t(525261),
                c = t(382060),
                s = t(61209),
                f = t(5544),
                d = t(682776),
                E = t(715107),
                v = t(602397),
                p = t(563135),
                g = t(2590),
                h = t(203600),
                _ = t(473708),
                y = g.d4z.GUILD_VOICE,
                O = g.d4z.GUILD_CATEGORY,
                m = g.d4z.GUILD_STAGE_VOICE;

            function R(e, n) {
                return e === n || e === O
            }

            function S(e, n, t) {
                var i = p.ZP.NONE;
                ((0, c.r8)(n) || n === O) && (i = r.Z.add(i, g.Plq.VIEW_CHANNEL));
                if (R(n, y)) {
                    i = r.Z.add(i, g.Plq.VIEW_CHANNEL);
                    i = r.Z.add(i, g.Plq.CONNECT)
                }
                return {
                    id: e,
                    type: t,
                    allow: p.ZP.NONE,
                    deny: i
                }
            }

            function T(e, n, t) {
                var i = p.ZP.NONE;
                ((0, c.r8)(n) || n === O) && (i = r.Z.add(i, g.Plq.VIEW_CHANNEL));
                if (R(n, y) || R(n, m)) {
                    i = r.Z.add(i, g.Plq.VIEW_CHANNEL);
                    i = r.Z.add(i, g.Plq.CONNECT)
                }
                return {
                    id: e,
                    type: t,
                    deny: p.ZP.NONE,
                    allow: i
                }
            }

            function A(e, n, t) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = [];
                (t.length > 0 || r) && o.push(S(e, n, i.BN.ROLE));
                t.forEach((function(e) {
                    o.push(T(e, n, i.BN.ROLE))
                }));
                return o
            }

            function I(e, n) {
                return T(e, n, i.BN.MEMBER)
            }

            function b(e, n) {
                return T(e, n, i.BN.ROLE)
            }

            function M(e) {
                return [{
                    id: e,
                    type: i.BN.ROLE,
                    deny: g.Plq.SEND_MESSAGES,
                    allow: p.ZP.NONE
                }]
            }

            function C(e, n, t) {
                var r, i, o = e.getGuildId(),
                    l = t.getGuild(o),
                    a = null !== (r = null == l ? void 0 : l.maxVideoChannelUsers) && void 0 !== r ? r : -1,
                    c = null !== (i = null == l ? void 0 : l.maxStageVideoChannelUsers) && void 0 !== i ? i : -1,
                    s = v.ZP.countVoiceStatesForChannel(e.id),
                    f = v.ZP.getVoiceStatesForChannel(e),
                    E = d.Z.can(g.Plq.MOVE_MEMBERS, e) && d.Z.can(g.Plq.CONNECT, e),
                    p = !1;
                p = e.type === m ? null != o && (n.hasVideo(e.id) || (0, u.a)(f)) && c > 0 && s >= c : null != o && n.hasVideo(e.id) && a > 0 && s >= a + (E ? 1 : 0);
                var h = e.userLimit > 0 && s >= e.userLimit;
                return p || h && !E
            }

            function N(e, n) {
                return n.isGuildStageVoice() ? g.epw : null == e ? g.eWB : Math.max(e.hasFeature(g.oNc.VIP_REGIONS) ? h.HO[g.Eu4.TIER_3].limits.bitrate : g.eWB, h.HO[e.premiumTier].limits.bitrate)
            }

            function D(e) {
                var n = function(e) {
                    var n = e.channels,
                        t = e.selectedChannelId,
                        r = e.selectedVoiceChannelId,
                        i = e.voiceStates,
                        o = [];
                    n.forEach((function(e) {
                        if (e.id !== r && e.id !== t) {
                            var n = i[e.id];
                            null != n && (e.isGuildStageVoice() ? n.forEach((function(e) {
                                (0, a.gf)(e.voiceState) === a.xO.ON_STAGE && o.push(e)
                            })) : n.forEach((function(e) {
                                return o.push(e)
                            })))
                        }
                    }));
                    return o
                }({
                    channels: e.channels,
                    selectedChannelId: e.selectedChannelId,
                    selectedVoiceChannelId: e.selectedVoiceChannelId,
                    voiceStates: e.voiceStates
                });
                return n.map((function(e) {
                    return e.user
                }))
            }

            function L(e) {
                switch (e.type) {
                    case g.d4z.DM:
                        return _.Z.Messages.DM;
                    case g.d4z.GROUP_DM:
                        return _.Z.Messages.GROUP_DM;
                    case g.d4z.GUILD_TEXT:
                        return _.Z.Messages.TEXT_CHANNEL;
                    case g.d4z.GUILD_FORUM:
                        return _.Z.Messages.FORUM_CHANNEL;
                    case g.d4z.GUILD_MEDIA:
                        return _.Z.Messages.MEDIA_CHANNEL;
                    case g.d4z.GUILD_VOICE:
                        return _.Z.Messages.VOICE_CHANNEL;
                    case g.d4z.GUILD_STAGE_VOICE:
                        return _.Z.Messages.STAGE_CHANNEL;
                    case g.d4z.GUILD_ANNOUNCEMENT:
                        return _.Z.Messages.NEWS_CHANNEL;
                    case g.d4z.GUILD_STORE:
                        return _.Z.Messages.STORE_CHANNEL;
                    case g.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.CATEGORY;
                    default:
                        return null
                }
            }

            function P(e) {
                if (null == e) return "text";
                var n = e.isMediaChannel();
                return e.type === g.d4z.GUILD_VOICE ? d.Z.can(g.Plq.CONNECT, e) ? "voice" : "voice-locked" : e.type === g.d4z.GUILD_STAGE_VOICE ? d.Z.can(g.Plq.CONNECT, e) ? "stage" : "stage-locked" : c.Ec.has(e.type) ? e.isForumPost() ? "post" : "thread" : e.type === g.d4z.GUILD_FORUM ? n ? "media" : "forum" : e.type === g.d4z.GUILD_MEDIA ? "media" : c.sR.has(e.type) ? "text" : void 0
            }

            function w(e) {
                var n, t = s.Z.getChannel(E.Z.getLastSelectedChannelId());
                if (null != t && t.getGuildId() === e && t.type === g.d4z.GUILD_TEXT) n = t.id;
                else {
                    var r = f.ZP.getDefaultChannel(e);
                    n = null != r ? r.id : null
                }
                return g.Z5c.CHANNEL(e, n)
            }

            function U(e, n, t, r) {
                var i = null == r ? "" : "?summaryId=".concat(r);
                return "".concat(location.protocol, "//").concat(location.host).concat(g.Z5c.CHANNEL(e, n, t)).concat(i)
            }

            function Z(e, n, t, r) {
                var i = e.getGuildId(),
                    o = (0, l.BC)(i, n);
                return null != n && o ? function(e, n, t, r) {
                    return null == e || null == n || null == t ? U(e, n, r) : "".concat(location.protocol, "//").concat(location.host).concat(g.Z5c.CHANNEL_THREAD_VIEW(e, n, t, r))
                }(i, n.id, e.id, e.id) : null != r ? r : U(i, e.id, t)
            }
        },
        773148: (e, n, t) => {
            t.d(n, {
                ZP: () => f
            });
            var r = t(202351),
                i = t(61209),
                o = t(21372),
                u = t(840922),
                l = t(749565),
                a = t(473708);

            function c(e, n, t) {
                if (null == t) return null;
                if (null != e) return o.ZP.getNick(e, t.id);
                if (null != n) {
                    var r = i.Z.getChannel(n);
                    if (null == r ? void 0 : r.isPrivate()) return u.Z.getNickname(t.id)
                }
                return null
            }

            function s(e, n, t) {
                return null == t ? a.Z.Messages.UNKNOWN_USER : null !== (r = c(e, n, t)) && void 0 !== r ? r : l.ZP.getName(t);
                var r
            }
            const f = {
                getNickname: c,
                getName: s,
                useName: function(e, n, t) {
                    return (0, r.e7)([o.ZP, i.Z, u.Z], (function() {
                        return s(e, n, t)
                    }))
                }
            }
        }
    }
]);