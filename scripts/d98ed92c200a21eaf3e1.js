(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [84715], {
        892531: (e, t, r) => {
            e.exports = r.p + "222756e9418e375e7ae974594b3aa1d2.svg"
        },
        884715: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => C
            });
            var n = r(785893),
                a = r(667294),
                o = r(993231),
                s = r(882723),
                l = r(539381),
                u = r(479373),
                i = r(473708),
                c = r(135582),
                f = r.n(c),
                h = r(892531),
                d = r.n(h);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function m(e, t, r, n, a, o, s) {
                try {
                    var l = e[o](s),
                        u = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(u) : Promise.resolve(u).then(n, a)
            }

            function y(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function s(e) {
                            m(o, n, a, s, l, "next", e)
                        }

                        function l(e) {
                            m(o, n, a, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, o = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (n = r.next()).done); s = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var S = function(e, t) {
                var r, n, a, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (r = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
                                (n = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        n = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = s.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < a[1]) {
                                            s.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2];
                                            s.ops.push(o);
                                            break
                                        }
                                        a[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                o = t.call(e, s)
                            } catch (e) {
                                o = [6, e];
                                n = 0
                            } finally {
                                r = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function C(e) {
                var t = e.transitionState,
                    r = e.onFormSubmit,
                    c = e.onResend,
                    h = e.onSuccess,
                    p = e.onClose,
                    m = e.headerText,
                    C = e.confirmButtonText,
                    v = e.confirmButtonColor,
                    T = e.impressionName,
                    E = b(a.useState(!1), 2),
                    N = E[0],
                    x = E[1],
                    _ = b(a.useState(""), 2),
                    g = _[0],
                    M = _[1],
                    A = b(a.useState(!1), 2),
                    I = A[0],
                    w = A[1],
                    R = b(a.useState(null), 2),
                    j = R[0],
                    k = R[1],
                    O = a.useRef(null);
                (0, u.Z)({
                    type: o.nv.MODAL,
                    name: T
                });
                var U, B = (U = y((function(e) {
                        var t, n, a;
                        return S(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    e.preventDefault();
                                    k(null);
                                    x(!0);
                                    o.label = 1;
                                case 1:
                                    o.trys.push([1, 3, 4, 5]);
                                    return [4, r(g)];
                                case 2:
                                    t = o.sent();
                                    null != h && h(t);
                                    p();
                                    return [3, 5];
                                case 3:
                                    n = o.sent();
                                    a = new l.Z(n);
                                    k(a.getAnyErrorMessage());
                                    return [3, 5];
                                case 4:
                                    x(!1);
                                    return [7];
                                case 5:
                                    return [2]
                            }
                        }))
                    })), function(e) {
                        return U.apply(this, arguments)
                    }),
                    L = function() {
                        var e = y((function() {
                            var e, t, r;
                            return S(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (I) return [2];
                                        w(!0);
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, 4, 5]);
                                        return [4, c()];
                                    case 2:
                                        n.sent();
                                        (0, s.showToast)((0,
                                            s.createToast)(i.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, s.ToastType.SUCCESS));
                                        return [3, 5];
                                    case 3:
                                        e = n.sent();
                                        t = new l.Z(e);
                                        null != (r = t.getAnyErrorMessage()) && (0, s.showToast)((0, s.createToast)(r, s.ToastType.FAILURE));
                                        return [3, 5];
                                    case 4:
                                        w(!1);
                                        return [7];
                                    case 5:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, n.jsx)(s.ModalRoot, {
                    transitionState: t,
                    children: (0, n.jsxs)("form", {
                        onSubmit: B,
                        children: [(0, n.jsx)("img", {
                            alt: "",
                            className: f().headerImage,
                            src: d()
                        }), (0, n.jsxs)(s.ModalHeader, {
                            separator: !1,
                            className: f().header,
                            children: [(0, n.jsx)(s.Heading, {
                                variant: "heading-lg/semibold",
                                className: f().title,
                                children: m
                            }), (0, n.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-md/normal",
                                className: f().subtitle,
                                children: i.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
                            }), (0, n.jsx)(s.ModalCloseButton, {
                                onClick: p,
                                className: f().modalCloseButton
                            })]
                        }), (0, n.jsxs)(s.ModalContent, {
                            children: [(0, n.jsx)(s.FormItem, {
                                title: i.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
                                error: j,
                                children: (0, n.jsx)(s.TextInput, {
                                    value: g,
                                    onChange: M,
                                    inputRef: O
                                })
                            }), (0, n.jsx)(s.Text, {
                                className: f().help,
                                variant: "text-sm/normal",
                                children: i.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
                                    onResend: L
                                })
                            })]
                        }), (0, n.jsxs)(s.ModalFooter, {
                            children: [(0, n.jsx)(s.Button, {
                                type: "submit",
                                color: null != v ? v : s.Button.Colors.BRAND,
                                size: s.Button.Sizes.MEDIUM,
                                submitting: N,
                                children: C
                            }), (0, n.jsx)(s.Button, {
                                look: s.Button.Looks.LINK,
                                color: s.Button.Colors.PRIMARY,
                                onClick: p,
                                children: i.Z.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=d98ed92c200a21eaf3e1.js.map