"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [44522], {
        567678: (e, n, r) => {
            r.d(n, {
                Z: () => i
            });
            var t = r(785893),
                c = (r(667294), r(19585));

            function o(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function u(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        o(e, n, r[n])
                    }))
                }
                return e
            }

            function i(e, n) {
                return function(r) {
                    var o = (0, c.Z)(n).AnalyticsLocationProvider;
                    return (0, t.jsx)(o, {
                        children: (0, t.jsx)(e, u({}, r))
                    })
                }
            }
        },
        544522: (e, n, r) => {
            r.r(n);
            r.d(n, {
                default: () => h
            });
            var t = r(785893),
                c = (r(667294), r(70418)),
                o = r(971402),
                u = r(567678),
                i = r(153686),
                a = r(112897),
                l = r(962855),
                s = r(987932),
                d = r(576668),
                p = r(787301),
                b = r(673780),
                f = r(473708);
            const h = (0, u.Z)((function(e) {
                var n = e.channel,
                    r = e.guild,
                    u = e.onSelect,
                    i = (0, p.Z)(n),
                    h = (0, b.Z)(n, r),
                    Z = (0, l.Z)(n, r),
                    j = (0, s.Z)(n, r),
                    E = (0, d.Z)(n),
                    O = (0, a.Z)({
                        id: n.id,
                        label: f.Z.Messages.COPY_ID_CHANNEL
                    });
                return (0, t.jsxs)(c.Menu, {
                    navId: "channel-context",
                    onClose: o.Zy,
                    "aria-label": f.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: u,
                    children: [(0, t.jsx)(c.MenuGroup, {
                        children: i
                    }), (0, t.jsxs)(c.MenuGroup, {
                        children: [h, Z, j]
                    }), (0, t.jsx)(c.MenuGroup, {
                        children: E
                    }), (0, t.jsx)(c.MenuGroup, {
                        children: O
                    })]
                })
            }), [i.Z.CONTEXT_MENU, i.Z.CHANNEL_ACTIVITY_FEED_VOICE_MENU])
        }
    }
]);