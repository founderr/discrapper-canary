"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [16105], {
        771068: (e, t, n) => {
            n.d(t, {
                T_: () => a,
                al: () => l,
                dx: () => s,
                gH: () => f,
                S1: () => d,
                Rz: () => h
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

            function h(e) {
                o.Z.dispatch({
                    type: "WINDOW_UNLOAD",
                    windowId: (0, u.ZY)(e)
                })
            }
        },
        516217: (e, t, n) => {
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
            }), (0, r.B)({
                kind: "user",
                id: "2023-03_mobile_burst_reactions",
                label: "Mobile Burst Reactions User Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Enabled v2",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        806023: (e, t, n) => {
            n.d(t, {
                U: () => a,
                Z: () => c
            });
            var r = n(496486),
                o = n(260561),
                i = n(493254),
                u = !1;

            function a(e) {
                if (!(u || e.length < 2)) {
                    if ((0, r.sumBy)(e, (function(e) {
                            var t = e.filename;
                            return i.IQ.test(t) || i.XH.test(t) ? 1 : 0
                        })) >= 2) {
                        u = !0;
                        window.setTimeout((function() {
                            l.trackExposure({
                                location: "d8b28b_1"
                            })
                        }), 0)
                    }
                }
            }
            var l = (0, o.B)({
                kind: "user",
                id: "2022-12_media_mosaic_experiment",
                label: "Media Mosaic",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Media mosaic is enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            const c = l
        },
        815678: (e, t, n) => {
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

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function p(e, t, n) {
                t && h(e.prototype, t);
                n && h(e, n);
                return e
            }

            function E(e, t, n) {
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
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        E(e, t, n[t])
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
                }(n, t) || e.cached ? (0,
                    l.e5)(t) : n
            }
            var g = function() {
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
                        t._map = _({}, this._map);
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
                    p(e, [{
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
                y = function() {
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
                        this._before = new g(!0);
                        this._after = new g(!1);
                        this.cached = !1;
                        this.hasFetched = !1;
                        this.error = !1
                    }
                    var t = e.prototype;
                    t.mutate = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = new e(this.channelId);
                        r._array = n ? v(this._array) : this._array;
                        r._map = n ? _({}, this._map) : this._map;
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
                        var t, n, r, a, c, s, f, d, h, p, E, _ = this,
                            g = v(e.newMessages),
                            y = null !== (t = e.isBefore) && void 0 !== t && t,
                            O = null !== (n = e.isAfter) && void 0 !== n && n,
                            b = null !== (r = e.jump) && void 0 !== r ? r : null,
                            T = null !== (a = e.hasMoreBefore) && void 0 !== a && a,
                            I = null !== (c = e.hasMoreAfter) && void 0 !== c && c,
                            A = null !== (s = e.cached) && void 0 !== s && s,
                            S = o()(g).reverse().map(i.getCurrentConfig({
                                location: "2ecb25_2"
                            }, {
                                autoTrackExposure: !1
                            }).enabled ? function(e) {
                                return (0, l.e5)(e)
                            } : function(e) {
                                return m(_, e)
                            }).value(),
                            R = null;
                        return R = (R = (y || O) && null == b && this.ready ? this.merge(S, y, !0) : this.reset(S)).mutate({
                            ready: !0,
                            loadingMore: !1,
                            jumpType: null !== (f = null == b ? void 0 : b.jumpType) && void 0 !== f ? f : u.S.ANIMATED,
                            jumpFlash: null !== (d = null == b ? void 0 : b.flash) && void 0 !== d && d,
                            jumped: null != b,
                            jumpedToPresent: null !== (h = null == b ? void 0 : b.present) && void 0 !== h && h,
                            jumpTargetId: null !== (p = null == b ? void 0 : b.messageId) && void 0 !== p ? p : null,
                            jumpTargetOffset: null != b && null != b.messageId && null != b.offset ? b.offset : 0,
                            jumpSequenceId: null != b ? R.jumpSequenceId + 1 : R.jumpSequenceId,
                            jumpReturnTargetId: null !== (E = null == b ? void 0 : b.returnMessageId) && void 0 !== E ? E : null,
                            hasMoreBefore: null == b && O ? R.hasMoreBefore : T,
                            hasMoreAfter: null == b && y ? R.hasMoreAfter : I,
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
                    p(e, [{
                        key: "length",
                        get: function() {
                            return this._array.length
                        }
                    }]);
                    return e
                }();
            y._channelMessages = {};
            const O = y
        },
        769915: (e, t, n) => {
            n.d(t, {
                $V: () => N,
                Bz: () => M,
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
                h = n(584690),
                p = n(149258),
                E = n(506474),
                _ = n(124453),
                v = n(598143),
                m = n(2590);

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t) {
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

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function T(e) {
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

            function I(e, t) {
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
                return !t || "object" !== P(t) && "function" != typeof t ? function(e) {
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
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var P = function(e) {
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
                    var n, r = b(e);
                    if (t) {
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }
            var L, N, D = null;
            __OVERLAY__ && (D = n(674482).Z);
            ! function(e) {
                e.OVERLAY_UNLOCKED = "overlay_unlocked";
                e.OVERLAY_UNLOCKED_PINNED = "overlay_unlocked_pinned";
                e.OVERLAY_LOCKED_ACTIVATED = "overlay_locked_activated"
            }(L || (L = {}));
            ! function(e) {
                e[e.SEND = 0] = "SEND";
                e[e.EDIT = 1] = "EDIT";
                e[e.COMMAND = 2] = "COMMAND"
            }(N || (N = {}));
            var M = function(e) {
                    return e.type === N.EDIT
                },
                U = function(e) {
                    return function(e) {
                        return e.type === N.SEND
                    }(e) ? e.message.nonce : M(e) ? e.message.messageId : e.message.data.id
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
                    y(this, n);
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
                        case N.SEND:
                            this.handleSend(e.message, t);
                            break;
                        case N.EDIT:
                            this.handleEdit(e.message, t);
                            break;
                        case N.COMMAND:
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
                        d = T({
                            mobile_network_type: h.Z.getType()
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
                        var p;
                        null != D && (D.isInstanceUILocked() ? p = {
                            location: L.OVERLAY_LOCKED_ACTIVATED
                        } : D.isInstanceUILocked() || (p = D.isPinned(m.Odu.TEXT) ? {
                            location: L.OVERLAY_UNLOCKED_PINNED
                        } : {
                            location: L.OVERLAY_UNLOCKED
                        }));
                        var E = this.createResponseHandler(e.nonce, t),
                            _ = new AbortController;
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
                            context: p,
                            oldFormErrors: !0,
                            signal: _.signal,
                            onRequestCreated: function() {
                                null != e.nonce && n.requests.set(e.nonce, _)
                            }
                        }, E);
                        else {
                            var v = {
                                timeout: 6e4,
                                retries: 3,
                                backoff: new i.Z
                            };
                            0;
                            u.ZP.post(I(T({
                                url: m.ANM.MESSAGES(r),
                                body: d,
                                context: p,
                                oldFormErrors: !0
                            }, v), {
                                signal: _.signal,
                                onRequestCreated: function() {
                                    null != e.nonce && n.requests.set(e.nonce, _)
                                }
                            }), E)
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
                        h = e.maxSizeCallback,
                        E = this,
                        g = {
                            type: a.B8.APPLICATION_COMMAND,
                            application_id: r,
                            guild_id: i,
                            channel_id: l,
                            session_id: d.default.getSessionId(),
                            data: c,
                            nonce: s
                        };
                    if (null != f) {
                        g.data.attachments = [];
                        n = [];
                        var y = f;
                        g.data.attachments = y.map((function(e, t) {
                            o()(e.status === v.m.COMPLETED, "Uploads must be staged before trying to send a message");
                            return (0, _.B)(e, t)
                        }))
                    }
                    var O = new AbortController;
                    u.ZP.post({
                        url: m.ANM.INTERACTIONS,
                        fields: [{
                            name: "payload_json",
                            value: JSON.stringify(g)
                        }],
                        attachments: n,
                        signal: O.signal,
                        onRequestCreated: function(e) {
                            E.requests.set(s, O);
                            e.on("progress", (function(e) {
                                var t = e.total,
                                    n = (0, p.dg)(i);
                                if (null != t && t > n) {
                                    E.cancelRequest(s);
                                    null == h || h(n)
                                }
                            }))
                        }
                    }, this.createResponseHandler(s, t))
                };
                return n
            }(E.Z))
        },
        384482: (e, t, n) => {
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

            function h(e, t) {
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

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function _(e, t) {
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

            function g(e) {
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
                    return _(this, n)
                }
            }
            var y = d.V6Z + d.frH - 1;

            function O(e, t) {
                if (null == e || null == t) throw new Error("cmd and name required");
                return "".concat(e, ":").concat(t)
            }
            var b = a.parse(location.search.slice(1)),
                T = parseInt(null != b.rpc && "" !== b.rpc ? b.rpc : d.V6Z, 10),
                I = null;
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
                var t = g(n);

                function n() {
                    h(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.connect = function() {
                    var e = this;
                    if (null == I)
                        if (T > y) {
                            T = d.V6Z;
                            this.emit("disconnected")
                        } else {
                            try {
                                I = new WebSocket("ws://127.0.0.1:".concat(this.port, "/?v=").concat(d.X6Q))
                            } catch (e) {
                                this.disconnect({
                                    code: d.$VG.CLOSE_ABNORMAL
                                });
                                return
                            }
                            if (null != I) {
                                I.onmessage = function(t) {
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
                                I.onclose = I.onerror = function(t) {
                                    return e.disconnect(t)
                                }
                            }
                        }
                };
                r.disconnect = function(e) {
                    if (null != e && "code" in e && [d.$VG.CLOSE_ABNORMAL, d.$VG.INVALID_CLIENTID].includes(e.code)) {
                        T++;
                        I = null;
                        this.connect()
                    } else if (null != I) {
                        this.emit("disconnected");
                        I.close();
                        I = null
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
                            null == I || I.send(a)
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
                    t && p(e.prototype, t);
                    n && p(e, n)
                }(n, [{
                    key: "port",
                    get: function() {
                        return T
                    }
                }, {
                    key: "connected",
                    get: function() {
                        return null != I && I.readyState === WebSocket.OPEN
                    }
                }]);
                return n
            }(o()))
        },
        458960: (e, t, n) => {
            n.d(t, {
                $j: () => d,
                zP: () => h,
                lW: () => _,
                sr: () => E,
                Ty: () => p
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

            function h() {
                r.default.disconnect()
            }

            function p(e, t) {
                if (!__OVERLAY__) throw new o.Z(f.lTL.UNKNOWN_ERROR, "called from wrong app context");
                r.default.subscribe(f.zMe.OVERLAY, {
                    token: t
                }, (function(t) {
                    return e(s(t))
                }))
            }

            function E(e, t) {
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

            function _(e) {
                __OVERLAY__ ? r.default.request(f.Etm.OVERLAY, c(e)) : i.Z.dispatchToSubscriptions(f.zMe.OVERLAY, {}, c(e))
            }
        },
        598143: (e, t, n) => {
            n.d(t, {
                m: () => C,
                n: () => L
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
                h = n(257695),
                p = n(2590);

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t, n, r, o, i, u) {
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
                            _(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            _(i, r, o, u, a, "throw", e)
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

            function g(e, t, n) {
                g = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = y(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, t);
                        return o.get ? o.get.call(n) : o.value
                    }
                };
                return g(e, t, n || e)
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
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

            function b(e, t) {
                return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function T(e, t) {
                T = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return T(e, t)
            }

            function I(e, t) {
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
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
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
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
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
            var C, P = new a.Z("CloudUpload.tsx"),
                w = n(392445).Z;
            ! function(e) {
                e.NOT_STARTED = "NOT_STARTED";
                e.STARTED = "STARTED";
                e.UPLOADING = "UPLOADING";
                e.ERROR = "ERROR";
                e.COMPLETED = "COMPLETED";
                e.CANCELED = "CANCELED"
            }(C || (C = {}));
            var L = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && T(e, t)
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
                    P.log("Uploading ".concat(this.id));
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
                        var t, n, r, o, i, a, c, f, d, E;
                        return R(this, (function(_) {
                            switch (_.label) {
                                case 0:
                                    if (e.status === C.COMPLETED) return [2];
                                    e.setStatus(C.STARTED);
                                    return [3, 2];
                                case 1:
                                    _.sent();
                                    _.label = 2;
                                case 2:
                                    if (e.status === C.CANCELED) {
                                        e.handleComplete(e.id);
                                        return [2]
                                    }
                                    return [4, w.getUploadPayload(e)];
                                case 3:
                                    t = _.sent();
                                    n = (0, h.F)(e.item.target);
                                    if (null == t.filename || "" === t.filename || 0 === e.currentSize) {
                                        P.error("File does not have a filename or size is 0.", JSON.stringify(t));
                                        e.handleError(p.evJ.INVALID_FILE_ASSET);
                                        return [2]
                                    }
                                    if ((null !== (r = e.currentSize) && void 0 !== r ? r : 0) > n.getMaxFileSize(e.channelId)) {
                                        e.handleError(p.evJ.ENTITY_TOO_LARGE);
                                        return [2]
                                    }
                                    if (l.ZP.get("upload_fail_50") && Math.random() < .5) {
                                        setTimeout((function() {
                                            e.handleError(500)
                                        }), 1e3);
                                        return [2]
                                    }
                                    _.label = 4;
                                case 4:
                                    _.trys.push([4, 6, , 7]);
                                    P.log("Requesting upload url for ".concat(e.id));
                                    return [4, u.ZP.post(O({
                                        url: n.getCreateAttachmentURL(e.channelId),
                                        body: {
                                            files: [t]
                                        }
                                    }, e.retryOpts()))];
                                case 5:
                                    o = _.sent();
                                    e.setResponseUrl(o.body.attachments[0].upload_url);
                                    e.setUploadedFilename(o.body.attachments[0].upload_filename);
                                    return [3, 7];
                                case 6:
                                    i = _.sent();
                                    if ((f = null !== (c = null == i || null === (a = i.body) || void 0 === a ? void 0 : a.code) && void 0 !== c ? c : i.status) !== p.evJ.ENTITY_TOO_LARGE) {
                                        P.error("Requesting upload url failed with code ".concat(null != f ? f : JSON.stringify(i.body), " for ").concat(e.id));
                                        s.Z.captureException(i)
                                    }
                                    e.handleError(f);
                                    return [2];
                                case 7:
                                    _.trys.push([7, 9, , 10]);
                                    return [4, e.uploadFileToCloud()];
                                case 8:
                                    d = _.sent();
                                    e.handleComplete(d);
                                    return [3, 10];
                                case 9:
                                    E = _.sent();
                                    if (e.status === C.CANCELED) e.handleComplete(E);
                                    else {
                                        P.info("Error: status ".concat(E.status, " for ").concat(e.id));
                                        e.handleError(E)
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
                                    if (!(0, h.F)(e.item.target).shouldReactNativeCompressUploads) {
                                        P.log("reactNativeCompressAndExtractData() disabled by upload target");
                                        return [2]
                                    }
                                    if (!0 === e.reactNativeFilePrepped) {
                                        P.log("reactNativeCompressAndExtractData() file already prepped - ".concat(e.id));
                                        return [2]
                                    }
                                    P.log("Starting compression/conversion for ".concat(e.id));
                                    return [4, (0, c.J)(e, null !== (t = e.reactNativeFileIndex) && void 0 !== t ? t : 0)];
                                case 1:
                                    if (null == (n = d.sent()) || null == n.file) return [2];
                                    r = n.uri;
                                    o = n.file.name;
                                    i = n.file.type;
                                    e.filename = o;
                                    if (null == o || null == r || null == i) {
                                        P.error("Insufficient file data: ".concat({
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
                                        P.error("Size missing from file data for ".concat(e.id));
                                        throw new Error("Size missing from file data")
                                    }
                                    P.log("Completed compression and conversion. Output size=".concat(a, " bytes; filename=").concat(o, " for ").concat(e.id));
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
                    P.log("Upload complete for ".concat(this.id));
                    this.emit("complete", e);
                    this.removeAllListeners()
                };
                r.cancel = function() {
                    P.log("Cancelled called for ".concat(this.id));
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
                    return g(y(n.prototype), "resetState", this).call(this)
                };
                r.delete = function() {
                    var e = this;
                    return v((function() {
                        var t;
                        return R(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    if (null == e.uploadedFilename) return [2];
                                    t = (0, h.F)(e.item.target).getDeleteUploadURL(e.uploadedFilename);
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
                        var n = I(e, 2),
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
            n.d(t, {
                ow: () => p,
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
            var p, E, _ = function(e) {
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
            }(p || (p = {}));
            ! function(e) {
                e[e.FILE_ATTACHMENT = 0] = "FILE_ATTACHMENT";
                e[e.IMAGE_PICKER = 1] = "IMAGE_PICKER"
            }(E || (E = {}));
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
                    t && h(e, t)
                }(n, e);
                var t = v(n);

                function n(e, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var o;
                    (o = t.call(this)).item = e;
                    if (e.platform === p.REACT_NATIVE) {
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
                e.GUILD_PRODUCT = "GUILD_PRODUCT"
            }(r || (r = {}))
        },
        861323: (e, t, n) => {
            n.d(t, {
                ZP: () => Z,
                zO: () => V,
                FO: () => G,
                Sq: () => U
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
                h = n(968696),
                p = n(585622),
                E = n(890607),
                _ = n(2590),
                v = /^\/([a-zA-Z0-9-]+)$/,
                m = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
                g = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
                y = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                O = /^\/application-directory\/([0-9-]+)\/?$/,
                b = /^\/activities\/([0-9-]+)\/?$/,
                T = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
                I = D(window.GLOBAL_ENV.INVITE_HOST),
                A = D(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
                S = D(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : "//canary.".concat(_.$R1)),
                R = D("//canary.".concat(_.$R1)),
                C = D("//ptb.".concat(_.$R1)),
                P = D("discordapp.com"),
                w = D("discord.com"),
                L = [h.Z.escape(null !== (o = I.host) && void 0 !== o ? o : ""), h.Z.escape(null !== (i = A.host) && void 0 !== i ? i : ""), h.Z.escape(null !== (u = S.host) && void 0 !== u ? u : ""), h.Z.escape(null !== (a = P.host) && void 0 !== a ? a : ""), h.Z.escape(null !== (l = w.host) && void 0 !== l ? l : "")].filter(Boolean),
                N = new RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(L.join("|"), ")"), "g");

            function D(e) {
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

            function M(e, t) {
                var n, r;
                if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
                var o, i = null !== (r = t.pathname) && void 0 !== r ? r : "",
                    u = null !== (o = e.pathPrefix) && void 0 !== o ? o : "";
                if (!i.startsWith(u)) return null;
                var a = i.substring(u.length);
                return "" === a ? null : a
            }

            function U(e) {
                var t, n, r, o;
                return null !== (o = null !== (r = null !== (n = null !== (t = M(S, e)) && void 0 !== t ? t : M(R, e)) && void 0 !== n ? n : M(C, e)) && void 0 !== r ? r : M(P, e)) && void 0 !== o ? o : M(w, e)
            }

            function j(e) {
                if (null == e) return null;
                var t = e.match(y);
                return null != t && 3 === t.length ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function Z(e) {
                if (null == e) return [];
                var t = new Set,
                    n = [];
                e = e.replace(N, (function(e, t, n, r) {
                    return null == n ? "".concat(t, "http://").concat(r) : e
                }));
                var r = e.match(p.Z.URL_REGEX);
                if (null == r) return [];
                var o = !0,
                    i = !1,
                    u = void 0;
                try {
                    for (var a, l = r[Symbol.iterator](); !(o = (a = l.next()).done); o = !0) {
                        var c = a.value;
                        if (n.length >= 10) break;
                        var h = G(c);
                        if (null != h && null != h.pathname) {
                            var _, y, L, D, U = M(I, h),
                                Z = M(A, h),
                                V = null !== (D = null !== (L = null !== (y = null !== (_ = M(S, h)) && void 0 !== _ ? _ : M(R, h)) && void 0 !== y ? y : M(C, h)) && void 0 !== L ? L : M(P, h)) && void 0 !== D ? D : M(w, h),
                                F = function(e, r) {
                                    if (!t.has(r)) {
                                        t.add(r);
                                        n.push({
                                            type: e,
                                            code: r
                                        })
                                    }
                                };
                            0;
                            if (null != (null == U ? void 0 : U.match(v))) {
                                var B = (0, f.mb)(U.substring(1), h.search);
                                d.Z.getInvite(B);
                                F(E.g.INVITE, B)
                            }
                            null != (null == Z ? void 0 : Z.match(v)) && F(E.g.TEMPLATE, Z.substring(1));
                            var x = null == V ? void 0 : V.match(g);
                            if (null != x) {
                                var k = x[1].toUpperCase();
                                if (k === E.g.INVITE) {
                                    var H = (0, f.mb)(x[2], h.search);
                                    F(E.g.INVITE, H)
                                } else F(k, x[2])
                            }
                            null != (null == V ? void 0 : V.match(m)) && F(E.g.CHANNEL_LINK, V.replace("/channels/", ""));
                            var Y = j(h.pathname);
                            null != Y && F(E.g.EVENT, "".concat(Y.guildId, "-").concat(Y.guildEventId));
                            var z = null == V ? void 0 : V.match(O);
                            if (null != z) {
                                var W = z[1];
                                F(E.g.APP_DIRECTORY_PROFILE, W)
                            }
                            var K = null == V ? void 0 : V.match(b),
                                q = s.getCurrentConfig({
                                    location: "78afcf_1"
                                }, {
                                    autoTrackExposure: !1
                                }).activityBookmarkEmbedEnabled;
                            if (null != K && q) {
                                var X = K[1];
                                F(E.g.ACTIVITY_BOOKMARK, X)
                            }
                            var Q = null == V ? void 0 : V.match(T);
                            null != Q && F(E.g.GUILD_PRODUCT, "".concat(Q[1], "-").concat(Q[2]))
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

            function G(e) {
                try {
                    return (0, c.parse)(e)
                } catch (e) {
                    return null
                }
            }

            function V(e) {
                return Z(e)[0]
            }
        },
        988135: (e, t, n) => {
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
            var p = {
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
                E = {};
            var _ = function(e) {
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
                var t = h(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getUserAgnosticState = function() {
                    return {
                        toggleStates: E
                    }
                };
                r.initialize = function(e) {
                    for (var t in p) {
                        var n, r, o = null !== (r = null == e || null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== r && r;
                        E[t] = o
                    }
                };
                r.get = function(e) {
                    var t;
                    return null !== (t = E[e]) && void 0 !== t && t
                };
                r.set = function(e, t) {
                    E[e] = t;
                    return t
                };
                r.all = function() {
                    return E
                };
                r.allByCategory = function(e) {
                    return Object.entries(p).filter((function(t) {
                        var n = s(t, 2);
                        n[0];
                        return n[1].category === e
                    })).map((function(e) {
                        var t = s(e, 2),
                            n = t[0],
                            r = t[1];
                        return [n, E[n], r]
                    }))
                };
                r.__getLocalVars = function() {
                    return {
                        toggleStates: E
                    }
                };
                return n
            }(r.ZP.DeviceSettingsStore);
            _.displayName = "DevToolsDevSettingsStore";
            _.persistKey = "DevToolsDevSettingsStore";
            const v = new _(o.Z, {
                DEV_TOOLS_DEV_SETTING_SET: function(e) {
                    E[e.toggle] = e.value
                }
            })
        },
        770960: (e, t, n) => {
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
        108034: (e, t, n) => {
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
            n.d(t, {
                bN: () => T,
                CQ: () => I,
                xt: () => F,
                Ld: () => B,
                Z2: () => x,
                ZP: () => H
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

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        p(e, t, n[t])
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

            function g(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
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
                    return g(this, n)
                }
            }
            var T = {
                EVENT: "event",
                EVENT_ACTIVE: "active",
                EVENT_UPCOMING: "event-upcoming",
                GUILD_EVENT: function(e) {
                    return "".concat(e, "-").concat(T.EVENT)
                },
                GUILD_EVENT_ACTIVE: function(e) {
                    return "".concat(e, "-").concat(T.EVENT_ACTIVE)
                },
                GUILD_EVENT_UPCOMING: function(e) {
                    return "".concat(e, "-").concat(T.EVENT_UPCOMING)
                },
                CHANNEL_EVENT: function(e) {
                    return "".concat(e, "-").concat(T.EVENT)
                },
                CHANNEL_EVENT_ACTIVE: function(e) {
                    return "".concat(e, "-").concat(T.EVENT_ACTIVE)
                },
                CHANNEL_EVENT_UPCOMING: function(e) {
                    return "".concat(e, "-").concat(T.EVENT_UPCOMING)
                }
            };

            function I(e) {
                var t = e.id,
                    n = e.scheduled_start_time,
                    r = F(e) ? "\0" : "";
                return "".concat(r, "-").concat(new Date(n).getTime(), "-").concat(t)
            }
            var A = function(e) {
                    var t = e.guild_id,
                        n = e.entity_id,
                        r = e.channel_id,
                        o = [t];
                    null != n && o.push(n);
                    o.push(T.GUILD_EVENT(t));
                    null != r && o.push(T.CHANNEL_EVENT(r));
                    if (F(e)) {
                        o.push(T.EVENT_ACTIVE);
                        o.push(T.GUILD_EVENT_ACTIVE(t));
                        null != r && o.push(T.CHANNEL_EVENT_ACTIVE(r))
                    }
                    if (B(e)) {
                        o.push(T.EVENT_UPCOMING);
                        o.push(T.GUILD_EVENT_UPCOMING(t));
                        null != r && o.push(T.CHANNEL_EVENT_UPCOMING(r))
                    }
                    return o
                },
                S = new u.Z(A, I);

            function R(e) {
                var t, n = S.get(e.id),
                    r = null !== (t = e.user_count) && void 0 !== t ? t : null == n ? void 0 : n.user_count,
                    o = D(e.id, e.guild_id) ? 1 : 0;
                e.user_count = Math.max(o, null != r ? r : 0);
                S.set(e.id, e);
                w += 1
            }

            function C(e, t) {
                S.delete(e);
                U(e, t);
                w += 1
            }
            var P = "orphaned",
                w = 0,
                L = {},
                N = [];

            function D(e) {
                var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
                if (r !== P && (null === (t = L.orphaned) || void 0 === t ? void 0 : t.has(e))) {
                    M(e, r);
                    U(e, P)
                }
                return Boolean(null === (n = L[r]) || void 0 === n ? void 0 : n.has(e))
            }

            function M(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
                null == L[t] && (L[t] = new Set);
                L[t].add(e);
                w += 1
            }

            function U(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
                null === (t = L[n]) || void 0 === t || t.delete(e);
                w += 1
            }
            var j = {};

            function Z(e, t) {
                var n;
                return Boolean(null === (n = j[e]) || void 0 === n ? void 0 : n[t])
            }

            function G(e) {
                S.values(T.GUILD_EVENT(e)).forEach((function(t) {
                    return C(t.id, e)
                }))
            }

            function V(e) {
                R(e.guildScheduledEvent);
                return !0
            }

            function F(e) {
                return null != e && (null !== (t = (null == e ? void 0 : e.status) === d.p1.ACTIVE) && void 0 !== t && t);
                var t
            }

            function B(e) {
                return !d.$I.has(e.status)
            }

            function x(e) {
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
                    t && y(e, t)
                }(n, e);
                var t = b(n);

                function n() {
                    h(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getGuildScheduledEvent = function(e) {
                    return null == e ? null : null !== (t = S.get(e)) && void 0 !== t ? t : null;
                    var t
                };
                r.getGuildEventCountByIndex = function(e) {
                    return S.size(e)
                };
                r.getGuildScheduledEventsForGuild = function(e) {
                    return null == e ? [] : S.values(e)
                };
                r.getGuildScheduledEventsByIndex = function(e) {
                    return S.values(e)
                };
                r.getRsvpVersion = function() {
                    return w
                };
                r.hasRsvp = function(e, t) {
                    return null != e && null != t && D(e, t)
                };
                r.isActive = function(e) {
                    return null != e && F(S.get(e))
                };
                r.getActiveEventByChannel = function(e) {
                    if (null != e) {
                        return this.getGuildScheduledEventsByIndex(T.CHANNEL_EVENT_ACTIVE(e))[0]
                    }
                };
                r.getUsersForGuildEvent = function(e) {
                    return null == e ? {} : null !== (t = j[e]) && void 0 !== t ? t : {};
                    var t
                };
                r.__getLocalVars = function() {
                    return {
                        scheduledEventIndex: A,
                        guildScheduledEvents: S,
                        ORPHANED_GUILD_ID: P,
                        guildScheduledEventRSVPVersion: w,
                        guildScheduledEventRSVPs: L,
                        previousDirectoryGuildEventsSnapshot: N,
                        usersForGuildEvent: j
                    }
                };
                return n
            }(i.ZP.Store);
            k.displayName = "GuildScheduledEventStore";
            const H = new k(a.Z, {
                CONNECTION_OPEN: function(e) {
                    var t = e.guilds;
                    S.clear();
                    L = {};
                    w = 0;
                    j = {};
                    N.forEach(R);
                    t.forEach((function(e) {
                        return e.guild_scheduled_events.forEach(R)
                    }));
                    return !0
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    G(t.id);
                    t.guild_scheduled_events.forEach((function(e) {
                        return R(e)
                    }));
                    return !0
                },
                GUILD_DELETE: function(e) {
                    G(e.guild.id);
                    return !0
                },
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    var t = e.guildId,
                        n = e.guildScheduledEvents,
                        r = S.values(T.GUILD_EVENT(t), !0).map((function(e) {
                            return e.id
                        })),
                        i = n.map((function(e) {
                            return e.id
                        }));
                    o().difference(r, i).forEach((function(e) {
                        C(e, t)
                    }));
                    var u = !0,
                        a = !1,
                        l = void 0;
                    try {
                        for (var c, s = n[Symbol.iterator](); !(u = (c = s.next()).done); u = !0) {
                            R(c.value)
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
                GUILD_SCHEDULED_EVENT_CREATE: V,
                GUILD_SCHEDULED_EVENT_UPDATE: V,
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    var t = e.guildScheduledEvent;
                    C(t.id, t.guild_id);
                    return !0
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    var t = e.userId,
                        n = e.guildEventId,
                        r = e.guildId,
                        o = S.get(n),
                        i = c.default.getId(),
                        u = D(n, r),
                        a = i === t;
                    if (!(null == o || u && a)) {
                        var l, d = null !== (l = o.user_count) && void 0 !== l ? l : 0;
                        R(v(_({}, o), {
                            user_count: d + 1
                        }))
                    }
                    a && !u && M(n, r);
                    if (null != t && !Z(n, t)) {
                        var h = f.default.getUser(t),
                            p = s.ZP.getMember(r, t);
                        if (null != h) {
                            ! function(e, t) {
                                null == j[e] && (j[e] = {});
                                j[e][t.user.id] = t;
                                w += 1
                            }(n, {
                                user: h,
                                guild_member: null != p ? p : {
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
                        o = S.get(n),
                        i = c.default.getId(),
                        u = D(n, r),
                        a = i === t;
                    a && u && U(n, r);
                    null != t && Z(n, t) && function(e, t) {
                        var n;
                        null === (n = j[e]) || void 0 === n || delete n[t];
                        w += 1
                    }(n, t);
                    if (null != o && (u || !a)) {
                        var l, s = null !== (l = o.user_count) && void 0 !== l ? l : 0,
                            f = Math.max(0, s - 1);
                        R(v(_({}, o), {
                            user_count: f
                        }))
                    }
                    return !0
                },
                GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function(e) {
                    var t = e.guildId,
                        n = e.guildScheduledEventUsers;
                    L[t] = new Set;
                    n.forEach((function(e) {
                        e.user_id === c.default.getId() && M(e.guild_scheduled_event_id, t)
                    }));
                    return !0
                },
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
                    var t, n = e.guildEventId,
                        r = e.rsvpUsers,
                        o = e.guildId;
                    t = v(_({}, j), p({}, n, r.reduce((function(e, t) {
                        var n = t.guild_member,
                            r = m(t, ["guild_member"]),
                            i = {
                                user: new l.Z(v(_({}, r), {
                                    guildMemberAvatars: null != (null == n ? void 0 : n.avatar) ? p({}, o, n.avatar) : null
                                })),
                                guild_member: v(_({}, null != n ? n : {}), {
                                    guildId: o
                                })
                            };
                        e[r.id] = i;
                        return e
                    }), {}))), j = t;
                    return !0
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    var t = e.invite.guild_scheduled_event;
                    if (null == t) return !1;
                    R(t);
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
                            R(c);
                            null != c.user_rsvp ? M(c.id, c.guild_id) : U(c.id, c.guild_id)
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
                    N = n;
                    return !0
                },
                LOGOUT: function() {
                    S.clear();
                    return !0
                }
            })
        },
        718634: (e, t, n) => {
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
        327930: (e, t, n) => {
            n.d(t, {
                Jv: () => E,
                M0: () => _,
                Qj: () => v,
                Ao: () => m,
                YO: () => g,
                VO: () => y
            });
            var r = n(61209),
                o = n(567403),
                i = n(682776),
                u = n(968696),
                a = n(2590),
                l = n(897196),
                c = Array.from(l.Vg).map((function(e) {
                    return u.Z.escape(e)
                })).join("|"),
                s = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)?(\\d+|").concat(c, ")?")),
                f = new RegExp("^/channels/(\\d+|".concat(a.ME, ")(?:/)(\\d+|").concat(c, ")(?:/)(\\d+)")),
                d = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)"),
                h = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?"),
                p = new RegExp("^/events/(\\d+)(?:/)(\\d+)?"),
                E = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+|".concat(a.ME, ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?")),
                _ = new RegExp("^https://(?:canary\\.|ptb\\.)?discord.com/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");

            function v(e) {
                if (null == e) return null;
                var t = e.match(f);
                if (null != t && t.length > 3) return {
                    guildId: t[1],
                    channelId: t[2],
                    messageId: t[3]
                };
                var n = e.match(d);
                if (null != n && n.length > 4) return {
                    guildId: n[1],
                    channelId: n[2],
                    threadId: n[3],
                    messageId: n[4]
                };
                var r = e.match(s);
                if (null != r && r.length > 1) {
                    var o;
                    return {
                        guildId: r[1],
                        channelId: null !== (o = r[2]) && void 0 !== o ? o : void 0
                    }
                }
                var i = e.match(h);
                return null != i && i.length > 1 ? {
                    guildId: i[1]
                } : null
            }

            function m(e) {
                if (null == e) return null;
                var t = e.match(p);
                return null != t && t.length > 1 ? {
                    guildId: t[1],
                    guildEventId: t[2]
                } : null
            }

            function g(e) {
                return !!e.isPrivate() || i.Z.can(a.Plq.VIEW_CHANNEL, e)
            }

            function y(e) {
                var t = e.guildId,
                    n = e.channelId;
                if (null == o.Z.getGuild(t) && t !== a.ME) return !1;
                if (null == n) return !0;
                var i = r.Z.getChannel(n);
                return null != i && g(i)
            }
        },
        833589: (e, t, n) => {
            n.d(t, {
                Z: () => A
            });
            var r = n(202351),
                o = n(281110),
                i = n(744564),
                u = n(2590);

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function d(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
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
            var p = function(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var _ = Object.freeze({
                    burstCredits: 0,
                    wasReplenishedToday: !1,
                    nextReplenishAt: null,
                    isReactionPickerBurstToggled: null,
                    emojiReactionForCoachmark: null,
                    guildBurstPreviews: {}
                }),
                v = f({}, _),
                m = function(e) {
                    var t = e.amount,
                        n = e.wasReplenishedToday,
                        r = e.nextReplenishAt;
                    v.burstCredits = t;
                    v.wasReplenishedToday = n;
                    v.nextReplenishAt = r
                },
                g = function() {
                    o.ZP.get({
                        url: u.ANM.BURST_CREDIT_BALANCE
                    }).then((function(e) {
                        i.Z.dispatch({
                            type: "BURST_CREDITS_SET",
                            amount: e.body.amount,
                            wasReplenishedToday: e.body.replenished_today,
                            nextReplenishAt: new Date(e.body.next_replenish_at)
                        })
                    })).catch((function() {}))
                },
                y = function(e) {
                    var t = e.value;
                    v.isReactionPickerBurstToggled = t
                },
                O = function(e) {
                    var t = e.emoji;
                    v.emojiReactionForCoachmark = null != t ? t : null
                },
                b = function(e) {
                    var t = e.guildId,
                        n = e.channelId,
                        r = e.messageId,
                        o = e.emoji;
                    v.guildBurstPreviews[t] = {
                        channelId: n,
                        messageId: r,
                        emoji: o
                    }
                },
                T = function(e) {
                    var t = e.guildId;
                    delete v.guildBurstPreviews[t]
                },
                I = function(e) {
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

                    function n() {
                        a(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function(e) {
                        v = null != e ? e : f({}, _)
                    };
                    r.getBurstedPreviewData = function(e) {
                        var t;
                        return null !== (t = v.guildBurstPreviews[e]) && void 0 !== t ? t : void 0
                    };
                    r.getState = function() {
                        return v
                    };
                    r.__getLocalVars = function() {
                        return {
                            initialState: _,
                            state: v,
                            handleSetCreditBalance: m,
                            handleFetchFromAPI: g,
                            handleEmojiPickerBurstToggle: y,
                            handleShowFreeUserSentPopout: O,
                            handleGuildPreviewSet: b,
                            handleGuildPreviewClear: T
                        }
                    };
                    ! function(e, t, n) {
                        t && l(e.prototype, t);
                        n && l(e, n)
                    }(n, [{
                        key: "remainingBurstCurrency",
                        get: function() {
                            return v.burstCredits
                        }
                    }, {
                        key: "hasAvailableBurstCurrency",
                        get: function() {
                            return this.remainingBurstCurrency > 0
                        }
                    }, {
                        key: "nextReplenishAt",
                        get: function() {
                            return v.nextReplenishAt
                        }
                    }, {
                        key: "isReactionPickerBurstToggled",
                        get: function() {
                            return null != v.isReactionPickerBurstToggled && v.isReactionPickerBurstToggled
                        }
                    }, {
                        key: "emojiReactionToTargetForCoachmark",
                        get: function() {
                            return v.emojiReactionForCoachmark
                        }
                    }]);
                    return n
                }(r.ZP.PersistedStore);
            I.displayName = "BurstReactionStore";
            I.persistKey = "BurstReactionStore33";
            const A = new I(i.Z, {
                BURST_CREDITS_SET: m,
                POST_CONNECTION_OPEN: g,
                BURST_REACTION_PICKER_TOGGLE: y,
                BURST_REACTION_SHOW_FREE_USER_SENT_POPOUT: O,
                BURST_GUILD_PREVIEW_SET: b,
                BURST_GUILD_PREVIEW_CLEAR: T
            })
        },
        409479: (e, t, n) => {
            n.d(t, {
                Dn: () => o,
                ZP: () => u
            });
            var r = n(806023);

            function o() {
                return r.Z.getCurrentConfig({
                    location: "e67951_1"
                }, {
                    autoTrackExposure: !1
                }).enabled && i.getCurrentConfig({
                    location: "e67951_2"
                }, {
                    autoTrackExposure: !1
                }).enabled
            }
            var i = (0, n(260561).B)({
                kind: "user",
                id: "2023-02_inline_sending_preview_mobile",
                label: "Inline Sending Preview Mobile",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Inline sending preview is enabled on mobile (both iOS and Android)",
                    config: {
                        enabled: !0
                    }
                }]
            });
            const u = i
        },
        649536: (e, t, n) => {
            n.d(t, {
                lp: () => F,
                e5: () => D,
                wi: () => U,
                gx: () => M
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

            function h(e, t) {
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
            var E = function(e) {
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
                    return h(this, n)
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
                        t && p(e, t)
                    }(n, e);
                    var t = _(n);

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
                g = n(664625),
                y = n(61209),
                O = n(840922),
                b = n(473903),
                T = n(473291),
                I = (n(918041), n(644144)),
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

            function P(e) {
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
            var L = new c.Z({
                id: "???",
                username: "???"
            });

            function N(e) {
                return null == e.author ? L : null != e.webhook_id ? new c.Z(e.author) : null !== (t = b.default.getUser(e.author.id)) && void 0 !== t ? t : new c.Z(e.author);
                var t
            }

            function D(e) {
                var t, n, r, i, a, l, c, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    f = s.reactions,
                    d = s.interactionData,
                    h = null !== (i = null === (t = e.mentions) || void 0 === t ? void 0 : t.map((function(e) {
                        return e.id
                    }))) && void 0 !== i ? i : [],
                    p = null !== (a = e.mention_roles) && void 0 !== a ? a : [],
                    E = null !== (l = e.mention_channels) && void 0 !== l ? l : [],
                    _ = e.message_reference,
                    y = o()(new Date(e.timestamp)),
                    b = e.type === R.uaV.THREAD_CREATED ? [] : (0, u.ZP)(e.content),
                    T = N(e),
                    S = null,
                    C = null != e.interaction ? v.createFromServer(e.interaction) : null,
                    L = e.type === R.uaV.THREAD_STARTER_MESSAGE ? null === (n = e.referenced_message) || void 0 === n || null === (r = n.author) || void 0 === r ? void 0 : r.id : void 0,
                    D = e.type === R.uaV.PREMIUM_REFERRAL ? e.content : void 0,
                    M = e.content;
                if (e.type === R.uaV.PREMIUM_REFERRAL) {
                    M = "";
                    0
                }
                return new m.Z(w(P({}, e, S), {
                    author: T,
                    webhookId: e.webhook_id,
                    blocked: O.Z.isBlocked(e.author.id) || null != L && O.Z.isBlocked(L),
                    timestamp: y,
                    editedTimestamp: null != e.edited_timestamp ? o()(new Date(e.edited_timestamp)) : null,
                    mentionEveryone: e.mention_everyone,
                    mentions: h,
                    mentionRoles: p,
                    mentionChannels: E,
                    messageReference: _,
                    mentioned: (0, A.Sz)({
                        userId: g.default.getId(),
                        channelId: e.channel_id,
                        mentionEveryone: null !== (c = e.mention_everyone) && void 0 !== c && c,
                        mentionUsers: h,
                        mentionRoles: p
                    }),
                    attachments: j(e),
                    embeds: G(e),
                    codedLinks: b,
                    giftCodes: (0, I.Fp)(e) ? (0, I.Q_)(null == e ? void 0 : e.embeds[0].url) : (0, I.Q_)(e.content),
                    content: M,
                    referralTrialOfferId: D,
                    call: Z(e.call, y),
                    reactions: V(e.channel_id, null != f ? f : e.reactions),
                    interaction: C,
                    interactionData: null != d ? d : e.interaction_data,
                    roleSubscriptionData: e.role_subscription_data
                }))
            }

            function M(e, t) {
                return null != t.edited_timestamp ? w(P({}, t), {
                    reactions: e.reactions,
                    interaction_data: e.interaction_data
                }) : P({}, e, t)
            }

            function U(e, t) {
                if (null != t.edited_timestamp) return D(t, {
                    reactions: e.reactions,
                    interactionData: e.interactionData
                });
                var n = e;
                null != t.call && (n = n.set("call", Z(t.call, e.timestamp)));
                null != t.attachments && (n = n.set("attachments", j(t)));
                null != t.content && "" !== t.content && (n = n.set("content", t.content));
                null != t.embeds && (n = n.set("embeds", G(t)));
                t.pinned !== n.pinned && (n = n.set("pinned", t.pinned));
                null != n.webhookId && null != t.author && (n = n.set("author", new c.Z(t.author)));
                null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags));
                null != t.components && (n = n.set("components", t.components));
                null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data));
                if (null != t.reactions) {
                    var r;
                    n = n.set("reactions", V(e.channel_id, null !== (r = e.reactions) && void 0 !== r ? r : t.reactions))
                }
                return n
            }

            function j(e) {
                return null == e.attachments ? [] : e.attachments.map((function(e) {
                    return w(P({}, e), {
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

            function G(e) {
                if (null == e.embeds) return [];
                var t = e.embeds.map((function(t) {
                    return (0, T.kC)(e.channel_id, e.id, t)
                }));
                return (0, T.o3)(t)
            }

            function V(e, t) {
                if (null == t) return [];
                var n, r = y.Z.getChannel(e),
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
                    var t = P({}, e);
                    if (null != (null == t ? void 0 : t.count_details)) {
                        var n, r;
                        t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0;
                        t.count = null !== (r = t.count_details.normal) && void 0 !== r ? r : 0
                    }
                    return !(t.burst_count > 0 && t.count < 1 && !a)
                })).map((function(e) {
                    var t = P({}, e);
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
            var F = function(e) {
                return 0 === (0,
                    a.cv)(e).length || "" !== e.content
            }
        },
        635012: (e, t, n) => {
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
                var h = r.Z.getChannel(n);
                if (null == h) return !1;
                var p = h.getGuildId();
                if (null == p) return !1;
                if (null == i.Z.getGuild(p)) return !1;
                var E = o.ZP.getMember(p, t);
                return null != E && l.some((function(e) {
                    return E.roles.includes(e)
                }))
            }
        },
        791707: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(2590),
                o = new Set([r.uaV.DEFAULT, r.uaV.REPLY]);

            function i(e) {
                return !o.has(e.type) && e.type !== r.uaV.CHAT_INPUT_COMMAND && e.type !== r.uaV.CONTEXT_MENU_COMMAND && e.type !== r.uaV.INTERACTION_PREMIUM_UPSELL && e.type !== r.uaV.PREMIUM_REFERRAL
            }
        },
        550131: (e, t, n) => {
            n.d(t, {
                ZP: () => d,
                Uj: () => h,
                ZH: () => p,
                Sw: () => E,
                ij: () => _
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
                var t = h(e);
                o()(null != t, "Result cannot be null because the message is not null");
                return t
            }

            function h(e) {
                var t, n = (0, i.e7)([u.Z], (function() {
                        return null == e ? null : u.Z.getChannel(e.channel_id)
                    })),
                    r = null == e || null === (t = e.author) || void 0 === t ? void 0 : t.id,
                    o = null == n ? void 0 : n.guild_id,
                    d = (0, i.e7)([a.ZP], (function() {
                        return null == o || null == r ? null : a.ZP.getMember(o, r)
                    })),
                    h = (0, i.e7)([s.default], (function() {
                        return s.default.getUser(r)
                    }), [r]),
                    p = f.ZP.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : h),
                    E = (0, i.e7)([l.Z], (function() {
                        return l.Z.getGuild(o)
                    })),
                    _ = (0, i.e7)([c.Z], (function() {
                        return null != r && (null == n ? void 0 : n.isPrivate()) ? c.Z.getNickname(r) : null
                    }));
                return null == e ? null : v({
                    user: e.author,
                    channel: n,
                    guild: E,
                    userName: p,
                    member: d,
                    friendNickname: _
                })
            }

            function p(e) {
                var t = u.Z.getChannel(e.channel_id);
                return _(e.author, t)
            }

            function E(e, t) {
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

            function _(e, t) {
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
        330768: (e, t, n) => {
            n.d(t, {
                Lh: () => p,
                iD: () => E,
                g1: () => _,
                ir: () => v,
                KC: () => r,
                UY: () => g,
                s4: () => y,
                OO: () => O,
                Zh: () => b,
                sm: () => T
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
                h = n(473708);

            function p(e) {
                return null == e.id ? a.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
            }

            function E(e, t, n, r) {
                var o, i, u;
                return (r ? e ? h.Z.Messages.SUPER_REACT_REMOVE_WITH_COUNT_A11Y_LABEL : h.Z.Messages.SUPER_REACT_WITH_COUNT_A11Y_LABEL : e ? h.Z.Messages.REACT_REMOVE_WITH_COUNT_A11Y_LABEL : h.Z.Messages.REACT_WITH_COUNT_A11Y_LABEL).format({
                    reactions: t,
                    emojiName: null !== (u = null === (i = null === (o = p(n)) || void 0 === o ? void 0 : o.replace(/[:_]/g, " ")) || void 0 === i ? void 0 : i.trim()) && void 0 !== u ? u : ""
                })
            }

            function _(e) {
                var t;
                return {
                    id: null !== (t = e.id) && void 0 !== t ? t : null,
                    name: null != e.id ? e.name : e.optionallyDiverseSequence,
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

            function g(e) {
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

            function y(e) {
                return e.isThread() ? f.jXE.THREAD_TEXT_AREA : e.isForumPost() ? f.jXE.FORUM_CHANNEL_TEXT_AREA : e.isGuildVocal() ? f.jXE.TEXT_IN_VOICE : f.jXE.CHANNEL_TEXT_AREA
            }

            function O() {
                var e = m();
                return 0 === e ? h.Z.Messages.SUPER_REACTIONS_OUT_OF_BURSTS_SIMPLE_SOON : h.Z.Messages.SUPER_REACTIONS_OUT_OF_BURSTS_SIMPLE.format({
                    n: e
                })
            }

            function b() {
                var e = m();
                return 0 === e ? h.Z.Messages.SUPER_REACTIONS_TAB_TOOLTIP_SOON : h.Z.Messages.SUPER_REACTIONS_TAB_TOOLTIP.format({
                    n: e
                })
            }

            function T(e) {
                var t = e.userId,
                    n = e.optimistic,
                    r = c.default.getId() === t;
                return !(n && !r)
            }
        },
        708299: (e, t, n) => {
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
                h = {};
            var p = function(e) {
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
                r.getStickerPreview = function(e, t) {
                    return (t === i.d.FirstThreadMessage ? h : d)[e]
                };
                r.__getLocalVars = function() {
                    return {
                        previews: d,
                        threadCreationPreviews: h,
                        stickerMessagePreviewStore: E
                    }
                };
                return n
            }(r.Z.Store);
            p.displayName = "StickerMessagePreviewStore";
            var E = new p(o.Z, {
                ADD_STICKER_PREVIEW: function(e) {
                    var t = e.channelId,
                        n = e.sticker;
                    (e.draftType === i.d.FirstThreadMessage ? h : d)[t] = [n]
                },
                CLEAR_STICKER_PREVIEW: function(e) {
                    var t = e.channelId,
                        n = e.draftType === i.d.FirstThreadMessage ? h : d;
                    null != n[t] && delete n[t]
                },
                LOGOUT: function() {
                    d = {};
                    h = {}
                }
            });
            const _ = E
        },
        514351: (e, t, n) => {
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
            n.d(t, {
                Zt: () => T,
                Zv: () => A,
                _V: () => S,
                Q6: () => R,
                sM: () => C,
                B0: () => P,
                X_: () => w,
                z: () => L,
                WD: () => N,
                Hc: () => D,
                J8: () => M,
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
                h = window.GLOBAL_ENV,
                p = h.API_ENDPOINT,
                E = h.MEDIA_PROXY_ENDPOINT,
                _ = h.PROJECT_ENV,
                v = h.ASSET_ENDPOINT,
                m = h.CDN_HOST,
                g = Object.values(s.og),
                y = decodeURIComponent(d.ANM.STICKER_ASSET("[\\d]+", "(".concat(g.join("|"), ")"))),
                O = new RegExp("(".concat(location.protocol).concat(v, "|").concat(location.protocol).concat(E, ")(").concat(y, ")"), "ig"),
                b = new RegExp("".concat(location.protocol).concat(p, "(").concat(y, ")"), "ig"),
                T = function(e) {
                    if (null != e.cover_sticker_id) {
                        var t = e.stickers.find((function(t) {
                            return t.id === e.cover_sticker_id
                        }));
                        if (null != t) return t
                    }
                    return e.stickers[0]
                },
                I = function(e) {
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
                    return null == e ? null : "".concat(e.name, ".").concat(I(e.format_type))
                },
                R = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.isPreview,
                        r = void 0 !== n && n,
                        i = t.size,
                        u = void 0 === i ? f.lE : i;
                    if (null == e.format_type) return null;
                    var a = d.ANM.STICKER_ASSET(e.id, I(e.format_type));
                    if ("development" !== _) {
                        if (e.format_type === s.u3.LOTTIE) return "".concat(location.protocol).concat(v).concat(a);
                        var c = e.format_type === s.u3.APNG && r && !(0, l.Dt)() ? "&passthrough=false" : "",
                            h = Math.min(2, (0, o.x_)());
                        return "".concat(location.protocol).concat(E).concat(a, "?size=").concat((0, o.oO)(u * h)).concat(c)
                    }
                    return "".concat(location.protocol).concat(p).concat(a)
                },
                C = function(e, t) {
                    var n, r = e.banner_asset_id;
                    if (null == r) return null;
                    var i = a.$k ? "webp" : "png";
                    n = null != m ? "".concat(location.protocol, "//").concat(m, "/app-assets/").concat(f.Ks, "/store/").concat(r, ".").concat(i) : "".concat(location.protocol).concat(p).concat(d.ANM.STORE_ASSET(f.Ks, r, i));
                    null != t && (n += "?size=".concat((0, o.oO)(t)));
                    return n
                },
                P = function(e) {
                    return e.match("development" !== _ ? O : b)
                },
                w = function(e) {
                    return e.stickers.some((function(e) {
                        var t = e.format_type;
                        return t === s.u3.APNG || t === s.u3.LOTTIE || t === s.u3.GIF
                    }))
                },
                L = function(e) {
                    return {
                        type: s.Ih.PACK,
                        id: e.id,
                        name: e.name,
                        stickers: e.stickers,
                        previewSticker: T(e)
                    }
                },
                N = function(e, t) {
                    return e === f.yr.ANIMATE_ON_INTERACTION ? t : e !== f.yr.NEVER_ANIMATE
                },
                D = function(e, t, n, o) {
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
                M = function(e) {
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
            n.d(t, {
                Z: () => g
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

            function h(e) {
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

            function p(e, t) {
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

            function E(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
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
                    return E(this, n)
                }
            }
            const g = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _(e, t)
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
                                    i = p(h({}, i), {
                                        me_burst: !!t || i.me_burst,
                                        burst_count: s,
                                        count_details: p(h({}, i.count_details), {
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
                                    i = p(h({}, i), {
                                        count: d,
                                        count_details: p(h({}, i.count_details), {
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
                                    t = p(h({}, t), {
                                        burst_count: r,
                                        me_burst: !o && t.me_burst,
                                        count_details: p(h({}, t.count_details), {
                                            burst: r
                                        })
                                    })
                                } else {
                                    var l = o && !t.me ? t.count : t.count - 1;
                                    t = p(h({}, t), {
                                        count: l,
                                        me: !o && t.me,
                                        count_details: p(h({}, t.count_details), {
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
                        E = null !== (n = null == d ? void 0 : d.normal) && void 0 !== n ? n : 0,
                        _ = null !== (r = null == d ? void 0 : d.burst) && void 0 !== r ? r : 0; - 1 !== a && s <= 0 && f <= 0 && E <= 0 && _ <= 0 && l.splice(a, 1);
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
                    return p(h({}, this), {
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
                h = {},
                p = {
                    scrollTop: 0
                };

            function E(e) {
                return {
                    guildId: e,
                    scrollTop: null,
                    scrollTo: null
                }
            }

            function _(e) {
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
                    return null !== (t = h[e]) && void 0 !== t ? t : E(e)
                };
                r.getGuildListDimensions = function() {
                    return p
                };
                r.isAtBottom = function(e) {
                    return _(e)
                };
                r.__getLocalVars = function() {
                    return {
                        channelDimensions: d,
                        guildDimensions: h,
                        guildListDimensions: p
                    }
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
                    null == h[t] && (h[t] = E(t));
                    void 0 !== n && (h[t].scrollTop = n);
                    var o = !1;
                    if (void 0 !== r) {
                        o = h[t].scrollTo !== r;
                        h[t].scrollTo = r
                    }
                    return null != r || o
                },
                UPDATE_GUILD_LIST_DIMENSIONS: function(e) {
                    var t = e.scrollTop;
                    p.scrollTop = t
                },
                CALL_CREATE: function(e) {
                    var t = e.channelId;
                    _(t) && delete d[t]
                }
            })
        },
        284610: (e, t, n) => {
            n.d(t, {
                d: () => b,
                Z: () => L
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

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function _(e, t) {
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
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
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

            function g(e, t) {
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
            var y = function(e) {
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
            var b, T = f.en1 + 500;
            ! function(e) {
                e[e.ChannelMessage = 0] = "ChannelMessage";
                e[e.ThreadSettings = 1] = "ThreadSettings";
                e[e.FirstThreadMessage = 2] = "FirstThreadMessage";
                e[e.ApplicationLauncherCommand = 3] = "ApplicationLauncherCommand"
            }(b || (b = {}));
            var I = {};

            function A(e) {
                var t = I[e];
                null == t && (t = I[e] = {});
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
                            e.length > T && (e = e.substr(0, T));
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

            function P(e) {
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
                    h(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    I = null != e ? e : {};
                    ! function() {
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var r, o = Object.entries(I)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                                var i = g(r.value, 2),
                                    u = i[0],
                                    a = i[1],
                                    l = !0,
                                    c = !1,
                                    s = void 0;
                                try {
                                    for (var f, d = Object.entries(a)[Symbol.iterator](); !(l = (f = d.next()).done); l = !0) {
                                        var h = g(f.value, 2),
                                            p = h[0],
                                            E = h[1][b.ChannelMessage];
                                        null != E && ("" !== E.draft && "" !== E.draft.trim() || R(p, b.ChannelMessage, u))
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
                    return I
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
                        var t = g(e, 2),
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
                    return null == n ? null : n[b.ThreadSettings]
                };
                r.__getLocalVars = function() {
                    return {
                        MAX_DRAFT_SIZE: T,
                        drafts: I
                    }
                };
                return n
            }(i.ZP.PersistedStore);
            w.displayName = "DraftStore";
            w.persistKey = "DraftStore";
            w.migrations = [function(e) {
                if (null == e) return {};
                for (var t in e) "timestamp" in e[t] && (e[t] = p({}, b.ChannelMessage, e[t]));
                return e
            }, function(e) {
                var t = l.default.getId();
                if (null == e || null == t) return {};
                var n = {},
                    r = n[t] = {};
                for (var o in e) r[o] = e[o];
                return n
            }];
            const L = new w(u.Z, {
                CONNECTION_OPEN: function() {
                    var e = l.default.getId();
                    e in I || (I[e] = {});
                    C();
                    return !1
                },
                LOGOUT: function(e) {
                    e.isSwitchingAccount || (I = {})
                },
                MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
                    e.userId in I && delete I[e.userId]
                },
                GUILD_DELETE: function() {
                    C();
                    return !1
                },
                CHANNEL_DELETE: P,
                THREAD_DELETE: P,
                THREAD_CREATE: function(e) {
                    var t = e.channel,
                        n = l.default.getId();
                    if (null == n || t.ownerId === n) return !1;
                    var r = A(n),
                        o = r[t.parent_id];
                    if (null == o) return !1;
                    var i = o[b.ThreadSettings];
                    if (null == i) return !1;
                    if (i.parentMessageId !== t.id) return !1;
                    var u, a, c = r[t.parent_id];
                    if (null == c) return !1;
                    var s = null !== (a = null === (u = c[b.FirstThreadMessage]) || void 0 === u ? void 0 : u.draft) && void 0 !== a ? a : "";
                    "" !== s && (r[t.id] = p({}, b.ChannelMessage, {
                        timestamp: Date.now(),
                        draft: s
                    }));
                    R(t.parent_id, b.ThreadSettings);
                    R(t.parent_id, b.FirstThreadMessage)
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
                        i[b.ThreadSettings] = _(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    p(e, t, n[t])
                                }))
                            }
                            return e
                        }({
                            timestamp: Date.now()
                        }, i[b.ThreadSettings], n), {
                            parentChannelId: t
                        })
                    }
                }
            })
        },
        757753: (e, t, n) => {
            n.d(t, {
                Z: () => b
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
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
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
            var p = function(e) {
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
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var _ = {},
                v = {},
                m = {};

            function g(e, t) {
                var n;
                e = null != e ? e : "";
                var r = (0, i.fU)(e),
                    o = _[e],
                    a = null != o ? s({
                        state: u.r2o.RESOLVING
                    }, o) : {
                        state: u.r2o.RESOLVING,
                        code: r.baseCode
                    };
                t(a);
                _ = f(s({}, _), l({}, e, a));
                null != (null === (n = a.guild) || void 0 === n ? void 0 : n.id) && (m = f(s({}, m), l({}, a.guild.id, e)))
            }

            function y(e) {
                return g(e.code, (function(t) {
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
                    t && h(e, t)
                }(n, e);
                var t = E(n);

                function n() {
                    a(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getInvite = function(e) {
                    return _[e]
                };
                r.getInviteError = function(e) {
                    return v[e]
                };
                r.getInvites = function() {
                    return _
                };
                r.getInviteKeyForGuildId = function(e) {
                    return m[e]
                };
                r.__getLocalVars = function() {
                    return {
                        invites: _,
                        inviteErrors: v,
                        inviteKeysByGuildId: m
                    }
                };
                return n
            }(r.ZP.Store);
            O.displayName = "InviteStore";
            const b = new O(o.Z, {
                INVITE_RESOLVE: function(e) {
                    var t = e.code,
                        n = (0, i.fU)(t);
                    _ = f(s({}, _), l({}, t, {
                        code: n.baseCode,
                        state: u.r2o.RESOLVING
                    }))
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return g(e.code, (function(t) {
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
                INVITE_RESOLVE_FAILURE: y,
                INSTANT_INVITE_REVOKE_SUCCESS: y,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return g(e.invite.code, (function(t) {
                        t.state = u.r2o.RESOLVED;
                        t.inviter = e.invite.inviter
                    }))
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach((function(e) {
                        return g(e.code, (function(e) {
                            e.state = u.r2o.EXPIRED
                        }))
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return g(e.invite.code, (function(t) {
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
                    return g(e.code, (function(e) {
                        e.state = u.r2o.ACCEPTING
                    }))
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return g(e.code, (function(t) {
                        t.state = u.r2o.ACCEPTED;
                        t.guild = e.invite.guild;
                        t.new_member = e.invite.new_member;
                        t.channel = s({}, t.channel, e.invite.channel)
                    }))
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    v[e.code] = e.error;
                    return g(e.code, (function(e) {
                        e.state = u.r2o.ERROR
                    }))
                },
                INVITE_APP_OPENING: function(e) {
                    return g(e.code, (function(e) {
                        e.state = u.r2o.APP_OPENING
                    }))
                },
                INVITE_APP_OPENED: function(e) {
                    return g(e.code, (function(e) {
                        e.state = u.r2o.APP_OPENED
                    }))
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return g(e.code, (function(e) {
                        e.state = u.r2o.APP_NOT_OPENED
                    }))
                }
            })
        },
        117112: (e, t, n) => {
            n.d(t, {
                Z: () => X
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
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
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
            var p = function(e) {
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
                    return d(this, n)
                }
            }
            var _ = function(e) {
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

            function g(e) {
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

            function y(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
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
            var b = function(e) {
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
                    var n, r = m(e);
                    if (t) {
                        var o = m(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var I = function(e) {
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
                    var t = T(n);

                    function n(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        var r;
                        (r = t.call(this)).id = e.id || "";
                        r.layoutId = e.layoutId || "";
                        r.type = e.type;
                        r.anchor = g({
                            left: 0,
                            top: 0
                        }, e.anchor);
                        r.size = g({
                            width: 0,
                            height: 0
                        }, e.size);
                        r.pinned = !!e.pinned;
                        r.zIndex = e.zIndex || 0;
                        r.meta = g({}, e.meta);
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

            function P(e, t, n) {
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

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        P(e, t, n[t])
                    }))
                }
                return e
            }

            function N(e, t) {
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

            function D(e, t) {
                return !t || "object" !== G(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function M(e, t) {
                M = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return M(e, t)
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
                }(e, t) || V(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(e) {
                return function(e) {
                    if (Array.isArray(e)) return R(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || V(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z, G = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function V(e, t) {
                if (e) {
                    if ("string" == typeof e) return R(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? R(e, t) : void 0
                }
            }

            function F(e) {
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
                    return D(this, n)
                }
            }! function(e) {
                e.REQUIRED = "REQUIRED";
                e.OPTIONAL = "OPTIONAL";
                e.OPTIONAL_DEFAULT = "OPTIONAL_DEFAULT"
            }(Z || (Z = {}));
            var B, x, k, H = "migrated",
                Y = (P(k = {}, S.Odu.GUILDS, {
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
                }), P(k, S.Odu.TEXT, {
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
                }), P(k, S.Odu.VOICE, {
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
                }), P(k, S.Odu.GUILDS_TEXT, {
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
                }), P(k, S.Odu.LOBBY_VOICE, {
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
                }), k);

            function z(e, t) {
                var n = x[e];
                if (null == n) return !1;
                var r = B[n.layoutId];
                return null != r && t(n, r)
            }

            function W(e, t) {
                x = N(L({}, x), P({}, e.id, e.set("zIndex", t)))
            }

            function K(e) {
                var t;
                return null === (t = Y[e]) || void 0 === t ? void 0 : t.defaultSettings
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
                    t && M(e, t)
                }(n, e);
                var t = F(n);

                function n() {
                    C(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    var t = this;
                    if (null != e && null != e.layouts && null != e.widgets) {
                        B = function(e) {
                            var t = {};
                            o().forEach(e, (function(e, n) {
                                t[n] = new _(e)
                            }));
                            return t
                        }(e.layouts);
                        x = function(e) {
                            var t = {};
                            o().forEach(e, (function(e, n) {
                                t[n] = new I(e)
                            }));
                            return t
                        }(e.widgets)
                    } else {
                        B = {};
                        x = {}
                    }
                    var n = !1,
                        r = [];
                    o().forEach(Y, (function(e, t) {
                        e.layoutPolicy === Z.REQUIRED && r.push(t)
                    }));
                    o().forEach(B, (function(e, o) {
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
                                    r = new I(N(L({}, t.getWidgetDefaultSettings(e)), {
                                        type: e,
                                        id: l,
                                        layoutId: o,
                                        zIndex: i.length
                                    }));
                                    i.push(r);
                                    x = N(L({}, x), P({}, l, r))
                                }, h = r[Symbol.iterator](); !(l = (f = h.next()).done); l = !0) d()
                        } catch (e) {
                            c = !0;
                            s = e
                        } finally {
                            try {
                                l || null == h.return || h.return()
                            } finally {
                                if (c) throw s
                            }
                        }
                        if (a) {
                            e = e.set("widgets", i.map((function(e) {
                                return e.id
                            })));
                            B = N(L({}, B), P({}, o, e))
                        }
                    }));
                    o().forEach(x, (function(e, t) {
                        var r = B[e.layoutId];
                        if (null == r || r.widgets.indexOf(t) < 0) {
                            delete(x = L({}, x))[t];
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
                        layouts: B,
                        widgets: x
                    }
                };
                r.getLayouts = function() {
                    return B
                };
                r.getLayout = function(e) {
                    return B[e]
                };
                r.getAllWidgets = function() {
                    return x
                };
                r.getWidget = function(e) {
                    return x[e]
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
                    return Y[e]
                };
                r.getWidgetDefaultSettings = function(e) {
                    return K(e)
                };
                r.getWidgetType = function(e) {
                    var t = x[e];
                    return null != t ? t.type : ""
                };
                r.getRegisteredWidgets = function() {
                    return Y
                };
                r.getDefaultLayout = function(e) {
                    var t = [];
                    o().forEach(this.getRegisteredWidgets(), (function(n, r) {
                        switch (n.layoutPolicy) {
                            case Z.REQUIRED:
                            case Z.OPTIONAL_DEFAULT:
                                t.push(N(L({}, n.defaultSettings), {
                                    type: r,
                                    id: u().v4(),
                                    layoutId: e
                                }))
                        }
                    }));
                    return t
                };
                r.__getLocalVars = function() {
                    return {
                        OverlayWidgetLayoutPolicy: Z,
                        MIGRATION_KEY: H,
                        layouts: B,
                        widgets: x,
                        widgetConfigs: Y
                    }
                };
                return n
            }(a.ZP.PersistedStore);
            q.displayName = "LayoutStore";
            q.persistKey = "LayoutStore";
            q.migrations = [function() {
                var e = L({}, l.Z.get("OverlayStore")),
                    t = e.pinnedWidgets,
                    n = e.positions,
                    r = e.sizes;
                if (5 === e.v && t) {
                    var o = H,
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
                        return U(e, 1)[0] !== H
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
                        o.push([l, N(L({}, K(S.Odu.GUILDS_TEXT)), {
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
            const X = new q(c.Z, {
                LAYOUT_CREATE: function(e) {
                    var t = e.layoutId,
                        n = e.widgets,
                        r = e.defaultResolution;
                    if (null != B[t]) return !1;
                    var o = [];
                    n.forEach((function(e, t) {
                        var n = function(e) {
                                var t = B.migrated;
                                if (null != t) {
                                    var n = !0,
                                        r = !1,
                                        o = void 0;
                                    try {
                                        for (var i, u = t.widgets[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                                            var a = i.value,
                                                l = x[a];
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
                            i = N(L({}, e), {
                                zIndex: t
                            });
                        "" === i.id && (i.id = u().v4());
                        if (null != n) {
                            i.pinned = n.pinned; - 1 !== n.anchor.left && (i.anchor = (0, A.jL)(n.anchor, r)); - 1 !== n.size.width && (i.size = (0, A.Ox)(n.size, r))
                        }
                        x = N(L({}, x), P({}, i.id, new I(i)));
                        o.push(i.id)
                    }));
                    B = N(L({}, B), P({}, t, new _({
                        id: t,
                        widgets: o
                    })))
                },
                LAYOUT_SET_PINNED: function(e) {
                    return z(e.widgetId, (function(e, t) {
                        ! function(e) {
                            x = N(L({}, x), P({}, e.id, e.set("pinned", !e.pinned)))
                        }(e)
                    }))
                },
                LAYOUT_UPDATE_WIDGET: function(e) {
                    var t = e.widgetId,
                        n = e.anchor,
                        r = e.size;
                    return z(t, (function(e, t) {
                        return function(e, t, n) {
                            x = N(L({}, x), P({}, e.id, e.merge({
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
                                    var n = x[e];
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
                    delete(x = L({}, x))[t];
                    o().forEach(B, (function(e, n) {
                        if (n !== H) {
                            var r = e.widgets.indexOf(t);
                            if (r >= 0) {
                                var o = j(e.widgets);
                                o.splice(r, 1);
                                B = N(L({}, B), P({}, n, e.set("widgets", o)))
                            }
                        }
                    }))
                },
                LAYOUT_DELETE_ALL_WIDGETS: function(e) {
                    var t = e.layoutId,
                        n = B[t];
                    if (null == n) return !1;
                    n.widgets.forEach((function(e) {
                        delete(x = L({}, x))[e]
                    }));
                    B = N(L({}, B), P({}, n.id, n.set("widgets", [])))
                },
                LAYOUT_CREATE_WIDGETS: function(e) {
                    e.widgetConfigs.forEach((function(e) {
                        var t = new I(e),
                            n = B[t.layoutId];
                        if (null == n) throw new Error("LayoutStore - handleAddWidget: Invalid layoutId");
                        t = t.set("zIndex", n.widgets.length);
                        x = N(L({}, x), P({}, t.id, t));
                        var r = j(n.widgets).concat([t.id]);
                        B = N(L({}, B), P({}, n.id, n.set("widgets", r)))
                    }))
                }
            })
        },
        352980: (e, t, n) => {
            n.d(t, {
                Z: () => q
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
                h = n(409479),
                p = n(649536),
                E = n(635012),
                _ = (n(550131), n(330768)),
                v = n(384411),
                m = n(661123),
                g = n(664625),
                y = n(61209),
                O = n(953727),
                b = n(5544),
                T = n(21372),
                I = n(567403),
                A = n(682776),
                S = n(840922),
                R = n(715107),
                C = n(464187),
                P = n(473903),
                w = n(2590);

            function L(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function D(e) {
                D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return D(e)
            }

            function M(e, t) {
                return !t || "object" !== Z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function U(e, t) {
                U = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return U(e, t)
            }

            function j(e, t) {
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
                    if ("string" == typeof e) return L(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return L(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function G(e) {
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
                    var n, r = D(e);
                    if (t) {
                        var o = D(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return M(this, n)
                }
            }
            var V = new Set,
                F = new c.Z("MessageStore");

            function B() {
                a.Z.forEach((function(e) {
                    a.Z.commit(e.mutate({
                        ready: !1,
                        loadingMore: !1
                    }))
                }));
                V.clear()
            }

            function x() {
                a.Z.forEach((function(e) {
                    e.forAll((function(e) {
                        e.timestamp.locale(v.default.locale)
                    }))
                }))
            }

            function k() {
                a.Z.forEach((function(e) {
                    var t = e.channelId;
                    null == y.Z.getChannel(t) && a.Z.clear(t)
                }))
            }

            function H() {
                a.Z.forEach((function(e) {
                    a.Z.commit(e.reset(e.map((function(e) {
                        return e.set("blocked", S.Z.isBlocked(e.author.id))
                    }))))
                }))
            }

            function Y(e) {}

            function z(e) {
                var t = e.type,
                    n = e.channelId,
                    r = e.messageId,
                    o = e.userId,
                    i = e.emoji,
                    u = e.burst,
                    l = a.Z.get(n);
                if (null == l) return !1;
                if (!(0, _.sm)(e)) return !1;
                var c = g.default.getId() === o;
                l = l.update(r, (function(n) {
                    if ("MESSAGE_REACTION_ADD" === t) {
                        var r = e.colors;
                        return n.addReaction(i, c, o, r, u)
                    }
                    return n.removeReaction(i, c, u)
                }));
                a.Z.commit(l)
            }

            function W(e) {
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
                    "MESSAGE_SEND_FAILED_AUTOMOD" === t && (e = e.set("flags", (0, m.pj)(e.flags, w.iLy.EPHEMERAL)));
                    return e
                }));
                a.Z.commit(u)
            }
            var K = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && U(e, t)
                }(n, e);
                var t = G(n);

                function n() {
                    N(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(P.default, y.Z, O.Z, T.ZP, v.default, R.Z, C.Z, I.Z, S.Z, b.ZP);
                    this.syncWith([d.Z], (function() {}))
                };
                r.getMessages = function(e) {
                    if (d.Z.hasViewingRoles()) {
                        var t = y.Z.getChannel(e),
                            n = null == t ? void 0 : t.getGuildId();
                        if (d.Z.isViewingRoles(n) && !A.Z.can(w.Plq.VIEW_CHANNEL, t)) return new a.Z(e)
                    }
                    return a.Z.getOrCreate(e)
                };
                r.getMessage = function(e, t) {
                    return a.Z.getOrCreate(e).get(t)
                };
                r.getLastEditableMessage = function(e) {
                    var t = P.default.getCurrentUser();
                    return o()(this.getMessages(e).toArray()).reverse().find((function(e) {
                        return (0, E.Z)(e, null == t ? void 0 : t.id)
                    }))
                };
                r.getLastCommandMessage = function(e) {
                    var t = P.default.getCurrentUser();
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
                    var t = P.default.getCurrentUser();
                    return null != this.getMessages(e).findNewest((function(e) {
                        return e.author.id === (null == t ? void 0 : t.id)
                    }))
                };
                r.__getLocalVars = function() {
                    return {
                        uploadingMessageNonces: V,
                        logger: F
                    }
                };
                return n
            }(i.ZP.Store);
            K.displayName = "MessageStore";
            const q = new K(u.Z, {
                BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
                    var t = e.changesByChannelId;
                    for (var n in t) {
                        var r = a.Z.get(n);
                        if (null != r) {
                            r.cached || !0 ? r.mergeDelta(t[n].new_messages, t[n].modified_messages, t[n].deleted_message_ids) : F.log("Skipping background message sync for ".concat(n, " cached:").concat(r.cached, " ") + "ready:".concat(r.ready, " hasMoreAfter:").concat(r.hasMoreAfter, " ") + "isConnected:".concat(false))
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
                            var u = j(o.value, 2),
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
                    F.log("Truncating messages for ".concat(t, " bottom:").concat(n, " top:").concat(r));
                    var o = a.Z.getOrCreate(t);
                    o = o.truncate(n, r);
                    a.Z.commit(o)
                },
                CLEAR_MESSAGES: function(e) {
                    var t = e.channelId;
                    F.log("Clearing messages for ".concat(t));
                    a.Z.clear(t);
                    V.clear()
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message,
                        r = e.isPushNotification,
                        o = a.Z.getOrCreate(t);
                    if (r) {
                        F.log("Inserting message tapped on from a push notification", n);
                        a.Z.commit(o.receivePushNotification(n))
                    } else {
                        if (!o.ready) return !1;
                        if ((0, h.Dn)() && null != n.nonce && n.state !== w.yb.SENDING && V.has(n.nonce)) {
                            o = o.remove(n.nonce);
                            V.delete(n.nonce)
                        }
                        o = o.receiveMessage(n, O.Z.isAtBottom(t));
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
                        (e = e.set("state", w.yb.SEND_FAILED)).isCommandType() && (e = (e = e.set("interactionError", null != r ? r : "")).set("flags", (0, m.pj)(e.flags, w.iLy.EPHEMERAL)));
                        return e
                    }));
                    a.Z.commit(o)
                },
                MESSAGE_SEND_FAILED_AUTOMOD: W,
                MESSAGE_EDIT_FAILED_AUTOMOD: W,
                MESSAGE_UPDATE: function(e) {
                    var t = e.message.id,
                        n = e.message.channel_id,
                        r = a.Z.getOrCreate(n);
                    if (null == r || !r.has(t)) return !1;
                    r = r.update(t, (function(t) {
                        return (0, p.wi)(t, e.message)
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
                    V.delete(t)
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
                        V.delete(e)
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
                USER_SETTINGS_PROTO_UPDATE: x,
                I18N_LOAD_SUCCESS: x,
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
                RELATIONSHIP_ADD: H,
                RELATIONSHIP_REMOVE: H,
                GUILD_MEMBERS_CHUNK: Y,
                THREAD_MEMBER_LIST_UPDATE: Y,
                MESSAGE_REACTION_ADD: z,
                MESSAGE_REACTION_ADD_MANY: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.reactions,
                        o = a.Z.get(t);
                    if (null == o) return !1;
                    o = o.update(n, (function(e) {
                        var t;
                        return e.addReactionBatch(r, null === (t = P.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)
                    }));
                    a.Z.commit(o)
                },
                MESSAGE_REACTION_REMOVE: z,
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
                    V.clear()
                },
                UPLOAD_START: function(e) {
                    var t = e.message;
                    null != t.nonce && V.add(t.nonce)
                },
                UPLOAD_FAIL: function(e) {
                    var t = e.channelId,
                        n = e.messageRecord,
                        r = null == n ? void 0 : n.nonce;
                    if ((0, h.Dn)() && null != r && V.has(r)) {
                        var o = a.Z.getOrCreate(t),
                            i = o.get(r);
                        if (null == i) return;
                        o = (o = o.remove(r)).merge([i]);
                        V.delete(r);
                        a.Z.commit(o)
                    }
                }
            })
        },
        255592: (e, t, n) => {
            n.d(t, {
                Z: () => P
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
                h = n(473708);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function v(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
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

            function g(e) {
                return function(e) {
                    if (Array.isArray(e)) return p(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = function(e) {
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
            var b = new Map,
                T = [];

            function I(e, t) {
                var n, r;
                return null !== (r = null === (n = A(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== r ? r : T
            }

            function A(e) {
                var t;
                return null !== (t = b.get(e)) && void 0 !== t ? t : new Map
            }

            function S(e, t, n) {
                var r = A(e);
                r.set(t, n);
                b.set(e, r)
            }
            var R = function(e) {
                var t, n = e.files,
                    r = e.channelId,
                    i = e.showLargeMessageDialog,
                    u = e.draftType,
                    s = g(I(r, u));
                if (!0 === (null === (t = l.getCurrentConfig({
                        location: "373489_1"
                    }, {
                        autoTrackExposure: !1
                    })) || void 0 === t ? void 0 : t.enabled) && s.length + n.length > d.dN1) a.Z.show({
                    title: h.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
                    body: h.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
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
            };
            var C = function(e) {
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
                    E(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getFirstUpload = function(e, t) {
                    var n = I(e, t);
                    return n.length > 0 ? n[0] : null
                };
                r.hasAdditionalUploads = function(e, t) {
                    var n;
                    return (null !== (n = I(e, t).length) && void 0 !== n ? n : 0) > 1
                };
                r.getUploads = function(e, t) {
                    return I(e, t)
                };
                r.getUploadCount = function(e, t) {
                    var n;
                    return null !== (n = I(e, t).length) && void 0 !== n ? n : 0
                };
                r.getUpload = function(e, t, n) {
                    return I(e, n).find((function(e) {
                        return e.id === t
                    }))
                };
                r.findUpload = function(e, t, n) {
                    return I(e, t).find(n)
                };
                r.__getLocalVars = function() {
                    return {
                        _uploads: b,
                        EMPTY: T,
                        handleAddFiles: R
                    }
                };
                return n
            }(i.ZP.Store);
            C.displayName = "UploadAttachmentStore";
            const P = new C(u.Z, {
                UPLOAD_ATTACHMENT_POP_FILE: function(e) {
                    var t = e.channelId,
                        n = g(I(t, f.d.ChannelMessage));
                    n.shift();
                    S(t, f.d.ChannelMessage, n)
                },
                UPLOAD_ATTACHMENT_ADD_FILES: R,
                UPLOAD_ATTACHMENT_UPDATE_FILE: function(e) {
                    var t = e.channelId,
                        n = e.id,
                        r = e.filename,
                        o = e.description,
                        i = e.spoiler,
                        u = e.thumbnail,
                        a = e.draftType;
                    S(t, a, g(I(t, a)).map((function(e) {
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
                        a = g(I(r, i));
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
                        o = g(I(t, r));
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
                        i = g(I(t, o)).filter((function(e) {
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
            n.d(t, {
                Z: () => Q
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
                h = n(117112),
                p = n(464187),
                E = n(120415),
                _ = n(310126),
                v = n(226810),
                m = n(901654),
                g = n(2590),
                y = n(122253);

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function I(e) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return I(e)
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        T(e, t, n[t])
                    }))
                }
                return e
            }

            function S(e, t) {
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

            function R(e, t) {
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

            function C(e, t) {
                return !t || "object" !== w(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function P(e, t) {
                P = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return P(e, t)
            }
            var w = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function L(e) {
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
                    var n, r = I(e);
                    if (t) {
                        var o = I(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return C(this, n)
                }
            }
            var N = {
                    selectedGuildId: null,
                    selectedChannelId: null,
                    displayUserMode: g.OYC.ALWAYS,
                    displayNameMode: g.wC$.ALWAYS,
                    avatarSizeMode: g.ipw.LARGE,
                    notificationPositionMode: g._vf.TOP_LEFT,
                    textChatNotifications: g.Ypu.ENABLED,
                    disableExternalLinkAlert: !1,
                    disablePinTutorial: !1,
                    textWidgetOpacity: y.wF.LOWER
                },
                D = null,
                M = {},
                U = null,
                j = new Set,
                Z = !1,
                G = null,
                V = !1,
                F = !1,
                B = new Set,
                x = !1;

            function k(e) {
                var t = M[e];
                null == t && (t = M[e] = A({}, N));
                return t
            }
            var H = A({}, N),
                Y = new Set(["CHANNEL_SELECT", "VOICE_CHANNEL_SELECT", "CHANNEL_COLLAPSE", "CATEGORY_COLLAPSE", "CATEGORY_EXPAND", "AUDIO_TOGGLE_SELF_MUTE", "AUDIO_TOGGLE_SELF_DEAF", "AUDIO_TOGGLE_LOCAL_MUTE", "AUDIO_SET_LOCAL_VIDEO_DISABLED", "AUDIO_SET_LOCAL_VOLUME", "AUDIO_SET_INPUT_DEVICE", "AUDIO_SET_INPUT_VOLUME", "AUDIO_SET_OUTPUT_VOLUME", "AUDIO_SET_OUTPUT_DEVICE", "AUDIO_SET_MODE", "OVERLAY_SELECT_CALL", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_UI_LOCKED", "OVERLAY_SET_INPUT_LOCKED", "OVERLAY_SET_TEXT_WIDGET_OPACITY", "OVERLAY_SET_NOT_IDLE", "OVERLAY_CALL_PRIVATE_CHANNEL", "OVERLAY_SET_DISPLAY_NAME_MODE", "OVERLAY_SET_DISPLAY_USER_MODE", "OVERLAY_SET_AVATAR_SIZE_MODE", "OVERLAY_SET_NOTIFICATION_POSITION_MODE", "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE", "OVERLAY_JOIN_GAME", "LAYOUT_UPDATE_WIDGET", "LAYOUT_SET_TOP_WIDGET", "LAYOUT_SET_PINNED", "LAYOUT_CREATE", "CHANNEL_PRELOAD", "CALL_DELETE", "CHANNEL_ACK", "SKU_PURCHASE_MODAL_OPEN", "SKU_PURCHASE_MODAL_CLOSE", "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS", "SKU_PURCHASE_START", "SKU_PURCHASE_SUCCESS", "SKU_PURCHASE_FAIL", "SKU_PURCHASE_SHOW_CONFIRMATION_STEP", "SKU_PURCHASE_CLEAR_ERROR", "PURCHASE_CONFIRMATION_MODAL_OPEN", "PURCHASE_CONFIRMATION_MODAL_CLOSE", "ACTIVITY_INVITE_MODAL_CLOSE", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "OVERLAY_ACTIVATE_REGION", "OVERLAY_DEACTIVATE_ALL_REGIONS", "INVITE_MODAL_CLOSE", "LAYOUT_DELETE_WIDGET", "LAYOUT_DELETE_ALL_WIDGETS", "LAYOUT_CREATE_WIDGETS", "GIFT_CODE_REDEEM", "GIFT_CODE_REDEEM_SUCCESS", "GIFT_CODE_REDEEM_FAILURE", "PREMIUM_REQUIRED_MODAL_OPEN", "PREMIUM_REQUIRED_MODAL_CLOSE", "PREMIUM_PAYMENT_MODAL_OPEN", "PREMIUM_PAYMENT_MODAL_CLOSE", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS", "PREMIUM_PAYMENT_ERROR_CLEAR", "PREMIUM_PAYMENT_UPDATE_FAIL", "PREMIUM_PAYMENT_UPDATE_SUCCESS", "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", "STREAM_START", "STREAM_STOP", "STREAM_CLOSE", "HOTSPOT_HIDE", "AUDIO_SET_NOISE_CANCELLATION", "AUDIO_SET_NOISE_SUPPRESSION", "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY"]);

            function z(e) {
                "OVERLAY_INITIALIZE" === e.type && function(e) {
                    if (null == e.version && 1 === v.Tq) return !0;
                    if (e.version === v.Tq) return !0;
                    i.Z.dispatch({
                        type: "OVERLAY_INCOMPATIBLE_APP"
                    });
                    (0, a.zP)();
                    return !1
                }(e) && (F = !0);
                if (F) switch (e.type) {
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
                        i.Z.dispatch(S(A({}, e), {
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
                        i.Z.dispatch(S(A({}, e), {
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

            function W() {
                if (!__OVERLAY__) return !1;
                var e = D === (0, v.QF)(),
                    t = j.has((0, v.QF)()) || B.size > 0;
                e && t ? (0, u.T_)(window, !0) : (0, u.T_)(window, !1)
            }

            function K() {
                if (D !== (0, v.QF)()) return !1;
                B.clear()
            }

            function q(e) {
                var t = (0, v.QF)();
                if (null == e.pid || e.pid === t) switch (e.type) {
                    case g.BmY.STORAGE_SYNC:
                        r.ZP.PersistedStore.initializeAll(e.states);
                        break;
                    case g.BmY.DISPATCH:
                        if (null != e.payloads) {
                            V = !0;
                            e.payloads.forEach((function(e) {
                                return z(e)
                            }));
                            V = !1
                        }
                }
            }
            var X = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && P(e, t)
                }(n, e);
                var t = L(n);

                function n() {
                    O(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(s.default);
                    this.syncWith([s.default], (function() {
                        var e = s.default.getId();
                        H = null != e ? k(e) : A({}, N)
                    }));
                    if (__OVERLAY__) {
                        E.FB && (G = _.ZP.requireModule("discord_overlay2"));
                        j.delete((0, v.QF)())
                    }
                    if (null != e) {
                        M = e;
                        var t = s.default.getId();
                        if (null != t) {
                            null == (H = k(t)).textChatNotifications && (H.textChatNotifications = N.textChatNotifications);
                            null == H.textWidgetOpacity && (H.textWidgetOpacity = N.textWidgetOpacity)
                        }
                    }
                };
                r.getState = function() {
                    return M
                };
                r.isUILocked = function(e) {
                    return !j.has(e)
                };
                r.isInstanceUILocked = function() {
                    if (!__OVERLAY__) throw new Error("OverlayStore: App instance should never call .isInstanceUILocked()");
                    return !j.has((0, v.QF)())
                };
                r.isInstanceFocused = function() {
                    if (!__OVERLAY__) throw new Error("OverlayStore: App instance should never call .isInstanceFocused()");
                    return D === (0, v.QF)()
                };
                r.isFocused = function(e) {
                    return D === e
                };
                r.isPinned = function(e) {
                    var t = h.Z.getLayout(v.qU);
                    if (null != t) {
                        return null != t.widgets.find((function(t) {
                            var n = h.Z.getWidget(t);
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
                    return U
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
                    return H.notificationPositionMode === g._vf.DISABLED ? g.Ypu.DISABLED : H.textChatNotifications
                };
                r.getDisableExternalLinkAlert = function() {
                    return H.disableExternalLinkAlert
                };
                r.getFocusedPID = function() {
                    return D
                };
                r.getActiveRegions = function() {
                    return B
                };
                r.getTextWidgetOpacity = function() {
                    return H.textWidgetOpacity
                };
                r.isPreviewingInGame = function() {
                    return x
                };
                r.__getLocalVars = function() {
                    return {
                        defaultSettings: N,
                        focusedPID: D,
                        settings: M,
                        selectedCallId: U,
                        unlockedOverlayPIDs: j,
                        incompatibleApp: Z,
                        overlay: G,
                        isDispatching: V,
                        hasReceivedInitialPayload: F,
                        activeRegions: B,
                        isPreviewingInGame: x,
                        currentUserSettings: H,
                        interceptedActionTypes: Y
                    }
                };
                ! function(e, t, n) {
                    t && b(e.prototype, t);
                    n && b(e, n)
                }(n, [{
                    key: "initialized",
                    get: function() {
                        return F
                    }
                }, {
                    key: "incompatibleApp",
                    get: function() {
                        return Z
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            X.displayName = "OverlayStore";
            X.persistKey = "OverlayStoreV2";
            X.migrations = [function() {
                var e = A({}, o.Z.get("OverlayStore")),
                    t = (e.pinnedWidgets, e.positions, e.sizes, e.v),
                    n = R(e, ["pinnedWidgets", "positions", "sizes", "v"]);
                return A({}, N, 5 === t ? n : null)
            }, function(e) {
                var t = s.default.getId();
                return null == e || null == t ? {} : T({}, t, A({}, e))
            }];
            const Q = new X(i.Z, {
                LOGOUT: function(e) {
                    e.isSwitchingAccount || (M = {})
                },
                MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
                    e.userId in M && delete M[e.userId]
                },
                CONNECTION_CLOSED: function() {
                    j.clear()
                },
                OVERLAY_START_SESSION: function() {
                    i.Z.addInterceptor((function(e) {
                        if (V) return !1;
                        var t = Y.has(e.type);
                        if (t) switch (e.type) {
                            case "CHANNEL_SELECT":
                                var n = e.guildId,
                                    r = e.channelId;
                                t = !1;
                                if (null == r) break;
                                (0, a.lW)({
                                    type: g.BmY.DISPATCH,
                                    pid: (0, v.QF)(),
                                    token: (0, v.Ht)(),
                                    payloads: [{
                                        type: "CHANNEL_PRELOAD",
                                        guildId: n === g.ME ? null : n,
                                        channelId: r,
                                        context: g.e3s
                                    }, {
                                        type: "OVERLAY_SELECT_CHANNEL",
                                        guildId: n,
                                        channelId: r
                                    }]
                                });
                                break;
                            case "OVERLAY_SET_DISPLAY_NAME_MODE":
                            case "OVERLAY_SET_DISPLAY_USER_MODE":
                            case "OVERLAY_SET_AVATAR_SIZE_MODE":
                            case "OVERLAY_SET_NOTIFICATION_POSITION_MODE":
                            case "OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE":
                            case "OVERLAY_SET_UI_LOCKED":
                            case "OVERLAY_SET_INPUT_LOCKED":
                            case "OVERLAY_SET_TEXT_WIDGET_OPACITY":
                            case "LAYOUT_UPDATE_WIDGET":
                            case "LAYOUT_SET_PINNED":
                            case "LAYOUT_SET_TOP_WIDGET":
                            case "LAYOUT_CREATE":
                            case "CATEGORY_EXPAND":
                            case "CATEGORY_COLLAPSE":
                            case "VOICE_CHANNEL_SELECT":
                            case "CHANNEL_ACK":
                            case "AUDIO_TOGGLE_SELF_MUTE":
                            case "AUDIO_TOGGLE_SELF_DEAF":
                            case "AUDIO_TOGGLE_LOCAL_MUTE":
                            case "AUDIO_SET_LOCAL_VIDEO_DISABLED":
                            case "AUDIO_SET_LOCAL_VOLUME":
                            case "AUDIO_SET_INPUT_DEVICE":
                            case "AUDIO_SET_INPUT_VOLUME":
                            case "AUDIO_SET_OUTPUT_VOLUME":
                            case "AUDIO_SET_OUTPUT_DEVICE":
                            case "AUDIO_SET_MODE":
                            case "LOAD_MESSAGES_SUCCESS":
                            case "LOAD_MESSAGES_FAILURE":
                            case "LOAD_MESSAGES":
                            case "CHANNEL_PRELOAD":
                            case "SKU_PURCHASE_MODAL_OPEN":
                            case "SKU_PURCHASE_MODAL_CLOSE":
                            case "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS":
                            case "SKU_PURCHASE_START":
                            case "SKU_PURCHASE_SUCCESS":
                            case "SKU_PURCHASE_FAIL":
                            case "SKU_PURCHASE_SHOW_CONFIRMATION_STEP":
                            case "SKU_PURCHASE_CLEAR_ERROR":
                            case "PURCHASE_CONFIRMATION_MODAL_OPEN":
                            case "PURCHASE_CONFIRMATION_MODAL_CLOSE":
                            case "OVERLAY_ACTIVATE_REGION":
                            case "OVERLAY_DEACTIVATE_ALL_REGIONS":
                            case "INVITE_MODAL_CLOSE":
                            case "LAYOUT_DELETE_WIDGET":
                            case "LAYOUT_DELETE_ALL_WIDGETS":
                            case "LAYOUT_CREATE_WIDGETS":
                            case "GIFT_CODE_REDEEM":
                            case "GIFT_CODE_REDEEM_SUCCESS":
                            case "GIFT_CODE_REDEEM_FAILURE":
                            case "PREMIUM_REQUIRED_MODAL_OPEN":
                            case "PREMIUM_REQUIRED_MODAL_CLOSE":
                            case "PREMIUM_PAYMENT_MODAL_OPEN":
                            case "PREMIUM_PAYMENT_MODAL_CLOSE":
                            case "PREMIUM_PAYMENT_SUBSCRIBE_FAIL":
                            case "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS":
                            case "PREMIUM_PAYMENT_SUBSCRIBE_START":
                            case "PREMIUM_PAYMENT_ERROR_CLEAR":
                            case "PREMIUM_PAYMENT_SELECT_PLAN":
                            case "PREMIUM_PAYMENT_UPDATE_FAIL":
                            case "PREMIUM_PAYMENT_UPDATE_SUCCESS":
                            case "BILLING_SUBSCRIPTION_UPDATE_SUCCESS":
                            case "STREAM_START":
                            case "STREAM_CLOSE":
                            case "MEDIA_ENGINE_SET_GO_LIVE_SOURCE":
                            case "HOTSPOT_HIDE":
                            case "AUDIO_SET_NOISE_CANCELLATION":
                            case "AUDIO_SET_NOISE_SUPPRESSION":
                                t = !1;
                            default:
                                (0, a.lW)({
                                    type: g.BmY.DISPATCH,
                                    pid: (0, v.QF)(),
                                    token: (0, v.Ht)(),
                                    payloads: [e]
                                })
                        }
                        return t
                    }));
                    (0, a.Ty)(q, (0, v.Ht)());
                    (0, a.$j)();
                    (0, a.lW)({
                        type: g.BmY.CONNECT,
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
                    null == e && null == t && (e = p.Z.getGuildId());
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
                    W()
                },
                OVERLAY_SELECT_CHANNEL: function(e) {
                    var t = e.guildId,
                        n = e.channelId;
                    H.selectedGuildId = t;
                    H.selectedChannelId = n
                },
                OVERLAY_SELECT_CALL: function(e) {
                    var t = e.callId;
                    U = t
                },
                CALL_DELETE: function() {
                    U = null
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
                    Z = !0
                },
                OVERLAY_SET_UI_LOCKED: function(e) {
                    var t = e.locked,
                        n = e.pid;
                    t ? j.delete(n) : j.add(n);
                    K();
                    W();
                    x = !1
                },
                OVERLAY_ACTIVATE_REGION: function(e) {
                    var t = e.region;
                    if (D !== (0, v.QF)()) return !1;
                    if (B.has(t)) return !1;
                    B.add(t)
                },
                OVERLAY_DEACTIVATE_ALL_REGIONS: K,
                OVERLAY_SET_PREVIEW_IN_GAME_MODE: function(e) {
                    x = e.isPreviewingInGame
                },
                WINDOW_RESIZED: function() {
                    if (__OVERLAY__) {
                        var e = m.Z.windowSize();
                        (0, v.Te)(e) || (x = !1)
                    }
                }
            })
        },
        95508: (e, t, n) => {
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
            n.d(t, {
                kC: () => m,
                o3: () => g,
                dY: () => y,
                cS: () => O,
                s$: () => b,
                l3: () => T
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
                h = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
                p = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
                E = new Set([c.hBH.AUTO_MODERATION_MESSAGE, c.hBH.AUTO_MODERATION_NOTIFICATION, c.hBH.RICH, c.hBH.SAFETY_POLICY_NOTICE]);

            function _(e) {
                var t = e.width,
                    n = e.height;
                return t > 0 && n > 0
            }

            function v(e) {
                return {
                    url: e.url,
                    proxyURL: e.proxy_url,
                    width: e.width,
                    height: e.height
                }
            }

            function m(e, t, n) {
                var r = {
                    id: o().uniqueId("embed_"),
                    url: n.url,
                    type: n.type,
                    rawTitle: n.title,
                    rawDescription: n.description,
                    referenceId: n.reference_id
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
                if (null != n.thumbnail && _(n.thumbnail)) switch (r.type) {
                    case c.hBH.ARTICLE:
                    case c.hBH.IMAGE:
                        r.image = v(n.thumbnail);
                        break;
                    default:
                        r.thumbnail = v(n.thumbnail)
                }
                null != n.image && _(n.image) && (r.image = v(n.image));
                if (null != n.video) {
                    null == r.thumbnail && null != n.video.proxy_url && _(n.video) && (r.thumbnail = {
                        width: n.video.width,
                        height: n.video.height,
                        url: "".concat(n.video.proxy_url, "?format=jpeg")
                    });
                    null != r.thumbnail && _(n.video) && function(e, t, n) {
                        if (null != t && f.test(t.name) || d.test(n.url)) return !1;
                        var r = null != n.proxy_url || /^https:/i.test(n.url);
                        l.Z.extractTimestamp(e) < 1492472454139 && (r = r && null != t && h.test(t.name));
                        return r
                    }(t, n.provider, n.video) && (r.video = v(n.video))
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

            function y(e) {
                var t = e.image,
                    n = e.video,
                    r = e.type,
                    o = e.author,
                    i = e.rawTitle;
                return (null != t || null != n) && (r === c.hBH.GIFV || r !== c.hBH.RICH && null == o && null == i)
            }

            function O(e) {
                if (!e.author.isClyde() || 0 === e.embeds.length) return !1;
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = e.embeds[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        if (b(o.value)) return !0
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

            function b(e) {
                var t = null != e.fields && 3 === e.fields.length && "Thought" === e.fields[0].rawName && "Tool" === e.fields[1].rawName && "Result" === e.fields[2].rawName;
                return e.type === c.hBH.RICH && (e.rawTitle === s.x.THOUGHT_EMBED_TITLE || t)
            }

            function T(e) {
                return e.type === c.hBH.ARTICLE && null != e.url && p.test(e.url)
            }
        },
        66121: (e, t, n) => {
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
                uq: () => h
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
                    h = t.width,
                    p = t.height,
                    E = c(s(l({
                        top: r + d,
                        left: o + f,
                        bottom: null,
                        right: null
                    }, n.width, n.height, "number" == typeof h ? h : 0, "number" == typeof p ? p : 0)));
                return [u(E, n), a(t, n)]
            }

            function h(e, t, n) {
                var r = e.top,
                    o = e.right,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        x: 0,
                        y: 0
                    },
                    f = i.x,
                    d = i.y,
                    h = t.width,
                    p = t.height,
                    E = c(s(l({
                        top: r + d,
                        left: null,
                        bottom: null,
                        right: o - f
                    }, n.width, n.height, "number" == typeof h ? h : 0, "number" == typeof p ? p : 0)));
                return [u(E, n), a(t, n)]
            }
        },
        506474: (e, t, n) => {
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
        202181: (e, t, n) => {
            n.d(t, {
                fn: () => o,
                Dj: () => u,
                Pr: () => a,
                rB: () => l,
                NO: () => c,
                uF: () => s
            });
            var r = n(296602);

            function o() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.find((function(e) {
                    return null != e && i(e)
                }))
            }

            function i(e) {
                return null != e.requestFullscreen || null != e.webkitRequestFullscreen || e.webkitSupportsFullscreen || null != e.mozRequestFullScreen || null != e.msRequestFullscreen
            }

            function u(e) {
                "function" == typeof e.requestFullscreen ? e.requestFullscreen() : "function" == typeof e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : "function" == typeof e.webkitEnterFullscreen ? e.webkitEnterFullscreen() : "function" == typeof e.mozRequestFullScreen ? e.mozRequestFullScreen() : "function" == typeof e.msRequestFullscreen ? e.msRequestFullscreen() : new r.Z("FullScreenUtils").warn("Fullscreen API is not supported.")
            }

            function a(e, t) {
                var n = null != t ? t : document;
                l(null, n) && ("function" == typeof n.exitFullscreen ? n.exitFullscreen() : "function" == typeof n.webkitExitFullscreen ? n.webkitExitFullscreen() : "function" == typeof e.webkitExitFullscreen ? e.webkitExitFullscreen() : "function" == typeof n.mozCancelFullScreen ? n.mozCancelFullScreen() : "function" == typeof n.msExitFullscreen ? n.msExitFullscreen() : new r.Z("FullScreenUtils").warn("Fullscreen API is not supported."))
            }

            function l(e, t) {
                var n = null != t ? t : document;
                return Boolean(null != n.fullscreenElement || null != n.mozFullScreenElement || null != n.webkitFullscreenElement || null != n.msFullscreenElement || null != e && e.webkitDisplayingFullscreen)
            }
            var c = function() {
                if ("undefined" != typeof document) {
                    var e = document.createElement("video");
                    if ("function" == typeof e.requestFullscreen) return "fullscreenchange";
                    if ("function" == typeof e.webkitRequestFullscreen) return "webkitfullscreenchange";
                    if ("function" == typeof e.webkitEnterFullscreen) return "webkitendfullscreen";
                    if ("function" == typeof e.mozRequestFullScreen) return "mozfullscreenchange";
                    if ("function" == typeof e.msRequestFullscreen) return "msfullscreenchange"
                } else console.warn("FullScreenUtils has been imported in a non-web environment");
                return "fullscreenchange"
            }();

            function s(e, t) {
                e.addEventListener(c, t);
                e.addEventListener("webkitfullscreenchange", t);
                return function() {
                    e.removeEventListener(c, t);
                    e.removeEventListener("webkitfullscreenchange", t)
                }
            }
        },
        226810: (e, t, n) => {
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
        }
    }
]);
//# sourceMappingURL=869d7c08534132390be9.js.map