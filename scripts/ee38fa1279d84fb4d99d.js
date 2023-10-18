"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [46738], {
        846738: (e, t, r) => {
            r.r(t);
            r.d(t, {
                FeatureForumPostConfirmationModal: () => T,
                FeatureItemConfirmationModal: () => j,
                FeatureMessageConfirmationModal: () => _,
                UnfeatureItemConfirmationModal: () => S
            });
            var n = r(785893),
                o = r(667294),
                a = r(730381),
                i = r.n(a),
                s = r(349289),
                l = r(70418),
                u = r(539381),
                c = r(487868),
                f = r(504698),
                d = r(473708),
                p = r(202945),
                m = r.n(p);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function b(e, t, r, n, o, a, i) {
                try {
                    var s = e[a](i),
                        l = s.value
                } catch (e) {
                    r(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(n, o)
            }

            function y(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function i(e) {
                            b(a, n, o, i, s, "next", e)
                        }

                        function s(e) {
                            b(a, n, o, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function g(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        g(e, t, r[t])
                    }))
                }
                return e
            }

            function x(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function E(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, a = [],
                            i = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(i = (n = r.next()).done); i = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var w = function(e, t) {
                var r, n, o, a, i = {
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
                            for (; i;) try {
                                if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                (n = 0, o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        n = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
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

            function S(e) {
                var t = e.featureableItem,
                    r = e.header,
                    a = e.body,
                    i = E(e, ["featureableItem", "header", "body"]),
                    s = v(o.useState(null), 2),
                    c = s[0],
                    p = s[1],
                    m = v(o.useState(!1), 2),
                    h = m[0],
                    b = m[1];
                return (0, n.jsxs)(l.ConfirmModal, x(O({
                    header: r,
                    confirmText: d.Z.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
                    confirmButtonColor: l.Button.Colors.RED,
                    cancelText: d.Z.Messages.CANCEL,
                    loading: h,
                    onConfirm: y((function() {
                        var e;
                        return w(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    r.trys.push([0, 2, , 3]);
                                    b(!0);
                                    return [4, (0, f.Pe)(t)];
                                case 1:
                                    r.sent();
                                    b(!1);
                                    return [3, 3];
                                case 2:
                                    e = r.sent();
                                    p(new u.Z(e));
                                    b(!1);
                                    throw e;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }, i), {
                    children: [(0, n.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: a
                    }), null != c && (0, n.jsx)(l.Text, {
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: c.message
                    })]
                }))
            }

            function j(e) {
                var t = e.featureableItem,
                    r = e.expiresSeconds,
                    a = e.header,
                    s = e.children,
                    c = e.options,
                    p = E(e, ["featureableItem", "expiresSeconds", "header", "children", "options"]),
                    h = v(o.useState(null), 2),
                    b = h[0],
                    g = h[1],
                    S = v(o.useState(!1), 2),
                    j = S[0],
                    _ = S[1];
                return (0, n.jsxs)(l.ConfirmModal, x(O({
                    header: a,
                    confirmText: d.Z.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
                    cancelText: d.Z.Messages.CANCEL,
                    confirmButtonColor: l.Button.Colors.BRAND,
                    loading: j,
                    onConfirm: y((function() {
                        var e, n;
                        return w(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    o.trys.push([0, 2, 3, 4]);
                                    e = i()().add(r, "second").toDate();
                                    _(!0);
                                    return [4, (0, f.pl)(t, e, c)];
                                case 1:
                                    o.sent();
                                    return [3, 4];
                                case 2:
                                    n = o.sent();
                                    g(new u.Z(n));
                                    throw n;
                                case 3:
                                    _(!1);
                                    return [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, p), {
                    children: [null != b && (0, n.jsx)(l.Text, {
                        className: m().featureModalError,
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: b.message
                    }), s]
                }))
            }

            function _(e) {
                var t = e.message,
                    r = e.guildId,
                    o = e.channel,
                    a = e.expiresSeconds,
                    i = e.timePeriod,
                    u = e.options,
                    f = E(e, ["message", "guildId", "channel", "expiresSeconds", "timePeriod", "options"]);
                return (0, n.jsxs)(j, x(O({}, f), {
                    featureableItem: {
                        guildId: r,
                        entity: t,
                        entityType: s.w.MESSAGE
                    },
                    header: d.Z.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
                    expiresSeconds: a,
                    options: u,
                    children: [(0, n.jsx)(l.Text, {
                        className: m().featureModalText,
                        variant: "text-md/normal",
                        children: d.Z.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
                            timePeriod: i
                        })
                    }), (0, n.jsx)("div", {
                        className: m().featureModalMessage,
                        children: (0, n.jsx)(c.Z, {
                            channel: o,
                            message: t,
                            disableInteraction: !0
                        })
                    })]
                }))
            }

            function T(e) {
                var t = e.thread,
                    r = e.guildId,
                    o = e.expiresSeconds,
                    a = e.timePeriod,
                    i = e.options,
                    u = E(e, ["thread", "guildId", "expiresSeconds", "timePeriod", "options"]);
                return (0, n.jsx)(j, x(O({}, u), {
                    featureableItem: {
                        guildId: r,
                        entity: t,
                        entityType: s.w.FORUM_POST
                    },
                    header: d.Z.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
                    expiresSeconds: o,
                    options: i,
                    children: (0,
                        n.jsx)(l.Text, {
                        className: m().featureModalText,
                        variant: "text-md/normal",
                        children: d.Z.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
                            threadName: t.name,
                            timePeriod: a
                        })
                    })
                }))
            }
        }
    }
]);