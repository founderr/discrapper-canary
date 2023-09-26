"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [14288], {
        214288: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => b
            });
            var n = r(785893),
                o = r(667294),
                a = r(882723),
                l = r(845814),
                s = r(473708),
                i = r(711789),
                u = r.n(i);

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function f(e, t, r, n, o, a, l) {
                try {
                    var s = e[a](l),
                        i = s.value
                } catch (e) {
                    r(e);
                    return
                }
                s.done ? t(i) : Promise.resolve(i).then(n, o)
            }

            function d(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function l(e) {
                            f(a, n, o, l, s, "next", e)
                        }

                        function s(e) {
                            f(a, n, o, l, s, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a = [],
                            l = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = function(e, t) {
                var r, n, o, a, l = {
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                (n = 0,
                                    o) && (a = [2 & a[0], o.value]);
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
                                a = t.call(e, l)
                            } catch (e) {
                                a = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
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

            function b(e) {
                var t = e.transitionState,
                    r = e.onClose,
                    i = e.credential,
                    c = h(o.useState(!1), 2),
                    f = c[0],
                    b = c[1],
                    y = h(o.useState(""), 2),
                    m = y[0],
                    v = y[1],
                    g = h(o.useState(void 0), 2),
                    E = g[0],
                    x = g[1],
                    M = o.useRef(null);
                o.useEffect((function() {
                    if (t === a.ModalTransitionState.ENTERED) {
                        var e;
                        null === (e = M.current) || void 0 === e || e.focus()
                    }
                }), [t]);

                function A() {
                    A = d((function(e) {
                        var t;
                        return p(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    e.preventDefault();
                                    b(!0);
                                    n.label = 1;
                                case 1:
                                    n.trys.push([1, 3, 4, 5]);
                                    return [4, (0, l.WQ)(i.id, m)];
                                case 2:
                                    n.sent();
                                    r();
                                    return [3, 5];
                                case 3:
                                    t = n.sent();
                                    x(t.message);
                                    return [3, 5];
                                case 4:
                                    b(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    }));
                    return A.apply(this, arguments)
                }
                return (0, n.jsxs)(a.ModalRoot, {
                    transitionState: t,
                    children: [(0, n.jsxs)(a.ModalHeader, {
                        separator: !1,
                        className: u().header,
                        children: [(0, n.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-lg/bold",
                            className: u().subtitle,
                            children: s.Z.Messages.TWO_FA_WEBAUTHN_RENAME
                        }), (0, n.jsx)(a.ModalCloseButton, {
                            onClick: r,
                            className: u().modalCloseButton
                        })]
                    }), (0, n.jsxs)("form", {
                        onSubmit: function(e) {
                            return A.apply(this, arguments)
                        },
                        children: [(0, n.jsx)(a.ModalContent, {
                            className: u().content,
                            children: (0, n.jsx)(a.FormItem, {
                                title: s.Z.Messages.TWO_FA_WEBAUTHN_RENAME_FORM_NEW_KEY,
                                error: E,
                                required: !0,
                                children: (0, n.jsx)("div", {
                                    children: (0, n.jsx)(a.TextInput, {
                                        inputRef: M,
                                        "aria-label": s.Z.Messages.TWO_FA_WEBAUTHN_RENAME_FORM_NEW_KEY,
                                        placeholder: i.name,
                                        value: m,
                                        minLength: 1,
                                        maxLength: 32,
                                        onChange: v,
                                        autoFocus: !0,
                                        required: !0
                                    })
                                })
                            })
                        }), (0, n.jsxs)(a.ModalFooter, {
                            children: [(0, n.jsx)(a.Button, {
                                type: "submit",
                                color: a.Button.Colors.BRAND,
                                size: a.Button.Sizes.MEDIUM,
                                submitting: f,
                                disabled: 0 === m.length || m.length > 32,
                                children: s.Z.Messages.DONE
                            }), (0, n.jsx)(a.Button, {
                                className: u().cancel,
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.PRIMARY,
                                onClick: r,
                                children: s.Z.Messages.CANCEL
                            })]
                        })]
                    })]
                })
            }
        }
    }
]);