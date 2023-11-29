(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["30927"], {
        855143: function(e, t, n) {
            "use strict";
            e.exports = n.p + "01864c39871ce619d855.svg"
        },
        934516: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a72746e7108167af95c8.svg"
        },
        267363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ack: function() {
                    return C
                },
                ackChannel: function() {
                    return E
                },
                bulkAck: function() {
                    return c
                },
                localAck: function() {
                    return f
                },
                enableAutomaticAck: function() {
                    return _
                },
                disableAutomaticAck: function() {
                    return A
                },
                ackGuildFeature: function() {
                    return T
                },
                ackUserFeature: function() {
                    return S
                }
            }), n("222007"), n("424973");
            var l = n("249654"),
                i = n("913144"),
                u = n("401690"),
                a = n("233069"),
                r = n("42203"),
                d = n("245997"),
                o = n("697218"),
                s = n("49111");

            function C(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    u = arguments.length > 4 ? arguments[4] : void 0;
                i.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: l,
                    immediate: t,
                    force: n,
                    context: s.CURRENT_APP_CONTEXT,
                    location: u
                })
            }

            function E(e) {
                e.isCategory() ? ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = r.default.getChannel(e);
                    if (null == l || null == l.guild_id) return;
                    let i = d.default.getCategories(l.guild_id);
                    if (null == i[e]) return;
                    let o = i[e].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return (0, a.isGuildReadableType)(t.type)
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return t.id
                        }),
                        s = [...o];
                    for (let e of (o.forEach(e => {
                            let t = u.default.getActiveJoinedThreadsForParent(l.guild_id, e);
                            for (let e in t) s.push(e)
                        }), s)) C(e, t, n)
                }(e.id, !0, !0) : e.isForumLikeChannel() ? C(e.id, !0, !0, l.default.fromTimestamp(Date.now())) : C(e.id, !0, !0)
            }

            function c(e) {
                i.default.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: s.CURRENT_APP_CONTEXT
                })
            }

            function f(e) {
                i.default.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function _(e, t) {
                i.default.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function A(e, t) {
                i.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function T(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function S(e, t) {
                var n;
                let l = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                null != l && i.default.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: e,
                    ackedId: t,
                    local: !1
                })
            }
        },
        87657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983"),
                i = n("884691"),
                u = n("77078"),
                a = n("390236"),
                r = i.memo(function(e) {
                    var t, n, r, d;
                    let {
                        user: o,
                        size: s = u.AvatarSizes.SIZE_32,
                        animate: C = !1,
                        "aria-hidden": E = !1,
                        ...c
                    } = e, f = i.useContext(a.default);
                    return (0, l.jsx)(u.Avatar, {
                        src: (t = o, n = (0, u.getAvatarSize)(s), r = C, d = f, t.getAvatarURL(d, n, r)),
                        size: s,
                        "aria-label": E ? void 0 : o.username,
                        "aria-hidden": E,
                        ...c
                    })
                })
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                u = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(d),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        d: "M12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2C6.47716 2 2 6.47715 2 12C2 13.9707 2.57006 15.8083 3.55427 17.3568C3.67702 17.5499 3.66393 17.8017 3.51347 17.9742L1.44658 20.3425C0.882052 20.9893 1.34145 22 2.2 22H12Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                u = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(d),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M19.6149 18.2495C19.2796 17.8862 19.2654 17.3356 19.5361 16.922C20.4618 15.5076 21 13.8166 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.8166 3.53823 15.5076 4.46392 16.922C4.73461 17.3356 4.7204 17.8862 4.38511 18.2495L4.36631 18.2698C3.95866 18.7115 3.25281 18.6977 2.91356 18.2016C1.70617 16.436 1 14.3005 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 14.3005 22.2938 16.436 21.0864 18.2016C20.7472 18.6977 20.0413 18.7115 19.6337 18.2698L19.6149 18.2495Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M16.8304 15.2329C17.2576 15.6957 18.0059 15.6526 18.284 15.0876C18.7425 14.1562 19 13.1082 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 13.1082 5.25752 14.1562 5.71599 15.0876C5.99412 15.6526 6.74245 15.6957 7.16959 15.2329L7.22446 15.1735C7.52844 14.8442 7.56612 14.3564 7.39179 13.9435C7.13949 13.3461 7 12.6893 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 12.6893 16.8605 13.3461 16.6082 13.9435C16.4339 14.3564 16.4716 14.8442 16.7755 15.1735L16.8304 15.2329Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M6.33123 20.0294C6.07903 20.755 6.45008 21.5304 7.13896 21.8703C8.60478 22.5936 10.255 23 12.0001 23C13.7452 23 15.3954 22.5936 16.8613 21.8703C17.5501 21.5304 17.9212 20.755 17.669 20.0294C16.8537 17.6837 14.6235 16 12.0001 16C9.37672 16 7.14656 17.6837 6.33123 20.0294Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                u = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(d),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M12 3.00002C12 2.44773 11.5523 2.00002 11 2.00002H10.9399C10.6596 2.00002 10.3922 2.11766 10.2027 2.32429L5.91667 7.00002H3C2.44772 7.00002 2 7.44773 2 8.00002V16C2 16.5523 2.44772 17 3 17H5.91667L10.2027 21.6757C10.3922 21.8824 10.6596 22 10.9399 22H11C11.5523 22 12 21.5523 12 21V3.00002Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M15.0998 20.7538C14.5203 20.8922 14 20.4242 14 19.8285V19.7963C14 19.2987 14.3688 18.8844 14.8488 18.7533C17.8177 17.9424 20 15.2261 20 12C20 8.77399 17.8177 6.05766 14.8488 5.24676C14.3688 5.11566 14 4.70135 14 4.20377V4.17159C14 3.5758 14.5203 3.1078 15.0998 3.24629C19.0575 4.19217 22 7.75247 22 12C22 16.2476 19.0575 19.8079 15.0998 20.7538Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        d: "M15.1571 16.512C14.587 16.7851 14 16.3088 14 15.6766V15.5365C14 15.1127 14.2774 14.7482 14.6328 14.5172C15.4558 13.9823 16 13.0547 16 12C16 10.9453 15.4558 10.0178 14.6328 9.48286C14.2774 9.25188 14 8.88737 14 8.46355V8.32342C14 7.69121 14.587 7.21491 15.1571 7.488C16.8387 8.29338 18 10.0111 18 12C18 13.989 16.8387 15.7067 15.1571 16.512Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    })]
                })
            }
        },
        320954: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("917351"),
                i = n.n(l);

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return i(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
            }
        },
        143909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            }), n("424973"), n("222007");
            var l = n("37983"),
                i = n("884691"),
                u = n("414456"),
                a = n.n(u),
                r = n("446674"),
                d = n("551042"),
                o = n("77078"),
                s = n("87657"),
                C = n("812204"),
                E = n("685665"),
                c = n("679653"),
                f = n("419830"),
                _ = n("123561"),
                A = n("161778"),
                T = n("233069"),
                S = n("27618"),
                h = n("162771"),
                L = n("697218"),
                I = n("941886"),
                N = n("810567"),
                g = n("904276"),
                D = n("875436"),
                U = n("449008"),
                R = n("16002"),
                p = n("782340"),
                O = n("827916"),
                m = n("855143"),
                P = n("934516");

            function v(e) {
                let {
                    channel: t,
                    ChannelIcon: n,
                    selected: i,
                    onClick: u
                } = e, a = (0, c.default)(t);
                return (0, l.jsxs)(o.Clickable, {
                    className: O.channelRow,
                    onClick: () => u(t.id),
                    children: [i ? (0, l.jsx)(D.default, {
                        className: O.radioIcon
                    }) : (0, l.jsx)(g.default, {
                        className: O.radioIcon
                    }), (0, l.jsx)(n, {
                        className: O.icon,
                        width: 16,
                        height: 16
                    }), (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "interactive-active",
                        children: a
                    })]
                })
            }

            function G(e) {
                let {
                    guildId: t,
                    selectedChannelId: n,
                    onSelectChannelId: u
                } = e, {
                    guildChannels: d
                } = (0, r.useStateFromStoresObject)([_.default], () => _.default.getGuildWithoutChangingCommunityRows(t)), s = i.useMemo(() => {
                    let e = [];
                    return d.forEachChannel(t => {
                        ((0, T.isGuildSelectableChannelType)(t.type) || (0, T.isGuildVocalChannelType)(t.type)) && e.push(t)
                    }), e
                }, [d]);
                return 0 === s.length ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: a(O.divider, O.bottomDivider)
                    }), (0, l.jsx)(o.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: O.contentPadding,
                        children: p.default.Messages.CLIP_SHARE_SELECT_CHANNEL
                    }), (0, l.jsx)(o.List, {
                        sections: [s.length],
                        sectionHeight: 0,
                        renderRow: e => {
                            let {
                                section: t,
                                row: i
                            } = e;
                            if (t > 0) return null;
                            let a = s[i],
                                r = (0, f.getChannelIconComponent)(a);
                            return null == r ? null : (0, l.jsx)(v, {
                                channel: a,
                                ChannelIcon: r,
                                selected: n === a.id,
                                onClick: u
                            }, a.id)
                        },
                        rowHeight: (e, t) => {
                            if (e > 0) return 0;
                            let n = s[t];
                            return null != n ? 56 : 0
                        },
                        renderSection: () => null,
                        className: a(O.channelList, O.contentPadding),
                        fade: !0
                    })]
                })
            }

            function x(e) {
                let {
                    friends: t,
                    searchQuery: n
                } = e, u = i.useMemo(() => 0 === n.length ? t : t.filter(e => e.username.toLowerCase().includes(n.toLowerCase())), [t, n]), d = (0, r.useStateFromStores)([A.default], () => A.default.theme);
                return 0 === u.length ? (0, l.jsxs)(I.default, {
                    theme: d,
                    className: O.emptyStateContainer,
                    children: [(0, l.jsx)(I.default.Image, {
                        width: 415,
                        height: 75,
                        lightSrc: P,
                        darkSrc: m
                    }), (0, l.jsx)(I.default.Text, {
                        note: p.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
                    })]
                }) : (0, l.jsx)(o.List, {
                    sections: [u.length],
                    sectionHeight: 0,
                    renderRow: e => {
                        let {
                            section: t,
                            row: n
                        } = e;
                        if (t > 0) return null;
                        let i = u[n],
                            a = u[n].username;
                        return (0, l.jsxs)("div", {
                            className: O.userRow,
                            children: [(0, l.jsx)(s.default, {
                                user: i
                            }), (0, l.jsx)(o.Text, {
                                className: O.username,
                                variant: "text-md/normal",
                                children: a
                            }), (0, l.jsx)(o.Button, {
                                className: O.friendShareButton,
                                look: o.ButtonLooks.OUTLINED,
                                size: o.ButtonSizes.SMALL,
                                color: o.ButtonColors.BRAND,
                                children: (0, l.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    children: p.default.Messages.SHARE
                                })
                            })]
                        }, i.id)
                    },
                    rowHeight: (e, t) => {
                        if (e > 0) return 0;
                        let n = u[t];
                        return null != n ? 52 : 0
                    },
                    renderSection: () => null,
                    className: a(O.friendsList, O.contentPadding),
                    fade: !0
                })
            }

            function H(e) {
                let {
                    clip: t,
                    editMetadata: n,
                    transitionState: u,
                    onClose: s
                } = e, [c, f] = i.useState(""), [_, A] = i.useState(!1), [T, I] = i.useState(null), g = (0, r.useStateFromStoresArray)([S.default], () => S.default.getFriendIDs()), D = (0, r.useStateFromStoresArray)([L.default], () => g.map(e => L.default.getUser(e)).filter(U.isNotNullish), [g]), m = (0, r.useStateFromStores)([h.default], () => h.default.getLastSelectedGuildId()), {
                    analyticsLocations: P
                } = (0, E.default)(C.default.CLIPS_SHARE_MODAL);
                async function v() {
                    if (null != T) {
                        A(!0);
                        try {
                            await (0, R.shareClip)(t, {
                                channelId: T,
                                editMetadata: n,
                                analyticsLocations: P
                            }), d.closeAllModals()
                        } catch (e) {} finally {
                            A(!1)
                        }
                    }
                }
                return (0, l.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.SMALL,
                    transitionState: u,
                    children: [(0, l.jsx)(o.Heading, {
                        className: a(O.title, O.contentPadding),
                        variant: "heading-lg/semibold",
                        color: "interactive-active",
                        children: p.default.Messages.CLIP_SHARE_MODAL_TITLE
                    }), (0, l.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        className: a(O.subtitle, O.contentPadding),
                        children: p.default.Messages.CLIP_SHARE_MODAL_SUBTITLE
                    }), (0, l.jsx)(N.default, {
                        className: O.searchBar,
                        query: c,
                        onChange: f,
                        size: N.default.Sizes.MEDIUM,
                        onClear: function() {
                            f("")
                        },
                        placeholder: p.default.Messages.INVITE_SEARCH_FOR_FRIENDS
                    }), (0, l.jsx)("div", {
                        className: a(O.divider, O.topDivider)
                    }), (0, l.jsx)(x, {
                        searchQuery: c,
                        friends: D
                    }), null != m && (0, l.jsx)(G, {
                        guildId: m,
                        selectedChannelId: T,
                        onSelectChannelId: I
                    }), (0, l.jsxs)(o.ModalFooter, {
                        children: [(0, l.jsx)(o.Button, {
                            disabled: null == T,
                            submitting: _,
                            color: o.Button.Colors.BRAND,
                            onClick: v,
                            children: p.default.Messages.CLIPS_EDIT_SHARE_CLIP
                        }), (0, l.jsx)(o.Button, {
                            submitting: _,
                            look: o.ButtonLooks.LINK,
                            onClick: s,
                            color: o.ButtonColors.PRIMARY,
                            children: p.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        123561: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            }), n("222007");
            var l = n("917351"),
                i = n.n(l),
                u = n("446674"),
                a = n("913144"),
                r = n("191225"),
                d = n("848415"),
                o = n("203288"),
                s = n("398604"),
                C = n("401690"),
                E = n("755624"),
                c = n("374363"),
                f = n("271938"),
                _ = n("870691"),
                A = n("42203"),
                T = n("816092"),
                S = n("546463"),
                h = n("957255"),
                L = n("660478"),
                I = n("18494"),
                N = n("282109"),
                g = n("449008"),
                D = n("319839"),
                U = n("397336");
            let R = null,
                p = null,
                O = new D.default;

            function m() {
                let e = I.default.getChannelId(),
                    t = I.default.getVoiceChannelId();
                return R = e, p = t, O.clear()
            }

            function P(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                return O.clearGuildId(t)
            }

            function v(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                return O.clearGuildId(t)
            }

            function G(e) {
                let {
                    guildId: t
                } = e;
                return O.clearGuildId(t)
            }

            function x(e) {
                let {
                    channelId: t
                } = e;
                return O.nonPositionalChannelIdUpdate(t)
            }

            function H() {
                return null != R && O.nonPositionalChannelIdUpdate(R)
            }

            function M(e) {
                let {
                    channel: t
                } = e;
                return O.nonPositionalChannelIdUpdate(t.id)
            }

            function j(e) {
                let {
                    id: t
                } = e;
                return O.nonPositionalChannelIdUpdate(t)
            }

            function y() {
                let e = I.default.getChannelId(),
                    t = I.default.getVoiceChannelId(),
                    n = R !== e || p !== t;
                return !!n && (i([R, p, e, t]).uniq().forEach(e => {
                    null != e && O.nonPositionalChannelIdUpdate(e) && (n = !0)
                }), R = e, p = t, !0)
            }

            function w(e) {
                let {
                    id: t
                } = e, n = A.default.getChannel(t);
                return null == n ? O.clearGuildId(t) : O.clearGuildId(n.guild_id)
            }

            function V(e) {
                let {
                    guildId: t
                } = e;
                return O.clearGuildId(t)
            }

            function B() {
                return O.updateSubtitles()
            }

            function F(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return O.updateSubtitles(t.guild_id)
            }
            class b extends u.default.Store {
                initialize() {
                    this.waitFor(C.default, f.default, _.default, A.default, T.default, r.default, S.default, o.default, s.default, E.default, h.default, L.default, I.default, N.default, c.default, d.default)
                }
                getGuild(e, t) {
                    let n = O.getGuild(e, t);
                    return {
                        guildChannelsVersion: n.version,
                        guildChannels: n
                    }
                }
                getGuildWithoutChangingCommunityRows(e) {
                    let t = O.getGuildWithoutCommunityRows(e);
                    return {
                        guildChannelsVersion: t.version,
                        guildChannels: t
                    }
                }
                recentsChannelCount(e) {
                    if (null == e) return 0;
                    let t = O.getGuildWithoutCommunityRows(e),
                        n = t.getCategoryFromSection(t.recentsSectionNumber);
                    return n.getShownChannelIds().length
                }
            }
            b.displayName = "ChannelListStore";
            var k = new b(a.default, {
                APPLICATION_FETCH_FAIL: B,
                APPLICATION_FETCH_SUCCESS: B,
                APPLICATION_FETCH: B,
                APPLICATIONS_FETCH_FAIL: B,
                APPLICATIONS_FETCH_SUCCESS: B,
                APPLICATIONS_FETCH: B,
                ASSISTANT_REBUILD_ACTION_STACK: m,
                ASSISTANT_COMPLETE_ACTION: function(e) {
                    let {
                        kind: t,
                        targetId: n
                    } = e;
                    if ("openTextChannel" === t || "joinVoiceChannel" === t) {
                        let e = A.default.getChannel(n);
                        return null != e && O.clearGuildId(e.guild_id)
                    }
                    return ("splashScreen" === t || "joinVoiceChannelMultitask" === t) && O.clear()
                },
                ASSISTANT_DISMISS: m,
                BACKGROUND_SYNC: m,
                BULK_ACK: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return i(t).map(e => {
                        var t;
                        return null === (t = A.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.guild_id
                    }).filter(g.isNotNullish).uniq().forEach(e => {
                        O.clearGuildId(e) && (n = !0)
                    }), n
                },
                BULK_CLEAR_RECENTS: G,
                CACHE_LOADED_LAZY: m,
                CATEGORY_COLLAPSE_ALL: G,
                CATEGORY_COLLAPSE: w,
                CATEGORY_EXPAND_ALL: G,
                CATEGORY_EXPAND: w,
                CHANNEL_ACK: x,
                CHANNEL_COLLAPSE: function(e) {
                    var t;
                    let {
                        channelId: n
                    } = e;
                    return O.clearGuildId(null === (t = A.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id)
                },
                CHANNEL_CREATE: v,
                CHANNEL_DELETE: v,
                CHANNEL_LOCAL_ACK: x,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: x,
                CHANNEL_SELECT: y,
                CHANNEL_STATUSES: function(e) {
                    return O.clearGuildId(e.guildId)
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return i(t).map(e => e.guild_id).uniq().forEach(e => {
                        O.clearGuildId(e) && (n = !0)
                    }), n
                },
                CONNECTION_OPEN_SUPPLEMENTAL: B,
                CONNECTION_OPEN: m,
                CURRENT_USER_UPDATE: m,
                DECAY_READ_STATES: m,
                DEV_TOOLS_DESIGN_TOGGLE_SET: m,
                DISABLE_AUTOMATIC_ACK: x,
                DISMISS_FAVORITE_SUGGESTION: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return O.nonPositionalChannelIdUpdate(t)
                },
                DRAWER_CLOSE: H,
                DRAWER_OPEN: H,
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return O.updateSubtitles(t, n)
                },
                EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
                    B()
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: B,
                ENABLE_AUTOMATIC_ACK: x,
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return O.updateSubtitles(t)
                },
                GAMES_DATABASE_FETCH_FAIL: B,
                GAMES_DATABASE_FETCH: B,
                GAMES_DATABASE_UPDATE: B,
                GUILD_APPLICATIONS_FETCH_SUCCESS: B,
                GUILD_CREATE: P,
                GUILD_DELETE: P,
                GUILD_FEED_FETCH_SUCCESS: B,
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    return f.default.getId() === n.id && O.clearGuildId(t)
                },
                GUILD_ROLE_CREATE: G,
                GUILD_ROLE_DELETE: G,
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: G,
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: G,
                GUILD_ROLE_UPDATE: G,
                GUILD_SCHEDULED_EVENT_CREATE: F,
                GUILD_SCHEDULED_EVENT_DELETE: F,
                GUILD_SCHEDULED_EVENT_UPDATE: F,
                GUILD_TOGGLE_COLLAPSE_MUTED: G,
                GUILD_UPDATE: P,
                IMPERSONATE_STOP: G,
                IMPERSONATE_UPDATE: G,
                LOAD_MESSAGES_SUCCESS: x,
                MESSAGE_ACK: x,
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return O.nonPositionalChannelIdUpdate(t)
                },
                MESSAGE_DELETE_BULK: x,
                MESSAGE_DELETE: x,
                OVERLAY_INITIALIZE: m,
                PASSIVE_UPDATE_V1: function(e) {
                    return null != e.channels && (O.clearGuildId(e.guildId), !0)
                },
                RESORT_THREADS: x,
                SET_RECENTLY_ACTIVE_COLLAPSED: m,
                THREAD_CREATE: M,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return O.nonPositionalChannelUpdate(t)
                },
                THREAD_LIST_SYNC: G,
                THREAD_MEMBER_UPDATE: j,
                THREAD_MEMBERS_UPDATE: j,
                THREAD_UPDATE: M,
                UPDATE_CHANNEL_DIMENSIONS: x,
                UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
                    let {
                        guildId: t
                    } = e;
                    O.updateSubtitles(t)
                },
                USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guild_id: t
                        } = e;
                        return O.clearGuildId(t)
                    })
                },
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G,
                USER_GUILD_SETTINGS_GUILD_UPDATE: G,
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t;
                    let {
                        settings: n
                    } = e;
                    if (n.type !== U.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
                    let l = null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
                        i = !1;
                    return null != l && Object.keys(l).forEach(e => {
                        let t = l[e].guildRecentsDismissedAt;
                        null != t && (i = O.updateRecentsCategory(e) || i)
                    }), i
                },
                VOICE_CATEGORY_COLLAPSE: V,
                VOICE_CATEGORY_EXPAND: V,
                VOICE_CHANNEL_SELECT: y,
                VOICE_CHANNEL_STATUS_UPDATE: function(e) {
                    return O.nonPositionalChannelIdUpdate(e.id)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = y(), l = new Set;
                    for (let {
                            channelId: e,
                            oldChannelId: i
                        }
                        of t) null != i && !l.has(i) && (O.nonPositionalChannelIdUpdate(i) && (n = !0), l.add(i)), null != e && !l.has(e) && (O.nonPositionalChannelIdUpdate(e) && (n = !0), l.add(e));
                    return n
                },
                WINDOW_FOCUS: H
            })
        },
        615387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getHasImportantUnread: function() {
                    return a
                }
            }), n("446674");
            var l = n("660478"),
                i = n("282109"),
                u = n("133335");

            function a(e) {
                return l.default.hasUnread(e.id) && i.default.getChannelUnreadMode(e) === u.UnreadMode.IMPORTANT
            }
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var l = n("446674"),
                i = n("913144"),
                u = n("449008"),
                a = n("42203"),
                r = n("341542"),
                d = n("923959"),
                o = n("49111");
            let s = {},
                C = 0;

            function E() {
                C += 1
            }

            function c(e) {
                if (null == s[e]) return !1;
                delete s[e]
            }
            class f extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default, r.default), this.removeChangeListener(E), this.addChangeListener(E), s = null != e ? e : {}
                }
                getState() {
                    return s
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!s[e] && s[e]
                }
                getCollapsedCategories() {
                    return s
                }
                get version() {
                    return C
                }
            }
            f.displayName = "CategoryCollapseStore", f.persistKey = "collapsedCategories";
            var _ = new f(i.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (s = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? s[e.channel_id] = !0 : delete s[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(u.isNotNullish));
                    for (let e in s) {
                        let t = a.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete s[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (s[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (s[t]) return !1;
                    s[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return c(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    d.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (s[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    d.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete s[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return c(t)
                }
            })
        },
        245997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("424973"), n("222007"), n("808653");
            var l = n("446674"),
                i = n("913144"),
                u = n("320954"),
                a = n("379881"),
                r = n("271938"),
                d = n("42203"),
                o = n("923959"),
                s = n("305961"),
                C = n("49111");
            let E = null,
                c = {},
                f = null;

            function _() {
                return {
                    _categories: [],
                    null: []
                }
            }
            let A = _();

            function T(e, t) {
                e.index = t
            }

            function S(e) {
                let t = o.default.getChannels(e),
                    n = _(),
                    l = e => {
                        var t;
                        let {
                            channel: l
                        } = e, i = null !== (t = n[null != l.parent_id ? l.parent_id : "null"]) && void 0 !== t ? t : n.null;
                        i.push({
                            channel: l,
                            index: -1
                        })
                    };
                return t[C.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    n._categories.push({
                        channel: t,
                        index: -1
                    }), n[t.id] = []
                }), t[0, o.GUILD_SELECTABLE_CHANNELS_KEY].forEach(l), t[0, o.GUILD_VOCAL_CHANNELS_KEY].forEach(l), (0, u.default)(n._categories, n).forEach(T), c[e] = n, n
            }

            function h() {
                c = {}, null != E && S(E)
            }

            function L(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                c[t] = void 0, E === t && S(t)
            }

            function I(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                c[t] = void 0, E === t && S(t)
            }

            function N(e) {
                let {
                    guildId: t
                } = e;
                c[t] = void 0, t === E && S(t)
            }

            function g(e, t) {
                if (f = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (c[n] = void 0, n === E && S(n), !0)
            }

            function D() {
                S(C.FAVORITES)
            }
            class U extends l.default.Store {
                initialize() {
                    this.waitFor(o.default, s.default, r.default, d.default, a.default), this.syncWith([a.default], D)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = c[e];
                        return null != t ? t : S(e)
                    }(e) : A
                }
            }
            U.displayName = "GuildCategoryStore";
            var R = new U(i.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (E = null != t ? t : null, null == t || null != c[t]) return !1;
                    S(t)
                },
                CONNECTION_OPEN: h,
                OVERLAY_INITIALIZE: h,
                CACHE_LOADED_LAZY: h,
                GUILD_CREATE: L,
                GUILD_UPDATE: L,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    delete c[t]
                },
                CHANNEL_CREATE: I,
                CHANNEL_DELETE: I,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            guild_id: e
                        }
                        of t) null != e && (c[e] = void 0, n = !0, E === e && S(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (r.default.getId() !== n.id) return !1;
                    c[t] = void 0, t === E && S(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == E) return !1;
                    S(E)
                },
                GUILD_ROLE_CREATE: N,
                GUILD_ROLE_UPDATE: N,
                GUILD_ROLE_DELETE: N,
                IMPERSONATE_UPDATE: N,
                IMPERSONATE_STOP: N,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != f ? g(d.default.getChannel(f), null) : g(d.default.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            channelId: n,
                            sessionId: l
                        } = t;
                        return r.default.getSessionId() !== l ? e : g(d.default.getChannel(n), n) || e
                    }, !1)
                }
            })
        },
        941886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmptyStateImage: function() {
                    return T
                },
                EmptyStateText: function() {
                    return S
                },
                default: function() {
                    return i
                }
            });
            var l, i, u = n("37983"),
                a = n("884691"),
                r = n("414456"),
                d = n.n(r),
                o = n("819855"),
                s = n("77078"),
                C = n("145131"),
                E = n("49111"),
                c = n("430098"),
                f = n("926622");
            let {
                Provider: _,
                Consumer: A
            } = a.createContext(E.ThemeTypes.DARK);
            class T extends a.PureComponent {
                render() {
                    let {
                        lightSrc: e,
                        darkSrc: t,
                        width: n,
                        height: l,
                        offsetX: i,
                        offsetY: a,
                        style: r
                    } = this.props;
                    return (0, u.jsx)(A, {
                        children: s => (0, u.jsx)(C.default.Child, {
                            grow: 0,
                            className: d(c.image, f.marginBottom40),
                            style: {
                                ...r,
                                width: n,
                                height: l,
                                marginLeft: i,
                                marginTop: a,
                                backgroundImage: "url(".concat((0, o.isThemeDark)(s) ? t : e, ")")
                            }
                        })
                    })
                }
            }
            let S = e => {
                let {
                    children: t,
                    className: n,
                    noteClassName: l,
                    note: i,
                    style: a
                } = e;
                return (0, u.jsxs)(C.default.Child, {
                    grow: 0,
                    direction: C.default.Direction.VERTICAL,
                    style: a,
                    children: [null != t && (0, u.jsx)(s.H, {
                        className: d(n, c.title),
                        children: t
                    }), null != i ? (0, u.jsx)("div", {
                        className: d(l, c.text, f.marginTop8),
                        children: i
                    }) : null]
                })
            };
            (l = class extends a.PureComponent {
                render() {
                    let {
                        children: e,
                        theme: t,
                        className: n,
                        style: l
                    } = this.props;
                    return (0, u.jsx)(_, {
                        value: t,
                        children: (0, u.jsx)(C.default, {
                            direction: C.default.Direction.VERTICAL,
                            align: C.default.Align.CENTER,
                            justify: C.default.Justify.CENTER,
                            className: d(c.wrapper, n),
                            style: l,
                            children: e
                        })
                    })
                }
            }).Text = S, l.Image = T, i = l
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                u = n("733154"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: u,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: i,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, u.ChatIcon, void 0, {
                    size: 24
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                u = n("390300"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: u,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, u.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                u = n("287083"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...u
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: i
                        })
                    })
                }, u.StageIcon, void 0, {
                    size: 32
                })
        }
    }
]);