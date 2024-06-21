"use strict";
n.d(t, {
  x: function() {
    return P
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(477690),
  l = n(481060),
  u = n(420660),
  _ = n(979264),
  c = n(33934),
  d = n(736144),
  E = n(113434),
  I = n(918701),
  T = n(553393),
  h = n(509275),
  S = n(204197),
  f = n(594174),
  N = n(467679),
  A = n(681426),
  m = n(709586),
  O = n(360048),
  R = n(624138),
  p = n(51144),
  g = n(788307),
  C = n(981631),
  v = n(674563),
  L = n(524484),
  D = n(689938),
  M = n(328e3);
let P = (0, R.Mg)(a.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
t.Z = function(e) {
  var t;
  let {
    selected: n = !1,
    colorString: s,
    colorRoleName: a,
    isOwner: R,
    ownerTooltipText: P,
    lostPermissionTooltipText: y,
    isTyping: U = !1,
    nick: b,
    user: G,
    currentUser: w,
    activities: B,
    applicationStream: k,
    status: x,
    shouldAnimateStatus: V = !1,
    isMobile: Z,
    premiumSince: H,
    channel: F,
    guildId: Y,
    lastOnlineTimestamp: j,
    className: W,
    onMouseDown: K,
    onKeyDown: z,
    onClick: q,
    onContextMenu: X,
    onClickPremiumGuildIcon: Q,
    onFocus: J,
    "aria-controls": $,
    "aria-expanded": ee,
    "aria-posinset": et,
    "aria-setsize": en,
    id: ei,
    tabIndex: er,
    itemProps: es
  } = e, eo = null == G ? void 0 : G.id, ea = p.ZP.useName(G), el = (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === eo, eu = r.useRef(null), [e_, ec] = r.useState(!1), [ed, eE] = r.useState(null), {
    avatarDecorationSrc: eI,
    avatarSrc: eT,
    eventHandlers: eh
  } = (0, S.Z)({
    user: G,
    size: l.AvatarSizes.SIZE_32,
    animateOnHover: !(n || e_),
    guildId: Y
  }), eS = r.useMemo(() => ({
    source: C.jXE.MEMBER_LIST,
    tagUserId: eo
  }), [eo]), [ef, eN] = r.useState(!1);
  r.useEffect(() => {
    n && eN(!1)
  }, [n]);
  let eA = (0, E.Fr)(B),
    em = null != eA && !el && n && !ef && (0, I.dl)(eA),
    eO = () => {
      ec(!0)
    },
    eR = () => {
      ec(!1)
    },
    ep = e => {
      eE(e)
    },
    eg = () => {
      let e = null != B ? B.find(e => e.type === C.IIU.CUSTOM_STATUS) : null,
        t = null != e && null != G && (0, c.Z)(e, G, F);
      if (null != j && null == e) {
        let e = (0, h.H)(j);
        return (0, i.jsx)("div", {
          className: M.subtext,
          children: e
        })
      }
      return (0, i.jsx)(g.Z, {
        className: M.activity,
        textClassName: M.activityText,
        emojiClassName: M.activityEmoji,
        activities: B,
        applicationStream: k,
        animate: e_,
        hideEmoji: !t,
        hideTooltip: !0,
        user: G,
        hasQuest: null != eA && (0, I.dl)(eA)
      })
    },
    eC = () => null != R && R && null == y ? (0, i.jsx)(l.Tooltip, {
      text: null != P ? P : D.Z.Messages.GUILD_OWNER,
      children: e => (0, i.jsx)(l.CrownIcon, {
        size: "md",
        color: "currentColor",
        ...e,
        className: M.ownerIcon
      })
    }) : null,
    ev = () => null == H ? null : (0, i.jsx)(l.Tooltip, {
      text: D.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
        date: H
      }),
      children: e => (0, i.jsx)(l.Clickable, {
        onClick: Q,
        tabIndex: -1,
        children: (0, i.jsx)(m.Z, {
          ...e,
          className: M.premiumIcon
        })
      })
    }),
    eL = () => {
      let e = (null == G ? void 0 : G.isClyde()) ? v.Hb.AI : v.Hb.BOT;
      return null != G && G.bot ? (0, i.jsx)(N.Z, {
        className: M.botTag,
        type: e,
        verified: G.isVerifiedBot()
      }) : null
    },
    eD = () => (0, i.jsxs)(i.Fragment, {
      children: [eL(), eC(), ev()]
    }),
    eM = (e, t) => {
      let n = V ? l.AnimatedAvatar : l.Avatar,
        r = (0, u.Z)(B) ? C.Skl.STREAMING : x;
      return r = t ? void 0 : r, (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(n, {
          ...eh,
          size: l.AvatarSizes.SIZE_32,
          src: eT,
          isMobile: Z,
          isTyping: U,
          status: r,
          "aria-label": e.username,
          statusTooltip: !0,
          avatarDecoration: eI,
          typingIndicatorRef: ep
        }), (0, i.jsx)(d.Z, {
          confettiSpawnRef: ed,
          shouldFire: U && null != w && e.id !== w.id,
          confettiLocation: L.Hn.MEMBER_USER
        })]
      })
    },
    eP = () => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.NameWithRole, {
        roleName: a,
        color: null != s ? s : void 0,
        name: null != b ? b : ea,
        className: M.name
      }), (0, i.jsx)(_.ZP, {
        clan: null == G ? void 0 : G.clan,
        userId: null == G ? void 0 : G.id,
        contextGuildId: Y,
        disableGuildProfile: !0,
        className: M.clanTag,
        profileViewedAnalytics: eS
      })]
    }),
    ey = x === C.Skl.OFFLINE,
    eU = null != j;
  return null == G ? (0, i.jsx)(A.Z, {
    avatarSize: l.AvatarSizes.SIZE_32,
    className: M.placeholder
  }) : (0, i.jsx)(l.Popout, {
    renderPopout: e => (0, i.jsx)(T.Z, {
      quest: eA,
      memberListItemRef: eu,
      applicationStream: k,
      ...e,
      closePopout: () => eN(!0)
    }),
    position: "bottom",
    shouldShow: em,
    nudgeAlignIntoViewport: !1,
    useRawTargetDimensions: !0,
    animation: l.Popout.Animation.NONE,
    spacing: -3,
    children: () => (0, i.jsx)(O.Z, {
      ref: eu,
      selected: n,
      className: o()(M.member, W, {
        [M.offline]: ey && !eU && !n
      }),
      innerClassName: M.memberInner,
      onClick: q,
      onKeyDown: z,
      onMouseDown: K,
      onContextMenu: X,
      onMouseEnter: eO,
      onMouseLeave: eR,
      name: null == y ? (0, i.jsx)("span", {
        className: M.username,
        children: eP()
      }) : (0, i.jsx)(l.Tooltip, {
        text: y,
        children: e => (0, i.jsx)("span", {
          ...e,
          className: o()(M.username, M.lostPermission),
          children: eP()
        })
      }),
      avatar: eM(G, ey),
      subText: eg(),
      decorators: eD(),
      "aria-controls": $,
      "aria-expanded": ee,
      "aria-setsize": en,
      "aria-posinset": et,
      id: ei,
      tabIndex: er,
      onFocus: J,
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
  })
}