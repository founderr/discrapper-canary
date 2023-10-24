"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [98938, 84522, 55586, 77357, 14136], {
        577357: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(744564),
                o = n(703790),
                i = n(945514),
                u = n(823530);

            function a(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            a(i, r, o, u, c, "next", e)
                        }

                        function c(e) {
                            a(i, r, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var l = function(e, t) {
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
                                (r = 0,
                                    o) && (i = [2 & i[0], o.value]);
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
            const s = {
                init: function() {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_INIT"
                    })
                },
                setSection: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_SET_SECTION",
                        section: e,
                        sectionId: t
                    })
                },
                startEditingCommandPermissions: function(e) {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
                        commandId: e
                    })
                },
                stopEditingCommandPermissions: function(e) {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
                        commandId: e
                    })
                },
                startEditingIntegration: function(e) {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
                        integrationId: e
                    })
                },
                stopEditingIntegration: function() {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
                    })
                },
                updateIntegration: function(e) {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
                        settings: e
                    })
                },
                startEditingWebhook: function(e) {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
                        webhookId: e
                    })
                },
                stopEditingWebhook: function() {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
                    })
                },
                updateWebhook: function(e) {
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
                        settings: e
                    })
                },
                saveApplicationPermissions: function(e, t, n) {
                    return c((function() {
                        var o;
                        return l(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    u.trys.push([0, 2, , 3]);
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SUBMITTING"
                                    });
                                    return [4, i.U3({
                                        applicationId: e,
                                        commandId: e,
                                        defaultEveryoneValue: !0,
                                        defaultEverywhereValue: !0,
                                        guildId: t,
                                        permissions: n
                                    })];
                                case 1:
                                    u.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                                    });
                                    return [3, 3];
                                case 2:
                                    o = u.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                        errors: o.body
                                    });
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                },
                saveIntegration: function(e, t) {
                    return c((function() {
                        var n;
                        return l(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    i.trys.push([0, 2, , 3]);
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SUBMITTING"
                                    });
                                    return [4, o.Z.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons)];
                                case 1:
                                    i.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                                    });
                                    return [3, 3];
                                case 2:
                                    n = i.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                        errors: n.body
                                    });
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                },
                saveWebhook: function(e, t) {
                    return c((function() {
                        var n;
                        return l(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    o.trys.push([0, 2, , 3]);
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SUBMITTING"
                                    });
                                    return [4, u.Z.update(e, t.id, t)];
                                case 1:
                                    o.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                                    });
                                    return [3, 3];
                                case 2:
                                    n = o.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                        errors: n.body
                                    });
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                }
            }
        },
        224134: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(744564);
            const o = {
                startTyping: function(e) {
                    r.Z.dispatch({
                        type: "TYPING_START_LOCAL",
                        channelId: e
                    })
                },
                stopTyping: function(e) {
                    r.Z.dispatch({
                        type: "TYPING_STOP_LOCAL",
                        channelId: e
                    })
                }
            }
        },
        823530: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(496486),
                o = n.n(r),
                i = n(281110),
                u = n(744564),
                a = n(2590),
                c = ["Spidey Bot", "Captain Hook"];
            const l = {
                fetchForGuild: function(e) {
                    u.Z.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e
                    });
                    i.ZP.get({
                        url: a.ANM.GUILD_WEBHOOKS(e),
                        oldFormErrors: !0
                    }).then((function(t) {
                        var n = t.body;
                        return u.Z.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            webhooks: n
                        })
                    })).catch((function(t) {
                        var n = t.body;
                        u.Z.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            error: n.message
                        })
                    }))
                },
                fetchForChannel: function(e, t) {
                    u.Z.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e,
                        channelId: t
                    });
                    i.ZP.get({
                        url: a.ANM.CHANNEL_WEBHOOKS(t),
                        oldFormErrors: !0
                    }).then((function(n) {
                        var r = n.body;
                        return u.Z.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            channelId: t,
                            webhooks: r
                        })
                    }))
                },
                create: function(e, t, n) {
                    null == n && (n = c[o().random(0, c.length - 1)]);
                    return i.ZP.post({
                        url: a.ANM.CHANNEL_WEBHOOKS(t),
                        body: {
                            name: n
                        },
                        oldFormErrors: !0
                    }).then((function(t) {
                        var n = t.body;
                        u.Z.dispatch({
                            type: "WEBHOOK_CREATE",
                            guildId: e,
                            webhook: n
                        });
                        return n
                    }))
                },
                delete: function(e, t) {
                    return i.ZP.delete({
                        url: a.ANM.WEBHOOK(t),
                        oldFormErrors: !0
                    }).then((function() {
                        u.Z.dispatch({
                            type: "WEBHOOK_DELETE",
                            guildId: e,
                            webhookId: t
                        })
                    }))
                },
                update: function(e, t, n) {
                    return i.ZP.patch({
                        url: a.ANM.WEBHOOK(t),
                        body: n,
                        oldFormErrors: !0
                    }).then((function(t) {
                        var n = t.body;
                        u.Z.dispatch({
                            type: "WEBHOOK_UPDATE",
                            guildId: e,
                            webhook: n
                        });
                        return n
                    }))
                }
            }
        },
        470856: (e, t, n) => {
            n.d(t, {
                K: () => r
            });
            var r;
            ! function(e) {
                e[e.STREAM = 0] = "STREAM";
                e[e.VIDEO = 1] = "VIDEO"
            }(r || (r = {}))
        },
        284278: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(944010)),
                i = n(895303),
                u = n(470856),
                a = n(473708);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
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

            function s(e) {
                var t = e.type,
                    n = e.onConfirm,
                    s = l(e, ["type", "onConfirm"]),
                    d = t === u.K.STREAM ? a.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : a.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
                    f = t === u.K.STREAM ? a.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : a.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, r.jsx)(i.default, function(e) {
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
                }({
                    confirmText: a.Z.Messages.CONFIRM,
                    secondaryConfirmText: a.Z.Messages.DONT_ASK_AGAIN,
                    title: d,
                    cancelText: a.Z.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: function() {
                        o.ZP.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        });
                        n()
                    },
                    body: f
                }, s))
            }
        },
        950761: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                u = n(247250),
                a = n(347874),
                c = n(473708);

            function l(e) {
                var t = (0, o.e7)([a.Z], (function() {
                    return a.Z.getVoiceParticipantsHidden(e)
                }));
                return (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: c.Z.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: function() {
                        return u.Z.toggleVoiceParticipantsHidden(e, !t)
                    }
                })
            }
        },
        492692: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(785893),
                o = (n(667294),
                    n(202351)),
                i = n(70418),
                u = n(379991),
                a = n(656645),
                c = n(664625),
                l = n(602351),
                s = n(2590),
                d = n(36256);

            function f(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
                    n = (0, o.e7)([c.default], (function() {
                        return c.default.getId()
                    })),
                    r = (0, o.e7)([l.Z], (function() {
                        return l.Z.supports(d.AN.DISABLE_VIDEO) && l.Z.isVideoEnabled()
                    })),
                    i = (0, o.e7)([l.Z], (function() {
                        return l.Z.isLocalVideoDisabled(n, t)
                    }), [n, t]),
                    u = function(e) {
                        var r = e ? s.ZUi.DISABLED : s.ZUi.MANUAL_ENABLED;
                        a.Z.setDisableLocalVideo(n, r, t)
                    },
                    f = null == e || e === n,
                    p = f && (r || i);
                return [p, i, u]
            }
            var p = n(284278),
                b = n(470856),
                y = n(473708);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function v(e, t) {
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
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
                    n = v(f(e, t), 3),
                    a = n[0],
                    c = n[1],
                    l = n[2],
                    s = (0, o.e7)([u.ZP], (function() {
                        return u.ZP.disableHideSelfStreamAndVideoConfirmationAlert
                    })),
                    O = function() {
                        if (s || c) return l(!c);
                        (0, i.openModal)((function(e) {
                            return (0, r.jsx)(p.Z, I(E({}, e), {
                                type: b.K.VIDEO,
                                onConfirm: function() {
                                    return l(!c)
                                }
                            }))
                        }))
                    };
                return a ? (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: y.Z.Messages.SHOW_SELF_VIDEO,
                    checked: !c,
                    action: O
                }) : null
            }
        },
        289150: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                u = n(504001),
                a = n(664625),
                c = n(602351),
                l = n(473708),
                s = n(352062),
                d = n.n(s);

            function f(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            f(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            f(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
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

            function y(e, t) {
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
            var O = function(e, t) {
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

            function h(e) {
                var t = (0, i.useModalContext)(),
                    s = (0, o.e7)([c.Z], (function() {
                        return c.Z.isVideoEnabled()
                    })),
                    f = (0, o.e7)([a.default], (function() {
                        return a.default.getId() === e
                    })),
                    h = (0, u.Z)();
                return s && !h || !f ? null : (0, r.jsx)(i.MenuItem, {
                    id: "change-video-background",
                    label: (0, r.jsx)("div", {
                        className: d().item,
                        children: s ? l.Z.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : l.Z.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, i.openModalLazy)(p((function() {
                            var e, t;
                            return O(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(58905), n.e(75331)]).then(n.bind(n, 763361))];
                                    case 1:
                                        e = o.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, y(function(e) {
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
                                            }({}, e), {
                                                videoEnabled: s
                                            }))
                                        }]
                                }
                            }))
                        })), {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                })
            }
        },
        855483: (e, t, n) => {
            n.d(t, {
                H2: () => r,
                JM: () => u,
                VI: () => a,
                eK: () => o
            });

            function r() {
                return {
                    textValue: "",
                    richValue: [{
                        type: "line",
                        children: [{
                            text: ""
                        }]
                    }]
                }
            }

            function o(e) {
                return {
                    textValue: e,
                    richValue: u(e)
                }
            }
            var i = Object.freeze([Object.freeze({
                type: "line",
                children: Object.freeze([Object.freeze({
                    text: ""
                })])
            })]);

            function u(e) {
                return "" !== e ? e.split("\n").map((function(e) {
                    return {
                        type: "line",
                        children: [{
                            text: e
                        }]
                    }
                })) : i
            }

            function a(e) {
                switch (e.type) {
                    case "userMention":
                        return {
                            type: "userMention", userId: e.userId
                        };
                    case "channelMention":
                        return {
                            type: "channelMention", channelId: e.channelId
                        };
                    case "staticRouteLink":
                        return {
                            type: "staticRouteLink", channelId: e.channelId
                        };
                    case "soundboard":
                        return {
                            type: "soundboard", soundId: e.soundId
                        };
                    case "roleMention":
                        return {
                            type: "roleMention", roleId: e.roleId
                        };
                    case "textMention":
                        return {
                            type: "textMention", text: e.name
                        };
                    case "emoji":
                        return {
                            type: "emoji", name: e.emoji.name, surrogate: e.emoji.surrogate
                        };
                    case "customEmoji":
                        return {
                            type: "customEmoji", emojiId: e.emoji.emojiId, name: e.emoji.name, animated: e.emoji.animated
                        };
                    case "testInlineVoid":
                        throw new Error("Unable to convert test types")
                }
                return null
            }
        },
        112897: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                o = (n(667294), n(70418)),
                i = n(968449),
                u = n(416644),
                a = n(691797);

            function c(e) {
                var t = e.id,
                    n = e.label,
                    c = e.onSuccess,
                    l = e.shiftId,
                    s = e.showIconFirst,
                    d = i.Sb.useSetting();
                if (__OVERLAY__ || !d || !a.wS) return null;
                var f = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(o.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        var n = null != l && e.shiftKey ? l : t;
                        (0, a.JG)(n);
                        null == c || c()
                    },
                    icon: u.Z,
                    showIconFirst: s
                }, f)
            }
        },
        332349: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                u = n(70418),
                a = n(577357),
                c = n(703790),
                l = n(567403),
                s = n(682776),
                d = n(2590),
                f = n(473708),
                p = n(35637),
                b = n.n(p);

            function y(e, t, n) {
                var p = l.Z.getGuild(t),
                    y = (0, i.e7)([s.Z], (function() {
                        return null != p ? s.Z.can(d.Plq.MANAGE_GUILD, p) : null
                    })),
                    O = o.useCallback((function() {
                        c.Z.open(t, d.pNK.INTEGRATIONS);
                        a.Z.setSection(d.b4C.APPLICATION, e.id)
                    }), [e.id, t]),
                    h = n === d.IlC.POPOUT;
                return e.bot && y && !h ? (0, r.jsx)(u.MenuItem, {
                    id: "manage-integration",
                    label: (0, r.jsx)("div", {
                        className: b().labelWrapper,
                        children: (0, r.jsx)("span", {
                            className: b().label,
                            children: f.Z.Messages.MANAGE_INTEGRATION
                        })
                    }),
                    action: O
                }) : null
            }
        },
        90003: (e, t, n) => {
            n.d(t, {
                q: () => d,
                z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(70418));

            function i(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function a(e) {
                            i(u, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            i(u, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
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
            }
            var l = function(e, t) {
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

            function s(e, t, i) {
                (0, o.openModalLazy)(u((function() {
                    var o, u;
                    return l(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(36576)]).then(n.bind(n, 736576))];
                            case 1:
                                o = a.sent(), u = o.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(u, c({
                                        guildId: e,
                                        userId: t,
                                        anaylticsLocations: i
                                    }, n))
                                }]
                        }
                    }))
                })))
            }

            function d(e, t, i) {
                (0, o.openModalLazy)(u((function() {
                    var o, u;
                    return l(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(16782)]).then(n.bind(n, 916782))];
                            case 1:
                                o = a.sent(), u = o.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(u, c({
                                        guildId: e,
                                        userId: t,
                                        anaylticsLocations: i
                                    }, n))
                                }]
                        }
                    }))
                })))
            }
        },
        872017: (e, t, n) => {
            n.d(t, {
                AB: () => a,
                ZP: () => s,
                s5: () => d
            });
            var r = n(202351),
                o = n(21372),
                i = n(473903),
                u = n(309945);

            function a(e) {
                var t = (0, r.e7)([i.default], (function() {
                    return i.default.getCurrentUser()
                }));
                return s(null == t ? void 0 : t.id, e)
            }

            function c(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function l(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, u.b)(e)]
            }

            function s(e, t) {
                return l((0, r.e7)([o.ZP], (function() {
                    return c(e, t, o.ZP)
                }), [t, e]))
            }

            function d(e, t) {
                return l(c(e, t, o.ZP))
            }
        },
        822003: (e, t, n) => {
            n.d(t, {
                BG: () => b,
                aY: () => r,
                dW: () => y,
                gm: () => p,
                jQ: () => o,
                sE: () => O
            });
            var r, o, i = n(667294),
                u = n(153686),
                a = n(396043),
                c = n(664625),
                l = n(652591),
                s = n(2590);

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function f(e, t, n) {
                var r, o = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            d(e, t, n[t])
                        }))
                    }
                    return e
                }({}, t, (0, a.hH)(null !== (r = t.guild_id) && void 0 !== r ? r : n));
                l.default.track(e, o)
            }

            function p(e) {
                return i.useCallback((function(t) {
                    ! function(e) {
                        var t = {
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        f(s.rMx.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }), [e])
            }

            function b(e) {
                return i.useCallback((function(t) {
                    ! function(e, t) {
                        var n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        f(s.rMx.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }), [e])
            }! function(e) {
                e.UNUSUAL_DM_ACTIVITY = "unusual_dm_activity";
                e.COMMUNICATION_DISABLED = "communication_disabled"
            }(r || (r = {}));

            function y(e) {
                return i.useCallback((function(t) {
                    ! function(e, t) {
                        var n = {
                            flag_type: t,
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        f(s.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }), [e])
            }! function(e) {
                e.BAN = "ban";
                e.KICK = "kick";
                e.MUTE = "mute";
                e.TIMEOUT = "timeout";
                e.ADD_ROLE = "add_role";
                e.REMOVE_ROLE = "remove_role";
                e.COPY_ID = "copy_id";
                e.CHANGE_NICKNAME = "change_nickname"
            }(o || (o = {}));

            function O(e, t) {
                var n = t.location,
                    r = t.targetUserId,
                    o = t.targets;
                return i.useCallback((function(t) {
                    var i = {
                        action_type: t,
                        mod_user_id: c.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != r ? r : void 0,
                        targets: null != o ? o : void 0
                    };
                    f(s.rMx.MODERATION_ACTION, i)
                }), [e, n, r, o])
            }
        },
        945514: (e, t, n) => {
            n.d(t, {
                I4: () => h,
                Sn: () => b,
                U3: () => I,
                Ui: () => E,
                W4: () => p,
                gq: () => y,
                kZ: () => f
            });
            var r = n(281110),
                o = n(744564),
                i = n(49621),
                u = n(248046),
                a = n(2590);

            function c(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            c(i, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            c(i, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
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
            var d = function(e, t) {
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

            function f() {
                o.Z.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function p(e, t, n) {
                o.Z.dispatch({
                    applicationId: e,
                    commandId: t,
                    permissions: n,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function b(e, t) {
                r.ZP.get(a.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then((function(n) {
                    o.Z.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: t,
                        commands: n.body.application_commands,
                        guildId: e,
                        permissions: n.body.permissions
                    })
                }), (function() {
                    o.Z.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: t
                    })
                }))
            }

            function y(e, t, n) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = l((function(e, t, n) {
                    var i, u;
                    return d(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                i = [];
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get(a.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n))];
                            case 2:
                                (u = c.sent()).ok && (i = u.body.permissions);
                                return [3, 4];
                            case 3:
                                if (404 !== c.sent().status) {
                                    o.Z.dispatch({
                                        type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                                        applicationId: e,
                                        commandId: n,
                                        guildId: t
                                    });
                                    return [2]
                                }
                                return [3, 4];
                            case 4:
                                o.Z.dispatch({
                                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                                    applicationId: e,
                                    commandId: n,
                                    guildId: t,
                                    permissions: i
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function h(e) {
                o.Z.dispatch({
                    applicationId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function E(e) {
                o.Z.dispatch({
                    commandId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }

            function I(e) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = l((function(e) {
                    var t, n, r, u, a, c, l, s;
                    return d(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                t = e.applicationId, n = e.commandId, r = e.defaultEveryoneValue, u = e.defaultEverywhereValue, a = e.guildId, c = e.permissions;
                                l = n === t ? g(a, c, r, u) : c;
                                return [4, i.dh(t, a, n, l)];
                            case 1:
                                (s = d.sent()).ok && o.Z.dispatch({
                                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                                    applicationId: t,
                                    commandId: n,
                                    guildId: a,
                                    permissions: s.body.permissions
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function g(e, t, n, r) {
                if (!n || !r) return t;
                var o, i = (s(o = {}, e, n), s(o, (0, u.bD)(e), r), o);
                return t.filter((function(e) {
                    var t = i[e.id];
                    return null == t || e.permission !== t
                }))
            }
        },
        15970: (e, t, n) => {
            n.d(t, {
                b: () => o
            });
            var r = n(2590);

            function o(e, t, n, o) {
                var i = null != n ? n : t;
                return null != i && e.can(r.Plq.CREATE_INSTANT_INVITE, i) || null != t && null != t.vanityURLCode || null != (null == o ? void 0 : o.invite_code)
            }
        },
        869854: (e, t, n) => {
            n.d(t, {
                B0: () => l,
                OG: () => f,
                kz: () => s,
                yr: () => d
            });
            var r = n(281110),
                o = n(744564),
                i = n(2590);

            function u(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function a(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            u(i, r, o, a, c, "next", e)
                        }

                        function c(e) {
                            u(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
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
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
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

            function l(e, t, n, r) {
                o.Z.dispatch({
                    type: "QUEUE_INTERACTION_COMPONENT_STATE",
                    messageId: e,
                    nonce: t,
                    state: n,
                    indices: r
                })
            }

            function s(e, t) {
                var n = t.data,
                    r = t.messageId,
                    i = t.onCreate,
                    u = t.onSuccess,
                    a = t.onFailure;
                o.Z.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: r,
                    onCreate: i,
                    onSuccess: u,
                    onFailure: a
                })
            }

            function d(e, t, n) {
                o.Z.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }

            function f(e, t) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = a((function(e, t) {
                    var n, u;
                    return c(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: i.ANM.MESSAGE_INTERACTION_DATA(e, t),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                if ((n = a.sent()).ok) {
                                    u = n.body;
                                    o.Z.dispatch({
                                        type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                                        channelId: e,
                                        messageId: t,
                                        interactionData: u
                                    })
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        838956: (e, t, n) => {
            n.d(t, {
                rQ: () => Z,
                $s: () => P,
                tM: () => N,
                t$: () => w,
                ow: () => S,
                Sg: () => j
            });
            var r = n(842227),
                o = n(281110),
                i = n(744564),
                u = n(720419),
                a = n(73904),
                c = n(457581),
                l = n(664625),
                s = n(869854),
                d = n(873934),
                f = n(457896);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y = "_errors";

            function O(e) {
                return h(e, void 0)
            }

            function h(e, t) {
                var n = e._errors;
                if (null != n && Array.isArray(n)) return n[0];
                var r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var u, a = Object.entries(e)[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                        var c = b(u.value, 2),
                            l = c[0],
                            s = c[1];
                        if (l !== y && null != s && "object" == typeof s) return h(s, null != t ? t : l)
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        r || null == a.return || a.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return null
            }
            var E = n(2590);

            function I(e, t, n, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
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
            var m = function(e, t) {
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

            function S(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : r.default.extractTimestamp(e) + 9e5
            }
            var T, _, N = (_ = (T = function(e) {
                var t, n, i, u, f, p, b, y, O, h, I;
                return m(this, (function(v) {
                    switch (v.label) {
                        case 0:
                            t = e.componentType, n = e.messageId, i = e.messageFlags, u = e.customId, f = e.indices, p = e.applicationId, b = e.channelId, y = e.guildId, O = e.localState;
                            h = r.default.fromTimestamp(Date.now());
                            return d.Z.canQueueInteraction(n, h) ? [4, c.Z.unarchiveThreadIfNecessary(b)] : [2];
                        case 1:
                            v.sent();
                            (0, s.kz)(h, {
                                messageId: n,
                                data: {
                                    interactionType: a.B8.MESSAGE_COMPONENT,
                                    customId: u,
                                    indices: f
                                },
                                onFailure: function(e, t) {
                                    return M(b, e, t)
                                }
                            });
                            null != O && (0, s.B0)(n, h, O, f);
                            I = {
                                type: a.B8.MESSAGE_COMPONENT,
                                nonce: h,
                                guild_id: y,
                                channel_id: b,
                                message_flags: i,
                                message_id: n,
                                application_id: p,
                                session_id: l.default.getSessionId(),
                                data: g({
                                    component_type: t,
                                    custom_id: u
                                }, A(O))
                            };
                            return [4, o.ZP.post({
                                url: E.ANM.INTERACTIONS,
                                body: I,
                                timeout: 3e3
                            }, (function(e) {
                                j(h, b, y, e)
                            }))];
                        case 2:
                            v.sent();
                            return [2]
                    }
                }))
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise((function(n, r) {
                    var o = T.apply(e, t);

                    function i(e) {
                        I(o, n, r, i, u, "next", e)
                    }

                    function u(e) {
                        I(o, n, r, i, u, "throw", e)
                    }
                    i(void 0)
                }))
            }), function(e) {
                return _.apply(this, arguments)
            });

            function A(e) {
                if (null == e) return null;
                if (e.type === a.re.STRING_SELECT || e.type === a.re.INPUT_TEXT) return e;
                var t = e.selectedOptions.map((function(e) {
                    return e.value
                }));
                return {
                    type: e.type,
                    values: t
                }
            }
            var Z, M = function(e, t, n) {
                    null == n && null != t && u.Z.sendClydeError(e, t)
                },
                j = function(e, t, n, r) {
                    if (!r.ok) {
                        if (!r.hasErr) {
                            if (r.status >= 400 && r.status < 500 && r.body) {
                                if (r.body.code === E.evJ.INVALID_FORM_BODY && r.body.errors) {
                                    var o = O(r.body.errors);
                                    null == o || "INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" !== o.code && "INTERACTION_APPLICATION_COMMAND_INVALID" !== o.code || i.Z.dispatch({
                                        type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                        channelId: t,
                                        guildId: n
                                    });
                                    (0, s.yr)(e, void 0, null == o ? void 0 : o.message);
                                    return
                                }(0, s.yr)(e, void 0, r.body.message);
                                return
                            }
                            var u;
                            (0, s.yr)(e, null === (u = r.body) || void 0 === u ? void 0 : u.code);
                            return
                        }(0, s.yr)(e)
                    }
                };
            ! function(e) {
                e[e.SENDING = 0] = "SENDING";
                e[e.CREATED = 1] = "CREATED";
                e[e.FAILED = 2] = "FAILED";
                e[e.TIMED_OUT = 3] = "TIMED_OUT"
            }(Z || (Z = {}));
            var w = function(e, t) {
                var n, o = null == t ? void 0 : t.state,
                    i = e.state === E.yb.SENT && S(e.id) < Date.now(),
                    u = e.state === E.yb.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : r.default.extractTimestamp(n) + 3e3) < Date.now(),
                    c = (null == t ? void 0 : t.data.interactionType) === a.B8.APPLICATION_COMMAND,
                    l = e.isCommandType();
                return c && o === f.F.QUEUED || l && e.state === E.yb.SENDING && null != t ? Z.SENDING : c && o === f.F.CREATED || e.hasFlag(E.iLy.LOADING) && !i ? Z.CREATED : null != e.interaction && e.hasFlag(E.iLy.LOADING) && i || null != e.interaction && !e.hasFlag(E.iLy.LOADING) && u ? Z.TIMED_OUT : l && e.state === E.yb.SEND_FAILED ? Z.FAILED : void 0
            };

            function P(e) {
                for (var t = e.options; 1 === (null == t ? void 0 : t.length) && (t[0].type === a.jw.SUB_COMMAND_GROUP || t[0].type === a.jw.SUB_COMMAND);) t = t[0].options;
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, u = (null != t ? t : [])[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                        if (i.value.type === a.jw.ATTACHMENT) return !1
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
                return !0
            }
        },
        499219: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(202351),
                o = n(61209),
                i = n(715107);

            function u() {
                return (0, r.e7)([i.Z, o.Z], (function() {
                    var e = i.Z.getVoiceChannelId();
                    if (null != e) {
                        var t = o.Z.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                }))
            }
        },
        575351: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                u = n(567403),
                a = n(473903),
                c = n(407561),
                l = n(771575),
                s = n(162723),
                d = n(933022),
                f = n(664625),
                p = n(715107),
                b = n(525261);
            var y = n(499219),
                O = n(473708);

            function h(e) {
                var t, n = (0, y.Z)(),
                    h = null == n ? void 0 : n.id,
                    E = null == n ? void 0 : n.guild_id,
                    I = (0, o.e7)([u.Z], (function() {
                        return u.Z.getGuild(E)
                    }), [E]),
                    v = (0, o.e7)([c.Z], (function() {
                        return null != h ? c.Z.getVoiceStateForChannel(h, e.id) : null
                    }), [h, e.id]),
                    g = (null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
                    m = function() {
                        var e = (0, o.e7)([p.Z], (function() {
                                return p.Z.getVoiceChannelId()
                            })),
                            t = (0, o.e7)([f.default], (function() {
                                return f.default.getId()
                            }));
                        return (0, b.ZP)(t, e) === b.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                    }(),
                    S = (0, o.e7)([d.ZP], (function() {
                        return d.ZP.getPermissionsForUser(e.id, h)
                    }), [h, e.id]),
                    T = (0, s.B)(h);
                if (null == n || null == I || null == v) return null;
                if (S.speaker) return null;
                var _ = function() {
                    g ? (0, l.RK)(n, !1) : (0, l._0)(n, e.id)
                };
                return T ? (0, r.jsx)(i.MenuItem, {
                    id: "invite-speaker",
                    label: g ? O.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : O.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: _
                }) : m && g ? (0, r.jsx)(i.MenuItem, {
                    id: "invite-speaker",
                    label: O.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: _
                }) : null
            }
        },
        914136: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => K
            });
            var r = n(785893),
                o = (n(667294),
                    n(70418)),
                i = n(971402),
                u = n(343639),
                a = n(567678),
                c = n(73904),
                l = n(82055),
                s = n(153686),
                d = n(950761),
                f = n(492692),
                p = n(289150),
                b = n(737331),
                y = n(112897),
                O = n(434651),
                h = n(332349),
                E = n(575351),
                I = n(202351),
                v = n(61209),
                g = n(567403),
                m = n(682776),
                S = n(473903),
                T = n(771575),
                _ = n(933022),
                N = n(2590),
                A = n(473708);
            var Z = n(662851),
                M = n(343315),
                j = n(171384),
                w = n(430198),
                P = n(699050),
                C = n(836448),
                D = n(441738),
                R = n(982348),
                x = n(578142),
                G = n(827991),
                L = n(93439),
                U = n(100856),
                k = n(598955),
                V = n(536130),
                F = n(973424),
                H = n(234617),
                B = n(394212);
            const K = (0, a.Z)((0, u.Z)((function(e) {
                var t = e.user,
                    n = e.guildId,
                    u = e.channel,
                    a = e.showMediaItems,
                    s = void 0 !== a && a,
                    K = e.showChatItems,
                    W = void 0 === K || K,
                    Y = e.showChannelCallItems,
                    z = void 0 !== Y && Y,
                    q = e.showModalItems,
                    Q = void 0 === q || q,
                    X = e.showStageChannelItems,
                    $ = void 0 !== X && X,
                    J = e.context,
                    ee = e.onSelect,
                    te = e.onHeightUpdate,
                    ne = (0, V.Z)(t.id, n, u.id),
                    re = (0, G.Z)(t, n, J),
                    oe = (0, L.Z)(t.id, J),
                    ie = (0, B.Z)(t.id),
                    ue = (0, D.Z)(t, J),
                    ae = (0, j.Z)({
                        user: t,
                        guildId: n,
                        context: J
                    }),
                    ce = (0, M.Z)(t),
                    le = (0, H.Z)(t.id),
                    se = (0, k.Z)(t.id),
                    de = (0, O.Z)({
                        guildId: n,
                        userId: t.id,
                        analyticsLocation: {
                            page: N.ZY5.GUILD_CHANNEL,
                            section: N.jXE.CHAT_USERNAME,
                            object: N.qAy.CONTEXT_MENU_ITEM
                        },
                        context: J
                    }),
                    fe = (0, x.Z)(t, n),
                    pe = (0, l.Z)(null, t),
                    be = (0, Z.Z)(t),
                    ye = (0, C.Z)(t),
                    Oe = (0, w.Z)(t, n, u.id),
                    he = (0, F.Z)(t.id, n),
                    Ee = (0, U.Z)(t, n),
                    Ie = (0, y.Z)({
                        id: t.id,
                        label: A.Z.Messages.COPY_ID_USER
                    }),
                    ve = (0, R.Z)(t.id, u.id),
                    ge = (0, f.Z)(t.id),
                    me = (0, d.Z)(u.id),
                    Se = (0, E.Z)(t),
                    Te = function(e, t, n) {
                        var i, u = v.Z.getChannel(n),
                            a = (0, I.e7)([g.Z], (function() {
                                return g.Z.getGuild(t)
                            }), [t]),
                            c = (0, I.e7)([_.ZP], (function() {
                                return _.ZP.getPermissionsForUser(e.id, n)
                            }), [n, e.id]),
                            l = (null === (i = S.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) === e.id,
                            s = (0, I.e7)([m.Z], (function() {
                                return null != n && m.Z.canWithPartialContext(N.Plq.MUTE_MEMBERS, {
                                    channelId: n
                                })
                            }), [n]);
                        return null == u || null == a ? null : (s || l) && c.speaker ? (0, r.jsx)(o.MenuItem, {
                            id: "audience",
                            label: l ? A.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : A.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                            action: function() {
                                l ? (0, T.yi)(u) : (0, T.hz)(e, u)
                            }
                        }) : null
                    }(t, n, u.id),
                    _e = (0, P.Z)({
                        commandType: c.yU.USER,
                        commandTargetId: t.id,
                        channel: u,
                        guildId: n,
                        location: "GuildChannelUserContextMenu",
                        onShow: te
                    }),
                    Ne = (0, p.Z)(t.id),
                    Ae = (0, h.Z)(t, n, J),
                    Ze = t.isNonUserBot(),
                    Me = t.isClyde(),
                    je = (0, b.R8)();
                return (0, r.jsxs)(o.Menu, {
                    navId: "user-context",
                    onClose: i.Zy,
                    "aria-label": A.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: ee,
                    children: [!Ze && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(o.MenuGroup, {
                            children: [Se, $ && Te]
                        }), (0, r.jsxs)(o.MenuGroup, {
                            children: [Q && ne, W && re, oe, ue, Q && ae, Q && ce, ie]
                        }), s && (0, r.jsx)(o.MenuGroup, {
                            children: le
                        }), (0, r.jsx)(o.MenuGroup, {
                            children: Q && pe
                        }), (0, r.jsxs)(o.MenuGroup, {
                            children: [s && se, s && ve, Q && de, _e, Ae, Q && fe, be, Q && ye, z && Ne]
                        }), (0, r.jsx)(o.MenuGroup, {
                            children: Oe
                        }), (0, r.jsxs)(o.MenuGroup, {
                            children: [he, Ee]
                        }), z && (0, r.jsxs)(o.MenuGroup, {
                            children: [me, ge]
                        })]
                    }), Me && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(o.MenuGroup, {
                            children: [Q && ne, je && oe]
                        }), (0, r.jsx)(o.MenuGroup, {
                            children: Oe
                        })]
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: Ie
                    })]
                })
            }), {
                object: N.qAy.CONTEXT_MENU
            }), [s.Z.CONTEXT_MENU, s.Z.GUILD_CHANNEL_USER_MENU])
        },
        699050: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                o = n(667294),
                i = n(441143),
                u = n.n(i),
                a = n(202351),
                c = n(70418),
                l = n(219217),
                s = n(272200),
                d = n(248046),
                f = n(698847),
                p = n(242922),
                b = n(767846),
                y = n.n(b);
            const O = function() {
                return (0, r.jsx)("div", {
                    className: y().loadingWrapper,
                    children: (0, r.jsx)(c.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
            };
            var h = n(567403),
                E = n(127624),
                I = n(473708),
                v = n(929945),
                g = n.n(v);
            const m = function(e) {
                var t = e.commandType,
                    n = e.commandTargetId,
                    i = e.channel,
                    b = e.guildId,
                    y = e.onShow,
                    v = e.location,
                    m = o.useRef(!1),
                    S = o.useRef(0),
                    T = (0, a.e7)([h.Z], (function() {
                        return h.Z.getGuild(null != b ? b : i.guild_id)
                    })),
                    _ = (0, l.o)(i, {
                        commandType: t
                    }, {
                        location: v,
                        placeholderCount: E.Mn,
                        limit: E.lr
                    }),
                    N = _.hasMoreAfter,
                    A = _.scrollDown,
                    Z = _.sectionDescriptors,
                    M = _.commands,
                    j = _.placeholders,
                    w = o.useMemo((function() {
                        var e = M.concat(j),
                            t = {};
                        Z.forEach((function(e) {
                            t[e.id] = e
                        }));
                        return {
                            visibleCommands: e,
                            sections: t
                        }
                    }), [M, Z, j]),
                    P = w.visibleCommands,
                    C = w.sections,
                    D = o.useMemo((function() {
                        return (0,
                            d.nT)(i, t, P.length, null == T ? void 0 : T.applicationCommandCounts)
                    }), [i, t, null == T ? void 0 : T.applicationCommandCounts, P.length]);
                o.useEffect((function() {
                    if (D !== m.current) {
                        D && (null == y || y());
                        m.current = D
                    }
                }), [D, y]);
                o.useEffect((function() {
                    R(S.current)
                }), [P]);
                var R = o.useCallback((function(e) {
                        N && e + 500 > 34 * P.length - 40 && A();
                        S.current = e
                    }), [N, A, P]),
                    x = o.useCallback((function(e) {
                        if (e.inputType === s.iw.PLACEHOLDER) return (0, r.jsx)(c.MenuItem, {
                            id: "menu-command-".concat(e.id),
                            render: function() {
                                return (0, r.jsx)(O, {})
                            }
                        }, "menu-command-".concat(e.id));
                        u()(null != i, "menu item should not show if channel is null");
                        var t = C[e.applicationId],
                            o = null != t ? (0, p.ky)(t) : void 0;
                        return (0, r.jsx)(c.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: function() {
                                return null != o ? (0, r.jsx)(o, {
                                    channel: i,
                                    section: t,
                                    width: 18,
                                    height: 18,
                                    selectable: !1
                                }) : null
                            },
                            action: function() {
                                (0, f.Z)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: i,
                                        guild: T
                                    },
                                    commandTargetId: n
                                })
                            }
                        }, e.id)
                    }), [i, T, n, C]);
                return D && (0, r.jsx)(c.MenuItem, {
                    id: "apps",
                    label: I.Z.Messages.APPS,
                    onChildrenScroll: R,
                    childRowHeight: 34,
                    listClassName: g().list,
                    disabled: 0 === P.length,
                    children: P.map(x)
                })
            }
        },
        982348: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                u = n(247250),
                a = n(347874),
                c = n(407561),
                l = n(2590),
                s = n(473708);

            function d(e, t) {
                var n = (0, o.e7)([a.Z], (function() {
                    return e === a.Z.getSelectedParticipantId(t)
                }), [t, e]);
                return (0, o.e7)([a.Z, c.Z], (function() {
                    var n = c.Z.isInChannel(t, e) && c.Z.hasVideo(t),
                        r = a.Z.getLayout(t),
                        o = r === l.AEg.MINIMUM || r === l.AEg.NORMAL;
                    return !n || o
                }), [t, e]) ? null : (0, r.jsx)(i.MenuItem, {
                    id: "focus-video",
                    label: n ? s.Z.Messages.UNFOCUS_PARTICIPANT : s.Z.Messages.FOCUS_PARTICIPANT,
                    action: function() {
                        return u.Z.selectParticipant(t, n ? null : e)
                    }
                })
            }
        },
        827991: (e, t, n) => {
            n.d(t, {
                Z: () => h,
                q: () => O
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                u = n(224134),
                a = n(61209),
                c = n(682776),
                l = n(715107),
                s = n(930948),
                d = n(749565),
                f = n(2590),
                p = n(473708);

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(e, t) {
                var n = e.id,
                    r = "@".concat(d.ZP.getUserTag(e, {
                        decoration: "never"
                    })),
                    o = "<@".concat(n, ">");
                s.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
                    plainText: r,
                    rawText: o
                });
                null != t && u.Z.startTyping(t)
            }

            function h(e, t, n) {
                var u = y((0, o.Wu)([l.Z, a.Z, c.Z], (function() {
                        var e = l.Z.getChannelId(t),
                            n = a.Z.getChannel(e);
                        return [e, null != n && (n.isMultiUserDM() || c.Z.can(f.Plq.SEND_MESSAGES, n))]
                    }), [t]), 2),
                    s = u[0],
                    d = u[1],
                    b = n === f.IlC.POPOUT;
                return !d || b ? null : (0, r.jsx)(i.MenuItem, {
                    id: "mention",
                    label: p.Z.Messages.MENTION,
                    action: function() {
                        O(e, s)
                    }
                })
            }
        },
        598955: (e, t, n) => {
            n.d(t, {
                Z: () => v
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                u = n(105783),
                a = n(656645),
                c = n(656907),
                l = n(602351),
                s = n(563367),
                d = n(464187),
                f = n(473903),
                p = n(818417),
                b = n(652591),
                y = n(2590),
                O = n(36256),
                h = n(473708),
                E = n(870726),
                I = n.n(E);

            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.Yn.DEFAULT,
                    n = (0, o.e7)([f.default], (function() {
                        var t;
                        return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
                    })),
                    E = (0, o.e7)([c.Z], (function() {
                        return c.Z.isLocalSoundboardMuted(e)
                    })),
                    v = (0, o.cj)([l.Z], (function() {
                        return n ? {
                            muted: l.Z.isSelfMute(t),
                            deafened: l.Z.isSelfDeaf(t)
                        } : {
                            muted: l.Z.isLocalMute(e, t),
                            localVideoDisabled: l.Z.isLocalVideoDisabled(e, t),
                            localVideoAutoDisabled: l.Z.isLocalVideoAutoDisabled(e, t)
                        }
                    }), [n, t, e]),
                    g = v.muted,
                    m = v.deafened,
                    S = void 0 !== m && m,
                    T = v.localVideoDisabled,
                    _ = void 0 !== T && T,
                    N = v.localVideoAutoDisabled,
                    A = void 0 !== N && N,
                    Z = l.Z.supports(O.AN.DISABLE_VIDEO) && !n ? (0, r.jsx)(i.MenuCheckboxItem, {
                        id: "disable-video",
                        label: h.Z.Messages.DISABLE_VIDEO,
                        action: function() {
                            if (A) u.Z.show({
                                title: h.Z.Messages.UNSTABLE_CONNECTION,
                                body: h.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                confirmText: h.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                cancelText: h.Z.Messages.LEAVE_VIDEO_OFF,
                                onConfirm: function() {
                                    return a.Z.setDisableLocalVideo(e, y.ZUi.MANUAL_ENABLED)
                                }
                            });
                            else {
                                var n = _ ? y.ZUi.MANUAL_ENABLED : y.ZUi.DISABLED;
                                a.Z.setDisableLocalVideo(e, n, t)
                            }
                        },
                        checked: _,
                        subtext: A ? (0, r.jsxs)("div", {
                            className: I().videoPaused,
                            children: [(0, r.jsx)(p.Z, {
                                width: 12,
                                className: I().warningCircle
                            }), h.Z.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    M = n ? null : (0, r.jsx)(i.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: h.Z.Messages.MUTE_SOUNDBOARD,
                        action: function() {
                            var n = s.Z.getRTCConnection();
                            b.default.track(y.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: d.Z.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                                parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                                mute_soundboard: !E
                            });
                            a.Z.toggleLocalSoundboardMute(e, t)
                        },
                        checked: E
                    }, "soundboard-sound-mute");
                return n ? [(0, r.jsx)(i.MenuCheckboxItem, {
                    id: "mute",
                    label: h.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return a.Z.toggleSelfMute({
                            context: t
                        })
                    },
                    checked: g
                }, "self-mute"), (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "deafen",
                    label: h.Z.Messages.DEAFEN,
                    action: function() {
                        return a.Z.toggleSelfDeaf({
                            context: t
                        })
                    },
                    checked: S
                }, "self-deafen"), Z] : [(0, r.jsx)(i.MenuCheckboxItem, {
                    id: "mute",
                    label: h.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return a.Z.toggleLocalMute(e, t)
                    },
                    checked: g
                }, "self-mute"), M, Z]
            }
        },
        234617: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                u = n(656645),
                a = n(602351),
                c = n(473903),
                l = n(615457),
                s = n(120415),
                d = n(36256),
                f = n(473708);

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function b(e) {
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

            function y(e, t) {
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

            function O(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
                    p = (0, o.e7)([a.Z], (function() {
                        return a.Z.getLocalVolume(e, n)
                    }), [e, n]),
                    O = e === (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
                    h = n === d.Yn.STREAM;
                return O ? null : (0, r.jsx)(i.MenuControlItem, {
                    id: "user-volume",
                    label: h ? f.Z.Messages.STREAM_VOLUME : f.Z.Messages.USER_VOLUME,
                    control: function(t, o) {
                        return (0, r.jsx)(i.MenuSliderControl, y(b({}, t), {
                            ref: o,
                            value: (0, l.P)(p),
                            maxValue: s.FB ? 200 : 100,
                            onChange: function(t) {
                                return u.Z.setLocalVolume(e, (0, l.A)(t), n)
                            },
                            "aria-label": h ? f.Z.Messages.STREAM_VOLUME : f.Z.Messages.USER_VOLUME
                        }))
                    }
                })
            }
        },
        504001: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(202351),
                o = n(602351),
                i = n(630926);

            function u() {
                return (0, r.e7)([o.Z], (function() {
                    return (0, i.Z)(o.Z)
                }))
            }
        },
        223175: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                u = n(633878);

            function a(e, t, n) {
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

            function l(e, t) {
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

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
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

            function f(e, t) {
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
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    l = e.foreground,
                    p = f(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", d(function(e) {
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
                }({}, (0, u.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: c,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: l,
                        d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    d = e.color,
                    f = void 0 === d ? i.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    y = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(e) {
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
                }({}, (0, u.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        457997: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(66541),
                u = n(633878);

            function a(e, t, n) {
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

            function l(e, t) {
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
            const s = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 20 : t,
                    o = e.height,
                    i = void 0 === o ? 20 : o,
                    s = e.color,
                    d = void 0 === s ? "currentColor" : s,
                    f = e.foreground,
                    p = l(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", c(function(e) {
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
                }({}, (0, u.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 20 20",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: f,
                            fill: d,
                            d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                        })
                    })
                }))
            }), i.T)
        },
        416644: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                u = n(633878);

            function a(e, t, n) {
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

            function l(e, t) {
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

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
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

            function f(e, t) {
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
            const p = (0, o.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    l = e.foreground,
                    p = f(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", d(function(e) {
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
                }({}, (0, u.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: l,
                        fill: c,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    d = e.color,
                    f = void 0 === d ? i.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    y = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(e) {
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
                }({}, (0, u.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        }
    }
]);