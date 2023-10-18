"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [19763], {
        119763: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => y
            });
            var r = n(785893),
                o = n(667294),
                a = n(70418),
                l = n(560923),
                s = n(443812),
                i = n(749565),
                u = n(473708),
                c = n(995442),
                f = n.n(c);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t, n, r, o, a, l) {
                try {
                    var s = e[a](l),
                        i = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(i) : Promise.resolve(i).then(r, o)
            }

            function p(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            l = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return a
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
            var b = function(e, t) {
                var n, r, o, a, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0, o) && (a = [2 & a[0], o.value]);
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
                                        r = a[1];
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
                                a = t.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            };

            function y(e) {
                var t, n, c = e.user,
                    d = e.nickname,
                    y = e.transitionState,
                    m = e.onClose,
                    v = (0, s.Dt)(),
                    N = p(o.useState(!1), 2),
                    g = N[0],
                    I = N[1],
                    x = p(o.useState(d), 2),
                    M = x[0],
                    C = x[1],
                    E = o.useRef(null),
                    S = (n = (t = function(e) {
                        return b(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    e.preventDefault();
                                    I(!0);
                                    t.label = 1;
                                case 1:
                                    t.trys.push([1, 3, 4, 5]);
                                    return [4, l.Z.updateRelationship(c.id, M)];
                                case 2:
                                    t.sent();
                                    m();
                                    return [3, 5];
                                case 3:
                                    t.sent();
                                    return [3, 5];
                                case 4:
                                    I(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var a = t.apply(e, n);

                            function l(e) {
                                h(a, r, o, l, s, "next", e)
                            }

                            function s(e) {
                                h(a, r, o, l, s, "throw", e)
                            }
                            l(void 0)
                        }))
                    }), function(e) {
                        return n.apply(this, arguments)
                    }),
                    A = null == d ? u.Z.Messages.ADD_FRIEND_NICKNAME : u.Z.Messages.CHANGE_FRIEND_NICKNAME;
                return (0, r.jsx)(a.ModalRoot, {
                    transitionState: y,
                    size: a.ModalSize.SMALL,
                    "aria-labelledby": v,
                    children: (0, r.jsxs)("form", {
                        onSubmit: S,
                        children: [(0, r.jsx)(a.ModalHeader, {
                            separator: !1,
                            children: (0, r.jsx)(a.Heading, {
                                variant: "heading-lg/semibold",
                                children: A
                            })
                        }), (0, r.jsxs)(a.ModalContent, {
                            children: [(0, r.jsx)(a.Text, {
                                variant: "text-md/normal",
                                className: f().description,
                                children: u.Z.Messages.FRIEND_NICKNAME_DESCRIPTION
                            }), (0, r.jsx)(a.FormItem, {
                                title: u.Z.Messages.FRIEND_NICKNAME,
                                children: (0, r.jsx)(a.TextInput, {
                                    inputRef: E,
                                    value: null != M ? M : "",
                                    placeholder: i.ZP.getName(c),
                                    onChange: C,
                                    className: f().input,
                                    autoFocus: !0
                                })
                            }), (0, r.jsx)(a.Button, {
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.LINK,
                                size: a.Button.Sizes.NONE,
                                onClick: function() {
                                    var e;
                                    C(null);
                                    null === (e = E.current) || void 0 === e || e.focus()
                                },
                                className: f().reset,
                                children: u.Z.Messages.RESET_FRIEND_NICKNAME
                            })]
                        }), (0, r.jsxs)(a.ModalFooter, {
                            children: [(0, r.jsx)(a.Button, {
                                type: "submit",
                                disabled: g,
                                children: u.Z.Messages.SAVE
                            }), (0, r.jsx)(a.Button, {
                                onClick: m,
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.PRIMARY,
                                children: u.Z.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
        }
    }
]);