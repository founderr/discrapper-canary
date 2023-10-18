(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [74709], {
        130910: (s, t, e) => {
            s.exports = e.p + "3ce20f03ff35478349612e0c51869921.svg"
        },
        674709: (s, t, e) => {
            "use strict";
            e.r(t);
            e.d(t, {
                default: () => d
            });
            var o = e(785893),
                n = (e(667294), e(70418)),
                a = e(320142),
                i = e(443812),
                l = e(473708),
                r = e(375778),
                c = e.n(r);

            function d(s) {
                var t = s.href,
                    r = s.onClose,
                    d = s.transitionState,
                    N = (0, i.Dt)();
                return (0, o.jsxs)(n.ModalRoot, {
                    transitionState: d,
                    "aria-labelledby": N,
                    children: [(0, o.jsx)("img", {
                        className: c().art,
                        src: e(130910),
                        alt: ""
                    }), (0, o.jsx)(n.ModalContent, {
                        children: (0, o.jsxs)("div", {
                            className: c().modalContent,
                            children: [(0, o.jsx)(n.Heading, {
                                id: N,
                                variant: "heading-lg/semibold",
                                className: c().title,
                                children: l.Z.Messages.SUSPICIOUS_DOWNLOAD_WARNING_TITLE
                            }), (0, o.jsx)(n.Text, {
                                variant: "text-md/normal",
                                className: c().body,
                                children: l.Z.Messages.SUSPICIOUS_DOWNLOAD_WARNING_BODY
                            })]
                        })
                    }), (0, o.jsxs)(n.ModalFooter, {
                        children: [(0, o.jsx)(n.Button, {
                            type: "button",
                            size: n.Button.Sizes.MEDIUM,
                            color: n.Button.Colors.BRAND,
                            onClick: r,
                            children: l.Z.Messages.SUSPICIOUS_DOWNLOAD_WARNING_CANCEL
                        }), (0, o.jsx)(n.Button, {
                            type: "button",
                            size: n.Button.Sizes.MEDIUM,
                            color: n.Button.Colors.TRANSPARENT,
                            look: n.Button.Looks.LINK,
                            onClick: function() {
                                r();
                                (0, a.Z)(t, !0)
                            },
                            children: l.Z.Messages.SUSPICIOUS_DOWNLOAD_WARNING_DOWNLOAD
                        })]
                    })]
                })
            }
        }
    }
]);