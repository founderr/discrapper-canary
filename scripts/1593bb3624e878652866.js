(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [67551], {
        457890: (e, n, t) => {
            e.exports = t.p + "cf3e2e7f108d20c8d804a13c9067f5a6.svg"
        },
        247381: (e, n, t) => {
            e.exports = t.p + "fbc6cdd90a217349d792359d85d5abd1.png"
        },
        372956: (e, n, t) => {
            "use strict";
            t.d(n, {
                C: () => a,
                x: () => i
            });
            var r = t(744564),
                o = t(758635);

            function i(e) {
                var n = e.omitUserIds,
                    t = e.guild,
                    i = e.channel,
                    a = e.applicationId,
                    l = e.inviteTargetType;
                return (0, o.W)().then((function() {
                    r.Z.dispatch({
                        type: "LOAD_INVITE_SUGGESTIONS",
                        omitUserIds: null != n ? n : new Set,
                        guild: t,
                        channel: i,
                        applicationId: a,
                        inviteTargetType: l
                    })
                }))
            }

            function a(e) {
                r.Z.dispatch({
                    type: "INVITE_SUGGESTIONS_SEARCH",
                    query: e
                })
            }
        },
        149660: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => l
            });
            var r = t(667294),
                o = t(792800),
                i = t(120415),
                a = t(473708);

            function l() {
                r.useEffect((function() {
                    i.FB || (0, o.EM)({
                        messages: [a.Z.Messages.GO_LIVE_HEY, a.Z.Messages.GO_LIVE_LOOK, a.Z.Messages.GO_LIVE_LISTEN],
                        interval: 600,
                        count: 20,
                        onlyWhenBlurred: !0
                    })
                }), []);
                return null
            }
        },
        855350: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => r
            });
            const r = (0, t(260561).B)({
                kind: "guild",
                id: "2022-11_default_to_server_vanity_v2",
                label: "Default To Server Vanity v2",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        167551: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                default: () => Fn
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                a = t.n(i),
                l = t(441143),
                s = t.n(l),
                u = t(496486),
                c = t.n(u),
                d = t(571657),
                f = t(816810),
                g = t(202351),
                h = t(795308),
                v = t(70418),
                p = t(224813),
                I = t(372956),
                m = t(634698),
                E = t(153686),
                _ = t(19585),
                y = t(28661),
                T = t(296916),
                N = t(344832),
                S = t(318715),
                x = t(567403),
                b = t(786502),
                C = t(260561),
                M = (0, C.B)({
                    kind: "guild",
                    id: "2023-04_community_endless_invites",
                    label: "Community Endless Invites",
                    defaultConfig: {
                        defaultInvitesToNeverExpire: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Causes invites to never expire (by default) in the Guild",
                        config: {
                            defaultInvitesToNeverExpire: !0
                        }
                    }]
                }),
                O = t(2590);

            function A(e) {
                var n = e.guildId,
                    t = M.useExperiment({
                        guildId: null != n ? n : "",
                        location: "6798be_2"
                    }),
                    r = (0, S.ZP)([x.Z], (function() {
                        return x.Z.getGuild(n)
                    }));
                return null != n && function(e) {
                    var n, t = e.guild,
                        r = e.experimentConfig,
                        o = (null != r ? r : M.getCurrentConfig({
                            guildId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : "",
                            location: "6798be_1"
                        })).defaultInvitesToNeverExpire;
                    return !0 === (null == t ? void 0 : t.hasFeature(O.oNc.HUB)) || !0 === (null == t ? void 0 : t.hasFeature(O.oNc.COMMUNITY)) && o ? b.ZP.INVITE_OPTIONS_FOREVER.value : void 0
                }({
                    guild: r,
                    experimentConfig: t
                })
            }
            var j = t(179678),
                R = t(149660),
                Z = (0, C.B)({
                    kind: "guild",
                    id: "2023-02_guest_voice_invites",
                    label: "Guest Voice Invites",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Allow creation of guest voice invites",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                w = t(210595),
                P = t(61209),
                L = t(5544),
                V = t(72580);

            function U(e) {
                var n = (0, S.Wu)([L.ZP], (function() {
                        return L.ZP.getVocalChannelIds(e)
                    })),
                    t = (0, S.Wu)([P.Z], (function() {
                        return n.map((function(e) {
                            return P.Z.getChannel(e)
                        })).filter(V.lm)
                    }), [n]);
                return o.useMemo((function() {
                    return t.filter((function(e) {
                        return !(0, T.Z)(e) && e.type === w.d.GUILD_VOICE
                    }))
                }), [t])
            }
            var D = t(766496),
                G = t(177570),
                B = t(381186),
                F = t(869160),
                k = t(537335),
                H = t(682776),
                K = t(491260),
                Y = t(715107),
                W = t(473903),
                q = t(602397),
                z = t(327860),
                $ = t(107364),
                X = t(190186),
                Q = t(466317),
                J = t(818417),
                ee = t(652591),
                ne = t(661123),
                te = t(641453),
                re = t(855350);
            const oe = (0, C.B)({
                kind: "guild",
                id: "2022-05_vanity_url_target",
                label: "Vanity URL Targeting",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var ie = t(625751),
                ae = t(630203),
                le = t(811622),
                se = t(473708),
                ue = t(138646),
                ce = t.n(ue),
                de = t(380203),
                fe = t.n(de);

            function ge(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function he(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        ge(e, n, t[n])
                    }))
                }
                return e
            }

            function ve(e, n) {
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
            var pe = function(e) {
                    var n = e.guild,
                        t = e.inviteChannel,
                        i = e.setInviteChannel,
                        a = U(n.id),
                        l = o.useMemo((function() {
                            return a.reduce((function(e, n) {
                                return ve(he({}, e), ge({}, n.id, n))
                            }), {})
                        }), [a]),
                        s = o.useMemo((function() {
                            return Object.values(l).map((function(e) {
                                return {
                                    value: e.id,
                                    label: e.name
                                }
                            }))
                        }), [l]);
                    return (0, r.jsx)(v.SearchableSelect, {
                        options: s,
                        value: null == t ? void 0 : t.id,
                        onChange: function(e) {
                            i(l[e])
                        },
                        placeholder: se.Z.Messages.INVITE_A_GUEST_SELECT_VOICE_CHANNEL,
                        renderOptionPrefix: function(e) {
                            if (null == e) return null;
                            var t = e.value,
                                o = l[t];
                            return null == o ? null : (0, r.jsx)(ae._, {
                                channel: o,
                                guild: n
                            })
                        }
                    })
                },
                Ie = function(e) {
                    var n = e.handleDone,
                        t = e.headerId,
                        o = e.inviteChannel,
                        i = e.copyValue;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(v.ModalHeader, {
                            children: [(0, r.jsx)(v.ModalCloseButton, {
                                className: ce().closeButton,
                                onClick: n
                            }), (0, r.jsx)("div", {
                                className: ce().headerContainer,
                                children: (0, r.jsx)(v.FormTitle, {
                                    id: t,
                                    tag: "h2",
                                    className: a()(fe().marginReset, ce().headerCloseButtonSpacing, ce().headerText),
                                    children: se.Z.Messages.INVITE_A_GUEST_VOICE_ONLY
                                })
                            })]
                        }), (0, r.jsx)(v.ModalContent, {
                            className: ce().noScroll,
                            children: (0, r.jsxs)("div", {
                                className: ce().guestBody,
                                children: [(0, r.jsx)(v.Text, {
                                    tag: "div",
                                    variant: "heading-sm/normal",
                                    color: "header-secondary",
                                    children: se.Z.Messages.INVITE_A_GUEST_EXPLANATION
                                }), (0, r.jsx)(v.FormTitle, {
                                    tag: "h5",
                                    className: ce().guestSelectChannelHeader,
                                    children: se.Z.Messages.INVITE_A_GUEST_STEP_1
                                }), (0, r.jsx)(pe, he({}, e)), (0, r.jsx)(v.FormTitle, {
                                    tag: "h5",
                                    className: ce().guestSendInviteLinkHeader,
                                    children: se.Z.Messages.INVITE_A_GUEST_STEP_2
                                }), (0,
                                    r.jsx)(le.I, ve(he({}, e), {
                                    copyValue: null == o ? "" : i,
                                    disabled: null == o
                                }))]
                            })
                        })]
                    })
                },
                me = t(74535),
                Ee = (0, C.B)({
                    kind: "guild",
                    id: "2023-04_growing_friend_guild_community_upsell",
                    label: "Growing Friend Guild Community Upsell",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Community Upsell to Growing Friend Guilds",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                _e = function(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        t = Ee.useExperiment({
                            guildId: e,
                            location: "7ae634_1"
                        }, {
                            autoTrackExposure: n
                        }).enabled;
                    return t
                };

            function ye(e, n) {
                var t, r = (0, S.ZP)([W.default], (function() {
                        var e;
                        return null !== (t = null === (e = W.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : ""
                    })),
                    o = _e(null != e ? e : ""),
                    i = (0, S.ZP)([x.Z], (function() {
                        return x.Z.getGuild(e)
                    }), [e]),
                    a = null == i ? void 0 : i.hasFeature(O.oNc.COMMUNITY),
                    l = (0, S.ZP)([H.Z], (function() {
                        return H.Z.can(O.Plq.ADMINISTRATOR, i)
                    }), [i]),
                    s = (null == i ? void 0 : i.isOwner(r)) || l;
                return !!o && (!a && (!!s && !!n))
            }
            var Te = t(658728),
                Ne = t(349491),
                Se = t(118237),
                xe = t.n(Se);

            function be(e) {
                var n = e.text,
                    t = e.isLocked,
                    o = e.shouldSparkle;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: a()(xe().container),
                        children: [o ? (0, r.jsx)(Te.Z, {
                            className: xe().sparkles
                        }) : null, (0, r.jsx)(v.Text, {
                            variant: "text-md/medium",
                            color: "text-normal",
                            children: n
                        }), t ? (0, r.jsxs)("div", {
                            className: xe().pill,
                            children: [(0, r.jsx)(Ne.Z, {
                                height: 14,
                                width: 14,
                                className: xe().icon
                            }), (0, r.jsx)(v.Text, {
                                variant: "text-xs/medium",
                                color: "header-primary",
                                className: xe().pillText,
                                children: se.Z.Messages.COMMUNITIES
                            })]
                        }) : null]
                    })
                })
            }

            function Ce(e, n, t) {
                return (0, r.jsx)(be, {
                    text: e.label,
                    isLocked: n,
                    shouldSparkle: t
                })
            }
            var Me = t(396043),
                Oe = t(479373),
                Ae = t(703790),
                je = t(58387),
                Re = t(719186),
                Ze = t.n(Re),
                we = t(247381),
                Pe = t.n(we);

            function Le(e) {
                var n = e.permanentInviteSelected,
                    t = e.guildId,
                    o = e.onClick,
                    i = ye(null != t ? t : "", n);
                (0, Oe.Z)({
                    type: d.nv.MODAL,
                    name: d.zs.GUILD_PERMANENT_LINKS_UPSELL
                });
                if (!i) return null;
                return (0, r.jsxs)("div", {
                    className: Ze().container,
                    children: [(0, r.jsx)("div", {
                        className: Ze().imageContainer,
                        children: (0, r.jsx)("img", {
                            src: Pe(),
                            className: Ze().image,
                            alt: se.Z.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_ALT_TEXT
                        })
                    }), (0, r.jsxs)("div", {
                        className: Ze().textContainer,
                        children: [(0, r.jsx)(v.Heading, {
                            variant: "heading-lg/semibold",
                            className: Ze().header,
                            children: se.Z.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_HEADER
                        }), (0, r.jsx)(v.Text, {
                            variant: "text-sm/medium",
                            className: Ze().description,
                            children: se.Z.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_DESCRIPTION
                        }), (0, r.jsx)(v.Button, {
                            size: v.ButtonSizes.SMALL,
                            color: v.Button.Colors.BRAND,
                            className: Ze().button,
                            onClick: function() {
                                Me.ZP.trackWithMetadata(O.rMx.PERMANENT_INVITE_COMMUNITY_UPSELL_CLICKED, {});
                                Ae.Z.init(null != t ? t : "");
                                je.Z.open();
                                o()
                            },
                            children: se.Z.Messages.GET_STARTED
                        })]
                    })]
                })
            }
            var Ve = t(515300),
                Ue = t.n(Ve);

            function De(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Ge(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return De(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return De(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Be = b.ZP.getMaxAgeOptions;

            function Fe(e) {
                var n = e.temporary,
                    t = e.shouldHide,
                    o = e.onToggleTemporary;
                return t ? (0, r.jsx)("div", {
                    className: fe().marginTop20
                }) : (0, r.jsx)(v.FormItem, {
                    className: a()(fe().marginTop20, Ue().switch),
                    children: (0, r.jsx)(v.FormSwitch, {
                        value: n,
                        onChange: function(e) {
                            return o(e)
                        },
                        note: se.Z.Messages.TEMPORARY_MEMBERSHIP_EXPLANATION,
                        hideBorder: !0,
                        children: (0, r.jsx)(v.Text, {
                            variant: "text-sm/normal",
                            children: se.Z.Messages.GRANT_TEMPORARY_MEMBERSHIP
                        })
                    })
                })
            }
            var ke = b.ZP.getMaxUsesOptions;

            function He(e) {
                var n, t = e.guildId,
                    i = e.shouldHideTemporaryInviteToggle,
                    l = e.maxAge,
                    s = e.maxUses,
                    u = e.temporary,
                    c = e.onGenerateNewLink,
                    d = e.onToggleTemporary,
                    f = e.onSelectMaxAge,
                    g = e.onSelectMaxUses,
                    h = ye(t, 0 === l),
                    p = ye(t, !0),
                    I = function(e) {
                        var n = (0, S.ZP)([x.Z], (function() {
                                return x.Z.getGuild(e)
                            }), [e]),
                            t = _e(e),
                            r = b.ZP.getMaxAgeOptions;
                        return t && !(null == n ? void 0 : n.hasFeature(O.oNc.COMMUNITY)) ? r : r.filter((function(e) {
                            return (null == e ? void 0 : e.value) !== b.ZP.INVITE_OPTIONS_30_DAYS.value
                        }))
                    }(t),
                    m = I.find((function(e) {
                        return e.value === l
                    })),
                    E = ke.find((function(e) {
                        return e.value === s
                    })),
                    _ = Ge(o.useState(!1), 2),
                    y = _[0],
                    T = _[1],
                    N = function(e, n) {
                        var t = _e(null != e ? e : ""),
                            r = (0, S.ZP)([x.Z], (function() {
                                return x.Z.getGuild(e)
                            }), [e]),
                            o = null == r ? void 0 : r.hasFeature(O.oNc.COMMUNITY);
                        return !!t && !!o && !!n
                    }(t, y);
                return (0, r.jsx)("div", {
                    className: Ue().settingsContent,
                    children: (0, r.jsxs)("form", {
                        onSubmit: c,
                        children: [(0, r.jsx)(v.FormItem, {
                            title: se.Z.Messages.EXPIRE_AFTER,
                            className: fe().marginTop20,
                            children: (0, r.jsx)(v.SingleSelect, {
                                value: null !== (n = null == m ? void 0 : m.value) && void 0 !== n ? n : Be[0].value,
                                options: I,
                                renderOptionLabel: function(e) {
                                    var n = 0 === e.value;
                                    return Ce(e, n && p, n && N)
                                },
                                renderOptionValue: function(e) {
                                    var n = Ge(e, 1)[0],
                                        t = 0 === n.value;
                                    return Ce(n, t && p, t && N)
                                },
                                onChange: f,
                                optionClassName: Ue().option,
                                className: Ue().option,
                                maxVisibleItems: 8
                            })
                        }), h ? (0, r.jsx)(Le, {
                            guildId: t,
                            permanentInviteSelected: 0 === l,
                            onClick: function() {
                                return T(!0)
                            }
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(v.FormItem, {
                                title: se.Z.Messages.MAX_NUMBER_OF_USES,
                                className: a()(fe().marginTop20, fe().marginBottom4),
                                children: (0, r.jsx)(v.SingleSelect, {
                                    value: null == E ? void 0 : E.value,
                                    options: ke,
                                    onChange: g
                                })
                            }), (0, r.jsx)(Fe, {
                                temporary: u,
                                shouldHide: h || i,
                                onToggleTemporary: d
                            })]
                        })]
                    })
                })
            }
            var Ke = t(575945);

            function Ye(e) {
                var n = e.guildId,
                    t = e.maxAge,
                    i = e.onConfirm,
                    a = e.onDismiss,
                    l = e.theme,
                    s = ye(n, 0 === t);
                return (0, r.jsxs)(o.Fragment, {
                    children: [(0, r.jsx)(v.Button, {
                        onClick: i,
                        disabled: s,
                        children: se.Z.Messages.GENERATE_A_NEW_LINK
                    }), (0, r.jsx)(v.Button, {
                        look: v.Button.Looks.LINK,
                        color: (0, Ke.ap)(l) ? v.Button.Colors.PRIMARY : v.Button.Colors.WHITE,
                        onClick: a,
                        children: se.Z.Messages.CANCEL
                    })]
                })
            }
            var We = function(e) {
                    var n = e.handleDone,
                        t = e.headerId,
                        o = e.modalState,
                        i = e.shouldHideTemporaryInviteToggle,
                        l = e.onGenerateNewLink,
                        s = e.onToggleTemporary,
                        u = e.onSelectMaxAge,
                        c = e.onSelectMaxUses,
                        d = e.guild,
                        f = (0, me.ZP)(),
                        g = o.maxAge,
                        h = o.maxUses,
                        p = o.temporary;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(v.ModalHeader, {
                            children: [(0, r.jsx)(v.ModalCloseButton, {
                                className: ce().closeButton,
                                onClick: n
                            }), (0, r.jsx)("div", {
                                className: ce().headerContainer,
                                children: (0, r.jsx)(v.FormTitle, {
                                    id: t,
                                    tag: "h2",
                                    className: a()(fe().marginReset, ce().headerCloseButtonSpacing, ce().headerText),
                                    children: se.Z.Messages.INVITE_SETTINGS_TITLE
                                })
                            })]
                        }), (0, r.jsx)(He, {
                            guildId: d.id,
                            shouldHideTemporaryInviteToggle: i,
                            maxAge: g,
                            maxUses: h,
                            temporary: p,
                            onToggleTemporary: s,
                            onSelectMaxAge: u,
                            onSelectMaxUses: c,
                            onGenerateNewLink: l
                        }), (0, r.jsx)(v.ModalFooter, {
                            className: ce().settingsFooter,
                            children: (0, r.jsx)(Ye, {
                                guildId: null == d ? void 0 : d.id,
                                maxAge: g,
                                theme: f,
                                onConfirm: function() {
                                    l();
                                    n()
                                },
                                onDismiss: n
                            })
                        })]
                    })
                },
                qe = t(761953),
                ze = t(720419),
                $e = t(296602),
                Xe = t(506474);

            function Qe(e) {
                Qe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Qe(e)
            }

            function Je(e, n) {
                return !n || "object" !== nn(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function en(e, n) {
                en = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return en(e, n)
            }
            var nn = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function tn(e) {
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
                    var t, r = Qe(e);
                    if (n) {
                        var o = Qe(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return Je(this, t)
                }
            }
            var rn;
            ! function(e) {
                e[e.GROUP_DM = 0] = "GROUP_DM";
                e[e.USER = 1] = "USER";
                e[e.CHANNEL = 2] = "CHANNEL"
            }(rn || (rn = {}));
            var on = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && en(e, n)
                }(t, e);
                var n = tn(t);

                function t() {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    return n.call(this, new $e.Z("InviteQueue"), 1010)
                }
                var r = t.prototype;
                r._sendInvite = function(e, n, t, r, o) {
                    ze.Z.sendInvite(e.id, n, t, r).then((function() {
                        return o(null, !0)
                    }), (function() {
                        return o(null, !1)
                    }))
                };
                r.drain = function(e, n) {
                    var t = this,
                        r = e.location,
                        o = e.suggested;
                    switch (e.type) {
                        case rn.GROUP_DM:
                        case rn.CHANNEL:
                            this._sendInvite(e.channel, e.inviteKey, r, o, n);
                            break;
                        case rn.USER:
                            qe.Z.ensurePrivateChannel(e.user.id).then((function(i) {
                                var a = P.Z.getChannel(i);
                                null != a && t._sendInvite(a, e.inviteKey, r, o, n)
                            }), (function() {
                                return n(null, !1)
                            }))
                    }
                };
                return t
            }(Xe.Z);
            const an = new on;
            var ln = t(621647),
                sn = t(773011),
                un = t(64234),
                cn = t(840922),
                dn = t(775173),
                fn = t(421281),
                gn = t(749565);

            function hn(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function vn(e) {
                vn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return vn(e)
            }

            function pn(e, n) {
                return !n || "object" !== mn(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function In(e, n) {
                In = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return In(e, n)
            }
            var mn = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function En(e) {
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
                    var t, r = vn(e);
                    if (n) {
                        var o = vn(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return pn(this, t)
                }
            }
            var _n = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && In(e, n)
                    }(t, e);
                    var n = En(t);

                    function t() {
                        hn(this, t);
                        var e;
                        (e = n.apply(this, arguments)).state = {
                            sending: !1,
                            invited: !1,
                            hovered: !1
                        };
                        e.handleMouseEnter = function() {
                            e.setState({
                                hovered: !0
                            })
                        };
                        e.handleMouseLeave = function() {
                            e.setState({
                                hovered: !1
                            })
                        };
                        e.getSuggestedProps = function() {
                            var n, t = e.props.row;
                            return null !== (n = null != t ? k.Z.getSelectedInviteMetadata(t) : null) && void 0 !== n ? n : null
                        };
                        e.handleClickInvite = function() {
                            var n = e.props,
                                t = n.user,
                                r = n.channel,
                                o = n.inviteKey,
                                i = n.location;
                            if (null != o)
                                if (null != r) {
                                    e.setState({
                                        sending: !0
                                    });
                                    an.enqueue({
                                        type: rn.GROUP_DM,
                                        channel: r,
                                        inviteKey: o,
                                        location: i,
                                        suggested: e.getSuggestedProps()
                                    }, (function(n) {
                                        e.setState({
                                            sending: !1,
                                            invited: n
                                        })
                                    }))
                                } else if (null != t) {
                                e.setState({
                                    sending: !0
                                });
                                an.enqueue({
                                    type: rn.USER,
                                    user: t,
                                    inviteKey: o,
                                    location: i,
                                    suggested: e.getSuggestedProps()
                                }, (function(n) {
                                    e.setState({
                                        sending: !1,
                                        invited: n
                                    })
                                }))
                            }
                        };
                        return e
                    }
                    var o = t.prototype;
                    o.shouldComponentUpdate = function(e, n) {
                        return this.state.sending !== n.sending || this.state.invited !== n.invited || this.state.hovered !== n.hovered || this.props.user !== e.user || this.props.channel !== e.channel
                    };
                    o.renderUserOrChannel = function() {
                        var e, n, t, o = this.props,
                            i = o.user,
                            a = o.channel;
                        if (null != i) {
                            n = i.getAvatarURL(null == a ? void 0 : a.guild_id, 32);
                            t = gn.ZP.getName(i)
                        } else if (null != a) {
                            n = (0, ln.x)(a);
                            t = (0, sn.F6)(a, W.default, cn.Z);
                            if (null == n && null != a.guild_id) {
                                var l = x.Z.getGuild(a.guild_id);
                                null != l && (null != l.icon ? n = dn.ZP.getGuildIconURL({
                                    id: a.guild_id,
                                    icon: l.icon,
                                    size: 32
                                }) : e = (0, fn.Zg)(l.name))
                            }
                        }
                        return null == n || null == t ? null != e ? (0, r.jsx)("div", {
                            className: ce().acronym,
                            "aria-hidden": !0,
                            children: e
                        }) : null : (0, r.jsx)(v.Avatar, {
                            src: n,
                            "aria-label": t,
                            size: v.AvatarSizes.SIZE_32,
                            className: ce().inviteRowAvatar
                        })
                    };
                    o.render = function() {
                        var e, n = this.props,
                            t = n.user,
                            o = n.channel,
                            i = this.state,
                            a = i.sending,
                            l = i.invited,
                            s = i.hovered;
                        e = l ? (0, r.jsx)(v.Button, {
                            look: v.Button.Looks.LINK,
                            size: v.Button.Sizes.SMALL,
                            disabled: !0,
                            color: (0, Ke.wj)(un.Z.theme) ? v.Button.Colors.WHITE : v.Button.Colors.BLACK,
                            children: se.Z.Messages.INVITE_FRIEND_MODAL_SENT
                        }) : (0, r.jsx)(v.Button, {
                            color: v.Button.Colors.GREEN,
                            look: s ? v.Button.Looks.FILLED : v.Button.Looks.OUTLINED,
                            className: ce().inviteRowButton,
                            size: v.Button.Sizes.SMALL,
                            submitting: a,
                            onClick: this.handleClickInvite,
                            children: se.Z.Messages.INVITE_FRIEND_MODAL_INVITE
                        });
                        return (0, r.jsxs)("div", {
                            className: ce().inviteRow,
                            onMouseEnter: this.handleMouseEnter,
                            onMouseLeave: this.handleMouseLeave,
                            children: [(0, r.jsxs)("div", {
                                className: ce().inviteRowInfo,
                                children: [this.renderUserOrChannel(), (0, r.jsxs)("div", {
                                    className: ce().inviteRowName,
                                    children: [gn.ZP.getName(t), null != o ? (0, sn.F6)(o, W.default, cn.Z, !0) : null]
                                })]
                            }), e]
                        })
                    };
                    return t
                }(o.Component),
                yn = t(718634),
                Tn = t(897196),
                Nn = t(234532),
                Sn = t.n(Nn),
                xn = t(457890),
                bn = t.n(xn);

            function Cn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Mn(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function On(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function An(e) {
                An = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return An(e)
            }

            function jn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        On(e, n, t[n])
                    }))
                }
                return e
            }

            function Rn(e, n) {
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

            function Zn(e, n) {
                return !n || "object" !== Ln(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function wn(e, n) {
                wn = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return wn(e, n)
            }

            function Pn(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Cn(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Cn(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ln = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Vn(e) {
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
                    var t, r = An(e);
                    if (n) {
                        var o = An(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return Zn(this, t)
                }
            }
            var Un = b.ZP.INVITE_OPTIONS_FOREVER,
                Dn = b.ZP.INVITE_OPTIONS_7_DAYS,
                Gn = b.ZP.INVITE_OPTIONS_UNLIMITED,
                Bn = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && wn(e, n)
                    }(t, e);
                    var n = Vn(t);

                    function t() {
                        Mn(this, t);
                        var e;
                        (e = n.apply(this, arguments))._scroller = null;
                        e._headerId = c().uniqueId();
                        e.openSettings = function() {
                            (0,
                                e.props.changePage)(yn.RV.SETTINGS)
                        };
                        e.handleSelectMaxAge = function(n) {
                            var t = e.props,
                                r = t.modalState;
                            (0, t.setModalState)({
                                maxAge: n,
                                savedMaxAge: r.maxAge
                            })
                        };
                        e.handleSelectMaxUses = function(n) {
                            (0, e.props.setModalState)({
                                maxUses: n
                            })
                        };
                        e.handleToggleTemporary = function(n) {
                            (0, e.props.setModalState)({
                                temporary: n
                            })
                        };
                        e.handleToggleGuest = function(n) {
                            var t = e.props,
                                r = t.inviteFlags;
                            (0, t.setInviteFlags)((0, ne.mB)(r, f.$.IS_GUEST_INVITE, n))
                        };
                        e.handleQueryChange = function(n) {
                            var t, r = e.props.setModalState;
                            null === (t = e._scroller) || void 0 === t || t.scrollTo({
                                to: 0
                            });
                            (0, I.C)(n);
                            r({
                                query: n
                            })
                        };
                        e.handleClearSearch = function() {
                            e.handleQueryChange("")
                        };
                        e.handleToggleMaxAge = function() {
                            var n = e.props,
                                t = n.modalState,
                                r = n.setModalState,
                                o = t.maxAge;
                            r({
                                maxAge: t.savedMaxAge,
                                savedMaxAge: o
                            })
                        };
                        e.getRowHeight = function(n, t) {
                            if (n > 0) return 0;
                            switch (e.props.rows[t].type) {
                                case b.bm.CHANNEL:
                                case b.bm.GROUP_DM:
                                case b.bm.DM:
                                case b.bm.FRIEND:
                                    return 44;
                                default:
                                    return 0
                            }
                        };
                        e.renderRow = function(n) {
                            var t = n.section,
                                o = n.row;
                            if (t > 0) return null;
                            var i = e.props.analyticsLocation,
                                a = e.getInviteKey(),
                                l = e.props.rows[o],
                                s = "".concat(l.type, "-").concat(l.item.id);
                            switch (l.type) {
                                case b.bm.GROUP_DM:
                                case b.bm.CHANNEL:
                                    return (0, r.jsx)(_n, {
                                        row: l,
                                        channel: l.item,
                                        inviteKey: a,
                                        location: i
                                    }, s);
                                case b.bm.DM:
                                case b.bm.FRIEND:
                                    return (0, r.jsx)(_n, {
                                        row: l,
                                        user: l.item,
                                        inviteKey: a,
                                        location: i
                                    }, s);
                                default:
                                    return null
                            }
                        };
                        return e
                    }
                    var o = t.prototype;
                    o.componentDidMount = function() {
                        var e = this.props,
                            n = e.inviteChannel,
                            t = e.code,
                            r = e.guild,
                            o = e.source,
                            i = e.canCreateInvites,
                            a = e.analyticsLocation,
                            l = e.streamUserId,
                            s = e.targetType,
                            u = e.targetUserId,
                            c = e.application,
                            d = e.initialCounts,
                            f = e.rows,
                            g = e.showFriends,
                            h = e.modalState,
                            v = e.setModalState,
                            I = h.maxAge,
                            m = h.maxUses,
                            E = h.temporary;
                        if (i) {
                            var _ = null == n ? void 0 : n.id;
                            if (null == _) return;
                            v({
                                networkError: void 0
                            });
                            p.Z.createInvite(_, {
                                validate: null != t ? t : null,
                                max_age: I,
                                max_uses: m,
                                target_user_id: u,
                                target_type: s,
                                target_application_id: null == c ? void 0 : c.id,
                                temporary: E
                            }, o).catch((function(e) {
                                return v({
                                    networkError: e
                                })
                            }))
                        }
                        g && ee.default.track(O.rMx.INVITE_SUGGESTION_OPENED, {
                            location: o,
                            num_suggestions: f.length,
                            num_friends: d.numFriends,
                            num_dms: d.numDms,
                            num_group_dms: d.numGroupDms,
                            guild_id: r.id
                        });
                        oe.trackExposure({
                            guildId: null == r ? void 0 : r.id,
                            location: "acc417_1"
                        });
                        if (null != l) {
                            var y = G.Z.getStreamForUser(l, r.id),
                                T = (0, j.L2)(y, K.Z);
                            ee.default.track(O.rMx.OPEN_MODAL, {
                                type: "Send Stream Invite",
                                source: o,
                                location: a,
                                other_user_id: l,
                                application_id: null != T ? T.id : null,
                                application_name: null != T ? T.name : null,
                                game_id: null != T ? T.id : null
                            })
                        } else null != (null == c ? void 0 : c.id) || ee.default.track(O.rMx.OPEN_MODAL, {
                            type: "Instant Invite Modal",
                            source: o,
                            location: a
                        })
                    };
                    o.componentWillUnmount = function() {
                        var e = this.props,
                            n = e.inviteChannel,
                            t = e.inviteFlags,
                            r = e.setInviteFlags;
                        if ((0, ne.yE)(t, f.$.IS_GUEST_INVITE) && null != n) {
                            r((0, ne.Ge)(t, f.$.IS_GUEST_INVITE));
                            p.Z.clearInviteFromStore(n.id)
                        }
                    };
                    o.getInviteKey = function() {
                        var e = this.props,
                            n = e.code,
                            t = e.vanityURLCode,
                            r = e.guildScheduledEvent,
                            o = e.modalState.showVanityURL ? t : null != n ? n : t;
                        return null == o ? o : (0,
                            te.tV)({
                            baseCode: o,
                            guildScheduledEventId: null == r ? void 0 : r.id
                        })
                    };
                    o.renderChannelWarning = function() {
                        var e = this.props.inviteChannel;
                        return (0, T.Z)(e) ? (0, r.jsxs)("div", {
                            className: ce().warningContainer,
                            children: [(0, r.jsx)(J.Z, {
                                className: ce().warningIcon,
                                color: h.Z.unsafe_rawColors.YELLOW_300.css,
                                width: 12
                            }), (0, r.jsx)(v.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: se.Z.Messages.INVITE_PRIVATE_CHANNEL_WARNING
                            })]
                        }) : null
                    };
                    o.renderHeader = function() {
                        var e, n = this.props,
                            t = n.guild,
                            o = n.showFriends,
                            i = n.guildScheduledEvent,
                            l = n.streamUserId,
                            s = n.application,
                            u = n.welcomeToServer,
                            c = n.inviteChannel,
                            d = n.modalState,
                            f = n.handleDone,
                            g = d.query,
                            h = null,
                            p = null;
                        e = u ? null : null != l ? se.Z.Messages.INVITE_STREAM_HEADER : null != s ? se.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_FRIENDS_TO_ACTIVITY_NAME.format({
                            applicationName: s.name
                        }) : null != i ? se.Z.Messages.GUILD_EVENT_INVITE_MODAL_TITLE : (null == c ? void 0 : c.isGuildStageVoice()) ? se.Z.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_HEADER : se.Z.Messages.INVITE_TO_SERVER_NAME.format({
                            name: t.toString()
                        });
                        if (null != c) {
                            var I = (0, N.KS)(c, t);
                            null != I && (p = (0, r.jsxs)("div", {
                                className: ce().headerChannelContainer,
                                children: [(0, r.jsx)(I, {
                                    className: ce().channelIcon
                                }), (0, r.jsx)(v.Text, {
                                    color: "interactive-normal",
                                    variant: "text-md/normal",
                                    children: c.name
                                })]
                            }))
                        }
                        h = t.hasFeature(O.oNc.HUB) ? (0, r.jsxs)("div", {
                            className: ce().hubHeader,
                            children: [(0, r.jsx)(v.Heading, {
                                className: a()(ce().hubInviteTitle, ce().headerCloseButtonSpacing),
                                id: this._headerId,
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: se.Z.Messages.HUB_INVITE_HEADER
                            }), (0, r.jsx)(v.Text, {
                                color: "header-secondary",
                                variant: "text-md/normal",
                                children: se.Z.Messages.HUB_INVITE_SUBHEADER
                            }), o && (0, r.jsx)(X.Z, {
                                query: g,
                                className: ce().hubFriendSearch,
                                onChange: this.handleQueryChange,
                                placeholder: se.Z.Messages.INVITE_SEARCH_FOR_FRIENDS,
                                "aria-label": se.Z.Messages.INVITE_SEARCH_FOR_FRIENDS,
                                autoFocus: !0,
                                onClear: this.handleClearSearch
                            })]
                        }) : o ? (0, r.jsxs)("div", {
                            className: ce().header,
                            children: [(0, r.jsx)("div", {
                                className: ce().headerTopRow,
                                children: (0, r.jsx)(v.FormTitle, {
                                    id: this._headerId,
                                    tag: "h2",
                                    className: a()(fe().marginBottom4, ce().headerCloseButtonSpacing, ce().headerText),
                                    children: e
                                })
                            }), p, (0, r.jsx)(X.Z, {
                                query: g,
                                className: ce().searchBar,
                                onChange: this.handleQueryChange,
                                placeholder: se.Z.Messages.INVITE_SEARCH_FOR_FRIENDS,
                                autoFocus: !0,
                                onClear: this.handleClearSearch
                            }), (0, r.jsx)("div", {
                                className: fe().marginTop8,
                                children: this.renderChannelWarning()
                            })]
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(v.FormTitle, {
                                id: this._headerId,
                                tag: "h2",
                                className: a()(fe().marginReset, ce().headerCloseButtonSpacing, ce().headerText),
                                children: e
                            }), p, this.renderChannelWarning()]
                        });
                        return (0, r.jsxs)(v.ModalHeader, {
                            separator: o,
                            children: [(0, r.jsx)(v.ModalCloseButton, {
                                className: ce().closeButton,
                                onClick: f
                            }), (0, r.jsxs)("div", {
                                className: ce().headerContainer,
                                children: [u && (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("img", {
                                        className: ce().welcomeImage,
                                        src: bn(),
                                        alt: ""
                                    }), (0, r.jsx)(v.H, {
                                        className: ce().welcomeHeading,
                                        children: se.Z.Messages.INVITE_WELCOME_HEADING
                                    }), (0, r.jsx)("p", {
                                        className: ce().welcomeSubheading,
                                        children: se.Z.Messages.INVITE_WELCOME_SUBHEADING
                                    })]
                                }), null != l ? (0, r.jsx)(R.Z, {}) : null, h]
                            })]
                        })
                    };
                    o.renderFriendsBody = function() {
                        var e = this.props.rows,
                            n = this.getInviteKey();
                        return 0 === e.length ? (0, r.jsx)(v.ModalContent, {
                            className: a()(ce().inviteRowEmptyState),
                            children: (0, r.jsx)(z.OZ, {
                                children: se.Z.Messages.INVITE_FRIEND_MODAL_NO_RESULTS
                            })
                        }) : null == n ? (0, r.jsx)(v.ModalContent, {
                            className: a()(ce().inviteRowEmptyState),
                            children: (0, r.jsx)(z.OZ, {
                                children: se.Z.Messages.INVITE_FRIEND_MODAL_LOADING
                            })
                        }) : (0, r.jsx)(v.ModalListContent, {
                            className: ce().scroller,
                            sections: [e.length],
                            renderSection: this.renderSection,
                            sectionHeight: 0,
                            renderRow: this.renderRow,
                            rowHeight: this.getRowHeight,
                            paddingBottom: 16
                        })
                    };
                    o.renderSection = function() {
                        return null
                    };
                    o.renderBody = function() {
                        var e, n = this.props,
                            t = n.guild,
                            o = n.showFriends,
                            i = n.streamUserId,
                            a = n.application;
                        if (o) return this.renderFriendsBody();
                        var l = (0, ie.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ""),
                            u = W.default.getCurrentUser();
                        s()(null != u, "InstantInviteModal: user cannot be undefined");
                        var c = t.isOwner(u) ? se.Z.Messages.INVITE_SHARE_LINK_OWN_SERVER : se.Z.Messages.SHARE_INVITE_LINK_FOR_ACCESS;
                        null != i ? c = se.Z.Messages.INVITE_SHARE_LINK_TO_STREAM : null != a && (c = se.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_LINK_TO_ACTIVITY);
                        return (0, r.jsx)(v.ModalContent, {
                            className: ce().noScroll,
                            children: (0, r.jsxs)($.Z, {
                                direction: $.Z.Direction.VERTICAL,
                                className: fe().marginBottom20,
                                children: [(0, r.jsx)(v.Text, {
                                    className: ce().subText,
                                    variant: "text-sm/normal",
                                    children: c
                                }), (0, r.jsx)(le.I, Rn(jn({}, this.props), {
                                    copyValue: l
                                }))]
                            })
                        })
                    };
                    o.renderFooter = function() {
                        var e, n, t = this,
                            o = this.props,
                            i = o.noInvitesAvailable,
                            l = o.showFriends,
                            s = o.guildScheduledEvent,
                            u = o.streamUserId,
                            c = o.application,
                            d = o.inviteChannel,
                            f = o.modalState.maxAge,
                            g = null,
                            p = (0, ie.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : "");
                        if (l) {
                            var I = se.Z.Messages.INVITE_FOOTER_LINK_HEADER;
                            null != u ? I = se.Z.Messages.INVITE_STREAM_FOOTER_LINK_HEADER : null != c ? I = se.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_ACTIVITY_FOOTER_LINK_HEADER : null != s ? I = se.Z.Messages.GUILD_EVENT_INVITE_MODAL_FOOTER : (null == d ? void 0 : d.isGuildStageVoice()) && (I = se.Z.Messages.STAGE_CHANNEL_INVITE_TO_STAGE_MODAL_FOOTER);
                            g = (0, r.jsxs)($.Z, {
                                direction: $.Z.Direction.VERTICAL,
                                className: ce().content,
                                children: [(0, r.jsx)(v.FormTitle, {
                                    tag: "h5",
                                    className: fe().marginBottom8,
                                    children: I
                                }), (0, r.jsx)(le.I, Rn(jn({}, this.props), {
                                    copyValue: p
                                }))]
                            })
                        } else i || (g = (0, r.jsxs)($.Z, {
                            justify: $.Z.Justify.BETWEEN,
                            className: fe().marginTop20,
                            children: [(0, r.jsx)(v.Checkbox, {
                                size: 18,
                                type: v.Checkbox.Types.INVERTED,
                                value: f === Un.value,
                                onChange: this.handleToggleMaxAge,
                                children: (0, r.jsx)(v.Text, {
                                    className: ce().checkBoxLabel,
                                    variant: "text-sm/normal",
                                    children: se.Z.Messages.SET_INVITE_LINK_NEVER_EXPIRE
                                })
                            }), (0, r.jsx)(v.Tooltip, {
                                text: se.Z.Messages.LINK_SETTINGS,
                                children: function(e) {
                                    var n = e.onMouseEnter,
                                        o = e.onMouseLeave;
                                    return (0, r.jsx)(v.Clickable, {
                                        onClick: t.openSettings,
                                        onMouseEnter: n,
                                        onMouseLeave: o,
                                        className: Sn().cursorPointer,
                                        children: (0, r.jsx)(Q.Z, {
                                            width: 18,
                                            height: 18,
                                            color: h.Z.unsafe_rawColors.PRIMARY_400.css
                                        })
                                    })
                                }
                            })]
                        }));
                        return null != g ? (0, r.jsx)(v.ModalFooter, {
                            className: a()((n = {}, On(n, ce().noPadding, !l), On(n, ce().footer, l), n)),
                            children: g
                        }) : null
                    };
                    o.getModalContent = function() {
                        var e = this.props,
                            n = e.modalState,
                            t = e.handleDone;
                        switch (n.currentPage) {
                            case yn.RV.MAIN:
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
                                });
                            case yn.RV.SETTINGS:
                                return (0, r.jsx)(We, Rn(jn({}, this.props), {
                                    headerId: this._headerId,
                                    onSelectMaxAge: this.handleSelectMaxAge,
                                    onSelectMaxUses: this.handleSelectMaxUses,
                                    onToggleTemporary: this.handleToggleTemporary,
                                    handleDone: t
                                }));
                            case yn.RV.GUEST:
                                var o, i = (0, ie.Z)(null !== (o = this.getInviteKey()) && void 0 !== o ? o : "");
                                return (0, r.jsx)(Ie, Rn(jn({}, this.props), {
                                    headerId: this._headerId,
                                    handleDone: t,
                                    copyValue: i
                                }));
                            default:
                                return null
                        }
                    };
                    o.render = function() {
                        var e = this.props,
                            n = e.transitionState,
                            t = e.inviteChannel,
                            o = e.guild;
                        return (0, r.jsx)("div", {
                            className: this.props.showFriends ? ce().wrapper : void 0,
                            children: (0, r.jsx)(v.ModalRoot, {
                                impression: {
                                    impressionName: d.zs.GUILD_INVITE,
                                    impressionProperties: {
                                        invite_channel_id: null == t ? void 0 : t.id,
                                        invite_guild_id: o.id
                                    }
                                },
                                "aria-labelledby": this._headerId,
                                transitionState: n,
                                className: ce().modal,
                                children: this.getModalContent()
                            })
                        })
                    };
                    return t
                }(o.PureComponent);
            Bn.defaultProps = {
                analyticsLocation: O.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
                defaultMaxAge: Dn.value
            };
            const Fn = o.forwardRef((function(e, n) {
                var t = e.channel,
                    i = e.guild,
                    a = e.source,
                    l = e.guildScheduledEvent,
                    s = e.streamUserId,
                    u = e.applicationId,
                    c = e.transitionState,
                    d = e.onClose,
                    h = e.welcomeToServer,
                    v = e.page,
                    N = e.analyticsLocation,
                    S = Pn(o.useState(v === yn.RV.GUEST ? f.$.IS_GUEST_INVITE : 0), 2),
                    x = S[0],
                    b = S[1],
                    C = (0, _.Z)(E.Z.INSTANT_INVITE_MODAL),
                    M = C.AnalyticsLocationProvider,
                    j = C.analyticsLocations,
                    R = (0, g.e7)([P.Z, Y.Z], (function() {
                        var e = Y.Z.getVoiceChannelId();
                        if (null == e) return null;
                        var n = P.Z.getChannel(e);
                        return (null == n ? void 0 : n.guild_id) === i.id ? n : null
                    })),
                    w = null != R && !(0, T.Z)(R) && [O.t4x.GUILD_CONTEXT_MENU, O.t4x.GUILD_HEADER].includes(a),
                    V = U(i.id),
                    G = (0, g.e7)([Y.Z, P.Z, L.ZP], (function() {
                        if (w && ((0, ne.yE)(x, f.$.IS_GUEST_INVITE) || v === yn.RV.GUEST)) return R;
                        if (v === yn.RV.GUEST) return 1 === V.length ? V[0] : void 0;
                        if (null != t) return t;
                        var e = Y.Z.getChannelId(),
                            n = null == e || (0, Tn.AB)(e) ? void 0 : P.Z.getChannel(e);
                        (null == n ? void 0 : n.isThread()) && (n = P.Z.getChannel(n.parent_id));
                        return null != n ? n : L.ZP.getDefaultChannel(i.id)
                    }), [w, x, v, t, i.id, R, V]),
                    K = Pn(o.useState(null), 2),
                    W = K[0],
                    z = K[1],
                    $ = null != W ? W : G,
                    X = null;
                null != s ? X = yn.Iq.STREAM : null != u && (X = yn.Iq.EMBEDDED_APPLICATION);
                var Q = s,
                    J = u,
                    ee = null != t ? t.getGuildId() : null != i ? i.id : null,
                    te = (0, g.e7)([F.Z], (function() {
                        var e = null != $ ? $.id : null;
                        return null == e ? null : F.Z.getInvite(e, {
                            targetType: X,
                            targetUserId: Q,
                            targetApplicationId: J
                        })
                    }), [$, X, Q, J]),
                    oe = Pn((0, g.Wu)([k.Z, q.ZP, B.ZP], (function() {
                        var e = null != $ ? $.id : null;
                        return [k.Z.getInviteSuggestionRows(), k.Z.getTotalSuggestionsCount() >= 1, k.Z.getInitialCounts(), null != t && null != $ ? q.ZP.getVoiceStatesForChannel($) : null, null != ee ? B.ZP.getProps(ee, e) : null]
                    }), [$, t, ee]), 5),
                    ie = oe[0],
                    ae = oe[1],
                    le = oe[2],
                    se = oe[3],
                    ue = oe[4],
                    ce = (0, g.e7)([H.Z], (function() {
                        return null != $ && H.Z.can(O.Plq.CREATE_INSTANT_INVITE, $)
                    }), [$]),
                    de = null === te || !ce,
                    fe = Pn(o.useState((function() {
                        var e = new Set;
                        null != s && null != se ? se.forEach((function(n) {
                            var t = n.user;
                            e.add(t.id)
                        })) : null != ee && null != ue && X !== yn.Iq.EMBEDDED_APPLICATION && ue.rows.forEach((function(n) {
                            n.type === B.so.MEMBER && e.add(n.userId)
                        }));
                        return e
                    })), 1),
                    ge = fe[0],
                    he = null == t ? void 0 : t.id,
                    ve = (0, g.e7)([D.Z], (function() {
                        return D.Z.getStageInstanceByChannel(he)
                    }), [he]);
                o.useEffect((function() {
                    (0, I.x)({
                        omitUserIds: ge,
                        guild: i,
                        channel: t,
                        applicationId: J,
                        inviteTargetType: X
                    }).catch(O.VqG)
                }), [ge, t, i, J, X]);
                var pe, Ie, me, Ee, _e = Pn((0, y.Z)(null != J ? [J] : []), 1)[0],
                    ye = A({
                        guildId: ee
                    }),
                    Te = null != te ? te.code : void 0,
                    Ne = null == te ? void 0 : te.maxAge,
                    Se = null == te ? void 0 : te.maxUses,
                    xe = null == te ? void 0 : te.temporary,
                    be = i.vanityURLCode,
                    Ce = null != be && be.length > 0,
                    Me = re.Z.useExperiment({
                        guildId: null !== (me = null !== (Ie = null !== (pe = i.id) && void 0 !== pe ? pe : null == te ? void 0 : te.guild.id) && void 0 !== Ie ? Ie : ee) && void 0 !== me ? me : "",
                        location: "acc417_2"
                    }, {
                        autoTrackExposure: Ce
                    }).enabled && !(null == $ ? void 0 : $.isGuildVocal()) && Ce,
                    Oe = (null == $ ? void 0 : $.type) === O.d4z.GUILD_VOICE,
                    Ae = (0, T.Z)($);
                ce || null == (null == ve ? void 0 : ve.invite_code) || (Te = ve.invite_code);
                var je = Pn(o.useState({
                        query: "",
                        maxAge: null !== (Ee = null != Ne ? Ne : ye) && void 0 !== Ee ? Ee : Dn.value,
                        savedMaxAge: Ne === Un.value ? null != ye ? ye : Dn.value : Un.value,
                        maxUses: null != Se && 0 !== Se ? Se : Gn.value,
                        temporary: null != xe && xe,
                        networkError: void 0,
                        showVanityURL: Me,
                        currentPage: null != v ? v : yn.RV.MAIN,
                        lastPage: void 0
                    }), 2),
                    Re = je[0],
                    Ze = je[1],
                    we = o.useCallback((function(e) {
                        Ze((function(n) {
                            return jn({}, n, e)
                        }))
                    }), []),
                    Pe = o.useCallback((function(e) {
                        we({
                            currentPage: e,
                            lastPage: Re.currentPage
                        })
                    }), [Re.currentPage, we]),
                    Le = (Oe || w) && v !== yn.RV.GUEST && !Me && !de && !Ae,
                    Ve = Z.useExperiment({
                        guildId: null == i ? void 0 : i.id,
                        location: "acc417_3"
                    }, {
                        autoTrackExposure: Le
                    }).enabled,
                    Ue = Re.maxAge,
                    De = Re.maxUses,
                    Ge = Re.temporary,
                    Be = Re.savedMaxAge,
                    Fe = o.useCallback((function() {
                        var e = Re.currentPage,
                            n = Re.lastPage;
                        e === yn.RV.SETTINGS && null != n ? Pe(n) : d()
                    }), [Pe, Re, d]),
                    ke = o.useCallback((function() {
                        var e = null == $ ? void 0 : $.id;
                        if (0 === De && 0 === Ue && !Ge && Me) we({
                            networkError: void 0,
                            showVanityURL: !0
                        });
                        else if (null != e) {
                            we({
                                networkError: void 0,
                                showVanityURL: !1
                            });
                            p.Z.createInvite(e, {
                                max_age: Ue,
                                max_uses: De,
                                target_type: X,
                                target_user_id: Q,
                                target_application_id: null == _e ? void 0 : _e.id,
                                temporary: Ge,
                                flags: x
                            }, a).catch((function(e) {
                                return we({
                                    networkError: e,
                                    showVanityURL: Me
                                })
                            }))
                        }
                        Ue !== Un.value && Be !== Un.value && we({
                            savedMaxAge: Un.value
                        })
                    }), [Me, $, a, null == _e ? void 0 : _e.id, X, Q, Ue, De, Ge, x, we, Be]),
                    He = (0, m.Z)($),
                    Ke = (0, m.Z)(x),
                    Ye = He !== $,
                    We = Ke !== x;
                o.useEffect((function() {
                    (Ye || We) && ke()
                }), [ke, Ye, We]);
                return (0, r.jsx)(M, {
                    children: (0, r.jsx)(Bn, {
                        ref: n,
                        canCreateInvites: ce,
                        noInvitesAvailable: de,
                        inviteChannel: $,
                        guild: i,
                        guildScheduledEvent: l,
                        streamUserId: s,
                        vanityURLCode: be,
                        targetType: X,
                        targetUserId: Q,
                        application: _e,
                        rows: ie,
                        showFriends: ae,
                        initialCounts: le,
                        code: Te,
                        source: a,
                        welcomeToServer: h,
                        analyticsLocations: j,
                        analyticsLocation: N,
                        transitionState: c,
                        onClose: d,
                        canShowVanityURL: Me,
                        isGuestInviteCreationToggleEnabled: Ve && Le,
                        shouldHideTemporaryInviteToggle: Ve && Le || v === yn.RV.GUEST,
                        modalState: Re,
                        setModalState: we,
                        changePage: Pe,
                        onGenerateNewLink: ke,
                        inviteFlags: x,
                        setInviteFlags: b,
                        showGuestInviteToggleForCurrentVoiceChannel: w,
                        setInviteChannel: z,
                        handleDone: Fe
                    })
                })
            }))
        },
        811622: (e, n, t) => {
            "use strict";
            t.d(n, {
                I: () => P,
                S: () => w
            });
            var r = t(785893),
                o = t(667294),
                i = t(294184),
                a = t.n(i),
                l = t(816810),
                s = t(202351),
                u = t(513328),
                c = t(70418),
                d = t(464187),
                f = t(793461),
                g = t(652591),
                h = t(691797),
                v = t(661123),
                p = t(786502),
                I = t(703790),
                m = t(682776),
                E = t(2590),
                _ = t(473708),
                y = t(138646),
                T = t.n(y);

            function N(e) {
                var n = e.guild,
                    t = e.error,
                    i = e.onClose,
                    a = n.id,
                    l = o.useCallback((function() {
                        i();
                        I.Z.open(a, E.pNK.INSTANT_INVITES)
                    }), [a, i]),
                    s = o.useCallback((function(e) {
                        return (0, r.jsx)(c.Clickable, {
                            className: T().errorLink,
                            onClick: l,
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: e
                            })
                        })
                    }), [l]),
                    u = o.useCallback((function(e) {
                        return (0, r.jsx)(c.Anchor, {
                            href: E.EYA.INVITES_HELP,
                            target: "_blank",
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                tag: "span",
                                children: e
                            })
                        })
                    }), []),
                    d = t.code === E.evJ.TOO_MANY_INVITES ? m.Z.can(E.Plq.MANAGE_GUILD, n) ? _.Z.Messages.TOO_MANY_INVITES_ERROR.format({
                        inviteListHook: s,
                        inviteHelpHook: u
                    }) : _.Z.Messages.TOO_MANY_INVITES_ERROR_MEMBER : t.getAnyErrorMessage();
                return (0, r.jsx)(c.Text, {
                    className: T().errorMessage,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: d
                })
            }
            var S = t(718634),
                x = t(229481),
                b = t.n(x),
                C = t(3066),
                M = t.n(C),
                O = t(380203),
                A = t.n(O);

            function j(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function R(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Z(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            o = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return j(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return j(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var w = s.ZP.connectStores([f.Z], (function() {
                    return {
                        hideValue: f.Z.hideInstantInvites
                    }
                }))((function(e) {
                    var n = e.value,
                        t = e.autoFocus,
                        i = e.hideValue,
                        l = e.onCopy,
                        s = e.disabled,
                        d = Z(o.useState(!1), 2),
                        f = d[0],
                        g = d[1],
                        v = Z(o.useState(!1), 2),
                        p = v[0],
                        I = v[1],
                        m = o.useMemo((function() {
                            return new u.sW(1e3, (function() {
                                return I(!1)
                            }))
                        }), [I]);
                    o.useEffect((function() {
                        return function() {
                            m.cancel()
                        }
                    }), [m]);
                    var E;
                    return (0, r.jsxs)("div", {
                        className: a()(b().input, M().flexJustifyBetween, M().flexCenter, (E = {}, R(E, b().success, p), R(E, b().focused, f), E)),
                        children: [(0, r.jsx)(c.TextInput, {
                            className: T().copyInput,
                            name: "invite",
                            value: i ? _.Z.Messages.INSTANT_INVITE_HIDDEN : n,
                            editable: !1,
                            inputClassName: T().noBorder,
                            autoFocus: t,
                            onFocus: function() {
                                return t ? g(!0) : null
                            },
                            onBlur: function() {
                                return t ? g(!1) : null
                            },
                            spellCheck: "false",
                            onClick: function(e) {
                                return e.currentTarget.select()
                            },
                            "aria-label": _.Z.Messages.FORM_LABEL_INVITE_LINK,
                            disabled: s
                        }), h.wS ? (0, r.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            color: p ? c.Button.Colors.GREEN : c.Button.Colors.BRAND,
                            className: T().copyButton,
                            onClick: function() {
                                I(!0);
                                m.delay();
                                l(n)
                            },
                            disabled: s,
                            children: p ? _.Z.Messages.INVITE_COPIED : _.Z.Messages.COPY
                        }) : null]
                    })
                })),
                P = function(e) {
                    var n = e.guild,
                        t = e.noInvitesAvailable,
                        i = e.showFriends,
                        s = e.onClose,
                        u = e.modalState,
                        f = e.isGuestInviteCreationToggleEnabled,
                        I = e.inviteFlags,
                        m = e.setInviteFlags,
                        y = e.showGuestInviteToggleForCurrentVoiceChannel,
                        x = e.copyValue,
                        b = e.changePage,
                        C = e.inviteChannel,
                        M = e.source,
                        O = e.code,
                        j = e.guildScheduledEvent,
                        R = e.disabled,
                        Z = u.maxAge,
                        P = u.maxUses,
                        L = u.networkError,
                        V = u.showVanityURL,
                        U = o.useCallback((function() {
                            (0, h.JG)(x);
                            g.default.track(E.rMx.COPY_INSTANT_INVITE, {
                                server: d.Z.getGuildId(),
                                channel: null == C ? void 0 : C.id,
                                channel_type: null == C ? void 0 : C.type,
                                location: M,
                                code: O,
                                guild_scheduled_event_id: null == j ? void 0 : j.id
                            })
                        }), [x, C, M, O, j]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(w, {
                            value: x,
                            autoFocus: i,
                            onCopy: U,
                            disabled: R
                        }), f ? (0, r.jsx)("div", {
                            className: T().temporaryMembershipContainerBackground,
                            children: (0, r.jsx)(c.FormSwitch, {
                                className: T().temporaryMembershipContainer,
                                value: (0, v.yE)(I, l.$.IS_GUEST_INVITE),
                                onChange: function(e) {
                                    return m((0, v.mB)(I, l.$.IS_GUEST_INVITE, e))
                                },
                                note: _.Z.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                                disabled: R,
                                hideBorder: !0,
                                children: y ? _.Z.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : _.Z.Messages.GRANT_GUEST_MEMBERSHIP
                            })
                        }) : null, t || V ? null : (0, r.jsxs)(c.Text, {
                            variant: "text-xs/normal",
                            className: a()(A().marginTop8, T().footerText),
                            children: [(0, p.Vg)(Z, P), " ", i ? (0, r.jsx)(c.Anchor, {
                                onClick: function() {
                                    return b(S.RV.SETTINGS)
                                },
                                children: _.Z.Messages.INVITE_EDIT_LINK
                            }) : null]
                        }), !t && i && V ? (0, r.jsxs)(c.Text, {
                            variant: "text-xs/normal",
                            className: a()(A().marginTop8, T().footerText),
                            children: [_.Z.Messages.INVITE_VANITY_USED, " ", (0, r.jsx)(c.Anchor, {
                                onClick: function() {
                                    return b(S.RV.SETTINGS)
                                },
                                children: _.Z.Messages.INVITE_EDIT_LINK
                            })]
                        }) : null, null != L ? (0, r.jsx)(N, {
                            guild: n,
                            error: L,
                            onClose: s
                        }) : null]
                    })
                }
        },
        537335: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => w
            });
            var r = t(202351),
                o = t(744564),
                i = t(980604),
                a = t(72580),
                l = t(786502),
                s = t(61209),
                u = t(840922),
                c = t(239734),
                d = t(2590),
                f = t(718634);

            function g(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function h(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function p(e, n) {
                return !n || "object" !== E(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function I(e, n) {
                I = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return I(e, n)
            }

            function m(e) {
                return function(e) {
                    if (Array.isArray(e)) return g(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return g(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
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
                    var t, r = v(e);
                    if (n) {
                        var o = v(this).constructor;
                        t = Reflect.construct(r, arguments, o)
                    } else t = r.apply(this, arguments);
                    return p(this, t)
                }
            }
            var y, T, N, S, x, b, C, M = new Set,
                O = [],
                A = new Map;

            function j(e) {
                var n = new Set,
                    t = null == S || C === f.Iq.EMBEDDED_APPLICATION ? void 0 : S.id,
                    r = (0, l.rh)(M, t);
                null == r || u.Z.isBlocked(r.id) || n.add(r.id);
                var o = !0,
                    g = !1,
                    h = void 0;
                try {
                    for (var v, p = c.Z.getUserAffinitiesUserIds()[Symbol.iterator](); !(o = (v = p.next()).done); o = !0) {
                        var I = v.value;
                        n.add(I)
                    }
                } catch (e) {
                    g = !0;
                    h = e
                } finally {
                    try {
                        o || null == p.return || p.return()
                    } finally {
                        if (g) throw h
                    }
                }
                var m = new Set;
                if (C === f.Iq.EMBEDDED_APPLICATION) {
                    i.Z.getChannelHistory().map((function(e) {
                        return s.Z.getChannel(e)
                    })).filter(a.lm).filter((function(e) {
                        return e.type === d.d4z.GUILD_TEXT
                    })).slice(0, 3).forEach((function(e) {
                        return m.add(e.id)
                    }))
                }
                return (0, l.an)({
                    query: e,
                    omitUserIds: M,
                    suggestedUserIds: n,
                    maxRowsWithoutQuery: 100,
                    omitGuildId: t,
                    suggestedChannelIds: m,
                    inviteTargetType: C
                })
            }

            function R(e) {
                O = e;
                A = new Map;
                e.forEach((function(e, n) {
                    A.set(e, {
                        index: n
                    })
                }))
            }
            var Z = function(e) {
                ! function(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && I(e, n)
                }(t, e);
                var n = _(t);

                function t() {
                    h(this, t);
                    return n.apply(this, arguments)
                }
                var r = t.prototype;
                r.initialize = function() {
                    this.waitFor(u.Z, c.Z)
                };
                r.getInviteSuggestionRows = function() {
                    return O
                };
                r.getTotalSuggestionsCount = function() {
                    return T
                };
                r.getInitialCounts = function() {
                    return y
                };
                r.getSelectedInviteMetadata = function(e) {
                    var n = A.get(e),
                        t = c.Z.getUserAffinitiesUserIds();
                    return null != n ? {
                        rowNum: n.index,
                        isAffinitySuggestion: e.isSuggested,
                        numTotal: O.length,
                        numAffinityConnections: t.size,
                        isFiltered: N
                    } : null
                };
                return t
            }(r.ZP.Store);
            Z.displayName = "InviteSuggestionsStore";
            const w = new Z(o.Z, {
                LOAD_INVITE_SUGGESTIONS: function(e) {
                    var n = e.omitUserIds,
                        t = e.guild,
                        r = e.channel,
                        o = e.applicationId,
                        i = e.inviteTargetType;
                    S = null != r ? t : null;
                    x = r;
                    b = o;
                    C = i;
                    var a = u.Z.getRelationships(),
                        s = Object.keys(a).filter((function(e) {
                            return a[e] === d.OGo.BLOCKED
                        })),
                        c = (0, l.Sz)({
                            channel: x,
                            applicationId: b,
                            inviteTargetType: i
                        });
                    M = new Set(m(n).concat(m(s), m(c)));
                    N = !1;
                    var f = j(""),
                        g = f.rows,
                        h = f.counts;
                    R(g);
                    y = h;
                    T = O.length
                },
                INVITE_SUGGESTIONS_SEARCH: function(e) {
                    var n = e.query;
                    N = "" !== n;
                    R(j(n).rows)
                }
            })
        }
    }
]);