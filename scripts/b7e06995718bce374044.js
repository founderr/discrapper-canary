"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [1764], {
        1764: (e, n, r) => {
            r.r(n);
            r.d(n, {
                default: () => Qe
            });
            var t = r(785893),
                o = r(667294),
                s = r(202351),
                i = r(882723),
                a = r(213276),
                l = r(357088),
                c = r(503370),
                u = r(153686),
                d = r(19585),
                f = r(45147),
                p = r(177570),
                m = r(664625),
                h = r(491260),
                S = r(473903),
                y = r(90459),
                O = r(183490),
                b = r(347928),
                j = r(485552),
                v = r(616679),
                g = r(2590),
                E = r(890045),
                N = r.n(E),
                I = r(120133),
                x = r.n(I);

            function T(e) {
                var n = e.user,
                    r = (0, s.e7)([p.Z], (function() {
                        return null != p.Z.getAnyStreamForUser(n.id)
                    })),
                    a = (0, s.e7)([h.Z], (function() {
                        return h.Z.getActivities(n.id)
                    })),
                    l = o.useMemo((function() {
                        return a.filter((function(e) {
                            return e.type !== g.IIU.CUSTOM_STATUS
                        }))
                    }), [a]),
                    c = o.useMemo((function() {
                        return r ? l.find((function(e) {
                            return e.type === g.IIU.PLAYING
                        })) : null
                    }), [l, r]),
                    u = o.useMemo((function() {
                        return l.filter((function(e) {
                            return e !== c
                        }))
                    }), [c, l]);
                return (0, t.jsxs)(i.ScrollerThin, {
                    className: x().listScroller,
                    fade: !0,
                    children: [r ? (0, t.jsx)(v.Z, {
                        type: v.P.PROFILE_V2,
                        user: n,
                        source: "Profile Modal",
                        className: N().userProfileActivity,
                        activity: c,
                        actionColor: N().actionColor
                    }) : null, u.map((function(e) {
                        return (0, t.jsx)(v.Z, {
                            type: v.P.PROFILE_V2,
                            activity: e,
                            user: n,
                            useStoreStream: !1,
                            source: "Profile Modal",
                            className: N().userProfileActivity,
                            actionColor: N().actionColor
                        }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name))
                    }))]
                })
            }
            var A = r(712125),
                _ = r(473708),
                C = r(804798),
                P = r.n(C);

            function Z(e) {
                var n = e.content,
                    r = e.heading;
                return (0, t.jsxs)("div", {
                    className: P().row,
                    children: [null != r ? (0, t.jsx)(i.Heading, {
                        className: P().heading,
                        variant: "text-sm/normal",
                        children: r
                    }) : null, (0, t.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: n
                    })]
                })
            }

            function U(e) {
                var n = e.flags,
                    r = e.listScrollerStyle,
                    o = (0, A.w)({
                        flags: n
                    }),
                    s = o.hasMessageContent,
                    a = o.hasGuildPresences,
                    l = o.hasGuildMembers;
                if (null == n) return null;
                var c = [];
                s && c.push((0, t.jsx)(Z, {
                    heading: _.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                    content: _.Z.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
                }));
                a && c.push((0, t.jsx)(Z, {
                    heading: _.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                    content: _.Z.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
                }));
                l && c.push((0, t.jsx)(Z, {
                    heading: _.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                    content: _.Z.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
                }));
                c.length > 0 && c.push((0, t.jsx)("div", {
                    className: P().divider,
                    children: (0, t.jsx)(i.FormDivider, {})
                }));
                c.push((0, t.jsx)(Z, {
                    content: _.Z.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
                    })
                }));
                return (0, t.jsx)(i.ScrollerThin, {
                    className: r,
                    children: c
                })
            }

            function M(e) {
                var n, r = e.user,
                    o = null === (n = (0, s.e7)([y.Z], (function() {
                        return y.Z.getUserProfile(r.id)
                    }))) || void 0 === n ? void 0 : n.application;
                return (0, t.jsx)(U, {
                    flags: null == o ? void 0 : o.flags,
                    listScrollerStyle: x().listScroller
                })
            }
            var D = r(523615),
                R = r(265688),
                w = r(600993),
                B = r(384411),
                F = r(793461),
                L = r(340651),
                k = r(835575),
                G = r(505536),
                H = r(967783);

            function Y() {
                return (0, t.jsxs)("div", {
                    className: x().empty,
                    children: [(0,
                        t.jsx)("div", {
                        className: x().emptyIconStreamerMode
                    }), (0, t.jsx)("div", {
                        className: x().emptyText,
                        children: _.Z.Messages.STREAMER_MODE_ENABLED
                    })]
                })
            }
            var V = r(140311),
                z = r.n(V);

            function W(e) {
                var n, r, a = e.user,
                    l = e.displayProfile,
                    c = e.autoFocusNote,
                    u = void 0 !== c && c,
                    d = e.scrollToConnections,
                    f = void 0 !== d && d,
                    p = (0, w.Xj)({
                        forUserProfile: !0
                    }),
                    m = (0, s.e7)([y.Z], (function() {
                        var e;
                        return null !== (n = null === (e = y.Z.getUserProfile(a.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== n ? n : []
                    })),
                    h = (0, s.e7)([F.Z], (function() {
                        return F.Z.hidePersonalInformation
                    })),
                    S = (0, L.Z)(a, l).profileTheme,
                    O = (0, s.e7)([B.default], (function() {
                        return B.default.locale
                    })),
                    b = o.useMemo((function() {
                        return m.filter((function(e) {
                            var n = R.Z.get(e.type);
                            return null != n && p(n)
                        }))
                    }), [m, p]),
                    j = o.useRef(null);
                o.useLayoutEffect((function() {
                    if (f) {
                        var e;
                        null == j || null === (e = j.current) || void 0 === e || e.scrollIntoView()
                    }
                }), [f]);
                return h ? (0, t.jsx)(Y, {}) : (0, t.jsxs)(i.ScrollerThin, {
                    fade: !0,
                    className: z().infoScroller,
                    children: [(0, t.jsxs)("div", {
                        className: z().userInfoSection,
                        children: [null != (null == l ? void 0 : l.bio) && "" !== (null == l ? void 0 : l.bio) && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(i.Heading, {
                                variant: "eyebrow",
                                className: z().userInfoSectionHeader,
                                children: _.Z.Messages.USER_PROFILE_ABOUT_ME
                            }), (0, t.jsx)(k.Z, {
                                className: z().userInfoText,
                                userBio: null !== (r = null == l ? void 0 : l.bio) && void 0 !== r ? r : ""
                            })]
                        }), (0, t.jsx)(G.Z, {
                            userId: a.id,
                            headingClassName: z().userInfoSectionHeader,
                            textClassName: z().userInfoText
                        }), (0, t.jsx)(i.Heading, {
                            variant: "eyebrow",
                            className: z().userInfoSectionHeader,
                            children: _.Z.Messages.NOTE
                        }), (0, t.jsx)(D.Z, {
                            userId: a.id,
                            autoFocus: u,
                            className: z().note
                        })]
                    }), (0, t.jsx)(H.OA, {
                        ref: j,
                        connectedAccounts: b,
                        theme: S,
                        locale: O,
                        className: z().userInfoSection,
                        userId: a.id
                    })]
                })
            }
            var K = r(233623),
                X = r(857241),
                Q = r(960412);

            function $(e) {
                var n = e.displayProfile,
                    r = e.user,
                    o = e.selectedSection,
                    s = e.autoFocusNote,
                    i = e.onClose;
                switch (o) {
                    case Q.oh.ACTIVITY:
                        return (0, t.jsx)(T, {
                            user: r
                        });
                    case Q.oh.MUTUAL_GUILDS:
                        return (0, t.jsx)(X.Z, {
                            user: r,
                            onClose: i
                        });
                    case Q.oh.MUTUAL_FRIENDS:
                        return (0, t.jsx)(K.Z, {
                            user: r,
                            onClose: i
                        });
                    case Q.oh.BOT_DATA_ACCESS:
                        return (0, t.jsx)(M, {
                            user: r
                        });
                    case Q.oh.USER_INFO_CONNECTIONS:
                    case Q.oh.USER_INFO:
                    default:
                        return (0, t.jsx)(W, {
                            displayProfile: n,
                            autoFocusNote: s,
                            user: r,
                            scrollToConnections: o === Q.oh.USER_INFO_CONNECTIONS
                        })
                }
            }
            var q = r(795308),
                J = r(761953),
                ee = r(971402),
                ne = r(735885),
                re = r(560923),
                te = r(841379),
                oe = r(995141),
                se = r(354368),
                ie = r(143113),
                ae = r(840922),
                le = r(693622),
                ce = r(265367),
                ue = r(310126),
                de = r(89836),
                fe = r(76834),
                pe = r(678210),
                me = r(548625),
                he = r(294184),
                Se = r.n(he),
                ye = r(737331),
                Oe = r(260957),
                be = r.n(Oe);

            function je(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function ve(e, n) {
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

            function ge(e, n) {
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

            function Ee(e) {
                var n = e.className,
                    r = ge(e, ["className"]);
                return (0, t.jsx)(i.Button, ve(function(e) {
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
                    className: Se()(be().actionButton, n)
                }))
            }

            function Ne(e) {
                var n = e.isCurrentUser,
                    r = e.user,
                    o = e.relationshipType,
                    s = e.onAddFriend,
                    a = e.onIgnoreFriend,
                    l = e.onSendMessage,
                    c = (0, ye.R8)();
                return n || o === g.OGo.BLOCKED || r.isClyde() && !c ? null : o === g.OGo.FRIEND || r.bot || r.isClyde() ? (0, t.jsx)(Ee, {
                    color: i.Button.Colors.GREEN,
                    onClick: l,
                    children: _.Z.Messages.SEND_MESSAGE
                }) : o === g.OGo.PENDING_OUTGOING ? (0, t.jsx)(Ee, {
                    color: i.Button.Colors.GREEN,
                    disabled: !0,
                    children: _.Z.Messages.ADD_FRIEND_BUTTON_AFTER
                }) : o === g.OGo.PENDING_INCOMING ? (0, t.jsxs)("div", {
                    className: be().pendingIncoming,
                    children: [(0, t.jsx)(Ee, {
                        color: i.Button.Colors.GREEN,
                        onClick: s,
                        children: _.Z.Messages.FRIEND_REQUEST_ACCEPT
                    }), (0, t.jsx)(Ee, {
                        color: i.Button.Colors.PRIMARY,
                        onClick: a,
                        className: be().actionRightButton,
                        children: _.Z.Messages.FRIEND_REQUEST_IGNORE
                    })]
                }) : (0, t.jsx)(Ee, {
                    color: i.Button.Colors.GREEN,
                    onClick: s,
                    children: _.Z.Messages.ADD_FRIEND_BUTTON
                })
            }
            var Ie = r(520453),
                xe = r(928878),
                Te = r.n(xe);

            function Ae(e, n, r, t, o, s, i) {
                try {
                    var a = e[s](i),
                        l = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(t, o)
            }

            function _e(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, o) {
                        var s = e.apply(n, r);

                        function i(e) {
                            Ae(s, t, o, i, a, "next", e)
                        }

                        function a(e) {
                            Ae(s, t, o, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function Ce(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function Pe(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        Ce(e, n, r[n])
                    }))
                }
                return e
            }

            function Ze(e, n) {
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
            var Ue = function(e, n) {
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
                Me = i.AvatarSizes.SIZE_120,
                De = ue.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

            function Re(e) {
                var n = e.displayProfile,
                    a = e.user,
                    l = e.guildId,
                    c = e.channelId,
                    u = e.friendToken,
                    d = e.isStreaming,
                    f = e.onClose,
                    p = function() {
                        f();
                        (0, ne.xf)()
                    },
                    S = function() {
                        re.Z.removeFriend(a.id, {
                            location: "User Profile"
                        })
                    },
                    O = function(e) {
                        J.Z.openPrivateChannel(a.id, !1, !1, e);
                        p()
                    },
                    b = function() {
                        try {
                            re.Z.addRelationship({
                                userId: a.id,
                                context: {
                                    location: "User Profile"
                                },
                                type: g.OGo.BLOCKED
                            })
                        } catch (e) {
                            p()
                        }
                    },
                    j = function() {
                        (0, se.pX)(a)
                    },
                    v = (0, de.w)({
                        user: a,
                        size: 120
                    }),
                    E = v.avatarSrc,
                    N = v.eventHandlers,
                    I = v.isAvatarAnimating,
                    x = (0, s.e7)([ae.Z], (function() {
                        return ae.Z.getRelationshipType(a.id)
                    })),
                    T = (0,
                        s.e7)([h.Z], (function() {
                        return h.Z.isMobileOnline(a.id)
                    })),
                    A = (0, s.e7)([h.Z], (function() {
                        return h.Z.getStatus(a.id)
                    })),
                    C = (0, s.e7)([y.Z], (function() {
                        return y.Z.getUserProfile(a.id)
                    })),
                    P = (0, s.e7)([m.default], (function() {
                        return m.default.getId() === a.id
                    })),
                    Z = (0, L.Z)(a, n).profileTheme,
                    U = (0, te.Z)({
                        user: a,
                        size: (0, oe.y9)(Me),
                        canAnimate: I
                    }),
                    M = o.useMemo((function() {
                        return (0, ie.W)(a, c)
                    }), [a, c]);
                return (0, t.jsxs)("header", {
                    children: [(0, t.jsx)(fe.Z, {
                        displayProfile: n,
                        onClose: p,
                        user: a,
                        profileType: Q.y0.MODAL
                    }), (0, t.jsxs)("div", {
                        className: Te().header,
                        children: [(0, t.jsx)("div", Ze(Pe({}, N), {
                            children: (0, t.jsx)(De, {
                                src: E,
                                avatarDecoration: U,
                                size: Me,
                                className: Te().avatar,
                                status: M ? Ie.Sk.UNKNOWN : d ? Ie.Sk.STREAMING : A,
                                statusBackdropColor: (0, i.getStatusBackdropColor)(Z),
                                isMobile: T,
                                statusTooltip: !0,
                                "aria-label": a.username
                            })
                        })), (0, t.jsxs)("div", {
                            className: Te().headerTop,
                            children: [(null == C ? void 0 : C.profileFetchFailed) && !a.isClyde() ? (0, t.jsx)(i.Tooltip, {
                                text: _.Z.Messages.USER_PROFILE_LOAD_ERROR,
                                spacing: 20,
                                children: function(e) {
                                    return (0, t.jsx)(ce.Z, Ze(Pe({}, e), {
                                        className: Te().warningCircleIcon,
                                        color: q.Z.unsafe_rawColors.YELLOW_300.css
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
                                    application: null == C ? void 0 : C.application
                                }), (0, t.jsx)(Ne, {
                                    user: a,
                                    isCurrentUser: P,
                                    relationshipType: x,
                                    onAddFriend: function() {
                                        try {
                                            re.Z.addRelationship({
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
                                        re.Z.cancelFriendRequest(a.id, {
                                            location: "User Profile"
                                        })
                                    },
                                    onSendMessage: function() {
                                        return O("User Profile Modal - Send Message Button")
                                    }
                                }), P || a.isNonUserBot() ? null : (0, t.jsx)(i.Clickable, {
                                    focusProps: {
                                        offset: {
                                            left: 8
                                        }
                                    },
                                    onClick: function(e) {
                                        (0, ee.jW)(e, _e((function() {
                                            var e, n;
                                            return Ue(this, (function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return [4, r.e(95953).then(r.bind(r, 95953))];
                                                    case 1:
                                                        e = o.sent(), n = e.default;
                                                        return [2, function(e) {
                                                            return (0, t.jsx)(n, Ze(Pe({}, e), {
                                                                relationshipType: x,
                                                                onRemoveFriend: S,
                                                                onBlock: b,
                                                                onReport: j,
                                                                onMessage: function() {
                                                                    return O("User Profile Modal - Context Menu")
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
            var we = r(334835),
                Be = r(876759),
                Fe = r(749565),
                Le = r(562891),
                ke = r.n(Le);

            function Ge(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function He(e, n) {
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

            function Ye(e) {
                var n = e.user,
                    r = e.displayProfile,
                    o = (0, s.e7)([h.Z], (function() {
                        return h.Z.findActivity(n.id, (function(e) {
                            return e.type === g.IIU.CUSTOM_STATUS
                        }))
                    })),
                    a = Fe.ZP.getName(n);
                return (0, t.jsxs)("div", {
                    className: ke().container,
                    children: [null == a && (0, t.jsx)(we.Z, {
                        user: n,
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
                            user: n,
                            forceUsername: !0,
                            usernameClass: ke().discriminator,
                            discriminatorClass: ke().discriminator,
                            className: Se()(ke().nameTag, ke().nameTagSmall)
                        })]
                    }), null != (null == r ? void 0 : r.pronouns) && "" !== (null == r ? void 0 : r.pronouns) && (0, t.jsx)(i.Tooltip, {
                        text: _.Z.Messages.USER_PROFILE_PRONOUNS,
                        children: function(e) {
                            return (0, t.jsx)(i.Text, He(function(e) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var r = null != arguments[n] ? arguments[n] : {},
                                        t = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    }))));
                                    t.forEach((function(n) {
                                        Ge(e, n, r[n])
                                    }))
                                }
                                return e
                            }({}, e), {
                                variant: "text-sm/normal",
                                className: Se()(ke().pronouns, ke().nameTagSmall),
                                children: r.pronouns
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
            var Ve = r(619531),
                ze = r.n(Ve);

            function We(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function Ke(e, n) {
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
                    if ("string" == typeof e) return We(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return We(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Xe(e) {
                var n = e.user,
                    r = e.isCurrentUser,
                    o = e.section,
                    a = e.setSection,
                    l = e.hasActivity,
                    c = (0, s.e7)([y.Z], (function() {
                        var e, r;
                        return null != (null === (e = y.Z.getUserProfile(n.id)) || void 0 === e || null === (r = e.application) || void 0 === r ? void 0 : r.id)
                    }));
                return (0, t.jsx)("div", {
                    className: ze().tabBarContainer,
                    children: (0, t.jsxs)(i.TabBar, {
                        selectedItem: o,
                        type: "top",
                        onItemSelect: a,
                        className: ze().tabBar,
                        children: [!n.isNonUserBot() || n.isClyde() ? (0, t.jsx)(i.TabBar.Item, {
                            className: ze().tabBarItem,
                            id: Q.oh.USER_INFO,
                            children: _.Z.Messages.USER_INFO
                        }) : null, !n.bot && l ? (0, t.jsx)(i.TabBar.Item, {
                            className: ze().tabBarItem,
                            id: Q.oh.ACTIVITY,
                            children: _.Z.Messages.USER_PROFILE_ACTIVITY
                        }) : null, r || n.isClyde() ? null : (0, t.jsx)(i.TabBar.Item, {
                            className: ze().tabBarItem,
                            id: Q.oh.MUTUAL_GUILDS,
                            children: _.Z.Messages.MUTUAL_GUILDS
                        }), n.bot || r ? null : (0, t.jsx)(i.TabBar.Item, {
                            className: ze().tabBarItem,
                            id: Q.oh.MUTUAL_FRIENDS,
                            children: _.Z.Messages.MUTUAL_FRIENDS
                        }), n.bot && c ? (0, t.jsx)(i.TabBar.Item, {
                            className: ze().tabBarItem,
                            id: Q.oh.BOT_DATA_ACCESS,
                            children: _.Z.Messages.BOTS_DATA_ACCESS_TAB
                        }) : null]
                    })
                })
            }

            function Qe(e) {
                var n, r, y = e.user,
                    v = e.guildId,
                    E = e.channelId,
                    N = e.friendToken,
                    I = e.autoFocusNote,
                    x = e.initialSection,
                    T = void 0 === x ? Q.oh.USER_INFO : x,
                    A = e.transitionState,
                    C = e.onClose,
                    P = (0, d.Z)(u.Z.PROFILE_MODAL).AnalyticsLocationProvider,
                    Z = null !== (n = (0,
                        s.e7)([S.default], (function() {
                        return S.default.getUser(y.id)
                    }))) && void 0 !== n ? n : y,
                    U = (0, O.Z)(null !== (r = null == Z ? void 0 : Z.id) && void 0 !== r ? r : "");
                (0, l.$)(function(e, n, r) {
                    n in e ? Object.defineProperty(e, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = r;
                    return e
                }({}, v, [Z.id]));
                var M = (0, s.e7)([p.Z], (function() {
                        return null != p.Z.getAnyStreamForUser(Z.id)
                    })),
                    D = (0, s.e7)([h.Z], (function() {
                        return h.Z.findActivity(Z.id, (function(e) {
                            return e.type !== g.IIU.CUSTOM_STATUS
                        }))
                    })),
                    R = Ke(o.useState(!1), 2),
                    w = R[0],
                    B = R[1],
                    F = Ke(o.useState(Z.isNonUserBot() && !Z.isClyde() ? Q.oh.MUTUAL_GUILDS : T), 2),
                    L = F[0],
                    k = F[1],
                    G = (0, s.e7)([m.default], (function() {
                        return m.default.getId() === Z.id
                    })),
                    H = null != D || M,
                    Y = !G || H;
                H || L !== Q.oh.ACTIVITY || k(Q.oh.USER_INFO);
                var V = o.useCallback((function(e) {
                        B(!0);
                        k(e)
                    }), []),
                    z = null == U ? void 0 : U.profileEffectID;
                return (0, t.jsx)(P, {
                    children: (0, t.jsx)(a.Z, {
                        section: g.jXE.PROFILE_MODAL,
                        children: (0, t.jsxs)(i.ModalRoot, {
                            transitionState: A,
                            className: ze().root,
                            "aria-label": _.Z.Messages.USER_PROFILE_MODAL,
                            children: [(0, t.jsxs)(j.Z, {
                                user: Z,
                                profileType: Q.y0.MODAL,
                                children: [(0, t.jsx)("div", {
                                    className: ze().topSection,
                                    children: (0, t.jsx)(Re, {
                                        displayProfile: U,
                                        user: Z,
                                        friendToken: N,
                                        onClose: C,
                                        isStreaming: (0, c.Z)(D),
                                        guildId: v,
                                        channelId: E
                                    })
                                }), (0, t.jsxs)(j.Z.Inner, {
                                    children: [A === i.ModalTransitionState.ENTERED && (0, t.jsx)(b.Z, {
                                        onTooltipClose: C
                                    }), (0, t.jsxs)("div", {
                                        className: ze().body,
                                        children: [(0, t.jsx)(Ye, {
                                            user: Z,
                                            displayProfile: U
                                        }), Y ? (0, t.jsx)(Xe, {
                                            user: Z,
                                            section: L === Q.oh.USER_INFO_CONNECTIONS ? Q.oh.USER_INFO : L,
                                            setSection: V,
                                            hasActivity: H,
                                            isCurrentUser: G
                                        }) : (0, t.jsx)("div", {
                                            className: ze().divider
                                        }), (0, t.jsx)($, {
                                            displayProfile: U,
                                            user: Z,
                                            autoFocusNote: I && !w,
                                            selectedSection: L,
                                            onClose: C
                                        })]
                                    })]
                                })]
                            }), null != z && (0, t.jsx)(f.Z, {
                                profileEffectID: z,
                                bannerAdjustment: null != (null == U ? void 0 : U.banner) ? 24 : 88
                            })]
                        })
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=b7e06995718bce374044.js.map