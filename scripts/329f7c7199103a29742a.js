"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [84562], {
        784562: (t, r, e) => {
            e.r(r);
            e.d(r, {
                default: () => S
            });
            var n = e(785893),
                o = (e(667294), e(441143)),
                a = e.n(o),
                l = e(304548),
                i = e(251295),
                u = e(43564),
                s = e(223430),
                c = e(443812),
                f = e(2590),
                d = e(473708),
                h = e(661492),
                p = e.n(h);

            function y(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n
            }

            function b(t, r, e, n, o, a, l) {
                try {
                    var i = t[a](l),
                        u = i.value
                } catch (t) {
                    e(t);
                    return
                }
                i.done ? r(u) : Promise.resolve(u).then(n, o)
            }

            function m(t, r) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, r) {
                    var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != e) {
                        var n, o, a = [],
                            l = !0,
                            i = !1;
                        try {
                            for (e = e.call(t); !(l = (n = e.next()).done); l = !0) {
                                a.push(n.value);
                                if (r && a.length === r) break
                            }
                        } catch (t) {
                            i = !0;
                            o = t
                        } finally {
                            try {
                                l || null == e.return || e.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }(t, r) || function(t, r) {
                    if (!t) return;
                    if ("string" == typeof t) return y(t, r);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === e && t.constructor && (e = t.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return y(t, r)
                }(t, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(t, r) {
                var e, n, o, a, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function i(a) {
                    return function(i) {
                        return function(a) {
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (e = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                (n = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        n = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            l.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(a);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                a = r.call(t, l)
                            } catch (t) {
                                a = [6, t];
                                n = 0
                            } finally {
                                e = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, i])
                    }
                }
            };

            function S(t) {
                var r, e, o = t.transitionState,
                    h = t.guild,
                    y = t.onClose,
                    S = (0, c.Dt)(),
                    v = m((0, i.Z)(u.oL), 2),
                    E = v[0],
                    x = v[1],
                    I = x.loading,
                    T = x.error,
                    _ = (e = (r = function() {
                        return g(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    a()(null != h, "no guild");
                                    return [4, E(h.id)];
                                case 1:
                                    null != t.sent() && y();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(n, o) {
                            var a = r.apply(t, e);

                            function l(t) {
                                b(a, n, o, l, i, "next", t)
                            }

                            function i(t) {
                                b(a, n, o, l, i, "throw", t)
                            }
                            l(void 0)
                        }))
                    }), function() {
                        return e.apply(this, arguments)
                    });
                return (0, n.jsxs)(l.ModalRoot, {
                    transitionState: o,
                    "aria-labelledby": S,
                    children: [(0, n.jsxs)(l.ModalHeader, {
                        children: [(0, n.jsx)(l.Heading, {
                            id: S,
                            variant: "heading-md/semibold",
                            children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_DISABLE_MONETIZATION_MODAL_HEADER
                        }), (0, n.jsx)(l.ModalCloseButton, {
                            className: p().closeButton,
                            onClick: y
                        })]
                    }), (0, n.jsxs)(l.ModalContent, {
                        className: p().content,
                        children: [null != T ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(l.FormErrorBlock, {
                                children: T.message
                            }), (0, n.jsx)(s.Z, {
                                size: 24
                            })]
                        }) : null, (0, n.jsx)(l.FormText, {
                            type: l.FormText.Types.ERROR,
                            children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_DISABLE_MONETIZATION_MODAL_DESCRIPTION.format({
                                guildName: h.toString(),
                                url: f.EYA.DEVELOPER_PORTAL_TEAMS
                            })
                        }), (0, n.jsx)(s.Z, {
                            size: 16
                        })]
                    }), (0, n.jsx)(l.ModalFooter, {
                        className: p().footer,
                        children: (0, n.jsx)(l.Button, {
                            color: l.Button.Colors.RED,
                            className: p().goBackButton,
                            submitting: I,
                            onClick: _,
                            children: d.Z.Messages.SAVE
                        })
                    })]
                })
            }
        }
    }
]);