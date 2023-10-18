"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [73946], {
        627379: (e, t, r) => {
            r.d(t, {
                O: () => a
            });
            var n = r(785893),
                o = (r(667294), r(795308)),
                i = r(633878);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e, t) {
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

            function s(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            var a = function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    a = e.height,
                    u = void 0 === a ? 24 : a,
                    p = e.color,
                    O = void 0 === p ? o.Z.colors.INTERACTIVE_NORMAL : p,
                    b = e.colorClass,
                    f = void 0 === b ? "" : b,
                    d = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            c(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, i.Z)(d)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof O ? O : O.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87c-.625 0-1.178-.162-1.66-.485-.482-.324-.855-.777-1.121-1.359C4.133 13.437 4 12.762 4 12c0-.755.14-1.423.42-2.005.288-.583.701-1.039 1.24-1.37.546-.33 1.197-.495 1.951-.495.64 0 1.211.136 1.714.41.51.272.895.657 1.154 1.153l-1.218.873c-.367-.676-.913-1.013-1.639-1.013-.661 0-1.168.215-1.52.646-.352.425-.528 1.025-.528 1.8 0 .784.176 1.388.528 1.812.352.424.859.636 1.52.636.295 0 .564-.054.809-.162.251-.115.445-.27.582-.463v-.927H7.299v-1.402h3.245v4.226H9.272l-.205-.712c-.424.575-1.053.863-1.887.863Zm6.34-.151h-1.574V8.28h1.574v7.438Zm1.51 0h1.574v-2.824h2.76v-1.423h-2.76V9.704H20V8.28h-4.97v7.438Z",
                        clipRule: "evenodd",
                        className: f
                    })
                }))
            }
        },
        38272: (e, t, r) => {
            r.d(t, {
                Z: () => f
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                c = r(70418),
                l = r(217674),
                s = r(930865),
                a = r(473708),
                u = r(377417),
                p = r.n(u);

            function O(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function b(e, t) {
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
            const f = function(e) {
                var t, r, o, u = e.guildFeature,
                    f = e.guild,
                    d = e.className,
                    y = e.hideTooltip,
                    h = void 0 !== y && y,
                    j = e.tooltipPosition,
                    g = void 0 === j ? "left" : j,
                    v = e.onClick,
                    m = f.hasFeature(u),
                    w = (0, s._p)(u);
                if (m) {
                    null != w && (o = a.Z.Messages.PREMIUM_GUILD_INCLUDED);
                    t = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(l.Z, {
                            className: p().unlockedIcon
                        }), (0, n.jsx)(c.Heading, {
                            variant: "eyebrow",
                            className: p().description,
                            children: a.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
                        })]
                    })
                } else {
                    null != w && (o = a.Z.Messages.CLICK_TO_LEARN_MORE);
                    t = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(l.Z, {
                            className: p().icon
                        }), (0, n.jsx)(c.Heading, {
                            variant: "eyebrow",
                            className: p().description,
                            children: null != w && (0, s.e9)(w)
                        })]
                    })
                }
                r = h || null == o ? (0, n.jsx)("div", {
                    className: i()(p().availabilityIndicator, d),
                    children: t
                }) : (0, n.jsx)(c.Tooltip, {
                    position: g,
                    text: o,
                    children: function(e) {
                        return (0, n.jsx)("div", b(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    O(e, t, r[t])
                                }))
                            }
                            return e
                        }({}, e), {
                            className: i()(p().availabilityIndicator, d),
                            children: t
                        }))
                    }
                });
                return null == v || m ? r : (0, n.jsx)(c.Clickable, {
                    onClick: v,
                    className: p().clickable,
                    children: r
                })
            }
        },
        776203: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(444663),
                o = r(149258),
                i = r(473708);

            function c(e) {
                (0, n.openUploadError)({
                    title: i.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
                    help: i.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                        maxSize: (0,
                            o.Ng)(e)
                    })
                })
            }
        }
    }
]);