(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [18407], {
        130910: (t, s, e) => {
            t.exports = e.p + "3ce20f03ff35478349612e0c51869921.svg"
        },
        318407: (t, s, e) => {
            "use strict";
            e.r(s);
            e.d(s, {
                default: () => c
            });
            var o = e(785893),
                n = (e(667294), e(70418)),
                a = e(320142),
                i = e(443812),
                l = e(473708),
                r = e(868338),
                N = e.n(r);

            function c(t) {
                var s = t.url,
                    r = t.onClose,
                    c = t.transitionState,
                    d = (0, i.Dt)();
                return (0, o.jsxs)(n.ModalRoot, {
                    transitionState: c,
                    "aria-labelledby": d,
                    children: [(0, o.jsx)("img", {
                        className: N().art,
                        src: e(130910),
                        alt: ""
                    }), (0, o.jsx)(n.ModalContent, {
                        children: (0, o.jsxs)("div", {
                            className: N().modalContent,
                            children: [(0, o.jsx)(n.Heading, {
                                id: d,
                                variant: "heading-lg/semibold",
                                className: N().title,
                                children: l.Z.Messages.LINK_NOT_DISCORD_WARNING_TITLE
                            }), (0, o.jsx)(n.Text, {
                                variant: "text-md/normal",
                                className: N().body,
                                children: l.Z.Messages.LINK_NOT_DISCORD_WARNING_BODY.format({
                                    url: s
                                })
                            })]
                        })
                    }), (0, o.jsxs)(n.ModalFooter, {
                        children: [(0, o.jsx)(n.Button, {
                            type: "button",
                            size: n.Button.Sizes.MEDIUM,
                            color: n.Button.Colors.BRAND,
                            onClick: r,
                            children: l.Z.Messages.LINK_NOT_DISCORD_WARNING_CANCEL
                        }), (0, o.jsx)(n.Button, {
                            type: "button",
                            size: n.Button.Sizes.MEDIUM,
                            color: n.Button.Colors.TRANSPARENT,
                            look: n.Button.Looks.LINK,
                            onClick: function() {
                                (0, a.Z)(s, !0)
                            },
                            children: l.Z.Messages.LINK_NOT_DISCORD_WARNING_CONTINUE
                        })]
                    })]
                })
            }
        }
    }
]);