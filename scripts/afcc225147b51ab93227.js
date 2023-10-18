"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [66831], {
        343639: (e, n, t) => {
            t.d(n, {
                Z: () => i
            });
            var r = t(785893),
                o = (t(667294), t(213276));

            function u(e, n, t) {
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
                        u(e, n, t[n])
                    }))
                }
                return e
            }

            function i(e, n) {
                return function(t) {
                    return (0, r.jsx)(o.Z, {
                        page: n.page,
                        section: n.section,
                        object: n.object,
                        objectType: n.objectType,
                        children: (0, r.jsx)(e, c({}, t))
                    })
                }
            }
        },
        567678: (e, n, t) => {
            t.d(n, {
                Z: () => i
            });
            var r = t(785893),
                o = (t(667294), t(19585));

            function u(e, n, t) {
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
                        u(e, n, t[n])
                    }))
                }
                return e
            }

            function i(e, n) {
                return function(t) {
                    var u = (0, o.Z)(n).AnalyticsLocationProvider;
                    return (0, r.jsx)(u, {
                        children: (0, r.jsx)(e, c({}, t))
                    })
                }
            }
        },
        466831: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => Z
            });
            var r = t(785893),
                o = t(667294),
                u = t(202351),
                c = t(70418),
                i = t(105783),
                a = t(971402),
                s = t(343639),
                l = t(567678),
                f = t(153686),
                b = t(682776),
                d = t(310126),
                O = t(897699),
                p = t(19585),
                y = t(473903),
                g = t(443812),
                h = t(815378),
                j = t(460214),
                v = t(473708);
            var w = t(2590);

            function D(e, n, t, r, o, u, c) {
                try {
                    var i = e[u](c),
                        a = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function _(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var u = e.apply(n, t);

                        function c(e) {
                            D(u, r, o, c, i, "next", e)
                        }

                        function i(e) {
                            D(u, r, o, c, i, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function m(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function S(e, n) {
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
            var N = function(e, n) {
                var t, r, o, u, c = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function i(u) {
                    return function(i) {
                        return function(u) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; c;) try {
                                if (t = 1,
                                    r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                (r = 0, o) && (u = [2 & u[0], o.value]);
                                switch (u[0]) {
                                    case 0:
                                    case 1:
                                        o = u;
                                        break;
                                    case 4:
                                        c.label++;
                                        return {
                                            value: u[1], done: !1
                                        };
                                    case 5:
                                        c.label++;
                                        r = u[1];
                                        u = [0];
                                        continue;
                                    case 7:
                                        u = c.ops.pop();
                                        c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                            c.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && c.label < o[1]) {
                                            c.label = o[1];
                                            o = u;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2];
                                            c.ops.push(u);
                                            break
                                        }
                                        o[2] && c.ops.pop();
                                        c.trys.pop();
                                        continue
                                }
                                u = n.call(e, c)
                            } catch (e) {
                                u = [6, e];
                                r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, i])
                    }
                }
            };

            function E(e) {
                var n = e.soundId,
                    t = o.useCallback(_((function() {
                        var e, t;
                        return N(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    r.trys.push([0, 4, , 5]);
                                    return [4, fetch((0, O.Z)(n))];
                                case 1:
                                    return [4, r.sent().blob()];
                                case 2:
                                    e = r.sent();
                                    t = function(e) {
                                        switch (e.type) {
                                            case "audio/mpeg":
                                            case "audio/mpeg3":
                                                return "mp3";
                                            case "audio/ogg":
                                                return "ogg";
                                            default:
                                                throw new Error("unable to determine file type")
                                        }
                                    }(e);
                                    return [4, d.ZP.saveFile((0, O.Z)(n), "".concat(n, ".").concat(t))];
                                case 3:
                                    r.sent();
                                    return [3, 5];
                                case 4:
                                    r.sent();
                                    i.Z.show({
                                        title: v.Z.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_TITLE,
                                        body: v.Z.Messages.SOUNDBOARD_DOWNLOAD_SOUND_FAILED_BODY,
                                        confirmText: v.Z.Messages.OKAY
                                    });
                                    return [3, 5];
                                case 5:
                                    return [2]
                            }
                        }))
                    })), [n]);
                return e.guildId === j.X8 ? null : (0, r.jsx)(c.MenuItem, {
                    id: "download-soundboard-sound",
                    label: v.Z.Messages.SOUNDBOARD_CONTEXT_MENU_DOWNLOAD_SOUND,
                    action: t
                }, "download-soundboard-sound")
            }

            function P(e, n) {
                var i = (0, u.cj)([b.Z], (function() {
                        return null == n ? {
                            canManageGuildExpressions: !1
                        } : b.Z.getGuildPermissionProps(n)
                    }), [n]).canManageGuildExpressions,
                    a = o.useCallback((function() {
                        if (null == (null == n ? void 0 : n.id)) return null;
                        (0, c.openModalLazy)(_((function() {
                            var o, u;
                            return N(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(91762), t.e(41394)]).then(t.bind(t, 691762))];
                                    case 1:
                                        o = c.sent(), u = o.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(u, S(function(e) {
                                                for (var n = 1; n < arguments.length; n++) {
                                                    var t = null != arguments[n] ? arguments[n] : {},
                                                        r = Object.keys(t);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                    }))));
                                                    r.forEach((function(n) {
                                                        m(e, n, t[n])
                                                    }))
                                                }
                                                return e
                                            }({}, t), {
                                                existingSound: e,
                                                guildId: n.id
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }), [n, e]);
                return i ? (0, r.jsx)(c.MenuItem, {
                    id: "edit-soundboard-sound",
                    label: v.Z.Messages.SOUNDBOARD_CONTEXT_MENU_EDIT_SOUND,
                    action: a
                }, "edit-soundboard-sound") : null
            }
            const Z = (0, l.Z)((0, s.Z)((function(e) {
                var n = e.soundGuild,
                    t = e.sound,
                    o = e.activeCallGuildId,
                    i = e.onSelect,
                    s = P(t, n),
                    l = E(t),
                    f = function(e, n) {
                        var t = (0, p.Z)().analyticsLocations,
                            o = (0, u.e7)([y.default], (function() {
                                return y.default.getCurrentUser()
                            })),
                            i = (0, g.Dt)(),
                            a = (0, g.Dt)();
                        return null != n && (0, h.ly)(o, !1) ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(c.MenuItem, {
                                id: i,
                                label: v.Z.Messages.CALL_SOUNDS_CONTEXT_MENU_GUILD,
                                action: function() {
                                    return (0, h.SZ)(n, e, t)
                                }
                            }), (0, r.jsx)(c.MenuItem, {
                                id: a,
                                label: v.Z.Messages.CALL_SOUNDS_CONTEXT_MENU_GLOBAL,
                                action: function() {
                                    return (0, h.SZ)(j.hY, e, t)
                                }
                            })]
                        }) : null
                    }(t, o);
                return (0, r.jsx)(c.Menu, {
                    navId: "sound-button-context",
                    onClose: a.Zy,
                    "aria-label": v.Z.Messages.USER_ACTIONS_MENU_LABEL,
                    onSelect: i,
                    children: (0, r.jsxs)(c.MenuGroup, {
                        children: [s, f, l]
                    })
                })
            }), {
                object: w.qAy.CONTEXT_MENU
            }), [f.Z.CONTEXT_MENU, f.Z.SOUNDBOARD_BUTTON])
        }
    }
]);