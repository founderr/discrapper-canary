n.d(i, {
    Z: function () {
        return L;
    }
}), n(47120);
var l = n(735250), s = n(470079), t = n(442837), o = n(481060), a = n(410575), r = n(727637), d = n(58540), c = n(420660), u = n(100527), I = n(906732), f = n(580552), _ = n(680295), E = n(199902), m = n(314897), Z = n(158776), v = n(594174), S = n(785717), x = n(621853), h = n(318661), p = n(726059), g = n(162267), N = n(502762), T = n(62154), C = n(293259), j = n(725954), A = n(228168), R = n(981631), U = n(689938), O = n(376234);
function M(e) {
    var i, n;
    let {
            user: s,
            isCurrentUser: a,
            section: r,
            setSection: d,
            hasActivity: c
        } = e, u = (0, t.e7)([x.Z], () => {
            var e, i;
            return (null === (i = x.Z.getUserProfile(s.id)) || void 0 === i ? void 0 : null === (e = i.application) || void 0 === e ? void 0 : e.id) != null;
        }), I = null === (i = (0, p.Z)(s.id, !s.bot && !a).mutualFriends) || void 0 === i ? void 0 : i.length, _ = null === (n = (0, g.Z)(s.id, !s.bot && !a).mutualGuilds) || void 0 === n ? void 0 : n.length;
    return (0, l.jsx)('div', {
        className: O.tabBarContainer,
        children: (0, l.jsxs)(o.TabBar, {
            selectedItem: r,
            type: 'top',
            onItemSelect: d,
            className: O.tabBar,
            children: [
                !s.isNonUserBot() || s.isClyde() || (0, f.Z)(s.id) ? (0, l.jsx)(o.TabBar.Item, {
                    className: O.tabBarItem,
                    id: A.oh.USER_INFO,
                    children: U.Z.Messages.USER_INFO
                }) : null,
                !s.bot && c ? (0, l.jsx)(o.TabBar.Item, {
                    className: O.tabBarItem,
                    id: A.oh.ACTIVITY,
                    children: U.Z.Messages.USER_PROFILE_ACTIVITY
                }) : null,
                s.bot || a ? null : (0, l.jsx)(o.TabBar.Item, {
                    className: O.tabBarItem,
                    id: A.oh.MUTUAL_FRIENDS,
                    children: null == I ? U.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER : U.Z.Messages.MUTUAL_FRIENDS_WITH_END_COUNT.format({ count: ''.concat(I) })
                }),
                a || s.isClyde() || (0, f.Z)(s.id) ? null : (0, l.jsx)(o.TabBar.Item, {
                    className: O.tabBarItem,
                    id: A.oh.MUTUAL_GUILDS,
                    children: null == _ ? U.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER : U.Z.Messages.MUTUAL_GUILDS_WITH_END_COUNT.format({ count: ''.concat(_) })
                }),
                s.bot && u ? (0, l.jsx)(o.TabBar.Item, {
                    className: O.tabBarItem,
                    id: A.oh.BOT_DATA_ACCESS,
                    children: U.Z.Messages.BOTS_DATA_ACCESS_TAB
                }) : null
            ]
        })
    });
}
function L(e) {
    var i, n;
    let {
            user: x,
            guildId: p,
            channelId: g,
            messageId: L,
            roleId: P,
            friendToken: b,
            initialSection: y = A.oh.USER_INFO,
            initialSubsection: D,
            transitionState: F,
            sourceAnalyticsLocations: B = [],
            onClose: G
        } = e, w = null !== (i = (0, t.e7)([v.default], () => v.default.getUser(x.id))) && void 0 !== i ? i : x, k = (0, h.ZP)(null !== (n = w.id) && void 0 !== n ? n : ''), {analyticsLocations: V} = (0, I.ZP)([
            ...B,
            u.Z.PROFILE_MODAL
        ]), Y = (0, S.Q1)({
            layout: 'MODAL',
            userId: w.id,
            showGuildProfile: !1,
            guildId: p,
            channelId: g,
            messageId: L,
            roleId: P
        });
    (0, d.$)({ [p]: [w.id] });
    let H = (0, t.e7)([E.Z], () => null != E.Z.getAnyStreamForUser(w.id)), W = (0, t.e7)([Z.Z], () => Z.Z.findActivity(w.id, e => e.type !== R.IIU.CUSTOM_STATUS)), [z, K] = s.useState(!1), [q, Q] = s.useState(!w.isNonUserBot() || w.isClyde() || (0, f.Z)(w.id) ? y : A.oh.MUTUAL_GUILDS), J = (0, t.e7)([m.default], () => m.default.getId() === w.id), X = null != W || H, $ = !J || X, ee = s.createRef(), ei = (0, r.Z)(ee);
    !X && q === A.oh.ACTIVITY && Q(A.oh.USER_INFO);
    let en = s.useCallback(e => {
            Y({
                action: 'PRESS_SECTION',
                analyticsLocations: V
            }), K(!0), Q(e);
        }, [
            Y,
            V
        ]), el = null == k ? void 0 : k.profileEffectId;
    return (0, l.jsx)(I.Gt, {
        value: V,
        children: (0, l.jsx)(S.Mt, {
            layout: 'MODAL',
            userId: w.id,
            guildId: p,
            channelId: g,
            messageId: L,
            roleId: P,
            showGuildProfile: !1,
            children: (0, l.jsx)(a.Z, {
                section: R.jXE.PROFILE_MODAL,
                children: (0, l.jsxs)(o.ModalRoot, {
                    transitionState: F,
                    className: O.root,
                    hideShadow: !0,
                    'aria-label': U.Z.Messages.USER_PROFILE_MODAL,
                    children: [
                        (0, l.jsxs)(N.Z, {
                            user: w,
                            displayProfile: k,
                            profileType: A.y0.MODAL,
                            ref: ee,
                            children: [
                                (0, l.jsx)(C.Z, {
                                    className: O.topSection,
                                    displayProfile: k,
                                    user: w,
                                    friendToken: b,
                                    onClose: G,
                                    isStreaming: (0, c.Z)(W),
                                    guildId: p,
                                    channelId: g,
                                    hasProfileEffect: null != el
                                }),
                                (0, l.jsx)(N.Z.Overlay, {
                                    className: O.overlay,
                                    children: (0, l.jsxs)('div', {
                                        className: O.body,
                                        children: [
                                            (0, l.jsx)(j.Z, {
                                                user: w,
                                                displayProfile: k
                                            }),
                                            $ ? (0, l.jsx)(M, {
                                                user: w,
                                                section: q === A.oh.USER_INFO_CONNECTIONS ? A.oh.USER_INFO : q,
                                                setSection: en,
                                                hasActivity: X,
                                                isCurrentUser: J
                                            }) : (0, l.jsx)('div', { className: O.divider }),
                                            (0, l.jsx)(T.Z, {
                                                displayProfile: k,
                                                user: w,
                                                autoFocusNote: D === A.Tb.NOTE && !z,
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
                            isHovering: ei
                        })
                    ]
                })
            })
        })
    });
}
