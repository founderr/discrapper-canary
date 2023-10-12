"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [62389], {
        762389: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => x
            });
            var o = t(785893),
                r = t(667294),
                l = t(202351),
                i = t(304548),
                a = t(77413),
                u = t(739770),
                s = t(245353),
                c = t(5544),
                d = t(470643),
                m = t(443812),
                f = t(559968),
                p = t(372518),
                j = t(2590),
                h = t(213424),
                b = t(473708),
                v = t(463248),
                g = t.n(v);

            function y(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
                return o
            }

            function O(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function C(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        n && (o = o.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, o)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function E(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var o, r, l = [],
                            i = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(i = (o = t.next()).done); i = !0) {
                                l.push(o.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            r = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return y(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e) {
                var n, t = e.transitionState,
                    v = e.onClose,
                    y = e.channelId,
                    x = e.guildId,
                    N = e.tag,
                    T = (0, m.Dt)(),
                    A = null != N,
                    M = E(r.useState(null !== (n = null == N ? void 0 : N.name) && void 0 !== n ? n : ""), 2),
                    I = M[0],
                    k = M[1],
                    R = E(r.useState(null != N ? {
                        id: N.emojiId,
                        name: N.emojiName
                    } : null), 2),
                    _ = R[0],
                    P = R[1],
                    S = E(r.useState(null == N ? void 0 : N.moderated), 2),
                    w = S[0],
                    Z = S[1],
                    B = (0, l.e7)([s.Z], (function() {
                        return null != (null == _ ? void 0 : _.id) ? s.Z.getUsableCustomEmojiById(_.id) : null
                    })),
                    D = (null == N ? void 0 : N.name) !== I || (null == N ? void 0 : N.emojiId) !== (null == _ ? void 0 : _.id) || (null == N ? void 0 : N.emojiName) !== (null == _ ? void 0 : _.name) || w !== (null == N ? void 0 : N.moderated),
                    F = function() {
                        if (null != I && D)
                            if (A) {
                                p.Z.updateForumTag({
                                    id: N.id,
                                    name: I,
                                    emojiId: null == _ ? void 0 : _.id,
                                    emojiName: null == _ ? void 0 : _.name,
                                    moderated: w
                                }, y);
                                v()
                            } else {
                                p.Z.createForumTag({
                                    name: I,
                                    emojiId: null == _ ? void 0 : _.id,
                                    emojiName: null == _ ? void 0 : _.name,
                                    moderated: w
                                }, y);
                                v()
                            }
                    },
                    L = r.useCallback((function(e) {
                        return k(e)
                    }), []),
                    U = r.createRef();
                r.useEffect((function() {
                    null != U.current && U.current.focus()
                }), []);
                return (0,
                    o.jsxs)(i.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": T,
                    children: [(0, o.jsx)(i.ModalHeader, {
                        separator: !1,
                        children: (0, o.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            children: A ? b.Z.Messages.FORUM_TAG_EDIT : b.Z.Messages.FORUM_TAG_CREATE
                        })
                    }), (0, o.jsxs)("div", {
                        className: g().content,
                        children: [(0, o.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: b.Z.Messages.FORUM_TAG_CREATE_DESCRIPTION
                        }), (0, o.jsxs)("div", {
                            className: g().inputContainer,
                            children: [(0, o.jsx)("div", {
                                className: g().emojiButtonContainer,
                                children: (0, o.jsx)(i.Popout, {
                                    renderPopout: function(e) {
                                        var n = e.closePopout,
                                            t = c.ZP.getDefaultChannel(x);
                                        return (0, o.jsx)(u.Z, {
                                            guildId: x,
                                            closePopout: n,
                                            onSelectEmoji: function(e, t) {
                                                ! function(e) {
                                                    null != e && P(null != e.id ? {
                                                        id: e.id,
                                                        name: e.name
                                                    } : {
                                                        id: void 0,
                                                        name: e.optionallyDiverseSequence
                                                    })
                                                }(e);
                                                t && n()
                                            },
                                            pickerIntention: h.Hz.COMMUNITY_CONTENT,
                                            onNavigateAway: v,
                                            channel: t
                                        })
                                    },
                                    position: "left",
                                    animation: i.Popout.Animation.NONE,
                                    align: "bottom",
                                    children: function(e, n) {
                                        var t = n.isShown;
                                        return (0, o.jsx)(d.Z, C(function(e) {
                                            for (var n = 1; n < arguments.length; n++) {
                                                var t = null != arguments[n] ? arguments[n] : {},
                                                    o = Object.keys(t);
                                                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                }))));
                                                o.forEach((function(n) {
                                                    O(e, n, t[n])
                                                }))
                                            }
                                            return e
                                        }({}, e), {
                                            onClick: function(n) {
                                                var t;
                                                null === (t = e.onClick) || void 0 === t || t.call(e, n)
                                            },
                                            active: t,
                                            className: g().emojiButton,
                                            tabIndex: 0,
                                            renderButtonContents: null == _ || null == _.id && null == _.name ? null : function() {
                                                return (0, o.jsx)(a.Z, {
                                                    className: g().emoji,
                                                    emojiId: _.id,
                                                    emojiName: _.name,
                                                    animated: Boolean(null == B ? void 0 : B.animated)
                                                })
                                            }
                                        }))
                                    }
                                })
                            }), (0, o.jsx)(i.TextInput, {
                                inputRef: U,
                                maxLength: 20,
                                value: I,
                                inputClassName: g().input,
                                placeholder: b.Z.Messages.FORUM_TAG_CREATE_PLACEHOLDER,
                                onChange: L,
                                autoFocus: !0,
                                onKeyDown: function(e) {
                                    if (e.keyCode === j.yXg.ENTER && I.length > 0) {
                                        I.length > 0 && F();
                                        e.preventDefault()
                                    }
                                }
                            }), I.length > 0 || null != _ ? (0, o.jsx)(i.Button, {
                                "aria-label": b.Z.Messages.FORUM_TAG_EDIT_RESET_LABEL,
                                className: g().clearButton,
                                onClick: function() {
                                    k("");
                                    P(null)
                                },
                                look: i.Button.Looks.BLANK,
                                size: i.Button.Sizes.NONE,
                                children: (0, o.jsx)(f.Z, {
                                    className: g().clearIcon
                                })
                            }) : null]
                        })]
                    }), (0, o.jsx)(i.Checkbox, {
                        type: i.Checkbox.Types.INVERTED,
                        size: 18,
                        value: null != w && w,
                        onChange: function(e, n) {
                            return Z(n || null == (null == N ? void 0 : N.moderated) && void 0)
                        },
                        className: g().moderatedCheckbox,
                        children: (0, o.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: b.Z.Messages.FORUM_MODERATED_TAG_CHECKBOX
                        })
                    }), (0, o.jsxs)(i.ModalFooter, {
                        className: g().footer,
                        children: [(0, o.jsxs)("div", {
                            className: g().buttons,
                            children: [(0, o.jsx)(i.Button, {
                                color: i.Button.Colors.PRIMARY,
                                onClick: function() {
                                    v()
                                },
                                children: b.Z.Messages.CANCEL
                            }), (0, o.jsx)(i.Button, {
                                onClick: F,
                                disabled: 0 === I.length || !D,
                                autoFocus: !0,
                                children: b.Z.Messages.SAVE
                            })]
                        }), A && (0, o.jsx)(i.Button, {
                            color: i.Button.Colors.RED,
                            look: i.Button.Looks.LINK,
                            onClick: function() {
                                if (A) {
                                    p.Z.deleteForumTag(y, N.id);
                                    v()
                                }
                            },
                            children: b.Z.Messages.FORUM_TAG_REMOVE
                        })]
                    })]
                })
            }
        }
    }
]);