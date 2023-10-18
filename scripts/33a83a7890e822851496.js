"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [7777, 38479], {
        661299: (e, t, n) => {
            n.d(t, {
                Z: () => d
            });
            var r = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                a = n(228721),
                l = n(349480),
                s = n.n(l);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var u = (0, a.Z)();
            const d = function(e) {
                var t, n = e.open,
                    o = e.className,
                    a = e.withHighlight,
                    l = void 0 !== a && a;
                return (0, r.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: i()(s().button, o, (t = {}, c(t, s().open, n), c(t, s().withHighlight, l), t)),
                    children: [l && (0, r.jsx)("defs", {
                        children: (0, r.jsxs)("linearGradient", {
                            id: u,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, r.jsx)("stop", {
                                offset: "0",
                                stopColor: "#B473F5"
                            }), (0, r.jsx)("stop", {
                                offset: "1",
                                stopColor: "#E292AA"
                            })]
                        })
                    }), (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("path", {
                            d: "M0 0h18v18H0"
                        }), (0, r.jsx)("path", {
                            stroke: l ? "url(#".concat(u, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, r.jsx)("path", {
                            stroke: l ? "url(#".concat(u, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        275086: (e, t, n) => {
            n.d(t, {
                c: () => E
            });
            var r = n(785893),
                o = (n(667294), n(70418)),
                i = n(661299),
                a = n(393299),
                l = n(930865),
                s = n(596801),
                c = n(733274),
                u = n(2590),
                d = n(473708),
                f = n(562275),
                p = n.n(f);

            function b(e) {
                var t = e.guild,
                    n = e.banner;
                return (0, r.jsx)("div", {
                    className: p().guildBanner,
                    style: {
                        backgroundImage: "url(".concat(n)
                    },
                    children: (0, r.jsxs)("div", {
                        className: p().guildHeader,
                        children: [(0, r.jsx)(a.Z, {
                            guild: t,
                            isBannerVisible: !0
                        }), (0, r.jsx)(o.Heading, {
                            className: p().guildName,
                            variant: "heading-md/semibold",
                            children: t.toString()
                        }), (0, r.jsx)(i.Z, {
                            className: p().dropdown,
                            open: !1
                        })]
                    })
                })
            }

            function g(e, t) {
                var n = (0, l.nW)(e);
                return t ? d.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({
                    targetLevelOrPlan: n
                }) : d.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({
                    targetLevelOrPlan: n
                })
            }

            function E(e) {
                var t = e.analyticsLocations,
                    n = e.analyticsLocation,
                    o = e.guild,
                    i = e.isGIF,
                    a = e.banner,
                    f = i ? (0, l._p)(u.oNc.ANIMATED_BANNER) : (0, l._p)(u.oNc.BANNER);
                null != f && (0, s.Z)({
                    analyticsLocations: t,
                    analyticsSourceLocation: n,
                    guild: o,
                    headerProps: {
                        title: d.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                        subtitle: g(f, i),
                        image: (0, r.jsx)(b, {
                            guild: o,
                            banner: a
                        })
                    },
                    perkIntro: d.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
                    perks: i ? (0, c.zC)() : (0, c.XO)()
                })
            }
        },
        393299: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r, o = n(785893),
                i = (n(667294), n(294184)),
                a = n.n(i),
                l = n(202351),
                s = n(70418),
                c = n(491379),
                u = n(591406),
                d = n(859917),
                f = n(784648),
                p = n(2590),
                b = n(233593),
                g = n.n(b);

            function E(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var h, m = (E(r = {}, p.Eu4.NONE, g().iconBackgroundTierNone), E(r, p.Eu4.TIER_1, g().iconBackgroundTierOne), E(r, p.Eu4.TIER_2, g().iconBackgroundTierTwo), E(r, p.Eu4.TIER_3, g().iconBackgroundTierThree), r),
                y = (E(h = {}, p.Eu4.NONE, g().iconTierNone), E(h, p.Eu4.TIER_1, g().iconTierOne),
                    E(h, p.Eu4.TIER_2, g().iconTierTwo), E(h, p.Eu4.TIER_3, g().iconTierThree), h);

            function N(e) {
                var t = e.premiumTier,
                    n = e.iconBackgroundClassName,
                    r = e.iconClassName,
                    i = e.size;
                return (0, o.jsx)(d.Z, {
                    className: a()(n, m[t]),
                    size: i,
                    children: (0, o.jsx)(f.Z, {
                        tier: t,
                        className: a()(r, g().boostedGuildIconGem, y[t])
                    })
                })
            }
            var _ = n(21372),
                I = n(473903),
                v = n(206986),
                j = n(521723),
                P = n(930865),
                T = n(473708),
                A = n(625337),
                O = n.n(A);

            function R(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function x(e, t) {
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

            function C(e) {
                var t = e.guild,
                    n = e.isBannerVisible,
                    r = e.disableBoostClick,
                    i = (0, l.e7)([I.default, _.ZP], (function() {
                        var e = I.default.getCurrentUser();
                        return _.ZP.isMember(t.id, null == e ? void 0 : e.id)
                    })),
                    a = t.premiumTier,
                    c = t.premiumSubscriberCount;
                if (0 === c && a === p.Eu4.NONE) return null;
                var d = function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        i && !r && (0, u.f)({
                            guildId: t.id,
                            location: {
                                section: p.jXE.GUILD_HEADER,
                                object: p.qAy.BOOST_GEM_ICON
                            }
                        })
                    },
                    f = a === p.Eu4.NONE ? T.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : P.nW(a),
                    b = (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: O().tierTooltipTitle,
                            children: f
                        }), (0, o.jsx)("div", {
                            children: T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
                                subscriberCount: c
                            })
                        })]
                    });
                return (0, o.jsx)("div", {
                    className: O().guildIconContainer,
                    children: (0, o.jsx)(s.Tooltip, {
                        text: b,
                        position: "bottom",
                        "aria-label": null != f ? f : "",
                        children: function(e) {
                            return (0, o.jsx)(s.Clickable, x(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    r.forEach((function(t) {
                                        R(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, e), {
                                className: O().premiumGuildIcon,
                                onClick: d,
                                children: (0, o.jsx)(N, {
                                    premiumTier: a,
                                    iconBackgroundClassName: n ? O().boostedGuildTierIconBackgroundWithVisibleBanner : null,
                                    iconClassName: n && a !== p.Eu4.TIER_3 ? O().boostedGuildTierMutedIconWithVisibleBanner : null
                                })
                            }))
                        }
                    })
                })
            }

            function L(e) {
                var t = e.guild,
                    n = e.disableColor,
                    r = e.disableBoostClick;
                return (0, c.Z)(t) ? (0, o.jsx)("div", {
                    className: O().guildIconV2Container,
                    children: (0, o.jsx)(j.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: s.Tooltip.Colors.PRIMARY,
                        className: a()(O().guildBadge, R({}, O().disableColor, n)),
                        disableBoostClick: r
                    })
                }) : (0, o.jsx)("div", {
                    className: O().guildIconContainer,
                    children: (0, o.jsx)(v.Z, {
                        guild: t,
                        tooltipPosition: "bottom",
                        tooltipColor: s.Tooltip.Colors.PRIMARY,
                        className: a()(O().guildBadge, R({}, O().disableColor, n))
                    })
                })
            }

            function S(e) {
                var t = e.guild,
                    n = e.isBannerVisible,
                    r = e.disableBoostClick;
                return (0, c.Z)(t) ? (0, o.jsx)(L, {
                    guild: t,
                    disableColor: !1,
                    disableBoostClick: r
                }) : t.hasFeature(p.oNc.VERIFIED) || t.hasFeature(p.oNc.PARTNERED) ? (0, o.jsx)(L, {
                    guild: t,
                    disableColor: !n
                }) : (0, o.jsx)(C, {
                    guild: t,
                    isBannerVisible: n,
                    disableBoostClick: r
                })
            }
        },
        159626: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => A
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                a = n.n(i),
                l = n(70418),
                s = n(153686),
                c = n(19585),
                u = n(293862),
                d = n(443812),
                f = n(652591),
                p = n(338479),
                b = n(2590),
                g = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-]+\.gif)$/;

            function E(e) {
                var t = new URL("".concat(window.location.protocol).concat(e)),
                    n = window.GLOBAL_ENV.ASSET_ENDPOINT;
                if (null == t.pathname.match(g)) throw new Error("Unexpected Tenor GIF path.");
                var r = "".concat(b.ANM.TENOR_ASSET_PATH).concat(t.pathname);
                return "".concat(location.protocol).concat(n).concat(r)
            }
            var h = n(473708),
                m = n(762725),
                y = n.n(m);

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t, n, r, o, i, a) {
                try {
                    var l = e[i](a),
                        s = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function I(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            _(i, r, o, a, l, "next", e)
                        }

                        function l(e) {
                            _(i, r, o, a, l, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        v(e, t, n[t])
                    }))
                }
                return e
            }

            function P(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return N(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var T = function(e, t) {
                var n, r, o, i, a = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
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
                                        r = i[1];
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
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = o = 0
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

            function A(e) {
                var t = e.transitionState,
                    i = e.onClose,
                    g = e.onComplete,
                    m = e.uploadType,
                    N = e.showUpsellHeader,
                    _ = e.analyticsPage,
                    A = P(o.useState(!1), 2),
                    O = A[0],
                    R = A[1],
                    x = (0, l.useModalContext)(),
                    C = (0, d.Dt)(),
                    L = (0,
                        c.Z)(s.Z.GIF_PICKER).AnalyticsLocationProvider;
                o.useEffect((function() {
                    f.default.track(b.rMx.OPEN_MODAL, {
                        type: b.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        location: {
                            page: _
                        }
                    })
                }), [_]);

                function S() {
                    S = I((function(e) {
                        var t, o, a;
                        return T(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (null == (t = e.gifSrc) || O) return [2];
                                    R(!0);
                                    o = E(t);
                                    return [4, fetch(o)];
                                case 1:
                                    return [4, s.sent().blob()];
                                case 2:
                                    a = s.sent();
                                    i();
                                    (0, l.openModalLazy)(I((function() {
                                        var e, t;
                                        return T(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e(40532), n.e(17363), n.e(72935)]).then(n.bind(n, 17363))];
                                                case 1:
                                                    e = i.sent(), t = e.default;
                                                    return [2, function(e) {
                                                        return (0, r.jsx)(t, j({
                                                            imgURI: o,
                                                            file: new File([a], "tenor.gif", {
                                                                type: "image/gif"
                                                            }),
                                                            onCrop: g,
                                                            uploadType: m,
                                                            showUpsellHeader: N
                                                        }, e))
                                                    }]
                                            }
                                        }))
                                    })), {
                                        contextKey: x
                                    });
                                    return [2]
                            }
                        }))
                    }));
                    return S.apply(this, arguments)
                }
                return (0, r.jsx)(L, {
                    children: (0, r.jsxs)(l.ModalRoot, {
                        className: y().gifPickerCroppingModal,
                        "aria-labelledby": C,
                        transitionState: t,
                        size: l.ModalSize.SMALL,
                        children: [N ? (0, r.jsx)(p.Z, {
                            type: m,
                            analyticsPage: _,
                            analyticsSection: b.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0
                        }) : null, (0, r.jsxs)(l.ModalHeader, {
                            className: y().modalHeader,
                            separator: !1,
                            children: [(0, r.jsx)(l.FormTitle, {
                                className: y().titleCase,
                                tag: l.FormTitleTags.H1,
                                children: h.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                            }), (0, r.jsx)(l.ModalCloseButton, {
                                onClick: i,
                                className: y().modalCloseButton
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(u.Z, {
                                className: a()(y().gifPicker, v({}, y().loadingOverlay, O)),
                                onSelectGIF: function(e) {
                                    return S.apply(this, arguments)
                                },
                                hideFavorites: !0
                            }), O && (0, r.jsx)(l.Spinner, {
                                className: y().spinner
                            })]
                        })]
                    })
                })
            }
        },
        338479: (e, t, n) => {
            n.d(t, {
                Z: () => Z
            });
            var r = n(785893),
                o = n(667294),
                i = n(202351),
                a = n(70418),
                l = n(19585),
                s = n(275086),
                c = n(596801),
                u = n(567403),
                d = n(464187),
                f = n(217674),
                p = n(2590),
                b = n(733274),
                g = n(473708),
                E = n(460590),
                h = n.n(E);

            function m(e) {
                var t = e.analyticsSection,
                    n = e.analyticsPage,
                    o = e.isGIF,
                    E = e.banner,
                    m = (0, i.e7)([d.Z], (function() {
                        return d.Z.getGuildId()
                    })),
                    y = (0, i.e7)([u.Z], (function() {
                        return u.Z.getGuild(m)
                    })),
                    N = (0, l.Z)().analyticsLocations;
                if (null == y || y.hasFeature(p.oNc.ANIMATED_BANNER) || !o && y.hasFeature(p.oNc.BANNER)) return null;
                return (0, r.jsxs)("div", {
                    className: h().container,
                    children: [(0, r.jsx)(f.Z, {
                        className: h().guildBoostingIcon
                    }), (0, r.jsx)(a.Text, {
                        color: "header-primary",
                        variant: "text-sm/semibold",
                        children: g.Z.Messages.PREMIUM_GUILD_PREVIEW
                    }), (0, r.jsx)(a.Button, {
                        look: a.Button.Looks.LINK,
                        color: a.Button.Colors.LINK,
                        className: h().subscribeButton,
                        onClick: function() {
                            if (null != y) {
                                var e = {
                                    section: t,
                                    page: n,
                                    object: p.qAy.UPSELL_HEADER
                                };
                                null != E ? (0, s.c)({
                                    analyticsLocations: N,
                                    analyticsLocation: e,
                                    guild: y,
                                    isGIF: o,
                                    banner: E
                                }) : (0, c.Z)({
                                    analyticsLocations: N,
                                    analyticsSourceLocation: e,
                                    guild: y,
                                    perks: o ? (0, b.zC)() : (0, b.XO)()
                                })
                            }
                        },
                        children: g.Z.Messages.PREMIUM_GUILD_BOOST_SERVER
                    })]
                })
            }
            var y = n(153686),
                N = n(294184),
                _ = n.n(N),
                I = n(366007),
                v = n(406493),
                j = n(98265),
                P = n(477002),
                T = n.n(P);

            function A(e) {
                var t = e.text,
                    n = e.textSize,
                    o = void 0 === n ? j.Z.Sizes.SIZE_12 : n,
                    i = e.textColor,
                    a = void 0 === i ? j.Z.Colors.STANDARD : i,
                    l = e.className,
                    s = e.button,
                    c = e.reducedRightPadding,
                    u = void 0 !== c && c;
                return (0, r.jsxs)("div", {
                    className: _()(u ? T().noticeWithoutRightPadding : T().noticeWithRightPadding, l),
                    children: [(0, r.jsxs)("div", {
                        className: T().noticeLeft,
                        children: [(0, r.jsx)(v.Z, {
                            className: T().icon,
                            color: I.JX.PREMIUM_TIER_2
                        }), (0, r.jsx)(j.Z, {
                            className: T().text,
                            size: o,
                            color: a,
                            children: t
                        })]
                    }), s]
                })
            }
            var O = n(455706),
                R = n(473903),
                x = n(652591),
                C = n(116094),
                L = n(921431),
                S = n(203600),
                M = n(167633),
                B = n.n(M);

            function w(e) {
                var t = e.analyticsSection,
                    n = e.type,
                    s = (0, i.e7)([R.default], (function() {
                        return R.default.getCurrentUser()
                    })),
                    c = C.ZP.canUseAnimatedAvatar(s),
                    u = C.ZP.canUsePremiumProfileCustomization(s),
                    d = n === L.pC.BANNER && u || n === L.pC.AVATAR && c,
                    f = (0, l.Z)(y.Z.PREMIUM_PREVIEW_UPSELL_HEADER).sourceAnalyticsLocations;
                o.useEffect((function() {
                    d || x.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                        type: t,
                        location_stack: f
                    })
                }), [d, t, f]);
                if (d) return null;
                var b = (0, r.jsx)(O.Z, {
                    className: B().getNitroLink,
                    size: a.Button.Sizes.SMALL,
                    look: a.Button.Looks.LINK,
                    color: a.Button.Colors.LINK,
                    subscriptionTier: S.Si.TIER_2,
                    buttonText: g.Z.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
                    showIcon: !1,
                    premiumModalAnalyticsLocation: {
                        section: t,
                        object: p.qAy.BUTTON_CTA
                    },
                    disableShine: !0
                });
                return (0, r.jsx)(A, {
                    reducedRightPadding: !0,
                    className: B().nitroPreviewUpsell,
                    text: g.Z.Messages.PREMIUM_PREVIEW.format(),
                    textSize: j.Z.Sizes.SIZE_14,
                    textColor: j.Z.Colors.HEADER_PRIMARY,
                    button: b
                })
            }

            function Z(e) {
                var t = e.type,
                    n = e.analyticsPage,
                    o = e.analyticsSection,
                    i = e.isGIF,
                    a = e.banner;
                return [L.pC.BANNER, L.pC.AVATAR].includes(t) && i ? (0, r.jsx)(w, {
                    analyticsSection: o,
                    type: t
                }) : t === L.pC.GUILD_BANNER ? (0, r.jsx)(m, {
                    analyticsSection: o,
                    analyticsPage: n,
                    isGIF: i,
                    banner: a
                }) : null
            }
        },
        957083: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = function() {
                function e(t, n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._elements = [];
                    this._createElement = t;
                    this._cleanElement = n
                }
                var t = e.prototype;
                t.getElement = function() {
                    return 0 === this._elements.length ? this._createElement() : this._elements.pop()
                };
                t.poolElement = function(e) {
                    this._cleanElement(e);
                    this._elements.push(e)
                };
                t.clearPool = function() {
                    this._elements.length = 0
                };
                return e
            }()
        }
    }
]);