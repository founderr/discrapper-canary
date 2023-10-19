"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [36759], {
        436759: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => b
            });
            var o = n(785893),
                s = n(667294),
                a = n(70418),
                l = n(320142),
                r = n(319086),
                i = n(716118),
                d = n(473708),
                u = n(706469),
                c = n.n(u),
                p = [{
                    preBold: "That's pretty...",
                    bold: "fly!"
                }, {
                    preBold: "On Point will make sure to",
                    bold: " tick ",
                    postBold: "a look at it!"
                }, {
                    preBold: "You're...un",
                    bold: "bee ",
                    postBold: "lievable!"
                }];

            function h(t) {
                var e = t.punConfig;
                return (0, o.jsxs)(o.Fragment, {
                    children: [e.preBold, (0, o.jsx)("b", {
                        children: (0, o.jsx)("i", {
                            children: e.bold
                        })
                    }), e.postBold]
                })
            }

            function b(t) {
                var e = t.transitionState,
                    n = t.onClose,
                    u = t.asanaTask;
                s.useEffect((function() {
                    (0, i.GN)("success", .1)
                }), []);
                var b = s.useRef(p[Math.floor(Math.random() * p.length)]).current;
                return (0, o.jsx)(a.ModalRoot, {
                    className: c().bugReporterSubmitModalRoot,
                    transitionState: e,
                    "aria-label": d.Z.Messages.SUBMIT_BUG,
                    children: (0, o.jsxs)(a.ModalContent, {
                        style: {
                            overflow: "hidden",
                            paddingRight: "0px"
                        },
                        className: c().modalContent,
                        paddingFix: !1,
                        children: [(0, o.jsx)(a.ModalCloseButton, {
                            onClick: function() {
                                null == n || n()
                            },
                            className: c().closeButton
                        }), (0, o.jsxs)(a.Text, {
                            className: c().submitText,
                            variant: "text-sm/normal",
                            children: ["Thanks for submitting a ", (0, o.jsx)(r.Z, {
                                onClick: function() {
                                    return (0, l.Z)(u.permalink_url)
                                },
                                children: "bug"
                            }), "!", (0, o.jsx)("br", {}), (0, o.jsx)(h, {
                                punConfig: b
                            })]
                        })]
                    })
                })
            }
        }
    }
]);