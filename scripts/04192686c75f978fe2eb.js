"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [56861, 84522, 77357], {
        577357: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(744564),
                o = n(703790),
                i = n(945514),
                c = n(823530);

            function u(e, t, n, r, o, i, c) {
                try {
                    var u = e[i](c),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function a(e) {
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
            var l = function(e, t) {
                var n, r, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
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
                        }([i, u])
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
                        return l(this, (function(c) {
                            switch (c.label) {
                                case 0:
                                    c.trys.push([0, 2, , 3]);
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
                                    c.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                                    });
                                    return [3, 3];
                                case 2:
                                    o = c.sent();
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
                                    return [4, c.Z.update(e, t.id, t)];
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
                c = n(744564),
                u = n(2590),
                a = ["Spidey Bot", "Captain Hook"];
            const l = {
                fetchForGuild: function(e) {
                    c.Z.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e
                    });
                    i.ZP.get({
                        url: u.ANM.GUILD_WEBHOOKS(e),
                        oldFormErrors: !0
                    }).then((function(t) {
                        var n = t.body;
                        return c.Z.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            webhooks: n
                        })
                    })).catch((function(t) {
                        var n = t.body;
                        c.Z.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            error: n.message
                        })
                    }))
                },
                fetchForChannel: function(e, t) {
                    c.Z.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e,
                        channelId: t
                    });
                    i.ZP.get({
                        url: u.ANM.CHANNEL_WEBHOOKS(t),
                        oldFormErrors: !0
                    }).then((function(n) {
                        var r = n.body;
                        return c.Z.dispatch({
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
                        url: u.ANM.CHANNEL_WEBHOOKS(t),
                        body: {
                            name: n
                        },
                        oldFormErrors: !0
                    }).then((function(t) {
                        var n = t.body;
                        c.Z.dispatch({
                            type: "WEBHOOK_CREATE",
                            guildId: e,
                            webhook: n
                        });
                        return n
                    }))
                },
                delete: function(e, t) {
                    return i.ZP.delete({
                        url: u.ANM.WEBHOOK(t),
                        oldFormErrors: !0
                    }).then((function() {
                        c.Z.dispatch({
                            type: "WEBHOOK_DELETE",
                            guildId: e,
                            webhookId: t
                        })
                    }))
                },
                update: function(e, t, n) {
                    return i.ZP.patch({
                        url: u.ANM.WEBHOOK(t),
                        body: n,
                        oldFormErrors: !0
                    }).then((function(t) {
                        var n = t.body;
                        c.Z.dispatch({
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
                c = n(470856),
                u = n(473708);

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
                    f = t === c.K.STREAM ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
                    d = t === c.K.STREAM ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
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
                    confirmText: u.Z.Messages.CONFIRM,
                    secondaryConfirmText: u.Z.Messages.DONT_ASK_AGAIN,
                    title: f,
                    cancelText: u.Z.Messages.CANCEL,
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
                c = n(247250),
                u = n(347874),
                a = n(473708);

            function l(e) {
                var t = (0, o.e7)([u.Z], (function() {
                    return u.Z.getVoiceParticipantsHidden(e)
                }));
                return (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: a.Z.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: function() {
                        return c.Z.toggleVoiceParticipantsHidden(e, !t)
                    }
                })
            }
        },
        492692: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(785893),
                o = (n(667294),
                    n(202351)),
                i = n(70418),
                c = n(379991),
                u = n(656645),
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
                    c = function(e) {
                        var r = e ? s.ZUi.DISABLED : s.ZUi.MANUAL_ENABLED;
                        u.Z.setDisableLocalVideo(n, r, t)
                    },
                    d = null == e || e === n,
                    p = d && (r || i);
                return [p, i, c]
            }
            var p = n(284278),
                b = n(470856),
                y = n(473708);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function h(e) {
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

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            c = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (u) throw o
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

            function S(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT,
                    n = T(d(e, t), 3),
                    u = n[0],
                    a = n[1],
                    l = n[2],
                    s = (0, o.e7)([c.ZP], (function() {
                        return c.ZP.disableHideSelfStreamAndVideoConfirmationAlert
                    })),
                    O = function() {
                        if (s || a) return l(!a);
                        (0, i.openModal)((function(e) {
                            return (0, r.jsx)(p.Z, E(h({}, e), {
                                type: b.K.VIDEO,
                                onConfirm: function() {
                                    return l(!a)
                                }
                            }))
                        }))
                    };
                return u ? (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: y.Z.Messages.SHOW_SELF_VIDEO,
                    checked: !a,
                    action: O
                }) : null
            }
        },
        289150: (e, t, n) => {
            n.d(t, {
                Z: () => I
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                c = n(504001),
                u = n(664625),
                a = n(602351),
                l = n(473708),
                s = n(352062),
                f = n.n(s);

            function d(e, t, n, r, o, i, c) {
                try {
                    var u = e[i](c),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function p(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            d(i, r, o, c, u, "next", e)
                        }

                        function u(e) {
                            d(i, r, o, c, u, "throw", e)
                        }
                        c(void 0)
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
                var n, r, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
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
                        }([i, u])
                    }
                }
            };

            function I(e) {
                var t = (0, i.useModalContext)(),
                    s = (0, o.e7)([a.Z], (function() {
                        return a.Z.isVideoEnabled()
                    })),
                    d = (0, o.e7)([u.default], (function() {
                        return u.default.getId() === e
                    })),
                    I = (0, c.Z)();
                return s && !I || !d ? null : (0, r.jsx)(i.MenuItem, {
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
        112897: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n(785893),
                o = (n(667294), n(70418)),
                i = n(968449),
                c = n(416644),
                u = n(691797);

            function a(e) {
                var t = e.id,
                    n = e.label,
                    a = e.onSuccess,
                    l = e.shiftId,
                    s = e.showIconFirst,
                    f = i.Sb.useSetting();
                if (__OVERLAY__ || !f || !u.wS) return null;
                var d = "devmode-copy-id-".concat(t);
                return (0, r.jsx)(o.MenuItem, {
                    id: d,
                    label: n,
                    action: function(e) {
                        var n = null != l && e.shiftKey ? l : t;
                        (0, u.JG)(n);
                        null == a || a()
                    },
                    icon: c.Z,
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

            function i(e, t, n, r, o, i, c) {
                try {
                    var u = e[i](c),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var c = e.apply(t, n);

                        function u(e) {
                            i(c, r, o, u, a, "next", e)
                        }

                        function a(e) {
                            i(c, r, o, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function u(e, t, n) {
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
                        u(e, t, n[t])
                    }))
                }
                return e
            }
            var l = function(e, t) {
                var n, r, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1,
                                    r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
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
                        }([i, u])
                    }
                }
            };

            function s(e, t, i) {
                (0, o.openModalLazy)(c((function() {
                    var o, c;
                    return l(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(36576)]).then(n.bind(n, 736576))];
                            case 1:
                                o = u.sent(), c = o.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(c, a({
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
                (0, o.openModalLazy)(c((function() {
                    var o, c;
                    return l(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(16782)]).then(n.bind(n, 916782))];
                            case 1:
                                o = u.sent(), c = o.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(c, a({
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
                c = n(153686),
                u = n(396043),
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
                }({}, t, (0,
                    u.hH)(null !== (r = t.guild_id) && void 0 !== r ? r : n));
                l.default.track(e, o)
            }

            function p(e) {
                return i.useCallback((function(t) {
                    ! function(e) {
                        var t = {
                            guild_id: e,
                            location: c.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }), [e])
            }

            function b(e) {
                return i.useCallback((function(t) {
                    ! function(e, t) {
                        var n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: c.Z.MEMBER_SAFETY_PAGE
                        };
                        d(s.rMx.MOD_DASH_FILTER_ROLES, n)
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
                            location: c.Z.MEMBER_SAFETY_PAGE
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
                I4: () => I,
                Sn: () => b,
                U3: () => E,
                Ui: () => h,
                W4: () => p,
                gq: () => y,
                kZ: () => d
            });
            var r = n(281110),
                o = n(744564),
                i = n(49621),
                c = n(248046),
                u = n(2590);

            function a(e, t, n, r, o, i, c) {
                try {
                    var u = e[i](c),
                        a = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function c(e) {
                            a(i, r, o, c, u, "next", e)
                        }

                        function u(e) {
                            a(i, r, o, c, u, "throw", e)
                        }
                        c(void 0)
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
                var n, r, o, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            c.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(i);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                i = t.call(e, c)
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
                        }([i, u])
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

            function b(e, t) {
                r.ZP.get(u.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then((function(n) {
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
                    var i, c;
                    return f(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                i = [];
                                a.label = 1;
                            case 1:
                                a.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get(u.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n))];
                            case 2:
                                (c = a.sent()).ok && (i = c.body.permissions);
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

            function I(e) {
                o.Z.dispatch({
                    applicationId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function h(e) {
                o.Z.dispatch({
                    commandId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }

            function E(e) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = l((function(e) {
                    var t, n, r, c, u, a, l, s;
                    return f(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                t = e.applicationId, n = e.commandId, r = e.defaultEveryoneValue, c = e.defaultEverywhereValue, u = e.guildId, a = e.permissions;
                                l = n === t ? S(u, a, r, c) : a;
                                return [4, i.dh(t, u, n, l)];
                            case 1:
                                (s = f.sent()).ok && o.Z.dispatch({
                                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                                    applicationId: t,
                                    commandId: n,
                                    guildId: u,
                                    permissions: s.body.permissions
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function S(e, t, n, r) {
                if (!n || !r) return t;
                var o, i = (s(o = {}, e, n), s(o, (0, c.bD)(e), r), o);
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
        499219: (e, t, n) => {
            n.d(t, {
                Z: () => c
            });
            var r = n(202351),
                o = n(61209),
                i = n(715107);

            function c() {
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
                Z: () => v
            });
            var r = n(785893),
                o = n(667294),
                i = n(441143),
                c = n.n(i),
                u = n(202351),
                a = n(70418),
                l = n(219217),
                s = n(272200),
                f = n(248046),
                d = n(698847),
                p = n(242922),
                b = n(767846),
                y = n.n(b);
            const O = function() {
                return (0, r.jsx)("div", {
                    className: y().loadingWrapper,
                    children: (0, r.jsx)(a.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
            };
            var I = n(567403),
                h = n(127624),
                E = n(473708),
                T = n(929945),
                S = n.n(T);
            const v = function(e) {
                var t = e.commandType,
                    n = e.commandTargetId,
                    i = e.channel,
                    b = e.guildId,
                    y = e.onShow,
                    T = e.location,
                    v = o.useRef(!1),
                    m = o.useRef(0),
                    _ = (0,
                        u.e7)([I.Z], (function() {
                        return I.Z.getGuild(null != b ? b : i.guild_id)
                    })),
                    g = (0, l.o)(i, {
                        commandType: t
                    }, {
                        location: T,
                        placeholderCount: h.Mn,
                        limit: h.lr
                    }),
                    N = g.hasMoreAfter,
                    A = g.scrollDown,
                    w = g.sectionDescriptors,
                    P = g.commands,
                    Z = g.placeholders,
                    M = o.useMemo((function() {
                        var e = P.concat(Z),
                            t = {};
                        w.forEach((function(e) {
                            t[e.id] = e
                        }));
                        return {
                            visibleCommands: e,
                            sections: t
                        }
                    }), [P, w, Z]),
                    j = M.visibleCommands,
                    C = M.sections,
                    R = o.useMemo((function() {
                        return (0, f.nT)(i, t, j.length, null == _ ? void 0 : _.applicationCommandCounts)
                    }), [i, t, null == _ ? void 0 : _.applicationCommandCounts, j.length]);
                o.useEffect((function() {
                    if (R !== v.current) {
                        R && (null == y || y());
                        v.current = R
                    }
                }), [R, y]);
                o.useEffect((function() {
                    D(m.current)
                }), [j]);
                var D = o.useCallback((function(e) {
                        N && e + 500 > 34 * j.length - 40 && A();
                        m.current = e
                    }), [N, A, j]),
                    G = o.useCallback((function(e) {
                        if (e.inputType === s.iw.PLACEHOLDER) return (0, r.jsx)(a.MenuItem, {
                            id: "menu-command-".concat(e.id),
                            render: function() {
                                return (0, r.jsx)(O, {})
                            }
                        }, "menu-command-".concat(e.id));
                        c()(null != i, "menu item should not show if channel is null");
                        var t = C[e.applicationId],
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
                                        guild: _
                                    },
                                    commandTargetId: n
                                })
                            }
                        }, e.id)
                    }), [i, _, n, C]);
                return R && (0, r.jsx)(a.MenuItem, {
                    id: "apps",
                    label: E.Z.Messages.APPS,
                    onChildrenScroll: D,
                    childRowHeight: 34,
                    listClassName: S().list,
                    disabled: 0 === j.length,
                    children: j.map(G)
                })
            }
        },
        827991: (e, t, n) => {
            n.d(t, {
                Z: () => I,
                q: () => O
            });
            var r = n(785893),
                o = (n(667294), n(202351)),
                i = n(70418),
                c = n(224134),
                u = n(61209),
                a = n(682776),
                l = n(715107),
                s = n(930948),
                f = n(749565),
                d = n(2590),
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
                            c = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (u) throw o
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
                    r = "@".concat(f.ZP.getUserTag(e, {
                        decoration: "never"
                    })),
                    o = "<@".concat(n, ">");
                s.S.dispatchToLastSubscribed(d.CkL.INSERT_TEXT, {
                    plainText: r,
                    rawText: o
                });
                null != t && c.Z.startTyping(t)
            }

            function I(e, t, n) {
                var c = y((0, o.Wu)([l.Z, u.Z, a.Z], (function() {
                        var e = l.Z.getChannelId(t),
                            n = u.Z.getChannel(e);
                        return [e, null != n && (n.isMultiUserDM() || a.Z.can(d.Plq.SEND_MESSAGES, n))]
                    }), [t]), 2),
                    s = c[0],
                    f = c[1],
                    b = n === d.IlC.POPOUT;
                return !f || b ? null : (0, r.jsx)(i.MenuItem, {
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
                Z: () => c
            });
            var r = n(202351),
                o = n(602351),
                i = n(630926);

            function c() {
                return (0, r.e7)([o.Z], (function() {
                    return (0, i.Z)(o.Z)
                }))
            }
        },
        416644: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(785893),
                o = (n(667294), n(168075)),
                i = n(795308),
                c = n(633878);

            function u(e, t, n) {
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
                    u = e.color,
                    a = void 0 === u ? "currentColor" : u,
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
                }({}, (0, c.Z)(p)), {
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
                    b = void 0 === p ? "" : p,
                    y = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, c.Z)(y)), {
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
                        className: b
                    })
                }))
            }))
        }
    }
]);