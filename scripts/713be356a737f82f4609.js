"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24567], {
        324567: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => O
            });
            var n = r(785893),
                o = (r(667294), r(882723)),
                c = r(567403),
                s = r(443812),
                a = "https://support.discord.com/hc/en-us/articles/6461420677527-Limited-Access-FAQ",
                i = r(473708),
                l = r(272485),
                u = r.n(l);

            function d(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function p(e, t) {
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
            const O = function(e) {
                var t = e.onClose,
                    r = e.guildId,
                    l = (0,
                        s.Dt)(),
                    O = i.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_FALLBACK.format({
                        helpdeskArticle: a
                    }),
                    b = c.Z.getGuild(r);
                null != b && (O = i.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION.format({
                    guildName: b.name,
                    helpdeskArticle: a
                }));
                return (0, n.jsxs)(o.ModalRoot, p(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            d(e, t, r[t])
                        }))
                    }
                    return e
                }({}, e), {
                    "aria-labelledby": l,
                    children: [(0, n.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: u().modalHeader,
                        children: [(0, n.jsx)(o.Heading, {
                            id: l,
                            variant: "heading-xl/extrabold",
                            children: i.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING
                        }), (0, n.jsx)(o.ModalCloseButton, {
                            className: u().closeButton,
                            onClick: t
                        })]
                    }), (0, n.jsx)(o.ModalContent, {
                        className: u().modalContent,
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: u().contentText,
                            children: O
                        })
                    }), (0, n.jsx)(o.ModalFooter, {
                        children: (0, n.jsx)(o.Button, {
                            className: u().button,
                            size: o.Button.Sizes.MIN,
                            onClick: t,
                            children: i.Z.Messages.OKAY
                        })
                    })]
                }))
            }
        },
        443812: (e, t, r) => {
            r.d(t, {
                hQ: () => s,
                Dt: () => a,
                FG: () => i
            });
            var n = r(873955),
                o = r.n(n),
                c = r(989824),
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return o()(e)
                },
                a = function() {
                    return (0, c.Z)((function() {
                        return s()
                    }))
                },
                i = function(e) {
                    return (0, e.children)(a())
                }
        },
        989824: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(667294),
                o = {};

            function c(e) {
                var t = (0, n.useRef)(o);
                t.current === o && (t.current = e());
                return t.current
            }
        }
    }
]);