n.d(t, {
    x: function () {
        return O;
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
    _ = n(554300),
    p = n(558602),
    h = n(736144),
    m = n(113434),
    g = n(553393),
    E = n(518950),
    v = n(594174),
    b = n(709586),
    I = n(624138),
    T = n(51144),
    S = n(788307),
    y = n(981631),
    A = n(674563),
    N = n(524484),
    C = n(388032),
    R = n(226686);
let O = (0, I.Mg)(o.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
t.Z = function (e) {
    var t;
    let { selected: n = !1, colorString: a, colorRoleName: o, isOwner: I, ownerTooltipText: O, lostPermissionTooltipText: D, isTyping: L = !1, nick: x, user: w, currentUser: M, activities: P, applicationStream: k, status: U, shouldAnimateStatus: B = !1, isMobile: G, premiumSince: Z, channel: F, guildId: V, className: j, onMouseDown: H, onKeyDown: Y, onClick: W, onContextMenu: K, onClickPremiumGuildIcon: z, onFocus: q, 'aria-controls': Q, 'aria-expanded': X, 'aria-posinset': J, 'aria-setsize': $, id: ee, tabIndex: et, itemProps: en } = e,
        er = null == w ? void 0 : w.id,
        ei = T.ZP.useName(w),
        ea = (null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === er,
        es = i.useRef(null),
        [eo, el] = i.useState(!1),
        [eu, ec] = i.useState(null),
        {
            avatarDecorationSrc: ed,
            avatarSrc: ef,
            eventHandlers: e_
        } = (0, E.Z)({
            user: w,
            size: l.AvatarSizes.SIZE_32,
            animateOnHover: !(n || eo),
            guildId: V
        }),
        [ep, eh] = i.useState(!1);
    i.useEffect(() => {
        n && eh(!1);
    }, [n]);
    let em = (0, m.Fr)(P),
        eg = null != em && !ea && n && !ep,
        eE = () => {
            el(!0);
        },
        ev = () => {
            el(!1);
        },
        eb = (e) => {
            ec(e);
        },
        eI = () => {
            let e = null != P ? P.find((e) => e.type === y.IIU.CUSTOM_STATUS) : null,
                t = null != e && null != w && (0, p.Z)(e, w, F);
            return (0, r.jsx)(S.ZP, {
                className: R.activity,
                textClassName: R.activityText,
                emojiClassName: R.activityEmoji,
                activities: P,
                applicationStream: k,
                animate: eo,
                hideEmoji: !t,
                hideTooltip: !0,
                user: w,
                hasQuest: null != em
            });
        },
        eT = () =>
            null != I && I && null == D
                ? (0, r.jsx)(l.Tooltip, {
                      text: null != O ? O : C.intl.string(C.t.pclUFB),
                      children: (e) =>
                          (0, r.jsx)(l.CrownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              ...e,
                              className: R.ownerIcon
                          })
                  })
                : null,
        eS = () =>
            null == Z
                ? null
                : (0, r.jsx)(l.Tooltip, {
                      text: C.intl.formatToPlainString(C.t.IWkAq6, { date: Z }),
                      children: (e) =>
                          (0, r.jsx)(l.Clickable, {
                              onClick: z,
                              tabIndex: -1,
                              children: (0, r.jsx)(b.Z, {
                                  ...e,
                                  className: R.premiumIcon
                              })
                          })
                  }),
        ey = () => {
            let e = (null == w ? void 0 : w.isClyde()) ? A.Hb.AI : A.Hb.BOT;
            return null != w && w.bot
                ? (0, r.jsx)(c.Z, {
                      className: R.botTag,
                      type: e,
                      verified: w.isVerifiedBot()
                  })
                : null;
        },
        eA = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [ey(), eT(), eS()]
            }),
        eN = (e, t) => {
            let n = B ? l.AnimatedAvatar : l.Avatar,
                i = (0, u.Z)(P) ? y.Skl.STREAMING : U;
            return (
                (i = t ? void 0 : i),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n, {
                            ...e_,
                            size: l.AvatarSizes.SIZE_32,
                            src: ef,
                            isMobile: G,
                            isTyping: L,
                            status: i,
                            'aria-label': e.username,
                            statusTooltip: !0,
                            avatarDecoration: ed,
                            typingIndicatorRef: eb
                        }),
                        (0, r.jsx)(h.Z, {
                            confettiSpawnRef: eu,
                            shouldFire: L && null != M && e.id !== M.id,
                            confettiLocation: N.Hn.MEMBER_USER
                        })
                    ]
                })
            );
        },
        eC = i.useMemo(() => ({ source: y.jXE.MEMBER_LIST }), []),
        eR = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.NameWithRole, {
                        roleName: o,
                        color: null != a ? a : void 0,
                        name: null != x ? x : ei,
                        className: R.name
                    }),
                    (0, r.jsx)(f.ZP, {
                        clan: null == w ? void 0 : w.clan,
                        userId: null == w ? void 0 : w.id,
                        contextGuildId: V,
                        disableGuildProfile: !0,
                        className: R.clanTag,
                        profileViewedAnalytics: eC
                    })
                ]
            }),
        eO = U === y.Skl.OFFLINE;
    return null == w
        ? (0, r.jsx)(d.Z, {
              avatarSize: l.AvatarSizes.SIZE_32,
              className: R.placeholder
          })
        : (0, r.jsx)(l.Popout, {
              renderPopout: (e) =>
                  (0, r.jsx)(g.Z, {
                      quest: em,
                      memberListItemRef: es,
                      applicationStream: k,
                      ...e,
                      closePopout: () => eh(!0)
                  }),
              position: 'bottom',
              shouldShow: eg,
              nudgeAlignIntoViewport: !1,
              useRawTargetDimensions: !0,
              animation: l.Popout.Animation.NONE,
              spacing: -3,
              children: () =>
                  (0, r.jsx)(_.Z, {
                      ref: es,
                      selected: n,
                      className: s()(R.member, j, { [R.offline]: eO && !n }),
                      innerClassName: R.memberInner,
                      onClick: W,
                      onKeyDown: Y,
                      onMouseDown: H,
                      onContextMenu: K,
                      onMouseEnter: eE,
                      onMouseLeave: ev,
                      name:
                          null == D
                              ? (0, r.jsx)('span', {
                                    className: R.username,
                                    children: eR()
                                })
                              : (0, r.jsx)(l.Tooltip, {
                                    text: D,
                                    children: (e) =>
                                        (0, r.jsx)('span', {
                                            ...e,
                                            className: s()(R.username, R.lostPermission),
                                            children: eR()
                                        })
                                }),
                      avatar: eN(w, eO),
                      subText: eI(),
                      decorators: eA(),
                      'aria-controls': Q,
                      'aria-expanded': X,
                      'aria-setsize': $,
                      'aria-posinset': J,
                      id: ee,
                      tabIndex: et,
                      onFocus: q,
                      focusProps: {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          }
                      },
                      ...en
                  })
          });
};
