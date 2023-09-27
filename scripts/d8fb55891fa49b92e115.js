"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [12586], {
        754776: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => H
            });
            var a = t(785893),
                r = t(667294),
                i = t(993231),
                s = t(202351),
                l = t(165695),
                o = t(304548),
                u = t(957645),
                c = t(73904),
                d = t(358969),
                E = t(10390),
                C = t(974771),
                N = t(148318),
                p = t(382060),
                h = t(877475),
                m = t(567403),
                _ = t(107364),
                f = t(443812),
                A = t(718831),
                v = t(436622),
                I = t(513430),
                g = t(296047),
                M = t(755914),
                b = t(565571),
                T = t(176758),
                y = t(563135),
                L = t(391438),
                x = t(2590),
                Z = t(520453),
                j = t(473708),
                S = t(302142),
                D = t.n(S);

            function R(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
                return a
            }

            function O(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var a, r, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(s = (a = t.next()).done); s = !0) {
                                i.push(a.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            r = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw r
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return R(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return R(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e) {
                var n, t, S = e.guildId,
                    R = e.transitionState,
                    H = e.onSubmit,
                    P = e.onClose,
                    B = (0, f.Dt)(),
                    G = (0, f.Dt)(),
                    k = (0, f.Dt)(),
                    F = (0, f.Dt)(),
                    U = O(r.useState("null"), 2),
                    Y = U[0],
                    w = U[1],
                    V = O(r.useState(x.d4z.GUILD_TEXT), 2),
                    z = V[0],
                    W = V[1],
                    X = O(r.useState(""), 2),
                    q = X[0],
                    K = X[1],
                    J = O(r.useState(!1), 2),
                    $ = J[0],
                    Q = J[1],
                    ee = (0, s.e7)([m.Z], (function() {
                        return m.Z.getGuild(S)
                    }), [S]),
                    ne = (0, N.m)(S),
                    te = (0, d.W3)(S),
                    ae = (0, C.Ui)(ee),
                    re = r.useMemo((function() {
                        return function(e) {
                            var n = e.canCreateStageChannel,
                                t = e.canCreateForumChannel,
                                r = e.canCreateMediaChannel,
                                i = [{
                                    icon: v.Z,
                                    label: j.Z.Messages.TEXT_CHANNEL_TYPE,
                                    value: x.d4z.GUILD_TEXT,
                                    description: j.Z.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION
                                }, {
                                    icon: M.Z,
                                    label: j.Z.Messages.VOICE_CHANNEL_TYPE,
                                    value: x.d4z.GUILD_VOICE,
                                    description: j.Z.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION
                                }];
                            n && i.push({
                                icon: b.Z,
                                label: j.Z.Messages.STAGE_VOICE_CHANNEL_TYPE,
                                value: x.d4z.GUILD_STAGE_VOICE,
                                description: j.Z.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION
                            });
                            if (t) {
                                i.push({
                                    icon: I.Z,
                                    label: j.Z.Messages.FORUM_CHANNEL_TYPE,
                                    value: x.d4z.GUILD_FORUM,
                                    description: j.Z.Messages.FORUM_CHANNEL_DESCRIPTION
                                });
                                r && i.push({
                                    icon: g.Z,
                                    label: j.Z.Messages.MEDIA_CHANNEL_TYPE,
                                    value: x.d4z.GUILD_MEDIA,
                                    description: j.Z.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION,
                                    isBeta: !0
                                })
                            }
                            return i.map((function(e) {
                                var n = e.icon,
                                    t = e.label,
                                    r = e.value,
                                    i = e.description,
                                    s = e.isBeta;
                                return {
                                    name: (0, a.jsxs)("div", {
                                        className: D().channelOptionWrapper,
                                        children: [(0, a.jsx)(n, {
                                            className: D().icon
                                        }), (0,
                                            a.jsxs)("div", {
                                            children: [(0, a.jsxs)(o.Text, {
                                                variant: "text-md/normal",
                                                color: "header-primary",
                                                children: [t, (0, a.jsx)(u.ChannelTypeBadge, {
                                                    isBeta: s
                                                })]
                                            }), (0, a.jsx)(o.Text, {
                                                variant: "text-xs/normal",
                                                color: "header-secondary",
                                                children: i
                                            })]
                                        })]
                                    }),
                                    value: r,
                                    channelIcon: n
                                }
                            }))
                        }({
                            canCreateStageChannel: ne,
                            canCreateForumChannel: te,
                            canCreateMediaChannel: ae
                        })
                    }), [ne, te, ae]),
                    ie = (0, s.e7)([h.Z], (function() {
                        return h.Z.getCategories(S)._categories
                    }), [S]),
                    se = r.useMemo((function() {
                        return ie.map((function(e) {
                            var n = e.channel;
                            return {
                                value: n.id,
                                label: n.name
                            }
                        }))
                    }), [ie]),
                    le = null !== (t = null === (n = re.find((function(e) {
                        return e.value === z
                    }))) || void 0 === n ? void 0 : n.channelIcon) && void 0 !== t ? t : Z.Vq,
                    oe = "" !== q;
                return (0, a.jsx)("form", {
                    onSubmit: function(e) {
                        e.preventDefault();
                        if (oe) {
                            Q(!0);
                            var n = {
                                type: z,
                                name: q,
                                parent_id: "null" !== Y ? Y : void 0,
                                permission_overwrites: [{
                                    id: S,
                                    type: c.BN.ROLE,
                                    allow: y.ZP.NONE,
                                    deny: x.Plq.VIEW_CHANNEL
                                }]
                            };
                            L.Z.post({
                                url: x.ANM.GUILD_CHANNELS(S),
                                body: n,
                                oldFormErrors: !0,
                                trackedActionData: {
                                    event: i.a9.CHANNEL_CREATE,
                                    properties: function(e) {
                                        var n, t;
                                        return (0, l.iG)({
                                            is_private: !0,
                                            channel_id: null == e || null === (n = e.body) || void 0 === n ? void 0 : n.id,
                                            channel_type: null == e || null === (t = e.body) || void 0 === t ? void 0 : t.type
                                        })
                                    }
                                }
                            }).then((function(e) {
                                E.Z.checkGuildTemplateDirty(S);
                                H(e.body.id);
                                P()
                            }), (function(e) {})).finally((function() {
                                Q(!1)
                            }))
                        }
                    },
                    children: (0, a.jsxs)(o.ModalRoot, {
                        transitionState: R,
                        "aria-labelledby": B,
                        children: [(0, a.jsxs)(o.ModalHeader, {
                            children: [(0, a.jsx)(o.Heading, {
                                id: B,
                                variant: "heading-md/semibold",
                                children: j.Z.Messages.CREATE_CHANNEL
                            }), (0, a.jsx)(o.ModalCloseButton, {
                                className: D().closeButton,
                                onClick: P
                            })]
                        }), (0, a.jsxs)(o.ModalContent, {
                            className: D().modalContent,
                            children: [(0, a.jsx)(o.FormItem, {
                                title: j.Z.Messages.CATEGORY,
                                titleId: G,
                                children: (0, a.jsx)(o.SingleSelect, {
                                    placeholder: j.Z.Messages.CREATE_CHANNEL_MODAL_CATEGORY_PLACEHOLDER,
                                    value: Y,
                                    options: se,
                                    onChange: function(e) {
                                        return w(e)
                                    },
                                    "aria-labelledby": G
                                })
                            }), (0, a.jsx)("div", {
                                className: D().spacer
                            }), (0, a.jsx)(o.FormItem, {
                                title: j.Z.Messages.CHANNEL_TYPE,
                                titleId: k,
                                children: (0, a.jsx)(o.RadioGroup, {
                                    options: re,
                                    value: z,
                                    onChange: function(e) {
                                        var n = e.value;
                                        return W(n)
                                    },
                                    "aria-labelledby": k
                                })
                            }), (0, a.jsx)("div", {
                                className: D().spacer
                            }), (0, a.jsx)(o.FormItem, {
                                title: j.Z.Messages.FORM_LABEL_CHANNEL_NAME,
                                titleId: F,
                                children: (0, a.jsx)(o.TextInput, {
                                    value: q,
                                    onChange: function(e) {
                                        (0, p.zi)(z) && (e = (0, T.Nj)(e));
                                        K(e)
                                    },
                                    maxLength: x.HN8,
                                    placeholder: j.Z.Messages.CHANNEL_NAME_PLACEHOLDER,
                                    className: D().inputWrapper,
                                    inputClassName: D().inputInner,
                                    prefixElement: (0, a.jsx)(le, {
                                        className: D().inputPrefix,
                                        "aria-hidden": !0
                                    }),
                                    "aria-labelledby": F,
                                    autoFocus: !0
                                })
                            })]
                        }), (0, a.jsxs)(o.ModalFooter, {
                            justify: _.Z.Justify.BETWEEN,
                            children: [(0, a.jsx)(o.Button, {
                                type: "submit",
                                submitting: $,
                                disabled: !oe,
                                children: j.Z.Messages.SAVE
                            }), (0, a.jsxs)(o.Button, {
                                look: o.Button.Looks.LINK,
                                color: o.Button.Colors.PRIMARY,
                                className: D().backButton,
                                innerClassName: D().backButtonInner,
                                onClick: P,
                                children: [(0, a.jsx)(A.Z, {
                                    direction: A.Z.Directions.LEFT
                                }), j.Z.Messages.BACK]
                            })]
                        })]
                    })
                })
            }
        }
    }
]);