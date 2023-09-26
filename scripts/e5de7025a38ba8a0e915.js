(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [38092], {
        211086: (e, t, s) => {
            e.exports = s.p + "9a31e0f65d520cc12d7f42374d59a2d1.svg"
        },
        79033: (e, t, s) => {
            e.exports = s.p + "feaff2557c548146aad83669db695e0b.svg"
        },
        838092: (e, t, s) => {
            "use strict";
            s.r(t);
            s.d(t, {
                default: () => p
            });
            var a = s(785893),
                n = (s(667294), s(575945)),
                o = s(304548),
                r = s(74535),
                i = s(443812),
                l = s(473708),
                c = s(259367),
                d = s.n(c),
                u = s(211086),
                h = s.n(u),
                x = s(79033),
                m = s.n(x);

            function p(e) {
                var t = e.onClose,
                    s = e.transitionState,
                    c = (0, i.Dt)(),
                    u = (0, n.wj)((0, r.ZP)());
                return (0, a.jsxs)(o.ModalRoot, {
                    transitionState: s,
                    "aria-labelledby": c,
                    size: o.ModalSize.SMALL,
                    children: [(0, a.jsxs)(o.ModalContent, {
                        className: d().content,
                        children: [(0, a.jsx)(o.ModalCloseButton, {
                            className: d().closeButton,
                            onClick: t
                        }), (0, a.jsx)("img", {
                            className: d().image,
                            src: u ? h() : m(),
                            alt: ""
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-lg/semibold",
                            color: "header-primary",
                            className: d().title,
                            children: l.Z.Messages.GUILD_PRODUCT_NOT_AVAILABLE_TITLE
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: d().body,
                            children: l.Z.Messages.GUILD_PRODUCT_NOT_AVAILABLE_BODY
                        })]
                    }), (0, a.jsx)(o.ModalFooter, {
                        children: (0, a.jsx)(o.Button, {
                            className: d().button,
                            color: o.Button.Colors.BRAND,
                            onClick: t,
                            size: o.Button.Sizes.LARGE,
                            children: l.Z.Messages.OKAY
                        })
                    })]
                })
            }
        },
        443812: (e, t, s) => {
            "use strict";
            s.d(t, {
                hQ: () => r,
                Dt: () => i,
                FG: () => l
            });
            var a = s(873955),
                n = s.n(a),
                o = s(989824),
                r = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return n()(e)
                },
                i = function() {
                    return (0, o.Z)((function() {
                        return r()
                    }))
                },
                l = function(e) {
                    return (0, e.children)(i())
                }
        }
    }
]);