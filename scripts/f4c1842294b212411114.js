"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [38092], {
        838092: (s, e, a) => {
            a.r(e);
            a.d(e, {
                default: () => A
            });
            var t = a(785893),
                o = (a(667294), a(575945)),
                l = a(70418),
                n = a(74535),
                r = a(443812),
                i = a(473708),
                c = a(853630),
                d = a.n(c),
                h = a(211086),
                u = a.n(h),
                m = a(79033),
                x = a.n(m);

            function A(s) {
                var e = s.onClose,
                    a = s.transitionState,
                    c = (0, r.Dt)(),
                    h = (0, o.wj)((0, n.ZP)());
                return (0, t.jsxs)(l.ModalRoot, {
                    transitionState: a,
                    "aria-labelledby": c,
                    size: l.ModalSize.SMALL,
                    children: [(0, t.jsxs)(l.ModalContent, {
                        className: d().content,
                        children: [(0, t.jsx)(l.ModalCloseButton, {
                            className: d().closeButton,
                            onClick: e
                        }), (0, t.jsx)("img", {
                            className: d().image,
                            src: h ? u() : x(),
                            alt: ""
                        }), (0, t.jsx)(l.Text, {
                            variant: "text-lg/semibold",
                            color: "header-primary",
                            className: d().title,
                            children: i.Z.Messages.GUILD_PRODUCT_NOT_AVAILABLE_TITLE
                        }), (0, t.jsx)(l.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: d().body,
                            children: i.Z.Messages.GUILD_PRODUCT_NOT_AVAILABLE_BODY
                        })]
                    }), (0, t.jsx)(l.ModalFooter, {
                        children: (0,
                            t.jsx)(l.Button, {
                            className: d().button,
                            color: l.Button.Colors.BRAND,
                            onClick: e,
                            size: l.Button.Sizes.LARGE,
                            children: i.Z.Messages.OKAY
                        })
                    })]
                })
            }
        }
    }
]);