"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [65094], {
        389672: (e, r, n) => {
            n.d(r, {
                Z: () => I
            });
            var t = n(785893),
                o = n(667294),
                i = n(294184),
                s = n.n(i),
                l = n(228721),
                a = n(547308),
                c = n(795308),
                u = n(304548),
                d = n(502526),
                f = n(795470),
                h = n(577939),
                m = n(912250),
                v = n(339822),
                b = n(2590),
                g = n(473708),
                p = n(166251),
                y = n.n(p);

            function S(e, r) {
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

            function E(e) {
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

            function j(e, r) {
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

            function T(e, r) {
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
                    if ("string" == typeof e) return S(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e) {
                var r = e.onChange,
                    n = e.onClose,
                    i = e.color,
                    p = e.suggestedColors,
                    S = e.disabled,
                    I = e.label,
                    O = e.colorPickerMiddle,
                    x = e.colorPickerFooter,
                    R = e.showEyeDropper,
                    A = o.useRef(null),
                    w = (0, u.useToken)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
                    P = c.Z.colors.BACKGROUND_ACCENT.css,
                    _ = (0, v.DP)(i),
                    Z = (0,
                        a.Rf)(i),
                    M = Z === w ? P : Z,
                    k = (0, f.Lq)(_ ? b.Ilk.WHITE_500 : b.Ilk.PRIMARY_530),
                    B = (0, d.Z)(O),
                    L = (0, d.Z)(x),
                    D = T(o.useState((0, l.Z)()), 2),
                    G = D[0],
                    U = D[1];
                o.useEffect((function() {
                    B === O && L === x || U((0, l.Z)())
                }), [x, O, L, B]);
                return (0, t.jsx)(u.Popout, {
                    positionKey: G,
                    renderPopout: function(e) {
                        return (0, t.jsx)(h.Z$, C(E({}, e), {
                            value: i,
                            onChange: r,
                            suggestedColors: p,
                            middle: O,
                            footer: x,
                            showEyeDropper: R
                        }))
                    },
                    onRequestClose: n,
                    children: function(e) {
                        var r = e.onClick,
                            n = j(e, ["onClick"]);
                        return (0, t.jsxs)("div", {
                            ref: A,
                            className: s()(y().colorSwatch, N({}, y().disabled, S)),
                            children: [(0, t.jsx)(u.Clickable, C(E({}, n), {
                                tabIndex: S ? -1 : 0,
                                onClick: S ? b.dG4 : r,
                                style: {
                                    backgroundColor: Z,
                                    borderColor: M
                                },
                                className: y().swatch,
                                "aria-label": g.Z.Messages.USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR,
                                focusProps: {
                                    ringTarget: A
                                },
                                children: (0, t.jsx)(m.Z, {
                                    className: y().editPencilIcon,
                                    width: 14,
                                    height: 14,
                                    color: k
                                })
                            })), I]
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
                l = n(304548),
                a = n(369263),
                c = n(473708),
                u = n(753388),
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
                s = n(304548),
                l = n(709189),
                a = n(339822),
                c = n(369263),
                u = n(921431),
                d = n(473708),
                f = n(807640),
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
                    N = e.isTryItOutFlow,
                    E = void 0 !== N && N,
                    C = e.forcedDivider,
                    j = e.withHighlight,
                    T = void 0 !== j && j,
                    I = T ? l.C : s.Button;
                return (0, t.jsx)(c.Z, {
                    className: p,
                    title: f,
                    errors: n,
                    disabled: S,
                    forcedDivider: C,
                    children: (0, t.jsxs)("div", {
                        className: h().buttonsContainer,
                        children: [(0, t.jsx)(I, {
                            className: i()(m({}, h().buttonHighlighted, T)),
                            size: s.Button.Sizes.SMALL,
                            onClick: function() {
                                return (0, a.$r)(u.pC.AVATAR, g, E, E ? v : void 0)
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
                Z: () => g
            });
            var t = n(785893),
                o = (n(667294),
                    n(294184)),
                i = n.n(o),
                s = n(318715),
                l = n(304548),
                a = n(821),
                c = n(149258),
                u = n(102007),
                d = n(598679),
                f = n(203600),
                h = n(107159),
                m = n.n(h);

            function v(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function b(e) {
                var r = e.errors;
                return (0, t.jsx)(t.Fragment, {
                    children: r.map((function(e, r) {
                        return (0, t.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            color: "text-danger",
                            className: m().errorMessage,
                            children: (n = e, n.replace(/[0-9.,]+ ?kb/g, (function(e) {
                                var r = 1024 * parseInt(e, 10);
                                return isNaN(r) ? e : (0, c.Ng)(r)
                            })))
                        }, r);
                        var n
                    }))
                })
            }

            function g(e) {
                var r, n = e.title,
                    o = e.titleIcon,
                    c = e.titleId,
                    h = e.description,
                    g = e.children,
                    p = e.className,
                    y = e.errors,
                    S = e.disabled,
                    N = void 0 !== S && S,
                    E = e.hideDivider,
                    C = void 0 !== E && E,
                    j = e.showBorder,
                    T = void 0 !== j && j,
                    I = e.borderType,
                    O = e.hasBackground,
                    x = void 0 !== O && O,
                    R = e.forcedDivider,
                    A = void 0 !== R && R,
                    w = e.showPremiumIcon,
                    P = void 0 !== w && w,
                    _ = (0, s.ZP)([a.Z], (function() {
                        var e = a.Z.activeSubstep;
                        return null != e && f.rN[e] === f.QD.PROFILE_CUSTOMIZATION
                    }));
                return (0,
                    t.jsx)("div", {
                    className: i()(m().customizationSection, p, (r = {}, v(r, m().disabled, N), v(r, m().hideDivider, C), v(r, m().showBorder, T), v(r, m().withDivider, A), r)),
                    children: (0, t.jsxs)(d.Z, {
                        className: m().customizationSectionBorder,
                        backgroundClassName: m().customizationSectionBackground,
                        isShown: T && !_,
                        type: I,
                        hasBackground: x,
                        children: [(0, t.jsxs)(l.FormTitle, {
                            className: m().title,
                            id: c,
                            children: [n, P && (0, t.jsx)(u.Z, {}), o]
                        }), null != h ? (0, t.jsx)(l.FormText, {
                            type: l.FormText.Types.DESCRIPTION,
                            className: m().sectionDescription,
                            children: h
                        }) : null, g, null != y && (0, t.jsx)(b, {
                            errors: y
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
                o = (n(667294), n(304548)),
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
                o = (n(667294), n(294184)),
                i = n.n(o),
                s = n(304548),
                l = n(709189),
                a = n(339822),
                c = n(369263),
                u = n(921431),
                d = n(473708),
                f = n(20945),
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
                    N = void 0 !== S && S,
                    E = e.forcedDivider,
                    C = e.withHighlight,
                    j = void 0 !== C && C,
                    T = j ? l.C : s.Button;
                return (0, t.jsx)(c.Z, {
                    className: v,
                    title: d.Z.Messages.USER_SETTINGS_PROFILE_BANNER,
                    showPremiumIcon: y,
                    errors: n,
                    disabled: g,
                    forcedDivider: E,
                    children: (0, t.jsxs)("div", {
                        className: h().buttonsContainer,
                        children: [(0, t.jsx)(T, {
                            className: i()(m({}, h().buttonHighlighted, j)),
                            size: s.Button.Sizes.SMALL,
                            onClick: function() {
                                return (0,
                                    a.$r)(u.pC.BANNER, f, N, void 0)
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
                Z: () => N
            });
            var t = n(785893),
                o = (n(667294), n(294184)),
                i = n.n(o),
                s = n(618446),
                l = n.n(s),
                a = n(795308),
                c = n(304548),
                u = n(109206),
                d = n(183490),
                f = n(247269),
                h = n(116094),
                m = n(389672),
                v = n(369263),
                b = n(473708),
                g = n(715683),
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

            function N(e) {
                var r = e.user,
                    n = e.pendingAvatar,
                    o = e.pendingColors,
                    s = e.onThemeColorsChange,
                    g = e.preventDisabled,
                    y = e.guildId,
                    N = e.className,
                    E = e.showPremiumIcon,
                    C = void 0 === E || E,
                    j = e.showResetThemeButton,
                    T = void 0 !== j && j,
                    I = e.forcedDivider,
                    O = (0, d.Z)(r.id, y),
                    x = S((0, f.Z)(r, O, {
                        pendingThemeColors: o,
                        isPreview: !0
                    }), 2),
                    R = x[0],
                    A = x[1],
                    w = h.ZP.canUsePremiumProfileCustomization(r),
                    P = null != n ? n : r.getAvatarURL(y, 80),
                    _ = (0,
                        c.useToken)(a.Z.unsafe_rawColors.PRIMARY_530).hex(),
                    Z = (0, u.Cf)(P, _, !1);
                if (null == R || null == A) return null;
                var M = function(e) {
                    var r = l()(e, null == O ? void 0 : O.themeColors);
                    s(r ? void 0 : e)
                };
                return (0, t.jsx)(v.Z, {
                    title: b.Z.Messages.USER_SETTINGS_PROFILE_THEME,
                    disabled: !w && !g,
                    className: i()(p().profileThemesSection, N),
                    showPremiumIcon: C,
                    forcedDivider: I,
                    children: (0, t.jsxs)("div", {
                        className: p().sectionContainer,
                        children: [(0, t.jsx)("div", {
                            className: p().sparkleContainer,
                            children: (0, t.jsx)(m.Z, {
                                onChange: function(e) {
                                    return M([e, A])
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
                                    return M([R, e])
                                },
                                color: A,
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
                                return M([null, null])
                            },
                            children: b.Z.Messages.USER_SETTINGS_RESET_PROFILE_THEME
                        })]
                    })
                })
            }
        }
    }
]);