(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [23775], {
        618446: (e, n, r) => {
            var t = r(539551);
            e.exports = function(e, n) {
                return t(e, n)
            }
        },
        570814: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => t
            });
            const t = r(667294).createContext(void 0)
        },
        703118: (e, n, r) => {
            "use strict";
            r.r(n);
            r.d(n, {
                ClydeEditProfileModalContent: () => U,
                default: () => z
            });
            var t = r(785893),
                o = r(667294),
                i = r(202351),
                l = r(304548),
                c = r(567403),
                a = r(107364),
                s = r(702264),
                u = r(755550),
                f = r(23925),
                d = r(318715),
                p = r(369263),
                b = r(2590),
                h = r(473708),
                g = r(587629),
                y = r.n(g);

            function v(e) {
                var n, r = e.settings,
                    o = (0, d.cj)([u.Z], (function() {
                        return {
                            pendingPersonality: u.Z.getPendingPersonality(),
                            errors: u.Z.getErrors()
                        }
                    })),
                    i = o.pendingPersonality,
                    c = o.errors,
                    a = null != c && Number(c.code) === b.evJ.CLYDE_UNSAFE_PERSONALITY ? c.message : void 0;
                return (0, t.jsxs)(p.Z, {
                    title: h.Z.Messages.PERSONALITY_CLYDE_SECTION,
                    children: [(0, t.jsxs)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        className: y().description,
                        children: [h.Z.Messages.PERSONALITY_DESCRIPTION, " ", (0, t.jsx)(l.Anchor, {
                            href: "https://forms.gle/T12GPi33Pt5ocg89A",
                            children: h.Z.Messages.PERSONALITY_FEEDBACK
                        })]
                    }), (0, t.jsx)(l.TextArea, {
                        value: null !== (n = null != i ? i : r.personality) && void 0 !== n ? n : "",
                        onChange: function(e) {
                            (0, s.j7)(e)
                        },
                        placeholder: h.Z.Messages.PERSONALITY_PLACEHOLDER,
                        maxLength: 1e3,
                        autosize: !0
                    }), null != a ? (0, t.jsx)(l.FormErrorBlock, {
                        className: y().errorBlock,
                        children: a
                    }) : null]
                }, "personality")
            }
            var m = r(441143),
                O = r.n(m),
                j = r(618354),
                w = r(546083),
                P = r(718421),
                x = r(380014),
                C = r(532369),
                S = r(526957),
                E = r(21372),
                N = r(473903),
                k = r(876986),
                I = r(462128),
                Z = r.n(I);

            function _(e) {
                var n = e.guildId,
                    r = e.clydeUser,
                    o = (0, i.cj)([u.Z], (function() {
                        return u.Z.getPendingUpdates()
                    })),
                    l = o.pendingNick,
                    c = o.pendingThemeColors,
                    a = (0, i.e7)([E.ZP], (function() {
                        return E.ZP.getMember(n, k.fL)
                    }));
                return (0, t.jsxs)("div", {
                    className: Z().editProfileSections,
                    children: [(0, t.jsx)(x.Z, {
                        placeholder: h.Z.Messages.CLYDE_NAME,
                        errors: [],
                        currentGlobalName: null == a ? void 0 : a.nick,
                        pendingGlobalName: l,
                        onGlobalNameChange: s.Kt
                    }), (0, t.jsx)(P.Z, {
                        guildId: n,
                        onAvatarChange: s.I5,
                        showRemoveAvatarButton: !0,
                        sectionTitle: h.Z.Messages.CLYDE_SETTINGS_AVATAR_HEADER,
                        isClyde: !0
                    }), (0, t.jsx)(C.Z, {
                        guildId: n,
                        onBannerChange: s.g_,
                        showRemoveBannerButton: !0,
                        showPremiumIcon: !1
                    }), (0, t.jsx)(S.Z, {
                        user: r,
                        guildId: n,
                        showPremiumIcon: !1,
                        preventDisabled: !0,
                        pendingColors: null != c ? c : void 0,
                        onThemeColorsChange: s.z5
                    })]
                })
            }

            function R(e) {
                var n = e.guildId,
                    r = (0, i.cj)([u.Z], (function() {
                        return u.Z.getPendingUpdates()
                    })),
                    o = r.pendingNick,
                    l = r.pendingAvatar,
                    a = r.pendingBanner,
                    f = r.pendingThemeColors,
                    d = (0, i.e7)([N.default], (function() {
                        return N.default.getUser(k.fL)
                    }));
                O()(null != d, "Clyde User must exist");
                var p = (0, i.e7)([c.Z], (function() {
                    return c.Z.getGuild(n)
                }));
                return (0, t.jsx)(w.Z, {
                    className: Z().profileCustomizationTab,
                    previewTitle: "Clyde",
                    profilePreview: (0, t.jsx)(j.Z, {
                        user: d,
                        guild: p,
                        canUsePremiumCustomization: !0,
                        onAvatarChange: s.I5,
                        onBannerChange: s.g_,
                        pendingNickname: null != o ? o : void 0,
                        pendingAvatar: l,
                        pendingBanner: a,
                        pendingThemeColors: null != f ? f : void 0,
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        hideFakeActivity: !0
                    }),
                    children: (0, t.jsx)(_, {
                        guildId: n,
                        clydeUser: d
                    })
                })
            }
            var A = r(498898),
                T = r.n(A);

            function M(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function D(e, n, r, t, o, i, l) {
                try {
                    var c = e[i](l),
                        a = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? n(a) : Promise.resolve(a).then(t, o)
            }

            function L(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(l = (t = r.next()).done); l = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return M(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var B = function(e, n) {
                var r, t, o, i, l = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, t && (o = 2 & i[0] ? t.return : i[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, i[1])).done) return o;
                                (t = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        t = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys,
                                                o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = n.call(e, l)
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
                        }([i, c])
                    }
                }
            };

            function F(e) {
                var n = {};
                void 0 !== e.pendingPersonality && (n.personality = e.pendingPersonality);
                void 0 !== e.pendingNick && (n.nick = e.pendingNick);
                void 0 !== e.pendingAvatar && (n.avatar = e.pendingAvatar);
                void 0 !== e.pendingBanner && (n.banner = e.pendingBanner);
                void 0 !== e.pendingAccentColor && (n.accent_color = e.pendingAccentColor);
                void 0 !== e.pendingThemeColors && (n.theme_colors = e.pendingThemeColors);
                return n
            }

            function U(e) {
                var n = e.onClose,
                    r = e.guildId,
                    d = (0, i.cj)([u.Z], (function() {
                        return {
                            settings: u.Z.getSettings(r),
                            isFetchingSettings: u.Z.isFetchingSettings(r),
                            isSavingSettings: u.Z.isSavingSettings(),
                            hasPendingChanges: u.Z.hasPendingChanges(),
                            errors: u.Z.getErrors()
                        }
                    })),
                    p = d.settings,
                    b = d.isFetchingSettings,
                    g = d.isSavingSettings,
                    y = d.hasPendingChanges,
                    m = d.errors,
                    O = (0, i.e7)([c.Z], (function() {
                        return c.Z.getGuild(r)
                    })),
                    j = (0, f.OR)(O),
                    w = L(o.useState(!1), 2),
                    P = w[0],
                    x = w[1];
                o.useEffect((function() {
                    (0, s.sN)();
                    return s.lj
                }), []);
                o.useEffect((function() {
                    (0, s.Bn)(r, !0)
                }), [r]);
                o.useEffect((function() {
                    (y || null != m) && x(!1)
                }), [y, m]);
                var C, S, E = (S = (C = function() {
                    var e;
                    return B(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (null == r || !u.Z.hasPendingChanges()) return [2];
                                e = u.Z.getPendingUpdates();
                                return [4, (0, s.CX)(r, F(e))];
                            case 1:
                                n.sent();
                                x(!0);
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, t) {
                        var o = C.apply(e, n);

                        function i(e) {
                            D(o, r, t, i, l, "next", e)
                        }

                        function l(e) {
                            D(o, r, t, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }), function() {
                    return S.apply(this, arguments)
                });
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)(l.ModalHeader, {
                        separator: !1,
                        children: [(0, t.jsx)("div", {
                            className: T().heading,
                            children: (0,
                                t.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                children: h.Z.Messages.CLYDE_CUSTOMIZE
                            })
                        }), (0, t.jsx)(l.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, t.jsx)(l.ScrollerAuto, {
                        className: T().content,
                        children: b || null == p ? (0, t.jsx)(l.Spinner, {
                            type: l.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, t.jsxs)(t.Fragment, {
                            children: [j && (0, t.jsx)(R, {
                                guildId: r
                            }), null != p && (0, t.jsx)("div", {
                                className: T().section,
                                children: (0, t.jsx)(v, {
                                    settings: p
                                })
                            })]
                        })
                    }), (0, t.jsxs)(l.ModalFooter, {
                        direction: a.Z.Direction.HORIZONTAL,
                        className: T().footer,
                        children: [(0, t.jsx)("div", {
                            className: T().resetButtonContainer,
                            children: (0, t.jsx)(l.Button, {
                                onClick: s.c6,
                                color: l.ButtonColors.PRIMARY,
                                size: l.ButtonSizes.SMALL,
                                disabled: !y,
                                children: h.Z.Messages.RESET
                            })
                        }), y && null == m && (0, t.jsx)("div", {
                            className: T().pendingChangesMessage,
                            children: h.Z.Messages.SETTINGS_NOTICE_MESSAGE
                        }), P && (0, t.jsx)("div", {
                            className: T().successfullSaveMessage,
                            children: h.Z.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
                        }), null != m && (0, t.jsx)("div", {
                            className: T().errorMessage,
                            children: h.Z.Messages.CLYDE_SETTINGS_SAVE_FAILED
                        }), (0, t.jsx)("div", {
                            children: (0, t.jsx)(l.Button, {
                                onClick: E,
                                color: l.ButtonColors.GREEN,
                                size: l.ButtonSizes.SMALL,
                                submitting: g,
                                disabled: !y,
                                children: h.Z.Messages.SAVE_CHANGES
                            })
                        })]
                    })]
                })
            }

            function z(e) {
                var n = e.transitionState,
                    r = e.onClose,
                    o = e.guildId;
                return (0, t.jsx)(l.ModalRoot, {
                    transitionState: n,
                    size: l.ModalSize.LARGE,
                    children: (0, t.jsx)(U, {
                        onClose: r,
                        guildId: o
                    })
                })
            }
        },
        888291: (e, n, r) => {
            "use strict";
            r.d(n, {
                S: () => C,
                Z: () => E
            });
            var t = r(785893),
                o = r(667294),
                i = r(294184),
                l = r.n(i),
                c = r(441143),
                a = r.n(c),
                s = r(304548),
                u = r(421281),
                f = r(694755),
                d = r(2590),
                p = r(473708),
                b = r(307436),
                h = r.n(b);

            function g(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function m(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        y(e, n, r[n])
                    }))
                }
                return e
            }

            function O(e, n) {
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

            function j(e, n) {
                return !n || "object" !== P(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function w(e, n) {
                w = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return w(e, n)
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function x(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, t = v(e);
                    if (n) {
                        var o = v(this).constructor;
                        r = Reflect.construct(t, arguments, o)
                    } else r = t.apply(this, arguments);
                    return j(this, r)
                }
            }

            function C(e) {
                var n = e.className,
                    r = e.icon,
                    o = void 0 === r ? null : r;
                return (0, t.jsx)("div", {
                    className: l()(h().imageUploaderIcon, n),
                    children: o
                })
            }
            var S = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && w(e, n)
                }(r, e);
                var n = x(r);

                function r() {
                    g(this, r);
                    var e;
                    (e = n.apply(this, arguments)).inputRef = o.createRef();
                    e.handleRemove = function() {
                        e.props.onChange(null)
                    };
                    return e
                }
                var i = r.prototype;
                i.handleExternalFileChange = function(e) {
                    a()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted");
                    this.inputRef.current.handleFileChange(e)
                };
                i.render = function() {
                    var e, n, r, o, i, c = this.props,
                        a = c.image,
                        b = c.hint,
                        g = c.name,
                        y = c.makeURL,
                        v = c.disabled,
                        j = c.onChange,
                        w = c.showIcon,
                        P = c.showIconDisabled,
                        x = c.className,
                        S = c.imageClassName,
                        E = c.iconClassName,
                        N = c.iconWrapperClassName,
                        k = c.icon,
                        I = c.hideSize,
                        Z = c.imageStyle,
                        _ = c.showRemoveButton,
                        R = c.maxFileSizeBytes,
                        A = c.onFileSizeError,
                        T = c.onOpenImageSelectModal,
                        M = c["aria-label"];
                    null != (e = null != a && /^data:/.test(a) ? a : y(a)) ? n = 'url("'.concat(e, '")') : null != g && (r = (0, t.jsx)("div", {
                        className: h().imageUploaderAcronym,
                        children: (0, u.Zg)(g)
                    }));
                    if (v) return (0, t.jsx)("div", {
                        className: l()(h().imageUploader, h().disabled, x),
                        children: (0, t.jsxs)("div", {
                            className: l()(h().imageUploaderInner, S),
                            style: O(m({}, Z), {
                                backgroundImage: n
                            }),
                            children: [r, P && (0, t.jsx)("div", {
                                className: l()(h().imageUploaderIcon, h().imageUploaderIconDisabled, E),
                                children: k
                            })]
                        })
                    });
                    null != a ? o = (0, t.jsx)(s.Anchor, {
                        className: h().removeButton,
                        onClick: this.handleRemove,
                        children: p.Z.Messages.REMOVE
                    }) : I || (o = (0, t.jsx)("small", {
                        className: h().sizeInfo,
                        children: p.Z.Messages.MINIMUM_SIZE.format({
                            size: d.IXf
                        })
                    }));
                    var D = null !== (i = null != M ? M : b) && void 0 !== i ? i : p.Z.Messages.CHANGE_AVATAR;
                    return (0, t.jsxs)("div", {
                        className: l()(h().imageUploader, x),
                        children: [(0, t.jsx)(s.FocusRing, {
                            within: !0,
                            children: (0, t.jsxs)("div", {
                                className: w ? l()(h().imageUploaderIconWrapper, N) : void 0,
                                children: [(0, t.jsxs)("div", {
                                    className: l()(h().imageUploaderInner, S),
                                    style: O(m({}, Z), {
                                        backgroundImage: n
                                    }),
                                    children: [(0, t.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: r
                                    }), null != T ? (0, t.jsx)(s.Clickable, {
                                        className: h().imageUploaderFileInput,
                                        "aria-label": D,
                                        onClick: T
                                    }) : (0, t.jsx)(f.ZP, {
                                        ref: this.inputRef,
                                        onChange: j,
                                        className: h().imageUploaderFileInput,
                                        "aria-label": D,
                                        tabIndex: 0,
                                        maxFileSizeBytes: R,
                                        onFileSizeError: A
                                    })]
                                }), null != b && (0, t.jsx)("div", {
                                    className: h().imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: b
                                }), w && (0, t.jsx)(C, {
                                    className: E,
                                    icon: k
                                })]
                            })
                        }), _ ? o : null]
                    })
                };
                return r
            }(o.PureComponent);
            S.defaultProps = {
                name: "",
                makeURL: function(e) {
                    return e
                },
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            const E = S
        },
        821: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => g
            });
            var t = r(202351),
                o = r(744564);

            function i(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, n) {
                for (var r = 0; r < n.length; r++) {
                    var t = n[r];
                    t.enumerable = t.enumerable || !1;
                    t.configurable = !0;
                    "value" in t && (t.writable = !0);
                    Object.defineProperty(e, t.key, t)
                }
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function a(e, n) {
                return !n || "object" !== d(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function s(e, n) {
                s = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return s(e, n)
            }
            var u, f, d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, t = c(e);
                    if (n) {
                        var o = c(this).constructor;
                        r = Reflect.construct(t, arguments, o)
                    } else r = t.apply(this, arguments);
                    return a(this, r)
                }
            }

            function b() {
                u = !1;
                f = null
            }
            b();
            var h = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && s(e, n)
                }(r, e);
                var n = p(r);

                function r() {
                    i(this, r);
                    return n.apply(this, arguments)
                }! function(e, n, r) {
                    n && l(e.prototype, n);
                    r && l(e, r)
                }(r, [{
                    key: "hasCompletedStepDuringSession",
                    get: function() {
                        return u
                    }
                }, {
                    key: "activeSubstep",
                    get: function() {
                        return f
                    }
                }]);
                return r
            }(t.ZP.Store);
            h.displayName = "PremiumTutorialSessionStore";
            const g = new h(o.Z, {
                SET_HAS_COMPLETED_STEP: function() {
                    u = !0
                },
                RESET_HAS_COMPLETED_STEP: function() {
                    u = !1
                },
                SET_ACTIVE_SUBSTEP: function(e) {
                    var n = e.substep;
                    f = n
                },
                LOGOUT: function() {
                    b()
                }
            })
        },
        102007: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => p
            });
            var t = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                l = r(304548),
                c = r(406493),
                a = r(473708),
                s = r(148849),
                u = r.n(s);

            function f(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function d(e, n) {
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

            function p(e) {
                var n = e.text,
                    r = void 0 === n ? a.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : n,
                    o = e.className;
                return (0, t.jsx)(l.Tooltip, {
                    text: r,
                    children: function(e) {
                        return (0, t.jsx)(l.Clickable, d(function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var r = null != arguments[n] ? arguments[n] : {},
                                    t = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                t.forEach((function(n) {
                                    f(e, n, r[n])
                                }))
                            }
                            return e
                        }({}, e), {
                            children: (0, t.jsx)(c.Z, {
                                className: i()(u().nitroWheel, o)
                            })
                        }))
                    }
                })
            }
        },
        598679: (e, n, r) => {
            "use strict";
            r.d(n, {
                Y: () => t,
                Z: () => p
            });
            var t, o, i = r(785893),
                l = r(667294),
                c = r(294184),
                a = r.n(c),
                s = r(273465),
                u = r.n(s);

            function f(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }! function(e) {
                e.PREMIUM = "premium";
                e.LIMITED = "limited"
            }(t || (t = {}));
            var d = (f(o = {}, t.PREMIUM, {
                border: u().premiumFeatureBorder,
                background: u().premiumBackground
            }), f(o, t.LIMITED, {
                border: u().limitedFeatureBorder,
                background: u().limitedBackground
            }), o);
            const p = l.forwardRef((function(e, n) {
                var r = e.children,
                    o = e.type,
                    l = void 0 === o ? t.PREMIUM : o,
                    c = e.isShown,
                    s = e.hasBackground,
                    f = void 0 !== s && s,
                    p = e.className,
                    b = e.backgroundClassName;
                if (!c) return (0, i.jsx)(i.Fragment, {
                    children: r
                });
                var h = d[l],
                    g = h.border,
                    y = h.background;
                return (0, i.jsx)("div", {
                    ref: n,
                    className: a()(g, p),
                    children: (0, i.jsx)("div", {
                        className: a()(f ? y : u().background, b),
                        children: r
                    })
                })
            }))
        },
        577939: (e, n, r) => {
            "use strict";
            r.d(n, {
                T6: () => J,
                Z$: () => $,
                k3: () => K,
                ZP: () => X
            });
            var t = r(785893),
                o = r(667294),
                i = r(294184),
                l = r.n(i),
                c = r(798159),
                a = r(457217),
                s = r(547308),
                u = r(304548);

            function f(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function d(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(l = (t = r.next()).done); l = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const p = function() {
                var e = d((0, o.useState)(null), 2),
                    n = e[0],
                    r = e[1];
                (0, o.useEffect)((function() {
                    null != (null === window || void 0 === window ? void 0 : window.EyeDropper) && r(new window.EyeDropper)
                }), []);
                return n
            };
            var b = r(795470),
                h = r(681706),
                g = r(1150),
                y = r(49657),
                v = r.n(y);

            function m(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function O(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        m(e, n, r[n])
                    }))
                }
                return e
            }

            function j(e, n) {
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
            var w = (0, h.iS)((function(e) {
                return (0, t.jsxs)("div", {
                    className: v().wrapper,
                    children: [(0, t.jsx)("div", {
                        className: v().saturation,
                        children: (0, t.jsx)(g.OQ, O({}, e))
                    }), (0, t.jsx)("div", {
                        className: v().hue,
                        children: (0, t.jsx)(g.PS, j(O({}, e), {
                            direction: "horizontal"
                        }))
                    })]
                })
            }));
            const P = o.memo(w);
            var x = r(621329),
                C = r(179649),
                S = r(373438),
                E = r(2590),
                N = r(473708),
                k = r(70812),
                I = r.n(k);

            function Z(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function _(e, n, r, t, o, i, l) {
                try {
                    var c = e[i](l),
                        a = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? n(a) : Promise.resolve(a).then(t, o)
            }

            function R(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function A(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function T(e) {
                T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return T(e)
            }

            function M(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                n && U(e, n)
            }

            function D(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        A(e, n, r[n])
                    }))
                }
                return e
            }

            function L(e, n) {
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

            function B(e, n) {
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

            function F(e, n) {
                return !n || "object" !== G(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function U(e, n) {
                U = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return U(e, n)
            }

            function z(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, o, i = [],
                            l = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(l = (t = r.next()).done); l = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            c = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Z(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Z(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var G = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function H(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, t = T(e);
                    if (n) {
                        var o = T(this).constructor;
                        r = Reflect.construct(t, arguments, o)
                    } else r = t.apply(this, arguments);
                    return F(this, r)
                }
            }
            var Y = function(e, n) {
                    var r, t, o, i, l = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function c(i) {
                        return function(c) {
                            return function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (r = 1, t && (o = 2 & i[0] ? t.return : i[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, i[1])).done) return o;
                                    (t = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            t = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                l.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && l.label < o[1]) {
                                                l.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2];
                                                l.ops.push(i);
                                                break
                                            }
                                            o[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    i = n.call(e, l)
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
                            }([i, c])
                        }
                    }
                },
                W = function() {
                    return Promise.resolve()
                };

            function V(e) {
                var n, r = e.color,
                    o = e.isDefault,
                    i = void 0 !== o && o,
                    c = e.isCustom,
                    f = void 0 !== c && c,
                    d = e.isSelected,
                    p = void 0 !== d && d,
                    h = e.disabled,
                    g = void 0 !== h && h,
                    y = e.style,
                    v = void 0 === y ? {} : y,
                    m = e.onClick,
                    O = e["aria-label"],
                    j = (0, a.JA)("color-".concat(r)),
                    w = null != r ? (0, s.Rf)(r) : v.backgroundColor,
                    P = !1;
                f && !p ? P = !0 : (f || p) && (P = (0, s.Bd)(r) > .1);
                return (0, t.jsx)(u.FocusRing, {
                    offset: -2,
                    children: (0, t.jsxs)("button", L(D({
                        type: "button",
                        className: l()(I().colorPickerSwatch, (n = {}, A(n, I().disabled, g), A(n, I().default, i), A(n, I().custom, f), A(n, I().noColor, null == r), n)),
                        disabled: g,
                        onClick: function() {
                            return null == m ? void 0 : m(r)
                        },
                        style: L(D({}, v), {
                            backgroundColor: w
                        }),
                        "aria-label": null != O ? O : w
                    }, j), {
                        children: [f ? (0, t.jsx)(C.Z, {
                            className: I().colorPickerDropper,
                            foreground: I().colorPickerDropperFg,
                            width: 14,
                            height: 14,
                            color: (0, b.Lq)(P ? E.Ilk.WHITE_500 : E.Ilk.BLACK_500)
                        }) : null, function() {
                            var e = 16,
                                n = 16;
                            if (f || i) {
                                e = 32;
                                n = 24
                            }
                            if (p) return (0, t.jsx)(x.Z, {
                                width: e,
                                height: n,
                                color: (0, b.Lq)(P ? E.Ilk.WHITE_500 : E.Ilk.BLACK_500)
                            })
                        }()]
                    }))
                })
            }
            var K = function(e) {
                    M(r, e);
                    var n = H(r);

                    function r() {
                        R(this, r);
                        return n.apply(this, arguments)
                    }
                    r.prototype.render = function() {
                        var e = this.props,
                            n = e.color,
                            r = e.onChange,
                            o = e.value,
                            i = e.disabled;
                        return (0, t.jsx)(V, {
                            isDefault: !0,
                            color: n,
                            isSelected: n === o || 0 === o,
                            onClick: r,
                            disabled: i
                        })
                    };
                    return r
                }(o.PureComponent),
                J = function(e) {
                    M(r, e);
                    var n = H(r);

                    function r() {
                        R(this, r);
                        return n.apply(this, arguments)
                    }
                    r.prototype.render = function() {
                        var e = this.props,
                            n = e.customColor,
                            r = e.value,
                            o = e.disabled,
                            i = e["aria-label"];
                        return (0, t.jsx)(V, {
                            isCustom: !0,
                            color: n,
                            isSelected: r === n,
                            disabled: o,
                            "aria-label": i
                        })
                    };
                    return r
                }(o.PureComponent),
                q = function(e) {
                    var n = e.value,
                        r = e.onChange,
                        i = e.onClose,
                        l = e.suggestedColors,
                        c = e.middle,
                        a = e.footer,
                        f = e.showEyeDropper,
                        d = p(),
                        b = z(o.useState((function() {
                            var e = null != n ? n : 0,
                                r = (0, s.Rf)(e);
                            return {
                                current: e,
                                pending: r,
                                input: r
                            }
                        })), 2),
                        h = b[0],
                        g = b[1];
                    o.useEffect((function() {
                        if (null != n && n !== h.current) {
                            var e = (0, s.Rf)(n);
                            g({
                                current: n,
                                pending: e,
                                input: e
                            })
                        }
                    }), [n, h]);
                    o.useEffect((function() {
                        return i
                    }), [i]);
                    var y, v, m = function(e) {
                            var n = "#" === e[0] ? e : "#".concat(e);
                            if ((0, s.FX)(n)) {
                                var t = (0, s._i)(n);
                                g({
                                    current: t,
                                    pending: n,
                                    input: n
                                });
                                r(t)
                            } else g((function(e) {
                                return L(D({}, e), {
                                    input: n
                                })
                            }))
                        },
                        O = (v = (y = function() {
                            var e;
                            return Y(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (null == d) return [2];
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, , 4]);
                                        return [4, d.open()];
                                    case 2:
                                        e = n.sent().sRGBHex;
                                        m(e);
                                        return [3, 4];
                                    case 3:
                                        n.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }, function() {
                            var e = this,
                                n = arguments;
                            return new Promise((function(r, t) {
                                var o = y.apply(e, n);

                                function i(e) {
                                    _(o, r, t, i, l, "next", e)
                                }

                                function l(e) {
                                    _(o, r, t, i, l, "throw", e)
                                }
                                i(void 0)
                            }))
                        }), function() {
                            return v.apply(this, arguments)
                        });
                    return (0, t.jsxs)(u.Dialog, {
                        "aria-label": N.Z.Messages.PICK_A_COLOR,
                        className: I().customColorPicker,
                        children: [(0, t.jsx)(P, {
                            onChange: function(e) {
                                return function(e) {
                                    g((function(n) {
                                        return L(D({}, n), {
                                            pending: e,
                                            input: e
                                        })
                                    }))
                                }(e.hex)
                            },
                            onChangeComplete: function(e) {
                                return function(e) {
                                    r((0, s._i)(e))
                                }(e.hex)
                            },
                            color: h.pending
                        }), c, (0, t.jsxs)("div", {
                            className: I().customColorPickerInputContainer,
                            children: [f && null != d && (0, t.jsx)(S.JO, {
                                onClick: O,
                                tooltip: N.Z.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                                tooltipPosition: "top",
                                className: I().customColorPickerEyeDropper,
                                icon: C.Z
                            }), (0, t.jsx)(u.TextInput, {
                                className: I().customColorPickerInput,
                                value: h.input,
                                onChange: m,
                                maxLength: 7
                            })]
                        }), null != l && l.length > 0 && (0, t.jsx)("div", {
                            className: I().suggestedColors,
                            children: l.map((function(e, n) {
                                return (0, t.jsx)(u.Clickable, {
                                    "aria-label": "",
                                    style: {
                                        backgroundColor: e
                                    },
                                    className: I().suggestedColor,
                                    onClick: function() {
                                        return m(e)
                                    }
                                }, "".concat(e, "-").concat(n))
                            }))
                        }), a]
                    })
                },
                $ = o.memo(q);

            function X(e) {
                var n = e.className,
                    r = e.defaultColor,
                    o = e.customColor,
                    i = e.colors,
                    s = e.value,
                    u = e.disabled,
                    f = e.onChange,
                    d = e.renderDefaultButton,
                    p = e.renderCustomButton,
                    b = e.colorContainerClassName,
                    h = function(e) {
                        return (0, t.jsx)("div", {
                            className: I().colorPickerRow,
                            children: e.map((function(e) {
                                return (0, t.jsx)(V, {
                                    color: e,
                                    isSelected: e === s,
                                    onClick: f,
                                    disabled: u
                                }, e)
                            }))
                        })
                    },
                    g = i.slice(0, i.length / 2),
                    y = i.slice(i.length / 2, i.length),
                    v = (0, c.ZP)({
                        id: "color-picker",
                        isEnabled: !0,
                        scrollToStart: W,
                        scrollToEnd: W
                    });
                return (0, t.jsx)(a.bG, {
                    navigator: v,
                    children: (0, t.jsx)(a.SJ, {
                        children: function(e) {
                            var i = e.ref,
                                c = B(e, ["ref"]);
                            return (0, t.jsxs)("div", L(D({
                                className: l()(I().container, n),
                                ref: i
                            }, c), {
                                children: [(0, t.jsx)("div", {
                                    className: l()(I().defaultContainer, b),
                                    children: d({
                                        value: s,
                                        color: r,
                                        onChange: f,
                                        disabled: u
                                    })
                                }), (0, t.jsx)("div", {
                                    className: l()(I().customContainer, b),
                                    children: p({
                                        value: s,
                                        customColor: o,
                                        disabled: u
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: I().presets,
                                    children: [h(g), h(y)]
                                })]
                            }))
                        }
                    })
                })
            }
        },
        179649: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => u
            });
            var t = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
                l = r(633878);

            function c(e, n, r) {
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

            function s(e, n) {
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
            const u = (0, o.hN)((function(e) {
                var n = e.width,
                    r = void 0 === n ? 16 : n,
                    o = e.height,
                    i = void 0 === o ? 16 : o,
                    l = e.color,
                    c = void 0 === l ? "currentColor" : l,
                    a = e.className,
                    s = e.foreground;
                return (0, t.jsx)("svg", {
                    className: a,
                    width: r,
                    height: i,
                    viewBox: "0 0 16 16",
                    children: (0, t.jsxs)("g", {
                        fill: "none",
                        children: [(0, t.jsx)("path", {
                            d: "M-4-4h24v24H-4z"
                        }), (0, t.jsx)("path", {
                            className: s,
                            fill: c,
                            d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
                        })]
                    })
                })
            }), (function(e) {
                var n = e.width,
                    r = void 0 === n ? 24 : n,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    f = e.color,
                    d = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    h = s(e, ["width", "height", "color", "colorClass"]);
                return (0, t.jsx)("svg", a(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        t.forEach((function(n) {
                            c(e, n, r[n])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, t.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "m16.25 2.25-2 2-.629-.629a3 3 0 0 0-4.242 0l-.849.849a.75.75 0 0 0 0 1.06l9.94 9.94a.75.75 0 0 0 1.06 0l.849-.849a3 3 0 0 0 0-4.242l-.629-.63 2-2a3.89 3.89 0 1 0-5.5-5.5ZM9.293 9.707a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-4.829 4.828A5 5 0 0 1 6.76 20.93c-.467.08-.86.418-1.099.827A2.499 2.499 0 0 1 1 20.5c0-.922.5-1.728 1.243-2.162.41-.238.748-.63.827-1.098a5 5 0 0 1 1.394-2.705l4.829-4.828Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        912250: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => u
            });
            var t = r(785893),
                o = (r(667294), r(168075)),
                i = r(218790),
                l = r(633878);

            function c(e, n, r) {
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

            function s(e, n) {
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
            const u = (0, o.hN)((function(e) {
                var n = e.color,
                    r = void 0 === n ? "currentColor" : n,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    u = e.width,
                    f = void 0 === u ? 24 : u,
                    d = s(e, ["color", "height", "width"]);
                return (0, t.jsx)("svg", a(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        t.forEach((function(n) {
                            c(e, n, r[n])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(d)), {
                    width: f,
                    height: i,
                    viewBox: "0 0 24 24",
                    children: (0, t.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                        fill: r
                    })
                }))
            }), i.v)
        },
        373438: (e, n, r) => {
            "use strict";
            r.d(n, {
                JO: () => y,
                iz: () => v,
                ZP: () => O
            });
            var t = r(785893),
                o = r(667294),
                i = r(294184),
                l = r.n(i),
                c = r(108717),
                a = r(289283),
                s = r(304548),
                u = r(570814),
                f = r(249697),
                d = r(136317),
                p = r(211482),
                b = r(526976),
                h = r.n(b);

            function g(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }
            var y = function(e) {
                    var n = e.className,
                        r = e.iconClassName,
                        o = e.children,
                        i = e.selected,
                        c = void 0 !== i && i,
                        a = e.disabled,
                        u = void 0 !== a && a,
                        f = e.showBadge,
                        d = void 0 !== f && f,
                        b = e.color,
                        y = e.foreground,
                        v = e.background,
                        m = e.icon,
                        O = e.onClick,
                        j = e.onContextMenu,
                        w = e.tooltip,
                        P = void 0 === w ? null : w,
                        x = e.tooltipColor,
                        C = e.tooltipPosition,
                        S = void 0 === C ? "bottom" : C,
                        E = e.hideOnClick,
                        N = void 0 === E || E,
                        k = e.role,
                        I = e["aria-label"],
                        Z = e["aria-hidden"],
                        _ = e["aria-checked"],
                        R = e["aria-expanded"],
                        A = e["aria-haspopup"],
                        T = (0, t.jsx)(m, {
                            x: 0,
                            y: 0,
                            width: 24,
                            height: 24,
                            className: l()(r, h().icon),
                            foreground: null != y ? y : void 0,
                            background: null != v ? v : void 0,
                            color: b
                        }),
                        M = I;
                    null == M && "string" == typeof P && (M = P);
                    return (0, t.jsx)(s.Tooltip, {
                        text: P,
                        color: x,
                        position: S,
                        hideOnClick: N,
                        children: function(e) {
                            var i, a = e.onMouseEnter,
                                f = e.onMouseLeave,
                                w = e.onFocus,
                                P = e.onBlur;
                            return null == O ? (0, t.jsx)("div", {
                                className: l()(n, [h().iconWrapper]),
                                children: (0, t.jsx)(m, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: l()(r, h().icon),
                                    foreground: null != y ? y : void 0,
                                    background: null != v ? v : void 0,
                                    color: b,
                                    "aria-hidden": Z,
                                    onMouseEnter: a,
                                    onMouseLeave: f,
                                    onFocus: w,
                                    onBlur: P
                                })
                            }) : (0, t.jsxs)(s.Clickable, {
                                tag: "div",
                                onClick: u ? void 0 : O,
                                onContextMenu: u ? void 0 : j,
                                onMouseEnter: a,
                                onMouseLeave: f,
                                onFocus: w,
                                onBlur: P,
                                className: l()(n, (i = {}, g(i, h().iconWrapper, !0), g(i, h().clickable, !u && null != O), g(i, h().selected, c), i)),
                                role: k,
                                "aria-label": M,
                                "aria-hidden": Z,
                                "aria-checked": _,
                                "aria-haspopup": A,
                                "aria-expanded": R,
                                tabIndex: u || null == O ? -1 : 0,
                                children: [d ? (0, t.jsx)(p.ZP, {
                                    mask: p.ZP.Masks.HEADER_BAR_BADGE,
                                    children: T
                                }) : T, d ? (0, t.jsx)("span", {
                                    className: h().iconBadge
                                }) : null, o]
                            })
                        }
                    })
                },
                v = function(e) {
                    var n = e.className;
                    return (0, t.jsx)("div", {
                        className: l()(h().divider, n)
                    })
                };
            var m = function(e) {
                var n, r = e.className,
                    i = e.innerClassName,
                    f = e.children,
                    d = e.childrenBottom,
                    p = e.toolbar,
                    b = e.onDoubleClick,
                    y = e["aria-label"],
                    v = e["aria-labelledby"],
                    m = e.role,
                    O = e.scrollable,
                    j = e.transparent,
                    w = void 0 !== j && j,
                    P = o.useRef(null),
                    x = o.useContext(u.Z);
                return (0, t.jsx)("section", {
                    className: l()(r, h().container, (n = {}, g(n, h().themed, !w), g(n, h().transparent, w),
                        g(n, h().themedMobile, a.tq), n)),
                    "aria-label": y,
                    "aria-labelledby": v,
                    role: m,
                    ref: P,
                    children: (0, t.jsxs)(s.FocusRingScope, {
                        containerRef: P,
                        children: [(0, t.jsxs)("div", {
                            className: h().upperContainer,
                            children: [(0, t.jsxs)("div", {
                                className: l()(h().children, i, g({}, h().scrollable, O)),
                                onDoubleClick: b,
                                children: [a.tq && null != x ? (0, t.jsx)(c.Z, {
                                    onClick: x,
                                    className: h().hamburger
                                }) : null, f]
                            }), null != p ? (0, t.jsx)("div", {
                                className: h().toolbar,
                                children: p
                            }) : null]
                        }), d]
                    })
                })
            };
            m.Icon = y;
            m.Title = function(e) {
                var n = e.className,
                    r = e.wrapperClassName,
                    o = e.children,
                    i = e.onContextMenu,
                    c = e.onClick,
                    a = e.id,
                    u = e.muted,
                    f = void 0 !== u && u,
                    d = e.level,
                    p = void 0 === d ? 1 : d,
                    b = (0, t.jsx)(s.HeadingLevel, {
                        forceLevel: p,
                        children: (0, t.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: f ? "header-secondary" : void 0,
                            className: l()(n, h().title),
                            id: a,
                            children: o
                        })
                    });
                return null != c ? (0, t.jsx)(s.Clickable, {
                    onClick: c,
                    onContextMenu: i,
                    className: l()(r, h().titleWrapper),
                    children: b
                }) : (0, t.jsx)("div", {
                    className: l()(r, h().titleWrapper),
                    onContextMenu: i,
                    children: b
                })
            };
            m.Divider = v;
            m.Caret = function(e) {
                var n = e.direction;
                return "right" === (void 0 === n ? "right" : n) ? (0, t.jsx)(d.Z, {
                    className: h().caret
                }) : (0, t.jsx)(f.Z, {
                    className: h().caret
                })
            };
            const O = m
        },
        108717: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => f
            });
            var t = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                l = r(364681),
                c = r.n(l);

            function a(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function s(e, n) {
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

            function u(e, n) {
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
            const f = function(e) {
                var n = e.open,
                    r = void 0 !== n && n,
                    o = e.className,
                    l = u(e, ["open", "className"]);
                return (0, t.jsxs)("button", s(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        t.forEach((function(n) {
                            a(e, n, r[n])
                        }))
                    }
                    return e
                }({
                    type: "button",
                    className: i()(c().btnHamburger, a({}, c().btnHamburgerOpen, r), o)
                }, l), {
                    children: [(0, t.jsx)("span", {}), (0, t.jsx)("span", {}), (0, t.jsx)("span", {}), (0, t.jsx)("span", {}), (0, t.jsx)("span", {}), (0, t.jsx)("span", {})]
                }))
            }
        }
    }
]);