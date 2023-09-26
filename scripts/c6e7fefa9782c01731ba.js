"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [60240], {
        60240: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => i
            });
            var l = t(785893),
                o = (t(667294), t(304548)),
                a = t(971402),
                c = t(120415),
                s = t(310126),
                u = t(269083),
                r = t(473708);

            function i(e) {
                var n = e.text,
                    t = e.onSelect,
                    i = (0, u.Z)(n);
                return c.FB ? (0, l.jsxs)(o.Menu, {
                    navId: "text-context",
                    onClose: a.Zy,
                    "aria-label": r.Z.Messages.TEXT_ACTIONS_MENU_LABEL,
                    onSelect: t,
                    children: [(0, l.jsx)(o.MenuGroup, {
                        children: i
                    }), (0, l.jsx)(o.MenuGroup, {
                        children: (0, l.jsx)(o.MenuItem, {
                            id: "copy",
                            label: r.Z.Messages.COPY,
                            action: function() {
                                return s.ZP.copy(n)
                            }
                        })
                    })]
                }) : null
            }
        },
        269083: (e, n, t) => {
            t.d(n, {
                Z: () => p
            });
            var l = t(785893),
                o = t(667294),
                a = t(441143),
                c = t.n(a),
                s = t(304548),
                u = t(652591),
                r = t(120415),
                i = t(2590),
                d = t(473708);

            function p(e) {
                var n = o.useCallback((function() {
                    c()(null != e, "text cannot be null");
                    u.default.track(i.rMx.MESSAGE_MENU_GOOGLE_SEARCHED);
                    window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
                }), [e]);
                return r.FB && null != e && 0 !== (null == e ? void 0 : e.length) ? [(0, l.jsx)(s.MenuItem, {
                    id: "search-google",
                    label: d.Z.Messages.SEARCH_WITH_GOOGLE,
                    action: n
                }, "search-google")] : null
            }
        }
    }
]);