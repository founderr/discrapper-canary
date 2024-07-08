i.d(n, {
    Z: function () {
        return O;
    }
}), i(47120);
var o = i(735250), s = i(470079), t = i(442837), l = i(481060), a = i(410575), r = i(727637), c = i(58540), d = i(420660), u = i(100527), I = i(906732), E = i(580552), f = i(680295), _ = i(199902), Z = i(314897), m = i(158776), v = i(594174), S = i(785717), x = i(621853), h = i(318661), N = i(726059), g = i(162267), p = i(502762), C = i(62154), T = i(293259), R = i(725954), M = i(228168), j = i(981631), A = i(689938), P = i(376234);
function U(e) {
    var n, i;
    let {
            user: s,
            isCurrentUser: a,
            section: r,
            setSection: c,
            hasActivity: d
        } = e, u = (0, t.e7)([x.Z], () => {
            var e, n;
            return (null === (n = x.Z.getUserProfile(s.id)) || void 0 === n ? void 0 : null === (e = n.application) || void 0 === e ? void 0 : e.id) != null;
        }), I = null === (n = (0, N.Z)(s.id, !s.bot && !a).mutualFriends) || void 0 === n ? void 0 : n.length, f = null === (i = (0, g.Z)(s.id, !s.bot && !a).mutualGuilds) || void 0 === i ? void 0 : i.length;
    return (0, o.jsx)('div', {
        className: P.tabBarContainer,
        children: (0, o.jsxs)(l.TabBar, {
            selectedItem: r,
            type: 'top',
            onItemSelect: c,
            className: P.tabBar,
            children: [
                !s.isNonUserBot() || s.isClyde() || (0, E.Z)(s.id) ? (0, o.jsx)(l.TabBar.Item, {
                    className: P.tabBarItem,
                    id: M.oh.USER_INFO,
                    children: A.Z.Messages.USER_INFO
                }) : null,
                !s.bot && d ? (0, o.jsx)(l.TabBar.Item, {
                    className: P.tabBarItem,
                    id: M.oh.ACTIVITY,
                    children: A.Z.Messages.USER_PROFILE_ACTIVITY
                }) : null,
                s.bot || a ? null : (0, o.jsx)(l.TabBar.Item, {
                    className: P.tabBarItem,
                    id: M.oh.MUTUAL_FRIENDS,
                    children: null == I ? A.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : A.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({ count: ''.concat(I) })
                }),
                a || s.isClyde() || (0, E.Z)(s.id) ? null : (0, o.jsx)(l.TabBar.Item, {
                    className: P.tabBarItem,
                    id: M.oh.MUTUAL_GUILDS,
                    children: null == f ? A.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : A.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({ count: ''.concat(f) })
                }),
                s.bot && u ? (0, o.jsx)(l.TabBar.Item, {
                    className: P.tabBarItem,
                    id: M.oh.BOT_DATA_ACCESS,
                    children: A.Z.Messages.BOTS_DATA_ACCESS_TAB
                }) : null
            ]
        })
    });
}
function O(e) {
    var n, i;
    let {
            user: x,
            guildId: N,
            channelId: g,
            messageId: O,
            roleId: L,
            friendToken: b,
            initialSection: y = M.oh.USER_INFO,
            initialSubsection: D,
            transitionState: B,
            sourceAnalyticsLocations: F = [],
            onClose: G
        } = e, k = null !== (n = (0, t.e7)([v.default], () => v.default.getUser(x.id))) && void 0 !== n ? n : x, w = (0, h.ZP)(null !== (i = k.id) && void 0 !== i ? i : ''), {analyticsLocations: Y} = (0, I.ZP)([
            ...F,
            u.Z.PROFILE_MODAL
        ]), V = (0, S.Q1)({
            layout: 'MODAL',
            userId: k.id,
            showGuildProfile: !1,
            guildId: N,
            channelId: g,
            messageId: O,
            roleId: L
        });
    (0, c.$)({ [N]: [k.id] });
    let H = (0, t.e7)([_.Z], () => null != _.Z.getAnyStreamForUser(k.id)), W = (0, t.e7)([m.Z], () => m.Z.findActivity(k.id, e => e.type !== j.IIU.CUSTOM_STATUS)), [z, K] = s.useState(!1), [Q, q] = s.useState(!k.isNonUserBot() || k.isClyde() || (0, E.Z)(k.id) ? y : M.oh.MUTUAL_GUILDS), J = (0, t.e7)([Z.default], () => Z.default.getId() === k.id), X = null != W || H, $ = !J || X, ee = s.createRef(), en = (0, r.Z)(ee);
    !X && Q === M.oh.ACTIVITY && q(M.oh.USER_INFO);
    let ei = s.useCallback(e => {
            V({
                action: 'PRESS_SECTION',
                analyticsLocations: Y
            }), K(!0), q(e);
        }, [
            V,
            Y
        ]), eo = null == w ? void 0 : w.profileEffectId;
    return (0, o.jsx)(I.Gt, {
        value: Y,
        children: (0, o.jsx)(S.Mt, {
            layout: 'MODAL',
            userId: k.id,
            guildId: N,
            channelId: g,
            messageId: O,
            roleId: L,
            showGuildProfile: !1,
            children: (0, o.jsx)(a.Z, {
                section: j.jXE.PROFILE_MODAL,
                children: (0, o.jsxs)(l.ModalRoot, {
                    transitionState: B,
                    className: P.root,
                    hideShadow: !0,
                    'aria-label': A.Z.Messages.USER_PROFILE_MODAL,
                    children: [
                        (0, o.jsxs)(p.Z, {
                            user: k,
                            displayProfile: w,
                            profileType: M.y0.MODAL,
                            ref: ee,
                            children: [
                                (0, o.jsx)(T.Z, {
                                    className: P.topSection,
                                    displayProfile: w,
                                    user: k,
                                    friendToken: b,
                                    onClose: G,
                                    isStreaming: (0, d.Z)(W),
                                    guildId: N,
                                    channelId: g,
                                    hasProfileEffect: null != eo
                                }),
                                (0, o.jsx)(p.Z.Overlay, {
                                    className: P.overlay,
                                    children: (0, o.jsxs)('div', {
                                        className: P.body,
                                        children: [
                                            (0, o.jsx)(R.Z, {
                                                user: k,
                                                displayProfile: w
                                            }),
                                            $ ? (0, o.jsx)(U, {
                                                user: k,
                                                section: Q === M.oh.USER_INFO_CONNECTIONS ? M.oh.USER_INFO : Q,
                                                setSection: ei,
                                                hasActivity: X,
                                                isCurrentUser: J
                                            }) : (0, o.jsx)('div', { className: P.divider }),
                                            (0, o.jsx)(C.Z, {
                                                displayProfile: w,
                                                user: k,
                                                autoFocusNote: D === M.Tb.NOTE && !z,
                                                selectedSection: Q,
                                                onClose: G
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        null != eo && (0, o.jsx)(f.Z, {
                            profileEffectId: eo,
                            bannerAdjustment: 0,
                            isHovering: en
                        })
                    ]
                })
            })
        })
    });
}
