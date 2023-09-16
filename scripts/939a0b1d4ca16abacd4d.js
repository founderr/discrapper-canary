"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [45353], {
        747864: (t, e, n) => {
            n.d(e, {
                Z: () => m
            });
            var i = n(496486),
                r = n.n(i),
                o = n(730381),
                u = n.n(o);

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1;
                    i.configurable = !0;
                    "value" in i && (i.writable = !0);
                    Object.defineProperty(t, i.key, i)
                }
            }

            function s(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function c(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        e && (i = i.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, i)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function d(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var i, r, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (i = n.next()).done); u = !0) {
                                o.push(i.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            r = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return a(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function() {
                function t(e) {
                    var n = e.computeBonus,
                        i = e.computeWeight,
                        r = e.lookupKey,
                        o = e.afterCompute,
                        u = e.numFrequentlyItems,
                        a = void 0 === u ? 32 : u,
                        l = e.maxSamples,
                        s = void 0 === l ? 10 : l;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this.computeBonus = n;
                    this.computeWeight = i;
                    this.afterCompute = o;
                    this.lookupKey = r;
                    this.usageHistory = {};
                    this.frequently = [];
                    this.maxSamples = s;
                    this.numFrequentlyItems = a;
                    this.dirty = !1
                }
                var e = t.prototype;
                e.overwriteHistory = function(t, e) {
                    var n = this;
                    this.usageHistory = r().mapValues(null != t ? t : {}, (function(t) {
                        return c(function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                                }))));
                                i.forEach((function(e) {
                                    s(t, e, n[e])
                                }))
                            }
                            return t
                        }({}, t), {
                            frecency: -1
                        })
                    }));
                    null == e || e.forEach((function(t) {
                        var e = t.key,
                            i = t.timestamp;
                        return n.track(e, i)
                    }));
                    this.markDirty()
                };
                e.markDirty = function() {
                    this.dirty = !0
                };
                e.isDirty = function() {
                    return this.dirty
                };
                e.track = function(t, e) {
                    if (null != t) {
                        var n = Object.prototype.hasOwnProperty.call(this.usageHistory, t) ? this.usageHistory[t] : void 0;
                        if (null == n) n = {
                            totalUses: 1,
                            recentUses: [null != e ? e : Date.now()],
                            frecency: -1,
                            score: 0
                        };
                        else {
                            n.frecency = -1;
                            n.totalUses += 1;
                            if (null == e) n.recentUses.push(Date.now());
                            else {
                                n.recentUses.push(e);
                                n.recentUses.sort()
                            }
                            for (; n.recentUses.length > this.maxSamples;) n.recentUses.shift()
                        }
                        this.usageHistory[t] = n;
                        this.markDirty()
                    }
                };
                e.getEntry = function(t) {
                    if (null == t) return null;
                    this.dirty && this.compute();
                    return Object.prototype.hasOwnProperty.call(this.usageHistory, t) ? this.usageHistory[t] : void 0
                };
                e.getScore = function(t) {
                    var e = this.getEntry(t);
                    return null != e ? e.score : null
                };
                e.getFrecency = function(t) {
                    var e = this.getEntry(t);
                    return null != e ? e.frecency : null
                };
                e.compute = function() {
                    var t = this,
                        e = u()();
                    r().forEach(this.usageHistory, (function(n, i) {
                        var o = n.totalUses,
                            a = n.recentUses;
                        if (-1 === n.frecency) {
                            var l = t.computeBonus(i) / 100;
                            n.score = 0;
                            r().forEach(a, (function(i, r) {
                                if (r >= t.maxSamples) return !1;
                                var o = t.computeWeight(e.diff(u()(i), "days"));
                                n.score += l * o
                            }));
                            if (n.score > 0) {
                                n.recentUses.length > 0 && (n.frecency = Math.ceil(o * (n.score / a.length)));
                                t.usageHistory[i] = n
                            } else delete t.usageHistory[i]
                        }
                    }));
                    this.frequently = r()(this.usageHistory).map((function(e, n) {
                        var i = t.lookupKey(n);
                        return null == i ? null : [i, e.frecency]
                    })).filter((function(t) {
                        return null !== t
                    })).sortBy((function(t) {
                        var e = d(t, 2);
                        e[0];
                        return -e[1]
                    })).map((function(t) {
                        return d(t, 1)[0]
                    })).take(this.numFrequentlyItems).value();
                    this.dirty = !1;
                    this.afterCompute(this.usageHistory, this._frequently)
                };
                ! function(t, e, n) {
                    e && l(t.prototype, e);
                    n && l(t, n)
                }(t, [{
                    key: "frequently",
                    get: function() {
                        this.dirty && this.compute();
                        return this._frequently
                    },
                    set: function(t) {
                        this._frequently = t
                    }
                }]);
                return t
            }();
            const m = f
        },
        936957: (t, e, n) => {
            n.d(e, {
                En: () => i,
                Vr: () => a,
                UX: () => r,
                t0: () => o,
                c: () => s,
                Su: () => l,
                cZ: () => d,
                td: () => f,
                gV: () => m,
                Hr: () => h,
                mW: () => y,
                Qt: () => p,
                wQ: () => g,
                pc: () => c,
                vO: () => E,
                _3: () => v,
                kV: () => j,
                N6: () => b
            });
            var i;
            ! function(t) {
                t.GUILD = "GUILD";
                t.PACK = "PACK";
                t.UNICODE = "UNICODE";
                t.RECENT = "RECENT";
                t.CUSTOM = "CUSTOM";
                t.SEARCH_RESULTS = "SEARCH_RESULTS";
                t.FAVORITES = "FAVORITES";
                t.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI";
                t.PREMIUM_UPSELL = "PREMIUM_UPSELL"
            }(i || (i = {}));
            var r, o, u, a = "emoji-picker-grid";
            ! function(t) {
                t.RECENT = "recent";
                t.FAVORITES = "favorites";
                t.TOP_GUILD_EMOJI = "top guild emoji";
                t.CUSTOM = "custom";
                t.PEOPLE = "people";
                t.NATURE = "nature";
                t.FOOD = "food";
                t.ACTIVITY = "activity";
                t.TRAVEL = "travel";
                t.OBJECTS = "objects";
                t.SYMBOLS = "symbols";
                t.FLAGS = "flags";
                t.PREMIUM_UPSELL = "premium emoji"
            }(r || (r = {}));
            ! function(t) {
                t.NONE = "";
                t.TOP_GUILD_EMOJI = "top_server";
                t.NEWLY_ADDED_EMOJI = "newly_added"
            }(o || (o = {}));
            ! function(t) {
                t[t.EMOJI = 0] = "EMOJI";
                t[t.NSFW = 1] = "NSFW"
            }(u || (u = {}));
            var l, s = -1;
            ! function(t) {
                t[t.MEDIUM = 40] = "MEDIUM";
                t[t.LARGE = 48] = "LARGE"
            }(l || (l = {}));
            var c, d = "emoji-picker-tab-panel",
                f = "emoji-picker-tab",
                m = "soundboard-picker-tab-panel",
                h = "soundboard-picker-tab",
                y = "reaction-picker-tab-panel",
                p = "reaction-picker-tab",
                g = "super-reaction-picker-tab";
            ! function(t) {
                t.TOOLTIP = "tooltip"
            }(c || (c = {}));
            var E = "gif-picker-tab-panel",
                v = "gif-picker-tab",
                j = {
                    reaction: 32,
                    default: 44,
                    jumbo: 96
                },
                b = 9
        },
        230343: (t, e, n) => {
            n.d(e, {
                Y: () => u,
                R: () => a
            });
            var i = n(260561);
            const r = (0, i.B)({
                kind: "user",
                id: "2022-09_emoji_ecosystem_holdout",
                label: "Emoji Ecosystem Holdout Experiment",
                defaultConfig: {
                    inEmojiHoldout: !1
                },
                treatments: [{
                    id: 1,
                    label: "In the Emoji Ecosystem Holdout",
                    config: {
                        inEmojiHoldout: !0
                    }
                }]
            });
            var o = (0, i.B)({
                    kind: "user",
                    id: "2022-09_emoji_picker_discovery",
                    label: "Emoji Picker Improved Discovery",
                    defaultConfig: {
                        shouldSeeBiggerPicker: !1,
                        shouldSeeTopEmojiBar: !1,
                        shouldSeeNewlyAddedEmoji: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Bigger Picker",
                        config: {
                            shouldSeeBiggerPicker: !0,
                            shouldSeeTopEmojiBar: !1,
                            shouldSeeNewlyAddedEmoji: !1
                        }
                    }, {
                        id: 2,
                        label: "Bigger Picker + Popular Server Emojis",
                        config: {
                            shouldSeeBiggerPicker: !0,
                            shouldSeeTopEmojiBar: !0,
                            shouldSeeNewlyAddedEmoji: !1
                        }
                    }, {
                        id: 3,
                        label: "Bigger Picker + Newly Added Emojis",
                        config: {
                            shouldSeeBiggerPicker: !0,
                            shouldSeeTopEmojiBar: !0,
                            shouldSeeNewlyAddedEmoji: !0
                        }
                    }]
                }),
                u = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = r.getCurrentConfig({
                            location: "e1b056_1"
                        }, {
                            autoTrackExposure: t
                        }).inEmojiHoldout,
                        n = !e,
                        i = o.getCurrentConfig({
                            location: "e1b056_2"
                        }, {
                            autoTrackExposure: n && t
                        }),
                        u = i.shouldSeeBiggerPicker,
                        a = i.shouldSeeNewlyAddedEmoji,
                        l = i.shouldSeeTopEmojiBar;
                    return {
                        shouldSeeBiggerPicker: n && u,
                        shouldSeeNewlyAddedEmoji: n && a,
                        shouldSeeTopEmojiBar: n && l
                    }
                },
                a = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = r.useExperiment({
                            location: "e1b056_3"
                        }, {
                            autoTrackExposure: t
                        }).inEmojiHoldout,
                        n = !e,
                        i = o.useExperiment({
                            location: "e1b056_4"
                        }, {
                            autoTrackExposure: n && t
                        }),
                        u = i.shouldSeeBiggerPicker,
                        a = i.shouldSeeNewlyAddedEmoji,
                        l = i.shouldSeeTopEmojiBar;
                    return {
                        shouldSeeBiggerPicker: n && u,
                        shouldSeeNewlyAddedEmoji: n && a,
                        shouldSeeTopEmojiBar: n && l
                    }
                }
        },
        960675: (t, e, n) => {
            n.d(e, {
                B: () => i
            });
            var i = {
                bg: function() {
                    return n.e(29197).then(n.t.bind(n, 429197, 19))
                },
                cs: function() {
                    return n.e(43929).then(n.t.bind(n, 143929, 19))
                },
                da: function() {
                    return n.e(74780).then(n.t.bind(n, 174780, 19))
                },
                de: function() {
                    return n.e(56890).then(n.t.bind(n, 756890, 19))
                },
                el: function() {
                    return n.e(17410).then(n.t.bind(n, 944340, 19))
                },
                "en-US": function() {
                    return n.e(99549).then(n.t.bind(n, 399549, 19))
                },
                "es-ES": function() {
                    return n.e(12141).then(n.t.bind(n, 212141, 19))
                },
                fi: function() {
                    return n.e(10504).then(n.t.bind(n, 410504, 19))
                },
                fr: function() {
                    return n.e(87319).then(n.t.bind(n, 287319, 19))
                },
                hr: function() {
                    return n.e(75864).then(n.t.bind(n, 175864, 19))
                },
                hu: function() {
                    return n.e(51463).then(n.t.bind(n, 951463, 19))
                },
                it: function() {
                    return n.e(30402).then(n.t.bind(n, 330402, 19))
                },
                ja: function() {
                    return n.e(80284).then(n.t.bind(n, 180284, 19))
                },
                ko: function() {
                    return n.e(10648).then(n.t.bind(n, 410648, 19))
                },
                lt: function() {
                    return n.e(31500).then(n.t.bind(n, 31500, 19))
                },
                nl: function() {
                    return n.e(4767).then(n.t.bind(n, 204767, 19))
                },
                no: function() {
                    return n.e(1613).then(n.t.bind(n, 201613, 19))
                },
                pl: function() {
                    return n.e(47722).then(n.t.bind(n, 347722, 19))
                },
                "pt-BR": function() {
                    return n.e(82938).then(n.t.bind(n, 682938, 19))
                },
                ro: function() {
                    return n.e(74488).then(n.t.bind(n, 74488, 19))
                },
                ru: function() {
                    return n.e(14203).then(n.t.bind(n, 614203, 19))
                },
                "sv-SE": function() {
                    return n.e(86335).then(n.t.bind(n, 586335, 19))
                },
                th: function() {
                    return n.e(59278).then(n.t.bind(n, 259278, 19))
                },
                tr: function() {
                    return n.e(63634).then(n.t.bind(n, 863634, 19))
                },
                uk: function() {
                    return n.e(59847).then(n.t.bind(n, 459847, 19))
                },
                vi: function() {
                    return n.e(54143).then(n.t.bind(n, 354143, 19))
                },
                "zh-CN": function() {
                    return n.e(31480).then(n.t.bind(n, 831480, 19))
                },
                "zh-TW": function() {
                    return Promise.resolve({})
                },
                hi: function() {
                    return n.e(9355).then(n.t.bind(n, 809355, 19))
                }
            }
        },
        245353: (t, e, n) => {
            n.d(e, {
                Z: () => Ct
            });
            var i = n(496486),
                r = n.n(i),
                o = n(730381),
                u = n.n(o),
                a = n(17916),
                l = n(202351),
                s = n(744564),
                c = n(747864),
                d = n(247075),
                f = n(114643);
            var m = new(n(296602).Z)("GuildEmojis");
            const h = new(function() {
                function t() {
                    var e = this;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this.actions = {
                        BACKGROUND_SYNC: function(t, n) {
                            return e.handleBackgroundSync(t, n)
                        },
                        CLEAR_GUILD_CACHE: function(t, n) {
                            return e.handleClearGuildCache(n)
                        },
                        CONNECTION_OPEN: function(t, n) {
                            return e.handleConnectionOpen(t, n)
                        },
                        GUILD_CREATE: function(t, n) {
                            return e.handleGuildCreate(t, n)
                        },
                        GUILD_DELETE: function(t, n) {
                            return e.handleGuildDelete(t, n)
                        },
                        GUILD_EMOJIS_UPDATE: function(t, n) {
                            return e.handleGuildEmojisUpdate(t, n)
                        },
                        GUILD_UPDATE: function(t, n) {
                            return e.handleGuildUpdate(t, n)
                        }
                    }
                }
                var e = t.prototype;
                e.getSync = function(t) {
                    var e = performance.now(),
                        n = d.Z.emojis(t).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    m.log("synchronously loaded in ".concat(i - e, "ms (guilds: ").concat(n.length, ")"));
                    return n
                };
                e.handleConnectionOpen = function(t, e) {
                    var n = !0,
                        i = !1,
                        r = void 0;
                    try {
                        for (var o, u = t.guilds[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value;
                            this.handleOneGuildCreate(a, e)
                        }
                    } catch (t) {
                        i = !0;
                        r = t
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                };
                e.handleGuildCreate = function(t, e) {
                    this.handleOneGuildCreate(t.guild, e)
                };
                e.handleGuildUpdate = function(t, e) {
                    this.replace(t.guild.id, t.guild.emojis, e)
                };
                e.handleGuildDelete = function(t, e) {
                    this.delete(t.guild.id, e)
                };
                e.handleGuildEmojisUpdate = function(t, e) {
                    this.replace(t.guildId, t.emojis, e)
                };
                e.handleBackgroundSync = function(t, e) {
                    var n = this;
                    t.promisesForBackgroundSyncToWaitOn.push(Promise.all(t.emojis.map((function(t) {
                        if ("unavailable" === t.dataMode) return Promise.resolve();
                        if ("full" === t.dataMode) {
                            m.log("Replacing ".concat(t.entities.length, " emojis for ").concat(t.guildId));
                            n.replace(t.guildId, t.entities, e)
                        } else if (t.updatedEntities.length > 0 || t.deletedEntityIds.length > 0) {
                            m.log("Updating ".concat(t.updatedEntities.length, " and deleting ").concat(t.deletedEntityIds.length, " emojis for ").concat(t.guildId));
                            n.update(t.guildId, t.updatedEntities, t.deletedEntityIds, e)
                        }
                    }))))
                };
                e.handleOneGuildCreate = function(t, e) {
                    null != t.emojiUpdates ? this.update(t.id, t.emojiUpdates.writes, t.emojiUpdates.deletes, e) : null != t.emojis && this.replace(t.id, t.emojis, e)
                };
                e.handleClearGuildCache = function(t) {
                    this.clear(t)
                };
                e.handleReset = function() {};
                e.replace = function(t, e, n) {
                    d.Z.emojisTransaction(n).replaceAll(t, e)
                };
                e.delete = function(t, e) {
                    d.Z.emojisTransaction(e).delete(t)
                };
                e.clear = function(t) {
                    d.Z.emojisTransaction(t).delete()
                };
                e.update = function(t, e, n, i) {
                    var r = d.Z.emojisTransaction(i);
                    r.putAll(t, e);
                    var o = !0,
                        u = !1,
                        a = void 0;
                    try {
                        for (var l, s = n[Symbol.iterator](); !(o = (l = s.next()).done); o = !0) {
                            var c = l.value;
                            r.delete(t, c)
                        }
                    } catch (t) {
                        u = !0;
                        a = t
                    } finally {
                        try {
                            o || null == s.return || s.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                };
                return t
            }());
            var y = n(230343);
            var p = new(function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    this.loading = !1;
                    this.loaded = !1;
                    this.loader = e
                }
                var e = t.prototype;
                e.setParams = function(t) {
                    if (this.param !== t) {
                        this.param = t;
                        this.loading = !1;
                        this.loaded = !1
                    }
                };
                e.get = function() {
                    this.ensureLoaded();
                    return this.val
                };
                e.ensureLoaded = function() {
                    var t = this;
                    if (!this.loaded && !this.loading && void 0 !== this.param) {
                        var e = this.param;
                        this.loading = !0;
                        this.loader(e).then((function(n) {
                            if (e === t.param) {
                                t.val = n;
                                t.loading = !1;
                                t.loaded = !0
                            }
                        }))
                    }
                };
                return t
            }())((function(t) {
                var e = n(960675).B[t];
                return void 0 !== e ? e() : Promise.resolve({});
                return Promise.resolve({})
            }));
            const g = {
                setEmojiLocale: function(t) {
                    p.setParams(t)
                },
                getTermsForEmoji: function(t) {
                    var e = p.get();
                    return void 0 !== e ? e[t] : []
                }
            };
            var E = n(396580),
                v = n(104627),
                j = n(11879),
                b = (n(667294), n(318715), n(567403)),
                O = n(120415);
            var S = n(2590);
            S.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
            var _ = n(690296),
                I = n(384411),
                w = n(473419),
                P = n(21372),
                T = n(695895),
                C = n(107218),
                k = n(473903),
                U = n(775173),
                N = n(38004),
                A = n(72580),
                B = n(968696),
                D = n(102921),
                R = n(420881),
                L = n(135855),
                F = n(37763),
                G = n(213424),
                M = n(936957),
                Z = n(131559);

            function x(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }

            function H(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function V(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1;
                    i.configurable = !0;
                    "value" in i && (i.writable = !0);
                    Object.defineProperty(t, i.key, i)
                }
            }

            function W(t, e, n) {
                e && V(t.prototype, e);
                n && V(t, n);
                return t
            }

            function q(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function Y(t) {
                Y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return Y(t)
            }

            function K(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    i.forEach((function(e) {
                        q(t, e, n[e])
                    }))
                }
                return t
            }

            function J(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        e && (i = i.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, i)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function z(t, e) {
                return !e || "object" !== tt(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function X(t, e) {
                X = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return X(t, e)
            }

            function $(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var i, r, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (i = n.next()).done); u = !0) {
                                o.push(i.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            r = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return x(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Q(t) {
                throw t
            }
            var tt = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function et(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = Y(t);
                    if (e) {
                        var r = Y(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return z(this, n)
                }
            }
            var nt, it = [M.UX.TOP_GUILD_EMOJI.toString(), M.UX.FAVORITES.toString(), M.UX.RECENT.toString(), M.UX.CUSTOM.toString()].concat(L.ZP.getCategories()),
                rt = {
                    pendingUsages: []
                },
                ot = function() {
                    function t(e, n, i) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        H(this, t);
                        this._dirty = !0;
                        this._emojiMap = {};
                        this._emoticons = [];
                        this._usableEmojis = [];
                        this._canSeeServerSubIAP = !1;
                        this._totalUsable = 0;
                        this.id = e;
                        this._userId = n;
                        this._emojis = i;
                        this._canSeeServerSubIAP = r
                    }
                    var e = t.prototype;
                    e.getEmoji = function(t) {
                        this.build();
                        return this._emojiMap[t]
                    };
                    e.getUsableEmoji = function(t) {
                        var e = this.getEmoji(t);
                        return null != e && this.isUsable(e) ? e : null
                    };
                    e.isUsable = function(t) {
                        if (0 === t.roles.length) return !0;
                        var e = P.ZP.getMember(this.id, this._userId);
                        if (null == e) return !1;
                        if (e.roles.some((function(e) {
                                return t.roles.includes(e)
                            }))) return !0;
                        if ((0, v.yH)(t)) {
                            0;
                            return !0
                        }
                        return !1
                    };
                    e.build = function() {
                        var t = this;
                        if (this._dirty) {
                            this._dirty = !1;
                            this._emojis.forEach((function(e) {
                                e.url = U.ZP.getEmojiURL({
                                    id: e.id,
                                    animated: e.animated,
                                    size: 48
                                });
                                e.allNamesString = ":".concat(e.name, ":");
                                e.guildId = t.id;
                                e.type = R.B.GUILD;
                                t._emojiMap[e.id] = e
                            }));
                            this._usableEmojis = r().sortBy(this._emojis.filter((function(e) {
                                return t.isUsable(e)
                            })), (function(t) {
                                return t.name
                            }));
                            this._emoticons = this._usableEmojis.filter((function(t) {
                                return !t.require_colons
                            }))
                        }
                    };
                    W(t, [{
                        key: "rawEmojis",
                        get: function() {
                            return this._emojis
                        }
                    }, {
                        key: "emojis",
                        get: function() {
                            this.build();
                            return this._emojis
                        }
                    }, {
                        key: "emoticons",
                        get: function() {
                            this.build();
                            return this._emoticons
                        }
                    }, {
                        key: "usableEmojis",
                        get: function() {
                            this.build();
                            return this._usableEmojis
                        }
                    }]);
                    return t
                }(),
                ut = D.Z.fromTimestamp(Date.now() - 5184e6),
                at = [];
            ! function(t) {
                t[t.Unloaded = 0] = "Unloaded";
                t[t.MaybeLoaded = 1] = "MaybeLoaded";
                t[t.Loaded = 2] = "Loaded"
            }(nt || (nt = {}));
            var lt = 2,
                st = it.slice(0),
                ct = {},
                dt = new Map,
                ft = {},
                mt = new Map;

            function ht(t) {
                var e, n, i, r = yt()[t];
                return null != r ? null !== (i = null === (e = ct[r]) || void 0 === e ? void 0 : e.getUsableEmoji(t)) && void 0 !== i ? i : null === (n = dt.get(r)) || void 0 === n ? void 0 : n.emojiById[t] : null
            }

            function yt() {
                pt();
                if (null == ft) {
                    ft = {};
                    for (var t in ct) {
                        var e = ct[t],
                            n = !0,
                            i = !1,
                            r = void 0;
                        try {
                            for (var o, u = e.rawEmojis[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                                var a = o.value;
                                ft[a.id] = t
                            }
                        } catch (t) {
                            i = !0;
                            r = t
                        } finally {
                            try {
                                n || null == u.return || u.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                    }
                    var l = !0,
                        s = !1,
                        c = void 0;
                    try {
                        for (var d, f = dt[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                            var m, h = $(d.value, 2),
                                y = h[0],
                                p = h[1],
                                g = !0,
                                E = !1,
                                v = void 0;
                            try {
                                for (var j, b = (null !== (m = null == p ? void 0 : p.content.emojis) && void 0 !== m ? m : [])[Symbol.iterator](); !(g = (j = b.next()).done); g = !0) {
                                    var O = j.value;
                                    ft[O.id] = y
                                }
                            } catch (t) {
                                E = !0;
                                v = t
                            } finally {
                                try {
                                    g || null == b.return || b.return()
                                } finally {
                                    if (E) throw v
                                }
                            }
                        }
                    } catch (t) {
                        s = !0;
                        c = t
                    } finally {
                        try {
                            l || null == f.return || f.return()
                        } finally {
                            if (s) throw c
                        }
                    }
                }
                return ft
            }

            function pt() {
                if (0 === lt) {
                    var t = d.Z.database();
                    if (null != t) {
                        lt = 2;
                        var e = (0, f.Pv)("EmojiStore.loadSavedEmojis", (function() {
                            return a.Z.time("💾", "loadSavedEmojis", (function() {
                                return h.getSync(t)
                            }))
                        }));
                        if (null != e) {
                            var n = !0,
                                i = !1,
                                r = void 0;
                            try {
                                for (var o, u = e[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                                    var l = $(o.value, 2),
                                        s = l[0],
                                        c = l[1];
                                    !Object.hasOwn(ct, s) && T.Z.isMember(s) && St(s, c)
                                }
                            } catch (t) {
                                i = !0;
                                r = t
                            } finally {
                                try {
                                    n || null == u.return || u.return()
                                } finally {
                                    if (i) throw r
                                }
                            }
                            Ot()
                        }
                    }
                }
            }
            var gt, Et = function() {
                function t(e) {
                    var n = this;
                    H(this, t);
                    this.emoticonRegex = null;
                    this.frequentlyUsed = null;
                    this.favorites = null;
                    this.favoriteNamesAndIds = null;
                    this.topEmojis = null;
                    this.escapedEmoticonNames = null;
                    this.disambiguatedEmoji = null;
                    this.newlyAddedEmoji = null;
                    this.backfillTopEmojis = {};
                    this.isFavoriteEmojiWithoutFetchingLatest = function(t) {
                        if (null == t) return !1;
                        var e, i = n.rebuildFavoriteEmojisWithoutFetchingLatest()[1];
                        return null != t.id ? i.has(t.id) : i.has(null !== (e = t.name) && void 0 !== e ? e : "")
                    };
                    this.guildId = e
                }
                var e = t.prototype;
                e.ensureDisambiguated = function() {
                    null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji()
                };
                e.getDisambiguatedEmoji = function() {
                    null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji();
                    return this.disambiguatedEmoji
                };
                e.getCustomEmoji = function() {
                    null == this.customEmojis && this._buildDisambiguatedCustomEmoji();
                    return this.customEmojis
                };
                e.getGroupedCustomEmoji = function() {
                    null == this.groupedCustomEmojis && this._buildDisambiguatedCustomEmoji();
                    return this.groupedCustomEmojis
                };
                e.getByName = function(t) {
                    null != this.emojisByName && null != this.unicodeAliases || this._buildDisambiguatedCustomEmoji();
                    if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t];
                    if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, t)) {
                        var e = this.unicodeAliases[t];
                        if (Object.prototype.hasOwnProperty.call(this.emojisByName, e)) return this.emojisByName[e]
                    }
                };
                e.getEmoticonByName = function(t) {
                    null == this.emoticonsByName && this._buildDisambiguatedCustomEmoji();
                    if (Object.prototype.hasOwnProperty.call(this.emoticonsByName, t)) return this.emoticonsByName[t]
                };
                e.getById = function(t) {
                    null == this.emojisById && this._buildDisambiguatedCustomEmoji();
                    if (Object.prototype.hasOwnProperty.call(this.emojisById, t)) return this.emojisById[t]
                };
                e.getCustomEmoticonRegex = function() {
                    null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji();
                    null == this.emoticonRegex && null != this.escapedEmoticonNames && "" !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp("^\\b(".concat(this.escapedEmoticonNames, ")\\b")));
                    return this.emoticonRegex
                };
                e.getFrequentlyUsedEmojisWithoutFetchingLatest = function() {
                    var t = this;
                    this.ensureDisambiguated();
                    null == this.frequentlyUsed && (this.frequentlyUsed = vt.frequently.map((function(e) {
                        return null != e.id ? t.getById(e.id) : null != e.name ? L.ZP.getByName(e.name) : void 0
                    })).filter(A.lm));
                    return this.frequentlyUsed
                };
                e.rebuildFavoriteEmojisWithoutFetchingLatest = function() {
                    var t = this;
                    this.ensureDisambiguated();
                    if (null == this.favorites || null == this.favoriteNamesAndIds) {
                        var e, n;
                        this.favoriteNamesAndIds = new Set;
                        this.favorites = (null !== (n = null === (e = w.Z.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== n ? n : []).map((function(e) {
                            var n;
                            null === (n = t.favoriteNamesAndIds) || void 0 === n || n.add(e);
                            var i = t.getById(e);
                            null == i && (i = L.ZP.getByName(e));
                            return i
                        })).filter(A.lm)
                    }
                    return [this.favorites, this.favoriteNamesAndIds]
                };
                e.getEmojiInPriorityOrderWithoutFetchingLatest = function() {
                    var t = new Set;
                    return this.favoriteEmojisWithoutFetchingLatest.concat(this.getFrequentlyUsedEmojisWithoutFetchingLatest()).filter((function(e) {
                        if (t.has(e)) return !1;
                        t.add(e);
                        return !0
                    }))
                };
                e.getTopEmojiWithoutFetchingLatest = function(t) {
                    var e = this;
                    if (!(0, y.Y)().shouldSeeTopEmojiBar) return at;
                    this.ensureDisambiguated();
                    if (null == this.topEmojis) {
                        var n, i = mt.get(t),
                            r = F.Z.getTopEmojiIdsByGuildId(t);
                        if (null == i && null == r) return at;
                        var o = (null !== (n = null == i ? void 0 : i.emojiIds) && void 0 !== n ? n : r).map((function(t) {
                                var n;
                                return null !== (n = e.getById(t)) && void 0 !== n ? n : L.ZP.getByName(L.ZP.convertSurrogateToName(t, !1))
                            })),
                            u = [];
                        o.forEach((function(t) {
                            null != t && u.push(t)
                        }));
                        var a = this.getNewlyAddedEmojiForGuild(t).map((function(t) {
                            return t.id
                        }));
                        this.topEmojis = u.filter((function(t) {
                            return !a.includes(t.id)
                        }))
                    }
                    return this.topEmojis
                };
                e.getNewlyAddedEmojiForGuild = function(t) {
                    if (!(0, y.Y)().shouldSeeNewlyAddedEmoji) return at;
                    this.ensureDisambiguated();
                    if (null == this.newlyAddedEmoji) return at;
                    var e = this.newlyAddedEmoji[t];
                    return null == e ? at : e
                };
                e.getBackfillTopEmojis = function(t) {
                    var e = this.getGroupedCustomEmoji();
                    if (null == e) return at;
                    if (null == this.backfillTopEmojis[t]) {
                        var n = this.getNewlyAddedEmojiForGuild(t).map((function(t) {
                                return t.id
                            })),
                            i = this.getTopEmojiWithoutFetchingLatest(t).map((function(t) {
                                return t.id
                            }));
                        if (null != e[t]) {
                            var r = e[t].filter((function(t) {
                                    return !n.includes(t.id) && !i.includes(t.id)
                                })),
                                o = n.length + i.length,
                                u = o < 9 ? 9 - o : 0;
                            this.backfillTopEmojis[t] = r.sort((function(t, e) {
                                return D.Z.compare(t.id, e.id)
                            })).slice(0, u)
                        } else this.backfillTopEmojis[t] = at
                    }
                    return this.backfillTopEmojis[t]
                };
                e.getEscapedCustomEmoticonNames = function() {
                    null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji();
                    return this.escapedEmoticonNames
                };
                e.nameMatchesChain = function(t) {
                    return r()(this.getDisambiguatedEmoji()).filter((function(e) {
                        var n = e.names,
                            i = e.name,
                            o = null != n && r().some(n, t),
                            u = null != i && t(i),
                            a = null != i && r().some(g.getTermsForEmoji(i), t);
                        return o || u || a
                    }))
                };
                e._buildDisambiguatedCustomEmoji = function() {
                    var t = this,
                        e = {},
                        n = [];
                    this.emoticonRegex = null;
                    this.frequentlyUsed = null;
                    this.disambiguatedEmoji = [];
                    this.unicodeAliases = Object.create(null);
                    this.customEmojis = Object.create(null);
                    this.groupedCustomEmojis = Object.create(null);
                    this.emoticonsByName = Object.create(null);
                    this.emojisByName = Object.create(null);
                    this.emojisById = Object.create(null);
                    this.newlyAddedEmoji = Object.create(null);
                    var i = function(n) {
                            var i, r = n.name,
                                o = null !== (i = e[r]) && void 0 !== i ? i : 0;
                            e[r] = o + 1;
                            if (o > 0) {
                                var u = "".concat(r, "~").concat(o);
                                n = J(K({}, n), {
                                    name: u,
                                    originalName: r,
                                    allNamesString: ":".concat(u, ":")
                                })
                            }
                            t.emojisByName[n.name] = n;
                            if ("names" in n) {
                                var a;
                                null === (a = n.names) || void 0 === a || a.slice(1).forEach((function(e) {
                                    return t.unicodeAliases[e] = n.name
                                }))
                            }
                            if (null != n.id) {
                                t.emojisById[n.id] = n;
                                t.customEmojis[n.name] = n;
                                var l, s;
                                switch (n.type) {
                                    case R.B.GUILD:
                                        l = n.guildId;
                                        s = !0;
                                        break;
                                    case R.B.PACK:
                                        l = n.packId
                                }
                                if (null != l) {
                                    null != t.groupedCustomEmojis[l] ? t.groupedCustomEmojis[l].push(n) : t.groupedCustomEmojis[l] = [n];
                                    s && D.Z.compare(n.id, ut) >= 0 && (null != t.newlyAddedEmoji[l] ? t.newlyAddedEmoji[l].push(n) : t.newlyAddedEmoji[l] = [n])
                                }
                            }
                            null == t.disambiguatedEmoji && (t.disambiguatedEmoji = []);
                            t.disambiguatedEmoji.push(n)
                        },
                        o = function(e) {
                            if (!Object.prototype.hasOwnProperty.call(t.emoticonsByName, e.name)) {
                                n.push(B.Z.escape(e.name));
                                t.emoticonsByName[e.name] = e
                            }
                        };
                    L.ZP.forEach(i);
                    var u = function(t) {
                        var e = ct[null == t ? "null" : t];
                        if (null != e) {
                            r().each(e.usableEmojis, i);
                            r().each(e.emoticons, o)
                        }
                    };
                    u(this.guildId);
                    for (var a in this.newlyAddedEmoji) null != this.newlyAddedEmoji[a] ? this.newlyAddedEmoji[a] = this.newlyAddedEmoji[a].sort((function(t, e) {
                        return D.Z.compare(e.id, t.id)
                    })).slice(0, 3) : this.newlyAddedEmoji[a] = [];
                    C.Z.getFlattenedGuildIds().forEach((function(e) {
                        e !== t.guildId && u(e)
                    }));
                    _.Z.getPacksForUser().map((function(t) {
                        null != t.content.emojis && r().each(t.content.emojis, i)
                    }));
                    this.escapedEmoticonNames = n.join("|")
                };
                t.get = function(e) {
                    void 0 === e && (e = null);
                    null != t._lastInstance && t._lastInstance.guildId === e || (t._lastInstance = new t(e));
                    return t._lastInstance
                };
                t.reset = function() {
                    t._lastInstance = null
                };
                t.resetFrequentlyUsed = function() {
                    null != t._lastInstance && (t._lastInstance.frequentlyUsed = null)
                };
                t.resetFavorites = function() {
                    if (null != t._lastInstance) {
                        t._lastInstance.favorites = null;
                        t._lastInstance.favoriteNamesAndIds = null
                    }
                };
                t.clear = function(e) {
                    null != t._lastInstance && t._lastInstance.guildId === e && (t._lastInstance = null)
                };
                W(t, [{
                    key: "favoriteEmojisWithoutFetchingLatest",
                    get: function() {
                        return this.rebuildFavoriteEmojisWithoutFetchingLatest()[0]
                    }
                }]);
                return t
            }();
            Et._lastInstance = null;
            var vt = new c.Z({
                computeBonus: function() {
                    return 100
                },
                computeWeight: function(t) {
                    var e = 0;
                    t <= 3 ? e = 100 : t <= 15 ? e = 70 : t <= 30 ? e = 50 : t <= 45 ? e = 30 : t <= 80 && (e = 10);
                    return e
                },
                lookupKey: function(t) {
                    return null !== (gt = L.ZP.getByName(t)) && void 0 !== gt ? gt : ht(t)
                },
                afterCompute: function() {
                    Et.resetFrequentlyUsed();
                    st = it.slice(0);
                    r().some(ct, (function(t) {
                        return t.usableEmojis.length > 0
                    })) || st.splice(it.indexOf(M.UX.CUSTOM), 1)
                },
                numFrequentlyItems: 42
            });

            function jt() {
                ct = {};
                dt.clear();
                ft = {};
                Et.reset();
                mt.clear();
                lt = 2
            }

            function bt(t) {
                null != ct[t] && delete ct[t]
            }

            function Ot() {
                ft = null;
                Et.reset();
                0 !== lt && vt.compute()
            }

            function St(t, e) {
                bt(t);
                Et.clear(t);
                if (null != e) {
                    var n = k.default.getCurrentUser();
                    if (null != n) {
                        var i = ((0, O.gn)(), !1);
                        ct[t] = new ot(t, n.id, e, i)
                    }
                }
            }

            function _t() {
                var t, e, n, i = null === (t = w.Z.settings.textAndImages) || void 0 === t || null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
                null != i && L.ZP.setDefaultDiversitySurrogate(i);
                Et.reset();
                var o, u = null !== (o = null === (n = w.Z.frecencyWithoutFetchingLatest.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== o ? o : {};
                vt.overwriteHistory(r().mapValues(u, (function(t) {
                    return J(K({}, t), {
                        recentUses: t.recentUses.map(Number).filter((function(t) {
                            return t > 0
                        }))
                    })
                })), rt.pendingUsages);
                if (r().isEmpty(u) && r().isEmpty(rt.pendingUsages) && w.Z.hasLoaded(Z.yP.FRECENCY_AND_FAVORITES_SETTINGS)) {
                    vt.track("thumbsup");
                    vt.track("thumbsup");
                    vt.track("eyes");
                    vt.track("eyes");
                    vt.track("laughing");
                    vt.track("laughing");
                    vt.track("watermelon");
                    vt.track("fork_and_knife");
                    vt.track("yum");
                    vt.track("weary");
                    vt.track("tired_face");
                    vt.track("poop");
                    vt.track("100")
                }
            }

            function It(t) {
                var e = !0,
                    n = !1,
                    i = void 0;
                try {
                    for (var r, o = t[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                        var u, a, l = r.value,
                            s = null !== (a = null !== (u = l.id) && void 0 !== u ? u : l.uniqueName) && void 0 !== a ? a : l.name;
                        if (null != s) {
                            vt.track(s);
                            rt.pendingUsages.push({
                                key: s,
                                timestamp: Date.now()
                            })
                        }
                    }
                } catch (t) {
                    n = !0;
                    i = t
                } finally {
                    try {
                        e || null == o.return || o.return()
                    } finally {
                        if (n) throw i
                    }
                }
                var c = t.length > 0;
                c && 0 !== lt && vt.compute();
                return c
            }

            function wt(t) {
                var e = t.guildId,
                    n = t.role;
                if (!(0, E.Z)(n)) return !1;
                var i = ct[e];
                St(e, null == i ? void 0 : i.emojis);
                Ot()
            }

            function Pt() {
                dt = _.Z.getPacksById();
                Ot()
            }
            var Tt = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && X(t, e)
                }(n, t);
                var e = et(n);

                function n() {
                    H(this, n);
                    return e.apply(this, arguments)
                }
                var i = n.prototype;
                i.initialize = function(t) {
                    this.waitFor(d.Z, T.Z, P.ZP, b.Z, _.Z, I.default, j.Z, F.Z, k.default);
                    null != t && (rt = t);
                    this.syncWith([w.Z], _t);
                    this.syncWith([_.Z], Pt)
                };
                i.getState = function() {
                    return rt
                };
                i.hasPendingUsage = function() {
                    return rt.pendingUsages.length > 0
                };
                i.getGuildEmoji = function(t) {
                    pt();
                    var e, n = ct[t];
                    return null !== (e = null == n ? void 0 : n.emojis) && void 0 !== e ? e : []
                };
                i.getUsableGuildEmoji = function(t) {
                    pt();
                    var e, n = ct[t];
                    return null !== (e = null == n ? void 0 : n.usableEmojis) && void 0 !== e ? e : []
                };
                i.getGuilds = function() {
                    return ct
                };
                i.getDisambiguatedEmojiContext = function(t) {
                    pt();
                    return Et.get(t)
                };
                i.getSearchResultsOrder = function(t, e, n) {
                    var i = e.toLowerCase(),
                        o = B.Z.escape(i);
                    if (t.length > 0) {
                        var u = new RegExp("^".concat(o), "i"),
                            a = new RegExp("(^|_|[A-Z])".concat(o, "s?([A-Z]|_|$)")),
                            l = a.test.bind(a),
                            s = u.test.bind(u),
                            c = function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                                if (null == t || null == e) return 0;
                                var n = t.toLowerCase(),
                                    r = 1 + (n === i ? 4 : 0) + (l(n) || l(t) ? 2 : 0) + (s(t) ? 1 : 0),
                                    o = vt.getScore(e);
                                null != o && (r *= o / 100);
                                return r
                            };
                        t = r().orderBy(t, [function(t) {
                            return null != t.names ? c(t.names[0]) : c(t.name, t.id)
                        }, function(t) {
                            return null != t.names ? t.names[0] : t.name
                        }], ["desc", "asc"])
                    }
                    n > 0 && (t = t.slice(0, n));
                    return t
                };
                i.searchWithoutFetchingLatest = function(t) {
                    var e = t.channel,
                        n = t.query,
                        i = t.count,
                        r = void 0 === i ? 0 : i,
                        o = t.intention,
                        u = t.includeExternalGuilds,
                        a = void 0 === u || u,
                        l = t.matchComparator;
                    pt();
                    var s, c = n.toLowerCase(),
                        d = B.Z.escape(c);
                    if (null == l) {
                        var f = new RegExp("".concat(d), "i");
                        s = f.test.bind(f)
                    } else s = l;
                    var m = null != e ? e.getGuildId() : null,
                        h = Et.get(m).nameMatchesChain(s).reduce((function(t, n) {
                            var i = N.ZP.getEmojiUnavailableReason({
                                emoji: n,
                                channel: e,
                                intention: o
                            });
                            if (i === G.Z5.PREMIUM_LOCKED) t.locked.push(n);
                            else if (null == i) {
                                !a && !N.ZP.isInternalEmojiForGuildId(n, null == e ? void 0 : e.getGuildId()) || t.unlocked.push(n)
                            }
                            return t
                        }), {
                            unlocked: [],
                            locked: []
                        });
                    return {
                        unlocked: this.getSearchResultsOrder(h.unlocked, n, r),
                        locked: this.getSearchResultsOrder(h.locked, n, 0)
                    }
                };
                i.getUsableCustomEmojiById = function(t) {
                    pt();
                    return ht(t)
                };
                i.getCustomEmojiById = function(t) {
                    pt();
                    return function(t) {
                        var e, n, i, r = yt()[t];
                        return null != r ? null !== (i = null === (e = ct[r]) || void 0 === e ? void 0 : e.getEmoji(t)) && void 0 !== i ? i : null === (n = dt.get(r)) || void 0 === n ? void 0 : n.emojiById[t] : null
                    }(t)
                };
                i.getTopEmoji = function(t) {
                    if (null == t) return at;
                    pt();
                    return Et.get(t).getTopEmojiWithoutFetchingLatest(t)
                };
                i.getNewlyAddedEmoji = function(t) {
                    if (null == t) return at;
                    pt();
                    return Et.get(t).getNewlyAddedEmojiForGuild(t)
                };
                i.getBackfillTopEmojis = function(t) {
                    if (null == t) return at;
                    pt();
                    return Et.get(t).getBackfillTopEmojis(t)
                };
                i.getTopEmojisMetadata = function(t) {
                    return mt.get(t)
                };
                i.hasUsableEmojiInAnyGuild = function() {
                    pt();
                    return Object.keys(ct).some((function(t) {
                        return ct[t].usableEmojis.length > 0
                    }))
                };
                i.hasFavoriteEmojis = function(t) {
                    var e = Et.get(t);
                    return null != e && e.favoriteEmojisWithoutFetchingLatest.length > 0
                };
                i.__getLocalVars = function() {
                    return {
                        categories: it,
                        state: rt,
                        NUM_FREQUENTLY_USED_EMOJI: 42,
                        NEWLY_ADDED_EMOJI_CUTOFF: ut,
                        EMPTY_EMOJI_LIST: at,
                        LoadState: nt,
                        loaded: lt,
                        myCategories: st,
                        guilds: ct,
                        packs: dt,
                        emojiIdToGroupId: ft,
                        topEmojisByGuildId: mt,
                        emojiFrecency: vt
                    }
                };
                W(n, [{
                    key: "categories",
                    get: function() {
                        return st
                    }
                }, {
                    key: "diversitySurrogate",
                    get: function() {
                        var t;
                        return null !== (t = L.ZP.getDefaultDiversitySurrogate()) && void 0 !== t ? t : ""
                    }
                }, {
                    key: "emojiFrecencyWithoutFetchingLatest",
                    get: function() {
                        return vt
                    }
                }]);
                return n
            }(l.ZP.PersistedStore);
            Tt.displayName = "EmojiStore";
            Tt.persistKey = "EmojiStoreV2";
            const Ct = new Tt(s.Z, {
                BACKGROUND_SYNC: function() {
                    jt()
                },
                CONNECTION_OPEN: function(t) {
                    jt();
                    var e = !0,
                        n = !1,
                        i = void 0;
                    try {
                        for (var r, o = t.guilds[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                            var u = r.value;
                            St(u.id, u.emojis)
                        }
                    } catch (t) {
                        n = !0;
                        i = t
                    } finally {
                        try {
                            e || null == o.return || o.return()
                        } finally {
                            if (n) throw i
                        }
                    }
                    lt = t.guilds.every((function(t) {
                        return null != t.emojis
                    })) ? 1 : 0;
                    Ot()
                },
                GUILD_MEMBER_UPDATE: function(t) {
                    var e, n = t.guildId;
                    if (t.user.id === (null === (e = k.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)) {
                        var i = ct[n];
                        St(n, null == i ? void 0 : i.usableEmojis);
                        Ot()
                    }
                },
                GUILD_CREATE: function(t) {
                    0 !== lt && null == t.guild.emojis && null != t.guild.emojiUpdates && (lt = 0);
                    St(t.guild.id, t.guild.emojis);
                    Ot()
                },
                GUILD_UPDATE: function(t) {
                    St(t.guild.id, t.guild.emojis);
                    Ot()
                },
                GUILD_EMOJIS_UPDATE: function(t) {
                    St(t.guildId, t.emojis);
                    Ot()
                },
                GUILD_DELETE: function(t) {
                    var e = t.guild;
                    bt(e.id);
                    mt.delete(e.id);
                    Ot()
                },
                MESSAGE_REACTION_ADD: function(t) {
                    if (!t.optimistic) return !1;
                    var e = null != t.emoji.id && "0" !== t.emoji.id ? t.emoji : L.ZP.getByName(L.ZP.convertSurrogateToName(t.emoji.name, !1));
                    if (null == e) return !1;
                    It([e])
                },
                EMOJI_TRACK_USAGE: function(t) {
                    It(t.emojiUsed)
                },
                USER_SETTINGS_PROTO_UPDATE: function(t) {
                    var e = t.settings.type,
                        n = t.wasSaved;
                    g.setEmojiLocale(I.default.locale);
                    if (e !== Z.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    rt.pendingUsages = []
                },
                GUILD_ROLE_CREATE: wt,
                GUILD_ROLE_UPDATE: wt,
                TOP_EMOJIS_FETCH_SUCCESS: function(t) {
                    var e = t.guildId,
                        n = t.topEmojisMetadata;
                    mt.set(e, {
                        emojiIds: n.map((function(t) {
                            return t.emojiId
                        })),
                        topEmojisTTL: u()(u()()).add(1, "days").valueOf()
                    })
                },
                INVENTORY_FETCH_SUCCESS: function(t) {
                    t = null !== t ? t : Q(new TypeError("Cannot destructure undefined"));
                    Pt()
                },
                INVENTORY_COLLECT_PACK_SUCCESS: function(t) {
                    t = null !== t ? t : Q(new TypeError("Cannot destructure undefined"));
                    Ot()
                },
                INVENTORY_REMOVE_PACK_SUCCESS: function(t) {
                    t = null !== t ? t : Q(new TypeError("Cannot destructure undefined"));
                    Ot()
                },
                LOGOUT: function(t) {
                    jt()
                }
            })
        },
        37763: (t, e, n) => {
            n.d(e, {
                Z: () => y
            });
            var i = n(202351),
                r = n(744564);

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function u(t) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return u(t)
            }

            function a(t, e) {
                return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function l(t, e) {
                l = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return l(t, e)
            }
            var s = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function c(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = u(t);
                    if (e) {
                        var r = u(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return a(this, n)
                }
            }
            var d = {
                    topEmojisByGuildId: {}
                },
                f = d,
                m = {};
            var h = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && l(t, e)
                }(n, t);
                var e = c(n);

                function n() {
                    o(this, n);
                    return e.apply(this, arguments)
                }
                var i = n.prototype;
                i.initialize = function(t) {
                    f = null != t ? t : d
                };
                i.getState = function() {
                    return f
                };
                i.getTopEmojiIdsByGuildId = function(t) {
                    return f.topEmojisByGuildId[t]
                };
                i.getIsFetching = function(t) {
                    return m[t]
                };
                i.__getLocalVars = function() {
                    return {
                        initialState: d,
                        state: f,
                        isFetching: m
                    }
                };
                return n
            }(i.ZP.PersistedStore);
            h.displayName = "TopEmojiStore";
            h.persistKey = "TopEmojiStore";
            const y = new h(r.Z, {
                LOGOUT: function() {
                    f = d;
                    m = {}
                },
                TOP_EMOJIS_FETCH: function(t) {
                    var e = t.guildId;
                    m[e] = !0
                },
                TOP_EMOJIS_FETCH_SUCCESS: function(t) {
                    var e = t.guildId,
                        n = t.topEmojisMetadata;
                    f.topEmojisByGuildId[e] = n.map((function(t) {
                        return t.emojiId
                    }));
                    m[e] = !1
                }
            })
        },
        690296: (t, e, n) => {
            n.d(e, {
                Z: () => T
            });
            var i = n(496486),
                r = n.n(i),
                o = n(730381),
                u = n.n(o),
                a = n(202351),
                l = n(744564),
                s = n(567403);

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }

            function d(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function f(t) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return f(t)
            }

            function m(t, e) {
                return !e || "object" !== E(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function h(t, e) {
                h = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return h(t, e)
            }

            function y(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var i, r, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(t); !(u = (i = n.next()).done); u = !0) {
                                o.push(i.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            a = !0;
                            r = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return o
                    }
                }(t, e) || v(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(t) {
                throw t
            }

            function g(t) {
                return function(t) {
                    if (Array.isArray(t)) return c(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || v(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function v(t, e) {
                if (t) {
                    if ("string" == typeof t) return c(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0
                }
            }

            function j(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, i = f(t);
                    if (e) {
                        var r = f(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return m(this, n)
                }
            }
            var b = {
                    packsById: new Map
                },
                O = b,
                S = !1,
                _ = null,
                I = !1;

            function w(t) {
                if (null != O.packsById.get(t.id)) O.packsById.set(t.id, t);
                else {
                    var e = g(O.packsById);
                    O.packsById = new Map;
                    O.packsById.set(t.id, t);
                    e.forEach((function(t) {
                        var e = y(t, 2),
                            n = e[0],
                            i = e[1];
                        return O.packsById.set(n, i)
                    }))
                }
            }
            var P = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && h(t, e)
                }(n, t);
                var e = j(n);

                function n() {
                    d(this, n);
                    return e.apply(this, arguments)
                }
                var i = n.prototype;
                i.initialize = function(t) {
                    this.waitFor(s.Z);
                    O = (null == t ? void 0 : t.packsById) instanceof Map ? t : b
                };
                i.getState = function() {
                    return O
                };
                i.getPacksForUser = function() {
                    var t = this;
                    return g(O.packsById.values()).filter((function(e) {
                        return !t._isADuplicateGuildPack(e.id)
                    }))
                };
                i.countPacksCollected = function() {
                    return O.packsById.size
                };
                i.getPackByPackId = function(t) {
                    return this._isADuplicateGuildPack(t) ? null : O.packsById.get(t)
                };
                i.getPacksById = function() {
                    return O.packsById
                };
                i.getIsFetching = function() {
                    return S
                };
                i.getSortedPackIds = function() {
                    var t, e = this;
                    return null !== (t = g(O.packsById.keys()).filter((function(t) {
                        return !e._isADuplicateGuildPack(t)
                    }))) && void 0 !== t ? t : []
                };
                i.getPackEmojisTTL = function() {
                    return _
                };
                i.getHasPackAddedNotification = function() {
                    return I
                };
                i.hasPersistedState = function() {
                    return !r().isEmpty(O.packsById)
                };
                i._isADuplicateGuildPack = function(t) {
                    var e;
                    return null != (null === (e = s.Z.getGuild(t)) || void 0 === e ? void 0 : e.joinedAt)
                };
                i.clear = function() {
                    O = b;
                    S = !1;
                    _ = null
                };
                i.__getLocalVars = function() {
                    return {
                        initialState: b,
                        state: O,
                        isFetching: S,
                        ttl: _,
                        hasPackAddedNotification: I
                    }
                };
                return n
            }(a.ZP.PersistedStore);
            P.displayName = "InventoryStore";
            P.persistKey = "InventoryStore";
            const T = new P(l.Z, {
                LOGOUT: function() {
                    O = b;
                    S = !1;
                    _ = null
                },
                INVENTORY_FETCH: function(t) {
                    t = null !== t ? t : p(new TypeError("Cannot destructure undefined"));
                    S || (S = !0)
                },
                INVENTORY_FETCH_SUCCESS: function(t) {
                    t.packs.forEach((function(t) {
                        O.packsById.set(t.id, t)
                    }));
                    S = !1;
                    _ = u()(u()()).add(30, "minutes").valueOf()
                },
                INVENTORY_FETCH_ERROR: function(t) {
                    t = null !== t ? t : p(new TypeError("Cannot destructure undefined"));
                    S = !1;
                    _ = null
                },
                INVENTORY_COLLECT_PACK_SUCCESS: function(t) {
                    w(t.pack);
                    I = !0
                },
                INVENTORY_REMOVE_PACK_SUCCESS: function(t) {
                    var e = t.packId;
                    O.packsById.delete(e)
                },
                INVENTORY_PACK_UPDATE: function(t) {
                    w(t.pack)
                },
                INVENTORY_PACK_DELETE: function(t) {
                    var e = t.pack;
                    O.packsById.delete(e.id)
                },
                INVENTORY_DISMISS_PACK_ADDED_NOTIFICATION: function(t) {
                    t = null !== t ? t : p(new TypeError("Cannot destructure undefined"));
                    I = !1
                },
                POST_CONNECTION_OPEN: function(t) {
                    t = null !== t ? t : p(new TypeError("Cannot destructure undefined"));
                    S = !1;
                    _ = null
                }
            })
        }
    }
]);
//# sourceMappingURL=939a0b1d4ca16abacd4d.js.map