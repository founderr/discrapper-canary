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
                s = t(592981),
                a = t(105783),
                c = t(2590),
                u = t(473708);

            function l(e, n, t, r, o, i, s) {
                try {
                    var a = e[i](s),
                        c = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(r, o)
            }

            function f(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function s(e) {
                            l(i, r, o, s, a, "next", e)
                        }

                        function a(e) {
                            l(i, r, o, s, a, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var d = function(e, n) {
                    var t, r, o, i, s = {
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
                                for (; s;) try {
                                    if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0,
                                        o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            s.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            s.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = s.ops.pop();
                                            s.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = s.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                s.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && s.label < o[1]) {
                                                s.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && s.label < o[2]) {
                                                s.label = o[2];
                                                s.ops.push(i);
                                                break
                                            }
                                            o[2] && s.ops.pop();
                                            s.trys.pop();
                                            continue
                                    }
                                    i = n.call(e, s)
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
                },
                p = {
                    pinMessage: function(e, n) {
                        return f((function() {
                            var t, o;
                            return d(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        t = e.id, o = e.name;
                                        return [4, i.Z.unarchiveThreadIfNecessary(e.id)];
                                    case 1:
                                        s.sent();
                                        r.ZP.put({
                                            url: c.ANM.PIN(t, n),
                                            oldFormErrors: !0
                                        }).catch((function() {
                                            var n;
                                            n = e.isPrivate() ? u.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({
                                                maxPins: c.tG9
                                            }) : u.Z.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
                                                maxPins: c.tG9,
                                                channelName: o
                                            });
                                            a.Z.show({
                                                title: u.Z.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
                                                body: n,
                                                confirmText: u.Z.Messages.OKAY
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
                                            url: c.ANM.PIN(e.id, n),
                                            oldFormErrors: !0
                                        }).catch((function() {
                                            return a.Z.show({
                                                title: u.Z.Messages.UNPIN_MESSAGE_FAILED_TITLE,
                                                body: u.Z.Messages.UNPIN_MESSAGE_FAILED_BODY,
                                                confirmText: u.Z.Messages.TRY_AGAIN,
                                                cancelText: u.Z.Messages.CANCEL,
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
                        var n = s.Z.getPinnedMessages(e);
                        if (null == n || !n.loaded && !n.loading) {
                            o.Z.dispatch({
                                type: "LOAD_PINNED_MESSAGES",
                                channelId: e
                            });
                            r.ZP.get({
                                url: c.ANM.PINS(e),
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
                Z: () => A
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                s = t.n(i),
                a = t(882723),
                c = t(933818),
                u = t(716239),
                l = t(773011),
                f = t(908741),
                d = t(354368),
                p = t(487868),
                h = t(840922),
                E = t(473903),
                g = t(700223),
                m = t(661123),
                y = t(254082),
                O = t(2590),
                v = t(473708),
                b = t(376937),
                _ = t.n(b);

            function M(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function N(e, n, t) {
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

            function P(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        N(e, n, t[n])
                    }))
                }
                return e
            }

            function I(e, n) {
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

            function Z(e, n) {
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

            function j(e, n) {
                return !n || "object" !== x(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function C(e, n) {
                C = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return C(e, n)
            }
            var x = function(e) {
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
                    var t, r = S(e);
                    if (n) {
                        var o = S(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return j(this, t)
                }
            }
            var w = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && C(e, n)
                }(t, e);
                var n = T(t);

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
                            return u.Z.deleteMessage(r.id, o.id)
                        })) : u.Z.deleteMessage(r.id, o.id)
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
                        s = o.message,
                        c = o.showContextMenuHint,
                        u = Z(o, ["channel", "message", "showContextMenuHint"]),
                        l = i.type === O.d4z.GUILD_ANNOUNCEMENT && (0, m.yE)(s.flags, O.iLy.CROSSPOSTED);
                    c && (e = (0, r.jsx)(g.Z, {
                        className: _().spacingTop,
                        children: v.Z.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
                    }));
                    (0, y.vc)(s) && (n = (0, r.jsx)(a.FormSwitch, {
                        value: t,
                        onChange: this.handleToggleReport,
                        hideBorder: !0,
                        className: _().spacingTop,
                        children: v.Z.Messages.DELETE_MESSAGE_REPORT
                    }));
                    return (0, r.jsx)(f.Z.Provider, {
                        value: i.guild_id,
                        children: (0, r.jsxs)(a.ConfirmModal, I(P({
                            header: l ? v.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER : v.Z.Messages.DELETE_MESSAGE_TITLE,
                            confirmText: v.Z.Messages.DELETE,
                            cancelText: v.Z.Messages.CANCEL,
                            onConfirm: this.handleDelete
                        }, u), {
                            children: [(0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                className: _().spacing,
                                children: l ? v.Z.Messages.DELETE_FOLLOWED_NEWS_BODY : v.Z.Messages.DELETE_MESSAGE_BODY
                            }), (0, r.jsx)("div", {
                                className: _().message,
                                children: (0, r.jsx)(p.Z, {
                                    channel: i,
                                    message: s,
                                    disableInteraction: !0
                                })
                            }), n, e]
                        }))
                    })
                };
                return t
            }(o.PureComponent);
            const A = {
                confirmPin: function(e, n) {
                    (0, a.openModal)((function(t) {
                        var o, i = (0, l.F6)(e, E.default, h.Z);
                        o = e.isPrivate() ? v.Z.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : v.Z.Messages.PIN_MESSAGE_BODY.format({
                            channelName: i
                        });
                        return (0, r.jsx)(f.Z.Provider, {
                            value: e.guild_id,
                            children: (0, r.jsxs)(a.ConfirmModal, I(P({
                                header: v.Z.Messages.PIN_MESSAGE_TITLE,
                                confirmText: v.Z.Messages.PIN_CONFIRM,
                                cancelText: v.Z.Messages.CANCEL,
                                confirmButtonColor: a.Button.Colors.BRAND,
                                onConfirm: function() {
                                    return c.Z.pinMessage(e, n.id)
                                }
                            }, t), {
                                children: [(0, r.jsx)(a.Text, {
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
                    (0, a.openModal)((function(t) {
                        return (0, r.jsx)(f.Z.Provider, {
                            value: e.guild_id,
                            children: (0, r.jsxs)(a.ConfirmModal, I(P({
                                header: v.Z.Messages.UNPIN_MESSAGE_TITLE,
                                confirmText: v.Z.Messages.UNPIN_CONFIRM,
                                cancelText: v.Z.Messages.CANCEL,
                                onConfirm: function() {
                                    return c.Z.unpinMessage(e, n.id)
                                }
                            }, t), {
                                children: [(0, r.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    className: _().spacing,
                                    children: v.Z.Messages.UNPIN_MESSAGE_BODY
                                }), (0, r.jsx)("div", {
                                    className: s()(_().message, _().spacing),
                                    children: (0, r.jsx)(p.Z, {
                                        channel: e,
                                        message: n,
                                        disableInteraction: !0
                                    })
                                }), (0, r.jsx)(g.Z, {
                                    children: v.Z.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
                                })]
                            }))
                        })
                    }))
                },
                confirmDelete: function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    (0, a.openModal)((function(o) {
                        return (0,
                            r.jsx)(w, P({
                            channel: e,
                            message: n,
                            showContextMenuHint: t
                        }, o))
                    }))
                },
                confirmEdit: function(e, n, t) {
                    (0, a.openModal)((function(o) {
                        return (0, r.jsx)(a.ConfirmModal, I(P({
                            header: v.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                            confirmText: v.Z.Messages.CONFIRM,
                            cancelText: v.Z.Messages.CANCEL,
                            confirmButtonColor: a.Button.Colors.BRAND,
                            onConfirm: function() {
                                return u.Z.editMessage(e, n, {
                                    content: t
                                })
                            }
                        }, o), {
                            children: (0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                className: _().spacing,
                                children: v.Z.Messages.EDIT_FOLLOWED_NEWS_BODY
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
                i = t(882723),
                s = t(963881),
                a = t(652591),
                c = t(691797),
                u = t(2590),
                l = t(473708);

            function f(e, n) {
                return c.wS && e.type !== u.uaV.GUILD_INVITE_REMINDER ? (0, r.jsx)(i.MenuItem, {
                    id: "copy-link",
                    label: l.Z.Messages.COPY_MESSAGE_LINK,
                    icon: s.Z,
                    action: function() {
                        (0, o.J)("".concat(location.protocol, "//").concat(location.host).concat(u.Z5c.CHANNEL(n.guild_id, n.id, e.id)));
                        a.default.track(u.rMx.MESSAGE_LINK_COPIED, {
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
                i = t(882723),
                s = t(716239),
                a = t(913928),
                c = t(225386),
                u = t(682776),
                l = t(473903),
                f = t(813749),
                d = t(2590),
                p = t(473708);

            function h(e, n) {
                var t = (0, o.e7)([l.default], (function() {
                        return l.default.getCurrentUser()
                    })),
                    h = (0, c.$R)(n),
                    E = (0, o.e7)([u.Z], (function() {
                        return u.Z.can(d.Plq.MANAGE_MESSAGES, n)
                    }), [n]);
                return e.state === d.yb.SENDING ? null : (e.author.id === (null == t ? void 0 : t.id) || E) && e.type in d.HfH && h ? (0, r.jsx)(i.MenuItem, {
                    id: "delete",
                    label: p.Z.Messages.DELETE_MESSAGE,
                    action: function(t) {
                        e.state === d.yb.SEND_FAILED ? s.Z.deleteMessage(n.id, e.id, !0) : t.shiftKey ? s.Z.deleteMessage(n.id, e.id) : a.Z.confirmDelete(n, e, !0)
                    },
                    color: "danger",
                    icon: f.Z
                }) : null
            }
        },
        880994: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                o = (t(667294), t(882723)),
                i = t(225386),
                s = t(475825),
                a = t(847839),
                c = t(473708);

            function u(e, n) {
                return (0, i.$R)(n) ? (0, r.jsx)(o.MenuItem, {
                    id: "mark-unread",
                    label: c.Z.Messages.MARK_UNREAD,
                    action: function() {
                        return (0,
                            a.Z)(n.id, e.id)
                    },
                    icon: s.Z
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
                Z: () => c
            });
            var r = t(785893),
                o = (t(667294), t(882723)),
                i = t(120415),
                s = t(310126),
                a = t(473708);

            function c(e, n) {
                return i.FB && 0 !== (null == e ? void 0 : e.length) ? (0, r.jsx)(o.MenuItem, {
                    id: "copy",
                    label: a.Z.Messages.COPY,
                    hint: (0, i.V5)() ? "⌘C" : "Ctrl+C",
                    action: function() {
                        s.ZP.copy(e);
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
                o = (t(667294), t(882723)),
                i = t(440922),
                s = t(356845),
                a = t(513586),
                c = t(457696),
                u = t(652591),
                l = t(955121),
                f = t(120415),
                d = t(310126),
                p = t(220461),
                h = t(2590),
                E = t(473708);

            function g(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function m(e) {
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

            function y(e, n, t, g) {
                var y = (0, s.Z)(null == t ? void 0 : t.getChannelId());
                if (!f.FB || null == e || "" === e) return null;
                if (y || !0 === (null == g ? void 0 : g.shouldHideMediaOptions)) return null;
                if (null != e && null != (0, a.B0)(e)) return null;
                if (null != e && (0, i.zt)(e)) return null;
                var O = (0, c.F)(e);
                return [(0, r.jsx)(o.MenuItem, {
                    id: "copy-native-link",
                    label: E.Z.Messages.COPY_LINK,
                    action: function() {
                        u.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, m({
                            hostname: O
                        }, (0, p.v)()));
                        d.ZP.copy(e)
                    }
                }, "copy-native-link"), (0, r.jsx)(o.MenuItem, {
                    id: "open-native-link",
                    label: E.Z.Messages.OPEN_LINK,
                    action: function(t) {
                        return function(t) {
                            u.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, m({
                                hostname: O
                            }, (0, p.v)()));
                            (0, l.q)({
                                href: e,
                                trusted: (0, l.r)(e, n),
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
                s = t.n(i),
                a = t(882723),
                c = t(652591),
                u = t(120415),
                l = t(2590),
                f = t(473708);

            function d(e) {
                var n = o.useCallback((function() {
                    s()(null != e, "text cannot be null");
                    c.default.track(l.rMx.MESSAGE_MENU_GOOGLE_SEARCHED);
                    window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
                }), [e]);
                return u.FB && null != e && 0 !== (null == e ? void 0 : e.length) ? [(0, r.jsx)(a.MenuItem, {
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
                s = t.n(i),
                a = t(202351),
                c = t(882723),
                u = t(219217),
                l = t(272200),
                f = t(248046),
                d = t(698847),
                p = t(242922),
                h = t(76131),
                E = t.n(h);
            const g = function() {
                return (0, r.jsx)("div", {
                    className: E().loadingWrapper,
                    children: (0, r.jsx)(c.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
            };
            var m = t(567403),
                y = t(127624),
                O = t(473708),
                v = t(98526),
                b = t.n(v);
            const _ = function(e) {
                var n = e.commandType,
                    t = e.commandTargetId,
                    i = e.channel,
                    h = e.guildId,
                    E = e.onShow,
                    v = e.location,
                    _ = o.useRef(!1),
                    M = o.useRef(0),
                    N = (0, a.e7)([m.Z], (function() {
                        return m.Z.getGuild(null != h ? h : i.guild_id)
                    })),
                    S = (0, u.o)(i, {
                        commandType: n
                    }, {
                        location: v,
                        placeholderCount: y.Mn,
                        limit: y.lr
                    }),
                    P = S.hasMoreAfter,
                    I = S.scrollDown,
                    Z = S.sectionDescriptors,
                    j = S.commands,
                    C = S.placeholders,
                    x = o.useMemo((function() {
                        var e = j.concat(C),
                            n = {};
                        Z.forEach((function(e) {
                            n[e.id] = e
                        }));
                        return {
                            visibleCommands: e,
                            sections: n
                        }
                    }), [j, Z, C]),
                    T = x.visibleCommands,
                    w = x.sections,
                    A = o.useMemo((function() {
                        return (0, f.nT)(i, n, T.length, null == N ? void 0 : N.applicationCommandCounts)
                    }), [i, n, null == N ? void 0 : N.applicationCommandCounts, T.length]);
                o.useEffect((function() {
                    if (A !== _.current) {
                        A && (null == E || E());
                        _.current = A
                    }
                }), [A, E]);
                o.useEffect((function() {
                    D(M.current)
                }), [T]);
                var D = o.useCallback((function(e) {
                        P && e + 500 > 34 * T.length - 40 && I();
                        M.current = e
                    }), [P, I, T]),
                    L = o.useCallback((function(e) {
                        if (e.inputType === l.iw.PLACEHOLDER) return (0, r.jsx)(c.MenuItem, {
                            id: "menu-command-".concat(e.id),
                            render: function() {
                                return (0, r.jsx)(g, {})
                            }
                        }, "menu-command-".concat(e.id));
                        s()(null != i, "menu item should not show if channel is null");
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
                                (0, d.Z)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: i,
                                        guild: N
                                    },
                                    commandTargetId: t
                                })
                            }
                        }, e.id)
                    }), [i, N, t, w]);
                return A && (0, r.jsx)(c.MenuItem, {
                    id: "apps",
                    label: O.Z.Messages.APPS,
                    onChildrenScroll: D,
                    childRowHeight: 34,
                    listClassName: b().list,
                    disabled: 0 === T.length,
                    children: T.map(L)
                })
            }
        },
        592981: (e, n, t) => {
            t.d(n, {
                Z: () => I
            });
            var r = t(496486),
                o = t.n(r),
                i = t(202351),
                s = t(744564),
                a = t(649536),
                c = t(384411),
                u = t(61209),
                l = t(21372),
                f = t(567403),
                d = t(352980),
                p = t(840922),
                h = t(473903);

            function E(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function m(e, n) {
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

            function v(e) {
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
                        var o = g(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return m(this, t)
                }
            }
            var b = {};

            function _(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = u.Z.getChannel(e),
                    i = null != o ? o.getGuildId() : null;
                return {
                    id: e,
                    messages: n.map((function(e) {
                        return (0, a.e5)(e)
                    })),
                    guildId: i,
                    loaded: t,
                    loading: r
                }
            }

            function M(e) {
                var n = e.channel;
                delete b[n.id]
            }

            function N() {
                o().forEach(b, (function(e) {
                    o().forEach(e.messages, (function(e) {
                        e.timestamp.locale(c.default.locale)
                    }))
                }))
            }

            function S() {
                o().forEach(b, (function(e) {
                    e.messages = e.messages.map((function(e) {
                        return e.set("blocked", p.Z.isBlocked(e.author.id))
                    }))
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
                var n = v(t);

                function t() {
                    E(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(u.Z, f.Z, l.ZP, d.Z, h.default, c.default)
                };
                r.getPinnedMessages = function(e) {
                    var n;
                    return null !== (n = b[e]) && void 0 !== n ? n : void 0
                };
                r.loaded = function(e) {
                    return null != b[e] && b[e].loaded
                };
                r.__getLocalVars = function() {
                    return {
                        channels: b
                    }
                };
                return t
            }(i.ZP.Store);
            P.displayName = "ChannelPinsStore";
            const I = new P(s.Z, {
                CONNECTION_OPEN: function() {
                    b = {}
                },
                GUILD_DELETE: function(e) {
                    var n = e.guild;
                    b = o()(b).filter((function(e) {
                        return e.guildId !== n.id
                    })).keyBy("id").value()
                },
                MESSAGE_UPDATE: function(e) {
                    var n = e.message.id,
                        t = e.message.channel_id;
                    if (null == t) return !1;
                    var r = b[t];
                    if (null == r && !e.message.pinned) return !1;
                    if (null != e.message.author)
                        if (e.message.pinned) {
                            if (null == r) {
                                r = _(t, [e.message], !1);
                                b[t] = r;
                                return
                            }
                            r.messages = r.messages.slice();
                            var i = o().findIndex(r.messages, (function(e) {
                                return e.id === n
                            })); - 1 === i ? r.messages.unshift((0, a.e5)(e.message)) : r.messages[i] = (0, a.wi)(r.messages[i], e.message);
                            b[t] = r
                        } else {
                            if (null == r) return;
                            var s = o().findIndex(r.messages, (function(e) {
                                return e.id === n
                            }));
                            if (-1 === s) return;
                            r.messages = r.messages.slice();
                            r.messages.splice(s, 1);
                            b[t] = r
                        }
                    else if (null != r) {
                        var c = o().findIndex(r.messages, (function(e) {
                            return e.id === n
                        }));
                        if (c >= 0) {
                            var u = r.messages[c],
                                l = (0, a.wi)(u, e.message);
                            if (l !== u) {
                                var f = r.messages.slice();
                                f[c] = l;
                                b[t].messages = f
                            }
                        }
                    }
                },
                MESSAGE_DELETE: function(e) {
                    var n = e.id,
                        t = e.channelId,
                        r = b[t];
                    if (null == r) return !1;
                    if (0 === o().remove(r.messages, (function(e) {
                            return e.id === n
                        })).length) return !1;
                    r.messages = r.messages.slice();
                    b[t] = r
                },
                MESSAGE_DELETE_BULK: function(e) {
                    var n = e.ids,
                        t = e.channelId,
                        r = b[t];
                    null != r && (r.messages = r.messages.filter((function(e) {
                        return -1 === n.indexOf(e.id)
                    })))
                },
                LOAD_PINNED_MESSAGES: function(e) {
                    var n = e.channelId;
                    b[n] = _(n, [], !1, !0)
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    var n = e.channelId,
                        t = e.messages;
                    b[n] = _(n, t, !0)
                },
                LOAD_PINNED_MESSAGES_FAILURE: function(e) {
                    var n = e.channelId;
                    delete b[n]
                },
                USER_SETTINGS_PROTO_UPDATE: N,
                I18N_LOAD_SUCCESS: N,
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
                s = t.n(i),
                a = t(882723),
                c = t(473708),
                u = t(736996),
                l = t.n(u);

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
                return !n || "object" !== E(n) && "function" != typeof n ? function(e) {
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
            var E = function(e) {
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
                    var t, r = d(e);
                    if (n) {
                        var o = d(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return p(this, t)
                }
            }
            var m = {
                    BLOCK: l().block,
                    INLINE: l().inline
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
                    var n = g(t);

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
                            u = void 0 === i ? m.BLOCK : i,
                            f = e.style;
                        return (0, r.jsxs)("div", {
                            className: s()(t, u),
                            style: f,
                            children: [(0, r.jsxs)(a.Text, {
                                variant: "text-sm/bold",
                                tag: "div",
                                color: "text-positive",
                                className: l().pro,
                                children: [c.Z.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                            }), (0, r.jsx)(a.Text, {
                                className: s()(l().tip, o),
                                variant: "text-sm/normal",
                                children: n
                            })]
                        })
                    };
                    return t
                }(o.PureComponent);
            y.Types = m;
            const O = y
        },
        475825: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                o = (t(667294), t(633878));

            function i(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function s(e, n) {
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

            function a(e, n) {
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

            function c(e) {
                var n = e.width,
                    t = void 0 === n ? 24 : n,
                    c = e.height,
                    u = void 0 === c ? 24 : c,
                    l = e.color,
                    f = void 0 === l ? "currentColor" : l,
                    d = e.foreground,
                    p = a(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", s(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            i(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(p)), {
                    width: t,
                    height: u,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        className: d,
                        fill: f,
                        d: "M14 3H20C21 3 22.0001 4 22.0001 5V19.0003C22.0001 20 21 21 20 21H14C13 21 6 13 6 13H2V11H6C6 11 13 3 14 3Z"
                    })
                }))
            }
        },
        254082: (e, n, t) => {
            t.d(n, {
                a4: () => c,
                vc: () => u
            });
            var r = t(61209),
                o = t(27851),
                i = t(682776),
                s = t(473903),
                a = t(2590);

            function c(e) {
                return null != e && function(e) {
                    if (null == e) return !1;
                    var n = e.id,
                        t = s.default.getCurrentUser();
                    return null != t && t.id !== n
                }(e.author)
            }

            function u(e) {
                return null != e && c(e) && function(e) {
                    var n = r.Z.getChannel(e);
                    if (null == n) return !1;
                    if (n.type === a.d4z.DM || n.type === a.d4z.GROUP_DM) return !0;
                    if (i.Z.canWithPartialContext(a.Plq.MANAGE_MESSAGES, {
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
//# sourceMappingURL=4198947eff45a29b6feb.js.map