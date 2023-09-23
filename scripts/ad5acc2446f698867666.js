"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [93922], {
        361610: (e, n, t) => {
            t.d(n, {
                Z: () => i
            });
            var r = t(744564);
            const i = {
                toggleMembersSection: function() {
                    r.Z.dispatch({
                        type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
                    })
                },
                toggleProfilePanelSection: function() {
                    r.Z.dispatch({
                        type: "PROFILE_PANEL_TOGGLE_SECTION"
                    })
                },
                toggleSummariesSection: function() {
                    r.Z.dispatch({
                        type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
                    })
                }
            }
        },
        245802: (e, n, t) => {
            t.d(n, {
                Z: () => r
            });
            const r = (0, t(260561).B)({
                kind: "guild",
                id: "2023-02_voice_channel_statuses",
                label: "Voice Channel Status Guild Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable viewing and setting voice channel statuses for guild",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "A/A test, identical to treatment 1",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        400394: (e, n, t) => {
            t.d(n, {
                IL: () => o,
                FI: () => a
            });
            var r = t(930948),
                i = t(2590),
                o = {
                    binds: ["mod+return"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        if (r.S.hasSubscribers(i.CkL.CALL_ACCEPT)) {
                            r.S.dispatch(i.CkL.CALL_ACCEPT);
                            return !1
                        }
                    }
                },
                a = {
                    binds: ["ctrl+'", "ctrl+shift+'"],
                    comboKeysBindGlobal: !0,
                    action: function(e) {
                        if (r.S.hasSubscribers(i.CkL.CALL_START)) {
                            r.S.dispatch(i.CkL.CALL_START, e);
                            return !1
                        }
                    }
                }
        },
        941248: (e, n, t) => {
            t.d(n, {
                tQ: () => m,
                x5: () => R,
                Nx: () => P,
                On: () => Z,
                $c: () => D
            });
            var r = t(487517),
                i = t(773411),
                o = t(848465),
                a = t(996344),
                u = t(48315),
                l = t(628486),
                s = t(968449),
                c = t(761814),
                d = t(7114),
                f = t(796909),
                h = t(72580),
                E = t(535156),
                p = t(2590),
                C = t(897196);

            function _(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function S(e) {
                return function(e) {
                    if (Array.isArray(e)) return _(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return _(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function() {
                var e = a.Z.getMessageRequestsCount() > 0 || u.Z.getSpamChannelsCount() > 0;
                return [p.Z5c.FRIENDS, c.Z.hasLibraryApplication() && !s.bm.getSetting() ? p.Z5c.APPLICATION_LIBRARY : null, p.Z5c.APPLICATION_STORE, e ? p.Z5c.MESSAGE_REQUESTS : null, s.Ex.getSetting() ? p.Z5c.FAMILY_CENTER : null].filter(h.lm)
            };

            function g(e, n) {
                (0, E.K)(e, n)
            }

            function I(e) {
                var n, t = l.Z.getState(),
                    r = t.channelId,
                    i = t.path,
                    o = t.basePath,
                    a = f.Z.getPrivateChannelIds(),
                    u = __OVERLAY__ ? a : S(v()).concat(S(a)),
                    s = (null == r ? (n = null != i ? i : o, v().findIndex((function(e) {
                        return n.startsWith(e)
                    }))) : null != r ? u.indexOf(r) : 0) + e;
                s >= u.length ? s = 0 : s < 0 && (s = u.length - 1);
                var c, h, C = u[s];
                v().includes(C) ? (c = C, h = d.Z.getCurrentRoute(), c === p.Z5c.APPLICATION_STORE && null != h ? (0, E.z)(h) : (0, E.z)(c)) : g(p.ME, C)
            }

            function y(e, n) {
                var t = l.Z.getState().channelId,
                    a = (0, r.Z)(n).map((function(e) {
                        return e.id
                    }));
                ((0, i.YM)(n) || (0, o.s)(n)) && a.unshift(C.oC.GUILD_HOME);
                var u, s, c = null != t ? a.indexOf(t) : -1;
                g(n, a[(u = c + e, s = a.length, u < 0 ? s - 1 : u >= s ? 0 : u)])
            }

            function A() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = l.Z.getState().guildId;
                null == n ? I(e) : y(e, n)
            }
            var O = t(784426),
                b = t(934870),
                T = t(715107),
                L = t(464187),
                N = t(120415),
                m = {
                    binds: ["alt+down"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        A();
                        return !1
                    }
                },
                R = {
                    binds: ["alt+up"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        A(-1);
                        return !1
                    }
                },
                D = {
                    binds: ["mod+alt+right"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        var e;
                        if (null != L.Z.getGuildId()) e = p.ME;
                        else {
                            var n = L.Z.getLastSelectedGuildId();
                            if (null != n) {
                                e = n;
                                (0, E.K)(n, T.Z.getChannelId(n))
                            }
                        }
                        null != e && (0, b.X)(e);
                        return !1
                    }
                },
                P = {
                    binds: (0, N.V5)() ? ["mod+["] : ["alt+left"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        (0, O.op)();
                        return !1
                    }
                },
                Z = {
                    binds: (0, N.V5)() ? ["mod+]"] : ["alt+right"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        (0, O.eH)();
                        return !1
                    }
                }
        },
        847294: (e, n, t) => {
            t.d(n, {
                f: () => T
            });
            var r = t(809784),
                i = t(247250),
                o = t(720419),
                a = t(496916),
                u = t(26468),
                l = t(566706),
                s = t(28862),
                c = t(798808),
                d = t(190624),
                f = t(841800),
                h = t(708299),
                E = t(840598),
                p = t(804185),
                C = t(284610),
                _ = t(481056),
                S = t(352980),
                v = t(179913),
                g = t(715107),
                I = t(464187),
                y = t(881532),
                A = t(901654),
                O = t(930948),
                b = t(2590),
                T = {
                    binds: ["esc", "shift+pagedown"],
                    comboKeysBindGlobal: !0,
                    action: function(e) {
                        if (A.Z.isElementFullScreen()) return !1;
                        if (O.S.hasSubscribers(b.CkL.CALL_DECLINE)) {
                            O.S.dispatch(b.CkL.CALL_DECLINE);
                            return !1
                        }
                        if (y.Z.close()) return !1;
                        if (O.S.hasSubscribers(b.CkL.MEDIA_MODAL_CLOSE)) {
                            O.S.dispatch(b.CkL.MEDIA_MODAL_CLOSE);
                            return !1
                        }
                        if ((0, r.k)(e.target)) {
                            var n = (0, u.J5)(e.target);
                            if (null == n ? void 0 : n.hasSubscribers(b.CkL.POPOUT_CLOSE)) {
                                n.dispatch(b.CkL.POPOUT_CLOSE);
                                return !1
                            }
                        }
                        if (O.S.hasSubscribers(b.CkL.CLOSE_GIF_PICKER)) {
                            O.S.dispatch(b.CkL.CLOSE_GIF_PICKER);
                            return !1
                        }
                        if (O.S.hasSubscribers(b.CkL.MODAL_CLOSE)) {
                            O.S.dispatch(b.CkL.MODAL_CLOSE);
                            return !1
                        }
                        if (O.S.hasSubscribers(b.CkL.SEARCH_RESULTS_CLOSE)) {
                            O.S.dispatch(b.CkL.SEARCH_RESULTS_CLOSE);
                            return !1
                        }
                        var t = I.Z.getGuildId(),
                            o = g.Z.getChannelId(t),
                            a = p.ZP.getSection(o) === b.ULH.SIDEBAR_CHAT ? p.ZP.getSidebarState(o) : null,
                            s = (null == a ? void 0 : a.type) === f.tI.VIEW_THREAD || (null == a ? void 0 : a.type) === f.tI.VIEW_CHANNEL ? a.channelId : null;
                        if (!1 === L(o)) return !1;
                        if (!1 === L(s)) return !1;
                        if (null != o && (null == a ? void 0 : a.type) === f.tI.CREATE_THREAD) {
                            d.Z.closeChannelSidebar(o);
                            return !1
                        }
                        var c = N(o),
                            h = N(s);
                        if (null != o && !c && !h && null != a) {
                            d.Z.closeChannelSidebar(o);
                            return !1
                        }
                        if (null != o && !c && l.Z.getChatOpen(o)) {
                            i.Z.updateChatOpen(o, !1);
                            return !1
                        }
                        O.S.dispatch(b.CkL.SCROLLTO_PRESENT);
                        return !1
                    }
                };

            function L(e) {
                if (null != e) {
                    if (_.Z.isEditingAny(e)) {
                        o.Z.endEditMessage(e);
                        return !1
                    }
                    if (null != c.Z.getPendingReply(e)) {
                        (0, s.A6)(e);
                        return !1
                    }
                    if (null != h.Z.getStickerPreview(e, C.d.ChannelMessage)) {
                        (0, E.qB)(e, C.d.ChannelMessage);
                        return !1
                    }
                }
            }

            function N(e) {
                if (null == e) return !1;
                var n = !1;
                if (S.Z.getMessages(e).hasMoreAfter) {
                    o.Z.jumpToPresent(e, b.AQB);
                    n = !0
                }
                if (v.ZP.hasUnread(e)) {
                    (0, a.In)(e);
                    n = !0
                }(0,
                    a.iV)(e);
                return n
            }
        },
        512566: (e, n, t) => {
            t.d(n, {
                l: () => d
            });
            var r = t(720419),
                i = t(33014),
                o = t(813869),
                a = t(352980),
                u = t(715107),
                l = t(464187),
                s = t(930948),
                c = t(2590),
                d = {
                    binds: ["shift+esc"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        var e = l.Z.getGuildId();
                        if (null != e && o.Z.getGuildHasUnreadIgnoreMuted(e)) {
                            (0, i.Z)([e]);
                            var n = u.Z.getChannelId(e);
                            if (null != n) {
                                a.Z.getMessages(n).hasMoreAfter ? r.Z.jumpToPresent(n, c.AQB) : s.S.dispatch(c.CkL.SCROLLTO_PRESENT)
                            }
                        }
                    }
                }
        },
        196444: (e, n, t) => {
            t.d(n, {
                O: () => a
            });
            var r = t(720419),
                i = t(179913),
                o = t(715107),
                a = {
                    binds: ["shift+pageup"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        var e = o.Z.getChannelId();
                        if (null != e) {
                            var n = i.ZP.ackMessageId(e);
                            null != n && i.ZP.getOldestUnreadTimestamp(e) > 0 && r.Z.jumpToMessage({
                                channelId: e,
                                messageId: n,
                                offset: 1,
                                context: "Keyboard Shortcut"
                            })
                        }
                        return !1
                    }
                }
        },
        327203: (e, n, t) => {
            t.d(n, {
                $: () => o
            });
            var r = t(956485),
                i = t(50433),
                o = {
                    binds: ["mod+k", "mod+t"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        i.Z.hasLayers() || (0, r.$Z)();
                        return !1
                    }
                }
        },
        153080: (e, n, t) => {
            t.d(n, {
                F: () => l
            });
            var r = t(216151),
                i = t(535156),
                o = t(563367),
                a = t(715107),
                u = t(2590),
                l = {
                    binds: ["mod+alt+left"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        if (!o.Z.isConnected()) return !1;
                        var e, n = null !== (e = o.Z.getGuildId()) && void 0 !== e ? e : u.ME,
                            t = a.Z.getChannelId(n);
                        (0, i.K)(n, t);
                        r.Z.channelListScrollTo(n, o.Z.getChannelId());
                        return !1
                    }
                }
        },
        469471: (e, n, t) => {
            t.d(n, {
                B2: () => o,
                gN: () => a
            });
            var r = t(930948),
                i = t(2590),
                o = {
                    binds: ["pageup"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        r.S.dispatchToLastSubscribed(i.CkL.SCROLL_PAGE_UP);
                        return !1
                    }
                },
                a = {
                    binds: ["pagedown"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        r.S.dispatchToLastSubscribed(i.CkL.SCROLL_PAGE_DOWN);
                        return !1
                    }
                }
        },
        678483: (e, n, t) => {
            t.d(n, {
                S: () => a
            });
            var r = t(213793),
                i = t(930948),
                o = t(2590),
                a = {
                    binds: ["mod+e"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        (0, r.hu)("emoji search");
                        i.S.dispatchToLastSubscribed(o.CkL.TOGGLE_EMOJI_POPOUT);
                        return !1
                    }
                }
        },
        520522: (e, n, t) => {
            t.d(n, {
                nq: () => _,
                X3: () => S
            });
            var r = t(496486),
                i = t.n(r),
                o = t(419051),
                a = t(825252),
                u = t(628486),
                l = t(61209),
                s = t(682776),
                c = t(715107),
                d = t(107218),
                f = t(493221),
                h = t(535156),
                E = t(2590);

            function p(e) {
                var n = u.Z.getState().guildId;
                if (null == n) return -2;
                if (n === E.I_8) return -1;
                var t = e.indexOf(n);
                return -1 === t ? -2 : t
            }
            const C = i().throttle((function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = d.Z.getFlattenedGuildIds(),
                    t = p(n); - 1 !== (t += e) || (0, a.z)(o.Z, l.Z, s.Z) || (t += e); - 3 === t && (t = n.length - 1);
                if (t >= n.length || -2 === t)(0, h.z)(f.Z.getHomeLink());
                else {
                    var r = -1 === t ? E.I_8 : n[t],
                        i = c.Z.getChannelId(r);
                    (0, h.K)(r, i === r ? null : i, !1)
                }
            }), E.aZC);
            var _ = {
                    binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
                    comboKeysBindGlobal: !0,
                    action: function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        C();
                        return !1
                    }
                },
                S = {
                    binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
                    comboKeysBindGlobal: !0,
                    action: function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        C(-1);
                        return !1
                    }
                }
        },
        877944: (e, n, t) => {
            t.d(n, {
                z: () => a
            });
            var r = t(316878),
                i = t(930948),
                o = t(2590),
                a = {
                    binds: ["return"],
                    action: function() {
                        if (!r.Z.keyboardModeEnabled && i.S.hasSubscribers(o.CkL.MODAL_SUBMIT)) {
                            i.S.dispatch(o.CkL.MODAL_SUBMIT);
                            return !1
                        }
                    }
                }
        },
        735892: (e, n, t) => {
            t.d(n, {
                U: () => C
            });
            var r = t(112268),
                i = t(316878),
                o = t(50433),
                a = t(52467),
                u = t(563367),
                l = t(930948),
                s = t(763993),
                c = t(79251),
                d = t(2590),
                f = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
                h = new Set(["Alt", "AltGraph", "CapsLock", "Control", "Fn", "FnLock", "Hyper", "Meta", "NumLock", "OS", "ScrollLock", "Shift", "Super", "Symbol", "SymbolLock"]),
                E = new Set(["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "Accept", "ContextMenu", "Find", "ZoomIn", "ZoomOut"]),
                p = new Set(["ChannelDown", "ChannelUp", "MediaFastForward", "MediaPause", "MediaPlay", "MediaPlayPause", "MediaRecord", "MediaRewind", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "AudioBalanceLeft", "AudioBalanceRight", "AudioBassDown", "AudioBassBoostDown", "AudioBassBoostToggle", "AudioBassBoostUp", "AudioBassUp", "AudioFaderFront", "AudioFaderReader", "AudioSurroundModeNext", "AudioTrebleDown", "AudioTreblUp", "AudioVolumeDown", "AudioVolumeMute", "AudioVolumeUp", "VolumeUp", "VolumeDown", "VolumeMute"]),
                C = {
                    binds: ["any-character"],
                    keydown: function(e, n) {
                        var t, C = null === (t = (0, s.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                        if ((0, s.VG)(C)) return !1;
                        if (r.fC.isActive()) return !1;
                        if (h.has(n)) return !1;
                        if (E.has(n)) return !1;
                        if (p.has(n)) return !1;
                        var _ = null != C && "BODY" === C.tagName;
                        if (i.Z.keyboardModeEnabled && !_ && !/^[a-zA-Z0-9]$/.test(n)) return !1;
                        if (l.S.hasSubscribers(d.CkL.MODAL_CLOSE)) return !1;
                        if (o.Z.hasLayers()) return !1;
                        if ("Tab" === n && l.S.hasSubscribers(d.CkL.TEXTAREA_FOCUS) && null != document.querySelector('[data-can-focus="true"]')) {
                            e.preventDefault();
                            l.S.dispatch(d.CkL.TEXTAREA_FOCUS);
                            return !1
                        }
                        if (u.Z.isConnected() && a.Z.getMode() === d.pM4.PUSH_TO_TALK && !a.Z.isSelfMute() && Object.values(a.Z.getShortcuts()).map(c.d2).some((function(n) {
                                return n.map((function(e) {
                                    return e.keyCode
                                })).includes(e.keyCode)
                            }))) return !1;
                        e.metaKey || e.ctrlKey || f.has(n) || l.S.dispatchToLastSubscribed(d.CkL.TEXTAREA_FOCUS)
                    }
                }
        },
        436703: (e, n, t) => {
            t.d(n, {
                iN: () => i,
                oV: () => o
            });
            var r = t(656645),
                i = {
                    binds: ["mod+shift+m"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        r.Z.toggleSelfMute();
                        return !1
                    }
                },
                o = {
                    binds: ["mod+shift+d"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        r.Z.toggleSelfDeaf();
                        return !1
                    }
                }
        },
        886076: (e, n, t) => {
            t.d(n, {
                u: () => l
            });
            var r = t(786522),
                i = t(968968),
                o = t(5544),
                a = t(464187),
                u = t(2590),
                l = {
                    binds: ["mod+shift+a"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        var e = a.Z.getGuildId();
                        if (null == e) return !1;
                        o.ZP.getChannels(e)[u.d4z.GUILD_CATEGORY].some((function(e) {
                            var n = e.channel;
                            return "null" !== n.id && !i.Z.isCollapsed(n.id)
                        })) ? (0, r.N5)(e) : (0, r.lc)(e);
                        return !1
                    }
                }
        },
        452006: (e, n, t) => {
            t.d(n, {
                _: () => a
            });
            var r = t(882723),
                i = t(744564);
            var o = t(162341),
                a = {
                    binds: ["mod+/", "mod+shift+/"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        (0, r.hasModalOpen)(o.J) ? i.Z.dispatch({
                            type: "HIDE_KEYBOARD_SHORTCUTS"
                        }): i.Z.dispatch({
                            type: "SHOW_KEYBOARD_SHORTCUTS"
                        });
                        return !1
                    }
                }
        },
        805181: (e, n, t) => {
            t.d(n, {
                Nv: () => M,
                uX: () => U,
                pd: () => Z,
                wk: () => w
            });
            var r = t(785893),
                i = (t(667294),
                    t(496486)),
                o = t.n(i),
                a = t(882723),
                u = t(487517),
                l = t(628486),
                s = t(5544),
                c = t(464187),
                d = t(107218),
                f = t(796909),
                h = t(930948),
                E = t(535156),
                p = t(2590),
                C = t(290679);

            function _(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function S(e, n, t, r, i, o, a) {
                try {
                    var u = e[o](a),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function v(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(n, t);

                        function a(e) {
                            S(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            S(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function g(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function I(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        g(e, n, t[n])
                    }))
                }
                return e
            }

            function y(e, n) {
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

            function A(e) {
                return function(e) {
                    if (Array.isArray(e)) return _(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return _(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e, n) {
                var t, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                o = n.call(e, a)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function b(e, n) {
                return [{
                    resourceId: e,
                    type: C.W.GUILD_EVENT
                }].concat(A(function(e, n) {
                    return e === p.ME ? f.Z.getPrivateChannelIds() : (0, u.Z)(e, n).map((function(e) {
                        return e.id
                    }))
                }(e, n)))
            }
            const T = o().throttle((function(e, n) {
                for (var i, o, u = n.channelPredicate, f = void 0 === u ? function(e, n) {
                        return !0
                    } : u, C = n.guildPredicate, _ = void 0 === C ? function(e) {
                        return !0
                    } : C, S = n.guildFeaturePredicate, g = void 0 === S ? function(e, n) {
                        return !1
                    } : S, T = n.withVoiceChannels, L = void 0 !== T && T, N = null !== (i = l.Z.getState().guildId) && void 0 !== i ? i : p.ME, m = l.Z.getState().channelId, R = function(e, n) {
                        var t = [p.ME].concat(A(d.Z.getFlattenedGuildIds())),
                            r = t.indexOf(e);
                        if (n > 0) return t.slice(r).concat(t.slice(0, r), e);
                        t.splice(r, 0, e);
                        return t.slice(r + 1).concat(t.slice(0, r + 1))
                    }(N, e), D = e > 0 ? 0 : R.length - 1, P = b(N, L), Z = P.indexOf(m) + e; null != N && "" !== N;) {
                    o = P[Z];
                    if (_(N))
                        for (; null != o && "" !== o;) {
                            if ("string" == typeof o) {
                                if (f(N, o)) return (0, E.K)(N, o, !1, L)
                            } else if ("object" == typeof o && g(o.resourceId, o.type)) {
                                if (N !== c.Z.getGuildId()) {
                                    var w;
                                    (0, E.K)(N, null === (w = s.ZP.getDefaultChannel(N)) || void 0 === w ? void 0 : w.id)
                                }
                                return (0, a.openModalLazy)(v((function() {
                                    var e, n;
                                    return O(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return [4, Promise.all([t.e(40532), t.e(83064), t.e(13255), t.e(40706), t.e(26945), t.e(89853), t.e(88070)]).then(t.bind(t, 389853))];
                                            case 1:
                                                e = i.sent(), n = e.default;
                                                return [2, function(e) {
                                                    return (0, r.jsx)(n, y(I({}, e), {
                                                        guildId: N
                                                    }))
                                                }]
                                        }
                                    }))
                                })))
                            }
                            o = P[Z += e]
                        }
                    if (null == (N = R[D += e]) || "" === N) break;
                    P = b(N, L);
                    Z = e < 0 ? P.length - 1 : 0
                }
                h.S.dispatch(p.CkL.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                })
            }), p.aZC);
            var L = t(382060),
                N = t(61209),
                m = t(179913),
                R = t(9430),
                D = function(e, n) {
                    var t = N.Z.getChannel(n);
                    return null != t && ((0,
                        L.hv)(t.type) ? Boolean(m.ZP.getMentionCount(n)) : (!R.Z.isChannelMuted(e, n) || m.ZP.getMentionCount(n) > 0) && m.ZP.hasRelevantUnread(t))
                },
                P = function(e, n) {
                    return n === C.W.GUILD_EVENT ? !R.Z.isMuteScheduledEventsEnabled(e) && m.ZP.hasUnread(e, n) : m.ZP.hasUnread(e, n)
                },
                Z = {
                    binds: ["alt+shift+down"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        var e, n = null !== (e = l.Z.getState().guildId) && void 0 !== e ? e : p.ME;
                        T(1, {
                            channelPredicate: D,
                            guildPredicate: function(e) {
                                return e === n || !R.Z.isMuted(e)
                            },
                            guildFeaturePredicate: P
                        });
                        return !1
                    }
                },
                w = {
                    binds: ["alt+shift+up"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        var e, n = null !== (e = l.Z.getState().guildId) && void 0 !== e ? e : p.ME;
                        T(-1, {
                            channelPredicate: D,
                            guildPredicate: function(e) {
                                return e === n || !R.Z.isMuted(e)
                            },
                            guildFeaturePredicate: P
                        });
                        return !1
                    }
                },
                G = function(e, n) {
                    return m.ZP.getMentionCount(n) > 0
                },
                M = {
                    binds: ["mod+shift+alt+down"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        T(1, {
                            channelPredicate: G,
                            withVoiceChannels: !0
                        });
                        return !1
                    }
                },
                U = {
                    binds: ["mod+shift+alt+up"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        T(-1, {
                            channelPredicate: G,
                            withVoiceChannels: !0
                        });
                        return !1
                    }
                }
        },
        288457: (e, n, t) => {
            t.d(n, {
                UF: () => u,
                RC: () => l,
                MY: () => s,
                ZP: () => c
            });
            var r = t(770272),
                i = t(316878),
                o = t(2590);

            function a(e) {
                return o.yqN.ZOOM_SCALES[Math.max(0, Math.min(o.yqN.ZOOM_SCALES.indexOf(i.Z.zoom) + e, o.yqN.ZOOM_SCALES.length - 1))]
            }
            var u = {
                    binds: ["mod+plus"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        (0, r.cq)(a(1));
                        return !1
                    }
                },
                l = {
                    binds: ["mod+minus"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        (0, r.cq)(a(-1));
                        return !1
                    }
                },
                s = {
                    binds: ["mod+0"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        (0, r.cq)(o.yqN.ZOOM_DEFAULT);
                        return !1
                    }
                };
            const c = {
                ZOOM_IN: u,
                ZOOM_OUT: l,
                ZOOM_RESET: s
            }
        },
        344524: (e, n, t) => {
            t.d(n, {
                oT: () => se,
                Q2: () => ne,
                ZP: () => de,
                Rv: () => ce,
                U6: () => ue,
                UD: () => ae
            });
            var r = t(400394),
                i = t(941248),
                o = t(535156),
                a = t(464187),
                u = t(930948),
                l = t(2590),
                s = {
                    binds: ["mod+shift+t"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        null != a.Z.getGuildId() && (0, o.K)(l.ME);
                        u.S.safeDispatch(l.CkL.TOGGLE_DM_CREATE);
                        return !1
                    }
                };
            var c = t(882723),
                d = t(454011),
                f = t(416625),
                h = {
                    binds: ["mod+shift+n"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        (0, c.hasModalOpen)(f.P) ? d.Z.updateCreateGuildModal({
                            slide: f._.JOIN_GUILD,
                            location: "Keyboard Shortcut"
                        }): d.Z.openCreateGuildModal({
                            location: "Keyboard Shortcut"
                        })
                    }
                };
            var E = t(120415),
                p = {
                    binds: ["mod+alt+i"],
                    comboKeysBindGlobal: !0,
                    action: function(e) {
                        if ((0, E.$L)() && "discord.com" === location.host) {
                            e.preventDefault();
                            e.stopPropagation();
                            return !1
                        }
                    }
                },
                C = {
                    binds: ["mod+f"],
                    comboKeysBindGlobal: !0,
                    action: function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        u.S.dispatch(l.CkL.FOCUS_SEARCH, {
                            prefillCurrentChannel: !0
                        })
                    }
                },
                _ = t(563367),
                S = {
                    binds: ["mod+shift+alt+v"],
                    comboKeysBindGlobal: !0,
                    action: function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        var n = _.Z.getGuildId(),
                            t = _.Z.getChannelId();
                        null != t && (0, o.K)(null != n ? n : l.ME, t);
                        return !1
                    }
                },
                v = t(484524),
                g = t(847294),
                I = t(512566),
                y = t(196444),
                A = t(177179),
                O = {
                    binds: ["mod+ctrl+a"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        var e, n = null !== (e = a.Z.getGuildId()) && void 0 !== e ? e : void 0;
                        (0, A.goToAppDirectory)({
                            guildId: n,
                            entrypoint: "Keyboard Shortcut"
                        })
                    }
                };
            var b = t(327203),
                T = t(153080),
                L = t(469471),
                N = t(678483),
                m = {
                    binds: ["mod+g"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        u.S.dispatchToLastSubscribed(l.CkL.TOGGLE_GIF_PICKER);
                        return !1
                    }
                };
            var R = {
                binds: ["mod+s"],
                comboKeysBindGlobal: !0,
                action: function() {
                    u.S.dispatchToLastSubscribed(l.CkL.TOGGLE_STICKER_PICKER);
                    return !1
                }
            };
            var D = t(520522),
                P = t(877944),
                Z = t(735892),
                w = t(436703),
                G = t(886076),
                M = {
                    binds: ["mod+p"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        u.S.dispatch(l.CkL.TOGGLE_CHANNEL_PINS);
                        return !1
                    }
                };
            var U = t(348592),
                H = {
                    binds: ["mod+shift+h", "f1"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        window.open(U.w);
                        return !1
                    }
                };
            var B = t(452006),
                V = t(496486),
                k = {
                    binds: ["mod+i"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        u.S.dispatch(l.CkL.TOGGLE_INBOX_UNREADS_TAB);
                        return !1
                    }
                },
                F = {
                    binds: ["mod+shift+e"],
                    comboKeysBindGlobal: !0,
                    action: t.n(V)().debounce((function() {
                        if (u.S.hasSubscribers(l.CkL.MARK_TOP_INBOX_CHANNEL_READ)) {
                            u.S.dispatch(l.CkL.MARK_TOP_INBOX_CHANNEL_READ);
                            return !1
                        }
                    }), 100, {
                        leading: !0
                    })
                },
                j = t(210595),
                K = t(247250),
                Y = t(361610),
                x = t(566706),
                W = t(183490),
                z = t(188558),
                X = t(804185),
                J = t(61209),
                q = t(715107),
                Q = {
                    binds: ["mod+u"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        var e = a.Z.getGuildId(),
                            n = q.Z.getChannelId(e),
                            t = J.Z.getChannel(n);
                        if (null != n && null != t && t.type === j.d.GUILD_VOICE) {
                            K.Z.updateChatOpen(n, !x.Z.getChatOpen(n));
                            return !1
                        }
                        if (null != n && null != t && t.type === j.d.DM) {
                            var r = X.ZP.getSection(t.id),
                                i = (0, W.O)(t.getRecipientId()),
                                o = r === l.ULH.PROFILE;
                            (0, z.a)(i, !o);
                            Y.Z.toggleProfilePanelSection();
                            return !1
                        }
                        Y.Z.toggleMembersSection();
                        return !1
                    }
                };
            var $ = t(805181),
                ee = {
                    binds: ["mod+shift+u"],
                    comboKeysBindGlobal: !0,
                    action: function() {
                        var e = J.Z.getChannel(q.Z.getChannelId());
                        null == e || e.isManaged() || u.S.dispatch(l.CkL.UPLOAD_FILE);
                        return !1
                    }
                };
            var ne, te, re = t(288457),
                ie = t(473708);

            function oe(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }! function(e) {
                e.NAVIGATION = "NAVIGATION";
                e.CHAT = "CHAT";
                e.VOICE_AND_VIDEO = "VOICE_AND_VIDEO";
                e.MISCELLANEOUS = "MISCELLANEOUS";
                e.MESSAGE = "MESSAGE";
                e.DND = "DND"
            }(ne || (ne = {}));

            function ae(e) {
                switch (e) {
                    case ne.NAVIGATION:
                        return ie.Z.Messages.USER_SETTINGS_KEYBINDS_NAVIGATION_SECTION_TITLE;
                    case ne.VOICE_AND_VIDEO:
                        return ie.Z.Messages.USER_SETTINGS_KEYBINDS_VOICE_AND_VIDEO_SECTION_TITLE;
                    case ne.CHAT:
                        return ie.Z.Messages.USER_SETTINGS_KEYBINDS_CHAT_SECTION_TITLE;
                    case ne.MISCELLANEOUS:
                        return ie.Z.Messages.USER_SETTINGS_KEYBINDS_MISCELLANEOUS_SECTION_TITLE;
                    case ne.MESSAGE:
                        return ie.Z.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_SECTION_TITLE;
                    case ne.DND:
                        return ie.Z.Messages.USER_SETTINGS_KEYBINDS_DND_SECTION_TITLE
                }
            }

            function ue(e) {
                switch (e) {
                    case ne.MESSAGE:
                        return ie.Z.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_DESCRIPTION;
                    case ne.DND:
                        return ie.Z.Messages.USER_SETTINGS_KEYBINDS_DND_DESCRIPTION;
                    default:
                        return null
                }
            }

            function le() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return n.map((function(e) {
                    var n = se[e];
                    if (null == n) throw new Error("getBindsFor(...): No bind for ".concat(n));
                    return n.binds[0]
                }))
            }
            var se = (oe(te = {}, l.EkH.SERVER_NEXT, D.nq), oe(te, l.EkH.SERVER_PREV, D.X3), oe(te, l.EkH.CHANNEL_NEXT, i.tQ), oe(te, l.EkH.CHANNEL_PREV, i.x5), oe(te, l.EkH.NAVIGATE_BACK, i.Nx), oe(te, l.EkH.NAVIGATE_FORWARD, i.On), oe(te, l.EkH.UNREAD_NEXT, $.pd), oe(te, l.EkH.UNREAD_PREV, $.wk), oe(te, l.EkH.MENTION_CHANNEL_NEXT, $.Nv), oe(te, l.EkH.MENTION_CHANNEL_PREV, $.uX), oe(te, l.EkH.TOGGLE_PREVIOUS_GUILD, i.$c), oe(te, l.EkH.JUMP_TO_GUILD, v.u), oe(te, l.EkH.SUBMIT, P.z), oe(te, l.EkH.TEXTAREA_FOCUS, Z.U), oe(te, l.EkH.MARK_CHANNEL_READ, g.f), oe(te, l.EkH.MARK_SERVER_READ, I.l), oe(te, l.EkH.TOGGLE_CHANNEL_PINS, M), oe(te, l.EkH.TOGGLE_INBOX_UNREADS_TAB, k), oe(te, l.EkH.MARK_TOP_INBOX_CHANNEL_READ, F), oe(te, l.EkH.TOGGLE_USERS, Q), oe(te, l.EkH.TOGGLE_HELP, H), oe(te, l.EkH.TOGGLE_MUTE, w.iN), oe(te, l.EkH.TOGGLE_DEAFEN, w.oV), oe(te, l.EkH.TOGGLE_CATEGORY_COLLAPSED, G.u), oe(te, l.EkH.SCROLL_UP, L.B2), oe(te, l.EkH.SCROLL_DOWN, L.gN), oe(te, l.EkH.QUICKSWITCHER_SHOW, b.$),
                oe(te, l.EkH.CREATE_DM_GROUP, s), oe(te, l.EkH.SEARCH_EMOJIS, N.S), oe(te, l.EkH.SEARCH_GIFS, m), oe(te, l.EkH.SEARCH_STICKERS, R), oe(te, l.EkH.TOGGLE_HOTKEYS, B._), oe(te, l.EkH.JUMP_TO_FIRST_UNREAD, y.O), oe(te, l.EkH.CREATE_GUILD, h), oe(te, l.EkH.UPLOAD_FILE, ee), oe(te, l.EkH.RETURN_TO_AUDIO_CHANNEL, T.F), oe(te, l.EkH.CALL_ACCEPT, r.IL), oe(te, l.EkH.CALL_START, r.FI), oe(te, l.EkH.FOCUS_SEARCH, C), oe(te, l.EkH.JUMP_TO_CURRENT_CALL, S), oe(te, l.EkH.ZOOM_IN, re.UF), oe(te, l.EkH.ZOOM_OUT, re.RC), oe(te, l.EkH.ZOOM_RESET, re.MY), oe(te, l.EkH.OPEN_APP_DIRECTORY, O), oe(te, l.EkH.BROWSER_DEVTOOLS, p), te);

            function ce() {
                return [{
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
                    binds: le(l.EkH.SERVER_PREV, l.EkH.SERVER_NEXT),
                    group: ne.NAVIGATION
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
                    binds: le(l.EkH.CHANNEL_PREV, l.EkH.CHANNEL_NEXT),
                    group: ne.NAVIGATION
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
                    binds: le(l.EkH.NAVIGATE_BACK, l.EkH.NAVIGATE_FORWARD),
                    group: ne.NAVIGATION
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
                    binds: le(l.EkH.UNREAD_PREV, l.EkH.UNREAD_NEXT),
                    group: ne.NAVIGATION
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
                    binds: le(l.EkH.MENTION_CHANNEL_PREV, l.EkH.MENTION_CHANNEL_NEXT),
                    group: ne.NAVIGATION
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
                    binds: le(l.EkH.JUMP_TO_CURRENT_CALL),
                    group: ne.NAVIGATION
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
                    binds: le(l.EkH.TOGGLE_PREVIOUS_GUILD),
                    group: ne.NAVIGATION
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
                    binds: le(l.EkH.QUICKSWITCHER_SHOW),
                    group: ne.NAVIGATION
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
                    binds: le(l.EkH.CREATE_GUILD),
                    group: ne.NAVIGATION,
                    groupEnd: !0
                }, {
                    description: ie.Z.Messages.DND_OPERATION_LABEL_START,
                    binds: ["mod+d"],
                    group: ne.DND
                }, {
                    description: ie.Z.Messages.DND_OPERATION_LABEL_MOVE,
                    binds: ["up", "down"],
                    group: ne.DND
                }, {
                    description: ie.Z.Messages.DND_OPERATION_LABEL_DROP,
                    binds: ["spacebar", "enter"],
                    group: ne.DND
                }, {
                    description: ie.Z.Messages.DND_OPERATION_LABEL_CANCEL,
                    binds: ["esc"],
                    group: ne.DND,
                    groupEnd: !0
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
                    binds: le(l.EkH.MARK_SERVER_READ),
                    group: ne.CHAT
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
                    binds: le(l.EkH.MARK_CHANNEL_READ),
                    group: ne.CHAT
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
                    binds: le(l.EkH.CREATE_DM_GROUP),
                    group: ne.CHAT
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
                    binds: le(l.EkH.TOGGLE_CHANNEL_PINS),
                    group: ne.CHAT
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
                    binds: le(l.EkH.TOGGLE_INBOX_UNREADS_TAB),
                    group: ne.CHAT
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
                    binds: le(l.EkH.MARK_TOP_INBOX_CHANNEL_READ),
                    group: ne.CHAT
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
                    binds: le(l.EkH.TOGGLE_USERS),
                    group: ne.CHAT
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
                    binds: le(l.EkH.SEARCH_EMOJIS),
                    group: ne.CHAT
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
                    binds: le(l.EkH.SEARCH_GIFS),
                    group: ne.CHAT
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
                    binds: le(l.EkH.SEARCH_STICKERS),
                    group: ne.CHAT
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
                    binds: le(l.EkH.SCROLL_UP, l.EkH.SCROLL_DOWN),
                    group: ne.CHAT
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
                    binds: le(l.EkH.JUMP_TO_FIRST_UNREAD),
                    group: ne.CHAT
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
                    binds: le(l.EkH.TEXTAREA_FOCUS),
                    group: ne.CHAT
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
                    binds: le(l.EkH.UPLOAD_FILE),
                    group: ne.CHAT,
                    groupEnd: !0
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
                    binds: le(l.EkH.TOGGLE_MUTE),
                    group: ne.VOICE_AND_VIDEO
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
                    binds: le(l.EkH.TOGGLE_DEAFEN),
                    group: ne.VOICE_AND_VIDEO
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
                    binds: le(l.EkH.CALL_ACCEPT),
                    group: ne.VOICE_AND_VIDEO
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
                    binds: le(l.EkH.MARK_CHANNEL_READ),
                    group: ne.VOICE_AND_VIDEO
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
                    binds: le(l.EkH.CALL_START),
                    group: ne.VOICE_AND_VIDEO,
                    groupEnd: !0
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
                    binds: le(l.EkH.TOGGLE_HELP),
                    group: ne.MISCELLANEOUS
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
                    binds: le(l.EkH.FOCUS_SEARCH),
                    group: ne.MISCELLANEOUS
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG,
                    binds: ["h+h+right+n+k"],
                    group: ne.MISCELLANEOUS,
                    groupEnd: !0
                }, {
                    description: ie.Z.Messages.EDIT_MESSAGE,
                    binds: ["e"],
                    group: ne.MESSAGE
                }, {
                    description: ie.Z.Messages.DELETE_MESSAGE,
                    binds: ["backspace"],
                    group: ne.MESSAGE
                }, {
                    description: ie.Z.Messages.PIN_MESSAGE,
                    binds: ["p"],
                    group: ne.MESSAGE
                }, {
                    description: ie.Z.Messages.ADD_REACTION,
                    binds: ["plus"],
                    group: ne.MESSAGE
                }, {
                    description: ie.Z.Messages.MESSAGE_ACTION_REPLY,
                    binds: ["r"],
                    group: ne.MESSAGE
                }, {
                    description: ie.Z.Messages.COPY_TEXT,
                    binds: ["mod+c"],
                    group: ne.MESSAGE
                }, {
                    description: ie.Z.Messages.MARK_UNREAD,
                    binds: ["alt+enter"],
                    group: ne.MESSAGE
                }, {
                    description: ie.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
                    binds: ["escape"],
                    group: ne.MESSAGE,
                    groupEnd: !0
                }]
            }
            const de = se
        },
        487517: (e, n, t) => {
            t.d(n, {
                Z: () => f,
                T: () => h
            });
            var r = t(667294),
                i = t(202351),
                o = t(978868),
                a = t(4207),
                u = t(382060),
                l = t(968968),
                s = t(813869),
                c = t(2590),
                d = t(485911);

            function f(e, n, t) {
                return E(e === d._ || e === c.I_8 ? (0, a.t)() : o.Z.getGuildWithoutChangingCommunityRows(e).guildChannels, n, t)
            }

            function h(e, n, t, o, a) {
                var u = (0, i.e7)([s.Z], (function() {
                        return s.Z.getGuildChangeSentinel(e)
                    })),
                    c = (0, i.e7)([l.Z], (function() {
                        return l.Z.version
                    }));
                return (0, r.useMemo)((function() {
                    return E(n, o, a).map((function(e) {
                        return e.id
                    }))
                }), [n, t, u, c])
            }

            function E(e, n, t) {
                var r = [];
                e.forEachShownChannel((function(e) {
                    ((0, u.r8)(e.type) || n && (0, u.bw)(e.type)) && r.push(e)
                }), t);
                return r
            }
        },
        454011: (e, n, t) => {
            t.d(n, {
                Z: () => r
            });
            const r = {
                openCreateGuildModal: function(e) {
                    Promise.all([t.e(40532), t.e(95599), t.e(20995), t.e(87947)]).then(t.bind(t, 638657)).then((function(n) {
                        return (0, n.openCreateGuildModal)(e)
                    }))
                },
                updateCreateGuildModal: function(e) {
                    Promise.all([t.e(40532), t.e(95599), t.e(20995), t.e(87947)]).then(t.bind(t, 638657)).then((function(n) {
                        return (0, n.updateCreateGuildModal)(e)
                    }))
                }
            }
        },
        416625: (e, n, t) => {
            t.d(n, {
                _: () => r,
                P: () => i
            });
            var r;
            ! function(e) {
                e.GUILD_TEMPLATES = "guild-templates";
                e.CUSTOMIZE_GUILD = "customize-guild";
                e.CHANNEL_PROMPT = "channel-prompt";
                e.JOIN_GUILD = "join-guild";
                e.CREATION_INTENT = "creation-intent"
            }(r || (r = {}));
            var i = "create-guild"
        },
        33014: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(496486),
                i = t.n(r),
                o = t(496916),
                a = t(404741),
                u = t(18882),
                l = t(5544),
                s = t(179913),
                c = t(652591),
                d = t(2590),
                f = t(290679);

            function h(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function E(e) {
                return function(e) {
                    if (Array.isArray(e)) return h(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return h(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e, n) {
                var t = i().flatMap(e, (function(e) {
                    var n = l.ZP.getSelectableChannelIds(e),
                        t = l.ZP.getVocalChannelIds(e),
                        r = E(n).concat(E(t)),
                        i = u.Z.getActiveJoinedThreadsForGuild(e),
                        o = !0,
                        a = !1,
                        s = void 0;
                    try {
                        for (var c, d = n[Symbol.iterator](); !(o = (c = d.next()).done); o = !0) {
                            var f, h = null !== (f = i[c.value]) && void 0 !== f ? f : {};
                            for (var p in h) r.push(p)
                        }
                    } catch (e) {
                        a = !0;
                        s = e
                    } finally {
                        try {
                            o || null == d.return || d.return()
                        } finally {
                            if (a) throw s
                        }
                    }
                    return r
                })).map((function(e) {
                    return {
                        channelId: e,
                        readStateType: f.W.CHANNEL,
                        messageId: s.ZP.lastMessageId(e)
                    }
                }));
                e.forEach((function(e) {
                    t.push({
                        channelId: e,
                        readStateType: f.W.GUILD_EVENT,
                        messageId: s.ZP.lastMessageId(e, f.W.GUILD_EVENT)
                    });
                    t.push({
                        channelId: e,
                        readStateType: f.W.GUILD_ONBOARDING_QUESTION,
                        messageId: a.Z.ackIdForGuild(e)
                    })
                }));
                c.default.track(d.rMx.MARK_AS_READ, {
                    source: n,
                    type: "guild"
                });
                return (0, o.y5)(t)
            }
        },
        576122: (e, n, t) => {
            t.d(n, {
                VR: () => Ve,
                Cb: () => me,
                zm: () => Re,
                p2: () => De,
                wF: () => Ze,
                wd: () => Pe,
                Bz: () => qe,
                zR: () => Qe,
                ZP: () => Ge
            });
            var r = t(441143),
                i = t.n(r),
                o = t(496486),
                a = t.n(o),
                u = t(245802),
                l = t(258104),
                s = t(747820),
                c = t(232334),
                d = t(848465),
                f = t(269300),
                h = t(861426),
                E = t(70079),
                p = t(339432),
                C = t(202351),
                _ = t(744564),
                S = t(61209),
                v = t(715107),
                g = t(9430);

            function I(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function A(e, n) {
                return !n || "object" !== b(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function O(e, n) {
                O = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return O(e, n)
            }
            var b = function(e) {
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
                    var t, r = y(e);
                    if (n) {
                        var i = y(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return A(this, t)
                }
            }
            var L = {},
                N = {},
                m = {};

            function R() {
                var e = v.Z.getChannelId();
                if (null != e) {
                    var n = S.Z.getChannel(e);
                    if (null != n && null != n.guild_id) {
                        var t = n.guild_id;
                        null == m[e] && (m[e] = 0);
                        if (n.isThread() || g.Z.isOptInEnabled(t) && !g.Z.isChannelOrParentOptedIn(t, n.id)) {
                            delete m[e];
                            null != L[t] && L[t].delete(e)
                        } else {
                            m[e]++;
                            null == L[t] && (L[t] = new Set);
                            if (g.Z.isFavorite(t, e)) L[t].delete(e);
                            else if ((null == N[t] || !N[t].has(e)) && m[e] > 50) {
                                L[t].add(e);
                                return !0
                            }
                        }
                    }
                }
            }
            var D = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && O(e, n)
                }(t, e);
                var n = T(t);

                function t() {
                    I(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function(e) {
                    this.syncWith([v.Z], R);
                    if (null != e) {
                        var n = e.suggestedChannels,
                            t = e.dismissedSuggestions,
                            r = e.channelOpensByChannelId;
                        if (null != n)
                            for (var i in n) {
                                var o;
                                L[i] = null !== (o = new Set(n[i])) && void 0 !== o ? o : new Set
                            }
                        if (null != t)
                            for (var a in t) {
                                var u;
                                N[a] = null !== (u = new Set(t[a])) && void 0 !== u ? u : new Set
                            }
                        m = null != r ? r : {}
                    }
                };
                r.getSuggestedChannelId = function(e) {
                    return null
                };
                r.getState = function() {
                    return {
                        suggestedChannels: {},
                        dismissedSuggestions: {},
                        channelOpensByChannelId: {}
                    }
                };
                return t
            }(C.ZP.PersistedStore);
            D.displayName = "FavoritesSuggestionStore";
            D.persistKey = "FavoritesSuggestionStore";
            const P = new D(_.Z, {
                DISMISS_FAVORITE_SUGGESTION: function(e) {
                    var n = e.guildId,
                        t = e.channelId;
                    null == N[n] && (N[n] = new Set);
                    N[n].add(t);
                    L[n].delete(t);
                    return !0
                }
            });

            function Z(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function w(e) {
                w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return w(e)
            }

            function G(e, n) {
                return !n || "object" !== U(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function M(e, n) {
                M = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return M(e, n)
            }
            var U = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function H(e) {
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
                    var t, r = w(e);
                    if (n) {
                        var i = w(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return G(this, t)
                }
            }
            var B = new Set;
            var V = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && M(e, n)
                }(t, e);
                var n = H(t);

                function t() {
                    Z(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function(e) {
                    B.clear();
                    null == e || e.guilds.forEach((function(e) {
                        return B.add(e)
                    }))
                };
                r.isCollapsed = function(e) {
                    return B.has(e)
                };
                r.getState = function() {
                    return {
                        guilds: B
                    }
                };
                return t
            }(C.ZP.PersistedStore);
            V.displayName = "RecentlyActiveCollapseStore";
            V.persistKey = "RecentlyActiveCollapseStore";
            const k = new V(_.Z, {
                SET_RECENTLY_ACTIVE_COLLAPSED: function(e) {
                    var n = e.guildId;
                    e.collapsed ? B.add(n) : B.delete(n)
                }
            });
            var F = t(364269),
                j = t(510758),
                K = t(18882),
                Y = t(487685),
                x = t(382060),
                W = t(968968),
                z = t(996077),
                X = t(959207),
                J = t(567403),
                q = t(682776),
                Q = t(179913),
                $ = t(407561),
                ee = t(602397),
                ne = t(72580),
                te = t(102921),
                re = t(913302),
                ie = t(627001),
                oe = t(966554),
                ae = t(2590),
                ue = t(897196),
                le = t(520453);

            function se(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function ce(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function de(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function fe(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function he(e, n, t) {
                n && fe(e.prototype, n);
                t && fe(e, t);
                return e
            }

            function Ee(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function pe(e, n, t) {
                pe = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, n, t) {
                    var r = function(e, n) {
                        for (; !Object.prototype.hasOwnProperty.call(e, n) && null !== (e = Ce(e)););
                        return e
                    }(e, n);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, n);
                        return i.get ? i.get.call(t) : i.value
                    }
                };
                return pe(e, n, t || e)
            }

            function Ce(e) {
                Ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ce(e)
            }

            function _e(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                n && Ie(e, n)
            }

            function Se(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Ee(e, n, t[n])
                    }))
                }
                return e
            }

            function ve(e, n) {
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

            function ge(e, n) {
                return !n || "object" !== Oe(n) && "function" != typeof n ? ce(e) : n
            }

            function Ie(e, n) {
                Ie = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return Ie(e, n)
            }

            function ye(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || be(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ae(e) {
                return function(e) {
                    if (Array.isArray(e)) return se(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || be(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Oe = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function be(e, n) {
                if (e) {
                    if ("string" == typeof e) return se(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? se(e, n) : void 0
                }
            }

            function Te(e) {
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
                    var t, r = Ce(e);
                    if (n) {
                        var i = Ce(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return ge(this, t)
                }
            }
            var Le, Ne = "placeholder-channel-id",
                me = 2;
            ! function(e) {
                e[e.CannotShow = 1] = "CannotShow";
                e[e.DoNotShow = 2] = "DoNotShow";
                e[e.WouldShowIfUncollapsed = 3] = "WouldShowIfUncollapsed";
                e[e.Show = 4] = "Show"
            }(Le || (Le = {}));
            var Re = 0,
                De = 1,
                Pe = 3,
                Ze = 4,
                we = new Set([String(oe.f.GUILD_DIRECTORY)]),
                Ge = function() {
                    function e() {
                        de(this, e);
                        this.guilds = {}
                    }
                    var n = e.prototype;
                    n.getGuild = function(e, n) {
                        var t;
                        e in this.guilds && a().isEqual(null === (t = this.guilds[e]) || void 0 === t ? void 0 : t.getCommunitySection().getRows().filter((function(e) {
                            return !we.has(e)
                        })), n) || (this.guilds[e] = new Me(e, n));
                        return this.guilds[e]
                    };
                    n.getGuildWithoutCommunityRows = function(e) {
                        e in this.guilds || (this.guilds[e] = new Me(e, []));
                        return this.guilds[e]
                    };
                    n.clear = function() {
                        this.guilds = {}
                    };
                    n.clearGuildId = function(e) {
                        if (null != e && e in this.guilds) {
                            delete this.guilds[e];
                            return !0
                        }
                        return !1
                    };
                    n.updateRecentsCategory = function(e) {
                        if (null != e && e in this.guilds) {
                            var n, t;
                            return null !== (t = null === (n = this.guilds[e]) || void 0 === n ? void 0 : n.updateRecentsCategory()) && void 0 !== t && t
                        }
                        return !1
                    };
                    n.nonPositionalChannelIdUpdate = function(e) {
                        var n = S.Z.getBasicChannel(e);
                        return null != n && (null != n.guild_id && (null != this.guilds[n.guild_id] && ((n instanceof x.Sf || null != (n = S.Z.getChannel(e))) && this.nonPositionalChannelUpdate(n))))
                    };
                    n.nonPositionalChannelUpdate = function(e) {
                        if (null == e.guild_id) return !1;
                        var n = this.guilds[e.guild_id];
                        if (null == n) return !1;
                        var t = !1;
                        e.isThread() && (t = this.nonPositionalChannelIdUpdate(e.parent_id));
                        return n.nonPositionalChannelUpdate(e) || t
                    };
                    n.updateSubtitles = function(e, n) {
                        (null == e ? Object.values(this.guilds) : e in this.guilds ? [this.guilds[e]] : []).forEach((function(e) {
                            return e.updateSubtitles(n)
                        }))
                    };
                    return e
                }(),
                Me = function() {
                    function e(n, t) {
                        de(this, e);
                        this.id = n;
                        this.sortedNamedCategories = null;
                        this.sections = null;
                        this.rows = null;
                        this.firstVoiceChannel = void 0;
                        this.allChannelsById = null;
                        this.version = 0;
                        this.hideMutedChannels = g.Z.isGuildCollapsed(this.id);
                        this.mutedChannelIds = g.Z.getMutedChannels(this.id);
                        var r, o;
                        this.optedInChannels = null !== (r = g.Z.getOptedInChannelsWithPendingUpdates(this.id)) && void 0 !== r ? r : g.Z.getOptedInChannels(this.id);
                        this.optInEnabled = (0, F.r1)(this.id);
                        this.hideResourceChannels = (0, d.s)(this.id);
                        this.favoriteChannelIds = new Set(null !== (o = g.Z.getGuildFavorites(this.id)) && void 0 !== o ? o : []);
                        this.suggestedFavoriteChannelId = P.getSuggestedChannelId(this.id);
                        this.collapsedCategoryIds = W.Z.getCollapsedCategories();
                        var u = S.Z.getMutableGuildChannelsForGuild(this.id),
                            l = J.Z.getGuild(this.id),
                            s = {},
                            c = [],
                            f = {};
                        for (var h in u) {
                            var p = u[h];
                            if (p.type === ae.d4z.GUILD_CATEGORY) {
                                s[p.id] = p;
                                f[p.id] = []
                            }
                        }
                        var C = [],
                            _ = [],
                            v = [],
                            I = this.initializationData;
                        for (var y in u) {
                            var A = u[y];
                            if (A.type !== ae.d4z.GUILD_CATEGORY)
                                if (A.type !== ae.d4z.GUILD_DIRECTORY) {
                                    if (nn(this, A, I)) C.push(A);
                                    else if (A.type === ae.d4z.GUILD_VOICE || A.type === ae.d4z.GUILD_STAGE_VOICE) {
                                        null != A.parent_id && null != s[A.parent_id] && _.push(s[A.parent_id]);
                                        _.push(A)
                                    }
                                    null != A.parent_id && A.parent_id in f ? f[A.parent_id].push(A) : c.push(A)
                                } else null == l || l.hasFeature(ae.oNc.HUB) || v.push(A)
                        }
                        this.categories = {};
                        for (var O in f) this.categories[O] = new Be(this, s[O], f[O], I);
                        this.recentsSectionNumber = 2;
                        this.favoritesSectionNumber = De;
                        this.noParentCategory = new He(this, c, I);
                        this.favoritesCategory = new Ve(this, I);
                        this.recentsCategory = (0, E.gL)() ? new ke(this, u, I) : new Fe(this, C, I);
                        this.voiceChannelsCategory = new je(this, _, s, I);
                        this.communitySection = new Ke(t, v.length > 0);
                        i()(!("null" in this.categories), "somehow a null got into categories");
                        this.voiceChannelsSectionNumber = Ze + a().size(this.categories)
                    }
                    var n = e.prototype;
                    n.invalidate = function() {
                        this.sections = null;
                        this.rows = null;
                        this.sortedNamedCategories = null;
                        this.firstVoiceChannel = void 0;
                        this.version++
                    };
                    n.getSortedNamedCategories = function() {
                        null == this.sortedNamedCategories && this.getRows();
                        return this.sortedNamedCategories
                    };
                    n.getSortedCategories = function() {
                        return [this.favoritesCategory, this.recentsCategory, this.noParentCategory].concat(Ae(this.getSortedNamedCategories()), [this.voiceChannelsCategory])
                    };
                    n.getSections = function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        null == this.sections && (this.sections = this.getRows().map((function(e) {
                            return e.length
                        })));
                        return e ? Ae(this.sections) : this.sections
                    };
                    n.getRows = function() {
                        if (null == this.rows) {
                            this.sortedNamedCategories = a().sortBy(Object.values(this.categories), (function(e) {
                                return e.record.position
                            }));
                            this.rows = [this.communitySection, this.favoritesCategory, this.recentsCategory, this.noParentCategory].concat(Ae(this.sortedNamedCategories), [this.voiceChannelsCategory]).map((function(e) {
                                return e.getRows()
                            }));
                            var e = 0,
                                n = !0,
                                t = !1,
                                r = void 0;
                            try {
                                for (var i, o = [this.noParentCategory].concat(Ae(this.sortedNamedCategories))[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                                    var u = i.value;
                                    u.position = ++e;
                                    var l = !0,
                                        s = !1,
                                        c = void 0;
                                    try {
                                        for (var d, f = u.getShownChannelIds()[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                                            var h = d.value;
                                            u.channels[h].position = ++e
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
                            } catch (e) {
                                t = !0;
                                r = e
                            } finally {
                                try {
                                    n || null == o.return || o.return()
                                } finally {
                                    if (t) throw r
                                }
                            }
                        }
                        return this.rows
                    };
                    n.getCategoryFromSection = function(e) {
                        switch (e) {
                            case Re:
                                throw Error("Invalid section. Use getCommunitySection instead");
                            case De:
                                return this.favoritesCategory;
                            case Pe:
                                return this.noParentCategory;
                            case this.recentsSectionNumber:
                                return this.recentsCategory;
                            case this.voiceChannelsSectionNumber:
                                return this.voiceChannelsCategory;
                            default:
                                return this.getSortedNamedCategories()[e - Ze]
                        }
                    };
                    n.getNamedCategoryFromSection = function(e) {
                        e -= Ze;
                        i()(e >= 0 && e < this.getSortedNamedCategories().length, "invalid section index ".concat(e));
                        return this.getSortedNamedCategories()[e]
                    };
                    n.getCommunitySection = function() {
                        return this.communitySection
                    };
                    n.getChannelFromSectionRow = function(e, n) {
                        var t = this.getCategoryFromSection(e);
                        if (null == t) return null;
                        var r = t.channels[t.getShownChannelIds()[n]];
                        return null == r ? null : {
                            category: t,
                            channel: r
                        }
                    };
                    n.isPlaceholderRow = function(e, n) {
                        i()(e > Re, "Invalid section");
                        return e !== this.recentsSectionNumber && this.getRows()[e][n] === Ne
                    };
                    n.getFirstVoiceChannel = function(e) {
                        if (void 0 === this.firstVoiceChannel) {
                            this.firstVoiceChannel = this.favoritesCategory.getFirstVoiceChannel(e);
                            if (null != this.firstVoiceChannel) return this.firstVoiceChannel;
                            this.firstVoiceChannel = this.noParentCategory.getFirstVoiceChannel(e);
                            if (null != this.firstVoiceChannel) return this.firstVoiceChannel;
                            var n = !0,
                                t = !1,
                                r = void 0;
                            try {
                                for (var i, o = this.getSortedNamedCategories()[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                                    var a = i.value;
                                    if (null != a.getFirstVoiceChannel(e)) {
                                        this.firstVoiceChannel = a.getFirstVoiceChannel(e);
                                        break
                                    }
                                }
                            } catch (e) {
                                t = !0;
                                r = e
                            } finally {
                                try {
                                    n || null == o.return || o.return()
                                } finally {
                                    if (t) throw r
                                }
                            }
                        }
                        return this.firstVoiceChannel
                    };
                    n.getSectionRowsFromChannel = function(e) {
                        if (function(e) {
                                if (null == e) return !1;
                                return tn.has(e)
                            }(e)) {
                            return [{
                                row: this.getCommunitySection().getRows().indexOf(e),
                                section: Re
                            }]
                        }
                        var n = [],
                            t = S.Z.getChannel(e);
                        if (null == t || null == e) return n;
                        var r = t.isThread();
                        r && (t = S.Z.getChannel(t.parent_id));
                        if (null == t) return n;
                        var i = this.favoritesCategory.getShownChannelIds().indexOf(t.id);
                        i >= 0 && n.push({
                            section: De,
                            row: i
                        });
                        var o = this.recentsCategory.getShownChannelIds().indexOf(t.id);
                        o >= 0 && n.push({
                            section: this.recentsSectionNumber,
                            row: o
                        });
                        if (t.type === ae.d4z.GUILD_CATEGORY) {
                            var u = a().findIndex(this.getSortedNamedCategories(), (function(e) {
                                return e.id === (null == t ? void 0 : t.id)
                            }));
                            return [{
                                section: u + Ze
                            }]
                        }
                        var l = this.getCategory(t),
                            s = l instanceof He ? Pe : this.getSortedNamedCategories().indexOf(l) + Ze,
                            c = l.getShownChannelIds().indexOf(t.id);
                        if (s >= 0 && c >= 0) {
                            var d = r ? l.channels[t.id].threadIds.indexOf(e) : 0;
                            n.push({
                                section: s,
                                row: c,
                                threadOffset: d
                            })
                        }
                        var f = this.voiceChannelsCategory.getShownChannelIds().indexOf(t.id);
                        f >= 0 && n.push({
                            section: this.voiceChannelsSectionNumber,
                            row: f
                        });
                        return n
                    };
                    n.getCategory = function(e) {
                        return null != e.parent_id && e.parent_id in this.categories ? this.categories[e.parent_id] : this.noParentCategory
                    };
                    n.updateRecentsCategory = function() {
                        var e = this.recentsCategory.updateAllChannels(this.initializationData);
                        e && this.invalidate();
                        return e
                    };
                    n.nonPositionalChannelUpdate = function(e) {
                        var n = this.initializationData,
                            t = this.getCategory(e).updateChannel(e, n);
                        this.favoritesCategory.updateChannel(e, n) && (t = !0);
                        this.recentsCategory.updateChannel(e, n) && (t = !0);
                        this.voiceChannelsCategory.updateChannel(e, n) && (t = !0);
                        t && this.invalidate();
                        return t
                    };
                    n.getSlicedChannels = function(e, n) {
                        i()(e.length > 0, "must have at least one channel in the slice");
                        var t = e[0],
                            r = e[e.length - 1],
                            o = !0,
                            a = !1,
                            u = [],
                            l = [],
                            s = !0,
                            c = !1,
                            d = void 0;
                        try {
                            for (var f, h = this.getSortedCategories()[Symbol.iterator](); !(s = (f = h.next()).done); s = !0) {
                                var E = f.value,
                                    p = (null == n ? void 0 : n.ignoreRecents) && E === this.recentsCategory,
                                    C = !0,
                                    _ = !1,
                                    S = void 0;
                                try {
                                    for (var v, g = E.getShownChannelIds()[Symbol.iterator](); !(C = (v = g.next()).done); C = !0) {
                                        var I = v.value,
                                            y = E.channels[I];
                                        o && (y.id === t.id ? o = !1 : p || u.push(y));
                                        a && !p && l.push(y);
                                        o || a || y.id === r.id && (a = !0)
                                    }
                                } catch (e) {
                                    _ = !0;
                                    S = e
                                } finally {
                                    try {
                                        C || null == g.return || g.return()
                                    } finally {
                                        if (_) throw S
                                    }
                                }
                            }
                        } catch (e) {
                            c = !0;
                            d = e
                        } finally {
                            try {
                                s || null == h.return || h.return()
                            } finally {
                                if (c) throw d
                            }
                        }
                        return [u, e, l]
                    };
                    n.getChannels = function(e) {
                        var n = [];
                        if (null == this.allChannelsById) {
                            this.allChannelsById = {};
                            var t = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var o, a = this.getSortedCategories()[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                                    var u = o.value;
                                    for (var l in u.channels) this.allChannelsById[l] = u.channels[l]
                                }
                            } catch (e) {
                                r = !0;
                                i = e
                            } finally {
                                try {
                                    t || null == a.return || a.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                        }
                        var s = !0,
                            c = !1,
                            d = void 0;
                        try {
                            for (var f, h = e[Symbol.iterator](); !(s = (f = h.next()).done); s = !0) {
                                var E = f.value;
                                null != this.allChannelsById[E] && n.push(this.allChannelsById[E])
                            }
                        } catch (e) {
                            c = !0;
                            d = e
                        } finally {
                            try {
                                s || null == h.return || h.return()
                            } finally {
                                if (c) throw d
                            }
                        }
                        return n
                    };
                    n.updateSubtitles = function(e) {
                        var n = [];
                        if (null != e) {
                            var t = S.Z.getChannel(e);
                            if (null != t)
                                if (t.id in this.favoritesCategory.channels) n = [this.favoritesCategory.channels[t.id]];
                                else if (t.id in this.recentsCategory.channels) n = [this.recentsCategory.channels[t.id]];
                            else {
                                var r = this.getCategory(t);
                                null != r && null != r.channels[e] && (n = [r.channels[e]])
                            }
                        } else n = a()(this.getSortedCategories()).map((function(e) {
                            return Object.values(e.channels)
                        })).flatten().value();
                        var i = !1;
                        n.forEach((function(e) {
                            e.updateSubtitle() && (i = !0)
                        }));
                        i && this.version++;
                        return i
                    };
                    n.forEachShownChannel = function(e, n) {
                        var t = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var o, a = this.getSortedCategories()[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                                var u = o.value;
                                if (!(null == n ? void 0 : n.ignoreRecents) || u !== this.recentsCategory) {
                                    var l = !0,
                                        s = !1,
                                        c = void 0;
                                    try {
                                        for (var d, f = u.getShownChannelIds()[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                                            var h = d.value,
                                                E = u.channels[h];
                                            e(E.record);
                                            var p = !0,
                                                C = !1,
                                                _ = void 0;
                                            try {
                                                for (var v, g = E.threadIds[Symbol.iterator](); !(p = (v = g.next()).done); p = !0) {
                                                    var I = v.value,
                                                        y = S.Z.getChannel(I);
                                                    null != y && e(y)
                                                }
                                            } catch (e) {
                                                C = !0;
                                                _ = e
                                            } finally {
                                                try {
                                                    p || null == g.return || g.return()
                                                } finally {
                                                    if (C) throw _
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
                            }
                        } catch (e) {
                            r = !0;
                            i = e
                        } finally {
                            try {
                                t || null == a.return || a.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                    };
                    n.forEachChannel = function(e, n) {
                        var t = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var o, a = this.getSortedCategories()[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                                var u = o.value;
                                if (!(null == n ? void 0 : n.ignoreRecents) || u !== this.recentsCategory) {
                                    var l = !0,
                                        s = !1,
                                        c = void 0;
                                    try {
                                        for (var d, f = u.getChannelRecords()[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                                            e(d.value)
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
                            }
                        } catch (e) {
                            r = !0;
                            i = e
                        } finally {
                            try {
                                t || null == a.return || a.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                    };
                    he(e, [{
                        key: "initializationData",
                        get: function() {
                            return {
                                selectedChannel: S.Z.getChannel(v.Z.getChannelId()),
                                selectedVoiceChannelId: v.Z.getVoiceChannelId(),
                                activeJoinedRelevantThreads: K.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
                                activeJoinedUnreadThreads: K.Z.getActiveJoinedUnreadThreadsForGuild(this.id)
                            }
                        }
                    }]);
                    return e
                }(),
                Ue = function() {
                    function e(n) {
                        de(this, e);
                        this.guild = n;
                        this.isMuted = !1;
                        this.isCollapsed = !1;
                        this.position = -1;
                        this.channels = {};
                        this.shownChannelIds = null
                    }
                    var n = e.prototype;
                    n.updateChannel = function(e, n) {
                        if (e.id in this.channels && this.channels[e.id].updateChannel(e, n)) {
                            this.invalidate();
                            return !0
                        }
                        return !1
                    };
                    n.invalidate = function() {
                        this.shownChannelIds = null
                    };
                    n.getRows = function() {
                        var e = this.getShownChannelIds();
                        return 0 === e.length && this.shouldShowEmptyCategory() ? [Ne] : e
                    };
                    n.shouldShowEmptyCategory = function() {
                        return a().some(this.channels, (function(e) {
                            return e.renderLevel >= Le.WouldShowIfUncollapsed
                        }))
                    };
                    n.getShownChannelIds = function() {
                        null == this.shownChannelIds && (this.shownChannelIds = a()(this.channels).values().filter((function(e) {
                            return e.renderLevel === Le.Show
                        })).sortBy((function(e) {
                            var n = e.record;
                            return n.isGuildVocal() ? n.position + 1e4 : n.position
                        })).map((function(e) {
                            return e.id
                        })).value());
                        return this.shownChannelIds
                    };
                    n.getShownChannelAndThreadIds = function() {
                        var e = a()(this.channels).values().flatMap((function(e) {
                            return e.threadIds
                        })).value();
                        return this.getShownChannelIds().concat(e)
                    };
                    n.isEmpty = function() {
                        return 0 === this.getShownChannelIds().length
                    };
                    n.getChannelRecords = function() {
                        return a()(this.channels).values().filter((function(e) {
                            return e.renderLevel > Le.CannotShow
                        })).map((function(e) {
                            return e.record
                        })).value()
                    };
                    n.getFirstVoiceChannel = function(e) {
                        var n = !0,
                            t = !1,
                            r = void 0;
                        try {
                            for (var i, o = this.getShownChannelIds()[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                                var a = i.value;
                                if (e && this.channels[a].record.isGuildStageVoice()) return this.channels[a];
                                if (!e && this.channels[a].record.isGuildVocal()) return this.channels[a]
                            }
                        } catch (e) {
                            t = !0;
                            r = e
                        } finally {
                            try {
                                n || null == o.return || o.return()
                            } finally {
                                if (t) throw r
                            }
                        }
                        return null
                    };
                    return e
                }(),
                He = function(e) {
                    _e(t, e);
                    var n = Te(t);

                    function t(e, r, i) {
                        de(this, t);
                        var o;
                        (o = n.call(this, e)).channels = a()(r).map((function(e) {
                            return new xe(o, e, i)
                        })).keyBy((function(e) {
                            return e.id
                        })).value();
                        return o
                    }
                    return t
                }(Ue),
                Be = function(e) {
                    _e(t, e);
                    var n = Te(t);

                    function t(e, r, i, o) {
                        de(this, t);
                        var a;
                        (a = n.call(this, e)).record = r;
                        a.id = r.id;
                        a.isCollapsed = !0 === e.collapsedCategoryIds[r.id];
                        a.isMuted = e.mutedChannelIds.has(r.id);
                        a.channels = {};
                        var u = !0,
                            l = !1,
                            s = void 0;
                        try {
                            for (var c, d = i[Symbol.iterator](); !(u = (c = d.next()).done); u = !0) {
                                var f = c.value;
                                a.channels[f.id] = new xe(ce(a), f, o)
                            }
                        } catch (e) {
                            l = !0;
                            s = e
                        } finally {
                            try {
                                u || null == d.return || d.return()
                            } finally {
                                if (l) throw s
                            }
                        }
                        return a
                    }
                    t.prototype.shouldShowEmptyCategory = function() {
                        return !!pe(Ce(t.prototype), "shouldShowEmptyCategory", this).call(this) || !(!(q.Z.can(le.Pl.MANAGE_CHANNELS, this.record) && q.Z.can(le.Pl.VIEW_CHANNEL, this.record) && a().isEmpty(this.channels)) || this.guild.optInEnabled && !this.guild.optedInChannels.has(this.id))
                    };
                    return t
                }(Ue),
                Ve = function(e) {
                    _e(t, e);
                    var n = Te(t);

                    function t(e, r) {
                        de(this, t);
                        var i, o;
                        i = n.call(this, e);
                        if (!e.optInEnabled) return ge(i);
                        i.channels = a()(null !== (o = g.Z.getGuildFavorites(e.id)) && void 0 !== o ? o : []).map((function(e) {
                            return S.Z.getChannel(e)
                        })).filter(ne.lm).map((function(e) {
                            return new We(i, e, r)
                        })).keyBy((function(e) {
                            return e.id
                        })).value();
                        var u = P.getSuggestedChannelId(e.id),
                            l = S.Z.getChannel(u);
                        null != l && null != u && (i.channels[u] = new We(ce(i), l, ve(Se({}, r), {
                            activeJoinedRelevantThreads: {},
                            activeJoinedUnreadThreads: {}
                        })));
                        return i
                    }
                    var r = t.prototype;
                    r.updateChannel = function(e, n) {
                        var t = e.id in this.channels && g.Z.isFavorite(e.guild_id, e.id),
                            r = P.getSuggestedChannelId(e.guild_id);
                        e.id === r && !t && (n = ve(Se({}, n), {
                            activeJoinedRelevantThreads: {},
                            activeJoinedUnreadThreads: {}
                        }));
                        if (e.id in this.channels && this.channels[e.id].updateChannel(e, n)) {
                            this.invalidate();
                            return !0
                        }
                        if (e.id in this.channels && e.id !== r && !t) {
                            delete this.channels[e.id];
                            this.invalidate();
                            return !0
                        }
                        return !1
                    };
                    r.getFirstVoiceChannel = function(e) {
                        return null
                    };
                    return t
                }(Ue),
                ke = function(e) {
                    _e(t, e);
                    var n = Te(t);

                    function t(e, r, i) {
                        de(this, t);
                        var o;
                        (o = n.call(this, e)).enabled = !1;
                        o.RECENTS_THROTTLE = 5e3;
                        o.isThrottled = !1;
                        o.isCollapsed = k.isCollapsed(e.id);
                        o.enabled = !1;
                        if (o.enabled) {
                            var a = !0,
                                u = !1,
                                l = void 0;
                            try {
                                for (var s, c = Object.values(r)[Symbol.iterator](); !(a = (s = c.next()).done); a = !0) {
                                    var d = s.value;
                                    (0, x.vc)(d.type) && !(0, x.Q5)(d.type) && (o.channels[d.id] = new Xe(ce(o), d, i))
                                }
                            } catch (e) {
                                u = !0;
                                l = e
                            } finally {
                                try {
                                    a || null == c.return || c.return()
                                } finally {
                                    if (u) throw l
                                }
                            }
                        }
                        return o
                    }
                    var r = t.prototype;
                    r.shouldShowEmptyCategory = function() {
                        return this.enabled && this.isCollapsed && pe(Ce(t.prototype), "shouldShowEmptyCategory", this).call(this)
                    };
                    r.updateAllChannels = function(e) {
                        var n = this;
                        return Object.values(this.channels).reduce((function(t, r) {
                            return n.updateChannel(r.record, e) || t
                        }), !1)
                    };
                    r.updateChannel = function(e, n) {
                        if (!this.enabled) return !1;
                        if ((0, x.Q5)(e.type)) {
                            var r = this.channels[e.parent_id];
                            return null != r && this.updateShownChannelIds(r)
                        }
                        if (!(0, x.vc)(e.type)) return !1;
                        var i = pe(Ce(t.prototype), "updateChannel", this).call(this, e, n),
                            o = this.channels[e.id];
                        if (null == o) {
                            o = new Xe(this, e, n);
                            this.channels[e.id] = o;
                            this.invalidate();
                            return !0
                        }
                        return this.updateShownChannelIds(o) || i
                    };
                    r.getFirstVoiceChannel = function(e) {
                        return null
                    };
                    r.getShownChannelIds = function() {
                        if (null == this.shownChannelIds) {
                            var e = this.isCollapsed ? Le.Show : Le.WouldShowIfUncollapsed;
                            this.shownChannelIds = this.enabled ? a()(this.channels).filter((function(n) {
                                return n.renderLevel >= e
                            })).map((function(e) {
                                return [e.id, e.lastMessageTimestamp, e.renderLevel]
                            })).filter((function(e) {
                                var n = ye(e, 3),
                                    r = n[1];
                                return n[2] === Le.Show || r > 0 && Date.now() - r < t.MAX_TIMESTAMP_DELTA
                            })).sortBy((function(e) {
                                var n = ye(e, 3);
                                return -(n[1] - (n[2] === Le.Show ? 0 : te.c))
                            })).take(t.MAX_RECENT_CHANNELS).sortBy((function(e) {
                                return -ye(e, 2)[1]
                            })).map((function(e) {
                                return ye(e, 1)[0]
                            })).value() : []
                        }
                        return this.shownChannelIds
                    };
                    r.updateShownChannelIds = function(e) {
                        var n, r = this;
                        if (this.isThrottled) return !1;
                        var i = this.isCollapsed ? Le.Show : Le.WouldShowIfUncollapsed;
                        if (null == this.shownChannelIds || e.renderLevel < i) return !1;
                        if (e.lastMessageTimestamp > (null === (n = this.channels[this.shownChannelIds[0]]) || void 0 === n ? void 0 : n.lastMessageTimestamp)) {
                            var o = this.shownChannelIds.indexOf(e.id);
                            o > -1 && this.shownChannelIds.splice(o, 1);
                            this.shownChannelIds.splice(0, 0, e.id);
                            this.shownChannelIds.length > t.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, t.MAX_RECENT_CHANNELS));
                            if (c.Z.get("recent_channels_throttle")) {
                                this.isThrottled = !0;
                                setTimeout((function() {
                                    r.isThrottled = !1
                                }), this.RECENTS_THROTTLE)
                            }
                            return !0
                        }
                        return !1
                    };
                    return t
                }(Ue);
            ke.MIN_READABLE_CHANNELS = 7;
            ke.MAX_RECENT_CHANNELS = 10;
            ke.MAX_TIMESTAMP_DELTA = 6048e5;
            var Fe = function(e) {
                _e(t, e);
                var n = Te(t);

                function t(e, r, i) {
                    de(this, t);
                    var o;
                    o = n.call(this, e);
                    if (!e.optInEnabled) return ge(o);
                    if (h.Z.isFullServerPreview(e.id)) return ge(o);
                    o.isCollapsed = !1;
                    o.isMuted = !1;
                    o.channels = a()(r).map((function(e) {
                        return new ze(o, e, i)
                    })).keyBy((function(e) {
                        return e.id
                    })).value();
                    return o
                }
                var r = t.prototype;
                r.updateAllChannels = function(e) {
                    var n = this,
                        t = !1;
                    Object.keys(this.channels).forEach((function(r) {
                        n.updateChannel(n.channels[r].record, e) && (t = !0)
                    }));
                    return t
                };
                r.updateChannel = function(e, n) {
                    var r = pe(Ce(t.prototype), "updateChannel", this).call(this, e, n);
                    if (this.guild.optInEnabled) {
                        var i = this.channels[e.id],
                            o = nn(this.guild, e, n);
                        if (o && null == i) {
                            this.channels[e.id] = new ze(this, e, n);
                            this.invalidate();
                            return !0
                        }
                        if (!o && null != i) {
                            delete this.channels[e.id];
                            this.invalidate();
                            return !0
                        }
                    }
                    return r
                };
                r.getFirstVoiceChannel = function(e) {
                    return null
                };
                r.getShownChannelIds = function() {
                    if (null == this.shownChannelIds) {
                        var e = a()(this.channels).values().filter((function(e) {
                                return e.renderLevel === Le.Show || e.renderLevel === Le.WouldShowIfUncollapsed
                            })).filter((function(e) {
                                return !e.record.isGuildVocal()
                            })),
                            n = e.sortBy((function(e) {
                                return e.record.position
                            })).take(5).value(),
                            t = e.filter((function(e) {
                                return e.renderLevel === Le.Show
                            })).value(),
                            r = new Set(Ae(t).concat(Ae(n)));
                        this.shownChannelIds = a()(Ae(r)).sortBy((function(e) {
                            return e.record.position
                        })).map((function(e) {
                            return e.id
                        })).value()
                    }
                    return this.shownChannelIds
                };
                return t
            }(Ue);
            var je = function(e) {
                    _e(t, e);
                    var n = Te(t);

                    function t(e, r, i, o) {
                        de(this, t);
                        var u;
                        (u = n.call(this, e)).categoriesById = i;
                        u.hiddenChannelIds = null;
                        if (!e.optInEnabled) return ge(u);
                        u.isCollapsed = ie.Z.isVoiceCategoryCollapsed(e.id);
                        u.isMuted = !1;
                        u.categoriesById = i;
                        u.channels = a()(r).map((function(e) {
                            return new Je(u, e, o)
                        })).keyBy((function(e) {
                            return e.id
                        })).value();
                        return u
                    }
                    var r = t.prototype;
                    r.invalidate = function() {
                        pe(Ce(t.prototype), "invalidate", this).call(this);
                        this.hiddenChannelIds = null
                    };
                    r.getHiddenChannelIds = function() {
                        if (!this.guild.optInEnabled) return [];
                        if (null == this.hiddenChannelIds) {
                            var e = a()(this.channels).filter((function(e) {
                                return e.renderLevel === Le.WouldShowIfUncollapsed
                            })).value();
                            if (e.every((function(e) {
                                    return e.record.isCategory()
                                }))) {
                                this.hiddenChannelIds = [];
                                return this.hiddenChannelIds
                            }
                            this.hiddenChannelIds = e.map((function(e) {
                                return e.id
                            }))
                        }
                        return this.hiddenChannelIds
                    };
                    r.getRows = function() {
                        if (!this.guild.optInEnabled) return [];
                        var e = this.getShownChannelIds();
                        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [Ne] : e
                    };
                    r.getShownChannelIds = function() {
                        var e = this;
                        if (!this.guild.optInEnabled) return [];
                        if (null == this.shownChannelIds) {
                            var n = a()(this.channels).filter((function(e) {
                                return e.renderLevel === Le.Show
                            })).orderBy([function(n) {
                                return function(e, n) {
                                    if (e.record.type === ae.d4z.GUILD_CATEGORY) return e.record.position;
                                    if (null != e.record.parent_id) {
                                        var t, r;
                                        return null !== (r = null === (t = n[e.record.parent_id]) || void 0 === t ? void 0 : t.position) && void 0 !== r ? r : -1
                                    }
                                    return -1
                                }(n, e.categoriesById)
                            }, function(e) {
                                return e.record.type === ae.d4z.GUILD_CATEGORY ? -1 : e.record.position
                            }], ["asc", "asc"]).value();
                            this.shownChannelIds = [];
                            for (var t = 0; t < n.length; t++) {
                                var r, i = n[t];
                                t < n.length - 1 && i.record.type === ae.d4z.GUILD_CATEGORY && (null === (r = n[t + 1]) || void 0 === r ? void 0 : r.record.type) === ae.d4z.GUILD_CATEGORY || (t === n.length - 1 && i.record.type === ae.d4z.GUILD_CATEGORY || this.shownChannelIds.push(i.id))
                            }
                        }
                        return this.shownChannelIds
                    };
                    r.getFirstVoiceChannel = function(e) {
                        return null
                    };
                    return t
                }(Ue),
                Ke = function() {
                    function e(n, t) {
                        de(this, e);
                        this.communityRows = n.map(String);
                        t && this.communityRows.push(String(oe.f.GUILD_DIRECTORY))
                    }
                    var n = e.prototype;
                    n.isEmpty = function() {
                        return 0 === this.communityRows.length
                    };
                    n.getRows = function() {
                        return this.communityRows
                    };
                    n.getRow = function(e) {
                        return this.communityRows[e]
                    };
                    return e
                }(),
                Ye = function() {
                    function e(n, t, r) {
                        de(this, e);
                        this.category = n;
                        this.record = t;
                        this.position = -1;
                        this.threadIds = [];
                        this.threadCount = 0;
                        this.subtitle = null;
                        this.renderLevel = Le.CannotShow;
                        this.id = t.id;
                        var i = this.computeState(r),
                            o = i.renderLevel,
                            u = i.threadIds;
                        this.renderLevel = o;
                        this.threadCount = a().size(u);
                        this.threadIds = u;
                        o === Le.Show && (this.subtitle = this.computeSubtitle())
                    }
                    var n = e.prototype;
                    n.updateChannel = function(e, n) {
                        var t = !1;
                        if (null != e && e !== this.record) {
                            this.record = e;
                            t = !0
                        }
                        var r = this.computeState(n);
                        if (r.renderLevel !== this.renderLevel || !a().isEqual(r.threadIds, this.threadIds)) {
                            this.renderLevel = r.renderLevel;
                            this.threadIds = r.threadIds;
                            this.threadCount = a().size(r.threadIds);
                            t = !0
                        }
                        this.renderLevel === Le.Show && this.updateSubtitle() && (t = !0);
                        return t
                    };
                    n.updateSubtitle = function() {
                        var e = this.computeSubtitle();
                        if (a().isEqual(this.subtitle, e)) return !1;
                        this.subtitle = e;
                        return !0
                    };
                    n.computeSubtitle = function() {
                        return qe(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
                    };
                    he(e, [{
                        key: "isMuted",
                        get: function() {
                            return this.category.guild.mutedChannelIds.has(this.id)
                        }
                    }, {
                        key: "isCollapsed",
                        get: function() {
                            return z.Z.isCollapsed(this.id)
                        }
                    }, {
                        key: "isFirstVoiceChannel",
                        get: function() {
                            return this.category.getFirstVoiceChannel() === this
                        }
                    }, {
                        key: "lastMessageTimestamp",
                        get: function() {
                            var e;
                            return (e = Math).max.apply(e, [Q.ZP.lastMessageTimestamp(this.id)].concat(Ae(this.threadIds.map(Q.ZP.lastMessageTimestamp))))
                        }
                    }]);
                    return e
                }(),
                xe = function(e) {
                    _e(t, e);
                    var n = Te(t);

                    function t() {
                        de(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.computeState = function(e) {
                        var n = e.selectedChannel,
                            t = e.selectedVoiceChannelId,
                            r = e.activeJoinedRelevantThreads,
                            i = e.activeJoinedUnreadThreads,
                            o = [];
                        if (!q.Z.can(le.Pl.VIEW_CHANNEL, this.record)) {
                            if (this.id === t) return {
                                renderLevel: Le.Show,
                                threadIds: o
                            };
                            if (!s.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id)) return {
                                renderLevel: Le.CannotShow,
                                threadIds: o
                            }
                        }
                        var u = this.record.parent_id,
                            l = this.category.guild;
                        if ($e(l, this.record)) return {
                            renderLevel: Le.CannotShow,
                            threadIds: o
                        };
                        var c, d = (null == n ? void 0 : n.id) === this.id || t === this.id,
                            f = null != n && n.isThread() && n.parent_id === this.id,
                            h = null !== (c = d || f || !this.category.isCollapsed && !this.isMuted ? r[this.id] : i[this.id]) && void 0 !== c ? c : {};
                        o = Qe(this.record, h, n, t, l.hideMutedChannels);
                        if (l.optInEnabled && l.hideResourceChannels && this.record.hasFlag(ue.zZ.IS_GUILD_RESOURCE_CHANNEL)) return {
                            renderLevel: d ? Le.Show : Le.CannotShow,
                            threadIds: o
                        };
                        if (l.optInEnabled && !l.optedInChannels.has(this.id) && (null == u || !l.optedInChannels.has(u))) return {
                            renderLevel: Le.DoNotShow,
                            threadIds: o
                        };
                        if (d || f || !a().isEmpty(o) || Q.ZP.getMentionCount(this.id) > 0) return {
                            renderLevel: Le.Show,
                            threadIds: o
                        };
                        if (l.hideMutedChannels && l.mutedChannelIds.has(this.id)) return {
                            renderLevel: Le.DoNotShow,
                            threadIds: o
                        };
                        if (this.category.isCollapsed) {
                            if (l.mutedChannelIds.has(this.id) || null != u && l.mutedChannelIds.has(u)) return {
                                renderLevel: Le.WouldShowIfUncollapsed,
                                threadIds: o
                            };
                            if (this.record.isGuildVocal() || this.record.type === ae.d4z.GUILD_STORE) return {
                                renderLevel: Le.WouldShowIfUncollapsed,
                                threadIds: o
                            };
                            if ((0, x.vc)(this.record.type) && !1 === Q.ZP.hasRelevantUnread(this.record)) return {
                                renderLevel: Le.WouldShowIfUncollapsed,
                                threadIds: o
                            }
                        }
                        return {
                            renderLevel: Le.Show,
                            threadIds: o
                        }
                    };
                    return t
                }(Ye),
                We = function(e) {
                    _e(t, e);
                    var n = Te(t);

                    function t() {
                        de(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.computeState = function(e) {
                        var n, t = e.selectedChannel,
                            r = e.selectedVoiceChannelId,
                            i = e.activeJoinedRelevantThreads;
                        return q.Z.can(le.Pl.VIEW_CHANNEL, this.record) ? {
                            renderLevel: Le.Show,
                            threadIds: Qe(this.record, null !== (n = i[this.id]) && void 0 !== n ? n : {}, t, r, !1)
                        } : {
                            renderLevel: Le.CannotShow,
                            threadIds: []
                        }
                    };
                    return t
                }(Ye),
                ze = function(e) {
                    _e(t, e);
                    var n = Te(t);

                    function t() {
                        de(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.computeState = function(e) {
                        var n, t = e.selectedChannel,
                            r = e.selectedVoiceChannelId,
                            i = e.activeJoinedRelevantThreads;
                        return q.Z.can(le.Pl.VIEW_CHANNEL, this.record) ? {
                            renderLevel: en(this, e) ? Le.Show : Le.WouldShowIfUncollapsed,
                            threadIds: Qe(this.record, null !== (n = i[this.id]) && void 0 !== n ? n : {}, t, r, !1)
                        } : {
                            renderLevel: Le.CannotShow,
                            threadIds: []
                        }
                    };
                    return t
                }(Ye),
                Xe = function(e) {
                    _e(t, e);
                    var n = Te(t);

                    function t() {
                        de(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.computeState = function(e) {
                        var n = pe(Ce(t.prototype), "computeState", this).call(this, e),
                            r = n.renderLevel,
                            i = n.threadIds;
                        if (r > Le.CannotShow) {
                            var o = this.record.parent_id,
                                u = this.category.guild;
                            u.mutedChannelIds.has(this.id) || null != o && u.mutedChannelIds.has(o) ? r = Le.DoNotShow : (r === Le.Show || r === Le.DoNotShow && nn(this.category.guild, this.record, e)) && (r = Le.WouldShowIfUncollapsed);
                            r === Le.WouldShowIfUncollapsed && en(this, e) && (r = Le.Show);
                            i = a().sortBy(i, (function(e) {
                                return -Q.ZP.lastMessageTimestamp(e)
                            }))
                        }
                        return {
                            renderLevel: r,
                            threadIds: i
                        }
                    };
                    return t
                }(xe),
                Je = function(e) {
                    _e(t, e);
                    var n = Te(t);

                    function t() {
                        de(this, t);
                        return n.apply(this, arguments)
                    }
                    var r = t.prototype;
                    r.getRenderLevel = function(e) {
                        var n = this.category.guild;
                        return q.Z.can(le.Pl.VIEW_CHANNEL, this.record) ? e === Le.Show || e === Le.WouldShowIfUncollapsed || $e(n, this.record) ? Le.CannotShow : this.category.isCollapsed ? a().some($.Z.getVoiceStatesForChannel(this.record.id)) ? Le.Show : Le.WouldShowIfUncollapsed : Le.Show : Le.CannotShow
                    };
                    r.computeState = function(e) {
                        var n = pe(Ce(t.prototype), "computeState", this).call(this, e),
                            r = this.getRenderLevel(n.renderLevel);
                        r === Le.Show && (this.subtitle = qe(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled));
                        return {
                            threadIds: [],
                            renderLevel: r
                        }
                    };
                    return t
                }(xe);

            function qe(e, n, t) {
                if (e.type === ae.d4z.GUILD_VOICE) {
                    var r, i = f.ZP.getActiveEventByChannel(e.id);
                    if (null != i) return {
                        type: "event",
                        name: i.name
                    };
                    var o = ee.ZP.getVoiceStatesForChannel(e);
                    if (t && n && (0, re.a)(o)) return {
                        type: "go-live"
                    };
                    var a = l.ZP.getEmbeddedActivitiesForChannel(e.id),
                        s = (null != a ? a : []).map((function(e) {
                            var n;
                            return null === (n = X.Z.getGame(e.application_id)) || void 0 === n ? void 0 : n.name
                        })).filter(ne.lm);
                    return s.length > 0 ? {
                        type: "embedded-activities",
                        name: s.join(", ")
                    } : u.Z.getCurrentConfig({
                        guildId: e.guild_id,
                        location: "cf7f69_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && null != e.status && (null === (r = e.status) || void 0 === r ? void 0 : r.length) > 0 ? {
                        type: "voice",
                        text: e.status
                    } : null
                }
                return null
            }

            function Qe(e, n, t, r, i) {
                var o = null != t && (t.id === e.id || r === e.id),
                    u = null != t && t.isThread() && t.parent_id === e.id;
                if (x.uC.has(e.type)) {
                    var l = a().sortBy(Object.values(n), (function(e) {
                        return -e.joinTimestamp
                    })).map((function(e) {
                        return e.channel.id
                    }));
                    if (o) return l;
                    if (u) {
                        t.id in n || (0, p.cn)() || l.unshift(t.id);
                        return l
                    }
                    return i ? l.filter((function(e) {
                        return !Y.Z.isMuted(e)
                    })) : l
                }
                return []
            }

            function $e(e, n) {
                return e.favoriteChannelIds.has(n.id) && (e.optInEnabled || !1)
            }

            function en(e, n) {
                var t = n.selectedChannel,
                    r = n.activeJoinedRelevantThreads;
                if (Q.ZP.getMentionCount(e.id) > 0) return !0;
                for (var i in r[e.id])
                    if (Q.ZP.getMentionCount(i) > 0) return !0;
                if (null != t) {
                    if (t.id === e.id) return !0;
                    if (t.isThread() && t.parent_id === e.id) return !0
                }
                var o = j.Z.getNewChannelIds(e.category.guild.id);
                return !(o.size > me) && !!o.has(e.id)
            }

            function nn(e, n, t) {
                var r = t.selectedChannel,
                    i = t.activeJoinedRelevantThreads;
                if (n.type === ae.d4z.GUILD_DIRECTORY) return !1;
                if (!e.optInEnabled) return !1;
                if (n.isGuildVocal()) return !1;
                if (e.optedInChannels.has(n.id)) return !1;
                if (n.isThread()) return !1;
                if (null != n.parent_id && e.optedInChannels.has(n.parent_id)) return !1;
                if (e.hideResourceChannels && n.hasFlag(ue.zZ.IS_GUILD_RESOURCE_CHANNEL)) return !1;
                if (null != r && !(0, p.cn)()) {
                    if (r.id === n.id) return !0;
                    if (r.isThread() && r.parent_id === n.id) return !0
                }
                if (Q.ZP.getMentionCount(n.id) > 0) return !0;
                var o = j.Z.getNewChannelIds(e.id),
                    a = Array.from(o).sort((function(e, n) {
                        return te.Z.compare(n, e)
                    }));
                if (o.has(n.id) && a.indexOf(n.id) < me) return !0;
                for (var u in i[n.id]) {
                    if (Q.ZP.getMentionCount(u) > 0) return !0;
                    if (Q.ZP.hasUnread(u)) return !0;
                    if (Q.ZP.hasRecentlyVisitedAndRead(u)) return !0
                }
                return !(e.mutedChannelIds.has(n.id) || null != n.parent_id && e.mutedChannelIds.has(n.parent_id)) && !!Q.ZP.hasRecentlyVisitedAndRead(n.id)
            }
            var tn = new Set(Object.values(oe.f))
        },
        978868: (e, n, t) => {
            t.d(n, {
                Z: () => z
            });
            var r = t(496486),
                i = t.n(r),
                o = t(202351),
                a = t(744564),
                u = t(258104),
                l = t(747820),
                s = t(269300),
                c = t(18882),
                d = t(487685),
                f = t(473419),
                h = t(664625),
                E = t(968968),
                p = t(61209),
                C = t(996077),
                _ = t(959207),
                S = t(682776),
                v = t(179913),
                g = t(715107),
                I = t(9430),
                y = t(72580),
                A = t(576122),
                O = t(131559);

            function b(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function T(e) {
                T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return T(e)
            }

            function L(e, n) {
                return !n || "object" !== m(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function N(e, n) {
                N = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return N(e, n)
            }
            var m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function R(e) {
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
                    var t, r = T(e);
                    if (n) {
                        var i = T(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return L(this, t)
                }
            }
            var D = null,
                P = null,
                Z = new A.ZP;

            function w() {
                var e = g.Z.getChannelId(),
                    n = g.Z.getVoiceChannelId();
                D = e;
                P = n;
                return Z.clear()
            }

            function G(e) {
                var n = e.guild.id;
                return Z.clearGuildId(n)
            }

            function M(e) {
                var n = e.channel.guild_id;
                return Z.clearGuildId(n)
            }

            function U(e) {
                var n = e.guildId;
                return Z.clearGuildId(n)
            }

            function H(e) {
                var n = e.channelId;
                return Z.nonPositionalChannelIdUpdate(n)
            }

            function B() {
                return null != D && Z.nonPositionalChannelIdUpdate(D)
            }

            function V(e) {
                var n = e.channel;
                return Z.nonPositionalChannelIdUpdate(n.id)
            }

            function k(e) {
                var n = e.id;
                return Z.nonPositionalChannelIdUpdate(n)
            }

            function F() {
                var e = g.Z.getChannelId(),
                    n = g.Z.getVoiceChannelId(),
                    t = D !== e || P !== n;
                if (!t) return !1;
                i()([D, P, e, n]).uniq().forEach((function(e) {
                    null != e && Z.nonPositionalChannelIdUpdate(e) && (t = !0)
                }));
                D = e;
                P = n;
                return !0
            }

            function j(e) {
                var n = e.id,
                    t = p.Z.getChannel(n);
                return null == t ? Z.clearGuildId(n) : Z.clearGuildId(t.guild_id)
            }

            function K(e) {
                var n = e.guildId;
                return Z.clearGuildId(n)
            }

            function Y() {
                return Z.updateSubtitles()
            }

            function x(e) {
                var n = e.guildScheduledEvent;
                return Z.updateSubtitles(n.guild_id)
            }
            var W = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && N(e, n)
                }(t, e);
                var n = R(t);

                function t() {
                    b(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(c.Z, h.default, E.Z, p.Z, C.Z, u.ZP, _.Z, l.Z, s.ZP, d.Z, S.Z, v.ZP, g.Z, I.Z, f.Z)
                };
                r.getGuild = function(e, n) {
                    var t = Z.getGuild(e, n);
                    return {
                        guildChannelsVersion: t.version,
                        guildChannels: t
                    }
                };
                r.getGuildWithoutChangingCommunityRows = function(e) {
                    var n = Z.getGuildWithoutCommunityRows(e);
                    return {
                        guildChannelsVersion: n.version,
                        guildChannels: n
                    }
                };
                r.recentsChannelCount = function(e) {
                    if (null == e) return 0;
                    var n = Z.getGuildWithoutCommunityRows(e);
                    return n.getCategoryFromSection(n.recentsSectionNumber).getShownChannelIds().length
                };
                return t
            }(o.ZP.Store);
            W.displayName = "ChannelListStore";
            const z = new W(a.Z, {
                APPLICATION_FETCH_FAIL: Y,
                APPLICATION_FETCH_SUCCESS: Y,
                APPLICATION_FETCH: Y,
                APPLICATIONS_FETCH_FAIL: Y,
                APPLICATIONS_FETCH_SUCCESS: Y,
                APPLICATIONS_FETCH: Y,
                BACKGROUND_SYNC: w,
                BULK_ACK: function(e) {
                    var n = e.channels,
                        t = !1;
                    i()(n).map((function(e) {
                        var n;
                        return null === (n = p.Z.getChannel(e.channelId)) || void 0 === n ? void 0 : n.guild_id
                    })).filter(y.lm).uniq().forEach((function(e) {
                        Z.clearGuildId(e) && (t = !0)
                    }));
                    return t
                },
                CACHE_LOADED_LAZY: w,
                CATEGORY_COLLAPSE_ALL: U,
                CATEGORY_COLLAPSE: j,
                CATEGORY_EXPAND_ALL: U,
                CATEGORY_EXPAND: j,
                CHANNEL_ACK: H,
                CHANNEL_CREATE: M,
                CHANNEL_COLLAPSE: function(e) {
                    var n, t = e.channelId;
                    return Z.clearGuildId(null === (n = p.Z.getChannel(t)) || void 0 === n ? void 0 : n.guild_id)
                },
                CHANNEL_DELETE: M,
                CHANNEL_LOCAL_ACK: H,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: H,
                CHANNEL_SELECT: F,
                VOICE_CHANNEL_STATUS_UPDATE: function(e) {
                    var n = p.Z.getBasicChannel(e.id);
                    if (null != n && null != n.guild_id) return Z.clearGuildId(n.guild_id)
                },
                CHANNEL_UPDATES: function(e) {
                    var n = e.channels,
                        t = !1;
                    i()(n).map((function(e) {
                        return e.guild_id
                    })).uniq().forEach((function(e) {
                        Z.clearGuildId(e) && (t = !0)
                    }));
                    return t
                },
                CONNECTION_OPEN_SUPPLEMENTAL: Y,
                CONNECTION_OPEN: w,
                CURRENT_USER_UPDATE: w,
                DECAY_READ_STATES: w,
                DEV_TOOLS_DESIGN_TOGGLE_SET: w,
                DISABLE_AUTOMATIC_ACK: H,
                DRAWER_CLOSE: B,
                DRAWER_OPEN: B,
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    var n = e.guildId,
                        t = e.channelId;
                    return Z.updateSubtitles(n, t)
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: Y,
                EMBEDDED_ACTIVITY_LAUNCH_START: Y,
                ENABLE_AUTOMATIC_ACK: H,
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    var n = e.guildId;
                    return Z.updateSubtitles(n)
                },
                GAMES_DATABASE_FETCH_FAIL: Y,
                GAMES_DATABASE_FETCH: Y,
                GAMES_DATABASE_UPDATE: Y,
                GUILD_APPLICATIONS_FETCH_SUCCESS: Y,
                GUILD_CREATE: G,
                GUILD_DELETE: G,
                GUILD_MEMBER_UPDATE: function(e) {
                    var n = e.guildId,
                        t = e.user;
                    return h.default.getId() === t.id && Z.clearGuildId(n)
                },
                GUILD_ROLE_CREATE: U,
                GUILD_ROLE_DELETE: U,
                GUILD_ROLE_UPDATE: U,
                GUILD_SCHEDULED_EVENT_CREATE: x,
                GUILD_SCHEDULED_EVENT_DELETE: x,
                GUILD_SCHEDULED_EVENT_UPDATE: x,
                GUILD_TOGGLE_COLLAPSE_MUTED: U,
                GUILD_UPDATE: G,
                GUILD_FEED_FETCH_SUCCESS: Y,
                LOAD_MESSAGES_SUCCESS: H,
                MESSAGE_ACK: H,
                MESSAGE_CREATE: function(e) {
                    var n = e.channelId;
                    return Z.nonPositionalChannelIdUpdate(n)
                },
                MESSAGE_DELETE_BULK: H,
                MESSAGE_DELETE: H,
                OVERLAY_INITIALIZE: w,
                PASSIVE_UPDATE_V1: function(e) {
                    if (null != e.channels) {
                        Z.clearGuildId(e.guildId);
                        return !0
                    }
                    return !1
                },
                RESORT_THREADS: H,
                THREAD_CREATE: V,
                THREAD_DELETE: function(e) {
                    var n = e.channel;
                    return Z.nonPositionalChannelUpdate(n)
                },
                THREAD_LIST_SYNC: U,
                THREAD_MEMBER_UPDATE: k,
                THREAD_MEMBERS_UPDATE: k,
                THREAD_UPDATE: V,
                UPDATE_CHANNEL_DIMENSIONS: H,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: U,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: U,
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    e.userGuildSettings.forEach((function(e) {
                        var n = e.guild_id;
                        return Z.clearGuildId(n)
                    }))
                },
                USER_GUILD_SETTINGS_GUILD_UPDATE: U,
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: U,
                IMPERSONATE_STOP: U,
                IMPERSONATE_UPDATE: U,
                VOICE_CATEGORY_COLLAPSE: K,
                VOICE_CATEGORY_EXPAND: K,
                VOICE_CHANNEL_SELECT: F,
                VOICE_STATE_UPDATES: function(e) {
                    var n = e.voiceStates,
                        t = F(),
                        r = new Set,
                        i = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var u, l = n[Symbol.iterator](); !(i = (u = l.next()).done); i = !0) {
                            var s = u.value,
                                c = s.channelId,
                                d = s.oldChannelId;
                            if (null != d && !r.has(d)) {
                                Z.nonPositionalChannelIdUpdate(d) && (t = !0);
                                r.add(d)
                            }
                            if (null != c && !r.has(c)) {
                                Z.nonPositionalChannelIdUpdate(c) && (t = !0);
                                r.add(c)
                            }
                        }
                    } catch (e) {
                        o = !0;
                        a = e
                    } finally {
                        try {
                            i || null == l.return || l.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return t
                },
                WINDOW_FOCUS: B,
                DISMISS_FAVORITE_SUGGESTION: function(e) {
                    var n = e.channelId;
                    return Z.nonPositionalChannelIdUpdate(n)
                },
                SET_RECENTLY_ACTIVE_COLLAPSED: w,
                BULK_CLEAR_RECENTS: U,
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var n, t = e.settings;
                    if (t.type !== O.yP.PRELOADED_USER_SETTINGS) return !1;
                    var r = null === (n = t.proto.guilds) || void 0 === n ? void 0 : n.guilds,
                        i = !1;
                    null != r && Object.keys(r).forEach((function(e) {
                        null != r[e].guildRecentsDismissedAt && (i = Z.updateRecentsCategory(e) || i)
                    }));
                    return i
                },
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: U,
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: U
            })
        },
        627001: (e, n, t) => {
            t.d(n, {
                Z: () => E
            });
            var r = t(202351),
                i = t(744564);

            function o(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function u(e, n) {
                return !n || "object" !== s(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function l(e, n) {
                l = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return l(e, n)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function c(e) {
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
                    var t, r = a(e);
                    if (n) {
                        var i = a(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return u(this, t)
                }
            }
            var d = {};

            function f(e) {
                var n = e.guildId;
                e.expand ? d[n] = !0 : delete d[n]
            }
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
                    n && l(e, n)
                }(t, e);
                var n = c(t);

                function t() {
                    o(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function(e) {
                    d = null != e ? e : {}
                };
                r.isVoiceCategoryExpanded = function(e) {
                    var n;
                    return null !== (n = null != e && d[e]) && void 0 !== n && n
                };
                r.isVoiceCategoryCollapsed = function(e) {
                    return !this.isVoiceCategoryExpanded(e)
                };
                r.getState = function() {
                    return d
                };
                return t
            }(r.ZP.PersistedStore);
            h.displayName = "ChannelListVoiceCategoryStore";
            h.persistKey = "ChannelListVoiceCategoryStore";
            const E = new h(i.Z, {
                VOICE_CATEGORY_COLLAPSE: f,
                VOICE_CATEGORY_EXPAND: f
            })
        },
        4207: (e, n, t) => {
            t.d(n, {
                o: () => D,
                t: () => P
            });
            var r = t(667294),
                i = t(496486),
                o = t.n(i),
                a = t(418705),
                u = t(258104),
                l = t(419051),
                s = t(962584),
                c = t(269300),
                d = t(18882),
                f = t(487685),
                h = t(382060),
                E = t(968968),
                p = t(61209),
                C = t(996077),
                _ = t(959207),
                S = t(682776),
                v = t(179913),
                g = t(715107),
                I = t(9430),
                y = t(72580),
                A = t(576122),
                O = t(485911),
                b = t(520453);

            function T(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function L(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || m(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function N(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || m(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, n) {
                if (e) {
                    if ("string" == typeof e) return T(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? T(e, n) : void 0
                }
            }
            var R = [u.ZP, l.Z, c.ZP, d.Z, f.Z, E.Z, p.Z, _.Z, S.Z, v.ZP, g.Z, I.Z];

            function D() {
                var e = L(r.useState((function() {
                        return P()
                    })), 2),
                    n = e[0],
                    t = e[1];
                r.useEffect((function() {
                    var e = o().throttle((function() {
                        return t(P())
                    }), 100);
                    R.forEach((function(n) {
                        return n.addChangeListener(e)
                    }));
                    return function() {
                        return R.forEach((function(n) {
                            return n.removeChangeListener(e)
                        }))
                    }
                }), []);
                return n
            }

            function P() {
                var e = function(e, r) {
                        var a = r.isCollapsed,
                            l = r.isMuted;
                        return o()(e).map((function(e) {
                            if (!e.isPrivate() && !S.Z.can(b.Pl.VIEW_CHANNEL, e)) return null;
                            var s, c = null != i && (i.id === e.id || u === e.id),
                                f = null != i && i.isThread() && i.parent_id === e.id,
                                E = null !== (s = c || f || !a ? d.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id) : d.Z.getActiveJoinedUnreadThreadsForParent(e.guild_id, e.id)) && void 0 !== s ? s : {},
                                p = (0,
                                    A.zR)(e, E, i, u, t),
                                _ = C.Z.isCollapsed(e.id),
                                g = I.Z.isChannelMuted(e.guild_id, e.id),
                                y = {
                                    id: e.id,
                                    record: e,
                                    category: r,
                                    position: n[e.id].order,
                                    threadIds: p,
                                    threadCount: o().size(p),
                                    isCollapsed: _,
                                    isMuted: g,
                                    isFirstVoiceChannel: !1,
                                    subtitle: (0, A.Bz)(e, _, !1)
                                };
                            if (c || f || v.ZP.getMentionCount(e.id) > 0) return y;
                            if (t && g) return null;
                            if (a) {
                                if (g || l) return null;
                                if ((0, h.vc)(e.type) && !1 === v.ZP.hasRelevantUnread(e)) return null
                            }
                            return y
                        })).filter(y.lm).sortBy((function(e) {
                            var n = e.record;
                            return n.isGuildVocal() ? n.position + 1e4 : n.position
                        })).value()
                    },
                    n = l.Z.getFavoriteChannels(),
                    t = I.Z.isGuildCollapsed(O._),
                    r = g.Z.getChannelId(),
                    i = p.Z.getChannel(r),
                    u = g.Z.getVoiceChannelId(),
                    c = [],
                    f = {};
                for (var _ in n) {
                    var T = n[_],
                        L = p.Z.getChannel(T.id);
                    if (null != L && T.type !== a.Dd.CATEGORY) {
                        var m = (0, s.r)(n, T, L);
                        if (null != T.parentId && T.parentId in n) {
                            T.parentId in f || (f[T.parentId] = []);
                            f[T.parentId].push(m)
                        } else c.push(m)
                    }
                }
                var R = null,
                    D = {
                        isMuted: !1,
                        isCollapsed: !1,
                        position: 0,
                        getChannelRecords: function() {
                            return c
                        },
                        getShownChannelIds: function() {
                            return c.map((function(e) {
                                return e.id
                            }))
                        },
                        getShownChannelAndThreadIds: function() {
                            return c.map((function(e) {
                                return e.id
                            }))
                        },
                        isEmpty: function() {
                            return 0 === c.length
                        },
                        get channelList() {
                            null == R && (R = e(c, this));
                            return R
                        }
                    },
                    P = o()(n).values().filter((function(e) {
                        return e.type === a.Dd.CATEGORY
                    })).sortBy((function(e) {
                        return e.order
                    })).map((function(n) {
                        var t, r = n.id,
                            i = n.order,
                            o = l.Z.getCategoryRecord(r),
                            a = null !== (t = f[r]) && void 0 !== t ? t : [],
                            u = I.Z.isChannelMuted(O._, r),
                            s = E.Z.isCollapsed(r),
                            c = null;
                        return {
                            isMuted: u,
                            isCollapsed: s,
                            record: o,
                            id: r,
                            position: i,
                            getChannelRecords: function() {
                                return a
                            },
                            getShownChannelIds: function() {
                                return a.map((function(e) {
                                    return e.id
                                }))
                            },
                            getShownChannelAndThreadIds: function() {
                                return a.map((function(e) {
                                    return e.id
                                }))
                            },
                            isEmpty: function() {
                                return 0 === a.length
                            },
                            get channelList() {
                                null == c && (c = e(a, this));
                                return c
                            }
                        }
                    })).value(),
                    Z = {
                        isEmpty: function() {
                            return !0
                        },
                        getRows: function() {
                            return []
                        },
                        getRow: function() {
                            return null
                        }
                    },
                    w = {
                        id: O._,
                        hideMutedChannels: t,
                        favoritesSectionNumber: 1,
                        recentsSectionNumber: 2,
                        voiceChannelsSectionNumber: -999,
                        getSections: function() {
                            return [0, 0, 0, D.channelList.length].concat(N(P.map((function(e) {
                                return Math.max(1, e.channelList.length)
                            }))))
                        },
                        isPlaceholderRow: function(e, n) {
                            return !(e < A.wF || 0 !== n) && 0 === P[e - A.wF].channelList.length
                        },
                        getCategoryFromSection: function(e) {
                            return e === A.wd ? D : P[e - A.wF]
                        },
                        getNamedCategoryFromSection: function(e) {
                            return P[e - A.wF]
                        },
                        getChannelFromSectionRow: function(e, n) {
                            var t = this.getCategoryFromSection(e);
                            return null == t || null == t.channelList[n] ? null : {
                                category: t,
                                channel: t.channelList[n]
                            }
                        },
                        getCommunitySection: function() {
                            return Z
                        },
                        getFirstVoiceChannel: function() {
                            return null
                        },
                        getSectionRowsFromChannel: function(e) {
                            for (var n = [D].concat(N(P)), t = 0; t < n.length; t++)
                                for (var r = 0; r < n[t].channelList.length; r++)
                                    if (n[t].channelList[r].id === e) return [{
                                        section: t + A.wd,
                                        row: r
                                    }];
                            return []
                        },
                        forEachShownChannel: function(e) {
                            var n = [D].concat(N(P)),
                                t = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var o, a = n[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                                    var u = o.value,
                                        l = !0,
                                        s = !1,
                                        c = void 0;
                                    try {
                                        for (var d, f = u.channelList[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                                            var h = d.value;
                                            e(h.record);
                                            var E = !0,
                                                C = !1,
                                                _ = void 0;
                                            try {
                                                for (var S, v = h.threadIds[Symbol.iterator](); !(E = (S = v.next()).done); E = !0) {
                                                    var g = S.value,
                                                        I = p.Z.getChannel(g);
                                                    null != I && e(I)
                                                }
                                            } catch (e) {
                                                C = !0;
                                                _ = e
                                            } finally {
                                                try {
                                                    E || null == v.return || v.return()
                                                } finally {
                                                    if (C) throw _
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
                            } catch (e) {
                                r = !0;
                                i = e
                            } finally {
                                try {
                                    t || null == a.return || a.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                        },
                        forEachChannel: function(e) {
                            var n = [D].concat(N(P)),
                                t = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var o, a = n[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                                    var u = o.value,
                                        l = !0,
                                        s = !1,
                                        c = void 0;
                                    try {
                                        for (var d, f = u.getChannelRecords()[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                                            e(d.value)
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
                            } catch (e) {
                                r = !0;
                                i = e
                            } finally {
                                try {
                                    t || null == a.return || a.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                        },
                        getSlicedChannels: function(e) {
                            return [
                                [], e, []
                            ]
                        },
                        getChannels: function() {
                            return []
                        }
                    };
                return w
            }
        },
        966554: (e, n, t) => {
            t.d(n, {
                f: () => r
            });
            var r;
            ! function(e) {
                e.GUILD_PREMIUM_PROGRESS_BAR = "guild-premium-progress-bar";
                e.GUILD_SCHEDULED_EVENTS = "guild-scheduled-events";
                e.GUILD_HUB_HEADER_OPTIONS = "guild-hub-header-options";
                e.GUILD_FAVORITES = "favorites";
                e.GUILD_CHANNEL_LIST_OPT_IN_NOTICE = "guild-channel-list-opt-in-notice";
                e.GUILD_ROLE_SUBSCRIPTIONS = "role-subscriptions";
                e.GUILD_SHOP = "shop";
                e.GUILD_MEMBER_APPLICATIONS = "member-applications";
                e.GUILD_HOME = "@home";
                e.CHANNELS_AND_ROLES = "channels-and-roles";
                e.BROWSE_CHANNELS = "browse-channels";
                e.GUILD_DIRECTORY = "guild-directory";
                e.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR = "guild-new-member-actions-progress-bar";
                e.GUILD_MOD_DASH_MEMBER_SAFETY = "guild-mod-dash-member-safety"
            }(r || (r = {}))
        },
        832748: (e, n, t) => {
            t.d(n, {
                Z: () => T
            });
            var r = t(202351),
                i = t(630631),
                o = t(744564),
                a = t(52317),
                u = t(27851),
                l = t(567403),
                s = t(9430),
                c = t(661123),
                d = t(873936),
                f = t(998918),
                h = t(2590),
                E = t(131559);

            function p(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function C(e) {
                C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return C(e)
            }

            function _(e, n) {
                return !n || "object" !== v(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function S(e, n) {
                S = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return S(e, n)
            }
            var v = function(e) {
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
                    var t, r = C(e);
                    if (n) {
                        var i = C(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return _(this, t)
                }
            }
            var I = "guildUnreadsEnabledStorageKey",
                y = "guildUnreadsLastClearedStorageKey",
                A = {
                    guildUnreadsLastCleared: {}
                },
                O = A;
            var b = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && S(e, n)
                }(t, e);
                var n = g(t);

                function t() {
                    p(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function(e) {
                    this.waitFor(u.Z);
                    O = null != e ? e : A;
                    ! function() {
                        i.Z.remove("guildUnreadsOverridesStorageKey");
                        var e, n, t, r = null !== (e = O.guildUnreadsEnabled) && void 0 !== e ? e : {},
                            o = null !== (n = i.Z.get(I)) && void 0 !== n ? n : new Set;
                        o.size > 0 && o.forEach((function(e) {
                            r[e] = !0
                        }));
                        i.Z.remove(I);
                        O.guildUnreadsLastCleared = null !== (t = i.Z.get(y)) && void 0 !== t ? t : {};
                        i.Z.remove(y);
                        var u = {};
                        Object.keys(r).map((function(e) {
                            var n = !0 === r[e],
                                t = s.Z.getGuildFlags(e);
                            t = (0, c.mB)(t, E.vc.UNREADS_MENTIONS_AND_HIGHLIGHTS, n);
                            t = (0,
                                c.mB)(t, E.vc.UNREADS_ALL_MESSAGES, !n);
                            u[e] = {
                                flags: t
                            }
                        }));
                        Object.keys(u).length > 0 && a.Z.saveUserGuildSettingsBulk(u);
                        delete O.guildUnreadsEnabled
                    }()
                };
                r.getState = function() {
                    return O
                };
                r.getGuildUnreadsLastCleared = function(e) {
                    return O.guildUnreadsLastCleared[e]
                };
                return t
            }(r.ZP.PersistedStore);
            b.displayName = "GuildUnreadSettingsStore";
            b.persistKey = "GuildUnreadSettingsStore";
            const T = new b(o.Z, {
                CONNECTION_OPEN: function() {
                    if ((0, f.kC)()) {
                        var e = l.Z.getGuilds(),
                            n = u.Z.getMemberCounts();
                        Object.values(e).map((function(e) {
                            var t = s.Z.getGuildFlags(e.id),
                                r = (0, c.yE)(t, E.vc.UNREADS_MENTIONS_AND_HIGHLIGHTS),
                                i = (0, c.yE)(t, E.vc.UNREADS_ALL_MESSAGES);
                            if (!e.hasFeature(h.oNc.COMMUNITY) && n[e.id] < 200) r && (0, d.EQ)(e.id, !1);
                            else if (!r && !i) {
                                s.Z.getMessageNotifications(e.id) === h.bL.ALL_MESSAGES && e.defaultMessageNotifications !== h.bL.ALL_MESSAGES || (0, d.EQ)(e.id, !0)
                            }
                        }))
                    }
                },
                GUILD_UNREADS_SET_LAST_CLEARED: function(e) {
                    var n = e.guildId;
                    s.Z.isGuildUnreadSettingEnabled(n) && (O.guildUnreadsLastCleared[n] = Date.now())
                }
            })
        },
        873936: (e, n, t) => {
            t.d(n, {
                MR: () => s,
                EQ: () => c,
                B1: () => d
            });
            var r = t(744564),
                i = t(201459),
                o = t(9430),
                a = t(661123),
                u = t(736401),
                l = t(131559);

            function s(e, n, t) {
                var r = o.Z.getGuildChannelFlags(e, n);
                r = (0, a.mB)(r, l.ic.UNREADS_ALL_MESSAGES, t === u.N.ALL_MESSAGES);
                r = (0, a.mB)(r, l.ic.UNREADS_MENTIONS_AND_HIGHLIGHTS, t === u.N.MENTIONS_AND_HIGHLIGHTS);
                i.Z.updateChannelOverrideSettings(e, n, {
                    flags: r
                })
            }

            function c(e, n) {
                var t = o.Z.getGuildFlags(e);
                t = (0, a.mB)(t, l.vc.UNREADS_MENTIONS_AND_HIGHLIGHTS, n);
                t = (0, a.mB)(t, l.vc.UNREADS_ALL_MESSAGES, !n);
                i.Z.updateGuildNotificationSettings(e, {
                    flags: t
                })
            }

            function d(e) {
                r.Z.dispatch({
                    type: "GUILD_UNREADS_SET_LAST_CLEARED",
                    guildId: e
                })
            }
        },
        162341: (e, n, t) => {
            t.d(n, {
                J: () => r
            });
            var r = "KEYBOARD_SHORTCUT_MODAL_KEY"
        },
        510758: (e, n, t) => {
            t.d(n, {
                Z: () => Z
            });
            var r = t(842227),
                i = t(202351),
                o = t(744564),
                a = t(496916),
                u = t(841800),
                l = t(473419),
                s = t(664625),
                c = t(61209),
                d = t(5544),
                f = t(21372),
                h = t(567403),
                E = t(179913),
                p = t(9430),
                C = t(53452),
                _ = t(2590);

            function S(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function v(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function I(e, n) {
                return !n || "object" !== O(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function y(e, n) {
                y = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return y(e, n)
            }

            function A(e) {
                return function(e) {
                    if (Array.isArray(e)) return S(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return S(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
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
                    var t, r = g(e);
                    if (n) {
                        var i = g(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return I(this, t)
                }
            }
            var T = new Set,
                L = {},
                N = {};

            function m(e, n) {
                var t = L[e];
                if (null != t && null != n && t.has(n)) {
                    var i;
                    p.Z.isOptInEnabled(e) && !(null === (i = c.Z.getChannel(n)) || void 0 === i ? void 0 : i.isThread()) && null == E.ZP.ackMessageId(n) && o.Z.wait((function() {
                        return (0, a.In)(n, !0, !0, r.default.atPreviousMillisecond(n))
                    }))
                }
            }

            function R(e) {
                var n;
                if (null == L[e]) {
                    var t = d.ZP.getChannels(e)[d.sH].map((function(e) {
                            return e.channel.id
                        })),
                        i = null === (n = f.ZP.getMember(e, s.default.getId())) || void 0 === n ? void 0 : n.joinedAt;
                    if (null != i) {
                        L[e] = new Set;
                        var o = new Date(i).getTime();
                        if (0 !== t.length) {
                            L[e] = new Set(t.filter((function(n) {
                                var t = r.default.extractTimestamp(n);
                                return null == E.ZP.getTrackedAckMessageId(n) && t > Date.now() - C.Z.Millis.WEEK && t > l.Z.getGuildRecentsDismissedAt(e) && t > o && !p.Z.isChannelOrParentOptedIn(e, n)
                            })));
                            N[e] = Date.now()
                        }
                    }
                }
            }

            function D() {
                Object.keys(L).forEach((function(e) {
                    var n = L[e];
                    L[e] = new Set(A(n).filter((function(n) {
                        return !p.Z.isChannelOrParentOptedIn(e, n)
                    })))
                }))
            }
            var P = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && y(e, n)
                }(t, e);
                var n = b(t);

                function t() {
                    v(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(d.ZP, s.default, f.ZP, p.Z, E.ZP, l.Z);
                    this.syncWith([p.Z], D)
                };
                r.getNewChannelIds = function(e) {
                    null != e && null == L[e] && R(e);
                    var n;
                    return null != e && null !== (n = L[e]) && void 0 !== n ? n : T
                };
                r.shouldIndicateNewChannel = function(e, n) {
                    var t;
                    if (null == e) return !1;
                    var r = h.Z.getGuild(e);
                    if (null == r || !r.hasFeature(_.oNc.COMMUNITY)) return !1;
                    null != e && null == L[e] && R(e);
                    return (null === (t = L[e]) || void 0 === t ? void 0 : t.has(n)) && null == E.ZP.getTrackedAckMessageId(n)
                };
                return t
            }(i.ZP.Store);
            P.displayName = "NewChannelsStore";
            const Z = new P(o.Z, {
                BULK_CLEAR_RECENTS: function(e) {
                    var n = e.guildId,
                        t = e.channelIds;
                    if (null == L[n]) return !1;
                    t.forEach((function(e) {
                        return L[n].delete(e)
                    }));
                    0 === L[n].size && delete L[n]
                },
                CHANNEL_ACK: function() {
                    return !0
                },
                CHANNEL_SELECT: function(e) {
                    var n = e.guildId,
                        t = e.channelId;
                    if (null == n) return !1;
                    if (null == L[n] || N[n] < Date.now() - C.Z.Millis.HOUR) {
                        R(n);
                        return !0
                    }
                    null != t && m(n, t);
                    return !1
                },
                SIDEBAR_VIEW_CHANNEL: function(e) {
                    var n = e.guildId,
                        t = e.channelId,
                        r = e.sidebarType;
                    if (null == n || r !== u.tI.VIEW_CHANNEL) return !1;
                    m(n, t);
                    return !1
                },
                SIDEBAR_VIEW_GUILD: function(e) {
                    var n = e.guildId,
                        t = e.baseChannelId;
                    if (null == n) return !1;
                    m(n, t);
                    return !1
                },
                GUILD_DELETE: function(e) {
                    var n = e.guild;
                    delete L[n.id]
                },
                CHANNEL_CREATE: function(e) {
                    var n = e.channel;
                    if (!n.isVocal()) {
                        var t;
                        L[n.guild_id] = null !== (t = L[n.guild_id]) && void 0 !== t ? t : new Set;
                        L[n.guild_id].add(n.id)
                    }
                }
            })
        },
        190624: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(744564),
                i = t(720419),
                o = t(828439),
                a = t(347005),
                u = t(316743),
                l = t(841800),
                s = t(897196);
            const c = {
                openPrivateChannelAsSidebar: function(e) {
                    var n = e.channelId,
                        t = e.messageId,
                        o = e.baseChannelId,
                        a = e.hasSingleMessageRequest;
                    r.Z.dispatch({
                        type: "SIDEBAR_VIEW_CHANNEL",
                        sidebarType: l.tI.VIEW_MESSAGE_REQUEST,
                        baseChannelId: o,
                        channelId: n,
                        details: {
                            type: l.Ff.MESSAGE_REQUEST,
                            hasSingleMessageRequest: a
                        }
                    });
                    null != t ? i.Z.jumpToMessage({
                        channelId: n,
                        messageId: t,
                        flash: !0
                    }) : u.Z.fetchMessages({
                        channelId: n
                    })
                },
                openChannelAsSidebar: function(e) {
                    var n = e.guildId,
                        t = e.channelId,
                        a = e.baseChannelId,
                        s = e.flash,
                        c = void 0 === s || s,
                        d = e.details;
                    r.Z.dispatch({
                        type: "SIDEBAR_VIEW_CHANNEL",
                        sidebarType: l.tI.VIEW_CHANNEL,
                        guildId: n,
                        baseChannelId: a,
                        channelId: t,
                        details: d
                    });
                    var f = null == d ? void 0 : d.initialMessageId;
                    null != f ? i.Z.jumpToMessage({
                        channelId: t,
                        messageId: f,
                        flash: c,
                        jumpType: o.S.INSTANT
                    }) : u.Z.fetchMessages({
                        guildId: n,
                        channelId: t
                    })
                },
                openResourceChannelAsSidebar: function(e) {
                    var n = e.guildId,
                        t = e.channelId;
                    if (null != n) {
                        (0, a.C3)(n, t, !1);
                        r.Z.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: l.tI.VIEW_CHANNEL,
                            guildId: n,
                            baseChannelId: s.oC.GUILD_HOME,
                            channelId: t
                        })
                    }
                },
                openThreadAsSidebar: function(e) {
                    var n = e.guildId,
                        t = e.baseChannelId,
                        a = e.channelId,
                        s = e.flash,
                        c = void 0 === s || s,
                        d = e.details;
                    r.Z.dispatch({
                        type: "SIDEBAR_VIEW_CHANNEL",
                        sidebarType: l.tI.VIEW_THREAD,
                        baseChannelId: t,
                        channelId: a,
                        details: d
                    });
                    null != (null == d ? void 0 : d.initialMessageId) ? i.Z.jumpToMessage({
                        channelId: a,
                        messageId: d.initialMessageId,
                        flash: c,
                        jumpType: o.S.INSTANT
                    }) : u.Z.fetchMessages({
                        guildId: n,
                        channelId: a
                    })
                },
                closeChannelSidebar: function(e) {
                    r.Z.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e
                    })
                },
                openGuildSidebar: function(e) {
                    var n = e.guildId,
                        t = e.baseChannelId,
                        i = e.sidebarType,
                        o = e.details;
                    r.Z.dispatch({
                        type: "SIDEBAR_VIEW_GUILD",
                        sidebarType: i,
                        baseChannelId: t,
                        guildId: n,
                        details: o
                    })
                },
                closeGuildSidebar: function(e) {
                    r.Z.dispatch({
                        type: "SIDEBAR_CLOSE_GUILD",
                        guildId: e
                    })
                }
            }
        },
        188558: (e, n, t) => {
            t.d(n, {
                U: () => c,
                a: () => d
            });
            var r = t(177570),
                i = t(491260),
                o = t(840922),
                a = t(652591),
                u = t(2590);

            function l(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function s(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        l(e, n, t[n])
                    }))
                }
                return e
            }
            var c = function(e) {
                    var n = e.displayProfile,
                        t = e.isMobile,
                        r = e.loadDurationMs,
                        i = e.activity,
                        o = e.customStatusActivity,
                        l = e.status;
                    a.default.track(u.rMx.DM_PROFILE_VIEWED, s({
                        has_mobile_indicator: t,
                        has_activity: null != i && (null == i ? void 0 : i.type) !== u.IIU.CUSTOM_STATUS,
                        has_game_activity: (null == i ? void 0 : i.type) === u.IIU.PLAYING,
                        load_duration_ms: r,
                        profile_user_status: l,
                        has_custom_status: null != o
                    }, f(n)))
                },
                d = function(e, n) {
                    a.default.track(u.rMx.DM_PROFILE_TOGGLED, s({
                        is_profile_open: n
                    }, f(e)))
                },
                f = function(e) {
                    if (null == e) return {};
                    var n, t = e.userId,
                        a = null != r.Z.getAnyStreamForUser(t),
                        l = i.Z.findActivity(t, (function(e) {
                            var n = e.type;
                            return a ? n === u.IIU.PLAYING : n !== u.IIU.CUSTOM_STATUS
                        })),
                        s = null == l ? void 0 : l.assets,
                        c = o.Z.isFriend(t);
                    return {
                        has_images: Boolean(null !== (n = null == s ? void 0 : s.large_image) && void 0 !== n ? n : null == s ? void 0 : s.small_image),
                        is_friend: c,
                        viewed_profile_user_id: t,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }
        },
        996077: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var r = t(202351),
                i = t(744564),
                o = t(61209);

            function a(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function s(e, n) {
                return !n || "object" !== d(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function c(e, n) {
                c = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return c(e, n)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function f(e) {
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
                    var t, r = l(e);
                    if (n) {
                        var i = l(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return s(this, t)
                }
            }
            var h = {},
                E = h;

            function p() {
                Object.keys(E).forEach((function(e) {
                    null == o.Z.getChannel(e) && delete E[e]
                }))
            }
            var C = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && c(e, n)
                }(t, e);
                var n = f(t);

                function t() {
                    a(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function(e) {
                    this.waitFor(o.Z);
                    E = null != e ? e : h
                };
                r.getState = function() {
                    return E
                };
                r.getCollapsed = function() {
                    return E
                };
                r.isCollapsed = function(e) {
                    return E[e] || !1
                };
                return t
            }(r.ZP.PersistedStore);
            C.displayName = "CollapsedVoiceChannelStore";
            C.persistKey = "collapsedChannels";
            const _ = new C(i.Z, {
                CONNECTION_OPEN: p,
                OVERLAY_INITIALIZE: p,
                CHANNEL_COLLAPSE: function(e) {
                    var n = e.channelId;
                    E[n] ? delete E[n] : E[n] = !0;
                    E = function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))));
                            r.forEach((function(n) {
                                u(e, n, t[n])
                            }))
                        }
                        return e
                    }({}, E)
                }
            })
        },
        536038: (e, n, t) => {
            t.d(n, {
                Z: () => S
            });
            var r = t(202351),
                i = t(630631),
                o = t(744564),
                a = t(2590);

            function u(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function c(e, n) {
                return !n || "object" !== f(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function d(e, n) {
                d = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return d(e, n)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
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
                    var t, r = s(e);
                    if (n) {
                        var i = s(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return c(this, t)
                }
            }
            var E = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                p = E,
                C = "LAST_VIEWED_PATH";
            var _ = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && d(e, n)
                }(t, e);
                var n = h(t);

                function t() {
                    u(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E;
                    p = null != e ? e : E
                };
                r.getState = function() {
                    return p
                };
                ! function(e, n, t) {
                    n && l(e.prototype, n);
                    t && l(e, t)
                }(t, [{
                    key: "defaultRoute",
                    get: function() {
                        return a.Z5c.ME
                    }
                }, {
                    key: "lastNonVoiceRoute",
                    get: function() {
                        var e;
                        return null !== (e = p.lastViewedNonVoicePath) && void 0 !== e ? e : a.Z5c.ME
                    }
                }, {
                    key: "fallbackRoute",
                    get: function() {
                        return a.Z5c.ME
                    }
                }]);
                return t
            }(r.ZP.PersistedStore);
            _.displayName = "DefaultRouteStore";
            _.persistKey = "DefaultRouteStore";
            _.migrations = [function() {
                var e = i.Z.get(C, null);
                i.Z.remove(C);
                return {
                    lastViewedPath: e
                }
            }];
            const S = new _(o.Z, {
                SAVE_LAST_ROUTE: function(e) {
                    var n = e.path;
                    p.lastViewedPath = n;
                    return !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    var n = e.path;
                    p.lastViewedNonVoicePath = n;
                    return !0
                }
            })
        },
        813869: (e, n, t) => {
            t.d(n, {
                Z: () => Pe
            });
            var r = t(496486),
                i = t.n(r),
                o = t(842227),
                a = t(873936),
                u = t(998918),
                l = t(995278),
                s = t(439683),
                c = t(364269),
                d = t(9430),
                f = t(473903),
                h = t(832748),
                E = t(2590),
                p = 36e5,
                C = 108e5;
            t(339432);
            var _ = t(858311),
                S = t(202958),
                v = t(656793),
                g = t(18882),
                I = t(487685),
                y = t(113566),
                A = t(382060),
                O = t(664625),
                b = t(61209),
                T = t(682776),
                L = t(179913),
                N = t(715107),
                m = t(637493),
                R = t(897196),
                D = t(290679);

            function P(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Z(e) {
                Z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Z(e)
            }

            function w(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        P(e, n, t[n])
                    }))
                }
                return e
            }

            function G(e, n) {
                return !n || "object" !== U(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function M(e, n) {
                M = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return M(e, n)
            }
            var U = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function H(e) {
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
                    var t, r = Z(e);
                    if (n) {
                        var i = Z(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return G(this, t)
                }
            }
            var B = "null",
                V = {},
                k = new Set,
                F = 0;

            function j(e) {
                var n, t = V[null != e ? e : B];
                return {
                    unread: !1,
                    unreadByType: {},
                    unreadChannelId: null,
                    mentionCount: 0,
                    mentionCounts: {},
                    ncMentionCount: 0,
                    sentinel: null !== (n = null == t ? void 0 : t.sentinel) && void 0 !== n ? n : 0
                }
            }

            function K(e) {
                var n;
                return V[null != e ? e : B] = null !== (n = V[null != e ? e : B]) && void 0 !== n ? n : j(e)
            }

            function Y(e) {
                K(e).sentinel++;
                F++
            }

            function x(e, n, t) {
                return null != e.guild_id && (t && !((0, A.Q5)(e.type) || d.Z.isChannelRecordOrParentOptedIn(e)) && 0 === n)
            }

            function W(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (null == e) return !1;
                if (e.isGuildVocal() && 0 === n) return !1;
                if (e.hasFlag(R.zZ.IS_GUILD_RESOURCE_CHANNEL)) return !1;
                if (0 === n) {
                    var t = e.isThread() ? I.Z.isMuted(e.id) : d.Z.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
                    if (t) return !1
                }
                if (!e.isPrivate()) {
                    if (x(e, n, (0, c.r1)(e.guild_id))) return !1;
                    if (!T.Z.can(e.accessPermissions, e)) return !1
                }
                return n > 0 || d.Z.isChannelRelevant(e)
            }

            function z(e, n, t, r) {
                return (!(0, A.bw)(e.type) || 0 !== n) && (!!T.Z.canBasicChannel((0, A.Gz)(e.type), e) && (!x(e, n, r) && ((! function(e) {
                    return "flags" in e
                }(e) || !e.hasFlag(R.zZ.IS_GUILD_RESOURCE_CHANNEL)) && (n > 0 || !t || (0, A.Q5)(e.type) || d.Z.resolvedMessageNotifications(e) === E.bL.ALL_MESSAGES))))
            }

            function X(e) {
                switch (e) {
                    case B:
                    case null:
                    case void 0:
                        return null;
                    default:
                        return e
                }
            }

            function J(e, n) {
                var t = e.guild_id,
                    r = e.id;
                return !d.Z.isGuildOrCategoryOrChannelMuted(t, r) && (!x(e, L.ZP.getMentionCount(r), n) && L.ZP.hasNotableUnread(e.id))
            }

            function q(e, n) {
                var t = L.ZP.hasUnread(e, n);
                return n === D.W.GUILD_EVENT ? !d.Z.isMuted(e) && (!d.Z.isMuteScheduledEventsEnabled(e) && t) : t
            }

            function Q(e, n) {
                var t = j(e);
                t.mentionCounts = w({}, n.mentionCounts);
                t.unreadByType = w({}, n.unreadByType);
                return t
            }

            function $(e) {
                e.unread = Object.values(e.unreadByType).some((function(e) {
                    return e
                }));
                return e
            }

            function ee(e, n) {
                if ((0, S.bY)() && !_.Z.tabFocused) {
                    var t, r = ne(e) - ne(n);
                    e.ncMentionCount = Math.max((null !== (t = null == n ? void 0 : n.ncMentionCount) && void 0 !== t ? t : 0) + r, 0)
                }
            }

            function ne(e) {
                var n = 0,
                    t = function() {
                        var e = f.default.getCurrentUser();
                        if (null == e) return null;
                        return L.ZP.getNotifCenterReadState(e.id)
                    }();
                if (null == e || null == t) return n;
                Object.keys(e.mentionCounts).forEach((function(r) {
                    var i = L.ZP.lastMessageId(r),
                        a = t._ackMessageId;
                    o.default.compare(i, a) > 0 && (n += e.mentionCounts[r])
                }));
                return n
            }

            function te(e, n, t) {
                $(n);
                n.mentionCount = i()(n.mentionCounts).values().sum();
                if (n.unread !== t.unread || n.mentionCount !== t.mentionCount) {
                    V[null != e ? e : B] = n;
                    null != e && (n.unread ? k.add(e) : k.delete(e));
                    F++;
                    Y(null != e ? e : B);
                    ee(n, t);
                    return !0
                }
                return !1
            }

            function re(e, n) {
                var t = X(e),
                    r = K(t),
                    i = Q(t, r),
                    o = (0, c.r1)(t),
                    a = !1;
                n.forEach((function(e) {
                    var n = b.Z.getChannel(e);
                    if (null != n) {
                        if (n.getGuildId() === t) {
                            var r = L.ZP.getMentionCount(e);
                            if (null !== t && !a && J(n, o) && W(n, r)) {
                                a = !0;
                                i.unreadChannelId = n.id
                            }
                            r > 0 && W(n, r) ? i.mentionCounts[n.id] = r : delete i.mentionCounts[n.id]
                        }
                    } else delete i.mentionCounts[e]
                }));
                i.unreadByType[D.W.CHANNEL] = a;
                if (i.unreadByType[D.W.CHANNEL] !== r.unreadByType[D.W.CHANNEL] && !i.unreadByType[D.W.CHANNEL]) {
                    var u = b.Z.getChannel(r.unreadChannelId);
                    if (null == u || n.includes(u.id) || !J(u, o) || !W(u)) return oe(t);
                    null != t && k.add(t);
                    i.unreadByType[D.W.CHANNEL] = !0
                }
                return te(t, i, r)
            }

            function ie(e, n) {
                if (null != e) {
                    var t = K(e),
                        r = Q(e, t);
                    r.unreadByType[D.W.GUILD_EVENT] = q(e, n);
                    return te(e, r, t)
                }
            }

            function oe(e, n) {
                var t = X(e),
                    r = j(t),
                    i = (0, v.c)();
                if (null == t) {
                    var o = b.Z.getMutablePrivateChannels();
                    for (var l in o) {
                        var s = o[l],
                            f = L.ZP.getMentionCount(l);
                        if (f > 0 && W(s, f)) {
                            r.mentionCount += f;
                            r.mentionCounts[s.id] = f
                        }
                    }
                } else {
                    var h = d.Z.isMuted(t);
                    if (h && !1 === n) return !1;
                    var E = d.Z.getMutedChannels(t),
                        p = d.Z.getChannelOverrides(t),
                        C = (0, c.r1)(t),
                        _ = (0, u.kC)(),
                        S = b.Z.getMutableBasicGuildChannelsForGuild(t);
                    for (var y in S) {
                        var A = S[y],
                            O = h || E.has(y) || null != A.parent_id && E.has(A.parent_id),
                            T = r.unreadByType[D.W.CHANNEL],
                            N = L.ZP.getGuildChannelUnreadState(A, C, _, p, O, T),
                            m = N.mentionCount,
                            R = N.hasNotableUnread,
                            P = m > 0;
                        if (P || !O) {
                            var Z = !T && (!O || P) && R;
                            if (Z || P) {
                                if (z(A, m, i, C)) {
                                    if (Z) {
                                        r.unreadByType[D.W.CHANNEL] = !0;
                                        r.unreadChannelId = y
                                    }
                                    if (P) {
                                        r.mentionCount += m;
                                        r.mentionCounts[A.id] = m
                                    }
                                }
                            }
                        }
                    }
                    var w = g.Z.getActiveJoinedThreadsForGuild(t);
                    for (var G in w)
                        for (var M in w[G]) {
                            if (!r.unreadByType[D.W.CHANNEL] && L.ZP.hasNotableUnread(M) && !I.Z.isMuted(M) && !h) {
                                r.unreadByType[D.W.CHANNEL] = !0;
                                r.unreadChannelId = M
                            }
                            var U = L.ZP.getMentionCount(M);
                            if (U > 0) {
                                r.mentionCount += U;
                                r.mentionCounts[M] = U
                            }
                        }!r.unreadByType[D.W.GUILD_EVENT] && q(t, D.W.GUILD_EVENT) && (r.unreadByType[D.W.GUILD_EVENT] = !0)
                }
                $(r);
                var H = K(t);
                if (r.unread !== H.unread || r.mentionCount !== H.mentionCount) {
                    V[null != t ? t : B] = r;
                    if (null != t)
                        if (r.unread) k.add(t);
                        else {
                            k.delete(t);
                            (0, a.B1)(t)
                        } F++;
                    Y(null != t ? t : B);
                    ee(r, H);
                    return !0
                }
                return !1
            }

            function ae(e) {
                var n = e.guilds;
                V = {};
                F = 0;
                k = new Set;
                oe(null);
                for (var t = n.length, r = 0; r < t; r++) {
                    var i = n[r];
                    null != i && oe(i.id)
                }
            }

            function ue(e) {
                var n = e.guilds,
                    t = e.readState;
                V = {};
                F = 0;
                k = new Set;
                var r = t.entries.length < 500,
                    i = new Set;
                r && t.entries.forEach((function(e) {
                    if (null != e.mention_count && e.mention_count > 0)
                        if (null == e.read_state_type || e.read_state_type === D.W.CHANNEL) {
                            var n;
                            i.add(null === (n = b.Z.getChannel(e.id)) || void 0 === n ? void 0 : n.guild_id)
                        } else i.add(e.id)
                }));
                oe(null);
                var o = !0,
                    a = !1,
                    u = void 0;
                try {
                    for (var l, s = n[Symbol.iterator](); !(o = (l = s.next()).done); o = !0) {
                        var c = l.value;
                        oe(c.id, r ? i.has(c.id) : void 0)
                    }
                } catch (e) {
                    a = !0;
                    u = e
                } finally {
                    try {
                        o || null == s.return || s.return()
                    } finally {
                        if (a) throw u
                    }
                }
            }

            function le(e) {
                return oe(e.guild.id)
            }

            function se(e) {
                var n = e.guild;
                if (null == V[n.id]) return !1;
                delete V[n.id];
                k.delete(n.id);
                F++;
                return !0
            }

            function ce(e) {
                var n = e.channel,
                    t = n.id;
                return re(n.guild_id, [t])
            }

            function de() {
                var e = b.Z.getChannel(N.Z.getChannelId());
                return null != e && re(e.getGuildId(), [e.id])
            }

            function fe(e) {
                var n = e.user,
                    t = e.guildId;
                return n.id === O.default.getId() && oe(t)
            }

            function he(e) {
                var n = e.channelId,
                    t = b.Z.getChannel(n);
                return null != t && re(t.getGuildId(), [t.id])
            }

            function Ee(e) {
                var n = e.channelId,
                    t = b.Z.getChannel(n);
                if (null == t) return !1;
                if (null != t.guild_id) {
                    var r = K(t.guild_id);
                    if (((t.isThread() ? !I.Z.hasJoined(t.id) || I.Z.isMuted(t.id) : d.Z.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) || r.unreadByType[D.W.CHANNEL]) && 0 === L.ZP.getMentionCount(n)) return !1
                }
                return re(t.getGuildId(), [t.id])
            }

            function pe(e) {
                var n = e.channelId,
                    t = e.guildId;
                return t !== E.I_8 && (null != n && re(t, [n]))
            }

            function Ce(e) {
                var n = e.channel;
                return re(n.getGuildId(), [n.id])
            }

            function _e(e) {
                var n = e.channels;
                return i()(n).groupBy((function(e) {
                    return e.getGuildId()
                })).reduce((function(e, n, t) {
                    return re(t, n.map((function(e) {
                        return e.id
                    }))) || e
                }), !1)
            }

            function Se(e) {
                var n = e.channels;
                return i()(n).map((function(e) {
                    return e.channelId
                })).filter((function(e) {
                    return null != b.Z.getChannel(e)
                })).groupBy((function(e) {
                    var n;
                    return null === (n = b.Z.getChannel(e)) || void 0 === n ? void 0 : n.getGuildId()
                })).reduce((function(e, n, t) {
                    return re(t, n) || e
                }), !1)
            }

            function ve(e) {
                var n = e.channel;
                return re(n.getGuildId(), [n.id, n.parent_id])
            }

            function ge(e) {
                return ie(e.guildScheduledEvent.guild_id, D.W.GUILD_EVENT)
            }

            function Ie(e) {
                return ie(e.id, e.ackType)
            }

            function ye(e) {
                var n = e.id;
                return re(e.guildId, [n])
            }

            function Ae(e) {
                return (0, y.s)(e) && re(e.guildId, [e.id])
            }

            function Oe(e) {
                var n = e.threads;
                return re(e.guildId, n.filter((function(e) {
                    return I.Z.hasJoined(e.id)
                })).map((function(e) {
                    return e.id
                })))
            }

            function be(e) {
                return null != e.channels && re(e.guildId, e.channels.map((function(e) {
                    return e.id
                })))
            }

            function Te(e) {
                return oe(e.guildId)
            }

            function Le(e) {
                return oe(e.guildId)
            }

            function Ne(e) {
                var n, t = e.userGuildSettings,
                    r = new Set(t.map((function(e) {
                        return null !== (n = e.guild_id) && void 0 !== n ? n : B
                    })));
                return Object.keys(V).reduce((function(e, n) {
                    return r.has(n) && oe(n) || e
                }), !1)
            }

            function me() {
                for (var e in V) {
                    V[e].ncMentionCount = 0
                }
            }

            function Re(e) {
                return oe(e.guildId)
            }
            var De = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && M(e, n)
                }(t, e);
                var n = H(t);

                function t() {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var e;
                    (e = n.call(this)).loadCache = function() {
                        var n = e.readSnapshot(t.LATEST_SNAPSHOT_VERSION);
                        if (null != n) {
                            V = n.guilds;
                            k = new Set(n.unreadGuilds)
                        }
                    };
                    e.registerActionHandlers({
                        CONNECTION_OPEN: ue,
                        OVERLAY_INITIALIZE: ae,
                        CACHE_LOADED_LAZY: e.loadCache,
                        GUILD_CREATE: le,
                        GUILD_DELETE: se,
                        MESSAGE_CREATE: Ee,
                        MESSAGE_ACK: he,
                        BULK_ACK: Se,
                        UPDATE_CHANNEL_DIMENSIONS: he,
                        CHANNEL_SELECT: pe,
                        CHANNEL_DELETE: ce,
                        WINDOW_FOCUS: de,
                        GUILD_ACK: Te,
                        GUILD_ROLE_CREATE: Le,
                        GUILD_ROLE_DELETE: Le,
                        GUILD_ROLE_UPDATE: Le,
                        CHANNEL_CREATE: Ce,
                        CHANNEL_UPDATES: _e,
                        THREAD_CREATE: ve,
                        THREAD_UPDATE: ve,
                        THREAD_DELETE: ve,
                        THREAD_LIST_SYNC: Oe,
                        THREAD_MEMBER_UPDATE: ye,
                        THREAD_MEMBERS_UPDATE: Ae,
                        PASSIVE_UPDATE_V1: be,
                        GUILD_MEMBER_UPDATE: fe,
                        USER_GUILD_SETTINGS_FULL_UPDATE: Ne,
                        USER_GUILD_SETTINGS_CHANNEL_UPDATE: Re,
                        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: Re,
                        USER_GUILD_SETTINGS_GUILD_UPDATE: Re,
                        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: Re,
                        GUILD_FEATURE_ACK: Ie,
                        GUILD_SCHEDULED_EVENT_CREATE: ge,
                        GUILD_SCHEDULED_EVENT_UPDATE: ge,
                        GUILD_SCHEDULED_EVENT_DELETE: ge,
                        CHANNEL_RTC_UPDATE_CHAT_OPEN: he,
                        LOAD_MESSAGES_SUCCESS: he,
                        CHANNEL_ACK: he,
                        CHANNEL_LOCAL_ACK: he,
                        VOICE_CHANNEL_SELECT: he,
                        ENABLE_AUTOMATIC_ACK: he,
                        RESORT_THREADS: he,
                        NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: me
                    });
                    e.waitFor(b.Z, N.Z, L.ZP, T.Z, O.default, f.default, d.Z, g.Z, I.Z);
                    return e
                }
                var r = t.prototype;
                r.takeSnapshot = function() {
                    return {
                        version: t.LATEST_SNAPSHOT_VERSION,
                        data: {
                            guilds: V,
                            unreadGuilds: Array.from(k)
                        }
                    }
                };
                r.hasAnyUnread = function() {
                    return k.size > 0
                };
                r.getStoreChangeSentinel = function() {
                    return F
                };
                r.getMutableUnreadGuilds = function() {
                    return k
                };
                r.getMutableGuildStates = function() {
                    return V
                };
                r.hasUnread = function(e) {
                    return k.has(e) || function(e) {
                        var n = f.default.getCurrentUser(),
                            t = (0, u.kC)(),
                            r = d.Z.isGuildUnreadSettingEnabled(e),
                            i = h.Z.getGuildUnreadsLastCleared(e),
                            o = s.Z.getLastFetchedMillis(e),
                            a = Date.now(),
                            _ = (0, c.m7)(e),
                            S = d.Z.getNotifyHighlights(e),
                            v = S === E.gLR.ENABLED || S === E.gLR.NULL;
                        if (!(t && r && _ && v)) return !1;
                        if (null == n ? void 0 : n.isStaff()) {
                            (null == o || null != o && a - o > p) && l.Z.maybeLoadFeedForGuild(e);
                            return !1
                        }
                        return null == o || a - o > C && a - i > C
                    }(e)
                };
                r.getMentionCount = function(e) {
                    return K(e).mentionCount
                };
                r.getMutableGuildReadState = function(e) {
                    return K(e)
                };
                r.getGuildHasUnreadIgnoreMuted = function(e) {
                    var n = b.Z.getMutableGuildChannelsForGuild(e);
                    for (var t in n) {
                        var r = n[t];
                        if (null != r && ((!r.isGuildVocal() || 0 !== L.ZP.getMentionCount(t)) && T.Z.can(r.accessPermissions, r) && L.ZP.hasUnread(t))) return !0
                    }
                    var i = g.Z.getActiveJoinedThreadsForGuild(e);
                    for (var o in i) {
                        var a = b.Z.getChannel(o);
                        if (null != a && W(a))
                            for (var u in i[o])
                                if (L.ZP.hasUnread(u)) return !0
                    }
                    return !!L.ZP.hasUnread(e, D.W.GUILD_EVENT)
                };
                r.getTotalMentionCount = function(e) {
                    var n = 0;
                    for (var t in V) {
                        var r = V[t];
                        !0 === e && t === B || (n += r.mentionCount)
                    }
                    return n
                };
                r.getTotalNotificationsMentionCount = function(e) {
                    var n = 0;
                    for (var t in V) {
                        var r = V[t];
                        !0 === e && t === B || (n += r.ncMentionCount)
                    }
                    return n
                };
                r.getPrivateChannelMentionCount = function() {
                    var e, n = V.null;
                    return null !== (e = null == n ? void 0 : n.mentionCount) && void 0 !== e ? e : 0
                };
                r.getMentionCountForChannels = function(e, n) {
                    var t = 0,
                        r = V[e];
                    if (null == r) return 0;
                    n.forEach((function(e) {
                        var n = r.mentionCounts[e];
                        t += null != n ? n : 0
                    }));
                    return t
                };
                r.getGuildChangeSentinel = function(e) {
                    return K(e).sentinel
                };
                return t
            }(m.Z);
            De.displayName = "GuildReadStateStore";
            De.LATEST_SNAPSHOT_VERSION = 1;
            const Pe = new De
        },
        7114: (e, n, t) => {
            t.d(n, {
                Z: () => E
            });
            var r = t(202351),
                i = t(744564);

            function o(e, n) {
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

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function l(e, n) {
                return !n || "object" !== c(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function s(e, n) {
                s = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return s(e, n)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
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
                    var t, r = u(e);
                    if (n) {
                        var i = u(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return l(this, t)
                }
            }
            var f = null;
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
                    n && s(e, n)
                }(t, e);
                var n = d(t);

                function t() {
                    o(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.getCurrentPath = function() {
                    return null != f ? f.pathname : null
                };
                r.getCurrentRoute = function() {
                    return function(e) {
                        var n = null != e && null != e.search ? e.search : "";
                        return null != e ? "".concat(e.pathname).concat(n) : null
                    }(f)
                };
                r.reset = function() {
                    throw new Error("Should not reset the store this way outside of a test environment")
                };
                return t
            }(r.ZP.Store);
            h.displayName = "ApplicationStoreLocationStore";
            const E = new h(i.Z, {
                APPLICATION_STORE_LOCATION_CHANGE: function(e) {
                    var n = e.location;
                    f = function(e) {
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
                    }({}, n)
                },
                APPLICATION_STORE_RESET_NAVIGATION: function() {
                    f = null
                }
            })
        },
        493221: (e, n, t) => {
            t.d(n, {
                Z: () => y
            });
            var r = t(202351),
                i = t(744564),
                o = t(61209),
                a = t(536038),
                u = t(567403),
                l = t(715107),
                s = t(796909),
                c = t(2590);

            function d(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function h(e, n) {
                return !n || "object" !== _(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function E(e, n) {
                E = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return E(e, n)
            }
            var p, C, _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
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
                    var t, r = f(e);
                    if (n) {
                        var i = f(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return h(this, t)
                }
            }
            var v = (null !== (C = null === window || void 0 === window || null === (p = window.location) || void 0 === p ? void 0 : p.pathname) && void 0 !== C ? C : "").startsWith(c.Z5c.ACTIVITIES) ? c.Z5c.ACTIVITIES : null;

            function g(e) {
                var n = e.link;
                v = n
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
                    n && E(e, n)
                }(t, e);
                var n = S(t);

                function t() {
                    d(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(a.Z, s.Z, l.Z, u.Z, o.Z)
                };
                r.getHomeLink = function() {
                    return null != v ? v : a.Z.fallbackRoute
                };
                return t
            }(r.ZP.Store);
            I.displayName = "AppViewStore";
            const y = new I(i.Z, {
                OVERLAY_INITIALIZE: function() {
                    var e = s.Z.getPrivateChannelIds(),
                        n = l.Z.getChannelId(c.ME);
                    null == n && null == e[0] || (v = c.Z5c.CHANNEL(c.ME, null != n ? n : e[0]))
                },
                APP_VIEW_SET_HOME_LINK: g,
                APPLICATION_STORE_LOCATION_CHANGE: function(e) {
                    g({
                        link: e.location.pathname,
                        type: "APP_VIEW_SET_HOME_LINK"
                    })
                },
                APPLICATION_STORE_RESET_NAVIGATION: function() {
                    if (null == v || !v.startsWith(c.Z5c.APPLICATION_STORE)) return !1;
                    v = c.Z5c.APPLICATION_STORE
                },
                CHANNEL_SELECT: function(e) {
                    var n = e.guildId,
                        t = e.channelId;
                    if (null == n && null != t) {
                        var r = c.Z5c.CHANNEL(c.ME, t);
                        if (r !== v) {
                            v = r;
                            return !0
                        }
                    }
                    return !1
                },
                CHANNEL_DELETE: function(e) {
                    var n = e.channel;
                    null == n.guild_id && null != n.id && null != v && v === c.Z5c.CHANNEL(c.ME, n.id) && (v = null)
                }
            })
        },
        796909: (e, n, t) => {
            t.d(n, {
                Z: () => U
            });
            var r = t(730381),
                i = t.n(r),
                o = t(202351),
                a = t(575626),
                u = t(744564),
                l = t(339432),
                s = t(112328),
                c = t(996344),
                d = t(48315),
                f = t(382060),
                h = t(61209),
                E = t(567403),
                p = t(179913),
                C = t(9430),
                _ = t(473903),
                S = t(102921),
                v = t(897196);

            function g(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return I(e)
            }

            function y(e, n) {
                return !n || "object" !== b(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function A(e, n) {
                A = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return A(e, n)
            }
            var O, b = function(e) {
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
                    var t, r = I(e);
                    if (n) {
                        var i = I(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return y(this, t)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(O || (O = {}));
            var L = new a.Z((function(e) {
                var n = e.isRequest,
                    t = e.isFavorite;
                return n ? [] : [t ? O.FAVORITE : O.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function N(e) {
                var n, t, r = null !== (t = null !== (n = p.ZP.lastMessageId(e.id)) && void 0 !== n ? n : e.lastMessageId) && void 0 !== t ? t : e.id,
                    o = e.isMessageRequestTimestamp;
                if (null != o) {
                    var a = i()(o).valueOf(),
                        u = S.Z.fromTimestamp(a);
                    return S.Z.compare(r, u) > 0 ? r : u
                }
                return r
            }

            function m(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N(e);
                return {
                    channelId: e.id,
                    lastMessageId: n,
                    isFavorite: C.Z.isMessagesFavorite(e.id) && (0, l.cn)(),
                    isRequest: c.Z.isMessageRequest(e.id) || d.Z.isSpam(e.id)
                }
            }

            function R() {
                L.clear();
                Object.values(h.Z.getMutablePrivateChannels()).forEach((function(e) {
                    L.set(e.id, m(e))
                }));
                (0, l.cn)() && (0, s.x7)() && C.Z.getAddedToMessages().forEach((function(e) {
                    var n = h.Z.getChannel(e);
                    null != n && (0, f.zi)(n.type) && L.set(n.id, m(n))
                }))
            }

            function D() {
                var e = h.Z.getMutablePrivateChannels();
                for (var n in e) L.set(n, m(e[n]))
            }
            var P, Z, w, G = (P = [], Z = [], w = [], function() {
                    var e = L.values(O.FAVORITE),
                        n = L.values(O.DEFAULT);
                    if (P !== e || Z !== n) {
                        w = [];
                        e.forEach((function(e) {
                            var n = e.channelId;
                            return w.push(n)
                        }));
                        P = e;
                        n.forEach((function(e) {
                            var n = e.channelId;
                            return w.push(n)
                        }));
                        Z = n
                    }
                    return w
                }),
                M = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && A(e, n)
                    }(t, e);
                    var n = T(t);

                    function t() {
                        g(this, t);
                        return n.apply(this, arguments)
                    }
                    var r = t.prototype;
                    r.initialize = function() {
                        this.waitFor(h.Z, E.Z, _.default, c.Z, C.Z);
                        this.syncWith([C.Z, c.Z], R)
                    };
                    r.getPrivateChannelIds = function() {
                        return G()
                    };
                    r.getSortedChannels = function() {
                        return [L.values(O.FAVORITE), L.values(O.DEFAULT)]
                    };
                    r.serializeForOverlay = function() {
                        var e = {};
                        L.values().forEach((function(n) {
                            var t = n.channelId,
                                r = n.lastMessageId;
                            e[t] = r
                        }));
                        return e
                    };
                    return t
                }(o.ZP.Store);
            M.displayName = "PrivateChannelSortStore";
            const U = new M(u.Z, {
                CONNECTION_OPEN: R,
                CONNECTION_OPEN_SUPPLEMENTAL: R,
                OVERLAY_INITIALIZE: R,
                CACHE_LOADED: D,
                CACHE_LOADED_LAZY: D,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0,
                            f.hv)(e.type) || L.has(e.id)) && L.set(e.id, m(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var n = e.channel;
                    if (!(0, f.hv)(n.type)) return !1;
                    if (n.id === v.V) return !1;
                    L.set(n.id, m(n))
                },
                CHANNEL_DELETE: function(e) {
                    var n = e.channel;
                    return L.delete(n.id)
                },
                MESSAGE_CREATE: function(e) {
                    var n = e.channelId,
                        t = e.message;
                    if (!L.has(n)) return !1;
                    var r = h.Z.getChannel(n);
                    return null != r && L.set(n, m(r, t.id))
                },
                GUILD_CREATE: function(e) {
                    var n = e.guild.id;
                    return L.delete(n)
                }
            })
        },
        993137: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                i = (t(667294), t(294184)),
                o = t.n(i),
                a = t(831222),
                u = t.n(a);

            function l(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function s(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        l(e, n, t[n])
                    }))
                }
                return e
            }
            const c = function(e) {
                var n = e.aspectRatio,
                    t = e.style,
                    i = e.className,
                    a = e.children;
                return (0, r.jsx)("div", {
                    className: o()(u().outer, i),
                    style: s({
                        paddingTop: "".concat(1 / n * 100, "%")
                    }, t),
                    children: (0, r.jsx)("div", {
                        className: u().inner,
                        children: a
                    })
                })
            }
        }
    }
]);