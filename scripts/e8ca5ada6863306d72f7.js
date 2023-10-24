"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [55586, 84522, 77357, 14136], {
        577357: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(744564),
                o = t(703790),
                i = t(945514),
                u = t(823530);

            function a(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function c(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

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
            var l = function(e, n) {
                var t, r, o, i, u = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
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
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    r.Z.dispatch({
                        type: "INTEGRATION_SETTINGS_SET_SECTION",
                        section: e,
                        sectionId: n
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
                saveApplicationPermissions: function(e, n, t) {
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
                                        guildId: n,
                                        permissions: t
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
                saveIntegration: function(e, n) {
                    return c((function() {
                        var t;
                        return l(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    i.trys.push([0, 2, , 3]);
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SUBMITTING"
                                    });
                                    return [4, o.Z.updateIntegration(e, n.id, n.expire_behavior, n.expire_grace_period, n.enable_emoticons)];
                                case 1:
                                    i.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                                    });
                                    return [3, 3];
                                case 2:
                                    t = i.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                        errors: t.body
                                    });
                                    return [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                },
                saveWebhook: function(e, n) {
                    return c((function() {
                        var t;
                        return l(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    o.trys.push([0, 2, , 3]);
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SUBMITTING"
                                    });
                                    return [4, u.Z.update(e, n.id, n)];
                                case 1:
                                    o.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                                    });
                                    return [3, 3];
                                case 2:
                                    t = o.sent();
                                    r.Z.dispatch({
                                        type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                        errors: t.body
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
        224134: (e, n, t) => {
            t.d(n, {
                Z: () => o
            });
            var r = t(744564);
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
        823530: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(496486),
                o = t.n(r),
                i = t(281110),
                u = t(744564),
                a = t(2590),
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
                    }).then((function(n) {
                        var t = n.body;
                        return u.Z.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            webhooks: t
                        })
                    })).catch((function(n) {
                        var t = n.body;
                        u.Z.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            error: t.message
                        })
                    }))
                },
                fetchForChannel: function(e, n) {
                    u.Z.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e,
                        channelId: n
                    });
                    i.ZP.get({
                        url: a.ANM.CHANNEL_WEBHOOKS(n),
                        oldFormErrors: !0
                    }).then((function(t) {
                        var r = t.body;
                        return u.Z.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            channelId: n,
                            webhooks: r
                        })
                    }))
                },
                create: function(e, n, t) {
                    null == t && (t = c[o().random(0, c.length - 1)]);
                    return i.ZP.post({
                        url: a.ANM.CHANNEL_WEBHOOKS(n),
                        body: {
                            name: t
                        },
                        oldFormErrors: !0
                    }).then((function(n) {
                        var t = n.body;
                        u.Z.dispatch({
                            type: "WEBHOOK_CREATE",
                            guildId: e,
                            webhook: t
                        });
                        return t
                    }))
                },
                delete: function(e, n) {
                    return i.ZP.delete({
                        url: a.ANM.WEBHOOK(n),
                        oldFormErrors: !0
                    }).then((function() {
                        u.Z.dispatch({
                            type: "WEBHOOK_DELETE",
                            guildId: e,
                            webhookId: n
                        })
                    }))
                },
                update: function(e, n, t) {
                    return i.ZP.patch({
                        url: a.ANM.WEBHOOK(n),
                        body: t,
                        oldFormErrors: !0
                    }).then((function(n) {
                        var t = n.body;
                        u.Z.dispatch({
                            type: "WEBHOOK_UPDATE",
                            guildId: e,
                            webhook: t
                        });
                        return t
                    }))
                }
            }
        },
        470856: (e, n, t) => {
            t.d(n, {
                K: () => r
            });
            var r;
            ! function(e) {
                e[e.STREAM = 0] = "STREAM";
                e[e.VIDEO = 1] = "VIDEO"
            }(r || (r = {}))
        },
        284278: (e, n, t) => {
            t.d(n, {
                Z: () => s
            });
            var r = t(785893),
                o = (t(667294), t(944010)),
                i = t(895303),
                u = t(470856),
                a = t(473708);

            function c(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function l(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function s(e) {
                var n = e.type,
                    t = e.onConfirm,
                    s = l(e, ["type", "onConfirm"]),
                    d = n === u.K.STREAM ? a.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : a.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER,
                    f = n === u.K.STREAM ? a.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : a.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, r.jsx)(i.default, function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            c(e, n, t[n])
                        }))
                    }
                    return e
                }({
                    confirmText: a.Z.Messages.CONFIRM,
                    secondaryConfirmText: a.Z.Messages.DONT_ASK_AGAIN,
                    title: d,
                    cancelText: a.Z.Messages.CANCEL,
                    onConfirm: t,
                    onConfirmSecondary: function() {
                        o.ZP.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        });
                        t()
                    },
                    body: f
                }, s))
            }
        },
        950761: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                u = t(247250),
                a = t(347874),
                c = t(473708);

            function l(e) {
                var n = (0, o.e7)([a.Z], (function() {
                    return a.Z.getVoiceParticipantsHidden(e)
                }));
                return (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: c.Z.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !n,
                    action: function() {
                        return u.Z.toggleVoiceParticipantsHidden(e, !n)
                    }
                })
            }
        },
        492692: (e, n, t) => {
            t.d(n, {
                Z: () => g
            });
            var r = t(785893),
                o = (t(667294),
                    t(202351)),
                i = t(70418),
                u = t(379991),
                a = t(656645),
                c = t(664625),
                l = t(602351),
                s = t(2590),
                d = t(36256);

            function f(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
                    t = (0, o.e7)([c.default], (function() {
                        return c.default.getId()
                    })),
                    r = (0, o.e7)([l.Z], (function() {
                        return l.Z.supports(d.AN.DISABLE_VIDEO) && l.Z.isVideoEnabled()
                    })),
                    i = (0, o.e7)([l.Z], (function() {
                        return l.Z.isLocalVideoDisabled(t, n)
                    }), [t, n]),
                    u = function(e) {
                        var r = e ? s.ZUi.DISABLED : s.ZUi.MANUAL_ENABLED;
                        a.Z.setDisableLocalVideo(t, r, n)
                    },
                    f = null == e || e === t,
                    p = f && (r || i);
                return [p, i, u]
            }
            var p = t(284278),
                b = t(470856),
                E = t(473708);

            function O(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function I(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        I(e, n, t[n])
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

            function _(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return O(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
                    t = _(f(e, n), 3),
                    a = t[0],
                    c = t[1],
                    l = t[2],
                    s = (0, o.e7)([u.ZP], (function() {
                        return u.ZP.disableHideSelfStreamAndVideoConfirmationAlert
                    })),
                    O = function() {
                        if (s || c) return l(!c);
                        (0, i.openModal)((function(e) {
                            return (0, r.jsx)(p.Z, y(h({}, e), {
                                type: b.K.VIDEO,
                                onConfirm: function() {
                                    return l(!c)
                                }
                            }))
                        }))
                    };
                return a ? (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: E.Z.Messages.SHOW_SELF_VIDEO,
                    checked: !c,
                    action: O
                }) : null
            }
        },
        289150: (e, n, t) => {
            t.d(n, {
                Z: () => I
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                u = t(504001),
                a = t(664625),
                c = t(602351),
                l = t(473708),
                s = t(352062),
                d = t.n(s);

            function f(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function p(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

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

            function b(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function E(e, n) {
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
            var O = function(e, n) {
                var t, r, o, i, u = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
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

            function I(e) {
                var n = (0, i.useModalContext)(),
                    s = (0, o.e7)([c.Z], (function() {
                        return c.Z.isVideoEnabled()
                    })),
                    f = (0, o.e7)([a.default], (function() {
                        return a.default.getId() === e
                    })),
                    I = (0, u.Z)();
                return s && !I || !f ? null : (0, r.jsx)(i.MenuItem, {
                    id: "change-video-background",
                    label: (0, r.jsx)("div", {
                        className: d().item,
                        children: s ? l.Z.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : l.Z.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, i.openModalLazy)(p((function() {
                            var e, n;
                            return O(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(58905), t.e(75331)]).then(t.bind(t, 763361))];
                                    case 1:
                                        e = o.sent(), n = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(n, E(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        b(e, n, t[n])
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
                            contextKey: n
                        })
                    }
                })
            }
        },
        112897: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                o = (t(667294), t(70418)),
                i = t(968449),
                u = t(416644),
                a = t(691797);

            function c(e) {
                var n = e.id,
                    t = e.label,
                    c = e.onSuccess,
                    l = e.shiftId,
                    s = e.showIconFirst,
                    d = i.Sb.useSetting();
                if (__OVERLAY__ || !d || !a.wS) return null;
                var f = "devmode-copy-id-".concat(n);
                return (0, r.jsx)(o.MenuItem, {
                    id: f,
                    label: t,
                    action: function(e) {
                        var t = null != l && e.shiftKey ? l : n;
                        (0, a.JG)(t);
                        null == c || c()
                    },
                    icon: u.Z,
                    showIconFirst: s
                }, f)
            }
        },
        332349: (e, n, t) => {
            t.d(n, {
                Z: () => E
            });
            var r = t(785893),
                o = t(667294),
                i = t(202351),
                u = t(70418),
                a = t(577357),
                c = t(703790),
                l = t(567403),
                s = t(682776),
                d = t(2590),
                f = t(473708),
                p = t(35637),
                b = t.n(p);

            function E(e, n, t) {
                var p = l.Z.getGuild(n),
                    E = (0, i.e7)([s.Z], (function() {
                        return null != p ? s.Z.can(d.Plq.MANAGE_GUILD, p) : null
                    })),
                    O = o.useCallback((function() {
                        c.Z.open(n, d.pNK.INTEGRATIONS);
                        a.Z.setSection(d.b4C.APPLICATION, e.id)
                    }), [e.id, n]),
                    I = t === d.IlC.POPOUT;
                return e.bot && E && !I ? (0, r.jsx)(u.MenuItem, {
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
        90003: (e, n, t) => {
            t.d(n, {
                q: () => d,
                z: () => s
            });
            var r = t(785893),
                o = (t(667294), t(70418));

            function i(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function u(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(n, t);

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
            }
            var l = function(e, n) {
                var t, r, o, i, u = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                        if (!(o = u.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
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
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
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

            function s(e, n, i) {
                (0, o.openModalLazy)(u((function() {
                    var o, u;
                    return l(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(36576)]).then(t.bind(t, 736576))];
                            case 1:
                                o = a.sent(), u = o.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(u, c({
                                        guildId: e,
                                        userId: n,
                                        anaylticsLocations: i
                                    }, t))
                                }]
                        }
                    }))
                })))
            }

            function d(e, n, i) {
                (0, o.openModalLazy)(u((function() {
                    var o, u;
                    return l(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(16782)]).then(t.bind(t, 916782))];
                            case 1:
                                o = a.sent(), u = o.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(u, c({
                                        guildId: e,
                                        userId: n,
                                        anaylticsLocations: i
                                    }, t))
                                }]
                        }
                    }))
                })))
            }
        },
        822003: (e, n, t) => {
            t.d(n, {
                BG: () => b,
                aY: () => r,
                dW: () => E,
                gm: () => p,
                jQ: () => o,
                sE: () => O
            });
            var r, o, i = t(667294),
                u = t(153686),
                a = t(396043),
                c = t(664625),
                l = t(652591),
                s = t(2590);

            function d(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function f(e, n, t) {
                var r, o = function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            d(e, n, t[n])
                        }))
                    }
                    return e
                }({}, n, (0, a.hH)(null !== (r = n.guild_id) && void 0 !== r ? r : t));
                l.default.track(e, o)
            }

            function p(e) {
                return i.useCallback((function(n) {
                    ! function(e) {
                        var n = {
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        f(s.rMx.MOD_DASH_SEARCH_MEMBERS, n)
                    }(e)
                }), [e])
            }

            function b(e) {
                return i.useCallback((function(n) {
                    ! function(e, n) {
                        var t = {
                            selected_role_count: n.size,
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        f(s.rMx.MOD_DASH_FILTER_ROLES, t)
                    }(e, n)
                }), [e])
            }! function(e) {
                e.UNUSUAL_DM_ACTIVITY = "unusual_dm_activity";
                e.COMMUNICATION_DISABLED = "communication_disabled"
            }(r || (r = {}));

            function E(e) {
                return i.useCallback((function(n) {
                    ! function(e, n) {
                        var t = {
                            flag_type: n,
                            guild_id: e,
                            location: u.Z.MEMBER_SAFETY_PAGE
                        };
                        f(s.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t)
                    }(e, n)
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

            function O(e, n) {
                var t = n.location,
                    r = n.targetUserId,
                    o = n.targets;
                return i.useCallback((function(n) {
                    var i = {
                        action_type: n,
                        mod_user_id: c.default.getId(),
                        guild_id: e,
                        location: t,
                        target_user_id: null != r ? r : void 0,
                        targets: null != o ? o : void 0
                    };
                    f(s.rMx.MODERATION_ACTION, i)
                }), [e, t, r, o])
            }
        },
        945514: (e, n, t) => {
            t.d(n, {
                I4: () => I,
                Sn: () => b,
                U3: () => y,
                Ui: () => h,
                W4: () => p,
                gq: () => E,
                kZ: () => f
            });
            var r = t(281110),
                o = t(744564),
                i = t(49621),
                u = t(248046),
                a = t(2590);

            function c(e, n, t, r, o, i, u) {
                try {
                    var a = e[i](u),
                        c = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function l(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

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

            function s(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var d = function(e, n) {
                var t, r, o, i, u = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
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
                                i = n.call(e, u)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
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

            function p(e, n, t) {
                o.Z.dispatch({
                    applicationId: e,
                    commandId: n,
                    permissions: t,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function b(e, n) {
                r.ZP.get(a.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, n)).then((function(t) {
                    o.Z.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: n,
                        commands: t.body.application_commands,
                        guildId: e,
                        permissions: t.body.permissions
                    })
                }), (function() {
                    o.Z.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: n
                    })
                }))
            }

            function E(e, n, t) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = l((function(e, n, t) {
                    var i, u;
                    return d(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                i = [];
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 3, , 4]);
                                return [4, r.ZP.get(a.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, n, t))];
                            case 2:
                                (u = c.sent()).ok && (i = u.body.permissions);
                                return [3, 4];
                            case 3:
                                if (404 !== c.sent().status) {
                                    o.Z.dispatch({
                                        type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                                        applicationId: e,
                                        commandId: t,
                                        guildId: n
                                    });
                                    return [2]
                                }
                                return [3, 4];
                            case 4:
                                o.Z.dispatch({
                                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                                    applicationId: e,
                                    commandId: t,
                                    guildId: n,
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

            function y(e) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = l((function(e) {
                    var n, t, r, u, a, c, l, s;
                    return d(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                n = e.applicationId, t = e.commandId, r = e.defaultEveryoneValue, u = e.defaultEverywhereValue, a = e.guildId, c = e.permissions;
                                l = t === n ? g(a, c, r, u) : c;
                                return [4, i.dh(n, a, t, l)];
                            case 1:
                                (s = d.sent()).ok && o.Z.dispatch({
                                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                                    applicationId: n,
                                    commandId: t,
                                    guildId: a,
                                    permissions: s.body.permissions
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function g(e, n, t, r) {
                if (!t || !r) return n;
                var o, i = (s(o = {}, e, t), s(o, (0, u.bD)(e), r), o);
                return n.filter((function(e) {
                    var n = i[e.id];
                    return null == n || e.permission !== n
                }))
            }
        },
        15970: (e, n, t) => {
            t.d(n, {
                b: () => o
            });
            var r = t(2590);

            function o(e, n, t, o) {
                var i = null != t ? t : n;
                return null != i && e.can(r.Plq.CREATE_INSTANT_INVITE, i) || null != n && null != n.vanityURLCode || null != (null == o ? void 0 : o.invite_code)
            }
        },
        499219: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(202351),
                o = t(61209),
                i = t(715107);

            function u() {
                return (0, r.e7)([i.Z, o.Z], (function() {
                    var e = i.Z.getVoiceChannelId();
                    if (null != e) {
                        var n = o.Z.getChannel(e);
                        if (null == n ? void 0 : n.isGuildStageVoice()) return n
                    }
                    return null
                }))
            }
        },
        575351: (e, n, t) => {
            t.d(n, {
                Z: () => I
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                u = t(567403),
                a = t(473903),
                c = t(407561),
                l = t(771575),
                s = t(162723),
                d = t(933022),
                f = t(664625),
                p = t(715107),
                b = t(525261);
            var E = t(499219),
                O = t(473708);

            function I(e) {
                var n, t = (0, E.Z)(),
                    I = null == t ? void 0 : t.id,
                    h = null == t ? void 0 : t.guild_id,
                    y = (0, o.e7)([u.Z], (function() {
                        return u.Z.getGuild(h)
                    }), [h]),
                    _ = (0, o.e7)([c.Z], (function() {
                        return null != I ? c.Z.getVoiceStateForChannel(I, e.id) : null
                    }), [I, e.id]),
                    g = (null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
                    T = function() {
                        var e = (0, o.e7)([p.Z], (function() {
                                return p.Z.getVoiceChannelId()
                            })),
                            n = (0, o.e7)([f.default], (function() {
                                return f.default.getId()
                            }));
                        return (0, b.ZP)(n, e) === b.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                    }(),
                    S = (0, o.e7)([d.ZP], (function() {
                        return d.ZP.getPermissionsForUser(e.id, I)
                    }), [I, e.id]),
                    v = (0, s.B)(I);
                if (null == t || null == y || null == _) return null;
                if (S.speaker) return null;
                var m = function() {
                    g ? (0, l.RK)(t, !1) : (0, l._0)(t, e.id)
                };
                return v ? (0, r.jsx)(i.MenuItem, {
                    id: "invite-speaker",
                    label: g ? O.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : O.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: m
                }) : T && g ? (0, r.jsx)(i.MenuItem, {
                    id: "invite-speaker",
                    label: O.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: m
                }) : null
            }
        },
        914136: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => K
            });
            var r = t(785893),
                o = (t(667294), t(70418)),
                i = t(971402),
                u = t(343639),
                a = t(567678),
                c = t(73904),
                l = t(82055),
                s = t(153686),
                d = t(950761),
                f = t(492692),
                p = t(289150),
                b = t(737331),
                E = t(112897),
                O = t(434651),
                I = t(332349),
                h = t(575351),
                y = t(202351),
                _ = t(61209),
                g = t(567403),
                T = t(682776),
                S = t(473903),
                v = t(771575),
                m = t(933022),
                N = t(2590),
                Z = t(473708);
            var A = t(662851),
                M = t(343315),
                P = t(171384),
                C = t(430198),
                j = t(699050),
                w = t(836448),
                D = t(441738),
                R = t(982348),
                G = t(578142),
                x = t(827991),
                U = t(93439),
                L = t(100856),
                k = t(598955),
                V = t(536130),
                H = t(973424),
                F = t(234617),
                B = t(394212);
            const K = (0, a.Z)((0, u.Z)((function(e) {
                var n = e.user,
                    t = e.guildId,
                    u = e.channel,
                    a = e.showMediaItems,
                    s = void 0 !== a && a,
                    K = e.showChatItems,
                    W = void 0 === K || K,
                    Y = e.showChannelCallItems,
                    q = void 0 !== Y && Y,
                    z = e.showModalItems,
                    X = void 0 === z || z,
                    Q = e.showStageChannelItems,
                    $ = void 0 !== Q && Q,
                    J = e.context,
                    ee = e.onSelect,
                    ne = e.onHeightUpdate,
                    te = (0, V.Z)(n.id, t, u.id),
                    re = (0, x.Z)(n, t, J),
                    oe = (0, U.Z)(n.id, J),
                    ie = (0, B.Z)(n.id),
                    ue = (0, D.Z)(n, J),
                    ae = (0, P.Z)({
                        user: n,
                        guildId: t,
                        context: J
                    }),
                    ce = (0, M.Z)(n),
                    le = (0, F.Z)(n.id),
                    se = (0, k.Z)(n.id),
                    de = (0, O.Z)({
                        guildId: t,
                        userId: n.id,
                        analyticsLocation: {
                            page: N.ZY5.GUILD_CHANNEL,
                            section: N.jXE.CHAT_USERNAME,
                            object: N.qAy.CONTEXT_MENU_ITEM
                        },
                        context: J
                    }),
                    fe = (0, G.Z)(n, t),
                    pe = (0, l.Z)(null, n),
                    be = (0, A.Z)(n),
                    Ee = (0, w.Z)(n),
                    Oe = (0, C.Z)(n, t, u.id),
                    Ie = (0, H.Z)(n.id, t),
                    he = (0, L.Z)(n, t),
                    ye = (0, E.Z)({
                        id: n.id,
                        label: Z.Z.Messages.COPY_ID_USER
                    }),
                    _e = (0, R.Z)(n.id, u.id),
                    ge = (0, f.Z)(n.id),
                    Te = (0, d.Z)(u.id),
                    Se = (0, h.Z)(n),
                    ve = function(e, n, t) {
                        var i, u = _.Z.getChannel(t),
                            a = (0, y.e7)([g.Z], (function() {
                                return g.Z.getGuild(n)
                            }), [n]),
                            c = (0, y.e7)([m.ZP], (function() {
                                return m.ZP.getPermissionsForUser(e.id, t)
                            }), [t, e.id]),
                            l = (null === (i = S.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) === e.id,
                            s = (0, y.e7)([T.Z], (function() {
                                return null != t && T.Z.canWithPartialContext(N.Plq.MUTE_MEMBERS, {
                                    channelId: t
                                })
                            }), [t]);
                        return null == u || null == a ? null : (s || l) && c.speaker ? (0, r.jsx)(o.MenuItem, {
                            id: "audience",
                            label: l ? Z.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : Z.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                            action: function() {
                                l ? (0, v.yi)(u) : (0, v.hz)(e, u)
                            }
                        }) : null
                    }(n, t, u.id),
                    me = (0, j.Z)({
                        commandType: c.yU.USER,
                        commandTargetId: n.id,
                        channel: u,
                        guildId: t,
                        location: "GuildChannelUserContextMenu",
                        onShow: ne
                    }),
                    Ne = (0, p.Z)(n.id),
                    Ze = (0, I.Z)(n, t, J),
                    Ae = n.isNonUserBot(),
                    Me = n.isClyde(),
                    Pe = (0, b.R8)();
                return (0, r.jsxs)(o.Menu, {
                    navId: "user-context",
                    onClose: i.Zy,
                    "aria-label": Z.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: ee,
                    children: [!Ae && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(o.MenuGroup, {
                            children: [Se, $ && ve]
                        }), (0, r.jsxs)(o.MenuGroup, {
                            children: [X && te, W && re, oe, ue, X && ae, X && ce, ie]
                        }), s && (0,
                            r.jsx)(o.MenuGroup, {
                            children: le
                        }), (0, r.jsx)(o.MenuGroup, {
                            children: X && pe
                        }), (0, r.jsxs)(o.MenuGroup, {
                            children: [s && se, s && _e, X && de, me, Ze, X && fe, be, X && Ee, q && Ne]
                        }), (0, r.jsx)(o.MenuGroup, {
                            children: Oe
                        }), (0, r.jsxs)(o.MenuGroup, {
                            children: [Ie, he]
                        }), q && (0, r.jsxs)(o.MenuGroup, {
                            children: [Te, ge]
                        })]
                    }), Me && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(o.MenuGroup, {
                            children: [X && te, Pe && oe]
                        }), (0, r.jsx)(o.MenuGroup, {
                            children: Oe
                        })]
                    }), (0, r.jsx)(o.MenuGroup, {
                        children: ye
                    })]
                })
            }), {
                object: N.qAy.CONTEXT_MENU
            }), [s.Z.CONTEXT_MENU, s.Z.GUILD_CHANNEL_USER_MENU])
        },
        699050: (e, n, t) => {
            t.d(n, {
                Z: () => T
            });
            var r = t(785893),
                o = t(667294),
                i = t(441143),
                u = t.n(i),
                a = t(202351),
                c = t(70418),
                l = t(219217),
                s = t(272200),
                d = t(248046),
                f = t(698847),
                p = t(242922),
                b = t(767846),
                E = t.n(b);
            const O = function() {
                return (0, r.jsx)("div", {
                    className: E().loadingWrapper,
                    children: (0, r.jsx)(c.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
            };
            var I = t(567403),
                h = t(127624),
                y = t(473708),
                _ = t(929945),
                g = t.n(_);
            const T = function(e) {
                var n = e.commandType,
                    t = e.commandTargetId,
                    i = e.channel,
                    b = e.guildId,
                    E = e.onShow,
                    _ = e.location,
                    T = o.useRef(!1),
                    S = o.useRef(0),
                    v = (0, a.e7)([I.Z], (function() {
                        return I.Z.getGuild(null != b ? b : i.guild_id)
                    })),
                    m = (0, l.o)(i, {
                        commandType: n
                    }, {
                        location: _,
                        placeholderCount: h.Mn,
                        limit: h.lr
                    }),
                    N = m.hasMoreAfter,
                    Z = m.scrollDown,
                    A = m.sectionDescriptors,
                    M = m.commands,
                    P = m.placeholders,
                    C = o.useMemo((function() {
                        var e = M.concat(P),
                            n = {};
                        A.forEach((function(e) {
                            n[e.id] = e
                        }));
                        return {
                            visibleCommands: e,
                            sections: n
                        }
                    }), [M, A, P]),
                    j = C.visibleCommands,
                    w = C.sections,
                    D = o.useMemo((function() {
                        return (0, d.nT)(i, n, j.length, null == v ? void 0 : v.applicationCommandCounts)
                    }), [i, n, null == v ? void 0 : v.applicationCommandCounts, j.length]);
                o.useEffect((function() {
                    if (D !== T.current) {
                        D && (null == E || E());
                        T.current = D
                    }
                }), [D, E]);
                o.useEffect((function() {
                    R(S.current)
                }), [j]);
                var R = o.useCallback((function(e) {
                        N && e + 500 > 34 * j.length - 40 && Z();
                        S.current = e
                    }), [N, Z, j]),
                    G = o.useCallback((function(e) {
                        if (e.inputType === s.iw.PLACEHOLDER) return (0, r.jsx)(c.MenuItem, {
                            id: "menu-command-".concat(e.id),
                            render: function() {
                                return (0, r.jsx)(O, {})
                            }
                        }, "menu-command-".concat(e.id));
                        u()(null != i, "menu item should not show if channel is null");
                        var n = w[e.applicationId],
                            o = null != n ? (0, p.ky)(n) : void 0;
                        return (0, r.jsx)(c.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: function() {
                                return null != o ? (0, r.jsx)(o, {
                                    channel: i,
                                    section: n,
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
                                        guild: v
                                    },
                                    commandTargetId: t
                                })
                            }
                        }, e.id)
                    }), [i, v, t, w]);
                return D && (0, r.jsx)(c.MenuItem, {
                    id: "apps",
                    label: y.Z.Messages.APPS,
                    onChildrenScroll: R,
                    childRowHeight: 34,
                    listClassName: g().list,
                    disabled: 0 === j.length,
                    children: j.map(G)
                })
            }
        },
        982348: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                u = t(247250),
                a = t(347874),
                c = t(407561),
                l = t(2590),
                s = t(473708);

            function d(e, n) {
                var t = (0, o.e7)([a.Z], (function() {
                    return e === a.Z.getSelectedParticipantId(n)
                }), [n, e]);
                return (0, o.e7)([a.Z, c.Z], (function() {
                    var t = c.Z.isInChannel(n, e) && c.Z.hasVideo(n),
                        r = a.Z.getLayout(n),
                        o = r === l.AEg.MINIMUM || r === l.AEg.NORMAL;
                    return !t || o
                }), [n, e]) ? null : (0, r.jsx)(i.MenuItem, {
                    id: "focus-video",
                    label: t ? s.Z.Messages.UNFOCUS_PARTICIPANT : s.Z.Messages.FOCUS_PARTICIPANT,
                    action: function() {
                        return u.Z.selectParticipant(n, t ? null : e)
                    }
                })
            }
        },
        827991: (e, n, t) => {
            t.d(n, {
                Z: () => I,
                q: () => O
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                u = t(224134),
                a = t(61209),
                c = t(682776),
                l = t(715107),
                s = t(930948),
                d = t(749565),
                f = t(2590),
                p = t(473708);

            function b(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function E(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(u = (r = t.next()).done); u = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return b(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return b(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(e, n) {
                var t = e.id,
                    r = "@".concat(d.ZP.getUserTag(e, {
                        decoration: "never"
                    })),
                    o = "<@".concat(t, ">");
                s.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
                    plainText: r,
                    rawText: o
                });
                null != n && u.Z.startTyping(n)
            }

            function I(e, n, t) {
                var u = E((0, o.Wu)([l.Z, a.Z, c.Z], (function() {
                        var e = l.Z.getChannelId(n),
                            t = a.Z.getChannel(e);
                        return [e, null != t && (t.isMultiUserDM() || c.Z.can(f.Plq.SEND_MESSAGES, t))]
                    }), [n]), 2),
                    s = u[0],
                    d = u[1],
                    b = t === f.IlC.POPOUT;
                return !d || b ? null : (0, r.jsx)(i.MenuItem, {
                    id: "mention",
                    label: p.Z.Messages.MENTION,
                    action: function() {
                        O(e, s)
                    }
                })
            }
        },
        598955: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                u = t(105783),
                a = t(656645),
                c = t(656907),
                l = t(602351),
                s = t(563367),
                d = t(464187),
                f = t(473903),
                p = t(818417),
                b = t(652591),
                E = t(2590),
                O = t(36256),
                I = t(473708),
                h = t(870726),
                y = t.n(h);

            function _(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.Yn.DEFAULT,
                    t = (0, o.e7)([f.default], (function() {
                        var n;
                        return (null === (n = f.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e
                    })),
                    h = (0, o.e7)([c.Z], (function() {
                        return c.Z.isLocalSoundboardMuted(e)
                    })),
                    _ = (0, o.cj)([l.Z], (function() {
                        return t ? {
                            muted: l.Z.isSelfMute(n),
                            deafened: l.Z.isSelfDeaf(n)
                        } : {
                            muted: l.Z.isLocalMute(e, n),
                            localVideoDisabled: l.Z.isLocalVideoDisabled(e, n),
                            localVideoAutoDisabled: l.Z.isLocalVideoAutoDisabled(e, n)
                        }
                    }), [t, n, e]),
                    g = _.muted,
                    T = _.deafened,
                    S = void 0 !== T && T,
                    v = _.localVideoDisabled,
                    m = void 0 !== v && v,
                    N = _.localVideoAutoDisabled,
                    Z = void 0 !== N && N,
                    A = l.Z.supports(O.AN.DISABLE_VIDEO) && !t ? (0, r.jsx)(i.MenuCheckboxItem, {
                        id: "disable-video",
                        label: I.Z.Messages.DISABLE_VIDEO,
                        action: function() {
                            if (Z) u.Z.show({
                                title: I.Z.Messages.UNSTABLE_CONNECTION,
                                body: I.Z.Messages.UNSTABLE_CONNECTION_REASON_2,
                                confirmText: I.Z.Messages.TURN_ON_VIDEO_ANYWAY,
                                cancelText: I.Z.Messages.LEAVE_VIDEO_OFF,
                                onConfirm: function() {
                                    return a.Z.setDisableLocalVideo(e, E.ZUi.MANUAL_ENABLED)
                                }
                            });
                            else {
                                var t = m ? E.ZUi.MANUAL_ENABLED : E.ZUi.DISABLED;
                                a.Z.setDisableLocalVideo(e, t, n)
                            }
                        },
                        checked: m,
                        subtext: Z ? (0, r.jsxs)("div", {
                            className: y().videoPaused,
                            children: [(0, r.jsx)(p.Z, {
                                width: 12,
                                className: y().warningCircle
                            }), I.Z.Messages.UNSTABLE_CONNECTION]
                        }) : null
                    }, "disable-video") : null,
                    M = t ? null : (0, r.jsx)(i.MenuCheckboxItem, {
                        id: "soundboard-sound-mute",
                        label: I.Z.Messages.MUTE_SOUNDBOARD,
                        action: function() {
                            var t = s.Z.getRTCConnection();
                            b.default.track(E.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                                guild_id: d.Z.getGuildId(),
                                target_user_id: e,
                                media_session_id: null == t ? void 0 : t.getMediaSessionId(),
                                parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
                                mute_soundboard: !h
                            });
                            a.Z.toggleLocalSoundboardMute(e, n)
                        },
                        checked: h
                    }, "soundboard-sound-mute");
                return t ? [(0, r.jsx)(i.MenuCheckboxItem, {
                    id: "mute",
                    label: I.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return a.Z.toggleSelfMute({
                            context: n
                        })
                    },
                    checked: g
                }, "self-mute"), (0, r.jsx)(i.MenuCheckboxItem, {
                    id: "deafen",
                    label: I.Z.Messages.DEAFEN,
                    action: function() {
                        return a.Z.toggleSelfDeaf({
                            context: n
                        })
                    },
                    checked: S
                }, "self-deafen"), A] : [(0, r.jsx)(i.MenuCheckboxItem, {
                    id: "mute",
                    label: I.Z.Messages.SOUND_MUTE,
                    action: function() {
                        return a.Z.toggleLocalMute(e, n)
                    },
                    checked: g
                }, "self-mute"), M, A]
            }
        },
        234617: (e, n, t) => {
            t.d(n, {
                Z: () => O
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(70418),
                u = t(656645),
                a = t(602351),
                c = t(473903),
                l = t(615457),
                s = t(120415),
                d = t(36256),
                f = t(473708);

            function p(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function b(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        p(e, n, t[n])
                    }))
                }
                return e
            }

            function E(e, n) {
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

            function O(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
                    p = (0, o.e7)([a.Z], (function() {
                        return a.Z.getLocalVolume(e, t)
                    }), [e, t]),
                    O = e === (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
                    I = t === d.Yn.STREAM;
                return O ? null : (0, r.jsx)(i.MenuControlItem, {
                    id: "user-volume",
                    label: I ? f.Z.Messages.STREAM_VOLUME : f.Z.Messages.USER_VOLUME,
                    control: function(n, o) {
                        return (0, r.jsx)(i.MenuSliderControl, E(b({}, n), {
                            ref: o,
                            value: (0, l.P)(p),
                            maxValue: s.FB ? 200 : 100,
                            onChange: function(n) {
                                return u.Z.setLocalVolume(e, (0, l.A)(n), t)
                            },
                            "aria-label": I ? f.Z.Messages.STREAM_VOLUME : f.Z.Messages.USER_VOLUME
                        }))
                    }
                })
            }
        },
        504001: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(202351),
                o = t(602351),
                i = t(630926);

            function u() {
                return (0, r.e7)([o.Z], (function() {
                    return (0, i.Z)(o.Z)
                }))
            }
        },
        416644: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                i = t(795308),
                u = t(633878);

            function a(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c(e, n) {
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

            function l(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function s(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function d(e, n) {
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

            function f(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        t = i[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    l = e.foreground,
                    p = f(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", d(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            s(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, u.Z)(p)), {
                    width: t,
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
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    d = e.color,
                    f = void 0 === d ? i.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    E = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", c(function(e) {
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
                }({}, (0, u.Z)(E)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
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