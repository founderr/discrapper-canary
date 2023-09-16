"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [92465], {
        560213: (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var r = n(202351),
                i = n(744564),
                o = n(661123),
                u = n(2590);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var i = c(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
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
                h = [];
            var g = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(n, e);
                var t = E(n);

                function n() {
                    l(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    v = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                a(e, t, n[t])
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
                    return h
                };
                r.isApplicationInDevShelf = function(e) {
                    return null != h.find((function(t) {
                        return t.id === e
                    }))
                };
                r.inDevModeForApplication = function(e) {
                    return v.isEnabled && this.isApplicationInDevShelf(e)
                };
                r.__getLocalVars = function() {
                    return {
                        state: v,
                        fetchState: p,
                        developerShelfItems: h
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            g.displayName = "DeveloperActivityShelfStore";
            g.persistKey = "DeveloperActivityShelfStore";
            const _ = new g(i.Z, {
                LOGOUT: function() {
                    v = {
                        isEnabled: !1,
                        lastUsedObject: {},
                        useActivityUrlOverride: !1,
                        activityUrlOverride: null,
                        filter: ""
                    };
                    p = null;
                    h = []
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_ENABLED: function() {
                    v.isEnabled = !v.isEnabled
                },
                DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function() {
                    v.useActivityUrlOverride = !v.useActivityUrlOverride
                },
                DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function(e) {
                    var t = e.activityUrlOverride;
                    v.activityUrlOverride = t
                },
                DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function(e) {
                    var t = e.applicationId,
                        n = e.timestamp;
                    if (null == h.find((function(e) {
                            return e.id === t
                        }))) return !1;
                    v.lastUsedObject[t] = n
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_START: function() {
                    p = "loading"
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function(e) {
                    var t = e.items;
                    p = "loaded";
                    h = t.filter((function(e) {
                        return null != e.flags && (0, o.yE)(e.flags, u.udG.EMBEDDED)
                    }))
                },
                DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function(e) {
                    e.type;
                    p = "errored"
                },
                DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function(e) {
                    var t = e.filter;
                    v.filter = t
                }
            })
        },
        99440: (e, t, n) => {
            n.d(t, {
                dE: () => p,
                Wv: () => y,
                aU: () => R,
                zy: () => S,
                eL: () => T,
                vg: () => I,
                CB: () => A,
                cp: () => b
            });
            var r = n(667294),
                i = n(591684),
                o = n(968449),
                u = n(61209),
                l = n(352980),
                a = n(473903),
                c = n(661123),
                s = n(72580),
                f = n(2590),
                d = n(493254);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return E(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e, t) {
                if (null != e && null != e.embeds[0]) {
                    var n = e.embeds[0].color;
                    return null != n && "#ffffff" === n.toLowerCase() || t ? void 0 : n
                }
            }

            function h(e) {
                if (null == e) return !1;
                var t = e.filename,
                    n = e.height,
                    r = e.width;
                return d.IQ.test(t) && null != n && n > 0 && null != r && r > 0
            }

            function g(e) {
                return null != e && (null != e && d.XH.test(e.filename) && null != e.proxy_url)
            }

            function _(e) {
                return h(e) || g(e)
            }

            function y(e) {
                return d.XH.test(e)
            }

            function O(e) {
                return function(e) {
                    if (!(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.x4.getSetting())) return [];
                    var t = null == e ? void 0 : e.attachments;
                    return null == e || null == t ? [] : t.filter(_).map((function(e) {
                        var t = e.proxy_url,
                            n = e.url,
                            r = e.description,
                            i = e.spoiler,
                            o = e.flags,
                            u = e.width,
                            l = e.height,
                            a = e.filename;
                        if (null == u || null == l) return null;
                        var s = y(a),
                            d = null != e.flags && (0, c.yE)(e.flags, f.J0y.IS_THUMBNAIL);
                        return {
                            src: s ? "".concat(t, "?format=jpeg") : null != t ? t : n,
                            width: u,
                            height: l,
                            spoiler: null != i && i,
                            flags: o,
                            alt: r,
                            isVideo: s,
                            isThumbnail: d
                        }
                    })).filter(s.lm)
                }(e, o.x4.useSetting())
            }

            function m(e, t) {
                var n = o.RS.useSetting(),
                    r = o.NA.useSetting();
                if (null == e) return [];
                var i = e.embeds;
                return n && r && null != i ? i.map((function(e) {
                    var n, r = null !== (n = e.image) && void 0 !== n ? n : e.thumbnail;
                    null == r && null != e.images && (r = e.images[0]);
                    if (null != r && null != r.url) {
                        var i = r.height,
                            o = r.proxyURL,
                            u = r.url,
                            l = r.width,
                            a = null != o && d.XH.test(o);
                        return {
                            src: null != o && "" !== o ? o : u,
                            height: i,
                            width: l,
                            spoiler: t,
                            isVideo: a
                        }
                    }
                })).filter(s.lm) : []
            }

            function R(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = S(e, n);
                return r.useMemo((function() {
                    if (null == t) return [];
                    if (t.isMediaChannel()) {
                        var e = i.find((function(e) {
                            return e.isThumbnail
                        }));
                        return null != e ? [e] : i
                    }
                    return i
                }), [t, i])
            }

            function S(e, t) {
                var n = O(e),
                    r = m(e, t);
                return v(n).concat(v(r))
            }

            function T(e, t) {
                var n, r, i = O(e),
                    o = m(e, t);
                return null !== (r = null !== (n = i[0]) && void 0 !== n ? n : o[0]) && void 0 !== r ? r : null
            }

            function I(e, t) {
                var n = O(e),
                    r = m(e, t);
                return null == n[0] && null != r[0]
            }

            function A(e, t) {
                var n, r = u.Z.getChannel(t);
                if (null == r) return !1;
                var o = l.Z.getMessage(r.id, r.id);
                return null != o && (e.length > 0 && null != e.find((function(e) {
                    return e.isImage || e.isVideo
                })) && r.isForumPost() && r.ownerId === (null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === i.Z.getCount(r.id) && (0 === o.attachments.length || null == o.attachments.find((function(e) {
                    return h(e) || g(e)
                }))))
            }

            function b(e) {
                return e.reduce((function(e, t) {
                    return {
                        containsVideo: e.containsVideo || t.isVideo,
                        containsGif: e.containsGif || d.LR.test(t.src)
                    }
                }), {
                    containsVideo: !1,
                    containsGif: !1
                })
            }
        },
        913302: (e, t, n) => {
            n.d(t, {
                a: () => r
            });

            function r(e) {
                if (null == e) return !1;
                for (var t = 0; t < e.length; t++)
                    if (e[t].voiceState.selfStream) return !0;
                return !1
            }
        },
        970286: (e, t, n) => {
            n.d(t, {
                ku: () => d,
                LR: () => E,
                BC: () => v
            });
            var r = n(861323),
                i = n(327930),
                o = n(567403),
                u = n(775173),
                l = n(773148),
                a = n(594952),
                c = n(2590),
                s = n(493254),
                f = n(473708);

            function d(e) {
                var t, n, r, i = e.mediaPostEmbedData,
                    o = e.guild,
                    c = e.parentChannel,
                    d = e.postThread,
                    E = e.user,
                    v = e.selectedGuildId,
                    p = e.canAccess,
                    h = void 0 !== p && p;
                if (null == i) return null;
                var g = (0, a.EY)(i.thumbnail),
                    _ = !h && i.has_media_attachment,
                    y = h ? f.Z.Messages.MEDIA_POST_EMBED_SUBSCRIBED_CTA : f.Z.Messages.MEDIA_POST_EMBED_SUBSCRIBE_CTA,
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
                        var t = e.height,
                            n = e.width;
                        return null != t && null != n && t >= n
                    }(i.thumbnail) && !_,
                    I = null != (null === (t = i.thumbnail) || void 0 === t ? void 0 : t.filename) && (null === (n = i.thumbnail) || void 0 === n || null === (r = n.filename) || void 0 === r ? void 0 : r.startsWith(s._j));
                return {
                    title: null !== (R = i.title) && void 0 !== R ? R : "",
                    subtitle: i.description,
                    ctaText: y,
                    coverImage: g,
                    coverImageOverlayText: _ ? f.Z.Messages.MEDIA_POST_EMBED_BLURRED_THUMBNAIL_TEXT : void 0,
                    parentChannelId: i.parent_channel_id,
                    threadId: i.channel_id,
                    postThread: d,
                    messageId: i.message_id,
                    canAccess: h,
                    guildId: i.guild_id,
                    guildName: null !== (S = null == o ? void 0 : o.name) && void 0 !== S ? S : i.guild_name,
                    authorId: null == i ? void 0 : i.author_id,
                    authorName: O,
                    channelName: null == c ? void 0 : c.name,
                    avatarUrl: m,
                    shouldShowBlurredThumbnailImage: _,
                    shouldContainMediaWithBackground: T,
                    shouldSpoiler: I
                }
            }

            function E(e) {
                if (null != e) {
                    var t = (0, r.FO)(e);
                    if (null != t) {
                        var n = (0, r.Sq)(t);
                        if (null != n) return (0, i.Qj)(n)
                    }
                }
            }

            function v(e, t) {
                var n = o.Z.getGuild(e);
                if (null == n || null == t) return !1;
                var r = n.hasFeature(c.oNc.CREATOR_MONETIZABLE) || n.hasFeature(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
                return !0 === t.isMediaChannel() && r
            }
        },
        594952: (e, t, n) => {
            n.d(t, {
                Yh: () => o,
                Vh: () => u,
                EY: () => l,
                oP: () => a
            });
            var r = n(99440),
                i = n(493254),
                o = 4;

            function u(e) {
                if (null != e) {
                    var t = e.thumbnail,
                        n = e.image;
                    if (null != t) {
                        var r;
                        return null !== (r = t.proxy_url) && void 0 !== r ? r : t.url
                    }
                    if (null != n) {
                        var i;
                        return null !== (i = n.proxy_url) && void 0 !== i ? i : n.url
                    }
                }
            }

            function l(e) {
                if (null != e) {
                    var t = e.url,
                        n = e.proxy_url;
                    if (null != t && null != n) {
                        return (0, r.Wv)(t) ? "".concat(n, "?format=jpeg") : n
                    }
                    return t
                }
            }

            function a(e) {
                return i.LR.test(e)
            }
        },
        525261: (e, t, n) => {
            n.d(t, {
                xO: () => r,
                gf: () => u,
                ZP: () => l
            });
            var r, i = n(202351),
                o = n(407561);
            ! function(e) {
                e[e.NONE = 0] = "NONE";
                e[e.REQUESTED_TO_SPEAK = 1] = "REQUESTED_TO_SPEAK";
                e[e.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK";
                e[e.ON_STAGE = 3] = "ON_STAGE"
            }(r || (r = {}));

            function u(e) {
                return null == e ? r.NONE : e.suppress && null != e.requestToSpeakTimestamp ? r.REQUESTED_TO_SPEAK : e.suppress || null == e.requestToSpeakTimestamp ? e.suppress || null != e.requestToSpeakTimestamp ? r.NONE : r.ON_STAGE : r.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }

            function l(e, t) {
                return (0, i.e7)([o.Z], (function() {
                    return null == e || null == t ? r.NONE : u(o.Z.getVoiceStateForChannel(t, e))
                }), [e, t])
            }
        },
        591684: (e, t, n) => {
            n.d(t, {
                Z: () => Z
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(744564),
                l = n(659436),
                a = n(649536),
                c = n(382060),
                s = n(4798),
                f = n(722406),
                d = n(61209),
                E = n(352980),
                v = n(379364),
                p = n(2590);

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        g(e, t, n[t])
                    }))
                }
                return e
            }

            function O(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function m(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function R(e, t) {
                R = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return R(e, t)
            }
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
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
                    var n, r = _(e);
                    if (t) {
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var I = new Set,
                A = {},
                b = {};

            function M(e, t) {
                c.AW.has(e.type) && C(function(e) {
                    if (!(e.id in A)) {
                        var t;
                        A[e.id] = {
                            guildId: e.guild_id,
                            parentId: e.parent_id,
                            count: null !== (t = e.messageCount) && void 0 !== t ? t : 0,
                            mostRecentRawMessage: null,
                            mostRecentMessage: null
                        }
                    }
                    return A[e.id]
                }(e), t)
            }

            function C(e, t) {
                var n, r = (null !== (n = b[e.parentId]) && void 0 !== n ? n : 0) + 1;
                b[e.parentId] = r;
                t(e)
            }

            function N(e) {
                var t;
                null === (t = e.threads) || void 0 === t || t.forEach(L)
            }

            function L(e) {
                M(e, (function(t) {
                    null != e.messageCount && (t.count = e.messageCount);
                    var n, r = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
                    if (null != e.lastMessageId && (null == r ? void 0 : r.id) !== e.lastMessageId) {
                        t.mostRecentRawMessage = null;
                        t.mostRecentMessage = null
                    }
                }))
            }

            function D(e) {
                if (null != e && !(e.id in A)) {
                    var t = d.Z.getChannel(e.id);
                    if (null != t) {
                        L(t);
                        return !0
                    }
                }
                return !1
            }

            function P(e) {
                L(e.channel)
            }

            function w(e) {
                e.threads.forEach(D)
            }
            var U = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && R(e, t)
                }(n, e);
                var t = T(n);

                function n() {
                    h(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(d.Z, E.Z)
                };
                r.getCount = function(e) {
                    var t, n;
                    return null !== (n = null === (t = A[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null
                };
                r.getMostRecentMessage = function(e) {
                    var t, n = A[e];
                    if (null == n) return null;
                    if (null == n.mostRecentMessage && null != n.mostRecentRawMessage) {
                        var r;
                        n.mostRecentMessage = null !== (r = E.Z.getMessage(e, n.mostRecentRawMessage.id)) && void 0 !== r ? r : (0, a.e5)(n.mostRecentRawMessage);
                        n.mostRecentRawMessage = null
                    }
                    return null !== (t = n.mostRecentMessage) && void 0 !== t ? t : null
                };
                r.getChannelThreadsVersion = function(e) {
                    return b[e]
                };
                r.getInitialOverlayState = function() {
                    return A
                };
                r.__getLocalVars = function() {
                    return {
                        recentDeletedMessages: I,
                        threads: A,
                        channelThreadsVersion: b
                    }
                };
                return n
            }(o.ZP.Store);
            U.displayName = "ThreadMessageStore";
            const Z = new U(u.Z, {
                CONNECTION_OPEN: function(e) {
                    b = {};
                    I.clear();
                    e.guilds.forEach(N)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.threadMessages;
                    A = y({}, t);
                    for (var n in A) {
                        var r = t[n].mostRecentMessage;
                        null != r && (t[n].mostRecentMessage = new s.Z(O(y({}, r), {
                            author: new f.Z(r.author)
                        })))
                    }
                },
                GUILD_CREATE: function(e) {
                    N(e.guild)
                },
                GUILD_DELETE: function(e) {
                    var t, n = e.guild;
                    t = n.id, A = i().omitBy(A, (function(e) {
                        var n = e.guildId === t;
                        n && delete b[e.parentId];
                        return n
                    }))
                },
                THREAD_CREATE: P,
                THREAD_UPDATE: P,
                THREAD_LIST_SYNC: function(e) {
                    var t = e.threads,
                        n = e.mostRecentMessages;
                    t.forEach(L);
                    null == n || n.forEach((function(e) {
                        var t = d.Z.getChannel(e.channel_id);
                        null != t && e.type !== p.uaV.THREAD_STARTER_MESSAGE && M(t, (function(t) {
                            t.mostRecentRawMessage = e;
                            t.mostRecentMessage = null
                        }))
                    }))
                },
                LOAD_THREADS_SUCCESS: w,
                LOAD_ARCHIVED_THREADS_SUCCESS: w,
                SEARCH_FINISH: function(e) {
                    var t = e.messages,
                        n = e.threads,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, l = t[Symbol.iterator](); !(r = (u = l.next()).done); r = !0) {
                            var a = u.value,
                                c = !0,
                                s = !1,
                                f = void 0;
                            try {
                                for (var d, E = a[Symbol.iterator](); !(c = (d = E.next()).done); c = !0) {
                                    D(d.value.thread)
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
                    n.forEach(D)
                },
                THREAD_DELETE: function(e) {
                    var t = e.channel;
                    delete A[t.id]
                },
                CHANNEL_DELETE: function(e) {
                    ! function(e) {
                        A = i().omitBy(A, (function(t) {
                            return t.parentId === e
                        }));
                        delete b[e]
                    }(e.channel.id)
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.message,
                        n = e.optimistic,
                        r = e.isPushNotification,
                        i = e.sendMessageOptions;
                    if (n || r || null != i) return !1;
                    var o = d.Z.getChannel(t.channel_id);
                    if (null == o || !c.Ec.has(o.type)) return !1;
                    if (! function(e, t) {
                            return t.type !== p.uaV.THREAD_STARTER_MESSAGE && (!e.isForumPost() || t.id !== e.id)
                        }(o, t)) return !1;
                    M(o, (function(e) {
                        e.count = Math.min(e.count + 1, v.M3);
                        e.mostRecentRawMessage = t;
                        e.mostRecentMessage = null
                    }))
                },
                MESSAGE_UPDATE: function(e) {
                    var t, n = e.message,
                        r = A[n.channel_id],
                        i = null !== (t = null == r ? void 0 : r.mostRecentRawMessage) && void 0 !== t ? t : null == r ? void 0 : r.mostRecentMessage;
                    if (null == r || null == i || i.id !== n.id) return !1;
                    C(r, (function(e) {
                        null != e.mostRecentMessage && (e.mostRecentMessage = (0, a.wi)(e.mostRecentMessage, n));
                        null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, a.gx)(e.mostRecentRawMessage, n))
                    }))
                },
                MESSAGE_DELETE: function(e) {
                    var t = e.id,
                        n = e.channelId,
                        r = A[n];
                    if (null == r) return !1;
                    var i = n !== t,
                        o = !I.has(t);
                    C(r, (function(e) {
                        var n, r = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                        if (null != r && r.id === t) {
                            e.mostRecentMessage = null;
                            e.mostRecentRawMessage = null
                        }
                        e.count = i && o ? Math.max(e.count - 1, 0) : e.count;
                        I.add(t)
                    }))
                },
                MESSAGE_DELETE_BULK: function(e) {
                    var t = e.ids,
                        n = e.channelId,
                        r = A[n];
                    if (null == r) return !1;
                    var i = t.filter((function(e) {
                        var t = n !== e,
                            r = !I.has(e);
                        return t && r
                    })).length;
                    i > 0 && C(r, (function(e) {
                        var n, r = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
                        if (null != r && t.includes(r.id)) {
                            e.mostRecentMessage = null;
                            e.mostRecentRawMessage = null
                        }
                        e.count -= i;
                        t.forEach((function(e) {
                            return I.add(e)
                        }))
                    }))
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    var t = !1,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = e.messages[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            t = D(o.value.thread) || t
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
                    var l = d.Z.getChannel(e.channelId);
                    if (null == l || !c.Ec.has(l.type)) return t;
                    M(l, (function(t) {
                        if (0 === e.messages.length) {
                            t.mostRecentRawMessage = null;
                            t.mostRecentMessage = null;
                            t.count = 0
                        } else {
                            var n, r = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
                            t.count = e.messages.length >= v.M3 ? v.M3 : t.count;
                            if ((null == r ? void 0 : r.type) !== p.uaV.THREAD_STARTER_MESSAGE) {
                                t.mostRecentRawMessage = r;
                                t.mostRecentMessage = null
                            }
                        }
                    }))
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t = e.data,
                        n = !1,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, a = (0, l.J)(t)[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            n = D(u.value) || n
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
                    return n
                }
            })
        },
        325213: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(202351),
                i = n(744564),
                o = n(121534),
                u = n(968449),
                l = n(473419),
                a = n(761814);

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t, n) {
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

            function E(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e, t) {
                v = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return v(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var g, _, y, O = {
                    applicationId: null,
                    originURL: null
                },
                m = O,
                R = new Set,
                S = !1;

            function T() {
                y = null
            }

            function I() {
                g = null;
                _ = null;
                R = new Set;
                m.applicationId = null;
                m.originURL = null;
                T()
            }
            var A = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && v(e, t)
                }(n, e);
                var t = h(n);

                function n() {
                    c(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    m = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                f(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, null != e ? e : O);
                    g = m.applicationId;
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
                    return g === e
                };
                r.inTestModeForEmbeddedApplication = function(e) {
                    return g === e && null != _
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
                r.__getLocalVars = function() {
                    return {
                        initialState: O,
                        state: m,
                        testModeApplicationId: g,
                        testModeOriginURL: _,
                        fetchingAuthorizations: R,
                        authorizationError: y,
                        initialized: S
                    }
                };
                ! function(e, t, n) {
                    t && s(e.prototype, t);
                    n && s(e, n)
                }(n, [{
                    key: "isTestMode",
                    get: function() {
                        return null != g
                    }
                }, {
                    key: "isFetchingAuthorization",
                    get: function() {
                        return R.size > 0
                    }
                }, {
                    key: "testModeEmbeddedApplicationId",
                    get: function() {
                        return null != _ ? g : null
                    }
                }, {
                    key: "testModeApplicationId",
                    get: function() {
                        return g
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
                return n
            }(r.ZP.PersistedStore);
            A.displayName = "TestModeStore";
            A.persistKey = "TestModeStore";
            const b = new A(i.Z, {
                DEVELOPER_TEST_MODE_AUTHORIZATION_START: function(e) {
                    var t = e.applicationId;
                    R.add(t);
                    y = null
                },
                DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function(e) {
                    var t = e.applicationId,
                        n = e.originURL;
                    g = t;
                    _ = n;
                    R.delete(t);
                    y = null;
                    m.applicationId = t;
                    m.originURL = n
                },
                DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function(e) {
                    var t = e.applicationId,
                        n = e.error;
                    R.delete(t);
                    y = n
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.testModeApplicationId;
                    g = t
                },
                DEVELOPER_TEST_MODE_RESET_ERROR: T,
                LOGOUT: I,
                DEVELOPER_TEST_MODE_RESET: I
            })
        },
        176758: (e, t, n) => {
            n.d(t, {
                a5: () => D,
                c4: () => L,
                g7: () => N,
                EO: () => Z,
                wR: () => U,
                wl: () => P,
                rY: () => C,
                rX: () => b,
                jZ: () => A,
                rt: () => M,
                oQ: () => I,
                LY: () => w,
                Nj: () => o
            });
            var r = n(940060),
                i = n(73904);

            function o(e) {
                return e.replace(/[\s-~]+/g, "-").replace(/^-+/, "").replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").toLowerCase()
            }
            var u = n(913302),
                l = n(970286),
                a = n(525261),
                c = n(382060),
                s = n(61209),
                f = n(5544),
                d = n(682776),
                E = n(715107),
                v = n(602397),
                p = n(563135),
                h = n(2590),
                g = n(203600),
                _ = n(473708),
                y = h.d4z.GUILD_VOICE,
                O = h.d4z.GUILD_CATEGORY,
                m = h.d4z.GUILD_STAGE_VOICE;

            function R(e, t) {
                return e === t || e === O
            }

            function S(e, t, n) {
                var i = p.ZP.NONE;
                ((0, c.r8)(t) || t === O) && (i = r.Z.add(i, h.Plq.VIEW_CHANNEL));
                if (R(t, y)) {
                    i = r.Z.add(i, h.Plq.VIEW_CHANNEL);
                    i = r.Z.add(i, h.Plq.CONNECT)
                }
                return {
                    id: e,
                    type: n,
                    allow: p.ZP.NONE,
                    deny: i
                }
            }

            function T(e, t, n) {
                var i = p.ZP.NONE;
                ((0, c.r8)(t) || t === O) && (i = r.Z.add(i, h.Plq.VIEW_CHANNEL));
                if (R(t, y) || R(t, m)) {
                    i = r.Z.add(i, h.Plq.VIEW_CHANNEL);
                    i = r.Z.add(i, h.Plq.CONNECT)
                }
                return {
                    id: e,
                    type: n,
                    deny: p.ZP.NONE,
                    allow: i
                }
            }

            function I(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = [];
                (n.length > 0 || r) && o.push(S(e, t, i.BN.ROLE));
                n.forEach((function(e) {
                    o.push(T(e, t, i.BN.ROLE))
                }));
                return o
            }

            function A(e, t) {
                return T(e, t, i.BN.MEMBER)
            }

            function b(e, t) {
                return T(e, t, i.BN.ROLE)
            }

            function M(e) {
                return [{
                    id: e,
                    type: i.BN.ROLE,
                    deny: h.Plq.SEND_MESSAGES,
                    allow: p.ZP.NONE
                }]
            }

            function C(e, t, n) {
                var r, i, o = e.getGuildId(),
                    l = n.getGuild(o),
                    a = null !== (r = null == l ? void 0 : l.maxVideoChannelUsers) && void 0 !== r ? r : -1,
                    c = null !== (i = null == l ? void 0 : l.maxStageVideoChannelUsers) && void 0 !== i ? i : -1,
                    s = v.ZP.countVoiceStatesForChannel(e.id),
                    f = v.ZP.getVoiceStatesForChannel(e),
                    E = d.Z.can(h.Plq.MOVE_MEMBERS, e) && d.Z.can(h.Plq.CONNECT, e),
                    p = !1;
                p = e.type === m ? null != o && (t.hasVideo(e.id) || (0, u.a)(f)) && c > 0 && s >= c : null != o && t.hasVideo(e.id) && a > 0 && s >= a + (E ? 1 : 0);
                var g = e.userLimit > 0 && s >= e.userLimit;
                return p || g && !E
            }

            function N(e, t) {
                return t.isGuildStageVoice() ? h.epw : null == e ? h.eWB : Math.max(e.hasFeature(h.oNc.VIP_REGIONS) ? g.HO[h.Eu4.TIER_3].limits.bitrate : h.eWB, g.HO[e.premiumTier].limits.bitrate)
            }

            function L(e) {
                var t = function(e) {
                    var t = e.channels,
                        n = e.selectedChannelId,
                        r = e.selectedVoiceChannelId,
                        i = e.voiceStates,
                        o = [];
                    t.forEach((function(e) {
                        if (e.id !== r && e.id !== n) {
                            var t = i[e.id];
                            null != t && (e.isGuildStageVoice() ? t.forEach((function(e) {
                                (0, a.gf)(e.voiceState) === a.xO.ON_STAGE && o.push(e)
                            })) : t.forEach((function(e) {
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
                return t.map((function(e) {
                    return e.user
                }))
            }

            function D(e) {
                switch (e.type) {
                    case h.d4z.DM:
                        return _.Z.Messages.DM;
                    case h.d4z.GROUP_DM:
                        return _.Z.Messages.GROUP_DM;
                    case h.d4z.GUILD_TEXT:
                        return _.Z.Messages.TEXT_CHANNEL;
                    case h.d4z.GUILD_FORUM:
                        return _.Z.Messages.FORUM_CHANNEL;
                    case h.d4z.GUILD_MEDIA:
                        return _.Z.Messages.MEDIA_CHANNEL;
                    case h.d4z.GUILD_VOICE:
                        return _.Z.Messages.VOICE_CHANNEL;
                    case h.d4z.GUILD_STAGE_VOICE:
                        return _.Z.Messages.STAGE_CHANNEL;
                    case h.d4z.GUILD_ANNOUNCEMENT:
                        return _.Z.Messages.NEWS_CHANNEL;
                    case h.d4z.GUILD_STORE:
                        return _.Z.Messages.STORE_CHANNEL;
                    case h.d4z.GUILD_CATEGORY:
                        return _.Z.Messages.CATEGORY;
                    default:
                        return null
                }
            }

            function P(e) {
                if (null == e) return "text";
                var t = e.isMediaChannel();
                return e.type === h.d4z.GUILD_VOICE ? d.Z.can(h.Plq.CONNECT, e) ? "voice" : "voice-locked" : e.type === h.d4z.GUILD_STAGE_VOICE ? d.Z.can(h.Plq.CONNECT, e) ? "stage" : "stage-locked" : c.Ec.has(e.type) ? e.isForumPost() ? "post" : "thread" : e.type === h.d4z.GUILD_FORUM ? t ? "media" : "forum" : e.type === h.d4z.GUILD_MEDIA ? "media" : c.sR.has(e.type) ? "text" : void 0
            }

            function w(e) {
                var t, n = s.Z.getChannel(E.Z.getLastSelectedChannelId());
                if (null != n && n.getGuildId() === e && n.type === h.d4z.GUILD_TEXT) t = n.id;
                else {
                    var r = f.ZP.getDefaultChannel(e);
                    t = null != r ? r.id : null
                }
                return h.Z5c.CHANNEL(e, t)
            }

            function U(e, t, n, r) {
                var i = null == r ? "" : "?summaryId=".concat(r);
                return "".concat(location.protocol, "//").concat(location.host).concat(h.Z5c.CHANNEL(e, t, n)).concat(i)
            }

            function Z(e, t, n, r) {
                var i = e.getGuildId(),
                    o = (0, l.BC)(i, t);
                return null != t && o ? function(e, t, n, r) {
                    return null == e || null == t || null == n ? U(e, t, r) : "".concat(location.protocol, "//").concat(location.host).concat(h.Z5c.CHANNEL_THREAD_VIEW(e, t, n, r))
                }(i, t.id, e.id, e.id) : null != r ? r : U(i, e.id, n)
            }
        },
        773148: (e, t, n) => {
            n.d(t, {
                ZP: () => f
            });
            var r = n(202351),
                i = n(61209),
                o = n(21372),
                u = n(840922),
                l = n(749565),
                a = n(473708);

            function c(e, t, n) {
                if (null == n) return null;
                if (null != e) return o.ZP.getNick(e, n.id);
                if (null != t) {
                    var r = i.Z.getChannel(t);
                    if (null == r ? void 0 : r.isPrivate()) return u.Z.getNickname(n.id)
                }
                return null
            }

            function s(e, t, n) {
                return null == n ? a.Z.Messages.UNKNOWN_USER : null !== (r = c(e, t, n)) && void 0 !== r ? r : l.ZP.getName(n);
                var r
            }
            const f = {
                getNickname: c,
                getName: s,
                useName: function(e, t, n) {
                    return (0, r.e7)([o.ZP, i.Z, u.Z], (function() {
                        return s(e, t, n)
                    }))
                }
            }
        }
    }
]);
//# sourceMappingURL=c5314f0c30f0a536f9b9.js.map