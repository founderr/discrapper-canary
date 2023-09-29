"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [45353], {
        747864: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var i = n(496486),
                r = n.n(i),
                o = n(730381),
                u = n.n(o);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1;
                    i.configurable = !0;
                    "value" in i && (i.writable = !0);
                    Object.defineProperty(e, i.key, i)
                }
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e, t) {
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

            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var i, r, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (i = n.next()).done); u = !0) {
                                o.push(i.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            r = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = function() {
                function e(t) {
                    var n = t.computeBonus,
                        i = t.computeWeight,
                        r = t.lookupKey,
                        o = t.afterCompute,
                        u = t.numFrequentlyItems,
                        a = void 0 === u ? 32 : u,
                        l = t.maxSamples,
                        s = void 0 === l ? 10 : l;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
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
                var t = e.prototype;
                t.overwriteHistory = function(e, t) {
                    var n = this;
                    this.usageHistory = r().mapValues(null != e ? e : {}, (function(e) {
                        return c(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                i.forEach((function(t) {
                                    s(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            frecency: -1
                        })
                    }));
                    null == t || t.forEach((function(e) {
                        var t = e.key,
                            i = e.timestamp;
                        return n.track(t, i)
                    }));
                    this.markDirty()
                };
                t.markDirty = function() {
                    this.dirty = !0
                };
                t.isDirty = function() {
                    return this.dirty
                };
                t.track = function(e, t) {
                    if (null != e) {
                        var n = Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0;
                        if (null == n) n = {
                            totalUses: 1,
                            recentUses: [null != t ? t : Date.now()],
                            frecency: -1,
                            score: 0
                        };
                        else {
                            n.frecency = -1;
                            n.totalUses += 1;
                            if (null == t) n.recentUses.push(Date.now());
                            else {
                                n.recentUses.push(t);
                                n.recentUses.sort()
                            }
                            for (; n.recentUses.length > this.maxSamples;) n.recentUses.shift()
                        }
                        this.usageHistory[e] = n;
                        this.markDirty()
                    }
                };
                t.getEntry = function(e) {
                    if (null == e) return null;
                    this.dirty && this.compute();
                    return Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0
                };
                t.getScore = function(e) {
                    var t = this.getEntry(e);
                    return null != t ? t.score : null
                };
                t.getFrecency = function(e) {
                    var t = this.getEntry(e);
                    return null != t ? t.frecency : null
                };
                t.compute = function() {
                    var e = this,
                        t = u()();
                    r().forEach(this.usageHistory, (function(n, i) {
                        var o = n.totalUses,
                            a = n.recentUses;
                        if (-1 === n.frecency) {
                            var l = e.computeBonus(i) / 100;
                            n.score = 0;
                            r().forEach(a, (function(i, r) {
                                if (r >= e.maxSamples) return !1;
                                var o = e.computeWeight(t.diff(u()(i), "days"));
                                n.score += l * o
                            }));
                            if (n.score > 0) {
                                n.recentUses.length > 0 && (n.frecency = Math.ceil(o * (n.score / a.length)));
                                e.usageHistory[i] = n
                            } else delete e.usageHistory[i]
                        }
                    }));
                    this.frequently = r()(this.usageHistory).map((function(t, n) {
                        var i = e.lookupKey(n);
                        return null == i ? null : [i, t.frecency]
                    })).filter((function(e) {
                        return null !== e
                    })).sortBy((function(e) {
                        var t = d(e, 2);
                        t[0];
                        return -t[1]
                    })).map((function(e) {
                        return d(e, 1)[0]
                    })).take(this.numFrequentlyItems).value();
                    this.dirty = !1;
                    this.afterCompute(this.usageHistory, this._frequently)
                };
                ! function(e, t, n) {
                    t && l(e.prototype, t);
                    n && l(e, n)
                }(e, [{
                    key: "frequently",
                    get: function() {
                        this.dirty && this.compute();
                        return this._frequently
                    },
                    set: function(e) {
                        this._frequently = e
                    }
                }]);
                return e
            }();
            const m = f
        },
        936957: (e, t, n) => {
            n.d(t, {
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
            ! function(e) {
                e.GUILD = "GUILD";
                e.PACK = "PACK";
                e.UNICODE = "UNICODE";
                e.RECENT = "RECENT";
                e.CUSTOM = "CUSTOM";
                e.SEARCH_RESULTS = "SEARCH_RESULTS";
                e.FAVORITES = "FAVORITES";
                e.TOP_GUILD_EMOJI = "TOP_GUILD_EMOJI";
                e.PREMIUM_UPSELL = "PREMIUM_UPSELL"
            }(i || (i = {}));
            var r, o, u, a = "emoji-picker-grid";
            ! function(e) {
                e.RECENT = "recent";
                e.FAVORITES = "favorites";
                e.TOP_GUILD_EMOJI = "top guild emoji";
                e.CUSTOM = "custom";
                e.PEOPLE = "people";
                e.NATURE = "nature";
                e.FOOD = "food";
                e.ACTIVITY = "activity";
                e.TRAVEL = "travel";
                e.OBJECTS = "objects";
                e.SYMBOLS = "symbols";
                e.FLAGS = "flags";
                e.PREMIUM_UPSELL = "premium emoji"
            }(r || (r = {}));
            ! function(e) {
                e.NONE = "";
                e.TOP_GUILD_EMOJI = "top_server";
                e.NEWLY_ADDED_EMOJI = "newly_added"
            }(o || (o = {}));
            ! function(e) {
                e[e.EMOJI = 0] = "EMOJI";
                e[e.NSFW = 1] = "NSFW"
            }(u || (u = {}));
            var l, s = -1;
            ! function(e) {
                e[e.MEDIUM = 40] = "MEDIUM";
                e[e.LARGE = 48] = "LARGE"
            }(l || (l = {}));
            var c, d = "emoji-picker-tab-panel",
                f = "emoji-picker-tab",
                m = "soundboard-picker-tab-panel",
                h = "soundboard-picker-tab",
                y = "reaction-picker-tab-panel",
                p = "reaction-picker-tab",
                g = "super-reaction-picker-tab";
            ! function(e) {
                e.TOOLTIP = "tooltip"
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
        230343: (e, t, n) => {
            n.d(t, {
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
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = r.getCurrentConfig({
                            location: "e1b056_1"
                        }, {
                            autoTrackExposure: e
                        }).inEmojiHoldout,
                        n = !t,
                        i = o.getCurrentConfig({
                            location: "e1b056_2"
                        }, {
                            autoTrackExposure: n && e
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
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = r.useExperiment({
                            location: "e1b056_3"
                        }, {
                            autoTrackExposure: e
                        }).inEmojiHoldout,
                        n = !t,
                        i = o.useExperiment({
                            location: "e1b056_4"
                        }, {
                            autoTrackExposure: n && e
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
        960675: (e, t, n) => {
            n.d(t, {
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
        245353: (e, t, n) => {
            n.d(t, {
                Z: () => Ce
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
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.actions = {
                        BACKGROUND_SYNC: function(e, n) {
                            return t.handleBackgroundSync(e, n)
                        },
                        CLEAR_GUILD_CACHE: function(e, n) {
                            return t.handleClearGuildCache(n)
                        },
                        CONNECTION_OPEN: function(e, n) {
                            return t.handleConnectionOpen(e, n)
                        },
                        GUILD_CREATE: function(e, n) {
                            return t.handleGuildCreate(e, n)
                        },
                        GUILD_DELETE: function(e, n) {
                            return t.handleGuildDelete(e, n)
                        },
                        GUILD_EMOJIS_UPDATE: function(e, n) {
                            return t.handleGuildEmojisUpdate(e, n)
                        },
                        GUILD_UPDATE: function(e, n) {
                            return t.handleGuildUpdate(e, n)
                        }
                    }
                }
                var t = e.prototype;
                t.getSync = function(e) {
                    var t = performance.now(),
                        n = d.Z.emojis(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    m.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")"));
                    return n
                };
                t.handleConnectionOpen = function(e, t) {
                    var n = !0,
                        i = !1,
                        r = void 0;
                    try {
                        for (var o, u = e.guilds[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value;
                            this.handleOneGuildCreate(a, t)
                        }
                    } catch (e) {
                        i = !0;
                        r = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                };
                t.handleGuildCreate = function(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                };
                t.handleGuildUpdate = function(e, t) {
                    this.replace(e.guild.id, e.guild.emojis, t)
                };
                t.handleGuildDelete = function(e, t) {
                    this.delete(e.guild.id, t)
                };
                t.handleGuildEmojisUpdate = function(e, t) {
                    this.replace(e.guildId, e.emojis, t)
                };
                t.handleBackgroundSync = function(e, t) {
                    var n = this;
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.emojis.map((function(e) {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        if ("full" === e.dataMode) {
                            m.log("Replacing ".concat(e.entities.length, " emojis for ").concat(e.guildId));
                            n.replace(e.guildId, e.entities, t)
                        } else if (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) {
                            m.log("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " emojis for ").concat(e.guildId));
                            n.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t)
                        }
                    }))))
                };
                t.handleOneGuildCreate = function(e, t) {
                    null != e.emojiUpdates ? this.update(e.id, e.emojiUpdates.writes, e.emojiUpdates.deletes, t) : null != e.emojis && this.replace(e.id, e.emojis, t)
                };
                t.handleClearGuildCache = function(e) {
                    this.clear(e)
                };
                t.handleReset = function() {};
                t.replace = function(e, t, n) {
                    d.Z.emojisTransaction(n).replaceAll(e, t)
                };
                t.delete = function(e, t) {
                    d.Z.emojisTransaction(t).delete(e)
                };
                t.clear = function(e) {
                    d.Z.emojisTransaction(e).delete()
                };
                t.update = function(e, t, n, i) {
                    var r = d.Z.emojisTransaction(i);
                    r.putAll(e, t);
                    var o = !0,
                        u = !1,
                        a = void 0;
                    try {
                        for (var l, s = n[Symbol.iterator](); !(o = (l = s.next()).done); o = !0) {
                            var c = l.value;
                            r.delete(e, c)
                        }
                    } catch (e) {
                        u = !0;
                        a = e
                    } finally {
                        try {
                            o || null == s.return || s.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                };
                return e
            }());
            var y = n(230343);
            var p = new(function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.loading = !1;
                    this.loaded = !1;
                    this.loader = t
                }
                var t = e.prototype;
                t.setParams = function(e) {
                    if (this.param !== e) {
                        this.param = e;
                        this.loading = !1;
                        this.loaded = !1
                    }
                };
                t.get = function() {
                    this.ensureLoaded();
                    return this.val
                };
                t.ensureLoaded = function() {
                    var e = this;
                    if (!this.loaded && !this.loading && void 0 !== this.param) {
                        var t = this.param;
                        this.loading = !0;
                        this.loader(t).then((function(n) {
                            if (t === e.param) {
                                e.val = n;
                                e.loading = !1;
                                e.loaded = !0
                            }
                        }))
                    }
                };
                return e
            }())((function(e) {
                var t = n(960675).B[e];
                return void 0 !== t ? t() : Promise.resolve({});
                return Promise.resolve({})
            }));
            const g = {
                setEmojiLocale: function(e) {
                    p.setParams(e)
                },
                getTermsForEmoji: function(e) {
                    var t = p.get();
                    return void 0 !== t ? t[e] : []
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
                U = n(695895),
                C = n(107218),
                T = n(473903),
                k = n(775173),
                A = n(38004),
                N = n(72580),
                B = n(968696),
                D = n(102921),
                L = n(420881),
                R = n(135855),
                G = n(37763),
                F = n(213424),
                Z = n(936957),
                M = n(131559);

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function H(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function W(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1;
                    i.configurable = !0;
                    "value" in i && (i.writable = !0);
                    Object.defineProperty(e, i.key, i)
                }
            }

            function q(e, t, n) {
                t && W(e.prototype, t);
                n && W(e, n);
                return e
            }

            function V(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function J(e) {
                J = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return J(e)
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    i.forEach((function(t) {
                        V(e, t, n[t])
                    }))
                }
                return e
            }

            function Y(e, t) {
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

            function X(e, t) {
                return !t || "object" !== ee(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function z(e, t) {
                z = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return z(e, t)
            }

            function $(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var i, r, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (i = n.next()).done); u = !0) {
                                o.push(i.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            r = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Q(e) {
                throw e
            }
            var ee = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function te(e) {
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
                    var n, i = J(e);
                    if (t) {
                        var r = J(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return X(this, n)
                }
            }
            var ne, ie = [Z.UX.TOP_GUILD_EMOJI.toString(), Z.UX.FAVORITES.toString(), Z.UX.RECENT.toString(), Z.UX.CUSTOM.toString()].concat(R.ZP.getCategories()),
                re = {
                    pendingUsages: []
                },
                oe = function() {
                    function e(t, n, i) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        H(this, e);
                        this._dirty = !0;
                        this._emojiMap = {};
                        this._emoticons = [];
                        this._usableEmojis = [];
                        this._canSeeServerSubIAP = !1;
                        this._totalUsable = 0;
                        this.id = t;
                        this._userId = n;
                        this._emojis = i;
                        this._canSeeServerSubIAP = r
                    }
                    var t = e.prototype;
                    t.getEmoji = function(e) {
                        this.build();
                        return this._emojiMap[e]
                    };
                    t.getUsableEmoji = function(e) {
                        var t = this.getEmoji(e);
                        return null != t && this.isUsable(t) ? t : null
                    };
                    t.isUsable = function(e) {
                        if (0 === e.roles.length) return !0;
                        var t = P.ZP.getMember(this.id, this._userId);
                        if (null == t) return !1;
                        if (t.roles.some((function(t) {
                                return e.roles.includes(t)
                            }))) return !0;
                        if ((0, v.yH)(e)) {
                            0;
                            return !0
                        }
                        return !1
                    };
                    t.build = function() {
                        var e = this;
                        if (this._dirty) {
                            this._dirty = !1;
                            this._emojis.forEach((function(t) {
                                t.url = k.ZP.getEmojiURL({
                                    id: t.id,
                                    animated: t.animated,
                                    size: 48
                                });
                                t.allNamesString = ":".concat(t.name, ":");
                                t.guildId = e.id;
                                t.type = L.B.GUILD;
                                e._emojiMap[t.id] = t
                            }));
                            this._usableEmojis = r().sortBy(this._emojis.filter((function(t) {
                                return e.isUsable(t)
                            })), (function(e) {
                                return e.name
                            }));
                            this._emoticons = this._usableEmojis.filter((function(e) {
                                return !e.require_colons
                            }))
                        }
                    };
                    q(e, [{
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
                    return e
                }(),
                ue = D.Z.fromTimestamp(Date.now() - 5184e6),
                ae = [];
            ! function(e) {
                e[e.Unloaded = 0] = "Unloaded";
                e[e.MaybeLoaded = 1] = "MaybeLoaded";
                e[e.Loaded = 2] = "Loaded"
            }(ne || (ne = {}));
            var le = 2,
                se = ie.slice(0),
                ce = {},
                de = new Map,
                fe = {},
                me = new Map;

            function he(e) {
                var t, n, i, r = ye()[e];
                return null != r ? null !== (i = null === (t = ce[r]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== i ? i : null === (n = de.get(r)) || void 0 === n ? void 0 : n.emojiById[e] : null
            }

            function ye() {
                pe();
                if (null == fe) {
                    fe = {};
                    for (var e in ce) {
                        var t = ce[e],
                            n = !0,
                            i = !1,
                            r = void 0;
                        try {
                            for (var o, u = t.rawEmojis[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                                var a = o.value;
                                fe[a.id] = e
                            }
                        } catch (e) {
                            i = !0;
                            r = e
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
                        for (var d, f = de[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                            var m, h = $(d.value, 2),
                                y = h[0],
                                p = h[1],
                                g = !0,
                                E = !1,
                                v = void 0;
                            try {
                                for (var j, b = (null !== (m = null == p ? void 0 : p.content.emojis) && void 0 !== m ? m : [])[Symbol.iterator](); !(g = (j = b.next()).done); g = !0) {
                                    var O = j.value;
                                    fe[O.id] = y
                                }
                            } catch (e) {
                                E = !0;
                                v = e
                            } finally {
                                try {
                                    g || null == b.return || b.return()
                                } finally {
                                    if (E) throw v
                                }
                            }
                        }
                    } catch (e) {
                        s = !0;
                        c = e
                    } finally {
                        try {
                            l || null == f.return || f.return()
                        } finally {
                            if (s) throw c
                        }
                    }
                }
                return fe
            }

            function pe() {
                if (0 === le) {
                    var e = d.Z.database();
                    if (null != e) {
                        le = 2;
                        var t = (0, f.Pv)("EmojiStore.loadSavedEmojis", (function() {
                            return a.Z.time("💾", "loadSavedEmojis", (function() {
                                return h.getSync(e)
                            }))
                        }));
                        if (null != t) {
                            var n = !0,
                                i = !1,
                                r = void 0;
                            try {
                                for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                                    var l = $(o.value, 2),
                                        s = l[0],
                                        c = l[1];
                                    !Object.hasOwn(ce, s) && U.Z.isMember(s) && Se(s, c)
                                }
                            } catch (e) {
                                i = !0;
                                r = e
                            } finally {
                                try {
                                    n || null == u.return || u.return()
                                } finally {
                                    if (i) throw r
                                }
                            }
                            Oe()
                        }
                    }
                }
            }
            var ge, Ee = function() {
                function e(t) {
                    var n = this;
                    H(this, e);
                    this.emoticonRegex = null;
                    this.frequentlyUsed = null;
                    this.favorites = null;
                    this.favoriteNamesAndIds = null;
                    this.topEmojis = null;
                    this.escapedEmoticonNames = null;
                    this.disambiguatedEmoji = null;
                    this.newlyAddedEmoji = null;
                    this.backfillTopEmojis = {};
                    this.isFavoriteEmojiWithoutFetchingLatest = function(e) {
                        if (null == e) return !1;
                        var t, i = n.rebuildFavoriteEmojisWithoutFetchingLatest()[1];
                        return null != e.id ? i.has(e.id) : i.has(null !== (t = e.name) && void 0 !== t ? t : "")
                    };
                    this.guildId = t
                }
                var t = e.prototype;
                t.ensureDisambiguated = function() {
                    null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji()
                };
                t.getDisambiguatedEmoji = function() {
                    null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji();
                    return this.disambiguatedEmoji
                };
                t.getCustomEmoji = function() {
                    null == this.customEmojis && this._buildDisambiguatedCustomEmoji();
                    return this.customEmojis
                };
                t.getGroupedCustomEmoji = function() {
                    null == this.groupedCustomEmojis && this._buildDisambiguatedCustomEmoji();
                    return this.groupedCustomEmojis
                };
                t.getByName = function(e) {
                    null != this.emojisByName && null != this.unicodeAliases || this._buildDisambiguatedCustomEmoji();
                    if (Object.prototype.hasOwnProperty.call(this.emojisByName, e)) return this.emojisByName[e];
                    if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
                        var t = this.unicodeAliases[e];
                        if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t]
                    }
                };
                t.getEmoticonByName = function(e) {
                    null == this.emoticonsByName && this._buildDisambiguatedCustomEmoji();
                    if (Object.prototype.hasOwnProperty.call(this.emoticonsByName, e)) return this.emoticonsByName[e]
                };
                t.getById = function(e) {
                    null == this.emojisById && this._buildDisambiguatedCustomEmoji();
                    if (Object.prototype.hasOwnProperty.call(this.emojisById, e)) return this.emojisById[e]
                };
                t.getCustomEmoticonRegex = function() {
                    null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji();
                    null == this.emoticonRegex && null != this.escapedEmoticonNames && "" !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp("^\\b(".concat(this.escapedEmoticonNames, ")\\b")));
                    return this.emoticonRegex
                };
                t.getFrequentlyUsedEmojisWithoutFetchingLatest = function() {
                    var e = this;
                    this.ensureDisambiguated();
                    null == this.frequentlyUsed && (this.frequentlyUsed = ve.frequently.map((function(t) {
                        return null != t.id ? e.getById(t.id) : null != t.name ? R.ZP.getByName(t.name) : void 0
                    })).filter(N.lm));
                    return this.frequentlyUsed
                };
                t.rebuildFavoriteEmojisWithoutFetchingLatest = function() {
                    var e = this;
                    this.ensureDisambiguated();
                    if (null == this.favorites || null == this.favoriteNamesAndIds) {
                        var t, n;
                        this.favoriteNamesAndIds = new Set;
                        this.favorites = (null !== (n = null === (t = w.Z.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === t ? void 0 : t.emojis) && void 0 !== n ? n : []).map((function(t) {
                            var n;
                            null === (n = e.favoriteNamesAndIds) || void 0 === n || n.add(t);
                            var i = e.getById(t);
                            null == i && (i = R.ZP.getByName(t));
                            return i
                        })).filter(N.lm)
                    }
                    return [this.favorites, this.favoriteNamesAndIds]
                };
                t.getEmojiInPriorityOrderWithoutFetchingLatest = function() {
                    var e = new Set;
                    return this.favoriteEmojisWithoutFetchingLatest.concat(this.getFrequentlyUsedEmojisWithoutFetchingLatest()).filter((function(t) {
                        if (e.has(t)) return !1;
                        e.add(t);
                        return !0
                    }))
                };
                t.getTopEmojiWithoutFetchingLatest = function(e) {
                    var t = this;
                    if (!(0, y.Y)().shouldSeeTopEmojiBar) return ae;
                    this.ensureDisambiguated();
                    if (null == this.topEmojis) {
                        var n, i = me.get(e),
                            r = G.Z.getTopEmojiIdsByGuildId(e);
                        if (null == i && null == r) return ae;
                        var o = (null !== (n = null == i ? void 0 : i.emojiIds) && void 0 !== n ? n : r).map((function(e) {
                                var n;
                                return null !== (n = t.getById(e)) && void 0 !== n ? n : R.ZP.getByName(R.ZP.convertSurrogateToName(e, !1))
                            })),
                            u = [];
                        o.forEach((function(e) {
                            null != e && u.push(e)
                        }));
                        var a = this.getNewlyAddedEmojiForGuild(e).map((function(e) {
                            return e.id
                        }));
                        this.topEmojis = u.filter((function(e) {
                            return !a.includes(e.id)
                        }))
                    }
                    return this.topEmojis
                };
                t.getNewlyAddedEmojiForGuild = function(e) {
                    if (!(0, y.Y)().shouldSeeNewlyAddedEmoji) return ae;
                    this.ensureDisambiguated();
                    if (null == this.newlyAddedEmoji) return ae;
                    var t = this.newlyAddedEmoji[e];
                    return null == t ? ae : t
                };
                t.getBackfillTopEmojis = function(e) {
                    var t = this.getGroupedCustomEmoji();
                    if (null == t) return ae;
                    if (null == this.backfillTopEmojis[e]) {
                        var n = this.getNewlyAddedEmojiForGuild(e).map((function(e) {
                                return e.id
                            })),
                            i = this.getTopEmojiWithoutFetchingLatest(e).map((function(e) {
                                return e.id
                            }));
                        if (null != t[e]) {
                            var r = t[e].filter((function(e) {
                                    return !n.includes(e.id) && !i.includes(e.id)
                                })),
                                o = n.length + i.length,
                                u = o < 9 ? 9 - o : 0;
                            this.backfillTopEmojis[e] = r.sort((function(e, t) {
                                return D.Z.compare(e.id, t.id)
                            })).slice(0, u)
                        } else this.backfillTopEmojis[e] = ae
                    }
                    return this.backfillTopEmojis[e]
                };
                t.getEscapedCustomEmoticonNames = function() {
                    null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji();
                    return this.escapedEmoticonNames
                };
                t.nameMatchesChain = function(e) {
                    return r()(this.getDisambiguatedEmoji()).filter((function(t) {
                        var n = t.names,
                            i = t.name,
                            o = null != n && r().some(n, e),
                            u = null != i && e(i),
                            a = null != i && r().some(g.getTermsForEmoji(i), e);
                        return o || u || a
                    }))
                };
                t._buildDisambiguatedCustomEmoji = function() {
                    var e = this,
                        t = {},
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
                                o = null !== (i = t[r]) && void 0 !== i ? i : 0;
                            t[r] = o + 1;
                            if (o > 0) {
                                var u = "".concat(r, "~").concat(o);
                                n = Y(K({}, n), {
                                    name: u,
                                    originalName: r,
                                    allNamesString: ":".concat(u, ":")
                                })
                            }
                            e.emojisByName[n.name] = n;
                            if ("names" in n) {
                                var a;
                                null === (a = n.names) || void 0 === a || a.slice(1).forEach((function(t) {
                                    return e.unicodeAliases[t] = n.name
                                }))
                            }
                            if (null != n.id) {
                                e.emojisById[n.id] = n;
                                e.customEmojis[n.name] = n;
                                var l, s;
                                switch (n.type) {
                                    case L.B.GUILD:
                                        l = n.guildId;
                                        s = !0;
                                        break;
                                    case L.B.PACK:
                                        l = n.packId
                                }
                                if (null != l) {
                                    null != e.groupedCustomEmojis[l] ? e.groupedCustomEmojis[l].push(n) : e.groupedCustomEmojis[l] = [n];
                                    s && D.Z.compare(n.id, ue) >= 0 && (null != e.newlyAddedEmoji[l] ? e.newlyAddedEmoji[l].push(n) : e.newlyAddedEmoji[l] = [n])
                                }
                            }
                            null == e.disambiguatedEmoji && (e.disambiguatedEmoji = []);
                            e.disambiguatedEmoji.push(n)
                        },
                        o = function(t) {
                            if (!Object.prototype.hasOwnProperty.call(e.emoticonsByName, t.name)) {
                                n.push(B.Z.escape(t.name));
                                e.emoticonsByName[t.name] = t
                            }
                        };
                    R.ZP.forEach(i);
                    var u = function(e) {
                        var t = ce[null == e ? "null" : e];
                        if (null != t) {
                            r().each(t.usableEmojis, i);
                            r().each(t.emoticons, o)
                        }
                    };
                    u(this.guildId);
                    for (var a in this.newlyAddedEmoji) null != this.newlyAddedEmoji[a] ? this.newlyAddedEmoji[a] = this.newlyAddedEmoji[a].sort((function(e, t) {
                        return D.Z.compare(t.id, e.id)
                    })).slice(0, 3) : this.newlyAddedEmoji[a] = [];
                    C.Z.getFlattenedGuildIds().forEach((function(t) {
                        t !== e.guildId && u(t)
                    }));
                    _.Z.getPacksForUser().map((function(e) {
                        null != e.content.emojis && r().each(e.content.emojis, i)
                    }));
                    this.escapedEmoticonNames = n.join("|")
                };
                e.get = function(t) {
                    void 0 === t && (t = null);
                    null != e._lastInstance && e._lastInstance.guildId === t || (e._lastInstance = new e(t));
                    return e._lastInstance
                };
                e.reset = function() {
                    e._lastInstance = null
                };
                e.resetFrequentlyUsed = function() {
                    null != e._lastInstance && (e._lastInstance.frequentlyUsed = null)
                };
                e.resetFavorites = function() {
                    if (null != e._lastInstance) {
                        e._lastInstance.favorites = null;
                        e._lastInstance.favoriteNamesAndIds = null
                    }
                };
                e.clear = function(t) {
                    null != e._lastInstance && e._lastInstance.guildId === t && (e._lastInstance = null)
                };
                q(e, [{
                    key: "favoriteEmojisWithoutFetchingLatest",
                    get: function() {
                        return this.rebuildFavoriteEmojisWithoutFetchingLatest()[0]
                    }
                }]);
                return e
            }();
            Ee._lastInstance = null;
            var ve = new c.Z({
                computeBonus: function() {
                    return 100
                },
                computeWeight: function(e) {
                    var t = 0;
                    e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10);
                    return t
                },
                lookupKey: function(e) {
                    return null !== (ge = R.ZP.getByName(e)) && void 0 !== ge ? ge : he(e)
                },
                afterCompute: function() {
                    Ee.resetFrequentlyUsed();
                    se = ie.slice(0);
                    r().some(ce, (function(e) {
                        return e.usableEmojis.length > 0
                    })) || se.splice(ie.indexOf(Z.UX.CUSTOM), 1)
                },
                numFrequentlyItems: 42
            });

            function je() {
                ce = {};
                de.clear();
                fe = {};
                Ee.reset();
                me.clear();
                le = 2
            }

            function be(e) {
                null != ce[e] && delete ce[e]
            }

            function Oe() {
                fe = null;
                Ee.reset();
                0 !== le && ve.compute()
            }

            function Se(e, t) {
                be(e);
                Ee.clear(e);
                if (null != t) {
                    var n = T.default.getCurrentUser();
                    if (null != n) {
                        var i = ((0, O.gn)(), !1);
                        ce[e] = new oe(e, n.id, t, i)
                    }
                }
            }

            function _e() {
                var e, t, n, i = null === (e = w.Z.settings.textAndImages) || void 0 === e || null === (t = e.diversitySurrogate) || void 0 === t ? void 0 : t.value;
                null != i && R.ZP.setDefaultDiversitySurrogate(i);
                Ee.reset();
                var o, u = null !== (o = null === (n = w.Z.frecencyWithoutFetchingLatest.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== o ? o : {};
                ve.overwriteHistory(r().mapValues(u, (function(e) {
                    return Y(K({}, e), {
                        recentUses: e.recentUses.map(Number).filter((function(e) {
                            return e > 0
                        }))
                    })
                })), re.pendingUsages);
                if (r().isEmpty(u) && r().isEmpty(re.pendingUsages) && w.Z.hasLoaded(M.yP.FRECENCY_AND_FAVORITES_SETTINGS)) {
                    ve.track("thumbsup");
                    ve.track("thumbsup");
                    ve.track("eyes");
                    ve.track("eyes");
                    ve.track("laughing");
                    ve.track("laughing");
                    ve.track("watermelon");
                    ve.track("fork_and_knife");
                    ve.track("yum");
                    ve.track("weary");
                    ve.track("tired_face");
                    ve.track("poop");
                    ve.track("100")
                }
            }

            function Ie(e) {
                var t = !0,
                    n = !1,
                    i = void 0;
                try {
                    for (var r, o = e[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                        var u, a, l = r.value,
                            s = null !== (a = null !== (u = l.id) && void 0 !== u ? u : l.uniqueName) && void 0 !== a ? a : l.name;
                        if (null != s) {
                            ve.track(s);
                            re.pendingUsages.push({
                                key: s,
                                timestamp: Date.now()
                            })
                        }
                    }
                } catch (e) {
                    n = !0;
                    i = e
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (n) throw i
                    }
                }
                var c = e.length > 0;
                c && 0 !== le && ve.compute();
                return c
            }

            function we(e) {
                var t = e.guildId,
                    n = e.role;
                if (!(0, E.Z)(n)) return !1;
                var i = ce[t];
                Se(t, null == i ? void 0 : i.emojis);
                Oe()
            }

            function Pe() {
                de = _.Z.getPacksById();
                Oe()
            }
            var Ue = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && z(e, t)
                }(n, e);
                var t = te(n);

                function n() {
                    H(this, n);
                    return t.apply(this, arguments)
                }
                var i = n.prototype;
                i.initialize = function(e) {
                    this.waitFor(d.Z, U.Z, P.ZP, b.Z, _.Z, I.default, j.Z, G.Z, T.default);
                    null != e && (re = e);
                    this.syncWith([w.Z], _e);
                    this.syncWith([_.Z], Pe)
                };
                i.getState = function() {
                    return re
                };
                i.hasPendingUsage = function() {
                    return re.pendingUsages.length > 0
                };
                i.getGuildEmoji = function(e) {
                    pe();
                    var t, n = ce[e];
                    return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : []
                };
                i.getUsableGuildEmoji = function(e) {
                    pe();
                    var t, n = ce[e];
                    return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : []
                };
                i.getGuilds = function() {
                    return ce
                };
                i.getDisambiguatedEmojiContext = function(e) {
                    pe();
                    return Ee.get(e)
                };
                i.getSearchResultsOrder = function(e, t, n) {
                    var i = t.toLowerCase(),
                        o = B.Z.escape(i);
                    if (e.length > 0) {
                        var u = new RegExp("^".concat(o), "i"),
                            a = new RegExp("(^|_|[A-Z])".concat(o, "s?([A-Z]|_|$)")),
                            l = a.test.bind(a),
                            s = u.test.bind(u),
                            c = function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                                if (null == e || null == t) return 0;
                                var n = e.toLowerCase(),
                                    r = 1 + (n === i ? 4 : 0) + (l(n) || l(e) ? 2 : 0) + (s(e) ? 1 : 0),
                                    o = ve.getScore(t);
                                null != o && (r *= o / 100);
                                return r
                            };
                        e = r().orderBy(e, [function(e) {
                            return null != e.names ? c(e.names[0]) : c(e.name, e.id)
                        }, function(e) {
                            return null != e.names ? e.names[0] : e.name
                        }], ["desc", "asc"])
                    }
                    n > 0 && (e = e.slice(0, n));
                    return e
                };
                i.searchWithoutFetchingLatest = function(e) {
                    var t = e.channel,
                        n = e.query,
                        i = e.count,
                        r = void 0 === i ? 0 : i,
                        o = e.intention,
                        u = e.includeExternalGuilds,
                        a = void 0 === u || u,
                        l = e.canViewAndUsePackEmoji,
                        s = e.matchComparator;
                    pe();
                    var c, d = n.toLowerCase(),
                        f = B.Z.escape(d);
                    if (null == s) {
                        var m = new RegExp("".concat(f), "i");
                        c = m.test.bind(m)
                    } else c = s;
                    var h = null != t ? t.getGuildId() : null,
                        y = Ee.get(h).nameMatchesChain(c).reduce((function(e, n) {
                            var i = A.ZP.getEmojiUnavailableReason({
                                emoji: n,
                                channel: t,
                                intention: o,
                                canViewAndUsePackEmoji: l
                            });
                            if (i === F.Z5.PREMIUM_LOCKED) e.locked.push(n);
                            else if (null == i) {
                                !a && !A.ZP.isInternalEmojiForGuildId(n, null == t ? void 0 : t.getGuildId()) || e.unlocked.push(n)
                            }
                            return e
                        }), {
                            unlocked: [],
                            locked: []
                        });
                    return {
                        unlocked: this.getSearchResultsOrder(y.unlocked, n, r),
                        locked: this.getSearchResultsOrder(y.locked, n, 0)
                    }
                };
                i.getUsableCustomEmojiById = function(e) {
                    pe();
                    return he(e)
                };
                i.getCustomEmojiById = function(e) {
                    pe();
                    return function(e) {
                        var t, n, i, r = ye()[e];
                        return null != r ? null !== (i = null === (t = ce[r]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== i ? i : null === (n = de.get(r)) || void 0 === n ? void 0 : n.emojiById[e] : null
                    }(e)
                };
                i.getTopEmoji = function(e) {
                    if (null == e) return ae;
                    pe();
                    return Ee.get(e).getTopEmojiWithoutFetchingLatest(e)
                };
                i.getNewlyAddedEmoji = function(e) {
                    if (null == e) return ae;
                    pe();
                    return Ee.get(e).getNewlyAddedEmojiForGuild(e)
                };
                i.getBackfillTopEmojis = function(e) {
                    if (null == e) return ae;
                    pe();
                    return Ee.get(e).getBackfillTopEmojis(e)
                };
                i.getTopEmojisMetadata = function(e) {
                    return me.get(e)
                };
                i.hasUsableEmojiInAnyGuild = function() {
                    pe();
                    return Object.keys(ce).some((function(e) {
                        return ce[e].usableEmojis.length > 0
                    }))
                };
                i.hasFavoriteEmojis = function(e) {
                    var t = Ee.get(e);
                    return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
                };
                q(n, [{
                    key: "categories",
                    get: function() {
                        return se
                    }
                }, {
                    key: "diversitySurrogate",
                    get: function() {
                        var e;
                        return null !== (e = R.ZP.getDefaultDiversitySurrogate()) && void 0 !== e ? e : ""
                    }
                }, {
                    key: "emojiFrecencyWithoutFetchingLatest",
                    get: function() {
                        return ve
                    }
                }]);
                return n
            }(l.ZP.PersistedStore);
            Ue.displayName = "EmojiStore";
            Ue.persistKey = "EmojiStoreV2";
            const Ce = new Ue(s.Z, {
                BACKGROUND_SYNC: function() {
                    je()
                },
                CONNECTION_OPEN: function(e) {
                    je();
                    var t = !0,
                        n = !1,
                        i = void 0;
                    try {
                        for (var r, o = e.guilds[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                            var u = r.value;
                            Se(u.id, u.emojis)
                        }
                    } catch (e) {
                        n = !0;
                        i = e
                    } finally {
                        try {
                            t || null == o.return || o.return()
                        } finally {
                            if (n) throw i
                        }
                    }
                    le = e.guilds.every((function(e) {
                        return null != e.emojis
                    })) ? 1 : 0;
                    Oe()
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t, n = e.guildId;
                    if (e.user.id === (null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) {
                        var i = ce[n];
                        Se(n, null == i ? void 0 : i.usableEmojis);
                        Oe()
                    }
                },
                GUILD_CREATE: function(e) {
                    0 !== le && null == e.guild.emojis && null != e.guild.emojiUpdates && (le = 0);
                    Se(e.guild.id, e.guild.emojis);
                    Oe()
                },
                GUILD_UPDATE: function(e) {
                    Se(e.guild.id, e.guild.emojis);
                    Oe()
                },
                GUILD_EMOJIS_UPDATE: function(e) {
                    Se(e.guildId, e.emojis);
                    Oe()
                },
                GUILD_DELETE: function(e) {
                    var t = e.guild;
                    be(t.id);
                    me.delete(t.id);
                    Oe()
                },
                MESSAGE_REACTION_ADD: function(e) {
                    if (!e.optimistic) return !1;
                    var t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : R.ZP.getByName(R.ZP.convertSurrogateToName(e.emoji.name, !1));
                    if (null == t) return !1;
                    Ie([t])
                },
                EMOJI_TRACK_USAGE: function(e) {
                    Ie(e.emojiUsed)
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t = e.settings.type,
                        n = e.wasSaved;
                    g.setEmojiLocale(I.default.locale);
                    if (t !== M.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    re.pendingUsages = []
                },
                GUILD_ROLE_CREATE: we,
                GUILD_ROLE_UPDATE: we,
                TOP_EMOJIS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.topEmojisMetadata;
                    me.set(t, {
                        emojiIds: n.map((function(e) {
                            return e.emojiId
                        })),
                        topEmojisTTL: u()(u()()).add(1, "days").valueOf()
                    })
                },
                INVENTORY_FETCH_SUCCESS: function(e) {
                    e = null !== e ? e : Q(new TypeError("Cannot destructure undefined"));
                    Pe()
                },
                INVENTORY_COLLECT_PACK_SUCCESS: function(e) {
                    e = null !== e ? e : Q(new TypeError("Cannot destructure undefined"));
                    Oe()
                },
                INVENTORY_REMOVE_PACK_SUCCESS: function(e) {
                    e = null !== e ? e : Q(new TypeError("Cannot destructure undefined"));
                    Oe()
                },
                LOGOUT: function(e) {
                    je()
                }
            })
        },
        37763: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var i = n(202351),
                r = n(744564);

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function a(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function c(e) {
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
                    var n, i = u(e);
                    if (t) {
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
            var h = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = c(n);

                function n() {
                    o(this, n);
                    return t.apply(this, arguments)
                }
                var i = n.prototype;
                i.initialize = function(e) {
                    f = null != e ? e : d
                };
                i.getState = function() {
                    return f
                };
                i.getTopEmojiIdsByGuildId = function(e) {
                    return f.topEmojisByGuildId[e]
                };
                i.getIsFetching = function(e) {
                    return m[e]
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
                TOP_EMOJIS_FETCH: function(e) {
                    var t = e.guildId;
                    m[t] = !0
                },
                TOP_EMOJIS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.topEmojisMetadata;
                    f.topEmojisByGuildId[t] = n.map((function(e) {
                        return e.emojiId
                    }));
                    m[t] = !1
                }
            })
        }
    }
]);