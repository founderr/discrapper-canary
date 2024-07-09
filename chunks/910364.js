i.d(n, {
    Z: function () {
        return O;
    }
}), i(47120);
var l = i(735250), s = i(470079), o = i(442837), t = i(481060), a = i(410575), r = i(727637), d = i(58540), c = i(420660), u = i(100527), I = i(906732), f = i(580552), _ = i(680295), E = i(199902), m = i(314897), Z = i(158776), v = i(594174), S = i(785717), x = i(621853), h = i(318661), N = i(726059), p = i(162267), g = i(502762), T = i(62154), C = i(293259), j = i(725954), R = i(228168), A = i(981631), M = i(689938), P = i(376234);
function U(e) {
    var n, i;
    let {
            user: s,
            isCurrentUser: a,
            section: r,
            setSection: d,
            hasActivity: c
        } = e, u = (0, o.e7)([x.Z], () => {
            var e, n;
            return (null === (n = x.Z.getUserProfile(s.id)) || void 0 === n ? void 0 : null === (e = n.application) || void 0 === e ? void 0 : e.id) != null;
        }), I = null === (n = (0, N.Z)(s.id, !s.bot && !a).mutualFriends) || void 0 === n ? void 0 : n.length, _ = null === (i = (0, p.Z)(s.id, !s.bot && !a).mutualGuilds) || void 0 === i ? void 0 : i.length;
    return (0, l.jsx)('div', {
        className: P.tabBarContainer,
        children: (0, l.jsxs)(t.TabBar, {
            selectedItem: r,
            type: 'top',
            onItemSelect: d,
            className: P.tabBar,
            children: [
                !s.isNonUserBot() || s.isClyde() || (0, f.Z)(s.id) ? (0, l.jsx)(t.TabBar.Item, {
                    className: P.tabBarItem,
                    id: R.oh.USER_INFO,
                    children: M.Z.Messages.USER_INFO
                }) : null,
                !s.bot && c ? (0, l.jsx)(t.TabBar.Item, {
                    className: P.tabBarItem,
                    id: R.oh.ACTIVITY,
                    children: M.Z.Messages.USER_PROFILE_ACTIVITY
                }) : null,
                s.bot || a ? null : (0, l.jsx)(t.TabBar.Item, {
                    className: P.tabBarItem,
                    id: R.oh.MUTUAL_FRIENDS,
                    children: null == I ? M.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : M.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({ count: ''.concat(I) })
                }),
                a || s.isClyde() || (0, f.Z)(s.id) ? null : (0, l.jsx)(t.TabBar.Item, {
                    className: P.tabBarItem,
                    id: R.oh.MUTUAL_GUILDS,
                    children: null == _ ? M.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : M.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({ count: ''.concat(_) })
                }),
                s.bot && u ? (0, l.jsx)(t.TabBar.Item, {
                    className: P.tabBarItem,
                    id: R.oh.BOT_DATA_ACCESS,
                    children: M.Z.Messages.BOTS_DATA_ACCESS_TAB
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
            channelId: p,
            messageId: O,
            roleId: L,
            friendToken: b,
            initialSection: y = R.oh.USER_INFO,
            initialSubsection: B,
            transitionState: D,
            sourceAnalyticsLocations: F = [],
            onClose: G
        } = e, w = null !== (n = (0, o.e7)([v.default], () => v.default.getUser(x.id))) && void 0 !== n ? n : x, k = (0, h.ZP)(null !== (i = w.id) && void 0 !== i ? i : ''), {analyticsLocations: Y} = (0, I.ZP)([
            ...F,
            u.Z.PROFILE_MODAL
        ]), V = (0, S.Q1)({
            layout: 'MODAL',
            userId: w.id,
            showGuildProfile: !1,
            guildId: N,
            channelId: p,
            messageId: O,
            roleId: L
        });
    (0, d.$)({ [N]: [w.id] });
    let H = (0, o.e7)([E.Z], () => null != E.Z.getAnyStreamForUser(w.id)), W = (0, o.e7)([Z.Z], () => Z.Z.findActivity(w.id, e => e.type !== A.IIU.CUSTOM_STATUS)), [z, K] = s.useState(!1), [q, Q] = s.useState(!w.isNonUserBot() || w.isClyde() || (0, f.Z)(w.id) ? y : R.oh.MUTUAL_GUILDS), J = (0, o.e7)([m.default], () => m.default.getId() === w.id), X = null != W || H, $ = !J || X, ee = s.createRef(), en = (0, r.Z)(ee);
    !X && q === R.oh.ACTIVITY && Q(R.oh.USER_INFO);
    let ei = s.useCallback(e => {
            V({
                action: 'PRESS_SECTION',
                analyticsLocations: Y
            }), K(!0), Q(e);
        }, [
            V,
            Y
        ]), el = null == k ? void 0 : k.profileEffectId;
    return (0, l.jsx)(I.Gt, {
        value: Y,
        children: (0, l.jsx)(S.Mt, {
            layout: 'MODAL',
            userId: w.id,
            guildId: N,
            channelId: p,
            messageId: O,
            roleId: L,
            showGuildProfile: !1,
            children: (0, l.jsx)(a.Z, {
                section: A.jXE.PROFILE_MODAL,
                children: (0, l.jsxs)(t.ModalRoot, {
                    transitionState: D,
                    className: P.root,
                    hideShadow: !0,
                    'aria-label': M.Z.Messages.USER_PROFILE_MODAL,
                    children: [
                        (0, l.jsxs)(g.Z, {
                            user: w,
                            displayProfile: k,
                            profileType: R.y0.MODAL,
                            ref: ee,
                            children: [
                                (0, l.jsx)(C.Z, {
                                    className: P.topSection,
                                    displayProfile: k,
                                    user: w,
                                    friendToken: b,
                                    onClose: G,
                                    isStreaming: (0, c.Z)(W),
                                    guildId: N,
                                    channelId: p,
                                    hasProfileEffect: null != el
                                }),
                                (0, l.jsx)(g.Z.Overlay, {
                                    className: P.overlay,
                                    children: (0, l.jsxs)('div', {
                                        className: P.body,
                                        children: [
                                            (0, l.jsx)(j.Z, {
                                                user: w,
                                                displayProfile: k
                                            }),
                                            $ ? (0, l.jsx)(U, {
                                                user: w,
                                                section: q === R.oh.USER_INFO_CONNECTIONS ? R.oh.USER_INFO : q,
                                                setSection: ei,
                                                hasActivity: X,
                                                isCurrentUser: J
                                            }) : (0, l.jsx)('div', { className: P.divider }),
                                            (0, l.jsx)(T.Z, {
                                                displayProfile: k,
                                                user: w,
                                                autoFocusNote: B === R.Tb.NOTE && !z,
                                                selectedSection: q,
                                                onClose: G
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        null != el && (0, l.jsx)(_.Z, {
                            profileEffectId: el,
                            bannerAdjustment: 0,
                            isHovering: en
                        })
                    ]
                })
            })
        })
    });
}
