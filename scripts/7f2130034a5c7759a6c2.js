(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [44737], {
        37517: (e, n, t) => {
            e.exports = t.p + "e0c7251b9f011e1625dde1329fc98986.png"
        },
        944737: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => y
            });
            var r = t(785893),
                o = (t(667294), t(795308)),
                s = t(70418),
                a = t(19585),
                c = t(531441),
                i = t(593166),
                l = t(442212),
                u = t(203600),
                _ = t(2590),
                L = t(473708),
                f = t(967526),
                O = t.n(f),
                d = t(745576),
                g = t.n(d),
                p = t(37517),
                b = t.n(p);

            function A(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function P(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        A(e, n, t[n])
                    }))
                }
                return e
            }

            function C(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) {
                        t = s[r];
                        n.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) {
                        t = s[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function M(e, n) {
                return (0, r.jsx)(c.IG, {
                    text: e,
                    className: g().newBadge,
                    color: o.Z.unsafe_rawColors.BRAND_500.css
                }, n)
            }

            function y(e) {
                var n = e.guildCount,
                    t = e.onClose,
                    o = e.analyticsLocations,
                    c = C(e, ["guildCount", "onClose", "analyticsLocations"]),
                    f = function(e) {
                        return function(n, t) {
                            return (0, r.jsx)(s.Clickable, {
                                className: O().learnMoreLink,
                                tag: "span",
                                onClick: function() {
                                    e();
                                    (0, i.z)()
                                },
                                children: n
                            }, t)
                        }
                    }(t),
                    d = (0, a.Z)(o).AnalyticsLocationProvider;
                return (0, r.jsx)(d, {
                    children: (0, r.jsx)(l.Z, P({
                        artURL: b(),
                        onClose: t,
                        type: u.cd.GUILD_CAP_MODAL_UPSELL,
                        title: L.Z.Messages.GUILD_CAP_UPSELL_MODAL_TITLE,
                        body: n < _.DZw ? L.Z.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_BODY.format({
                            guildCount: n,
                            onAndMore: f,
                            newBadgeHook: M
                        }) : L.Z.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_BODY.format({
                            onAndMore: f,
                            newBadgeHook: M
                        }),
                        context: n < _.DZw ? L.Z.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_CONTEXT.format({
                            guildCount: n
                        }) : L.Z.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_CONTEXT,
                        glowUp: L.Z.Messages.GUILD_CAP_UPSELL_MODAL_GLOW_UP.format({
                            onAndMore: f
                        })
                    }, c))
                })
            }
        }
    }
]);