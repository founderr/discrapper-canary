(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [94541], {
        727157: (e, t, r) => {
            e.exports = r.p + "543e3b4a61955716f951463b7cd1a18a.png"
        },
        757942: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => n
            });
            var n;
            ! function(e) {
                e.LANDING = "landing";
                e.PRE_CONNECT = "pre-connect";
                e.PRE_CONNECT_WAITING = "pre-connect-waiting";
                e.DISCORD_CONSENT = "discord-consent";
                e.SUCCESS = "success";
                e.ERROR = "error"
            }(n || (n = {}))
        },
        959153: (e, t, r) => {
            "use strict";
            r.d(t, {
                h: () => v
            });
            var n = r(785893),
                a = r(667294),
                o = r(441143),
                l = r.n(o),
                s = r(70418),
                i = r(579344),
                c = r(296602),
                u = r(933227),
                d = r(107364),
                h = r(473708),
                f = r(20476),
                m = r.n(f);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function x(e, t, r, n, a, o, l) {
                try {
                    var s = e[o](l),
                        i = s.value
                } catch (e) {
                    r(e);
                    return
                }
                s.done ? t(i) : Promise.resolve(i).then(n, a)
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, o = [],
                            l = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var C = function(e, t) {
                    var r, n, a, o, l = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (r = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
                                    (n = 0, a) && (o = [2 & o[0], a.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            n = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = l.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < a[1]) {
                                                l.label = a[1];
                                                a = o;
                                                break
                                            }
                                            if (a && l.label < a[2]) {
                                                l.label = a[2];
                                                l.ops.push(o);
                                                break
                                            }
                                            a[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, l)
                                } catch (e) {
                                    o = [6, e];
                                    n = 0
                                } finally {
                                    r = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                N = new c.Z("TwoWayLinkDiscordConsentWeb");

            function v(e) {
                var t, r, o = e.platformType,
                    c = e.clientId,
                    f = e.scopes,
                    p = e.authToken,
                    v = e.onContinue,
                    y = e.onError,
                    g = e.onClose,
                    j = e.redirectUri,
                    E = b(a.useState(!1), 2),
                    T = E[0],
                    k = E[1],
                    A = a.useCallback((r = (t = function(e) {
                        var t, r, n, a, l;
                        return C(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    t = e.location;
                                    r = p.callbackCode, n = p.callbackState;
                                    s.label = 1;
                                case 1:
                                    s.trys.push([1, 3, , 4]);
                                    return [4, i.Z.completeTwoWayLink(o, t, r, n)];
                                case 2:
                                    a = s.sent();
                                    return [3, 4];
                                case 3:
                                    l = s.sent();
                                    N.error("".concat(o, " link error:"), l);
                                    return [3, 4];
                                case 4:
                                    null != a ? v() : y();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var e = this,
                            r = arguments;
                        return new Promise((function(n, a) {
                            var o = t.apply(e, r);

                            function l(e) {
                                x(o, n, a, l, s, "next", e)
                            }

                            function s(e) {
                                x(o, n, a, l, s, "throw", e)
                            }
                            l(void 0)
                        }))
                    }), function(e) {
                        return r.apply(this, arguments)
                    }), [o, p, v, y]),
                    O = (0, u.useOAuth2AuthorizeForm)({
                        clientId: c,
                        scopes: f,
                        responseType: "code",
                        callback: A,
                        isTrustedName: !0,
                        isEmbeddedFlow: !0,
                        redirectUri: j
                    }),
                    I = O.header,
                    w = O.body,
                    R = O.appDetails,
                    S = O.sendAuthorize,
                    _ = a.useCallback((function() {
                        l()(null != S, "sendAuthorize not available");
                        k(!0);
                        S(!0)
                    }), [S]);
                return (0, n.jsxs)("div", {
                    className: m().container,
                    children: [null != g && (0, n.jsx)(s.ModalCloseButton, {
                        className: m().closeButton,
                        onClick: g
                    }), (0, n.jsxs)(s.Scroller, {
                        children: [(0, n.jsx)(s.ModalHeader, {
                            direction: d.Z.Direction.VERTICAL,
                            className: m().header,
                            separator: !1,
                            children: (0, n.jsx)(s.Text, {
                                className: m().stepHeader,
                                variant: "text-xs/bold",
                                color: "header-secondary",
                                children: h.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                    number: 2,
                                    total: 2
                                })
                            })
                        }), (0, n.jsxs)("div", {
                            className: m().discordConsentBody,
                            children: [I, w, R]
                        }), (0, n.jsx)(s.ModalFooter, {
                            className: m().footer,
                            children: (0, n.jsx)(s.Button, {
                                className: m().footerButton,
                                color: s.Button.Colors.BRAND,
                                submitting: T,
                                onClick: _,
                                children: h.Z.Messages.AUTHORIZE_AND_CONTINUE
                            })
                        })]
                    })]
                })
            }
        },
        227363: (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => h
            });
            var n = r(785893),
                a = (r(667294), r(70418)),
                o = r(107364),
                l = r(956054),
                s = r(473708),
                i = r(20476),
                c = r.n(i),
                u = r(727157),
                d = r.n(u);

            function h(e) {
                var t = e.onContinue,
                    r = e.onClose,
                    i = e.title,
                    u = e.body;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(a.ModalHeader, {
                        direction: o.Z.Direction.VERTICAL,
                        className: c().header,
                        separator: !1,
                        children: [(0, n.jsx)("img", {
                            src: d(),
                            className: c().illustration,
                            width: "254",
                            height: "127",
                            alt: ""
                        }), (0, n.jsx)(a.Heading, {
                            className: c().title,
                            variant: "heading-xl/extrabold",
                            children: i
                        }), null != r && (0, n.jsx)(a.ModalCloseButton, {
                            className: c().closeButton,
                            onClick: r
                        })]
                    }), (0, n.jsx)(a.ModalContent, {
                        className: c().body,
                        paddingFix: !1,
                        children: (0, n.jsx)(a.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: u
                        })
                    }), (0, n.jsx)(a.ModalFooter, {
                        className: c().footer,
                        children: (0, n.jsxs)(a.Button, {
                            className: c().footerButton,
                            color: a.Button.Colors.BRAND,
                            onClick: t,
                            children: [s.Z.Messages.TRY_AGAIN, (0, n.jsx)(l.Z, {
                                className: c().launchIcon,
                                width: "16",
                                height: "16"
                            })]
                        })
                    })]
                })
            }
        },
        525493: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => d
            });
            var n = r(785893),
                a = (r(667294),
                    r(202351)),
                o = r(70418),
                l = r(629223),
                s = r(107364),
                i = r(473708),
                c = r(20476),
                u = r.n(c);

            function d(e) {
                var t = e.platformType,
                    r = e.onContinue,
                    c = e.onClose,
                    d = e.img,
                    h = e.headerConnect,
                    f = e.headerReconnect,
                    m = e.body,
                    p = e.learnMoreLink,
                    x = e.valueProps,
                    b = (0, a.e7)([l.Z], (function() {
                        var e = l.Z.getAccount(null, t);
                        return !1 === (null == e ? void 0 : e.twoWayLink)
                    }));
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(o.ModalHeader, {
                        direction: s.Z.Direction.VERTICAL,
                        className: u().header,
                        separator: !1,
                        children: [(0, n.jsxs)("div", {
                            className: u().illustration,
                            children: [d, " "]
                        }), (0, n.jsx)(o.Heading, {
                            className: u().title,
                            variant: "heading-xl/extrabold",
                            children: b && null != f ? f : h
                        }), (0, n.jsx)(o.ModalCloseButton, {
                            className: u().closeButton,
                            onClick: c
                        })]
                    }), (0, n.jsxs)(o.ModalContent, {
                        className: u().body,
                        paddingFix: !1,
                        children: [(0, n.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: m
                        }), (0, n.jsx)("div", {
                            className: u().valueProps,
                            children: x
                        }), null != p ? (0, n.jsx)(o.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: i.Z.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format({
                                helpCenterLink: p
                            })
                        }) : null]
                    }), (0, n.jsx)(o.ModalFooter, {
                        className: u().footer,
                        children: (0, n.jsx)(o.Button, {
                            className: u().footerButton,
                            color: o.Button.Colors.BRAND,
                            onClick: r,
                            children: i.Z.Messages.CONTINUE
                        })
                    })]
                })
            }
        },
        797916: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => g
            });
            var n = r(785893),
                a = r(667294),
                o = r(441143),
                l = r.n(o),
                s = r(72190),
                i = r(70418),
                c = r(744564),
                u = r(53645),
                d = r(497842),
                h = r(296602),
                f = r(107364),
                m = r(956054),
                p = r(473708),
                x = r(20476),
                b = r.n(x);

            function C(e, t, r, n, a, o, l) {
                try {
                    var s = e[o](l),
                        i = s.value
                } catch (e) {
                    r(e);
                    return
                }
                s.done ? t(i) : Promise.resolve(i).then(n, a)
            }

            function N(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            C(o, n, a, l, s, "next", e)
                        }

                        function s(e) {
                            C(o, n, a, l, s, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var v = function(e, t) {
                    var r, n, a, o, l = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        },
                        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                            return this
                        }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (r = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
                                    (n = 0, a) && (o = [2 & o[0], a.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            n = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = l.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < a[1]) {
                                                l.label = a[1];
                                                a = o;
                                                break
                                            }
                                            if (a && l.label < a[2]) {
                                                l.label = a[2];
                                                l.ops.push(o);
                                                break
                                            }
                                            a[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, l)
                                } catch (e) {
                                    o = [6, e];
                                    n = 0
                                } finally {
                                    r = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                y = new h.Z("TwoWayLink");

            function g(e) {
                var t = e.platformType,
                    r = e.isWaitingForConnection,
                    o = e.onWaitingForConnection,
                    h = e.expectedCallbackState,
                    x = e.onAuthToken,
                    C = e.onError,
                    g = e.onClose,
                    j = e.img,
                    E = e.title,
                    T = e.body,
                    k = e.redirectDestination,
                    A = a.useCallback(N((function() {
                        var e, r, n;
                        return v(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    a.trys.push([0, 2, , 3]);
                                    return [4, (0, d.H)(t, {
                                        twoWayLinkType: s.g.DESKTOP
                                    })];
                                case 1:
                                    if (null == (e = a.sent())) throw new Error("missing authorizeURL");
                                    return [3, 3];
                                case 2:
                                    r = a.sent();
                                    y.error("Error opening provider authorize page", r);
                                    C();
                                    return [2];
                                case 3:
                                    n = (0, u.xp)(e).state;
                                    l()(null != n, "Authorize URL state query parameter must be present");
                                    null == o || o(n);
                                    return [2]
                            }
                        }))
                    })), [t, C, o]),
                    O = a.useCallback((function(e) {
                        var r = e.callbackCode,
                            n = e.callbackState;
                        n === h ? x({
                            callbackCode: r,
                            callbackState: n
                        }) : y.warn("".concat(t, " link: received mismatching callback state!"))
                    }), [t, h, x]);
                a.useEffect((function() {
                    c.Z.subscribe("USER_CONNECTIONS_LINK_CALLBACK", O);
                    return function() {
                        c.Z.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", O)
                    }
                }), [O]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(i.ModalHeader, {
                        direction: f.Z.Direction.VERTICAL,
                        className: b().header,
                        separator: !1,
                        children: [(0, n.jsx)(i.Text, {
                            className: b().stepHeader,
                            variant: "text-xs/bold",
                            color: "header-secondary",
                            children: p.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                number: 1,
                                total: 2
                            })
                        }), (0, n.jsxs)("div", {
                            className: b().illustration,
                            children: [j, " "]
                        }), (0, n.jsx)(i.Heading, {
                            className: b().title,
                            variant: "heading-xl/extrabold",
                            children: E
                        }), null != g && (0, n.jsx)(i.ModalCloseButton, {
                            className: b().closeButton,
                            onClick: g
                        })]
                    }), (0, n.jsxs)(i.ModalContent, {
                        className: b().body,
                        paddingFix: !1,
                        children: [(0, n.jsx)(i.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: T
                        }), !r && (0, n.jsx)(i.Text, {
                            tag: "p",
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: p.Z.Messages.CONSOLE_REDIRECT_NOTICE.format({
                                redirectUrl: k
                            })
                        })]
                    }), (0, n.jsx)(i.ModalFooter, {
                        className: b().footer,
                        children: (0, n.jsxs)(i.Button, {
                            className: b().footerButton,
                            color: r ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
                            onClick: A,
                            children: [r ? p.Z.Messages.RETRY : p.Z.Messages.CONTINUE, (0, n.jsx)(m.Z, {
                                className: b().launchIcon,
                                width: "16",
                                height: "16"
                            })]
                        })
                    })]
                })
            }
        },
        361618: (e, t, r) => {
            "use strict";
            r.d(t, {
                L: () => c
            });
            var n = r(785893),
                a = (r(667294), r(70418)),
                o = r(107364),
                l = r(473708),
                s = r(20476),
                i = r.n(s);

            function c(e) {
                var t = e.onClose,
                    r = e.img,
                    s = e.title,
                    c = e.body,
                    u = e.content;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(a.ModalHeader, {
                        direction: o.Z.Direction.VERTICAL,
                        className: i().header,
                        separator: !1,
                        children: [(0, n.jsx)("div", {
                            className: i().illustration,
                            children: r
                        }), (0, n.jsx)(a.Heading, {
                            className: i().title,
                            variant: "heading-xl/extrabold",
                            children: s
                        }), (0, n.jsx)(a.ModalCloseButton, {
                            className: i().closeButton,
                            onClick: t
                        })]
                    }), (0, n.jsxs)(a.ModalContent, {
                        className: i().body,
                        paddingFix: !1,
                        children: [(0, n.jsx)(a.Text, {
                            tag: "p",
                            variant: "text-md/normal",
                            color: "header-secondary",
                            children: c
                        }), u]
                    }), (0, n.jsx)(a.ModalFooter, {
                        className: i().footer,
                        children: (0, n.jsx)(a.Button, {
                            className: i().footerButton,
                            color: a.Button.Colors.BRAND,
                            onClick: t,
                            children: l.Z.Messages.DONE
                        })
                    })]
                })
            }
        },
        271663: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ux: () => s,
                pT: () => i,
                yC: () => c
            });
            var n = r(785893),
                a = (r(667294), r(70418)),
                o = r(20476),
                l = r.n(o);

            function s(e) {
                var t = e.text,
                    r = e.children;
                return (0, n.jsxs)("div", {
                    className: l().valueProp,
                    children: [(0, n.jsx)("div", {
                        className: l().valuePropIconContainer,
                        children: r
                    }), (0, n.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        children: t
                    })]
                })
            }

            function i(e) {
                var t = e.title,
                    r = e.bulletPoints,
                    o = e.icon;
                return (0, n.jsxs)("div", {
                    className: l().bulletedValueProp,
                    children: [(0, n.jsx)("div", {
                        className: l().valuePropIconContainer,
                        children: o
                    }), (0, n.jsxs)("div", {
                        className: l().bulletPointsContainer,
                        children: [(0, n.jsx)(a.Text, {
                            variant: "text-md/bold",
                            color: "header-primary",
                            children: t
                        }), (0, n.jsx)("div", {
                            className: l().bulletPoints,
                            children: r.map((function(e) {
                                return (0, n.jsxs)("div", {
                                    className: l().bulletPoint,
                                    children: [(0, n.jsx)(a.Text, {
                                        variant: "text-sm/medium",
                                        color: "header-secondary",
                                        children: "•"
                                    }), (0,
                                        n.jsx)(a.Text, {
                                        variant: "text-sm/medium",
                                        color: "header-secondary",
                                        className: l().bulletPointText,
                                        children: e
                                    })]
                                }, e)
                            }))
                        })]
                    })]
                })
            }

            function c(e) {
                var t = e.children;
                return (0, n.jsx)("div", {
                    className: l().valuePropContainer,
                    children: t
                })
            }
        },
        786648: (e, t, r) => {
            "use strict";
            r.d(t, {
                k: () => u
            });
            var n = r(667294),
                a = r(634698),
                o = r(652591),
                l = r(757942),
                s = r(2590);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, o = [],
                            l = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                var r = c(n.useState(l.O.LANDING), 2),
                    i = r[0],
                    u = r[1],
                    d = (0, a.Z)(i),
                    h = c(n.useState(null), 2),
                    f = h[0],
                    m = h[1],
                    p = c(n.useState(null), 2),
                    x = p[0],
                    b = p[1],
                    C = n.useCallback((function() {
                        switch (i) {
                            case l.O.LANDING:
                                u(l.O.PRE_CONNECT);
                                break;
                            case l.O.DISCORD_CONSENT:
                                u(l.O.SUCCESS);
                                break;
                            case l.O.ERROR:
                                u(l.O.PRE_CONNECT)
                        }
                    }), [i]),
                    N = n.useCallback((function() {
                        m(null);
                        u(l.O.ERROR)
                    }), []),
                    v = n.useCallback((function(e) {
                        m(e);
                        u(l.O.PRE_CONNECT_WAITING)
                    }), []),
                    y = n.useCallback((function(e) {
                        m(null);
                        b(e);
                        u(l.O.DISCORD_CONSENT)
                    }), []);
                n.useEffect((function() {
                    i !== d && o.default.track(s.rMx.ACCOUNT_LINK_STEP, {
                        location_stack: e,
                        previous_step: d,
                        current_step: i,
                        platform_type: t
                    })
                }), [i, d, e, t]);
                return {
                    slide: i,
                    gotoNext: C,
                    gotoError: N,
                    handleWaitingForConnection: v,
                    handleAuthToken: y,
                    expectedCallbackState: f,
                    callbackData: x
                }
            }
        }
    }
]);