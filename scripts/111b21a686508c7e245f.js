(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [69489], {
        483683: (e, r, t) => {
            e.exports = t.p + "72db7a1fbe5d3c861fe63c26f634b5d2.svg"
        },
        63685: (e, r, t) => {
            e.exports = t.p + "a4e25b25c89b862150e6eeb520e67dd5.svg"
        },
        869489: (e, r, t) => {
            "use strict";
            t.r(r);
            t.d(r, {
                default: () => y
            });
            var n = t(785893),
                o = (t(667294), t(70418)),
                c = t(116404),
                l = t(443812),
                i = t(952097),
                s = t(771575),
                a = t(832642),
                u = t(473708),
                f = t(314142),
                O = t.n(f);

            function p(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function b(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function d(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const y = function(e) {
                var r = e.channel,
                    t = d(e, ["channel"]),
                    f = (0, l.Dt)();
                return (0, n.jsxs)(o.ConfirmModal, b(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            p(e, r, t[r])
                        }))
                    }
                    return e
                }({
                    confirmText: u.Z.Messages.END_STAGE,
                    cancelText: u.Z.Messages.CANCEL,
                    onConfirm: function() {
                        (0, s.NZ)(r);
                        c.default.disconnect()
                    },
                    confirmButtonColor: o.Button.Colors.RED,
                    bodyClassName: O().body
                }, t), {
                    children: [(0, n.jsx)(a.Z, {
                        className: O().headerIconContainer,
                        children: (0, n.jsx)("div", {
                            className: O().iconBackground,
                            children: (0, n.jsx)(i.Z, {
                                width: 40,
                                height: 40,
                                className: O().headerIcon
                            })
                        })
                    }), (0, n.jsx)(o.Heading, {
                        id: f,
                        variant: "heading-xl/semibold",
                        color: "header-primary",
                        className: O().title,
                        children: u.Z.Messages.END_EVENT_STAGE_CONFIRMATION_TITLE
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: O().subtitle,
                        children: u.Z.Messages.END_EVENT_STAGE_CONFIRMATION_SUBTITLE
                    })]
                }))
            }
        },
        832642: (e, r, t) => {
            "use strict";
            t.d(r, {
                Z: () => p
            });
            var n = t(785893),
                o = (t(667294), t(294184)),
                c = t.n(o),
                l = t(473708),
                i = t(300443),
                s = t.n(i),
                a = t(483683),
                u = t.n(a),
                f = t(63685),
                O = t.n(f);

            function p(e) {
                var r = e.className,
                    t = e.children;
                return (0, n.jsxs)("div", {
                    className: c()(s().container, r),
                    children: [(0, n.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: O(),
                        className: c()(s().sparkleIcon, s().sparkleBottom)
                    }), t, (0, n.jsx)("img", {
                        alt: l.Z.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u(),
                        className: c()(s().sparkleIcon, s().sparkleTop)
                    })]
                })
            }
        },
        952097: (e, r, t) => {
            "use strict";
            t.d(r, {
                Z: () => p
            });
            var n = t(785893),
                o = (t(667294), t(168075)),
                c = t(795308),
                l = t(633878);

            function i(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function s(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function u(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function f(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function O(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }
            const p = (0, o.hN)((function(e) {
                var r = e.width,
                    t = void 0 === r ? 40 : r,
                    o = e.height,
                    c = void 0 === o ? 40 : o,
                    i = e.color,
                    s = void 0 === i ? "currentColor" : i,
                    a = O(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", f(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            u(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(a)), {
                    width: t,
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
                var r = e.width,
                    t = void 0 === r ? 24 : r,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    O = void 0 === f ? c.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    d = a(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", s(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            i(e, r, t[r])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof O ? O : O.css,
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