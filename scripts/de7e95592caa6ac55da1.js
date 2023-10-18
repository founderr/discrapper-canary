(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [55201], {
        130910: (t, r, e) => {
            t.exports = e.p + "3ce20f03ff35478349612e0c51869921.svg"
        },
        455201: (t, r, e) => {
            "use strict";
            e.r(r);
            e.d(r, {
                default: () => d
            });
            var n = e(785893),
                o = (e(667294), e(70418)),
                a = e(223308),
                l = e(107364),
                s = e(443812),
                i = e(473708),
                c = e(699301),
                u = e.n(c);

            function d(t) {
                var r = t.url,
                    c = t.onClose,
                    d = t.transitionState,
                    h = (0, s.Dt)(),
                    f = (0, a.h)(r),
                    m = f.protocol,
                    p = f.hostname,
                    x = f.theRestOfTheUrl;
                return (0, n.jsxs)(o.ModalRoot, {
                    transitionState: d,
                    "aria-labelledby": h,
                    children: [(0, n.jsx)("img", {
                        className: u().art,
                        src: e(130910),
                        alt: ""
                    }), (0, n.jsx)(o.ModalContent, {
                        children: (0, n.jsxs)(l.Z, {
                            direction: l.Z.Direction.VERTICAL,
                            justify: l.Z.Justify.CENTER,
                            children: [(0, n.jsx)(o.Heading, {
                                id: h,
                                variant: "heading-lg/semibold",
                                className: u().title,
                                children: i.Z.Messages.BAD_LINK_WARNING_TITLE_V2
                            }), (0, n.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: u().body,
                                children: i.Z.Messages.BAD_LINK_WARNING_BODY_V2.format()
                            }), (0, n.jsxs)(o.Scroller, {
                                className: u().linkCalloutContainer,
                                children: [(0, n.jsxs)(o.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: [m, "//"]
                                }), (0, n.jsx)(o.Text, {
                                    tag: "span",
                                    variant: "text-md/semibold",
                                    color: "text-normal",
                                    children: p
                                }), (0, n.jsx)(o.Text, {
                                    tag: "span",
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: x
                                })]
                            })]
                        })
                    }), (0, n.jsx)(o.ModalFooter, {
                        children: (0, n.jsx)(o.Button, {
                            type: "button",
                            size: o.Button.Sizes.MEDIUM,
                            color: o.Button.Colors.BRAND,
                            onClick: c,
                            children: i.Z.Messages.GO_BACK
                        })
                    })]
                })
            }
        },
        223308: (t, r, e) => {
            "use strict";
            e.d(r, {
                X: () => i,
                h: () => s
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
                    c = i[0],
                    u = i[1],
                    d = s(r),
                    h = d.protocol,
                    f = d.hostname,
                    m = d.theRestOfTheUrl,
                    p = n.useCallback((function() {
                        c && e(r);
                        null == a || a();
                        o()
                    }), [r, c, e, o, a]);
                return {
                    protocol: h,
                    hostname: f,
                    theRestOfTheUrl: m,
                    shouldTrustUrl: c,
                    setShouldTrustUrl: u,
                    handleConfirm: p
                }
            }
        }
    }
]);