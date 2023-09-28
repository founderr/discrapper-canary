(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [9749], {
        17589: (e, t, n) => {
            e.exports = n.p + "513f881c80a414c9f58190184516189b.svg"
        },
        491373: (e, t, n) => {
            e.exports = n.p + "f481c34c9e3bc1fb3afaeb2cbc23d085.png"
        },
        284549: (e, t, n) => {
            e.exports = n.p + "751cd78d367cdcd9194001b6804583d3.png"
        },
        500832: (e, t, n) => {
            e.exports = n.p + "6cacd5c22d17a2830e68876eecca48b2.png"
        },
        785528: (e, t, n) => {
            e.exports = n.p + "693bad183292b4401b6a1bb3eab7dbe2.png"
        },
        757920: (e, t, n) => {
            "use strict";
            n.d(t, {
                KV: () => s,
                E$: () => l
            });
            var r = n(940060),
                i = n(1477),
                a = n(563135);

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var s = function(e) {
                    return null == e.roles ? [] : Object.values(e.roles).sort(i.W).map((function(e) {
                        return (0, i.X0)(e)
                    }))
                },
                l = function(e, t, n) {
                    return Object.values(e.roles).filter((function(e) {
                        return (0, i.GJ)(e) || function(e, t, n) {
                            if (null == e.id) return !1;
                            var i = a.ZP.computePermissionsForRoles({
                                forceRoles: o({}, e.id, e),
                                context: n
                            });
                            return r.Z.has(i, t)
                        }(e, n, t)
                    }))
                }
        },
        609749: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => nl
            });
            var r = n(785893),
                i = n(667294),
                a = n(294184),
                o = n.n(a),
                s = n(781629),
                l = n.n(s),
                c = n(503528),
                u = n(798159),
                d = n(457217),
                f = n(247346),
                h = n(797186),
                m = n(202351),
                g = n(418705),
                p = n(304548),
                v = n(341305),
                b = n(677681),
                y = n(316878),
                O = n(773011),
                x = n(627342),
                j = n(872017),
                S = n(920803),
                C = n(337710),
                E = n(517285),
                _ = n(451458),
                T = n(536945),
                N = n(431611),
                A = n(225386),
                w = n(367406),
                I = n(804185),
                M = n(61209),
                P = n(284610),
                R = n(746477),
                Z = n(255592),
                L = n(901654),
                D = n(377463),
                k = n(58838),
                H = n(224746),
                F = n(818417),
                U = n(194212),
                B = n(234503),
                G = n(372518),
                V = n(866893),
                z = n(621862),
                W = n(358969),
                K = n(575978),
                q = n(980204);
            const Y = {
                useForumChannelSeenManager: function(e) {
                    var t = e.guildId,
                        n = e.channelId,
                        r = i.useRef(null),
                        a = (0, K.UU)(),
                        o = !L.Z.isFocused(a);
                    i.useLayoutEffect((function() {
                        if (null == r.current) {
                            r.current = new q.ZP({
                                guildId: t,
                                channelId: n,
                                isPaused: o,
                                windowId: a
                            });
                            r.current.initialize()
                        }
                        return function() {
                            var e;
                            null === (e = r.current) || void 0 === e || e.terminate();
                            r.current = null
                        }
                    }), [n, t, o, a]);
                    return r.current
                }
            };
            var X = n(854602),
                $ = n(883069),
                Q = n(730381),
                J = n.n(Q),
                ee = n(248088),
                te = n(517586),
                ne = n(940060),
                re = n(842227),
                ie = n(87127),
                ae = n(461884),
                oe = n(296916),
                se = n(1477),
                le = n(575945),
                ce = n(74535),
                ue = n(793998),
                de = n(773237),
                fe = n(703790),
                he = n(567403),
                me = n(709189),
                ge = n(223430),
                pe = n(921122),
                ve = n(155349),
                be = n(386991),
                ye = n(956054),
                Oe = n(786170),
                xe = n(348592);

            function je(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Se(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return je(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return je(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ce = {
                    mass: 1,
                    tension: 250,
                    friction: 18,
                    clamp: !0
                },
                Ee = n(2590),
                _e = n(473708),
                Te = n(423327),
                Ne = n.n(Te),
                Ae = n(491373),
                we = n.n(Ae),
                Ie = n(284549),
                Me = n.n(Ie),
                Pe = n(500832),
                Re = n.n(Pe),
                Ze = n(785528),
                Le = n.n(Ze);

            function De(e) {
                var t = e.handleHide;
                return (0, r.jsx)(p.Clickable, {
                    onClick: t,
                    className: Ne().closeButton,
                    "aria-label": _e.Z.Messages.DISMISS,
                    children: (0, r.jsx)(ve.Z, {
                        className: Ne().closeIcon
                    })
                })
            }

            function ke(e) {
                var t = e.username,
                    n = e.title,
                    i = e.videoSrc,
                    a = e.messageCount,
                    s = e.reaction,
                    l = e.reactionCount,
                    c = e.classname;
                return (0, r.jsxs)("div", {
                    className: o()(Ne().videoPreview, c),
                    children: [(0, r.jsx)("div", {
                        className: Ne().authorRow,
                        children: (0, r.jsxs)("div", {
                            className: Ne().rowGroup,
                            children: [(0,
                                r.jsx)(p.Text, {
                                tag: "span",
                                className: Ne().author,
                                variant: "text-sm/semibold",
                                children: t
                            }), (0, r.jsx)(p.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: Ne().postCreationTimestamp,
                                children: _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TIMESTAMP
                            })]
                        })
                    }), (0, r.jsx)(p.Heading, {
                        variant: "heading-md/extrabold",
                        className: Ne().title,
                        color: "header-primary",
                        "aria-hidden": !0,
                        children: n
                    }), (0, r.jsx)(ge.Z, {
                        size: 10
                    }), (0, r.jsx)(Oe.Z, {
                        className: Ne().video,
                        src: i,
                        autoPlay: !0,
                        loop: !0,
                        muted: !0
                    }), (0, r.jsx)(ge.Z, {
                        size: 10
                    }), (0, r.jsx)("div", {
                        className: Ne().footer,
                        children: (0, r.jsxs)("div", {
                            className: Ne().forumPostControls,
                            children: [(0, r.jsxs)("div", {
                                className: Ne().messageCountBox,
                                children: [(0, r.jsx)("span", {
                                    className: Ne().messageCountIcon,
                                    children: (0, r.jsx)(pe.Z, {
                                        width: 16,
                                        height: 16
                                    })
                                }), (0, r.jsx)(p.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-normal",
                                    children: a
                                })]
                            }), (0, r.jsxs)("div", {
                                className: Ne().reactionBox,
                                children: [(0, r.jsx)("span", {
                                    role: "img",
                                    "aria-label": "",
                                    children: s
                                }), (0,
                                    r.jsx)(p.Text, {
                                    variant: "text-xs/normal",
                                    color: "interactive-normal",
                                    children: l
                                })]
                            })]
                        })
                    })]
                })
            }
            const He = function(e) {
                var t = e.channel,
                    n = (0, ce.ZP)(),
                    a = (0, le.wj)(n),
                    s = (0, m.e7)([he.Z], (function() {
                        return he.Z.getGuild(t.guild_id)
                    })),
                    l = (0, m.e7)([y.Z], (function() {
                        return y.Z.useReducedMotion
                    })),
                    c = (0, m.e7)([B.Z], (function() {
                        return B.Z.hasHidden(t.id)
                    })),
                    u = (0, de.C)({
                        guildId: t.guild_id,
                        channelId: t.id
                    }),
                    d = function(e) {
                        var t = Se(i.useState(!0), 2),
                            n = t[0],
                            r = t[1],
                            a = (0, ee.useTransition)(n, {
                                keys: function(e) {
                                    return e ? "shown" : "hidden"
                                },
                                config: Ce,
                                from: {
                                    opacity: 0
                                },
                                enter: {
                                    opacity: 1
                                },
                                leave: {
                                    opacity: 0
                                },
                                unique: !0,
                                immediate: e
                            });
                        return {
                            transitions: a,
                            setVisible: r
                        }
                    }(l),
                    f = d.transitions,
                    h = d.setVisible,
                    g = i.useCallback((function() {
                        h(!1);
                        G.Z.hideAdminOnboarding(t.id, !0)
                    }), [t, h]);
                i.useEffect((function() {
                    (0, ue.c)(t.id) || h(!c)
                }), [t, h, c]);
                var v, b, O = i.useMemo((function() {
                        return [_e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG, _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG, _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG, _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG]
                    }), []),
                    x = i.useMemo((function() {
                        return [_e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG, _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG, _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG, _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG]
                    }), []),
                    j = function() {
                        fe.Z.open(t.guild_id, Ee.pNK.ROLE_SUBSCRIPTIONS)
                    },
                    S = null !== (v = null == s ? void 0 : s.hasFeature(Ee.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== v && v ? _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA : _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
                    C = null !== (b = (null == s ? void 0 : s.hasFeature(Ee.oNc.CREATOR_MONETIZABLE)) || (null == s ? void 0 : s.hasFeature(Ee.oNc.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== b && b,
                    E = C ? _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE : _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
                    _ = C ? _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE : _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
                return (0, r.jsx)(r.Fragment, {
                    children: f((function(e, t) {
                        return t ? (0, r.jsxs)(ee.animated.div, {
                            style: e,
                            className: Ne().container,
                            children: [(0, r.jsxs)("div", {
                                className: o()(Ne().wrapper, Ne().headerRow),
                                children: [(0, r.jsxs)(p.Text, {
                                    variant: "text-xs/normal",
                                    className: Ne().visibilityInfo,
                                    children: [(0, r.jsx)(be.Z, {
                                        width: 12,
                                        height: 12,
                                        className: Ne().icon
                                    }), _e.Z.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
                                }), (0, r.jsx)(De, {
                                    handleHide: g
                                })]
                            }), (0, r.jsxs)("div", {
                                className: Ne().contentContainer,
                                children: [(0, r.jsxs)("div", {
                                    className: o()(Ne().contentRow, C && Ne().contentRowOne),
                                    children: [(0, r.jsx)("div", {
                                        className: o()(Ne().contentMediaContainer),
                                        children: (0, r.jsxs)("div", {
                                            className: Ne().contentVideoContainer,
                                            children: [(0, r.jsx)(ke, {
                                                username: _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_ONE,
                                                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                                                title: _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_ONE,
                                                messageCount: "34",
                                                reaction: "⚡️",
                                                reactionCount: "724",
                                                classname: Ne().backgroundVideo
                                            }), (0, r.jsx)(ke, {
                                                username: _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_TWO,
                                                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                                                title: _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_TWO,
                                                messageCount: "34",
                                                reactionCount: "84",
                                                reaction: "💞",
                                                classname: o()(Ne().backgroundVideo, Ne().secondaryVideo)
                                            }), (0, r.jsx)(ke, {
                                                username: _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_USERNAME_THREE,
                                                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                                                title: _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_PREVIEW_TITLE_THREE,
                                                messageCount: "7,103",
                                                reaction: "⚡️",
                                                reactionCount: "724",
                                                classname: Ne().highlightVideo
                                            })]
                                        })
                                    }), (0, r.jsxs)("article", {
                                        className: Ne().contentTextContainer,
                                        children: [(0, r.jsx)(p.Heading, {
                                            variant: "heading-lg/semibold",
                                            color: "header-primary",
                                            children: E
                                        }), (0, r.jsx)(ge.Z, {
                                            size: 8
                                        }), (0, r.jsx)(p.Text, {
                                            variant: "text-md/normal",
                                            color: "text-muted",
                                            children: _
                                        }), (0, r.jsx)(ge.Z, {
                                            size: 16
                                        }), (0, r.jsxs)(p.Clickable, {
                                            onClick: function() {
                                                return open(xe.Z.getCreatorSupportArticleURL(Ee.BhN.MEDIA_CHANNEL))
                                            },
                                            className: Ne().helpCenterLink,
                                            children: [(0, r.jsx)(p.Text, {
                                                variant: "text-sm/medium",
                                                color: "text-link",
                                                className: Ne().helpCenterLinkText,
                                                children: _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_HELP_CENTER
                                            }), (0,
                                                r.jsx)(ye.Z, {
                                                width: 16,
                                                height: 16,
                                                className: Ne().helpCenterLinkIcon
                                            })]
                                        }), (0, r.jsx)(ge.Z, {
                                            size: 16
                                        }), (0, r.jsx)("div", {
                                            className: Ne().mediaChannelTagsContainer,
                                            children: O.map((function(e) {
                                                return (0, r.jsx)(p.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-normal",
                                                    className: Ne().mediaChannelTag,
                                                    children: e
                                                }, e)
                                            }))
                                        })]
                                    })]
                                }), C && (0, r.jsxs)("div", {
                                    className: o()(Ne().contentRow, Ne().contentRowTwo),
                                    children: [(0, r.jsx)("div", {
                                        className: o()(Ne().contentMediaContainer),
                                        children: (0, r.jsxs)("div", {
                                            className: Ne().contentImageContainer,
                                            children: [(0, r.jsx)("img", {
                                                src: a ? Re() : Le(),
                                                alt: "",
                                                className: o()(Ne().previewEmbedImage, Ne().secondaryImage)
                                            }), (0, r.jsx)("img", {
                                                src: a ? we() : Me(),
                                                alt: "",
                                                className: Ne().previewEmbedImage
                                            })]
                                        })
                                    }), (0, r.jsxs)("article", {
                                        className: Ne().contentTextContainer,
                                        children: [(0, r.jsxs)(p.Text, {
                                            variant: "text-xxs/bold",
                                            className: Ne().serverSubPill,
                                            children: [_e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_SERVER_SUB_PILL, " ", (0, r.jsx)("span", {
                                                role: "img",
                                                "aria-label": "",
                                                children: "🔥"
                                            })]
                                        }), (0, r.jsx)(ge.Z, {
                                            size: 10
                                        }), (0, r.jsx)(p.Heading, {
                                            variant: "heading-lg/semibold",
                                            color: "header-primary",
                                            children: _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE
                                        }), (0, r.jsx)(ge.Z, {
                                            size: 8
                                        }), (0, r.jsx)(p.Text, {
                                            variant: "text-md/normal",
                                            color: "text-muted",
                                            children: _e.Z.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE
                                        }), (0, r.jsx)(ge.Z, {
                                            size: 16
                                        }), (0, r.jsx)("div", {
                                            className: Ne().mediaChannelTagsContainer,
                                            children: x.map((function(e) {
                                                return (0, r.jsx)(p.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-normal",
                                                    className: Ne().mediaChannelTag,
                                                    children: e
                                                }, e)
                                            }))
                                        }), (0, r.jsx)(ge.Z, {
                                            size: 16
                                        }), 0 === u.length && (0, r.jsx)(me.C, {
                                            size: p.Button.Sizes.MEDIUM,
                                            pauseAnimation: l,
                                            onClick: j,
                                            className: Ne().addChannelButton,
                                            color: p.Button.Colors.CUSTOM,
                                            children: S
                                        })]
                                    })]
                                })]
                            })]
                        }) : null
                    }))
                })
            };
            var Fe = n(621329),
                Ue = n(450520),
                Be = n(795308),
                Ge = n(633878);

            function Ve(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ze(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function We(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function Ke(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function qe(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Ye(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            const Xe = (0, Ue.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    i = e.height,
                    a = void 0 === i ? 16 : i,
                    o = e.color,
                    s = void 0 === o ? "currentColor" : o,
                    l = e.foreground,
                    c = Ye(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", qe(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Ke(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, Ge.Z)(c)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 16 16",
                    children: [(0, r.jsx)("path", {
                        className: l,
                        fill: s,
                        d: "M6.78802 8.60547H2.54555C2.211 8.60547 1.93949 8.87699 1.93949 9.21154C1.93949 9.54608 2.211 9.8176 2.54555 9.8176H5.32498L1.511 13.6316C1.27433 13.8682 1.27433 14.2519 1.511 14.4886C1.62918 14.607 1.78433 14.6661 1.93949 14.6661C2.09464 14.6661 2.24979 14.607 2.36798 14.4886L6.18195 10.6746V13.454C6.18195 13.7886 6.45347 14.0601 6.78802 14.0601C7.12257 14.0601 7.39409 13.7886 7.39409 13.454V9.21154C7.39409 8.87699 7.12257 8.60547 6.78802 8.60547Z"
                    }), (0, r.jsx)("path", {
                        className: l,
                        fill: s,
                        d: "M14.4891 1.50953C14.2524 1.27286 13.8687 1.27286 13.6321 1.50953L9.81809 5.32351V2.54409C9.81809 2.20954 9.54657 1.93802 9.21202 1.93802C8.87748 1.93802 8.60596 2.20954 8.60596 2.54409V6.78655C8.60596 7.1211 8.87748 7.39262 9.21202 7.39262H13.4545C13.789 7.39262 14.0606 7.1211 14.0606 6.78655C14.0606 6.45201 13.789 6.18049 13.4545 6.18049H10.6751L14.4891 2.36651C14.7257 2.12984 14.7257 1.7462 14.4891 1.50953Z"
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    a = void 0 === i ? 24 : i,
                    o = e.color,
                    s = void 0 === o ? Be.Z.colors.INTERACTIVE_NORMAL : o,
                    l = e.colorClass,
                    c = void 0 === l ? "" : l,
                    u = We(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", ze(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Ve(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0,
                    Ge.Z)(u)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M15 4v3.586l5.293-5.293a1 1 0 1 1 1.414 1.414L16.414 9H20a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0ZM9 16.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L7.586 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586Z",
                        clipRule: "evenodd",
                        className: c
                    })
                }))
            }));
            var $e = n(245947);

            function Qe(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Je(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function et(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            const tt = (0, Ue.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    i = e.height,
                    a = void 0 === i ? 16 : i,
                    o = e.color,
                    s = void 0 === o ? "currentColor" : o,
                    l = e.foreground,
                    c = et(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", Je(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            Qe(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, Ge.Z)(c)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 16 16",
                    children: [(0, r.jsx)("path", {
                        className: l,
                        fill: s,
                        d: "M1.93944 14.6655H6.18191C6.51646 14.6655 6.78797 14.394 6.78797 14.0594C6.78797 13.7249 6.51646 13.4534 6.18191 13.4534H3.40249L7.21646 9.63937C7.45313 9.40271 7.45313 9.01906 7.21646 8.7824C7.09828 8.66391 6.94313 8.60482 6.78797 8.60482C6.63282 8.60482 6.47767 8.66391 6.35948 8.7824L2.54551 12.5964V9.81695C2.54551 9.4824 2.27399 9.21089 1.93944 9.21089C1.60489 9.21089 1.33337 9.4824 1.33337 9.81695V14.0594C1.33337 14.394 1.60489 14.6655 1.93944 14.6655Z"
                    }), (0, r.jsx)("path", {
                        className: l,
                        fill: s,
                        d: "M8.78362 7.21512C9.02029 7.45179 9.40393 7.45179 9.6406 7.21512L13.4546 3.40114V6.18056C13.4546 6.51511 13.7261 6.78663 14.0606 6.78663C14.3952 6.78663 14.6667 6.51511 14.6667 6.18056V1.9381C14.6667 1.60355 14.3952 1.33203 14.0606 1.33203L9.81818 1.33203C9.48363 1.33203 9.21211 1.60355 9.21211 1.9381C9.21211 2.27265 9.48363 2.54416 9.81818 2.54416H12.5976L8.78362 6.35814C8.54695 6.59481 8.54695 6.97845 8.78362 7.21512Z"
                    })]
                }))
            }), $e.b);
            var nt = n(748322),
                rt = n(136317),
                it = n(531441),
                at = n(930948),
                ot = n(757920),
                st = n(143901),
                lt = n(465637),
                ct = n(620771),
                ut = n.n(ct);

            function dt(e, t, n, r, i, a, o) {
                try {
                    var s = e[a](o),
                        l = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function ft(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function o(e) {
                            dt(a, r, i, o, s, "next", e)
                        }

                        function s(e) {
                            dt(a, r, i, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function ht(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function mt(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var gt = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            };

            function pt(e) {
                var t = e.channelName,
                    a = e.guildId,
                    o = e.tagFilter,
                    s = e.channel,
                    l = (0, W.r_)(s),
                    c = (0, A.cD)(s),
                    u = s.isMediaChannel(),
                    d = i.useCallback((function() {
                        (0, X.qz)();
                        (0, p.openModalLazy)(ft((function() {
                            var e, t;
                            return gt(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Promise.all([n.e(40532), n.e(74562)]).then(n.bind(n, 274562))];
                                    case 1:
                                        e = i.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, r.jsx)(t, mt(function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))));
                                                    r.forEach((function(t) {
                                                        ht(e, t, n[t])
                                                    }))
                                                }
                                                return e
                                            }({}, e), {
                                                guildId: a
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }), [a]),
                    f = o.size > 0,
                    h = c || l,
                    m = !f && l && !u,
                    g = i.useCallback((function() {
                        return m ? d() : c ? void at.S.dispatch(Ee.CkL.FOCUS_COMPOSER_TITLE) : (0, Ee.VqG)()
                    }), [d, m, c]);
                return (0, r.jsxs)("div", {
                    className: ut().container,
                    children: [(0, r.jsxs)("div", {
                        className: ut().iconContainer,
                        children: [(0, r.jsx)("div", {
                            className: ut().icon,
                            children: (0, r.jsx)(st.Z, {
                                width: 30,
                                height: 30
                            })
                        }), (0, r.jsx)(lt.Z, {
                            className: ut().stars
                        })]
                    }), (0, r.jsx)(p.Heading, {
                        className: ut().header,
                        variant: "heading-md/semibold",
                        children: f ? _e.Z.Messages.FORUM_NO_POST_WITH_TAG_TITLE.format({
                            numTags: o.size
                        }) : _e.Z.Messages.FORUM_EMPTY_STATE_TITLE
                    }), (0, r.jsx)(p.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: f ? _e.Z.Messages.FORUM_NO_POST_WITH_TAG_DESCRIPTION.format({
                            numTags: o.size
                        }) : _e.Z.Messages.FORUM_EMPTY_STATE_DESCRIPTION.format({
                            channelName: t
                        })
                    }), h && (0, r.jsxs)(p.Button, {
                        look: p.Button.Looks.BLANK,
                        size: p.Button.Sizes.MIN,
                        color: p.Button.Colors.GREEN,
                        onClick: g,
                        className: ut().cta,
                        innerClassName: ut().button,
                        children: [m ? _e.Z.Messages.FORUM_EMPTY_STATE_CTA : _e.Z.Messages.FORUM_EMPTY_STATE_CREATE_POST_CTA, (0, r.jsx)(rt.Z, {
                            width: 12
                        })]
                    })]
                })
            }
            var vt = n(503871),
                bt = n(508778),
                yt = n(487171),
                Ot = n.n(yt);

            function xt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function jt(e, t, n, r, i, a, o) {
                try {
                    var s = e[a](o),
                        l = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function St(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function o(e) {
                            jt(a, r, i, o, s, "next", e)
                        }

                        function s(e) {
                            jt(a, r, i, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function Ct(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ct(e, t, n[t])
                    }))
                }
                return e
            }

            function _t(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Tt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return xt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Nt = function(e, t) {
                    var n, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    (r = 0, i) && (a = [2 & a[0], i.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                At = {
                    width: 28,
                    height: 28
                },
                wt = {
                    width: 20,
                    height: 20,
                    borderRadius: 10
                },
                It = function(e) {
                    (0, X.e5)({
                        onboardingCTA: e
                    })
                },
                Mt = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this.currentIndex = 0;
                        this.steps = [];
                        this.completedSteps = 0
                    }
                    var t = e.prototype;
                    t.addStep = function(e) {
                        ++this.currentIndex;
                        this.steps.push(Et({
                            index: this.currentIndex
                        }, e));
                        e.isDone && this.completedSteps++
                    };
                    t.getSteps = function() {
                        return this.steps
                    };
                    t.isAllDone = function() {
                        return this.steps.every((function(e) {
                            return e.isDone
                        }))
                    };
                    return e
                }(),
                Pt = function(e, t, a, o) {
                    return i.useMemo((function() {
                        var i = new Mt,
                            s = !0 === (null == t ? void 0 : t.isMediaChannel());
                        null == e || null == t || s || i.addStep(function(e, t, i) {
                            var a = (0, oe.Z)(t) ? ne.Z.combine(Ee.Plq.VIEW_CHANNEL, Ee.Plq.SEND_MESSAGES) : Ee.Plq.SEND_MESSAGES,
                                o = null != e ? (0, ot.E$)(e, t, a).filter((function(n) {
                                    return t.permissionOverwrites.hasOwnProperty(n.id) || (0, se.pM)(e.id, n.id)
                                })) : [],
                                s = o.length > 0,
                                l = o.some((function(t) {
                                    return (0, se.pM)(e.id, t.id)
                                }));
                            return {
                                name: _e.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
                                description: _e.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
                                isDone: s && l,
                                shouldWarn: s && !l,
                                children: s ? (0, r.jsx)(Rt, {
                                    guild: e,
                                    roles: o
                                }) : null,
                                clickHandler: function() {
                                    It(bt.ZI.PERMISSIONS);
                                    (0, p.openModalLazy)(St((function() {
                                        var s, l;
                                        return Nt(this, (function(c) {
                                            switch (c.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e(40532), n.e(43470)]).then(n.bind(n, 843470))];
                                                case 1:
                                                    s = c.sent(), l = s.default;
                                                    i(!0);
                                                    return [2, function(n) {
                                                        return (0, r.jsx)(l, _t(Et({}, n), {
                                                            channel: t,
                                                            guild: e,
                                                            permission: a,
                                                            currentSelectedRoles: o
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })), {
                                        modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                                        onCloseRequest: Ee.VqG,
                                        onCloseCallback: function() {
                                            return i(!1)
                                        }
                                    })
                                }
                            }
                        }(e, t, o));
                        s || i.addStep(function(e) {
                            var t = null != e.topic && e.topic.length > 0;
                            return {
                                name: _e.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
                                description: _e.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
                                clickHandler: function() {
                                    It(bt.ZI.GUIDELINES);
                                    ie.ZP.open(e.id, void 0, Ee.ZfP.TOPIC)
                                },
                                isDone: t
                            }
                        }(t));
                        i.addStep(function(e) {
                            var t = null != e.availableTags && e.availableTags.length > 0;
                            return {
                                name: _e.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
                                description: _e.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
                                clickHandler: function() {
                                    It(bt.ZI.TAGS);
                                    ie.ZP.open(e.id);
                                    (0, p.openModalLazy)(St((function() {
                                        var t, i;
                                        return Nt(this, (function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e(40532), n.e(62389)]).then(n.bind(n, 762389))];
                                                case 1:
                                                    t = a.sent(), i = t.default;
                                                    return [2, function(t) {
                                                        return (0, r.jsx)(i, _t(Et({}, t), {
                                                            channelId: e.id,
                                                            guildId: e.guild_id
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })))
                                },
                                isDone: t
                            }
                        }(t));
                        i.addStep(function(e) {
                            var t = null != e.defaultReactionEmoji;
                            return {
                                name: _e.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
                                description: _e.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
                                clickHandler: function() {
                                    It(bt.ZI.DEFAULT_REACTION);
                                    (0, p.openModalLazy)(St((function() {
                                        var t, i;
                                        return Nt(this, (function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    return [4, Promise.all([n.e(40532), n.e(19595)]).then(n.bind(n, 119595))];
                                                case 1:
                                                    t = a.sent(), i = t.default;
                                                    return [2, function(t) {
                                                        return (0, r.jsx)(i, _t(Et({}, t), {
                                                            channel: e
                                                        }))
                                                    }]
                                            }
                                        }))
                                    })))
                                },
                                isDone: t
                            }
                        }(t));
                        i.addStep(function(e, t, i) {
                            return {
                                name: _e.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
                                description: t ? _e.Z.Messages.MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION : _e.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format({
                                    onClick: function(e) {
                                        if (null != i) {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            (0, X.qz)();
                                            (0, p.openModalLazy)(St((function() {
                                                var e, t;
                                                return Nt(this, (function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return [4, Promise.all([n.e(40532), n.e(74562)]).then(n.bind(n, 274562))];
                                                        case 1:
                                                            e = a.sent(), t = e.default;
                                                            return [2, function(e) {
                                                                return (0, r.jsx)(t, _t(Et({}, e), {
                                                                    guildId: i
                                                                }))
                                                            }]
                                                    }
                                                }))
                                            })))
                                        }
                                    }
                                }),
                                clickHandler: function() {
                                    It(bt.ZI.CREATE_POST);
                                    at.S.dispatch(Ee.CkL.FOCUS_COMPOSER_TITLE)
                                },
                                isDone: e
                            }
                        }(a, s, null == e ? void 0 : e.id));
                        return i
                    }), [t, e, a, o])
                },
                Rt = function(e) {
                    var t = e.guild,
                        n = e.roles;
                    return (0, r.jsx)("div", {
                        className: Ot().rolesList,
                        "aria-label": _e.Z.Messages.ROLES_LIST.format({
                            numRoles: n.length
                        }),
                        children: n.map((function(e) {
                            return (0, r.jsx)(ae.U, {
                                role: e,
                                canRemove: !1,
                                onRemove: Ee.VqG,
                                guildId: t.id,
                                className: Ot().rolePill
                            }, e.id)
                        }))
                    })
                },
                Zt = {
                    mass: 1,
                    tension: 250,
                    friction: 18,
                    clamp: !0
                },
                Lt = function(e) {
                    var t, n, r = e.guild,
                        a = e.channel,
                        o = e.hasAnyThread,
                        s = e.handleHide,
                        l = Tt(i.useState(!1), 2),
                        c = l[0],
                        u = l[1],
                        d = (0, ue.c)(a.id),
                        f = (0, m.e7)([B.Z], (function() {
                            return B.Z.hasHidden(a.id)
                        })),
                        h = Pt(r, a, o, u),
                        g = h.isAllDone();
                    ! function(e, t, n, r) {
                        var a = i.useRef(0);
                        i.useEffect((function() {
                            n || !e || t ? clearTimeout(a.current) : a.current = setTimeout((function() {
                                r()
                            }), 6e4);
                            return function() {
                                return clearTimeout(a.current)
                            }
                        }), [e, t, r, n])
                    }(g, d || f || !(t = a.id, n = re.default.extractTimestamp(t), J()().isBefore(J()(n).add(J().duration(15, "days")))), c, s);
                    return {
                        onboardingSteps: h,
                        isHidden: f,
                        isDismissed: d,
                        isAllDone: g
                    }
                },
                Dt = function(e) {
                    var t = e.handleHide;
                    return (0, r.jsx)(p.Clickable, {
                        onClick: t,
                        className: Ot().closeButton,
                        "aria-label": _e.Z.Messages.DISMISS,
                        children: (0, r.jsx)(ve.Z, {
                            className: Ot().closeIcon
                        })
                    })
                },
                kt = function(e) {
                    var t = e.expanded,
                        n = e.onClick;
                    return (0, r.jsx)(p.Clickable, {
                        onClick: n,
                        className: Ot().closeButton,
                        "aria-label": t ? _e.Z.Messages.COLLAPSE : _e.Z.Messages.EXPAND,
                        children: t ? (0, r.jsx)(Xe, {
                            className: Ot().closeIcon
                        }) : (0, r.jsx)(tt, {
                            className: Ot().closeIcon
                        })
                    })
                };
            const Ht = function(e) {
                var t = e.hasAnyThread,
                    n = e.channel,
                    a = (0, vt.xH)((function(e) {
                        return {
                            onboardingExpanded: e.onboardingExpanded
                        }
                    })),
                    s = a.onboardingExpanded,
                    l = (0, z.H)(n.id).tagFilter,
                    c = (0, m.e7)([he.Z], (function() {
                        return he.Z.getGuild(n.getGuildId())
                    })),
                    u = (0, W.r_)(n),
                    d = function() {
                        var e = Tt(i.useState(!0), 2),
                            t = e[0],
                            n = e[1],
                            r = (0, m.e7)([y.Z], (function() {
                                return y.Z.useReducedMotion
                            })),
                            a = (0, ee.useTransition)(t, {
                                keys: function(e) {
                                    return e ? "shown" : "hidden"
                                },
                                config: Zt,
                                from: {
                                    opacity: 0
                                },
                                enter: {
                                    opacity: 1
                                },
                                leave: {
                                    opacity: 0
                                },
                                unique: !0,
                                immediate: r
                            });
                        return {
                            transitions: a,
                            setVisible: n
                        }
                    }(),
                    f = d.transitions,
                    h = d.setVisible,
                    g = function(e) {
                        var t = (0, m.e7)([y.Z], (function() {
                            return y.Z.useReducedMotion
                        }));
                        return (0, ee.useTransition)(e, {
                            from: {
                                maxHeight: 0
                            },
                            enter: {
                                maxHeight: 500
                            },
                            leave: {
                                maxHeight: 0
                            },
                            config: {
                                duration: 200
                            },
                            immediate: t
                        })
                    }(s),
                    v = i.useCallback((function(e) {
                        var t;
                        null === (t = e.clickHandler) || void 0 === t || t.call(e)
                    }), []),
                    b = function(e, t) {
                        return i.useCallback((function() {
                            t(!1);
                            return G.Z.hideAdminOnboarding(e, !0)
                        }), [e, t])
                    }(n.id, h),
                    O = Lt({
                        guild: c,
                        channel: n,
                        hasAnyThread: t,
                        handleHide: b
                    }),
                    x = O.onboardingSteps,
                    j = O.isDismissed,
                    S = O.isHidden,
                    C = O.isAllDone,
                    E = !S && !j,
                    _ = (0, vt.AF)(),
                    T = n.isMediaChannel(),
                    N = function(e) {
                        return _.getState().setOnboardingExpanded(e)
                    };
                ! function(e, t, n) {
                    i.useEffect((function() {
                        e && t && n()
                    }), [])
                }(C, E, b);
                ! function(e) {
                    var t = e.isAllDone,
                        n = e.isVisible,
                        r = e.canManageChannel,
                        a = e.guild,
                        o = e.channel,
                        s = i.useCallback((function() {
                            at.S.dispatch(Ee.CkL.REMEASURE_TARGET)
                        }), []);
                    i.useEffect((function() {
                        s()
                    }), [s, t, n, r, null == a ? void 0 : a.roles, o.id, o.permissionOverwrites])
                }({
                    isAllDone: C,
                    isVisible: E,
                    canManageChannel: u,
                    guild: c,
                    channel: n
                });
                ! function(e, t, n) {
                    i.useEffect((function() {
                        e || n(!t)
                    }), [e, n, t])
                }(j, S, h);
                i.useEffect((function() {
                    t && E || N(!0)
                }), []);
                return null == c ? null : E && u ? T ? t ? null : (0, r.jsx)(He, {
                    channel: n
                }) : (0, r.jsx)(r.Fragment, {
                    children: f((function(e, t) {
                        return t ? (0, r.jsx)(ee.animated.div, {
                            style: e,
                            className: Ot().container,
                            children: (0, r.jsxs)("div", {
                                className: Ot().wrapper,
                                children: [(0, r.jsx)("div", {
                                    className: Ot().headerRow,
                                    children: (0, r.jsxs)(p.HeadingLevel, {
                                        component: (0, r.jsx)(p.Heading, {
                                            variant: "heading-md/semibold",
                                            children: _e.Z.Messages.GET_STARTED
                                        }),
                                        children: [(0, r.jsx)(p.Heading, {
                                            variant: "heading-md/medium",
                                            className: Ot().header,
                                            children: _e.Z.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                                                numCompleted: x.completedSteps.toString(),
                                                numSteps: x.steps.length.toString()
                                            })
                                        }), (0, r.jsxs)(p.Text, {
                                            variant: "text-xs/normal",
                                            className: Ot().visibilityInfo,
                                            children: [(0, r.jsx)(be.Z, {
                                                width: 12,
                                                height: 12,
                                                className: Ot().icon
                                            }), _e.Z.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
                                        }), (0, r.jsx)(kt, {
                                            expanded: s,
                                            onClick: function() {
                                                return N(!s)
                                            }
                                        }), (0, r.jsx)(Dt, {
                                            handleHide: b
                                        })]
                                    })
                                }), g((function(e, t) {
                                    return t ? (0, r.jsx)(ee.animated.div, {
                                        style: e,
                                        className: Ot().listContainer,
                                        children: (0, r.jsx)("ol", {
                                            className: Ot().checklist,
                                            children: x.getSteps().map((function(e) {
                                                return (0, r.jsxs)(p.Clickable, {
                                                    tag: "li",
                                                    "aria-label": e.name,
                                                    onClick: function() {
                                                        return v(e)
                                                    },
                                                    className: o()(Ot().stepContainer, Ct({}, Ot().completed, e.isDone)),
                                                    children: [e.shouldWarn ? (0, r.jsx)(F.Z, {
                                                        color: te.Z.STATUS_DANGER,
                                                        className: Ot().stepStatus
                                                    }) : e.isDone ? (0, r.jsx)(it.G2, {
                                                        color: te.Z.STATUS_POSITIVE_BACKGROUND,
                                                        icon: Fe.Z,
                                                        style: wt,
                                                        className: Ot().stepStatus
                                                    }) : (0, r.jsx)(it.G2, {
                                                        disableColor: !0,
                                                        icon: nt.Z,
                                                        style: At,
                                                        className: o()(Ot().stepStatus, Ot().completed)
                                                    }), (0, r.jsxs)("div", {
                                                        className: Ot().step,
                                                        children: [(0, r.jsx)(p.Text, {
                                                            variant: "text-md/medium",
                                                            color: e.isDone ? "header-secondary" : "header-primary",
                                                            className: Ot().stepName,
                                                            children: e.name
                                                        }), (0, r.jsx)(p.Text, {
                                                            variant: "text-sm/normal",
                                                            color: "header-secondary",
                                                            className: Ot().stepDescription,
                                                            children: e.description
                                                        }), e.children]
                                                    }), (0, r.jsx)(rt.Z, {
                                                        width: 12,
                                                        className: Ot().stepStatus
                                                    })]
                                                }, "onboard-step-".concat(e.index))
                                            }))
                                        })
                                    }) : null
                                }))]
                            })
                        }) : null
                    }))
                }) : t ? null : (0, r.jsx)(pt, {
                    channelName: n.name,
                    guildId: n.guild_id,
                    tagFilter: l,
                    channel: n
                })
            };
            var Ft = n(883064),
                Ut = n(120491),
                Bt = n(472034),
                Gt = n(939616),
                Vt = n.n(Gt),
                zt = n(169595),
                Wt = n.n(zt);

            function Kt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function qt(e, t, n, r, i, a, o) {
                try {
                    var s = e[a](o),
                        l = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function Yt(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function o(e) {
                            qt(a, r, i, o, s, "next", e)
                        }

                        function s(e) {
                            qt(a, r, i, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function Xt(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function $t(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Qt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Kt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Kt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Jt = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            };
            const en = i.memo((function(e) {
                var t = e.channel,
                    a = e.onChange,
                    s = (0, vt.AF)(),
                    l = (0, vt.xH)((function(e) {
                        return {
                            guidelinesOpen: e.guidelinesOpen
                        }
                    })).guidelinesOpen,
                    c = (0, W.r_)(t),
                    u = Qt(i.useState(!1), 2),
                    d = u[0],
                    f = u[1],
                    h = i.useCallback((function(e) {
                        if (null != e) {
                            var t = e.clientHeight >= 220;
                            t !== d && f(t)
                        }
                    }), [d]);
                i.useLayoutEffect((function() {
                    setTimeout(a, 350)
                }), [l, a]);
                var g = (0, m.e7)([y.Z], (function() {
                        return y.Z.useReducedMotion
                    })),
                    v = Qt(i.useState(!l), 2),
                    b = v[0],
                    O = v[1],
                    x = (0, ee.useSpring)({
                        opacity: l ? 1 : 0,
                        maxHeight: l ? 500 : 0,
                        config: {
                            duration: 300
                        },
                        immediate: g,
                        onRest: function() {
                            return O(!l)
                        }
                    });
                return null != t.topic && t.topic.length > 0 ? (0, r.jsx)(ee.animated.div, {
                    style: x,
                    className: b ? Vt().hiddenVisually : void 0,
                    children: (0, r.jsxs)("div", {
                        className: Vt().container,
                        children: [(0, r.jsxs)("div", {
                            className: Vt().headerContainer,
                            children: [(0, r.jsxs)(p.Heading, {
                                variant: "heading-lg/semibold",
                                className: Vt().guidelinesHeader,
                                children: [(0, r.jsx)(Ut.Z, {
                                    width: 20,
                                    height: 20
                                }), _e.Z.Messages.FORUM_POST_GUIDELINES_TITLE, c && (0, r.jsx)(p.Clickable, {
                                    onClick: function() {
                                        ie.ZP.open(t.id, void 0, Ee.ZfP.TOPIC)
                                    },
                                    tag: "span",
                                    className: Vt().clickable,
                                    children: (0, r.jsx)(Bt.Z, {
                                        width: 16,
                                        height: 16
                                    })
                                })]
                            }), (0, r.jsx)(p.Clickable, {
                                "aria-label": _e.Z.Messages.CLOSE,
                                className: Vt().clickable,
                                onClick: function() {
                                    s.getState().setGuidelinesOpen(!1)
                                },
                                children: (0, r.jsx)(ve.Z, {
                                    width: 16,
                                    height: 16
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: Vt().descriptionContainer,
                            children: [(0, r.jsx)(p.Text, {
                                selectable: !0,
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                style: {
                                    maxHeight: 220
                                },
                                className: o()(Vt().guidelines, Wt().markup),
                                children: (0,
                                    r.jsx)("div", {
                                    ref: h,
                                    children: Ft.Z.parseForumPostGuidelines(t.topic, !0, {
                                        channelId: t.id,
                                        allowHeading: !0,
                                        allowList: !0
                                    })
                                })
                            }), d && (0, r.jsxs)("div", {
                                className: Vt().showMore,
                                children: [(0, r.jsx)("div", {
                                    className: Vt().gradient
                                }), (0, r.jsx)("div", {
                                    className: Vt().linkContainer,
                                    children: (0, r.jsx)(p.Clickable, {
                                        className: Vt().showMoreLink,
                                        onClick: function() {
                                            (0, p.openModalLazy)(Yt((function() {
                                                var e, i;
                                                return Jt(this, (function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return [4, Promise.all([n.e(40532), n.e(51691)]).then(n.bind(n, 551691))];
                                                        case 1:
                                                            e = a.sent(), i = e.default;
                                                            return [2, function(e) {
                                                                return (0, r.jsx)(i, $t(function(e) {
                                                                    for (var t = 1; t < arguments.length; t++) {
                                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                                            r = Object.keys(n);
                                                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                                        }))));
                                                                        r.forEach((function(t) {
                                                                            Xt(e, t, n[t])
                                                                        }))
                                                                    }
                                                                    return e
                                                                }({}, e), {
                                                                    channel: t
                                                                }))
                                                            }]
                                                    }
                                                }))
                                            })))
                                        },
                                        children: (0, r.jsxs)(p.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-brand",
                                            className: Vt().showMoreText,
                                            children: [_e.Z.Messages.FORUM_CHANNEL_TOPIC_VIEW_ALL, (0, r.jsx)(tt, {
                                                className: Vt().showMoreIcon
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                }) : null
            }));
            var tn = n(819162),
                nn = n(895724),
                rn = n(607544),
                an = n(458947),
                on = n(831013),
                sn = n.n(on),
                ln = n(640160),
                cn = n.n(ln),
                un = n(581145),
                dn = n.n(un),
                fn = n(17589),
                hn = n.n(fn);

            function mn(e) {
                var t = e.onDismiss;
                return (0, r.jsxs)(p.Clickable, {
                    onClick: function() {
                        open(bt.V8);
                        (0, X.GX)({
                            readGuideCta: !0
                        })
                    },
                    className: o()(dn().container, cn().container, sn().mainCard),
                    children: [(0, r.jsxs)("div", {
                        className: cn().inline,
                        children: [(0, r.jsxs)("div", {
                            className: cn().author,
                            children: [(0, r.jsx)(tn.Z, {
                                className: cn().discordIcon
                            }), (0, r.jsx)(p.Text, {
                                variant: "text-sm/semibold",
                                color: "header-primary",
                                children: _e.Z.Messages.DISCORD_NAME
                            }), (0, r.jsxs)("div", {
                                className: cn().notice,
                                children: [(0, r.jsx)(nn.Z, {
                                    className: cn().infoIcon
                                }), (0, r.jsx)(p.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: _e.Z.Messages.FORUM_HELPER_CARD_NOTICE
                                })]
                            })]
                        }), (0,
                            r.jsx)(p.Clickable, {
                            onClick: function(e) {
                                e.stopPropagation();
                                t(an.L.DISMISS);
                                (0, X.GX)({
                                    readGuideCta: !1
                                })
                            },
                            children: (0, r.jsx)(ve.Z, {
                                className: cn().closeIcon,
                                width: 16,
                                height: 16
                            })
                        })]
                    }), (0, r.jsx)("hr", {
                        className: cn().separator
                    }), (0, r.jsxs)("div", {
                        className: cn().inline,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(p.Heading, {
                                className: o()(dn().channelName, cn().title),
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                children: _e.Z.Messages.FORUM_HELPER_CARD_TITLE
                            }), (0, r.jsx)(p.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: _e.Z.Messages.FORUM_HELPER_CARD_BODY
                            })]
                        }), (0, r.jsx)("img", {
                            src: hn(),
                            alt: _e.Z.Messages.FORUM_HELPER_CARD_ALT_TEXT,
                            width: rn.TJ,
                            height: rn.TJ
                        })]
                    })]
                })
            }
            var gn = n(441143),
                pn = n.n(gn),
                vn = n(943469),
                bn = n(567867),
                yn = n(281808),
                On = n(58495),
                xn = n(756510),
                jn = n(510472),
                Sn = n(73948),
                Cn = n(318715),
                En = n(873506),
                _n = n(178230),
                Tn = n(557617),
                Nn = n(856358),
                An = n(15084),
                wn = n(472622),
                In = n.n(wn);

            function Mn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Pn(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Mn(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Mn(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Rn = {
                    scale: .95,
                    opacity: 0
                },
                Zn = {
                    scale: 1,
                    opacity: 1
                },
                Ln = {
                    scale: 1,
                    opacity: 1
                },
                Dn = {
                    tension: 2400,
                    friction: 52
                };

            function kn(e) {
                var t = e.channelId,
                    n = e.onClick,
                    a = e.onClose,
                    o = e.onMouseEnter,
                    s = i.useRef(null),
                    l = (0, m.e7)([M.Z], (function() {
                        return M.Z.getChannel(t)
                    }), [t]);
                pn()(null != l, "Forum Channel is null");
                return (0, r.jsxs)(p.Clickable, {
                    className: In().uploadInput,
                    onMouseEnter: o,
                    onClick: function() {
                        (0, X.N3)({
                            isMobile: !1
                        });
                        null == n || n()
                    },
                    onKeyPress: function(e) {
                        if ("Enter" === e.key) {
                            var t;
                            null === (t = s.current) || void 0 === t || t.activateUploadDialogue();
                            (0, X.N3)({
                                isMobile: !1
                            })
                        }
                    },
                    children: [(0, r.jsx)(Tn.Z, {
                        className: In().fileInput,
                        ref: s,
                        onChange: function(e) {
                            null == a || a();
                            (0, An.d)(e.currentTarget.files, l, P.d.FirstThreadMessage, {
                                requireConfirm: !0
                            });
                            at.S.dispatch(Ee.CkL.TEXTAREA_FOCUS);
                            e.currentTarget.value = null
                        },
                        multiple: l.rateLimitPerUser <= 0,
                        tabIndex: -1,
                        "aria-hidden": !0
                    }), (0, r.jsx)(Nn.Z, {
                        width: 28,
                        height: 28,
                        className: In().uploadIcon
                    })]
                })
            }

            function Hn(e) {
                var t = e.channelId,
                    n = e.closePopout,
                    a = Pn(i.useState(!1), 2),
                    o = a[0],
                    s = a[1],
                    l = i.useContext(p.AccessibilityPreferencesContext).reducedMotion,
                    c = (0, ee.useSpring)({
                        from: l.enabled ? Zn : Rn,
                        to: Ln,
                        config: Dn
                    }),
                    u = (0, m.e7)([y.Z], (function() {
                        return y.Z.keyboardModeEnabled
                    })),
                    d = (0, m.e7)([Z.Z], (function() {
                        return Z.Z.getUploads(t, yn.I.CREATE_FORUM_POST.drafts.type)
                    }));
                return (0, r.jsx)(ee.animated.div, {
                    className: In().popoutContainer,
                    onMouseLeave: function() {
                        o || n()
                    },
                    style: c,
                    children: (0, r.jsxs)(p.ScrollerThin, {
                        orientation: "horizontal",
                        className: In().popout,
                        paddingFix: !1,
                        fade: !0,
                        children: [(0, r.jsx)(kn, {
                            channelId: t,
                            onClick: function() {
                                s(!0)
                            },
                            onClose: function() {
                                s(!1);
                                n()
                            }
                        }), (0, r.jsx)("div", {
                            className: In().uploads,
                            children: d.map((function(e) {
                                return (0, r.jsx)(_n.Z, {
                                    channelId: t,
                                    draftType: yn.I.CREATE_FORUM_POST.drafts.type,
                                    upload: e,
                                    keyboardModeEnabled: u,
                                    hideFileName: !0,
                                    size: En.q.SMALL
                                }, e.id)
                            }))
                        })]
                    })
                })
            }

            function Fn(e) {
                var t = e.channelId,
                    n = Pn(i.useState(!1), 2),
                    a = n[0],
                    o = n[1],
                    s = (0, m.e7)([Z.Z], (function() {
                        return Z.Z.getUploads(t, yn.I.CREATE_FORUM_POST.drafts.type)
                    })),
                    l = s.length,
                    c = l > 0;
                i.useEffect((function() {
                    a && !c && o(!1)
                }), [a, c]);
                var u = function() {
                    c && o(!0)
                };
                return (0, r.jsxs)("div", {
                    className: In().container,
                    children: [c ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(_n.r, {
                            upload: s[0],
                            size: En.q.SMALL,
                            onMouseEnter: u
                        }), !a && (0, r.jsx)("div", {
                            className: In().badge,
                            children: l
                        })]
                    }) : (0, r.jsx)(kn, {
                        onMouseEnter: u,
                        channelId: t
                    }), a && (0, r.jsx)(Hn, {
                        channelId: t,
                        closePopout: function() {
                            o(!1)
                        }
                    })]
                })
            }
            var Un = n(487674),
                Bn = n.n(Un);

            function Gn(e) {
                var t = e.parentChannel,
                    n = (0, Cn.Wu)([Z.Z], (function() {
                        var e = Z.Z.getUploads(t.id, yn.I.CREATE_FORUM_POST.drafts.type);
                        return null == e ? void 0 : e.filter((function(e) {
                            return !0 !== e.isThumbnail
                        }))
                    }));
                return (0, r.jsxs)("div", {
                    className: Bn().container,
                    children: [(0, r.jsx)(p.Text, {
                        variant: "text-md/semibold",
                        color: "text-muted",
                        children: _e.Z.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_TITLE
                    }), (0, r.jsx)(p.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: _e.Z.Messages.MEDIA_CHANNEL_ATTACHMENTS_SECTION_DESCRIPTION
                    }), (0, r.jsx)("div", {
                        children: (0, r.jsx)(p.ScrollerThin, {
                            className: Bn().uploadsContainer,
                            orientation: "horizontal",
                            paddingFix: !1,
                            fade: !0,
                            children: (0, r.jsxs)("div", {
                                className: Bn().uploads,
                                children: [n.map((function(e) {
                                    return (0, r.jsx)(_n.Z, {
                                        channelId: t.id,
                                        draftType: yn.I.CREATE_FORUM_POST.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: !0,
                                        hideFileName: !0,
                                        size: En.q.SMALL
                                    }, e.id)
                                })), (0, r.jsx)(kn, {
                                    channelId: t.id
                                })]
                            })
                        })
                    })]
                })
            }
            var Vn, zn = n(631183),
                Wn = n(5387),
                Kn = n.n(Wn),
                qn = "absolute";
            ! function(e) {
                e[e.COVER = 1] = "COVER";
                e[e.CONTAIN = 2] = "CONTAIN";
                e[e.CONTAIN_STRETCHED = 3] = "CONTAIN_STRETCHED"
            }(Vn || (Vn = {}));
            var Yn = function(e, t, n, r) {
                if (0 === n) return [];
                if (1 === n) return [{
                    width: e,
                    height: t,
                    top: 0,
                    left: 0,
                    position: qn
                }];
                if (2 === n) {
                    var i = Math.ceil((e - r) / 2);
                    return [{
                        top: 0,
                        left: 0,
                        position: qn,
                        width: i,
                        height: t
                    }, {
                        top: 0,
                        left: i + r,
                        position: qn,
                        width: i,
                        height: t
                    }]
                }
                if (3 === n) {
                    var a = Math.ceil((e - r) / 2),
                        o = Math.ceil((t - r) / 2);
                    return [{
                        top: 0,
                        left: 0,
                        position: qn,
                        width: a,
                        height: t
                    }, {
                        top: 0,
                        left: a + r,
                        position: qn,
                        width: a,
                        height: o
                    }, {
                        top: o + r,
                        left: a + r,
                        position: qn,
                        width: a,
                        height: o
                    }]
                }
                var s = Math.ceil((e - r) / 2),
                    l = Math.ceil((t - r) / 2);
                return [{
                    top: 0,
                    left: 0,
                    position: qn,
                    width: s,
                    height: l
                }, {
                    top: l + r,
                    left: 0,
                    position: qn,
                    width: s,
                    height: l
                }, {
                    top: 0,
                    left: s + r,
                    position: qn,
                    width: s,
                    height: l
                }, {
                    top: l + r,
                    left: s + r,
                    position: qn,
                    width: s,
                    height: l
                }]
            };
            var Xn = new(Kn())({
                max: 100
            });

            function $n(e) {
                var t = e.numAttachments,
                    n = e.containerWidth,
                    r = e.containerHeight;
                return i.useMemo((function() {
                    return function(e) {
                        var t = e.numAttachments,
                            n = e.containerWidth,
                            r = e.containerHeight,
                            i = function(e, t, n) {
                                return "".concat(e, "-").concat(t, "-").concat(n)
                            }(t, n, r),
                            a = Xn.get(i);
                        if (null != a) return a;
                        var o = Yn(n, r, t, 4);
                        Xn.set(i, o);
                        return o
                    }({
                        numAttachments: t,
                        containerWidth: n,
                        containerHeight: r
                    })
                }), [t, n, r])
            }

            function Qn(e) {
                return e.map((function(t, n) {
                    return {
                        minWidth: 2 * e[n].width,
                        minHeight: 2 * e[n].height,
                        maxWidth: 2 * e[n].width,
                        maxHeight: 2 * e[n].height
                    }
                }))
            }
            var Jn = n(443812),
                er = n(462553),
                tr = n(912250),
                nr = n(720502);

            function rr(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ir(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function ar(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            const or = (0, Ue.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 39 : t,
                    i = e.height,
                    a = void 0 === i ? 27 : i,
                    o = e.color,
                    s = void 0 === o ? "currentColor" : o,
                    l = e.foreground,
                    c = ar(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", ir(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            rr(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, Ge.Z)(c)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 39 27",
                    fill: s,
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: l,
                        d: "M26.4909 2.76514H5.78906C3.20886 2.76514 1.11719 4.79342 1.11719 7.29544V20.8863C1.11719 23.3884 3.20886 25.4167 5.78906 25.4167H31.9922C34.5724 25.4167 36.6641 23.3884 36.6641 20.8863V12.63C35.9239 12.8436 35.1398 12.9583 34.3281 12.9583C29.8128 12.9583 26.1523 9.40882 26.1523 5.03029C26.1523 4.24318 26.2706 3.48286 26.4909 2.76514ZM13 7.29544C14.2885 7.29544 15.3359 8.30932 15.3359 9.56059C15.3359 10.8128 14.2885 11.8257 13 11.8257C11.7087 11.8257 10.6641 10.8128 10.6641 9.56059C10.6641 8.30932 11.7087 7.29544 13 7.29544ZM10.6641 20.8863L14.168 16.356L16.5039 18.6212L21.1758 12.9583L24.6797 20.8863H17.6719H10.6641Z",
                        fill: s
                    }), (0, r.jsx)("path", {
                        d: "M35.4961 0.5V3.89773H39V6.16288H35.4961V9.56061H33.1602V6.16288H29.6562V3.89773H33.1602V0.5H35.4961Z",
                        fill: s
                    })]
                }))
            }), nr.F);
            var sr = n(994655),
                lr = n(594952),
                cr = n(496486),
                ur = n(585622),
                dr = n(449353);

            function fr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function hr(e, t, n, r, i, a, o) {
                try {
                    var s = e[a](o),
                        l = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function mr(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function o(e) {
                            hr(a, r, i, o, s, "next", e)
                        }

                        function s(e) {
                            hr(a, r, i, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function gr(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || vr(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function pr(e) {
                return function(e) {
                    if (Array.isArray(e)) return fr(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || vr(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function vr(e, t) {
                if (e) {
                    if ("string" == typeof e) return fr(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fr(e, t) : void 0
                }
            }
            var br = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r),
                                        0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            };

            function yr(e, t, n) {
                null == n || n.forEach((function(n) {
                    var r = function(e, t) {
                        return e.find((function(e) {
                            return null != (null == t ? void 0 : t.url) && e.startsWith(t.url)
                        }))
                    }(t, n);
                    if (null != r) {
                        var i = e.get(r);
                        null == i ? e.set(r, [n]) : i.push(n)
                    }
                }));
                return e
            }

            function Or(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function xr(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || Sr(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function jr(e) {
                return function(e) {
                    if (Array.isArray(e)) return Or(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Sr(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Sr(e, t) {
                if (e) {
                    if ("string" == typeof e) return Or(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Or(e, t) : void 0
                }
            }

            function Cr(e, t) {
                var n, r = function(e) {
                        var t = xr(i.useState(null), 2),
                            n = t[0],
                            r = t[1],
                            a = (0, Cn.Wu)([Z.Z], (function() {
                                var t = Z.Z.getUploads(e.id, yn.I.CREATE_FORUM_POST.drafts.type),
                                    n = t.find((function(e) {
                                        return e.isThumbnail
                                    }));
                                return null != n ? [n] : t.filter((function(e) {
                                    return e.isVideo || e.isImage
                                }))
                            })),
                            o = i.useMemo((function() {
                                return a.some((function(e) {
                                    return e.isThumbnail
                                }))
                            }), [a]);
                        i.useEffect((function() {
                            var e = [],
                                t = a.slice(0, lr.Yh).flatMap((function(t) {
                                    var n, r = null == t || null === (n = t.item) || void 0 === n ? void 0 : n.file;
                                    if (null == r) return [];
                                    var i = URL.createObjectURL(r);
                                    e.push(i);
                                    return {
                                        id: t.id,
                                        src: i,
                                        spoiler: t.spoiler,
                                        alt: t.description,
                                        isThumbnail: t.isThumbnail,
                                        upload: !0 === t.isThumbnail ? t : void 0,
                                        isVideo: t.isVideo
                                    }
                                }));
                            r(t);
                            return function() {
                                r(null);
                                e.forEach((function(e) {
                                    return URL.revokeObjectURL(e)
                                }))
                            }
                        }), [a]);
                        return {
                            mediaAttachments: n,
                            hasThumbnail: o
                        }
                    }(e),
                    a = r.mediaAttachments,
                    o = r.hasThumbnail,
                    s = Math.max(lr.Yh - (null !== (n = null == a ? void 0 : a.length) && void 0 !== n ? n : 0), 0),
                    l = function(e, t, n) {
                        var r = i.useRef(new Map),
                            a = gr(i.useState(null), 2)[1],
                            o = gr(i.useState(null), 2),
                            s = o[0],
                            l = o[1],
                            c = i.useMemo((function() {
                                return cr.debounce((function(e, n) {
                                    if (null != n && !e && 0 !== t) {
                                        var i = n.match(ur.Z.URL_REGEX);
                                        if (null != i && 0 !== i.length) {
                                            var a = cr.uniq(i).slice(0, lr.Yh);
                                            l(a)
                                        } else {
                                            r.current = new Map;
                                            l(null)
                                        }
                                    }
                                }), 1e3)
                            }), [t, r]);
                        i.useEffect((function() {
                            c(e, n)
                        }), [c, n, e]);
                        i.useEffect((function() {
                            function e() {
                                e = mr((function(e, t) {
                                    var n, r, i, o;
                                    return br(this, (function(s) {
                                        switch (s.label) {
                                            case 0:
                                                if (null == t) return [2];
                                                n = e.current;
                                                r = new Set(n.keys());
                                                if (0 === (i = t.filter((function(e) {
                                                        return !(null == r ? void 0 : r.has(e))
                                                    }))).length) return [2];
                                                s.label = 1;
                                            case 1:
                                                s.trys.push([1, 3, , 4]);
                                                return [4, dr.V6(i)];
                                            case 2:
                                                o = s.sent();
                                                e.current = yr(new Map(n), i, null == o ? void 0 : o.embeds);
                                                a({});
                                                return [3, 4];
                                            case 3:
                                                s.sent();
                                                return [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                }));
                                return e.apply(this, arguments)
                            }! function(t, n) {
                                e.apply(this, arguments)
                            }(r, s)
                        }), [s]);
                        var u = r.current,
                            d = i.useMemo((function() {
                                var e = [];
                                null == s || s.forEach((function(t) {
                                    var n = u.get(t);
                                    if (null != n) {
                                        var r;
                                        (r = e).push.apply(r, pr(n))
                                    }
                                }));
                                return e.length > 0 ? e : null
                            }), [s, u]);
                        return {
                            embeds: e ? null : d
                        }
                    }(o, s, t).embeds,
                    c = i.useMemo((function() {
                        return null == l ? void 0 : l.flatMap((function(e) {
                            var t = (0, lr.Vh)(e);
                            return null == t ? [] : {
                                id: t,
                                src: t,
                                spoiler: !1,
                                alt: e.title
                            }
                        }))
                    }), [l]),
                    u = jr(null != a ? a : []);
                if (!o && s > 0) {
                    var d, f;
                    (d = u).push.apply(d, jr(null !== (f = null == c ? void 0 : c.slice(0, s)) && void 0 !== f ? f : []))
                }
                return u
            }
            var Er = n(886197),
                _r = n.n(Er);

            function Tr(e, t, n, r, i, a, o) {
                try {
                    var s = e[a](o),
                        l = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function Nr(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(t, n);

                        function o(e) {
                            Tr(a, r, i, o, s, "next", e)
                        }

                        function s(e) {
                            Tr(a, r, i, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function Ar(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function wr(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var Ir = function(e, t) {
                    var n, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r),
                                            0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    (r = 0, i) && (a = [2 & a[0], i.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                Mr = [{
                    name: "Media Post Thumbnail",
                    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
                }],
                Pr = (0, Jn.hQ)();

            function Rr(e) {
                var t = e.mediaAttachments,
                    n = e.containerWidth,
                    i = e.containerHeight,
                    a = $n({
                        numAttachments: t.length,
                        containerWidth: n,
                        containerHeight: i
                    });
                return (0, r.jsx)(r.Fragment, {
                    children: t.map((function(e, t) {
                        var n;
                        return (0, r.jsx)("div", {
                            style: a[t],
                            children: !0 === e.isVideo ? (0, r.jsx)(Oe.Z, {
                                src: e.src,
                                className: _r().thumbnail,
                                "aria-hidden": !0
                            }) : (0, r.jsx)("img", {
                                src: e.src,
                                className: _r().thumbnail,
                                "aria-hidden": !0,
                                alt: null !== (n = null == e ? void 0 : e.alt) && void 0 !== n ? n : ""
                            })
                        }, e.src)
                    }))
                })
            }
            var Zr, Lr = function(e) {
                    var t, a = e.parentChannel,
                        s = (0, vt.xH)((function(e) {
                            return {
                                textAreaState: e.textAreaState
                            }
                        })).textAreaState,
                        l = (0, Cn.ZP)([y.Z], (function() {
                            return y.Z.keyboardModeEnabled
                        })),
                        c = Cr(a, null === (t = s.textValue) || void 0 === t ? void 0 : t.trim()),
                        u = i.useMemo((function() {
                            return c.find((function(e) {
                                return e.isThumbnail
                            }))
                        }), [c]),
                        d = null != c && c.length > 0,
                        f = i.useMemo((function() {
                            var e = (null == c ? void 0 : c.length) > 1 ? 1.15 : 1;
                            return {
                                width: 153 * e,
                                height: 86 * e
                            }
                        }), [c]),
                        h = i.useCallback((function(e) {
                            null != u && bn.Z.remove(a.id, u.id, yn.I.CREATE_FORUM_POST.drafts.type);
                            (0, An.d)(e.currentTarget.files, a, yn.I.CREATE_FORUM_POST.drafts.type, {
                                requireConfirm: !0,
                                isThumbnail: !0
                            });
                            e.currentTarget.value = null
                        }), [a, u]),
                        m = function(e) {
                            e.stopPropagation();
                            null != (null == u ? void 0 : u.upload) && (0,
                                p.openModalLazy)(Nr((function() {
                                var e, t, i;
                                return Ir(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            e = u.upload;
                                            pn()(null != e, "upload should not be null");
                                            return [4, Promise.resolve().then(n.bind(n, 154027))];
                                        case 1:
                                            t = o.sent(), i = t.default;
                                            return [2, function(t) {
                                                return (0, r.jsx)(i, wr(function(e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                        }))));
                                                        r.forEach((function(t) {
                                                            Ar(e, t, n[t])
                                                        }))
                                                    }
                                                    return e
                                                }({}, t), {
                                                    upload: e,
                                                    channelId: a.id,
                                                    draftType: yn.I.CREATE_FORUM_POST.drafts.type,
                                                    onSubmit: function(t) {
                                                        var n = t.name,
                                                            r = t.description,
                                                            i = t.spoiler;
                                                        bn.Z.update(a.id, e.id, yn.I.CREATE_FORUM_POST.drafts.type, {
                                                            filename: n,
                                                            description: r,
                                                            spoiler: i
                                                        })
                                                    },
                                                    disableSpoiler: !0
                                                }))
                                            }]
                                    }
                                }))
                            })))
                        },
                        g = (0, r.jsx)(er.Z, {
                            color: p.ButtonColors.CUSTOM,
                            className: o()(_r().uploadFileInputContainer),
                            innerClassName: _r().uploadThumbnailContainer,
                            onChange: h,
                            multiple: !1,
                            "aria-hidden": !0,
                            filters: Mr,
                            "aria-describedby": Pr,
                            "aria-label": d ? _e.Z.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL : _e.Z.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
                            children: d ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(Rr, {
                                    mediaAttachments: c,
                                    containerWidth: f.width,
                                    containerHeight: f.height
                                }), (0, r.jsxs)("div", {
                                    className: o()(_r().changeThumbnailLabelContainer, Ar({}, _r().changeThumbnailLabelOverflow, (null == c ? void 0 : c.length) > 2)),
                                    children: [(0, r.jsx)(p.Text, {
                                        variant: "text-xs/medium",
                                        color: "header-secondary",
                                        children: _e.Z.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
                                    }), null == u && (0, r.jsx)(tr.Z, {
                                        className: _r().editIcon,
                                        width: 16,
                                        height: 16
                                    })]
                                })]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(or, {
                                    className: _r().uploadIcon
                                }), (0, r.jsx)(p.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: _e.Z.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL
                                })]
                            })
                        });
                    return (0, r.jsx)("div", {
                        className: _r().thumbnailContainer,
                        style: f,
                        children: null != u ? (0, r.jsx)(En.Z, {
                            actions: (0,
                                r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(zn.Z, {
                                    className: _r().action,
                                    tooltip: _e.Z.Messages.ATTACHMENT_UTILITIES_MODIFY,
                                    onClick: m,
                                    children: (0, r.jsx)(Bt.Z, {})
                                }), (0, r.jsx)(zn.Z, {
                                    className: _r().action,
                                    tooltip: _e.Z.Messages.ATTACHMENT_UTILITIES_REMOVE,
                                    onClick: function() {
                                        return bn.Z.remove(a.id, u.id, yn.I.CREATE_FORUM_POST.drafts.type)
                                    },
                                    dangerous: !0,
                                    children: (0, r.jsx)(sr.Z, {})
                                })]
                            }),
                            draftType: yn.I.CREATE_FORUM_POST.drafts.type,
                            id: u.id,
                            channelId: a.id,
                            handleEditModal: m,
                            keyboardModeEnabled: l,
                            size: En.q.SMALL,
                            className: _r().attachmentListItem,
                            children: g
                        }) : (0, r.jsx)(r.Fragment, {
                            children: g
                        })
                    })
                },
                Dr = n(30027),
                kr = n(708299),
                Hr = n(840598),
                Fr = n(323483),
                Ur = n(593005),
                Br = n(682776),
                Gr = n(539273),
                Vr = n(473903),
                zr = n(559968),
                Wr = n(926054),
                Kr = n(584620),
                qr = n(476770),
                Yr = n(201891);
            ! function(e) {
                e[e.EmptyContent = 0] = "EmptyContent";
                e[e.AutomodViolation = 1] = "AutomodViolation";
                e[e.EmptyTags = 2] = "EmptyTags"
            }(Zr || (Zr = {}));

            function Xr(e, t) {
                return {
                    type: e,
                    message: null != t ? t : null
                }
            }

            function $r(e) {
                return Xr(Zr.EmptyContent, e)
            }

            function Qr(e, t) {
                return Xr(Zr.AutomodViolation, (0, Yr.$q)(e, null == t ? void 0 : t.id))
            }

            function Jr(e, t) {
                return null == e || e.type === Zr.EmptyContent && null != t.content && t.content.trim().length > 0 || e.type === Zr.EmptyTags && null != t.tags && t.tags.length > 0 ? null : null !== (n = e.message) && void 0 !== n ? n : null;
                var n
            }
            var ei = n(201033),
                ti = n(824390),
                ni = n.n(ti),
                ri = n(77413),
                ii = n(245353),
                ai = n(752992),
                oi = n.n(ai),
                si = function(e) {
                    var t = e.tag,
                        n = t.id,
                        i = t.name,
                        a = t.emojiId,
                        o = t.emojiName,
                        s = (0, m.e7)([ii.Z], (function() {
                            return null != a ? ii.Z.getUsableCustomEmojiById(a) : null
                        })),
                        l = null != a || null != o;
                    return (0, r.jsx)(p.ComboboxItem, {
                        value: n,
                        children: (0, r.jsx)(p.ComboboxItem.Label, {
                            children: (0, r.jsxs)("div", {
                                className: oi().row,
                                children: [l ? (0, r.jsx)(ri.Z, {
                                    className: oi().emoji,
                                    emojiId: a,
                                    emojiName: o,
                                    animated: Boolean(null == s ? void 0 : s.animated)
                                }) : (0, r.jsx)(Kr.Z, {
                                    className: oi().emoji
                                }), (0, r.jsx)(p.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-secondary",
                                    children: i
                                })]
                            })
                        })
                    }, n)
                };

            function li(e) {
                var t = e.parentChannel,
                    n = e.appliedTags,
                    i = e.maxTagsApplied,
                    a = e.onSelectTag,
                    o = e.onClose,
                    s = (0, W.Vm)(t);
                return (0, r.jsx)(p.ComboboxPopout, {
                    showScrollbar: !0,
                    value: n,
                    onChange: function(e) {
                        if (!i || n.has(e)) {
                            a(e);
                            o()
                        }
                    },
                    placeholder: _e.Z.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
                    "aria-label": _e.Z.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
                    children: function(e) {
                        return function(e, t) {
                            return t.filter((function(t) {
                                return ni()(e.toLowerCase(), t.name.toLowerCase())
                            }))
                        }(e, s).map((function(e) {
                            return (0, r.jsx)(si, {
                                tag: e
                            }, e.id)
                        }))
                    }
                })
            }
            var ci = n(727081),
                ui = n(498619),
                di = n(195123),
                fi = n.n(di);

            function hi(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function mi(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            const gi = function(e) {
                var t = e.rateLimitPerUser,
                    n = e.slowmodeCooldownGuess,
                    i = e.isBypassSlowmode,
                    a = e.leadingIcon,
                    s = void 0 !== a && a,
                    l = "",
                    c = "";
                if (t >= Ee.UF9.HOUR) {
                    var u = Math.floor(t / Ee.UF9.HOUR),
                        d = Math.floor((t - u * Ee.UF9.HOUR) / Ee.UF9.MINUTE),
                        f = t - u * Ee.UF9.HOUR - d * Ee.UF9.MINUTE;
                    c = _e.Z.Messages.FORUM_SLOWMODE_DESC_HOURS.format({
                        hours: u,
                        minutes: d,
                        seconds: f
                    })
                } else if (t >= 60) {
                    var h = Math.floor(t / 60),
                        m = t - 60 * h;
                    c = _e.Z.Messages.FORUM_SLOWMODE_DESC_MINUTES.format({
                        minutes: h,
                        seconds: m
                    })
                } else c = _e.Z.Messages.FORUM_SLOWMODE_DESC.format({
                    seconds: t
                });
                if (!i && n > 0) {
                    var g = J().duration(n);
                    if (n > 1e3 * Ee.UF9.HOUR) {
                        var v = "".concat(g.minutes()).padStart(2, "0"),
                            b = "".concat(g.seconds()).padStart(2, "0");
                        l = "".concat(g.hours(), ":").concat(v, ":").concat(b)
                    } else {
                        var y = "".concat(g.seconds()).padStart(2, "0");
                        l = "".concat(g.minutes(), ":").concat(y)
                    }
                } else l = i ? _e.Z.Messages.CHANNEL_SLOWMODE_DESC_IMMUNE : _e.Z.Messages.CHANNEL_SLOWMODE_DESC_SHORT;
                var O = (0, r.jsx)(p.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: l
                    }),
                    x = (0, r.jsx)(ui.Z, {
                        className: o()(fi().slowModeIcon, hi({}, fi().leadingIcon, s))
                    });
                return (0, r.jsx)(p.Tooltip, {
                    text: c,
                    children: function(e) {
                        return (0, r.jsx)("div", mi(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))));
                                r.forEach((function(t) {
                                    hi(e, t, n[t])
                                }))
                            }
                            return e
                        }({
                            className: fi().cooldownWrapper
                        }, e), {
                            children: s ? (0, r.jsxs)(r.Fragment, {
                                children: [x, O]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [O, x]
                            })
                        }))
                    }
                })
            };
            var pi = n(753274);

            function vi(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function bi(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return vi(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vi(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var yi = "undefined" == typeof ResizeObserver ? pi.d : ResizeObserver,
                Oi = new Map,
                xi = new yi((function(e) {
                    e.forEach((function(e) {
                        var t, n = e.target;
                        null === (t = Oi.get(n)) || void 0 === t || t(e)
                    }))
                }));
            const ji = function() {
                var e = i.useRef(null),
                    t = bi(i.useState(400), 2),
                    n = t[0],
                    r = t[1],
                    a = i.useCallback((function() {
                        null !== e.current && r(e.current.clientWidth)
                    }), [r, e]);
                (0, p.useResizeObserverSubscription)({
                    ref: e,
                    key: "forum-container",
                    onUpdate: a,
                    resizeObserver: xi,
                    listenerMap: Oi
                });
                return {
                    containerRef: e,
                    containerWidth: n
                }
            };
            var Si = n(897196),
                Ci = n(977635),
                Ei = n.n(Ci);

            function _i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ti(e, t, n, r, i, a, o) {
                try {
                    var s = e[a](o),
                        l = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function Ni(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ai(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ni(e, t, n[t])
                    }))
                }
                return e
            }

            function wi(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Ii(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function Mi(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Pi = function(e, t) {
                    var n, r, i, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        },
                        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }), a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o;) try {
                                    if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                    (r = 0, i) && (a = [2 & a[0], i.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            i = a;
                                            break;
                                        case 4:
                                            o.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            o.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = o.ops.pop();
                                            o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                                o.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && o.label < i[1]) {
                                                o.label = i[1];
                                                i = a;
                                                break
                                            }
                                            if (i && o.label < i[2]) {
                                                o.label = i[2];
                                                o.ops.push(a);
                                                break
                                            }
                                            i[2] && o.ops.pop();
                                            o.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, o)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                Ri = yn.I.CREATE_FORUM_POST;

            function Zi(e) {
                var t = e.parentChannel,
                    n = e.isSearchLoading,
                    a = e.onChange,
                    s = e.canCreatePost,
                    l = e.inputRef,
                    u = (0, vt.xH)((function(e) {
                        return {
                            textAreaState: e.textAreaState,
                            formOpen: e.formOpen
                        }
                    }), c.Z),
                    d = u.textAreaState,
                    f = u.formOpen,
                    h = Mi(i.useState(null), 2),
                    g = h[0],
                    v = h[1],
                    b = i.useContext(U.oo),
                    y = i.useCallback((function() {
                        b.bumpDispatchPriority()
                    }), [b]),
                    O = (0, m.e7)([Br.Z], (function() {
                        return Br.Z.can(Ee.Plq.ATTACH_FILES, t)
                    })),
                    x = (0, m.Wu)([Z.Z], (function() {
                        return Z.Z.getUploads(t.id, P.d.FirstThreadMessage)
                    })),
                    j = f && O && s,
                    S = !0 === (null == t ? void 0 : t.isMediaChannel()),
                    C = function(e, t) {
                        var n = (0, vt.AF)(),
                            r = (0, W.ql)(e),
                            a = i.useCallback((function() {
                                var i = n.getState(),
                                    a = i.formOpen,
                                    o = i.setFormOpenFromUserAction,
                                    s = i.name,
                                    l = i.textAreaState,
                                    c = i.hasClickedForm;
                                if (!a) {
                                    setTimeout((function() {
                                        if (t.current instanceof p.TextAreaAutosize) {
                                            var e, n, r, i;
                                            null === (e = t.current) || void 0 === e || null === (n = e._textArea) || void 0 === n || n.setSelectionRange(s.length, s.length);
                                            null === (r = t.current) || void 0 === r || null === (i = r._textArea) || void 0 === i || i.focus()
                                        }
                                    }), 0);
                                    (c && s.length > 0 || l.textValue.trim().length > 0 && l.textValue.trim() !== r || Z.Z.getUploads(e.id, P.d.FirstThreadMessage).length > 0) && o()
                                }
                            }), [n, e.id, r, t]);
                        return a
                    }(t, l),
                    E = function(e) {
                        var t = (0, vt.xH)((function(e) {
                                return {
                                    formOpen: e.formOpen
                                }
                            }), c.Z).formOpen,
                            n = (0, vt.AF)(),
                            r = (0, Ur.r)({
                                parentChannel: e
                            });
                        i.useEffect((function() {
                            var e = n.getState(),
                                t = e.setNameError,
                                r = e.setMessageError;
                            t(null);
                            r(null)
                        }), [t, n]);
                        var a = i.useCallback((function(t, r, i) {
                            var a = n.getState(),
                                o = a.name,
                                s = a.textAreaState;
                            null == t && (t = s.textValue);
                            t = t.trim();
                            t = Dr.ZP.parse(e, t).content;
                            if (null == r || 0 === r.length) {
                                var l;
                                r = null === (l = kr.Z.getStickerPreview(e.id, Ri.drafts.type)) || void 0 === l ? void 0 : l.map((function(e) {
                                    return e.id
                                }))
                            }
                            null != i && 0 !== i.length || (i = Z.Z.getUploads(e.id, P.d.FirstThreadMessage));
                            if (null != i && i.length > 0 && e.isMediaChannel()) {
                                var c = i.findIndex((function(e) {
                                    return !0 === e.isThumbnail
                                }));
                                if (c > -1) {
                                    var u = i[c];
                                    i.splice(c, 1);
                                    i.unshift(u)
                                }
                            }
                            return {
                                content: t,
                                stickers: r,
                                uploads: i,
                                hasNameError: 0 === o.length,
                                hasMessageError: !(null != t && 0 !== t.length || null != r && 0 !== r.length || 0 !== i.length)
                            }
                        }), [e, n]);
                        return i.useCallback((s = (o = function(t, i, o) {
                            var s, l, c, u, d, f, h, m, g, p, v, b, y, O, x, j, S, C, E, _;
                            return Pi(this, (function(T) {
                                switch (T.label) {
                                    case 0:
                                        s = n.getState(), l = s.setNameError, c = s.setMessageError, u = s.setSubmitting, d = s.resetFormState, f = s.formOpen, h = s.setFormOpen, m = s.setFormOpenFromUserAction, g = s.setGuidelinesOpen;
                                        p = ei.Z.hasSeen(e.id);
                                        if (!f) {
                                            (0, X.P_)({
                                                guildId: e.guild_id,
                                                channelId: e.id
                                            });
                                            p || n.getState().setGuidelinesOpen(!0);
                                            m();
                                            return [2, {
                                                shouldClear: !1,
                                                shouldRefocus: !1
                                            }]
                                        }
                                        v = a(t, i, o), b = v.content, y = v.stickers, O = v.uploads, x = v.hasNameError, j = v.hasMessageError;
                                        l(x ? $r(_e.Z.Messages.FORUM_POST_EMPTY_TITLE_ERROR) : null);
                                        c(j ? $r(_e.Z.Messages.FORUM_POST_EMPTY_MESSAGE_ERROR) : null);
                                        if (x || j) return [2, {
                                            shouldClear: !1,
                                            shouldRefocus: !0
                                        }];
                                        T.label = 1;
                                    case 1:
                                        T.trys.push([1, 4, 5, 6]);
                                        u(!0);
                                        return [4, (0, qr.v)({
                                            content: b,
                                            stickers: y,
                                            uploads: O,
                                            type: Ri,
                                            channel: e
                                        })];
                                    case 2:
                                        return T.sent().valid ? [4, r(b, y, O)] : [2, {
                                            shouldClear: !1,
                                            shouldRefocus: !0
                                        }];
                                    case 3:
                                        S = T.sent();
                                        (0, w.ok)(S);
                                        G.Z.resort(e.id);
                                        (0, Hr.qB)(e.id, Ri.drafts.type);
                                        d();
                                        h(!1);
                                        ei.Z.markAsSeen(e.id);
                                        g(!1);
                                        return [2, {
                                            shouldClear: !0,
                                            shouldRefocus: !1
                                        }];
                                    case 4:
                                        C = T.sent();
                                        (null === (E = C.body) || void 0 === E ? void 0 : E.code) === Ee.evJ.AUTOMOD_TITLE_BLOCKED ? l(Qr(C.body, e)) : (null === (_ = C.body) || void 0 === _ ? void 0 : _.code) === Ee.evJ.AUTOMOD_MESSAGE_BLOCKED && c(Qr(C.body, e));
                                        return [2, {
                                            shouldClear: !1,
                                            shouldRefocus: !0
                                        }];
                                    case 5:
                                        u(!1);
                                        return [7];
                                    case 6:
                                        return [2]
                                }
                            }))
                        }, function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(n, r) {
                                var i = o.apply(e, t);

                                function a(e) {
                                    Ti(i, n, r, a, s, "next", e)
                                }

                                function s(e) {
                                    Ti(i, n, r, a, s, "throw", e)
                                }
                                a(void 0)
                            }))
                        }), function(e, t, n) {
                            return s.apply(this, arguments)
                        }), [r, a, e, n]);
                        var o, s
                    }(t);
                i.useLayoutEffect(a, [f, d, x, a]);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)("div", {
                        "aria-label": s ? _e.Z.Messages.NEW_FORUM_POST : _e.Z.Messages.SEARCH,
                        className: o()(Ei().container, Ni({}, Ei().collapsed, !f)),
                        onClick: !f && s ? C : void 0,
                        children: (0, r.jsxs)("form", {
                            onMouseDown: y,
                            onFocus: y,
                            onSubmit: function(e) {
                                e.preventDefault();
                                s && E()
                            },
                            children: [(0, r.jsxs)("div", {
                                className: Ei().formContainer,
                                children: [(0, r.jsxs)("div", {
                                    className: Ei().form,
                                    children: [(0, r.jsx)(Li, {
                                        editorRef: g,
                                        parentChannel: t,
                                        isSearchLoading: n,
                                        inputRef: l,
                                        canCreatePost: s
                                    }), f && (0, r.jsx)(ki, {
                                        editorRef: g,
                                        setEditorRef: v,
                                        parentChannel: t,
                                        submit: E,
                                        disabled: !s
                                    })]
                                }), j && (S ? (0, r.jsx)(Lr, {
                                    parentChannel: t
                                }) : (0, r.jsx)(Fn, {
                                    channelId: t.id
                                }))]
                            }), (0, r.jsxs)("div", {
                                className: Ei().form,
                                children: [j && S && (0, r.jsx)(Gn, {
                                    parentChannel: t
                                }), f && (0, r.jsx)(Hi, {
                                    className: Ei().horizontalPadding,
                                    parentChannel: t,
                                    canCreatePost: s
                                })]
                            })]
                        })
                    })
                })
            }
            var Li = i.memo((function(e) {
                var t = e.parentChannel,
                    n = e.isSearchLoading,
                    a = e.inputRef,
                    o = e.canCreatePost,
                    s = e.editorRef,
                    l = (0, vt.xH)((function(e) {
                        return {
                            formOpen: e.formOpen,
                            nameError: e.nameError,
                            name: e.name,
                            textAreaState: e.textAreaState,
                            hasClickedForm: e.hasClickedForm,
                            submitting: e.submitting
                        }
                    }), c.Z),
                    u = l.formOpen,
                    d = l.nameError,
                    f = l.name,
                    h = l.textAreaState,
                    g = l.hasClickedForm,
                    v = l.submitting,
                    b = (0,
                        vt.AF)(),
                    y = null != t.topic && 0 !== t.topic.length,
                    O = ei.Z.hasSeen(t.id),
                    x = (0, W.ql)(t),
                    j = (0, m.e7)([Vr.default], (function() {
                        return Vr.default.getCurrentUser()
                    }));
                pn()(null != j, "current user cannot be null");
                (0, U.yp)({
                    event: Ee.CkL.FOCUS_COMPOSER_TITLE,
                    handler: function() {
                        var e, t = a.current instanceof p.TextAreaAutosize ? null === (e = a.current) || void 0 === e ? void 0 : e._textArea : a.current;
                        null == t || t.focus();
                        b.getState().setTitleFocused(!0);
                        b.getState().setFormOpen(!0);
                        b.getState().setHasClickedForm(!0)
                    }
                });
                var S = i.useCallback((function() {
                        var e;
                        b.getState().resetFormState();
                        vn.Z.clearDraft(t.id, P.d.ThreadSettings);
                        vn.Z.clearDraft(t.id, P.d.FirstThreadMessage);
                        bn.Z.clearAll(t.id, P.d.FirstThreadMessage);
                        b.getState().setFormOpen(!1);
                        b.getState().setBodyFocused(!1);
                        b.getState().setTitleFocused(!1);
                        b.getState().setHasClickedForm(!1);
                        null === (e = a.current) || void 0 === e || e.blur();
                        (0, X.Oq)({
                            guildId: t.guild_id,
                            channelId: t.id
                        })
                    }), [b, t.id, t.guild_id, a]),
                    C = i.useMemo((function() {
                        return n && !u ? (0,
                            r.jsx)(Gi, {}) : n || u || 0 !== h.textValue.trim().length && h.textValue.trim() !== x ? !u && (f.trim().length > 0 || h.textValue.trim().length > 0 && h.textValue.trim() !== x || Z.Z.getUploads(t.id, P.d.FirstThreadMessage).length > 0) && g ? (0, r.jsx)(Bt.Z, {
                            className: Ei().pencilIcon,
                            width: 24,
                            height: 24
                        }) : v ? (0, r.jsx)(zr.Z, {
                            className: Ei().closeIconDisabled,
                            width: 24,
                            height: 24
                        }) : (0, r.jsx)(p.Tooltip, {
                            text: _e.Z.Messages.FORUM_CLEAR_ALL,
                            children: function(e) {
                                return (0, r.jsx)(p.Clickable, wi(Ai({}, e), {
                                    onClick: S,
                                    children: (0, r.jsx)(zr.Z, {
                                        className: Ei().closeIcon,
                                        width: 24,
                                        height: 24
                                    })
                                }))
                            }
                        }) : (0, r.jsx)(Wr.Z, {
                            className: Ei().searchIcon,
                            width: 24,
                            height: 24
                        })
                    }), [n, u, g, f, h.textValue, S, t.id, x, v]),
                    E = i.useCallback((function(e) {
                        var n = e.clipboardData.files[0];
                        if (null != n && n.type.startsWith("image/")) {
                            e.preventDefault();
                            (0, An.d)([n], t, P.d.FirstThreadMessage);
                            b.getState().setFormOpenFromUserAction()
                        }
                    }), [t, b]),
                    _ = Jr(d, {
                        content: f
                    });
                return (0, r.jsxs)("div", {
                    className: Ei().titleContainer,
                    onPaste: E,
                    children: [(0, r.jsx)("div", {
                        className: Ei().prefixElement,
                        children: C
                    }), (0, r.jsx)(p.TextArea, {
                        value: f,
                        placeholder: o ? u || h.textValue.length > 0 && h.textValue.trim() !== x ? _e.Z.Messages.FORUM_POST_TITLE_PLACEHOLDER_FOCUSED : _e.Z.Messages.FORUM_POST_TITLE_PLACEHOLDER_SEARCH : _e.Z.Messages.SEARCH,
                        flex: !0,
                        autosize: u,
                        rows: 1,
                        showCharacterCount: !1,
                        showRemainingCharacterCount: !1,
                        maxLength: Ee.HN8,
                        onChange: function(e) {
                            var n = (0, Fr.Z)(e, !1);
                            b.getState().setName(n);
                            var r = 0 === n.trim().length,
                                i = 0 === h.textValue.trim().length,
                                a = h.textValue.trim() === x;
                            r && (i || a) && b.getState().setHasClickedForm(!1);
                            u || G.Z.updateForumSearchQuery(t.id, n)
                        },
                        onFocus: function() {
                            b.getState().setTitleFocused(!0);
                            b.getState().setBodyFocused(!1)
                        },
                        onBlur: function() {
                            b.getState().setTitleFocused(!1);
                            var e = (0, Fr.Z)(f, !0);
                            if (e !== f) {
                                b.getState().setName(e);
                                u || G.Z.updateForumSearchQuery(t.id, e)
                            }
                        },
                        onKeyDown: function(e) {
                            var n;
                            if ("Enter" === e.key) {
                                e.preventDefault();
                                e.stopPropagation();
                                if (u && f.length > 0) null == s || s.focus();
                                else if (o && e.shiftKey) {
                                    (0, X.nH)({
                                        guildId: t.guild_id,
                                        channelId: t.id
                                    });
                                    y && !O && b.getState().setGuidelinesOpen(!0);
                                    b.getState().setFormOpenFromUserAction();
                                    if (f.trim().length > 0) {
                                        b.getState().setBodyFocused(!0);
                                        null == s || s.focus()
                                    }
                                }
                            }
                            var r = a.current instanceof p.TextAreaAutosize ? null === (n = a.current) || void 0 === n ? void 0 : n._textArea : a.current;
                            if ("Home" === e.key || "End" === e.key) {
                                if (null == r) return;
                                e.preventDefault();
                                e.stopPropagation();
                                if ("Home" === e.key) r.setSelectionRange(0, 0);
                                else {
                                    var i = f.length;
                                    r.setSelectionRange(i, i)
                                }
                            }
                            if ("Escape" === e.key && !b.getState().submitting) {
                                var l;
                                null === (l = a.current) || void 0 === l || l.blur();
                                b.getState().setFormOpen(!1);
                                b.getState().setTitleFocused(!1);
                                b.getState().setBodyFocused(!1)
                            }
                        },
                        error: _,
                        className: Ei().title,
                        inputRef: a
                    }), u ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(Di, {
                            parentChannel: t
                        }), (0, r.jsx)(Fi, {
                            parentChannel: t,
                            canCreatePost: o
                        })]
                    })]
                })
            }));

            function Di(e) {
                var t = e.parentChannel,
                    n = (0, vt.xH)((function(e) {
                        return {
                            guidelinesOpen: e.guidelinesOpen
                        }
                    })).guidelinesOpen,
                    i = (0, vt.AF)(),
                    a = null != t.topic && 0 !== t.topic.length,
                    s = function() {
                        i.getState().setGuidelinesOpen(!n)
                    };
                return a ? (0, r.jsx)(p.Tooltip, {
                    text: _e.Z.Messages.FORUM_POST_GUIDELINES_TITLE,
                    children: function(e) {
                        return (0, r.jsx)(p.Clickable, wi(Ai({}, e), {
                            onClick: s,
                            className: o()(Ei().guidelinesButton, Ni({}, Ei().guidelinesOpen, n)),
                            children: (0, r.jsx)(Ut.Z, wi(Ai({}, e), {
                                width: 24,
                                height: 24
                            }))
                        }))
                    }
                }) : null
            }
            var ki = i.memo((function(e) {
                    var t = e.parentChannel,
                        n = e.submit,
                        a = e.disabled,
                        s = void 0 !== a && a,
                        l = e.editorRef,
                        u = e.setEditorRef,
                        d = (0, m.e7)([Vr.default], (function() {
                            return Vr.default.getCurrentUser()
                        }));
                    pn()(null != d, "current user cannot be null");
                    var f = (0, vt.xH)((function(e) {
                            return {
                                messageError: e.messageError,
                                textAreaState: e.textAreaState,
                                bodyFocused: e.bodyFocused,
                                formOpen: e.formOpen
                            }
                        }), c.Z),
                        h = f.messageError,
                        g = f.textAreaState,
                        v = f.bodyFocused,
                        b = f.formOpen,
                        y = (0, vt.AF)();
                    i.useEffect((function() {
                        return function() {
                            return (0, X.Vn)({
                                guildId: t.guild_id,
                                channelId: t.id
                            })
                        }
                    }), [t.guild_id, t.id]);
                    var O = i.useCallback((function() {
                            y.getState().setBodyFocused(!0)
                        }), [y]),
                        x = i.useCallback((function() {
                            y.getState().setBodyFocused(!1)
                        }), [y]),
                        j = i.useCallback((function(e, t, n) {
                            (0, y.getState().setTextAreaState)({
                                textValue: t,
                                richValue: n
                            })
                        }), [y]),
                        S = i.useCallback((function(e) {
                            var t = e.value,
                                r = e.uploads,
                                i = e.stickers;
                            return n(t, i, r)
                        }), [n]);
                    (0, U.yp)({
                        event: Ee.CkL.TEXTAREA_FOCUS,
                        handler: O
                    });
                    (0, U.yp)({
                        event: Ee.CkL.TEXTAREA_BLUR,
                        handler: x
                    });
                    var C = Jr(h, {
                        content: g.textValue
                    });
                    return (0, r.jsx)("div", {
                        className: Ei().bodyContainer,
                        children: (0, r.jsxs)("div", {
                            className: Ei().contentContainer,
                            children: [(0, r.jsx)("div", {
                                onClick: O,
                                children: (0, r.jsx)(xn.Z, {
                                    type: Ri,
                                    setEditorRef: u,
                                    channel: t,
                                    placeholder: _e.Z.Messages.FORUM_POST_MESSAGE_PLACEHOLDER,
                                    textValue: g.textValue,
                                    richValue: g.richValue,
                                    focused: v,
                                    className: Ei().channelTextArea,
                                    innerClassName: o()(Ei().channelTextAreaInner, Ni({}, Ei().channelTextAreaInnerError, null != C)),
                                    onChange: j,
                                    onSubmit: S,
                                    promptToUpload: An.d,
                                    disabled: s,
                                    onKeyDown: function(e) {
                                        "ArrowUp" !== e.key && "ArrowDown" !== e.key || e.stopPropagation();
                                        if ("Home" === e.key || "End" === e.key) {
                                            if (null == l) return;
                                            e.preventDefault();
                                            e.stopPropagation();
                                            var t = l.getSlateEditor();
                                            if (null == t) return;
                                            "Home" === e.key ? Sn.Q.resetSelectionToStart(t) : Sn.Q.resetSelectionToEnd(t)
                                        }
                                        if (b && "Escape" === e.key && !y.getState().submitting) {
                                            null == l || l.blur();
                                            y.getState().setFormOpen(!1);
                                            y.getState().setTitleFocused(!1);
                                            y.getState().setBodyFocused(!1)
                                        }
                                    },
                                    autoCompletePosition: "bottom"
                                })
                            }), (0, r.jsx)(p.InputError, {
                                error: C
                            })]
                        })
                    })
                })),
                Hi = i.memo((function(e) {
                    var t = e.parentChannel,
                        n = e.canCreatePost,
                        a = e.className,
                        o = (0, vt.xH)((function(e) {
                            return {
                                textAreaState: e.textAreaState,
                                appliedTags: e.appliedTags,
                                name: e.name
                            }
                        })),
                        s = o.textAreaState,
                        l = o.appliedTags,
                        c = o.name,
                        u = t.rateLimitPerUser,
                        d = u > 0,
                        f = (0, m.e7)([Gr.Z], (function() {
                            return Gr.Z.getSlowmodeCooldownGuess(t.id, Gr.S.CreateThread)
                        })),
                        h = (0, m.e7)([Br.Z], (function() {
                            return Br.Z.can(Ee.Plq.MANAGE_THREADS, t) || Br.Z.can(Ee.Plq.MANAGE_CHANNELS, t)
                        })),
                        g = t.hasFlag(Si.zZ.REQUIRE_TAG) && 0 === l.size && c.length > 0 && s.textValue.length > 0,
                        v = (0, vt.AF)(),
                        b = i.useCallback((function() {
                            v.getState().setBodyFocused(!1)
                        }), [v]);
                    return (0, r.jsxs)("div", {
                        className: a,
                        children: [(0, r.jsx)(Bi, {
                            parentChannel: t
                        }), (0, r.jsx)("div", {
                            className: Ei().tagsDivider
                        }), (0, r.jsxs)("div", {
                            className: Ei().controlsContainer,
                            children: [(0, r.jsxs)("div", {
                                className: Ei().controls,
                                children: [(0, r.jsxs)("div", {
                                    className: Ei().wrappedControls,
                                    children: [g && (0, r.jsx)(p.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-danger",
                                        children: _e.Z.Messages.FORUM_POST_TAG_REQUIRED_ERROR
                                    }), (0, r.jsx)(jn.Z, {
                                        type: Ri,
                                        textValue: s.textValue,
                                        className: Ei().characterCount
                                    }), d && (0, r.jsx)(gi, {
                                        rateLimitPerUser: u,
                                        slowmodeCooldownGuess: f,
                                        isBypassSlowmode: h,
                                        leadingIcon: !0
                                    })]
                                }), (0, r.jsx)(Di, {
                                    parentChannel: t
                                }), (0, r.jsx)(Fi, {
                                    parentChannel: t,
                                    disableIfInvalid: !0,
                                    canCreatePost: n,
                                    disabled: d && !h && f > 0
                                })]
                            }), (0, r.jsx)(On.Z, {
                                type: Ri,
                                className: Ei().expressionPicker,
                                onClick: b
                            }, "expression")]
                        })]
                    })
                }));

            function Fi(e) {
                var t = e.parentChannel,
                    n = e.canCreatePost,
                    i = e.disabled,
                    a = e.disableIfInvalid,
                    o = void 0 !== a && a,
                    s = (0, vt.xH)((function(e) {
                        return {
                            submitting: e.submitting,
                            textAreaState: e.textAreaState,
                            name: e.name,
                            appliedTags: e.appliedTags,
                            formOpen: e.formOpen
                        }
                    })),
                    l = s.submitting,
                    c = s.textAreaState,
                    u = s.name,
                    d = s.appliedTags,
                    f = s.formOpen,
                    h = t.hasFlag(Si.zZ.REQUIRE_TAG) && 0 === d.size && u.length > 0 && c.textValue.length > 0,
                    g = (0, m.Wu)([Z.Z], (function() {
                        return Z.Z.getUploads(t.id, P.d.FirstThreadMessage)
                    })),
                    v = c.textValue.trim().length > 0 || g.length > 0,
                    b = !h && v && u.trim().length > 0;
                if (__OVERLAY__) return null;
                var y = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, r.jsxs)(p.Button, wi(Ai({}, e), {
                        size: p.Button.Sizes.SMALL,
                        className: Ei().submitButton,
                        innerClassName: Ei().submitButtonInner,
                        type: "submit",
                        submitting: l,
                        disabled: o && !b || i || !n,
                        children: [(0, r.jsx)(st.Z, {
                            className: Ei().submitIcon,
                            width: 16,
                            height: 16
                        }), (0, r.jsx)(p.Text, {
                            variant: "text-md/semibold",
                            color: "none",
                            children: f ? _e.Z.Messages.SUBMIT_POST : _e.Z.Messages.NEW_FORUM_POST_NEW
                        })]
                    }))
                };
                return n ? y() : (0, r.jsx)(p.Tooltip, {
                    text: _e.Z.Messages.FORUM_NO_POST_PERMISSION_HELP,
                    children: function(e) {
                        return y(e)
                    }
                })
            }

            function Ui() {
                return Promise.resolve()
            }

            function Bi(e) {
                var t = e.parentChannel,
                    n = (0, vt.xH)((function(e) {
                        return {
                            appliedTags: e.appliedTags,
                            toggleAppliedTag: e.toggleAppliedTag,
                            setPopoutOpen: e.setPopoutOpen
                        }
                    }), c.Z),
                    a = n.appliedTags,
                    s = n.toggleAppliedTag,
                    l = n.setPopoutOpen,
                    h = a.size >= bt.Cn,
                    m = (0, u.ZP)({
                        id: "".concat(t.id, "-post-form-tags-navigator"),
                        isEnabled: !0,
                        wrap: !0,
                        scrollToStart: Ui,
                        scrollToEnd: Ui,
                        orientation: f.hy.HORIZONTAL
                    }),
                    g = ji(),
                    v = g.containerRef,
                    b = g.containerWidth,
                    y = i.useRef(null),
                    O = Mi(i.useState(!0), 2),
                    x = O[0],
                    j = O[1],
                    S = (0, W.Vm)(t),
                    C = Mi(i.useState(0), 2),
                    E = C[0],
                    _ = C[1];
                i.useLayoutEffect((function() {
                    var e, t = y.current,
                        n = null == t || null === (e = t.children) || void 0 === e ? void 0 : e[0],
                        r = null == t || null == n || n.clientHeight > t.clientHeight;
                    r !== x && j(r);
                    if (r && null != v.current && null != n && null != n.children) {
                        var i = v.current.getBoundingClientRect(),
                            a = i.left,
                            o = i.top,
                            s = 0,
                            l = !0,
                            c = !1,
                            u = void 0;
                        try {
                            for (var d, f = n.children[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                                var h = d.value.getBoundingClientRect(),
                                    m = h.right;
                                if (h.top - o > h.height) break;
                                m - a > s && (s = m - a)
                            }
                        } catch (e) {
                            c = !0;
                            u = e
                        } finally {
                            try {
                                l || null == f.return || f.return()
                            } finally {
                                if (c) throw u
                            }
                        }
                        _(s)
                    }
                }), [S, x, v, b]);
                return 0 === S.length ? null : (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: Ei().tagsContainer,
                        ref: v,
                        children: [(0, r.jsx)(Kr.Z, {
                            className: Ei().tagsIcon,
                            width: 16,
                            height: 16
                        }), (0, r.jsx)("div", {
                            className: Ei().tagList,
                            ref: y,
                            children: (0, r.jsx)(d.bG, {
                                navigator: m,
                                children: (0, r.jsx)(d.SJ, {
                                    children: function(e) {
                                        var t = e.ref,
                                            n = Ii(e, ["ref"]);
                                        return (0, r.jsx)("div", wi(Ai({
                                            className: Ei().tagListInner,
                                            ref: t
                                        }, n), {
                                            children: S.map((function(e) {
                                                return (0, r.jsx)(ci.ZP, {
                                                    ariaLabel: _e.Z.Messages.FORUM_TAG_A11Y_ADD_TAG.format({
                                                        tagName: e.name
                                                    }),
                                                    tag: e,
                                                    onClick: h && !a.has(e.id) ? void 0 : function() {
                                                        return s(e.id)
                                                    },
                                                    disabled: !a.has(e.id) && a.size >= bt.Cn,
                                                    selected: a.has(e.id),
                                                    size: ci.ZP.Sizes.SMALL
                                                }, e.id)
                                            }))
                                        }))
                                    }
                                })
                            })
                        }), x && (0, r.jsx)(p.Popout, {
                            onRequestOpen: function() {
                                return l(!0)
                            },
                            onRequestClose: function() {
                                return l(!1)
                            },
                            renderPopout: function(e) {
                                var n = e.closePopout;
                                return (0, r.jsx)(li, {
                                    parentChannel: t,
                                    appliedTags: a,
                                    maxTagsApplied: h,
                                    onSelectTag: s,
                                    onClose: n
                                })
                            },
                            position: "bottom",
                            align: "center",
                            children: function(e) {
                                return (0, r.jsxs)(p.Button, wi(Ai({}, e), {
                                    size: p.Button.Sizes.TINY,
                                    className: Ei().tagsButton,
                                    innerClassName: Ei().tagsButtonInner,
                                    style: {
                                        left: E
                                    },
                                    look: p.Button.Looks.LINK,
                                    "aria-label": _e.Z.Messages.ADD_TAG_FORUM_POST,
                                    children: [_e.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, r.jsx)(D.Z, {
                                        width: 16
                                    })]
                                }))
                            }
                        }), (0, r.jsxs)(p.Button, {
                            size: p.Button.Sizes.TINY,
                            className: o()(Ei().tagsButton, Ei().tagsButtonPlaceholder),
                            innerClassName: Ei().tagsButtonInner,
                            look: p.Button.Looks.LINK,
                            "aria-label": _e.Z.Messages.ADD_TAG_FORUM_POST,
                            children: [_e.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL, (0, r.jsx)(D.Z, {
                                width: 16
                            })]
                        })]
                    })
                })
            }

            function Gi(e) {
                var t = e.style,
                    n = e.className;
                return (0, r.jsx)("div", {
                    className: n,
                    style: t,
                    children: (0, r.jsx)("div", {
                        className: Ei().loader
                    })
                })
            }
            var Vi = n(920883),
                zi = n(531304),
                Wi = n(675728),
                Ki = n(210643),
                qi = n(916286),
                Yi = n(386364),
                Xi = n(968449),
                $i = n(439610),
                Qi = n(331448),
                Ji = n(816240),
                ea = n(958125),
                ta = n(723876),
                na = n(234798),
                ra = n(99440);
            const ia = (0, n(260561).B)({
                kind: "user",
                id: "2022-11_grid_view_image_fitting_strategy",
                label: "Grid View Media Fitting Strategy",
                defaultConfig: {
                    strategy: Vn.COVER
                },
                treatments: [{
                    id: 1,
                    label: "CONTAIN",
                    config: {
                        strategy: Vn.CONTAIN
                    }
                }, {
                    id: 2,
                    label: "CONTAIN_STRETCHED",
                    config: {
                        strategy: Vn.CONTAIN_STRETCHED
                    }
                }]
            });
            var aa = n(822110);
            var oa = function() {
                    function e(t) {
                        var n = t.minWidth,
                            r = t.maxWidth,
                            i = t.gap;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        pn()(n < r, "minWidth needs to be smaller than maxWidth");
                        this.minWidth = n;
                        this.maxWidth = r;
                        this.gap = i
                    }
                    var t = e.prototype;
                    t.getWidth = function(e) {
                        return this.getRenderOptions(e).columnWidth
                    };
                    t.getRenderOptions = function(e) {
                        if (e <= this.minWidth) return {
                            columns: 1,
                            columnWidth: this.minWidth
                        };
                        var t = e / this.maxWidth,
                            n = e / this.minWidth,
                            r = Math.max(Math.floor(t + (n - t) / 2), 1);
                        return {
                            columns: r,
                            columnWidth: (e - this.gap * (r - 1)) / r
                        }
                    };
                    return e
                }(),
                sa = {
                    columns: 1,
                    columnWidth: 450
                },
                la = function(e) {
                    var t = e - 2;
                    return [t, Math.ceil(.6666666666666666 * t)]
                },
                ca = function(e) {
                    return 60 + la(e - 24)[1] + 24 + 36
                },
                ua = n(16896),
                da = n(589519),
                fa = n(433505),
                ha = n(707558);

            function ma(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ga(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function pa(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ma(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ma(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var va = "data-grid-item-id",
                ba = "data-grid-section",
                ya = "data-grid-prev-section-boundary",
                Oa = new Set([f.R8.UP, f.R8.DOWN, f.R8.LEFT, f.R8.RIGHT]);

            function xa(e) {
                var t = e.section,
                    n = e.column,
                    r = e.row,
                    i = "[".concat(ba, '="').concat(t, '"]'),
                    a = "[".concat("aria-colindex", '="').concat(n, '"]'),
                    o = "[".concat("aria-rowindex", '="').concat(r, '"]');
                return "".concat(i).concat(a).concat(o)
            }
            var ja = {
                    id: "NO_LIST",
                    setFocus: function() {}
                },
                Sa = {
                    id: "NO_LIST",
                    onKeyDown: function() {},
                    ref: i.createRef()
                },
                Ca = i.createContext(ja),
                Ea = i.createContext(Sa);

            function _a(e) {
                var t = e.children,
                    n = e.navigator,
                    a = n.id,
                    o = n.setFocus,
                    s = n.containerProps,
                    l = s.onKeyDown,
                    c = s.ref,
                    u = i.useMemo((function() {
                        return {
                            id: a,
                            setFocus: o
                        }
                    }), [a, o]),
                    d = i.useMemo((function() {
                        return {
                            onKeyDown: l,
                            ref: c,
                            id: a
                        }
                    }), [l, c, a]);
                return (0, r.jsx)(Ea.Provider, {
                    value: d,
                    children: (0, r.jsx)(Ca.Provider, {
                        value: u,
                        children: t
                    })
                })
            }
            var Ta = n(630097),
                Na = n(651720),
                Aa = n.n(Na);

            function wa(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ia(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ma(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ia(e, t, n[t])
                    }))
                }
                return e
            }

            function Pa(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Ra(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function Za(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return wa(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return wa(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const La = i.memo((function(e) {
                var t = e.id,
                    n = e.threadId,
                    i = e.goToThread,
                    a = e.overrideMedia,
                    o = e.className,
                    s = e.coords,
                    l = e.gridCoords,
                    c = e.gridSectionBoundaries,
                    u = e.observePostVisibilityAnalytics,
                    d = (0, m.e7)([M.Z], (function() {
                        return M.Z.getChannel(n)
                    }));
                return null == d ? null : (0, r.jsx)(Da, {
                    id: t,
                    channel: d,
                    goToThread: i,
                    overrideMedia: a,
                    className: o,
                    coords: s,
                    gridCoords: l,
                    observePostVisibilityAnalytics: u,
                    gridSectionBoundaries: c
                })
            }));

            function Da(e) {
                var t = e.id,
                    n = e.channel,
                    a = e.goToThread,
                    s = e.overrideMedia,
                    l = e.className,
                    c = e.coords,
                    u = e.gridCoords,
                    d = e.gridSectionBoundaries,
                    f = e.observePostVisibilityAnalytics,
                    h = (0, m.e7)([M.Z], (function() {
                        return M.Z.getChannel(n.parent_id)
                    })),
                    g = n.id,
                    v = i.useRef(null),
                    b = (0, m.e7)([I.ZP], (function() {
                        return I.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id
                    })),
                    y = (0, na.cl)(n),
                    O = y.firstMessage,
                    x = y.loaded,
                    j = (0, W.mX)({
                        firstMessage: O,
                        formatInline: !1,
                        noStyleAndInteraction: !1
                    }).firstMedia,
                    S = null != s ? s : j,
                    C = (0, W.nP)(n).messageCountText,
                    E = (0, W.J$)(n),
                    _ = E.isNew,
                    T = E.hasUnreads,
                    N = i.useRef(null),
                    A = (0, Ta.Z)({
                        facepileRef: N,
                        goToThread: a,
                        channel: n
                    }),
                    w = A.handleLeftClick,
                    P = A.handleRightClick;
                i.useEffect((function() {
                    null == f || f(v.current, g)
                }), [f, g]);
                var R = (0, m.e7)([Br.Z], (function() {
                        return Br.Z.can(Ee.Plq.MANAGE_MESSAGES, n)
                    })),
                    Z = Xi.QK.useSetting(),
                    L = Xi.cC.useSetting(),
                    D = (0, qi.Z)(L, R),
                    k = (0,
                        ra.aU)(O, h, !1),
                    H = Za(la(c.width - 24), 2),
                    F = H[0],
                    U = H[1],
                    B = (0, W.xw)(n, Vi.z.CREATION_DATE, bt.R6.POSTED_DURATION_AGO),
                    G = (0, rn.NN)(n),
                    V = (null == O ? void 0 : O.blocked) || null == S,
                    z = T ? "header-primary" : "text-muted",
                    K = function(e) {
                        var t, n = e.id,
                            r = e.section,
                            a = e.row,
                            o = e.column,
                            s = e.boundaries,
                            l = pa(i.useState(0 === a && 0 === o ? 0 : -1), 2),
                            c = l[0],
                            u = l[1],
                            d = i.useContext(Ca),
                            f = d.id,
                            h = d.setFocus,
                            m = i.useCallback((function() {
                                return h(n)
                            }), [n, h]);
                        i.useLayoutEffect((function() {
                            return (0, fa.N)(f, (function(e) {
                                u(e === n ? 0 : -1)
                            }))
                        }), [n, f]);
                        return ga(t = {}, va, (0, ha.jb)(f, n)), ga(t, ba, r), ga(t, ya, s[r]), ga(t, "role", "gridcell"), ga(t, "aria-rowindex", a), ga(t, "aria-colindex", o), ga(t, "tabIndex", c), ga(t, "onFocus", m), t
                    }({
                        id: t,
                        row: u.row,
                        column: u.column,
                        section: u.section,
                        boundaries: d
                    }),
                    q = K.onFocus,
                    Y = Ra(K, ["onFocus"]),
                    X = n.isMediaPost();
                return (0, r.jsxs)("li", {
                    ref: v,
                    onClick: w,
                    onFocus: q,
                    onContextMenu: P,
                    className: o()(Aa().container, l, Ia({}, Aa().isOpen, b)),
                    style: Ma({}, c),
                    children: [(0, r.jsx)(p.Clickable, Ma({
                        onClick: w,
                        focusProps: {
                            ringTarget: v
                        },
                        onContextMenu: P,
                        "aria-label": _e.Z.Messages.FORUM_POST_ARIA_LABEL.format({
                            title: n.name,
                            count: C
                        }),
                        className: Aa().focusTarget
                    }, Y)), (0, r.jsxs)("div", {
                        className: Aa().header,
                        children: [(0, r.jsxs)("div", {
                            className: Aa().authorRow,
                            children: [(0, r.jsxs)("div", {
                                className: Aa().rowGroup,
                                children: [(0, r.jsx)(ua.Z, {
                                    channel: n,
                                    message: O
                                }), (0, r.jsx)(p.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    className: Aa().postCreationTimestamp,
                                    children: B
                                })]
                            }), _ ? (0, r.jsx)(it.IG, {
                                className: o()(Aa().newBadge),
                                color: Be.Z.unsafe_rawColors.BRAND_260.css,
                                text: _e.Z.Messages.NEW
                            }) : null]
                        }), (0, r.jsx)(p.HeadingLevel, {
                            children: (0, r.jsx)(p.Heading, {
                                variant: "heading-md/extrabold",
                                className: Aa().title,
                                color: z,
                                style: {
                                    width: "".concat(c.width - 24, "px")
                                },
                                children: G
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: Aa().postBody,
                        children: (0, r.jsx)(p.FocusBlock, {
                            children: V ? (0, r.jsx)(Ga, {
                                channel: n,
                                firstMessage: O,
                                isFirstMessageLoaded: x,
                                containerWidth: c.width,
                                hasUnreads: T
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(Ua, {
                                    mediaAttachments: k,
                                    globalSpoilerRenderSetting: D,
                                    containerWidth: F,
                                    containerHeight: X ? F * (9 / 16) : U,
                                    canAutoPlay: Z,
                                    shouldMaintainAspectRatio: X
                                }), (0, r.jsx)("div", {
                                    className: Aa().tagsRow,
                                    children: (0, r.jsx)(da.ZP, {
                                        channel: n,
                                        tagsClassName: Aa().tagPill
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)("div", {
                        className: Aa().footer,
                        children: (0, r.jsx)(p.FocusBlock, {
                            children: (0, r.jsx)(ka, {
                                channel: n,
                                firstMessage: O,
                                facepileRef: N
                            })
                        })
                    })]
                })
            }

            function ka(e) {
                var t = e.channel,
                    n = e.facepileRef,
                    i = e.firstMessage,
                    a = (0, W.Q)(t),
                    o = null != (null == i ? void 0 : i.reactions) && i.reactions.length > 0;
                return (0, r.jsxs)("div", {
                    className: Aa().forumPostControls,
                    children: [(0, r.jsxs)("div", {
                        className: Aa().controlsGroup,
                        children: [(0, r.jsx)("div", {
                            className: Aa().messageCountContainer,
                            children: (0, r.jsx)(rn.m9, {
                                channel: t,
                                iconSize: 16,
                                showReadState: !0
                            })
                        }), a.length > 0 ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("span", {
                                className: Aa().bullet,
                                children: "•"
                            }), (0, r.jsxs)("div", {
                                className: Aa().typing,
                                children: [(0, r.jsx)(rn.og, {
                                    channel: t,
                                    userIds: a,
                                    facepileRef: n
                                }), (0, r.jsx)("div", {
                                    className: Aa().dots,
                                    children: (0, r.jsx)(p.Dots, {
                                        themed: !0,
                                        dotRadius: 2
                                    })
                                }), (0, r.jsx)(zi.Z, {
                                    channel: t,
                                    className: Aa().typingUsers,
                                    renderDots: !1
                                })]
                            })]
                        }) : null]
                    }), (0, r.jsxs)("div", {
                        className: Aa().controlsGroup,
                        children: [o || null == i ? null : (0, r.jsx)(rn.kZ, {
                            firstMessage: i,
                            channel: t
                        }), null == i ? null : (0, r.jsx)(rn.au, {
                            firstMessage: i,
                            channel: t
                        })]
                    })]
                })
            }
            var Ha = function(e) {
                    return e.preventDefault()
                },
                Fa = i.memo((function(e) {
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, Yi.Yi)(e)
                    })
                })),
                Ua = i.memo((function(e) {
                    var t = e.mediaAttachments,
                        n = e.globalSpoilerRenderSetting,
                        a = e.containerWidth,
                        s = e.containerHeight,
                        l = e.canAutoPlay,
                        c = e.shouldMaintainAspectRatio,
                        u = void 0 !== c && c,
                        d = i.useMemo((function() {
                            return (0, ra.cp)(t)
                        }), [t]),
                        f = d.containsVideo,
                        h = d.containsGif,
                        m = ia.useExperiment({
                            location: "e9f244_1"
                        }, {
                            autoTrackExposure: !1
                        }).strategy,
                        g = i.useMemo((function() {
                            return t.slice(0, 4)
                        }), [t]),
                        p = $n({
                            numAttachments: g.length,
                            containerWidth: a,
                            containerHeight: s
                        }),
                        v = function(e) {
                            var t = e.imageContainerStyles,
                                n = e.containerWidth,
                                r = e.containerHeight,
                                a = i.useRef(Qn(t)),
                                o = i.useRef(n),
                                s = i.useRef(r),
                                l = n > o.current + 100,
                                c = r > s.current + 100;
                            (l || c) && (a.current = Qn(t));
                            return a.current
                        }({
                            imageContainerStyles: p,
                            containerWidth: a,
                            containerHeight: s
                        }),
                        b = i.useMemo((function() {
                            switch (m) {
                                case Vn.CONTAIN:
                                    return Aa().imageContain;
                                case Vn.CONTAIN_STRETCHED:
                                    return Aa().imageContainStretched;
                                default:
                                    return Aa().imageCover
                            }
                        }), [m]),
                        y = i.useMemo((function() {
                            return g.map((function(e, t) {
                                var i, a = Za((0, Ki.Qd)(e, !n), 2),
                                    s = a[0],
                                    c = a[1],
                                    d = (0, Ki.MC)(c),
                                    m = Pa(Ma({}, v[t]), {
                                        src: e.src,
                                        width: e.width,
                                        height: e.height,
                                        alt: null != e.alt && s ? d : e.alt,
                                        onClick: Ha,
                                        shouldRenderAccessory: !h && !f
                                    }),
                                    g = (0, lr.oP)(e.src) ? "".concat(e.src, "?format=png") : e.src,
                                    y = l ? e.src : g;
                                return (0, r.jsxs)("div", {
                                    className: Aa().bodyMediaFrame,
                                    style: p[t],
                                    children: [u ? (0, r.jsx)(Wi.Z, Pa(Ma({}, m), {
                                        src: y,
                                        backgroundSrc: g,
                                        aspectRatio: m.maxWidth / m.maxHeight,
                                        alt: null !== (i = m.alt) && void 0 !== i ? i : "",
                                        className: o()(Aa().mediaPostContainer, Ia({}, Aa().obscured, s)),
                                        imageChildClassName: Aa().mediaPostThumbnail
                                    })) : e.src.startsWith("data:") ? (0, r.jsx)($i.Z, Pa(Ma({}, m), {
                                        className: Aa().mediaContainer,
                                        imageClassName: o()(Aa().thumbnailOverride, Ia({}, Aa().obscured, s))
                                    })) : (0, r.jsx)(Fa, Pa(Ma({}, m), {
                                        autoPlay: l,
                                        containerClassName: Aa().mosaicMediaContainer,
                                        imageClassName: o()(b, Ia({}, Aa().obscured, s)),
                                        responsive: !0
                                    })), s && (0, r.jsx)("div", {
                                        className: Aa().obscuredTagContainer,
                                        children: (0, r.jsx)(aa.Z, {
                                            obscureReason: c,
                                            iconClassname: Aa().obscuredTag
                                        })
                                    })]
                                }, e.src)
                            }))
                        }), [l, h, f, n, p, v, b, g, u]);
                    return (0, r.jsxs)("div", {
                        className: Aa().bodyMedia,
                        style: {
                            width: a,
                            height: s
                        },
                        children: [(0, r.jsx)(r.Fragment, {
                            children: y
                        }), (h || f) && (0, r.jsxs)("div", {
                            className: Aa().mediaIconsRow,
                            children: [f && (0, r.jsx)(ea.Z, {
                                width: "22px",
                                height: "22px",
                                className: Aa().mediaIcon
                            }), h && (0, r.jsx)(Qi.Z, {
                                className: Aa().mediaIcon
                            })]
                        }), t.length > 4 && (0, r.jsx)(Ba, {
                            text: (t.length - 4).toString(),
                            icon: Ji.Z,
                            pillClassName: Aa().moreImagesPill,
                            iconClassName: Aa().moreImagesPillIcon,
                            textClassName: Aa().moreImagesPillText
                        })]
                    })
                }));

            function Ba(e) {
                var t = e.text,
                    n = e.icon,
                    i = e.pillClassName,
                    a = e.iconClassName,
                    o = e.textClassName;
                return (0, r.jsxs)("div", {
                    className: i,
                    children: [(0, r.jsx)(n, {
                        className: a
                    }), (0, r.jsxs)(p.Text, {
                        variant: "text-xs/medium",
                        className: o,
                        children: ["+", t]
                    })]
                })
            }

            function Ga(e) {
                var t = e.channel,
                    n = e.firstMessage,
                    a = e.isFirstMessageLoaded,
                    s = e.containerWidth,
                    l = e.hasUnreads,
                    c = Za(la(s - 24), 2),
                    u = c[0],
                    d = c[1],
                    f = (0, W.mX)({
                        firstMessage: n,
                        formatInline: !1,
                        noStyleAndInteraction: !0
                    }).content,
                    h = (0, da.DM)({
                        channel: t,
                        isNew: !1
                    }).shouldRenderTagsRow,
                    m = i.useMemo((function() {
                        return {
                            width: u,
                            height: d
                        }
                    }), [u, d]),
                    g = l ? Aa().textContentUnread : Aa().textContentRead;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: Aa().contentPreview,
                        style: m,
                        children: [(0, r.jsxs)("div", {
                            className: Aa().content,
                            children: [a && null == n && (0, r.jsx)(p.Text, {
                                variant: "text-sm/normal",
                                color: l ? "header-secondary" : "text-muted",
                                children: _e.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
                            }), a && null != n && (0, r.jsx)(ta.ZP, {
                                message: n,
                                content: f,
                                className: g
                            })]
                        }), (0,
                            r.jsx)("div", {
                            className: o()(Aa().textContentFooter, Ia({}, Aa().noTags, !h)),
                            children: h ? (0, r.jsx)(da.ZP, {
                                channel: t,
                                tagsClassName: Aa().tagPill,
                                className: Aa().row
                            }) : null
                        })]
                    })
                })
            }
            var Va = n(458695),
                za = n.n(Va);

            function Wa() {
                return (0, r.jsx)("div", {
                    className: za().bodyMedia
                })
            }

            function Ka() {
                return (0, r.jsxs)("div", {
                    className: za().content,
                    children: [(0, r.jsxs)("div", {
                        className: za().titleAndMessage,
                        children: [(0, r.jsxs)("div", {
                            className: za().header,
                            children: [(0, r.jsxs)("div", {
                                className: za().tags,
                                children: [(0, r.jsx)("div", {
                                    className: za().tag
                                }), (0, r.jsx)("div", {
                                    className: za().tag
                                }), (0, r.jsx)("div", {
                                    className: za().tag
                                })]
                            }), (0, r.jsx)("div", {
                                className: za().seperator
                            })]
                        }), (0, r.jsx)("div", {
                            className: za().time
                        }), (0, r.jsx)("div", {
                            className: za().title
                        }), (0, r.jsx)("div", {
                            className: za().firstMessage
                        })]
                    }), (0, r.jsxs)("div", {
                        className: za().engagement,
                        children: [(0, r.jsx)("div", {
                            className: za().reactions
                        }), (0, r.jsx)("div", {
                            className: za().replies
                        })]
                    })]
                })
            }

            function qa() {
                return (0, r.jsx)("div", {
                    className: za().card,
                    children: (0,
                        r.jsxs)("div", {
                        className: za().body,
                        children: [(0, r.jsx)(Ka, {}), (0, r.jsx)(Wa, {})]
                    })
                })
            }
            var Ya = n(199150),
                Xa = n.n(Ya);

            function $a(e) {
                var t = e.channel,
                    n = e.closePopout,
                    i = (0, z.H)(t.id),
                    a = i.sortOrder,
                    o = i.layoutType,
                    s = (0, z.v)(),
                    l = t.isMediaChannel(),
                    c = function(e) {
                        (0, X.KR)({
                            guildId: t.guild_id,
                            channelId: t.id,
                            sortOrder: e
                        });
                        s.getState().setSortOrder(t.id, e);
                        n()
                    },
                    u = function(e) {
                        (0, X.Do)({
                            guildId: t.guild_id,
                            channelId: t.id,
                            forumLayout: e
                        });
                        s.getState().setLayoutType(t.id, e);
                        n()
                    };
                return (0, r.jsx)("div", {
                    className: Xa().container,
                    children: (0, r.jsxs)(p.Menu, {
                        navId: "sort-and-view",
                        "aria-label": l ? _e.Z.Messages.MEDIA_CHANNEL_SORT_A11Y_LABEL : _e.Z.Messages.FORUM_SORT_AND_VIEW_AY11_LABEL,
                        hideScroller: !0,
                        onClose: n,
                        onSelect: n,
                        children: [(0, r.jsxs)(p.MenuGroup, {
                            label: _e.Z.Messages.FORUM_CHANNEL_SORT_BY,
                            children: [(0, r.jsx)(p.MenuRadioItem, {
                                id: "sort-by-recent-activity",
                                group: "sort-by",
                                label: _e.Z.Messages.FORUM_CHANNEL_SORT_BY_RECENTLY_ACTIVE,
                                action: function() {
                                    return c(Vi.z.LATEST_ACTIVITY)
                                },
                                checked: a === Vi.z.LATEST_ACTIVITY
                            }), (0, r.jsx)(p.MenuRadioItem, {
                                id: "sort-by-date-posted",
                                group: "sort-by",
                                label: _e.Z.Messages.FORUM_CHANNEL_SORT_BY_DATE_POSTED,
                                action: function() {
                                    return c(Vi.z.CREATION_DATE)
                                },
                                checked: a === Vi.z.CREATION_DATE
                            })]
                        }), !t.isMediaChannel() && (0, r.jsxs)(p.MenuGroup, {
                            label: _e.Z.Messages.FORUM_CHANNEL_VIEW_AS,
                            children: [(0, r.jsx)(p.MenuRadioItem, {
                                id: "view-as-list",
                                group: "view-as",
                                label: _e.Z.Messages.FORUM_CHANNEL_VIEW_AS_LIST,
                                action: function() {
                                    return u(h.X.LIST)
                                },
                                checked: o === h.X.LIST
                            }), (0, r.jsx)(p.MenuRadioItem, {
                                id: "view-as-grid",
                                group: "view-as",
                                label: _e.Z.Messages.FORUM_CHANNEL_VIEW_AS_GRID,
                                action: function() {
                                    return u(h.X.GRID)
                                },
                                checked: o === h.X.GRID
                            })]
                        }), (0, r.jsx)(p.MenuGroup, {
                            children: (0, r.jsx)(p.MenuItem, {
                                id: "reset-all",
                                className: Xa().clearText,
                                label: (0, r.jsx)(p.Text, {
                                    variant: "text-sm/medium",
                                    color: "none",
                                    children: _e.Z.Messages.FORUM_CHANNEL_RESET_ALL
                                }),
                                action: function() {
                                    c(t.getDefaultSortOrder());
                                    u(t.getDefaultLayout())
                                }
                            })
                        })]
                    })
                })
            }
            var Qa = n(516217),
                Ja = n(840474),
                eo = n(833589),
                to = n(841150),
                no = n(791707),
                ro = n(804808),
                io = n(550131),
                ao = n(30778),
                oo = n(103295),
                so = n(652900),
                lo = n(203244),
                co = n(952273),
                uo = n(190624),
                fo = n(841800),
                ho = n(179913),
                mo = n(840922),
                go = n(579722),
                po = n(159689),
                vo = n(776009),
                bo = n(507488),
                yo = n(659773),
                Oo = n(763536),
                xo = n(70145),
                jo = n(674301),
                So = n(524600),
                Co = n(926578);
            var Eo = n(661076),
                _o = n(493254),
                To = n(379364),
                No = n(939198),
                Ao = n(611191),
                wo = n.n(Ao),
                Io = n(220408),
                Mo = n.n(Io);

            function Po(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ro(e, t, n, r, i, a, o) {
                try {
                    var s = e[a](o),
                        l = s.value
                } catch (e) {
                    n(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(r, i)
            }

            function Zo(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Lo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Zo(e, t, n[t])
                    }))
                }
                return e
            }

            function Do(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function ko(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function Ho(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Po(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Po(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Fo = function(e, t) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            o.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && o.label < i[1]) {
                                            o.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2];
                                            o.ops.push(a);
                                            break
                                        }
                                        i[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                a = t.call(e, o)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            };
            var Uo, Bo, Go = (Bo = (Uo = function() {
                return Fo(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, n.e(61029).then(n.t.bind(n, 640002, 19))];
                        case 1:
                            return [2, e.sent().default]
                    }
                }))
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise((function(n, r) {
                    var i = Uo.apply(e, t);

                    function a(e) {
                        Ro(i, n, r, a, o, "next", e)
                    }

                    function o(e) {
                        Ro(i, n, r, a, o, "throw", e)
                    }
                    a(void 0)
                }))
            }), function() {
                return Bo.apply(this, arguments)
            });

            function Vo(e) {
                var t = e.shouldAnimate,
                    n = void 0 !== t && t,
                    i = (0, m.e7)([y.Z], (function() {
                        return y.Z.useReducedMotion
                    }));
                return (0, r.jsxs)("div", {
                    className: wo().startTheConversation,
                    children: [(0, r.jsx)(vo.Z, {
                        importData: Go,
                        shouldAnimate: n && !i,
                        className: wo().wavingHand
                    }), (0, r.jsx)(p.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: _e.Z.Messages.FORUM_START_THE_CONVERSATION_HEADER
                    })]
                })
            }
            const zo = i.memo((function(e) {
                var t = e.className,
                    n = e.threadId,
                    a = e.goToThread,
                    s = e.observePostVisibilityAnalytics,
                    l = i.useRef(null),
                    c = function(e) {
                        var t = e.threadId,
                            n = (0,
                                m.e7)([M.Z], (function() {
                                return M.Z.getChannel(t)
                            }));
                        pn()(null != n, "the thread should not be null here, a store must have missed an update");
                        var r = (0, m.e7)([I.ZP], (function() {
                                return I.ZP.getCurrentSidebarChannelId(n.parent_id) === n.id
                            })),
                            i = (0, na.cl)(n),
                            a = i.loaded,
                            o = i.firstMessage,
                            s = (0, W.mX)({
                                firstMessage: o
                            }),
                            l = s.content,
                            c = s.firstMedia,
                            u = s.firstMediaIsEmbed,
                            d = (0, W.nP)(n),
                            f = d.messageCount,
                            h = d.unreadCount;
                        return {
                            channel: n,
                            isOpen: r,
                            messageCount: f,
                            unreadCount: h,
                            firstMessage: o,
                            firstMessageLoaded: a,
                            firstMedia: c,
                            firstMediaIsEmbed: u,
                            content: l
                        }
                    }({
                        threadId: n
                    }),
                    u = c.channel,
                    f = c.isOpen,
                    h = c.messageCount,
                    g = c.unreadCount,
                    v = c.firstMessage,
                    y = c.firstMessageLoaded,
                    O = c.firstMedia,
                    x = c.firstMediaIsEmbed,
                    j = (0, m.e7)([M.Z], (function() {
                        return M.Z.getChannel(u.parent_id)
                    })),
                    S = (0, b.Z)(),
                    C = S.ref,
                    E = S.height,
                    _ = (0, vt.xH)((function(e) {
                        return e.setCardHeight
                    })),
                    T = Ho(i.useState(162), 2),
                    N = T[0],
                    A = T[1];
                i.useEffect((function() {
                    if (null != E) {
                        _(n, E + 26);
                        A(E)
                    }
                }), [C, E, _, n, A, y]);
                i.useEffect((function() {
                    null == s || s(l.current, n)
                }), [s, n, y]);
                var w = i.useRef(null),
                    P = (0, Ta.Z)({
                        facepileRef: w,
                        goToThread: a,
                        channel: u
                    }),
                    R = P.handleLeftClick,
                    Z = P.handleRightClick,
                    L = (0, d.JA)(n),
                    D = (L.role, L.onFocus),
                    k = ko(L, ["role", "onFocus"]),
                    H = (0, Eo.Z)(D),
                    F = H.handleFocus,
                    U = H.handleBlur;
                return (0, r.jsxs)("div", {
                    ref: l,
                    "data-item-id": n,
                    onClick: R,
                    onContextMenu: Z,
                    className: o()(wo().container, t, Zo({}, wo().isOpen, f)),
                    children: [(0, r.jsx)(p.Clickable, Lo({
                        onClick: R,
                        focusProps: {
                            ringTarget: l
                        },
                        onContextMenu: Z,
                        "aria-label": _e.Z.Messages.FORUM_POST_ARIA_LABEL.format({
                            title: u.name,
                            count: h
                        }),
                        className: wo().focusTarget,
                        onFocus: F,
                        onBlur: U
                    }, k)), (0, r.jsxs)("div", {
                        className: wo().body,
                        children: [(0, r.jsx)("div", {
                            ref: C,
                            className: wo().contentContainer,
                            children: y ? (0, r.jsx)(Wo, {
                                parentChannel: j,
                                channel: u,
                                firstMessage: v,
                                messageCount: h,
                                unreadCount: g,
                                facepileRef: w,
                                onClick: R
                            }) : (0, r.jsx)(Ka, {})
                        }), y ? (null == v ? void 0 : v.blocked) || null == O ? null : (0, r.jsx)(rs, {
                            channel: u,
                            firstMedia: O,
                            firstMessage: v,
                            isEmbed: x,
                            contentHeight: N
                        }) : (0, r.jsx)(Wa, {})]
                    })]
                })
            }));

            function Wo(e) {
                var t = e.parentChannel,
                    n = e.channel,
                    i = e.firstMessage,
                    a = e.messageCount,
                    o = e.unreadCount,
                    s = e.facepileRef,
                    l = e.onClick,
                    c = (0, W.J$)(n).isNew,
                    u = (0, da.DM)({
                        channel: n,
                        isNew: c
                    }).forumPostContainsTags;
                return (0, r.jsxs)("div", {
                    className: wo().content,
                    children: [(0, r.jsxs)("div", {
                        className: wo().titleAndMessage,
                        children: [u && (0, r.jsx)(da.f6, {
                            channel: n,
                            className: wo().tagsRow,
                            tagsClassName: wo().tags
                        }), u && (0, r.jsx)("hr", {
                            className: wo().separator
                        }), (0, r.jsx)(ns, {
                            channel: n,
                            firstMessage: i,
                            isNew: c,
                            containsTags: u
                        }), (0, r.jsx)(p.HeadingLevel, {
                            children: (0, r.jsx)(Xo, {
                                channel: n,
                                onClick: l
                            })
                        }), null != i && (0, r.jsx)(Ko, {
                            firstMessage: i
                        })]
                    }), (0, r.jsxs)("div", {
                        className: wo().engagement,
                        children: [null != i && (0, r.jsx)(Jo, {
                            channel: n,
                            firstMessage: i
                        }), (0, r.jsx)(qo, {
                            parentChannel: t,
                            channel: n,
                            messageCount: a,
                            unreadCount: o,
                            facepileRef: s
                        })]
                    })]
                })
            }

            function Ko(e) {
                var t = e.firstMessage,
                    n = (0, m.e7)([mo.Z], (function() {
                        return null != t && mo.Z.isBlocked(t.author.id)
                    })),
                    a = i.useMemo((function() {
                        return null != (null == t ? void 0 : t.content) && "" !== t.content ? (0,
                            ro.ZP)(t, {
                            formatInline: !0,
                            noStyleAndInteraction: !0,
                            allowHeading: !0,
                            allowList: !0
                        }) : {
                            content: null
                        }
                    }), [t]).content;
                return (0, r.jsx)(p.FocusBlock, {
                    "aria-hidden": !0,
                    className: wo().firstMessageContent,
                    children: n ? _e.Z.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE : null == a ? _e.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED : a
                })
            }

            function qo(e) {
                var t, n = e.parentChannel,
                    i = e.channel,
                    a = e.messageCount,
                    s = e.unreadCount,
                    l = e.facepileRef,
                    c = (0, W.Q)(i),
                    u = (0, na.ZK)(n, i).mostRecentMessage,
                    d = (0, m.e7)([Br.Z], (function() {
                        return Br.Z.can(Ee.Plq.SEND_MESSAGES_IN_THREADS, i)
                    })),
                    f = (0, W.J$)(i).hasUnreads,
                    h = (0, m.e7)([V.Z], (function() {
                        return V.Z.getFirstNoReplyThreadId()
                    })),
                    g = (0, A.Gu)(i),
                    v = (0, io.Uj)(u);
                if (a > 0) {
                    var b;
                    return (0, r.jsxs)(p.Clickable, {
                        onClick: function(e) {
                            if (null != u && null != i.parent_id) {
                                e.stopPropagation();
                                (0, X.B5)({
                                    guildId: i.guild_id,
                                    channelId: i.parent_id,
                                    postId: i.id,
                                    location: {
                                        page: Ee.ZY5.GUILD_CHANNEL,
                                        section: Ee.jXE.FORUM_CHANNEL_POST
                                    }
                                });
                                e.shiftKey ? (0, _.gt)(i, u.id, To.on.BROWSER) : uo.Z.openThreadAsSidebar({
                                    guildId: i.guild_id,
                                    channelId: i.id,
                                    baseChannelId: i.parent_id,
                                    flash: !0,
                                    details: {
                                        type: fo.Ff.THREAD,
                                        initialMessageId: u.id
                                    }
                                })
                            }
                        },
                        children: [(0, r.jsxs)(p.HiddenVisually, {
                            children: ["Latest message:", null != v ? null !== (b = v.nick) && void 0 !== b ? b : _e.Z.Messages.UNKNOWN_USER : null, " ", (t = null == u ? void 0 : u.content, null == t ? "" : t.length > 120 ? "".concat(t.substring(0, 120), "...") : t)]
                        }), (0, r.jsxs)(p.FocusBlock, {
                            className: wo().replies,
                            children: [(0, r.jsx)(es, {
                                messageCount: a,
                                unreadCount: s,
                                iconSize: 16
                            }), c.length > 0 ? (0, r.jsx)(Yo, {
                                channel: i,
                                typingUserIds: c,
                                facepileRef: l
                            }) : (0, r.jsx)(Qo, {
                                channel: i,
                                mostRecentMessage: u,
                                hasUnreads: f
                            })]
                        })]
                    })
                }
                return g ? (0, r.jsx)("div", {
                    className: wo().replies,
                    children: (0, r.jsx)(p.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        className: o()(wo().mostRecentMessageContent, wo().nonUserMessage, wo().lockedMessage),
                        children: _e.Z.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
                    })
                }) : d && 0 === a ? (0, r.jsx)(p.FocusBlock, {
                    "aria-hidden": !0,
                    className: wo().replies,
                    children: c.length > 0 ? (0, r.jsx)(Yo, {
                        channel: i,
                        typingUserIds: c,
                        facepileRef: l
                    }) : (0, r.jsx)(Vo, {
                        shouldAnimate: h === i.id
                    })
                }) : null
            }

            function Yo(e) {
                var t = e.channel,
                    n = e.typingUserIds,
                    i = e.facepileRef;
                return (0, r.jsxs)("div", {
                    className: wo().typing,
                    children: [(0, r.jsx)(rn.og, {
                        channel: t,
                        userIds: n,
                        facepileRef: i
                    }), (0, r.jsx)("div", {
                        className: wo().dots,
                        children: (0, r.jsx)(p.Dots, {
                            themed: !0,
                            dotRadius: 2
                        })
                    }), (0, r.jsx)(zi.Z, {
                        channel: t,
                        className: wo().typingUsers,
                        renderDots: !1
                    })]
                })
            }

            function Xo(e) {
                var t = e.channel,
                    n = e.onClick,
                    a = (0, W.J$)(t).hasUnreads,
                    o = function(e) {
                        var t = (0, m.e7)([So.Z], (function() {
                                return So.Z.getHasSearchResults(e.parent_id)
                            })),
                            n = (0, m.e7)([So.Z], (function() {
                                return So.Z.getSearchQuery(e.parent_id)
                            })),
                            r = i.useMemo((function() {
                                return (0, Ja.nC)(t && null != n ? n : "")
                            }), [t, n]);
                        return i.useMemo((function() {
                            return (0, ro.ZP)({
                                content: e.name,
                                embeds: []
                            }, {
                                postProcessor: r
                            }).content
                        }), [e.name, r])
                    }(t);
                return (0, r.jsx)(p.Heading, {
                    variant: "heading-lg/semibold",
                    color: a ? "header-primary" : "text-muted",
                    className: wo().title,
                    children: (0, r.jsx)(p.Clickable, {
                        onClick: n,
                        children: o
                    })
                })
            }

            function $o(e) {
                var t, n = e.channel,
                    a = e.mostRecentMessage,
                    s = e.hasUnreads,
                    l = (0, io.Uj)(a),
                    c = (0, m.e7)([mo.Z], (function() {
                        return null != a && mo.Z.isBlocked(a.author.id)
                    })),
                    u = (0, m.e7)([Br.Z], (function() {
                        return Br.Z.can(Ee.Plq.MANAGE_MESSAGES, n)
                    })),
                    d = Xi.cC.useSetting(),
                    f = function(e) {
                        var t, n = (0, m.e7)([Co.Z], (function() {
                                return Co.Z.getMessageState(e.id)
                            })),
                            r = n.loaded,
                            i = n.message;
                        return r && (null !== (t = e.messageCount) && void 0 !== t ? t : 0) > 0 && null == i
                    }(n),
                    h = i.useMemo((function() {
                        return null != (null == a ? void 0 : a.content) && "" !== a.content ? (0, ro.ZP)(a, {
                            formatInline: !0,
                            noStyleAndInteraction: !0
                        }) : {
                            content: null
                        }
                    }), [a]).content,
                    g = null != a && (0, no.Z)(a),
                    v = null;
                if (c) v = (0, r.jsx)(p.Text, {
                    className: wo().nonUserMessage,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: _e.Z.Messages.FORUM_POST_BLOCKED_MOST_RECENT_MESSAGE
                });
                else {
                    var b = null == a ? {
                            contentPlaceholder: null,
                            renderedContent: null
                        } : g ? {
                            contentPlaceholder: null,
                            renderedContent: jo.Z.stringify(a, n)
                        } : (0,
                            Oo.f)(a, h, c, o()(wo().mostRecentMessageContent, Wt().inlineFormat, Wt().smallFontSize), {
                            iconClass: wo().messageContentIcon,
                            iconSize: No.WW
                        }),
                        y = b.contentPlaceholder,
                        O = b.renderedContent;
                    v = null != O ? (0, r.jsx)(p.Text, {
                        variant: "text-sm/semibold",
                        color: s ? "header-secondary" : "text-muted",
                        className: wo().mostRecentMessageContent,
                        children: O
                    }) : null != y ? (0, r.jsx)(p.Text, {
                        variant: "text-sm/semibold",
                        color: s ? "header-secondary" : "text-muted",
                        className: wo().mostRecentMessageContent,
                        children: y
                    }) : f ? (0, r.jsx)(p.Text, {
                        variant: "text-sm/semibold",
                        color: s ? "header-secondary" : "text-muted",
                        className: o()(wo().mostRecentMessageContent, wo().nonUserMessage),
                        children: _e.Z.Messages.FORUM_CHANNEL_MOST_RECENT_MESSAGE_DELETED
                    }) : null
                }
                var x = null != l ? null !== (t = l.nick) && void 0 !== t ? t : _e.Z.Messages.UNKNOWN_USER : null,
                    j = (0, co.l)(null == a ? void 0 : a.author, n.id, n.guild_id, !0)(null != l ? l : void 0)((0, r.jsxs)(r.Fragment, {
                        children: [null != x ? x : "", null != a ? ":" : ""]
                    }), n.id);
                return (0, r.jsx)(bo.a.Provider, {
                    value: (0, qi.Z)(d, u),
                    children: (0, r.jsxs)("div", {
                        className: wo().mostRecentMessage,
                        children: [null == x || g ? null : (0, r.jsx)("div", {
                            className: wo().mostRecentMessageAuthor,
                            children: (0, r.jsx)(p.Text, {
                                tag: "span",
                                variant: "text-sm/semibold",
                                children: j
                            })
                        }), (0, r.jsx)(p.FocusBlock, {
                            children: v
                        })]
                    })
                })
            }
            var Qo = i.memo($o);

            function Jo(e) {
                var t = e.channel,
                    n = e.firstMessage,
                    a = (0, m.e7)([M.Z], (function() {
                        return M.Z.getChannel(t.parent_id)
                    })),
                    s = (0, W.Bs)(a),
                    l = (0, ao.Z)(t),
                    c = l.disableReactionUpdates,
                    u = l.disableReactionCreates,
                    d = l.isLurking,
                    f = l.isPendingMember,
                    h = !((0, so.w)(n.reactions, s) >= 0) && !u,
                    g = (0, Qa.Qd)(t.guild_id),
                    p = g.enabled,
                    v = g.hasTwoButtonEntryPoint,
                    y = (0, m.e7)([eo.Z], (function() {
                        return eo.Z.remainingBurstCurrency
                    })),
                    O = (0, b.Z)(),
                    x = O.ref,
                    j = O.width,
                    S = Ho(i.useState(10), 2),
                    C = S[0],
                    E = S[1],
                    _ = Ho(i.useState(!0), 2),
                    T = _[0],
                    N = _[1];
                i.useEffect((function() {
                    if (null != j) {
                        var e = Math.floor((j - 78) / 66);
                        E(e);
                        N(!1)
                    }
                }), [j, n.reactions, s]);
                return (0, r.jsxs)("div", {
                    className: o()(wo().reactionRow, Zo({}, wo().loading, T)),
                    ref: x,
                    children: [h && null != s ? (0, r.jsx)(lo.le, {
                        className: wo().defaultReaction,
                        message: n,
                        readOnly: !1,
                        useChatFontScaling: !0,
                        isLurking: d,
                        isPendingMember: f,
                        emoji: s,
                        type: to.O.NORMAL,
                        hideCount: !0,
                        count: 0,
                        me: !1,
                        burst_count: 0,
                        me_burst: !1
                    }) : null, (0, r.jsx)(so.Z, {
                        message: n,
                        channel: t,
                        disableReactionCreates: u,
                        disableReactionUpdates: c,
                        useChatFontScaling: !0,
                        className: wo().messageReactions,
                        reactionClassName: wo().reaction,
                        hoistReaction: s,
                        forceHideReactionCreates: !0,
                        maxReactions: C
                    }), (0, r.jsxs)("div", {
                        className: wo().addReactionContainer,
                        children: [!u && (0, r.jsx)(oo.X, {
                            type: to.O.NORMAL,
                            message: n,
                            channel: t,
                            useChatFontScaling: !0,
                            className: wo().addReactButton,
                            isForumToolbar: !1
                        }), !u && p && v && (0, r.jsx)(oo.X, {
                            type: to.O.BURST,
                            remainingBurstCurrency: y,
                            message: n,
                            channel: t,
                            useChatFontScaling: !0,
                            isForumToolbar: !1,
                            className: wo().addReactButton
                        })]
                    })]
                })
            }

            function es(e) {
                var t = e.messageCount,
                    n = e.unreadCount,
                    i = e.iconSize;
                return (0, r.jsxs)("div", {
                    className: wo().messageCountBox,
                    children: [(0, r.jsx)("span", {
                        className: wo().messageCountIcon,
                        children: (0, r.jsx)(pe.Z, {
                            width: i,
                            height: i
                        })
                    }), "number" == typeof t ? (0, r.jsx)(go.Z, {
                        value: t,
                        className: wo().messageCountText
                    }) : (0, r.jsx)("div", {
                        className: wo().messageCountText,
                        children: t
                    }), null == n ? null : (0, r.jsx)(p.Text, {
                        className: wo().unreadMessagesCount,
                        variant: "text-sm/semibold",
                        color: "text-brand",
                        children: _e.Z.Messages.FORUM_POST_MESSAGE_COUNT_SHORT_PARENTHETICAL.format({
                            count: n
                        })
                    })]
                })
            }

            function ts(e) {
                var t, n = e.channel,
                    i = (0, z.H)(n.parent_id).sortOrder,
                    a = (0, W.xw)(n, i),
                    o = (0, m.e7)([ho.ZP], (function() {
                        return ho.ZP.lastMessageId(n.id)
                    })),
                    s = null != o ? re.default.extractTimestamp(o) : null,
                    l = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
                    c = null == a ? null : i === Vi.z.CREATION_DATE ? _e.Z.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                        timestamp: a
                    }) : a,
                    u = i === Vi.z.CREATION_DATE && null != l ? _e.Z.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                        timestamp: (0, xo.vc)(J()(l), "LLLL")
                    }) : null != s ? (0, xo.vc)(J()(s), "LLLL") : null;
                return null == u || null == c ? null : (0, r.jsx)(p.Tooltip, {
                    text: u,
                    tooltipClassName: wo().timestampTooltip,
                    "aria-label": _e.Z.Messages.FORUM_POST_CREATED_AT_TOOLTIP_LABEL,
                    children: function(e) {
                        return (0, r.jsx)(p.Text, Do(Lo({
                            variant: "text-xs/medium",
                            color: "header-secondary"
                        }, e), {
                            children: c
                        }))
                    }
                })
            }

            function ns(e) {
                var t = e.channel,
                    n = e.firstMessage,
                    i = e.isNew,
                    a = e.containsTags,
                    o = t.hasFlag(Si.zZ.PINNED),
                    s = (0, m.e7)([mo.Z], (function() {
                        return null != n && mo.Z.isBlocked(n.author.id)
                    }));
                return (0, r.jsxs)("div", {
                    className: wo().header,
                    children: [!a && o && (0, r.jsx)("div", {
                        className: wo().pinIcon,
                        children: (0, r.jsx)(p.Tooltip, {
                            text: _e.Z.Messages.PINNED_POST,
                            children: function(e) {
                                return (0, r.jsx)(yo.Z, Do(Lo({}, e), {
                                    width: da.qS,
                                    height: da.qS,
                                    color: "white"
                                }))
                            }
                        })
                    }), !s && (0, r.jsx)(ua.Z, {
                        channel: t,
                        message: n
                    }), (0, r.jsx)(ts, {
                        channel: t
                    }), i && (0, r.jsx)(it.IG, {
                        className: wo().newBadge,
                        color: Be.Z.unsafe_rawColors.BRAND_260.css,
                        text: _e.Z.Messages.NEW
                    })]
                })
            }

            function rs(e) {
                var t = e.channel,
                    n = e.firstMedia,
                    i = e.firstMessage,
                    a = e.isEmbed,
                    s = e.contentHeight,
                    l = (0, m.e7)([L.Z], (function() {
                        return L.Z.isFocused()
                    })),
                    c = _o.LR.test(n.src),
                    u = Xi.QK.useSetting(),
                    d = n.src,
                    f = n.width,
                    h = n.height,
                    g = n.alt,
                    v = Ho((0, Ki.hL)({
                        media: n,
                        channel: t
                    }), 2),
                    b = v[0],
                    y = v[1],
                    O = (0, Ki.MC)(y);
                return (0, r.jsx)(p.FocusBlock, {
                    enabled: !0,
                    children: (0, r.jsxs)("div", {
                        className: o()(wo().bodyMedia, Zo({}, Mo().embedFull, a)),
                        style: {
                            height: s,
                            borderColor: (0, ra.dE)(i, b)
                        },
                        onClick: function(e) {
                            return e.stopPropagation()
                        },
                        children: [d.startsWith("data:") ? (0, r.jsx)(po.Z, {
                            src: d,
                            width: f,
                            height: h,
                            minWidth: 143,
                            minHeight: s,
                            maxHeight: s,
                            alt: null != g && b ? O : g,
                            imageClassName: o()(Zo({}, wo().obscured, b))
                        }) : (0, Yi.Yi)({
                            src: d,
                            width: f,
                            height: h,
                            minWidth: 143,
                            minHeight: s,
                            maxHeight: s,
                            alt: null != g && b ? O : g,
                            autoPlay: u,
                            animated: c && !b && l,
                            imageContainerClassName: o()(Zo({}, wo().obscured, b))
                        }), b && (0, r.jsx)(aa.Z, {
                            iconClassname: wo().obscuredTag,
                            obscureReason: y
                        })]
                    })
                })
            }
            n(240025);
            var is = n(151716),
                as = [];

            function os() {
                return as.join(" -> ")
            }
            var ss = new is.Z("Flux"),
                ls = function(e) {
                    return e()
                },
                cs = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this.changedStores = new Set;
                        this.reactChangedStores = new Set;
                        this.changeSentinel = 0;
                        this.isBatchEmitting = !1;
                        this.isDispatching = !1;
                        this.isPaused = !1;
                        this.pauseTimer = null
                    }
                    var t = e.prototype;
                    t.destroy = function() {
                        this.changedStores.clear();
                        this.reactChangedStores.clear();
                        ls = function(e) {
                            return e()
                        }
                    };
                    t.injectBatchEmitChanges = function(e) {
                        ls = e
                    };
                    t.pause = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = this;
                        this.isPaused = !0;
                        null !== this.pauseTimer && clearTimeout(this.pauseTimer);
                        null !== e && (this.pauseTimer = setTimeout((function() {
                            t.pauseTimer = null;
                            t.resume()
                        }), e))
                    };
                    t.resume = function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            t = this;
                        clearTimeout(this.pauseTimer);
                        this.pauseTimer = null;
                        if (this.isPaused) {
                            this.isPaused = !1;
                            e && this.changedStores.size > 0 && setImmediate((function() {
                                return t.emit()
                            }))
                        }
                    };
                    t.batched = function(e) {
                        if (this.isPaused) return e();
                        try {
                            this.isPaused = !0;
                            return e()
                        } finally {
                            this.resume(!1);
                            this.emit()
                        }
                    };
                    t.emit = function() {
                        var e = this;
                        this.isBatchEmitting || this.isPaused || ls((function() {
                            try {
                                e.isBatchEmitting = !0;
                                e.changeSentinel++;
                                for (var t = 0; e.changedStores.size > 0;) {
                                    if (++t > 100) {
                                        ss.error("LastFewActions", os());
                                        throw Error("change emit loop detected, aborting")
                                    }
                                    e.emitNonReactOnce()
                                }
                                for (; e.reactChangedStores.size > 0;) {
                                    if (++t > 100) {
                                        ss.error("LastFewActions", os());
                                        throw Error("react change emit loop detected, aborting")
                                    }
                                    e.emitReactOnce()
                                }
                            } finally {
                                e.isBatchEmitting = !1
                            }
                        }))
                    };
                    t.getChangeSentinel = function() {
                        return this.changeSentinel
                    };
                    t.getIsPaused = function() {
                        return this.isPaused
                    };
                    t.markChanged = function(e) {
                        e._changeCallbacks.hasAny() && this.changedStores.add(e);
                        e._reactChangeCallbacks.hasAny() && this.reactChangedStores.add(e);
                        this.isBatchEmitting || this.isDispatching || this.isPaused || this.emit()
                    };
                    t.emitNonReactOnce = function() {
                        var e = this,
                            t = Date.now(),
                            n = this.changedStores;
                        this.changedStores = new Set;
                        n.forEach((function(t) {
                            0;
                            t._changeCallbacks.invokeAll();
                            e.changedStores.delete(t)
                        }));
                        var r = Date.now();
                        r - t > 100 && ss.log("Slow batch emitChanges took ".concat(r - t, "ms recentActions:"), os())
                    };
                    t.emitReactOnce = function() {
                        var e = this,
                            t = Date.now(),
                            n = this.reactChangedStores;
                        this.reactChangedStores = new Set;
                        n.forEach((function(t) {
                            0;
                            t._reactChangeCallbacks.invokeAll();
                            e.reactChangedStores.delete(t)
                        }));
                        var r = Date.now();
                        r - t > 100 && ss.log("Slow batch emitReactChanges took ".concat(r - t, "ms recentActions:"), os())
                    };
                    return e
                }();
            const us = new cs;
            var ds = function() {
                    function e(t, n) {
                        var r = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this.handleStoreChange = function() {
                            var e = us.getChangeSentinel();
                            if (r.storeVersionHandled !== e) {
                                r.changeCallback();
                                r.storeVersionHandled = e
                            }
                        };
                        this.stores = t;
                        this.changeCallback = n
                    }
                    var t = e.prototype;
                    t.attach = function(e) {
                        var t = this;
                        this.stores.forEach((function(n, r) {
                            if (null == n) throw new Error("".concat(e, " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ").concat(r, " stores before error."));
                            n.addReactChangeListener(t.handleStoreChange)
                        }))
                    };
                    t.detach = function() {
                        var e = this;
                        this.stores.forEach((function(t) {
                            return t.removeReactChangeListener(e.handleStoreChange)
                        }))
                    };
                    return e
                }(),
                fs = (n(559280), n(803996)),
                hs = n.n(fs),
                ms = n(244698);
            n(103539), n(850343), n(150736);
            new is.Z("Flux");
            new Set(["APP_STATE_UPDATE", "CONNECTION_CLOSED", "CONNECTION_OPEN", "CONNECTION_RESUMED", "LOGIN_SUCCESS", "LOGIN", "LOGOUT", "MESSAGE_SEND_FAILED", "PUSH_NOTIFICATION_CLICK", "RESET_CONNECTION", "SESSION_START", "UPLOAD_FAIL"]), new is.Z("Flux");
            var gs = n(298784),
                ps = n.n(gs),
                vs = n(164497);
            var bs = function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.listeners = new Set;
                    this.add = function(e) {
                        t.listeners.add(e)
                    };
                    this.remove = function(e) {
                        t.listeners.delete(e)
                    };
                    this.addConditional = function(e) {
                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (!n || !1 !== e()) {
                            var r = function() {
                                !1 === e() && t.remove(r)
                            };
                            t.add(r)
                        }
                    }
                }
                var t = e.prototype;
                t.has = function(e) {
                    return this.listeners.has(e)
                };
                t.hasAny = function() {
                    return this.listeners.size > 0
                };
                t.invokeAll = function() {
                    this.listeners.forEach((function(e) {
                        return e()
                    }))
                };
                return e
            }();

            function ys(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Os(e) {
                return function(e) {
                    if (Array.isArray(e)) return ys(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ys(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ys(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var xs, js = [],
                Ss = !1,
                Cs = new Promise((function(e) {
                    xs = function() {
                        e();
                        xs = null
                    }
                }));
            var Es = function() {
                function e(t, n, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this._changeCallbacks = new bs;
                    this._reactChangeCallbacks = new bs;
                    this._isInitialized = !1;
                    this.addChangeListener = this._changeCallbacks.add;
                    this.addConditionalChangeListener = this._changeCallbacks.addConditional;
                    this.removeChangeListener = this._changeCallbacks.remove;
                    this.addReactChangeListener = this._reactChangeCallbacks.add;
                    this.removeReactChangeListener = this._reactChangeCallbacks.remove;
                    this._dispatcher = t;
                    this._dispatchToken = this._dispatcher.createToken();
                    null !== n && this.registerActionHandlers(null != n ? n : {}, r);
                    js.push(this);
                    0;
                    Ss && this.initializeIfNeeded()
                }
                var t = e.prototype;
                t.registerActionHandlers = function(e, t) {
                    var n = this;
                    this._dispatcher.register(this.getName(), e, (function(e) {
                        if (n._changeCallbacks.hasAny() || n._reactChangeCallbacks.hasAny()) {
                            us.markChanged(n);
                            us.getIsPaused() && null != n._mustEmitChanges && n._mustEmitChanges(e) && us.resume(!1)
                        } else 0
                    }), t, this._dispatchToken)
                };
                t.getName = function() {
                    var e;
                    return null !== (e = this.constructor.displayName) && void 0 !== e ? e : this.constructor.name
                };
                t.initializeIfNeeded = function() {
                    if (!this._isInitialized) {
                        var e = Date.now();
                        this.initialize();
                        this._isInitialized = !0;
                        var t = Date.now() - e;
                        t > 5 && ms.Z.mark("🦥", this.getName() + ".initialize()", t)
                    }
                };
                t.initialize = function() {};
                t.syncWith = function(e, t, n) {
                    var r = this;
                    this.waitFor.apply(this, Os(e));
                    var i = 0,
                        a = function() {
                            if (i !== us.getChangeSentinel()) {
                                i = us.getChangeSentinel();
                                !1 !== t() && r.emitChange()
                            }
                        };
                    a = function(e, t) {
                        var n = null;
                        return 0 === e ? function() {
                            clearImmediate(n);
                            n = setImmediate(t)
                        } : function() {
                            null == n && (n = setTimeout((function() {
                                try {
                                    t()
                                } finally {
                                    n = null
                                }
                            }), e))
                        }
                    }(null != n ? n : 0, a);
                    e.forEach((function(e) {
                        return e.addChangeListener(a)
                    }))
                };
                t.waitFor = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r = this,
                        i = t.map((function(e, t) {
                            hs()(null != e, "Store.waitFor(...) called with null Store at index ".concat(t, " for store ").concat(r.getName()));
                            if (null != e._dispatcher) {
                                hs()(e._dispatcher === r._dispatcher, "Stores belong to two separate dispatchers.");
                                return e.getDispatchToken()
                            }
                            return null
                        }));
                    this._dispatcher.addDependencies(this.getDispatchToken(), i.filter((function(e) {
                        return null != e
                    })))
                };
                t.emitChange = function() {
                    us.markChanged(this)
                };
                t.getDispatchToken = function() {
                    return this._dispatchToken
                };
                t.mustEmitChanges = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
                        return !0
                    };
                    this._mustEmitChanges = e
                };
                e.initialize = function() {
                    Ss = !0;
                    js.forEach((function(e) {
                        return e.initializeIfNeeded()
                    }));
                    null != xs && xs()
                };
                e.destroy = function() {
                    js.length = 0;
                    us.destroy()
                };
                e.getAll = function() {
                    return js
                };
                return e
            }();
            Es.initialized = Cs;

            function _s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ts(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ns(e) {
                Ns = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return Ns(e)
            }

            function As(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && Ms(e, t)
            }

            function ws(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function Is(e, t) {
                return !t || "object" !== Rs(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Ms(e, t) {
                Ms = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return Ms(e, t)
            }

            function Ps(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _s(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Rs = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Zs(e) {
                var t = function() {
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
                    var n, r = Ns(e);
                    if (t) {
                        var i = Ns(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Is(this, n)
                }
            }
            var Ls = {
                    _state: void 0,
                    _version: void 0
                },
                Ds = null,
                ks = function(e) {
                    As(n, e);
                    var t = Zs(n);

                    function n(e, r) {
                        Ts(this, n);
                        var i;
                        (i = t.call(this, e, r))._version = null == i.getClass().migrations ? 0 : i.getClass().migrations.length;
                        i.callback = function(e) {
                            var t = i.getClass().persistKey;
                            i.persist();
                            n._writePromises.delete(t);
                            n._writeResolvers.delete(t);
                            e()
                        };
                        i.throttledCallback = ps().throttle((function(e) {
                            return i.callback(e)
                        }), i.getClass().throttleDelay, {
                            leading: !1
                        });
                        if ("string" != typeof i.getClass().persistKey) throw new Error("".concat(i.getClass().name, " initialized without a `persistKey`. Add one so we know where to save your stuff!"));
                        if ("function" != typeof i.initialize) throw new Error("".concat(i.getClass().name, " initialized without an `initialize` method. Add one that accepts the initial cached state."));
                        if ("function" != typeof i.getState) throw new Error("".concat(i.getClass().name, " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work."));
                        i.addChangeListener((function() {
                            return i.asyncPersist()
                        }));
                        return i
                    }
                    var r = n.prototype;
                    r.getClass = function() {
                        return this.constructor
                    };
                    r.initializeFromState = function(e) {
                        this.initialize(e) && this.asyncPersist();
                        if (this._isInitialized) this.emitChange();
                        else {
                            n.allPersistKeys.add(this.getClass().persistKey);
                            this._isInitialized = !0
                        }
                    };
                    r.initializeIfNeeded = function() {
                        if (!this._isInitialized) {
                            var e = Date.now();
                            n.allPersistKeys.add(this.getClass().persistKey);
                            var t = n.migrateAndReadStoreState(this.getClass().persistKey, this.getClass().migrations),
                                r = t.state,
                                i = t.requiresPersist;
                            this.initialize(r) && this.asyncPersist();
                            i && this.asyncPersist();
                            this._isInitialized = !0;
                            var a = Date.now() - e;
                            a > 5 && ms.Z.mark("🦥", this.getName() + ".initialize()", a)
                        }
                    };
                    r.asyncPersist = function() {
                        var e = this,
                            t = this.getClass(),
                            r = t.persistKey,
                            i = t.disableWrite,
                            a = t.throttleDelay;
                        if (n.disableWrites || i) return Promise.resolve(!1);
                        var o = n._writePromises.get(r);
                        if (null != o) return o;
                        o = new Promise((function(t) {
                            var i = a > 0 ? function() {
                                return e.throttledCallback(t)
                            } : function() {
                                return e.callback(t)
                            };
                            n._writeResolvers.set(r, [t, requestIdleCallback(i, {
                                timeout: 500
                            })])
                        }));
                        n._writePromises.set(r, o);
                        return o
                    };
                    r.persist = function() {
                        var e = this.getClass().persistKey,
                            t = this.getState(),
                            n = this._version;
                        vs.Z.set(e, {
                            _state: t,
                            _version: n
                        })
                    };
                    r.clear = function() {
                        var e = this.getClass().persistKey;
                        vs.Z.remove(e)
                    };
                    n.clearAll = function(e) {
                        Ds = e;
                        null == n._clearAllPromise && (n._clearAllPromise = new Promise((function(t) {
                            requestIdleCallback((function() {
                                n.clearPersistQueue(e);
                                n.allPersistKeys.forEach((function(t) {
                                    n.shouldClear(e, t) && vs.Z.remove(t)
                                }));
                                Es.getAll().forEach((function(t) {
                                    if (t instanceof n && n.shouldClear(e, t.getClass().persistKey)) {
                                        t._isInitialized = !1;
                                        t.initializeIfNeeded()
                                    }
                                }));
                                n._clearAllPromise = null;
                                t()
                            }), {
                                timeout: 500
                            })
                        })));
                        return n._clearAllPromise
                    };
                    n.shouldClear = function(e, t) {
                        var r;
                        return !(null === (r = e.omit) || void 0 === r ? void 0 : r.includes(t)) && ("all" === e.type || "user-data-only" === e.type && !n.userAgnosticPersistKeys.has(t))
                    };
                    n.clearPersistQueue = function(e) {
                        n._writeResolvers.forEach((function(t, r) {
                            var i = Ps(t, 2),
                                a = i[0],
                                o = i[1];
                            if (n.shouldClear(e, r)) {
                                n._writePromises.delete(r);
                                n._writeResolvers.delete(r);
                                cancelIdleCallback(o);
                                a(!1)
                            }
                        }));
                        n._writePromises.clear();
                        n._writeResolvers.clear()
                    };
                    n.getAllStates = function() {
                        return Promise.all(Array.from(n._writePromises.values())).then((function() {
                            var e = {};
                            n.allPersistKeys.forEach((function(t) {
                                var n;
                                e[t] = (null !== (n = vs.Z.get(t)) && void 0 !== n ? n : Ls)._state
                            }));
                            return e
                        }))
                    };
                    n.initializeAll = function(e) {
                        Es.getAll().forEach((function(t) {
                            if (t instanceof n) {
                                var r = t.getClass().persistKey;
                                if (!e.hasOwnProperty(r)) return;
                                t.initializeFromState(e[r])
                            }
                        }))
                    };
                    n.destroy = function() {
                        Ds = null;
                        Es.destroy();
                        n.clearPersistQueue({
                            type: "all"
                        });
                        n.allPersistKeys.clear();
                        n.userAgnosticPersistKeys.clear()
                    };
                    n.migrateAndReadStoreState = function(e, t) {
                        if (null != Ds && n.shouldClear(Ds, e)) {
                            vs.Z.remove(e);
                            return {
                                state: void 0,
                                requiresPersist: !1
                            }
                        }
                        var r = null != n._clearAllPromise ? null : vs.Z.get(e),
                            i = null != r ? r : Ls,
                            a = i._state,
                            o = i._version,
                            s = ws(i, ["_state", "_version"]),
                            l = null == t ? 0 : t.length;
                        if (0 !== l && o !== l && null != t) {
                            var c = null != o ? o : 0,
                                u = a;
                            null == o && (u = s);
                            for (; c < l;) {
                                u = (0, t[c])(u);
                                c++
                            }
                            return {
                                state: u,
                                requiresPersist: !0
                            }
                        }
                        return Object.values(s).length > 0 ? {
                            state: s,
                            requiresPersist: !0
                        } : {
                            state: a,
                            requiresPersist: !1
                        }
                    };
                    return n
                }(Es);
            ks.allPersistKeys = new Set;
            ks.userAgnosticPersistKeys = new Set;
            ks._writePromises = new Map;
            ks._writeResolvers = new Map;
            ks.disableWrites = !1;
            ks.disableWrite = !1;
            ks.throttleDelay = 0;
            var Hs = n(972880);

            function Fs(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Us(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Fs(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fs(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Bs(e, t) {
                return e === t
            }

            function Gs(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bs,
                    a = (0, i.useRef)({
                        stores: e,
                        areStatesEqual: r,
                        getStateFromStores: t,
                        prevDeps: void 0,
                        state: void 0
                    }),
                    o = a.current;
                0;
                var s = o.state;
                if (null == n || !(0, Hs.E)(n, o.prevDeps)) {
                    var l = t();
                    null != s && r(s, l) || (s = l)
                }(0, i.useLayoutEffect)((function() {
                    o.getStateFromStores = t;
                    o.prevDeps = n;
                    o.state = s
                }));
                var c = Us((0, i.useState)(null), 2),
                    u = c[1];
                (0, i.useLayoutEffect)((function() {
                    var t = function() {
                        var e = o.getStateFromStores();
                        if (!r(o.state, e)) {
                            o.state = e;
                            u({})
                        }
                    };
                    t();
                    var n = new ds(e, t);
                    n.attach("useStateFromStores");
                    return function() {
                        return n.detach()
                    }
                }), []);
                return s
            }

            function Vs(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function zs(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Ws(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function Ks() {
                return Promise.resolve()
            }

            function qs(e) {
                var t = e.channel,
                    n = e.closePopout,
                    a = e.setPopoutRef,
                    o = (0,
                        W.Vm)(t),
                    s = (0, z.H)(t.id).tagFilter,
                    l = (0, z.v)(),
                    c = Gs([y.Z], (function() {
                        return y.Z.keyboardModeEnabled
                    })),
                    f = i.useCallback((function(e) {
                        (0, X.e7)({
                            guildId: t.guild_id,
                            channelId: t.id,
                            tagId: e,
                            filterTagIds: Array.from(s),
                            added: !s.has(e),
                            location: {
                                page: Ee.ZY5.GUILD_CHANNEL,
                                section: Ee.jXE.FORUM_CHANNEL_HEADER,
                                object: Ee.qAy.CHANNEL_TAG
                            }
                        });
                        l.getState().toggleTagFilter(t.id, e)
                    }), [t, s, l]),
                    h = i.useCallback((function() {
                        l.getState().setTagFilter(t.id, new Set);
                        c || n()
                    }), [l, t.id, c, n]),
                    m = (0, u.ZP)({
                        id: "".concat(t.id, "-all-tags-dropdown-navigator"),
                        isEnabled: !0,
                        wrap: !0,
                        scrollToStart: Ks,
                        scrollToEnd: Ks
                    }),
                    g = i.useRef(null);
                i.useEffect((function() {
                    requestAnimationFrame((function() {
                        if (null != g.current) {
                            var e = g.current.querySelector(".".concat(oi().tag));
                            null != e && e.focus()
                        }
                    }))
                }), []);
                return (0, r.jsxs)(p.Dialog, {
                    ref: a,
                    "aria-label": _e.Z.Messages.FORUM_TAG_FILTER_HEADER,
                    className: oi().container,
                    children: [(0, r.jsx)("div", {
                        className: oi().header,
                        children: (0, r.jsxs)("div", {
                            className: oi().headerLeft,
                            children: [(0,
                                r.jsx)(p.Heading, {
                                color: "interactive-normal",
                                variant: "text-xs/bold",
                                className: oi().headerText,
                                children: _e.Z.Messages.FORUM_TAG_POST_SELECT
                            }), (0, r.jsx)("div", {
                                className: oi().countContainer,
                                children: (0, r.jsx)(p.Text, {
                                    className: oi().countText,
                                    color: "none",
                                    variant: "text-xs/medium",
                                    children: s.size
                                })
                            })]
                        })
                    }), (0, r.jsx)(d.bG, {
                        navigator: m,
                        children: (0, r.jsx)(d.SJ, {
                            children: function(e) {
                                var t = e.ref,
                                    n = Ws(e, ["ref"]);
                                return (0, r.jsx)("div", zs(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))));
                                        r.forEach((function(t) {
                                            Vs(e, t, n[t])
                                        }))
                                    }
                                    return e
                                }({
                                    ref: function(e) {
                                        t.current = e;
                                        g.current = e
                                    }
                                }, n), {
                                    className: oi().tagContainer,
                                    children: o.map((function(e) {
                                        return (0, r.jsx)(ci.ZP, {
                                            className: oi().tag,
                                            tag: e,
                                            selected: s.has(e.id),
                                            onClick: function() {
                                                return f(e.id)
                                            }
                                        }, e.id)
                                    }))
                                }))
                            }
                        })
                    }), (0, r.jsx)("div", {
                        className: oi().separator
                    }), (0, r.jsx)(p.Button, {
                        look: p.Button.Looks.LINK,
                        size: p.Button.Sizes.MIN,
                        color: p.Button.Colors.CUSTOM,
                        className: oi().clear,
                        "aria-label": _e.Z.Messages.FORUM_CLEAR_ALL,
                        onClick: h,
                        children: (0, r.jsx)(p.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: _e.Z.Messages.FORUM_CLEAR_ALL
                        })
                    })]
                })
            }

            function Ys(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Xs(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function $s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Xs(e, t, n[t])
                    }))
                }
                return e
            }

            function Qs(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Js(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function el(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ys(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ys(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var tl = .5;

            function nl(e) {
                var t = e.channel,
                    n = e.guild,
                    i = e.sidebarState;
                return (0, r.jsx)(vt.oL, {
                    createStore: function() {
                        return (0, vt.NU)(t)
                    },
                    children: (0, r.jsx)(ul, {
                        channel: t,
                        guild: n,
                        sidebarState: i
                    })
                }, t.id)
            }
            var rl = new oa({
                minWidth: 320,
                maxWidth: 450,
                gap: 16
            });

            function il(e) {
                return "forum-grid-header-section-".concat(e)
            }
            var al = function(e, t, n) {
                return 0 === e ? 0 : ca(n)
            };

            function ol(e) {
                var t = e.itemRole,
                    n = e.coords,
                    i = e.section;
                return (0, r.jsx)("div", {
                    className: o()(sn().card, sn().archivedDividerRow, sn().columnsSpan),
                    style: n,
                    "data-item-role": t,
                    children: (0, r.jsx)("div", {
                        className: sn().emptyMainCard,
                        children: (0, r.jsx)(p.Heading, {
                            variant: "eyebrow",
                            className: sn().archivedDivider,
                            id: il(i),
                            children: _e.Z.Messages.FORUM_SECTION_ARCHIVED
                        })
                    })
                }, "section-divider")
            }

            function sl(e) {
                var t = e.section,
                    n = e.coords,
                    i = e.key,
                    a = e.isShowingSearchResult,
                    o = e.hasActiveThreads;
                return function() {
                    return 2 === t && !a && o ? (0, r.jsx)(ol, {
                        section: t,
                        coords: null == n ? void 0 : Qs($s({}, n), {
                            position: "absolute"
                        }),
                        itemRole: "section"
                    }, i) : null
                }
            }

            function ll(e, t) {
                return "card-".concat(e, "-").concat(t)
            }

            function cl(e) {
                if ("string" == typeof e) {
                    var t = e.match(/card-{\d+}-({\d+})$/);
                    return null == t ? null : t[1]
                }
                return null
            }

            function ul(e) {
                var t = e.channel,
                    n = e.sidebarState,
                    a = (0, vt.xH)((function(e) {
                        return {
                            editorHeight: e.editorHeight,
                            editorAdditionRowHeight: e.editorAdditionRowHeight,
                            listViewCardHeights: e.listViewCardHeights,
                            formOpen: e.formOpen,
                            cardHeightVersion: e.cardHeightVersion
                        }
                    }), c.Z),
                    s = a.editorHeight,
                    l = a.editorAdditionRowHeight,
                    g = a.listViewCardHeights,
                    b = a.formOpen,
                    O = function(e) {
                        var t = (0, z.H)(e.id),
                            n = t.sortOrder,
                            r = t.tagFilter,
                            i = t.layoutType,
                            a = (0, W.vP)({
                                channel: e,
                                sortOrder: n,
                                tagFilter: r,
                                shouldAutomaticallyAck: !0
                            }),
                            o = (0, m.e7)([T.Z], (function() {
                                return !T.Z.hasLoaded(e.guild_id)
                            })),
                            s = (0, N.qQ)(e, n, r),
                            l = s.threadIds,
                            c = s.canLoadMore,
                            u = s.loadMore,
                            d = s.loading,
                            f = (0, W.XZ)({
                                channelId: e.id
                            }),
                            h = f.searchResults,
                            g = f.isSearchLoading,
                            p = o || d || g;
                        (0, W.ES)(e, n, r);
                        return {
                            activeThreadIds: a,
                            archivedThreadIds: l,
                            searchResults: h,
                            canLoadMore: c,
                            loadMore: u,
                            loading: p,
                            archivedThreadsLoading: d,
                            activeThreadsLoading: o,
                            isSearchLoading: g,
                            layoutType: i
                        }
                    }(t),
                    x = O.activeThreadIds,
                    j = O.archivedThreadIds,
                    S = O.searchResults,
                    A = O.canLoadMore,
                    R = O.loadMore,
                    Z = O.activeThreadsLoading,
                    L = O.archivedThreadsLoading,
                    D = O.loading,
                    k = O.isSearchLoading,
                    H = O.layoutType,
                    F = x.length > 0,
                    U = F || j.length > 0,
                    V = (0, C.Z)(t),
                    K = (0, z.H)(t.id).tagFilter;
                (0, W.ku)(t, K, b);
                var Q = (0, W.jR)(t),
                    J = (0, W.eZ)(t),
                    ee = i.useRef(null),
                    te = function(e) {
                        var t = e.guildId,
                            n = e.channelId,
                            r = e.scrollerRef;
                        Y.useForumChannelSeenManager({
                            guildId: t,
                            channelId: n
                        });
                        var a = i.useRef(null),
                            o = i.useCallback((function(e, t) {
                                var n = !0,
                                    r = !1,
                                    i = void 0;
                                try {
                                    for (var a, o = t[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                                        var s = a.value,
                                            l = s.target.dataset.itemId;
                                        if (null == l) return;
                                        var c = Date.now();
                                        s.intersectionRatio >= tl ? (0, q.rj)(e, l, c) : (0, q.Ct)(e, l, c)
                                    }
                                } catch (e) {
                                    r = !0;
                                    i = e
                                } finally {
                                    try {
                                        n || null == o.return || o.return()
                                    } finally {
                                        if (r) throw i
                                    }
                                }
                            }), []);
                        i.useEffect((function() {
                            var e, t = null === (e = r.current) || void 0 === e ? void 0 : e.getScrollerNode();
                            if (null != t) {
                                a.current = new IntersectionObserver((function(e) {
                                    return o(n, e)
                                }), {
                                    root: t,
                                    rootMargin: "0px 100000px 0px 100000px",
                                    threshold: tl
                                });
                                return function() {
                                    var e;
                                    null === (e = a.current) || void 0 === e || e.disconnect();
                                    a.current = null
                                }
                            }
                        }), [n, o, r]);
                        var s = i.useCallback((function(e, t) {
                            var r;
                            null != e ? null === (r = a.current) || void 0 === r || r.observe(e) : (0, q.Ct)(n, t, Date.now())
                        }), [n]);
                        return {
                            observePostVisibilityAnalytics: s
                        }
                    }({
                        scrollerRef: ee,
                        channelId: t.id,
                        guildId: t.guild_id
                    }).observePostVisibilityAnalytics,
                    ne = H === h.X.GRID,
                    re = null != S,
                    ie = i.useRef(null),
                    ae = ji(),
                    oe = ae.containerRef,
                    se = ae.containerWidth;
                i.useEffect((function() {
                    return function() {
                        null != t.id && G.Z.clearForumSearch(t.id)
                    }
                }), [t.id]);
                var le = i.useMemo((function() {
                        return ne ? rl.getRenderOptions(se) : sa
                    }), [ne, se]).columns,
                    ce = i.useMemo((function() {
                        return D ? Math.round((window.innerHeight - 200) / 118) : 0
                    }), [D]),
                    ue = i.useMemo((function() {
                        var e = window.innerHeight,
                            t = Math.ceil(e / ca(rl.getWidth(se))) * le;
                        return Z ? t : 0
                    }), [se, le, Z]),
                    de = i.useMemo((function() {
                        var e = window.innerHeight,
                            t = Math.ceil(e / ca(rl.getWidth(se))) * le;
                        return L ? t : 0
                    }), [se, le, L]),
                    fe = i.useMemo((function() {
                        var e = window.innerHeight,
                            t = Math.ceil(e / ca(rl.getWidth(se))) * le;
                        return k && re ? t : 0
                    }), [se, le, k, re]),
                    he = i.useMemo((function() {
                        return ne ? !Q && re ? [1, 0] : J ? re ? [1, S.length + fe, 0] : [1, x.length + ue, j.length + de] : [1, x.length + ue, 0] : !Q && re ? [1, 1] : J ? re ? [1, S.length, 0, ce] : [1, x.length, j.length, ce] : [1, x.length, 1]
                    }), [ne, re, x.length, j.length, Q, J, ce, S, ue, de, fe]),
                    me = i.useMemo((function() {
                        return !Q && re ? [
                            [],
                            []
                        ] : J ? re ? [
                            [], S, [],
                            []
                        ] : [
                            [], x, j, []
                        ] : [
                            [], x, []
                        ]
                    }), [re, Q, J, S, x, j]),
                    ge = i.useCallback((function(e, n) {
                        (0, X.B5)({
                            guildId: t.guild_id,
                            channelId: t.id,
                            postId: e.id,
                            location: {
                                page: Ee.ZY5.GUILD_CHANNEL,
                                section: Ee.jXE.FORUM_CHANNEL_POST
                            }
                        });
                        if (n)(0, _.ad)(e, To.on.BROWSER);
                        else {
                            ie.current = e.id;
                            (0, w.ok)(e)
                        }
                    }), [t.guild_id, t.id, ie]),
                    pe = el(i.useState(s + l - 24), 2),
                    ve = pe[0],
                    be = pe[1],
                    ye = i.useCallback((function(e, n, i) {
                        return 0 === e ? (0, r.jsx)(gl, {
                            channel: t,
                            isEmpty: !F,
                            isSearchLoading: k,
                            numResults: null == S ? void 0 : S.length,
                            coords: n,
                            onHeightChange: be,
                            children: !D && (0, r.jsx)(Ht, {
                                channel: t,
                                hasAnyThread: U
                            }, t.id)
                        }, "forum-channel-header") : 2 !== e || J ? 1 === e && re && !Q ? (0, r.jsx)(fl, {
                            channel: t,
                            coords: n
                        }, "archive-or-search-result") : i() : (0, r.jsx)(dl, {
                            channel: t,
                            coords: n
                        }, "archived-missing-reading-history-perm")
                    }), [re, J, S, Q, t, F, k, D, U]),
                    Oe = (0, m.e7)([B.Z], (function() {
                        return B.Z.hasHidden(t.id)
                    }));
                i.useEffect((function() {
                    var e, t = ne ? we : ee,
                        n = null === (e = t.current) || void 0 === e ? void 0 : e.getScrollerState();
                    if (null != n && !Oe && n.scrollTop > s) {
                        var r;
                        null === (r = t.current) || void 0 === r || r.scrollTo({
                            to: 0
                        })
                    }
                }), [Oe]);
                var xe = (0, $.x)(t.guild_id),
                    je = function(e) {
                        var t = e.listRef,
                            n = e.isIncreasedActivityView,
                            a = e.hasActiveThreads,
                            s = e.threadIdsBySection,
                            l = e.listViewCardHeights,
                            c = e.editorHeight,
                            u = e.editorAdditionRowHeight,
                            d = e.renderSectionOrItem,
                            f = e.goToThread,
                            h = e.observePostVisibilityAnalytics,
                            m = e.isShowingSearchResult,
                            g = i.useCallback((function(e) {
                                return function(n) {
                                    t.current = n;
                                    var r;
                                    e.current = null !== (r = null == n ? void 0 : n.getScrollerNode()) && void 0 !== r ? r : null
                                }
                            }), [t]),
                            v = i.useCallback((function(e) {
                                return sl({
                                    section: e.section,
                                    isShowingSearchResult: m,
                                    hasActiveThreads: a
                                })()
                            }), [a, m]),
                            b = i.useCallback((function(e) {
                                return d(e.section, void 0, (function() {
                                    if (3 === e.section) return __OVERLAY__ ? null : n ? (0, r.jsx)("div", {
                                        className: sn().placeholder,
                                        children: (0, r.jsx)(qa, {})
                                    }) : (0, r.jsx)("div", {
                                        "data-item-role": "item",
                                        className: o()(sn().loadingCard, sn()["loadingCard-".concat(e.row % 3)], Xs({}, sn().loadingCardWithIncreasedActivity, n))
                                    }, "loading-".concat(e.row));
                                    var t = s[e.section][e.row];
                                    return (0, r.jsx)("li", {
                                        className: sn().card,
                                        "data-item-role": "item",
                                        children: (0, r.jsx)(p.HeadingLevel, {
                                            children: n ? (0, r.jsx)(zo, {
                                                className: sn().increasedActivityMainCard,
                                                threadId: t,
                                                goToThread: f,
                                                observePostVisibilityAnalytics: h
                                            }) : (0, r.jsx)(rn.ZP, {
                                                className: sn().mainCard,
                                                threadId: t,
                                                goToThread: f,
                                                observePostVisibilityAnalytics: h
                                            })
                                        })
                                    }, "".concat(e.section, "-").concat(t))
                                }))
                            }), [n, d, s, f, h]),
                            y = i.useCallback((function(e, t) {
                                if (0 === e) return c + u;
                                var r = s[e][t],
                                    i = l[r];
                                return null == i ? 8 + (n ? 188 : 96) : i + 8
                            }), [s, l, c, u, n]);
                        return {
                            updateListScrollerRef: g,
                            renderListSection: v,
                            renderListItem: b,
                            getListSectionHeight: i.useCallback((function(e) {
                                return 2 === e && a ? 40 : 0
                            }), [a]),
                            getListItemHeight: y
                        }
                    }({
                        listRef: ee,
                        hasActiveThreads: F,
                        threadIdsBySection: me,
                        listViewCardHeights: g,
                        editorHeight: s,
                        editorAdditionRowHeight: l,
                        renderSectionOrItem: ye,
                        goToThread: ge,
                        observePostVisibilityAnalytics: te,
                        isShowingSearchResult: re,
                        isIncreasedActivityView: xe
                    }),
                    Se = je.updateListScrollerRef,
                    Ce = je.renderListSection,
                    Te = je.renderListItem,
                    Ne = je.getListSectionHeight,
                    Ae = je.getListItemHeight,
                    we = i.useRef(null),
                    Ie = function(e) {
                        var t = e.masonryListScrollerRef,
                            n = e.threadIdsBySection,
                            a = e.goToThread,
                            s = e.renderSectionOrItem,
                            l = e.hasActiveThreads,
                            c = e.isShowingSearchResult,
                            u = e.canSearchForumPosts,
                            d = e.canViewArchivedPosts,
                            f = e.observePostVisibilityAnalytics,
                            h = e.focusedThreadId,
                            m = e.headerHeight,
                            g = i.useRef(null),
                            p = i.useCallback((function(e) {
                                t.current = e;
                                g.current = null == e ? void 0 : e.getScrollerNode()
                            }), [t]),
                            v = i.useCallback((function(e, n) {
                                var r = t.current;
                                if (null != r) {
                                    var i = document.querySelector(e);
                                    if (null != i) {
                                        var a = r.getCoordsMap()[n],
                                            o = null != a ? a.height + 20 : 200;
                                        r.scrollIntoViewNode({
                                            node: i,
                                            padding: o,
                                            callback: function() {
                                                requestAnimationFrame((function() {
                                                    var t;
                                                    null === (t = document.querySelector(e)) || void 0 === t || t.focus({
                                                        preventScroll: !0
                                                    })
                                                }))
                                            }
                                        });
                                        h.current = cl(n)
                                    }
                                }
                            }), [t, h]),
                            b = i.useCallback((function(e) {
                                var t = cl(e);
                                if (null != t) {
                                    var n = M.Z.getChannel(t);
                                    null != n && a(n, !0)
                                }
                            }), [a]),
                            y = i.useCallback((function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                if (0 === n[e].length) return "section-".concat(e, "-").concat(t);
                                var r = n[e][t];
                                return ll(e, null == r ? t : r)
                            }), [n]),
                            O = i.useCallback((function(e, t, n) {
                                return s(e, t, sl({
                                    section: e,
                                    coords: t,
                                    key: n,
                                    isShowingSearchResult: c,
                                    hasActiveThreads: l
                                }))
                            }), [s, l, c]),
                            x = i.useCallback((function(e) {
                                return 0 === e ? {} : {
                                    role: "grid",
                                    "aria-labelledby": "#".concat(il(e))
                                }
                            }), []),
                            j = i.useCallback((function(e, t, i, s, l) {
                                if (0 === e) return null;
                                var c = n[e][t];
                                return null == c ? __OVERLAY__ ? null : (0, r.jsx)("div", {
                                    style: $s({}, i),
                                    "data-item-role": "item",
                                    className: o()(sn().loadingCard, sn()["loadingCard-".concat(t % 3)])
                                }, s) : (0, r.jsx)(La, {
                                    id: "".concat(s),
                                    threadId: c,
                                    className: o()(sn().card, sn().mainCard),
                                    goToThread: a,
                                    observePostVisibilityAnalytics: f,
                                    coords: i,
                                    gridCoords: l.coordinates[s],
                                    gridSectionBoundaries: l.boundaries
                                }, s)
                            }), [n, a, f]),
                            S = i.useCallback((function(e) {
                                return 0 === e ? m - 8 - 24 : 2 === e ? l || !d ? 40 : 0 : 1 === e && c && !u ? 40 : 0
                            }), [m, c, u, l, d]);
                        return {
                            updateMasonryListScrollerRef: p,
                            masonryListContainerRef: g,
                            focusedThreadId: h,
                            handleGridFocus: v,
                            handleGridSelect: b,
                            getItemKey: y,
                            renderGridSection: O,
                            renderGridItem: j,
                            getSectionProps: x,
                            getGridSectionHeight: S
                        }
                    }({
                        masonryListScrollerRef: we,
                        threadIdsBySection: me,
                        goToThread: ge,
                        renderSectionOrItem: ye,
                        hasActiveThreads: F,
                        isShowingSearchResult: re,
                        canSearchForumPosts: Q,
                        canViewArchivedPosts: J,
                        observePostVisibilityAnalytics: te,
                        focusedThreadId: ie,
                        headerHeight: ve
                    }),
                    Me = Ie.updateMasonryListScrollerRef,
                    Pe = Ie.getItemKey,
                    Re = Ie.renderGridSection,
                    Ze = Ie.renderGridItem,
                    Le = Ie.getGridSectionHeight,
                    De = Ie.getSectionProps,
                    ke = Ie.handleGridFocus;
                ! function(e) {
                    var t = e.masonryListScrollerRef,
                        n = e.containerWidth,
                        r = e.isGridLayout,
                        a = e.threadIdsBySection,
                        o = e.focusedThreadId,
                        s = e.parentId;
                    i.useEffect((function() {
                        if (r) {
                            var e = setTimeout((function() {
                                if (null != t.current && null != o.current) {
                                    var e = o.current;
                                    if ("string" == typeof e)
                                        if (null != I.ZP.getSidebarState(s)) {
                                            var n = a.findIndex((function(t) {
                                                    return t.find((function(t) {
                                                        return t === e
                                                    }))
                                                })),
                                                r = t.current.getCoordsMap(),
                                                i = r["__section__".concat(n)],
                                                l = r[ll(n, e)];
                                            null != i && null != l && t.current.scrollIntoViewRect({
                                                start: i.top + l.top - 100,
                                                end: i.top + l.top + l.height + 50
                                            })
                                        } else o.current = null
                                }
                            }), 500);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }), [s, n, r, a, o, t])
                }({
                    masonryListScrollerRef: we,
                    containerWidth: se,
                    isGridLayout: ne,
                    threadIdsBySection: me,
                    parentId: t.id,
                    focusedThreadId: ie
                });
                var He = i.useCallback((function() {
                        var e, n;
                        if (!re) {
                            var r = ne ? null === (e = we.current) || void 0 === e ? void 0 : e.getScrollerState() : null === (n = ee.current) || void 0 === n ? void 0 : n.getScrollerState();
                            if (null != r) {
                                (0, X.ab)({
                                    guildId: t.guild_id,
                                    channelId: t.id
                                });
                                var i = r.scrollTop + r.offsetHeight;
                                r.scrollHeight - i < (ne ? Math.max(200, ca(se)) : 200) && R()
                            }
                        }
                    }), [re, ne, t.guild_id, t.id, se, R]),
                    Fe = (0, m.e7)([y.Z], (function() {
                        return y.Z.keyboardModeEnabled
                    })),
                    Ue = function(e) {
                        var t = e.id,
                            n = e.isEnabled,
                            r = e.setFocus,
                            a = i.useRef(null),
                            o = i.useRef(!1),
                            s = i.useRef(null),
                            l = i.useRef(n);
                        i.useLayoutEffect((function() {
                            l.current = n
                        }), [n]);
                        var c = i.useCallback((function(e) {
                                var t;
                                return (null !== (t = s.current) && void 0 !== t ? t : document).querySelector(e)
                            }), []),
                            u = i.useCallback((function(e, t) {
                                l.current && r(e, t)
                            }), [r]),
                            d = i.useCallback((function(e) {
                                if (l.current) {
                                    var t;
                                    null === (t = document.querySelector(e)) || void 0 === t || t.focus()
                                }
                            }), []),
                            h = i.useCallback((function(e) {
                                a.current = e;
                                var n = (0, ha.P1)(e, va),
                                    r = (0, ha.x3)(e);
                                u(n, r);
                                (0, fa.h)(t, r, !0)
                            }), [t, u]),
                            m = pa(i.useState(!1), 2),
                            g = m[0],
                            p = m[1],
                            v = i.useRef(g);
                        i.useLayoutEffect((function() {
                            v.current = g
                        }), [g]);
                        i.useLayoutEffect((function() {
                            var e = function() {
                                    p(!0)
                                },
                                n = function(e) {
                                    if (!e.currentTarget.contains(e.relatedTarget)) {
                                        p(!1);
                                        requestAnimationFrame((function() {
                                            var e = a.current;
                                            if (null !== e) {
                                                var n = (0, ha.P1)(e, va);
                                                null == c(n) && d((0, ha.P1)(t, "data-grid-id"))
                                            }
                                        }))
                                    }
                                },
                                r = function() {
                                    s.current, v.current
                                },
                                i = function() {
                                    o.current = !0
                                },
                                l = s.current;
                            if (null != l) {
                                l.addEventListener("focusin", e);
                                l.addEventListener("focusout", n);
                                l.addEventListener("focus", r);
                                l.addEventListener("scroll", i, {
                                    passive: !0
                                });
                                return function() {
                                    l.removeEventListener("focusin", e);
                                    l.removeEventListener("focusout", n);
                                    l.removeEventListener("focus", r);
                                    l.removeEventListener("scroll", i)
                                }
                            }
                        }), [t, u, d, h, c]);
                        var b = i.useCallback((function(e) {
                                if (l.current) {
                                    var t = a.current,
                                        n = s.current;
                                    if (null != t) {
                                        var r = (0, ha.P1)(t, va),
                                            i = null == n ? void 0 : n.querySelector(r);
                                        if (null != i) {
                                            var o, u = parseInt(null !== (o = i.getAttribute("data-grid-section")) && void 0 !== o ? o : ""),
                                                d = parseInt(i.getAttribute("aria-rowindex")),
                                                m = parseInt(i.getAttribute("aria-colindex"));
                                            if (Oa.has(e.key)) {
                                                e.stopPropagation();
                                                e.preventDefault()
                                            }
                                            switch (e.key) {
                                                case f.R8.RIGHT:
                                                    var g = c(xa({
                                                        section: u,
                                                        row: d,
                                                        column: m + 1
                                                    }));
                                                    if (null != g) {
                                                        var p = g.getAttribute(va);
                                                        null != p && h(p)
                                                    }
                                                    return;
                                                case f.R8.LEFT:
                                                    var v = c(xa({
                                                        section: u,
                                                        row: d,
                                                        column: m - 1
                                                    }));
                                                    if (null != v) {
                                                        var b = v.getAttribute(va);
                                                        null != b && h(b)
                                                    }
                                                    return;
                                                case f.R8.DOWN:
                                                    var y = c(xa({
                                                        section: u,
                                                        row: d + 1,
                                                        column: m
                                                    }));
                                                    null == y && (y = c(xa({
                                                        section: u + 1,
                                                        row: 0,
                                                        column: m
                                                    })));
                                                    if (null != y) {
                                                        var O = y.getAttribute(va);
                                                        null != O && h(O)
                                                    }
                                                    return;
                                                case f.R8.UP:
                                                    var x;
                                                    if (0 === d) {
                                                        var j = parseInt(i.getAttribute(ya));
                                                        null == (x = c(xa({
                                                            section: u - 1,
                                                            row: j,
                                                            column: m
                                                        }))) && (x = c(xa({
                                                            section: u - 1,
                                                            row: j - 1,
                                                            column: m
                                                        })))
                                                    } else x = c(xa({
                                                        section: u,
                                                        row: d - 1,
                                                        column: m
                                                    }));
                                                    if (null != x) {
                                                        var S = x.getAttribute(va);
                                                        null != S && h(S)
                                                    }
                                                    return;
                                                case f.R8.SPACE:
                                                case f.R8.ENTER:
                                                    if (e.repeat) return;
                                                    var C = a.current;
                                                    if (null != C) {
                                                        var E, _ = (0,
                                                                ha.P1)(C, va),
                                                            T = c(_),
                                                            N = T === (null !== (E = null == T ? void 0 : T.ownerDocument) && void 0 !== E ? E : document).activeElement;
                                                        if (null != T && N) {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            null == T || T.click()
                                                        }
                                                    }
                                            }
                                        }
                                    }
                                }
                            }), [c, h]),
                            y = i.useCallback((function(e) {
                                var n = null != e ? (0, ha.jb)(t, e) : null;
                                a.current = n
                            }), [t]);
                        return i.useMemo((function() {
                            return {
                                id: t,
                                containerProps: {
                                    onKeyDown: b,
                                    ref: s
                                },
                                setFocus: y
                            }
                        }), [t, b, y])
                    }({
                        id: "forum-grid-view",
                        isEnabled: ne && Fe,
                        setFocus: ke
                    }),
                    Be = function(e) {
                        var t = e.listRef,
                            n = e.padding,
                            r = e.channel,
                            a = e.isEnabled,
                            o = i.useCallback((function(e) {
                                var r = t.current,
                                    i = document.querySelector(e);
                                null != i && (null == r || r.scrollIntoViewNode({
                                    node: i,
                                    padding: n,
                                    callback: function() {
                                        var t;
                                        null === (t = document.querySelector(e)) || void 0 === t || t.focus({
                                            preventScroll: !0
                                        })
                                    }
                                }))
                            }), [n]),
                            s = i.useCallback((function() {
                                return new Promise((function(e) {
                                    var n = t.current;
                                    null == n || n.scrollToTop({
                                        callback: function() {
                                            return requestAnimationFrame(e)
                                        }
                                    })
                                }))
                            }), []),
                            l = i.useCallback((function() {
                                return new Promise((function(e) {
                                    var n = t.current;
                                    null == n || n.scrollToBottom({
                                        callback: function() {
                                            return requestAnimationFrame(e)
                                        }
                                    })
                                }))
                            }), []);
                        return (0, u.ZP)({
                            id: "forum-channel-list-".concat(r.id),
                            isEnabled: a,
                            scrollToStart: s,
                            scrollToEnd: l,
                            setFocus: o
                        })
                    }({
                        listRef: ee,
                        padding: 96,
                        isEnabled: !ne && Fe,
                        channel: t
                    }),
                    Ge = Ue.containerProps,
                    Ve = Ge.ref,
                    ze = Js(Ge, ["ref"]),
                    We = I.ZP.getSidebarState(t.id),
                    Ke = null != We && (0, I.D5)(We);
                return (0, r.jsx)("div", {
                    className: sn().container,
                    ref: oe,
                    children: (0, r.jsx)(p.FocusJumpSection, {
                        children: function(e) {
                            return (0, r.jsxs)(r.Fragment, {
                                children: [b && (0, r.jsx)(v.Z, {
                                    channel: t,
                                    draftType: P.d.FirstThreadMessage,
                                    className: sn().uploadArea,
                                    style: {
                                        right: Ke && (null == n ? void 0 : n.isThreadSidebarFloating) ? n.threadSidebarWidth : 0
                                    }
                                }), (0, r.jsx)(hl, {
                                    channel: t
                                }), (0, r.jsx)(p.HiddenVisually, {
                                    children: (0, r.jsx)(p.H, {
                                        children: _e.Z.Messages.THREADS
                                    })
                                }), V ? (0, r.jsx)("div", {
                                    className: sn().optInNotice,
                                    children: (0, r.jsx)(E.Z, {
                                        channel: t
                                    })
                                }) : null, ne ? (0, r.jsx)(_a, {
                                    navigator: Ue,
                                    children: (0, r.jsx)(p.MasonryList, $s({
                                        ref: function(e) {
                                            var t;
                                            Ve.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
                                            Me(e)
                                        },
                                        itemGutter: 16,
                                        padding: 24,
                                        className: sn().grid,
                                        columns: le,
                                        sections: he,
                                        getItemKey: Pe,
                                        getSectionHeight: Le,
                                        getItemHeight: al,
                                        renderSection: Re,
                                        renderItem: Ze,
                                        getSectionProps: De,
                                        onScroll: A ? He : void 0,
                                        chunkSize: 350
                                    }, ze, e), H)
                                }) : (0, r.jsx)(d.bG, {
                                    navigator: Be,
                                    children: (0, r.jsx)(d.SJ, {
                                        children: function(t) {
                                            var n = t.ref,
                                                i = Js(t, ["ref"]);
                                            return (0, r.jsx)(p.ListAuto, Qs($s({
                                                ref: Se(n),
                                                className: sn().list,
                                                sections: he,
                                                sectionHeight: Ne,
                                                rowHeight: Ae,
                                                renderRow: Te,
                                                renderSection: Ce,
                                                chunkSize: 150,
                                                onScroll: A ? He : void 0,
                                                paddingBottom: 24
                                            }, i, e), {
                                                innerRole: "list"
                                            }), H)
                                        }
                                    })
                                })]
                            })
                        }
                    })
                })
            }

            function dl(e) {
                var t = e.channel,
                    n = e.coords,
                    i = (0, O.ZP)(t);
                return (0, r.jsx)("div", {
                    className: o()(sn().missingReadHistoryPermission, sn().columnsSpan),
                    style: n,
                    children: (0, r.jsx)(p.Text, {
                        color: "text-muted",
                        variant: "text-md/normal",
                        children: _e.Z.Messages.FORUM_CHANNEL_NO_POST_HISTORY.format({
                            channelName: i
                        })
                    })
                })
            }

            function fl(e) {
                var t = e.channel,
                    n = e.coords,
                    i = (0, O.ZP)(t);
                return (0, r.jsx)("div", {
                    className: o()(sn().missingReadHistoryPermission, sn().columnsSpan),
                    style: n,
                    children: (0, r.jsx)(p.Text, {
                        color: "text-muted",
                        variant: "text-md/normal",
                        children: _e.Z.Messages.FORUM_CHANNEL_NO_SEARCH_POST_HISTORY.format({
                            channelName: i
                        })
                    })
                })
            }

            function hl(e) {
                var t = e.channel,
                    n = i.useCallback((function() {
                        G.Z.resort(t.id)
                    }), [t]),
                    a = (0, m.e7)([V.Z], (function() {
                        return V.Z.getNewThreadCount()
                    }));
                return 0 === a ? null : (0, r.jsx)(p.Clickable, {
                    className: sn().newPostsButton,
                    onClick: n,
                    children: (0, r.jsx)(p.Text, {
                        color: "text-brand",
                        variant: "text-md/medium",
                        children: _e.Z.Messages.NEW_FORUM_POST_COUNT.format({
                            count: a
                        })
                    })
                })
            }

            function ml() {
                return Promise.resolve()
            }

            function gl(e) {
                var t, n, a, s = e.channel,
                    v = e.isEmpty,
                    O = e.isSearchLoading,
                    C = e.numResults,
                    E = e.children,
                    _ = e.coords,
                    T = e.onHeightChange,
                    N = (0, vt.xH)((function(e) {
                        return {
                            name: e.name,
                            formOpen: e.formOpen,
                            titleFocused: e.titleFocused,
                            hasClickedForm: e.hasClickedForm,
                            textAreaState: e.textAreaState,
                            onboardingExpanded: e.onboardingExpanded,
                            setEditorAdditionRowHeight: e.setEditorAdditionRowHeight
                        }
                    }), c.Z),
                    w = N.name,
                    I = N.formOpen,
                    M = N.titleFocused,
                    H = N.hasClickedForm,
                    B = N.textAreaState,
                    V = N.onboardingExpanded,
                    K = N.setEditorAdditionRowHeight,
                    q = (0, z.H)(s.id),
                    Y = q.tagFilter,
                    $ = q.layoutType,
                    Q = (0, vt.AF)(),
                    J = (0, z.v)(),
                    ee = (0, m.e7)([R.Z], (function() {
                        return R.Z.canChatInGuild(s.guild_id)
                    })),
                    te = (0, W.r_)(s),
                    ne = (0, A.cD)(s),
                    re = el(i.useState(ne), 2),
                    ie = re[0],
                    ae = re[1],
                    oe = el((0, j.AB)(null !== (a = s.getGuildId()) && void 0 !== a ? a : void 0), 2)[1],
                    se = ee && (ne || ie && oe),
                    le = s.isMediaChannel();
                i.useEffect((function() {
                    ne && ae(!0)
                }), [ne]);
                var ce = (0, b.Z)(),
                    ue = ce.ref,
                    de = ce.height;
                i.useEffect((function() {
                    null != de && T(de)
                }), [T, de]);
                var fe = i.useCallback((function() {
                    l()((function() {
                        null != ue.current && Q.getState().setEditorHeight(ue.current.offsetHeight)
                    }))
                }), [ue, Q]);
                i.useLayoutEffect(fe, [fe, v, se, V]);
                (0, U.yp)({
                    event: Ee.CkL.REMEASURE_TARGET,
                    handler: fe
                });
                var he = (0, m.e7)([Z.Z], (function() {
                        return Z.Z.getUploads(s.id, P.d.FirstThreadMessage)
                    })),
                    me = (0,
                        W.ql)(s),
                    ge = i.useRef(null),
                    pe = i.useRef(null),
                    ve = el(i.useState(0), 2),
                    be = ve[0],
                    ye = ve[1],
                    Oe = (0, m.e7)([L.Z], (function() {
                        return L.Z.windowSize()
                    })).width,
                    xe = null === (n = null === (t = ge.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === n ? void 0 : n.width,
                    je = i.useRef(null);
                i.useLayoutEffect((function() {
                    var e, t = pe.current,
                        n = null == t || null === (e = t.children) || void 0 === e ? void 0 : e[0];
                    if (null != ge.current && null != n && null != n.children) {
                        var r = ge.current.getBoundingClientRect(),
                            i = r.left,
                            a = r.top,
                            o = 0,
                            s = !0,
                            l = !1,
                            c = void 0;
                        try {
                            for (var u, d = n.children[Symbol.iterator](); !(s = (u = d.next()).done); s = !0) {
                                var f = u.value.getBoundingClientRect(),
                                    h = f.right;
                                if (f.top - a > f.height) break;
                                h - i > o && (o = h - i)
                            }
                        } catch (e) {
                            l = !0;
                            c = e
                        } finally {
                            try {
                                s || null == d.return || d.return()
                            } finally {
                                if (l) throw c
                            }
                        }
                        ye(o)
                    }
                }), [s.availableTags, Oe, xe, Y]);
                var Se = w.length > 0 && !I && (O || null != C),
                    Ce = !__OVERLAY__ && !H && !I && M && (0 === B.textValue.trim().length || B.textValue.trim() === me) && 0 === he.length;
                i.useLayoutEffect((function() {
                    var e = Se || Ce;
                    if (!e) return K(0);
                    null != je.current && K(e ? je.current.clientHeight : 0)
                }), [K, Se, Ce, je]);
                var Te = (0, u.ZP)({
                        id: "".concat(s.id, "-tags-navigator"),
                        isEnabled: !0,
                        wrap: !0,
                        scrollToStart: ml,
                        scrollToEnd: ml,
                        orientation: f.hy.HORIZONTAL
                    }),
                    Ne = (0, d.JA)("forum-channel-header"),
                    Ae = (Ne.role, Ne.onFocus),
                    we = Js(Ne, ["role", "onFocus"]),
                    Ie = i.useRef(null),
                    Me = function() {
                        var e = i.useRef(!1),
                            t = (0, m.e7)([y.Z], (function() {
                                return y.Z.keyboardModeEnabled
                            })),
                            n = i.useCallback((function(t) {
                                e.current = t.shiftKey
                            }), [e]);
                        i.useLayoutEffect((function() {
                            t ? window.addEventListener("keydown", n) : window.removeEventListener("keydown", n);
                            return function() {
                                return window.removeEventListener("keydown", n)
                            }
                        }), [t, n]);
                        return e
                    }(),
                    Pe = i.useCallback((function(e) {
                        Ae(e);
                        if (e.target === ue.current && !Me.current) {
                            var t;
                            null === (t = Ie.current) || void 0 === t || t.focus()
                        }
                    }), [Ae, ue, Me]);
                return (0, r.jsx)("div", Qs($s({
                    className: o()(sn().card, sn().headerRow, sn().columnsSpan),
                    ref: ue,
                    onFocus: Pe
                }, we), {
                    style: Qs($s({}, _), {
                        position: "static",
                        height: "auto"
                    }),
                    children: (0, r.jsxs)(U.I3, {
                        children: [null != s.guild_id ? (0, r.jsx)(S.Z, {
                            className: o()(sn().newMemberBanner, Xs({}, sn().gridViewBanner, $ === h.X.GRID)),
                            guildId: s.guild_id,
                            channel: s
                        }) : null, (0, r.jsx)("div", {
                            className: o()(sn().mainCard, sn().header, Xs({}, sn().headerWithMatchingPosts, Se || Ce)),
                            children: (0, r.jsx)(Zi, {
                                parentChannel: s,
                                onChange: fe,
                                isSearchLoading: O,
                                canCreatePost: se,
                                inputRef: Ie
                            })
                        }), (Se || Ce) && (0, r.jsxs)("div", {
                            className: sn().matchingPostsRow,
                            ref: je,
                            children: [Se && (0, r.jsxs)("div", {
                                className: sn().matchingPosts,
                                children: [(0, r.jsx)(p.Heading, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: O ? _e.Z.Messages.FORUM_SEARCHING : 0 === C ? _e.Z.Messages.FORUM_SEARCH_NO_MATCHING_POSTS : _e.Z.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format({
                                        numPosts: C,
                                        query: w
                                    })
                                }), !O && (0, r.jsx)(p.Clickable, {
                                    onClick: function() {
                                        (0, X.zI)({
                                            guildId: s.guild_id,
                                            channelId: s.id
                                        });
                                        G.Z.clearForumSearch(s.id);
                                        Q.getState().setName("")
                                    },
                                    children: (0, r.jsx)(p.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-brand",
                                        className: sn().clear,
                                        children: _e.Z.Messages.CLEAR
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: sn().tagsSpacer
                            }), Ce ? se ? (0, r.jsxs)("div", {
                                className: sn().startPostHelp,
                                children: [(0, r.jsx)(p.KeyCombo, {
                                    shortcut: "SHIFT",
                                    className: sn().keyboardShortcut
                                }), (0, r.jsx)(p.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: "+"
                                }), (0, r.jsx)(p.KeyCombo, {
                                    shortcut: "ENTER",
                                    className: sn().keyboardShortcut
                                }), (0, r.jsx)(p.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: _e.Z.Messages.FORUM_ENTER_TO_START_POST
                                })]
                            }) : (0, r.jsxs)("div", {
                                className: sn().startPostHelp,
                                children: [(0, r.jsx)(F.Z, {
                                    height: 14,
                                    width: 14,
                                    className: sn().warnIcon
                                }), (0, r.jsx)(p.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: _e.Z.Messages.FORUM_NO_POST_PERMISSION_HELP
                                })]
                            }) : null]
                        }), (0, r.jsx)(en, {
                            channel: s,
                            onChange: fe
                        }), (0, r.jsxs)("div", {
                            className: sn().tagsContainer,
                            ref: ge,
                            children: [(0, r.jsx)(pl, {
                                channel: s
                            }), s.availableTags.length > 0 ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: sn().divider
                                }), (0, r.jsx)("div", {
                                    className: sn().tagList,
                                    ref: pe,
                                    children: (0,
                                        r.jsx)(d.bG, {
                                        navigator: Te,
                                        children: (0, r.jsx)(d.SJ, {
                                            children: function(e) {
                                                var t = e.ref,
                                                    n = Js(e, ["ref"]);
                                                return (0, r.jsx)("div", Qs($s({
                                                    className: sn().tagListInner,
                                                    ref: t
                                                }, n), {
                                                    children: s.availableTags.map((function(e) {
                                                        return (0, r.jsx)(ci.ZP, {
                                                            className: sn().tag,
                                                            tag: e,
                                                            onClick: function() {
                                                                return function(e) {
                                                                    (0, X.e7)({
                                                                        guildId: s.guild_id,
                                                                        channelId: s.id,
                                                                        tagId: e,
                                                                        filterTagIds: Array.from(Y),
                                                                        added: !Y.has(e),
                                                                        location: {
                                                                            page: Ee.ZY5.GUILD_CHANNEL,
                                                                            section: Ee.jXE.FORUM_CHANNEL_HEADER,
                                                                            object: Ee.qAy.CHANNEL_TAG
                                                                        }
                                                                    });
                                                                    J.getState().toggleTagFilter(s.id, e)
                                                                }(e.id)
                                                            },
                                                            selected: Y.has(e.id)
                                                        }, e.id)
                                                    }))
                                                }))
                                            }
                                        })
                                    })
                                }), (0, r.jsx)(p.Popout, {
                                    renderPopout: function(e) {
                                        var t = e.closePopout,
                                            n = e.setPopoutRef;
                                        return (0, r.jsx)(qs, {
                                            channel: s,
                                            closePopout: t,
                                            setPopoutRef: n
                                        })
                                    },
                                    position: "bottom",
                                    align: "right",
                                    children: function(e, t) {
                                        var n = t.isShown;
                                        return (0, r.jsxs)(p.Button, Qs($s({}, e), {
                                            size: p.Button.Sizes.MIN,
                                            color: p.Button.Colors.CUSTOM,
                                            className: o()(sn().tagsButton, Xs({}, sn().tagsButtonWithCount, Y.size > 0)),
                                            style: {
                                                left: be
                                            },
                                            innerClassName: sn().tagsButtonInner,
                                            "aria-label": Y.size > 0 ? _e.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL : _e.Z.Messages.FORUM_TAG_ALL_A11Y_LABEL,
                                            children: [Y.size > 0 ? (0, r.jsx)("div", {
                                                className: sn().countContainer,
                                                children: (0, r.jsx)(p.Text, {
                                                    className: sn().countText,
                                                    color: "none",
                                                    variant: "text-xs/medium",
                                                    children: Y.size
                                                })
                                            }) : _e.Z.Messages.FORUM_TAG_ALL, n ? (0, r.jsx)(k.Z, {
                                                width: 20
                                            }) : (0, r.jsx)(D.Z, {
                                                width: 20
                                            })]
                                        }))
                                    }
                                }), (0, r.jsxs)(p.Button, {
                                    size: p.Button.Sizes.MIN,
                                    color: p.Button.Colors.CUSTOM,
                                    className: o()(sn().tagsButton, sn().tagsButtonPlaceholder),
                                    innerClassName: sn().tagsButtonInner,
                                    "aria-label": _e.Z.Messages.FORUM_TAG_SEE_MORE_A11Y_LABEL,
                                    children: [Y.size > 0 ? (0, r.jsx)("div", {
                                        className: sn().countContainer,
                                        children: (0, r.jsx)(p.Text, {
                                            className: sn().countText,
                                            color: "none",
                                            variant: "text-xs/medium",
                                            children: Y.size
                                        })
                                    }) : null, (0, r.jsx)(k.Z, {
                                        width: 24
                                    })]
                                })]
                            }) : null]
                        }), E, te && !le && (0, r.jsx)(x.Z, {
                            contentTypes: [g.z$.FORUM_CHANNEL_HELPER_CARD],
                            children: function(e) {
                                var t = e.visibleContent,
                                    n = e.markAsDismissed;
                                return t === g.z$.FORUM_CHANNEL_HELPER_CARD ? (0, r.jsx)(mn, {
                                    onDismiss: n
                                }) : null
                            }
                        })]
                    })
                }), "create-form")
            }

            function pl(e) {
                var t = e.channel,
                    n = t.isMediaChannel();
                return (0, r.jsx)(p.Popout, {
                    renderPopout: function(e) {
                        var n = e.closePopout;
                        return (0, r.jsx)($a, {
                            channel: t,
                            closePopout: n
                        })
                    },
                    position: "bottom",
                    align: "left",
                    children: function(e, t) {
                        var i = t.isShown;
                        return (0, r.jsxs)(p.Button, Qs($s({}, e), {
                            size: p.Button.Sizes.MIN,
                            color: p.Button.Colors.CUSTOM,
                            className: sn().sortDropdown,
                            innerClassName: sn().sortDropdownInner,
                            "aria-label": n ? _e.Z.Messages.MEDIA_CHANNEL_SORT : _e.Z.Messages.FORUM_CHANNEL_SORT_AND_VIEW,
                            children: [(0, r.jsx)(H.Z, {}), (0, r.jsx)(p.Text, {
                                className: sn().sortDropdownText,
                                variant: "text-sm/medium",
                                color: "interactive-normal",
                                children: n ? _e.Z.Messages.MEDIA_CHANNEL_SORT : _e.Z.Messages.FORUM_CHANNEL_SORT_AND_VIEW
                            }), i ? (0, r.jsx)(k.Z, {
                                width: 20
                            }) : (0, r.jsx)(D.Z, {
                                width: 20
                            })]
                        }))
                    }
                })
            }
        },
        462553: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(785893),
                i = (n(667294), n(294184)),
                a = n.n(i),
                o = n(304548),
                s = n(557617);

            function l(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function u(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function f(e) {
                var t = e.children,
                    n = e.className,
                    i = e.innerClassName,
                    l = e.onChange,
                    f = e["aria-label"],
                    h = e["aria-describedby"],
                    m = e.filters,
                    g = e.multiple,
                    p = void 0 !== g && g,
                    v = e.disabled,
                    b = void 0 !== v && v,
                    y = e.submitting,
                    O = void 0 !== y && y,
                    x = d(e, ["children", "className", "innerClassName", "onChange", "aria-label", "aria-describedby", "filters", "multiple", "disabled", "submitting"]);
                return (0, r.jsx)(o.FocusRing, {
                    within: !0,
                    children: (0, r.jsxs)("div", {
                        className: a()(n, (0, o.getButtonStyle)(u(c({}, x), {
                            submitting: O,
                            disabled: b
                        }))),
                        "aria-disabled": b,
                        children: [(0, r.jsx)("span", {
                            "aria-hidden": !0,
                            className: i,
                            children: t
                        }), (0, r.jsx)(s.Z, {
                            tabIndex: 0,
                            onChange: l,
                            filters: m,
                            multiple: p,
                            "aria-label": f,
                            "aria-describedby": h,
                            disabled: b
                        })]
                    })
                })
            }
        },
        331448: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => u
            });
            var r = n(785893),
                i = (n(667294), n(450520)),
                a = n(627379),
                o = n(633878);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            const u = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 29 : t,
                    i = e.height,
                    a = void 0 === i ? 22 : i,
                    u = e.color,
                    d = void 0 === u ? "currentColor" : u,
                    f = e.backgroundColor,
                    h = c(e, ["width", "height", "color", "backgroundColor"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(h)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 29 22",
                    children: (0, r.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, r.jsx)("rect", {
                            width: n,
                            height: a,
                            fill: f,
                            fillOpacity: ".8",
                            rx: "3"
                        }), (0, r.jsx)("path", {
                            d: "M8.01725 16.7054C7.17625 16.7054 6.43191 16.4879 5.78425 16.0529C5.13658 15.6179 4.63391 15.0089 4.27625 14.2259C3.91858 13.4333 3.73975 12.5246 3.73975 11.4999C3.73975 10.4849 3.92825 9.58593 4.30525 8.80293C4.69191 8.01993 5.24775 7.4061 5.97275 6.96143C6.70741 6.51677 7.58225 6.29443 8.59725 6.29443C9.45758 6.29443 10.2261 6.4781 10.9027 6.84543C11.5891 7.21277 12.1062 7.72993 12.4542 8.39693L10.8157 9.57143C10.3227 8.66277 9.58808 8.20843 8.61175 8.20843C7.72241 8.20843 7.04091 8.49843 6.56725 9.07843C6.09358 9.64877 5.85675 10.4559 5.85675 11.4999C5.85675 12.5536 6.09358 13.3656 6.56725 13.9359C7.04091 14.5063 7.72241 14.7914 8.61175 14.7914C9.00808 14.7914 9.37058 14.7189 9.69925 14.5739C10.0376 14.4193 10.2986 14.2114 10.4822 13.9504V12.7034H8.17675V10.8184H12.5412V16.5024H10.8302L10.5547 15.5454C9.98441 16.3188 9.13858 16.7054 8.01725 16.7054Z",
                            fill: d
                        }), (0, r.jsx)("path", {
                            d: "M16.5444 16.5024H14.4274V6.49743H16.5444V16.5024Z",
                            fill: d
                        }), (0, r.jsx)("path", {
                            d: "M20.6933 16.5024H18.5763V6.49743H25.2608V8.41143H20.6933V10.7894H24.4053V12.7034H20.6933V16.5024Z",
                            fill: d
                        })]
                    })
                }))
            }), a.O)
        },
        224746: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => h
            });
            var r = n(785893),
                i = (n(667294), n(450520)),
                a = n(795308),
                o = n(633878);

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function u(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function f(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }
            const h = (0, i.hN)((function(e) {
                var t = e.width,
                    n = void 0 === t ? 16 : t,
                    i = e.height,
                    a = void 0 === i ? 16 : i,
                    s = e.color,
                    l = void 0 === s ? "currentColor" : s,
                    c = e.foreground,
                    h = f(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", d(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            u(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(h)), {
                    width: n,
                    height: a,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: [(0, r.jsx)("path", {
                        className: c,
                        fill: l,
                        d: "M12.1803 4.66659L12.1803 14.6666H10.4701L10.4701 4.66659L8.53289 6.63325L7.33329 5.40825L11.3292 1.33325L15.3333 5.40825L14.1337 6.65825L12.1803 4.66659Z"
                    }), (0, r.jsx)("path", {
                        className: c,
                        fill: l,
                        d: "M3.81962 11.3333L3.81962 1.33325L5.52983 1.33325L5.52985 11.3333L7.46703 9.36658L8.66663 10.5916L4.67068 14.6666L0.666626 10.5916L1.86622 9.34158L3.81962 11.3333Z"
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    n = void 0 === t ? 24 : t,
                    i = e.height,
                    u = void 0 === i ? 24 : i,
                    d = e.color,
                    f = void 0 === d ? a.Z.colors.INTERACTIVE_NORMAL : d,
                    h = e.colorClass,
                    m = void 0 === h ? "" : h,
                    g = c(e, ["width", "height", "color", "colorClass"]);
                return (0, r.jsx)("svg", l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            s(e, t, n[t])
                        }))
                    }
                    return e
                }({}, (0, o.Z)(g)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        fillRule: "evenodd",
                        d: "M16.293 21.707a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L18 18.586V3a1 1 0 1 0-2 0v15.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4Zm-10-19.414a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 5.414V21a1 1 0 1 1-2 0V5.414L3.707 7.707a1 1 0 0 1-1.414-1.414l4-4Z",
                        clipRule: "evenodd",
                        className: m
                    })
                }))
            }))
        }
    }
]);