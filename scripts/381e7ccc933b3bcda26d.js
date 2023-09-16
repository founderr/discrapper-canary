"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [52409], {
        623236: (e, n, t) => {
            t.d(n, {
                $5: () => i,
                F4: () => o,
                vc: () => c
            });
            var r = (0, t(260561).B)({
                    kind: "user",
                    id: "2023-06_unique_username_registration",
                    label: "Unique Username Registration",
                    defaultConfig: {
                        enabled: !1,
                        livecheckEnabled: !1,
                        suggestions: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Unique Username Registration enabled -livecheck -suggestions",
                        config: {
                            enabled: !0,
                            livecheckEnabled: !1,
                            suggestions: !1
                        }
                    }, {
                        id: 2,
                        label: "Unique Username Registration enabled -livecheck +suggestions",
                        config: {
                            enabled: !0,
                            livecheckEnabled: !1,
                            suggestions: !0
                        }
                    }, {
                        id: 3,
                        label: "Unique Username Registration enabled +livecheck -suggestions",
                        config: {
                            enabled: !0,
                            livecheckEnabled: !0,
                            suggestions: !1
                        }
                    }, {
                        id: 4,
                        label: "Unique Username Registration enabled +livecheck +suggestions",
                        config: {
                            enabled: !0,
                            livecheckEnabled: !0,
                            suggestions: !0
                        }
                    }]
                }),
                i = function() {
                    return r.useExperiment({
                        location: "83ca1a_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                },
                o = function() {
                    return r.useExperiment({
                        location: "83ca1a_3"
                    }, {
                        autoTrackExposure: !1
                    })
                },
                c = function() {
                    return r.getCurrentConfig({
                        location: "83ca1a_4"
                    }, {
                        autoTrackExposure: !1
                    }).suggestions
                }
        },
        491275: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(633878));

            function o(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function c(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function s(e, n) {
                if (null == e) return {};
                var t, r, i = function(e, n) {
                    if (null == e) return {};
                    var t, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }

            function l(e) {
                var n = e.width,
                    t = void 0 === n ? 16 : n,
                    l = e.height,
                    a = void 0 === l ? 16 : l,
                    u = e.color,
                    g = void 0 === u ? "currentColor" : u,
                    b = e.foreground,
                    d = s(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsx)("svg", c(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            o(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(d)), {
                    width: t,
                    height: a,
                    viewBox: "0 0 24 24",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            fill: g,
                            className: b,
                            fillRule: "nonzero",
                            d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                            transform: "translate(2 4)"
                        }), (0, r.jsx)("path", {
                            d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                        })]
                    })
                }))
            }
        }
    }
]);
//# sourceMappingURL=381e7ccc933b3bcda26d.js.map