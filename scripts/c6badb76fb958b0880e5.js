"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [37464], {
        237464: (e, n, l) => {
            l.r(n);
            l.d(n, {
                default: () => U
            });
            var t = l(785893),
                i = l(667294),
                a = l(824390),
                r = l.n(a),
                o = l(318715),
                u = l(882723),
                s = l(77413),
                c = l(344832),
                d = l(797630),
                I = l(185161),
                h = l(694755),
                N = l(61209),
                m = l(5544),
                v = l(567403),
                p = l(443812),
                f = l(781453),
                _ = l(655402),
                O = l(472034),
                T = l(994655),
                g = l(260915),
                j = l(775173),
                x = l(72580),
                E = l(563135),
                A = l(218908),
                b = l(122139),
                C = l(2590),
                S = l(213424),
                y = l(473708),
                D = l(189125),
                M = l.n(D);

            function G(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var l = 0, t = new Array(n); l < n; l++) t[l] = e[l];
                return t
            }

            function Z(e, n, l) {
                n in e ? Object.defineProperty(e, n, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = l;
                return e
            }

            function L(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var l = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(l);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(l).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(l, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        Z(e, n, l[n])
                    }))
                }
                return e
            }

            function R(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var l = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        l.push.apply(l, t)
                    }
                    return l
                }(Object(n)).forEach((function(l) {
                    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l))
                }));
                return e
            }

            function P(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var l = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != l) {
                        var t, i, a = [],
                            r = !0,
                            o = !1;
                        try {
                            for (l = l.call(e); !(r = (t = l.next()).done); r = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                r || null == l.return || l.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return G(e, n);
                    var l = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === l && e.constructor && (l = e.constructor.name);
                    if ("Map" === l || "Set" === l) return Array.from(l);
                    if ("Arguments" === l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return G(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e, n) {
                switch (e) {
                    case I.oi.VIEW:
                        return E.ZP.canEveryoneRole(C.Plq.VIEW_CHANNEL, n);
                    case I.oi.CHAT:
                        return C.TPd.GUILD_THREADS_ONLY.has(n.type) && E.ZP.canEveryoneRole(C.Plq.SEND_MESSAGES_IN_THREADS, n) || E.ZP.canEveryoneRole(C.Plq.SEND_MESSAGES, n);
                    default:
                        return !1
                }
            }

            function k(e, n) {
                return null == n ? e : e.map((function(e) {
                    return R(L({}, e), {
                        disabled: !B(e.value, n)
                    })
                }))
            }

            function w(e) {
                var n = {
                        channelId: [],
                        title: [],
                        description: [],
                        actionType: [],
                        emoji: [],
                        icon: []
                    },
                    l = N.Z.getChannel(e.channelId);
                (null == e.title || e.title.length < I.Wz) && n.title.push(y.Z.Messages.NEW_MEMBER_ACTION_VALIDATION_ERROR_TITLE_REQUIRED.format({
                    minLength: I.Wz
                }));
                null == e.actionType || null == l || B(e.actionType, l) || n.actionType.push(function(e) {
                    switch (e) {
                        case I.oi.VIEW:
                            return y.Z.Messages.NEW_MEMBER_ACTION_VALIDATION_ERROR_TYPE_VIEW_INVALID_FOR_CHANNEL;
                        case I.oi.CHAT:
                            return y.Z.Messages.NEW_MEMBER_ACTION_VALIDATION_ERROR_TYPE_CHAT_INVALID_FOR_CHANNEL;
                        default:
                            (0, x.vE)(e)
                    }
                }(e.actionType));
                return n
            }

            function U(e) {
                var n, l, a, x = e.transitionState,
                    E = e.onClose,
                    D = e.guildId,
                    G = e.action,
                    Z = e.onSave,
                    B = e.onDelete,
                    U = e.onIconUpload,
                    H = (0, p.Dt)(),
                    V = P(i.useState(function(e) {
                        if (null == e) return null;
                        var n = N.Z.getChannel(e.channelId);
                        return null == n ? null : {
                            value: e.channelId,
                            label: n.name
                        }
                    }(G)), 2),
                    W = V[0],
                    z = V[1],
                    F = (0, o.ZP)([N.Z], (function() {
                        return N.Z.getChannel(null == W ? void 0 : W.value)
                    })),
                    K = !0 === (null == F ? void 0 : F.isMediaChannel()),
                    Y = i.useMemo((function() {
                        return [{
                            value: I.oi.VIEW,
                            name: y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_VIEW
                        }, {
                            value: I.oi.CHAT,
                            name: (null == F ? void 0 : F.type) === C.d4z.GUILD_FORUM ? K ? y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TALK_IN_MEDIA_CHANNEL : y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TALK_IN_FORUM : y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TALK
                        }]
                    }), [null == F ? void 0 : F.type, K]),
                    q = P(i.useState({
                        channelId: [],
                        title: [],
                        description: [],
                        actionType: [],
                        emoji: [],
                        icon: []
                    }), 2),
                    Q = q[0],
                    X = q[1],
                    J = P(i.useState(null !== (n = null == G ? void 0 : G.title) && void 0 !== n ? n : ""), 2),
                    $ = J[0],
                    ee = J[1],
                    ne = P(i.useState(function(e, n) {
                        return null == n ? null : null !== (l = e.find((function(e) {
                            return e.value === n.actionType
                        }))) && void 0 !== l ? l : null;
                        var l
                    }(Y, G)), 2),
                    le = ne[0],
                    te = ne[1],
                    ie = P(i.useState(null !== (l = null == G ? void 0 : G.emoji) && void 0 !== l ? l : null), 2),
                    ae = ie[0],
                    re = ie[1],
                    oe = (0, o.ZP)([A.Z], (function() {
                        var e;
                        return null === (e = A.Z.getNewMemberAction(null == G ? void 0 : G.channelId)) || void 0 === e ? void 0 : e.icon
                    })),
                    ue = (0, o.ZP)([A.Z], (function() {
                        return A.Z.getNewMemberActionIconData(null == G ? void 0 : G.channelId)
                    })),
                    se = null == $ || 0 === $.length || null == le || null == W,
                    ce = Object.values(Q).flat().length > 0,
                    de = i.useCallback((function() {
                        if (!(null == W || null == le || $.length <= 0)) {
                            var e = {
                                channelId: W.value,
                                title: $,
                                description: "",
                                actionType: le.value,
                                emoji: null != ae ? ae : null,
                                icon: null != oe ? oe : null
                            };
                            Z(e, ue);
                            E()
                        }
                    }), [Z, E, $, le, W, ae, oe, ue]),
                    Ie = i.useCallback((function() {
                        null == B || B();
                        E()
                    }), [B, E]),
                    he = i.useCallback((function(e) {
                        ee(e);
                        X(w({
                            channelId: null == W ? void 0 : W.value,
                            title: e,
                            description: "",
                            actionType: null == le ? void 0 : le.value,
                            emoji: null != ae ? ae : void 0
                        }))
                    }), [ee, X, W, le, ae]),
                    Ne = i.useCallback((function(e) {
                        z(e);
                        X(w({
                            channelId: null == e ? void 0 : e.value,
                            title: $,
                            description: "",
                            actionType: null == le ? void 0 : le.value,
                            emoji: null != ae ? ae : void 0
                        }))
                    }), [z, X, $, le, ae]),
                    me = i.useCallback((function(e) {
                        te(e);
                        X(w({
                            channelId: null == W ? void 0 : W.value,
                            title: $,
                            description: "",
                            actionType: null == e ? void 0 : e.value,
                            emoji: null != ae ? ae : void 0
                        }))
                    }), [te, X, W, $, ae]),
                    ve = i.useCallback((function(e) {
                        var n = m.ZP.getSelectableChannels(D).filter((function(n) {
                            return (0,
                                I.kb)(n.channel) && r()(e, n.channel.name)
                        })).map((function(e) {
                            return {
                                value: e.channel.id,
                                label: e.channel.name
                            }
                        }));
                        return Promise.resolve(n)
                    }), [D]),
                    pe = i.useCallback((function(e) {
                        if (null == e || null == D) return null;
                        var n = N.Z.getChannel(e.value),
                            l = v.Z.getGuild(D);
                        if (null == n || null == l) return null;
                        var i = (0, c.KS)(n, l);
                        return null == i ? null : (0, t.jsx)(i, {
                            width: 16,
                            height: 16,
                            className: M().channelIcon
                        })
                    }), [D]),
                    fe = i.useCallback((function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (null != U && null != W && null != le) {
                            var l = {
                                channelId: W.value,
                                title: $,
                                description: "",
                                actionType: le.value,
                                emoji: n,
                                icon: null != oe ? oe : null
                            };
                            re(n);
                            U(l, e)
                        }
                    }), [W, $, U, le, oe]),
                    _e = i.useCallback((function() {
                        return null == W ? null : null != oe ? j.ZP.getNewMemberActionIconURL({
                            channelId: W.value,
                            icon: oe
                        }) : null != ue ? ue : null
                    }), [W, oe, ue])(),
                    Oe = function(e) {
                        return function(n, l) {
                            if (null != n) {
                                var t = null;
                                if (null == n.id) {
                                    var i;
                                    t = {
                                        id: null,
                                        name: null !== (i = n.optionallyDiverseSequence) && void 0 !== i ? i : "",
                                        animated: !1
                                    }
                                } else {
                                    var a;
                                    t = {
                                        id: n.id,
                                        name: null !== (a = n.originalName) && void 0 !== a ? a : n.name,
                                        animated: n.animated
                                    }
                                }
                                re(t);
                                fe(null, t);
                                l && e()
                            }
                        }
                    },
                    Te = null;
                if (null != _e) Te = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("img", {
                        src: _e,
                        alt: "",
                        "aria-hidden": !0,
                        className: M().image,
                        width: 24,
                        height: 24
                    }), (0, t.jsx)("div", {
                        className: M().imageOverlay,
                        children: (0, t.jsx)(O.Z, {
                            width: 24,
                            height: 24
                        })
                    })]
                });
                else if (null != ae) {
                    var ge;
                    Te = (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(s.Z, {
                            animated: null !== (ge = ae.animated) && void 0 !== ge && ge,
                            emojiId: ae.id,
                            emojiName: ae.name
                        }), (0, t.jsx)("div", {
                            className: M().imageOverlay,
                            children: (0, t.jsx)(O.Z, {
                                width: 24,
                                height: 24
                            })
                        })]
                    })
                } else Te = (0, t.jsx)(_.Z, {
                    width: 24,
                    height: 24
                });
                return (0, t.jsxs)(u.ModalRoot, {
                    transitionState: x,
                    "aria-labelledby": H,
                    children: [(0, t.jsxs)("div", {
                        className: M().container,
                        children: [(0, t.jsx)(u.ModalCloseButton, {
                            className: M().closeButton,
                            onClick: E
                        }), (0, t.jsxs)("div", {
                            className: M().formGroup,
                            children: [(0, t.jsxs)(u.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TITLE, (0, t.jsx)(b.Z, {})]
                            }), (0, t.jsx)(u.TextInput, {
                                value: $,
                                error: (null !== (a = null == $ ? void 0 : $.length) && void 0 !== a ? a : 0) > 0 ? Q.title.join(", ") : null,
                                onChange: he,
                                placeholder: y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TITLE_PLACEHOLDER,
                                maxLength: I.Z3
                            })]
                        }), (0, t.jsx)("div", {
                            className: M().separator
                        }), (0, t.jsxs)("div", {
                            className: M().formGroup,
                            children: [(0, t.jsxs)(u.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_CHANNEL, (0, t.jsx)(b.Z, {})]
                            }), (0, t.jsx)(u.SearchableSelect, {
                                value: W,
                                renderOptionPrefix: pe,
                                options: ve,
                                onChange: Ne
                            }), (0, t.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_CHANNEL_EXPLAINER
                            })]
                        }), (0, t.jsx)("div", {
                            className: M().separator
                        }), (0, t.jsxs)("div", {
                            className: M().splitGroup,
                            children: [(0, t.jsxs)("div", {
                                children: [(0, t.jsx)(u.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON
                                }), (0, t.jsx)(u.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON_EXPLAINER
                                })]
                            }), (0, t.jsx)("div", {
                                className: M().iconUploadContainer,
                                children: (0, t.jsx)(u.Popout, {
                                    position: "bottom",
                                    renderPopout: function(e) {
                                        var n = e.closePopout,
                                            l = (0, t.jsxs)(t.Fragment, {
                                                children: [(0, t.jsx)(h.ZP, {
                                                    onChange: function(e) {
                                                        fe(e);
                                                        n()
                                                    },
                                                    tabIndex: 0
                                                }), (0, t.jsx)(u.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "none",
                                                    children: y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON_UPLOAD
                                                })]
                                            }),
                                            i = (0, t.jsx)(u.Popout, {
                                                position: "top",
                                                renderPopout: function(e) {
                                                    var l = e.closePopout;
                                                    return (0, t.jsx)(d.Z, {
                                                        closePopout: function() {
                                                            l();
                                                            n()
                                                        },
                                                        onSelectEmoji: Oe((function() {
                                                            l();
                                                            n()
                                                        })),
                                                        pickerIntention: S.Hz.COMMUNITY_CONTENT,
                                                        channel: F
                                                    })
                                                },
                                                children: function(e) {
                                                    return (0, t.jsx)(u.Text, R(L({}, e), {
                                                        variant: "text-sm/medium",
                                                        color: "none",
                                                        children: y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON_EMOJI
                                                    }))
                                                }
                                            });
                                        return (0, t.jsxs)(u.Menu, {
                                            navId: "set-image-for-action",
                                            "aria-label": "upload",
                                            onClose: function() {
                                                return !1
                                            },
                                            onSelect: function() {
                                                return !1
                                            },
                                            children: [(0, t.jsx)(u.MenuItem, {
                                                id: "emoji",
                                                label: i,
                                                icon: f.Z
                                            }), (0, t.jsx)(u.MenuItem, {
                                                className: M().uploadMenuItem,
                                                id: "upload",
                                                label: l,
                                                icon: g.Z
                                            }), (0, t.jsx)(u.MenuItem, {
                                                id: "clear",
                                                color: "danger",
                                                label: y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_ICON_REMOVE,
                                                icon: T.Z,
                                                action: function() {
                                                    fe(null)
                                                }
                                            })]
                                        })
                                    },
                                    children: function(e) {
                                        return (0, t.jsx)("div", R(L({}, e), {
                                            className: M().iconUpload,
                                            children: Te
                                        }))
                                    }
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: M().separator
                        }), (0, t.jsxs)("div", {
                            className: M().formGroup,
                            children: [(0, t.jsxs)(u.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [y.Z.Messages.GUILD_SETTINGS_ONBOARDING_ACTION_TYPE, (0, t.jsx)(b.Z, {})]
                            }), (0, t.jsx)(u.RadioGroup, {
                                withTransparentBackground: !0,
                                size: u.RadioGroup.Sizes.NONE,
                                value: null == le ? void 0 : le.value,
                                onChange: me,
                                options: k(Y, F)
                            }), null != le && Q.actionType.length > 0 ? Q.actionType.map((function(e) {
                                return (0, t.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: e
                                }, e)
                            })) : null]
                        })]
                    }), (0, t.jsx)(u.ModalFooter, {
                        children: (0, t.jsxs)("div", {
                            className: M().footerButtons,
                            children: [null != G ? (0, t.jsx)("div", {
                                className: M().removeButton,
                                children: (0, t.jsx)(u.Button, {
                                    size: u.Button.Sizes.SMALL,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.RED,
                                    onClick: Ie,
                                    children: y.Z.Messages.REMOVE
                                })
                            }) : (0, t.jsx)("div", {}), (0, t.jsxs)("div", {
                                className: M().rightButtons,
                                children: [(0, t.jsx)(u.Button, {
                                    onClick: E,
                                    size: u.Button.Sizes.SMALL,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: y.Z.Messages.CANCEL
                                }), (0, t.jsx)(u.Button, {
                                    disabled: se || ce,
                                    onClick: de,
                                    children: y.Z.Messages.SAVE
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        122139: (e, n, l) => {
            l.d(n, {
                Z: () => u
            });
            var t = l(785893),
                i = (l(667294), l(882723)),
                a = l(473708),
                r = l(158017),
                o = l.n(r);

            function u() {
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(i.Text, {
                        className: o().marker,
                        tag: "span",
                        variant: "text-md/semibold",
                        color: "text-danger",
                        children: "*"
                    }), (0, t.jsx)(i.HiddenVisually, {
                        children: a.Z.Messages.REQUIRED
                    })]
                })
            }
        }
    }
]);