"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [44339], {
        444339: (e, r, t) => {
            t.r(r);
            t.d(r, {
                default: () => p
            });
            var n = t(785893),
                a = (t(667294), t(441143)),
                o = t.n(a),
                i = t(70418),
                l = t(547721),
                s = t(391908),
                c = t(907933),
                u = t(473708),
                d = t(491025),
                f = t.n(d);

            function m(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function h(e, r) {
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

            function p(e) {
                var r = e.onClose,
                    t = e.guildId,
                    a = e.transitionState,
                    d = (0, l.YB)(t);
                o()(null != d, "subscriptionsSettings cannot be null");
                var m = d.cover_image_asset,
                    p = h((0, s.Z)(null != m ? m : void 0), 1)[0];
                return (0, n.jsxs)(i.ModalRoot, {
                    className: f().modal,
                    size: i.ModalSize.MEDIUM,
                    transitionState: a,
                    "aria-label": u.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_ARIA,
                    children: [(0, n.jsx)("div", {
                        ref: p,
                        className: f().coverImageContainer,
                        children: null != m && (0, n.jsx)(c.Z, {
                            coverImageAsset: m
                        })
                    }), (0, n.jsx)(i.Heading, {
                        variant: "text-lg/medium",
                        color: "header-primary",
                        className: f().header,
                        children: u.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_HEADER
                    }), (0, n.jsx)(i.ModalContent, {
                        className: f().content,
                        children: (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            className: f().description,
                            children: d.description
                        })
                    }), (0, n.jsx)(i.ModalFooter, {
                        className: f().footer,
                        children: (0, n.jsx)(i.Button, {
                            onClick: r,
                            children: u.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_MODAL_CTA
                        })
                    })]
                })
            }
        }
    }
]);