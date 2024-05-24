"use strict";
n.r(t), n.d(t, {
  CardAvatars: function() {
    return X
  },
  default: function() {
    return ei
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("442837"),
  l = n("481060"),
  u = n("700582"),
  d = n("835473"),
  _ = n("557135"),
  c = n("471445"),
  E = n("666188"),
  I = n("549817"),
  T = n("819553"),
  f = n("17181"),
  S = n("303737"),
  h = n("66999"),
  A = n("217804"),
  m = n("965638"),
  N = n("434404"),
  p = n("962086"),
  O = n("160404"),
  C = n("41776"),
  R = n("703656"),
  g = n("427679"),
  L = n("592125"),
  v = n("607744"),
  D = n("496675"),
  M = n("594174"),
  y = n("940627"),
  P = n("705600"),
  U = n("242315"),
  b = n("507893"),
  G = n("645284"),
  w = n("632184"),
  k = n("170039"),
  B = n("806519"),
  V = n("5192"),
  x = n("718582"),
  F = n("599539"),
  H = n("837771"),
  Y = n("126134"),
  j = n("981631"),
  W = n("765305"),
  K = n("689938"),
  z = n("303820"),
  Z = n("181096");

function X(e) {
  let {
    users: t,
    othersCount: n,
    extraPill: r
  } = e;
  return (0, i.jsxs)("div", {
    className: z.facepile,
    children: [t.map((e, r) => {
      let s = (0, i.jsx)(u.default, {
        user: e,
        size: l.AvatarSizes.SIZE_20,
        "aria-label": ""
      });
      return r === t.length - 1 && 0 === n ? (0, i.jsx)("div", {
        className: z.facePileItem,
        children: s
      }, e.id) : (0, i.jsx)(B.default, {
        width: 20,
        height: 20,
        mask: B.default.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
        className: z.facePileItem,
        children: s
      }, e.id)
    }), n > 0 && (0, i.jsxs)(l.Text, {
      color: "interactive-normal",
      variant: "text-xs/medium",
      className: z.othersCount,
      children: ["+", n]
    }), r]
  })
}

function Q(e) {
  let {
    title: t,
    subtitle: n,
    usersToShow: r,
    othersCount: s,
    icon: a,
    extraPill: o,
    titleClassName: u
  } = e;
  return (0, i.jsxs)("div", {
    className: Z.content,
    children: [(0, i.jsx)(l.Heading, {
      color: "header-primary",
      variant: "heading-sm/semibold",
      className: u,
      children: t
    }), (0, i.jsxs)("div", {
      className: z.cardDetailsTextContainer,
      children: [a, (0, i.jsx)(l.Text, {
        color: "text-secondary",
        variant: "text-xs/medium",
        className: Z.singleLineTitle,
        children: n
      })]
    }), (r.length > 0 || null != o) && (0, i.jsx)(X, {
      users: r,
      othersCount: s,
      extraPill: o
    })]
  })
}

function q(e) {
  let {
    onClick: t,
    inCall: n
  } = e, s = n ? K.default.Messages.GUILD_POPOUT_JOINED : K.default.Messages.JOIN, a = r.useCallback(e => {
    e.stopPropagation(), t()
  }, [t]);
  return (0, i.jsx)(l.Button, {
    size: l.Button.Sizes.TINY,
    color: l.Button.Colors.GREEN,
    disabled: n,
    onClick: a,
    className: z.joinButton,
    children: s
  })
}

function J(e) {
  let {
    channelId: t,
    userIds: n,
    applicationId: s,
    guildId: u,
    streamersCount: _,
    cardData: E
  } = e, [I, T] = r.useState(!1), f = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(t)), {
    totalUsers: S,
    usersToShow: h,
    othersCount: A
  } = (0, x.useGetCardUsers)(n, u, t), m = (0, d.useGetOrFetchApplication)(s), N = (0, H.useImage)(E, u);
  if (null == m || null == f) return null;
  let p = (0, H.getClickHandler)(E, u),
    O = (0, H.getJoinButton)(E, u),
    C = (0, c.getSimpleChannelIconComponent)(f.type),
    R = _ > 0 ? (0, i.jsxs)("div", {
      className: Z.pill,
      children: [(0, i.jsx)(G.default, {
        className: Z.pillIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-normal",
        variant: "text-xs/medium",
        children: _
      })]
    }) : null;
  return (0, i.jsx)(l.ClickableContainer, {
    onClick: () => null == p ? void 0 : p(),
    tag: "div",
    "aria-label": K.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
      users: S,
      gameName: m.name,
      channelName: null == f ? void 0 : f.name
    }),
    onMouseOver: () => T(!0),
    onMouseLeave: () => T(!1),
    children: (0, i.jsxs)("div", {
      className: Z.container,
      children: [(0, i.jsx)("div", {
        className: Z.image,
        children: N
      }), (0, i.jsx)(Q, {
        title: m.name,
        subtitle: null == f ? void 0 : f.name,
        icon: null != C ? (0, i.jsx)(C, {
          width: 12,
          height: 12,
          className: a()(z.cardIcon, z.cardDetailsIcon)
        }) : null,
        usersToShow: h,
        othersCount: A,
        extraPill: R,
        titleClassName: Z.singleLineTitle
      }), I && O]
    })
  })
}

function $(e) {
  var t;
  let {
    hangoutActivity: n,
    guildId: s
  } = e, [u, d] = r.useState(!1), {
    channelId: _,
    userIds: c,
    streamUserIds: E,
    videoUserIds: I
  } = n, T = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(_)), {
    totalUsers: f,
    usersToShow: S,
    othersCount: h,
    usersText: A
  } = (0, x.useGetCardUsers)(c, s, _, E), {
    usersToShow: m,
    othersCount: N,
    audienceCount: p
  } = (0, x.useGetEventCardUsers)(T), O = (0, H.getClickHandler)(n, s), C = (0, H.getJoinButton)(n, s), R = (0, H.useImage)(n, s), v = null == T ? void 0 : T.isGuildStageVoice(), D = A, y = (0, o.useStateFromStores)([g.default], () => {
    var e;
    return null === (e = g.default.getStageInstanceByChannel(_)) || void 0 === e ? void 0 : e.topic
  });
  if (v) D = null == T ? void 0 : T.name;
  else if (0 === E.length && I.length > 0) {
    let e = V.default.getName(s, _, M.default.getUser(I[0]));
    D = 1 === I.length ? K.default.Messages.GUILD_POPOUT_USER_ON_VIDEO.format({
      username: e
    }) : K.default.Messages.GUILD_POPOUT_USERS_ON_VIDEO.format({
      username: e,
      count: I.length - 1
    })
  }
  let P = null != p ? (0, i.jsxs)("div", {
    className: Z.pill,
    children: [(0, i.jsx)(U.default, {
      className: Z.pillIcon
    }), (0, i.jsx)(l.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: p
    })]
  }) : null;
  return (0, i.jsx)(l.ClickableContainer, {
    onClick: () => null == O ? void 0 : O(),
    tag: "div",
    "aria-label": K.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
      users: f,
      channelName: null == T ? void 0 : T.name
    }),
    onMouseOver: () => d(!0),
    onMouseLeave: () => d(!1),
    children: (0, i.jsxs)("div", {
      className: Z.container,
      children: [(0, i.jsx)("div", {
        className: Z.image,
        children: R
      }), (0, i.jsx)(Q, {
        title: null !== (t = null != y ? y : null == T ? void 0 : T.name) && void 0 !== t ? t : "",
        subtitle: D,
        icon: v && (0, i.jsx)(k.default, {
          width: 12,
          height: 12,
          className: a()(z.cardIcon, z.cardDetailsIcon)
        }),
        usersToShow: v ? m : S,
        othersCount: v ? N : h,
        titleClassName: Z.singleLineTitle,
        extraPill: P
      }), u && C]
    })
  })
}

function ee(e) {
  let {
    event: t,
    cardData: n
  } = e, [s, u] = r.useState(!1), d = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(t.channel_id)), {
    usersToShow: _,
    othersCount: c,
    audienceCount: E
  } = (0, x.useGetEventCardUsers)(d), I = (0, A.getLocationDataForEvent)(t, d), T = null == I ? void 0 : I.locationName, f = null == I ? void 0 : I.IconComponent, S = (0, H.getClickHandler)(n, t.guild_id), h = (0, H.getJoinButton)(n, t.guild_id), m = (0, H.useImage)(n, t.guild_id), N = null != E ? (0, i.jsxs)("div", {
    className: Z.pill,
    children: [(0, i.jsx)(U.default, {
      className: Z.pillIcon
    }), (0, i.jsx)(l.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: E
    })]
  }) : null;
  return (0, i.jsx)(l.ClickableContainer, {
    onClick: () => null == S ? void 0 : S(),
    tag: "div",
    onMouseOver: () => u(!0),
    onMouseLeave: () => u(!1),
    "aria-label": K.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
      eventName: t.name
    }),
    children: (0, i.jsxs)("div", {
      className: Z.container,
      children: [(0, i.jsx)("div", {
        className: Z.image,
        children: m
      }), (0, i.jsx)(Q, {
        title: t.name,
        subtitle: null != d ? d.name : T,
        icon: null != f ? (0, i.jsx)(f, {
          width: 12,
          height: 12,
          className: a()(z.cardIcon, z.cardDetailsIcon)
        }) : null,
        usersToShow: _,
        othersCount: c,
        extraPill: N,
        titleClassName: t.entity_type === W.GuildScheduledEventEntityTypes.EXTERNAL || t.entity_type === W.GuildScheduledEventEntityTypes.NONE ? Z.multiLineTitle : Z.singleLineTitle
      }), s && h]
    })
  })
}

function et(e) {
  var t;
  let {
    channelId: n,
    guildId: s
  } = e, a = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(n)), {
    needSubscriptionToAccess: u
  } = (0, h.default)(null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : void 0), d = (0, o.useStateFromStores)([D.default], () => !D.default.can(j.Permissions.CONNECT, a)), c = r.useCallback(() => {
    (0, R.transitionToGuild)(s, n)
  }, [n, s]), E = r.useCallback(() => {
    null != a && (!d && _.default.handleVoiceConnect({
      channel: a,
      connected: !1,
      needSubscriptionToAccess: u,
      locked: d
    }), (0, R.transitionToGuild)(s, n))
  }, [a, n, s, d, u]);
  return (0, i.jsxs)(l.ClickableContainer, {
    onClick: c,
    tag: "div",
    "aria-label": K.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_ARIA.format({
      channelName: null == a ? void 0 : a.name
    }),
    className: z.emptyStateCardContainer,
    children: [(0, i.jsx)(w.default, {
      width: 12,
      height: 12,
      className: z.cardIcon
    }), (0, i.jsx)("div", {
      className: z.cardDetailsContainer,
      children: (0, i.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        lineClamp: 1,
        children: null == a ? void 0 : a.name
      })
    }), (0, i.jsx)(q, {
      onClick: E
    })]
  })
}

function en(e) {
  let {
    guild: t
  } = e, n = (0, x.useGuildPopoutCards)(t), s = r.useMemo(() => n.map(e => {
    if (e.category !== Y.CardCategory.EMPTY) {
      let n = null;
      return e.category === Y.CardCategory.EMBEDDED_ACTIVITY ? n = e.embeddedActivities[0].channelId : e.category === Y.CardCategory.HANGOUT || e.category === Y.CardCategory.GAMING ? n = e.channelId : e.category === Y.CardCategory.EVENT && (n = e.event.channel_id), (0, i.jsx)(F.default, {
        cardData: e,
        guildId: t.id
      }, "".concat(e.category, "-").concat(n))
    }
    if (e.category === Y.CardCategory.HANGOUT) return (0, i.jsx)($, {
      hangoutActivity: e,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId));
    if (e.category === Y.CardCategory.EVENT) return (0, i.jsx)(ee, {
      event: e.event,
      cardData: e
    }, "".concat(e.category, "-").concat(e.event.id));
    if (e.category === Y.CardCategory.EMBEDDED_ACTIVITY) {
      let {
        channelId: n,
        applicationId: r,
        userIds: s
      } = e.embeddedActivities[0];
      return (0, i.jsx)(J, {
        channelId: n,
        applicationId: r,
        userIds: Array.from(s),
        guildId: t.id,
        streamersCount: e.streamersCount,
        cardType: Y.CardCategory.EMBEDDED_ACTIVITY,
        cardData: e
      }, "".concat(e.category, "-").concat(e.embeddedActivities[0].channelId))
    } else if (e.category === Y.CardCategory.GAMING) {
      let {
        channelId: n,
        games: r,
        voiceStates: s,
        streamersCount: a
      } = e;
      return (0, i.jsx)(J, {
        channelId: n,
        applicationId: r[0].application_id,
        userIds: s.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        guildId: t.id,
        streamersCount: a,
        cardType: Y.CardCategory.GAMING,
        cardData: e
      }, "".concat(e.category, "-").concat(e.channelId))
    } else if (e.category === Y.CardCategory.EMPTY) return (0, i.jsx)(et, {
      channelId: e.channelId,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId))
  }), [n, t.id, !0]);
  if (0 === n.length) return null;
  if (n[0].category === Y.CardCategory.EMPTY) return null;
  return (0, i.jsx)("div", {
    className: z.cards,
    children: s
  })
}

function ei(e) {
  var t;
  let {
    guild: n,
    closePopout: s,
    nudge: a
  } = e, u = r.useRef(null), d = (0, E.default)(n), _ = (0, m.useShouldShowInvitesDisabledNotif)(n), {
    isViewingRoles: c,
    backNavigationSection: h
  } = (0, o.useStateFromStoresObject)([O.default], () => ({
    isViewingRoles: O.default.isViewingRoles(n.id),
    backNavigationSection: O.default.getBackNavigationSection(n.id)
  })), {
    isUserLurking: A,
    isUnverifiedAccount: g
  } = (0, o.useStateFromStoresObject)([C.default, v.default], () => {
    let e = C.default.isLurking(n.id);
    return {
      isUserLurking: e,
      isUnverifiedAccount: !v.default.getCheck(n.id).canChat
    }
  }), L = () => {
    O.default.isFullServerPreview(n.id) && (0, R.transitionTo)(j.Routes.CHANNEL(n.id)), T.default.shouldShowOnboarding(n.id) && (I.default.finishOnboarding(n.id), (0, f.discardOnboardingPromise)(n.id)), (0, p.stopImpersonating)(n.id), N.default.open(n.id, h), h === j.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, S.announceDeleteTemplateChannels)(n.id)
  }, D = null === (t = u.current) || void 0 === t ? void 0 : t.clientHeight, M = a + 14;
  return (0, i.jsxs)("div", {
    className: z.container,
    ref: u,
    children: [(0, i.jsx)("div", {
      className: z.tooltipPointer,
      style: {
        top: Math.min(M, null != D ? D - 22 : M)
      }
    }), (0, i.jsxs)("div", {
      className: z.header,
      children: [d ? (0, i.jsx)(P.default, {
        guild: n,
        size: 16,
        className: z.rowIconV2,
        tooltipColor: l.Tooltip.Colors.PRIMARY
      }) : (0, i.jsx)(y.default, {
        guild: n,
        size: 20,
        className: z.rowIcon
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/bold",
        color: "header-primary",
        children: n.name
      })]
    }), !A && !g && (0, i.jsx)(en, {
      guild: n
    }), _ ? (0, i.jsxs)("div", {
      className: z.footer,
      children: [(0, i.jsx)(b.default, {
        width: 12,
        height: 12,
        className: z.infoIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: K.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
          onClick: () => {
            s(), N.default.open(n.id, j.GuildSettingsSections.INSTANT_INVITES)
          }
        })
      })]
    }) : null, c ? (0, i.jsxs)("div", {
      className: z.footer,
      children: [(0, i.jsx)(b.default, {
        width: 12,
        height: 12,
        className: z.infoIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: K.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
          onClick: () => {
            s(), L()
          }
        })
      })]
    }) : null]
  })
}