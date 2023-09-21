"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [54048], {
        122139: (e, n, l) => {
            l.d(n, {
                Z: () => o
            });
            var a = l(785893),
                r = (l(667294), l(882723)),
                t = l(473708),
                s = l(897790),
                i = l.n(s);

            function o() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.Text, {
                        className: i().marker,
                        tag: "span",
                        variant: "text-md/semibold",
                        color: "text-danger",
                        children: "*"
                    }), (0, a.jsx)(r.HiddenVisually, {
                        children: t.Z.Messages.REQUIRED
                    })]
                })
            }
        },
        854048: (e, n, l) => {
            l.r(n);
            l.d(n, {
                default: () => _
            });
            var a = l(785893),
                r = l(667294),
                t = l(824390),
                s = l.n(t),
                i = l(318715),
                o = l(882723),
                u = l(239813),
                c = l(185161),
                d = l(888291),
                h = l(61209),
                m = l(5544),
                v = l(567403),
                N = l(443812),
                I = l(260915),
                x = l(775173),
                g = l(218908),
                E = l(122139),
                S = l(473708),
                f = l(937306),
                C = l.n(f);

            function p(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var l = 0, a = new Array(n); l < n; l++) a[l] = e[l];
                return a
            }

            function j(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var l = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != l) {
                        var a, r, t = [],
                            s = !0,
                            i = !1;
                        try {
                            for (l = l.call(e); !(s = (a = l.next()).done); s = !0) {
                                t.push(a.value);
                                if (n && t.length === n) break
                            }
                        } catch (e) {
                            i = !0;
                            r = e
                        } finally {
                            try {
                                s || null == l.return || l.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return t
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, n);
                    var l = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === l && e.constructor && (l = e.constructor.name);
                    if ("Map" === l || "Set" === l) return Array.from(l);
                    if ("Arguments" === l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return p(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(e, n, l, a) {
                return {
                    channelId: e.value,
                    title: n,
                    description: l,
                    emoji: null,
                    icon: null != a ? a : null
                }
            }

            function _(e) {
                var n, l, t = e.transitionState,
                    f = e.onClose,
                    p = e.resourceChannel,
                    _ = e.guildId,
                    O = e.onSave,
                    L = e.onDelete,
                    G = e.onIconUpload,
                    T = (0,
                        N.Dt)(),
                    b = j(r.useState(null !== (n = null == p ? void 0 : p.title) && void 0 !== n ? n : ""), 2),
                    A = b[0],
                    D = b[1],
                    Z = j(r.useState(null !== (l = null == p ? void 0 : p.description) && void 0 !== l ? l : ""), 2),
                    U = Z[0],
                    y = Z[1],
                    k = j(r.useState(function(e) {
                        if (null == e) return null;
                        var n = h.Z.getChannel(e.channelId);
                        return null == n ? null : {
                            value: n.id,
                            label: n.name
                        }
                    }(p)), 2),
                    B = k[0],
                    M = k[1],
                    P = (0, i.ZP)([g.Z], (function() {
                        var e;
                        return null === (e = g.Z.getResourceChannel(null == p ? void 0 : p.channelId)) || void 0 === e ? void 0 : e.icon
                    })),
                    H = (0, i.Wu)([g.Z], (function() {
                        var e, n;
                        return (null !== (n = null === (e = g.Z.getSettings()) || void 0 === e ? void 0 : e.resourceChannels) && void 0 !== n ? n : []).map((function(e) {
                            return e.channelId
                        }))
                    })),
                    w = A.length < c.n || null == B,
                    z = r.useCallback((function() {
                        if (!(null == B || A.length <= 0)) {
                            O(R(B, A, U, P));
                            f()
                        }
                    }), [O, f, A, B, P, U]),
                    V = r.useCallback((function() {
                        null == L || L();
                        f()
                    }), [L, f]),
                    K = r.useCallback((function(e) {
                        M(e)
                    }), [M]),
                    F = r.useCallback((function(e) {
                        var n = m.ZP.getSelectableChannels(_).filter((function(n) {
                            return (0,
                                c.k3)(n.channel) && !H.includes(n.channel.id) && s()(e, n.channel.name)
                        })).map((function(e) {
                            return {
                                value: e.channel.id,
                                label: e.channel.name
                            }
                        }));
                        return Promise.resolve(n)
                    }), [_, H]),
                    W = r.useCallback((function(e) {
                        if (null == e || null == _) return null;
                        var n = h.Z.getChannel(e.value),
                            l = v.Z.getGuild(_);
                        if (null == n || null == l) return null;
                        var r = (0, u.KS)(n, l);
                        return null == r ? null : (0, a.jsx)(r, {
                            width: 16,
                            height: 16,
                            className: C().channelIcon
                        })
                    }), [_]),
                    X = r.useCallback((function(e) {
                        null != G && null != B && G(R(B, A, U), e)
                    }), [B, A, G, U]),
                    Q = r.useCallback((function() {
                        return null == P || null == B ? null : x.ZP.getResourceChannelIconURL({
                            channelId: B.value,
                            icon: P
                        })
                    }), [B, P]);
                return (0, a.jsxs)(o.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": T,
                    children: [(0, a.jsxs)("div", {
                        className: C().containerWithHeader,
                        children: [(0, a.jsxs)("div", {
                            className: C().splitGroup,
                            children: [(0, a.jsx)("div", {
                                className: C().header,
                                children: (0, a.jsx)(o.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: S.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_CHANNEL_EDIT_TITLE
                                })
                            }), (0, a.jsx)(o.ModalCloseButton, {
                                className: C().closeButton,
                                onClick: f
                            })]
                        }), (0, a.jsxs)("div", {
                            className: C().formGroup,
                            children: [(0, a.jsxs)(o.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [S.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_CHANNEL, (0, a.jsx)(E.Z, {})]
                            }), (0, a.jsx)(o.SearchableSelect, {
                                value: B,
                                renderOptionPrefix: W,
                                options: F,
                                onChange: K
                            }), (0, a.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: S.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_CHANNEL_EXPLAINER
                            })]
                        }), (0, a.jsx)("div", {
                            className: C().separator
                        }), (0, a.jsxs)("div", {
                            className: C().formGroup,
                            children: [(0, a.jsxs)(o.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: [S.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_TITLE, (0, a.jsx)(E.Z, {})]
                            }), (0, a.jsx)(o.TextInput, {
                                value: A,
                                onChange: D,
                                placeholder: S.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_TITLE_PLACEHOLDER,
                                maxLength: c.am
                            })]
                        }), (0,
                            a.jsx)("div", {
                            className: C().separator
                        }), (0, a.jsxs)("div", {
                            className: C().formGroup,
                            children: [(0, a.jsx)(o.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: S.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_DESCRIPTION
                            }), (0, a.jsx)(o.TextArea, {
                                value: U,
                                onChange: y,
                                placeholder: S.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_DESCRIPTION_PLACEHOLDER,
                                maxLength: c.Vu
                            })]
                        }), (0, a.jsx)("div", {
                            className: C().separator
                        }), (0, a.jsxs)("div", {
                            className: C().splitGroup,
                            children: [(0, a.jsxs)("div", {
                                children: [(0, a.jsx)(o.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: S.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_UPLOAD
                                }), (0, a.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: S.Z.Messages.GUILD_SETTINGS_ONBOARDING_RESOURCE_UPLOAD_EXPLAINER
                                })]
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)(d.Z, {
                                    className: C().uploader,
                                    imageClassName: C().uploadImage,
                                    image: P,
                                    makeURL: Q,
                                    icon: (0, a.jsx)(I.Z, {
                                        height: 24,
                                        width: 24
                                    }),
                                    hideSize: !0,
                                    onChange: X,
                                    iconClassName: C().uploadImageIcon,
                                    showIcon: null == P
                                })
                            })]
                        })]
                    }), (0, a.jsx)(o.ModalFooter, {
                        children: (0, a.jsxs)("div", {
                            className: C().footerButtons,
                            children: [null != p ? (0, a.jsx)("div", {
                                className: C().removeButton,
                                children: (0, a.jsx)(o.Button, {
                                    size: o.Button.Sizes.SMALL,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.RED,
                                    onClick: V,
                                    children: S.Z.Messages.REMOVE
                                })
                            }) : (0, a.jsx)("div", {}), (0, a.jsxs)("div", {
                                className: C().rightButtons,
                                children: [(0, a.jsx)(o.Button, {
                                    onClick: f,
                                    size: o.Button.Sizes.SMALL,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: S.Z.Messages.CANCEL
                                }), (0, a.jsx)(o.Button, {
                                    disabled: w,
                                    onClick: z,
                                    children: S.Z.Messages.SAVE
                                })]
                            })]
                        })
                    })]
                })
            }
        }
    }
]);