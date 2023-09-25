"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [65094], {
        389672: (e, r, n) => {
            n.d(r, {
                Z: () => x
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                l = n(468811),
                a = n.n(l),
                c = n(547308),
                u = n(795308),
                d = n(882723),
                f = n(502526),
                h = n(795470),
                m = n(577939),
                v = n(912250),
                b = n(339822),
                g = n(2590),
                p = n(473708),
                y = n(799324),
                S = n.n(y);

            function E(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
                return t
            }

            function N(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function j(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {},
                        t = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    t.forEach((function(r) {
                        N(e, r, n[r])
                    }))
                }
                return e
            }

            function C(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        r && (t = t.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        n.push.apply(n, t)
                    }
                    return n
                }(Object(r)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                }));
                return e
            }

            function T(e, r) {
                if (null == e) return {};
                var n, t, o = function(e, r) {
                    if (null == e) return {};
                    var n, t, o = {},
                        i = Object.keys(e);
                    for (t = 0; t < i.length; t++) {
                        n = i[t];
                        r.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < i.length; t++) {
                        n = i[t];
                        r.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function I(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var t, o, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (t = n.next()).done); s = !0) {
                                i.push(t.value);
                                if (r && i.length === r) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e) {
                var r = e.onChange,
                    n = e.onClose,
                    i = e.color,
                    l = e.suggestedColors,
                    y = e.disabled,
                    E = e.label,
                    x = e.colorPickerMiddle,
                    O = e.colorPickerFooter,
                    R = e.showEyeDropper,
                    w = o.useRef(null),
                    A = (0, d.useToken)(u.Z.colors.BACKGROUND_PRIMARY).hex(),
                    P = u.Z.colors.BACKGROUND_ACCENT.css,
                    _ = (0, b.DP)(i),
                    Z = (0,
                        c.Rf)(i),
                    k = Z === A ? P : Z,
                    B = (0, h.Lq)(_ ? g.Ilk.WHITE_500 : g.Ilk.PRIMARY_530),
                    M = (0, f.Z)(x),
                    L = (0, f.Z)(O),
                    D = I(o.useState(a().v4()), 2),
                    G = D[0],
                    U = D[1];
                o.useEffect((function() {
                    M === x && L === O || U(a().v4())
                }), [O, x, L, M]);
                return (0, t.jsx)(d.Popout, {
                    positionKey: G,
                    renderPopout: function(e) {
                        return (0, t.jsx)(m.Z$, C(j({}, e), {
                            value: i,
                            onChange: r,
                            suggestedColors: l,
                            middle: x,
                            footer: O,
                            showEyeDropper: R
                        }))
                    },
                    onRequestClose: n,
                    children: function(e) {
                        var r = e.onClick,
                            n = T(e, ["onClick"]);
                        return (0, t.jsxs)("div", {
                            ref: w,
                            className: s()(S().colorSwatch, N({}, S().disabled, y)),
                            children: [(0, t.jsx)(d.Clickable, C(j({}, n), {
                                tabIndex: y ? -1 : 0,
                                onClick: y ? g.dG4 : r,
                                style: {
                                    backgroundColor: Z,
                                    borderColor: k
                                },
                                className: S().swatch,
                                "aria-label": p.Z.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                                focusProps: {
                                    ringTarget: w
                                },
                                children: (0, t.jsx)(v.Z, {
                                    className: S().editPencilIcon,
                                    width: 14,
                                    height: 14,
                                    color: B
                                })
                            })), E]
                        })
                    }
                })
            }
        },
        546083: (e, r, n) => {
            n.d(r, {
                Z: () => f
            });
            var t = n(785893),
                o = (n(667294),
                    n(294184)),
                i = n.n(o),
                s = n(289283),
                l = n(882723),
                a = n(369263),
                c = n(473708),
                u = n(779674),
                d = n.n(u);

            function f(e) {
                var r = e.children,
                    n = e.className,
                    o = e.layoutClassName,
                    u = e.profilePreview,
                    f = e.previewTitle,
                    h = function() {
                        return (0, t.jsx)(a.Z, {
                            title: null != f ? f : c.Z.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
                            className: d().preview,
                            children: u
                        })
                    };
                return (0, t.jsx)("div", {
                    className: n,
                    children: (0, t.jsxs)(l.FormSection, {
                        className: d().profileCustomizationSection,
                        children: [s.tq && h(), (0, t.jsxs)("div", {
                            className: i()(d().baseLayout, o),
                            children: [r, !s.tq && h()]
                        })]
                    })
                })
            }
        },
        718421: (e, r, n) => {
            n.d(r, {
                Z: () => b
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                s = n(882723),
                l = n(709189),
                a = n(339822),
                c = n(369263),
                u = n(921431),
                d = n(473708),
                f = n(221260),
                h = n.n(f);

            function m(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }
            var v = [{
                name: "gif",
                extensions: ["gif"]
            }];

            function b(e) {
                var r = e.showRemoveAvatarButton,
                    n = e.errors,
                    o = e.onAvatarChange,
                    f = e.sectionTitle,
                    b = e.changeAvatarButtonText,
                    g = e.guildId,
                    p = e.className,
                    y = e.disabled,
                    S = void 0 !== y && y,
                    E = e.isTryItOutFlow,
                    N = void 0 !== E && E,
                    j = e.forcedDivider,
                    C = e.withHighlight,
                    T = void 0 !== C && C,
                    I = T ? l.C : s.Button;
                return (0, t.jsx)(c.Z, {
                    className: p,
                    title: f,
                    errors: n,
                    disabled: S,
                    forcedDivider: j,
                    children: (0, t.jsxs)("div", {
                        className: h().buttonsContainer,
                        children: [(0, t.jsx)(I, {
                            className: i()(m({}, h().buttonHighlighted, T)),
                            size: s.Button.Sizes.SMALL,
                            onClick: function() {
                                return (0, a.$r)(u.pC.AVATAR, g, N, N ? v : void 0, o)
                            },
                            children: null != b ? b : d.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
                        }), r && (0, t.jsx)(s.Button, {
                            className: h().removeButton,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.SMALL,
                            onClick: function() {
                                return o(null)
                            },
                            children: null != g ? d.Z.Messages.USER_SETTINGS_RESET_AVATAR : d.Z.Messages.USER_SETTINGS_REMOVE_AVATAR
                        })]
                    })
                })
            }
        },
        369263: (e, r, n) => {
            n.d(r, {
                Z: () => m
            });
            var t = n(785893),
                o = (n(667294),
                    n(294184)),
                i = n.n(o),
                s = n(882723),
                l = n(149258),
                a = n(102007),
                c = n(598679),
                u = n(165667),
                d = n.n(u);

            function f(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function h(e) {
                var r = e.errors;
                return (0, t.jsx)(t.Fragment, {
                    children: r.map((function(e, r) {
                        return (0, t.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-danger",
                            className: d().errorMessage,
                            children: (n = e, n.replace(/[0-9.,]+ ?kb/g, (function(e) {
                                var r = 1024 * parseInt(e, 10);
                                return isNaN(r) ? e : (0, l.Ng)(r)
                            })))
                        }, r);
                        var n
                    }))
                })
            }

            function m(e) {
                var r, n = e.title,
                    o = e.titleIcon,
                    l = e.titleId,
                    u = e.description,
                    m = e.children,
                    v = e.className,
                    b = e.errors,
                    g = e.disabled,
                    p = void 0 !== g && g,
                    y = e.hideDivider,
                    S = void 0 !== y && y,
                    E = e.showBorder,
                    N = void 0 !== E && E,
                    j = e.borderType,
                    C = e.hasBackground,
                    T = void 0 !== C && C,
                    I = e.forcedDivider,
                    x = void 0 !== I && I,
                    O = e.showPremiumIcon,
                    R = void 0 !== O && O;
                return (0, t.jsx)("div", {
                    className: i()(d().customizationSection, v, (r = {}, f(r, d().disabled, p), f(r, d().hideDivider, S), f(r, d().showBorder, N), f(r, d().withDivider, x),
                        r)),
                    children: (0, t.jsxs)(c.Z, {
                        className: d().customizationSectionBorder,
                        backgroundClassName: d().customizationSectionBackground,
                        isShown: N,
                        type: j,
                        hasBackground: T,
                        children: [(0, t.jsxs)(s.FormTitle, {
                            className: d().title,
                            id: l,
                            children: [n, R && (0, t.jsx)(a.Z, {}), o]
                        }), null != u ? (0, t.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: d().sectionDescription,
                            children: u
                        }) : null, m, null != b && (0, t.jsx)(h, {
                            errors: b
                        })]
                    })
                })
            }
        },
        380014: (e, r, n) => {
            n.d(r, {
                Z: () => a
            });
            var t = n(785893),
                o = (n(667294), n(882723)),
                i = n(369263),
                s = n(2590),
                l = n(473708);

            function a(e) {
                var r, n;
                return (0, t.jsx)(i.Z, {
                    errors: e.errors,
                    disabled: e.disabled,
                    title: l.Z.Messages.DISPLAY_NAME,
                    children: (0, t.jsx)("div", {
                        children: (0, t.jsx)(o.TextInput, {
                            placeholder: e.placeholder,
                            maxLength: s.JuI,
                            onChange: e.onGlobalNameChange,
                            value: null !== (n = null !== (r = e.pendingGlobalName) && void 0 !== r ? r : e.currentGlobalName) && void 0 !== n ? n : ""
                        })
                    })
                })
            }
        },
        532369: (e, r, n) => {
            n.d(r, {
                Z: () => v
            });
            var t = n(785893),
                o = (n(667294),
                    n(294184)),
                i = n.n(o),
                s = n(882723),
                l = n(709189),
                a = n(339822),
                c = n(369263),
                u = n(921431),
                d = n(473708),
                f = n(34598),
                h = n.n(f);

            function m(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function v(e) {
                var r = e.showRemoveBannerButton,
                    n = e.errors,
                    o = e.onBannerChange,
                    f = e.guildId,
                    v = e.className,
                    b = e.disabled,
                    g = void 0 !== b && b,
                    p = e.showPremiumIcon,
                    y = void 0 === p || p,
                    S = e.isTryItOutFlow,
                    E = void 0 !== S && S,
                    N = e.forcedDivider,
                    j = e.withHighlight,
                    C = void 0 !== j && j,
                    T = C ? l.C : s.Button;
                return (0, t.jsx)(c.Z, {
                    className: v,
                    title: d.Z.Messages.USER_SETTINGS_PROFILE_BANNER,
                    showPremiumIcon: y,
                    errors: n,
                    disabled: g,
                    forcedDivider: N,
                    children: (0, t.jsxs)("div", {
                        className: h().buttonsContainer,
                        children: [(0, t.jsx)(T, {
                            className: i()(m({}, h().buttonHighlighted, C)),
                            size: s.Button.Sizes.SMALL,
                            onClick: function() {
                                return (0, a.$r)(u.pC.BANNER, f, E, void 0, o)
                            },
                            children: d.Z.Messages.CHANGE_BANNER
                        }), r && (0, t.jsx)(s.Button, {
                            className: h().removeButton,
                            color: s.Button.Colors.PRIMARY,
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.SMALL,
                            onClick: function() {
                                return o(null)
                            },
                            children: null != f ? d.Z.Messages.USER_SETTINGS_RESET_BANNER : d.Z.Messages.USER_SETTINGS_REMOVE_BANNER
                        })]
                    })
                })
            }
        },
        526957: (e, r, n) => {
            n.d(r, {
                Z: () => E
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                s = n(618446),
                l = n.n(s),
                a = n(795308),
                c = n(882723),
                u = n(109206),
                d = n(183490),
                f = n(247269),
                h = n(694329),
                m = n(389672),
                v = n(369263),
                b = n(473708),
                g = n(791431),
                p = n.n(g);

            function y(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
                return t
            }

            function S(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var t, o, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (t = n.next()).done); s = !0) {
                                i.push(t.value);
                                if (r && i.length === r) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e) {
                var r = e.user,
                    n = e.pendingAvatar,
                    o = e.pendingColors,
                    s = e.onThemeColorsChange,
                    g = e.preventDisabled,
                    y = e.guildId,
                    E = e.className,
                    N = e.showPremiumIcon,
                    j = void 0 === N || N,
                    C = e.showResetThemeButton,
                    T = void 0 !== C && C,
                    I = e.forcedDivider,
                    x = (0, d.Z)(r.id, y),
                    O = S((0, f.Z)(r, x, {
                        pendingThemeColors: o,
                        isPreview: !0
                    }), 2),
                    R = O[0],
                    w = O[1],
                    A = h.ZP.canUsePremiumProfileCustomization(r),
                    P = null != n ? n : r.getAvatarURL(y, 80),
                    _ = (0, c.useToken)(a.Z.unsafe_rawColors.PRIMARY_530).hex(),
                    Z = (0, u.Cf)(P, _, !1);
                if (null == R || null == w) return null;
                var k = function(e) {
                    var r = l()(e, null == x ? void 0 : x.themeColors);
                    s(r ? void 0 : e)
                };
                return (0, t.jsx)(v.Z, {
                    title: b.Z.Messages.USER_SETTINGS_PROFILE_THEME,
                    disabled: !A && !g,
                    className: i()(p().profileThemesSection, E),
                    showPremiumIcon: j,
                    forcedDivider: I,
                    children: (0, t.jsxs)("div", {
                        className: p().sectionContainer,
                        children: [(0, t.jsx)("div", {
                            className: p().sparkleContainer,
                            children: (0, t.jsx)(m.Z, {
                                onChange: function(e) {
                                    return k([e, w])
                                },
                                color: R,
                                suggestedColors: Z,
                                showEyeDropper: !0,
                                label: (0, t.jsx)(c.Text, {
                                    className: p().colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: b.Z.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
                                })
                            })
                        }), (0, t.jsx)("div", {
                            className: p().sparkleContainer,
                            children: (0, t.jsx)(m.Z, {
                                onChange: function(e) {
                                    return k([R, e])
                                },
                                color: w,
                                suggestedColors: Z,
                                showEyeDropper: !0,
                                label: (0, t.jsx)(c.Text, {
                                    className: p().colorSwatchLabel,
                                    color: "header-secondary",
                                    variant: "text-xs/normal",
                                    "aria-hidden": !0,
                                    children: b.Z.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
                                })
                            })
                        }), T && null != y && (0, t.jsx)(c.Button, {
                            className: p().resetButton,
                            color: c.Button.Colors.PRIMARY,
                            look: c.Button.Looks.LINK,
                            size: c.Button.Sizes.SMALL,
                            onClick: function() {
                                return k([null, null])
                            },
                            children: b.Z.Messages.USER_SETTINGS_RESET_PROFILE_THEME
                        })]
                    })
                })
            }
        }
    }
]);