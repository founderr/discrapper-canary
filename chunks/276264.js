"use strict";
n.r(t), n.d(t, {
  AVATAR_DECORATION_PADDING: function() {
    return P
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("477690"),
  l = n("481060"),
  u = n("420660"),
  d = n("979264"),
  _ = n("33934"),
  c = n("736144"),
  E = n("113434"),
  I = n("918701"),
  T = n("553393"),
  f = n("509275"),
  S = n("204197"),
  h = n("594174"),
  A = n("467679"),
  m = n("681426"),
  N = n("551388"),
  p = n("709586"),
  O = n("360048"),
  C = n("624138"),
  R = n("51144"),
  g = n("788307"),
  L = n("981631"),
  v = n("674563"),
  D = n("524484"),
  M = n("689938"),
  y = n("895294");
let P = (0, C.cssValueToNumber)(o.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
t.default = function(e) {
  var t;
  let {
    selected: n = !1,
    colorString: s,
    colorRoleName: o,
    isOwner: C,
    ownerTooltipText: P,
    lostPermissionTooltipText: U,
    isTyping: b = !1,
    nick: G,
    user: w,
    currentUser: k,
    activities: B,
    applicationStream: V,
    status: x,
    shouldAnimateStatus: F = !1,
    isMobile: H,
    premiumSince: Y,
    channel: j,
    guildId: W,
    lastOnlineTimestamp: K,
    className: z,
    onMouseDown: Z,
    onKeyDown: X,
    onClick: Q,
    onContextMenu: q,
    onClickPremiumGuildIcon: J,
    onFocus: $,
    "aria-controls": ee,
    "aria-expanded": et,
    "aria-posinset": en,
    "aria-setsize": ei,
    id: er,
    tabIndex: es,
    itemProps: ea
  } = e, eo = null == w ? void 0 : w.id, el = R.default.useName(w), eu = (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === eo, ed = r.useRef(null), [e_, ec] = r.useState(!1), [eE, eI] = r.useState(null), {
    avatarDecorationSrc: eT,
    avatarSrc: ef,
    eventHandlers: eS
  } = (0, S.default)({
    user: w,
    size: l.AvatarSizes.SIZE_32,
    animateOnHover: !(n || e_),
    guildId: W
  }), eh = r.useMemo(() => ({
    source: L.AnalyticsSections.MEMBER_LIST,
    tagUserId: eo
  }), [eo]), [eA, em] = r.useState(!1);
  r.useEffect(() => {
    n && em(!1)
  }, [n]);
  let eN = (0, E.useQuestFromActivities)(B),
    ep = null != eN && !eu && n && !eA && (0, I.shouldShowSocialEntrypoints)(eN),
    eO = () => {
      ec(!0)
    },
    eC = () => {
      ec(!1)
    },
    eR = e => {
      eI(e)
    },
    eg = () => {
      let e = null != B ? B.find(e => e.type === L.ActivityTypes.CUSTOM_STATUS) : null,
        t = null != e && null != w && (0, _.default)(e, w, j);
      if (null != K && null == e) {
        let e = (0, f.formatRecentlyOnlineStatus)(K);
        return (0, i.jsx)("div", {
          className: y.subtext,
          children: e
        })
      }
      return (0, i.jsx)(g.default, {
        className: y.activity,
        textClassName: y.activityText,
        emojiClassName: y.activityEmoji,
        activities: B,
        applicationStream: V,
        animate: e_,
        hideEmoji: !t,
        hideTooltip: !0,
        user: w,
        hasQuest: null != eN && (0, I.shouldShowSocialEntrypoints)(eN)
      })
    },
    eL = () => null != C && C && null == U ? (0, i.jsx)(l.Tooltip, {
      text: null != P ? P : M.default.Messages.GUILD_OWNER,
      children: e => (0, i.jsx)(N.default, {
        ...e,
        className: y.ownerIcon
      })
    }) : null,
    ev = () => null == Y ? null : (0, i.jsx)(l.Tooltip, {
      text: M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
        date: Y
      }),
      children: e => (0, i.jsx)(l.Clickable, {
        onClick: J,
        tabIndex: -1,
        children: (0, i.jsx)(p.default, {
          ...e,
          className: y.premiumIcon
        })
      })
    }),
    eD = () => {
      let e = (null == w ? void 0 : w.isClyde()) ? v.BotTagTypes.AI : v.BotTagTypes.BOT;
      return null != w && w.bot ? (0, i.jsx)(A.default, {
        className: y.botTag,
        type: e,
        verified: w.isVerifiedBot()
      }) : null
    },
    eM = () => (0, i.jsxs)(i.Fragment, {
      children: [eD(), eL(), ev()]
    }),
    ey = (e, t) => {
      let n = F ? l.AnimatedAvatar : l.Avatar,
        r = (0, u.default)(B) ? L.StatusTypes.STREAMING : x;
      return r = t ? void 0 : r, (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(n, {
          ...eS,
          size: l.AvatarSizes.SIZE_32,
          src: ef,
          isMobile: H,
          isTyping: b,
          status: r,
          "aria-label": e.username,
          statusTooltip: !0,
          avatarDecoration: eT,
          typingIndicatorRef: eR
        }), (0, i.jsx)(c.default, {
          confettiSpawnRef: eE,
          shouldFire: b && null != k && e.id !== k.id,
          confettiLocation: D.ConfettiLocation.MEMBER_USER
        })]
      })
    },
    eP = () => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.NameWithRole, {
        roleName: o,
        color: null != s ? s : void 0,
        name: null != G ? G : el,
        className: y.name
      }), (0, i.jsx)(d.default, {
        clan: null == w ? void 0 : w.clan,
        userId: null == w ? void 0 : w.id,
        contextGuildId: W,
        disableGuildProfile: !0,
        className: y.clanTag,
        profileViewedAnalytics: eh
      })]
    }),
    eU = x === L.StatusTypes.OFFLINE,
    eb = null != K;
  return null == w ? (0, i.jsx)(m.default, {
    avatarSize: l.AvatarSizes.SIZE_32,
    className: y.placeholder
  }) : (0, i.jsx)(l.Popout, {
    renderPopout: e => (0, i.jsx)(T.default, {
      quest: eN,
      memberListItemRef: ed,
      applicationStream: V,
      ...e,
      closePopout: () => em(!0)
    }),
    position: "bottom",
    shouldShow: ep,
    nudgeAlignIntoViewport: !1,
    useRawTargetDimensions: !0,
    animation: l.Popout.Animation.NONE,
    spacing: -3,
    children: () => (0, i.jsx)(O.default, {
      ref: ed,
      selected: n,
      className: a()(y.member, z, {
        [y.offline]: eU && !eb && !n
      }),
      innerClassName: y.memberInner,
      onClick: Q,
      onKeyDown: X,
      onMouseDown: Z,
      onContextMenu: q,
      onMouseEnter: eO,
      onMouseLeave: eC,
      name: null == U ? (0, i.jsx)("span", {
        className: y.username,
        children: eP()
      }) : (0, i.jsx)(l.Tooltip, {
        text: U,
        children: e => (0, i.jsx)("span", {
          ...e,
          className: a()(y.username, y.lostPermission),
          children: eP()
        })
      }),
      avatar: ey(w, eU),
      subText: eg(),
      decorators: eM(),
      "aria-controls": ee,
      "aria-expanded": et,
      "aria-setsize": ei,
      "aria-posinset": en,
      id: er,
      tabIndex: es,
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
  })
}