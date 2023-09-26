"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [1764], {
        1764: (e, n, r) => {
            r.r(n);
            r.d(n, {
                default: () => $e
            });
            var t = r(785893),
                o = r(667294),
                s = r(202351),
                i = r(304548),
                a = r(213276),
                l = r(662478),
                c = r(357088),
                u = r(503370),
                d = r(153686),
                f = r(19585),
                p = r(753251),
                m = r(177570),
                h = r(664625),
                S = r(491260),
                y = r(473903),
                O = r(90459),
                v = r(183490),
                b = r(347928),
                j = r(485552),
                g = r(616679),
                E = r(2590),
                N = r(685125),
                I = r.n(N),
                x = r(3765),
                T = r.n(x);

            function A(e) {
                var n = e.user,
                    r = (0, s.e7)([m.Z], (function() {
                        return null != m.Z.getAnyStreamForUser(n.id)
                    })),
                    a = (0, s.e7)([S.Z], (function() {
                        return S.Z.getActivities(n.id)
                    })),
                    l = o.useMemo((function() {
                        return a.filter((function(e) {
                            return e.type !== E.IIU.CUSTOM_STATUS
                        }))
                    }), [a]),
                    c = o.useMemo((function() {
                        return r ? l.find((function(e) {
                            return e.type === E.IIU.PLAYING
                        })) : null
                    }), [l, r]),
                    u = o.useMemo((function() {
                        return l.filter((function(e) {
                            return e !== c
                        }))
                    }), [c, l]);
                return (0, t.jsxs)(i.ScrollerThin, {
                    className: T().listScroller,
                    fade: !0,
                    children: [r ? (0, t.jsx)(g.Z, {
                        type: g.P.PROFILE_V2,
                        user: n,
                        source: "Profile Modal",
                        className: I().userProfileActivity,
                        activity: c,
                        actionColor: I().actionColor
                    }) : null, u.map((function(e) {
                        return (0, t.jsx)(g.Z, {
                            type: g.P.PROFILE_V2,
                            activity: e,
                            user: n,
                            useStoreStream: !1,
                            source: "Profile Modal",
                            className: I().userProfileActivity,
                            actionColor: I().actionColor
                        }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name))
                    }))]
                })
            }
            var _ = r(712125),
                C = r(473708),
                P = r(988351),
                Z = r.n(P);

            function U(e) {
                var n = e.content,
                    r = e.heading;
                return (0, t.jsxs)("div", {
                    className: Z().row,
                    children: [null != r ? (0, t.jsx)(i.Heading, {
                        className: Z().heading,
                        variant: "text-sm/normal",
                        children: r
                    }) : null, (0, t.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: n
                    })]
                })
            }

            function M(e) {
                var n = e.flags,
                    r = e.listScrollerStyle,
                    o = (0, _.w)({
                        flags: n
                    }),
                    s = o.hasMessageContent,
                    a = o.hasGuildPresences,
                    l = o.hasGuildMembers;
                if (null == n) return null;
                var c = [];
                s && c.push((0, t.jsx)(U, {
                    heading: C.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                    content: C.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
                }));
                a && c.push((0, t.jsx)(U, {
                    heading: C.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                    content: C.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
                }));
                l && c.push((0, t.jsx)(U, {
                    heading: C.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                    content: C.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
                }));
                c.length > 0 && c.push((0, t.jsx)("div", {
                    className: Z().divider,
                    children: (0, t.jsx)(i.FormDivider, {})
                }));
                c.push((0, t.jsx)(U, {
                    content: C.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
                    })
                }));
                return (0, t.jsx)(i.ScrollerThin, {
                    className: r,
                    children: c
                })
            }

            function D(e) {
                var n, r = e.user,
                    o = null === (n = (0, s.e7)([O.Z], (function() {
                        return O.Z.getUserProfile(r.id)
                    }))) || void 0 === n ? void 0 : n.application;
                return (0, t.jsx)(M, {
                    flags: null == o ? void 0 : o.flags,
                    listScrollerStyle: T().listScroller
                })
            }
            var R = r(523615),
                w = r(265688),
                B = r(600993),
                F = r(384411),
                L = r(793461),
                k = r(340651),
                G = r(835575),
                H = r(505536),
                Y = r(967783);

            function V() {
                return (0, t.jsxs)("div", {
                    className: T().empty,
                    children: [(0,
                        t.jsx)("div", {
                        className: T().emptyIconStreamerMode
                    }), (0, t.jsx)("div", {
                        className: T().emptyText,
                        children: C.Z.Messages.STREAMER_MODE_ENABLED
                    })]
                })
            }
            var z = r(624177),
                W = r.n(z);

            function K(e) {
                var n, r, a = e.user,
                    l = e.displayProfile,
                    c = e.autoFocusNote,
                    u = void 0 !== c && c,
                    d = e.scrollToConnections,
                    f = void 0 !== d && d,
                    p = (0, B.Xj)({
                        forUserProfile: !0
                    }),
                    m = (0, s.e7)([O.Z], (function() {
                        var e;
                        return null !== (n = null === (e = O.Z.getUserProfile(a.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== n ? n : []
                    })),
                    h = (0, s.e7)([L.Z], (function() {
                        return L.Z.hidePersonalInformation
                    })),
                    S = (0, k.Z)(a, l).profileTheme,
                    y = (0, s.e7)([F.default], (function() {
                        return F.default.locale
                    })),
                    v = o.useMemo((function() {
                        return m.filter((function(e) {
                            var n = w.Z.get(e.type);
                            return null != n && p(n)
                        }))
                    }), [m, p]),
                    b = o.useRef(null);
                o.useLayoutEffect((function() {
                    if (f) {
                        var e;
                        null == b || null === (e = b.current) || void 0 === e || e.scrollIntoView()
                    }
                }), [f]);
                return h ? (0, t.jsx)(V, {}) : (0, t.jsxs)(i.ScrollerThin, {
                    fade: !0,
                    className: W().infoScroller,
                    children: [(0, t.jsxs)("div", {
                        className: W().userInfoSection,
                        children: [null != (null == l ? void 0 : l.bio) && "" !== (null == l ? void 0 : l.bio) && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(i.Heading, {
                                variant: "eyebrow",
                                className: W().userInfoSectionHeader,
                                children: C.Z.Messages.USER_PROFILE_ABOUT_ME
                            }), (0, t.jsx)(G.Z, {
                                className: W().userInfoText,
                                userBio: null !== (r = null == l ? void 0 : l.bio) && void 0 !== r ? r : ""
                            })]
                        }), (0, t.jsx)(H.Z, {
                            userId: a.id,
                            headingClassName: W().userInfoSectionHeader,
                            textClassName: W().userInfoText
                        }), (0, t.jsx)(i.Heading, {
                            variant: "eyebrow",
                            className: W().userInfoSectionHeader,
                            children: C.Z.Messages.NOTE
                        }), (0, t.jsx)(R.Z, {
                            userId: a.id,
                            autoFocus: u,
                            className: W().note
                        })]
                    }), (0, t.jsx)(Y.OA, {
                        ref: b,
                        connectedAccounts: v,
                        theme: S,
                        locale: y,
                        className: W().userInfoSection,
                        userId: a.id
                    })]
                })
            }
            var X = r(233623),
                Q = r(857241),
                $ = r(960412);

            function q(e) {
                var n = e.displayProfile,
                    r = e.user,
                    o = e.selectedSection,
                    s = e.autoFocusNote,
                    i = e.onClose;
                switch (o) {
                    case $.oh.ACTIVITY:
                        return (0, t.jsx)(A, {
                            user: r
                        });
                    case $.oh.MUTUAL_GUILDS:
                        return (0, t.jsx)(Q.Z, {
                            user: r,
                            onClose: i
                        });
                    case $.oh.MUTUAL_FRIENDS:
                        return (0, t.jsx)(X.Z, {
                            user: r,
                            onClose: i
                        });
                    case $.oh.BOT_DATA_ACCESS:
                        return (0, t.jsx)(D, {
                            user: r
                        });
                    case $.oh.USER_INFO_CONNECTIONS:
                    case $.oh.USER_INFO:
                    default:
                        return (0, t.jsx)(K, {
                            displayProfile: n,
                            autoFocusNote: s,
                            user: r,
                            scrollToConnections: o === $.oh.USER_INFO_CONNECTIONS
                        })
                }
            }
            var J = r(795308),
                ee = r(761953),
                ne = r(971402),
                re = r(735885),
                te = r(560923),
                oe = r(841379),
                se = r(995141),
                ie = r(354368),
                ae = r(143113),
                le = r(840922),
                ce = r(42358),
                ue = r(818417),
                de = r(310126),
                fe = r(89836),
                pe = r(76834),
                me = r(678210),
                he = r(548625),
                Se = r(294184),
                ye = r.n(Se),
                Oe = r(737331),
                ve = r(519514),
                be = r.n(ve);

            function je(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function ge(e, n) {
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

            function Ee(e, n) {
                if (null == e) return {};
                var r, t, o = function(e, n) {
                    if (null == e) return {};
                    var r, t, o = {},
                        s = Object.keys(e);
                    for (t = 0; t < s.length; t++) {
                        r = s[t];
                        n.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < s.length; t++) {
                        r = s[t];
                        n.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function Ne(e) {
                var n = e.className,
                    r = Ee(e, ["className"]);
                return (0, t.jsx)(i.Button, ge(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        t.forEach((function(n) {
                            je(e, n, r[n])
                        }))
                    }
                    return e
                }({}, r), {
                    look: i.Button.Looks.FILLED,
                    size: i.Button.Sizes.SMALL,
                    className: ye()(be().actionButton, n)
                }))
            }

            function Ie(e) {
                var n = e.isCurrentUser,
                    r = e.user,
                    o = e.relationshipType,
                    s = e.onAddFriend,
                    a = e.onIgnoreFriend,
                    l = e.onSendMessage,
                    c = (0, Oe.R8)();
                return n || o === E.OGo.BLOCKED || r.isClyde() && !c ? null : o === E.OGo.FRIEND || r.bot || r.isClyde() ? (0, t.jsx)(Ne, {
                    color: i.Button.Colors.GREEN,
                    onClick: l,
                    children: C.Z.Messages.SEND_MESSAGE
                }) : o === E.OGo.PENDING_OUTGOING ? (0, t.jsx)(Ne, {
                    color: i.Button.Colors.GREEN,
                    disabled: !0,
                    children: C.Z.Messages.ADD_FRIEND_BUTTON_AFTER
                }) : o === E.OGo.PENDING_INCOMING ? (0, t.jsxs)("div", {
                    className: be().pendingIncoming,
                    children: [(0, t.jsx)(Ne, {
                        color: i.Button.Colors.GREEN,
                        onClick: s,
                        children: C.Z.Messages.FRIEND_REQUEST_ACCEPT
                    }), (0, t.jsx)(Ne, {
                        color: i.Button.Colors.PRIMARY,
                        onClick: a,
                        className: be().actionRightButton,
                        children: C.Z.Messages.FRIEND_REQUEST_IGNORE
                    })]
                }) : (0, t.jsx)(Ne, {
                    color: i.Button.Colors.GREEN,
                    onClick: s,
                    children: C.Z.Messages.ADD_FRIEND_BUTTON
                })
            }
            var xe = r(520453),
                Te = r(674198),
                Ae = r.n(Te);

            function _e(e, n, r, t, o, s, i) {
                try {
                    var a = e[s](i),
                        l = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(t, o)
            }

            function Ce(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, o) {
                        var s = e.apply(n, r);

                        function i(e) {
                            _e(s, t, o, i, a, "next", e)
                        }

                        function a(e) {
                            _e(s, t, o, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function Pe(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function Ze(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        Pe(e, n, r[n])
                    }))
                }
                return e
            }

            function Ue(e, n) {
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
            var Me = function(e, n) {
                    var r, t, o, s, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this
                    }), s;

                    function a(s) {
                        return function(a) {
                            return function(s) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (r = 1, t && (o = 2 & s[0] ? t.return : s[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, s[1])).done) return o;
                                    (t = 0, o) && (s = [2 & s[0], o.value]);
                                    switch (s[0]) {
                                        case 0:
                                        case 1:
                                            o = s;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: s[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            t = s[1];
                                            s = [0];
                                            continue;
                                        case 7:
                                            s = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                                i.label = s[1];
                                                break
                                            }
                                            if (6 === s[0] && i.label < o[1]) {
                                                i.label = o[1];
                                                o = s;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2];
                                                i.ops.push(s);
                                                break
                                            }
                                            o[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    s = n.call(e, i)
                                } catch (e) {
                                    s = [6, e];
                                    t = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & s[0]) throw s[1];
                                return {
                                    value: s[0] ? s[1] : void 0,
                                    done: !0
                                }
                            }([s, a])
                        }
                    }
                },
                De = i.AvatarSizes.SIZE_120,
                Re = de.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

            function we(e) {
                var n = e.displayProfile,
                    a = e.user,
                    l = e.guildId,
                    c = e.channelId,
                    u = e.friendToken,
                    d = e.isStreaming,
                    f = e.onClose,
                    p = function() {
                        f();
                        (0, re.xf)()
                    },
                    m = function() {
                        te.Z.removeFriend(a.id, {
                            location: "User Profile"
                        })
                    },
                    y = function(e) {
                        ee.Z.openPrivateChannel(a.id, !1, !1, e);
                        p()
                    },
                    v = function() {
                        try {
                            te.Z.addRelationship({
                                userId: a.id,
                                context: {
                                    location: "User Profile"
                                },
                                type: E.OGo.BLOCKED
                            })
                        } catch (e) {
                            p()
                        }
                    },
                    b = function() {
                        var e = "@me" === l ? void 0 : l;
                        (0, ie.pX)(a, e)
                    },
                    j = (0, fe.w)({
                        user: a,
                        size: 120
                    }),
                    g = j.avatarSrc,
                    N = j.eventHandlers,
                    I = j.isAvatarAnimating,
                    x = (0, s.e7)([le.Z], (function() {
                        return le.Z.getRelationshipType(a.id)
                    })),
                    T = (0, s.e7)([S.Z], (function() {
                        return S.Z.isMobileOnline(a.id)
                    })),
                    A = (0, s.e7)([S.Z], (function() {
                        return S.Z.getStatus(a.id)
                    })),
                    _ = (0, s.e7)([O.Z], (function() {
                        return O.Z.getUserProfile(a.id)
                    })),
                    P = (0, s.e7)([h.default], (function() {
                        return h.default.getId() === a.id
                    })),
                    Z = (0, k.Z)(a, n).profileTheme,
                    U = (0, oe.Z)({
                        user: a,
                        size: (0, se.y9)(De),
                        canAnimate: I
                    }),
                    M = o.useMemo((function() {
                        return (0, ae.W)(a, c)
                    }), [a, c]);
                return (0, t.jsxs)("header", {
                    children: [(0, t.jsx)(pe.Z, {
                        displayProfile: n,
                        onClose: p,
                        user: a,
                        profileType: $.y0.MODAL
                    }), (0, t.jsxs)("div", {
                        className: Ae().header,
                        children: [(0, t.jsx)("div", Ue(Ze({}, N), {
                            children: (0, t.jsx)(Re, {
                                src: g,
                                avatarDecoration: U,
                                size: De,
                                className: Ae().avatar,
                                status: M ? xe.Sk.UNKNOWN : d ? xe.Sk.STREAMING : A,
                                statusBackdropColor: (0, i.getStatusBackdropColor)(Z),
                                isMobile: T,
                                statusTooltip: !0,
                                "aria-label": a.username
                            })
                        })), (0, t.jsxs)("div", {
                            className: Ae().headerTop,
                            children: [(null == _ ? void 0 : _.profileFetchFailed) && !a.isClyde() ? (0, t.jsx)(i.Tooltip, {
                                text: C.Z.Messages.USER_PROFILE_LOAD_ERROR,
                                spacing: 20,
                                children: function(e) {
                                    return (0, t.jsx)(ue.Z, Ue(Ze({}, e), {
                                        className: Ae().warningCircleIcon,
                                        color: J.Z.unsafe_rawColors.YELLOW_300.css
                                    }))
                                }
                            }) : (0, t.jsx)(he.Z, {
                                user: a,
                                className: Ae().badgeList,
                                guildId: l,
                                size: he.V.SIZE_24,
                                shrinkAtCount: 8,
                                shrinkToSize: he.V.SIZE_18
                            }), (0, t.jsxs)("div", {
                                className: Ae().relationshipButtons,
                                children: [(0, t.jsx)(me.Z, {
                                    className: Ae().applicationInstallButton,
                                    application: null == _ ? void 0 : _.application
                                }), (0, t.jsx)(Ie, {
                                    user: a,
                                    isCurrentUser: P,
                                    relationshipType: x,
                                    onAddFriend: function() {
                                        try {
                                            te.Z.addRelationship({
                                                userId: a.id,
                                                context: {
                                                    location: "User Profile"
                                                },
                                                type: void 0,
                                                friendToken: u
                                            })
                                        } catch (e) {
                                            p()
                                        }
                                    },
                                    onIgnoreFriend: function() {
                                        te.Z.cancelFriendRequest(a.id, {
                                            location: "User Profile"
                                        })
                                    },
                                    onSendMessage: function() {
                                        return y("User Profile Modal - Send Message Button")
                                    }
                                }), P || a.isNonUserBot() ? null : (0, t.jsx)(i.Clickable, {
                                    focusProps: {
                                        offset: {
                                            left: 8
                                        }
                                    },
                                    onClick: function(e) {
                                        (0, ne.jW)(e, Ce((function() {
                                            var e, n;
                                            return Me(this, (function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return [4, r.e(95953).then(r.bind(r, 95953))];
                                                    case 1:
                                                        e = o.sent(), n = e.default;
                                                        return [2, function(e) {
                                                            return (0, t.jsx)(n, Ue(Ze({}, e), {
                                                                relationshipType: x,
                                                                onRemoveFriend: m,
                                                                onBlock: v,
                                                                onReport: b,
                                                                onMessage: function() {
                                                                    return y("User Profile Modal - Context Menu")
                                                                },
                                                                user: a
                                                            }))
                                                        }]
                                                }
                                            }))
                                        })))
                                    },
                                    children: (0, t.jsx)(ce.Z, {
                                        className: Ae().additionalActionsIcon
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
            var Be = r(334835),
                Fe = r(876759),
                Le = r(749565),
                ke = r(98464),
                Ge = r.n(ke);

            function He(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function Ye(e, n) {
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

            function Ve(e) {
                var n = e.user,
                    r = e.displayProfile,
                    o = (0, s.e7)([S.Z], (function() {
                        return S.Z.findActivity(n.id, (function(e) {
                            return e.type === E.IIU.CUSTOM_STATUS
                        }))
                    })),
                    a = Le.ZP.getName(n);
                return (0, t.jsxs)("div", {
                    className: Ge().container,
                    children: [null == a && (0, t.jsx)(Be.Z, {
                        user: n,
                        className: Ge().nameTag,
                        usernameClass: Ge().username,
                        discriminatorClass: Ge().discriminator
                    }), null != a && (0, t.jsxs)("div", {
                        children: [(0, t.jsx)(i.Text, {
                            variant: "text-lg/semibold",
                            style: {
                                marginRight: "12px"
                            },
                            children: a
                        }), (0, t.jsx)(Be.Z, {
                            user: n,
                            forceUsername: !0,
                            usernameClass: Ge().discriminator,
                            discriminatorClass: Ge().discriminator,
                            className: ye()(Ge().nameTag, Ge().nameTagSmall)
                        })]
                    }), null != (null == r ? void 0 : r.pronouns) && "" !== (null == r ? void 0 : r.pronouns) && (0, t.jsx)(i.Tooltip, {
                        text: C.Z.Messages.USER_PROFILE_PRONOUNS,
                        children: function(e) {
                            return (0, t.jsx)(i.Text, Ye(function(e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var r = null != arguments[n] ? arguments[n] : {},
                                        t = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))));
                                    t.forEach((function(n) {
                                        He(e, n, r[n])
                                    }))
                                }
                                return e
                            }({}, e), {
                                variant: "text-sm/normal",
                                className: ye()(Ge().pronouns, Ge().nameTagSmall),
                                children: r.pronouns
                            }))
                        }
                    }), null != o ? (0, t.jsx)("div", {
                        className: Ge().customStatusActivity,
                        children: (0, t.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: Ge().customStatusText,
                            children: (0, t.jsx)(Fe.Z, {
                                activity: o,
                                className: Ge().customStatus,
                                emojiClassName: Ge().customStatusEmoji,
                                soloEmojiClassName: Ge().customStatusSoloEmoji
                            })
                        })
                    }) : null]
                })
            }
            var ze = r(706643),
                We = r.n(ze);

            function Ke(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function Xe(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, o, s = [],
                            i = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(i = (t = r.next()).done); i = !0) {
                                s.push(t.value);
                                if (n && s.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return s
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Ke(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ke(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Qe(e) {
                var n = e.user,
                    r = e.isCurrentUser,
                    o = e.section,
                    a = e.setSection,
                    l = e.hasActivity,
                    c = (0, s.e7)([O.Z], (function() {
                        var e, r;
                        return null != (null === (e = O.Z.getUserProfile(n.id)) || void 0 === e || null === (r = e.application) || void 0 === r ? void 0 : r.id)
                    }));
                return (0, t.jsx)("div", {
                    className: We().tabBarContainer,
                    children: (0, t.jsxs)(i.TabBar, {
                        selectedItem: o,
                        type: "top",
                        onItemSelect: a,
                        className: We().tabBar,
                        children: [!n.isNonUserBot() || n.isClyde() ? (0, t.jsx)(i.TabBar.Item, {
                            className: We().tabBarItem,
                            id: $.oh.USER_INFO,
                            children: C.Z.Messages.USER_INFO
                        }) : null, !n.bot && l ? (0, t.jsx)(i.TabBar.Item, {
                            className: We().tabBarItem,
                            id: $.oh.ACTIVITY,
                            children: C.Z.Messages.USER_PROFILE_ACTIVITY
                        }) : null, r || n.isClyde() ? null : (0, t.jsx)(i.TabBar.Item, {
                            className: We().tabBarItem,
                            id: $.oh.MUTUAL_GUILDS,
                            children: C.Z.Messages.MUTUAL_GUILDS
                        }), n.bot || r ? null : (0, t.jsx)(i.TabBar.Item, {
                            className: We().tabBarItem,
                            id: $.oh.MUTUAL_FRIENDS,
                            children: C.Z.Messages.MUTUAL_FRIENDS
                        }), n.bot && c ? (0, t.jsx)(i.TabBar.Item, {
                            className: We().tabBarItem,
                            id: $.oh.BOT_DATA_ACCESS,
                            children: C.Z.Messages.BOTS_DATA_ACCESS_TAB
                        }) : null]
                    })
                })
            }

            function $e(e) {
                var n, r, O = e.user,
                    g = e.guildId,
                    N = e.channelId,
                    I = e.friendToken,
                    x = e.autoFocusNote,
                    T = e.initialSection,
                    A = void 0 === T ? $.oh.USER_INFO : T,
                    _ = e.transitionState,
                    P = e.onClose,
                    Z = (0, f.Z)(d.Z.PROFILE_MODAL).AnalyticsLocationProvider,
                    U = null !== (n = (0, s.e7)([y.default], (function() {
                        return y.default.getUser(O.id)
                    }))) && void 0 !== n ? n : O,
                    M = (0, v.Z)(null !== (r = null == U ? void 0 : U.id) && void 0 !== r ? r : "");
                (0, c.$)(function(e, n, r) {
                    n in e ? Object.defineProperty(e, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = r;
                    return e
                }({}, g, [U.id]));
                var D = (0, s.e7)([m.Z], (function() {
                        return null != m.Z.getAnyStreamForUser(U.id)
                    })),
                    R = (0, s.e7)([S.Z], (function() {
                        return S.Z.findActivity(U.id, (function(e) {
                            return e.type !== E.IIU.CUSTOM_STATUS
                        }))
                    })),
                    w = Xe(o.useState(!1), 2),
                    B = w[0],
                    F = w[1],
                    L = Xe(o.useState(U.isNonUserBot() && !U.isClyde() ? $.oh.MUTUAL_GUILDS : A), 2),
                    k = L[0],
                    G = L[1],
                    H = (0, s.e7)([h.default], (function() {
                        return h.default.getId() === U.id
                    })),
                    Y = null != R || D,
                    V = !H || Y,
                    z = o.createRef(),
                    W = (0, l.Z)(z);
                Y || k !== $.oh.ACTIVITY || G($.oh.USER_INFO);
                var K = o.useCallback((function(e) {
                        F(!0);
                        G(e)
                    }), []),
                    X = null == M ? void 0 : M.profileEffectID;
                return (0, t.jsx)(Z, {
                    children: (0, t.jsx)(a.Z, {
                        section: E.jXE.PROFILE_MODAL,
                        children: (0, t.jsxs)(i.ModalRoot, {
                            transitionState: _,
                            className: We().root,
                            "aria-label": C.Z.Messages.USER_PROFILE_MODAL,
                            children: [(0, t.jsx)("div", {
                                ref: z,
                                children: (0, t.jsxs)(j.Z, {
                                    user: U,
                                    profileType: $.y0.MODAL,
                                    children: [(0, t.jsx)("div", {
                                        className: We().topSection,
                                        children: (0, t.jsx)(we, {
                                            displayProfile: M,
                                            user: U,
                                            friendToken: I,
                                            onClose: P,
                                            isStreaming: (0, u.Z)(R),
                                            guildId: g,
                                            channelId: N
                                        })
                                    }), (0, t.jsxs)(j.Z.Inner, {
                                        children: [_ === i.ModalTransitionState.ENTERED && (0, t.jsx)(b.Z, {
                                            onTooltipClose: P
                                        }), (0, t.jsxs)("div", {
                                            className: We().body,
                                            children: [(0, t.jsx)(Ve, {
                                                user: U,
                                                displayProfile: M
                                            }), V ? (0, t.jsx)(Qe, {
                                                user: U,
                                                section: k === $.oh.USER_INFO_CONNECTIONS ? $.oh.USER_INFO : k,
                                                setSection: K,
                                                hasActivity: Y,
                                                isCurrentUser: H
                                            }) : (0, t.jsx)("div", {
                                                className: We().divider
                                            }), (0, t.jsx)(q, {
                                                displayProfile: M,
                                                user: U,
                                                autoFocusNote: x && !B,
                                                selectedSection: k,
                                                onClose: P
                                            })]
                                        })]
                                    })]
                                })
                            }), null != X && (0,
                                t.jsx)(p.Z, {
                                profileEffectID: X,
                                bannerAdjustment: null != (null == M ? void 0 : M.banner) ? 24 : 88,
                                isHovering: W
                            })]
                        })
                    })
                })
            }
        }
    }
]);