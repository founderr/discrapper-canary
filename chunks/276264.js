n.d(t, {
    x: function () {
        return L;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(477690),
    l = n(481060),
    u = n(420660),
    c = n(385499),
    d = n(693728),
    f = n(979264),
    _ = n(588688),
    p = n(554300),
    h = n(558602),
    m = n(736144),
    g = n(113434),
    E = n(553393),
    v = n(565640),
    I = n(518950),
    T = n(594174),
    b = n(709586),
    S = n(624138),
    y = n(51144),
    A = n(788307),
    N = n(981631),
    C = n(674563),
    R = n(524484),
    O = n(388032),
    D = n(182605);
let L = (0, S.Mg)(o.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
t.Z = function (e) {
    var t;
    let { selected: n = !1, colorString: a, colorRoleName: o, isOwner: S, ownerTooltipText: L, lostPermissionTooltipText: x, isTyping: w = !1, nick: P, user: M, currentUser: k, activities: U, applicationStream: B, status: G, shouldAnimateStatus: Z = !1, isMobile: F, premiumSince: V, channel: j, guildId: H, className: Y, onMouseDown: W, onKeyDown: K, onClick: z, onContextMenu: q, onClickPremiumGuildIcon: Q, onFocus: X, 'aria-controls': J, 'aria-expanded': $, 'aria-posinset': ee, 'aria-setsize': et, id: en, tabIndex: er, itemProps: ei } = e,
        ea = null == M ? void 0 : M.id,
        es = y.ZP.useName(M),
        eo = (null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === ea,
        el = i.useRef(null),
        [eu, ec] = i.useState(!1),
        [ed, ef] = i.useState(null),
        e_ = (0, v.Z)(ea, 'MemberListItem'),
        {
            avatarDecorationSrc: ep,
            avatarSrc: eh,
            eventHandlers: em
        } = (0, I.Z)({
            user: M,
            size: l.AvatarSizes.SIZE_32,
            animateOnHover: !(n || eu),
            guildId: H
        }),
        [eg, eE] = i.useState(!1);
    i.useEffect(() => {
        n && eE(!1);
    }, [n]);
    let ev = (0, g.Fr)(U),
        eI = null != ev && !eo && n && !eg,
        eT = () => {
            ec(!0);
        },
        eb = () => {
            ec(!1);
        },
        eS = (e) => {
            ef(e);
        },
        ey = () => {
            if (G !== N.Skl.OFFLINE && G !== N.Skl.INVISIBLE && null != U && U.length > 0) {
                let e = null != U ? U.find((e) => e.type === N.IIU.CUSTOM_STATUS) : null,
                    t = null != e && null != M && (0, h.Z)(e, M, j);
                return (0, r.jsx)(A.ZP, {
                    className: D.activity,
                    textClassName: D.activityText,
                    emojiClassName: D.activityEmoji,
                    activities: U,
                    applicationStream: B,
                    animate: eu,
                    hideEmoji: !t,
                    hideTooltip: !0,
                    user: M,
                    hasQuest: null != ev
                });
            }
            return null != e_
                ? (0, r.jsx)(_.Z, {
                      className: D.activity,
                      textClassName: D.activityText,
                      entry: e_
                  })
                : null;
        },
        eA = () =>
            null != S && S && null == x
                ? (0, r.jsx)(l.Tooltip, {
                      text: null != L ? L : O.intl.string(O.t.pclUFB),
                      children: (e) =>
                          (0, r.jsx)(l.CrownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              ...e,
                              className: D.ownerIcon
                          })
                  })
                : null,
        eN = () =>
            null == V
                ? null
                : (0, r.jsx)(l.Tooltip, {
                      text: O.intl.formatToPlainString(O.t.IWkAq6, { date: V }),
                      children: (e) =>
                          (0, r.jsx)(l.Clickable, {
                              onClick: Q,
                              tabIndex: -1,
                              children: (0, r.jsx)(b.Z, {
                                  ...e,
                                  className: D.premiumIcon
                              })
                          })
                  }),
        eC = () => {
            let e = (null == M ? void 0 : M.isClyde()) ? C.Hb.AI : C.Hb.BOT;
            return null != M && M.bot
                ? (0, r.jsx)(c.Z, {
                      className: D.botTag,
                      type: e,
                      verified: M.isVerifiedBot()
                  })
                : null;
        },
        eR = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [eC(), eA(), eN()]
            }),
        eO = (e, t) => {
            let n = Z ? l.AnimatedAvatar : l.Avatar,
                i = (0, u.Z)(U) ? N.Skl.STREAMING : G;
            return (
                (i = t ? void 0 : i),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n, {
                            ...em,
                            size: l.AvatarSizes.SIZE_32,
                            src: eh,
                            isMobile: F,
                            isTyping: w,
                            status: i,
                            'aria-label': e.username,
                            statusTooltip: !0,
                            avatarDecoration: ep,
                            typingIndicatorRef: eS
                        }),
                        (0, r.jsx)(m.Z, {
                            confettiSpawnRef: ed,
                            shouldFire: w && null != k && e.id !== k.id,
                            confettiLocation: R.Hn.MEMBER_USER
                        })
                    ]
                })
            );
        },
        eD = i.useMemo(() => ({ source: N.jXE.MEMBER_LIST }), []),
        eL = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.NameWithRole, {
                        roleName: o,
                        color: null != a ? a : void 0,
                        name: null != P ? P : es,
                        className: D.name
                    }),
                    (0, r.jsx)(f.ZP, {
                        clan: null == M ? void 0 : M.clan,
                        userId: null == M ? void 0 : M.id,
                        contextGuildId: H,
                        disableGuildProfile: !0,
                        className: D.clanTag,
                        profileViewedAnalytics: eD
                    })
                ]
            }),
        ex = G === N.Skl.OFFLINE;
    return null == M
        ? (0, r.jsx)(d.Z, {
              avatarSize: l.AvatarSizes.SIZE_32,
              className: D.placeholder
          })
        : (0, r.jsx)(l.Popout, {
              renderPopout: (e) =>
                  (0, r.jsx)(E.Z, {
                      quest: ev,
                      memberListItemRef: el,
                      applicationStream: B,
                      ...e,
                      closePopout: () => eE(!0)
                  }),
              position: 'bottom',
              shouldShow: eI,
              nudgeAlignIntoViewport: !1,
              useRawTargetDimensions: !0,
              animation: l.Popout.Animation.NONE,
              spacing: -3,
              children: () =>
                  (0, r.jsx)(p.Z, {
                      ref: el,
                      selected: n,
                      className: s()(D.member, Y, { [D.offline]: ex && !n }),
                      innerClassName: D.memberInner,
                      onClick: z,
                      onKeyDown: K,
                      onMouseDown: W,
                      onContextMenu: q,
                      onMouseEnter: eT,
                      onMouseLeave: eb,
                      name:
                          null == x
                              ? (0, r.jsx)('span', {
                                    className: D.username,
                                    children: eL()
                                })
                              : (0, r.jsx)(l.Tooltip, {
                                    text: x,
                                    children: (e) =>
                                        (0, r.jsx)('span', {
                                            ...e,
                                            className: s()(D.username, D.lostPermission),
                                            children: eL()
                                        })
                                }),
                      avatar: eO(M, ex),
                      subText: ey(),
                      decorators: eR(),
                      'aria-controls': J,
                      'aria-expanded': $,
                      'aria-setsize': et,
                      'aria-posinset': ee,
                      id: en,
                      tabIndex: er,
                      onFocus: X,
                      focusProps: {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          }
                      },
                      ...ei
                  })
          });
};
