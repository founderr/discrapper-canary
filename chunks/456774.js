"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eo
  }
});
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
  L = n("881824"),
  v = n("922482"),
  D = n("592125"),
  M = n("607744"),
  y = n("496675"),
  P = n("979651"),
  U = n("366695"),
  b = n("940627"),
  G = n("705600"),
  w = n("305878"),
  B = n("119828"),
  k = n("737688"),
  V = n("242315"),
  x = n("507893"),
  F = n("944581"),
  H = n("645284"),
  Y = n("632184"),
  j = n("806519"),
  W = n("59688"),
  K = n("718582"),
  z = n("599539"),
  Z = n("126134"),
  X = n("981631"),
  Q = n("765305"),
  q = n("689938"),
  J = n("303820");

function $(e) {
  let {
    users: t,
    othersCount: n,
    extraPill: r
  } = e;
  return (0, i.jsxs)("div", {
    className: J.facepile,
    children: [t.map((e, r) => {
      let a = (0, i.jsx)(u.default, {
        user: e,
        size: l.AvatarSizes.SIZE_24,
        "aria-label": ""
      });
      return r === t.length - 1 && 0 === n ? (0, i.jsx)("div", {
        className: J.facePileItem,
        children: a
      }, e.id) : (0, i.jsx)(j.default, {
        width: 24,
        height: 24,
        mask: j.default.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
        className: J.facePileItem,
        children: a
      }, e.id)
    }), n > 0 && (0, i.jsxs)(l.Text, {
      color: "interactive-normal",
      variant: "text-xs/medium",
      className: J.othersCount,
      children: ["+", n]
    }), r]
  })
}

function ee(e) {
  let {
    title: t,
    subtitle: n,
    usersToShow: r,
    othersCount: a,
    icon: s,
    extraPill: o
  } = e;
  return (0, i.jsxs)("div", {
    className: J.cardDetailsContainer,
    children: [(0, i.jsx)(l.Heading, {
      color: "header-primary",
      variant: "heading-sm/semibold",
      lineClamp: 1,
      children: t
    }), (0, i.jsxs)("div", {
      className: J.cardDetailsTextContainer,
      children: [s, (0, i.jsx)(l.Text, {
        color: "text-secondary",
        variant: "text-xs/medium",
        lineClamp: 1,
        children: n
      })]
    }), (0, i.jsx)($, {
      users: r,
      othersCount: a,
      extraPill: o
    })]
  })
}

function et(e) {
  let {
    onClick: t,
    inCall: n
  } = e, a = n ? q.default.Messages.GUILD_POPOUT_JOINED : q.default.Messages.JOIN, s = r.useCallback(e => {
    e.stopPropagation(), t()
  }, [t]);
  return (0, i.jsx)(l.Button, {
    size: l.Button.Sizes.TINY,
    color: l.Button.Colors.GREEN,
    disabled: n,
    onClick: s,
    className: J.joinButton,
    children: a
  })
}

function en(e) {
  let {
    channelId: t,
    userIds: n,
    applicationId: a,
    guildId: u,
    streamersCount: E,
    cardType: I
  } = e, T = (0, o.useStateFromStores)([D.default], () => D.default.getChannel(t)), f = (0, o.useStateFromStores)([y.default], () => !y.default.can(X.Permissions.CONNECT, T)), {
    totalUsers: S,
    usersToShow: A,
    othersCount: m
  } = (0, K.useGetCardUsers)(n, u, t), N = (0, d.useGetOrFetchApplication)(a), {
    needSubscriptionToAccess: p
  } = (0, h.default)(null != t ? t : void 0), O = (0, o.useStateFromStores)([P.default], () => P.default.isInChannel(t)), C = r.useCallback(() => {
    (0, g.transitionToGuild)(u, t)
  }, [t, u]), R = r.useCallback(() => {
    null != T && (T.type === X.ChannelTypes.GUILD_VOICE && !f && _.default.handleVoiceConnect({
      channel: T,
      connected: O,
      needSubscriptionToAccess: p,
      locked: f
    }), (0, g.transitionToGuild)(u, t))
  }, [T, t, u, O, f, p]);
  if (null == N || null == T) return null;
  let L = (0, c.getSimpleChannelIconComponent)(T.type),
    v = E > 0 ? (0, i.jsxs)("div", {
      className: J.numberPill,
      children: [(0, i.jsx)(H.default, {
        width: 12,
        height: 12,
        className: s()(J.cardIcon, J.cardDetailsIcon)
      }), (0, i.jsx)(l.Text, {
        color: "text-normal",
        variant: "text-xs/normal",
        children: E
      })]
    }) : null;
  return (0, i.jsxs)(l.ClickableContainer, {
    onClick: C,
    tag: "div",
    "aria-label": q.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
      users: S,
      gameName: N.name,
      channelName: null == T ? void 0 : T.name
    }),
    className: J.cardContainer,
    children: [(0, i.jsx)(U.default, {
      game: N,
      className: J.cardImage
    }), (0, i.jsx)(ee, {
      title: N.name,
      subtitle: null == T ? void 0 : T.name,
      icon: null != L ? (0, i.jsx)(L, {
        width: 12,
        height: 12,
        className: s()(J.cardIcon, J.cardDetailsIcon)
      }) : null,
      usersToShow: A,
      othersCount: m,
      extraPill: v
    }), (0, i.jsx)(et, {
      onClick: R,
      inCall: O
    }), I === Z.CardCategory.GAMING ? (0, i.jsx)(k.default, {
      width: 12,
      height: 12,
      className: s()(J.cardIcon, J.cardTypeIcon)
    }) : (0, i.jsx)(F.default, {
      width: 12,
      height: 12,
      className: s()(J.cardIcon, J.cardTypeIcon)
    })]
  })
}

function ei(e) {
  var t, n;
  let {
    hangoutActivity: a,
    guildId: u
  } = e, {
    channelId: d,
    userIds: c,
    streamUserIds: E,
    channelHasVideo: I
  } = a, T = (0, o.useStateFromStores)([D.default], () => D.default.getChannel(d)), {
    needSubscriptionToAccess: f
  } = (0, h.default)(null !== (t = null == T ? void 0 : T.id) && void 0 !== t ? t : void 0), S = (0, o.useStateFromStores)([y.default], () => !y.default.can(X.Permissions.CONNECT, T)), A = (0, o.useStateFromStores)([P.default], () => P.default.isInChannel(d)), {
    totalUsers: m,
    usersToShow: N,
    othersCount: p,
    streamerUsersText: O
  } = (0, K.useGetCardUsers)(c, u, d, E), C = r.useCallback(() => {
    (0, g.transitionToGuild)(u, d)
  }, [d, u]), R = r.useCallback(() => {
    null != T && (!S && _.default.handleVoiceConnect({
      channel: T,
      connected: A,
      needSubscriptionToAccess: f,
      locked: S
    }), (0, g.transitionToGuild)(u, d))
  }, [T, d, u, A, S, f]), L = E.length > 0 ? (0, i.jsx)(H.default, {
    width: 24,
    height: 24,
    className: J.cardImageIcon
  }) : I ? (0, i.jsx)(B.default, {
    width: 24,
    height: 24,
    className: J.cardImageIcon
  }) : (0, i.jsx)(Y.default, {
    width: 24,
    height: 24,
    className: J.cardImageIcon
  });
  return (0, i.jsxs)(l.ClickableContainer, {
    onClick: C,
    tag: "div",
    "aria-label": q.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
      users: m,
      channelName: null == T ? void 0 : T.name
    }),
    className: J.cardContainer,
    children: [(0, i.jsx)("div", {
      className: s()(J.cardImage, J.cardImageIconContainer),
      children: L
    }), (0, i.jsx)(ee, {
      title: null !== (n = null == T ? void 0 : T.name) && void 0 !== n ? n : "",
      subtitle: E.length > 0 ? O : "",
      usersToShow: N,
      othersCount: p
    }), (0, i.jsx)(et, {
      onClick: R,
      inCall: A
    })]
  })
}

function er(e) {
  var t;
  let {
    event: n
  } = e, a = (0, o.useStateFromStores)([D.default], () => D.default.getChannel(n.channel_id)), {
    needSubscriptionToAccess: u
  } = (0, h.default)(null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : void 0), d = (0, o.useStateFromStores)([y.default], () => !y.default.can(X.Permissions.CONNECT, a)), c = (0, o.useStateFromStores)([P.default], () => P.default.isInChannel(null == a ? void 0 : a.id)), {
    usersToShow: E,
    othersCount: I,
    audienceCount: T
  } = (0, K.useGetEventCardUsers)(a), f = (0, m.getLocationDataForEvent)(n, a), S = null == f ? void 0 : f.locationName, N = null == f ? void 0 : f.IconComponent, p = r.useCallback(() => {
    (0, A.openGuildEventDetails)({
      eventId: n.id
    })
  }, [n.id]), O = r.useCallback(() => {
    if (null == a) {
      (0, A.openGuildEventDetails)({
        eventId: n.id
      });
      return
    }
    let e = async () => {
      let e = await (0, v.connectOrLurkStage)(n.guild_id, a.id);
      (0, L.navigateToStage)(e)
    };
    n.entity_type === Q.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? e() : n.entity_type === Q.GuildScheduledEventEntityTypes.VOICE && (!d && _.default.handleVoiceConnect({
      channel: a,
      connected: c,
      needSubscriptionToAccess: u,
      locked: d
    }), (0, g.transitionToGuild)(n.guild_id, a.id))
  }, [a, n.entity_type, n.guild_id, n.id, c, d, u]), C = null != T ? (0, i.jsxs)("div", {
    className: J.numberPill,
    children: [(0, i.jsx)(V.default, {
      width: 12,
      height: 12,
      className: s()(J.cardIcon, J.cardDetailsIcon)
    }), (0, i.jsx)(l.Text, {
      color: "text-normal",
      variant: "text-xs/normal",
      children: T
    })]
  }) : null;
  return (0, i.jsxs)(l.ClickableContainer, {
    onClick: p,
    tag: "div",
    "aria-label": q.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
      eventName: n.name
    }),
    className: J.cardContainer,
    children: [(0, i.jsx)("div", {
      className: s()(J.cardImage, J.cardImageIconContainer),
      children: (0, i.jsx)(w.default, {
        width: 24,
        height: 24,
        className: J.cardImageIcon
      })
    }), (0, i.jsx)(ee, {
      title: n.name,
      subtitle: null != a ? a.name : S,
      icon: null != N ? (0, i.jsx)(N, {
        width: 12,
        height: 12,
        className: s()(J.cardIcon, J.cardDetailsIcon)
      }) : null,
      usersToShow: E,
      othersCount: I,
      extraPill: C
    }), (0, i.jsx)(et, {
      onClick: O,
      inCall: c
    }), (0, i.jsx)(w.default, {
      width: 12,
      height: 12,
      className: s()(J.cardIcon, J.cardTypeIcon)
    })]
  })
}

function ea(e) {
  var t;
  let {
    channelId: n,
    guildId: a
  } = e, s = (0, o.useStateFromStores)([D.default], () => D.default.getChannel(n)), {
    needSubscriptionToAccess: u
  } = (0, h.default)(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : void 0), d = (0, o.useStateFromStores)([y.default], () => !y.default.can(X.Permissions.CONNECT, s)), c = r.useCallback(() => {
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
    "aria-label": q.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_ARIA.format({
      channelName: null == s ? void 0 : s.name
    }),
    className: J.emptyStateCardContainer,
    children: [(0, i.jsx)(Y.default, {
      width: 12,
      height: 12,
      className: J.cardIcon
    }), (0, i.jsx)("div", {
      className: J.cardDetailsContainer,
      children: (0, i.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        lineClamp: 1,
        children: null == s ? void 0 : s.name
      })
    }), (0, i.jsx)(et, {
      onClick: E
    })]
  })
}

function es(e) {
  let {
    guild: t,
    guildPeekCardType: a
  } = e, s = (0, W.useCanShowNewGuildTooltipActivityEmptyState)(), o = a === Z.GuildPeekCardTypes.WHO, u = (0, K.useGuildPopoutCards)(t), d = r.useMemo(() => u.map(e => {
    if (o && e.category !== Z.CardCategory.EMPTY) {
      let n = null;
      return e.category === Z.CardCategory.EMBEDDED_ACTIVITY ? n = e.embeddedActivity.channelId : e.category === Z.CardCategory.HANGOUT || e.category === Z.CardCategory.GAMING ? n = e.channelId : e.category === Z.CardCategory.EVENT && (n = e.event.channel_id), (0, i.jsx)(z.default, {
        cardData: e,
        guildId: t.id
      }, "".concat(e.category, "-").concat(n))
    }
    if (e.category === Z.CardCategory.HANGOUT) return (0, i.jsx)(ei, {
      hangoutActivity: e,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId));
    if (e.category === Z.CardCategory.EVENT) return (0, i.jsx)(er, {
      event: e.event
    }, "".concat(e.category, "-").concat(e.event.id));
    if (e.category === Z.CardCategory.EMBEDDED_ACTIVITY) {
      let {
        channelId: n,
        applicationId: r,
        userIds: a
      } = e.embeddedActivity;
      return (0, i.jsx)(en, {
        channelId: n,
        applicationId: r,
        userIds: Array.from(a),
        guildId: t.id,
        streamersCount: e.streamersCount,
        cardType: Z.CardCategory.EMBEDDED_ACTIVITY
      }, "".concat(e.category, "-").concat(e.embeddedActivity.channelId))
    } else if (e.category === Z.CardCategory.GAMING) {
      let {
        channelId: n,
        game: r,
        voiceStates: a,
        streamersCount: s
      } = e;
      return (0, i.jsx)(en, {
        channelId: n,
        applicationId: r.application_id,
        userIds: a.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        guildId: t.id,
        streamersCount: s,
        cardType: Z.CardCategory.GAMING
      }, "".concat(e.category, "-").concat(e.channelId))
    } else if (e.category === Z.CardCategory.EMPTY) return (0, i.jsx)(ea, {
      channelId: e.channelId,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId))
  }), [u, t.id, o]);
  if (0 === u.length) return null;
  if (u[0].category === Z.CardCategory.EMPTY) return s ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: J.emptyStatePrompt,
      children: [(0, i.jsx)("img", {
        src: n("121727"),
        alt: ""
      }), (0, i.jsxs)("div", {
        className: J.emptyStateTextContainer,
        children: [(0, i.jsx)(l.Heading, {
          variant: "heading-sm/semibold",
          color: "header-primary",
          children: q.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_HEADER
        }), (0, i.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: q.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_BODY
        })]
      })]
    }), d]
  }) : null;
  return (0, i.jsx)(i.Fragment, {
    children: d
  })
}

function eo(e) {
  let {
    guild: t,
    closePopout: n
  } = e, r = (0, W.useGuildPeekCardType)(), a = (0, E.default)(t), s = (0, N.useShouldShowInvitesDisabledNotif)(t), {
    isViewingRoles: u,
    backNavigationSection: d
  } = (0, o.useStateFromStoresObject)([C.default], () => ({
    isViewingRoles: C.default.isViewingRoles(t.id),
    backNavigationSection: C.default.getBackNavigationSection(t.id)
  })), {
    isUserLurking: _,
    isUnverifiedAccount: c
  } = (0, o.useStateFromStoresObject)([R.default, M.default], () => {
    let e = R.default.isLurking(t.id);
    return {
      isUserLurking: e,
      isUnverifiedAccount: !M.default.getCheck(t.id).canChat
    }
  }), h = () => {
    C.default.isFullServerPreview(t.id) && (0, g.transitionTo)(X.Routes.CHANNEL(t.id)), T.default.shouldShowOnboarding(t.id) && (I.default.finishOnboarding(t.id), (0, f.discardOnboardingPromise)(t.id)), (0, O.stopImpersonating)(t.id), p.default.open(t.id, d), d === X.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, S.announceDeleteTemplateChannels)(t.id)
  };
  return (0, i.jsxs)("div", {
    className: J.container,
    children: [(0, i.jsxs)("div", {
      className: J.header,
      children: [a ? (0, i.jsx)(G.default, {
        guild: t,
        size: 16,
        className: J.rowIconV2
      }) : (0, i.jsx)(b.default, {
        guild: t,
        size: 20,
        className: J.rowIcon
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/bold",
        color: "header-primary",
        lineClamp: 1,
        children: t.name
      })]
    }), !_ && !c && (0, i.jsx)(es, {
      guild: t,
      guildPeekCardType: r
    }), s ? (0, i.jsxs)("div", {
      className: J.footer,
      children: [(0, i.jsx)(x.default, {
        width: 12,
        height: 12,
        className: J.infoIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: q.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
          onClick: () => {
            n(), p.default.open(t.id, X.GuildSettingsSections.INSTANT_INVITES)
          }
        })
      })]
    }) : null, u ? (0, i.jsxs)("div", {
      className: J.footer,
      children: [(0, i.jsx)(x.default, {
        width: 12,
        height: 12,
        className: J.infoIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: q.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
          onClick: () => {
            n(), h()
          }
        })
      })]
    }) : null]
  })
}