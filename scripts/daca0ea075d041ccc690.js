(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [86531], {
        495068: (e, s, r) => {
            e.exports = r.p + "3255f24f5123fd8769d97157e48cb796.svg"
        },
        377236: (e, s, r) => {
            e.exports = r.p + "6cf42ec75591247991e68cfaf7801a29.svg"
        },
        123435: (e, s, r) => {
            "use strict";
            r.d(s, {
                Vq: () => v,
                c8: () => j,
                oQ: () => C
            });
            var a = r(785893),
                n = (r(667294), r(294184)),
                t = r.n(n),
                c = r(795308),
                l = r(575945),
                i = r(70418),
                d = r(74535),
                o = r(818417),
                u = r(348592),
                h = r(387099),
                N = r(2590),
                m = r(473708),
                f = r(858903),
                E = r.n(f),
                g = r(495068),
                p = r.n(g),
                _ = r(377236),
                x = r.n(_);

            function O(e) {
                var s = e.className,
                    r = (0, d.ZP)(),
                    n = (0, l.wj)(r) ? p() : x();
                return (0, a.jsxs)("div", {
                    className: t()(E().container, s),
                    children: [(0, a.jsx)(i.Heading, {
                        className: E().header,
                        variant: "heading-xl/semibold",
                        children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, a.jsxs)(i.Text, {
                        className: E().description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, a.jsx)("p", {
                            children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, a.jsx)("p", {
                            children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: u.Z.getArticleURL(N.BhN.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, a.jsx)("img", {
                        src: n,
                        className: E().splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function j() {
                return (0, a.jsx)(O, {
                    className: E().settings
                })
            }

            function v() {
                return (0, a.jsx)(O, {
                    className: E().modal
                })
            }

            function C(e) {
                var s = e.className;
                return (0, h.Q)() ? (0, a.jsxs)(i.Card, {
                    className: t()(E().blockedPaymentsWarning, s),
                    type: i.Card.Types.CUSTOM,
                    children: [(0, a.jsx)(o.Z, {
                        className: E().blockedPaymentsWarningIcon,
                        color: c.Z.unsafe_rawColors.YELLOW_300.css
                    }), (0, a.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: u.Z.getArticleURL(N.BhN.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        685269: (e, s, r) => {
            "use strict";
            r.d(s, {
                Z: () => t
            });
            var a = r(667294);
            var n = [];

            function t(e, s) {
                var r = (0, a.useRef)(),
                    t = (0, a.useRef)(n);
                if (t.current === n) {
                    r.current = e();
                    t.current = s
                } else if (! function(e, s) {
                        if (e.length !== s.length) return !1;
                        for (var r = 0; r < s.length && r < e.length; r++)
                            if (!Object.is(e[r], s[r])) return !1;
                        return !0
                    }(s, t.current)) {
                    r.current = e();
                    t.current = s
                }
                return r.current
            }
        }
    }
]);