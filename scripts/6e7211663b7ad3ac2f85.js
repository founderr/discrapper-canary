(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [94055], {
        483683: (e, t, r) => {
            e.exports = r.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, t, r) => {
            e.exports = r.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        194055: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                default: () => f
            });
            var n = r(785893),
                o = (r(667294), r(70418)),
                c = r(116404),
                l = r(443812),
                i = r(952097),
                s = r(771575),
                a = r(832642),
                u = r(473708),
                d = r(949345),
                p = r.n(d);

            function f(e) {
                var t = e.channel,
                    r = e.transitionState,
                    d = e.onClose,
                    f = function() {
                        c.default.disconnect();
                        d()
                    },
                    b = (0, l.Dt)();
                return (0, n.jsxs)(o.ModalRoot, {
                    transitionState: r,
                    "aria-labelledby": b,
                    children: [(0, n.jsxs)(o.ModalContent, {
                        className: p().content,
                        children: [(0, n.jsx)(a.Z, {
                            children: (0, n.jsx)("div", {
                                className: p().iconBackground,
                                children: (0, n.jsx)(i.Z, {
                                    width: 40,
                                    height: 40,
                                    className: p().headerIcon
                                })
                            })
                        }), (0, n.jsx)(o.Heading, {
                            id: b,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: p().title,
                            children: u.Z.Messages.EXPLICIT_END_STAGE_TITLE
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: p().subtitle,
                            children: u.Z.Messages.EXPLICIT_END_STAGE_SUBTITLE
                        })]
                    }), (0, n.jsxs)(o.ModalFooter, {
                        children: [(0, n.jsx)(o.Button, {
                            color: o.Button.Colors.RED,
                            onClick: function() {
                                (0, s.NZ)(t);
                                f()
                            },
                            children: u.Z.Messages.EXPLICIT_END_STAGE_CONFIRM
                        }), (0, n.jsx)(o.Button, {
                            color: o.Button.Colors.PRIMARY,
                            className: p().cancelButton,
                            onClick: f,
                            children: u.Z.Messages.EXPLICIT_END_STAGE_CANCEL
                        })]
                    })]
                })
            }
        },
        832642: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => f
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                c = r.n(o),
                l = r(473708),
                i = r(300443),
                s = r.n(i),
                a = r(483683),
                u = r.n(a),
                d = r(63685),
                p = r.n(d);

            function f(e) {
                var t = e.className,
                    r = e.children;
                return (0, n.jsxs)("div", {
                    className: c()(s().container, t),
                    children: [(0, n.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: p(),
                        className: c()(s().sparkleIcon, s().sparkleBottom)
                    }), r, (0, n.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u(),
                        className: c()(s().sparkleIcon, s().sparkleTop)
                    })]
                })
            }
        },
        952097: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => f
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                c = r(795308),
                l = r(633878);

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function s(e, t) {
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

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function d(e, t) {
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

            function p(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        r = c[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const f = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 40 : t,
                    o = e.height,
                    c = void 0 === o ? 40 : o,
                    i = e.color,
                    s = void 0 === i ? "currentColor" : i,
                    a = p(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", d(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(a)), {
                    width: r,
                    height: c,
                    viewBox: "0 0 40 40",
                    fill: "none",
                    children: [(0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M37.581 26.6667L40 29.0857L35.7524 33.3333L40 37.581L37.581 40L33.3334 35.7524L29.0857 40L26.6667 37.581L30.9143 33.3333L26.6667 29.0857L29.0857 26.6667L33.3334 30.9143L37.581 26.6667Z",
                        fill: s
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M23.3294 21.5042C22.1286 22.3692 21.1773 23.5589 20.6041 24.9448C20.4081 24.981 20.2062 25 20 25C18.1667 25 16.6667 23.5 16.6667 21.6667C16.6667 19.8333 18.1667 18.3333 20 18.3333C21.7789 18.3333 23.244 19.7456 23.3294 21.5042ZM28.1664 20C27.3936 16.1977 24.0293 13.3333 20 13.3333C15.4 13.3333 11.6667 17.0667 11.6667 21.6667C11.6667 23.1833 12.1 24.5833 12.8167 25.8167L10.6334 27.0833C9.70002 25.4833 9.16669 23.6333 9.16669 21.6667C9.16669 15.7 14.0334 10.8333 20 10.8333C25.4001 10.8333 29.8992 14.8197 30.7049 20H28.1664ZM35.7468 20C34.915 12.0346 28.1871 5.83333 20 5.83333C11.25 5.83333 4.16669 12.9167 4.16669 21.6667C4.16669 24.55 4.95002 27.25 6.28335 29.5667L4.13335 30.8167C2.58335 28.1333 1.66669 25 1.66669 21.6667C1.66669 11.55 9.88335 3.33333 20 3.33333C29.5549 3.33333 37.415 10.6628 38.2584 20H35.7468ZM20.0154 27.5C20.0052 27.6654 20 27.8321 20 28V33.3333H14.1667V32.5C14.1667 29.6667 16.5667 27.5 20 27.5C20.0051 27.5 20.0103 27.5 20.0154 27.5Z",
                        fill: s
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    d = e.color,
                    p = void 0 === d ? c.Z.colors.INTERACTIVE_NORMAL : d,
                    f = e.colorClass,
                    b = void 0 === f ? "" : f,
                    O = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", s(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(O)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M22.335 13.019c.317.035.637-.169.652-.487.009-.176.013-.354.013-.532 0-6.075-4.925-11-11-11S1 5.925 1 12c0 2.3.706 4.436 1.914 6.202.339.496 1.045.51 1.452.068l.02-.02c.334-.364.349-.914.078-1.328a9 9 0 1 1 16.529-4.561c-.015.38.368.683.746.65.198-.017.398-.014.596.008Zm-9.742 3.01c.238.023.408.227.447.463.1.597.379 1.17.839 1.63l.525.524a.5.5 0 0 1 0 .708l-.525.525a2.994 2.994 0 0 0-.86 2.456c.035.317-.169.637-.487.652a10.955 10.955 0 0 1-5.393-1.117c-.689-.34-1.06-1.115-.808-1.84a6.003 6.003 0 0 1 6.263-4.001Zm.536-1.249a3 3 0 1 1-2.259-5.56 3 3 0 0 1 2.26 5.56Zm5.66-1.068c-.076.301-.448.387-.668.167a2.995 2.995 0 0 0-.814-.58.62.62 0 0 1-.351-.63 5 5 0 1 0-9.564 1.274c.174.413.136.901-.168 1.23l-.054.06c-.428.463-1.176.42-1.454-.145a7 7 0 1 1 13.073-1.376Zm-2.082 1.58a1 1 0 0 0-1.414 1.415L17.586 19l-2.293 2.293a1 1 0 0 0 1.414 1.414L19 20.414l2.293 2.293a1 1 0 0 0 1.414-1.414L20.414 19l2.293-2.293a1 1 0 0 0-1.414-1.414L19 17.586l-2.293-2.293Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        }
    }
]);