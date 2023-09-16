"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [39915], {
        287194: (e, n, t) => {
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                o = t(667294),
                l = t(441394),
                i = t(570187),
                a = t.n(i);

            function u(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function s(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, l = [],
                            i = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return u(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e) {
                var n = e.hasSetEmoji,
                    t = e.onClick,
                    i = e.children,
                    u = s(o.useState(!1), 2),
                    c = u[0],
                    d = u[1];
                return (0, r.jsxs)("div", {
                    className: a().container,
                    onMouseEnter: function() {
                        d(!!n)
                    },
                    onMouseLeave: function() {
                        d(!1)
                    },
                    children: [i, n && c && (0, r.jsx)(l.Z, {
                        onClick: t,
                        className: a().removeButton
                    })]
                })
            }
        },
        276327: (e, n, t) => {
            t.d(n, {
                _: () => r,
                S: () => o
            });
            var r = "Guild Welcome Screen",
                o = "hasClickedWelcomeEmojiPicker"
        },
        939915: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => B
            });
            var r = t(785893),
                o = t(667294),
                l = t(202351),
                i = t(630631),
                a = t(882723),
                u = t(77413),
                s = t(213276),
                c = t(773011),
                d = t(239813),
                f = t(403168),
                m = t(287194),
                h = t(245353),
                p = t(61209),
                j = t(5544),
                C = t(840922),
                E = t(473903),
                v = t(470643),
                S = t(107364),
                y = t(443812),
                b = t(436622),
                g = t(563135),
                _ = t(102909),
                N = t(734294),
                O = t(276327),
                I = t(2590),
                x = t(213424),
                L = t(473708),
                P = t(398885),
                T = t.n(P);

            function M(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Z(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function A(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Z(e, n, t[n])
                    }))
                }
                return e
            }

            function k(e, n) {
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

            function w(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, l = [],
                            i = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return M(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const B = function(e) {
                var n, t, P = e.guildId,
                    M = e.welcomeChannel,
                    Z = e.transitionState,
                    B = e.onSave,
                    D = e.onClose,
                    U = (0,
                        y.Dt)(),
                    G = w(o.useState(null != M ? M.channel_id : null), 2),
                    R = G[0],
                    W = G[1],
                    H = w(o.useState(null != M ? M.description : ""), 2),
                    F = H[0],
                    K = H[1],
                    z = w(o.useState(null != M ? {
                        id: M.emoji_id,
                        name: M.emoji_name
                    } : null), 2),
                    J = z[0],
                    V = z[1],
                    Y = w(o.useState(!1), 2),
                    q = Y[0],
                    $ = Y[1],
                    Q = (0, l.e7)([h.Z], (function() {
                        return null != (null == J ? void 0 : J.id) ? h.Z.getUsableCustomEmojiById(J.id) : null
                    })),
                    X = (0, l.e7)([j.ZP], (function() {
                        return j.ZP.getChannels(P)[j.sH]
                    }), [P]),
                    ee = (0, l.e7)([_.Z], (function() {
                        return _.Z.get(P)
                    })),
                    ne = null !== (t = null == ee || null === (n = ee.welcome_channels) || void 0 === n ? void 0 : n.map((function(e) {
                        return e.channel_id
                    }))) && void 0 !== t ? t : [],
                    te = w(o.useState(!1), 2),
                    re = te[0],
                    oe = te[1];
                o.useEffect((function() {
                    i.Z.get(O.S) || setTimeout((function() {
                        return oe(!0)
                    }), 300)
                }), []);
                var le = [];
                X.forEach((function(e) {
                    var n = e.channel;
                    !g.ZP.canEveryoneRole(I.Plq.VIEW_CHANNEL, n) || (null == M ? void 0 : M.channel_id) !== n.id && ne.includes(n.id) || le.push({
                        value: n.id,
                        label: (0, c.F6)(n, E.default, C.Z)
                    })
                }));
                var ie = function() {
                        oe(!1);
                        D()
                    },
                    ae = o.useCallback((function(e) {
                        return K(e)
                    }), []),
                    ue = function(e) {
                        if (null != e) {
                            var n, t, r;
                            V(null != e.id ? {
                                id: null !== (n = e.id) && void 0 !== n ? n : null,
                                name: null !== (t = e.name) && void 0 !== t ? t : null
                            } : {
                                id: null,
                                name: null !== (r = e.optionallyDiverseSequence) && void 0 !== r ? r : null
                            })
                        } else V(null)
                    },
                    se = o.useCallback((function() {
                        i.Z.set(O.S, !0);
                        oe(!1)
                    }), []);
                return (0, r.jsx)(s.Z, {
                    page: I.ZY5.CHANNEL_WELCOME_CREATE_MODAL,
                    children: (0, r.jsxs)(a.ModalRoot, {
                        transitionState: Z,
                        "aria-labelledby": U,
                        children: [(0, r.jsxs)("div", {
                            className: T().modalContents,
                            children: [(0, r.jsx)(a.ModalCloseButton, {
                                onClick: ie,
                                className: T().closeButton
                            }), (0, r.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                className: T().headerText,
                                id: U,
                                children: L.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
                            }), (0, r.jsxs)(a.FormSection, {
                                className: T().formGroup,
                                children: [(0, r.jsx)(a.SearchableSelect, {
                                    options: le,
                                    onChange: function(e) {
                                        return W(e)
                                    },
                                    value: R,
                                    renderOptionPrefix: function(e) {
                                        if (null === e) return null;
                                        var n, t = e.value,
                                            o = p.Z.getChannel(t),
                                            l = null !== (n = (0, d.KS)(o)) && void 0 !== n ? n : b.Z;
                                        return (0, r.jsx)(l, {
                                            className: T().channelTitleIcon,
                                            width: 16,
                                            height: 16
                                        })
                                    }
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    className: T().formDescription,
                                    children: L.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
                                })]
                            }), (0, r.jsx)(a.FormDivider, {}), (0, r.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                className: T().headerText,
                                children: L.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
                            }), (0, r.jsx)(a.FormSection, {
                                className: T().formGroup,
                                children: (0, r.jsx)(a.TextInput, {
                                    maxLength: 42,
                                    value: F,
                                    inputClassName: T().input,
                                    placeholder: L.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
                                    onChange: ae
                                })
                            }), (0, r.jsx)(a.FormDivider, {}), (0, r.jsx)(a.FormSection, {
                                className: T().formGroup,
                                children: (0, r.jsxs)("div", {
                                    className: T().emojiSectionContainer,
                                    children: [(0, r.jsxs)("div", {
                                        className: T().emojiTitleContainer,
                                        children: [(0, r.jsx)(a.Heading, {
                                            variant: "heading-md/semibold",
                                            children: L.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
                                        }), (0, r.jsx)(a.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: L.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
                                        })]
                                    }), (0, r.jsx)(m.Z, {
                                        hasSetEmoji: null != J,
                                        onClick: ue,
                                        children: (0, r.jsx)(a.Popout, {
                                            renderPopout: function(e) {
                                                var n = e.closePopout,
                                                    t = j.ZP.getDefaultChannel(P);
                                                return (0, r.jsx)(f.Z, {
                                                    guildId: P,
                                                    closePopout: n,
                                                    onSelectEmoji: function(e, t) {
                                                        ue(e);
                                                        if (t) {
                                                            n();
                                                            null == e && ie()
                                                        }
                                                    },
                                                    pickerIntention: x.Hz.COMMUNITY_CONTENT,
                                                    onNavigateAway: ie,
                                                    channel: t
                                                })
                                            },
                                            position: "left",
                                            animation: a.Popout.Animation.NONE,
                                            align: "bottom",
                                            children: function(e, n) {
                                                var t = n.isShown;
                                                return (0, r.jsx)(a.TooltipContainer, {
                                                    color: a.TooltipColors.BRAND,
                                                    tooltipClassName: T().tooltip,
                                                    position: "left",
                                                    text: re ? L.Z.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                                                    forceOpen: re,
                                                    children: (0, r.jsx)(v.Z, k(A({}, e), {
                                                        onClick: function(n) {
                                                            var t;
                                                            se();
                                                            null === (t = e.onClick) || void 0 === t || t.call(e, n)
                                                        },
                                                        active: t,
                                                        className: T().emojiButton,
                                                        tabIndex: 0,
                                                        renderButtonContents: null == J || null == J.id && null == J.name ? null : function() {
                                                            return (0, r.jsx)(u.Z, {
                                                                className: T().emoji,
                                                                emojiId: J.id,
                                                                emojiName: J.name,
                                                                animated: Boolean(null == Q ? void 0 : Q.animated)
                                                            })
                                                        }
                                                    }))
                                                })
                                            }
                                        })
                                    })]
                                })
                            })]
                        }), (0, r.jsxs)(a.ModalFooter, {
                            className: T().footer,
                            justify: S.Z.Justify.BETWEEN,
                            children: [(0, r.jsxs)(S.Z, {
                                grow: 0,
                                align: S.Z.Align.CENTER,
                                children: [(0, r.jsx)(a.Button, {
                                    onClick: ie,
                                    size: a.Button.Sizes.SMALL,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: L.Z.Messages.CANCEL
                                }), (0, r.jsx)(a.Button, {
                                    onClick: function() {
                                        null != R && F.length > 0 && B({
                                            channel_id: R,
                                            description: F,
                                            emoji_id: null == J ? void 0 : J.id,
                                            emoji_name: null == J ? void 0 : J.name
                                        });
                                        ie()
                                    },
                                    disabled: null == R || 0 === F.length,
                                    children: L.Z.Messages.SAVE
                                })]
                            }), null != M && (0, r.jsx)(a.Button, {
                                onClick: function() {
                                    $(!0)
                                },
                                size: a.Button.Sizes.MIN,
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.RED,
                                children: L.Z.Messages.REMOVE
                            })]
                        }), q && (0, r.jsx)(N.Z, {
                            onConfirm: function() {
                                B();
                                ie()
                            },
                            onCancel: function() {
                                return $(!1)
                            },
                            channelId: R
                        })]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=463adb8f6c3562ebb954.js.map