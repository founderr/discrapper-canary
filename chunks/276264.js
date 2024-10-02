n.d(t, {
    x: function () {
        return w;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(477690),
    c = n(481060),
    d = n(420660),
    _ = n(385499),
    E = n(693728),
    f = n(750881),
    h = n(979264),
    p = n(554300),
    m = n(33934),
    I = n(736144),
    T = n(113434),
    g = n(918701),
    S = n(553393),
    A = n(518950),
    v = n(699516),
    N = n(594174),
    O = n(709586),
    R = n(626135),
    C = n(624138),
    y = n(51144),
    L = n(788307),
    b = n(981631),
    D = n(674563),
    M = n(524484),
    P = n(689938),
    U = n(226686);
let w = (0, C.Mg)(u.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    x = 3;
function G(e) {
    var t;
    let { selected: n = !1, colorString: r, colorRoleName: o, isOwner: u, ownerTooltipText: C, lostPermissionTooltipText: w, isTyping: G = !1, nick: k, user: B, currentUser: F, activities: Z, applicationStream: V, status: H, shouldAnimateStatus: Y = !1, isMobile: j, premiumSince: W, channel: K, guildId: z, className: q, onMouseDown: Q, onKeyDown: X, onClick: $, onContextMenu: J, onClickPremiumGuildIcon: ee, onFocus: et, 'aria-controls': en, 'aria-expanded': er, 'aria-posinset': ei, 'aria-setsize': ea, id: eo, tabIndex: es, itemProps: el } = e,
        eu = null == B ? void 0 : B.id,
        ec = y.ZP.useName(B),
        ed = (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === eu,
        e_ = a.useRef(null),
        [eE, ef] = a.useState(!1),
        [eh, ep] = a.useState(null),
        {
            avatarDecorationSrc: em,
            avatarSrc: eI,
            eventHandlers: eT
        } = (0, A.Z)({
            user: B,
            size: c.AvatarSizes.SIZE_32,
            animateOnHover: !(n || eE),
            guildId: z
        }),
        eg = a.useMemo(
            () => ({
                source: b.jXE.MEMBER_LIST,
                tagUserId: eu
            }),
            [eu]
        ),
        eS = (0, l.e7)([v.Z], () => v.Z.isBlocked(eu)),
        eA = (0, f.ci)('member_list_item'),
        [ev, eN] = a.useState(!1);
    a.useEffect(() => {
        n && eN(!1);
    }, [n]);
    let eO = (0, T.Fr)(Z),
        eR = null != eO && !ed && n && !ev && (0, g.dl)(eO),
        eC = () => {
            ef(!0);
        },
        ey = () => {
            ef(!1);
        },
        eL = (e) => {
            ep(e);
        },
        eb = () => {
            var e;
            if (
                (R.default.track(b.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                    activity_user_id: eu,
                    discoverable: null === (e = null == V ? void 0 : V.discoverable) || void 0 === e || e,
                    relationship_type: null != eu ? v.Z.getRelationshipType(eu) : void 0,
                    surface: 'member-list-item',
                    treatment: eS && eA ? f.h9.HIDE : f.h9.SHOW
                }),
                eS && eA)
            )
                return null;
            let t = null != Z ? Z.find((e) => e.type === b.IIU.CUSTOM_STATUS) : null,
                n = null != t && null != B && (0, m.Z)(t, B, K);
            return (0, i.jsx)(L.Z, {
                className: U.activity,
                textClassName: U.activityText,
                emojiClassName: U.activityEmoji,
                activities: Z,
                applicationStream: V,
                animate: eE,
                hideEmoji: !n,
                hideTooltip: !0,
                user: B,
                hasQuest: null != eO && (0, g.dl)(eO)
            });
        },
        eD = () =>
            null != u && u && null == w
                ? (0, i.jsx)(c.Tooltip, {
                      text: null != C ? C : P.Z.Messages.GUILD_OWNER,
                      children: (e) =>
                          (0, i.jsx)(c.CrownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              ...e,
                              className: U.ownerIcon
                          })
                  })
                : null,
        eM = () =>
            null == W
                ? null
                : (0, i.jsx)(c.Tooltip, {
                      text: P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: W }),
                      children: (e) =>
                          (0, i.jsx)(c.Clickable, {
                              onClick: ee,
                              tabIndex: -1,
                              children: (0, i.jsx)(O.Z, {
                                  ...e,
                                  className: U.premiumIcon
                              })
                          })
                  }),
        eP = () => {
            let e = (null == B ? void 0 : B.isClyde()) ? D.Hb.AI : D.Hb.BOT;
            return null != B && B.bot
                ? (0, i.jsx)(_.Z, {
                      className: U.botTag,
                      type: e,
                      verified: B.isVerifiedBot()
                  })
                : null;
        },
        eU = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [eP(), eD(), eM()]
            }),
        ew = (e, t) => {
            let n = Y ? c.AnimatedAvatar : c.Avatar,
                r = (0, d.Z)(Z) ? b.Skl.STREAMING : H;
            return (
                (r = t ? void 0 : r),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(n, {
                            ...eT,
                            size: c.AvatarSizes.SIZE_32,
                            src: eI,
                            isMobile: j,
                            isTyping: G,
                            status: r,
                            'aria-label': e.username,
                            statusTooltip: !0,
                            avatarDecoration: em,
                            typingIndicatorRef: eL
                        }),
                        (0, i.jsx)(I.Z, {
                            confettiSpawnRef: eh,
                            shouldFire: G && null != F && e.id !== F.id,
                            confettiLocation: M.Hn.MEMBER_USER
                        })
                    ]
                })
            );
        },
        ex = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(c.NameWithRole, {
                        roleName: o,
                        color: null != r ? r : void 0,
                        name: null != k ? k : ec,
                        className: U.name
                    }),
                    (0, i.jsx)(h.ZP, {
                        clan: null == B ? void 0 : B.clan,
                        userId: null == B ? void 0 : B.id,
                        contextGuildId: z,
                        disableGuildProfile: !0,
                        className: U.clanTag,
                        profileViewedAnalytics: eg
                    })
                ]
            }),
        eG = (e) =>
            (0, i.jsx)(S.Z, {
                quest: eO,
                memberListItemRef: e_,
                applicationStream: V,
                ...e,
                closePopout: () => eN(!0)
            }),
        ek = H === b.Skl.OFFLINE;
    return null == B
        ? (0, i.jsx)(E.Z, {
              avatarSize: c.AvatarSizes.SIZE_32,
              className: U.placeholder
          })
        : (0, i.jsx)(c.Popout, {
              renderPopout: eG,
              position: 'bottom',
              shouldShow: eR,
              nudgeAlignIntoViewport: !1,
              useRawTargetDimensions: !0,
              animation: c.Popout.Animation.NONE,
              spacing: -x,
              children: () =>
                  (0, i.jsx)(p.Z, {
                      ref: e_,
                      selected: n,
                      className: s()(U.member, q, { [U.offline]: ek && !n }),
                      innerClassName: U.memberInner,
                      onClick: $,
                      onKeyDown: X,
                      onMouseDown: Q,
                      onContextMenu: J,
                      onMouseEnter: eC,
                      onMouseLeave: ey,
                      name:
                          null == w
                              ? (0, i.jsx)('span', {
                                    className: U.username,
                                    children: ex()
                                })
                              : (0, i.jsx)(c.Tooltip, {
                                    text: w,
                                    children: (e) =>
                                        (0, i.jsx)('span', {
                                            ...e,
                                            className: s()(U.username, U.lostPermission),
                                            children: ex()
                                        })
                                }),
                      avatar: ew(B, ek),
                      subText: eb(),
                      decorators: eU(),
                      'aria-controls': en,
                      'aria-expanded': er,
                      'aria-setsize': ea,
                      'aria-posinset': ei,
                      id: eo,
                      tabIndex: es,
                      onFocus: et,
                      focusProps: {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          }
                      },
                      ...el
                  })
          });
}
t.Z = G;
