"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [75600], {
        811276: (e, t, r) => {
            r.d(t, {
                Z: () => n
            });
            var n = "https://dis.gd/appeal"
        },
        75600: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => p
            });
            var n = r(785893),
                o = (r(667294), r(70418)),
                a = r(443812),
                s = r(811276),
                c = r(473708),
                l = r(629050),
                i = r.n(l);

            function d(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e, t) {
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
            const p = function(e) {
                var t = e.onClose,
                    r = (0, a.Dt)();
                return (0, n.jsxs)(o.ModalRoot, u(function(e) {
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
                    "aria-labelledby": r,
                    children: [(0, n.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: i().modalHeader,
                        children: [(0, n.jsx)(o.Heading, {
                            id: r,
                            variant: "heading-xl/extrabold",
                            children: c.Z.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING
                        }), (0, n.jsx)(o.ModalCloseButton, {
                            className: i().closeButton,
                            onClick: t
                        })]
                    }), (0, n.jsxs)(o.ModalContent, {
                        className: i().modalContent,
                        children: [(0, n.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: i().contentText,
                            children: c.Z.Messages.LIMITED_ACCESS_INFO_MODAL_DESCRIPTION
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: i().contentText,
                            children: c.Z.Messages.LIMITED_ACCESS_INFO_MODAL_APPEAL.format({
                                appealLink: s.Z
                            })
                        })]
                    }), (0, n.jsx)(o.ModalFooter, {
                        children: (0,
                            n.jsx)(o.Button, {
                            className: i().button,
                            size: o.Button.Sizes.MIN,
                            onClick: t,
                            children: c.Z.Messages.OKAY
                        })
                    })]
                }))
            }
        }
    }
]);