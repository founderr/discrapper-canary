(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [19493], {
        771068: (e, t, n) => {
            "use strict";
            n.d(t, {
                T_: () => a,
                al: () => l,
                dx: () => s,
                gH: () => f,
                S1: () => d,
                Rz: () => p
            });
            var r = n(496486),
                o = n(744564),
                i = n(202181),
                u = n(575978);

            function a(e, t) {
                o.Z.dispatch({
                    type: "WINDOW_FOCUS",
                    windowId: (0, u.ZY)(e),
                    focused: t
                })
            }

            function l(e) {
                o.Z.dispatch({
                    type: "WINDOW_HIDDEN",
                    windowId: (0, u.ZY)(e)
                })
            }
            var c = (0, r.memoize)((function(e) {
                return (0, r.debounce)((function(t, n) {
                    o.Z.dispatch({
                        type: "WINDOW_RESIZED",
                        windowId: e,
                        width: t,
                        height: n
                    })
                }), 100)
            }));

            function s(e) {
                var t = (0, u.ZY)(e);
                c(t)(e.innerWidth, e.innerHeight)
            }

            function f(e) {
                var t = (0, u.ZY)(e);
                o.Z.dispatch({
                    type: "WINDOW_FULLSCREEN_CHANGE",
                    windowId: t,
                    isElementFullscreen: (0, i.rB)(null, e.document)
                })
            }

            function d(e) {
                var t = (0, u.ZY)(e),
                    n = e.document;
                o.Z.dispatch({
                    type: "WINDOW_INIT",
                    windowId: t,
                    isElementFullscreen: (0, i.rB)(null, n),
                    focused: n.hasFocus(),
                    width: e.innerWidth,
                    height: e.innerHeight
                })
            }

            function p(e) {
                o.Z.dispatch({
                    type: "WINDOW_UNLOAD",
                    windowId: (0, u.ZY)(e)
                })
            }
        },
        516217: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => u,
                Qd: () => a,
                yh: () => l,
                vM: () => c
            });
            var r = n(260561),
                o = n(464187),
                i = (0, r.B)({
                    kind: "guild",
                    id: "2023-02_burst_reaction_guild_experiment",
                    label: "Burst Reactions",
                    defaultConfig: {
                        enabled: !1,
                        hasTabUI: !1,
                        hasInfinite: !1,
                        hasFreeBursts: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enabled",
                        config: {
                            enabled: !0,
                            hasTabUI: !1,
                            hasInfinite: !1,
                            hasFreeBursts: !0
                        }
                    }, {
                        id: 2,
                        label: "Tab UI",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasInfinite: !1,
                            hasFreeBursts: !1
                        }
                    }, {
                        id: 4,
                        label: "Free Bursts",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasInfinite: !1,
                            hasFreeBursts: !0
                        }
                    }]
                });
            const u = i;
            var a = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = null != e ? e : o.Z.getGuildId(),
                        r = i.useExperiment({
                            guildId: null != n ? n : "",
                            location: "169958_1"
                        }, {
                            autoTrackExposure: t
                        }),
                        u = l.useExperiment({
                            location: "169958_2"
                        }, {
                            autoTrackExposure: !0
                        });
                    return {
                        enabled: r.enabled || u.enabled,
                        guildEnabled: r.enabled,
                        userEnabled: u.enabled,
                        hasTwoButtonEntryPoint: !!u.enabled && u.hasTwoButtonEntryPoint,
                        hasTabUI: u.enabled ? u.hasTabUI : r.hasTabUI,
                        hasFreeBursts: u.enabled ? u.hasFreeBursts : r.hasFreeBursts,
                        hasBurstShake: u.hasBurstShake,
                        hasPlayRandomAnimations: u.hasPlayRandomAnimations,
                        hasBurstGlow: u.hasBurstGlow,
                        hasSendAnimation: u.hasSendAnimation
                    }
                },
                l = (0, r.B)({
                    kind: "user",
                    id: "2022-09_burst_reactions",
                    label: "Burst Reactions User Experiment",
                    defaultConfig: {
                        enabled: !1,
                        hasTabUI: !1,
                        hasTwoButtonEntryPoint: !1,
                        hasFreeBursts: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "User two entry points",
                        config: {
                            enabled: !0,
                            hasTabUI: !1,
                            hasTwoButtonEntryPoint: !0,
                            hasFreeBursts: !0
                        }
                    }, {
                        id: 2,
                        label: "User Tab UI",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !1,
                            hasFreeBursts: !1
                        }
                    }, {
                        id: 4,
                        label: "User Free Bursts",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !1,
                            hasFreeBursts: !0
                        }
                    }, {
                        id: 5,
                        label: "User Free Bursts",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !1,
                            hasFreeBursts: !0
                        }
                    }, {
                        id: 6,
                        label: "Combined entry point and tabs",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !0,
                            hasFreeBursts: !0
                        }
                    }, {
                        id: 7,
                        label: "Combined entry point and tabs + double weekly refills",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !0,
                            hasFreeBursts: !0
                        }
                    }, {
                        id: 8,
                        label: "All additional polish",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !0,
                            hasFreeBursts: !0,
                            hasBurstShake: !0,
                            hasDesktopNotifications: !0,
                            hasPlayRandomAnimations: !0,
                            hasBurstGlow: !0,
                            hasSendAnimation: !0
                        }
                    }, {
                        id: 9,
                        label: "All additional polish except notifications",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !0,
                            hasFreeBursts: !0,
                            hasBurstShake: !0,
                            hasDesktopNotifications: !1,
                            hasPlayRandomAnimations: !0,
                            hasBurstGlow: !0,
                            hasSendAnimation: !0
                        }
                    }, {
                        id: 10,
                        label: "The exact same as bucket six, just with a different label",
                        config: {
                            enabled: !0,
                            hasTabUI: !0,
                            hasTwoButtonEntryPoint: !0,
                            hasFreeBursts: !0
                        }
                    }, {
                        id: 11,
                        label: "New send experience",
                        config: {
                            enabled: !0,
                            hasTabUI: !1,
                            hasTwoButtonEntryPoint: !1,
                            hasFreeBursts: !1,
                            hasBurstShake: !0,
                            hasDesktopNotifications: !1,
                            hasPlayRandomAnimations: !0,
                            hasBurstGlow: !0,
                            hasSendAnimation: !0
                        }
                    }]
                }),
                c = function() {
                    return l.useExperiment({
                        location: "169958_3"
                    }, {
                        autoTrackExposure: !0
                    }).enabled
                };
            (0, r.B)({
                kind: "user",
                id: "2023-06_burst_reaction_entry_point_ordering",
                label: "Burst Reaction Entry Point Ordering",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Regular Reaction Prioritized",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        815678: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => O
            });
            var r = n(496486),
                o = n.n(r);
            const i = (0, n(260561).B)({
                kind: "user",
                id: "2023-03_store_latest_message_data",
                label: "Store latest message data",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use latest data from api/gateway",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var u = n(828439),
                a = n(994130),
                l = n(649536),
                c = n(102921);
            var s = n(2590);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function h(e, t, n) {
                t && p(e.prototype, t);
                n && p(e, n);
                return e
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        _(e, t, n[t])
                    }))
                }
                return e
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                var n = e.get(t.id);
                return null == n || function(e, t) {
                    var n, r, o = null != e.editedTimestamp ? +e.editedTimestamp.toDate() : 0;
                    return (null != t.edited_timestamp ? +new Date(t.edited_timestamp) : 0) > o || e.embeds.length < (null !== (r = null === (n = t.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0) || e.content !== t.content
                }(n, t) || e.cached ? (0, l.e5)(t) : n
            }
            var y = function() {
                    function e(t) {
                        d(this, e);
                        this._messages = [];
                        this._map = {};
                        this._wasAtEdge = !1;
                        this._isCacheBefore = t
                    }
                    var t = e.prototype;
                    t.clone = function() {
                        var t = new e(this._isCacheBefore);
                        t._map = E({}, this._map);
                        t._messages = v(this._messages);
                        t._wasAtEdge = this._wasAtEdge;
                        return t
                    };
                    t.clear = function() {
                        this._map = {};
                        this._messages = [];
                        this._wasAtEdge = !1
                    };
                    t.remove = function(e) {
                        this._messages = o().filter(this._messages, (function(t) {
                            return t.id !== e
                        }));
                        delete this._map[e]
                    };
                    t.removeMany = function(e) {
                        var t = this;
                        o().each(e, (function(e) {
                            delete t._map[e]
                        }));
                        this._messages = this._messages.filter((function(t) {
                            return -1 === e.indexOf(t.id)
                        }))
                    };
                    t.replace = function(e, t) {
                        var n = this._map[e];
                        if (null != n) {
                            delete this._map[e];
                            this._map[t.id] = t;
                            this._messages[this._messages.indexOf(n)] = t
                        }
                    };
                    t.update = function(e, t) {
                        var n = this._map[e];
                        if (null != n) {
                            var r = t(n);
                            this._map[n.id] = r;
                            this._messages[this._messages.indexOf(n)] = r
                        }
                    };
                    t.has = function(e) {
                        return null != this._map[e]
                    };
                    t.get = function(e) {
                        return this._map[e]
                    };
                    t.forEach = function(e, t) {
                        this._messages.forEach(e, t)
                    };
                    t.cache = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = this;
                        0 === this.length && (this._wasAtEdge = t);
                        var r = this._messages.length + e.length;
                        if (r > s.FD8) {
                            this._wasAtEdge = !1;
                            if (e.length > s.FD8) {
                                this._isCacheBefore ? this._messages = e.slice(e.length - s.FD8) : this._messages = e.slice(0, s.FD8);
                                this._map = {};
                                this._messages.forEach((function(e) {
                                    return n._map[e.id] = e
                                }));
                                return
                            }
                            var o = s.FD8 - e.length;
                            this._isCacheBefore ? this._messages = this._messages.slice(Math.max(this._messages.length - o, 0)) : this._messages = this._messages.slice(0, o)
                        }
                        this._messages = this._isCacheBefore ? v(this._messages).concat(v(e)) : v(e).concat(v(this._messages));
                        this._map = {};
                        this._messages.forEach((function(e) {
                            return n._map[e.id] = e
                        }))
                    };
                    t.extractAll = function() {
                        var e = this._messages;
                        this._messages = [];
                        this._map = {};
                        return e
                    };
                    t.extract = function(e) {
                        var t, n = this;
                        if (this._isCacheBefore) {
                            var r = Math.max(this.length - e, 0),
                                o = this.length;
                            t = this._messages.slice(r, o);
                            this._messages.splice(r)
                        } else {
                            var i = Math.min(e, this.length);
                            t = this._messages.slice(0, i);
                            this._messages.splice(0, e)
                        }
                        t.forEach((function(e) {
                            return delete n._map[e.id]
                        }));
                        return t
                    };
                    h(e, [{
                        key: "wasAtEdge",
                        get: function() {
                            return this._wasAtEdge
                        },
                        set: function(e) {
                            this._wasAtEdge = e
                        }
                    }, {
                        key: "length",
                        get: function() {
                            return this._messages.length
                        }
                    }]);
                    return e
                }(),
                g = function() {
                    function e(t) {
                        d(this, e);
                        this._array = [];
                        this._map = {};
                        this.channelId = t;
                        this.ready = !1;
                        this.jumpTargetId = null;
                        this.jumpTargetOffset = 0;
                        this.jumpSequenceId = 1;
                        this.jumped = !1;
                        this.jumpedToPresent = !1;
                        this.jumpType = u.S.ANIMATED;
                        this.jumpFlash = !0;
                        this.jumpReturnTargetId = null;
                        this.hasMoreBefore = !0;
                        this.hasMoreAfter = !1;
                        this.loadingMore = !1;
                        this.revealedMessageId = null;
                        this._clearMessages();
                        this._before = new y(!0);
                        this._after = new y(!1);
                        this.cached = !1;
                        this.hasFetched = !1;
                        this.error = !1
                    }
                    var t = e.prototype;
                    t.mutate = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = new e(this.channelId);
                        r._array = n ? v(this._array) : this._array;
                        r._map = n ? E({}, this._map) : this._map;
                        r._after = n ? this._after.clone() : this._after;
                        r._before = n ? this._before.clone() : this._before;
                        if (t instanceof Function) {
                            r.ready = this.ready;
                            r.jumpType = this.jumpType;
                            r.jumpTargetId = this.jumpTargetId;
                            r.jumpTargetOffset = this.jumpTargetOffset;
                            r.jumpSequenceId = this.jumpSequenceId;
                            r.jumped = this.jumped;
                            r.jumpedToPresent = this.jumpedToPresent;
                            r.jumpFlash = this.jumpFlash;
                            r.jumpReturnTargetId = this.jumpReturnTargetId;
                            r.focusTargetId = this.focusTargetId;
                            r.hasMoreBefore = this.hasMoreBefore;
                            r.hasMoreAfter = this.hasMoreAfter;
                            r.loadingMore = this.loadingMore;
                            r.revealedMessageId = this.revealedMessageId;
                            r.cached = this.cached;
                            r.hasFetched = this.hasFetched;
                            r.error = this.error;
                            t(r)
                        } else if ("object" == typeof t) {
                            r.ready = void 0 !== t.ready ? !0 === t.ready : this.ready;
                            r.jumpType = void 0 !== t.jumpType ? t.jumpType : this.jumpType;
                            r.jumpTargetId = void 0 !== t.jumpTargetId ? t.jumpTargetId : this.jumpTargetId;
                            r.jumpTargetOffset = void 0 !== t.jumpTargetOffset ? t.jumpTargetOffset : this.jumpTargetOffset;
                            r.jumpSequenceId = void 0 !== t.jumpSequenceId ? t.jumpSequenceId : this.jumpSequenceId;
                            r.jumped = void 0 !== t.jumped ? !0 === t.jumped : this.jumped;
                            r.jumpedToPresent = void 0 !== t.jumpedToPresent ? !0 === t.jumpedToPresent : this.jumpedToPresent;
                            r.jumpFlash = void 0 !== t.jumpFlash ? !0 === t.jumpFlash : this.jumpFlash;
                            r.jumpReturnTargetId = void 0 !== t.jumpReturnTargetId ? t.jumpReturnTargetId : this.jumpReturnTargetId;
                            r.focusTargetId = void 0 !== t.focusTargetId ? t.focusTargetId : this.focusTargetId;
                            r.hasMoreBefore = void 0 !== t.hasMoreBefore ? !0 === t.hasMoreBefore : this.hasMoreBefore;
                            r.hasMoreAfter = void 0 !== t.hasMoreAfter ? !0 === t.hasMoreAfter : this.hasMoreAfter;
                            r.loadingMore = void 0 !== t.loadingMore ? t.loadingMore : this.loadingMore;
                            r.revealedMessageId = void 0 !== t.revealedMessageId ? t.revealedMessageId : this.revealedMessageId;
                            r.cached = void 0 !== t.cached ? t.cached : this.cached;
                            r.hasFetched = void 0 !== t.hasFetched ? t.hasFetched : this.hasFetched;
                            r.error = void 0 !== t.error ? t.error : this.error
                        }
                        return r
                    };
                    t.toArray = function() {
                        return v(this._array)
                    };
                    t.forEach = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (n)
                            for (var r = this._array, o = r.length - 1; o >= 0 && !1 !== e.call(t, r[o], o); o--);
                        else this._array.forEach(e, t)
                    };
                    t.reduce = function(e, t) {
                        return this._array.reduce(e, t)
                    };
                    t.some = function(e, t) {
                        return this._array.some(e, t)
                    };
                    t.forAll = function(e, t) {
                        this._before.forEach(e, t);
                        this._array.forEach(e, t);
                        this._after.forEach(e, t)
                    };
                    t.findOldest = function(e) {
                        var t, n;
                        return null !== (n = null !== (t = o().find(this._before._messages, e)) && void 0 !== t ? t : o().find(this._array, e)) && void 0 !== n ? n : o().find(this._after._messages, e)
                    };
                    t.findNewest = function(e) {
                        var t, n;
                        return null !== (n = null !== (t = o().findLast(this._after._messages, e)) && void 0 !== t ? t : o().findLast(this._array, e)) && void 0 !== n ? n : o().findLast(this._before._messages, e)
                    };
                    t.map = function(e, t) {
                        return this._array.map(e, t)
                    };
                    t.first = function() {
                        return this._array[0]
                    };
                    t.last = function() {
                        return this._array[this._array.length - 1]
                    };
                    t.get = function(e) {
                        var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = this._map[e];
                        return null == r && n ? null !== (t = this._before.get(e)) && void 0 !== t ? t : this._after.get(e) : r
                    };
                    t.getByIndex = function(e) {
                        return this._array[e]
                    };
                    t.getAfter = function(e) {
                        var t = this.get(e);
                        if (null == t) return null;
                        var n = this._array.indexOf(t);
                        return -1 === n || n === this.length - 1 ? null : this._array[n + 1]
                    };
                    t.getManyAfter = function(e, t, n) {
                        var r = this.get(e);
                        if (null == r) return null;
                        var o = this._array.indexOf(r);
                        if (-1 === o) return null;
                        for (var i = [], u = o + 1; u < this.length && (-1 === t || i.length < t); u++)(null == n || n(this._array[u])) && i.push(this._array[u]);
                        return i
                    };
                    t.getManyBefore = function(e, t, n) {
                        var r = this.get(e);
                        if (null == r) return null;
                        var o = this._array.indexOf(r);
                        if (-1 === o) return null;
                        for (var i = [], u = o - 1; u >= 0 && (-1 === t || i.length < t); u--)(null == n || n(this._array[u])) && i.unshift(this._array[u]);
                        return i
                    };
                    t.has = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return null != this._map[e] || t && (this._before.has(e) || this._after.has(e))
                    };
                    t.indexOf = function(e) {
                        var t = -1;
                        this._array.find((function(n, r) {
                            if (n.id === e) {
                                t = r;
                                return !0
                            }
                            return !1
                        }));
                        return t
                    };
                    t.hasPresent = function() {
                        return this._after.length > 0 && this._after.wasAtEdge || !this.hasMoreAfter
                    };
                    t.hasBeforeCached = function(e) {
                        if (this.length > 0 && this._before.length > 0) {
                            var t = this.first();
                            return null != t && t.id === e
                        }
                        return !1
                    };
                    t.hasAfterCached = function(e) {
                        if (this.length > 0 && this._after.length > 0) {
                            var t = this.last();
                            return null != t && t.id === e
                        }
                        return !1
                    };
                    t.update = function(e, t) {
                        var n = this._map[e];
                        if (null == n) return this._before.has(e) ? this.mutate((function(n) {
                            return n._before.update(e, t)
                        }), !0) : this._after.has(e) ? this.mutate((function(n) {
                            return n._after.update(e, t)
                        }), !0) : this;
                        var r = t(n);
                        return this.mutate((function(e) {
                            e._map[n.id] = r;
                            e._array[e._array.indexOf(n)] = r
                        }), !0)
                    };
                    t.replace = function(e, t) {
                        var n = this._map[e];
                        return null == n ? this._before.has(e) ? this.mutate((function(n) {
                            return n._before.replace(e, t)
                        }), !0) : this._after.has(e) ? this.mutate((function(n) {
                            return n._after.replace(e, t)
                        }), !0) : this : this.mutate((function(r) {
                            delete r._map[e];
                            r._map[t.id] = t;
                            r._array[r._array.indexOf(n)] = t
                        }), !0)
                    };
                    t.remove = function(e) {
                        return this.mutate((function(t) {
                            delete t._map[e];
                            t._array = t._array.filter((function(t) {
                                return t.id !== e
                            }));
                            t._before.remove(e);
                            t._after.remove(e)
                        }), !0)
                    };
                    t.removeMany = function(e) {
                        var t = this;
                        return e.some((function(e) {
                            return t.has(e)
                        })) ? this.mutate((function(t) {
                            o().each(e, (function(e) {
                                delete t._map[e]
                            }));
                            t._array = t._array.filter((function(t) {
                                return -1 === e.indexOf(t.id)
                            }));
                            t._before.removeMany(e);
                            t._after.removeMany(e)
                        }), !0) : this
                    };
                    t.merge = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return this.mutate((function(r) {
                            r._merge(e, t, n)
                        }), !0)
                    };
                    t._merge = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = this;
                        e = e.filter((function(e) {
                            var t = r._map[e.id];
                            r._map[e.id] = e;
                            if (null != t) {
                                r._array[r._array.indexOf(t)] = e;
                                return !1
                            }
                            return !0
                        }));
                        if (n) {
                            var o = t ? this._before : this._after;
                            o.clear()
                        }
                        this._array = t ? v(e).concat(v(this._array)) : v(this._array).concat(v(e))
                    };
                    t.mergeDelta = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return this.mutate((function(r) {
                            r._before.clear();
                            r._after.clear();
                            var o = new Set(n);
                            e.forEach((function(e) {
                                return o.add(e.id)
                            }));
                            t.forEach((function(e) {
                                return o.add(e.id)
                            }));
                            r._array = r._array.filter((function(e) {
                                return !o.has(e.id)
                            })).concat(e.map((function(e) {
                                return (0, l.e5)(e)
                            })), t.map((function(e) {
                                return (0, l.e5)(e)
                            }))).sort((function(e, t) {
                                return c.Z.compare(e.id, t.id)
                            }))
                        }))
                    };
                    t._clearMessages = function() {
                        this._array = [];
                        this._map = {}
                    };
                    t.reset = function(e) {
                        return this.mutate((function(t) {
                            t._array = e;
                            t._map = {};
                            e.forEach((function(e) {
                                return t._map[e.id] = e
                            }));
                            t._before.clear();
                            t._after.clear()
                        }))
                    };
                    t.truncateTop = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = this._array.length - e;
                        return n <= 0 ? this : this.mutate((function(e) {
                            for (var t = 0; t < n; t++) delete e._map[e._array[t].id];
                            e._before.cache(e._array.slice(0, n), !e.hasMoreBefore);
                            e._array = e._array.slice(n);
                            e.hasMoreBefore = !0
                        }), t)
                    };
                    t.truncateBottom = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = this;
                        return this._array.length <= e ? this : this.mutate((function(t) {
                            for (var r = e; r < n._array.length; r++) delete t._map[t._array[r].id];
                            t._after.cache(t._array.slice(e, n._array.length), !t.hasMoreAfter);
                            t._array = t._array.slice(0, e);
                            t.hasMoreAfter = !0
                        }), t)
                    };
                    t.jumpToPresent = function(e) {
                        return this.mutate((function(t) {
                            var n = t._after.extractAll();
                            t.hasMoreAfter = !1;
                            var r = Math.max(n.length - e, 0),
                                o = n.slice(r);
                            n.splice(r);
                            t._before.cache(t._array);
                            t._before.cache(n);
                            t._clearMessages();
                            t._merge(o);
                            t.hasMoreBefore = t._before.length > 0;
                            t.jumped = !0;
                            t.jumpTargetId = null;
                            t.jumpTargetOffset = 0;
                            t.jumpedToPresent = !0;
                            t.jumpFlash = !1;
                            t.jumpReturnTargetId = null;
                            t.jumpSequenceId = t.jumpSequenceId + 1;
                            t.ready = !0;
                            t.loadingMore = !1
                        }), !0)
                    };
                    t.jumpToMessage = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = arguments.length > 3 ? arguments[3] : void 0,
                            o = arguments.length > 4 ? arguments[4] : void 0;
                        return this.mutate((function(i) {
                            i.jumped = !0;
                            i.jumpedToPresent = !1;
                            i.jumpType = null != o ? o : u.S.ANIMATED;
                            i.jumpTargetId = e;
                            i.jumpTargetOffset = null != e && null != n ? n : 0;
                            i.jumpSequenceId = i.jumpSequenceId + 1;
                            i.jumpFlash = t;
                            i.jumpReturnTargetId = r;
                            i.ready = !0;
                            i.loadingMore = !1
                        }), !1)
                    };
                    t.focusOnMessage = function(e) {
                        return this.mutate((function(t) {
                            t.focusTargetId = e;
                            t.ready = !0;
                            t.loadingMore = !1
                        }), !1)
                    };
                    t.loadFromCache = function(e, t) {
                        return this.mutate((function(n) {
                            var r = e ? n._before : n._after;
                            n._merge(r.extract(t), e);
                            var o = r.length > 0 || !r.wasAtEdge;
                            e ? n.hasMoreBefore = o : n.hasMoreAfter = o;
                            n.ready = !0;
                            n.loadingMore = !1
                        }), !0)
                    };
                    t.truncate = function(e, t) {
                        return this.length <= s.PNu ? this : e ? this.truncateBottom(s.j3N) : t ? this.truncateTop(s.j3N) : this
                    };
                    t.receiveMessage = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = null == e.nonce ? null : this.get(e.nonce, !0);
                        if (null != n && (e.author.id === n.author.id || null != e.interaction && e.interaction.user.id === n.author.id) && null != e.nonce && n.id === e.nonce) {
                            var r = (0, l.e5)(e);
                            null != n.interactionData && (r.interactionData = n.interactionData);
                            return this.replace(e.nonce, r)
                        }
                        if (!this.hasMoreAfter) {
                            var o = i.getCurrentConfig({
                                    location: "2ecb25_1"
                                }, {
                                    autoTrackExposure: !1
                                }).enabled ? (0, l.e5)(e) : m(this, e),
                                u = this.merge([o]);
                            return t ? u.truncateTop(s.j3N, !1) : this.length > s.PNu ? u.truncateBottom(s.j3N, !1) : u
                        }
                        this._after.wasAtEdge && (this._after.wasAtEdge = !1);
                        return this
                    };
                    t.receivePushNotification = function(e) {
                        return null != (null == e.nonce ? null : this.get(e.nonce, !0)) ? this : this.mutate({
                            ready: !0,
                            cached: !0
                        }).merge([m(this, e)])
                    };
                    t.loadStart = function(e) {
                        var t, n, r, o;
                        return this.mutate({
                            loadingMore: !0,
                            jumped: null != e,
                            jumpedToPresent: null !== (t = null == e ? void 0 : e.present) && void 0 !== t && t,
                            jumpTargetId: null !== (n = null == e ? void 0 : e.messageId) && void 0 !== n ? n : null,
                            jumpTargetOffset: null !== (r = null == e ? void 0 : e.offset) && void 0 !== r ? r : 0,
                            jumpReturnTargetId: null !== (o = null == e ? void 0 : e.returnMessageId) && void 0 !== o ? o : null,
                            ready: null == e && this.ready
                        })
                    };
                    t.loadComplete = function(e) {
                        var t, n, r, a, c, s, f, d, p, h, _, E = this,
                            y = v(e.newMessages),
                            g = null !== (t = e.isBefore) && void 0 !== t && t,
                            O = null !== (n = e.isAfter) && void 0 !== n && n,
                            T = null !== (r = e.jump) && void 0 !== r ? r : null,
                            I = null !== (a = e.hasMoreBefore) && void 0 !== a && a,
                            b = null !== (c = e.hasMoreAfter) && void 0 !== c && c,
                            A = null !== (s = e.cached) && void 0 !== s && s,
                            S = o()(y).reverse().map(i.getCurrentConfig({
                                location: "2ecb25_2"
                            }, {
                                autoTrackExposure: !1
                            }).enabled ? function(e) {
                                return (0, l.e5)(e)
                            } : function(e) {
                                return m(E, e)
                            }).value(),
                            R = null;
                        return R = (R = (g || O) && null == T && this.ready ? this.merge(S, g, !0) : this.reset(S)).mutate({
                            ready: !0,
                            loadingMore: !1,
                            jumpType: null !== (f = null == T ? void 0 : T.jumpType) && void 0 !== f ? f : u.S.ANIMATED,
                            jumpFlash: null !== (d = null == T ? void 0 : T.flash) && void 0 !== d && d,
                            jumped: null != T,
                            jumpedToPresent: null !== (p = null == T ? void 0 : T.present) && void 0 !== p && p,
                            jumpTargetId: null !== (h = null == T ? void 0 : T.messageId) && void 0 !== h ? h : null,
                            jumpTargetOffset: null != T && null != T.messageId && null != T.offset ? T.offset : 0,
                            jumpSequenceId: null != T ? R.jumpSequenceId + 1 : R.jumpSequenceId,
                            jumpReturnTargetId: null !== (_ = null == T ? void 0 : T.returnMessageId) && void 0 !== _ ? _ : null,
                            hasMoreBefore: null == T && O ? R.hasMoreBefore : I,
                            hasMoreAfter: null == T && g ? R.hasMoreAfter : b,
                            cached: A,
                            hasFetched: e.hasFetched,
                            error: !1
                        })
                    };
                    t.addCachedMessages = function(e, t) {
                        var n = this;
                        (0, a.Z)(e);
                        var r = e.map((function(e) {
                            return m(n, e)
                        })).reverse();
                        this._array.filter((function(e) {
                            return !r.some((function(t) {
                                return t.id === e.id
                            }))
                        })).forEach((function(e) {
                            return o = function(e, t, n) {
                                for (var r = 0, o = e.length; r < o;) {
                                    var i = r + o >>> 1;
                                    n(e[i], t) < 0 ? r = i + 1 : o = i
                                }
                                return r
                            }(t = r, n = e, (function(e, t) {
                                return c.Z.compare(e.id, t.id)
                            })), void t.splice(o, 0, n);
                            var t, n, o
                        }));
                        return this.reset(r).mutate({
                            ready: !0,
                            cached: t,
                            error: !1
                        })
                    };
                    e.forEach = function(t) {
                        o().forEach(e._channelMessages, t)
                    };
                    e.get = function(t) {
                        return e._channelMessages[t]
                    };
                    e.hasPresent = function(t) {
                        var n = e.get(t);
                        return null != n && n.hasPresent()
                    };
                    e.getOrCreate = function(t) {
                        var n = e._channelMessages[t];
                        if (null == n) {
                            n = new e(t);
                            e._channelMessages[t] = n
                        }
                        return n
                    };
                    e.clear = function(t) {
                        delete e._channelMessages[t]
                    };
                    e.clearCache = function(t) {
                        var n = e._channelMessages[t];
                        if (null != n) {
                            n._before.clear();
                            n._after.clear();
                            this.commit(n)
                        }
                    };
                    e.commit = function(t) {
                        e._channelMessages[t.channelId] = t
                    };
                    h(e, [{
                        key: "length",
                        get: function() {
                            return this._array.length
                        }
                    }]);
                    return e
                }();
            g._channelMessages = {};
            const O = g
        },
        769915: (e, t, n) => {
            "use strict";
            n.d(t, {
                $V: () => M,
                Bz: () => D,
                hc: () => U,
                ZP: () => Z
            });
            var r = n(441143),
                o = n.n(r),
                i = n(575494),
                u = n(281110),
                a = n(73904),
                l = n(396043),
                c = n(296602),
                s = n(988135),
                f = n(863579),
                d = n(664625),
                p = n(584690),
                h = n(149258),
                _ = n(506474),
                E = n(124453),
                v = n(598143),
                m = n(2590);

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
                T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return T(e)
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }

            function b(e, t) {
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

            function A(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function S(e, t) {
                return !t || "object" !== N(t) && "function" != typeof t ? function(e) {
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

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var N = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function w(e) {
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
                    var n, r = T(e);
                    if (t) {
                        var o = T(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }
            var P, M, L = null;
            __OVERLAY__ && (L = n(674482).Z);
            ! function(e) {
                e.OVERLAY_UNLOCKED = "overlay_unlocked";
                e.OVERLAY_UNLOCKED_PINNED = "overlay_unlocked_pinned";
                e.OVERLAY_LOCKED_ACTIVATED = "overlay_locked_activated"
            }(P || (P = {}));
            ! function(e) {
                e[e.SEND = 0] = "SEND";
                e[e.EDIT = 1] = "EDIT";
                e[e.COMMAND = 2] = "COMMAND"
            }(M || (M = {}));
            var D = function(e) {
                    return e.type === M.EDIT
                },
                U = function(e) {
                    return function(e) {
                        return e.type === M.SEND
                    }(e) ? e.message.nonce : D(e) ? e.message.messageId : e.message.data.id
                },
                j = [6e4, 3e5];
            const Z = new(function(e) {
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
                var t = w(n);

                function n() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5;
                    g(this, n);
                    (e = t.call(this, new c.Z("MessageQueue"))).maxSize = r;
                    e.requests = new Map;
                    e.analyticsTimeouts = new Map;
                    return e
                }
                var r = n.prototype;
                r.isFull = function() {
                    return this.queue.length >= this.maxSize
                };
                r.drain = function(e, t) {
                    this.logger.log("Draining Message Queue with: ", e);
                    switch (e.type) {
                        case M.SEND:
                            this.handleSend(e.message, t);
                            break;
                        case M.EDIT:
                            this.handleEdit(e.message, t);
                            break;
                        case M.COMMAND:
                            this.handleCommand(e.message, t)
                    }
                };
                r.cancelRequest = function(e) {
                    var t;
                    null === (t = this.requests.get(e)) || void 0 === t || t.abort();
                    this.requests.delete(e);
                    this.cancelQueueMetricTimers(e)
                };
                r.startQueueMetricTimers = function(e) {
                    var t = j.map((function(e) {
                        return setTimeout((function() {
                            (0, l.yw)(m.rMx.SEND_MESSAGE_QUEUED, {
                                queued_duration_ms: e
                            })
                        }), e)
                    }));
                    this.analyticsTimeouts.set(e, t)
                };
                r.cancelQueueMetricTimers = function(e) {
                    var t;
                    null === (t = this.analyticsTimeouts.get(e)) || void 0 === t || t.forEach(clearTimeout);
                    this.analyticsTimeouts.delete(e)
                };
                r.createResponseHandler = function(e, t) {
                    var n = this;
                    return function(r) {
                        if (null != e) {
                            n.requests.delete(e);
                            n.cancelQueueMetricTimers(e)
                        }
                        if (r.hasErr) return t(null, r);
                        (null == r.body || r.body.code !== m.evJ.SLOWMODE_RATE_LIMITED && r.body.code !== m.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) && 429 === r.status ? t({
                            retryAfter: 1e3 * r.body.retry_after
                        }) : t(null, r)
                    }
                };
                r.handleSend = function(e, t) {
                    var n = this,
                        r = e.channelId,
                        o = e.file,
                        a = e.filename,
                        l = A(e, ["channelId", "file", "filename"]),
                        c = (0, f.d)(),
                        d = I({
                            mobile_network_type: p.Z.getType()
                        }, l, null != c && {
                            signal_strength: c
                        });
                    if (s.ZP.get("send_fail_100")) {
                        this.logger.log("Skipping message sened because send_fail_100 is enabled");
                        t(null, {
                            ok: !1,
                            hasErr: !1,
                            status: 500,
                            headers: {},
                            body: "{}",
                            text: "Simulated failure"
                        })
                    } else {
                        var h;
                        null != L && (L.isInstanceUILocked() ? h = {
                            location: P.OVERLAY_LOCKED_ACTIVATED
                        } : L.isInstanceUILocked() || (h = L.isPinned(m.Odu.TEXT) ? {
                            location: P.OVERLAY_UNLOCKED_PINNED
                        } : {
                            location: P.OVERLAY_UNLOCKED
                        }));
                        var _ = this.createResponseHandler(e.nonce, t),
                            E = new AbortController;
                        this.startQueueMetricTimers(e.nonce);
                        if (null != o && null != a && "" !== a) u.ZP.post({
                            url: m.ANM.MESSAGES(r),
                            fields: Object.entries(d).map((function(e) {
                                var t = C(e, 2);
                                return {
                                    name: t[0],
                                    value: t[1]
                                }
                            })),
                            attachments: [{
                                name: "file",
                                file: o,
                                filename: a
                            }],
                            context: h,
                            oldFormErrors: !0,
                            signal: E.signal,
                            onRequestCreated: function() {
                                null != e.nonce && n.requests.set(e.nonce, E)
                            }
                        }, _);
                        else {
                            var v = {
                                timeout: 6e4,
                                retries: 3,
                                backoff: new i.Z
                            };
                            0;
                            u.ZP.post(b(I({
                                url: m.ANM.MESSAGES(r),
                                body: d,
                                context: h,
                                oldFormErrors: !0
                            }, v), {
                                signal: E.signal,
                                onRequestCreated: function() {
                                    null != e.nonce && n.requests.set(e.nonce, E)
                                }
                            }), _)
                        }
                    }
                };
                r.handleEdit = function(e, t) {
                    var n = this,
                        r = e.channelId,
                        o = e.messageId,
                        i = A(e, ["channelId", "messageId"]),
                        a = new AbortController;
                    u.ZP.patch({
                        url: m.ANM.MESSAGE(r, o),
                        body: i,
                        retries: 1,
                        oldFormErrors: !0,
                        signal: a.signal,
                        onRequestCreated: function() {
                            n.requests.set(o, a)
                        }
                    }, this.createResponseHandler(o, t))
                };
                r.handleCommand = function(e, t) {
                    var n, r = e.applicationId,
                        i = e.guildId,
                        l = e.channelId,
                        c = e.data,
                        s = e.nonce,
                        f = e.attachments,
                        p = e.maxSizeCallback,
                        _ = this,
                        y = {
                            type: a.B8.APPLICATION_COMMAND,
                            application_id: r,
                            guild_id: i,
                            channel_id: l,
                            session_id: d.default.getSessionId(),
                            data: c,
                            nonce: s
                        };
                    if (null != f) {
                        y.data.attachments = [];
                        n = [];
                        var g = f;
                        y.data.attachments = g.map((function(e, t) {
                            o()(e.status === v.m.COMPLETED, "Uploads must be staged before trying to send a message");
                            return (0, E.B)(e, t)
                        }))
                    }
                    var O = new AbortController;
                    u.ZP.post({
                        url: m.ANM.INTERACTIONS,
                        fields: [{
                            name: "payload_json",
                            value: JSON.stringify(y)
                        }],
                        attachments: n,
                        signal: O.signal,
                        onRequestCreated: function(e) {
                            _.requests.set(s, O);
                            e.on("progress", (function(e) {
                                var t = e.total,
                                    n = (0, h.dg)(i);
                                if (null != t && t > n) {
                                    _.cancelRequest(s);
                                    null == p || p(n)
                                }
                            }))
                        }
                    }, this.createResponseHandler(s, t))
                };
                return n
            }(_.Z))
        },
        384482: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => A
            });
            var r = n(717187),
                o = n.n(r),
                i = n(131795),
                u = n.n(i),
                a = n(817673),
                l = n(468811),
                c = n.n(l),
                s = n(281110),
                f = n(860872),
                d = n(2590);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function E(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
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
            var m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
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
                        var o = _(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var g = d.V6Z + d.frH - 1;

            function O(e, t) {
                if (null == e || null == t) throw new Error("cmd and name required");
                return "".concat(e, ":").concat(t)
            }
            var T = a.parse(location.search.slice(1)),
                I = parseInt(null != T.rpc && "" !== T.rpc ? T.rpc : d.V6Z, 10),
                b = null;
            const A = new(function(e) {
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
                var t = y(n);

                function n() {
                    p(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.connect = function() {
                    var e = this;
                    if (null == b)
                        if (I > g) {
                            I = d.V6Z;
                            this.emit("disconnected")
                        } else {
                            try {
                                b = new WebSocket("ws://127.0.0.1:".concat(this.port, "/?v=").concat(d.X6Q))
                            } catch (e) {
                                this.disconnect({
                                    code: d.$VG.CLOSE_ABNORMAL
                                });
                                return
                            }
                            if (null != b) {
                                b.onmessage = function(t) {
                                    var n;
                                    try {
                                        if ("string" != typeof t.data) throw new Error("payload data not a string");
                                        n = JSON.parse(t.data)
                                    } catch (t) {
                                        e.emit("error", t);
                                        e.disconnect();
                                        return
                                    }
                                    var r = n.cmd,
                                        o = n.evt,
                                        i = n.nonce,
                                        u = n.data;
                                    if (r !== d.Etm.DISPATCH) {
                                        var a = null;
                                        if (o === d.zMe.ERROR) {
                                            a = new f.Z(u.code, u.message);
                                            u = null
                                        }
                                        e.emit(O(r, i), a, u)
                                    } else {
                                        if (o === d.zMe.READY) {
                                            e.emit("connected");
                                            return
                                        }
                                        if (o === d.zMe.ERROR) {
                                            e.emit("error", new f.Z(u.code, u.message));
                                            e.disconnect();
                                            return
                                        }
                                        e.emit(O(r, o), u)
                                    }
                                };
                                b.onclose = b.onerror = function(t) {
                                    return e.disconnect(t)
                                }
                            }
                        }
                };
                r.disconnect = function(e) {
                    if (null != e && "code" in e && [d.$VG.CLOSE_ABNORMAL, d.$VG.INVALID_CLIENTID].includes(e.code)) {
                        I++;
                        b = null;
                        this.connect()
                    } else if (null != b) {
                        this.emit("disconnected");
                        b.close();
                        b = null
                    }
                };
                r.subscribe = function(e, t, n) {
                    this.on(O(d.Etm.DISPATCH, e), n);
                    return this.request(d.Etm.SUBSCRIBE, t, e)
                };
                r.unsubscribe = function(e, t, n) {
                    this.removeListener(O(d.Etm.DISPATCH, e), n);
                    return this.request(d.Etm.UNSUBSCRIBE, t, e)
                };
                r.request = function(e, t, n) {
                    var r = this;
                    return new Promise((function(o, i) {
                        if (r.connected) {
                            var u = c().v4(),
                                a = JSON.stringify({
                                    cmd: e,
                                    args: t,
                                    evt: n,
                                    nonce: u
                                });
                            r.once(O(e, u), (function(e, t) {
                                return null != e ? i(e) : o(t)
                            }));
                            null == b || b.send(a)
                        } else {
                            r.once("connected", (function() {
                                r.removeAllListeners("disconnected");
                                o(r.request(e, t, n))
                            }));
                            r.once("disconnected", (function() {
                                r.removeAllListeners("connected");
                                i(new Error("disconnected during request"))
                            }));
                            r.connect()
                        }
                    }))
                };
                r.requestOnce = function(e, t, n) {
                    return s.ZP.post({
                        url: "http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(d.X6Q),
                        body: {
                            cmd: e,
                            args: t,
                            evt: n,
                            nonce: c().v4()
                        }
                    }).then((function(e) {
                        var t = e.body,
                            n = t.evt,
                            r = t.data;
                        if (n === d.zMe.ERROR) throw new f.Z(r.code, r.message);
                        return r
                    }))
                };
                r.requestRedirect = function(e, t, n) {
                    if ("Chrome" === u().name && parseInt(u().version, 10) >= 58) return this.requestOnce(e, t, n);
                    var r = encodeURIComponent(JSON.stringify({
                            cmd: e,
                            args: t,
                            evt: n,
                            nonce: c().v4()
                        })),
                        o = encodeURIComponent("".concat(location.protocol, "//").concat(location.host).concat(location.pathname, "?done=true"));
                    window.open("http://127.0.0.1:".concat(this.port, "/rpc?v=").concat(d.X6Q, "&payload=").concat(r, "&callback=").concat(o), "_self");
                    return new Promise((function() {
                        return null
                    }))
                };
                ! function(e, t, n) {
                    t && h(e.prototype, t);
                    n && h(e, n)
                }(n, [{
                    key: "port",
                    get: function() {
                        return I
                    }
                }, {
                    key: "connected",
                    get: function() {
                        return null != b && b.readyState === WebSocket.OPEN
                    }
                }]);
                return n
            }(o()))
        },
        458960: (e, t, n) => {
            "use strict";
            n.d(t, {
                $j: () => d,
                zP: () => p,
                lW: () => E,
                sr: () => _,
                Ty: () => h
            });
            var r = n(384482),
                o = n(860872),
                i = n(148834),
                u = n(496486),
                a = n.n(u),
                l = n(940060);

            function c(e) {
                return a().cloneDeepWith(e, (function(e) {
                    if ((0, l.B)(e)) return {
                        __tag__: "bigflag",
                        data: e.toJSON()
                    }
                }))
            }

            function s(e) {
                return a().cloneDeepWith(e, (function(e) {
                    if (null != e && "object" == typeof e && "__tag__" in e && "bigflag" === e.__tag__) return l.Z.deserialize(e.data)
                }))
            }
            var f = n(2590);

            function d() {
                r.default.connect()
            }

            function p() {
                r.default.disconnect()
            }

            function h(e, t) {
                if (!__OVERLAY__) throw new o.Z(f.lTL.UNKNOWN_ERROR, "called from wrong app context");
                r.default.subscribe(f.zMe.OVERLAY, {
                    token: t
                }, (function(t) {
                    return e(s(t))
                }))
            }

            function _(e, t) {
                if (__OVERLAY__) throw new o.Z(f.lTL.UNKNOWN_ERROR, "called from wrong app context");
                i.Z.setCommandHandler(f.Etm.OVERLAY, {
                    scope: f.cEn,
                    handler: function(n) {
                        var r = n.args;
                        if (!t(r.token)) throw new o.Z(f.lTL.INVALID_TOKEN, "Invalid RPC auth token provided");
                        e(s(r))
                    }
                });
                i.Z.setEventHandler(f.zMe.OVERLAY, {
                    scope: f.cEn,
                    handler: function(e) {
                        var n = e.args;
                        if (!t(n.token)) throw new o.Z(f.lTL.INVALID_TOKEN, "Invalid RPC auth token provided")
                    }
                })
            }

            function E(e) {
                __OVERLAY__ ? r.default.request(f.Etm.OVERLAY, c(e)) : i.Z.dispatchToSubscriptions(f.zMe.OVERLAY, {}, c(e))
            }
        },
        598143: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => C,
                n: () => P
            });
            var r = n(496486),
                o = n.n(r),
                i = n(575494),
                u = n(281110),
                a = n(296602),
                l = n(988135),
                c = n(95508),
                s = n(22176),
                f = n(124453),
                d = n(474717),
                p = n(257695),
                h = n(2590);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function v(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            E(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            E(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e, t, n) {
                y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = g(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, t);
                        return o.get ? o.get.call(n) : o.value
                    }
                };
                return y(e, t, n || e)
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        m(e, t, n[t])
                    }))
                }
                return e
            }

            function T(e, t) {
                return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function I(e, t) {
                I = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return I(e, t)
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var A = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
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
                    var n, r = g(e);
                    if (t) {
                        var o = g(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return T(this, n)
                }
            }
            var R = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };
            0;
            var C, N = new a.Z("CloudUpload.tsx"),
                w = n(392445).Z;
            ! function(e) {
                e.NOT_STARTED = "NOT_STARTED";
                e.STARTED = "STARTED";
                e.UPLOADING = "UPLOADING";
                e.ERROR = "ERROR";
                e.COMPLETED = "COMPLETED";
                e.CANCELED = "CANCELED"
            }(C || (C = {}));
            var P = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && I(e, t)
                }(n, e);
                var t = S(n);

                function n(e, r, o, i) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var u, a, l, c, s, f;
                    (u = t.call(this, e, o)).status = C.NOT_STARTED;
                    u.loaded = 0;
                    u.reactNativeFilePrepped = !1;
                    u._aborted = !1;
                    u.channelId = r;
                    u.preCompressionSize = null !== (c = null === (a = e.file) || void 0 === a ? void 0 : a.size) && void 0 !== c ? c : 0;
                    u.currentSize = null !== (s = null === (l = e.file) || void 0 === l ? void 0 : l.size) && void 0 !== s ? s : 0;
                    u.reactNativeFileIndex = i;
                    u._abortController = new AbortController;
                    u.isClip = null !== (f = e.isClip) && void 0 !== f && f;
                    return u
                }
                var r = n.prototype;
                r.retryOpts = function() {
                    return this.item.platform === d.ow.REACT_NATIVE ? {
                        timeout: 36e5,
                        backoff: new i.Z(500, 2048e3),
                        retries: 12
                    } : {
                        timeout: 36e5,
                        retries: 12,
                        backoff: new i.Z
                    }
                };
                r.uploadFileToCloud = function() {
                    var e, t, n = this;
                    if (null == this.responseUrl) throw new Error("_uploadFileToCloud - responseUrl is not set");
                    N.log("Uploading ".concat(this.id));
                    if (this.item.platform === d.ow.REACT_NATIVE) t = null != (e = {
                        type: this.item.mimeType,
                        uri: this.item.uri,
                        name: this.item.filename
                    }).type && "application/json" !== e.type ? e.type : "application/octet-stream";
                    else {
                        e = this.item.file;
                        t = "application/octet-stream"
                    }
                    var r = o().throttle((function(e) {
                            n.emit("progress", e.loaded, e.total, e.loaded - n.loaded);
                            n.loaded = e.loaded
                        }), 50),
                        i = {
                            "Content-Type": t
                        };
                    return u.ZP.put(O({
                        url: this.responseUrl,
                        body: e,
                        headers: i,
                        signal: this._abortController.signal,
                        onRequestProgress: r
                    }, this.retryOpts()))
                };
                r.getSize = function() {
                    var e = this;
                    return v((function() {
                        var t, n;
                        return R(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [3, 2];
                                case 1:
                                    return [2, null !== (t = r.sent()) && void 0 !== t ? t : 0];
                                case 2:
                                    return [2, null !== (n = e.currentSize) && void 0 !== n ? n : 0];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                };
                r.upload = function() {
                    var e = this;
                    return v((function() {
                        var t, n, r, o, i, a, c, f, d, _;
                        return R(this, (function(E) {
                            switch (E.label) {
                                case 0:
                                    if (e.status === C.COMPLETED) return [2];
                                    e.setStatus(C.STARTED);
                                    return [3, 2];
                                case 1:
                                    E.sent();
                                    E.label = 2;
                                case 2:
                                    if (e.status === C.CANCELED) {
                                        e.handleComplete(e.id);
                                        return [2]
                                    }
                                    return [4, w.getUploadPayload(e)];
                                case 3:
                                    t = E.sent();
                                    n = (0, p.F)(e.item.target);
                                    if (null == t.filename || "" === t.filename || 0 === e.currentSize) {
                                        N.error("File does not have a filename or size is 0.", JSON.stringify(t));
                                        e.handleError(h.evJ.INVALID_FILE_ASSET);
                                        return [2]
                                    }
                                    if ((null !== (r = e.currentSize) && void 0 !== r ? r : 0) > n.getMaxFileSize(e.channelId)) {
                                        e.handleError(h.evJ.ENTITY_TOO_LARGE);
                                        return [2]
                                    }
                                    if (l.ZP.get("upload_fail_50") && Math.random() < .5) {
                                        setTimeout((function() {
                                            e.handleError(500)
                                        }), 1e3);
                                        return [2]
                                    }
                                    E.label = 4;
                                case 4:
                                    E.trys.push([4, 6, , 7]);
                                    N.log("Requesting upload url for ".concat(e.id));
                                    return [4, u.ZP.post(O({
                                        url: n.getCreateAttachmentURL(e.channelId),
                                        body: {
                                            files: [t]
                                        }
                                    }, e.retryOpts()))];
                                case 5:
                                    o = E.sent();
                                    e.setResponseUrl(o.body.attachments[0].upload_url);
                                    e.setUploadedFilename(o.body.attachments[0].upload_filename);
                                    return [3, 7];
                                case 6:
                                    i = E.sent();
                                    if ((f = null !== (c = null == i || null === (a = i.body) || void 0 === a ? void 0 : a.code) && void 0 !== c ? c : i.status) !== h.evJ.ENTITY_TOO_LARGE) {
                                        N.error("Requesting upload url failed with code ".concat(null != f ? f : JSON.stringify(i.body), " for ").concat(e.id));
                                        s.Z.captureException(i)
                                    }
                                    e.handleError(f);
                                    return [2];
                                case 7:
                                    E.trys.push([7, 9, , 10]);
                                    return [4, e.uploadFileToCloud()];
                                case 8:
                                    d = E.sent();
                                    e.handleComplete(d);
                                    return [3, 10];
                                case 9:
                                    _ = E.sent();
                                    if (e.status === C.CANCELED) e.handleComplete(_);
                                    else {
                                        N.info("Error: status ".concat(_.status, " for ").concat(e.id));
                                        e.handleError(_)
                                    }
                                    return [3, 10];
                                case 10:
                                    return [2]
                            }
                        }))
                    }))()
                };
                r.reactNativeCompressAndExtractData = function() {
                    var e = this;
                    return v((function() {
                        var t, n, r, o, i, u, a, l, s;
                        return R(this, (function(d) {
                            switch (d.label) {
                                case 0:
                                    if (!(0, p.F)(e.item.target).shouldReactNativeCompressUploads) {
                                        N.log("reactNativeCompressAndExtractData() disabled by upload target");
                                        return [2]
                                    }
                                    if (!0 === e.reactNativeFilePrepped) {
                                        N.log("reactNativeCompressAndExtractData() file already prepped - ".concat(e.id));
                                        return [2]
                                    }
                                    N.log("Starting compression/conversion for ".concat(e.id));
                                    return [4, (0, c.J)(e, null !== (t = e.reactNativeFileIndex) && void 0 !== t ? t : 0)];
                                case 1:
                                    if (null == (n = d.sent()) || null == n.file) return [2];
                                    r = n.uri;
                                    o = n.file.name;
                                    i = n.file.type;
                                    e.filename = o;
                                    if (null == o || null == r || null == i) {
                                        N.error("Insufficient file data: ".concat({
                                            filename: o,
                                            uri: r,
                                            mimeType: i
                                        }, " for ").concat(e.id));
                                        throw new Error("Insufficient file data: ".concat({
                                            filename: o,
                                            uri: r,
                                            mimeType: i
                                        }))
                                    }
                                    if (null === (u = n.fileSize) || void 0 === u) return [3, 2];
                                    l = u;
                                    return [3, 4];
                                case 2:
                                    return [4, (0, f.Lc)(r)];
                                case 3:
                                    l = d.sent().size;
                                    d.label = 4;
                                case 4:
                                    a = l;
                                    e.postCompressionSize = a;
                                    e.currentSize = a;
                                    if (null == a) {
                                        N.error("Size missing from file data for ".concat(e.id));
                                        throw new Error("Size missing from file data")
                                    }
                                    N.log("Completed compression and conversion. Output size=".concat(a, " bytes; filename=").concat(o, " for ").concat(e.id));
                                    s = {
                                        uri: r,
                                        filename: o,
                                        mimeType: i
                                    };
                                    e.item = O({}, e.item, s);
                                    e.reactNativeFilePrepped = !0;
                                    return [2]
                            }
                        }))
                    }))()
                };
                r.handleError = function(e) {
                    this.setStatus(C.ERROR);
                    this.error = e;
                    try {
                        this.emit("error", e)
                    } catch (e) {}
                    this.removeAllListeners()
                };
                r.handleComplete = function(e) {
                    this.setStatus(C.COMPLETED);
                    N.log("Upload complete for ".concat(this.id));
                    this.emit("complete", e);
                    this.removeAllListeners()
                };
                r.cancel = function() {
                    N.log("Cancelled called for ".concat(this.id));
                    this._abortController.abort();
                    this.status === C.COMPLETED && this.delete();
                    this.setStatus(C.CANCELED);
                    this.emit("complete");
                    this.removeAllListeners()
                };
                r.resetState = function() {
                    this.status = C.NOT_STARTED;
                    this.uploadedFilename = void 0;
                    this.responseUrl = void 0;
                    this.error = void 0;
                    this._abortController = new AbortController;
                    return y(g(n.prototype), "resetState", this).call(this)
                };
                r.delete = function() {
                    var e = this;
                    return v((function() {
                        var t;
                        return R(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    if (null == e.uploadedFilename) return [2];
                                    t = (0,
                                        p.F)(e.item.target).getDeleteUploadURL(e.uploadedFilename);
                                    n.label = 1;
                                case 1:
                                    n.trys.push([1, 3, , 4]);
                                    return [4, u.ZP.delete(t)];
                                case 2:
                                    n.sent();
                                    return [3, 4];
                                case 3:
                                    n.sent();
                                    return [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))()
                };
                r.setResponseUrl = function(e) {
                    this.responseUrl = e
                };
                r.setStatus = function(e) {
                    this.status = e
                };
                r.setFilename = function(e) {
                    this.filename = e
                };
                r.setUploadedFilename = function(e) {
                    this.uploadedFilename = e
                };
                n.fromJson = function(e) {
                    var t = new n(e.item, e.channelId, e.showLargeMessageDialog, e.reactNativeFileIndex);
                    t.status !== C.COMPLETED && (t.status = C.NOT_STARTED);
                    Object.entries(e).forEach((function(e) {
                        var n = b(e, 2),
                            r = n[0],
                            o = n[1];
                        r.startsWith("_") || (t[r] = o)
                    }));
                    return t
                };
                return n
            }(d.ZP)
        },
        474717: (e, t, n) => {
            "use strict";
            n.d(t, {
                ow: () => h,
                ZP: () => m
            });
            var r = n(717187),
                o = n.n(r),
                i = n(496486),
                u = n.n(i),
                a = n(468811),
                l = n.n(a),
                c = n(149258),
                s = n(124453);

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function d(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var h, _, E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }! function(e) {
                e[e.REACT_NATIVE = 0] = "REACT_NATIVE";
                e[e.WEB = 1] = "WEB"
            }(h || (h = {}));
            ! function(e) {
                e[e.FILE_ATTACHMENT = 0] = "FILE_ATTACHMENT";
                e[e.IMAGE_PICKER = 1] = "IMAGE_PICKER"
            }(_ || (_ = {}));
            var m = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = v(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var o;
                    (o = t.call(this)).item = e;
                    if (e.platform === h.REACT_NATIVE) {
                        var i;
                        o.id = null !== (i = e.id) && void 0 !== i ? i : e.uri;
                        var a = (0, s.hn)({
                            uri: e.uri,
                            overrideFilename: e.filename,
                            overrideType: e.mimeType
                        });
                        o.filename = a.filename;
                        o.isImage = a.isImage;
                        o.isVideo = a.isVideo;
                        o.mimeType = a.type;
                        o.origin = e.origin;
                        o.durationSecs = e.durationSecs;
                        o.waveform = e.waveform;
                        o.isRemix = e.isRemix;
                        o.isThumbnail = e.isThumbnail
                    } else {
                        var f;
                        o.id = null !== (f = e.id) && void 0 !== f ? f : u().uniqueId("upload");
                        o.classification = c.f3(e.file);
                        o.isImage = "image" === o.classification;
                        o.isVideo = "video" === o.classification;
                        o.filename = e.file.name;
                        o.mimeType = e.file.type;
                        o.isThumbnail = e.isThumbnail
                    }
                    o.isClip = e.isClip;
                    o.uniqueId = l().v4();
                    o.showLargeMessageDialog = r;
                    o.spoiler = !1;
                    o.description = null;
                    return o
                }
                var r = n.prototype;
                r.cancel = function() {};
                r.resetState = function() {
                    return this
                };
                return n
            }(o())
        },
        257695: (e, t, n) => {
            "use strict";
            n.d(t, {
                e: () => c,
                F: () => f
            });
            var r = n(108034),
                o = n(61209),
                i = n(149258),
                u = n(124453),
                a = n(2590);

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var c, s = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t = e.prototype;
                t.getCreateAttachmentURL = function(e) {
                    return a.ANM.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e)
                };
                t.getDeleteUploadURL = function(e) {
                    return a.ANM.MESSAGE_DELETE_UPLOAD(e)
                };
                t.getMaxFileSize = function(e) {
                    var t = o.Z.getBasicChannel(e);
                    return i.dg(null == t ? void 0 : t.guild_id)
                };
                t.getMaxAttachmentsCount = function() {
                    return a.dN1
                };
                t.getMaxTotalAttachmentSize = function() {
                    return u.zz
                };
                ! function(e, t, n) {
                    t && l(e.prototype, t);
                    n && l(e, n)
                }(e, [{
                    key: "shouldReactNativeCompressUploads",
                    get: function() {
                        return !0
                    }
                }]);
                return e
            }();
            ! function(e) {
                e[e.MESSAGE_ATTACHMENT = 0] = "MESSAGE_ATTACHMENT";
                e[e.GUILD_PRODUCT_ATTACHMENT = 1] = "GUILD_PRODUCT_ATTACHMENT"
            }(c || (c = {}));

            function f(e) {
                switch (e) {
                    case c.GUILD_PRODUCT_ATTACHMENT:
                        return new r.Z;
                    default:
                    case c.MESSAGE_ATTACHMENT:
                        return new s
                }
            }
        },
        595882: (e, t, n) => {
            "use strict";
            n.d(t, {
                T: () => o,
                S: () => i
            });
            var r = n(474717);

            function o(e, t) {
                if (t.id === e.uri || null != t.id && t.id === e.id) return !0;
                if (t.item.platform === r.ow.REACT_NATIVE) {
                    var n = t.item,
                        o = e.filename;
                    if (n.originalUri === e.uri) return !0;
                    if (null != o) {
                        var i;
                        if (null === (i = n.originalUri) || void 0 === i ? void 0 : i.includes(o)) return !0
                    }
                    return !1
                }
                return !1
            }

            function i(e, t) {
                return 0 === t ? 0 : Math.min(Math.floor(e / t * 100), 100)
            }
        },
        392445: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(441143),
                o = n.n(r),
                i = n(496486),
                u = n.n(i);
            const a = {
                getUploadPayload: function(e) {
                    var t = e.item.file;
                    o()(null != t, "file data must not be empty");
                    return {
                        filename: t.name,
                        file_size: t.size,
                        id: u().uniqueId(),
                        is_clip: e.isClip
                    }
                }
            }
        },
        994130: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(441143),
                o = n.n(r),
                i = n(842227);

            function u(e) {
                o()(e.length <= 2 || i.default.compare(e[0].id, e[e.length - 1].id) >= 0, "messages must be sorted in descending order.")
            }
        },
        890607: (e, t, n) => {
            "use strict";
            n.d(t, {
                g: () => r
            });
            var r;
            ! function(e) {
                e.INVITE = "INVITE";
                e.TEMPLATE = "TEMPLATE";
                e.BUILD_OVERRIDE = "BUILD_OVERRIDE";
                e.EVENT = "EVENT";
                e.CHANNEL_LINK = "CHANNEL_LINK";
                e.APP_DIRECTORY_PROFILE = "APP_DIRECTORY_PROFILE";
                e.ACTIVITY_BOOKMARK = "ACTIVITY_BOOKMARK";
                e.EMBEDDED_ACTIVITY_INVITE = "EMBEDDED_ACTIVITY_INVITE";
                e.GUILD_PRODUCT = "GUILD_PRODUCT";
                e.SERVER_SHOP = "SERVER_SHOP";
                e.CLYDE_PROFILE = "CLYDE_PROFILE"
            }(r || (r = {}))
        },
        861323: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => G,
                zO: () => V,
                FO: () => B,
                Sq: () => Z
            });
            var r, o, i, u, a, l, c = n(608575),
                s = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-04_activity_launcher_embed",
                    label: "Activity Launcher Embed",
                    defaultConfig: {
                        activityBookmarkEmbedEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable the Activity Launcher Embed in chat",
                        config: {
                            activityBookmarkEmbedEnabled: !0
                        }
                    }]
                }),
                f = (n(940007), n(641453)),
                d = (n(665278),
                    n(757753)),
                p = n(968696),
                h = n(585622),
                _ = n(890607),
                E = n(2590),
                v = /^\/([a-zA-Z0-9-]+)$/,
                m = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
                y = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
                g = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                O = /^\/application-directory\/([0-9-]+)\/?$/,
                T = /^\/activities\/([0-9-]+)\/?$/,
                I = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
                b = /^\/channels\/([0-9]+)\/shop$/,
                A = /^\/clyde-profiles\/([0-9-]+)\/?$/,
                S = U(window.GLOBAL_ENV.INVITE_HOST),
                R = U(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
                C = U(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : "//canary.".concat(E.$R1)),
                N = U("//canary.".concat(E.$R1)),
                w = U("//ptb.".concat(E.$R1)),
                P = U("discordapp.com"),
                M = U("discord.com"),
                L = [p.Z.escape(null !== (o = S.host) && void 0 !== o ? o : ""), p.Z.escape(null !== (i = R.host) && void 0 !== i ? i : ""), p.Z.escape(null !== (u = C.host) && void 0 !== u ? u : ""), p.Z.escape(null !== (a = P.host) && void 0 !== a ? a : ""), p.Z.escape(null !== (l = M.host) && void 0 !== l ? l : "")].filter(Boolean),
                D = new RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(L.join("|"), ")"), "g");

            function U(e) {
                if (null == e) return {
                    host: null,
                    pathPrefix: null
                };
                if (e.indexOf("/") >= 0) {
                    var t = (0, c.parse)(e, void 0, !0);
                    return {
                        host: t.host,
                        pathPrefix: t.pathname
                    }
                }
                return {
                    host: e,
                    pathPrefix: null
                }
            }

            function j(e, t) {
                var n, r;
                if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
                var o, i = null !== (r = t.pathname) && void 0 !== r ? r : "",
                    u = null !== (o = e.pathPrefix) && void 0 !== o ? o : "";
                if (!i.startsWith(u)) return null;
                var a = i.substring(u.length);
                return "" === a ? null : a
            }

            function Z(e) {
                var t, n, r, o;
                return null !== (o = null !== (r = null !== (n = null !== (t = j(C, e)) && void 0 !== t ? t : j(N, e)) && void 0 !== n ? n : j(w, e)) && void 0 !== r ? r : j(P, e)) && void 0 !== o ? o : j(M, e)
            }

            function F(e) {
                if (null == e) return null;
                var t = e.match(g);
                return null != t && 3 === t.length ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function G(e) {
                if (null == e) return [];
                var t = new Set,
                    n = [];
                e = e.replace(D, (function(e, t, n, r) {
                    return null == n ? "".concat(t, "http://").concat(r) : e
                }));
                var r = e.match(h.Z.URL_REGEX);
                if (null == r) return [];
                var o = !0,
                    i = !1,
                    u = void 0;
                try {
                    for (var a, l = r[Symbol.iterator](); !(o = (a = l.next()).done); o = !0) {
                        var c = a.value;
                        if (n.length >= 10) break;
                        var p = B(c);
                        if (null != p && null != p.pathname) {
                            var E, g, L, U, Z = j(S, p),
                                G = j(R, p),
                                V = null !== (U = null !== (L = null !== (g = null !== (E = j(C, p)) && void 0 !== E ? E : j(N, p)) && void 0 !== g ? g : j(w, p)) && void 0 !== L ? L : j(P, p)) && void 0 !== U ? U : j(M, p),
                                k = function(e, r) {
                                    if (!t.has(r)) {
                                        t.add(r);
                                        n.push({
                                            type: e,
                                            code: r
                                        })
                                    }
                                };
                            0;
                            if (null != (null == Z ? void 0 : Z.match(v))) {
                                var x = (0, f.mb)(Z.substring(1), p.search);
                                d.Z.getInvite(x);
                                k(_.g.INVITE, x)
                            }
                            null != (null == G ? void 0 : G.match(v)) && k(_.g.TEMPLATE, G.substring(1));
                            var Y = null == V ? void 0 : V.match(y);
                            if (null != Y) {
                                var H = Y[1].toUpperCase();
                                if (H === _.g.INVITE) {
                                    var z = (0, f.mb)(Y[2], p.search);
                                    k(_.g.INVITE, z)
                                } else k(H, Y[2])
                            }
                            null != (null == V ? void 0 : V.match(m)) && k(_.g.CHANNEL_LINK, V.replace("/channels/", ""));
                            var W = F(p.pathname);
                            null != W && k(_.g.EVENT, "".concat(W.guildId, "-").concat(W.guildEventId));
                            var K = null == V ? void 0 : V.match(O);
                            if (null != K) {
                                var q = K[1];
                                k(_.g.APP_DIRECTORY_PROFILE, q)
                            }
                            var Q = null == V ? void 0 : V.match(A);
                            if (null != Q) {
                                var X = Q[1];
                                k(_.g.CLYDE_PROFILE, X)
                            }
                            var $ = null == V ? void 0 : V.match(T),
                                J = s.getCurrentConfig({
                                    location: "78afcf_1"
                                }, {
                                    autoTrackExposure: !1
                                }).activityBookmarkEmbedEnabled;
                            if (null != $ && J) {
                                var ee = $[1];
                                k(_.g.ACTIVITY_BOOKMARK, ee)
                            }
                            var te = null == V ? void 0 : V.match(I);
                            null != te && k(_.g.GUILD_PRODUCT, "".concat(te[1], "-").concat(te[2]));
                            var ne = null == V ? void 0 : V.match(b);
                            null != ne && k(_.g.SERVER_SHOP, ne[1])
                        }
                    }
                } catch (e) {
                    i = !0;
                    u = e
                } finally {
                    try {
                        o || null == l.return || l.return()
                    } finally {
                        if (i) throw u
                    }
                }
                return n
            }

            function B(e) {
                try {
                    return (0, c.parse)(e)
                } catch (e) {
                    return null
                }
            }

            function V(e) {
                return G(e)[0]
            }
        },
        988135: (e, t, n) => {
            "use strict";
            n.d(t, {
                zU: () => f,
                ZP: () => v
            });
            var r = n(202351),
                o = n(744564);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f, d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
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
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }! function(e) {
                e[e.MESSAGING = 0] = "MESSAGING";
                e[e.OVERLAYS = 1] = "OVERLAYS"
            }(f || (f = {}));
            var h = {
                    visual_effect_view_overrides: {
                        label: "Blur view overrides for designers to test with",
                        category: f.OVERLAYS
                    },
                    obscure_blur_effect_enabled: {
                        label: "Force obscure blur effect on for message media and embeds",
                        category: f.OVERLAYS
                    },
                    upload_fail_50: {
                        label: "Uploads: Fail 50% of uploads with 500 status after a 1 second delay",
                        category: f.MESSAGING
                    },
                    send_fail_100: {
                        label: "Send: Fail with 500 status",
                        category: f.MESSAGING
                    }
                },
                _ = {};
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getUserAgnosticState = function() {
                    return {
                        toggleStates: _
                    }
                };
                r.initialize = function(e) {
                    for (var t in h) {
                        var n, r, o = null !== (r = null == e || null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== r && r;
                        _[t] = o
                    }
                };
                r.get = function(e) {
                    var t;
                    return null !== (t = _[e]) && void 0 !== t && t
                };
                r.set = function(e, t) {
                    _[e] = t;
                    return t
                };
                r.all = function() {
                    return _
                };
                r.allByCategory = function(e) {
                    return Object.entries(h).filter((function(t) {
                        var n = s(t, 2);
                        n[0];
                        return n[1].category === e
                    })).map((function(e) {
                        var t = s(e, 2),
                            n = t[0],
                            r = t[1];
                        return [n, _[n], r]
                    }))
                };
                return n
            }(r.ZP.DeviceSettingsStore);
            E.displayName = "DevToolsDevSettingsStore";
            E.persistKey = "DevToolsDevSettingsStore";
            const v = new E(o.Z, {
                DEV_TOOLS_DEV_SETTING_SET: function(e) {
                    _[e.toggle] = e.value
                }
            })
        },
        770960: (e, t, n) => {
            "use strict";
            n.d(t, {
                qm: () => i,
                t7: () => u,
                gf: () => a,
                xv: () => l,
                J7: () => c
            });
            var r, o = n(2590),
                i = 4,
                u = 5,
                a = 350,
                l = 1e3 * o.UF9.MINUTE,
                c = 1e3 * o.UF9.MINUTE * 2;
            ! function(e) {
                e[e.STICKER = 0] = "STICKER"
            }(r || (r = {}))
        },
        179936: (e, t, n) => {
            "use strict";
            n.d(t, {
                kT: () => s,
                wN: () => f,
                Tk: () => d
            });
            var r = n(823493),
                o = n.n(r),
                i = n(652591),
                u = n(770960),
                a = n(2590),
                l = /(!|\.|;|,|-|—|–|\?|"|')/g,
                c = /(\n|\t|\s)/g,
                s = function(e) {
                    return e.replace(l, "").replace(c, " ")
                },
                f = function(e) {
                    return null == e ? [] : s(e).trim().split(" ")
                },
                d = o()((function(e) {
                    i.default.track(a.rMx.AUTO_SUGGEST_DISPLAYED, {
                        suggestion_trigger: e
                    })
                }), u.xv, {
                    leading: !0,
                    trailing: !1
                })
        },
        94340: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(959207),
                o = n(2590);

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    i = r.Z.getGame(e.applicationId),
                    a = e.getPrice(),
                    l = e.getPrice(null, !1),
                    c = {
                        sku_id: e.id,
                        sku_type: e.type,
                        application_id: e.applicationId,
                        application_name: null != i ? i.name : null,
                        store_title: e.name,
                        distribution_type: e.premium ? "premium" : "distribution"
                    },
                    s = null;
                n && (s = {
                    price: null != a ? a.amount : null,
                    regular_price: null != l ? l.amount : null,
                    currency: null != a ? a.currency : null
                });
                var f = null;
                t && (f = {
                    has_single_player: e.hasFeature(o.Qa3.SINGLE_PLAYER),
                    has_online_multiplayer: e.hasFeature(o.Qa3.ONLINE_MULTIPLAYER),
                    has_local_multiplayer: e.hasFeature(o.Qa3.LOCAL_MULTIPLAYER),
                    has_pvp_features: e.hasFeature(o.Qa3.PVP),
                    has_local_coop: e.hasFeature(o.Qa3.LOCAL_COOP),
                    has_online_coop: e.hasFeature(o.Qa3.ONLINE_COOP),
                    has_cross_platform: e.hasFeature(o.Qa3.CROSS_PLATFORM),
                    has_rich_presence: e.hasFeature(o.Qa3.RICH_PRESENCE),
                    has_game_invites: e.hasFeature(o.Qa3.DISCORD_GAME_INVITES),
                    has_spectator_mode: e.hasFeature(o.Qa3.SPECTATOR_MODE),
                    has_controller_support: e.hasFeature(o.Qa3.CONTROLLER_SUPPORT),
                    has_cloud_saves: e.hasFeature(o.Qa3.CLOUD_SAVES),
                    has_secure_networking: e.hasFeature(o.Qa3.SECURE_NETWORKING)
                });
                return u({}, c, s, f)
            }
        },
        108034: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(2590);

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var i = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                var t = e.prototype;
                t.getCreateAttachmentURL = function(e) {
                    return r.ANM.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e)
                };
                t.getDeleteUploadURL = function(e) {
                    return r.ANM.MESSAGE_DELETE_UPLOAD(e)
                };
                t.getMaxFileSize = function(e) {
                    return 524288e3
                };
                t.getMaxAttachmentsCount = function() {
                    return 10
                };
                t.getMaxTotalAttachmentSize = function() {
                    return 524288e3
                };
                ! function(e, t, n) {
                    t && o(e.prototype, t);
                    n && o(e, n)
                }(e, [{
                    key: "shouldReactNativeCompressUploads",
                    get: function() {
                        return !1
                    }
                }]);
                return e
            }()
        },
        269300: (e, t, n) => {
            "use strict";
            n.d(t, {
                bN: () => I,
                CQ: () => b,
                xt: () => G,
                Ld: () => B,
                Z2: () => V,
                ZP: () => x
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                u = n(575626),
                a = n(744564),
                l = n(722406),
                c = n(664625),
                s = n(21372),
                f = n(473903),
                d = n(3155);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t, n) {
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

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        h(e, t, n[t])
                    }))
                }
                return e
            }

            function v(e, t) {
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
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function y(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }
            var O = function(e) {
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
                        var o = _(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var I = {
                EVENT: "event",
                EVENT_ACTIVE: "active",
                EVENT_UPCOMING: "event-upcoming",
                GUILD_EVENT: function(e) {
                    return "".concat(e, "-").concat(I.EVENT)
                },
                GUILD_EVENT_ACTIVE: function(e) {
                    return "".concat(e, "-").concat(I.EVENT_ACTIVE)
                },
                GUILD_EVENT_UPCOMING: function(e) {
                    return "".concat(e, "-").concat(I.EVENT_UPCOMING)
                },
                CHANNEL_EVENT: function(e) {
                    return "".concat(e, "-").concat(I.EVENT)
                },
                CHANNEL_EVENT_ACTIVE: function(e) {
                    return "".concat(e, "-").concat(I.EVENT_ACTIVE)
                },
                CHANNEL_EVENT_UPCOMING: function(e) {
                    return "".concat(e, "-").concat(I.EVENT_UPCOMING)
                }
            };

            function b(e) {
                var t = e.id,
                    n = e.scheduled_start_time,
                    r = G(e) ? "\0" : "";
                return "".concat(r, "-").concat(new Date(n).getTime(), "-").concat(t)
            }
            var A = new u.Z((function(e) {
                var t = e.guild_id,
                    n = e.entity_id,
                    r = e.channel_id,
                    o = [t];
                null != n && o.push(n);
                o.push(I.GUILD_EVENT(t));
                null != r && o.push(I.CHANNEL_EVENT(r));
                if (G(e)) {
                    o.push(I.EVENT_ACTIVE);
                    o.push(I.GUILD_EVENT_ACTIVE(t));
                    null != r && o.push(I.CHANNEL_EVENT_ACTIVE(r))
                }
                if (B(e)) {
                    o.push(I.EVENT_UPCOMING);
                    o.push(I.GUILD_EVENT_UPCOMING(t));
                    null != r && o.push(I.CHANNEL_EVENT_UPCOMING(r))
                }
                return o
            }), b);

            function S(e) {
                var t, n = A.get(e.id),
                    r = null !== (t = e.user_count) && void 0 !== t ? t : null == n ? void 0 : n.user_count,
                    o = M(e.id, e.guild_id) ? 1 : 0;
                e.user_count = Math.max(o, null != r ? r : 0);
                A.set(e.id, e);
                N += 1
            }

            function R(e, t) {
                A.delete(e);
                D(e, t);
                N += 1
            }
            var C = "orphaned",
                N = 0,
                w = {},
                P = [];

            function M(e) {
                var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C;
                if (r !== C && (null === (t = w.orphaned) || void 0 === t ? void 0 : t.has(e))) {
                    L(e, r);
                    D(e, C)
                }
                return Boolean(null === (n = w[r]) || void 0 === n ? void 0 : n.has(e))
            }

            function L(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C;
                null == w[t] && (w[t] = new Set);
                w[t].add(e);
                N += 1
            }

            function D(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C;
                null === (t = w[n]) || void 0 === t || t.delete(e);
                N += 1
            }
            var U = {};

            function j(e, t) {
                var n;
                return Boolean(null === (n = U[e]) || void 0 === n ? void 0 : n[t])
            }

            function Z(e) {
                A.values(I.GUILD_EVENT(e)).forEach((function(t) {
                    return R(t.id, e)
                }))
            }

            function F(e) {
                S(e.guildScheduledEvent);
                return !0
            }

            function G(e) {
                return null != e && (null !== (t = (null == e ? void 0 : e.status) === d.p1.ACTIVE) && void 0 !== t && t);
                var t
            }

            function B(e) {
                return !d.$I.has(e.status)
            }

            function V(e) {
                return null != e && d.$I.has(e.status)
            }
            var k = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && g(e, t)
                }(n, e);
                var t = T(n);

                function n() {
                    p(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getGuildScheduledEvent = function(e) {
                    return null == e ? null : null !== (t = A.get(e)) && void 0 !== t ? t : null;
                    var t
                };
                r.getGuildEventCountByIndex = function(e) {
                    return A.size(e)
                };
                r.getGuildScheduledEventsForGuild = function(e) {
                    return null == e ? [] : A.values(e)
                };
                r.getGuildScheduledEventsByIndex = function(e) {
                    return A.values(e)
                };
                r.getRsvpVersion = function() {
                    return N
                };
                r.hasRsvp = function(e, t) {
                    return null != e && null != t && M(e, t)
                };
                r.isActive = function(e) {
                    return null != e && G(A.get(e))
                };
                r.getActiveEventByChannel = function(e) {
                    if (null != e) {
                        return this.getGuildScheduledEventsByIndex(I.CHANNEL_EVENT_ACTIVE(e))[0]
                    }
                };
                r.getUsersForGuildEvent = function(e) {
                    return null == e ? {} : null !== (t = U[e]) && void 0 !== t ? t : {};
                    var t
                };
                return n
            }(i.ZP.Store);
            k.displayName = "GuildScheduledEventStore";
            const x = new k(a.Z, {
                CONNECTION_OPEN: function(e) {
                    var t = e.guilds;
                    A.clear();
                    w = {};
                    N = 0;
                    U = {};
                    P.forEach(S);
                    t.forEach((function(e) {
                        return e.guild_scheduled_events.forEach(S)
                    }));
                    return !0
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    Z(t.id);
                    t.guild_scheduled_events.forEach((function(e) {
                        return S(e)
                    }));
                    return !0
                },
                GUILD_DELETE: function(e) {
                    Z(e.guild.id);
                    return !0
                },
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    var t = e.guildId,
                        n = e.guildScheduledEvents,
                        r = A.values(I.GUILD_EVENT(t), !0).map((function(e) {
                            return e.id
                        })),
                        i = n.map((function(e) {
                            return e.id
                        }));
                    o().difference(r, i).forEach((function(e) {
                        R(e, t)
                    }));
                    var u = !0,
                        a = !1,
                        l = void 0;
                    try {
                        for (var c, s = n[Symbol.iterator](); !(u = (c = s.next()).done); u = !0) {
                            S(c.value)
                        }
                    } catch (e) {
                        a = !0;
                        l = e
                    } finally {
                        try {
                            u || null == s.return || s.return()
                        } finally {
                            if (a) throw l
                        }
                    }
                    return !0
                },
                GUILD_SCHEDULED_EVENT_CREATE: F,
                GUILD_SCHEDULED_EVENT_UPDATE: F,
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    var t = e.guildScheduledEvent;
                    R(t.id, t.guild_id);
                    return !0
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    var t = e.userId,
                        n = e.guildEventId,
                        r = e.guildId,
                        o = A.get(n),
                        i = c.default.getId(),
                        u = M(n, r),
                        a = i === t;
                    if (!(null == o || u && a)) {
                        var l, d = null !== (l = o.user_count) && void 0 !== l ? l : 0;
                        S(v(E({}, o), {
                            user_count: d + 1
                        }))
                    }
                    a && !u && L(n, r);
                    if (null != t && !j(n, t)) {
                        var p = f.default.getUser(t),
                            h = s.ZP.getMember(r, t);
                        if (null != p) {
                            ! function(e, t) {
                                null == U[e] && (U[e] = {});
                                U[e][t.user.id] = t;
                                N += 1
                            }(n, {
                                user: p,
                                guild_member: null != h ? h : {
                                    guildId: r
                                }
                            })
                        }
                    }
                    return !0
                },
                GUILD_SCHEDULED_EVENT_USER_REMOVE: function(e) {
                    var t = e.userId,
                        n = e.guildEventId,
                        r = e.guildId,
                        o = A.get(n),
                        i = c.default.getId(),
                        u = M(n, r),
                        a = i === t;
                    a && u && D(n, r);
                    null != t && j(n, t) && function(e, t) {
                        var n;
                        null === (n = U[e]) || void 0 === n || delete n[t];
                        N += 1
                    }(n, t);
                    if (null != o && (u || !a)) {
                        var l, s = null !== (l = o.user_count) && void 0 !== l ? l : 0,
                            f = Math.max(0, s - 1);
                        S(v(E({}, o), {
                            user_count: f
                        }))
                    }
                    return !0
                },
                GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function(e) {
                    var t = e.guildId,
                        n = e.guildScheduledEventUsers;
                    w[t] = new Set;
                    n.forEach((function(e) {
                        e.user_id === c.default.getId() && L(e.guild_scheduled_event_id, t)
                    }));
                    return !0
                },
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
                    var t, n = e.guildEventId,
                        r = e.rsvpUsers,
                        o = e.guildId;
                    t = v(E({}, U), h({}, n, r.reduce((function(e, t) {
                        var n = t.guild_member,
                            r = m(t, ["guild_member"]),
                            i = {
                                user: new l.Z(v(E({}, r), {
                                    guildMemberAvatars: null != (null == n ? void 0 : n.avatar) ? h({}, o, n.avatar) : null
                                })),
                                guild_member: v(E({}, null != n ? n : {}), {
                                    guildId: o
                                })
                            };
                        e[r.id] = i;
                        return e
                    }), {}))), U = t;
                    return !0
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    var t = e.invite.guild_scheduled_event;
                    if (null == t) return !1;
                    S(t);
                    return !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    var t = e.entries,
                        n = o().map(t, "guild_scheduled_event"),
                        r = !0,
                        i = !1,
                        u = void 0;
                    try {
                        for (var a, l = n[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) {
                            var c = a.value;
                            S(c);
                            null != c.user_rsvp ? L(c.id, c.guild_id) : D(c.id, c.guild_id)
                        }
                    } catch (e) {
                        i = !0;
                        u = e
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (i) throw u
                        }
                    }
                    P = n;
                    return !0
                },
                LOGOUT: function() {
                    A.clear();
                    return !0
                }
            })
        },
        718634: (e, t, n) => {
            "use strict";
            n.d(t, {
                wx: () => o,
                Iq: () => i,
                RV: () => u
            });
            var r, o, i, u;
            ! function(e) {
                e.SENDING = "sending";
                e.SENT = "sent";
                e.ERROR = "error"
            }(r || (r = {}));
            ! function(e) {
                e[e.GUILD = 0] = "GUILD";
                e[e.GROUP_DM = 1] = "GROUP_DM";
                e[e.FRIEND = 2] = "FRIEND"
            }(o || (o = {}));
            ! function(e) {
                e[e.STREAM = 1] = "STREAM";
                e[e.EMBEDDED_APPLICATION = 2] = "EMBEDDED_APPLICATION";
                e[e.ROLE_SUBSCRIPTIONS_PURCHASE = 3] = "ROLE_SUBSCRIPTIONS_PURCHASE"
            }(i || (i = {}));
            ! function(e) {
                e.MAIN = "main";
                e.SETTINGS = "settings";
                e.GUEST = "guest"
            }(u || (u = {}))
        },
        641453: (e, t, n) => {
            "use strict";
            n.d(t, {
                tV: () => c,
                mb: () => l,
                fU: () => s,
                jX: () => f
            });
            var r = n(817673);

            function o(e) {
                return Array.isArray(e) ? e[0] : e
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var a = "event";

            function l(e, t) {
                if (null == t) return e;
                var n = function(e) {
                    var t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        return o(r.parse(t).event)
                    } catch (e) {
                        return
                    }
                }(t);
                return c({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function c(e) {
                var t = e.baseCode,
                    n = e.guildScheduledEventId;
                return null == n ? t : "".concat(t, "?").concat(a, "=").concat(n)
            }

            function s(e) {
                var t = u(e.split("?"), 2),
                    n = t[0],
                    i = t[1];
                return null == i ? {
                    baseCode: n
                } : {
                    baseCode: n,
                    guildScheduledEventId: o(r.parse(i).event)
                }
            }

            function f(e) {
                return u(e.split("?"), 1)[0]
            }
        },
        665278: (e, t, n) => {
            "use strict";
            n.d(t, {
                wx: () => i.wx,
                Tx: () => u,
                W6: () => a,
                $P: () => l,
                TY: () => c,
                P1: () => s,
                VR: () => f
            });
            var r = n(269300),
                o = n(382060),
                i = n(718634);

            function u(e) {
                var t = e.guild_scheduled_event;
                return null != t && (0, r.Ld)(t)
            }

            function a(e) {
                return e.target_type === i.Iq.ROLE_SUBSCRIPTIONS_PURCHASE
            }

            function l(e) {
                return null != e.channel && null != e.stage_instance
            }

            function c(e) {
                return e.target_type === i.Iq.STREAM && null != e.target_user
            }

            function s(e) {
                return e.target_type === i.Iq.EMBEDDED_APPLICATION
            }

            function f(e) {
                return "number" == typeof e.type ? e.type : function(e) {
                    return e.type === i.wx.GROUP_DM || null != e.channel && (0, o.bc)(e.channel.type)
                }(e) ? i.wx.GROUP_DM : function(e) {
                    return e.type === i.wx.FRIEND || null == e.guild && null != e.inviter
                }(e) ? i.wx.FRIEND : i.wx.GUILD
            }
        },
        649536: (e, t, n) => {
            "use strict";
            n.d(t, {
                lp: () => B,
                e5: () => L,
                wi: () => U,
                gx: () => D
            });
            var r = n(730381),
                o = n.n(r),
                i = n(516217),
                u = n(861323),
                a = n(513586),
                l = n(169376),
                c = n(722406);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function d(e, t) {
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

            function p(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var _ = function(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var v = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && h(e, t)
                    }(n, e);
                    var t = E(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r, o;
                        (r = t.call(this)).id = e.id;
                        r.name = e.name;
                        r.type = e.type;
                        r.user = e.user;
                        r.displayName = null !== (o = e.name_localized) && void 0 !== o ? o : e.name;
                        return r
                    }
                    n.createFromServer = function(e) {
                        return new n(d(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    s(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            user: new c.Z(e.user)
                        }))
                    };
                    return n
                }(l.Z),
                m = n(4798),
                y = n(664625),
                g = n(61209),
                O = n(840922),
                T = n(473903),
                I = n(473291),
                b = (n(918041), n(644144)),
                A = (n(120415), n(749565), n(435949)),
                S = (n(550131), n(493254)),
                R = n(2590);
            n(473708);

            function C(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        C(e, t, n[t])
                    }))
                }
                return e
            }

            function w(e, t) {
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
            var P = new c.Z({
                id: "???",
                username: "???"
            });

            function M(e) {
                return null == e.author ? P : null != e.webhook_id ? new c.Z(e.author) : null !== (t = T.default.getUser(e.author.id)) && void 0 !== t ? t : new c.Z(e.author);
                var t
            }

            function L(e) {
                var t, n, r, i, a, l, c, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    f = s.reactions,
                    d = s.interactionData,
                    p = null !== (i = null === (t = e.mentions) || void 0 === t ? void 0 : t.map((function(e) {
                        return e.id
                    }))) && void 0 !== i ? i : [],
                    h = null !== (a = e.mention_roles) && void 0 !== a ? a : [],
                    _ = null !== (l = e.mention_channels) && void 0 !== l ? l : [],
                    E = e.message_reference,
                    g = o()(new Date(e.timestamp)),
                    T = e.type === R.uaV.THREAD_CREATED ? [] : (0, u.ZP)(e.content),
                    I = M(e),
                    S = null,
                    C = null != e.interaction ? v.createFromServer(e.interaction) : null,
                    P = e.type === R.uaV.THREAD_STARTER_MESSAGE ? null === (n = e.referenced_message) || void 0 === n || null === (r = n.author) || void 0 === r ? void 0 : r.id : void 0,
                    L = e.type === R.uaV.PREMIUM_REFERRAL ? e.content : void 0,
                    D = e.content;
                if (e.type === R.uaV.PREMIUM_REFERRAL) {
                    D = "";
                    0
                }
                return new m.Z(w(N({}, e, S), {
                    author: I,
                    webhookId: e.webhook_id,
                    blocked: O.Z.isBlocked(I.id) || null != P && O.Z.isBlocked(P),
                    timestamp: g,
                    editedTimestamp: null != e.edited_timestamp ? o()(new Date(e.edited_timestamp)) : null,
                    mentionEveryone: e.mention_everyone,
                    mentions: p,
                    mentionRoles: h,
                    mentionChannels: _,
                    messageReference: E,
                    mentioned: (0, A.Sz)({
                        userId: y.default.getId(),
                        channelId: e.channel_id,
                        mentionEveryone: null !== (c = e.mention_everyone) && void 0 !== c && c,
                        mentionUsers: p,
                        mentionRoles: h
                    }),
                    attachments: j(e),
                    embeds: F(e),
                    codedLinks: T,
                    giftCodes: (0, b.Fp)(e) ? (0, b.Q_)(null == e ? void 0 : e.embeds[0].url) : (0, b.Q_)(e.content),
                    content: D,
                    referralTrialOfferId: L,
                    call: Z(e.call, g),
                    reactions: G(e.channel_id, null != f ? f : e.reactions),
                    interaction: C,
                    interactionData: null != d ? d : e.interaction_data,
                    roleSubscriptionData: e.role_subscription_data
                }))
            }

            function D(e, t) {
                return null != t.edited_timestamp ? w(N({}, t), {
                    reactions: e.reactions,
                    interaction_data: e.interaction_data
                }) : N({}, e, t)
            }

            function U(e, t) {
                if (null != t.edited_timestamp) return L(t, {
                    reactions: e.reactions,
                    interactionData: e.interactionData
                });
                var n = e;
                null != t.call && (n = n.set("call", Z(t.call, e.timestamp)));
                null != t.attachments && (n = n.set("attachments", j(t)));
                null != t.content && "" !== t.content && (n = n.set("content", t.content));
                null != t.embeds && (n = n.set("embeds", F(t)));
                t.pinned !== n.pinned && (n = n.set("pinned", t.pinned));
                null != n.webhookId && null != t.author && (n = n.set("author", new c.Z(t.author)));
                null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags));
                null != t.components && (n = n.set("components", t.components));
                null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data));
                if (null != t.reactions) {
                    var r;
                    n = n.set("reactions", G(e.channel_id, null !== (r = e.reactions) && void 0 !== r ? r : t.reactions))
                }
                return n
            }

            function j(e) {
                return null == e.attachments ? [] : e.attachments.map((function(e) {
                    return w(N({}, e), {
                        spoiler: e.filename.startsWith(S._j)
                    })
                }))
            }

            function Z(e, t) {
                if (null != e) {
                    var n = null != e.ended_timestamp ? o()(new Date(e.ended_timestamp)) : null,
                        r = null != n ? o().duration(n.diff(t)) : null;
                    return {
                        participants: e.participants,
                        endedTimestamp: n,
                        duration: r
                    }
                }
                return null
            }

            function F(e) {
                if (null == e.embeds) return [];
                var t = e.embeds.map((function(t) {
                    return (0, I.kC)(e.channel_id, e.id, t)
                }));
                return (0, I.o3)(t)
            }

            function G(e, t) {
                if (null == t) return [];
                var n, r = g.Z.getChannel(e),
                    o = i.ZP.getCurrentConfig({
                        guildId: null !== (n = null == r ? void 0 : r.getGuildId()) && void 0 !== n ? n : "",
                        location: "812691_1"
                    }).enabled,
                    u = i.yh.getCurrentConfig({
                        location: "812691_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    a = o || u;
                return t.filter((function(e) {
                    var t = N({}, e);
                    if (null != (null == t ? void 0 : t.count_details)) {
                        var n, r;
                        t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0;
                        t.count = null !== (r = t.count_details.normal) && void 0 !== r ? r : 0
                    }
                    return !(t.burst_count > 0 && t.count < 1 && !a)
                })).map((function(e) {
                    var t = N({}, e);
                    if (null != (null == t ? void 0 : t.count_details)) {
                        var n, r;
                        t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0;
                        t.count = null !== (r = t.count_details.normal) && void 0 !== r ? r : 0
                    }
                    t.count < 0 && (t.count = 0);
                    (t.burst_count < 0 || !o && !u) && (t.burst_count = 0);
                    0;
                    return t
                }))
            }
            var B = function(e) {
                return 0 === (0, a.cv)(e).length || "" !== e.content
            }
        },
        635012: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(649536),
                o = n(791707),
                i = n(2590);

            function u(e, t) {
                return null != t && (e.author.id === t && (e.state === i.yb.SENT && (!(0, o.Z)(e) && (!!(0, r.lp)(e) && (!e.hasFlag(i.iLy.IS_VOICE_MESSAGE) && null == e.referralTrialOfferId)))))
            }
        },
        435949: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => u,
                Hl: () => a,
                Sz: () => l
            });
            var r = n(61209),
                o = n(21372),
                i = n(567403);

            function u(e) {
                var t = e.message,
                    n = e.userId,
                    r = e.suppressEveryone,
                    o = void 0 !== r && r,
                    i = e.suppressRoles,
                    u = void 0 !== i && i;
                return l({
                    userId: n,
                    channelId: t.channel_id,
                    mentionEveryone: t.mentionEveryone,
                    mentionUsers: t.mentions,
                    mentionRoles: t.mentionRoles,
                    suppressEveryone: o,
                    suppressRoles: u
                })
            }

            function a(e) {
                var t, n, r, o, i = e.rawMessage,
                    u = e.userId,
                    a = e.suppressEveryone,
                    c = void 0 !== a && a,
                    s = e.suppressRoles,
                    f = void 0 !== s && s;
                return l({
                    userId: u,
                    channelId: i.channel_id,
                    mentionEveryone: null !== (n = i.mention_everyone) && void 0 !== n && n,
                    mentionUsers: null !== (r = null === (t = i.mentions) || void 0 === t ? void 0 : t.map((function(e) {
                        return e.id
                    }))) && void 0 !== r ? r : [],
                    mentionRoles: null !== (o = i.mention_roles) && void 0 !== o ? o : [],
                    suppressEveryone: c,
                    suppressRoles: f
                })
            }

            function l(e) {
                var t = e.userId,
                    n = e.channelId,
                    u = e.mentionEveryone,
                    a = e.mentionUsers,
                    l = e.mentionRoles,
                    c = e.suppressEveryone,
                    s = void 0 !== c && c,
                    f = e.suppressRoles,
                    d = void 0 !== f && f;
                if (u && !s) return !0;
                if (a.includes(t)) return !0;
                if (d || null == l || 0 === l.length) return !1;
                var p = r.Z.getChannel(n);
                if (null == p) return !1;
                var h = p.getGuildId();
                if (null == h) return !1;
                if (null == i.Z.getGuild(h)) return !1;
                var _ = o.ZP.getMember(h, t);
                return null != _ && l.some((function(e) {
                    return _.roles.includes(e)
                }))
            }
        },
        791707: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(141780);

            function o(e) {
                return !r.V.USER_MESSAGE.has(e.type)
            }
        },
        550131: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => d,
                Uj: () => p,
                ZH: () => h,
                Sw: () => _,
                ij: () => E
            });
            var r = n(441143),
                o = n.n(r),
                i = n(202351),
                u = n(61209),
                a = n(21372),
                l = n(567403),
                c = n(840922),
                s = n(473903),
                f = n(749565);

            function d(e) {
                var t = p(e);
                o()(null != t, "Result cannot be null because the message is not null");
                return t
            }

            function p(e) {
                var t, n = (0, i.e7)([u.Z], (function() {
                        return null == e ? null : u.Z.getChannel(e.channel_id)
                    })),
                    r = null == e || null === (t = e.author) || void 0 === t ? void 0 : t.id,
                    o = null == n ? void 0 : n.guild_id,
                    d = (0, i.e7)([a.ZP], (function() {
                        return null == o || null == r ? null : a.ZP.getMember(o, r)
                    })),
                    p = (0, i.e7)([s.default], (function() {
                        return s.default.getUser(r)
                    }), [r]),
                    h = f.ZP.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : p),
                    _ = (0, i.e7)([l.Z], (function() {
                        return l.Z.getGuild(o)
                    })),
                    E = (0, i.e7)([c.Z], (function() {
                        return null != r && (null == n ? void 0 : n.isPrivate()) ? c.Z.getNickname(r) : null
                    }));
                return null == e ? null : v({
                    user: e.author,
                    channel: n,
                    guild: _,
                    userName: h,
                    member: d,
                    friendNickname: E
                })
            }

            function h(e) {
                var t = u.Z.getChannel(e.channel_id);
                return E(e.author, t)
            }

            function _(e, t) {
                var n = null == e ? void 0 : e.id,
                    r = null == t ? void 0 : t.guild_id,
                    o = (0, i.e7)([a.ZP], (function() {
                        return null == r || null == n ? null : a.ZP.getMember(r, n)
                    })),
                    u = (0, i.e7)([l.Z], (function() {
                        return l.Z.getGuild(r)
                    })),
                    s = (0, i.e7)([c.Z], (function() {
                        return null != n && (null == t ? void 0 : t.isPrivate()) ? c.Z.getNickname(n) : null
                    })),
                    d = f.ZP.useName(e);
                return v({
                    user: e,
                    channel: t,
                    guild: u,
                    member: o,
                    userName: d,
                    friendNickname: s
                })
            }

            function E(e, t) {
                var n = null == e ? void 0 : e.id,
                    r = null == t ? void 0 : t.guild_id,
                    o = l.Z.getGuild(r),
                    i = null == r || null == n ? null : a.ZP.getMember(r, n),
                    u = null != n && null != t && t.isPrivate() ? c.Z.getNickname(n) : null;
                return v({
                    user: e,
                    channel: t,
                    guild: o,
                    member: i,
                    friendNickname: u
                })
            }

            function v(e) {
                var t, n, r, o = e.user,
                    i = e.channel,
                    u = e.guild,
                    a = e.member,
                    l = e.userName,
                    c = e.friendNickname,
                    s = null == o ? "???" : null != l ? l : f.ZP.getName(o);
                return null == (null == o ? void 0 : o.id) || null == i ? {
                    nick: s,
                    colorString: void 0
                } : null == (null == u ? void 0 : u.id) ? {
                    nick: null != c ? c : s,
                    colorString: void 0
                } : null == a ? {
                    nick: s,
                    colorString: void 0
                } : {
                    nick: null !== (n = a.nick) && void 0 !== n ? n : s,
                    colorString: null !== (r = a.colorString) && void 0 !== r ? r : void 0,
                    colorRoleName: null != a.colorRoleId ? null === (t = null == u ? void 0 : u.roles[a.colorRoleId]) || void 0 === t ? void 0 : t.name : void 0,
                    iconRoleId: a.iconRoleId,
                    guildMemberAvatar: a.avatar
                }
            }
        },
        863579: (e, t, n) => {
            "use strict";
            n.d(t, {
                K: () => r,
                d: () => o
            });

            function r() {
                return !1
            }

            function o() {
                return null
            }
        },
        486531: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => r
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-08_custom_gift",
                label: "Custom Gift Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show gift purchaser custom gift flow",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        330768: (e, t, n) => {
            "use strict";
            n.d(t, {
                Lh: () => h,
                iD: () => _,
                g1: () => E,
                ir: () => v,
                KC: () => r,
                UY: () => y,
                s4: () => g,
                OO: () => O,
                Zh: () => T,
                sm: () => I
            });
            var r, o = n(730381),
                i = n.n(o),
                u = n(318715),
                a = (n(516217), n(135855)),
                l = n(833589),
                c = n(664625),
                s = (n(473903), n(636795)),
                f = n(2590),
                d = n(203600),
                p = n(473708);

            function h(e) {
                return null == e.id ? a.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
            }

            function _(e, t, n, r) {
                var o, i, u;
                return (r ? e ? p.Z.Messages.SUPER_REACT_REMOVE_WITH_COUNT_A11Y_LABEL : p.Z.Messages.SUPER_REACT_WITH_COUNT_A11Y_LABEL : e ? p.Z.Messages.REACT_REMOVE_WITH_COUNT_A11Y_LABEL : p.Z.Messages.REACT_WITH_COUNT_A11Y_LABEL).format({
                    reactions: t,
                    emojiName: null !== (u = null === (i = null === (o = h(n)) || void 0 === o ? void 0 : o.replace(/[:_]/g, " ")) || void 0 === i ? void 0 : i.trim()) && void 0 !== u ? u : ""
                })
            }

            function E(e) {
                var t, n, r;
                return {
                    id: null !== (t = e.id) && void 0 !== t ? t : null,
                    name: null !== (r = null !== (n = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== n ? n : e.name) && void 0 !== r ? r : "",
                    animated: Boolean(e.animated)
                }
            }

            function v(e, t) {
                return null != t.id ? t.id === e.id : null == e.id && t.name === e.name
            }

            function m() {
                var e = (0, u.ZP)([l.Z], (function() {
                    return l.Z.nextReplenishAt
                }));
                return null == e ? 7 : Math.max(0, Math.ceil(i()(e).diff(i()().utc(), "days", !0)))
            }! function(e) {
                e[e.TIER_0 = 2] = "TIER_0";
                e[e.TIER_1 = 2] = "TIER_1";
                e[e.TIER_2 = 5] = "TIER_2"
            }(r || (r = {}));

            function y(e) {
                if (null == e || !(0, s.I5)(e)) return 0;
                switch (e.premiumType) {
                    case d.p9.TIER_0:
                        return r.TIER_0;
                    case d.p9.TIER_1:
                        return r.TIER_1;
                    case d.p9.TIER_2:
                        return r.TIER_2;
                    default:
                        return 0
                }
            }

            function g(e) {
                return e.isThread() ? f.jXE.THREAD_TEXT_AREA : e.isForumPost() ? f.jXE.FORUM_CHANNEL_TEXT_AREA : e.isGuildVocal() ? f.jXE.TEXT_IN_VOICE : f.jXE.CHANNEL_TEXT_AREA
            }

            function O() {
                var e = m();
                return 0 === e ? p.Z.Messages.SUPER_REACTIONS_OUT_OF_BURSTS_SIMPLE_SOON : p.Z.Messages.SUPER_REACTIONS_OUT_OF_BURSTS_SIMPLE.format({
                    n: e
                })
            }

            function T() {
                var e = m();
                return 0 === e ? p.Z.Messages.SUPER_REACTIONS_TAB_TOOLTIP_SOON : p.Z.Messages.SUPER_REACTIONS_TAB_TOOLTIP.format({
                    n: e
                })
            }

            function I(e) {
                var t = e.userId,
                    n = e.optimistic,
                    r = c.default.getId() === t;
                return !(n && !r)
            }
        },
        708299: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => _
            });
            var r = n(413675),
                o = n(744564),
                i = n(284610);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
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
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var d = {},
                p = {};
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
                    t && c(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.getStickerPreview = function(e, t) {
                    return (t === i.d.FirstThreadMessage ? p : d)[e]
                };
                return n
            }(r.Z.Store);
            h.displayName = "StickerMessagePreviewStore";
            const _ = new h(o.Z, {
                ADD_STICKER_PREVIEW: function(e) {
                    var t = e.channelId,
                        n = e.sticker;
                    (e.draftType === i.d.FirstThreadMessage ? p : d)[t] = [n]
                },
                CLEAR_STICKER_PREVIEW: function(e) {
                    var t = e.channelId,
                        n = e.draftType === i.d.FirstThreadMessage ? p : d;
                    null != n[t] && delete n[t]
                },
                LOGOUT: function() {
                    d = {};
                    p = {}
                }
            })
        },
        514351: (e, t, n) => {
            "use strict";
            n.d(t, {
                u3: () => r,
                n0: () => o,
                og: () => i,
                aQ: () => s,
                z: () => f,
                al: () => u,
                Ih: () => a,
                MO: () => l,
                V0: () => c
            });
            var r, o, i;
            ! function(e) {
                e[e.PNG = 1] = "PNG";
                e[e.APNG = 2] = "APNG";
                e[e.LOTTIE = 3] = "LOTTIE";
                e[e.GIF = 4] = "GIF"
            }(r || (r = {}));
            ! function(e) {
                e[e.STANDARD = 1] = "STANDARD";
                e[e.GUILD = 2] = "GUILD"
            }(o || (o = {}));
            ! function(e) {
                e.PNG = "png";
                e.APNG = "png";
                e.LOTTIE = "json";
                e.WEBP = "webp";
                e.GIF = "gif"
            }(i || (i = {}));
            var u, a, l, c, s = function(e) {
                    return e !== r.PNG
                },
                f = function(e) {
                    return e !== o.STANDARD
                };
            ! function(e) {
                e[e.STICKER = 0] = "STICKER";
                e[e.CREATE_STICKER = 1] = "CREATE_STICKER"
            }(u || (u = {}));
            ! function(e) {
                e.PACK = "PACK";
                e.FAVORITE = "FAVORITE";
                e.RECENT = "RECENT";
                e.SEARCH_RESULTS = "SEARCH_RESULTS";
                e.SEARCH_SUGGESTIONS = "SEARCH_SUGGESTIONS";
                e.GUILD = "GUILD";
                e.EMPTY_GUILD_UPSELL = "EMPTY_GUILD_UPSELL";
                e.CREATE_STICKER = "CREATE_STICKER"
            }(a || (a = {}));
            ! function(e) {
                e[e.STICKER_NAME = 0] = "STICKER_NAME";
                e[e.TAG = 1] = "TAG";
                e[e.CORRELATED_EMOJI = 2] = "CORRELATED_EMOJI";
                e[e.GUILD_NAME = 3] = "GUILD_NAME";
                e[e.PACK_NAME = 4] = "PACK_NAME"
            }(l || (l = {}));
            ! function(e) {
                e[e.STICKER_PICKER = 0] = "STICKER_PICKER";
                e[e.EXPRESSION_SUGGESTIONS = 1] = "EXPRESSION_SUGGESTIONS";
                e[e.AUTOCOMPLETE = 2] = "AUTOCOMPLETE"
            }(c || (c = {}))
        },
        513586: (e, t, n) => {
            "use strict";
            n.d(t, {
                Zt: () => I,
                Zv: () => A,
                _V: () => S,
                Q6: () => R,
                sM: () => C,
                B0: () => N,
                X_: () => w,
                z: () => P,
                WD: () => M,
                Hc: () => L,
                J8: () => D,
                jl: () => U,
                cv: () => j,
                V9: () => Z
            });
            var r = n(179936),
                o = n(874049),
                i = n(567403),
                u = n(255592),
                a = n(775173),
                l = n(120415),
                c = n(708299),
                s = n(514351),
                f = n(719833),
                d = n(2590),
                p = window.GLOBAL_ENV,
                h = p.API_ENDPOINT,
                _ = p.MEDIA_PROXY_ENDPOINT,
                E = p.PROJECT_ENV,
                v = p.ASSET_ENDPOINT,
                m = p.CDN_HOST,
                y = Object.values(s.og),
                g = decodeURIComponent(d.ANM.STICKER_ASSET("[\\d]+", "(".concat(y.join("|"), ")"))),
                O = new RegExp("(".concat(location.protocol).concat(v, "|").concat(location.protocol).concat(_, ")(").concat(g, ")"), "ig"),
                T = new RegExp("".concat(location.protocol).concat(h, "(").concat(g, ")"), "ig"),
                I = function(e) {
                    if (null != e.cover_sticker_id) {
                        var t = e.stickers.find((function(t) {
                            return t.id === e.cover_sticker_id
                        }));
                        if (null != t) return t
                    }
                    return e.stickers[0]
                },
                b = function(e) {
                    switch (e) {
                        case s.u3.PNG:
                            return a.$k ? s.og.WEBP : s.og.PNG;
                        case s.u3.APNG:
                            return s.og.APNG;
                        case s.u3.LOTTIE:
                            return s.og.LOTTIE;
                        case s.u3.GIF:
                            return s.og.GIF;
                        default:
                            throw new Error("Unexpected format type: ".concat(e))
                    }
                },
                A = function(e) {
                    switch (e) {
                        case "application/json":
                            return s.u3.LOTTIE;
                        case "image/apng":
                            return s.u3.APNG;
                        case "image/png":
                        case "image/webp":
                            return s.u3.PNG;
                        case "image/gif":
                            return s.u3.GIF;
                        default:
                            throw new Error("Unexpected file type: ".concat(e))
                    }
                },
                S = function(e) {
                    return null == e ? null : "".concat(e.name, ".").concat(b(e.format_type))
                },
                R = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.isPreview,
                        r = void 0 !== n && n,
                        i = t.size,
                        u = void 0 === i ? f.lE : i;
                    if (null == e.format_type) return null;
                    var a = d.ANM.STICKER_ASSET(e.id, b(e.format_type));
                    if ("development" !== E) {
                        if (e.format_type === s.u3.LOTTIE) return "".concat(location.protocol).concat(v).concat(a);
                        var c = e.format_type === s.u3.APNG && r && !(0, l.Dt)() ? "&passthrough=false" : "",
                            p = Math.min(2, (0, o.x_)());
                        return "".concat(location.protocol).concat(_).concat(a, "?size=").concat((0, o.oO)(u * p)).concat(c)
                    }
                    return "".concat(location.protocol).concat(h).concat(a)
                },
                C = function(e, t) {
                    var n, r = e.banner_asset_id;
                    if (null == r) return null;
                    var i = a.$k ? "webp" : "png";
                    n = null != m ? "".concat(location.protocol, "//").concat(m, "/app-assets/").concat(f.Ks, "/store/").concat(r, ".").concat(i) : "".concat(location.protocol).concat(h).concat(d.ANM.STORE_ASSET(f.Ks, r, i));
                    null != t && (n += "?size=".concat((0, o.oO)(t)));
                    return n
                },
                N = function(e) {
                    return e.match("development" !== E ? O : T)
                },
                w = function(e) {
                    return e.stickers.some((function(e) {
                        var t = e.format_type;
                        return t === s.u3.APNG || t === s.u3.LOTTIE || t === s.u3.GIF
                    }))
                },
                P = function(e) {
                    return {
                        type: s.Ih.PACK,
                        id: e.id,
                        name: e.name,
                        stickers: e.stickers,
                        previewSticker: I(e)
                    }
                },
                M = function(e, t) {
                    return e === f.yr.ANIMATE_ON_INTERACTION ? t : e !== f.yr.NEVER_ANIMATE
                },
                L = function(e, t, n, o) {
                    if (u.Z.getUploadCount(n, o) > 0) return !0;
                    var i = c.Z.getStickerPreview(n, o);
                    if (null != i && i.length > 0) return !0;
                    switch (e) {
                        case s.V0.STICKER_PICKER:
                            return "" !== t.trim();
                        case s.V0.AUTOCOMPLETE:
                        case s.V0.EXPRESSION_SUGGESTIONS:
                            return (0, r.wN)(t).length > 1;
                        default:
                            return !1
                    }
                },
                D = function(e) {
                    return e.type === s.n0.GUILD
                },
                U = function(e) {
                    return e.type === s.n0.STANDARD
                },
                j = function(e) {
                    return e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []
                },
                Z = function(e) {
                    if (null === e) return !1;
                    var t = e.guild_id;
                    return void 0 !== i.Z.getGuild(t)
                }
        },
        4798: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(730381),
                o = n.n(r),
                i = n(169376),
                u = n(330768),
                a = n(918041),
                l = n(661123),
                c = n(120415),
                s = n(2590);

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

            function p(e) {
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
            }

            function h(e, t) {
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

            function _(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                        var o = d(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            const y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = m(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r, i, u;
                    (r = t.call(this)).id = e.id;
                    r.type = e.type || s.uaV.DEFAULT;
                    r.channel_id = e.channel_id;
                    r.author = e.author;
                    r.content = e.content || "";
                    r.customRenderedContent = e.customRenderedContent;
                    r.attachments = e.attachments || [];
                    r.embeds = e.embeds || [];
                    r.mentions = e.mentions || [];
                    r.mentionRoles = e.mentionRoles || [];
                    r.mentionChannels = e.mentionChannels || [];
                    r.mentioned = e.mentioned || !1;
                    r.pinned = e.pinned || !1;
                    r.mentionEveryone = e.mentionEveryone || !1;
                    r.tts = e.tts || !1;
                    r.codedLinks = e.codedLinks || [];
                    r.giftCodes = e.giftCodes || [];
                    r.timestamp = e.timestamp || o()();
                    r.editedTimestamp = e.editedTimestamp || null;
                    r.state = e.state || s.yb.SENT;
                    r.nonce = e.nonce || null;
                    r.blocked = e.blocked || !1;
                    r.call = e.call || null;
                    r.bot = e.bot || !1;
                    r.webhookId = e.webhookId || null;
                    r.reactions = e.reactions || [];
                    r.applicationId = e.application_id || e.applicationId || null;
                    r.application = e.application || null;
                    r.activity = e.activity || null;
                    r.messageReference = e.messageReference || null;
                    r.flags = e.flags || 0;
                    r.isSearchHit = e.hit || e.isSearchHit || !1;
                    r.stickers = e.stickers || [];
                    r.stickerItems = null !== (u = null !== (i = e.sticker_items) && void 0 !== i ? i : e.stickerItems) && void 0 !== u ? u : [];
                    r.components = e.components;
                    r.loggingName = e.loggingName || null;
                    r.colorString = e.colorString;
                    r.nick = e.nick;
                    r.interaction = e.interaction || null;
                    r.interactionData = e.interactionData || null;
                    r.interactionError = e.interactionError || null;
                    r.roleSubscriptionData = e.roleSubscriptionData;
                    r.referralTrialOfferId = e.referralTrialOfferId || null;
                    return r
                }
                var r = n.prototype;
                r.isEdited = function() {
                    return null != this.editedTimestamp
                };
                r.getChannelId = function() {
                    return this.channel_id
                };
                r.getReaction = function(e) {
                    return this.reactions.find((function(t) {
                        return (0, u.ir)(t.emoji, e)
                    }))
                };
                r.userHasReactedWithEmoji = function(e, t) {
                    return this.reactions.some((function(n) {
                        if ((0, u.ir)(n.emoji, e)) return t && n.me || !t && n.me_burst
                    }))
                };
                r.addReaction = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        o = -1,
                        i = this.reactions.map((function(i, l) {
                            if ((0, u.ir)(i.emoji, e)) {
                                o = l;
                                if (r) {
                                    if (t && i.me) return i;
                                    var s = t && i.me_burst ? i.burst_count : i.burst_count + 1,
                                        f = null != i.burst_colors && i.burst_colors.length > 0 ? i.burst_colors : n;
                                    i = h(p({}, i), {
                                        me_burst: !!t || i.me_burst,
                                        burst_count: s,
                                        count_details: h(p({}, i.count_details), {
                                            burst: s
                                        }),
                                        burst_colors: f,
                                        themedBurstColors: a.Z.buildEmojiReactionColorsPlatformed({
                                            colors: f,
                                            shouldProcessMobileColors: (0, c.gn)()
                                        })
                                    })
                                } else {
                                    if (t && i.me_burst) return i;
                                    var d = t && i.me ? i.count : i.count + 1;
                                    i = h(p({}, i), {
                                        count: d,
                                        count_details: h(p({}, i.count_details), {
                                            normal: d
                                        }),
                                        me: !!t || i.me
                                    })
                                }
                            }
                            return i
                        })); - 1 === o && (r ? i.push({
                        emoji: e,
                        me: !1,
                        me_burst: t,
                        count: 0,
                        count_details: {
                            burst: 1,
                            normal: 0
                        },
                        burst_count: 1,
                        burst_colors: n,
                        themedBurstColors: a.Z.buildEmojiReactionColorsPlatformed({
                            colors: null != n ? n : [],
                            shouldProcessMobileColors: (0, c.gn)()
                        })
                    }) : i.push({
                        emoji: e,
                        me: t,
                        me_burst: !1,
                        count: 1,
                        count_details: {
                            burst: 0,
                            normal: 1
                        },
                        burst_count: 0,
                        burst_colors: []
                    }));
                    return this.set("reactions", i)
                };
                r.addReactionBatch = function(e, t) {
                    return e.reduce((function(e, n) {
                        var r = n.users,
                            o = n.emoji;
                        return r.reduce((function(e, n) {
                            return e.addReaction(o, n === t, n)
                        }), e)
                    }), this)
                };
                r.removeReaction = function(e) {
                    var t, n, r, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = -1,
                        l = this.reactions.map((function(t, n) {
                            if ((0, u.ir)(t.emoji, e)) {
                                if (i) {
                                    var r = o && !t.me_burst ? t.burst_count : t.burst_count - 1;
                                    t = h(p({}, t), {
                                        burst_count: r,
                                        me_burst: !o && t.me_burst,
                                        count_details: h(p({}, t.count_details), {
                                            burst: r
                                        })
                                    })
                                } else {
                                    var l = o && !t.me ? t.count : t.count - 1;
                                    t = h(p({}, t), {
                                        count: l,
                                        me: !o && t.me,
                                        count_details: h(p({}, t.count_details), {
                                            normal: l
                                        })
                                    })
                                }
                                a = n
                            }
                            return t
                        })),
                        c = null !== (t = l[a]) && void 0 !== t ? t : {},
                        s = c.count,
                        f = c.burst_count,
                        d = c.count_details,
                        _ = null !== (n = null == d ? void 0 : d.normal) && void 0 !== n ? n : 0,
                        E = null !== (r = null == d ? void 0 : d.burst) && void 0 !== r ? r : 0; - 1 !== a && s <= 0 && f <= 0 && _ <= 0 && E <= 0 && l.splice(a, 1);
                    return this.set("reactions", l)
                };
                r.removeReactionsForEmoji = function(e) {
                    return this.set("reactions", this.reactions.filter((function(t) {
                        return !(0, u.ir)(t.emoji, e)
                    })))
                };
                r.isSystemDM = function() {
                    return this.author.isSystemUser()
                };
                r.hasFlag = function(e) {
                    return (0, l.yE)(this.flags, e)
                };
                r.isCommandType = function() {
                    return this.type === s.uaV.CHAT_INPUT_COMMAND || this.type === s.uaV.CONTEXT_MENU_COMMAND
                };
                r.toJS = function() {
                    return h(p({}, this), {
                        webkhook_id: this.webhookId,
                        edited_timestamp: this.editedTimestamp,
                        mention_everyone: this.mentionEveryone
                    })
                };
                r.isFirstMessageInForumPost = function(e) {
                    return this.id === this.channel_id && e.isForumPost()
                };
                return n
            }(i.Z)
        },
        953727: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(202351),
                o = n(199731),
                i = n(744564);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function l(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
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
                    var n, r = a(e);
                    if (t) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var d = {},
                p = {},
                h = {
                    scrollTop: 0
                };

            function _(e) {
                return {
                    guildId: e,
                    scrollTop: null,
                    scrollTo: null
                }
            }

            function E(e) {
                if (null != d[e]) {
                    var t = d[e];
                    return t.scrollTop === t.scrollHeight - t.offsetHeight
                }
                return !0
            }
            var v = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = f(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.percentageScrolled = function(e) {
                    if (null != d[e]) {
                        var t = d[e];
                        return t.scrollTop / t.scrollHeight
                    }
                    return 1
                };
                r.getChannelDimensions = function(e) {
                    return d[e]
                };
                r.getGuildDimensions = function(e) {
                    var t;
                    return null !== (t = p[e]) && void 0 !== t ? t : _(e)
                };
                r.getGuildListDimensions = function() {
                    return h
                };
                r.isAtBottom = function(e) {
                    return E(e)
                };
                return n
            }(r.ZP.Store);
            v.displayName = "DimensionStore";
            const m = new v(i.Z, {
                UPDATE_CHANNEL_DIMENSIONS: function(e) {
                    var t = e.channelId,
                        n = e.scrollTop,
                        r = e.scrollHeight,
                        i = e.offsetHeight,
                        u = d[t];
                    if (null == n || null == r || null == i) {
                        if (null == u) return !1;
                        delete d[t]
                    } else {
                        var a = {
                            channelId: t,
                            scrollTop: n,
                            scrollHeight: r,
                            offsetHeight: i
                        };
                        if (null != u && (0, o.Z)(u, a)) return !1;
                        d[t] = a
                    }
                },
                UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
                    var t = e.guildId,
                        n = e.scrollTop,
                        r = e.scrollTo;
                    null == p[t] && (p[t] = _(t));
                    void 0 !== n && (p[t].scrollTop = n);
                    var o = !1;
                    if (void 0 !== r) {
                        o = p[t].scrollTo !== r;
                        p[t].scrollTo = r
                    }
                    return null != r || o
                },
                UPDATE_GUILD_LIST_DIMENSIONS: function(e) {
                    var t = e.scrollTop;
                    h.scrollTop = t
                },
                CALL_CREATE: function(e) {
                    var t = e.channelId;
                    E(t) && delete d[t]
                }
            })
        },
        284610: (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => T,
                Z: () => P
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                u = n(744564),
                a = n(72580),
                l = n(664625),
                c = n(61209),
                s = n(837067),
                f = n(2590);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t, n) {
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

            function E(e, t) {
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

            function v(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
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

            function y(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                        var o = _(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var T, I = f.en1 + 500;
            ! function(e) {
                e[e.ChannelMessage = 0] = "ChannelMessage";
                e[e.ThreadSettings = 1] = "ThreadSettings";
                e[e.FirstThreadMessage = 2] = "FirstThreadMessage";
                e[e.ApplicationLauncherCommand = 3] = "ApplicationLauncherCommand"
            }(T || (T = {}));
            var b = {};

            function A(e) {
                var t = b[e];
                null == t && (t = b[e] = {});
                return t
            }

            function S(e) {
                var t = e.type,
                    n = e.channelId,
                    r = e.draft,
                    o = e.draftType,
                    i = c.Z.getChannel(n);
                r === (null == i ? void 0 : i.template) && (r = "");
                var u = l.default.getId();
                if (null != u && null != r && "" !== r) {
                    var a, s = A(u),
                        f = s[n];
                    null == f && (f = s[n] = {});
                    if ((r = function(e) {
                            e.length > I && (e = e.substr(0, I));
                            return e
                        }(r)) === (null === (a = f[o]) || void 0 === a ? void 0 : a.draft)) return !1;
                    f[o] = {
                        timestamp: Date.now(),
                        draft: r
                    }
                } else R(n, o);
                return "DRAFT_SAVE" === t
            }

            function R(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default.getId();
                if (null == n) return !1;
                var r = A(n),
                    i = r[e];
                if (null == i) return !1;
                delete i[t];
                o().isEmpty(i) && delete r[e]
            }

            function C() {
                var e = l.default.getId();
                if (!(null == e || s.Z.totalUnavailableGuilds > 0)) {
                    var t = A(e);
                    for (var n in t) null == c.Z.getChannel(n) && delete t[n]
                }
            }

            function N(e) {
                var t = e.channel.id,
                    n = l.default.getId();
                if (null == n) return !1;
                delete A(n)[t];
                return !1
            }
            var w = function(e) {
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
                var t = O(n);

                function n() {
                    p(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    b = null != e ? e : {};
                    ! function() {
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var r, o = Object.entries(b)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                                var i = y(r.value, 2),
                                    u = i[0],
                                    a = i[1],
                                    l = !0,
                                    c = !1,
                                    s = void 0;
                                try {
                                    for (var f, d = Object.entries(a)[Symbol.iterator](); !(l = (f = d.next()).done); l = !0) {
                                        var p = y(f.value, 2),
                                            h = p[0],
                                            _ = p[1][T.ChannelMessage];
                                        null != _ && ("" !== _.draft && "" !== _.draft.trim() || R(h, T.ChannelMessage, u))
                                    }
                                } catch (e) {
                                    c = !0;
                                    s = e
                                } finally {
                                    try {
                                        l || null == d.return || d.return()
                                    } finally {
                                        if (c) throw s
                                    }
                                }
                            }
                        } catch (e) {
                            t = !0;
                            n = e
                        } finally {
                            try {
                                e || null == o.return || o.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                    }();
                    this.waitFor(l.default, c.Z, s.Z)
                };
                r.getState = function() {
                    return b
                };
                r.getThreadDraftWithParentMessageId = function(e) {
                    var t = this,
                        n = l.default.getId();
                    if (null != n) {
                        var r = A(n),
                            o = Object.keys(r).find((function(n) {
                                var r = t.getThreadSettings(n);
                                return (null == r ? void 0 : r.parentMessageId) === e
                            }));
                        return null != o ? this.getThreadSettings(o) : void 0
                    }
                };
                r.getRecentlyEditedDrafts = function(e) {
                    var t = l.default.getId();
                    if (null == t) return [];
                    var n = A(t);
                    return o()(n).mapValues((function(t) {
                        return null == t ? void 0 : t[e]
                    })).pickBy(a.lm).toPairs().map((function(e) {
                        var t = y(e, 2),
                            n = t[0],
                            r = t[1];
                        return {
                            channelId: n,
                            timestamp: r.timestamp,
                            draft: r.draft
                        }
                    })).sortBy((function(e) {
                        return -e.timestamp
                    })).value()
                };
                r.getDraft = function(e, t) {
                    var n = l.default.getId();
                    if (null == n) return "";
                    var r = A(n)[e];
                    if (null != r) {
                        var o = r[t];
                        if (null != o) return o.draft
                    }
                    return ""
                };
                r.getThreadSettings = function(e) {
                    var t = l.default.getId();
                    if (null == t) return null;
                    var n = A(t)[e];
                    return null == n ? null : n[T.ThreadSettings]
                };
                return n
            }(i.ZP.PersistedStore);
            w.displayName = "DraftStore";
            w.persistKey = "DraftStore";
            w.migrations = [function(e) {
                if (null == e) return {};
                for (var t in e) "timestamp" in e[t] && (e[t] = h({}, T.ChannelMessage, e[t]));
                return e
            }, function(e) {
                var t = l.default.getId();
                if (null == e || null == t) return {};
                var n = {},
                    r = n[t] = {};
                for (var o in e) r[o] = e[o];
                return n
            }];
            const P = new w(u.Z, {
                CONNECTION_OPEN: function() {
                    var e = l.default.getId();
                    e in b || (b[e] = {});
                    C();
                    return !1
                },
                LOGOUT: function(e) {
                    e.isSwitchingAccount || (b = {})
                },
                MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
                    e.userId in b && delete b[e.userId]
                },
                GUILD_DELETE: function() {
                    C();
                    return !1
                },
                CHANNEL_DELETE: N,
                THREAD_DELETE: N,
                THREAD_CREATE: function(e) {
                    var t = e.channel,
                        n = l.default.getId();
                    if (null == n || t.ownerId === n) return !1;
                    var r = A(n),
                        o = r[t.parent_id];
                    if (null == o) return !1;
                    var i = o[T.ThreadSettings];
                    if (null == i) return !1;
                    if (i.parentMessageId !== t.id) return !1;
                    var u, a, c = r[t.parent_id];
                    if (null == c) return !1;
                    var s = null !== (a = null === (u = c[T.FirstThreadMessage]) || void 0 === u ? void 0 : u.draft) && void 0 !== a ? a : "";
                    "" !== s && (r[t.id] = h({}, T.ChannelMessage, {
                        timestamp: Date.now(),
                        draft: s
                    }));
                    R(t.parent_id, T.ThreadSettings);
                    R(t.parent_id, T.FirstThreadMessage)
                },
                DRAFT_SAVE: S,
                DRAFT_CHANGE: S,
                DRAFT_CLEAR: function(e) {
                    return R(e.channelId, e.draftType)
                },
                THREAD_SETTINGS_DRAFT_CHANGE: function(e) {
                    var t = e.channelId,
                        n = e.draft,
                        r = l.default.getId();
                    if (null != r) {
                        var o = A(r),
                            i = o[t];
                        null == i && (i = o[t] = {});
                        i[T.ThreadSettings] = E(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    h(e, t, n[t])
                                }))
                            }
                            return e
                        }({
                            timestamp: Date.now()
                        }, i[T.ThreadSettings], n), {
                            parentChannelId: t
                        })
                    }
                }
            })
        },
        757753: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => T
            });
            var r = n(202351),
                o = n(744564),
                i = n(641453),
                u = n(2590);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t, n) {
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

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
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
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var E = {},
                v = {},
                m = {};

            function y(e, t) {
                var n;
                e = null != e ? e : "";
                var r = (0, i.fU)(e),
                    o = E[e],
                    a = null != o ? s({
                        state: u.r2o.RESOLVING
                    }, o) : {
                        state: u.r2o.RESOLVING,
                        code: r.baseCode
                    };
                t(a);
                E = f(s({}, E), l({}, e, a));
                null != (null === (n = a.guild) || void 0 === n ? void 0 : n.id) && (m = f(s({}, m), l({}, a.guild.id, e)))
            }

            function g(e) {
                return y(e.code, (function(t) {
                    t.state = "banned" in e && e.banned ? u.r2o.BANNED : u.r2o.EXPIRED
                }))
            }
            var O = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = _(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getInvite = function(e) {
                    return E[e]
                };
                r.getInviteError = function(e) {
                    return v[e]
                };
                r.getInvites = function() {
                    return E
                };
                r.getInviteKeyForGuildId = function(e) {
                    return m[e]
                };
                return n
            }(r.ZP.Store);
            O.displayName = "InviteStore";
            const T = new O(o.Z, {
                INVITE_RESOLVE: function(e) {
                    var t = e.code,
                        n = (0, i.fU)(t);
                    E = f(s({}, E), l({}, t, {
                        code: n.baseCode,
                        state: u.r2o.RESOLVING
                    }))
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return y(e.code, (function(t) {
                        t.state = u.r2o.RESOLVED;
                        t.guild = e.invite.guild;
                        t.channel = e.invite.channel;
                        t.inviter = e.invite.inviter;
                        var n, r;
                        t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null;
                        t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null;
                        t.target_type = e.invite.target_type;
                        t.target_user = e.invite.target_user;
                        t.target_application = e.invite.target_application;
                        t.expires_at = e.invite.expires_at;
                        t.stage_instance = e.invite.stage_instance;
                        t.friends_count = e.invite.friends_count;
                        t.is_contact = e.invite.is_contact;
                        t.guild_scheduled_event = e.invite.guild_scheduled_event;
                        t.type = e.invite.type;
                        t.flags = e.invite.flags
                    }))
                },
                INVITE_RESOLVE_FAILURE: g,
                INSTANT_INVITE_REVOKE_SUCCESS: g,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return y(e.invite.code, (function(t) {
                        t.state = u.r2o.RESOLVED;
                        t.inviter = e.invite.inviter
                    }))
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach((function(e) {
                        return y(e.code, (function(e) {
                            e.state = u.r2o.EXPIRED
                        }))
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return y(e.invite.code, (function(t) {
                        t.state = u.r2o.RESOLVED;
                        t.guild = e.invite.guild;
                        t.channel = e.invite.channel;
                        t.inviter = e.invite.inviter;
                        var n, r;
                        t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null;
                        t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null;
                        t.target_type = e.invite.target_type;
                        t.target_user = e.invite.target_user;
                        t.target_application = e.invite.target_application;
                        t.stage_instance = e.invite.stage_instance;
                        t.guild_scheduled_event = e.invite.guild_scheduled_event;
                        t.type = e.invite.type
                    }))
                },
                INVITE_ACCEPT: function(e) {
                    return y(e.code, (function(e) {
                        e.state = u.r2o.ACCEPTING
                    }))
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return y(e.code, (function(t) {
                        t.state = u.r2o.ACCEPTED;
                        t.guild = e.invite.guild;
                        t.new_member = e.invite.new_member;
                        t.channel = s({}, t.channel, e.invite.channel)
                    }))
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    v[e.code] = e.error;
                    return y(e.code, (function(e) {
                        e.state = u.r2o.ERROR
                    }))
                },
                INVITE_APP_OPENING: function(e) {
                    return y(e.code, (function(e) {
                        e.state = u.r2o.APP_OPENING
                    }))
                },
                INVITE_APP_OPENED: function(e) {
                    return y(e.code, (function(e) {
                        e.state = u.r2o.APP_OPENED
                    }))
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return y(e.code, (function(e) {
                        e.state = u.r2o.APP_NOT_OPENED
                    }))
                }
            })
        },
        117112: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Q
            });
            var r = n(496486),
                o = n.n(r),
                i = n(468811),
                u = n.n(i),
                a = n(202351),
                l = n(630631),
                c = n(744564),
                s = n(169376);

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function d(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
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
                    var n, r = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = _(n);

                function n(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = t.call(this)).id = e.id || "";
                    r.widgets = e.widgets || [];
                    return r
                }
                return n
            }(s.Z);

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function m(e) {
                m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return m(e)
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        v(e, t, n[t])
                    }))
                }
                return e
            }

            function g(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function O(e, t) {
                O = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return O(e, t)
            }
            var T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
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
                    var n, r = m(e);
                    if (t) {
                        var o = m(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var b = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && O(e, t)
                    }(n, e);
                    var t = I(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this)).id = e.id || "";
                        r.layoutId = e.layoutId || "";
                        r.type = e.type;
                        r.anchor = y({
                            left: 0,
                            top: 0
                        }, e.anchor);
                        r.size = y({
                            width: 0,
                            height: 0
                        }, e.size);
                        r.pinned = !!e.pinned;
                        r.zIndex = e.zIndex || 0;
                        r.meta = y({}, e.meta);
                        return r
                    }
                    return n
                }(s.Z),
                A = n(66121),
                S = n(2590);

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function C(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function w(e) {
                w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return w(e)
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        N(e, t, n[t])
                    }))
                }
                return e
            }

            function M(e, t) {
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

            function L(e, t) {
                return !t || "object" !== F(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function D(e, t) {
                D = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return D(e, t)
            }

            function U(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || G(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(e) {
                return function(e) {
                    if (Array.isArray(e)) return R(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || G(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z, F = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function G(e, t) {
                if (e) {
                    if ("string" == typeof e) return R(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? R(e, t) : void 0
                }
            }

            function B(e) {
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
                    var n, r = w(e);
                    if (t) {
                        var o = w(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return L(this, n)
                }
            }! function(e) {
                e.REQUIRED = "REQUIRED";
                e.OPTIONAL = "OPTIONAL";
                e.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT"
            }(Z || (Z = {}));
            var V, k, x, Y = "migrated",
                H = (N(x = {}, S.Odu.GUILDS, {
                        minSize: {
                            width: 312,
                            height: 300
                        },
                        resizeX: !1,
                        resizeY: !0,
                        dragAnywhere: !1,
                        layoutPolicy: Z.OPTIONAL,
                        defaultSettings: {
                            anchor: {
                                left: .175,
                                top: .15,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: "auto",
                                height: .65
                            },
                            pinned: !1
                        }
                    }), N(x, S.Odu.TEXT, {
                        minSize: {
                            width: 430,
                            height: 300
                        },
                        resizeX: !0,
                        resizeY: !0,
                        dragAnywhere: !1,
                        layoutPolicy: Z.OPTIONAL,
                        defaultSettings: {
                            anchor: {
                                left: .26,
                                top: .15,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: .565,
                                height: .65
                            },
                            pinned: !0
                        }
                    }), N(x, S.Odu.VOICE, {
                        minSize: {
                            width: 272,
                            height: 100
                        },
                        resizeX: !1,
                        resizeY: !1,
                        dragAnywhere: !0,
                        layoutPolicy: Z.REQUIRED,
                        defaultSettings: {
                            anchor: {
                                left: .011,
                                top: .011,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: "auto",
                                height: "auto"
                            },
                            pinned: !0
                        }
                    }),
                    N(x, S.Odu.GUILDS_TEXT, {
                        minSize: {
                            height: 300,
                            width: 610
                        },
                        resizeX: !0,
                        resizeY: !0,
                        dragAnywhere: !1,
                        layoutPolicy: Z.OPTIONAL_DEFAULT,
                        defaultSettings: {
                            anchor: {
                                left: .15,
                                top: .15,
                                bottom: null,
                                right: null
                            },
                            size: {
                                width: .7,
                                height: .65
                            },
                            pinned: !1
                        }
                    }), N(x, S.Odu.LOBBY_VOICE, {
                        minSize: {
                            width: 272,
                            height: 100
                        },
                        resizeX: !1,
                        resizeY: !1,
                        dragAnywhere: !0,
                        layoutPolicy: Z.REQUIRED,
                        defaultSettings: {
                            anchor: {
                                left: null,
                                top: .011,
                                bottom: null,
                                right: .011
                            },
                            size: {
                                width: "auto",
                                height: "auto"
                            },
                            pinned: !0
                        }
                    }), x);

            function z(e, t) {
                var n = k[e];
                if (null == n) return !1;
                var r = V[n.layoutId];
                return null != r && t(n, r)
            }

            function W(e, t) {
                k = M(P({}, k), N({}, e.id, e.set("zIndex", t)))
            }

            function K(e) {
                var t;
                return null === (t = H[e]) || void 0 === t ? void 0 : t.defaultSettings
            }
            var q = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && D(e, t)
                }(n, e);
                var t = B(n);

                function n() {
                    C(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    var t = this;
                    if (null != e && null != e.layouts && null != e.widgets) {
                        V = function(e) {
                            var t = {};
                            o().forEach(e, (function(e, n) {
                                t[n] = new E(e)
                            }));
                            return t
                        }(e.layouts);
                        k = function(e) {
                            var t = {};
                            o().forEach(e, (function(e, n) {
                                t[n] = new b(e)
                            }));
                            return t
                        }(e.widgets)
                    } else {
                        V = {};
                        k = {}
                    }
                    var n = !1,
                        r = [];
                    o().forEach(H, (function(e, t) {
                        e.layoutPolicy === Z.REQUIRED && r.push(t)
                    }));
                    o().forEach(V, (function(e, o) {
                        var i = t.getWidgetsForLayout(o),
                            a = !1,
                            l = !0,
                            c = !1,
                            s = void 0;
                        try {
                            for (var f, d = function() {
                                    var e = f.value,
                                        r = i.find((function(t) {
                                            return t.type === e
                                        }));
                                    if (null != r) return "continue";
                                    a = n = !0;
                                    var l = u().v4();
                                    r = new b(M(P({}, t.getWidgetDefaultSettings(e)), {
                                        type: e,
                                        id: l,
                                        layoutId: o,
                                        zIndex: i.length
                                    }));
                                    i.push(r);
                                    k = M(P({}, k), N({}, l, r))
                                }, p = r[Symbol.iterator](); !(l = (f = p.next()).done); l = !0) d()
                        } catch (e) {
                            c = !0;
                            s = e
                        } finally {
                            try {
                                l || null == p.return || p.return()
                            } finally {
                                if (c) throw s
                            }
                        }
                        if (a) {
                            e = e.set("widgets", i.map((function(e) {
                                return e.id
                            })));
                            V = M(P({}, V), N({}, o, e))
                        }
                    }));
                    o().forEach(k, (function(e, t) {
                        var r = V[e.layoutId];
                        if (null == r || r.widgets.indexOf(t) < 0) {
                            delete(k = P({}, k))[t];
                            n = !0
                        }
                    }));
                    if (n) {
                        this.persist();
                        this.emitChange()
                    }
                };
                r.getState = function() {
                    return {
                        layouts: V,
                        widgets: k
                    }
                };
                r.getLayouts = function() {
                    return V
                };
                r.getLayout = function(e) {
                    return V[e]
                };
                r.getAllWidgets = function() {
                    return k
                };
                r.getWidget = function(e) {
                    return k[e]
                };
                r.getWidgetsForLayout = function(e) {
                    var t = this,
                        n = this.getLayout(e);
                    return null == n ? [] : n.widgets.reduce((function(e, n) {
                        var r = t.getWidget(n);
                        null != r && e.push(r);
                        return e
                    }), [])
                };
                r.getWidgetConfig = function(e) {
                    return H[e]
                };
                r.getWidgetDefaultSettings = function(e) {
                    return K(e)
                };
                r.getWidgetType = function(e) {
                    var t = k[e];
                    return null != t ? t.type : ""
                };
                r.getRegisteredWidgets = function() {
                    return H
                };
                r.getDefaultLayout = function(e) {
                    var t = [];
                    o().forEach(this.getRegisteredWidgets(), (function(n, r) {
                        switch (n.layoutPolicy) {
                            case Z.REQUIRED:
                            case Z.OPTIONAL_DEFAULT:
                                t.push(M(P({}, n.defaultSettings), {
                                    type: r,
                                    id: u().v4(),
                                    layoutId: e
                                }))
                        }
                    }));
                    return t
                };
                return n
            }(a.ZP.PersistedStore);
            q.displayName = "LayoutStore";
            q.persistKey = "LayoutStore";
            q.migrations = [function() {
                var e = P({}, l.Z.get("OverlayStore")),
                    t = e.pinnedWidgets,
                    n = e.positions,
                    r = e.sizes;
                if (5 === e.v && t) {
                    var o = Y,
                        i = [],
                        u = t.map((function(e) {
                            var t = null != n ? n[e] : null,
                                u = null != r ? r[e] : null,
                                a = {
                                    id: e,
                                    layoutId: o,
                                    type: e,
                                    anchor: t || {
                                        top: -1,
                                        left: -1,
                                        bottom: null,
                                        right: null
                                    },
                                    size: u || {
                                        width: -1,
                                        height: -1
                                    },
                                    pinned: !0,
                                    zIndex: 0
                                };
                            i.push([a.id, a]);
                            return a.id
                        }));
                    return {
                        layouts: [
                            [o, {
                                id: o,
                                widgets: u
                            }]
                        ],
                        widgets: i
                    }
                }
                return {
                    layouts: [],
                    widgets: []
                }
            }, function(e) {
                var t = e.layouts,
                    n = e.widgets,
                    r = new Set(Object.keys(S.Odu)),
                    o = Array.from(n).filter((function(e) {
                        var t = U(e, 1)[0];
                        return !r.has(t)
                    })),
                    i = Array.from(t).filter((function(e) {
                        return U(e, 1)[0] !== Y
                    }));
                i.forEach((function(e) {
                    var t = U(e, 2),
                        n = t[0],
                        r = t[1],
                        i = null,
                        a = null;
                    r.widgets.find((function(e) {
                        var t = o.find((function(t) {
                            var r = U(t, 2),
                                o = r[0],
                                i = r[1];
                            return o === e && i.layoutId === n
                        }));
                        if (null == t) return !1;
                        null == a && t[1].type === S.Odu.VOICE && (a = t[0]);
                        null == i && t[1].type === S.Odu.TEXT && (i = t[1].pinned);
                        return null != i && null != a || void 0
                    }));
                    if (!i && null != a) {
                        var l = u().v4();
                        r.widgets = [a, l];
                        o.push([l, M(P({}, K(S.Odu.GUILDS_TEXT)), {
                            type: S.Odu.GUILDS_TEXT,
                            id: l,
                            layoutId: n,
                            zIndex: 2
                        })])
                    }
                }));
                return {
                    widgets: o,
                    layouts: i
                }
            }, function(e) {
                var t = e.layouts,
                    n = e.widgets,
                    r = t.reduce((function(e, t) {
                        var n = U(t, 2),
                            r = n[0],
                            o = n[1];
                        e[r] = o;
                        return e
                    }), {}),
                    o = n.reduce((function(e, t) {
                        var n = U(t, 2),
                            r = n[0],
                            o = n[1];
                        e[r] = o;
                        return e
                    }), {});
                return {
                    layouts: r,
                    widgets: o
                }
            }];
            const Q = new q(c.Z, {
                LAYOUT_CREATE: function(e) {
                    var t = e.layoutId,
                        n = e.widgets,
                        r = e.defaultResolution;
                    if (null != V[t]) return !1;
                    var o = [];
                    n.forEach((function(e, t) {
                        var n = function(e) {
                                var t = V.migrated;
                                if (null != t) {
                                    var n = !0,
                                        r = !1,
                                        o = void 0;
                                    try {
                                        for (var i, u = t.widgets[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                                            var a = i.value,
                                                l = k[a];
                                            if (null != l && l.type === e) return l
                                        }
                                    } catch (e) {
                                        r = !0;
                                        o = e
                                    } finally {
                                        try {
                                            n || null == u.return || u.return()
                                        } finally {
                                            if (r) throw o
                                        }
                                    }
                                }
                                return null
                            }(e.type),
                            i = M(P({}, e), {
                                zIndex: t
                            });
                        "" === i.id && (i.id = u().v4());
                        if (null != n) {
                            i.pinned = n.pinned; - 1 !== n.anchor.left && (i.anchor = (0,
                                A.jL)(n.anchor, r)); - 1 !== n.size.width && (i.size = (0, A.Ox)(n.size, r))
                        }
                        k = M(P({}, k), N({}, i.id, new b(i)));
                        o.push(i.id)
                    }));
                    V = M(P({}, V), N({}, t, new E({
                        id: t,
                        widgets: o
                    })))
                },
                LAYOUT_SET_PINNED: function(e) {
                    return z(e.widgetId, (function(e, t) {
                        ! function(e) {
                            k = M(P({}, k), N({}, e.id, e.set("pinned", !e.pinned)))
                        }(e)
                    }))
                },
                LAYOUT_UPDATE_WIDGET: function(e) {
                    var t = e.widgetId,
                        n = e.anchor,
                        r = e.size;
                    return z(t, (function(e, t) {
                        return function(e, t, n) {
                            k = M(P({}, k), N({}, e.id, e.merge({
                                anchor: t,
                                size: n
                            })))
                        }(e, n, r)
                    }))
                },
                LAYOUT_SET_TOP_WIDGET: function(e) {
                    return z(e.widgetId, (function(e, t) {
                        return function(e, t) {
                            var n = function(e) {
                                var t = [];
                                e.widgets.forEach((function(e) {
                                    var n = k[e];
                                    null != n && t.push(n)
                                }));
                                return t
                            }(e);
                            n.sort((function(e, t) {
                                return e.zIndex - t.zIndex
                            }));
                            var r = n.findIndex((function(e) {
                                return e.id === t
                            }));
                            if (r === n.length - 1) return !1;
                            n.push(n.splice(r, 1)[0]);
                            for (var o = 0; o < n.length; o++) {
                                W(n[o], o)
                            }
                            return !0
                        }(t, e.id)
                    }))
                },
                LAYOUT_DELETE_WIDGET: function(e) {
                    var t = e.widgetId;
                    delete(k = P({}, k))[t];
                    o().forEach(V, (function(e, n) {
                        if (n !== Y) {
                            var r = e.widgets.indexOf(t);
                            if (r >= 0) {
                                var o = j(e.widgets);
                                o.splice(r, 1);
                                V = M(P({}, V), N({}, n, e.set("widgets", o)))
                            }
                        }
                    }))
                },
                LAYOUT_DELETE_ALL_WIDGETS: function(e) {
                    var t = e.layoutId,
                        n = V[t];
                    if (null == n) return !1;
                    n.widgets.forEach((function(e) {
                        delete(k = P({}, k))[e]
                    }));
                    V = M(P({}, V), N({}, n.id, n.set("widgets", [])))
                },
                LAYOUT_CREATE_WIDGETS: function(e) {
                    e.widgetConfigs.forEach((function(e) {
                        var t = new b(e),
                            n = V[t.layoutId];
                        if (null == n) throw new Error("LayoutStore - handleAddWidget: Invalid layoutId");
                        t = t.set("zIndex", n.widgets.length);
                        k = M(P({}, k), N({}, t.id, t));
                        var r = j(n.widgets).concat([t.id]);
                        V = M(P({}, V), N({}, n.id, n.set("widgets", r)))
                    }))
                }
            })
        },
        352980: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => K
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                u = n(744564),
                a = n(815678),
                l = n(769915),
                c = n(296602),
                s = n(331607),
                f = function(e) {
                    var t = e.type;
                    return t !== s.h.AUTO_MODERATION_MESSAGE && t !== s.h.AUTO_MODERATION_NOTIFICATION
                },
                d = n(861426),
                p = n(649536),
                h = n(635012),
                _ = (n(550131),
                    n(330768)),
                E = n(384411),
                v = n(661123),
                m = n(664625),
                y = n(61209),
                g = n(953727),
                O = n(5544),
                T = n(21372),
                I = n(567403),
                b = n(682776),
                A = n(840922),
                S = n(715107),
                R = n(464187),
                C = n(473903),
                N = n(2590);

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function P(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function M(e) {
                M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return M(e)
            }

            function L(e, t) {
                return !t || "object" !== j(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function D(e, t) {
                D = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return D(e, t)
            }

            function U(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return w(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Z(e) {
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
                    var n, r = M(e);
                    if (t) {
                        var o = M(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return L(this, n)
                }
            }
            var F = new Set,
                G = new c.Z("MessageStore");

            function B() {
                a.Z.forEach((function(e) {
                    a.Z.commit(e.mutate({
                        ready: !1,
                        loadingMore: !1
                    }))
                }));
                F.clear()
            }

            function V() {
                a.Z.forEach((function(e) {
                    e.forAll((function(e) {
                        e.timestamp.locale(E.default.locale)
                    }))
                }))
            }

            function k() {
                a.Z.forEach((function(e) {
                    var t = e.channelId;
                    null == y.Z.getChannel(t) && a.Z.clear(t)
                }))
            }

            function x() {
                a.Z.forEach((function(e) {
                    a.Z.commit(e.reset(e.map((function(e) {
                        return e.set("blocked", A.Z.isBlocked(e.author.id))
                    }))))
                }))
            }

            function Y(e) {}

            function H(e) {
                var t = e.type,
                    n = e.channelId,
                    r = e.messageId,
                    o = e.userId,
                    i = e.emoji,
                    u = e.burst,
                    l = a.Z.get(n);
                if (null == l) return !1;
                if (!(0, _.sm)(e)) return !1;
                var c = m.default.getId() === o;
                l = l.update(r, (function(n) {
                    if ("MESSAGE_REACTION_ADD" === t) {
                        var r = e.colors;
                        return n.addReaction(i, c, o, r, u)
                    }
                    return n.removeReaction(i, c, u)
                }));
                a.Z.commit(l)
            }

            function z(e) {
                var t = e.type,
                    n = e.messageData,
                    r = n.message,
                    o = (0, l.hc)(n),
                    i = r.channelId,
                    u = a.Z.getOrCreate(i);
                if (!u.has(o)) return !1;
                u = u.update(o, (function(e) {
                    var n;
                    (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(f).length) > 0 && (e = e.set("embeds", []));
                    "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, v.pj)(e.flags, N.iLy.EPHEMERAL)));
                    return e
                }));
                a.Z.commit(u)
            }
            var W = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && D(e, t)
                }(n, e);
                var t = Z(n);

                function n() {
                    P(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(C.default, y.Z, g.Z, T.ZP, E.default, S.Z, R.Z, I.Z, A.Z, O.ZP);
                    this.syncWith([d.Z], (function() {}))
                };
                r.getMessages = function(e) {
                    if (d.Z.hasViewingRoles()) {
                        var t = y.Z.getChannel(e),
                            n = null == t ? void 0 : t.getGuildId();
                        if (d.Z.isViewingRoles(n) && !b.Z.can(N.Plq.VIEW_CHANNEL, t)) return new a.Z(e)
                    }
                    return a.Z.getOrCreate(e)
                };
                r.getMessage = function(e, t) {
                    return a.Z.getOrCreate(e).get(t)
                };
                r.getLastEditableMessage = function(e) {
                    var t = C.default.getCurrentUser();
                    return o()(this.getMessages(e).toArray()).reverse().find((function(e) {
                        return (0, h.Z)(e, null == t ? void 0 : t.id)
                    }))
                };
                r.getLastCommandMessage = function(e) {
                    var t = C.default.getCurrentUser();
                    return this.getMessages(e).toArray().reverse().find((function(e) {
                        return null != e.interaction && e.interaction.user.id === (null == t ? void 0 : t.id)
                    }))
                };
                r.jumpedMessageId = function(e) {
                    var t = a.Z.get(e);
                    return null == t ? void 0 : t.jumpTargetId
                };
                r.focusedMessageId = function(e) {
                    var t = a.Z.get(e);
                    return null == t ? void 0 : t.focusTargetId
                };
                r.hasPresent = function(e) {
                    var t = a.Z.get(e);
                    return null != t && t.ready && t.hasPresent()
                };
                r.whenReady = function(e, t) {
                    this.addConditionalChangeListener((function() {
                        if (a.Z.getOrCreate(e).ready) {
                            setImmediate(t);
                            return !1
                        }
                    }))
                };
                r.isLoadingMessages = function(e) {
                    return a.Z.getOrCreate(e).loadingMore
                };
                r.hasCurrentUserSentMessage = function(e) {
                    var t = C.default.getCurrentUser();
                    return null != this.getMessages(e).findNewest((function(e) {
                        return e.author.id === (null == t ? void 0 : t.id)
                    }))
                };
                return n
            }(i.ZP.Store);
            W.displayName = "MessageStore";
            const K = new W(u.Z, {
                BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
                    var t = e.changesByChannelId;
                    for (var n in t) {
                        var r = a.Z.get(n);
                        if (null != r) {
                            r.cached || !0 ? r.mergeDelta(t[n].new_messages, t[n].modified_messages, t[n].deleted_message_ids) : G.log("Skipping background message sync for ".concat(n, " cached:").concat(r.cached, " ") + "ready:".concat(r.ready, " hasMoreAfter:").concat(r.hasMoreAfter, " ") + "isConnected:".concat(false))
                        }
                    }
                },
                CONNECTION_OPEN: B,
                OVERLAY_INITIALIZE: B,
                CACHE_LOADED: function(e) {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = Object.entries(e.messages)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var u = U(o.value, 2),
                                l = u[0],
                                c = u[1],
                                s = a.Z.getOrCreate(l).addCachedMessages(c, !0);
                            a.Z.commit(s)
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            t || null == i.return || i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                },
                LOAD_MESSAGES: function() {
                    return !0
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    var t = e.channelId,
                        n = e.isBefore,
                        r = e.isAfter,
                        o = e.jump,
                        i = e.hasMoreBefore,
                        u = e.hasMoreAfter,
                        l = e.messages,
                        c = e.isStale,
                        s = e.truncate,
                        f = a.Z.getOrCreate(t);
                    f = f.loadComplete({
                        newMessages: l,
                        isBefore: n,
                        isAfter: r,
                        jump: o,
                        hasMoreBefore: i,
                        hasMoreAfter: u,
                        cached: c,
                        hasFetched: !0
                    });
                    null == s || !n && !r || n && r || (f = f.truncate(n, r));
                    a.Z.commit(f)
                },
                LOAD_MESSAGES_FAILURE: function(e) {
                    var t = e.channelId,
                        n = a.Z.getOrCreate(t);
                    a.Z.commit(n.mutate({
                        loadingMore: !1,
                        error: !0
                    }))
                },
                LOAD_MESSAGES_SUCCESS_CACHED: function(e) {
                    var t = e.channelId,
                        n = e.jump,
                        r = e.focus,
                        o = e.before,
                        i = e.after,
                        u = e.limit,
                        l = e.truncate,
                        c = a.Z.getOrCreate(t);
                    (null == n ? void 0 : n.present) ? c = c.jumpToPresent(u): null != (null == r ? void 0 : r.messageId) ? c = c.focusOnMessage(r.messageId) : null != (null == n ? void 0 : n.messageId) ? c = c.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType) : null == o && null == i || (c = c.loadFromCache(null != o, u));
                    null == l || null == o && null == i || null != o && null != i || (c = c.truncate(null != o, null != i));
                    a.Z.commit(c)
                },
                LOCAL_MESSAGES_LOADED: function(e) {
                    var t = a.Z.getOrCreate(e.channelId);
                    !t.cached && t.ready || a.Z.commit(t.addCachedMessages(e.messages, e.stale))
                },
                LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function(e) {
                    var t = e.messageId,
                        n = e.channelId,
                        r = a.Z.get(n);
                    if (null == r || !r.has(t)) return !1;
                    r = r.update(t, (function(t) {
                        return t.set("interactionData", e.interactionData)
                    }));
                    a.Z.commit(r)
                },
                TRUNCATE_MESSAGES: function(e) {
                    var t = e.channelId,
                        n = e.truncateBottom,
                        r = e.truncateTop;
                    G.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(r));
                    var o = a.Z.getOrCreate(t);
                    o = o.truncate(n, r);
                    a.Z.commit(o)
                },
                CLEAR_MESSAGES: function(e) {
                    var t = e.channelId;
                    G.log("Clearing messages for ".concat(t));
                    a.Z.clear(t);
                    F.clear()
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message,
                        r = e.isPushNotification,
                        o = a.Z.getOrCreate(t);
                    if (r) {
                        G.log("Inserting message tapped on from a push notification", n);
                        a.Z.commit(o.receivePushNotification(n))
                    } else {
                        if (!o.ready) return !1;
                        if (null != n.nonce && n.state !== N.yb.SENDING && F.has(n.nonce)) {
                            o = o.remove(n.nonce);
                            F.delete(n.nonce)
                        }
                        o = o.receiveMessage(n, g.Z.isAtBottom(t));
                        a.Z.commit(o)
                    }
                },
                MESSAGE_SEND_FAILED: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.reason,
                        o = a.Z.getOrCreate(t);
                    if (null == o || !o.has(n)) return !1;
                    o = o.update(n, (function(e) {
                        (e = e.set("state", N.yb.SEND_FAILED)).isCommandType() && (e = (e = e.set("interactionError", null != r ? r : "")).set("flags", (0, v.pj)(e.flags, N.iLy.EPHEMERAL)));
                        return e
                    }));
                    a.Z.commit(o)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: z,
                MESSAGE_EDIT_FAILED_AUTOMOD: z,
                MESSAGE_UPDATE: function(e) {
                    var t = e.message.id,
                        n = e.message.channel_id,
                        r = a.Z.getOrCreate(n);
                    if (null == r || !r.has(t)) return !1;
                    r = r.update(t, (function(t) {
                        return (0,
                            p.wi)(t, e.message)
                    }));
                    a.Z.commit(r)
                },
                MESSAGE_DELETE: function(e) {
                    var t = e.id,
                        n = e.channelId,
                        r = a.Z.getOrCreate(n);
                    if (null == r || !r.has(t)) return !1;
                    if (r.revealedMessageId === t) {
                        var o = r.getAfter(t);
                        r = null != o && o.blocked ? r.mutate({
                            revealedMessageId: o.id
                        }) : r.mutate({
                            revealedMessageId: null
                        })
                    }
                    r = r.remove(t);
                    a.Z.commit(r);
                    F.delete(t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    var t = e.ids,
                        n = e.channelId,
                        r = a.Z.getOrCreate(n);
                    if (null == r) return !1;
                    var i = r.removeMany(t);
                    if (r === i) return !1;
                    if (null != i.revealedMessageId && o().some(t, (function(e) {
                            return i.revealedMessageId === e
                        }))) {
                        var u = i.getAfter(i.revealedMessageId);
                        i = null != u && u.blocked ? i.mutate({
                            revealedMessageId: u.id
                        }) : i.mutate({
                            revealedMessageId: null
                        })
                    }
                    a.Z.commit(i);
                    t.forEach((function(e) {
                        F.delete(e)
                    }))
                },
                MESSAGE_REVEAL: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = a.Z.getOrCreate(t);
                    a.Z.commit(r.mutate({
                        revealedMessageId: n
                    }))
                },
                USER_SETTINGS_PROTO_UPDATE: V,
                I18N_LOAD_SUCCESS: V,
                THREAD_CREATE_LOCAL: function(e) {
                    var t = e.channelId,
                        n = a.Z.getOrCreate(t);
                    n = n.loadComplete({
                        newMessages: [],
                        hasMoreAfter: !1,
                        hasMoreBefore: !1
                    });
                    a.Z.commit(n)
                },
                CHANNEL_DELETE: k,
                THREAD_DELETE: k,
                GUILD_DELETE: k,
                RELATIONSHIP_ADD: x,
                RELATIONSHIP_REMOVE: x,
                GUILD_MEMBERS_CHUNK: Y,
                THREAD_MEMBER_LIST_UPDATE: Y,
                MESSAGE_REACTION_ADD: H,
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.reactions,
                        o = a.Z.get(t);
                    if (null == o) return !1;
                    o = o.update(n, (function(e) {
                        var t;
                        return e.addReactionBatch(r, null === (t = C.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
                    }));
                    a.Z.commit(o)
                },
                MESSAGE_REACTION_REMOVE: H,
                MESSAGE_REACTION_REMOVE_ALL: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = a.Z.get(t);
                    if (null == r) return !1;
                    r = r.update(n, (function(e) {
                        return e.set("reactions", [])
                    }));
                    a.Z.commit(r)
                },
                MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.emoji,
                        o = a.Z.get(t);
                    if (null == o) return !1;
                    o = o.update(n, (function(e) {
                        return e.removeReactionsForEmoji(r)
                    }));
                    a.Z.commit(o)
                },
                LOGOUT: function() {
                    a.Z.forEach((function(e) {
                        a.Z.clear(e.channelId)
                    }));
                    F.clear()
                },
                UPLOAD_START: function(e) {
                    var t = e.message;
                    null != t.nonce && F.add(t.nonce)
                },
                UPLOAD_FAIL: function(e) {
                    var t = e.channelId,
                        n = e.messageRecord,
                        r = null == n ? void 0 : n.nonce;
                    if (null != r && F.has(r)) {
                        var o = a.Z.getOrCreate(t),
                            i = o.get(r);
                        if (null == i) return;
                        o = (o = o.remove(r)).merge([i]);
                        F.delete(r);
                        a.Z.commit(o)
                    }
                }
            })
        },
        449852: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => y
            });
            var r = n(202351),
                o = n(744564),
                i = n(347365);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function c(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var p = null,
                h = null,
                _ = null;

            function E(e) {
                var t = e.error;
                p = t
            }

            function v() {
                p = null
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                n.prototype.getGiftCode = function(e) {
                    return e === _ ? h : null
                };
                ! function(e, t, n) {
                    t && a(e.prototype, t);
                    n && a(e, n)
                }(n, [{
                    key: "paymentError",
                    get: function() {
                        return p
                    }
                }]);
                return n
            }(r.ZP.Store);
            m.displayName = "PremiumPaymentModalStore";
            const y = new m(o.Z, {
                PREMIUM_PAYMENT_SUBSCRIBE_FAIL: E,
                PREMIUM_PAYMENT_UPDATE_FAIL: E,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function() {
                    v()
                },
                PREMIUM_PAYMENT_UPDATE_SUCCESS: v,
                PREMIUM_PAYMENT_ERROR_CLEAR: v,
                BRAINTREE_TOKENIZE_PAYPAL_FAIL: function(e) {
                    var t = e.message,
                        n = e.code;
                    p = new i.HF(t, n)
                },
                BRAINTREE_TOKENIZE_VENMO_FAIL: function(e) {
                    var t = e.message,
                        n = e.code;
                    p = new i.HF(t, n)
                },
                SKU_PURCHASE_SUCCESS: function(e) {
                    h = e.giftCode;
                    _ = e.skuId
                },
                SKU_PURCHASE_FAIL: function(e) {
                    p = e.error
                },
                SKU_PURCHASE_AWAIT_CONFIRMATION: function(e) {
                    e.isGift && (_ = e.skuId)
                },
                GIFT_CODE_CREATE: function(e) {
                    var t = e.giftCode;
                    if (0 !== t.uses || t.sku_id !== _) return !1;
                    h = t.code
                }
            })
        },
        255592: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                u = n(744564),
                a = n(105783);
            const l = (0, n(260561).B)({
                kind: "user",
                id: "2022-10_context_menu_and_new_media_picker",
                label: "Context Menu and New Media Picker",
                defaultConfig: {
                    enabled: !1,
                    persistentGiftButton: !0
                },
                treatments: [{
                    id: 1,
                    label: "New media picker is enabled. Gift button is visible alongside Create Chread",
                    config: {
                        enabled: !0,
                        persistentGiftButton: !0
                    }
                }, {
                    id: 2,
                    label: "New media picker is enabled. Gift button is NOT visible alongside Create Chread",
                    config: {
                        enabled: !0,
                        persistentGiftButton: !1
                    }
                }]
            });
            var c = n(598143),
                s = n(595882),
                f = n(284610),
                d = n(2590),
                p = n(473708);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function v(e, t) {
                return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
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

            function y(e) {
                return function(e) {
                    if (Array.isArray(e)) return h(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var n, r = E(e);
                    if (t) {
                        var o = E(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var T = new Map,
                I = [];

            function b(e, t) {
                var n, r;
                return null !== (r = null === (n = A(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : I
            }

            function A(e) {
                var t;
                return null !== (t = T.get(e)) && void 0 !== t ? t : new Map
            }

            function S(e, t, n) {
                var r = A(e);
                r.set(t, n);
                T.set(e, r)
            }
            var R = function(e) {
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
                var t = O(n);

                function n() {
                    _(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getFirstUpload = function(e, t) {
                    var n = b(e, t);
                    return n.length > 0 ? n[0] : null
                };
                r.hasAdditionalUploads = function(e, t) {
                    var n;
                    return (null !== (n = b(e, t).length) && void 0 !== n ? n : 0) > 1
                };
                r.getUploads = function(e, t) {
                    return b(e, t)
                };
                r.getUploadCount = function(e, t) {
                    var n;
                    return null !== (n = b(e, t).length) && void 0 !== n ? n : 0
                };
                r.getUpload = function(e, t, n) {
                    return b(e, n).find((function(e) {
                        return e.id === t
                    }))
                };
                r.findUpload = function(e, t, n) {
                    return b(e, t).find(n)
                };
                return n
            }(i.ZP.Store);
            R.displayName = "UploadAttachmentStore";
            const C = new R(u.Z, {
                UPLOAD_ATTACHMENT_POP_FILE: function(e) {
                    var t = e.channelId,
                        n = y(b(t, f.d.ChannelMessage));
                    n.shift();
                    S(t, f.d.ChannelMessage, n)
                },
                UPLOAD_ATTACHMENT_ADD_FILES: function(e) {
                    var t, n = e.files,
                        r = e.channelId,
                        i = e.showLargeMessageDialog,
                        u = e.draftType,
                        s = y(b(r, u));
                    if (!0 === (null === (t = l.getCurrentConfig({
                            location: "373489_1"
                        }, {
                            autoTrackExposure: !1
                        })) || void 0 === t ? void 0 : t.enabled) && s.length + n.length > d.dN1) a.Z.show({
                        title: p.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                        body: p.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
                            limit: d.dN1
                        })
                    });
                    else {
                        o().forEach(n, (function(e) {
                            var t = new c.n(e, r, i, s.length);
                            t.upload();
                            s.push(t)
                        }));
                        S(r, u, s)
                    }
                },
                UPLOAD_ATTACHMENT_UPDATE_FILE: function(e) {
                    var t = e.channelId,
                        n = e.id,
                        r = e.filename,
                        o = e.description,
                        i = e.spoiler,
                        u = e.thumbnail,
                        a = e.draftType;
                    S(t, a, y(b(t, a)).map((function(e) {
                        if (e.id === n) {
                            void 0 !== r && (e.filename = r);
                            void 0 !== i && (e.spoiler = i);
                            void 0 !== o && (e.description = o);
                            void 0 !== u && (e.isThumbnail = u);
                            return e
                        }
                        return e
                    })))
                },
                UPLOAD_ATTACHMENT_REMOVE_FILE: function(e) {
                    var t, n, r = e.channelId,
                        o = e.id,
                        i = e.draftType,
                        u = !0 === (null === (t = l.getCurrentConfig({
                            location: "373489_2"
                        }, {
                            autoTrackExposure: !1
                        })) || void 0 === t ? void 0 : t.enabled),
                        a = y(b(r, i));
                    n = u ? a.findIndex((function(e) {
                        return (0, s.T)({
                            uri: o,
                            filename: o
                        }, e)
                    })) : a.findIndex((function(e) {
                        return o === e.id
                    }));
                    if (n > -1) {
                        a.splice(n, 1)[0].cancel();
                        S(r, i, a)
                    }
                },
                UPLOAD_ATTACHMENT_REMOVE_FILES: function(e) {
                    var t = e.channelId,
                        n = e.attachmentIds,
                        r = e.draftType,
                        o = y(b(t, r));
                    n.forEach((function(e) {
                        var t = o.findIndex((function(t) {
                            return e === t.id
                        }));
                        if (t > -1) {
                            o.splice(t, 1)[0].cancel()
                        }
                    }));
                    S(t, r, o)
                },
                UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function(e) {
                    S(e.channelId, e.draftType, [])
                },
                UPLOAD_ATTACHMENT_SET_UPLOADS: function(e) {
                    var t = e.channelId,
                        n = e.uploads;
                    S(t, e.draftType, n)
                },
                UPLOAD_ATTACHMENT_SET_FILE: function(e) {
                    var t = e.channelId,
                        n = e.id,
                        r = e.file,
                        o = e.draftType,
                        i = y(b(t, o)).filter((function(e) {
                            return e.id !== n
                        })),
                        u = new c.n(r, t);
                    u.upload();
                    i.push(u);
                    S(t, o, i)
                },
                SIDEBAR_CLOSE: function(e) {
                    S(e.baseChannelId, f.d.FirstThreadMessage, [])
                }
            })
        },
        674482: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => J
            });
            var r = n(202351),
                o = n(630631),
                i = n(744564),
                u = n(771068),
                a = n(458960),
                l = n(609182),
                c = n(382060),
                s = n(664625),
                f = n(61209),
                d = n(5544),
                p = n(117112),
                h = n(464187),
                _ = n(120415),
                E = n(310126),
                v = n(226810),
                m = n(901654),
                y = n(2590),
                g = n(122253);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function T(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function b(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e) {
                A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return A(e)
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        b(e, t, n[t])
                    }))
                }
                return e
            }

            function R(e, t) {
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

            function C(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function N(e, t) {
                return !t || "object" !== P(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function w(e, t) {
                w = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return w(e, t)
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function M(e) {
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
                    var n, r = A(e);
                    if (t) {
                        var o = A(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return N(this, n)
                }
            }
            var L = Object.freeze({
                    selectedGuildId: null,
                    selectedChannelId: null,
                    displayUserMode: y.OYC.ALWAYS,
                    displayNameMode: y.wC$.ALWAYS,
                    avatarSizeMode: y.ipw.LARGE,
                    notificationPositionMode: y._vf.TOP_LEFT,
                    textChatNotifications: y.Ypu.ENABLED,
                    disableExternalLinkAlert: !1,
                    disablePinTutorial: !1,
                    textWidgetOpacity: g.wF.LOWER
                }),
                D = null,
                U = {},
                j = null,
                Z = new Set,
                F = !1,
                G = !1,
                B = !1,
                V = new Set,
                k = !1;

            function x(e) {
                var t = U[e];
                null == t && (t = U[e] = S({}, L));
                return t
            }
            var Y, H = S({}, L),
                z = new Set(["AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_INPUT_VOLUME", "AUDIO_SET_LOCAL_VIDEO_DISABLED", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_SET_MODE", "AUDIO_SET_NOISE_CANCELLATION", "AUDIO_SET_NOISE_SUPPRESSION", "AUDIO_SET_OUTPUT_DEVICE", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_SELF_MUTE", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "CHANNEL_ACK", "CHANNEL_PRELOAD", "GIFT_CODE_REDEEM", "GIFT_CODE_REDEEM_FAILURE", "GIFT_CODE_REDEEM_SUCCESS", "HOTSPOT_HIDE", "INVITE_MODAL_CLOSE", "LAYOUT_CREATE", "LAYOUT_CREATE_WIDGETS", "LAYOUT_DELETE_ALL_WIDGETS", "LAYOUT_DELETE_WIDGET", "LAYOUT_SET_PINNED", "LAYOUT_SET_TOP_WIDGET", "LAYOUT_UPDATE_WIDGET", "LOAD_MESSAGES", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES_SUCCESS", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "OVERLAY_ACTIVATE_REGION", "OVERLAY_DEACTIVATE_ALL_REGIONS", "OVERLAY_SET_AVATAR_SIZE_MODE", "OVERLAY_SET_DISPLAY_NAME_MODE", "OVERLAY_SET_DISPLAY_USER_MODE", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE", "OVERLAY_SET_TEXT_WIDGET_OPACITY", "OVERLAY_SET_UI_LOCKED", "PREMIUM_PAYMENT_ERROR_CLEAR", "PREMIUM_PAYMENT_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_OPEN", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", "PREMIUM_PAYMENT_UPDATE_FAIL", "PREMIUM_PAYMENT_UPDATE_SUCCESS", "PREMIUM_REQUIRED_MODAL_CLOSE", "PREMIUM_REQUIRED_MODAL_OPEN", "PURCHASE_CONFIRMATION_MODAL_CLOSE", "PURCHASE_CONFIRMATION_MODAL_OPEN", "SKU_PURCHASE_CLEAR_ERROR", "SKU_PURCHASE_FAIL", "SKU_PURCHASE_MODAL_CLOSE", "SKU_PURCHASE_MODAL_OPEN", "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", "SKU_PURCHASE_SHOW_CONFIRMATION_STEP", "SKU_PURCHASE_START", "SKU_PURCHASE_SUCCESS", "STREAM_CLOSE", "STREAM_START", "VOICE_CHANNEL_SELECT"]),
                W = new Set((Y = z.values(),
                    function(e) {
                        if (Array.isArray(e)) return O(e)
                    }(Y) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(Y) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return O(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? O(e, t) : void 0
                        }
                    }(Y) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).concat(["ACTIVITY_INVITE_MODAL_CLOSE", "CALL_DELETE", "CHANNEL_COLLAPSE", "CHANNEL_SELECT", "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", "OVERLAY_CALL_PRIVATE_CHANNEL", "OVERLAY_JOIN_GAME", "OVERLAY_NOTIFICATION_EVENT", "OVERLAY_SELECT_CALL", "OVERLAY_SET_NOT_IDLE", "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", "OVERLAY_WIDGET_CHANGED", "SOUNDBOARD_SET_OVERLAY_ENABLED", "STREAM_STOP"]));

            function K(e) {
                "OVERLAY_INITIALIZE" === e.type && function(e) {
                    if (null == e.version && 1 === v.Tq) return !0;
                    if (e.version === v.Tq) return !0;
                    i.Z.dispatch({
                        type: "OVERLAY_INCOMPATIBLE_APP"
                    });
                    (0, a.zP)();
                    return !1
                }(e) && (B = !0);
                if (B) switch (e.type) {
                    case "CHANNEL_CREATE":
                    case "THREAD_CREATE":
                    case "THREAD_UPDATE":
                    case "CHANNEL_DELETE":
                    case "THREAD_DELETE":
                        var t = (0, c.kt)(e.channel);
                        if (!c.AW.has(t.type)) break;
                        i.Z.dispatch({
                            type: e.type,
                            channel: t
                        });
                        break;
                    case "CHANNEL_UPDATES":
                        i.Z.dispatch({
                            type: e.type,
                            channels: e.channels.map((function(e) {
                                return (0, c.kt)(e)
                            }))
                        });
                        break;
                    case "CONNECTION_OPEN_SUPPLEMENTAL":
                        var n;
                        e.lazyPrivateChannels = (null !== (n = e.lazyPrivateChannels) && void 0 !== n ? n : []).map((function(e) {
                            return (0, c.kt)(e)
                        }));
                        i.Z.dispatch(e);
                        break;
                    case "THREAD_LIST_SYNC":
                        i.Z.dispatch(R(S({}, e), {
                            threads: e.threads.map((function(e) {
                                return (0, c.kt)(e)
                            }))
                        }));
                        break;
                    case "GUILD_CREATE":
                        var r, o, u, s = function(e) {
                                return (0, c.kt)(e)
                            },
                            f = e.guild;
                        f.channels = null !== (u = null === (r = f.channels) || void 0 === r ? void 0 : r.map(s)) && void 0 !== u ? u : null;
                        f.threads = null === (o = f.threads) || void 0 === o ? void 0 : o.map(s);
                        if (null != f.channelUpdates) {
                            var d;
                            f.channelUpdates.writes = null === (d = f.channelUpdates.writes) || void 0 === d ? void 0 : d.map(s)
                        }
                        i.Z.dispatch({
                            type: "GUILD_CREATE",
                            guild: f
                        });
                        break;
                    case "USER_SETTINGS_PROTO_UPDATE":
                        i.Z.dispatch(R(S({}, e), {
                            settings: {
                                proto: (0, l.kI)(e.settings.type, e.settings.proto),
                                type: e.settings.type
                            }
                        }));
                        break;
                    default:
                        i.Z.dispatch(e)
                }
            }

            function q() {
                if (!__OVERLAY__) return !1;
                var e = D === (0, v.QF)(),
                    t = Z.has((0, v.QF)()) || V.size > 0;
                e && t ? (0, u.T_)(window, !0) : (0, u.T_)(window, !1)
            }

            function Q() {
                if (D !== (0, v.QF)()) return !1;
                V.clear()
            }

            function X(e) {
                var t = (0, v.QF)();
                if (null == e.pid || e.pid === t) switch (e.type) {
                    case y.BmY.STORAGE_SYNC:
                        r.ZP.PersistedStore.initializeAll(e.states);
                        break;
                    case y.BmY.DISPATCH:
                        if (null != e.payloads) {
                            G = !0;
                            e.payloads.forEach((function(e) {
                                return K(e)
                            }));
                            G = !1
                        }
                }
            }
            var $ = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && w(e, t)
                }(n, e);
                var t = M(n);

                function n() {
                    T(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(s.default);
                    this.syncWith([s.default], (function() {
                        var e = s.default.getId();
                        H = null != e ? x(e) : S({}, L)
                    }));
                    if (__OVERLAY__) {
                        _.FB && E.ZP.requireModule("discord_overlay2");
                        Z.delete((0, v.QF)())
                    }
                    if (null != e) {
                        U = e;
                        var t = s.default.getId();
                        if (null != t) {
                            null == (H = x(t)).textChatNotifications && (H.textChatNotifications = L.textChatNotifications);
                            null == H.textWidgetOpacity && (H.textWidgetOpacity = L.textWidgetOpacity)
                        }
                    }
                };
                r.getState = function() {
                    return U
                };
                r.isUILocked = function(e) {
                    return !Z.has(e)
                };
                r.isInstanceUILocked = function() {
                    if (!__OVERLAY__) throw new Error("OverlayStore: App instance should never call .isInstanceUILocked()");
                    return !Z.has((0, v.QF)())
                };
                r.isInstanceFocused = function() {
                    if (!__OVERLAY__) throw new Error("OverlayStore: App instance should never call .isInstanceFocused()");
                    return D === (0, v.QF)()
                };
                r.isFocused = function(e) {
                    return D === e
                };
                r.isPinned = function(e) {
                    var t = p.Z.getLayout(v.qU);
                    if (null != t) {
                        return null != t.widgets.find((function(t) {
                            var n = p.Z.getWidget(t);
                            return !(null == n || n.type !== e || !n.pinned)
                        }))
                    }
                    return !1
                };
                r.getSelectedGuildId = function() {
                    return H.selectedGuildId
                };
                r.getSelectedChannelId = function() {
                    return H.selectedChannelId
                };
                r.getSelectedCallId = function() {
                    return j
                };
                r.getDisplayUserMode = function() {
                    return H.displayUserMode
                };
                r.getDisplayNameMode = function() {
                    return H.displayNameMode
                };
                r.getAvatarSizeMode = function() {
                    return H.avatarSizeMode
                };
                r.getNotificationPositionMode = function() {
                    return H.notificationPositionMode
                };
                r.getTextChatNotificationMode = function() {
                    return H.notificationPositionMode === y._vf.DISABLED ? y.Ypu.DISABLED : H.textChatNotifications
                };
                r.getDisableExternalLinkAlert = function() {
                    return H.disableExternalLinkAlert
                };
                r.getFocusedPID = function() {
                    return D
                };
                r.getActiveRegions = function() {
                    return V
                };
                r.getTextWidgetOpacity = function() {
                    return H.textWidgetOpacity
                };
                r.isPreviewingInGame = function() {
                    return k
                };
                ! function(e, t, n) {
                    t && I(e.prototype, t);
                    n && I(e, n)
                }(n, [{
                    key: "initialized",
                    get: function() {
                        return B
                    }
                }, {
                    key: "incompatibleApp",
                    get: function() {
                        return F
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            $.displayName = "OverlayStore";
            $.persistKey = "OverlayStoreV2";
            $.migrations = [function() {
                var e = S({}, o.Z.get("OverlayStore")),
                    t = (e.pinnedWidgets, e.positions, e.sizes, e.v),
                    n = C(e, ["pinnedWidgets", "positions", "sizes", "v"]);
                return S({}, L, 5 === t ? n : null)
            }, function(e) {
                var t = s.default.getId();
                return null == e || null == t ? {} : b({}, t, S({}, e))
            }];
            const J = new $(i.Z, {
                LOGOUT: function(e) {
                    e.isSwitchingAccount || (U = {})
                },
                MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
                    e.userId in U && delete U[e.userId]
                },
                CONNECTION_CLOSED: function() {
                    Z.clear()
                },
                OVERLAY_START_SESSION: function() {
                    i.Z.addInterceptor((function(e) {
                        if (G) return !1;
                        if (!W.has(e.type)) return !1;
                        if ("CHANNEL_SELECT" === e.type) {
                            var t = e.guildId,
                                n = e.channelId;
                            if (null == n) return !1;
                            (0, a.lW)({
                                type: y.BmY.DISPATCH,
                                pid: (0, v.QF)(),
                                token: (0, v.Ht)(),
                                payloads: [{
                                    type: "CHANNEL_PRELOAD",
                                    guildId: t === y.ME ? null : t,
                                    channelId: n,
                                    context: y.e3s
                                }, {
                                    type: "OVERLAY_SELECT_CHANNEL",
                                    guildId: t,
                                    channelId: n
                                }]
                            });
                            return !1
                        }(0, a.lW)({
                            type: y.BmY.DISPATCH,
                            pid: (0, v.QF)(),
                            token: (0, v.Ht)(),
                            payloads: [e]
                        });
                        return !z.has(e.type)
                    }));
                    (0, a.Ty)(X, (0, v.Ht)());
                    (0, a.$j)();
                    (0, a.lW)({
                        type: y.BmY.CONNECT,
                        pid: (0, v.QF)(),
                        token: (0, v.Ht)()
                    })
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.focusedPID;
                    D = t
                },
                OVERLAY_READY: function() {
                    var e = H.selectedGuildId,
                        t = H.selectedChannelId;
                    if (null != e && (!d.ZP.hasChannels(e) || null != t && !d.ZP.hasSelectableChannel(e, t))) {
                        e = null;
                        t = null
                    }
                    if (null != t && null == f.Z.getChannel(t)) {
                        e = null;
                        t = null
                    }
                    null == e && null == t && (e = h.Z.getGuildId());
                    if (null != e && null == t) {
                        var n = d.ZP.getDefaultChannel(e);
                        null != n && (t = n.id)
                    }
                    H.selectedGuildId = e;
                    H.selectedChannelId = t
                },
                OVERLAY_FOCUSED: function(e) {
                    var t = e.pid;
                    D = t;
                    q()
                },
                OVERLAY_SELECT_CHANNEL: function(e) {
                    var t = e.guildId,
                        n = e.channelId;
                    H.selectedGuildId = t;
                    H.selectedChannelId = n
                },
                OVERLAY_SELECT_CALL: function(e) {
                    var t = e.callId;
                    j = t
                },
                CALL_DELETE: function() {
                    j = null
                },
                LAYOUT_CREATE: function() {},
                OVERLAY_SET_DISPLAY_NAME_MODE: function(e) {
                    var t = e.mode;
                    H.displayNameMode = t
                },
                OVERLAY_SET_DISPLAY_USER_MODE: function(e) {
                    var t = e.mode;
                    H.displayUserMode = t
                },
                OVERLAY_SET_AVATAR_SIZE_MODE: function(e) {
                    var t = e.mode;
                    H.avatarSizeMode = t
                },
                OVERLAY_SET_NOTIFICATION_POSITION_MODE: function(e) {
                    var t = e.mode;
                    H.notificationPositionMode = t
                },
                OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: function(e) {
                    var t = e.mode;
                    H.textChatNotifications = t
                },
                OVERLAY_SET_TEXT_WIDGET_OPACITY: function(e) {
                    var t = e.opacity,
                        n = H.textWidgetOpacity !== t;
                    H.textWidgetOpacity = t;
                    return n
                },
                OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function() {
                    H.disableExternalLinkAlert = !0
                },
                OVERLAY_INCOMPATIBLE_APP: function() {
                    F = !0
                },
                OVERLAY_SET_UI_LOCKED: function(e) {
                    var t = e.locked,
                        n = e.pid;
                    t ? Z.delete(n) : Z.add(n);
                    Q();
                    q();
                    k = !1
                },
                OVERLAY_ACTIVATE_REGION: function(e) {
                    var t = e.region;
                    if (D !== (0, v.QF)()) return !1;
                    if (V.has(t)) return !1;
                    V.add(t)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: Q,
                OVERLAY_SET_PREVIEW_IN_GAME_MODE: function(e) {
                    k = e.isPreviewingInGame
                },
                WINDOW_RESIZED: function() {
                    if (__OVERLAY__) {
                        var e = m.Z.windowSize();
                        (0, v.Te)(e) || (k = !1)
                    }
                }
            })
        },
        95508: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => s,
                V: () => f
            });
            var r = n(441143),
                o = n.n(r),
                i = n(474717),
                u = n(124453);

            function a(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            a(i, r, o, u, l, "next", e)
                        }

                        function l(e) {
                            a(i, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var c = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function s(e, t) {
                o()(e.item.platform === i.ow.WEB, "Upload must be in the Web format");
                var n, r = (0, u.B)(e, t);
                return Promise.resolve({
                    file: e.item.file,
                    name: null !== (n = r.filename) && void 0 !== n ? n : ""
                })
            }

            function f(e) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = l((function(e) {
                    return c(this, (function(e) {
                        return [2]
                    }))
                }))).apply(this, arguments)
            }
        },
        473291: (e, t, n) => {
            "use strict";
            n.d(t, {
                kC: () => y,
                o3: () => g,
                dY: () => O,
                cS: () => T,
                s$: () => I,
                l3: () => b
            });
            var r = n(496486),
                o = n.n(r),
                i = n(730381),
                u = n.n(i),
                a = n(547308),
                l = n(102921),
                c = n(2590),
                s = n(142520),
                f = /sketchfab/i,
                d = /^https:\/\/sketchfab\.com/i,
                p = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
                h = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
                _ = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
                E = new Set([c.hBH.AUTO_MODERATION_MESSAGE, c.hBH.AUTO_MODERATION_NOTIFICATION, c.hBH.RICH, c.hBH.SAFETY_POLICY_NOTICE]);

            function v(e) {
                var t = e.width,
                    n = e.height;
                return t > 0 && n > 0
            }

            function m(e) {
                return {
                    url: e.url,
                    proxyURL: e.proxy_url,
                    width: e.width,
                    height: e.height
                }
            }

            function y(e, t, n) {
                var r = {
                    id: o().uniqueId("embed_"),
                    url: n.url,
                    type: n.type,
                    rawTitle: n.title,
                    rawDescription: n.description,
                    referenceId: n.reference_id,
                    flags: n.flags
                };
                null != n.footer && (r.footer = {
                    text: n.footer.text,
                    iconURL: n.footer.icon_url,
                    iconProxyURL: n.footer.proxy_icon_url
                });
                null != n.author && null != n.author.name && (r.author = {
                    name: n.author.name,
                    url: n.author.url,
                    iconURL: n.author.icon_url,
                    iconProxyURL: n.author.proxy_icon_url
                });
                null != n.provider && null != n.provider.name && (r.provider = {
                    name: n.provider.name,
                    url: n.provider.url
                });
                null != n.timestamp && (r.timestamp = u()(new Date(n.timestamp)));
                null != n.color && (r.color = (0, a.ho)(n.color, !0));
                if (null != n.thumbnail && v(n.thumbnail)) switch (r.type) {
                    case c.hBH.ARTICLE:
                    case c.hBH.IMAGE:
                        r.image = m(n.thumbnail);
                        break;
                    default:
                        r.thumbnail = m(n.thumbnail)
                }
                null != n.image && v(n.image) && (r.image = m(n.image));
                if (null != n.video) {
                    null == r.thumbnail && null != n.video.proxy_url && v(n.video) && (r.thumbnail = {
                        width: n.video.width,
                        height: n.video.height,
                        url: "".concat(n.video.proxy_url, "?format=jpeg")
                    });
                    null != r.thumbnail && v(n.video) && function(e, t, n) {
                        if (null != t && f.test(t.name) || d.test(n.url)) return !1;
                        var r = null != n.proxy_url || /^https:/i.test(n.url);
                        l.Z.extractTimestamp(e) < 1492472454139 && (r = r && null != t && p.test(t.name));
                        return r
                    }(t, n.provider, n.video) && (r.video = m(n.video))
                }
                if (E.has(r.type)) {
                    var i, s = null !== (i = n.fields) && void 0 !== i ? i : [];
                    r.fields = s.map((function(e) {
                        return {
                            rawName: e.name,
                            rawValue: e.value,
                            inline: e.inline
                        }
                    }))
                } else r.fields = [];
                return r
            }

            function g(e) {
                var t = new Map,
                    n = [];
                e.forEach((function(e) {
                    if (null != e.url) {
                        var r = t.get(e.url);
                        if (null != r) {
                            if (null != e.image) {
                                if (null == r.images) {
                                    r.images = [];
                                    null != r.image && r.images.push(r.image)
                                }
                                r.images.push(e.image)
                            }
                        } else {
                            n.push(e);
                            t.set(e.url, e)
                        }
                    } else n.push(e)
                }));
                return n
            }

            function O(e) {
                var t = e.image,
                    n = e.video,
                    r = e.type,
                    o = e.author,
                    i = e.rawTitle;
                return (null != t || null != n) && (r === c.hBH.GIFV || r !== c.hBH.RICH && null == o && null == i)
            }

            function T(e) {
                if (!e.author.isClyde() || 0 === e.embeds.length) return !1;
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = e.embeds[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        if (I(o.value)) return !0
                    }
                } catch (e) {
                    n = !0;
                    r = e
                } finally {
                    try {
                        t || null == i.return || i.return()
                    } finally {
                        if (n) throw r
                    }
                }
                return !1
            }

            function I(e) {
                var t = null != e.fields && 3 === e.fields.length && "Thought" === e.fields[0].rawName && "Tool" === e.fields[1].rawName && "Result" === e.fields[2].rawName;
                return e.type === c.hBH.RICH && (e.rawTitle === s.x.THOUGHT_EMBED_TITLE || t)
            }

            function b(e) {
                return e.type === c.hBH.ARTICLE && null != e.url && (_.test(e.url) || h.test(e.url))
            }
        },
        644144: (e, t, n) => {
            "use strict";
            n.d(t, {
                a8: () => D,
                Bg: () => U,
                Z0: () => j,
                Fp: () => F,
                Q_: () => G,
                Nz: () => B,
                bT: () => V,
                dM: () => x,
                TO: () => Y,
                dQ: () => H,
                L2: () => z,
                iM: () => W,
                e$: () => K,
                z2: () => q,
                JT: () => Q,
                E5: () => X
            });
            var r = n(202351),
                o = n(973889),
                i = n(94340),
                u = n(486531),
                a = n(449852),
                l = n(473903),
                c = n(652591),
                s = n(72580),
                f = n(694329),
                d = n(968696),
                p = n(534681),
                h = n(2590),
                _ = n(203600),
                E = n(473708);

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function y(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            m(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            m(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
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

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || I(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function T(e) {
                return function(e) {
                    if (Array.isArray(e)) return v(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || I(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e, t) {
                if (e) {
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(e, t) : void 0
                }
            }
            var b = function(e, t) {
                    var n, r, o, i, u = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                u.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && u.label < o[1]) {
                                                u.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && u.label < o[2]) {
                                                u.label = o[2];
                                                u.ops.push(i);
                                                break
                                            }
                                            o[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, u)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                A = d.Z.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
                S = ["discordapp.com/gifts", "discord.com/gifts"].map((function(e) {
                    return d.Z.escape(e)
                })),
                R = [A].concat(T(S)).join("|"),
                C = new RegExp("(?: |^|https?://)(?:".concat(R, ")/([a-z0-9-]+)"), "gi"),
                N = T(["discord.com/billing/promotions", "promos.discord.gg"].map((function(e) {
                    return d.Z.escape(e)
                }))).join("|"),
                w = new RegExp("(?: |^|https?://)(?:".concat(N, ")/([a-z0-9-]+)"), "gi"),
                P = function(e, t) {
                    return Array(t).fill(void 0).map((function() {
                        return "[".concat("abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789", "]{").concat(e, "}")
                    })).join("-?")
                },
                M = [P(4, 4), P(4, 6), P(5, 3), "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
                L = new RegExp("^(".concat("WUMP-?", ")?(").concat(M, ")$")),
                D = function(e) {
                    return null != e && u.$.getCurrentConfig({
                        location: "isCustomGiftEnabled"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                };

            function U(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(e, ":").concat(null != t ? t : "", ":").concat(null != n ? n : "")
            }

            function j(e) {
                var t = O(e.split(":"), 3),
                    n = t[0],
                    r = t[1],
                    o = t[2];
                return {
                    skuId: n,
                    subscriptionPlanId: "" === r ? null : r,
                    giftStyle: "" !== o && null != o ? Number.parseInt(o) : void 0
                }
            }

            function Z(e) {
                return e.replace(/[^A-Za-z0-9]/g, "")
            }
            var F = function(e) {
                    return (null == e ? void 0 : e.type) === h.uaV.CUSTOM_GIFT && 1 === (null == e ? void 0 : e.embeds.length) && (null == e ? void 0 : e.embeds[0].type) === h.hBH.GIFT
                },
                G = function(e) {
                    if (null == e) return [];
                    for (var t, n = new Set; null != (t = C.exec(e)) && n.size < 3;) n.add(Z(t[1]));
                    for (; null != (t = w.exec(e)) && n.size < 3;) n.add(Z(t[1]));
                    return Array.from(n)
                };

            function B() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = window.GLOBAL_ENV.GIFT_CODE_HOST;
                if (null != n) e = "/".concat(t);
                else {
                    n = location.host;
                    e = "/gifts/".concat(t)
                }
                return "".concat(location.protocol, "//").concat(n).concat(e)
            }

            function V(e) {
                return k.apply(this, arguments)
            }

            function k() {
                k = y((function(e) {
                    var t, n, r, i, u, a = arguments;
                    return b(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                t = a.length > 1 && void 0 !== a[1] && a[1], n = a.length > 2 && void 0 !== a[2] && a[2];
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, (0, p.Kb)({
                                    url: h.ANM.GIFT_CODE_RESOLVE(e),
                                    query: {
                                        with_application: t,
                                        with_subscription_plan: n
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                r = l.sent();
                                i = r.body;
                                c.default.track(h.rMx.GIFT_CODE_RESOLVED, {
                                    resolved: !0,
                                    gift_code: i.code,
                                    gift_code_max_uses: i.max_uses,
                                    sku_id: i.store_listing.sku.id,
                                    sku_type: i.store_listing.sku.type,
                                    application_id: i.store_listing.sku.application_id,
                                    store_title: i.store_listing.sku.name
                                }, {
                                    flush: !0
                                });
                                return [2, i];
                            case 3:
                                u = l.sent();
                                c.default.track(h.rMx.GIFT_CODE_RESOLVED, {
                                    resolved: !1,
                                    gift_code: e
                                });
                                throw new o.Z(u);
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return k.apply(this, arguments)
            }

            function x(e, t) {
                c.default.track(h.rMx.GIFT_CODE_COPIED, function(e) {
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
                }({}, (0, i.Z)(t, !1, !1), e.analyticsData))
            }

            function Y(e, t, n, r, o, i, u) {
                return null != n || !r && !o && null != e ? h.wZ8.ERROR : !u || i || r || o ? r && (t.isSubscription || null != e) ? h.wZ8.SUCCESS : h.wZ8.CONFIRM : h.wZ8.OPEN
            }

            function H(e, t, n) {
                switch (e) {
                    case h.wZ8.ERROR:
                        return E.Z.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
                    case h.wZ8.SUCCESS:
                        return t.isSubscription ? E.Z.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS_NITRO.format({
                            skuName: n.name
                        }) : E.Z.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS;
                    case h.wZ8.CONFIRM:
                    default:
                        return t.isSubscription ? E.Z.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM_NITRO.format({
                            skuName: n.name
                        }) : E.Z.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM
                }
            }

            function z(e, t, n) {
                switch (e) {
                    case h.wZ8.ERROR:
                        return E.Z.Messages.GIFT_CONFIRMATION_BUTTON_FAIL;
                    case h.wZ8.SUCCESS:
                        return __OVERLAY__ ? E.Z.Messages.GIFT_CONFIRMATION_BUTTON_NOICE : t.isSubscription ? E.Z.Messages.GIFT_CONFIRMATION_BUTTON_SUBSCRIPTION_SUCCESS : E.Z.Messages.GIFT_CONFIRMATION_BUTTON_GO_TO_LIBRARY;
                    case h.wZ8.OPEN:
                        return E.Z.Messages.GIFT_OPEN_PROMPT;
                    case h.wZ8.CONFIRM:
                    default:
                        return null != n && n ? E.Z.Messages.GIFT_CODE_AUTH_ACCEPT : null != t.giftStyle ? t.isClaimed ? E.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM : E.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_MOBILE : t.isSubscription ? E.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_SUBSCRIPTION : E.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM
                }
            }

            function W(e) {
                var t = e.step,
                    n = e.sku,
                    r = e.libraryApplication,
                    o = e.error,
                    i = e.accepted,
                    u = e.accepting,
                    a = e.onGoToLibrary,
                    l = e.subscriptionPlan,
                    c = void 0 === l ? null : l;
                switch (t) {
                    case h.wZ8.ERROR:
                        return K(r, o, i, u, a);
                    case h.wZ8.SUCCESS:
                        if (null != c) {
                            if (null != c.premiumSubscriptionType) {
                                if (c.premiumSubscriptionType === _.p9.TIER_2) {
                                    return (c.interval === _.rV.MONTH ? E.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_2_MONTHLY : E.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_2_YEARLY).format({
                                        intervalCount: c.intervalCount
                                    })
                                }
                                return (c.interval === _.rV.MONTH ? E.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_MONTHLY : E.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_YEARLY).format({
                                    intervalCount: c.intervalCount
                                })
                            }
                            return (c.interval === _.rV.MONTH ? E.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC_SUBSCRIPTION_MONTHLY : E.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC_SUBSCRIPTION_YEARLY).format({
                                skuName: n.name,
                                intervalCount: c.intervalCount
                            })
                        }
                        return E.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS.format({
                            skuName: n.name
                        });
                    case h.wZ8.CONFIRM:
                    default:
                        if (null != c) {
                            return (c.interval === _.rV.MONTH ? E.Z.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_MONTHLY_CONFIRM : E.Z.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_YEARLY_CONFIRM).format({
                                skuName: n.name,
                                intervalCount: c.intervalCount
                            })
                        }
                        return E.Z.Messages.GIFT_CONFIRMATION_BODY_CONFIRM.format({
                            skuName: n.name
                        })
                }
            }

            function K(e, t, n, r, o) {
                var i = n || r ? void 0 : e,
                    u = E.Z.Messages.GIFT_CONFIRMATION_BODY_OWNED.format({
                        onGoToLibrary: o
                    });
                if (null != i) return u;
                if (null == t) return null;
                switch (t.code) {
                    case h.evJ.INVALID_GIFT_SELF_REDEMPTION:
                        return E.Z.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT;
                    case h.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                        return E.Z.Messages.GIFT_CONFIRMATION_BODY_CLAIMED;
                    case h.evJ.INVALID_GIFT_REDEMPTION_OWNED:
                        return u;
                    case h.evJ.UNKNOWN_GIFT_CODE:
                        return E.Z.Messages.GIFT_CONFIRMATION_BODY_INVALID;
                    case h.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
                        var a = l.default.getCurrentUser();
                        return E.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_MISMATCH.format({
                            planName: (0, f.M5)(a, _.p9.TIER_2) ? E.Z.Messages.PREMIUM_TIER_2 : E.Z.Messages.PREMIUM_TIER_1
                        });
                    case h.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
                        return E.Z.Messages.GIFT_CONFIRMATION_BODY_ERROR_SUBSCRIPTION_MANAGED;
                    case h.evJ.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
                        return E.Z.Messages.GIFT_CONFIRMATION_BODY_ERROR_INVOICE_OPEN;
                    case h.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
                        return E.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT;
                    case h.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
                        return E.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID;
                    default:
                        return E.Z.Messages.GIFT_CONFIRMATION_BODY_UNKNOWN_ERROR
                }
            }

            function q(e, t, n) {
                var r = t.applicationId,
                    o = null != e.entitlementBranches && e.entitlementBranches.length > 0 ? e.entitlementBranches : [r],
                    i = o.map((function(e) {
                        return n.getLibraryApplication(r, e, !0)
                    })).filter(s.lm);
                return i.length === o.length ? i[0] : null
            }

            function Q(e) {
                var t = e.trim().split("/").pop().match(L);
                if (null == t) return null;
                var n = O(t, 3),
                    r = (n[0], n[1], n[2]);
                return null == r ? null : r.replace(new RegExp("-", "g"), "")
            }
            var X = function(e, t) {
                return (0, r.e7)([a.Z], (function() {
                    if (null == e || !t) return null;
                    var n = a.Z.getGiftCode(e);
                    return null == n || "" === n ? null : n
                }))
            }
        },
        66121: (e, t, n) => {
            "use strict";
            n.d(t, {
                KR: () => o,
                w_: () => i,
                jL: () => u,
                Ox: () => a,
                PY: () => l,
                R: () => c,
                ou: () => s,
                vS: () => f,
                o4: () => d,
                uq: () => p
            });

            function r(e) {
                return Math.max(Math.min(e, 1), 0)
            }

            function o(e, t) {
                var n = e.top,
                    o = e.bottom,
                    i = e.left,
                    u = e.right;
                return {
                    top: null != n ? Math.floor(r(n) * t.height) : null,
                    left: null != i ? Math.floor(r(i) * t.width) : null,
                    bottom: null != o ? Math.floor(r(o) * t.height) : null,
                    right: null != u ? Math.floor(r(u) * t.width) : null
                }
            }

            function i(e, t) {
                var n = e.width,
                    o = e.height;
                return {
                    width: "auto" === n ? n : Math.floor(r(n) * t.width),
                    height: "auto" === o ? o : Math.floor(r(o) * t.height)
                }
            }

            function u(e, t) {
                var n = e.top,
                    o = e.bottom,
                    i = e.left,
                    u = e.right;
                return {
                    top: null != n ? r(n / t.height) : null,
                    left: null != i ? r(i / t.width) : null,
                    bottom: null != o ? r(o / t.height) : null,
                    right: null != u ? r(u / t.width) : null
                }
            }

            function a(e, t) {
                var n = e.width,
                    r = e.height;
                return {
                    width: "auto" === n ? n : n / t.width,
                    height: "auto" === r ? r : r / t.height
                }
            }

            function l(e, t, n, r, o) {
                var i = e.top,
                    u = e.bottom,
                    a = e.left,
                    l = e.right;
                if (null == i && null == u) {
                    i = 0;
                    u = n - o
                } else null == i && null != u ? i = n - (u + o) : null != i && (u = n - (i + o));
                if (null == a && null == l) {
                    a = 0;
                    l = t - r
                } else null == a && null != l ? a = t - (l + r) : null == l && null != a && (l = t - (a + r));
                if (null == i || null == u || null == a || null == l) throw new Error("Logically this can never happen based on our if/else statements");
                return {
                    top: i,
                    left: a,
                    bottom: u,
                    right: l
                }
            }

            function c(e) {
                var t = e.top,
                    n = e.left,
                    r = e.bottom,
                    o = e.right;
                0 === t || t <= r ? r = null : t = null;
                0 === n || n <= o ? o = null : n = null;
                return {
                    top: t,
                    left: n,
                    bottom: r,
                    right: o
                }
            }

            function s(e) {
                var t = e.top,
                    n = e.left,
                    r = e.bottom,
                    o = e.right;
                if (r < 0) {
                    t += r;
                    r = 0
                }
                if (t < 0) {
                    r += t;
                    t = 0
                }
                if (o < 0) {
                    n += o;
                    o = 0
                }
                if (n < 0) {
                    o += n;
                    n = 0
                }
                return {
                    top: t,
                    left: n,
                    bottom: r,
                    right: o
                }
            }

            function f(e, t, n) {
                e = o(e, n);
                var r = i(t, n),
                    u = r.width,
                    a = r.height;
                u = "string" == typeof u ? 0 : u;
                a = "string" == typeof a ? 0 : a;
                return l(e, n.width, n.height, u, a)
            }

            function d(e, t, n) {
                var r = e.top,
                    o = e.left,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        x: 0,
                        y: 0
                    },
                    f = i.x,
                    d = i.y,
                    p = t.width,
                    h = t.height,
                    _ = c(s(l({
                        top: r + d,
                        left: o + f,
                        bottom: null,
                        right: null
                    }, n.width, n.height, "number" == typeof p ? p : 0, "number" == typeof h ? h : 0)));
                return [u(_, n), a(t, n)]
            }

            function p(e, t, n) {
                var r = e.top,
                    o = e.right,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        x: 0,
                        y: 0
                    },
                    f = i.x,
                    d = i.y,
                    p = t.width,
                    h = t.height,
                    _ = c(s(l({
                        top: r + d,
                        left: null,
                        bottom: null,
                        right: o - f
                    }, n.width, n.height, "number" == typeof p ? p : 0, "number" == typeof h ? h : 0)));
                return [u(_, n), a(t, n)]
            }
        },
        506474: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(667237),
                o = n.n(r);

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }
            var a = new(n(296602).Z)("Queue"),
                l = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                        i(this, e);
                        this.logger = t;
                        this.defaultRetryAfter = n;
                        this.queue = new(o());
                        this.timeout = null;
                        this.draining = !1
                    }
                    var t = e.prototype;
                    t.enqueue = function(e, t) {
                        this.queue.push({
                            message: e,
                            success: t
                        });
                        this._drainIfNecessary()
                    };
                    t._drainIfNecessary = function() {
                        var e = this;
                        if (null === this.timeout && 0 !== this.queue.length && !0 !== this.draining) {
                            this.draining = !0;
                            var t = this.queue.shift(),
                                n = t.message,
                                r = t.success;
                            this.drain(n, (function(n, o) {
                                e.draining = !1;
                                if (null == n) {
                                    setImmediate((function() {
                                        return e._drainIfNecessary()
                                    }));
                                    try {
                                        r(o)
                                    } catch (t) {
                                        e.logger.error("", t)
                                    }
                                } else {
                                    var i, u = null !== (i = n.retryAfter) && void 0 !== i ? i : e.defaultRetryAfter;
                                    e.logger.info("Rate limited. Delaying draining of queue for ".concat(u, " ms."));
                                    e.timeout = setTimeout((function() {
                                        e.queue.unshift(t);
                                        e.timeout = null;
                                        e._drainIfNecessary()
                                    }), u)
                                }
                            }))
                        }
                    };
                    ! function(e, t, n) {
                        t && u(e.prototype, t);
                        n && u(e, n)
                    }(e, [{
                        key: "length",
                        get: function() {
                            return this.queue.length
                        }
                    }]);
                    return e
                }()
        },
        534681: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZI: () => N,
                AR: () => w,
                _W: () => P,
                Kb: () => L,
                hX: () => U,
                XK: () => j,
                uF: () => Z,
                Gg: () => G,
                Ww: () => V
            });
            var r = n(496486),
                o = n.n(r),
                i = n(730381),
                u = n.n(i),
                a = n(229392),
                l = n.n(a),
                c = n(289283),
                s = n(281110),
                f = n(673679),
                d = n(874049),
                p = n(615796),
                h = n(711531),
                _ = n(536392),
                E = n(245305),
                v = n(661123),
                m = n(72580),
                y = n(120415),
                g = n(2590),
                O = n(473708),
                T = n(734155);

            function I(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function b(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            I(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            I(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function A(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        A(e, t, n[t])
                    }))
                }
                return e
            }
            var R = function(e, t) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1],
                                                done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = t.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };
            l().shim();
            var C = !c.tq && !c.Em && -1 !== (0, E.vu)();

            function N(e, t) {
                var n = t.analyticsSource,
                    r = t.analyticsProperties,
                    o = t.storeListingId,
                    i = t.slug,
                    u = t.channelId,
                    a = t.guildId,
                    l = {
                        state: {
                            analyticsSource: n,
                            analyticsProperties: r
                        },
                        search: null != o ? "?store_listing_id=".concat(o) : ""
                    };
                return S({
                    pathname: null != u && null != a ? g.Z5c.CHANNEL(a, u, e) : g.Z5c.APPLICATION_STORE_LISTING_SKU(e, i)
                }, l)
            }

            function w(e, t) {
                var n = t.analyticsSource,
                    r = t.analyticsProperties,
                    o = t.slug,
                    i = {
                        state: {
                            analyticsSource: n,
                            analyticsProperties: r
                        }
                    };
                return S({
                    pathname: g.Z5c.APPLICATION_STORE_LISTING_APPLICATION(e, o)
                }, i)
            }

            function P(e, t, n, r) {
                var o, i, u = window.GLOBAL_ENV.CDN_HOST;
                if (null == r) switch (t.mimeType || t.mime_type) {
                    case "video/quicktime":
                    case "video/mp4":
                        r = "mp4";
                        break;
                    case "image/gif":
                        r = "gif";
                        break;
                    default:
                        r = "webp"
                }
                "webp" !== r || C || (r = "png");
                var a = null !== (i = T.env.API_PROTOCOL) && void 0 !== i ? i : location.protocol;
                o = null != u ? "".concat(a, "//").concat(u, "/app-assets/").concat(e, "/store/").concat(t.id, ".").concat(r) : "".concat(a).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(g.ANM.STORE_ASSET(e, t.id, r));
                null != n && (o += "?size=".concat((0, d.oO)(n * (0, d.x_)())));
                return o
            }

            function M() {
                return new Promise((e = b((function(e) {
                        var t;
                        return R(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!_.Z.hasFetchedSubscriptions()) return [3, 1];
                                    e();
                                    return [3, 4];
                                case 1:
                                    if (!p.Z.isSubscriptionFetching) return [3, 2];
                                    (t = function() {
                                        p.Z.isSubscriptionFetching ? setTimeout(t, 50) : e()
                                    })();
                                    return [3, 4];
                                case 2:
                                    return [4, (0, f.jg)()];
                                case 3:
                                    n.sent();
                                    e();
                                    n.label = 4;
                                case 4:
                                    return [2]
                            }
                        }))
                    })),
                    function(t) {
                        return e.apply(this, arguments)
                    }));
                var e
            }

            function L(e) {
                return D.apply(this, arguments)
            }

            function D() {
                D = b((function(e) {
                    var t, n, r, o, i, u, a, l, c, d = arguments;
                    return R(this, (function(E) {
                        switch (E.label) {
                            case 0:
                                if (!(!(d.length > 1 && void 0 !== d[1]) || d[1])) return [3, 2];
                                n = [];
                                h.Z.hasFetchedPaymentSources || n.push(null !== (r = p.Z.paymentSourcesFetchRequest) && void 0 !== r ? r : (0, f.tZ)());
                                p.Z.ipCountryCodeLoaded || n.push((0, f.GE)());
                                n.push(M());
                                return [4, Promise.allSettled(n)];
                            case 1:
                                E.sent();
                                E.label = 2;
                            case 2:
                                o = h.Z.getDefaultBillingCountryCode();
                                u = null !== (i = null === (t = h.Z.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null;
                                null != (a = _.Z.getPremiumTypeSubscription()) && null != a.paymentSourceId && (u = a.paymentSourceId);
                                null === o && (o = null !== (l = p.Z.ipCountryCode) && void 0 !== l ? l : null);
                                c = {};
                                null != o && (c.country_code = o);
                                null != u && (c.payment_source_id = u);
                                if (null != o || null != u) {
                                    "string" == typeof e && (e = {
                                        url: e,
                                        oldFormErrors: !0
                                    });
                                    if ("string" == typeof e.query) throw new Error("string query not supported");
                                    e.query = S({}, c, e.query)
                                }
                                return [2, s.ZP.get(e)]
                        }
                    }))
                }));
                return D.apply(this, arguments)
            }

            function U(e) {
                switch (e) {
                    case y.AB.WINDOWS:
                        return g.TaA.WINDOWS;
                    case y.AB.OSX:
                        return g.TaA.MACOS;
                    case y.AB.LINUX:
                        return g.TaA.LINUX;
                    default:
                        return null
                }
            }

            function j(e) {
                switch (e) {
                    case g.TaA.WINDOWS:
                        return O.Z.Messages.WINDOWS;
                    case g.TaA.MACOS:
                        return O.Z.Messages.MACOS;
                    case g.TaA.LINUX:
                        return O.Z.Messages.LINUX
                }
                throw new Error("Unknown operating system value: ".concat(e))
            }

            function Z(e, t, n) {
                var r = t.getGame(e);
                return null == r || null == r.primarySkuId ? null : n.get(r.primarySkuId)
            }
            var F = [];

            function G(e, t, n, r, i) {
                var u = t.get(e);
                if (null == u) return F;
                var a = u.applicationId,
                    l = [],
                    c = [],
                    s = function(e, t, n) {
                        var r, o = null !== (r = n.getNowPlaying(e)) && void 0 !== r ? r : {},
                            i = Object.keys(o).map((function(e) {
                                var n = t.getUser(e);
                                return null == n ? null : {
                                    user: n,
                                    startTime: o[n.id].startedPlaying
                                }
                            })).filter(m.lm).sort((function(e, t) {
                                return t.startTime - e.startTime
                            }));
                        return 0 === i.length ? null : {
                            type: g.AzA.NOW_PLAYING,
                            userInfo: i
                        }
                    }(a, n, r);
                if (null != s) {
                    l.push(s);
                    c = s.userInfo.map((function(e) {
                        return e.user.id
                    }))
                }
                var f = i.getStatisticsForApplication(a);
                if (null != f) {
                    var d = f.map((function(e) {
                        return e.user_id
                    }));
                    if (o().difference(d, c).length > 0) {
                        var p = function(e, t, n) {
                            var r = n.getStatisticsForApplication(e);
                            if (null == r) return null;
                            var o = r.map((function(e) {
                                var n = t.getUser(e.user_id);
                                return null == n ? null : {
                                    user: n,
                                    endTime: Date.parse(e.last_played_at)
                                }
                            })).filter(m.lm).sort((function(e, t) {
                                return t.endTime - e.endTime
                            }));
                            return 0 === o.length ? null : {
                                type: g.AzA.EVER_PLAYED,
                                userInfo: o
                            }
                        }(a, n, i);
                        null != p && l.push(p)
                    }
                }
                return l
            }
            var B = [];

            function V(e, t, n) {
                var r = t.get(e),
                    o = n.getForSKU(e);
                if (null == r || null == o) return B;
                var i = [];
                (0, v.yE)(r.flags, g.l4R.HAS_FREE_PREMIUM_CONTENT) && i.push({
                    type: g.AzA.HAS_FREE_PREMIUM_CONTENT
                });
                var a = r.releaseDate;
                null != a && u()().diff(a, "months") < 3 && (r.accessType === g.kGb.EARLY_ACCESS ? i.push({
                    type: g.AzA.EARLY_ACCESS,
                    releaseDate: a
                }) : i.push({
                    type: g.AzA.RECENT_RELEASE_DATE,
                    releaseDate: a
                }));
                null != o.flavorText && i.push({
                    type: g.AzA.FLAVOR_TEXT,
                    flavorText: o.flavorText
                });
                return i
            }
        },
        226810: (e, t, n) => {
            "use strict";
            n.d(t, {
                Tq: () => i,
                Gr: () => u,
                FW: () => a,
                qU: () => l,
                Js: () => c,
                QF: () => s,
                Ht: () => f,
                Te: () => d
            });
            n(458960);
            var r, o = n(120415),
                i = (n(2590), 2),
                u = {
                    width: 3840,
                    height: 2160
                },
                a = {
                    width: 768,
                    height: 432
                },
                l = "overlay_default",
                c = -2;

            function s() {
                if (void 0 !== r) return r;
                var e, t = null !== (e = new URLSearchParams(window.location.search).get("pid")) && void 0 !== e ? e : "",
                    n = parseInt(t, 10);
                isNaN(n) && (n = -1);
                return r = n
            }

            function f() {
                return new URLSearchParams(window.location.search).get("rpc_auth_token")
            }

            function d(e) {
                return !o.FB || e.width >= a.width && e.height >= a.height
            }
        },
        824654: () => {}
    }
]);