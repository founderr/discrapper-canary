(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [20188], {
        823236: (e, t, n) => {
            e.exports = n.p + "0a9000ab691699d4fa0344931b1bf034.svg"
        },
        720188: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => w
            });
            var r = n(785893),
                o = n(667294),
                a = n(441143),
                i = n.n(a),
                l = n(571657),
                s = n(202351),
                c = n(304548),
                u = n(105783),
                d = n(517672),
                f = n(634233),
                h = n(520436),
                v = n(409125),
                m = n(473708),
                p = n(154695),
                O = n.n(p),
                b = n(823236),
                y = n.n(b);

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function C(e, t, n, r, o, a, i) {
                try {
                    var l = e[a](i),
                        s = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function N(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j = function(e, t) {
                var n, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                (r = 0,
                                    o) && (a = [2 & a[0], o.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1];
                                            o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function x(e) {
                var t = e.name,
                    n = e.subText;
                return (0, r.jsxs)("div", {
                    className: O().deviceItemName,
                    children: [(0, r.jsx)(f.Z, {
                        className: O().deviceItemIcon
                    }), (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(c.Text, {
                            variant: "text-md/semibold",
                            color: "interactive-active",
                            children: t
                        }), n]
                    })]
                })
            }

            function S(e) {
                var t = e.devices,
                    n = e.onFinished,
                    o = e.selectedDeviceId,
                    a = e.onSelectDeviceId,
                    i = e.transferring,
                    l = t.map((function(e) {
                        var t = e.id,
                            n = e.name,
                            o = e.platform;
                        return {
                            value: t,
                            name: (0, r.jsx)(x, {
                                name: n,
                                platform: o
                            })
                        }
                    }));
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(c.ModalHeader, {
                        separator: !1,
                        className: O().modalHeaderContainer,
                        children: [(0, r.jsx)(c.Heading, {
                            className: O().modalHeader,
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: m.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_HEADER
                        }), (0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: m.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_SUBHEADING
                        })]
                    }), (0, r.jsxs)(c.ModalContent, {
                        className: O().content,
                        children: [(0, r.jsx)(c.RadioGroup, {
                            radioPosition: "right",
                            radioItemClassName: O().deviceItem,
                            size: c.RadioGroup.Sizes.NOT_SET,
                            value: o,
                            options: l,
                            onChange: function(e) {
                                var t = e.value;
                                return a(t)
                            }
                        }), (0, r.jsx)(d.Z, {
                            children: m.Z.Messages.PLAYSTATION_DEVICES_INFOBOX
                        })]
                    }), (0, r.jsx)(c.ModalFooter, {
                        children: (0, r.jsx)(c.Button, {
                            disabled: null == o,
                            submitting: i,
                            onClick: n,
                            children: m.Z.Messages.CONSOLE_TRANSFER_VOICE
                        })
                    })]
                })
            }

            function I() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(c.ModalHeader, {
                        separator: !1,
                        className: O().modalHeaderContainer,
                        children: [(0, r.jsx)(c.Heading, {
                            className: O().modalHeader,
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: m.Z.Messages.PLAYSTATION_DEVICES_NOT_FOUND
                        }), (0, r.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: m.Z.Messages.PLAYSTATION_DEVICES_NOT_FOUND_BODY
                        })]
                    }), (0, r.jsx)(c.ModalContent, {
                        className: O().emptyArt,
                        children: (0, r.jsx)("img", {
                            src: y(),
                            width: "189",
                            height: "177",
                            alt: ""
                        })
                    })]
                })
            }

            function w(e) {
                var t, n = e.channel,
                    a = e.platform,
                    d = e.transitionState,
                    f = e.onClose,
                    p = (0, s.e7)([v.Z], (function() {
                        return v.Z.getDevicesForPlatform(a)
                    }), [a]),
                    b = (0, s.e7)([v.Z], (function() {
                        return v.Z.getLastSelectedDeviceByPlatform(a)
                    })),
                    y = o.useMemo((function() {
                        return Object.values(p)
                    }), [p]),
                    g = (0, s.e7)([v.Z], (function() {
                        return v.Z.getFetchingDevices(a)
                    })),
                    x = (0, s.e7)([v.Z], (function() {
                        var e;
                        return null === (e = v.Z.getAwaitingRemoteSessionInfo()) || void 0 === e ? void 0 : e.deviceId
                    })),
                    w = N(o.useState(!1), 2),
                    E = w[0],
                    _ = w[1],
                    A = N(o.useState((function() {
                        var e;
                        return null !== (t = null === (e = p[null != x ? x : ""]) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : null
                    })), 2),
                    D = A[0],
                    R = A[1];
                o.useEffect((function() {
                    h.LO(a)
                }), [a]);
                o.useEffect((function() {
                    1 === y.length ? R(y[0].id) : null != b && R(b)
                }), [y, b]);
                var Z, M, P, T = (M = (Z = function() {
                    var e;
                    return j(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                e = p[null != D ? D : ""];
                                i()(null != e, "Cannot transfer without selected device");
                                t.label = 1;
                            case 1:
                                t.trys.push([1, 3, , 4]);
                                _(!0);
                                return [4, h.sh(a, e.id, n)];
                            case 2:
                                t.sent();
                                f();
                                return [3, 4];
                            case 3:
                                t.sent();
                                _(!1);
                                u.Z.show({
                                    title: m.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR,
                                    body: m.Z.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
                                        deviceName: e.name
                                    })
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var o = Z.apply(e, t);

                        function a(e) {
                            C(o, n, r, a, i, "next", e)
                        }

                        function i(e) {
                            C(o, n, r, a, i, "throw", e)
                        }
                        a(void 0)
                    }))
                }), function() {
                    return M.apply(this, arguments)
                });
                P = g ? (0, r.jsx)("div", {
                    className: O().spinnerContainer,
                    children: (0, r.jsx)(c.Spinner, {})
                }) : 0 === y.length ? (0, r.jsx)(I, {}) : (0, r.jsx)(S, {
                    devices: y,
                    onFinished: T,
                    selectedDeviceId: D,
                    transferring: E || null != x,
                    onSelectDeviceId: function(e) {
                        R(e);
                        (0, h.bp)(a, e)
                    }
                });
                return (0, r.jsxs)(c.ModalRoot, {
                    size: c.ModalSize.DYNAMIC,
                    className: O().modalRoot,
                    transitionState: d,
                    impressionName: l.zs.GAME_CONSOLE_DEVICE_LIST,
                    children: [P, (0, r.jsx)(c.ModalCloseButton, {
                        className: O().closeButton,
                        onClick: f
                    })]
                })
            }
        },
        517672: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => r,
                Z: () => O
            });
            var r, o, a = n(785893),
                i = (n(667294), n(294184)),
                l = n.n(i),
                s = n(304548),
                c = n(895724),
                u = n(818417),
                d = n(445206),
                f = n.n(d);

            function h(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }! function(e) {
                e.INFO = "info";
                e.WARNING = "warning"
            }(r || (r = {}));
            var v, m = (h(o = {}, r.INFO, f().info), h(o, r.WARNING, f().warning), o),
                p = (h(v = {}, r.INFO, c.Z), h(v, r.WARNING, u.Z), v);

            function O(e) {
                var t = e.children,
                    n = e.className,
                    o = e.look,
                    i = void 0 === o ? r.INFO : o,
                    c = p[i];
                return (0,
                    a.jsxs)("div", {
                    className: l()(f().root, n, m[i]),
                    children: [(0, a.jsx)(c, {
                        className: f().icon
                    }), (0, a.jsx)(s.Text, {
                        className: f().text,
                        variant: "text-sm/medium",
                        color: "text-normal",
                        children: t
                    })]
                })
            }
        },
        634233: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n(785893),
                o = (n(667294), n(633878));

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function s(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    s = e.height,
                    c = void 0 === s ? 24 : s,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    h = l(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", i(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(h)), {
                    width: n,
                    height: c,
                    viewBox: "0 0 24 25",
                    children: [(0, r.jsx)("path", {
                        className: f,
                        fill: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.72934 2.36505C7.91813 1.79235 8.34289 1.84008 8.76766 1.8878C9.99478 2.03098 11.2219 2.2696 12.449 2.41277C13.1098 2.50822 13.3457 2.84229 13.3929 3.51044C13.4873 7.66249 13.4873 11.8145 13.9593 15.9189C14.0065 16.2529 14.1009 16.6824 13.6289 16.8256C11.7882 17.446 11.3635 19.1164 10.9859 20.739C10.4195 23.2685 10.4667 23.2685 8.01252 23.698C5.93587 24.032 5.93587 24.032 6.03026 21.9322C6.36064 15.5371 6.97419 9.18968 7.68214 2.84229C7.58775 2.69912 7.58775 2.55595 7.72934 2.36505Z",
                        "aria-hidden": !0
                    }), (0, r.jsx)("path", {
                        className: f,
                        fill: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M21 22.2862C21 22.4246 21 22.7474 20.9042 23.0703C20.8083 23.5316 20.4729 23.7622 19.9937 23.8545C19.4667 23.9006 19.1312 23.7161 19.0354 23.2548C18.7479 21.9633 17.7896 21.8249 16.5916 21.8249C15.3937 21.8249 14.2437 21.7788 13.9562 23.2548C13.8604 23.67 13.6208 23.9006 13.0937 23.8545C12.5666 23.8083 12.1354 23.5777 12.0874 23.0703C11.7999 21.3637 12.2312 19.7493 13.2374 18.3194C13.5729 17.8582 14.1958 17.7659 14.7229 17.9504C15.8729 18.2733 17.0229 18.2733 18.2208 17.9504C19.1792 17.6737 19.8021 18.181 20.1854 18.9652C20.7125 19.9338 21 20.9486 21 22.2862Z",
                        "aria-hidden": !0
                    }), (0, r.jsx)("path", {
                        className: f,
                        fill: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 2.14794C7 2.28884 7 2.47672 7 2.61763C4.78283 2.57066 3.89596 3.4161 3.9403 5.81153C4.02899 11.0721 4.20636 16.2856 4.29505 21.5462C4.29505 21.9689 4.42808 22.4386 4.11767 22.8613C3.80727 22.6265 3.89596 22.3447 3.89596 22.1098C3.85161 15.8629 3.67424 9.61603 3.05343 3.36913C2.9204 1.81915 2.9204 1.77218 4.47242 1.91309C5.31495 2.00703 6.15747 2.10097 7 2.14794Z",
                        "aria-hidden": !0
                    })]
                }))
            }
        }
    }
]);