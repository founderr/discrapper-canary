(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [38826], {
        191696: (e, t, n) => {
            e.exports = n.p + "d8a03b9985d824edc78c6eb4785dc949.svg"
        },
        78205: (e, t, n) => {
            e.exports = n.p + "7e09d40fdac796955aae9fbe0eaba1f9.svg"
        },
        577635: (e, t, n) => {
            "use strict";
            n.d(t, {
                WG: () => m,
                pD: () => p,
                Tj: () => h,
                ZD: () => v
            });
            var r = n(993231),
                a = n(281110),
                o = n(816251),
                i = (n(120415), n(391438)),
                l = n(2590),
                s = n(473708);

            function u(e, t, n, r, a, o, i) {
                try {
                    var l = e[o](i),
                        s = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(r, a)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            u(o, r, a, i, l, "next", e)
                        }

                        function l(e) {
                            u(o, r, a, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var f = function(e, t) {
                var n, r, a, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < a[1]) {
                                            i.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        a[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = t.call(e, i)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function m() {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = c((function() {
                    return f(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, a.ZP.get({
                                    url: l.ANM.BUG_REPORTS
                                })];
                            case 1:
                                return [2, e.sent().body]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(e) {
                var t, n;
                return null !== (n = null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "" + (null == e ? void 0 : e.squad)) && void 0 !== n ? n : ""
            }

            function h() {
                return [{
                    title: s.Z.Messages.BUG_REPORT_PRIORITY_CRITICAL_TITLE,
                    description: s.Z.Messages.BUG_REPORT_PRIORITY_CRITICAL_DESCRIPTION.format(),
                    emoji: "801497159479722084",
                    value: 0
                }, {
                    title: s.Z.Messages.BUG_REPORT_PRIORITY_HIGH_TITLE,
                    description: s.Z.Messages.BUG_REPORT_PRIORITY_HIGH_DESCRIPTION.format(),
                    emoji: "410336837563973632",
                    value: 1
                }, {
                    title: s.Z.Messages.BUG_REPORT_PRIORITY_LOW_TITLE,
                    description: s.Z.Messages.BUG_REPORT_PRIORITY_LOW_DESCRIPTION.format(),
                    emoji: "841420679643529296",
                    value: 2
                }, {
                    title: s.Z.Messages.BUG_REPORT_PRIORITY_VERY_LOW_TITLE,
                    description: s.Z.Messages.BUG_REPORT_PRIORITY_VERY_LOW_DESCRIPTION.format(),
                    emoji: "827645852352512021",
                    value: 3
                }]
            }

            function v(e, t, n) {
                return b.apply(this, arguments)
            }

            function b() {
                b = c((function(e, t, n) {
                    var a, s, u, c, m, d, p = arguments;
                    return f(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                a = !(p.length > 3 && void 0 !== p[3]) || p[3];
                                c = [{
                                    name: "name",
                                    value: e.name
                                }, {
                                    name: "priority",
                                    value: "".concat(e.priority)
                                }, {
                                    name: "override_platform_information",
                                    value: "".concat(t.overridePlatformInformation)
                                }];
                                "" !== e.description && c.push({
                                    name: "description",
                                    value: e.description
                                });
                                "" !== e.url && c.push({
                                    name: "external_url",
                                    value: e.url
                                });
                                null != (m = null === (s = e.feature) || void 0 === s ? void 0 : s.asana_inbox_id) && "" !== m && c.push({
                                    name: "asana_inbox_id",
                                    value: "".concat(m)
                                });
                                null != (d = null === (u = e.feature) || void 0 === u ? void 0 : u.name) && "" !== d && c.push({
                                    name: "feature_name",
                                    value: d
                                });
                                if (t.overridePlatformInformation) {
                                    c.push({
                                        name: "device",
                                        value: t.device
                                    });
                                    c.push({
                                        name: "os",
                                        value: t.operatingSystem
                                    });
                                    c.push({
                                        name: "os_version",
                                        value: t.operatingSystemVersion
                                    });
                                    c.push({
                                        name: "client_version",
                                        value: t.clientVersion
                                    });
                                    c.push({
                                        name: "client_build_number",
                                        value: t.clientBuildNumber
                                    });
                                    c.push({
                                        name: "release_channel",
                                        value: window.GLOBAL_ENV.RELEASE_CHANNEL
                                    });
                                    c.push({
                                        name: "locale",
                                        value: t.locale
                                    })
                                }
                                a && (0, o.E_)(l.GU0.WEB_APP);
                                f.label = 1;
                            case 1:
                                f.trys.push([1, 3, , 4]);
                                return [4, i.Z.post({
                                    url: l.ANM.BUG_REPORTS,
                                    attachments: n,
                                    fields: c,
                                    trackedActionData: {
                                        event: r.a9.BUG_REPORT_SUBMIT,
                                        properties: {
                                            priority: e.priority,
                                            asana_inbox_id: m
                                        }
                                    }
                                })];
                            case 2:
                                return [2, f.sent()];
                            case 3:
                                return [2, f.sent()];
                            case 4:
                                return [2]
                        }
                    }))
                }));
                return b.apply(this, arguments)
            }
        },
        938826: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => D
            });
            var r = n(785893),
                a = n(667294),
                o = n(468811),
                i = n.n(o),
                l = n(202351),
                s = n(575945),
                u = n(882723),
                c = n(557617),
                f = n(474717),
                m = n(631183),
                d = n(178230),
                p = n(64234),
                h = n(994655),
                v = n(98265),
                b = n(668159),
                x = n(775173),
                y = n(120415),
                _ = n(577635);

            function R(e) {
                var t;
                return e.map((function(e, n) {
                    var r;
                    return {
                        file: e.file,
                        name: null !== (t = e.id) && void 0 !== t ? t : "attachment_".concat(n),
                        filename: null === (r = e.file) || void 0 === r ? void 0 : r.name
                    }
                }))
            }
            var I = n(473708),
                g = n(281567),
                T = n.n(g),
                j = n(191696),
                O = n.n(j),
                E = n(78205),
                P = n.n(E);

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t, n, r, a, o, i) {
                try {
                    var l = e[o](i),
                        s = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(r, a)
            }

            function w(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function i(e) {
                            N(o, r, a, i, l, "next", e)
                        }

                        function l(e) {
                            N(o, r, a, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function C(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        C(e, t, n[t])
                    }))
                }
                return e
            }

            function B(e, t) {
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

            function Z(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return o
                    }
                }(e, t) || A(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e) {
                return function(e) {
                    if (Array.isArray(e)) return S(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || A(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e, t) {
                if (e) {
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? S(e, t) : void 0
                }
            }
            var G = function(e, t) {
                    var n, r, a, o, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    (r = 0, a) && (o = [2 & o[0], a.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                i.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && i.label < a[1]) {
                                                i.label = a[1];
                                                a = o;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2];
                                                i.ops.push(o);
                                                break
                                            }
                                            a[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, i)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                L = ["Android", "iOS", "Windows Mobile", "Windows", "Linux", "Mac OS X"].map((function(e) {
                    return {
                        label: e,
                        value: e
                    }
                }));

            function k(e) {
                var t, n, r, a, o;
                return null !== (o = null === (r = null === (n = null == e || null === (t = e.features) || void 0 === t ? void 0 : t.filter((function(e) {
                    return "" !== (0, _.pD)(e)
                }))) || void 0 === n ? void 0 : n.map((function(e) {
                    return {
                        label: null !== (a = e.name) && void 0 !== a ? a : "",
                        value: (0, _.pD)(e)
                    }
                }))) || void 0 === r ? void 0 : r.sort((function(e, t) {
                    return e.label.localeCompare(t.label)
                }))) && void 0 !== o ? o : []
            }

            function D(e) {
                var t = e.transitionState,
                    o = e.onClose,
                    g = a.useRef(null),
                    j = a.useRef(null),
                    E = Z(a.useState(""), 2),
                    S = E[0],
                    N = E[1],
                    C = Z(a.useState(""), 2),
                    A = C[0],
                    D = C[1],
                    F = Z(a.useState(), 2),
                    V = F[0],
                    Y = F[1],
                    W = Z(a.useState(""), 2),
                    H = W[0],
                    z = W[1],
                    X = Z(a.useState([]), 2),
                    Q = X[0],
                    q = X[1],
                    K = Z(a.useState(), 2),
                    $ = K[0],
                    J = K[1],
                    ee = Z(a.useState(), 2),
                    te = ee[0],
                    ne = ee[1],
                    re = Z(a.useState(!1), 2),
                    ae = re[0],
                    oe = re[1],
                    ie = Z(a.useState(""), 2),
                    le = ie[0],
                    se = ie[1],
                    ue = Z(a.useState(function(e) {
                        switch (e) {
                            case "windows":
                                return "Windows";
                            case "macos":
                                return "Mac OS X";
                            case "linux":
                                return "Linux"
                        }
                        return ""
                    }((0, y.Ij)())), 2),
                    ce = ue[0],
                    fe = ue[1],
                    me = Z(a.useState(""), 2),
                    de = me[0],
                    pe = me[1],
                    he = Z(a.useState(""), 2),
                    ve = he[0],
                    be = he[1],
                    xe = Z(a.useState(""), 2),
                    ye = xe[0],
                    _e = xe[1],
                    Re = Z(a.useState(""), 2),
                    Ie = Re[0],
                    ge = Re[1],
                    Te = Z(a.useState(!1), 2),
                    je = Te[0],
                    Oe = Te[1],
                    Ee = Z(a.useState(!1), 2),
                    Pe = Ee[0],
                    Se = Ee[1],
                    Ne = Z(a.useState(!1), 2),
                    we = Ne[0],
                    Ce = Ne[1],
                    Me = function() {
                        null == o || o()
                    };

                function Be() {
                    return Ze.apply(this, arguments)
                }

                function Ze() {
                    Ze = w((function() {
                        var e, t, a, o, i;
                        return G(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    Ce(!1);
                                    if ("" === S || null == V) {
                                        Oe(!0);
                                        return [2]
                                    }
                                    t = null == $ || null === (e = $.features) || void 0 === e ? void 0 : e.find((function(e) {
                                        return (0, _.pD)(e) === te
                                    }));
                                    Se(!0);
                                    Oe(!1);
                                    a = R(Q.map((function(e) {
                                        return e.item
                                    })));
                                    o = !0 === ae ? {
                                        overridePlatformInformation: ae,
                                        device: le,
                                        operatingSystem: ce,
                                        operatingSystemVersion: de,
                                        clientVersion: ve,
                                        clientBuildNumber: ye,
                                        locale: Ie
                                    } : {
                                        overridePlatformInformation: ae
                                    };
                                    return [4, (0, _.ZD)({
                                        name: S,
                                        description: A,
                                        priority: V,
                                        feature: t,
                                        url: H
                                    }, o, a).catch((function() {
                                        return Ce(!0)
                                    }))];
                                case 1:
                                    i = l.sent();
                                    Se(!1);
                                    if (null != i && i.ok) {
                                        window.open(i.body.permalink_url, "_blank");
                                        Me();
                                        (0, u.openModalLazy)(w((function() {
                                            var e, t;
                                            return G(this, (function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        return [4, Promise.all([n.e(40532), n.e(36759)]).then(n.bind(n, 436759))];
                                                    case 1:
                                                        e = a.sent(), t = e.default;
                                                        return [2, function(e) {
                                                            return (0, r.jsx)(t, B(M({}, e), {
                                                                asanaTask: i.body
                                                            }))
                                                        }]
                                                }
                                            }))
                                        })))
                                    } else Ce(!0);
                                    return [2]
                            }
                        }))
                    }));
                    return Ze.apply(this, arguments)
                }
                a.useEffect((function() {
                    function e() {
                        e = w((function() {
                            var e;
                            return G(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, (0, _.WG)()];
                                    case 1:
                                        e = t.sent();
                                        J(e);
                                        return [2]
                                }
                            }))
                        }));
                        return e.apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), []);
                a.useEffect((function() {
                    if (Q.length > 0) {
                        var e;
                        null === (e = j.current) || void 0 === e || e.scrollIntoView({
                            behavior: "smooth",
                            block: "end"
                        })
                    }
                }), [Q]);
                var Ue = (0, l.e7)([p.Z], (function() {
                        return p.Z.theme
                    })),
                    Ae = (0, s.wj)(Ue) ? O() : P();
                return (0, r.jsx)(u.ModalRoot, {
                    className: T().modalRoot,
                    transitionState: t,
                    "aria-label": I.Z.Messages.SUBMIT_BUG,
                    children: (0, r.jsx)(u.ModalContent, {
                        className: T().modalContent,
                        paddingFix: !1,
                        children: (0, r.jsx)("div", {
                            className: T().container,
                            children: (0, r.jsx)(u.HeadingLevel, {
                                forceLevel: 1,
                                component: (0, r.jsx)("div", {
                                    className: T().sidebarContainer,
                                    children: (0, r.jsx)(v.Z, {
                                        strong: !0,
                                        color: v.Z.Colors.HEADER_PRIMARY,
                                        size: v.Z.Sizes.SIZE_24,
                                        children: (0, r.jsx)(u.H, {
                                            children: I.Z.Messages.BUG_REPORT_TITLE
                                        })
                                    })
                                }),
                                children: (0, r.jsxs)("div", {
                                    className: T().contentContainer,
                                    children: [(0, r.jsx)("img", {
                                        className: T().contentIcon,
                                        alt: "",
                                        src: Ae
                                    }), (0, r.jsxs)("form", {
                                        className: T().form,
                                        onSubmit: Be,
                                        children: [(0, r.jsx)(u.FormItem, {
                                            error: je && "" === S ? I.Z.Messages.REQUIRED : null,
                                            title: I.Z.Messages.BUG_REPORT_NAME,
                                            className: T().formInput,
                                            children: (0, r.jsx)(u.TextInput, {
                                                placeholder: "Something is broken on this screen.",
                                                type: "text",
                                                value: S,
                                                maxLength: 100,
                                                onChange: N
                                            })
                                        }), (0, r.jsxs)(u.FormItem, {
                                            title: I.Z.Messages.BUG_REPORT_DESCRIPTION,
                                            className: T().formInput,
                                            children: [(0, r.jsx)(u.TextArea, {
                                                placeholder: "What did you expect to see?",
                                                value: A,
                                                onChange: D
                                            }), (0, r.jsx)(u.Text, {
                                                variant: "text-sm/normal",
                                                color: "info-help-text",
                                                children: "You can add additional information/media on the ticket after submitting"
                                            })]
                                        }), (0, r.jsx)(u.FormItem, {
                                            error: je && void 0 === V ? I.Z.Messages.REQUIRED : null,
                                            title: I.Z.Messages.BUG_REPORT_PRIORITY,
                                            className: T().formInput,
                                            children: (0, r.jsx)(u.SingleSelect, {
                                                renderOptionLabel: function(e) {
                                                    return function(e) {
                                                        var t = e.priority;
                                                        return (0, r.jsxs)("div", {
                                                            className: T().formPriorityImageContainer,
                                                            children: [(0, r.jsxs)("div", {
                                                                className: T().formPriorityTitleContainer,
                                                                children: [(0, r.jsx)("img", {
                                                                    alt: "",
                                                                    className: T().formPriorityImage,
                                                                    src: (0, x.gT)({
                                                                        id: t.emoji,
                                                                        animated: !0,
                                                                        size: 48
                                                                    })
                                                                }), (0, r.jsx)(u.Text, {
                                                                    color: "header-primary",
                                                                    variant: "text-sm/semibold",
                                                                    className: T().formPriorityTitle,
                                                                    children: t.title
                                                                })]
                                                            }), (0, r.jsx)(u.Text, {
                                                                color: "header-secondary",
                                                                variant: "text-xs/normal",
                                                                className: T().formPriorityDescription,
                                                                children: t.description
                                                            })]
                                                        })
                                                    }(e)
                                                },
                                                onChange: Y,
                                                options: (0, _.Tj)().map((function(e) {
                                                    return {
                                                        priority: e,
                                                        value: e.value,
                                                        label: e.title
                                                    }
                                                })),
                                                value: V,
                                                maxVisibleItems: 3,
                                                closeOnSelect: !0
                                            })
                                        }), (0, r.jsx)(u.FormItem, {
                                            title: I.Z.Messages.BUG_REPORT_FEATURE_AREA,
                                            className: T().formInput,
                                            children: (0, r.jsx)(u.SearchableSelect, {
                                                value: te,
                                                options: k($),
                                                isDisabled: null == $,
                                                onChange: function(e) {
                                                    return ne(e)
                                                }
                                            })
                                        }), (0, r.jsx)(u.FormItem, {
                                            title: I.Z.Messages.BUG_REPORT_URL,
                                            className: T().formInput,
                                            children: (0, r.jsx)(u.TextInput, {
                                                placeholder: I.Z.Messages.BUG_REPORT_EXTERNAL_SOURCE,
                                                type: "text",
                                                value: H,
                                                maxLength: 5e3,
                                                onChange: z
                                            })
                                        }), (0, r.jsx)(u.FormItem, {
                                            className: T().formInput,
                                            children: (0, r.jsx)(u.Checkbox, {
                                                value: ae,
                                                onChange: function(e, t) {
                                                    return oe(t)
                                                },
                                                children: (0, r.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    color: "info-help-text",
                                                    children: I.Z.Messages.BUG_REPORT_OVERRIDE_PLATFORM_INFORMATION
                                                })
                                            })
                                        }), ae ? (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(u.FormItem, {
                                                title: I.Z.Messages.BUG_REPORT_DEVICE,
                                                className: T().formInput,
                                                children: (0, r.jsx)(u.TextInput, {
                                                    placeholder: "Device",
                                                    value: le,
                                                    onChange: function(e) {
                                                        return se(e)
                                                    }
                                                })
                                            }), (0, r.jsx)(u.FormItem, {
                                                title: I.Z.Messages.BUG_REPORT_OS,
                                                className: T().formInput,
                                                children: (0, r.jsx)(u.SingleSelect, {
                                                    value: ce,
                                                    options: L,
                                                    onChange: function(e) {
                                                        return fe(e)
                                                    }
                                                })
                                            }), (0, r.jsx)(u.FormItem, {
                                                title: I.Z.Messages.BUG_REPORT_OS_VERSION,
                                                className: T().formInput,
                                                children: (0, r.jsx)(u.TextInput, {
                                                    placeholder: "Operating System Version",
                                                    value: de,
                                                    onChange: function(e) {
                                                        return pe(e)
                                                    }
                                                })
                                            }), (0, r.jsx)(u.FormItem, {
                                                title: I.Z.Messages.BUG_REPORT_CLIENT_VERSION,
                                                className: T().formInput,
                                                children: (0, r.jsx)(u.TextInput, {
                                                    placeholder: "Client Version",
                                                    value: ve,
                                                    onChange: function(e) {
                                                        return be(e)
                                                    }
                                                })
                                            }), (0, r.jsx)(u.FormItem, {
                                                title: I.Z.Messages.BUG_REPORT_CLIENT_BUILD_NUMBER,
                                                className: T().formInput,
                                                children: (0, r.jsx)(u.TextInput, {
                                                    placeholder: "Client Build Number",
                                                    value: ye,
                                                    onChange: function(e) {
                                                        return _e(e)
                                                    }
                                                })
                                            }), (0, r.jsx)(u.FormItem, {
                                                title: I.Z.Messages.BUG_REPORT_LOCALE,
                                                className: T().formInput,
                                                children: (0, r.jsx)(u.TextInput, {
                                                    placeholder: "Locale",
                                                    value: Ie,
                                                    onChange: function(e) {
                                                        return ge(e)
                                                    }
                                                })
                                            })]
                                        }) : null, (0, r.jsxs)(u.Button, {
                                            className: T().uploadButton,
                                            children: [I.Z.Messages.BUG_REPORT_ADD_ATTACHMENTS, (0, r.jsx)(c.Z, {
                                                ref: g,
                                                onChange: function(e) {
                                                    var t, n;
                                                    if (null != (null === (t = e.currentTarget) || void 0 === t || null === (n = t.files) || void 0 === n ? void 0 : n[0])) {
                                                        var r = Array.from(e.currentTarget.files).map((function(e) {
                                                            return new f.ZP({
                                                                id: i().v4(),
                                                                file: e,
                                                                platform: f.ow.WEB
                                                            })
                                                        }));
                                                        q(U(Q).concat(U(r)))
                                                    }
                                                },
                                                multiple: !0
                                            })]
                                        }), Q.length > 0 ? (0,
                                            r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)("div", {
                                                className: T().imageOptionsContainer,
                                                children: (0, r.jsx)(u.FormTitle, {
                                                    children: "Preview"
                                                })
                                            }), (0, r.jsx)("div", {
                                                ref: j,
                                                className: T().attachmentsGrid,
                                                children: Q.length > 0 && Q.map((function(e) {
                                                    return (0, r.jsxs)("div", {
                                                        className: T().attachmentsGridItem,
                                                        children: [(0, r.jsx)(u.Text, {
                                                            variant: "text-sm/normal",
                                                            children: e.filename
                                                        }), (0, r.jsxs)("div", {
                                                            className: T().attachmentContainer,
                                                            children: [(0, r.jsx)(d.r, {
                                                                upload: e
                                                            }), (0, r.jsx)("div", {
                                                                className: T().toolBar,
                                                                children: (0, r.jsx)(b.ZP, {
                                                                    children: (0, r.jsx)(m.Z, {
                                                                        tooltip: I.Z.Messages.ATTACHMENT_UTILITIES_REMOVE,
                                                                        onClick: function() {
                                                                            return t = e.id, void q(Q.filter((function(e) {
                                                                                return e.id !== t
                                                                            })));
                                                                            var t
                                                                        },
                                                                        dangerous: !0,
                                                                        children: (0, r.jsx)(h.Z, {})
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }, e.id)
                                                }))
                                            })]
                                        }) : null, we ? (0, r.jsx)(u.Text, {
                                            color: "text-danger",
                                            variant: "text-sm/normal",
                                            children: "Something went wrong, try again!"
                                        }) : null]
                                    }), (0, r.jsxs)(u.ModalFooter, {
                                        className: T().submitContainer,
                                        children: [(0, r.jsx)(u.Button, {
                                            className: T().formButton,
                                            look: u.ButtonLooks.BLANK,
                                            onClick: Me,
                                            children: (0, r.jsx)(u.Text, {
                                                variant: "text-sm/normal",
                                                children: I.Z.Messages.CANCEL
                                            })
                                        }), (0, r.jsx)(u.Button, {
                                            submitting: Pe,
                                            className: T().formButton,
                                            onClick: Be,
                                            children: "Submit and Open Report"
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        }
    }
]);