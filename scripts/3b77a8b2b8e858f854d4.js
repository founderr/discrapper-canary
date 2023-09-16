"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [44339], {
        444339: (e, r, t) => {
            t.r(r);
            t.d(r, {
                default: () => h
            });
            var n = t(785893),
                a = (t(667294), t(441143)),
                o = t.n(a),
                i = t(882723),
                l = t(547721),
                s = t(391908),
                c = t(473708),
                u = t(183649),
                d = t.n(u);

            function m(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function f(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, a, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(i = (n = t.next()).done); i = !0) {
                                o.push(n.value);
                                if (r && o.length === r) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return m(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e) {
                var r = e.onClose,
                    t = e.guildId,
                    a = e.transitionState,
                    u = (0, l.YB)(t);
                o()(null != u, "subscriptionsSettings cannot be null");
                var m = u.cover_image_asset,
                    h = f((0, s.Z)(null != m ? m : void 0), 2),
                    p = h[0],
                    _ = h[1];
                return (0, n.jsxs)(i.ModalRoot, {
                    className: d().modal,
                    size: i.ModalSize.MEDIUM,
                    transitionState: a,
                    "aria-label": c.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_ARIA,
                    children: [(0, n.jsx)("div", {
                        ref: p,
                        className: d().coverImageContainer,
                        children: null != _ && (0, n.jsx)("img", {
                            src: _,
                            alt: "",
                            className: d().coverImage
                        })
                    }), (0, n.jsx)(i.Heading, {
                        variant: "text-lg/medium",
                        color: "header-primary",
                        className: d().header,
                        children: c.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_HEADER
                    }), (0, n.jsx)(i.ModalContent, {
                        className: d().content,
                        children: (0,
                            n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            className: d().description,
                            children: u.description
                        })
                    }), (0, n.jsx)(i.ModalFooter, {
                        className: d().footer,
                        children: (0, n.jsx)(i.Button, {
                            onClick: r,
                            children: c.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_CTA
                        })
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=3b77a8b2b8e858f854d4.js.map