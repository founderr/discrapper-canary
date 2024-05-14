"use strict";
n.r(t), n.d(t, {
  default: function() {
    return et
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
  A = n("15274"),
  m = n("217804"),
  N = n("965638"),
  p = n("434404"),
  O = n("962086"),
  C = n("160404"),
  R = n("41776"),
  g = n("703656"),
  L = n("592125"),
  v = n("607744"),
  D = n("496675"),
  M = n("940627"),
  y = n("705600"),
  P = n("242315"),
  U = n("507893"),
  b = n("645284"),
  G = n("632184"),
  w = n("806519"),
  B = n("59688"),
  k = n("718582"),
  V = n("599539"),
  x = n("837771"),
  F = n("126134"),
  H = n("981631"),
  Y = n("765305"),
  j = n("689938"),
  W = n("303820"),
  K = n("181096");

function z(e) {
  let {
    users: t,
    othersCount: n,
    extraPill: r
  } = e;
  return (0, i.jsxs)("div", {
    className: W.facepile,
    children: [t.map((e, r) => {
      let a = (0, i.jsx)(u.default, {
        user: e,
        size: l.AvatarSizes.SIZE_24,
        "aria-label": ""
      });
      return r === t.length - 1 && 0 === n ? (0, i.jsx)("div", {
        className: W.facePileItem,
        children: a
      }, e.id) : (0, i.jsx)(w.default, {
        width: 24,
        height: 24,
        mask: w.default.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
        className: W.facePileItem,
        children: a
      }, e.id)
    }), n > 0 && (0, i.jsxs)(l.Text, {
      color: "interactive-normal",
      variant: "text-xs/medium",
      className: W.othersCount,
      children: ["+", n]
    }), r]
  })
}

function Z(e) {
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
    className: K.content,
    children: [(0, i.jsx)(l.Heading, {
      color: "header-primary",
      variant: "heading-sm/semibold",
      className: u,
      children: t
    }), (0, i.jsxs)("div", {
      className: W.cardDetailsTextContainer,
      children: [s, (0, i.jsx)(l.Text, {
        color: "text-secondary",
        variant: "text-xs/medium",
        className: K.singleLineTitle,
        children: n
      })]
    }), r.length > 0 && (0, i.jsx)(z, {
      users: r,
      othersCount: a,
      extraPill: o
    })]
  })
}

function X(e) {
  let {
    onClick: t,
    inCall: n
  } = e, a = n ? j.default.Messages.GUILD_POPOUT_JOINED : j.default.Messages.JOIN, s = r.useCallback(e => {
    e.stopPropagation(), t()
  }, [t]);
  return (0, i.jsx)(l.Button, {
    size: l.Button.Sizes.TINY,
    color: l.Button.Colors.GREEN,
    disabled: n,
    onClick: s,
    className: W.joinButton,
    children: a
  })
}

function Q(e) {
  let {
    channelId: t,
    userIds: n,
    applicationId: a,
    guildId: u,
    streamersCount: _,
    cardData: E
  } = e, [I, T] = r.useState(!1), f = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(t)), {
    totalUsers: S,
    usersToShow: h,
    othersCount: A
  } = (0, k.useGetCardUsers)(n, u, t), m = (0, d.useGetOrFetchApplication)(a), N = r.useCallback(() => {
    (0, g.transitionToGuild)(u, t)
  }, [t, u]);
  if (null == m || null == f) return null;
  let p = (0, x.getJoinButton)(E, u),
    O = (0, x.getImage)(E, u),
    C = (0, c.getSimpleChannelIconComponent)(f.type),
    R = _ > 0 ? (0, i.jsxs)("div", {
      className: W.numberPill,
      children: [(0, i.jsx)(b.default, {
        width: 12,
        height: 12,
        className: s()(W.cardIcon, W.cardDetailsIcon)
      }), (0, i.jsx)(l.Text, {
        color: "text-normal",
        variant: "text-xs/normal",
        children: _
      })]
    }) : null;
  return (0, i.jsx)(l.ClickableContainer, {
    onClick: N,
    tag: "div",
    "aria-label": j.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
      users: S,
      gameName: m.name,
      channelName: null == f ? void 0 : f.name
    }),
    onMouseOver: () => T(!0),
    onMouseLeave: () => T(!1),
    children: (0, i.jsxs)("div", {
      className: K.container,
      children: [(0, i.jsx)("div", {
        className: K.image,
        children: O
      }), (0, i.jsx)(Z, {
        title: m.name,
        subtitle: null == f ? void 0 : f.name,
        icon: null != C ? (0, i.jsx)(C, {
          width: 12,
          height: 12,
          className: s()(W.cardIcon, W.cardDetailsIcon)
        }) : null,
        usersToShow: h,
        othersCount: A,
        extraPill: R,
        titleClassName: K.singleLineTitle
      }), I && p]
    })
  })
}

function q(e) {
  var t;
  let {
    hangoutActivity: n,
    guildId: a
  } = e, [s, u] = r.useState(!1), {
    channelId: d,
    userIds: _,
    streamUserIds: c
  } = n, E = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(d)), {
    totalUsers: I,
    usersToShow: T,
    othersCount: f,
    usersText: S
  } = (0, k.useGetCardUsers)(_, a, d, c), h = r.useCallback(() => {
    (0, g.transitionToGuild)(a, d)
  }, [d, a]), A = (0, x.getJoinButton)(n, a), m = (0, x.getImage)(n, a);
  return (0, i.jsx)(l.ClickableContainer, {
    onClick: h,
    tag: "div",
    "aria-label": j.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
      users: I,
      channelName: null == E ? void 0 : E.name
    }),
    onMouseOver: () => u(!0),
    onMouseLeave: () => u(!1),
    children: (0, i.jsxs)("div", {
      className: K.container,
      children: [(0, i.jsx)("div", {
        className: K.image,
        children: m
      }), (0, i.jsx)(Z, {
        title: null !== (t = null == E ? void 0 : E.name) && void 0 !== t ? t : "",
        subtitle: S,
        usersToShow: T,
        othersCount: f,
        titleClassName: K.singleLineTitle
      }), s && A]
    })
  })
}

function J(e) {
  let {
    event: t,
    cardData: n
  } = e, [a, u] = r.useState(!1), d = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(t.channel_id)), {
    usersToShow: _,
    othersCount: c,
    audienceCount: E
  } = (0, k.useGetEventCardUsers)(d), I = (0, m.getLocationDataForEvent)(t, d), T = null == I ? void 0 : I.locationName, f = null == I ? void 0 : I.IconComponent, S = r.useCallback(() => {
    (0, A.openGuildEventDetails)({
      eventId: t.id
    })
  }, [t.id]), h = (0, x.getJoinButton)(n, t.guild_id), N = (0, x.getImage)(n, t.guild_id), p = null != E ? (0, i.jsxs)("div", {
    className: W.numberPill,
    children: [(0, i.jsx)(P.default, {
      width: 12,
      height: 12,
      className: s()(W.cardIcon, W.cardDetailsIcon)
    }), (0, i.jsx)(l.Text, {
      color: "text-normal",
      variant: "text-xs/normal",
      children: E
    })]
  }) : null;
  return (0, i.jsx)(l.ClickableContainer, {
    onClick: S,
    tag: "div",
    onMouseOver: () => u(!0),
    onMouseLeave: () => u(!1),
    "aria-label": j.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
      eventName: t.name
    }),
    children: (0, i.jsxs)("div", {
      className: K.container,
      children: [(0, i.jsx)("div", {
        className: K.image,
        children: N
      }), (0, i.jsx)(Z, {
        title: t.name,
        subtitle: null != d ? d.name : T,
        icon: null != f ? (0, i.jsx)(f, {
          width: 12,
          height: 12,
          className: s()(W.cardIcon, W.cardDetailsIcon)
        }) : null,
        usersToShow: _,
        othersCount: c,
        extraPill: p,
        titleClassName: t.entity_type === Y.GuildScheduledEventEntityTypes.EXTERNAL || t.entity_type === Y.GuildScheduledEventEntityTypes.NONE ? K.multiLineTitle : K.singleLineTitle
      }), a && h]
    })
  })
}

function $(e) {
  var t;
  let {
    channelId: n,
    guildId: a
  } = e, s = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(n)), {
    needSubscriptionToAccess: u
  } = (0, h.default)(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : void 0), d = (0, o.useStateFromStores)([D.default], () => !D.default.can(H.Permissions.CONNECT, s)), c = r.useCallback(() => {
    (0, g.transitionToGuild)(a, n)
  }, [n, a]), E = r.useCallback(() => {
    null != s && (!d && _.default.handleVoiceConnect({
      channel: s,
      connected: !1,
      needSubscriptionToAccess: u,
      locked: d
    }), (0, g.transitionToGuild)(a, n))
  }, [s, n, a, d, u]);
  return (0, i.jsxs)(l.ClickableContainer, {
    onClick: c,
    tag: "div",
    "aria-label": j.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_ARIA.format({
      channelName: null == s ? void 0 : s.name
    }),
    className: W.emptyStateCardContainer,
    children: [(0, i.jsx)(G.default, {
      width: 12,
      height: 12,
      className: W.cardIcon
    }), (0, i.jsx)("div", {
      className: W.cardDetailsContainer,
      children: (0, i.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        lineClamp: 1,
        children: null == s ? void 0 : s.name
      })
    }), (0, i.jsx)(X, {
      onClick: E
    })]
  })
}

function ee(e) {
  let {
    guild: t,
    guildPeekCardType: a
  } = e, s = (0, B.useCanShowNewGuildTooltipActivityEmptyState)(), o = a === F.GuildPeekCardTypes.WHO, u = (0, k.useGuildPopoutCards)(t), d = r.useMemo(() => u.map(e => {
    if (o && e.category !== F.CardCategory.EMPTY) {
      let n = null;
      return e.category === F.CardCategory.EMBEDDED_ACTIVITY ? n = e.embeddedActivities[0].channelId : e.category === F.CardCategory.HANGOUT || e.category === F.CardCategory.GAMING ? n = e.channelId : e.category === F.CardCategory.EVENT && (n = e.event.channel_id), (0, i.jsx)(V.default, {
        cardData: e,
        guildId: t.id
      }, "".concat(e.category, "-").concat(n))
    }
    if (e.category === F.CardCategory.HANGOUT) return (0, i.jsx)(q, {
      hangoutActivity: e,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId));
    if (e.category === F.CardCategory.EVENT) return (0, i.jsx)(J, {
      event: e.event,
      cardData: e
    }, "".concat(e.category, "-").concat(e.event.id));
    if (e.category === F.CardCategory.EMBEDDED_ACTIVITY) {
      let {
        channelId: n,
        applicationId: r,
        userIds: a
      } = e.embeddedActivities[0];
      return (0, i.jsx)(Q, {
        channelId: n,
        applicationId: r,
        userIds: Array.from(a),
        guildId: t.id,
        streamersCount: e.streamersCount,
        cardType: F.CardCategory.EMBEDDED_ACTIVITY,
        cardData: e
      }, "".concat(e.category, "-").concat(e.embeddedActivities[0].channelId))
    } else if (e.category === F.CardCategory.GAMING) {
      let {
        channelId: n,
        games: r,
        voiceStates: a,
        streamersCount: s
      } = e;
      return (0, i.jsx)(Q, {
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
        cardType: F.CardCategory.GAMING,
        cardData: e
      }, "".concat(e.category, "-").concat(e.channelId))
    } else if (e.category === F.CardCategory.EMPTY) return (0, i.jsx)($, {
      channelId: e.channelId,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId))
  }), [u, t.id, o]);
  if (0 === u.length) return null;
  if (u[0].category === F.CardCategory.EMPTY) return s ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: W.emptyStatePrompt,
      children: [(0, i.jsx)("img", {
        src: n("121727"),
        alt: ""
      }), (0, i.jsxs)("div", {
        className: W.emptyStateTextContainer,
        children: [(0, i.jsx)(l.Heading, {
          variant: "heading-sm/semibold",
          color: "header-primary",
          children: j.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_HEADER
        }), (0, i.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: j.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_BODY
        })]
      })]
    }), d]
  }) : null;
  return (0, i.jsx)("div", {
    className: W.cards,
    children: d
  })
}

function et(e) {
  let {
    guild: t,
    closePopout: n
  } = e, r = (0, B.useGuildPeekCardType)(), a = (0, E.default)(t), s = (0, N.useShouldShowInvitesDisabledNotif)(t), {
    isViewingRoles: u,
    backNavigationSection: d
  } = (0, o.useStateFromStoresObject)([C.default], () => ({
    isViewingRoles: C.default.isViewingRoles(t.id),
    backNavigationSection: C.default.getBackNavigationSection(t.id)
  })), {
    isUserLurking: _,
    isUnverifiedAccount: c
  } = (0, o.useStateFromStoresObject)([R.default, v.default], () => {
    let e = R.default.isLurking(t.id);
    return {
      isUserLurking: e,
      isUnverifiedAccount: !v.default.getCheck(t.id).canChat
    }
  }), h = () => {
    C.default.isFullServerPreview(t.id) && (0, g.transitionTo)(H.Routes.CHANNEL(t.id)), T.default.shouldShowOnboarding(t.id) && (I.default.finishOnboarding(t.id), (0, f.discardOnboardingPromise)(t.id)), (0, O.stopImpersonating)(t.id), p.default.open(t.id, d), d === H.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, S.announceDeleteTemplateChannels)(t.id)
  };
  return (0, i.jsxs)("div", {
    className: W.container,
    children: [(0, i.jsxs)("div", {
      className: W.header,
      children: [a ? (0, i.jsx)(y.default, {
        guild: t,
        size: 16,
        className: W.rowIconV2
      }) : (0, i.jsx)(M.default, {
        guild: t,
        size: 20,
        className: W.rowIcon
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/bold",
        color: "header-primary",
        children: t.name
      })]
    }), !_ && !c && (0, i.jsx)(ee, {
      guild: t,
      guildPeekCardType: r
    }), s ? (0, i.jsxs)("div", {
      className: W.footer,
      children: [(0, i.jsx)(U.default, {
        width: 12,
        height: 12,
        className: W.infoIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: j.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
          onClick: () => {
            n(), p.default.open(t.id, H.GuildSettingsSections.INSTANT_INVITES)
          }
        })
      })]
    }) : null, u ? (0, i.jsxs)("div", {
      className: W.footer,
      children: [(0, i.jsx)(U.default, {
        width: 12,
        height: 12,
        className: W.infoIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: j.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
          onClick: () => {
            n(), h()
          }
        })
      })]
    }) : null]
  })
}