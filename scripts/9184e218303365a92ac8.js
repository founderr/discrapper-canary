"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [21145], {
        121145: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => Te
            });
            var r = n(785893),
                a = n(667294),
                i = n(294184),
                l = n.n(i),
                s = n(571657),
                c = n(318715),
                o = n(575945),
                u = n(70418),
                d = n(251295),
                m = n(396043),
                T = n(479373),
                f = n(795470),
                p = n(64234),
                _ = n(169649),
                h = n(189865),
                E = n(472034),
                x = n(652591),
                I = n(142926),
                g = n(281110),
                O = n(744564),
                v = n(2590);

            function S(e, t, n, r, a, i, l) {
                try {
                    var s = e[i](l),
                        c = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function j(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function l(e) {
                            S(i, r, a, l, s, "next", e)
                        }

                        function s(e) {
                            S(i, r, a, l, s, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var b = function(e, t) {
                var n, r, a, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = l.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < a[1]) {
                                            l.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && l.label < a[2]) {
                                            l.label = a[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        a[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            };

            function y(e) {
                return L.apply(this, arguments)
            }

            function L() {
                return (L = j((function(e) {
                    var t, n;
                    return b(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, g.ZP.get({
                                    url: v.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e)
                                })];
                            case 1:
                                t = r.sent();
                                null != (n = t.body).templates && O.Z.dispatch({
                                    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES",
                                    templates: n.templates,
                                    guildId: e
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var N = n(106004),
                R = n(844793),
                C = n(617225),
                P = n(547308),
                A = n(87931),
                M = n(823975),
                D = n(107134),
                U = n(172295),
                w = n(544031),
                B = n(407558),
                k = n(804134),
                Z = n(575641),
                G = n(124296),
                H = n(473708),
                z = n(900577),
                F = n.n(z);

            function K(e) {
                var t = e.listing,
                    n = t.name,
                    a = t.image,
                    i = t.description,
                    l = (0, Z.T4)(t.price_tier, v.pKx.USD);
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("div", {
                        className: F().listingInfoRow,
                        children: [(0, r.jsx)("img", {
                            src: a,
                            alt: "",
                            className: F().avatar
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(u.Heading, {
                                variant: "heading-md/medium",
                                className: F().tierName,
                                children: n
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/medium",
                                tag: "span",
                                children: l
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-xxs/medium",
                                tag: "span",
                                children: "/mo."
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: F().listingRoleRow,
                        children: [(0,
                            r.jsx)("div", {
                            style: {
                                backgroundColor: (0, P.Rf)(t.role_color)
                            },
                            className: F().roleColor
                        }), (0, r.jsx)("img", {
                            src: a,
                            alt: "",
                            className: F().roleIcon
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            children: n
                        })]
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: F().tierDescription,
                        children: i
                    })]
                })
            }

            function V(e) {
                var t = e.channel,
                    n = function(e) {
                        switch (e) {
                            case v.d4z.GUILD_TEXT:
                                return M.Z;
                            case v.d4z.GUILD_VOICE:
                                return B.Z;
                            case v.d4z.GUILD_STAGE_VOICE:
                                return k.Z;
                            case v.d4z.GUILD_FORUM:
                                return D.Z;
                            case v.d4z.GUILD_MEDIA:
                                return U.Z;
                            case v.d4z.GUILD_ANNOUNCEMENT:
                                return w.Z;
                            default:
                                return null
                        }
                    }(t.type);
                return (0, r.jsxs)("div", {
                    className: F().channelBenefitRow,
                    children: [null != n && (0, r.jsx)(n, {
                        className: F().channelBenefitIcon
                    }), (0, r.jsxs)("div", {
                        className: F().channelBenefitText,
                        children: [(0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            children: t.name
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            className: F().channelBenefitTagline,
                            children: t.tagline
                        })]
                    }), (0, r.jsx)(G.Z, {
                        className: F().emojiIcon,
                        color: A.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
                    })]
                })
            }

            function X(e) {
                var t = e.benefit;
                return void 0 === t ? null : (0, r.jsxs)("div", {
                    className: F().intangibleBenefitRow,
                    children: [(0, r.jsx)("div", {
                        className: F().intangibleBenefitIcon
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        children: t
                    })]
                })
            }

            function Y(e) {
                var t = e.listing;
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(u.Heading, {
                        variant: "heading-sm/semibold",
                        className: F().perksHeader,
                        children: H.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PERKS_HEADER
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-xs/semibold",
                        className: F().benefitTypeHeader,
                        children: H.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_EXCLUSIVE_CHANNELS_HEADER
                    }), t.channels.map((function(e) {
                        return (0, r.jsx)(V, {
                            channel: e
                        }, e.id)
                    })), (0, r.jsx)(u.Text, {
                        variant: "text-xs/semibold",
                        className: F().benefitTypeHeader,
                        children: H.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_EXCLUSIVE_BENEFITS_HEADER
                    }), t.additional_perks.map((function(e, t) {
                        return (0, r.jsx)(X, {
                            benefit: e.name
                        }, t)
                    }))]
                })
            }

            function q(e) {
                var t = e.selectedTemplate,
                    n = e.handleSelectTemplate;
                if (void 0 === t) return null;
                var a = t.listings[0];
                return (0, r.jsxs)("div", {
                    className: F().container,
                    children: [(0, r.jsxs)(u.ScrollerThin, {
                        className: F().content,
                        children: [(0, r.jsx)(K, {
                            listing: a
                        }), (0, r.jsx)("div", {
                            className: F().divider
                        }), (0, r.jsx)(Y, {
                            listing: a
                        })]
                    }), (0, r.jsx)(u.Button, {
                        size: u.Button.Sizes.MEDIUM,
                        onClick: function() {
                            n(t)
                        },
                        children: H.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_SELECT_TEMPLATE_BUTTON
                    })]
                })
            }
            var W = n(61291),
                $ = n.n(W);

            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Q(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Q(e, t, n[t])
                    }))
                }
                return e
            }

            function te(e, t) {
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

            function ne(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            l = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return J(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return J(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function re(e) {
                var t = e.price,
                    n = e.selected,
                    a = e.onClick;
                return (0, r.jsxs)(u.Clickable, {
                    className: l()($().priceRow, Q({}, $().selected, n)),
                    onClick: a,
                    children: [n ? (0, r.jsx)(_.Z, {
                        width: 20,
                        height: 20,
                        backgroundColor: (0, f.Lq)(v.Ilk.WHITE_500),
                        color: (0, f.Lq)(v.Ilk.BRAND_500)
                    }) : (0, r.jsx)("svg", {
                        width: "20",
                        height: "20",
                        children: (0, r.jsx)("circle", {
                            cx: 10,
                            cy: 10,
                            r: 10,
                            className: $().circle
                        })
                    }), (0, r.jsxs)("div", {
                        className: $().priceRowText,
                        children: [(0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            tag: "span",
                            children: (0, Z.T4)(t, v.pKx.USD)
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-xxs/medium",
                            tag: "span",
                            children: "/mo."
                        })]
                    })]
                })
            }

            function ae(e) {
                var t = e.selectedTemplate,
                    n = e.handleSelectTemplate,
                    i = e.newPricesToPick,
                    l = ne(a.useState(0), 2),
                    s = l[0],
                    c = l[1];
                return (0, r.jsxs)("div", {
                    className: $().container,
                    children: [(0, r.jsxs)("div", {
                        className: $().content,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            children: H.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PRICE_RESELECTION_HEADER.format({
                                tierName: t.listings[0].name
                            })
                        }), (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: $().bodyText,
                            children: H.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PRICE_RESELECTION_BODY.format({
                                price: (0, Z.T4)(t.listings[0].price_tier, v.pKx.USD)
                            })
                        }), i.map((function(e, t) {
                            return (0, r.jsx)(re, {
                                price: e,
                                selected: t === s,
                                onClick: function() {
                                    return c(t)
                                }
                            }, e)
                        }))]
                    }), (0, r.jsx)(u.Button, {
                        size: u.Button.Sizes.MEDIUM,
                        onClick: function() {
                            n(te(ee({}, t), {
                                listings: [te(ee({}, t.listings[0]), {
                                    price_tier: i[s]
                                })]
                            }))
                        },
                        children: H.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_SELECT_TEMPLATE_BUTTON
                    })]
                })
            }
            var ie = n(808399),
                le = n.n(ie);

            function se(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ce(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function oe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            l = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(l = (r = n.next()).done); l = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return se(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return se(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ue(e) {
                var t = e.name,
                    n = e.imageUrl,
                    a = e.selected,
                    i = e.onTap;
                return (0, r.jsxs)(u.Clickable, {
                    onClick: i,
                    className: le().templateCard,
                    children: [(0, r.jsx)("img", {
                        src: n,
                        alt: "",
                        className: le().templateCardImage
                    }), (0, r.jsxs)("div", {
                        className: le().templateNameRow,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-md/normal",
                            className: l()(ce({}, le().unselectedTemplateName, !a)),
                            children: t
                        }), a && (0, r.jsx)(_.Z, {
                            backgroundColor: (0, f.Lq)(v.Ilk.WHITE_500),
                            color: (0, f.Lq)(v.Ilk.BRAND_500)
                        })]
                    })]
                })
            }

            function de(e) {
                var t = e.loading,
                    n = e.error,
                    a = e.templates,
                    i = e.selectedTemplateIndex,
                    l = e.handleTapTemplate,
                    s = (0, c.ZP)([p.Z], (function() {
                        return p.Z.theme
                    }));
                return t ? (0, r.jsx)(u.Spinner, {}) : null != n ? (0, r.jsx)(C.Z, {
                    children: n.message
                }) : null == a || 0 === a.length ? null : (0, r.jsx)("div", {
                    className: le().templateCardList,
                    children: a.map((function(e, t) {
                        return (0, r.jsx)(ue, {
                            imageUrl: t === i ? e.category_image : (0, o.ap)(s) ? e.unselected_light_theme_category_image : e.unselected_dark_theme_category_image,
                            name: e.category,
                            selected: t === i,
                            onTap: function() {
                                return l(t)
                            }
                        }, t)
                    }))
                })
            }

            function me(e) {
                var t, n, i = e.guildId,
                    l = e.templates,
                    s = e.selectedTemplateIndex,
                    c = e.priceTiers,
                    o = e.showPriceReselection,
                    u = e.setShowPriceReselection,
                    d = e.handleCreateTierFromTemplate,
                    m = (0, R.g4)(i, c, null != l ? null === (n = null === (t = l[s]) || void 0 === t ? void 0 : t.listings[0]) || void 0 === n ? void 0 : n.price_tier : void 0),
                    T = null != m && m.length > 0,
                    f = a.useCallback((function(e) {
                        T ? u(!0) : d(e)
                    }), [d, T, u]);
                return null == l || 0 === l.length ? null : o && T ? (0, r.jsx)(ae, {
                    selectedTemplate: l[s],
                    handleSelectTemplate: d,
                    newPricesToPick: m
                }) : (0, r.jsx)(q, {
                    selectedTemplate: l[s],
                    handleSelectTemplate: f
                })
            }

            function Te(e) {
                var t = e.transitionState,
                    n = e.onClose,
                    i = e.guildId,
                    l = e.addNewEditStateFromTemplate,
                    o = e.addNewEditStateFromScratch,
                    f = e.priceTiers,
                    p = (0, c.ZP)([N.Z], (function() {
                        return N.Z.getTemplates(i)
                    })),
                    _ = oe((0, d.Z)(y), 2),
                    g = _[0],
                    S = _[1],
                    j = S.loading,
                    b = S.error,
                    L = a.useRef("voluntarily_exit");
                a.useEffect((function() {
                    null != p && 0 !== p.length || g(i)
                }), [g, i, p]);
                a.useEffect((function() {
                    t === u.ModalTransitionState.EXITING && x.default.track(v.rMx.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                ce(e, t, n[t])
                            }))
                        }
                        return e
                    }({
                        exit_reason: L.current
                    }, (0, m.hH)(i)))
                }), [t, i, L]);
                var R = oe(a.useState(0), 2),
                    C = R[0],
                    P = R[1],
                    A = oe(a.useState(!1), 2),
                    M = A[0],
                    D = A[1],
                    U = a.useCallback((function(e) {
                        L.current = "template_selected";
                        ! function(e, t) {
                            O.Z.dispatch({
                                type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
                                selectedTemplate: e,
                                guildId: t
                            })
                        }(e, i);
                        l(e);
                        n()
                    }), [i, l, n]),
                    w = a.useCallback((function() {
                        M ? D(!1) : n()
                    }), [M, n]),
                    B = (0, I.yi)(i);
                (0, T.Z)({
                    type: s.nv.MODAL,
                    name: s.zs.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR,
                    properties: {
                        guild_id: i
                    }
                });
                return (0, r.jsxs)(u.ModalRoot, {
                    transitionState: t,
                    size: u.ModalSize.DYNAMIC,
                    className: le().modalRoot,
                    children: [(0, r.jsx)(u.Clickable, {
                        onClick: w,
                        className: le().closeButton,
                        children: (0, r.jsx)(h.Z, {
                            width: 12,
                            height: 12
                        })
                    }), (0, r.jsxs)(u.ModalContent, {
                        className: le().modalContent,
                        children: [(0, r.jsxs)("div", {
                            className: le().templatesContainer,
                            children: [M && (0, r.jsx)(u.Clickable, {
                                className: le().blackoutOverlay,
                                onClick: function() {
                                    M && D(!1)
                                },
                                "aria-label": "overlay"
                            }), (0, r.jsxs)(u.ScrollerThin, {
                                className: le().templatesContainerBody,
                                children: [(0, r.jsx)(u.Heading, {
                                    variant: "heading-xl/semibold",
                                    children: H.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_HEADER
                                }), (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: le().modalBodyText,
                                    children: H.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_BODY
                                }), B && (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: le().creatorPortalText,
                                    children: H.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATOR_PORTAL_LINK.format({
                                        creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons"
                                    })
                                }), (0, r.jsx)("div", {
                                    className: le().templatesContentContainer,
                                    children: (0, r.jsx)(de, {
                                        loading: j,
                                        error: b,
                                        templates: p,
                                        selectedTemplateIndex: C,
                                        handleTapTemplate: function(e) {
                                            P(e)
                                        }
                                    })
                                })]
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: H.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATE_FROM_SCRATCH_PROMPT
                            }), (0, r.jsxs)(u.Button, {
                                size: u.Button.Sizes.MEDIUM,
                                onClick: function() {
                                    L.current = "create_from_scratch";
                                    o();
                                    n()
                                },
                                look: u.Button.Looks.OUTLINED,
                                color: u.Button.Colors.PRIMARY,
                                borderColor: u.Button.BorderColors.PRIMARY,
                                className: le().createFromStratchButton,
                                innerClassName: le().createFromStratchButtonInner,
                                children: [(0, r.jsx)(E.Z, {
                                    width: 14,
                                    height: 14,
                                    className: le().editIcon
                                }), H.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_CREATE_FROM_SCRATCH_BUTTON]
                            })]
                        }), (0, r.jsx)(me, {
                            guildId: i,
                            templates: p,
                            selectedTemplateIndex: C,
                            priceTiers: f,
                            showPriceReselection: M,
                            setShowPriceReselection: D,
                            handleCreateTierFromTemplate: U
                        })]
                    })]
                })
            }
        }
    }
]);