"use strict";
n.r(t), n.d(t, {
  AVATAR_DECORATION_PADDING: function() {
    return y
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
  I = n("553393"),
  T = n("509275"),
  f = n("204197"),
  S = n("594174"),
  h = n("467679"),
  A = n("681426"),
  m = n("551388"),
  N = n("709586"),
  p = n("360048"),
  O = n("624138"),
  C = n("51144"),
  R = n("788307"),
  g = n("981631"),
  L = n("674563"),
  v = n("524484"),
  D = n("689938"),
  M = n("895294");
let y = (0, O.cssValueToNumber)(o.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
t.default = function(e) {
  var t;
  let {
    selected: n = !1,
    colorString: s,
    colorRoleName: o,
    isOwner: O,
    ownerTooltipText: y,
    lostPermissionTooltipText: P,
    isTyping: U = !1,
    nick: b,
    user: G,
    currentUser: w,
    activities: k,
    applicationStream: B,
    status: V,
    shouldAnimateStatus: x = !1,
    isMobile: F,
    premiumSince: H,
    channel: Y,
    guildId: j,
    lastOnlineTimestamp: W,
    className: K,
    onMouseDown: z,
    onKeyDown: Z,
    onClick: X,
    onContextMenu: Q,
    onClickPremiumGuildIcon: q,
    onFocus: J,
    "aria-controls": $,
    "aria-expanded": ee,
    "aria-posinset": et,
    "aria-setsize": en,
    id: ei,
    tabIndex: er,
    itemProps: es
  } = e, ea = null == G ? void 0 : G.id, eo = C.default.useName(G), el = (null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === ea, eu = r.useRef(null), [ed, e_] = r.useState(!1), [ec, eE] = r.useState(null), {
    avatarDecorationSrc: eI,
    avatarSrc: eT,
    eventHandlers: ef
  } = (0, f.default)({
    user: G,
    size: l.AvatarSizes.SIZE_32,
    animateOnHover: !(n || ed),
    guildId: j
  }), eS = r.useMemo(() => ({
    source: g.AnalyticsSections.MEMBER_LIST,
    tagUserId: ea
  }), [ea]), [eh, eA] = r.useState(!1);
  r.useEffect(() => {
    n && eA(!1)
  }, [n]);
  let em = (0, E.useQuestFromActivities)(k),
    eN = null != em && !el && n && !eh,
    ep = () => {
      e_(!0)
    },
    eO = () => {
      e_(!1)
    },
    eC = e => {
      eE(e)
    },
    eR = () => {
      let e = null != k ? k.find(e => e.type === g.ActivityTypes.CUSTOM_STATUS) : null,
        t = null != e && null != G && (0, _.default)(e, G, Y);
      if (null != W && null == e) {
        let e = (0, T.formatRecentlyOnlineStatus)(W);
        return (0, i.jsx)("div", {
          className: M.subtext,
          children: e
        })
      }
      return (0, i.jsx)(R.default, {
        className: M.activity,
        textClassName: M.activityText,
        emojiClassName: M.activityEmoji,
        activities: k,
        applicationStream: B,
        animate: ed,
        hideEmoji: !t,
        hideTooltip: !0,
        user: G,
        hasQuest: null != em
      })
    },
    eg = () => null != O && O && null == P ? (0, i.jsx)(l.Tooltip, {
      text: null != y ? y : D.default.Messages.GUILD_OWNER,
      children: e => (0, i.jsx)(m.default, {
        ...e,
        className: M.ownerIcon
      })
    }) : null,
    eL = () => null == H ? null : (0, i.jsx)(l.Tooltip, {
      text: D.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
        date: H
      }),
      children: e => (0, i.jsx)(l.Clickable, {
        onClick: q,
        tabIndex: -1,
        children: (0, i.jsx)(N.default, {
          ...e,
          className: M.premiumIcon
        })
      })
    }),
    ev = () => {
      let e = (null == G ? void 0 : G.isClyde()) ? L.BotTagTypes.AI : L.BotTagTypes.BOT;
      return null != G && G.bot ? (0, i.jsx)(h.default, {
        className: M.botTag,
        type: e,
        verified: G.isVerifiedBot()
      }) : null
    },
    eD = () => (0, i.jsxs)(i.Fragment, {
      children: [ev(), eg(), eL()]
    }),
    eM = (e, t) => {
      let n = x ? l.AnimatedAvatar : l.Avatar,
        r = (0, u.default)(k) ? g.StatusTypes.STREAMING : V;
      return r = t ? void 0 : r, (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(n, {
          ...ef,
          size: l.AvatarSizes.SIZE_32,
          src: eT,
          isMobile: F,
          isTyping: U,
          status: r,
          "aria-label": e.username,
          statusTooltip: !0,
          avatarDecoration: eI,
          typingIndicatorRef: eC
        }), (0, i.jsx)(c.default, {
          confettiSpawnRef: ec,
          shouldFire: U && null != w && e.id !== w.id,
          confettiLocation: v.ConfettiLocation.MEMBER_USER
        })]
      })
    },
    ey = () => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.NameWithRole, {
        roleName: o,
        color: null != s ? s : void 0,
        name: null != b ? b : eo,
        className: M.name
      }), (0, i.jsx)(d.default, {
        clan: null == G ? void 0 : G.clan,
        userId: null == G ? void 0 : G.id,
        contextGuildId: j,
        disableTooltip: !0,
        className: M.clanTag,
        profileViewedAnalytics: eS
      })]
    }),
    eP = V === g.StatusTypes.OFFLINE,
    eU = null != W;
  return null == G ? (0, i.jsx)(A.default, {
    avatarSize: l.AvatarSizes.SIZE_32,
    className: M.placeholder
  }) : (0, i.jsx)(l.Popout, {
    renderPopout: e => (0, i.jsx)(I.default, {
      quest: em,
      memberListItemRef: eu,
      applicationStream: B,
      ...e,
      closePopout: () => eA(!0)
    }),
    position: "bottom",
    shouldShow: eN,
    nudgeAlignIntoViewport: !1,
    useRawTargetDimensions: !0,
    animation: l.Popout.Animation.NONE,
    spacing: -3,
    children: () => (0, i.jsx)(p.default, {
      ref: eu,
      selected: n,
      className: a()(M.member, K, {
        [M.offline]: eP && !eU && !n
      }),
      innerClassName: M.memberInner,
      onClick: X,
      onKeyDown: Z,
      onMouseDown: z,
      onContextMenu: Q,
      onMouseEnter: ep,
      onMouseLeave: eO,
      name: null == P ? (0, i.jsx)("span", {
        className: M.username,
        children: ey()
      }) : (0, i.jsx)(l.Tooltip, {
        text: P,
        children: e => (0, i.jsx)("span", {
          ...e,
          className: a()(M.username, M.lostPermission),
          children: ey()
        })
      }),
      avatar: eM(G, eP),
      subText: eR(),
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