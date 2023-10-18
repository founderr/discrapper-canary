(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [20188], {
        823236: (e, n, r) => {
            e.exports = r.p + "0a9000ab691699d4fa0344931b1bf034.svg"
        },
        720188: (e, n, r) => {
            "use strict";
            r.r(n);
            r.d(n, {
                default: () => w
            });
            var t = r(785893),
                o = r(667294),
                i = r(441143),
                a = r.n(i),
                l = r(571657),
                s = r(202351),
                c = r(70418),
                u = r(105783),
                d = r(517672),
                f = r(634233),
                h = r(446564),
                v = r(409125),
                m = r(473708),
                p = r(154695),
                O = r.n(p),
                b = r(823236),
                y = r.n(b);

            function g(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function C(e, n, r, t, o, i, a) {
                try {
                    var l = e[i](a),
                        s = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? n(s) : Promise.resolve(s).then(t, o)
            }

            function N(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(a = (t = r.next()).done); a = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j = function(e, n) {
                var r, t, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, t && (o = 2 & i[0] ? t.return : i[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, i[1])).done) return o;
                                (t = 0,
                                    o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        t = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2];
                                            a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                i = n.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                t = 0
                            } finally {
                                r = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function x(e) {
                var n = e.name,
                    r = e.subText;
                return (0, t.jsxs)("div", {
                    className: O().deviceItemName,
                    children: [(0, t.jsx)(f.Z, {
                        className: O().deviceItemIcon
                    }), (0, t.jsxs)("div", {
                        children: [(0, t.jsx)(c.Text, {
                            variant: "text-md/semibold",
                            color: "interactive-active",
                            children: n
                        }), r]
                    })]
                })
            }

            function S(e) {
                var n = e.devices,
                    r = e.onFinished,
                    o = e.selectedDeviceId,
                    i = e.onSelectDeviceId,
                    a = e.transferring,
                    l = n.map((function(e) {
                        var n = e.id,
                            r = e.name,
                            o = e.platform;
                        return {
                            value: n,
                            name: (0, t.jsx)(x, {
                                name: r,
                                platform: o
                            })
                        }
                    }));
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)(c.ModalHeader, {
                        separator: !1,
                        className: O().modalHeaderContainer,
                        children: [(0, t.jsx)(c.Heading, {
                            className: O().modalHeader,
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: m.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_HEADER
                        }), (0, t.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: m.Z.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE_MODAL_SUBHEADING
                        })]
                    }), (0, t.jsxs)(c.ModalContent, {
                        className: O().content,
                        children: [(0, t.jsx)(c.RadioGroup, {
                            radioPosition: "right",
                            radioItemClassName: O().deviceItem,
                            size: c.RadioGroup.Sizes.NOT_SET,
                            value: o,
                            options: l,
                            onChange: function(e) {
                                var n = e.value;
                                return i(n)
                            }
                        }), (0, t.jsx)(d.Z, {
                            children: m.Z.Messages.PLAYSTATION_DEVICES_INFOBOX
                        })]
                    }), (0, t.jsx)(c.ModalFooter, {
                        children: (0, t.jsx)(c.Button, {
                            disabled: null == o,
                            submitting: a,
                            onClick: r,
                            children: m.Z.Messages.CONSOLE_TRANSFER_VOICE
                        })
                    })]
                })
            }

            function I() {
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)(c.ModalHeader, {
                        separator: !1,
                        className: O().modalHeaderContainer,
                        children: [(0, t.jsx)(c.Heading, {
                            className: O().modalHeader,
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: m.Z.Messages.PLAYSTATION_DEVICES_NOT_FOUND
                        }), (0, t.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: m.Z.Messages.PLAYSTATION_DEVICES_NOT_FOUND_BODY
                        })]
                    }), (0, t.jsx)(c.ModalContent, {
                        className: O().emptyArt,
                        children: (0, t.jsx)("img", {
                            src: y(),
                            width: "189",
                            height: "177",
                            alt: ""
                        })
                    })]
                })
            }

            function w(e) {
                var n, r = e.channel,
                    i = e.platform,
                    d = e.transitionState,
                    f = e.onClose,
                    p = (0, s.e7)([v.Z], (function() {
                        return v.Z.getDevicesForPlatform(i)
                    }), [i]),
                    b = (0, s.e7)([v.Z], (function() {
                        return v.Z.getLastSelectedDeviceByPlatform(i)
                    })),
                    y = o.useMemo((function() {
                        return Object.values(p)
                    }), [p]),
                    g = (0, s.e7)([v.Z], (function() {
                        return v.Z.getFetchingDevices(i)
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
                        return null !== (n = null === (e = p[null != x ? x : ""]) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : null
                    })), 2),
                    D = A[0],
                    R = A[1];
                o.useEffect((function() {
                    h.LO(i)
                }), [i]);
                o.useEffect((function() {
                    1 === y.length ? R(y[0].id) : null != b && R(b)
                }), [y, b]);
                var Z, M, P, T = (M = (Z = function() {
                    var e;
                    return j(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                e = p[null != D ? D : ""];
                                a()(null != e, "Cannot transfer without selected device");
                                n.label = 1;
                            case 1:
                                n.trys.push([1, 3, , 4]);
                                _(!0);
                                return [4, h.sh(i, e.id, r)];
                            case 2:
                                n.sent();
                                f();
                                return [3, 4];
                            case 3:
                                n.sent();
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
                        n = arguments;
                    return new Promise((function(r, t) {
                        var o = Z.apply(e, n);

                        function i(e) {
                            C(o, r, t, i, a, "next", e)
                        }

                        function a(e) {
                            C(o, r, t, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function() {
                    return M.apply(this, arguments)
                });
                P = g ? (0, t.jsx)("div", {
                    className: O().spinnerContainer,
                    children: (0, t.jsx)(c.Spinner, {})
                }) : 0 === y.length ? (0, t.jsx)(I, {}) : (0, t.jsx)(S, {
                    devices: y,
                    onFinished: T,
                    selectedDeviceId: D,
                    transferring: E || null != x,
                    onSelectDeviceId: function(e) {
                        R(e);
                        (0, h.bp)(i, e)
                    }
                });
                return (0, t.jsxs)(c.ModalRoot, {
                    size: c.ModalSize.DYNAMIC,
                    className: O().modalRoot,
                    transitionState: d,
                    impression: {
                        impressionName: l.zs.GAME_CONSOLE_DEVICE_LIST
                    },
                    children: [P, (0, t.jsx)(c.ModalCloseButton, {
                        className: O().closeButton,
                        onClick: f
                    })]
                })
            }
        },
        517672: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => O,
                z: () => t
            });
            var t, o, i = r(785893),
                a = (r(667294), r(294184)),
                l = r.n(a),
                s = r(70418),
                c = r(895724),
                u = r(818417),
                d = r(445206),
                f = r.n(d);

            function h(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }! function(e) {
                e.INFO = "info";
                e.WARNING = "warning"
            }(t || (t = {}));
            var v, m = (h(o = {}, t.INFO, f().info), h(o, t.WARNING, f().warning), o),
                p = (h(v = {}, t.INFO, c.Z), h(v, t.WARNING, u.Z), v);

            function O(e) {
                var n = e.children,
                    r = e.className,
                    o = e.look,
                    a = void 0 === o ? t.INFO : o,
                    c = p[a];
                return (0, i.jsxs)("div", {
                    className: l()(f().root, r, m[a]),
                    children: [(0, i.jsx)(c, {
                        className: f().icon
                    }), (0, i.jsx)(s.Text, {
                        className: f().text,
                        variant: "text-sm/medium",
                        color: "text-normal",
                        children: n
                    })]
                })
            }
        },
        634233: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => s
            });
            var t = r(785893),
                o = (r(667294), r(633878));

            function i(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function a(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }

            function l(e, n) {
                if (null == e) return {};
                var r, t, o = function(e, n) {
                    if (null == e) return {};
                    var r, t, o = {},
                        i = Object.keys(e);
                    for (t = 0; t < i.length; t++) {
                        r = i[t];
                        n.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < i.length; t++) {
                        r = i[t];
                        n.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function s(e) {
                var n = e.width,
                    r = void 0 === n ? 24 : n,
                    s = e.height,
                    c = void 0 === s ? 24 : s,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.foreground,
                    h = l(e, ["width", "height", "color", "foreground"]);
                return (0, t.jsxs)("svg", a(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        t.forEach((function(n) {
                            i(e, n, r[n])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(h)), {
                    width: r,
                    height: c,
                    viewBox: "0 0 24 25",
                    children: [(0, t.jsx)("path", {
                        className: f,
                        fill: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.72934 2.36505C7.91813 1.79235 8.34289 1.84008 8.76766 1.8878C9.99478 2.03098 11.2219 2.2696 12.449 2.41277C13.1098 2.50822 13.3457 2.84229 13.3929 3.51044C13.4873 7.66249 13.4873 11.8145 13.9593 15.9189C14.0065 16.2529 14.1009 16.6824 13.6289 16.8256C11.7882 17.446 11.3635 19.1164 10.9859 20.739C10.4195 23.2685 10.4667 23.2685 8.01252 23.698C5.93587 24.032 5.93587 24.032 6.03026 21.9322C6.36064 15.5371 6.97419 9.18968 7.68214 2.84229C7.58775 2.69912 7.58775 2.55595 7.72934 2.36505Z",
                        "aria-hidden": !0
                    }), (0, t.jsx)("path", {
                        className: f,
                        fill: d,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M21 22.2862C21 22.4246 21 22.7474 20.9042 23.0703C20.8083 23.5316 20.4729 23.7622 19.9937 23.8545C19.4667 23.9006 19.1312 23.7161 19.0354 23.2548C18.7479 21.9633 17.7896 21.8249 16.5916 21.8249C15.3937 21.8249 14.2437 21.7788 13.9562 23.2548C13.8604 23.67 13.6208 23.9006 13.0937 23.8545C12.5666 23.8083 12.1354 23.5777 12.0874 23.0703C11.7999 21.3637 12.2312 19.7493 13.2374 18.3194C13.5729 17.8582 14.1958 17.7659 14.7229 17.9504C15.8729 18.2733 17.0229 18.2733 18.2208 17.9504C19.1792 17.6737 19.8021 18.181 20.1854 18.9652C20.7125 19.9338 21 20.9486 21 22.2862Z",
                        "aria-hidden": !0
                    }), (0, t.jsx)("path", {
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