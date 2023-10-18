"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [83922, 84522, 56861, 77357], {
        577357: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(744564),
                o = n(703790),
                i = n(945514),
                u = n(823530);

            function c(e, t, n, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function a(e) {
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
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
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
                        }([i, c])
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
                    return a((function() {
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
                    return a((function() {
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
                    return a((function() {
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
                c = n(2590),
                a = ["Spidey Bot", "Captain Hook"];
            const l = {
                fetchForGuild: function(e) {
                    u.Z.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e
                    });
                    i.ZP.get({
                        url: c.ANM.GUILD_WEBHOOKS(e),
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
                        url: c.ANM.CHANNEL_WEBHOOKS(t),
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
                    null == n && (n = a[o().random(0, a.length - 1)]);
                    return i.ZP.post({
                        url: c.ANM.CHANNEL_WEBHOOKS(t),
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
                        url: c.ANM.WEBHOOK(t),
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
                        url: c.ANM.WEBHOOK(t),
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
                c = n(473708);

            function a(e, t, n) {
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
                    f = t === u.K.STREAM ? c.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : c.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
                    d = t === u.K.STREAM ? c.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : c.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, r.jsx)(i.default, function(e) {
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
                }({
                    confirmText: c.Z.Messages.CONFIRM,
                    secondaryConfirmText: c.Z.Messages.DONT_ASK_AGAIN,
                    title: f,
                    cancelText: c.Z.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: function() {
                        o.ZP.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        });
                        n()
                    },
                    body: d
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
                c = n(347874),
                a = n(473708);

            function l(e) {
                var t = (0, o.e7)([c.Z], (function() {
                    return c.Z.getVoiceParticipantsHidden(e)
                }));
                return (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: a.Z.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: function() {
                        return u.Z.toggleVoiceParticipantsHidden(e, !t)
                    }
                })
            }
        },
        492692: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                o = (n(667294),
                    n(202351)),
                i = n(70418),
                u = n(379991),
                c = n(656645),
                a = n(664625),
                l = n(602351),
                s = n(2590),
                f = n(36256);

            function d(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    n = (0, o.e7)([a.default], (function() {
                        return a.default.getId()
                    })),
                    r = (0, o.e7)([l.Z], (function() {
                        return l.Z.supports(f.AN.DISABLE_VIDEO) && l.Z.isVideoEnabled()
                    })),
                    i = (0, o.e7)([l.Z], (function() {
                        return l.Z.isLocalVideoDisabled(n, t)
                    }), [n, t]),
                    u = function(e) {
                        var r = e ? s.ZUi.DISABLED : s.ZUi.MANUAL_ENABLED;
                        c.Z.setDisableLocalVideo(n, r, t)
                    },
                    d = null == e || e === n,
                    p = d && (r || i);
                return [p, i, u]
            }
            var p = n(284278),
                y = n(470856),
                b = n(473708);

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

            function I(e) {
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
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (c) throw o
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

            function m(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    n = v(d(e, t), 3),
                    c = n[0],
                    a = n[1],
                    l = n[2],
                    s = (0, o.e7)([u.ZP], (function() {
                        return u.ZP.disableHideSelfStreamAndVideoConfirmationAlert
                    })),
                    O = function() {
                        if (s || a) return l(!a);
                        (0, i.openModal)((function(e) {
                            return (0, r.jsx)(p.Z, E(I({}, e), {
                                type: y.K.VIDEO,
                                onConfirm: function() {
                                    return l(!a)
                                }
                            }))
                        }))
                    };
                return c ? (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: b.Z.Messages.SHOW_SELF_VIDEO,
                    checked: !a,
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
                c = n(664625),
                a = n(602351),
                l = n(473708),
                s = n(352062),
                f = n.n(s);

            function d(e, t, n, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function u(e) {
                            d(i, r, o, u, c, "next", e)
                        }

                        function c(e) {
                            d(i, r, o, u, c, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
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
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
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
                        }([i, c])
                    }
                }
            };

            function h(e) {
                var t = (0, i.useModalContext)(),
                    s = (0, o.e7)([a.Z], (function() {
                        return a.Z.isVideoEnabled()
                    })),
                    d = (0, o.e7)([c.default], (function() {
                        return c.default.getId() === e
                    })),
                    h = (0, u.Z)();
                return s && !h || !d ? null : (0, r.jsx)(i.MenuItem, {
                    id: "change-video-background",
                    label: (0, r.jsx)("div", {
                        className: f().item,
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
                                            return (0, r.jsx)(t, b(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        y(e, t, n[t])
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
                VI: () => c,
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

            function c(e) {
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
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(70418)),
                i = n(968449),
                u = n(416644),
                c = n(691797);

            function a(e) {
                var t = e.id,
                    n = e.label,
                    a = e.onSuccess,
                    l = e.shiftId,
                    s = e.showIconFirst,
                    f = i.Sb.useSetting();
                if (__OVERLAY__ || !f || !c.wS) return null;
                var d = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(o.MenuItem, {
                    id: d,
                    label: n,
                    action: function(e) {
                        var n = null != l && e.shiftKey ? l : t;
                        (0, c.JG)(n);
                        null == a || a()
                    },
                    icon: u.Z,
                    showIconFirst: s
                }, d)
            }
        },
        90003: (e, t, n) => {
            n.d(t, {
                q: () => f,
                z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(70418));

            function i(e, t, n, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function u(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(t, n);

                        function c(e) {
                            i(u, r, o, c, a, "next", e)
                        }

                        function a(e) {
                            i(u, r, o, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
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

            function a(e) {
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
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
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
                        }([i, c])
                    }
                }
            };

            function s(e, t, i) {
                (0, o.openModalLazy)(u((function() {
                    var o, u;
                    return l(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(36576)]).then(n.bind(n, 736576))];
                            case 1:
                                o = c.sent(), u = o.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(u, a({
                                        guildId: e,
                                        userId: t,
                                        anaylticsLocations: i
                                    }, n))
                                }]
                        }
                    }))
                })))
            }

            function f(e, t, i) {
                (0, o.openModalLazy)(u((function() {
                    var o, u;
                    return l(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(16782)]).then(n.bind(n, 916782))];
                            case 1:
                                o = c.sent(), u = o.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(u, a({
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
                AB: () => c,
                ZP: () => s,
                s5: () => f
            });
            var r = n(202351),
                o = n(21372),
                i = n(473903),
                u = n(309945);

            function c(e) {
                var t = (0, r.e7)([i.default], (function() {
                    return i.default.getCurrentUser()
                }));
                return s(null == t ? void 0 : t.id, e)
            }

            function a(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function l(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, u.b)(e)]
            }

            function s(e, t) {
                return l((0, r.e7)([o.ZP], (function() {
                    return a(e, t, o.ZP)
                }), [t, e]))
            }

            function f(e, t) {
                return l(a(e, t, o.ZP))
            }
        },
        822003: (e, t, n) => {
            n.d(t, {
                BG: () => y,
                aY: () => r,
                dW: () => b,
                gm: () => p,
                jQ: () => o,
                sE: () => O
            });
            var r, o, i = n(667294),
                u = n(153686),
                c = n(396043),
                a = n(664625),
                l = n(652591),
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

            function d(e, t, n) {
                var r, o = function(e) {
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
                }({}, t, (0, c.hH)(null !== (r = t.guild_id) && void 0 !== r ? r : n));
                l.default.track(e, o)
            }

            function p(e) {
                return i.useCallback((function(t) {
                    ! function(e) {
                        var t = {
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }), [e])
            }

            function y(e) {
                return i.useCallback((function(t) {
                    ! function(e, t) {
                        var n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }), [e])
            }! function(e) {
                e.UNUSUAL_DM_ACTIVITY = "unusual_dm_activity";
                e.COMMUNICATION_DISABLED = "communication_disabled"
            }(r || (r = {}));

            function b(e) {
                return i.useCallback((function(t) {
                    ! function(e, t) {
                        var n = {
                            flag_type: t,
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n)
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
                        mod_user_id: a.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != r ? r : void 0,
                        targets: null != o ? o : void 0
                    };
                    d(s.rMx.MODERATION_ACTION, i)
                }), [e, n, r, o])
            }
        },
        945514: (e, t, n) => {
            n.d(t, {
                I4: () => h,
                Sn: () => y,
                U3: () => E,
                Ui: () => I,
                W4: () => p,
                gq: () => b,
                kZ: () => d
            });
            var r = n(281110),
                o = n(744564),
                i = n(49621),
                u = n(248046),
                c = n(2590);

            function a(e, t, n, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function l(e) {
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

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var f = function(e, t) {
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
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
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
                        }([i, c])
                    }
                }
            };

            function d() {
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

            function y(e, t) {
                r.ZP.get(c.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then((function(n) {
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

            function b(e, t, n) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = l((function(e, t, n) {
                    var i, u;
                    return f(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                i = [];
                                a.label = 1;
                            case 1:
                                a.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get(c.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n))];
                            case 2:
                                (u = a.sent()).ok && (i = u.body.permissions);
                                return [3, 4];
                            case 3:
                                if (404 !== a.sent().status) {
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

            function I(e) {
                o.Z.dispatch({
                    commandId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }

            function E(e) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = l((function(e) {
                    var t, n, r, u, c, a, l, s;
                    return f(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                t = e.applicationId, n = e.commandId, r = e.defaultEveryoneValue, u = e.defaultEverywhereValue, c = e.guildId, a = e.permissions;
                                l = n === t ? m(c, a, r, u) : a;
                                return [4, i.dh(t, c, n, l)];
                            case 1:
                                (s = f.sent()).ok && o.Z.dispatch({
                                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                                    applicationId: t,
                                    commandId: n,
                                    guildId: c,
                                    permissions: s.body.permissions
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function m(e, t, n, r) {
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
                OG: () => d,
                kz: () => s,
                yr: () => f
            });
            var r = n(281110),
                o = n(744564),
                i = n(2590);

            function u(e, t, n, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            u(i, r, o, c, a, "next", e)
                        }

                        function a(e) {
                            u(i, r, o, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var a = function(e, t) {
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
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
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
                        }([i, c])
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
                    c = t.onFailure;
                o.Z.dispatch({
                    type: "INTERACTION_QUEUE",
                    data: n,
                    nonce: e,
                    messageId: r,
                    onCreate: i,
                    onSuccess: u,
                    onFailure: c
                })
            }

            function f(e, t, n) {
                o.Z.dispatch({
                    type: "INTERACTION_FAILURE",
                    nonce: e,
                    errorMessage: n,
                    errorCode: t
                })
            }

            function d(e, t) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = c((function(e, t) {
                    var n, u;
                    return a(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: i.ANM.MESSAGE_INTERACTION_DATA(e, t),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                if ((n = c.sent()).ok) {
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
                rQ: () => N,
                $s: () => j,
                tM: () => S,
                t$: () => P,
                ow: () => m,
                Sg: () => A
            });
            var r = n(842227),
                o = n(281110),
                i = n(744564),
                u = n(720419),
                c = n(73904),
                a = n(457581),
                l = n(664625),
                s = n(869854),
                f = n(873934),
                d = n(457896),
                p = "_errors";

            function y(e) {
                return b(e, void 0)
            }

            function b(e, t) {
                var n = e._errors;
                if (null != n) return n[0];
                var r = Object.keys(e).filter((function(e) {
                    return e !== p
                }))[0];
                return null != r ? b(e[r], null != t ? t : r) : null
            }
            var O = n(2590);

            function h(e, t, n, r, o, i, u) {
                try {
                    var c = e[i](u),
                        a = c.value
                } catch (e) {
                    n(e);
                    return
                }
                c.done ? t(a) : Promise.resolve(a).then(r, o)
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

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        I(e, t, n[t])
                    }))
                }
                return e
            }
            var v = function(e, t) {
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
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
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
                        }([i, c])
                    }
                }
            };

            function m(e) {
                return null == e || "" === e || Number.isNaN(e) ? Date.now() : r.default.extractTimestamp(e) + 9e5
            }
            var g, T, S = (T = (g = function(e) {
                var t, n, i, u, d, p, y, b, h, I, m;
                return v(this, (function(v) {
                    switch (v.label) {
                        case 0:
                            t = e.componentType, n = e.messageId, i = e.messageFlags, u = e.customId, d = e.indices, p = e.applicationId, y = e.channelId, b = e.guildId, h = e.localState;
                            I = r.default.fromTimestamp(Date.now());
                            return f.Z.canQueueInteraction(n, I) ? [4, a.Z.unarchiveThreadIfNecessary(y)] : [2];
                        case 1:
                            v.sent();
                            (0, s.kz)(I, {
                                messageId: n,
                                data: {
                                    interactionType: c.B8.MESSAGE_COMPONENT,
                                    customId: u,
                                    indices: d
                                },
                                onFailure: function(e, t) {
                                    return w(y, e, t)
                                }
                            });
                            null != h && (0, s.B0)(n, I, h, d);
                            m = {
                                type: c.B8.MESSAGE_COMPONENT,
                                nonce: I,
                                guild_id: b,
                                channel_id: y,
                                message_flags: i,
                                message_id: n,
                                application_id: p,
                                session_id: l.default.getSessionId(),
                                data: E({
                                    component_type: t,
                                    custom_id: u
                                }, _(h))
                            };
                            return [4, o.ZP.post({
                                url: O.ANM.INTERACTIONS,
                                body: m,
                                timeout: 3e3
                            }, (function(e) {
                                A(I, y, b, e)
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
                    var o = g.apply(e, t);

                    function i(e) {
                        h(o, n, r, i, u, "next", e)
                    }

                    function u(e) {
                        h(o, n, r, i, u, "throw", e)
                    }
                    i(void 0)
                }))
            }), function(e) {
                return T.apply(this, arguments)
            });

            function _(e) {
                if (null == e) return null;
                if (e.type === c.re.STRING_SELECT || e.type === c.re.INPUT_TEXT) return e;
                var t = e.selectedOptions.map((function(e) {
                    return e.value
                }));
                return {
                    type: e.type,
                    values: t
                }
            }
            var N, w = function(e, t, n) {
                    null == n && null != t && u.Z.sendClydeError(e, t)
                },
                A = function(e, t, n, r) {
                    if (!r.ok) {
                        if (!r.hasErr) {
                            if (r.status >= 400 && r.status < 500 && r.body) {
                                if (r.body.code === O.evJ.INVALID_FORM_BODY && r.body.errors) {
                                    var o = y(r.body.errors);
                                    null == o || "INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" !== o.code && "INTERACTION_APPLICATION_COMMAND_INVALID" !== o.code || i.Z.dispatch({
                                        type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                                        channelId: t,
                                        guildId: n
                                    });
                                    (0,
                                        s.yr)(e, void 0, null == o ? void 0 : o.message);
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
            }(N || (N = {}));
            var P = function(e, t) {
                var n, o = null == t ? void 0 : t.state,
                    i = e.state === O.yb.SENT && m(e.id) < Date.now(),
                    u = e.state === O.yb.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : r.default.extractTimestamp(n) + 3e3) < Date.now(),
                    a = (null == t ? void 0 : t.data.interactionType) === c.B8.APPLICATION_COMMAND,
                    l = e.isCommandType();
                return a && o === d.F.QUEUED || l && e.state === O.yb.SENDING && null != t ? N.SENDING : a && o === d.F.CREATED || e.hasFlag(O.iLy.LOADING) && !i ? N.CREATED : null != e.interaction && e.hasFlag(O.iLy.LOADING) && i || null != e.interaction && !e.hasFlag(O.iLy.LOADING) && u ? N.TIMED_OUT : l && e.state === O.yb.SEND_FAILED ? N.FAILED : void 0
            };

            function j(e) {
                for (var t = e.options; 1 === (null == t ? void 0 : t.length) && (t[0].type === c.jw.SUB_COMMAND_GROUP || t[0].type === c.jw.SUB_COMMAND);) t = t[0].options;
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, u = (null != t ? t : [])[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                        if (i.value.type === c.jw.ATTACHMENT) return !1
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
        699050: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(785893),
                o = n(667294),
                i = n(441143),
                u = n.n(i),
                c = n(202351),
                a = n(70418),
                l = n(219217),
                s = n(272200),
                f = n(248046),
                d = n(698847),
                p = n(242922),
                y = n(767846),
                b = n.n(y);
            const O = function() {
                return (0, r.jsx)("div", {
                    className: b().loadingWrapper,
                    children: (0, r.jsx)(a.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
            };
            var h = n(567403),
                I = n(127624),
                E = n(473708),
                v = n(929945),
                m = n.n(v);
            const g = function(e) {
                var t = e.commandType,
                    n = e.commandTargetId,
                    i = e.channel,
                    y = e.guildId,
                    b = e.onShow,
                    v = e.location,
                    g = o.useRef(!1),
                    T = o.useRef(0),
                    S = (0, c.e7)([h.Z], (function() {
                        return h.Z.getGuild(null != y ? y : i.guild_id)
                    })),
                    _ = (0, l.o)(i, {
                        commandType: t
                    }, {
                        location: v,
                        placeholderCount: I.Mn,
                        limit: I.lr
                    }),
                    N = _.hasMoreAfter,
                    w = _.scrollDown,
                    A = _.sectionDescriptors,
                    P = _.commands,
                    j = _.placeholders,
                    C = o.useMemo((function() {
                        var e = P.concat(j),
                            t = {};
                        A.forEach((function(e) {
                            t[e.id] = e
                        }));
                        return {
                            visibleCommands: e,
                            sections: t
                        }
                    }), [P, A, j]),
                    M = C.visibleCommands,
                    D = C.sections,
                    Z = o.useMemo((function() {
                        return (0, f.nT)(i, t, M.length, null == S ? void 0 : S.applicationCommandCounts)
                    }), [i, t, null == S ? void 0 : S.applicationCommandCounts, M.length]);
                o.useEffect((function() {
                    if (Z !== g.current) {
                        Z && (null == b || b());
                        g.current = Z
                    }
                }), [Z, b]);
                o.useEffect((function() {
                    R(T.current)
                }), [M]);
                var R = o.useCallback((function(e) {
                        N && e + 500 > 34 * M.length - 40 && w();
                        T.current = e
                    }), [N, w, M]),
                    G = o.useCallback((function(e) {
                        if (e.inputType === s.iw.PLACEHOLDER) return (0, r.jsx)(a.MenuItem, {
                            id: "menu-command-".concat(e.id),
                            render: function() {
                                return (0, r.jsx)(O, {})
                            }
                        }, "menu-command-".concat(e.id));
                        u()(null != i, "menu item should not show if channel is null");
                        var t = D[e.applicationId],
                            o = null != t ? (0, p.ky)(t) : void 0;
                        return (0, r.jsx)(a.MenuItem, {
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
                                (0, d.Z)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: i,
                                        guild: S
                                    },
                                    commandTargetId: n
                                })
                            }
                        }, e.id)
                    }), [i, S, n, D]);
                return Z && (0, r.jsx)(a.MenuItem, {
                    id: "apps",
                    label: E.Z.Messages.APPS,
                    onChildrenScroll: R,
                    childRowHeight: 34,
                    listClassName: m().list,
                    disabled: 0 === M.length,
                    children: M.map(G)
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
                c = n(61209),
                a = n(682776),
                l = n(715107),
                s = n(930948),
                f = n(749565),
                d = n(2590),
                p = n(473708);

            function y(e, t) {
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
                            c = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (c) throw o
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

            function O(e, t) {
                var n = e.id,
                    r = "@".concat(f.ZP.getUserTag(e, {
                        decoration: "never"
                    })),
                    o = "<@".concat(n, ">");
                s.S.dispatchToLastSubscribed(d.CkL.INSERT_TEXT, {
                    plainText: r,
                    rawText: o
                });
                null != t && u.Z.startTyping(t)
            }

            function h(e, t, n) {
                var u = b((0, o.Wu)([l.Z, c.Z, a.Z], (function() {
                        var e = l.Z.getChannelId(t),
                            n = c.Z.getChannel(e);
                        return [e, null != n && (n.isMultiUserDM() || a.Z.can(d.Plq.SEND_MESSAGES, n))]
                    }), [t]), 2),
                    s = u[0],
                    f = u[1],
                    y = n === d.IlC.POPOUT;
                return !f || y ? null : (0, r.jsx)(i.MenuItem, {
                    id: "mention",
                    label: p.Z.Messages.MENTION,
                    action: function() {
                        O(e, s)
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

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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
                    c = e.color,
                    a = void 0 === c ? "currentColor" : c,
                    l = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                        fill: a,
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
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    y = void 0 === p ? "" : p,
                    b = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                }({}, (0, u.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.786 3.374A.25.25 0 0 0 17.57 5h-3.134a.75.75 0 0 0-.65.378L6.213 18.626A.25.25 0 0 0 6.43 19h3.134a.75.75 0 0 0 .65-.378l7.571-13.248Z",
                        clipRule: "evenodd",
                        className: y
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

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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
                    f = void 0 === s ? "currentColor" : s,
                    d = e.foreground,
                    p = l(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                }({}, (0, u.Z)(p)), {
                    width: n,
                    height: i,
                    viewBox: "0 0 20 20",
                    children: (0, r.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, r.jsx)("path", {
                            className: d,
                            fill: f,
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

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function a(e, t) {
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
                    c = e.color,
                    a = void 0 === c ? "currentColor" : c,
                    l = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                        fill: a,
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
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    y = void 0 === p ? "" : p,
                    b = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
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
                }({}, (0, u.Z)(b)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Zm5.292 7.14c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        clipRule: "evenodd",
                        className: y
                    })
                }))
            }))
        }
    }
]);