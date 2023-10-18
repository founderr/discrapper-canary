"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [62], {
        223308: (t, e, r) => {
            r.d(e, {
                X: () => i,
                h: () => s
            });
            var o = r(667294),
                n = r(457696);

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
                return o
            }

            function a(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var o, n, l = [],
                            a = !0,
                            s = !1;
                        try {
                            for (r = r.call(t); !(a = (o = r.next()).done); a = !0) {
                                l.push(o.value);
                                if (e && l.length === e) break
                            }
                        } catch (t) {
                            s = !0;
                            n = t
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (s) throw n
                            }
                        }
                        return l
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return l(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(t) {
                var e = o.useMemo((function() {
                        return {
                            protocol: (0, n.E)(t),
                            hostname: (0, n.F)(t)
                        }
                    }), [t]),
                    r = e.protocol,
                    l = e.hostname,
                    a = "".concat(r, "//").concat(l);
                return {
                    protocol: r,
                    hostname: l,
                    theRestOfTheUrl: t.replace(a, "")
                }
            }

            function i(t) {
                var e = t.url,
                    r = t.trustUrl,
                    n = t.onConfirm,
                    l = t.onClose,
                    i = a(o.useState(!1), 2),
                    u = i[0],
                    c = i[1],
                    d = s(e),
                    h = d.protocol,
                    m = d.hostname,
                    f = d.theRestOfTheUrl,
                    _ = o.useCallback((function() {
                        u && r(e);
                        null == l || l();
                        n()
                    }), [e, u, r, n, l]);
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
        900062: (t, e, r) => {
            r.r(e);
            r.d(e, {
                default: () => c
            });
            var o = r(785893),
                n = (r(667294), r(70418)),
                l = r(443812),
                a = r(223308),
                s = r(473708),
                i = r(625972),
                u = r.n(i);

            function c(t) {
                var e = t.url,
                    r = t.trustUrl,
                    i = t.isProtocol,
                    c = t.onConfirm,
                    d = t.onClose,
                    h = t.transitionState,
                    m = (0, l.Dt)(),
                    f = (0, a.X)({
                        url: e,
                        trustUrl: r,
                        onConfirm: c,
                        onClose: d
                    }),
                    _ = f.protocol,
                    x = f.hostname,
                    T = f.theRestOfTheUrl,
                    p = f.shouldTrustUrl,
                    C = f.setShouldTrustUrl,
                    M = f.handleConfirm;
                return (0, o.jsxs)(n.ModalRoot, {
                    size: n.ModalSize.DYNAMIC,
                    transitionState: h,
                    "aria-labelledby": m,
                    children: [(0, o.jsxs)(n.ModalContent, {
                        children: [(0, o.jsx)(n.Heading, {
                            id: m,
                            variant: "heading-xl/bold",
                            className: u().title,
                            children: s.Z.Messages.MASKED_LINK_ALERT_V2_HEADER
                        }), (0, o.jsx)(n.Text, {
                            className: u().warningText,
                            variant: "text-md/normal",
                            children: i ? s.Z.Messages.MASKED_LINK_ALERT_V2_WARNING_PROTOCOL.format({}) : s.Z.Messages.MASKED_LINK_ALERT_V2_WARNING_WEBSITE
                        }), (0, o.jsxs)(n.Scroller, {
                            className: u().linkCalloutContainer,
                            children: [(0, o.jsxs)(n.Text, {
                                tag: "span",
                                variant: i ? "text-md/semibold" : "text-md/normal",
                                color: i ? "text-normal" : "text-muted",
                                children: [_, "//"]
                            }), (0, o.jsx)(n.Text, {
                                tag: "span",
                                variant: i ? "text-md/normal" : "text-md/semibold",
                                color: i ? "text-muted" : "text-normal",
                                children: x
                            }), (0, o.jsx)(n.Text, {
                                tag: "span",
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: T
                            })]
                        }), (0, o.jsx)(n.Checkbox, {
                            className: u().checkbox,
                            type: n.Checkbox.Types.INVERTED,
                            value: p,
                            onChange: function(t, e) {
                                return C(e)
                            },
                            children: (0, o.jsx)(n.Text, {
                                variant: "text-sm/normal",
                                children: i ? s.Z.Messages.MASKED_LINK_ALERT_V2_TRUST_PROTOCOL.format({
                                    protocol: _.replace(":", "")
                                }) : s.Z.Messages.MASKED_LINK_ALERT_V2_TRUST_WEBSITE.format({
                                    domain: x
                                })
                            })
                        })]
                    }), (0, o.jsxs)(n.ModalFooter, {
                        children: [(0, o.jsx)(n.Button, {
                            type: "button",
                            size: n.Button.Sizes.MEDIUM,
                            color: n.Button.Colors.BRAND,
                            onClick: M,
                            children: i ? s.Z.Messages.MASKED_LINK_ALERT_V2_CONFIRM_PROTOCOL : s.Z.Messages.MASKED_LINK_ALERT_V2_CONFIRM_WEBSITE
                        }), (0, o.jsx)(n.Button, {
                            type: "button",
                            size: n.Button.Sizes.MEDIUM,
                            color: n.Button.Colors.PRIMARY,
                            onClick: d,
                            look: n.ButtonLooks.LINK,
                            children: s.Z.Messages.GO_BACK
                        })]
                    })]
                })
            }
        }
    }
]);