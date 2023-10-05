"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [1764], {
        1764: (e, r, n) => {
            n.r(r);
            n.d(r, {
                default: () => Qe
            });
            var t = n(785893),
                o = n(667294),
                s = n(202351),
                i = n(304548),
                a = n(213276),
                l = n(662478),
                c = n(357088),
                u = n(503370),
                d = n(153686),
                f = n(19585),
                p = n(753251),
                m = n(177570),
                h = n(664625),
                S = n(491260),
                y = n(473903),
                O = n(90459),
                j = n(183490),
                v = n(347928),
                b = n(485552),
                g = n(616679),
                E = n(2590),
                N = n(685125),
                I = n.n(N),
                x = n(3765),
                T = n.n(x);

            function _(e) {
                var r = e.user,
                    n = (0, s.e7)([m.Z], (function() {
                        return null != m.Z.getAnyStreamForUser(r.id)
                    })),
                    a = (0, s.e7)([S.Z], (function() {
                        return S.Z.getActivities(r.id)
                    })),
                    l = o.useMemo((function() {
                        return a.filter((function(e) {
                            return e.type !== E.IIU.CUSTOM_STATUS
                        }))
                    }), [a]),
                    c = o.useMemo((function() {
                        return n ? l.find((function(e) {
                            return e.type === E.IIU.PLAYING
                        })) : null
                    }), [l, n]),
                    u = o.useMemo((function() {
                        return l.filter((function(e) {
                            return e !== c
                        }))
                    }), [c, l]);
                return (0, t.jsxs)(i.ScrollerThin, {
                    className: T().listScroller,
                    fade: !0,
                    children: [n ? (0, t.jsx)(g.Z, {
                        type: g.P.PROFILE_V2,
                        user: r,
                        source: "Profile Modal",
                        className: I().userProfileActivity,
                        activity: c,
                        actionColor: I().actionColor
                    }) : null, u.map((function(e) {
                        return (0, t.jsx)(g.Z, {
                            type: g.P.PROFILE_V2,
                            activity: e,
                            user: r,
                            useStoreStream: !1,
                            source: "Profile Modal",
                            className: I().userProfileActivity,
                            actionColor: I().actionColor
                        }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name))
                    }))]
                })
            }
            var C = n(712125),
                A = n(473708),
                P = n(988351),
                Z = n.n(P);

            function U(e) {
                var r = e.content,
                    n = e.heading;
                return (0, t.jsxs)("div", {
                    className: Z().row,
                    children: [null != n ? (0, t.jsx)(i.Heading, {
                        className: Z().heading,
                        variant: "text-sm/normal",
                        children: n
                    }) : null, (0, t.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: r
                    })]
                })
            }

            function M(e) {
                var r = e.flags,
                    n = e.listScrollerStyle,
                    o = (0, C.w)({
                        flags: r
                    }),
                    s = o.hasMessageContent,
                    a = o.hasGuildPresences,
                    l = o.hasGuildMembers;
                if (null == r) return null;
                var c = [];
                s && c.push((0, t.jsx)(U, {
                    heading: A.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                    content: A.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
                }));
                a && c.push((0, t.jsx)(U, {
                    heading: A.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                    content: A.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
                }));
                l && c.push((0, t.jsx)(U, {
                    heading: A.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                    content: A.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
                }));
                c.length > 0 && c.push((0, t.jsx)("div", {
                    className: Z().divider,
                    children: (0, t.jsx)(i.FormDivider, {})
                }));
                c.push((0, t.jsx)(U, {
                    content: A.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
                    })
                }));
                return (0, t.jsx)(i.ScrollerThin, {
                    className: n,
                    children: c
                })
            }

            function D(e) {
                var r, n = e.user,
                    o = null === (r = (0, s.e7)([O.Z], (function() {
                        return O.Z.getUserProfile(n.id)
                    }))) || void 0 === r ? void 0 : r.application;
                return (0, t.jsx)(M, {
                    flags: null == o ? void 0 : o.flags,
                    listScrollerStyle: T().listScroller
                })
            }
            var R = n(523615),
                w = n(265688),
                B = n(600993),
                F = n(384411),
                L = n(793461),
                k = n(340651),
                G = n(835575),
                H = n(843889),
                Y = n(505536),
                V = n(967783);

            function z() {
                return (0, t.jsxs)("div", {
                    className: T().empty,
                    children: [(0, t.jsx)("div", {
                        className: T().emptyIconStreamerMode
                    }), (0, t.jsx)("div", {
                        className: T().emptyText,
                        children: A.Z.Messages.STREAMER_MODE_ENABLED
                    })]
                })
            }
            var W = n(624177),
                K = n.n(W);

            function X(e) {
                var r, n, a = e.user,
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
                        return null !== (r = null === (e = O.Z.getUserProfile(a.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== r ? r : []
                    })),
                    h = (0, s.e7)([L.Z], (function() {
                        return L.Z.hidePersonalInformation
                    })),
                    S = (0, k.Z)(a, l).profileTheme,
                    y = (0, s.e7)([F.default], (function() {
                        return F.default.locale
                    })),
                    j = o.useMemo((function() {
                        return m.filter((function(e) {
                            var r = w.Z.get(e.type);
                            return null != r && p(r)
                        }))
                    }), [m, p]),
                    v = o.useRef(null);
                o.useLayoutEffect((function() {
                    if (f) {
                        var e;
                        null == v || null === (e = v.current) || void 0 === e || e.scrollIntoView()
                    }
                }), [f]);
                return h ? (0, t.jsx)(z, {}) : (0, t.jsxs)(i.ScrollerThin, {
                    fade: !0,
                    className: K().infoScroller,
                    children: [(0, t.jsxs)("div", {
                        className: K().userInfoSection,
                        children: [null != (null == l ? void 0 : l.bio) && "" !== (null == l ? void 0 : l.bio) && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(i.Heading, {
                                variant: "eyebrow",
                                className: K().userInfoSectionHeader,
                                children: A.Z.Messages.USER_PROFILE_ABOUT_ME
                            }), (0, t.jsx)(G.Z, {
                                className: K().userInfoText,
                                userBio: null !== (n = null == l ? void 0 : l.bio) && void 0 !== n ? n : ""
                            })]
                        }), a.isClyde() && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(i.Heading, {
                                variant: "eyebrow",
                                className: K().userInfoSectionHeader,
                                children: A.Z.Messages.MORE_INFO
                            }), (0, t.jsx)(H.Z, {
                                className: K().userInfoText
                            })]
                        }), (0, t.jsx)(Y.Z, {
                            userId: a.id,
                            headingClassName: K().userInfoSectionHeader,
                            textClassName: K().userInfoText
                        }), (0, t.jsx)(i.Heading, {
                            variant: "eyebrow",
                            className: K().userInfoSectionHeader,
                            children: A.Z.Messages.NOTE
                        }), (0, t.jsx)(R.Z, {
                            userId: a.id,
                            autoFocus: u,
                            className: K().note
                        })]
                    }), (0, t.jsx)(V.OA, {
                        ref: v,
                        connectedAccounts: j,
                        theme: S,
                        locale: y,
                        className: K().userInfoSection,
                        userId: a.id
                    })]
                })
            }
            var Q = n(233623),
                $ = n(857241),
                q = n(960412);

            function J(e) {
                var r = e.displayProfile,
                    n = e.user,
                    o = e.selectedSection,
                    s = e.autoFocusNote,
                    i = e.onClose;
                switch (o) {
                    case q.oh.ACTIVITY:
                        return (0, t.jsx)(_, {
                            user: n
                        });
                    case q.oh.MUTUAL_GUILDS:
                        return (0, t.jsx)($.Z, {
                            user: n,
                            onClose: i
                        });
                    case q.oh.MUTUAL_FRIENDS:
                        return (0, t.jsx)(Q.Z, {
                            user: n,
                            onClose: i
                        });
                    case q.oh.BOT_DATA_ACCESS:
                        return (0, t.jsx)(D, {
                            user: n
                        });
                    case q.oh.USER_INFO_CONNECTIONS:
                    case q.oh.USER_INFO:
                    default:
                        return (0, t.jsx)(X, {
                            displayProfile: r,
                            autoFocusNote: s,
                            user: n,
                            scrollToConnections: o === q.oh.USER_INFO_CONNECTIONS
                        })
                }
            }
            var ee = n(795308),
                re = n(761953),
                ne = n(971402),
                te = n(735885),
                oe = n(560923),
                se = n(354368),
                ie = n(143113),
                ae = n(840922),
                le = n(42358),
                ce = n(818417),
                ue = n(310126),
                de = n(169844),
                fe = n(76834),
                pe = n(678210),
                me = n(548625),
                he = n(294184),
                Se = n.n(he),
                ye = n(737331),
                Oe = n(519514),
                je = n.n(Oe);

            function ve(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function be(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        r && (t = t.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        n.push.apply(n, t)
                    }
                    return n
                }(Object(r)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                }));
                return e
            }

            function ge(e, r) {
                if (null == e) return {};
                var n, t, o = function(e, r) {
                    if (null == e) return {};
                    var n, t, o = {},
                        s = Object.keys(e);
                    for (t = 0; t < s.length; t++) {
                        n = s[t];
                        r.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < s.length; t++) {
                        n = s[t];
                        r.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function Ee(e) {
                var r = e.className,
                    n = ge(e, ["className"]);
                return (0, t.jsx)(i.Button, be(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var n = null != arguments[r] ? arguments[r] : {},
                            t = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        t.forEach((function(r) {
                            ve(e, r, n[r])
                        }))
                    }
                    return e
                }({}, n), {
                    look: i.Button.Looks.FILLED,
                    size: i.Button.Sizes.SMALL,
                    className: Se()(je().actionButton, r)
                }))
            }

            function Ne(e) {
                var r = e.isCurrentUser,
                    n = e.user,
                    o = e.relationshipType,
                    s = e.onAddFriend,
                    a = e.onIgnoreFriend,
                    l = e.onSendMessage,
                    c = (0, ye.R8)();
                return r || o === E.OGo.BLOCKED || n.isClyde() && !c ? null : o === E.OGo.FRIEND || n.bot || n.isClyde() ? (0, t.jsx)(Ee, {
                    color: i.Button.Colors.GREEN,
                    onClick: l,
                    children: A.Z.Messages.SEND_MESSAGE
                }) : o === E.OGo.PENDING_OUTGOING ? (0, t.jsx)(Ee, {
                    color: i.Button.Colors.GREEN,
                    disabled: !0,
                    children: A.Z.Messages.ADD_FRIEND_BUTTON_AFTER
                }) : o === E.OGo.PENDING_INCOMING ? (0, t.jsxs)("div", {
                    className: je().pendingIncoming,
                    children: [(0, t.jsx)(Ee, {
                        color: i.Button.Colors.GREEN,
                        onClick: s,
                        children: A.Z.Messages.FRIEND_REQUEST_ACCEPT
                    }), (0, t.jsx)(Ee, {
                        color: i.Button.Colors.PRIMARY,
                        onClick: a,
                        className: je().actionRightButton,
                        children: A.Z.Messages.FRIEND_REQUEST_IGNORE
                    })]
                }) : (0, t.jsx)(Ee, {
                    color: i.Button.Colors.GREEN,
                    onClick: s,
                    children: A.Z.Messages.ADD_FRIEND_BUTTON
                })
            }
            var Ie = n(520453),
                xe = n(674198),
                Te = n.n(xe);

            function _e(e, r, n, t, o, s, i) {
                try {
                    var a = e[s](i),
                        l = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? r(l) : Promise.resolve(l).then(t, o)
            }

            function Ce(e) {
                return function() {
                    var r = this,
                        n = arguments;
                    return new Promise((function(t, o) {
                        var s = e.apply(r, n);

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

            function Ae(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function Pe(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {},
                        t = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    t.forEach((function(r) {
                        Ae(e, r, n[r])
                    }))
                }
                return e
            }

            function Ze(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        r && (t = t.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        n.push.apply(n, t)
                    }
                    return n
                }(Object(r)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                }));
                return e
            }
            var Ue = function(e, r) {
                    var n, t, o, s, i = {
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
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, t && (o = 2 & s[0] ? t.return : s[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, s[1])).done) return o;
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
                                    s = r.call(e, i)
                                } catch (e) {
                                    s = [6, e];
                                    t = 0
                                } finally {
                                    n = o = 0
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
                Me = i.AvatarSizes.SIZE_120,
                De = ue.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

            function Re(e) {
                var r = e.displayProfile,
                    a = e.user,
                    l = e.guildId,
                    c = e.channelId,
                    u = e.friendToken,
                    d = e.isStreaming,
                    f = e.onClose,
                    p = function() {
                        f();
                        (0, te.xf)()
                    },
                    m = function() {
                        oe.Z.removeFriend(a.id, {
                            location: "User Profile"
                        })
                    },
                    y = function(e) {
                        re.Z.openPrivateChannel(a.id, !1, !1, e);
                        p()
                    },
                    j = function() {
                        try {
                            oe.Z.addRelationship({
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
                    v = function() {
                        var e = "@me" === l ? void 0 : l;
                        (0, se.pX)(a, e)
                    },
                    b = (0, s.e7)([ae.Z], (function() {
                        return ae.Z.getRelationshipType(a.id)
                    })),
                    g = (0, s.e7)([S.Z], (function() {
                        return S.Z.isMobileOnline(a.id)
                    })),
                    N = (0, s.e7)([S.Z], (function() {
                        return S.Z.getStatus(a.id)
                    })),
                    I = (0, s.e7)([O.Z], (function() {
                        return O.Z.getUserProfile(a.id)
                    })),
                    x = (0, s.e7)([h.default], (function() {
                        return h.default.getId() === a.id
                    })),
                    T = (0, k.Z)(a, r).profileTheme,
                    _ = (0, de.Z)({
                        user: a,
                        size: Me
                    }),
                    C = _.avatarSrc,
                    P = _.eventHandlers,
                    Z = _.avatarDecorationSrc,
                    U = o.useMemo((function() {
                        return (0, ie.W)(a, c)
                    }), [a, c]);
                return (0, t.jsxs)("header", {
                    children: [(0, t.jsx)(fe.Z, {
                        displayProfile: r,
                        onClose: p,
                        user: a,
                        profileType: q.y0.MODAL
                    }), (0, t.jsxs)("div", {
                        className: Te().header,
                        children: [(0, t.jsx)("div", Ze(Pe({}, P), {
                            children: (0, t.jsx)(De, {
                                src: C,
                                avatarDecoration: Z,
                                size: Me,
                                className: Te().avatar,
                                status: U ? Ie.Sk.UNKNOWN : d ? Ie.Sk.STREAMING : N,
                                statusBackdropColor: (0, i.getStatusBackdropColor)(T),
                                isMobile: g,
                                statusTooltip: !0,
                                "aria-label": a.username
                            })
                        })), (0, t.jsxs)("div", {
                            className: Te().headerTop,
                            children: [(null == I ? void 0 : I.profileFetchFailed) && !a.isClyde() ? (0, t.jsx)(i.Tooltip, {
                                text: A.Z.Messages.USER_PROFILE_LOAD_ERROR,
                                spacing: 20,
                                children: function(e) {
                                    return (0, t.jsx)(ce.Z, Ze(Pe({}, e), {
                                        className: Te().warningCircleIcon,
                                        color: ee.Z.unsafe_rawColors.YELLOW_300.css
                                    }))
                                }
                            }) : (0, t.jsx)(me.Z, {
                                user: a,
                                className: Te().badgeList,
                                guildId: l,
                                size: me.V.SIZE_24,
                                shrinkAtCount: 8,
                                shrinkToSize: me.V.SIZE_18
                            }), (0, t.jsxs)("div", {
                                className: Te().relationshipButtons,
                                children: [(0, t.jsx)(pe.Z, {
                                    className: Te().applicationInstallButton,
                                    application: null == I ? void 0 : I.application
                                }), (0, t.jsx)(Ne, {
                                    user: a,
                                    isCurrentUser: x,
                                    relationshipType: b,
                                    onAddFriend: function() {
                                        try {
                                            oe.Z.addRelationship({
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
                                        oe.Z.cancelFriendRequest(a.id, {
                                            location: "User Profile"
                                        })
                                    },
                                    onSendMessage: function() {
                                        return y("User Profile Modal - Send Message Button")
                                    }
                                }), x || a.isNonUserBot() ? null : (0, t.jsx)(i.Clickable, {
                                    focusProps: {
                                        offset: {
                                            left: 8
                                        }
                                    },
                                    onClick: function(e) {
                                        (0, ne.jW)(e, Ce((function() {
                                            var e, r;
                                            return Ue(this, (function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return [4, n.e(95953).then(n.bind(n, 95953))];
                                                    case 1:
                                                        e = o.sent(), r = e.default;
                                                        return [2, function(e) {
                                                            return (0, t.jsx)(r, Ze(Pe({}, e), {
                                                                relationshipType: b,
                                                                onRemoveFriend: m,
                                                                onBlock: j,
                                                                onReport: v,
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
                                    children: (0, t.jsx)(le.Z, {
                                        className: Te().additionalActionsIcon
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
            var we = n(334835),
                Be = n(876759),
                Fe = n(749565),
                Le = n(98464),
                ke = n.n(Le);

            function Ge(e, r, n) {
                r in e ? Object.defineProperty(e, r, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = n;
                return e
            }

            function He(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        r && (t = t.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        n.push.apply(n, t)
                    }
                    return n
                }(Object(r)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                }));
                return e
            }

            function Ye(e) {
                var r = e.user,
                    n = e.displayProfile,
                    o = (0, s.e7)([S.Z], (function() {
                        return S.Z.findActivity(r.id, (function(e) {
                            return e.type === E.IIU.CUSTOM_STATUS
                        }))
                    })),
                    a = Fe.ZP.getName(r);
                return (0, t.jsxs)("div", {
                    className: ke().container,
                    children: [null == a && (0, t.jsx)(we.Z, {
                        user: r,
                        className: ke().nameTag,
                        usernameClass: ke().username,
                        discriminatorClass: ke().discriminator
                    }), null != a && (0, t.jsxs)("div", {
                        children: [(0, t.jsx)(i.Text, {
                            variant: "text-lg/semibold",
                            style: {
                                marginRight: "12px"
                            },
                            children: a
                        }), (0, t.jsx)(we.Z, {
                            user: r,
                            forceUsername: !0,
                            usernameClass: ke().discriminator,
                            discriminatorClass: ke().discriminator,
                            className: Se()(ke().nameTag, ke().nameTagSmall)
                        })]
                    }), null != (null == n ? void 0 : n.pronouns) && "" !== (null == n ? void 0 : n.pronouns) && (0, t.jsx)(i.Tooltip, {
                        text: A.Z.Messages.USER_PROFILE_PRONOUNS,
                        children: function(e) {
                            return (0, t.jsx)(i.Text, He(function(e) {
                                for (var r = 1; r < arguments.length; r++) {
                                    var n = null != arguments[r] ? arguments[r] : {},
                                        t = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))));
                                    t.forEach((function(r) {
                                        Ge(e, r, n[r])
                                    }))
                                }
                                return e
                            }({}, e), {
                                variant: "text-sm/normal",
                                className: Se()(ke().pronouns, ke().nameTagSmall),
                                children: n.pronouns
                            }))
                        }
                    }), null != o ? (0, t.jsx)("div", {
                        className: ke().customStatusActivity,
                        children: (0, t.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: ke().customStatusText,
                            children: (0, t.jsx)(Be.Z, {
                                activity: o,
                                className: ke().customStatus,
                                emojiClassName: ke().customStatusEmoji,
                                soloEmojiClassName: ke().customStatusSoloEmoji
                            })
                        })
                    }) : null]
                })
            }
            var Ve = n(706643),
                ze = n.n(Ve);

            function We(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
                return t
            }

            function Ke(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var t, o, s = [],
                            i = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(i = (t = n.next()).done); i = !0) {
                                s.push(t.value);
                                if (r && s.length === r) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return s
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return We(e, r);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return We(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Xe(e) {
                var r = e.user,
                    n = e.isCurrentUser,
                    o = e.section,
                    a = e.setSection,
                    l = e.hasActivity,
                    c = (0, s.e7)([O.Z], (function() {
                        var e, n;
                        return null != (null === (e = O.Z.getUserProfile(r.id)) || void 0 === e || null === (n = e.application) || void 0 === n ? void 0 : n.id)
                    }));
                return (0, t.jsx)("div", {
                    className: ze().tabBarContainer,
                    children: (0, t.jsxs)(i.TabBar, {
                        selectedItem: o,
                        type: "top",
                        onItemSelect: a,
                        className: ze().tabBar,
                        children: [!r.isNonUserBot() || r.isClyde() ? (0, t.jsx)(i.TabBar.Item, {
                            className: ze().tabBarItem,
                            id: q.oh.USER_INFO,
                            children: A.Z.Messages.USER_INFO
                        }) : null, !r.bot && l ? (0, t.jsx)(i.TabBar.Item, {
                            className: ze().tabBarItem,
                            id: q.oh.ACTIVITY,
                            children: A.Z.Messages.USER_PROFILE_ACTIVITY
                        }) : null, n || r.isClyde() ? null : (0, t.jsx)(i.TabBar.Item, {
                            className: ze().tabBarItem,
                            id: q.oh.MUTUAL_GUILDS,
                            children: A.Z.Messages.MUTUAL_GUILDS
                        }), r.bot || n ? null : (0, t.jsx)(i.TabBar.Item, {
                            className: ze().tabBarItem,
                            id: q.oh.MUTUAL_FRIENDS,
                            children: A.Z.Messages.MUTUAL_FRIENDS
                        }), r.bot && c ? (0, t.jsx)(i.TabBar.Item, {
                            className: ze().tabBarItem,
                            id: q.oh.BOT_DATA_ACCESS,
                            children: A.Z.Messages.BOTS_DATA_ACCESS_TAB
                        }) : null]
                    })
                })
            }

            function Qe(e) {
                var r, n, O = e.user,
                    g = e.guildId,
                    N = e.channelId,
                    I = e.friendToken,
                    x = e.autoFocusNote,
                    T = e.initialSection,
                    _ = void 0 === T ? q.oh.USER_INFO : T,
                    C = e.transitionState,
                    P = e.onClose,
                    Z = (0, f.Z)(d.Z.PROFILE_MODAL).AnalyticsLocationProvider,
                    U = null !== (r = (0, s.e7)([y.default], (function() {
                        return y.default.getUser(O.id)
                    }))) && void 0 !== r ? r : O,
                    M = (0, j.Z)(null !== (n = null == U ? void 0 : U.id) && void 0 !== n ? n : "");
                (0, c.$)(function(e, r, n) {
                    r in e ? Object.defineProperty(e, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = n;
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
                    w = Ke(o.useState(!1), 2),
                    B = w[0],
                    F = w[1],
                    L = Ke(o.useState(U.isNonUserBot() && !U.isClyde() ? q.oh.MUTUAL_GUILDS : _), 2),
                    k = L[0],
                    G = L[1],
                    H = (0, s.e7)([h.default], (function() {
                        return h.default.getId() === U.id
                    })),
                    Y = null != R || D,
                    V = !H || Y,
                    z = o.createRef(),
                    W = (0, l.Z)(z);
                Y || k !== q.oh.ACTIVITY || G(q.oh.USER_INFO);
                var K = o.useCallback((function(e) {
                        F(!0);
                        G(e)
                    }), []),
                    X = null == M ? void 0 : M.profileEffectID;
                return (0, t.jsx)(Z, {
                    children: (0, t.jsx)(a.Z, {
                        section: E.jXE.PROFILE_MODAL,
                        children: (0, t.jsxs)(i.ModalRoot, {
                            transitionState: C,
                            className: ze().root,
                            "aria-label": A.Z.Messages.USER_PROFILE_MODAL,
                            children: [(0, t.jsx)("div", {
                                ref: z,
                                children: (0, t.jsxs)(b.Z, {
                                    user: U,
                                    profileType: q.y0.MODAL,
                                    children: [(0, t.jsx)("div", {
                                        className: ze().topSection,
                                        children: (0, t.jsx)(Re, {
                                            displayProfile: M,
                                            user: U,
                                            friendToken: I,
                                            onClose: P,
                                            isStreaming: (0, u.Z)(R),
                                            guildId: g,
                                            channelId: N
                                        })
                                    }), (0, t.jsxs)(b.Z.Inner, {
                                        children: [C === i.ModalTransitionState.ENTERED && (0, t.jsx)(v.Z, {
                                            onTooltipClose: P
                                        }), (0, t.jsxs)("div", {
                                            className: ze().body,
                                            children: [(0, t.jsx)(Ye, {
                                                user: U,
                                                displayProfile: M
                                            }), V ? (0, t.jsx)(Xe, {
                                                user: U,
                                                section: k === q.oh.USER_INFO_CONNECTIONS ? q.oh.USER_INFO : k,
                                                setSection: K,
                                                hasActivity: Y,
                                                isCurrentUser: H
                                            }) : (0, t.jsx)("div", {
                                                className: ze().divider
                                            }), (0, t.jsx)(J, {
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
                                bannerAdjustment: 24,
                                isHovering: W
                            })]
                        })
                    })
                })
            }
        }
    }
]);