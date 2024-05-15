"use strict";
n.r(t), n.d(t, {
  default: function() {
    return en
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
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
  g = n("592125"),
  L = n("607744"),
  v = n("496675"),
  D = n("594174"),
  M = n("940627"),
  y = n("705600"),
  P = n("242315"),
  U = n("507893"),
  b = n("645284"),
  G = n("632184"),
  w = n("806519"),
  B = n("5192"),
  k = n("59688"),
  V = n("718582"),
  x = n("599539"),
  F = n("837771"),
  H = n("126134"),
  Y = n("981631"),
  j = n("765305"),
  W = n("689938"),
  K = n("303820"),
  z = n("181096");

function Z(e) {
  let {
    users: t,
    othersCount: n,
    extraPill: r
  } = e;
  return (0, i.jsxs)("div", {
    className: K.facepile,
    children: [t.map((e, r) => {
      let a = (0, i.jsx)(u.default, {
        user: e,
        size: l.AvatarSizes.SIZE_24,
        "aria-label": ""
      });
      return r === t.length - 1 && 0 === n ? (0, i.jsx)("div", {
        className: K.facePileItem,
        children: a
      }, e.id) : (0, i.jsx)(w.default, {
        width: 24,
        height: 24,
        mask: w.default.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
        className: K.facePileItem,
        children: a
      }, e.id)
    }), n > 0 && (0, i.jsxs)(l.Text, {
      color: "interactive-normal",
      variant: "text-xs/medium",
      className: K.othersCount,
      children: ["+", n]
    }), r]
  })
}

function X(e) {
  let {
    title: t,
    subtitle: n,
    usersToShow: r,
    othersCount: a,
    icon: s,
    extraPill: o,
    titleClassName: u
  } = e;
  return (0, i.jsxs)("div", {
    className: z.content,
    children: [(0, i.jsx)(l.Heading, {
      color: "header-primary",
      variant: "heading-sm/semibold",
      className: u,
      children: t
    }), (0, i.jsxs)("div", {
      className: K.cardDetailsTextContainer,
      children: [s, (0, i.jsx)(l.Text, {
        color: "text-secondary",
        variant: "text-xs/medium",
        className: z.singleLineTitle,
        children: n
      })]
    }), r.length > 0 && (0, i.jsx)(Z, {
      users: r,
      othersCount: a,
      extraPill: o
    })]
  })
}

function Q(e) {
  let {
    onClick: t,
    inCall: n
  } = e, a = n ? W.default.Messages.GUILD_POPOUT_JOINED : W.default.Messages.JOIN, s = r.useCallback(e => {
    e.stopPropagation(), t()
  }, [t]);
  return (0, i.jsx)(l.Button, {
    size: l.Button.Sizes.TINY,
    color: l.Button.Colors.GREEN,
    disabled: n,
    onClick: s,
    className: K.joinButton,
    children: a
  })
}

function q(e) {
  let {
    channelId: t,
    userIds: n,
    applicationId: a,
    guildId: u,
    streamersCount: _,
    cardData: E
  } = e, [I, T] = r.useState(!1), f = (0, o.useStateFromStores)([g.default], () => g.default.getChannel(t)), {
    totalUsers: S,
    usersToShow: h,
    othersCount: A
  } = (0, V.useGetCardUsers)(n, u, t), m = (0, d.useGetOrFetchApplication)(a);
  if (null == m || null == f) return null;
  let N = (0, F.getClickHandler)(E, u),
    p = (0, F.getJoinButton)(E, u),
    O = (0, F.getImage)(E, u),
    C = (0, c.getSimpleChannelIconComponent)(f.type),
    R = _ > 0 ? (0, i.jsxs)("div", {
      className: z.pill,
      children: [(0, i.jsx)(b.default, {
        className: z.pillIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-normal",
        variant: "text-xs/medium",
        children: _
      })]
    }) : null;
  return (0, i.jsx)(l.ClickableContainer, {
    onClick: () => null == N ? void 0 : N(),
    tag: "div",
    "aria-label": W.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
      users: S,
      gameName: m.name,
      channelName: null == f ? void 0 : f.name
    }),
    onMouseOver: () => T(!0),
    onMouseLeave: () => T(!1),
    children: (0, i.jsxs)("div", {
      className: z.container,
      children: [(0, i.jsx)("div", {
        className: z.image,
        children: O
      }), (0, i.jsx)(X, {
        title: m.name,
        subtitle: null == f ? void 0 : f.name,
        icon: null != C ? (0, i.jsx)(C, {
          width: 12,
          height: 12,
          className: s()(K.cardIcon, K.cardDetailsIcon)
        }) : null,
        usersToShow: h,
        othersCount: A,
        extraPill: R,
        titleClassName: z.singleLineTitle
      }), I && p]
    })
  })
}

function J(e) {
  var t;
  let {
    hangoutActivity: n,
    guildId: a
  } = e, [s, u] = r.useState(!1), {
    channelId: d,
    userIds: _,
    streamUserIds: c,
    videoUserIds: E
  } = n, I = (0, o.useStateFromStores)([g.default], () => g.default.getChannel(d)), {
    totalUsers: T,
    usersToShow: f,
    othersCount: S,
    usersText: h
  } = (0, V.useGetCardUsers)(_, a, d, c), A = (0, F.getClickHandler)(n, a), m = (0, F.getJoinButton)(n, a), N = (0, F.getImage)(n, a), p = h;
  if (0 === c.length && E.length > 0) {
    let e = B.default.getName(a, d, D.default.getUser(E[0]));
    p = 1 === E.length ? W.default.Messages.GUILD_POPOUT_USER_ON_VIDEO.format({
      username: e
    }) : W.default.Messages.GUILD_POPOUT_USERS_ON_VIDEO.format({
      username: e,
      count: E.length - 1
    })
  }
  return (0, i.jsx)(l.ClickableContainer, {
    onClick: () => null == A ? void 0 : A(),
    tag: "div",
    "aria-label": W.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
      users: T,
      channelName: null == I ? void 0 : I.name
    }),
    onMouseOver: () => u(!0),
    onMouseLeave: () => u(!1),
    children: (0, i.jsxs)("div", {
      className: z.container,
      children: [(0, i.jsx)("div", {
        className: z.image,
        children: N
      }), (0, i.jsx)(X, {
        title: null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : "",
        subtitle: p,
        usersToShow: f,
        othersCount: S,
        titleClassName: z.singleLineTitle
      }), s && m]
    })
  })
}

function $(e) {
  let {
    event: t,
    cardData: n
  } = e, [a, u] = r.useState(!1), d = (0, o.useStateFromStores)([g.default], () => g.default.getChannel(t.channel_id)), {
    usersToShow: _,
    othersCount: c,
    audienceCount: E
  } = (0, V.useGetEventCardUsers)(d), I = (0, A.getLocationDataForEvent)(t, d), T = null == I ? void 0 : I.locationName, f = null == I ? void 0 : I.IconComponent, S = (0, F.getClickHandler)(n, t.guild_id), h = (0, F.getJoinButton)(n, t.guild_id), m = (0, F.getImage)(n, t.guild_id), N = null != E ? (0, i.jsxs)("div", {
    className: z.pill,
    children: [(0, i.jsx)(P.default, {
      className: z.pillIcon
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
    "aria-label": W.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
      eventName: t.name
    }),
    children: (0, i.jsxs)("div", {
      className: z.container,
      children: [(0, i.jsx)("div", {
        className: z.image,
        children: m
      }), (0, i.jsx)(X, {
        title: t.name,
        subtitle: null != d ? d.name : T,
        icon: null != f ? (0, i.jsx)(f, {
          width: 12,
          height: 12,
          className: s()(K.cardIcon, K.cardDetailsIcon)
        }) : null,
        usersToShow: _,
        othersCount: c,
        extraPill: N,
        titleClassName: t.entity_type === j.GuildScheduledEventEntityTypes.EXTERNAL || t.entity_type === j.GuildScheduledEventEntityTypes.NONE ? z.multiLineTitle : z.singleLineTitle
      }), a && h]
    })
  })
}

function ee(e) {
  var t;
  let {
    channelId: n,
    guildId: a
  } = e, s = (0, o.useStateFromStores)([g.default], () => g.default.getChannel(n)), {
    needSubscriptionToAccess: u
  } = (0, h.default)(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : void 0), d = (0, o.useStateFromStores)([v.default], () => !v.default.can(Y.Permissions.CONNECT, s)), c = r.useCallback(() => {
    (0, R.transitionToGuild)(a, n)
  }, [n, a]), E = r.useCallback(() => {
    null != s && (!d && _.default.handleVoiceConnect({
      channel: s,
      connected: !1,
      needSubscriptionToAccess: u,
      locked: d
    }), (0, R.transitionToGuild)(a, n))
  }, [s, n, a, d, u]);
  return (0, i.jsxs)(l.ClickableContainer, {
    onClick: c,
    tag: "div",
    "aria-label": W.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_ARIA.format({
      channelName: null == s ? void 0 : s.name
    }),
    className: K.emptyStateCardContainer,
    children: [(0, i.jsx)(G.default, {
      width: 12,
      height: 12,
      className: K.cardIcon
    }), (0, i.jsx)("div", {
      className: K.cardDetailsContainer,
      children: (0, i.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        lineClamp: 1,
        children: null == s ? void 0 : s.name
      })
    }), (0, i.jsx)(Q, {
      onClick: E
    })]
  })
}

function et(e) {
  let {
    guild: t,
    guildPeekCardType: a
  } = e, s = (0, k.useCanShowNewGuildTooltipActivityEmptyState)(), o = a === H.GuildPeekCardTypes.WHO, u = (0, V.useGuildPopoutCards)(t), d = r.useMemo(() => u.map(e => {
    if (o && e.category !== H.CardCategory.EMPTY) {
      let n = null;
      return e.category === H.CardCategory.EMBEDDED_ACTIVITY ? n = e.embeddedActivities[0].channelId : e.category === H.CardCategory.HANGOUT || e.category === H.CardCategory.GAMING ? n = e.channelId : e.category === H.CardCategory.EVENT && (n = e.event.channel_id), (0, i.jsx)(x.default, {
        cardData: e,
        guildId: t.id
      }, "".concat(e.category, "-").concat(n))
    }
    if (e.category === H.CardCategory.HANGOUT) return (0, i.jsx)(J, {
      hangoutActivity: e,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId));
    if (e.category === H.CardCategory.EVENT) return (0, i.jsx)($, {
      event: e.event,
      cardData: e
    }, "".concat(e.category, "-").concat(e.event.id));
    if (e.category === H.CardCategory.EMBEDDED_ACTIVITY) {
      let {
        channelId: n,
        applicationId: r,
        userIds: a
      } = e.embeddedActivities[0];
      return (0, i.jsx)(q, {
        channelId: n,
        applicationId: r,
        userIds: Array.from(a),
        guildId: t.id,
        streamersCount: e.streamersCount,
        cardType: H.CardCategory.EMBEDDED_ACTIVITY,
        cardData: e
      }, "".concat(e.category, "-").concat(e.embeddedActivities[0].channelId))
    } else if (e.category === H.CardCategory.GAMING) {
      let {
        channelId: n,
        games: r,
        voiceStates: a,
        streamersCount: s
      } = e;
      return (0, i.jsx)(q, {
        channelId: n,
        applicationId: r[0].application_id,
        userIds: a.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        guildId: t.id,
        streamersCount: s,
        cardType: H.CardCategory.GAMING,
        cardData: e
      }, "".concat(e.category, "-").concat(e.channelId))
    } else if (e.category === H.CardCategory.EMPTY) return (0, i.jsx)(ee, {
      channelId: e.channelId,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId))
  }), [u, t.id, o]);
  if (0 === u.length) return null;
  if (u[0].category === H.CardCategory.EMPTY) return s ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: K.emptyStatePrompt,
      children: [(0, i.jsx)("img", {
        src: n("121727"),
        alt: ""
      }), (0, i.jsxs)("div", {
        className: K.emptyStateTextContainer,
        children: [(0, i.jsx)(l.Heading, {
          variant: "heading-sm/semibold",
          color: "header-primary",
          children: W.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_HEADER
        }), (0, i.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: W.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_BODY
        })]
      })]
    }), d]
  }) : null;
  return (0, i.jsx)("div", {
    className: K.cards,
    children: d
  })
}

function en(e) {
  let {
    guild: t,
    closePopout: n
  } = e, r = (0, k.useGuildPeekCardType)(), a = (0, E.default)(t), s = (0, m.useShouldShowInvitesDisabledNotif)(t), {
    isViewingRoles: u,
    backNavigationSection: d
  } = (0, o.useStateFromStoresObject)([O.default], () => ({
    isViewingRoles: O.default.isViewingRoles(t.id),
    backNavigationSection: O.default.getBackNavigationSection(t.id)
  })), {
    isUserLurking: _,
    isUnverifiedAccount: c
  } = (0, o.useStateFromStoresObject)([C.default, L.default], () => {
    let e = C.default.isLurking(t.id);
    return {
      isUserLurking: e,
      isUnverifiedAccount: !L.default.getCheck(t.id).canChat
    }
  }), h = () => {
    O.default.isFullServerPreview(t.id) && (0, R.transitionTo)(Y.Routes.CHANNEL(t.id)), T.default.shouldShowOnboarding(t.id) && (I.default.finishOnboarding(t.id), (0, f.discardOnboardingPromise)(t.id)), (0, p.stopImpersonating)(t.id), N.default.open(t.id, d), d === Y.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, S.announceDeleteTemplateChannels)(t.id)
  };
  return (0, i.jsxs)("div", {
    className: K.container,
    children: [(0, i.jsxs)("div", {
      className: K.header,
      children: [a ? (0, i.jsx)(y.default, {
        guild: t,
        size: 16,
        className: K.rowIconV2,
        tooltipColor: l.Tooltip.Colors.PRIMARY
      }) : (0, i.jsx)(M.default, {
        guild: t,
        size: 20,
        className: K.rowIcon
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/bold",
        color: "header-primary",
        children: t.name
      })]
    }), !_ && !c && (0, i.jsx)(et, {
      guild: t,
      guildPeekCardType: r
    }), s ? (0, i.jsxs)("div", {
      className: K.footer,
      children: [(0, i.jsx)(U.default, {
        width: 12,
        height: 12,
        className: K.infoIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: W.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
          onClick: () => {
            n(), N.default.open(t.id, Y.GuildSettingsSections.INSTANT_INVITES)
          }
        })
      })]
    }) : null, u ? (0, i.jsxs)("div", {
      className: K.footer,
      children: [(0, i.jsx)(U.default, {
        width: 12,
        height: 12,
        className: K.infoIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: W.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
          onClick: () => {
            n(), h()
          }
        })
      })]
    }) : null]
  })
}