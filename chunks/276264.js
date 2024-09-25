n.d(t, {
    x: function () {
        return U;
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
    R = n(624138),
    C = n(51144),
    y = n(788307),
    b = n(981631),
    L = n(674563),
    D = n(524484),
    M = n(689938),
    P = n(226686);
let U = (0, R.Mg)(u.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING),
    w = 3;
function x(e) {
    var t;
    let { selected: n = !1, colorString: r, colorRoleName: o, isOwner: u, ownerTooltipText: R, lostPermissionTooltipText: U, isTyping: x = !1, nick: G, user: k, currentUser: B, activities: F, applicationStream: Z, status: V, shouldAnimateStatus: H = !1, isMobile: Y, premiumSince: j, channel: W, guildId: K, className: z, onMouseDown: q, onKeyDown: Q, onClick: X, onContextMenu: $, onClickPremiumGuildIcon: J, onFocus: ee, 'aria-controls': et, 'aria-expanded': en, 'aria-posinset': er, 'aria-setsize': ei, id: ea, tabIndex: eo, itemProps: es } = e,
        el = null == k ? void 0 : k.id,
        eu = C.ZP.useName(k),
        ec = (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === el,
        ed = a.useRef(null),
        [e_, eE] = a.useState(!1),
        [ef, eh] = a.useState(null),
        {
            avatarDecorationSrc: ep,
            avatarSrc: em,
            eventHandlers: eI
        } = (0, A.Z)({
            user: k,
            size: c.AvatarSizes.SIZE_32,
            animateOnHover: !(n || e_),
            guildId: K
        }),
        eT = a.useMemo(
            () => ({
                source: b.jXE.MEMBER_LIST,
                tagUserId: el
            }),
            [el]
        ),
        eg = (0, l.e7)([v.Z], () => v.Z.isBlocked(el)),
        eS = (0, f.aK)('member_list_item'),
        [eA, ev] = a.useState(!1);
    a.useEffect(() => {
        n && ev(!1);
    }, [n]);
    let eN = (0, T.Fr)(F),
        eO = null != eN && !ec && n && !eA && (0, g.dl)(eN),
        eR = () => {
            eE(!0);
        },
        eC = () => {
            eE(!1);
        },
        ey = (e) => {
            eh(e);
        },
        eb = () => {
            if (eg && eS) return null;
            let e = null != F ? F.find((e) => e.type === b.IIU.CUSTOM_STATUS) : null,
                t = null != e && null != k && (0, m.Z)(e, k, W);
            return (0, i.jsx)(y.Z, {
                className: P.activity,
                textClassName: P.activityText,
                emojiClassName: P.activityEmoji,
                activities: F,
                applicationStream: Z,
                animate: e_,
                hideEmoji: !t,
                hideTooltip: !0,
                user: k,
                hasQuest: null != eN && (0, g.dl)(eN)
            });
        },
        eL = () =>
            null != u && u && null == U
                ? (0, i.jsx)(c.Tooltip, {
                      text: null != R ? R : M.Z.Messages.GUILD_OWNER,
                      children: (e) =>
                          (0, i.jsx)(c.CrownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              ...e,
                              className: P.ownerIcon
                          })
                  })
                : null,
        eD = () =>
            null == j
                ? null
                : (0, i.jsx)(c.Tooltip, {
                      text: M.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: j }),
                      children: (e) =>
                          (0, i.jsx)(c.Clickable, {
                              onClick: J,
                              tabIndex: -1,
                              children: (0, i.jsx)(O.Z, {
                                  ...e,
                                  className: P.premiumIcon
                              })
                          })
                  }),
        eM = () => {
            let e = (null == k ? void 0 : k.isClyde()) ? L.Hb.AI : L.Hb.BOT;
            return null != k && k.bot
                ? (0, i.jsx)(_.Z, {
                      className: P.botTag,
                      type: e,
                      verified: k.isVerifiedBot()
                  })
                : null;
        },
        eP = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [eM(), eL(), eD()]
            }),
        eU = (e, t) => {
            let n = H ? c.AnimatedAvatar : c.Avatar,
                r = (0, d.Z)(F) ? b.Skl.STREAMING : V;
            return (
                (r = t ? void 0 : r),
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(n, {
                            ...eI,
                            size: c.AvatarSizes.SIZE_32,
                            src: em,
                            isMobile: Y,
                            isTyping: x,
                            status: r,
                            'aria-label': e.username,
                            statusTooltip: !0,
                            avatarDecoration: ep,
                            typingIndicatorRef: ey
                        }),
                        (0, i.jsx)(I.Z, {
                            confettiSpawnRef: ef,
                            shouldFire: x && null != B && e.id !== B.id,
                            confettiLocation: D.Hn.MEMBER_USER
                        })
                    ]
                })
            );
        },
        ew = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(c.NameWithRole, {
                        roleName: o,
                        color: null != r ? r : void 0,
                        name: null != G ? G : eu,
                        className: P.name
                    }),
                    (0, i.jsx)(h.ZP, {
                        clan: null == k ? void 0 : k.clan,
                        userId: null == k ? void 0 : k.id,
                        contextGuildId: K,
                        disableGuildProfile: !0,
                        className: P.clanTag,
                        profileViewedAnalytics: eT
                    })
                ]
            }),
        ex = (e) =>
            (0, i.jsx)(S.Z, {
                quest: eN,
                memberListItemRef: ed,
                applicationStream: Z,
                ...e,
                closePopout: () => ev(!0)
            }),
        eG = V === b.Skl.OFFLINE;
    return null == k
        ? (0, i.jsx)(E.Z, {
              avatarSize: c.AvatarSizes.SIZE_32,
              className: P.placeholder
          })
        : (0, i.jsx)(c.Popout, {
              renderPopout: ex,
              position: 'bottom',
              shouldShow: eO,
              nudgeAlignIntoViewport: !1,
              useRawTargetDimensions: !0,
              animation: c.Popout.Animation.NONE,
              spacing: -w,
              children: () =>
                  (0, i.jsx)(p.Z, {
                      ref: ed,
                      selected: n,
                      className: s()(P.member, z, { [P.offline]: eG && !n }),
                      innerClassName: P.memberInner,
                      onClick: X,
                      onKeyDown: Q,
                      onMouseDown: q,
                      onContextMenu: $,
                      onMouseEnter: eR,
                      onMouseLeave: eC,
                      name:
                          null == U
                              ? (0, i.jsx)('span', {
                                    className: P.username,
                                    children: ew()
                                })
                              : (0, i.jsx)(c.Tooltip, {
                                    text: U,
                                    children: (e) =>
                                        (0, i.jsx)('span', {
                                            ...e,
                                            className: s()(P.username, P.lostPermission),
                                            children: ew()
                                        })
                                }),
                      avatar: eU(k, eG),
                      subText: eb(),
                      decorators: eP(),
                      'aria-controls': et,
                      'aria-expanded': en,
                      'aria-setsize': ei,
                      'aria-posinset': er,
                      id: ea,
                      tabIndex: eo,
                      onFocus: ee,
                      focusProps: {
                          offset: {
                              top: 4,
                              bottom: 4,
                              left: 4,
                              right: 4
                          }
                      },
                      ...es
                  })
          });
}
t.Z = x;
