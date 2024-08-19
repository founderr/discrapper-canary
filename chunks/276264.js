n.d(t, {
    x: function () {
        return M;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(477690),
    u = n(481060),
    c = n(420660),
    d = n(385499),
    _ = n(693728),
    E = n(979264),
    f = n(554300),
    h = n(33934),
    p = n(736144),
    m = n(113434),
    I = n(918701),
    T = n(553393),
    g = n(204197),
    S = n(699516),
    A = n(594174),
    N = n(709586),
    v = n(624138),
    O = n(51144),
    R = n(788307),
    C = n(981631),
    y = n(674563),
    D = n(524484),
    L = n(689938),
    b = n(410740);
let M = (0, v.Mg)(l.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
t.Z = function (e) {
    var t;
    let { selected: n = !1, colorString: a, colorRoleName: l, isOwner: v, ownerTooltipText: M, lostPermissionTooltipText: P, isTyping: U = !1, nick: w, user: x, currentUser: G, activities: k, applicationStream: B, status: F, shouldAnimateStatus: V = !1, isMobile: H, premiumSince: Z, channel: Y, guildId: j, className: W, onMouseDown: K, onKeyDown: z, onClick: q, onContextMenu: Q, onClickPremiumGuildIcon: X, onFocus: $, 'aria-controls': J, 'aria-expanded': ee, 'aria-posinset': et, 'aria-setsize': en, id: er, tabIndex: ei, itemProps: ea } = e,
        es = null == x ? void 0 : x.id,
        eo = O.ZP.useName(x),
        el = (null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === es,
        eu = i.useRef(null),
        [ec, ed] = i.useState(!1),
        [e_, eE] = i.useState(null),
        {
            avatarDecorationSrc: ef,
            avatarSrc: eh,
            eventHandlers: ep
        } = (0, g.Z)({
            user: x,
            size: u.AvatarSizes.SIZE_32,
            animateOnHover: !(n || ec),
            guildId: j
        }),
        em = i.useMemo(
            () => ({
                source: C.jXE.MEMBER_LIST,
                tagUserId: es
            }),
            [es]
        ),
        eI = (0, o.e7)([S.Z], () => S.Z.isBlocked(es)),
        [eT, eg] = i.useState(!1);
    i.useEffect(() => {
        n && eg(!1);
    }, [n]);
    let eS = (0, m.Fr)(k),
        eA = null != eS && !el && n && !eT && (0, I.dl)(eS),
        eN = () => {
            ed(!0);
        },
        ev = () => {
            ed(!1);
        },
        eO = (e) => {
            eE(e);
        },
        eR = () => {
            if (eI) return null;
            let e = null != k ? k.find((e) => e.type === C.IIU.CUSTOM_STATUS) : null,
                t = null != e && null != x && (0, h.Z)(e, x, Y);
            return (0, r.jsx)(R.Z, {
                className: b.activity,
                textClassName: b.activityText,
                emojiClassName: b.activityEmoji,
                activities: k,
                applicationStream: B,
                animate: ec,
                hideEmoji: !t,
                hideTooltip: !0,
                user: x,
                hasQuest: null != eS && (0, I.dl)(eS)
            });
        },
        eC = () =>
            null != v && v && null == P
                ? (0, r.jsx)(u.Tooltip, {
                      text: null != M ? M : L.Z.Messages.GUILD_OWNER,
                      children: (e) =>
                          (0, r.jsx)(u.CrownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              ...e,
                              className: b.ownerIcon
                          })
                  })
                : null,
        ey = () =>
            null == Z
                ? null
                : (0, r.jsx)(u.Tooltip, {
                      text: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: Z }),
                      children: (e) =>
                          (0, r.jsx)(u.Clickable, {
                              onClick: X,
                              tabIndex: -1,
                              children: (0, r.jsx)(N.Z, {
                                  ...e,
                                  className: b.premiumIcon
                              })
                          })
                  }),
        eD = () => {
            let e = (null == x ? void 0 : x.isClyde()) ? y.Hb.AI : y.Hb.BOT;
            return null != x && x.bot
                ? (0, r.jsx)(d.Z, {
                      className: b.botTag,
                      type: e,
                      verified: x.isVerifiedBot()
                  })
                : null;
        },
        eL = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [eD(), eC(), ey()]
            }),
        eb = (e, t) => {
            let n = V ? u.AnimatedAvatar : u.Avatar,
                i = (0, c.Z)(k) ? C.Skl.STREAMING : F;
            return (
                (i = t ? void 0 : i),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n, {
                            ...ep,
                            size: u.AvatarSizes.SIZE_32,
                            src: eh,
                            isMobile: H,
                            isTyping: U,
                            status: i,
                            'aria-label': e.username,
                            statusTooltip: !0,
                            avatarDecoration: ef,
                            typingIndicatorRef: eO
                        }),
                        (0, r.jsx)(p.Z, {
                            confettiSpawnRef: e_,
                            shouldFire: U && null != G && e.id !== G.id,
                            confettiLocation: D.Hn.MEMBER_USER
                        })
                    ]
                })
            );
        },
        eM = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(u.NameWithRole, {
                        roleName: l,
                        color: null != a ? a : void 0,
                        name: null != w ? w : eo,
                        className: b.name
                    }),
                    (0, r.jsx)(E.ZP, {
                        clan: null == x ? void 0 : x.clan,
                        userId: null == x ? void 0 : x.id,
                        contextGuildId: j,
                        disableGuildProfile: !0,
                        className: b.clanTag,
                        profileViewedAnalytics: em
                    })
                ]
            }),
        eP = F === C.Skl.OFFLINE;
    return null == x
        ? (0, r.jsx)(_.Z, {
              avatarSize: u.AvatarSizes.SIZE_32,
              className: b.placeholder
          })
        : (0, r.jsx)(u.Popout, {
              renderPopout: (e) =>
                  (0, r.jsx)(T.Z, {
                      quest: eS,
                      memberListItemRef: eu,
                      applicationStream: B,
                      ...e,
                      closePopout: () => eg(!0)
                  }),
              position: 'bottom',
              shouldShow: eA,
              nudgeAlignIntoViewport: !1,
              useRawTargetDimensions: !0,
              animation: u.Popout.Animation.NONE,
              spacing: -3,
              children: () =>
                  (0, r.jsx)(f.Z, {
                      ref: eu,
                      selected: n,
                      className: s()(b.member, W, { [b.offline]: eP && !n }),
                      innerClassName: b.memberInner,
                      onClick: q,
                      onKeyDown: z,
                      onMouseDown: K,
                      onContextMenu: Q,
                      onMouseEnter: eN,
                      onMouseLeave: ev,
                      name:
                          null == P
                              ? (0, r.jsx)('span', {
                                    className: b.username,
                                    children: eM()
                                })
                              : (0, r.jsx)(u.Tooltip, {
                                    text: P,
                                    children: (e) =>
                                        (0, r.jsx)('span', {
                                            ...e,
                                            className: s()(b.username, b.lostPermission),
                                            children: eM()
                                        })
                                }),
                      avatar: eb(x, eP),
                      subText: eR(),
                      decorators: eL(),
                      'aria-controls': J,
                      'aria-expanded': ee,
                      'aria-setsize': en,
                      'aria-posinset': et,
                      id: er,
                      tabIndex: ei,
                      onFocus: $,
                      focusProps: {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          }
                      },
                      ...ea
                  })
          });
};
