(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [21504], {
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
                a = r(567403),
                c = r(107364),
                s = r(702264),
                u = r(755550),
                d = r(23925),
                f = r(318715),
                p = r(369263),
                b = r(2590),
                h = r(473708),
                g = r(587629),
                y = r.n(g);

            function v(e) {
                var n, r = e.settings,
                    o = (0, f.cj)([u.Z], (function() {
                        return {
                            pendingPersonality: u.Z.getPendingPersonality(),
                            errors: u.Z.getErrors()
                        }
                    })),
                    i = o.pendingPersonality,
                    a = o.errors,
                    c = null != a && Number(a.code) === b.evJ.CLYDE_UNSAFE_PERSONALITY ? a.message : void 0;
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
                    }), null != c ? (0, t.jsx)(l.FormErrorBlock, {
                        className: y().errorBlock,
                        children: c
                    }) : null]
                }, "personality")
            }
            var m = r(441143),
                j = r.n(m),
                O = r(618354),
                w = r(546083),
                x = r(718421),
                P = r(380014),
                C = r(532369),
                S = r(526957),
                N = r(21372),
                E = r(473903),
                k = r(876986),
                I = r(462128),
                Z = r.n(I);

            function A(e) {
                var n = e.guildId,
                    r = e.clydeUser,
                    o = (0, i.cj)([u.Z], (function() {
                        return u.Z.getPendingUpdates()
                    })),
                    l = o.pendingNick,
                    a = o.pendingThemeColors,
                    c = (0, i.e7)([N.ZP], (function() {
                        return N.ZP.getMember(n, k.fL)
                    }));
                return (0, t.jsxs)("div", {
                    className: Z().editProfileSections,
                    children: [(0, t.jsx)(P.Z, {
                        placeholder: h.Z.Messages.CLYDE_NAME,
                        errors: [],
                        currentGlobalName: null == c ? void 0 : c.nick,
                        pendingGlobalName: l,
                        onGlobalNameChange: s.Kt
                    }), (0, t.jsx)(x.Z, {
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
                        pendingColors: null != a ? a : void 0,
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
                    c = r.pendingBanner,
                    d = r.pendingThemeColors,
                    f = (0, i.e7)([E.default], (function() {
                        return E.default.getUser(k.fL)
                    }));
                j()(null != f, "Clyde User must exist");
                var p = (0, i.e7)([a.Z], (function() {
                    return a.Z.getGuild(n)
                }));
                return (0, t.jsx)(w.Z, {
                    className: Z().profileCustomizationTab,
                    previewTitle: "Clyde",
                    profilePreview: (0, t.jsx)(O.Z, {
                        user: f,
                        guild: p,
                        canUsePremiumCustomization: !0,
                        onAvatarChange: s.I5,
                        onBannerChange: s.g_,
                        pendingNickname: null != o ? o : void 0,
                        pendingAvatar: l,
                        pendingBanner: c,
                        pendingThemeColors: null != d ? d : void 0,
                        pendingBio: void 0,
                        pendingPronouns: void 0,
                        hideFakeActivity: !0
                    }),
                    children: (0, t.jsx)(A, {
                        guildId: n,
                        clydeUser: f
                    })
                })
            }
            var M = r(498898),
                D = r.n(M);

            function _(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function T(e, n, r, t, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(t, o)
            }

            function L(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(l = (t = r.next()).done); l = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _(e, n)
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
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
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
                        }([i, a])
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
                    f = (0, i.cj)([u.Z], (function() {
                        return {
                            settings: u.Z.getSettings(r),
                            isFetchingSettings: u.Z.isFetchingSettings(r),
                            isSavingSettings: u.Z.isSavingSettings(),
                            hasPendingChanges: u.Z.hasPendingChanges(),
                            errors: u.Z.getErrors()
                        }
                    })),
                    p = f.settings,
                    b = f.isFetchingSettings,
                    g = f.isSavingSettings,
                    y = f.hasPendingChanges,
                    m = f.errors,
                    j = (0, i.e7)([a.Z], (function() {
                        return a.Z.getGuild(r)
                    })),
                    O = (0, d.OR)(j),
                    w = L(o.useState(!1), 2),
                    x = w[0],
                    P = w[1];
                o.useEffect((function() {
                    (0, s.Bn)(r, !0)
                }), [r]);
                o.useEffect((function() {
                    (y || null != m) && P(!1)
                }), [y, m]);
                var C, S, N = (S = (C = function() {
                    var e;
                    return B(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (null == r || !u.Z.hasPendingChanges()) return [2];
                                e = u.Z.getPendingUpdates();
                                return [4, (0, s.CX)(r, F(e))];
                            case 1:
                                n.sent();
                                P(!0);
                                return [2]
                        }
                    }))
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, t) {
                        var o = C.apply(e, n);

                        function i(e) {
                            T(o, r, t, i, l, "next", e)
                        }

                        function l(e) {
                            T(o, r, t, i, l, "throw", e)
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
                            className: D().heading,
                            children: (0, t.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                children: h.Z.Messages.CLYDE_CUSTOMIZE
                            })
                        }), (0, t.jsx)(l.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, t.jsx)(l.ScrollerAuto, {
                        className: D().content,
                        children: b || null == p ? (0, t.jsx)(l.Spinner, {
                            type: l.Spinner.Type.SPINNING_CIRCLE
                        }) : (0, t.jsxs)(t.Fragment, {
                            children: [O && (0, t.jsx)(R, {
                                guildId: r
                            }), null != p && (0, t.jsx)("div", {
                                className: D().section,
                                children: (0, t.jsx)(v, {
                                    settings: p
                                })
                            })]
                        })
                    }), (0, t.jsxs)(l.ModalFooter, {
                        direction: c.Z.Direction.HORIZONTAL,
                        className: D().footer,
                        children: [(0, t.jsx)("div", {
                            className: D().resetButtonContainer,
                            children: (0, t.jsx)(l.Button, {
                                onClick: s.c6,
                                color: l.ButtonColors.PRIMARY,
                                size: l.ButtonSizes.SMALL,
                                disabled: !y,
                                children: h.Z.Messages.RESET
                            })
                        }), y && null == m && (0, t.jsx)("div", {
                            className: D().pendingChangesMessage,
                            children: h.Z.Messages.SETTINGS_NOTICE_MESSAGE
                        }), x && (0, t.jsx)("div", {
                            className: D().successfullSaveMessage,
                            children: h.Z.Messages.CLYDE_SETTINGS_SAVE_SUCCESS
                        }), null != m && (0, t.jsx)("div", {
                            className: D().errorMessage,
                            children: h.Z.Messages.CLYDE_SETTINGS_SAVE_FAILED
                        }), (0, t.jsx)("div", {
                            children: (0, t.jsx)(l.Button, {
                                onClick: N,
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
                Z: () => N
            });
            var t = r(785893),
                o = r(667294),
                i = r(294184),
                l = r.n(i),
                a = r(441143),
                c = r.n(a),
                s = r(304548),
                u = r(421281),
                d = r(694755),
                f = r(2590),
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

            function O(e, n) {
                return !n || "object" !== x(n) && "function" != typeof n ? function(e) {
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
            var x = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function P(e) {
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
                    return O(this, r)
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
                var n = P(r);

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
                    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted");
                    this.inputRef.current.handleFileChange(e)
                };
                i.render = function() {
                    var e, n, r, o, i, a = this.props,
                        c = a.image,
                        b = a.hint,
                        g = a.name,
                        y = a.makeURL,
                        v = a.disabled,
                        O = a.onChange,
                        w = a.showIcon,
                        x = a.showIconDisabled,
                        P = a.className,
                        S = a.imageClassName,
                        N = a.iconClassName,
                        E = a.iconWrapperClassName,
                        k = a.icon,
                        I = a.hideSize,
                        Z = a.imageStyle,
                        A = a.showRemoveButton,
                        R = a.maxFileSizeBytes,
                        M = a.onFileSizeError,
                        D = a.onOpenImageSelectModal,
                        _ = a["aria-label"];
                    null != (e = null != c && /^data:/.test(c) ? c : y(c)) ? n = 'url("'.concat(e, '")') : null != g && (r = (0, t.jsx)("div", {
                        className: h().imageUploaderAcronym,
                        children: (0, u.Zg)(g)
                    }));
                    if (v) return (0, t.jsx)("div", {
                        className: l()(h().imageUploader, h().disabled, P),
                        children: (0, t.jsxs)("div", {
                            className: l()(h().imageUploaderInner, S),
                            style: j(m({}, Z), {
                                backgroundImage: n
                            }),
                            children: [r, x && (0, t.jsx)("div", {
                                className: l()(h().imageUploaderIcon, h().imageUploaderIconDisabled, N),
                                children: k
                            })]
                        })
                    });
                    null != c ? o = (0, t.jsx)(s.Anchor, {
                        className: h().removeButton,
                        onClick: this.handleRemove,
                        children: p.Z.Messages.REMOVE
                    }) : I || (o = (0, t.jsx)("small", {
                        className: h().sizeInfo,
                        children: p.Z.Messages.MINIMUM_SIZE.format({
                            size: f.IXf
                        })
                    }));
                    var T = null !== (i = null != _ ? _ : b) && void 0 !== i ? i : p.Z.Messages.CHANGE_AVATAR;
                    return (0, t.jsxs)("div", {
                        className: l()(h().imageUploader, P),
                        children: [(0, t.jsx)(s.FocusRing, {
                            within: !0,
                            children: (0, t.jsxs)("div", {
                                className: w ? l()(h().imageUploaderIconWrapper, E) : void 0,
                                children: [(0, t.jsxs)("div", {
                                    className: l()(h().imageUploaderInner, S),
                                    style: j(m({}, Z), {
                                        backgroundImage: n
                                    }),
                                    children: [(0, t.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: r
                                    }), null != D ? (0, t.jsx)(s.Clickable, {
                                        className: h().imageUploaderFileInput,
                                        "aria-label": T,
                                        onClick: D
                                    }) : (0, t.jsx)(d.ZP, {
                                        ref: this.inputRef,
                                        onChange: O,
                                        className: h().imageUploaderFileInput,
                                        "aria-label": T,
                                        tabIndex: 0,
                                        maxFileSizeBytes: R,
                                        onFileSizeError: M
                                    })]
                                }), null != b && (0, t.jsx)("div", {
                                    className: h().imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: b
                                }), w && (0, t.jsx)(C, {
                                    className: N,
                                    icon: k
                                })]
                            })
                        }), A ? o : null]
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
            const N = S
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
                a = r(406493),
                c = r(473708),
                s = r(148849),
                u = r.n(s);

            function d(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function f(e, n) {
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
                    r = void 0 === n ? c.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : n,
                    o = e.className;
                return (0, t.jsx)(l.Tooltip, {
                    text: r,
                    children: function(e) {
                        return (0, t.jsx)(l.Clickable, f(function(e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var r = null != arguments[n] ? arguments[n] : {},
                                    t = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                t.forEach((function(n) {
                                    d(e, n, r[n])
                                }))
                            }
                            return e
                        }({}, e), {
                            children: (0, t.jsx)(a.Z, {
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
                a = r(294184),
                c = r.n(a),
                s = r(273465),
                u = r.n(s);

            function d(e, n, r) {
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
            var f = (d(o = {}, t.PREMIUM, {
                border: u().premiumFeatureBorder,
                background: u().premiumBackground
            }), d(o, t.LIMITED, {
                border: u().limitedFeatureBorder,
                background: u().limitedBackground
            }), o);
            const p = l.forwardRef((function(e, n) {
                var r = e.children,
                    o = e.type,
                    l = void 0 === o ? t.PREMIUM : o,
                    a = e.isShown,
                    s = e.hasBackground,
                    d = void 0 !== s && s,
                    p = e.className,
                    b = e.backgroundClassName;
                if (!a) return (0, i.jsx)(i.Fragment, {
                    children: r
                });
                var h = f[l],
                    g = h.border,
                    y = h.background;
                return (0, i.jsx)("div", {
                    ref: n,
                    className: c()(g, p),
                    children: (0, i.jsx)("div", {
                        className: c()(d ? y : u().background, b),
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
                a = r(798159),
                c = r(457217),
                s = r(547308),
                u = r(304548);

            function d(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function f(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(l = (t = r.next()).done); l = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const p = function() {
                var e = f((0, o.useState)(null), 2),
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

            function j(e) {
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
            var w = (0, h.iS)((function(e) {
                return (0,
                    t.jsxs)("div", {
                    className: v().wrapper,
                    children: [(0, t.jsx)("div", {
                        className: v().saturation,
                        children: (0, t.jsx)(g.OQ, j({}, e))
                    }), (0, t.jsx)("div", {
                        className: v().hue,
                        children: (0, t.jsx)(g.PS, O(j({}, e), {
                            direction: "horizontal"
                        }))
                    })]
                })
            }));
            const x = o.memo(w);
            var P = r(621329),
                C = r(179649),
                S = r(373438),
                N = r(2590),
                E = r(473708),
                k = r(70812),
                I = r.n(k);

            function Z(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function A(e, n, r, t, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? n(c) : Promise.resolve(c).then(t, o)
            }

            function R(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function M(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function D(e) {
                D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return D(e)
            }

            function _(e, n) {
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

            function T(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        M(e, n, r[n])
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
                            a = !1;
                        try {
                            for (r = r.call(e); !(l = (t = r.next()).done); l = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (a) throw o
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
                    var r, t = D(e);
                    if (n) {
                        var o = D(this).constructor;
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
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function a(i) {
                        return function(a) {
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
                            }([i, a])
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
                    a = e.isCustom,
                    d = void 0 !== a && a,
                    f = e.isSelected,
                    p = void 0 !== f && f,
                    h = e.disabled,
                    g = void 0 !== h && h,
                    y = e.style,
                    v = void 0 === y ? {} : y,
                    m = e.onClick,
                    j = e["aria-label"],
                    O = (0, c.JA)("color-".concat(r)),
                    w = null != r ? (0, s.Rf)(r) : v.backgroundColor,
                    x = !1;
                d && !p ? x = !0 : (d || p) && (x = (0, s.Bd)(r) > .1);
                return (0, t.jsx)(u.FocusRing, {
                    offset: -2,
                    children: (0, t.jsxs)("button", L(T({
                        type: "button",
                        className: l()(I().colorPickerSwatch, (n = {}, M(n, I().disabled, g), M(n, I().default, i), M(n, I().custom, d), M(n, I().noColor, null == r), n)),
                        disabled: g,
                        onClick: function() {
                            return null == m ? void 0 : m(r)
                        },
                        style: L(T({}, v), {
                            backgroundColor: w
                        }),
                        "aria-label": null != j ? j : w
                    }, O), {
                        children: [d ? (0, t.jsx)(C.Z, {
                            className: I().colorPickerDropper,
                            foreground: I().colorPickerDropperFg,
                            width: 14,
                            height: 14,
                            color: (0,
                                b.Lq)(x ? N.Ilk.WHITE_500 : N.Ilk.BLACK_500)
                        }) : null, function() {
                            var e = 16,
                                n = 16;
                            if (d || i) {
                                e = 32;
                                n = 24
                            }
                            if (p) return (0, t.jsx)(P.Z, {
                                width: e,
                                height: n,
                                color: (0, b.Lq)(x ? N.Ilk.WHITE_500 : N.Ilk.BLACK_500)
                            })
                        }()]
                    }))
                })
            }
            var K = function(e) {
                    _(r, e);
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
                    _(r, e);
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
                        a = e.middle,
                        c = e.footer,
                        d = e.showEyeDropper,
                        f = p(),
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
                                return L(T({}, e), {
                                    input: n
                                })
                            }))
                        },
                        j = (v = (y = function() {
                            var e;
                            return Y(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (null == f) return [2];
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, , 4]);
                                        return [4, f.open()];
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
                                    A(o, r, t, i, l, "next", e)
                                }

                                function l(e) {
                                    A(o, r, t, i, l, "throw", e)
                                }
                                i(void 0)
                            }))
                        }), function() {
                            return v.apply(this, arguments)
                        });
                    return (0, t.jsxs)(u.Dialog, {
                        "aria-label": E.Z.Messages.PICK_A_COLOR,
                        className: I().customColorPicker,
                        children: [(0, t.jsx)(x, {
                            onChange: function(e) {
                                return function(e) {
                                    g((function(n) {
                                        return L(T({}, n), {
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
                        }), a, (0, t.jsxs)("div", {
                            className: I().customColorPickerInputContainer,
                            children: [d && null != f && (0, t.jsx)(S.JO, {
                                onClick: j,
                                tooltip: E.Z.Messages.PICK_A_COLOR_FROM_THE_PAGE,
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
                        }), c]
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
                    d = e.onChange,
                    f = e.renderDefaultButton,
                    p = e.renderCustomButton,
                    b = e.colorContainerClassName,
                    h = function(e) {
                        return (0, t.jsx)("div", {
                            className: I().colorPickerRow,
                            children: e.map((function(e) {
                                return (0, t.jsx)(V, {
                                    color: e,
                                    isSelected: e === s,
                                    onClick: d,
                                    disabled: u
                                }, e)
                            }))
                        })
                    },
                    g = i.slice(0, i.length / 2),
                    y = i.slice(i.length / 2, i.length),
                    v = (0, a.ZP)({
                        id: "color-picker",
                        isEnabled: !0,
                        scrollToStart: W,
                        scrollToEnd: W
                    });
                return (0, t.jsx)(c.bG, {
                    navigator: v,
                    children: (0, t.jsx)(c.SJ, {
                        children: function(e) {
                            var i = e.ref,
                                a = B(e, ["ref"]);
                            return (0, t.jsxs)("div", L(T({
                                className: l()(I().container, n),
                                ref: i
                            }, a), {
                                children: [(0, t.jsx)("div", {
                                    className: l()(I().defaultContainer, b),
                                    children: f({
                                        value: s,
                                        color: r,
                                        onChange: d,
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

            function a(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function c(e, n) {
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
                    a = void 0 === l ? "currentColor" : l,
                    c = e.className,
                    s = e.foreground;
                return (0, t.jsx)("svg", {
                    className: c,
                    width: r,
                    height: i,
                    viewBox: "0 0 16 16",
                    children: (0, t.jsxs)("g", {
                        fill: "none",
                        children: [(0, t.jsx)("path", {
                            d: "M-4-4h24v24H-4z"
                        }), (0, t.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
                        })]
                    })
                })
            }), (function(e) {
                var n = e.width,
                    r = void 0 === n ? 24 : n,
                    o = e.height,
                    u = void 0 === o ? 24 : o,
                    d = e.color,
                    f = void 0 === d ? i.Z.colors.INTERACTIVE_NORMAL : d,
                    p = e.colorClass,
                    b = void 0 === p ? "" : p,
                    h = s(e, ["width", "height", "color", "colorClass"]);
                return (0, t.jsx)("svg", c(function(e) {
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
                }({}, (0, l.Z)(h)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, t.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
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

            function a(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function c(e, n) {
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
                    d = void 0 === u ? 24 : u,
                    f = s(e, ["color", "height", "width"]);
                return (0,
                    t.jsx)("svg", c(function(e) {
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
                }({}, (0, l.Z)(f)), {
                    width: d,
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
                ZP: () => j
            });
            var t = r(785893),
                o = r(667294),
                i = r(294184),
                l = r.n(i),
                a = r(108717),
                c = r(289283),
                s = r(304548),
                u = r(570814),
                d = r(249697),
                f = r(136317),
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
                        a = void 0 !== i && i,
                        c = e.disabled,
                        u = void 0 !== c && c,
                        d = e.showBadge,
                        f = void 0 !== d && d,
                        b = e.color,
                        y = e.foreground,
                        v = e.background,
                        m = e.icon,
                        j = e.onClick,
                        O = e.onContextMenu,
                        w = e.tooltip,
                        x = void 0 === w ? null : w,
                        P = e.tooltipColor,
                        C = e.tooltipPosition,
                        S = void 0 === C ? "bottom" : C,
                        N = e.hideOnClick,
                        E = void 0 === N || N,
                        k = e.role,
                        I = e["aria-label"],
                        Z = e["aria-hidden"],
                        A = e["aria-checked"],
                        R = e["aria-expanded"],
                        M = e["aria-haspopup"],
                        D = (0, t.jsx)(m, {
                            x: 0,
                            y: 0,
                            width: 24,
                            height: 24,
                            className: l()(r, h().icon),
                            foreground: null != y ? y : void 0,
                            background: null != v ? v : void 0,
                            color: b
                        }),
                        _ = I;
                    null == _ && "string" == typeof x && (_ = x);
                    return (0, t.jsx)(s.Tooltip, {
                        text: x,
                        color: P,
                        position: S,
                        hideOnClick: E,
                        children: function(e) {
                            var i, c = e.onMouseEnter,
                                d = e.onMouseLeave,
                                w = e.onFocus,
                                x = e.onBlur;
                            return null == j ? (0, t.jsx)("div", {
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
                                    onMouseEnter: c,
                                    onMouseLeave: d,
                                    onFocus: w,
                                    onBlur: x
                                })
                            }) : (0, t.jsxs)(s.Clickable, {
                                tag: "div",
                                onClick: u ? void 0 : j,
                                onContextMenu: u ? void 0 : O,
                                onMouseEnter: c,
                                onMouseLeave: d,
                                onFocus: w,
                                onBlur: x,
                                className: l()(n, (i = {}, g(i, h().iconWrapper, !0), g(i, h().clickable, !u && null != j), g(i, h().selected, a), i)),
                                role: k,
                                "aria-label": _,
                                "aria-hidden": Z,
                                "aria-checked": A,
                                "aria-haspopup": M,
                                "aria-expanded": R,
                                tabIndex: u || null == j ? -1 : 0,
                                children: [f ? (0, t.jsx)(p.ZP, {
                                    mask: p.ZP.Masks.HEADER_BAR_BADGE,
                                    children: D
                                }) : D, f ? (0, t.jsx)("span", {
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
                    d = e.children,
                    f = e.childrenBottom,
                    p = e.toolbar,
                    b = e.onDoubleClick,
                    y = e["aria-label"],
                    v = e["aria-labelledby"],
                    m = e.role,
                    j = e.scrollable,
                    O = e.transparent,
                    w = void 0 !== O && O,
                    x = o.useRef(null),
                    P = o.useContext(u.Z);
                return (0, t.jsx)("section", {
                    className: l()(r, h().container, (n = {}, g(n, h().themed, !w), g(n, h().transparent, w), g(n, h().themedMobile, c.tq), n)),
                    "aria-label": y,
                    "aria-labelledby": v,
                    role: m,
                    ref: x,
                    children: (0, t.jsxs)(s.FocusRingScope, {
                        containerRef: x,
                        children: [(0, t.jsxs)("div", {
                            className: h().upperContainer,
                            children: [(0, t.jsxs)("div", {
                                className: l()(h().children, i, g({}, h().scrollable, j)),
                                onDoubleClick: b,
                                children: [c.tq && null != P ? (0, t.jsx)(a.Z, {
                                    onClick: P,
                                    className: h().hamburger
                                }) : null, d]
                            }), null != p ? (0, t.jsx)("div", {
                                className: h().toolbar,
                                children: p
                            }) : null]
                        }), f]
                    })
                })
            };
            m.Icon = y;
            m.Title = function(e) {
                var n = e.className,
                    r = e.wrapperClassName,
                    o = e.children,
                    i = e.onContextMenu,
                    a = e.onClick,
                    c = e.id,
                    u = e.muted,
                    d = void 0 !== u && u,
                    f = e.level,
                    p = void 0 === f ? 1 : f,
                    b = (0, t.jsx)(s.HeadingLevel, {
                        forceLevel: p,
                        children: (0, t.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: d ? "header-secondary" : void 0,
                            className: l()(n, h().title),
                            id: c,
                            children: o
                        })
                    });
                return null != a ? (0, t.jsx)(s.Clickable, {
                    onClick: a,
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
                return "right" === (void 0 === n ? "right" : n) ? (0, t.jsx)(f.Z, {
                    className: h().caret
                }) : (0, t.jsx)(d.Z, {
                    className: h().caret
                })
            };
            const j = m
        },
        108717: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => d
            });
            var t = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                l = r(364681),
                a = r.n(l);

            function c(e, n, r) {
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
            const d = function(e) {
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
                            c(e, n, r[n])
                        }))
                    }
                    return e
                }({
                    type: "button",
                    className: i()(a().btnHamburger, c({}, a().btnHamburgerOpen, r), o)
                }, l), {
                    children: [(0, t.jsx)("span", {}), (0, t.jsx)("span", {}), (0, t.jsx)("span", {}), (0, t.jsx)("span", {}), (0, t.jsx)("span", {}), (0, t.jsx)("span", {})]
                }))
            }
        }
    }
]);