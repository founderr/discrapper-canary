"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24567], {
        324567: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => O
            });
            var n = r(785893),
                o = (r(667294), r(70418)),
                s = r(567403),
                c = r(443812),
                a = "https://support.discord.com/hc/en-us/articles/6461420677527-Limited-Access-FAQ",
                l = r(473708),
                i = r(272485),
                u = r.n(i);

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
                    i = (0,
                        c.Dt)(),
                    O = l.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_FALLBACK.format({
                        helpdeskArticle: a
                    }),
                    b = s.Z.getGuild(r);
                null != b && (O = l.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION.format({
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
                    "aria-labelledby": i,
                    children: [(0, n.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: u().modalHeader,
                        children: [(0, n.jsx)(o.Heading, {
                            id: i,
                            variant: "heading-xl/extrabold",
                            children: l.Z.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING
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
                            children: l.Z.Messages.OKAY
                        })
                    })]
                }))
            }
        }
    }
]);