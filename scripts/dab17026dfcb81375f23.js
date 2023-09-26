"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [62], {
        223308: (t, r, e) => {
            e.d(r, {
                h: () => s,
                X: () => i
            });
            var n = e(667294),
                o = e(457696);

            function a(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n
            }

            function l(t, r) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, r) {
                    var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != e) {
                        var n, o, a = [],
                            l = !0,
                            s = !1;
                        try {
                            for (e = e.call(t); !(l = (n = e.next()).done); l = !0) {
                                a.push(n.value);
                                if (r && a.length === r) break
                            }
                        } catch (t) {
                            s = !0;
                            o = t
                        } finally {
                            try {
                                l || null == e.return || e.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return a
                    }
                }(t, r) || function(t, r) {
                    if (!t) return;
                    if ("string" == typeof t) return a(t, r);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === e && t.constructor && (e = t.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return a(t, r)
                }(t, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(t) {
                var r = n.useMemo((function() {
                        return {
                            protocol: (0, o.E)(t),
                            hostname: (0, o.F)(t)
                        }
                    }), [t]),
                    e = r.protocol,
                    a = r.hostname,
                    l = "".concat(e, "//").concat(a);
                return {
                    protocol: e,
                    hostname: a,
                    theRestOfTheUrl: t.replace(l, "")
                }
            }

            function i(t) {
                var r = t.url,
                    e = t.trustUrl,
                    o = t.onConfirm,
                    a = t.onClose,
                    i = l(n.useState(!1), 2),
                    u = i[0],
                    c = i[1],
                    d = s(r),
                    h = d.protocol,
                    m = d.hostname,
                    f = d.theRestOfTheUrl,
                    _ = n.useCallback((function() {
                        u && e(r);
                        null == a || a();
                        o()
                    }), [r, u, e, o, a]);
                return {
                    protocol: h,
                    hostname: m,
                    theRestOfTheUrl: f,
                    shouldTrustUrl: u,
                    setShouldTrustUrl: c,
                    handleConfirm: _
                }
            }
        },
        900062: (t, r, e) => {
            e.r(r);
            e.d(r, {
                default: () => c
            });
            var n = e(785893),
                o = (e(667294), e(882723)),
                a = e(443812),
                l = e(223308),
                s = e(473708),
                i = e(625972),
                u = e.n(i);

            function c(t) {
                var r = t.url,
                    e = t.trustUrl,
                    i = t.isProtocol,
                    c = t.onConfirm,
                    d = t.onClose,
                    h = t.transitionState,
                    m = (0, a.Dt)(),
                    f = (0, l.X)({
                        url: r,
                        trustUrl: e,
                        onConfirm: c,
                        onClose: d
                    }),
                    _ = f.protocol,
                    x = f.hostname,
                    T = f.theRestOfTheUrl,
                    p = f.shouldTrustUrl,
                    C = f.setShouldTrustUrl,
                    M = f.handleConfirm;
                return (0, n.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.DYNAMIC,
                    transitionState: h,
                    "aria-labelledby": m,
                    children: [(0, n.jsxs)(o.ModalContent, {
                        children: [(0, n.jsx)(o.Heading, {
                            id: m,
                            variant: "heading-xl/bold",
                            className: u().title,
                            children: s.Z.Messages.MASKED_LINK_ALERT_V2_HEADER
                        }), (0, n.jsx)(o.Text, {
                            className: u().warningText,
                            variant: "text-md/normal",
                            children: i ? s.Z.Messages.MASKED_LINK_ALERT_V2_WARNING_PROTOCOL.format({}) : s.Z.Messages.MASKED_LINK_ALERT_V2_WARNING_WEBSITE
                        }), (0, n.jsxs)(o.Scroller, {
                            className: u().linkCalloutContainer,
                            children: [(0, n.jsxs)(o.Text, {
                                tag: "span",
                                variant: i ? "text-md/semibold" : "text-md/normal",
                                color: i ? "text-normal" : "text-muted",
                                children: [_, "//"]
                            }), (0, n.jsx)(o.Text, {
                                tag: "span",
                                variant: i ? "text-md/normal" : "text-md/semibold",
                                color: i ? "text-muted" : "text-normal",
                                children: x
                            }), (0, n.jsx)(o.Text, {
                                tag: "span",
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: T
                            })]
                        }), (0, n.jsx)(o.Checkbox, {
                            className: u().checkbox,
                            type: o.Checkbox.Types.INVERTED,
                            value: p,
                            onChange: function(t, r) {
                                return C(r)
                            },
                            children: (0, n.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: i ? s.Z.Messages.MASKED_LINK_ALERT_V2_TRUST_PROTOCOL.format({
                                    protocol: _.replace(":", "")
                                }) : s.Z.Messages.MASKED_LINK_ALERT_V2_TRUST_WEBSITE.format({
                                    domain: x
                                })
                            })
                        })]
                    }), (0, n.jsxs)(o.ModalFooter, {
                        children: [(0, n.jsx)(o.Button, {
                            type: "button",
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.BRAND,
                            onClick: M,
                            children: i ? s.Z.Messages.MASKED_LINK_ALERT_V2_CONFIRM_PROTOCOL : s.Z.Messages.MASKED_LINK_ALERT_V2_CONFIRM_WEBSITE
                        }), (0, n.jsx)(o.Button, {
                            type: "button",
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.PRIMARY,
                            onClick: d,
                            look: o.ButtonLooks.LINK,
                            children: s.Z.Messages.GO_BACK
                        })]
                    })]
                })
            }
        },
        443812: (t, r, e) => {
            e.d(r, {
                hQ: () => l,
                Dt: () => s,
                FG: () => i
            });
            var n = e(873955),
                o = e.n(n),
                a = e(989824),
                l = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(t)
                },
                s = function() {
                    return (0, a.Z)((function() {
                        return l()
                    }))
                },
                i = function(t) {
                    return (0, t.children)(s())
                }
        },
        989824: (t, r, e) => {
            e.d(r, {
                Z: () => a
            });
            var n = e(667294),
                o = {};

            function a(t) {
                var r = (0, n.useRef)(o);
                r.current === o && (r.current = t());
                return r.current
            }
        }
    }
]);