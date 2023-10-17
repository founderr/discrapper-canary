"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [61304], {
        933818: (e, n, t) => {
            t.d(n, {
                Z: () => h
            });
            var r = t(281110),
                o = t(744564),
                i = t(671293),
                c = t(592981),
                s = t(105783),
                a = t(2590),
                l = t(473708);

            function u(e, n, t, r, o, i, c) {
                try {
                    var s = e[i](c),
                        a = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function f(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function c(e) {
                            u(i, r, o, c, s, "next", e)
                        }

                        function s(e) {
                            u(i, r, o, c, s, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }
            var d = function(e, n) {
                    var t, r, o, i, c = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function s(i) {
                        return function(s) {
                            return function(i) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0,
                                        o) && (i = [2 & i[0], o.value]);
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
                                    i = n.call(e, c)
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
                            }([i, s])
                        }
                    }
                },
                p = {
                    pinMessage: function(e, n) {
                        return f((function() {
                            var t, o;
                            return d(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        t = e.id, o = e.name;
                                        return [4, i.Z.unarchiveThreadIfNecessary(e.id)];
                                    case 1:
                                        c.sent();
                                        r.ZP.put({
                                            url: a.ANM.PIN(t, n),
                                            oldFormErrors: !0
                                        }).catch((function() {
                                            var n;
                                            n = e.isPrivate() ? l.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({
                                                maxPins: a.tG9
                                            }) : l.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
                                                maxPins: a.tG9,
                                                channelName: o
                                            });
                                            s.Z.show({
                                                title: l.Z.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
                                                body: n,
                                                confirmText: l.Z.Messages.OKAY
                                            })
                                        }));
                                        return [2]
                                }
                            }))
                        }))()
                    },
                    unpinMessage: function(e, n) {
                        return f((function() {
                            return d(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, i.Z.unarchiveThreadIfNecessary(e.id)];
                                    case 1:
                                        t.sent();
                                        r.ZP.delete({
                                            url: a.ANM.PIN(e.id, n),
                                            oldFormErrors: !0
                                        }).catch((function() {
                                            return s.Z.show({
                                                title: l.Z.Messages.UNPIN_MESSAGE_FAILED_TITLE,
                                                body: l.Z.Messages.UNPIN_MESSAGE_FAILED_BODY,
                                                confirmText: l.Z.Messages.TRY_AGAIN,
                                                cancelText: l.Z.Messages.CANCEL,
                                                onConfirm: p.unpinMessage.bind(p, e, n)
                                            })
                                        }));
                                        return [2]
                                }
                            }))
                        }))()
                    },
                    ackPins: function(e) {
                        o.Z.dispatch({
                            type: "CHANNEL_PINS_ACK",
                            channelId: e
                        })
                    },
                    fetchPins: function(e) {
                        var n = c.Z.getPinnedMessages(e);
                        if (null == n || !n.loaded && !n.loading) {
                            o.Z.dispatch({
                                type: "LOAD_PINNED_MESSAGES",
                                channelId: e
                            });
                            r.ZP.get({
                                url: a.ANM.PINS(e),
                                retries: 2,
                                oldFormErrors: !0
                            }).then((function(n) {
                                o.Z.dispatch({
                                    type: "LOAD_PINNED_MESSAGES_SUCCESS",
                                    messages: n.body,
                                    channelId: e
                                })
                            }), (function() {
                                o.Z.dispatch({
                                    type: "LOAD_PINNED_MESSAGES_FAILURE",
                                    channelId: e
                                })
                            }))
                        }
                    }
                };
            const h = p
        },
        913928: (e, n, t) => {
            t.d(n, {
                Z: () => T
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                c = t.n(i),
                s = t(304548),
                a = t(933818),
                l = t(720419),
                u = t(773011),
                f = t(908741),
                d = t(354368),
                p = t(487868),
                h = t(840922),
                g = t(473903),
                m = t(700223),
                E = t(661123),
                y = t(254082),
                O = t(2590),
                b = t(473708),
                v = t(878101),
                _ = t.n(v);

            function M(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function P(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function S(e) {
                S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return S(e)
            }

            function N(e) {
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

            function j(e, n) {
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

            function I(e, n) {
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

            function Z(e, n) {
                return !n || "object" !== x(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function w(e, n) {
                w = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return w(e, n)
            }
            var x = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
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
                    var t, r = S(e);
                    if (n) {
                        var o = S(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return Z(this, t)
                }
            }
            var A = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && w(e, n)
                }(t, e);
                var n = C(t);

                function t() {
                    M(this, t);
                    var e;
                    (e = n.apply(this, arguments)).state = {
                        report: !1
                    };
                    e.handleDelete = function() {
                        var n = e.state.report,
                            t = e.props,
                            r = t.channel,
                            o = t.message;
                        n ? (0, d.ak)(o, (function() {
                            return l.Z.deleteMessage(r.id, o.id)
                        })) : l.Z.deleteMessage(r.id, o.id)
                    };
                    e.handleToggleReport = function(n) {
                        e.setState({
                            report: n
                        })
                    };
                    return e
                }
                t.prototype.render = function() {
                    var e, n, t = this.state.report,
                        o = this.props,
                        i = o.channel,
                        c = o.message,
                        a = o.showContextMenuHint,
                        l = I(o, ["channel", "message", "showContextMenuHint"]),
                        u = i.type === O.d4z.GUILD_ANNOUNCEMENT && (0, E.yE)(c.flags, O.iLy.CROSSPOSTED);
                    a && (e = (0, r.jsx)(m.Z, {
                        className: _().spacingTop,
                        children: b.Z.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
                    }));
                    (0, y.vc)(c) && (n = (0, r.jsx)(s.FormSwitch, {
                        value: t,
                        onChange: this.handleToggleReport,
                        hideBorder: !0,
                        className: _().spacingTop,
                        children: b.Z.Messages.DELETE_MESSAGE_REPORT
                    }));
                    return (0, r.jsx)(f.Z.Provider, {
                        value: i.guild_id,
                        children: (0, r.jsxs)(s.ConfirmModal, j(N({
                            header: u ? b.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER : b.Z.Messages.DELETE_MESSAGE_TITLE,
                            confirmText: b.Z.Messages.DELETE,
                            cancelText: b.Z.Messages.CANCEL,
                            onConfirm: this.handleDelete
                        }, l), {
                            children: [(0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: _().spacing,
                                children: u ? b.Z.Messages.DELETE_FOLLOWED_NEWS_BODY : b.Z.Messages.DELETE_MESSAGE_BODY
                            }), (0, r.jsx)("div", {
                                className: _().message,
                                children: (0, r.jsx)(p.Z, {
                                    channel: i,
                                    message: c,
                                    disableInteraction: !0
                                })
                            }), n, e]
                        }))
                    })
                };
                return t
            }(o.PureComponent);
            const T = {
                confirmPin: function(e, n) {
                    (0, s.openModal)((function(t) {
                        var o, i = (0, u.F6)(e, g.default, h.Z);
                        o = e.isPrivate() ? b.Z.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : b.Z.Messages.PIN_MESSAGE_BODY.format({
                            channelName: i
                        });
                        return (0, r.jsx)(f.Z.Provider, {
                            value: e.guild_id,
                            children: (0, r.jsxs)(s.ConfirmModal, j(N({
                                header: b.Z.Messages.PIN_MESSAGE_TITLE,
                                confirmText: b.Z.Messages.PIN_CONFIRM,
                                cancelText: b.Z.Messages.CANCEL,
                                confirmButtonColor: s.Button.Colors.BRAND,
                                onConfirm: function() {
                                    return a.Z.pinMessage(e, n.id)
                                }
                            }, t), {
                                children: [(0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    className: _().spacing,
                                    children: o
                                }), (0, r.jsx)("div", {
                                    className: _().message,
                                    children: (0, r.jsx)(p.Z, {
                                        channel: e,
                                        message: n,
                                        animateAvatar: !1,
                                        disableInteraction: !0
                                    })
                                })]
                            }))
                        })
                    }))
                },
                confirmUnpin: function(e, n) {
                    (0, s.openModal)((function(t) {
                        return (0, r.jsx)(f.Z.Provider, {
                            value: e.guild_id,
                            children: (0, r.jsxs)(s.ConfirmModal, j(N({
                                header: b.Z.Messages.UNPIN_MESSAGE_TITLE,
                                confirmText: b.Z.Messages.UNPIN_CONFIRM,
                                cancelText: b.Z.Messages.CANCEL,
                                onConfirm: function() {
                                    return a.Z.unpinMessage(e, n.id)
                                }
                            }, t), {
                                children: [(0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    className: _().spacing,
                                    children: b.Z.Messages.UNPIN_MESSAGE_BODY
                                }), (0, r.jsx)("div", {
                                    className: c()(_().message, _().spacing),
                                    children: (0, r.jsx)(p.Z, {
                                        channel: e,
                                        message: n,
                                        disableInteraction: !0
                                    })
                                }), (0, r.jsx)(m.Z, {
                                    children: b.Z.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
                                })]
                            }))
                        })
                    }))
                },
                confirmDelete: function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    (0, s.openModal)((function(o) {
                        return (0,
                            r.jsx)(A, N({
                            channel: e,
                            message: n,
                            showContextMenuHint: t
                        }, o))
                    }))
                },
                confirmEdit: function(e, n, t) {
                    (0, s.openModal)((function(o) {
                        return (0, r.jsx)(s.ConfirmModal, j(N({
                            header: b.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                            confirmText: b.Z.Messages.CONFIRM,
                            cancelText: b.Z.Messages.CANCEL,
                            confirmButtonColor: s.Button.Colors.BRAND,
                            onConfirm: function() {
                                return l.Z.editMessage(e, n, {
                                    content: t
                                })
                            }
                        }, o), {
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: _().spacing,
                                children: b.Z.Messages.EDIT_FOLLOWED_NEWS_BODY
                            })
                        }))
                    }))
                }
            }
        },
        979498: (e, n, t) => {
            t.d(n, {
                Z: () => f
            });
            var r = t(785893),
                o = (t(667294), t(482507)),
                i = t(304548),
                c = t(316388),
                s = t(652591),
                a = t(691797),
                l = t(2590),
                u = t(473708);

            function f(e, n) {
                return a.wS && e.type !== l.uaV.GUILD_INVITE_REMINDER ? (0, r.jsx)(i.MenuItem, {
                    id: "copy-link",
                    label: u.Z.Messages.COPY_MESSAGE_LINK,
                    icon: c.Z,
                    action: function() {
                        (0, o.J)("".concat(location.protocol, "//").concat(location.host).concat(l.Z5c.CHANNEL(n.guild_id, n.id, e.id)));
                        s.default.track(l.rMx.MESSAGE_LINK_COPIED, {
                            message_id: e.id,
                            channel: e.channel_id
                        })
                    }
                }) : null
            }
        },
        443: (e, n, t) => {
            t.d(n, {
                Z: () => h
            });
            var r = t(785893),
                o = (t(667294), t(202351)),
                i = t(304548),
                c = t(720419),
                s = t(913928),
                a = t(225386),
                l = t(682776),
                u = t(473903),
                f = t(994655),
                d = t(2590),
                p = t(473708);

            function h(e, n) {
                var t = (0, o.e7)([u.default], (function() {
                        return u.default.getCurrentUser()
                    })),
                    h = (0, a.$R)(n),
                    g = (0, o.e7)([l.Z], (function() {
                        return l.Z.can(d.Plq.MANAGE_MESSAGES, n)
                    }), [n]);
                return e.state === d.yb.SENDING ? null : (e.author.id === (null == t ? void 0 : t.id) || g) && e.type in d.HfH && h ? (0, r.jsx)(i.MenuItem, {
                    id: "delete",
                    label: p.Z.Messages.DELETE_MESSAGE,
                    action: function(t) {
                        e.state === d.yb.SEND_FAILED ? c.Z.deleteMessage(n.id, e.id, !0) : t.shiftKey ? c.Z.deleteMessage(n.id, e.id) : s.Z.confirmDelete(n, e, !0)
                    },
                    color: "danger",
                    icon: f.Z
                }) : null
            }
        },
        880994: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                o = (t(667294), t(304548)),
                i = t(225386),
                c = t(276180),
                s = t(847839),
                a = t(473708);

            function l(e, n) {
                return (0, i.$R)(n) ? (0, r.jsx)(o.MenuItem, {
                    id: "mark-unread",
                    label: a.Z.Messages.MARK_UNREAD,
                    action: function() {
                        return (0,
                            s.Z)(n.id, e.id)
                    },
                    icon: c.Z
                }) : null
            }
        },
        220461: (e, n, t) => {
            t.d(n, {
                v: () => i
            });
            var r = t(715107),
                o = t(897196);

            function i() {
                var e, n = null !== (e = r.Z.getCurrentlySelectedChannelId()) && void 0 !== e ? e : void 0;
                return null != n && (0, o.AB)(n) ? {
                    channel_static_route: n
                } : {
                    channel_id: n
                }
            }
        },
        446419: (e, n, t) => {
            t.d(n, {
                Z: () => a
            });
            var r = t(785893),
                o = (t(667294), t(304548)),
                i = t(120415),
                c = t(310126),
                s = t(473708);

            function a(e, n) {
                return i.FB && 0 !== (null == e ? void 0 : e.length) ? (0, r.jsx)(o.MenuItem, {
                    id: "copy",
                    label: s.Z.Messages.COPY,
                    hint: (0, i.V5)() ? "⌘C" : "Ctrl+C",
                    action: function() {
                        c.ZP.copy(e);
                        null == n || n.focus()
                    }
                }) : null
            }
        },
        480657: (e, n, t) => {
            t.d(n, {
                Z: () => y
            });
            var r = t(785893),
                o = (t(667294), t(304548)),
                i = t(440922),
                c = t(356845),
                s = t(513586),
                a = t(457696),
                l = t(652591),
                u = t(955121),
                f = t(120415),
                d = t(310126),
                p = t(220461),
                h = t(2590),
                g = t(473708);

            function m(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function E(e) {
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
            }

            function y(e, n, t, m) {
                var y = (0, c.Z)(null == t ? void 0 : t.getChannelId());
                if (!f.FB || null == e || "" === e) return null;
                if (y || !0 === (null == m ? void 0 : m.shouldHideMediaOptions)) return null;
                if (null != e && null != (0, s.B0)(e)) return null;
                if (null != e && (0, i.zt)(e)) return null;
                var O = (0, a.F)(e);
                return [(0, r.jsx)(o.MenuItem, {
                    id: "copy-native-link",
                    label: g.Z.Messages.COPY_LINK,
                    action: function() {
                        l.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, E({
                            hostname: O
                        }, (0, p.v)()));
                        d.ZP.copy(e)
                    }
                }, "copy-native-link"), (0, r.jsx)(o.MenuItem, {
                    id: "open-native-link",
                    label: g.Z.Messages.OPEN_LINK,
                    action: function(t) {
                        return function(t) {
                            l.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, E({
                                hostname: O
                            }, (0, p.v)()));
                            (0, u.q)({
                                href: e,
                                trusted: (0, u.r)(e, n),
                                shouldConfirm: !0
                            }, t)
                        }(t)
                    }
                }, "open-native-link")]
            }
        },
        269083: (e, n, t) => {
            t.d(n, {
                Z: () => d
            });
            var r = t(785893),
                o = t(667294),
                i = t(441143),
                c = t.n(i),
                s = t(304548),
                a = t(652591),
                l = t(120415),
                u = t(2590),
                f = t(473708);

            function d(e) {
                var n = o.useCallback((function() {
                    c()(null != e, "text cannot be null");
                    a.default.track(u.rMx.MESSAGE_MENU_GOOGLE_SEARCHED);
                    window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
                }), [e]);
                return l.FB && null != e && 0 !== (null == e ? void 0 : e.length) ? [(0, r.jsx)(s.MenuItem, {
                    id: "search-google",
                    label: f.Z.Messages.SEARCH_WITH_GOOGLE,
                    action: n
                }, "search-google")] : null
            }
        },
        699050: (e, n, t) => {
            t.d(n, {
                Z: () => _
            });
            var r = t(785893),
                o = t(667294),
                i = t(441143),
                c = t.n(i),
                s = t(202351),
                a = t(304548),
                l = t(219217),
                u = t(272200),
                f = t(248046),
                d = t(698847),
                p = t(242922),
                h = t(767846),
                g = t.n(h);
            const m = function() {
                return (0, r.jsx)("div", {
                    className: g().loadingWrapper,
                    children: (0, r.jsx)(a.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
            };
            var E = t(567403),
                y = t(127624),
                O = t(473708),
                b = t(929945),
                v = t.n(b);
            const _ = function(e) {
                var n = e.commandType,
                    t = e.commandTargetId,
                    i = e.channel,
                    h = e.guildId,
                    g = e.onShow,
                    b = e.location,
                    _ = o.useRef(!1),
                    M = o.useRef(0),
                    P = (0, s.e7)([E.Z], (function() {
                        return E.Z.getGuild(null != h ? h : i.guild_id)
                    })),
                    S = (0, l.o)(i, {
                        commandType: n
                    }, {
                        location: b,
                        placeholderCount: y.Mn,
                        limit: y.lr
                    }),
                    N = S.hasMoreAfter,
                    j = S.scrollDown,
                    I = S.sectionDescriptors,
                    Z = S.commands,
                    w = S.placeholders,
                    x = o.useMemo((function() {
                        var e = Z.concat(w),
                            n = {};
                        I.forEach((function(e) {
                            n[e.id] = e
                        }));
                        return {
                            visibleCommands: e,
                            sections: n
                        }
                    }), [Z, I, w]),
                    C = x.visibleCommands,
                    A = x.sections,
                    T = o.useMemo((function() {
                        return (0, f.nT)(i, n, C.length, null == P ? void 0 : P.applicationCommandCounts)
                    }), [i, n, null == P ? void 0 : P.applicationCommandCounts, C.length]);
                o.useEffect((function() {
                    if (T !== _.current) {
                        T && (null == g || g());
                        _.current = T
                    }
                }), [T, g]);
                o.useEffect((function() {
                    D(M.current)
                }), [C]);
                var D = o.useCallback((function(e) {
                        N && e + 500 > 34 * C.length - 40 && j();
                        M.current = e
                    }), [N, j, C]),
                    L = o.useCallback((function(e) {
                        if (e.inputType === u.iw.PLACEHOLDER) return (0, r.jsx)(a.MenuItem, {
                            id: "menu-command-".concat(e.id),
                            render: function() {
                                return (0, r.jsx)(m, {})
                            }
                        }, "menu-command-".concat(e.id));
                        c()(null != i, "menu item should not show if channel is null");
                        var n = A[e.applicationId],
                            o = null != n ? (0, p.ky)(n) : void 0;
                        return (0, r.jsx)(a.MenuItem, {
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
                                (0, d.Z)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: i,
                                        guild: P
                                    },
                                    commandTargetId: t
                                })
                            }
                        }, e.id)
                    }), [i, P, t, A]);
                return T && (0, r.jsx)(a.MenuItem, {
                    id: "apps",
                    label: O.Z.Messages.APPS,
                    onChildrenScroll: D,
                    childRowHeight: 34,
                    listClassName: v().list,
                    disabled: 0 === C.length,
                    children: C.map(L)
                })
            }
        },
        592981: (e, n, t) => {
            t.d(n, {
                Z: () => j
            });
            var r = t(496486),
                o = t.n(r),
                i = t(202351),
                c = t(744564),
                s = t(720637),
                a = t(384411),
                l = t(61209),
                u = t(21372),
                f = t(567403),
                d = t(352980),
                p = t(840922),
                h = t(473903);

            function g(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e) {
                m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return m(e)
            }

            function E(e, n) {
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
                    var t, r = m(e);
                    if (n) {
                        var o = m(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return E(this, t)
                }
            }
            var v = {};

            function _(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = l.Z.getChannel(e),
                    i = null != o ? o.getGuildId() : null;
                return {
                    id: e,
                    messages: n.map((function(e) {
                        return (0, s.e5)(e)
                    })),
                    guildId: i,
                    loaded: t,
                    loading: r
                }
            }

            function M(e) {
                var n = e.channel;
                delete v[n.id]
            }

            function P() {
                o().forEach(v, (function(e) {
                    o().forEach(e.messages, (function(e) {
                        e.timestamp.locale(a.default.locale)
                    }))
                }))
            }

            function S() {
                o().forEach(v, (function(e) {
                    e.messages = e.messages.map((function(e) {
                        return e.set("blocked", p.Z.isBlocked(e.author.id))
                    }))
                }))
            }
            var N = function(e) {
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
                    g(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(l.Z, f.Z, u.ZP, d.Z, h.default, a.default)
                };
                r.getPinnedMessages = function(e) {
                    var n;
                    return null !== (n = v[e]) && void 0 !== n ? n : void 0
                };
                r.loaded = function(e) {
                    return null != v[e] && v[e].loaded
                };
                return t
            }(i.ZP.Store);
            N.displayName = "ChannelPinsStore";
            const j = new N(c.Z, {
                CONNECTION_OPEN: function() {
                    v = {}
                },
                GUILD_DELETE: function(e) {
                    var n = e.guild;
                    v = o()(v).filter((function(e) {
                        return e.guildId !== n.id
                    })).keyBy("id").value()
                },
                MESSAGE_UPDATE: function(e) {
                    var n = e.message.id,
                        t = e.message.channel_id;
                    if (null == t) return !1;
                    var r = v[t];
                    if (null == r && !e.message.pinned) return !1;
                    if (null != e.message.author)
                        if (e.message.pinned) {
                            if (null == r) {
                                r = _(t, [e.message], !1);
                                v[t] = r;
                                return
                            }
                            r.messages = r.messages.slice();
                            var i = o().findIndex(r.messages, (function(e) {
                                return e.id === n
                            })); - 1 === i ? r.messages.unshift((0, s.e5)(e.message)) : r.messages[i] = (0, s.wi)(r.messages[i], e.message);
                            v[t] = r
                        } else {
                            if (null == r) return;
                            var c = o().findIndex(r.messages, (function(e) {
                                return e.id === n
                            }));
                            if (-1 === c) return;
                            r.messages = r.messages.slice();
                            r.messages.splice(c, 1);
                            v[t] = r
                        }
                    else if (null != r) {
                        var a = o().findIndex(r.messages, (function(e) {
                            return e.id === n
                        }));
                        if (a >= 0) {
                            var l = r.messages[a],
                                u = (0, s.wi)(l, e.message);
                            if (u !== l) {
                                var f = r.messages.slice();
                                f[a] = u;
                                v[t].messages = f
                            }
                        }
                    }
                },
                MESSAGE_DELETE: function(e) {
                    var n = e.id,
                        t = e.channelId,
                        r = v[t];
                    if (null == r) return !1;
                    if (0 === o().remove(r.messages, (function(e) {
                            return e.id === n
                        })).length) return !1;
                    r.messages = r.messages.slice();
                    v[t] = r
                },
                MESSAGE_DELETE_BULK: function(e) {
                    var n = e.ids,
                        t = e.channelId,
                        r = v[t];
                    null != r && (r.messages = r.messages.filter((function(e) {
                        return -1 === n.indexOf(e.id)
                    })))
                },
                LOAD_PINNED_MESSAGES: function(e) {
                    var n = e.channelId;
                    v[n] = _(n, [], !1, !0)
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    var n = e.channelId,
                        t = e.messages;
                    v[n] = _(n, t, !0)
                },
                LOAD_PINNED_MESSAGES_FAILURE: function(e) {
                    var n = e.channelId;
                    delete v[n]
                },
                USER_SETTINGS_PROTO_UPDATE: P,
                I18N_LOAD_SUCCESS: P,
                CHANNEL_DELETE: M,
                THREAD_DELETE: M,
                RELATIONSHIP_ADD: S,
                RELATIONSHIP_REMOVE: S
            })
        },
        700223: (e, n, t) => {
            t.d(n, {
                Z: () => O
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                c = t.n(i),
                s = t(304548),
                a = t(473708),
                l = t(911290),
                u = t.n(l);

            function f(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function p(e, n) {
                return !n || "object" !== g(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function h(e, n) {
                h = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return h(e, n)
            }
            var g = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function m(e) {
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
                    var t, r = d(e);
                    if (n) {
                        var o = d(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return p(this, t)
                }
            }
            var E = {
                    BLOCK: u().block,
                    INLINE: u().inline
                },
                y = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && h(e, n)
                    }(t, e);
                    var n = m(t);

                    function t() {
                        f(this, t);
                        return n.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var e = this.props,
                            n = e.children,
                            t = e.className,
                            o = e.textClassName,
                            i = e.type,
                            l = void 0 === i ? E.BLOCK : i,
                            f = e.style;
                        return (0, r.jsxs)("div", {
                            className: c()(t, l),
                            style: f,
                            children: [(0, r.jsxs)(s.Text, {
                                variant: "text-sm/bold",
                                tag: "div",
                                color: "text-positive",
                                className: u().pro,
                                children: [a.Z.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                            }), (0, r.jsx)(s.Text, {
                                className: c()(u().tip, o),
                                variant: "text-sm/normal",
                                children: n
                            })]
                        })
                    };
                    return t
                }(o.PureComponent);
            y.Types = E;
            const O = y
        },
        276180: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var r = t(785893),
                o = (t(667294), t(168075)),
                i = t(795308),
                c = t(633878);

            function s(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function a(e, n) {
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

            function u(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function f(e, n) {
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

            function d(e, n) {
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
                    s = e.color,
                    a = void 0 === s ? "currentColor" : s,
                    l = e.foreground,
                    p = d(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", f(function(e) {
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
                }({}, (0, c.Z)(p)), {
                    width: t,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: l,
                        fill: a,
                        d: "M14 3H20C21 3 22.0001 4 22.0001 5V19.0003C22.0001 20 21 21 20 21H14C13 21 6 13 6 13H2V11H6C6 11 13 3 14 3Z"
                    })
                }))
            }), (function(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    h = void 0 === p ? "" : p,
                    g = l(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsxs)("svg", a(function(e) {
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
                }({}, (0, c.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("g", {
                        clipPath: "url(#a)",
                        children: (0, r.jsx)("path", {
                            fill: "string" == typeof d ? d : d.css,
                            fillRule: "evenodd",
                            d: "M19 16a3 3 0 1 1-1.984 5.25 1 1 0 1 0-1.324 1.5A5 5 0 1 0 16 15a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-1.236c.55-.614 1.348-1 2.236-1Zm-6.066 5.957c-.307.028-.619.043-.934.043H2.2c-.859 0-1.318-1.01-.753-1.657l2.066-2.369a.517.517 0 0 0 .041-.617A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 .319-.335.517-.635.41A6.99 6.99 0 0 0 19 12c-.772 0-1.515.125-2.21.357a.577.577 0 0 1-.442-.038A3 3 0 0 0 12 15v3.001c0 .997.487 1.88 1.235 2.426.222.162.321.456.243.718-.034.114-.06.228-.08.344-.042.24-.22.446-.464.469Z",
                            clipRule: "evenodd",
                            className: h
                        })
                    }), (0, r.jsx)("defs", {
                        children: (0, r.jsx)("clipPath", {
                            id: "a",
                            children: (0, r.jsx)("path", {
                                fill: "#fff",
                                d: "M24 24H0V0h24z"
                            })
                        })
                    })]
                }))
            }))
        },
        254082: (e, n, t) => {
            t.d(n, {
                a4: () => a,
                vc: () => l
            });
            var r = t(61209),
                o = t(27851),
                i = t(682776),
                c = t(473903),
                s = t(2590);

            function a(e) {
                return null != e && function(e) {
                    if (null == e) return !1;
                    var n = e.id,
                        t = c.default.getCurrentUser();
                    return null != t && t.id !== n && !0 !== e.system
                }(e.author)
            }

            function l(e) {
                return null != e && a(e) && function(e) {
                    var n = r.Z.getChannel(e);
                    if (null == n) return !1;
                    if (n.type === s.d4z.DM || n.type === s.d4z.GROUP_DM) return !0;
                    if (i.Z.canWithPartialContext(s.Plq.MANAGE_MESSAGES, {
                            channelId: e
                        })) {
                        var t = o.Z.getMemberCount(n.getGuildId());
                        return null != t && t >= 50
                    }
                    return !1
                }(e.getChannelId())
            }
        }
    }
]);