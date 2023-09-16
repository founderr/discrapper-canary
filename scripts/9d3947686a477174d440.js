"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [53172], {
        176785: (n, e, a) => {
            a.d(e, {
                Z: () => x
            });
            var t = a(785893),
                i = (a(667294), a(294184)),
                l = a.n(i),
                o = a(575945),
                s = a(882723),
                r = a(74535),
                c = a(265688),
                u = a(600993),
                d = a(497842),
                p = a(652591),
                m = a(2590),
                N = a(91019),
                C = a.n(N);
            const x = function(n) {
                var e = n.disabled,
                    a = void 0 !== e && e,
                    i = n.type,
                    N = n.className,
                    x = n.innerClassName,
                    v = n.onConnect,
                    h = (0, r.ZP)(),
                    f = c.Z.get((0, u.rR)(i));
                return (0, t.jsx)(s.Tooltip, {
                    text: f.name,
                    children: function(n) {
                        var e = n.onMouseEnter,
                            r = n.onMouseLeave;
                        return (0, t.jsx)("div", {
                            className: l()(C().wrapper, N),
                            children: (0, t.jsx)(s.FocusRing, {
                                children: (0, t.jsx)("button", {
                                    onMouseEnter: e,
                                    onMouseLeave: r,
                                    className: l()(C().inner, x),
                                    type: "button",
                                    disabled: a,
                                    style: {
                                        backgroundImage: "url('".concat((0, o.wj)(h) ? f.icon.darkSVG : f.icon.lightSVG, "')")
                                    },
                                    onClick: null != v ? v : function() {
                                        return function(n) {
                                            var e = c.Z.get(n);
                                            (0, d.Z)(e.type, "Friends List");
                                            p.default.track(m.rMx.ACCOUNT_LINK_STEP, {
                                                previous_step: "desktop connections",
                                                current_step: "desktop oauth",
                                                platform_type: e.type
                                            })
                                        }(i)
                                    },
                                    "aria-label": f.name
                                })
                            })
                        })
                    }
                })
            }
        },
        53172: (n, e, a) => {
            a.r(e);
            a.d(e, {
                default: () => v
            });
            var t = a(785893),
                i = (a(667294), a(294184)),
                l = a.n(i),
                o = a(441143),
                s = a.n(o),
                r = a(882723),
                c = a(385028),
                u = a(176785),
                d = a(600993),
                p = a(473708),
                m = a(539220),
                N = a.n(m);

            function C(n) {
                var e = n.onComplete,
                    a = n.excludedPlatformTypes,
                    i = (0, d.fq)();
                return (0, t.jsx)("div", {
                    className: N().connectionsContainer,
                    children: i.filter((function(n) {
                        return !(null == a ? void 0 : a.has(n.type))
                    })).map((function(n) {
                        return (0, t.jsx)(u.Z, {
                            type: n.type,
                            className: N().accountBtn,
                            innerClassName: N().accountBtnInner,
                            onConnect: function() {
                                return e(n.type)
                            }
                        }, n.type)
                    }))
                })
            }

            function x(n) {
                var e = n.integrations,
                    a = n.onCompleteApplication;
                if (null == e || null == a) return null;
                var i = e.filter((function(n) {
                    var e;
                    return null != (null === (e = n.application) || void 0 === e ? void 0 : e.roleConnectionsVerificationUrl)
                }));
                return 0 === i.length ? null : (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(r.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: N().applicationsHeader,
                        children: p.Z.Messages.APPS
                    }), (0, t.jsx)("div", {
                        className: N().applicationsContainer,
                        children: i.map((function(n) {
                            var e = n.application;
                            s()(null != e, "application is null");
                            var i = null == e ? void 0 : e.bot;
                            s()(null != i, "bot is null");
                            return (0, t.jsxs)(r.Clickable, {
                                onClick: function() {
                                    return a(e.id)
                                },
                                className: N().application,
                                children: [(0, t.jsx)(c.Z, {
                                    user: i,
                                    className: N().applicationIcon
                                }), (0, t.jsxs)("div", {
                                    className: N().applicationNameContainer,
                                    children: [(0, t.jsx)(r.Heading, {
                                        variant: "heading-sm/semibold",
                                        className: N().applicationNameText,
                                        children: e.name
                                    }), null != e.description && e.description.length > 0 ? (0, t.jsx)(r.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-secondary",
                                        className: N().applicationNameText,
                                        children: e.description
                                    }) : null]
                                })]
                            }, n.id)
                        }))
                    })]
                })
            }

            function v(n) {
                var e = n.transitionState,
                    a = n.onComplete,
                    i = n.onClose,
                    o = n.excludedPlatformTypes,
                    s = n.integrations,
                    c = n.onCompleteApplication;
                return (0, t.jsx)(r.ModalRoot, {
                    "aria-label": p.Z.Messages.CONNECTIONS_ADD_CONNECTIONS,
                    size: r.ModalSize.SMALL,
                    transitionState: e,
                    className: l()(N().container),
                    fullscreenOnMobile: !1,
                    children: (0, t.jsxs)(r.ModalContent, {
                        children: [(0, t.jsxs)("div", {
                            className: N().header,
                            children: [(0, t.jsx)(r.Heading, {
                                className: N().title,
                                variant: "heading-md/bold",
                                children: p.Z.Messages.CONNECTIONS_ADD_CONNECTIONS
                            }), (0, t.jsx)(r.ModalCloseButton, {
                                className: N().closeButton,
                                onClick: i
                            })]
                        }), (0, t.jsx)(C, {
                            onComplete: function(n) {
                                a(n);
                                i()
                            },
                            excludedPlatformTypes: o
                        }), (0, t.jsx)(x, {
                            integrations: s,
                            onCompleteApplication: null != c ? function(n) {
                                null == c || c(n);
                                i()
                            } : void 0
                        })]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=9d3947686a477174d440.js.map