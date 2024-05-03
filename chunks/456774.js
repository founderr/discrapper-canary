"use strict";
n.r(t), n.d(t, {
  CardCategory: function() {
    return r
  },
  default: function() {
    return es
  }
});
var i, r, a = n("735250"),
  s = n("470079"),
  o = n("120356"),
  l = n.n(o),
  u = n("442837"),
  d = n("481060"),
  _ = n("700582"),
  c = n("835473"),
  E = n("557135"),
  I = n("471445"),
  T = n("666188"),
  f = n("549817"),
  S = n("819553"),
  h = n("17181"),
  A = n("303737"),
  m = n("66999"),
  N = n("15274"),
  p = n("217804"),
  O = n("965638"),
  C = n("434404"),
  R = n("962086"),
  g = n("160404"),
  L = n("41776"),
  v = n("703656"),
  D = n("881824"),
  M = n("922482"),
  y = n("592125"),
  P = n("607744"),
  U = n("496675"),
  b = n("979651"),
  G = n("366695"),
  w = n("940627"),
  B = n("705600"),
  k = n("305878"),
  V = n("737688"),
  x = n("242315"),
  F = n("507893"),
  H = n("944581"),
  Y = n("645284"),
  j = n("632184"),
  W = n("806519"),
  K = n("59688"),
  z = n("718582"),
  Z = n("981631"),
  X = n("765305"),
  Q = n("689938"),
  q = n("569779");
(i = r || (r = {})).HANGOUT = "hangout", i.EMBEDDED_ACTIVITY = "embedded-activity", i.EVENT = "event", i.GAMING = "gaming", i.EMPTY = "empty";

function J(e) {
  let {
    users: t,
    othersCount: n,
    extraPill: i
  } = e;
  return (0, a.jsxs)("div", {
    className: q.facepile,
    children: [t.map((e, i) => {
      let r = (0, a.jsx)(_.default, {
        user: e,
        size: d.AvatarSizes.SIZE_24,
        "aria-label": ""
      });
      return i === t.length - 1 && 0 === n ? (0, a.jsx)("div", {
        className: q.facePileItem,
        children: r
      }, e.id) : (0, a.jsx)(W.default, {
        width: 24,
        height: 24,
        mask: W.default.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
        className: q.facePileItem,
        children: r
      }, e.id)
    }), n > 0 && (0, a.jsxs)(d.Text, {
      color: "interactive-normal",
      variant: "text-xs/medium",
      className: q.othersCount,
      children: ["+", n]
    }), i]
  })
}

function $(e) {
  let {
    title: t,
    subtitle: n,
    icon: i,
    iconLocation: r,
    usersToShow: s,
    othersCount: o,
    extraPill: l
  } = e;
  return (0, a.jsxs)("div", {
    className: q.cardDetailsContainer,
    children: [(0, a.jsxs)("div", {
      className: q.cardDetailsTextContainer,
      children: ["title" === r && i, (0, a.jsx)(d.Heading, {
        color: "header-primary",
        variant: "heading-sm/semibold",
        lineClamp: 1,
        children: t
      })]
    }), (0, a.jsxs)("div", {
      className: q.cardDetailsTextContainer,
      children: ["subtitle" === r && i, (0, a.jsx)(d.Text, {
        color: "text-secondary",
        variant: "text-xs/medium",
        lineClamp: 1,
        children: n
      })]
    }), (0, a.jsx)(J, {
      users: s,
      othersCount: o,
      extraPill: l
    })]
  })
}

function ee(e) {
  let {
    onClick: t,
    disabled: n,
    inCall: i
  } = e, r = i ? Q.default.Messages.GUILD_POPOUT_JOINED : Q.default.Messages.JOIN, o = s.useCallback(e => {
    e.stopPropagation(), t()
  }, [t]);
  return (0, a.jsx)(d.Button, {
    size: d.Button.Sizes.TINY,
    color: d.Button.Colors.GREEN,
    disabled: n,
    onClick: o,
    className: q.joinButton,
    children: r
  })
}

function et(e) {
  let {
    channelId: t,
    userIds: n,
    applicationId: i,
    guildId: r,
    isUserLurking: o,
    isUnverifiedAccount: _,
    streamersCount: T,
    cardType: f
  } = e, S = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(t)), h = (0, u.useStateFromStores)([U.default], () => !U.default.can(Z.Permissions.CONNECT, S)), {
    totalUsers: A,
    usersToShow: N,
    othersCount: p
  } = (0, z.useGetCardUsers)(n, r, t), O = (0, c.useGetOrFetchApplication)(i), {
    needSubscriptionToAccess: C
  } = (0, m.default)(null != t ? t : void 0), R = (0, u.useStateFromStores)([b.default], () => b.default.isInChannel(t)), g = s.useCallback(() => {
    (0, v.transitionToGuild)(r, t)
  }, [t, r]), L = s.useCallback(() => {
    null != S && (S.type === Z.ChannelTypes.GUILD_VOICE && E.default.handleVoiceConnect({
      channel: S,
      connected: R,
      needSubscriptionToAccess: C,
      locked: h
    }), (0, v.transitionToGuild)(r, t))
  }, [S, t, r, R, h, C]);
  if (null == O || null == S) return null;
  let D = (0, I.getSimpleChannelIconComponent)(S.type),
    M = T > 0 ? (0, a.jsxs)("div", {
      className: q.numberPill,
      children: [(0, a.jsx)(Y.default, {
        width: 12,
        height: 12,
        className: l()(q.cardIcon, q.cardDetailsIcon)
      }), (0, a.jsx)(d.Text, {
        color: "text-normal",
        variant: "text-xs/normal",
        children: T
      })]
    }) : null;
  return (0, a.jsxs)(d.ClickableContainer, {
    onClick: g,
    tag: "div",
    "aria-label": Q.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
      users: A,
      gameName: O.name,
      channelName: null == S ? void 0 : S.name
    }),
    className: q.cardContainer,
    children: [(0, a.jsx)(G.default, {
      game: O,
      className: q.cardImage
    }), (0, a.jsx)($, {
      title: O.name,
      subtitle: null == S ? void 0 : S.name,
      icon: null != D ? (0, a.jsx)(D, {
        width: 12,
        height: 12,
        className: l()(q.cardIcon, q.cardDetailsIcon)
      }) : null,
      iconLocation: "subtitle",
      usersToShow: N,
      othersCount: p,
      extraPill: M
    }), (0, a.jsx)(ee, {
      onClick: L,
      disabled: h || o || _ || R,
      inCall: R
    }), "gaming" === f ? (0, a.jsx)(V.default, {
      width: 12,
      height: 12,
      className: l()(q.cardIcon, q.cardTypeIcon)
    }) : (0, a.jsx)(H.default, {
      width: 12,
      height: 12,
      className: l()(q.cardIcon, q.cardTypeIcon)
    })]
  })
}

function en(e) {
  var t, n;
  let {
    hangoutActivity: i,
    guildId: r,
    isUserLurking: o,
    isUnverifiedAccount: _
  } = e, {
    channelId: c,
    userIds: I
  } = i, T = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(c)), {
    needSubscriptionToAccess: f
  } = (0, m.default)(null !== (t = null == T ? void 0 : T.id) && void 0 !== t ? t : void 0), S = (0, u.useStateFromStores)([U.default], () => !U.default.can(Z.Permissions.CONNECT, T)), h = (0, u.useStateFromStores)([b.default], () => b.default.isInChannel(c)), {
    totalUsers: A,
    usersToShow: N,
    othersCount: p,
    streamUserIds: O,
    streamerUsersText: C
  } = (0, z.useGetCardUsers)(I, r, c), R = s.useCallback(() => {
    (0, v.transitionToGuild)(r, c)
  }, [c, r]), g = s.useCallback(() => {
    null != T && E.default.handleVoiceConnect({
      channel: T,
      connected: h,
      needSubscriptionToAccess: f,
      locked: S
    })
  }, [T, h, S, f]);
  return (0, a.jsxs)(d.ClickableContainer, {
    onClick: R,
    tag: "div",
    "aria-label": Q.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
      users: A,
      channelName: null == T ? void 0 : T.name
    }),
    className: q.cardContainer,
    children: [(0, a.jsx)("div", {
      className: l()(q.cardImage, q.cardImageIcon),
      children: O.length > 0 ? (0, a.jsx)(Y.default, {
        width: 12,
        height: 12,
        className: q.cardIcon
      }) : (0, a.jsx)(j.default, {
        width: 12,
        height: 12,
        className: q.cardIcon
      })
    }), (0, a.jsx)($, {
      title: null !== (n = null == T ? void 0 : T.name) && void 0 !== n ? n : "",
      subtitle: O.length > 0 ? C : "",
      icon: (0, a.jsx)(j.default, {
        width: 12,
        height: 12,
        className: l()(q.cardIcon, q.cardDetailsIcon)
      }),
      iconLocation: "title",
      usersToShow: N,
      othersCount: p
    }), (0, a.jsx)(ee, {
      onClick: g,
      disabled: S || o || _ || h,
      inCall: h
    })]
  })
}

function ei(e) {
  var t;
  let {
    event: n,
    isUserLurking: i
  } = e, r = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(n.channel_id)), {
    needSubscriptionToAccess: o
  } = (0, m.default)(null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : void 0), _ = (0, u.useStateFromStores)([U.default], () => !U.default.can(Z.Permissions.CONNECT, r)), c = (0, u.useStateFromStores)([b.default], () => b.default.isInChannel(null == r ? void 0 : r.id)), {
    usersToShow: I,
    othersCount: T,
    audienceCount: f
  } = (0, z.useGetEventCardUsers)(r), S = (0, p.getLocationDataForEvent)(n, r), h = null == S ? void 0 : S.locationName, A = null == S ? void 0 : S.IconComponent, O = s.useCallback(() => {
    !i && (0, N.openGuildEventDetails)({
      eventId: n.id
    })
  }, [n.id, i]), C = s.useCallback(() => {
    if (null == r) {
      (0, N.openGuildEventDetails)({
        eventId: n.id
      });
      return
    }
    let e = async () => {
      let e = await (0, M.connectOrLurkStage)(n.guild_id, r.id);
      (0, D.navigateToStage)(e)
    };
    n.entity_type === X.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? (E.default.handleVoiceConnect({
      channel: r,
      connected: c,
      needSubscriptionToAccess: o,
      locked: _
    }), (0, v.transitionToGuild)(n.guild_id, r.id)) : n.entity_type === X.GuildScheduledEventEntityTypes.VOICE && e()
  }, [r, n.entity_type, n.guild_id, n.id, c, _, o]), R = null != f ? (0, a.jsxs)("div", {
    className: q.numberPill,
    children: [(0, a.jsx)(x.default, {
      width: 12,
      height: 12,
      className: l()(q.cardIcon, q.cardDetailsIcon)
    }), (0, a.jsx)(d.Text, {
      color: "text-normal",
      variant: "text-xs/normal",
      children: f
    })]
  }) : null;
  return (0, a.jsxs)(d.ClickableContainer, {
    onClick: O,
    tag: "div",
    "aria-label": Q.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
      eventName: n.name
    }),
    className: q.cardContainer,
    children: [(0, a.jsx)("div", {
      className: l()(q.cardImage, q.cardImageIcon),
      children: (0, a.jsx)(k.default, {
        width: 12,
        height: 12,
        className: q.cardIcon
      })
    }), (0, a.jsx)($, {
      title: n.name,
      subtitle: null != r ? r.name : h,
      icon: null != A ? (0, a.jsx)(A, {
        width: 12,
        height: 12,
        className: l()(q.cardIcon, q.cardDetailsIcon)
      }) : null,
      iconLocation: "subtitle",
      usersToShow: I,
      othersCount: T,
      extraPill: R
    }), (0, a.jsx)(ee, {
      onClick: C,
      disabled: i || c,
      inCall: c
    }), (0, a.jsx)(k.default, {
      width: 12,
      height: 12,
      className: l()(q.cardIcon, q.cardTypeIcon)
    })]
  })
}

function er(e) {
  var t;
  let {
    channelId: n,
    guildId: i,
    isUserLurking: r,
    isUnverifiedAccount: o
  } = e, l = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(n)), {
    needSubscriptionToAccess: _
  } = (0, m.default)(null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : void 0), c = (0, u.useStateFromStores)([U.default], () => !U.default.can(Z.Permissions.CONNECT, l)), I = s.useCallback(() => {
    (0, v.transitionToGuild)(i, n)
  }, [n, i]), T = s.useCallback(() => {
    null != l && E.default.handleVoiceConnect({
      channel: l,
      connected: !1,
      needSubscriptionToAccess: _,
      locked: c
    })
  }, [l, c, _]);
  return (0, a.jsxs)(d.ClickableContainer, {
    onClick: I,
    tag: "div",
    "aria-label": Q.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_ARIA.format({
      channelName: null == l ? void 0 : l.name
    }),
    className: q.emptyStateCardContainer,
    children: [(0, a.jsx)(j.default, {
      width: 12,
      height: 12,
      color: "white"
    }), (0, a.jsx)("div", {
      className: q.cardDetailsContainer,
      children: (0, a.jsx)(d.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        lineClamp: 1,
        children: null == l ? void 0 : l.name
      })
    }), (0, a.jsx)(ee, {
      onClick: T,
      disabled: c || r || o
    })]
  })
}

function ea(e) {
  let {
    guild: t
  } = e, i = (0, K.useCanShowNewGuildTooltipActivityEmptyState)(), {
    isUserLurking: r,
    isUnverifiedAccount: o
  } = (0, u.useStateFromStoresObject)([L.default, P.default], () => {
    let e = L.default.isLurking(t.id);
    return {
      isUserLurking: e,
      isUnverifiedAccount: !P.default.getCheck(t.id).canChat
    }
  }), l = (0, z.useGuildPopoutCards)(t), _ = s.useMemo(() => l.map(e => {
    if ("hangout" === e.category) return (0, a.jsx)(en, {
      hangoutActivity: e,
      guildId: t.id,
      isUserLurking: r,
      isUnverifiedAccount: o
    }, "".concat(e.category, "-").concat(e.channelId));
    if ("event" === e.category) return (0, a.jsx)(ei, {
      event: e.event,
      isUserLurking: r
    }, "".concat(e.category, "-").concat(e.event.id));
    if ("embedded-activity" === e.category) {
      let {
        channelId: n,
        applicationId: i,
        userIds: s
      } = e.embeddedActivity;
      return (0, a.jsx)(et, {
        channelId: n,
        applicationId: i,
        userIds: Array.from(s),
        guildId: t.id,
        isUserLurking: r,
        isUnverifiedAccount: o,
        streamersCount: e.streamersCount,
        cardType: "embedded-activity"
      }, "".concat(e.category, "-").concat(e.embeddedActivity.channelId))
    } else if ("gaming" === e.category) {
      let {
        channelId: n,
        game: i,
        voiceStates: s,
        streamersCount: l
      } = e;
      return (0, a.jsx)(et, {
        channelId: n,
        applicationId: i.application_id,
        userIds: s.map(e => {
          let {
            user: t
          } = e;
          return t.id
        }),
        guildId: t.id,
        isUserLurking: r,
        isUnverifiedAccount: o,
        streamersCount: l,
        cardType: "gaming"
      }, "".concat(e.category, "-").concat(e.channelId))
    } else if ("empty" === e.category) return (0, a.jsx)(er, {
      channelId: e.channelId,
      guildId: t.id,
      isUserLurking: r,
      isUnverifiedAccount: o
    }, "".concat(e.category, "-").concat(e.channelId))
  }), [l, t.id, o, r]);
  if (0 === l.length) return null;
  if ("empty" === l[0].category) return i ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: q.emptyStatePrompt,
      children: [(0, a.jsx)("img", {
        src: n("121727"),
        alt: ""
      }), (0, a.jsxs)("div", {
        className: q.emptyStateTextContainer,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-sm/semibold",
          color: "header-primary",
          children: Q.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_HEADER
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: Q.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_BODY
        })]
      })]
    }), _]
  }) : null;
  return (0, a.jsx)(a.Fragment, {
    children: _
  })
}

function es(e) {
  let {
    guild: t,
    closePopout: n
  } = e, i = (0, T.default)(t), r = (0, O.useShouldShowInvitesDisabledNotif)(t), {
    isViewingRoles: s,
    backNavigationSection: o
  } = (0, u.useStateFromStoresObject)([g.default], () => ({
    isViewingRoles: g.default.isViewingRoles(t.id),
    backNavigationSection: g.default.getBackNavigationSection(t.id)
  })), l = () => {
    g.default.isFullServerPreview(t.id) && (0, v.transitionTo)(Z.Routes.CHANNEL(t.id)), S.default.shouldShowOnboarding(t.id) && (f.default.finishOnboarding(t.id), (0, h.discardOnboardingPromise)(t.id)), (0, R.stopImpersonating)(t.id), C.default.open(t.id, o), o === Z.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, A.announceDeleteTemplateChannels)(t.id)
  };
  return (0, a.jsxs)("div", {
    className: q.container,
    children: [(0, a.jsxs)("div", {
      className: q.header,
      children: [i ? (0, a.jsx)(B.default, {
        guild: t,
        size: 16,
        className: q.rowIconV2
      }) : (0, a.jsx)(w.default, {
        guild: t,
        size: 20,
        className: q.rowIcon
      }), (0, a.jsx)(d.Text, {
        variant: "text-md/bold",
        color: "header-primary",
        lineClamp: 1,
        children: t.name
      })]
    }), (0, a.jsx)(ea, {
      guild: t
    }), r ? (0, a.jsxs)("div", {
      className: q.footer,
      children: [(0, a.jsx)(F.default, {
        width: 12,
        height: 12,
        className: q.infoIcon
      }), (0, a.jsx)(d.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: Q.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
          onClick: () => {
            n(), C.default.open(t.id, Z.GuildSettingsSections.INSTANT_INVITES)
          }
        })
      })]
    }) : null, s ? (0, a.jsxs)("div", {
      className: q.footer,
      children: [(0, a.jsx)(F.default, {
        width: 12,
        height: 12,
        className: q.infoIcon
      }), (0, a.jsx)(d.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: Q.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
          onClick: () => {
            n(), l()
          }
        })
      })]
    }) : null]
  })
}