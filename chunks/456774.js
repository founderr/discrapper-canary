"use strict";
n.r(t), n.d(t, {
  CardCategory: function() {
    return r
  },
  default: function() {
    return er
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
  V = n("242315"),
  x = n("507893"),
  F = n("645284"),
  H = n("632184"),
  Y = n("806519"),
  j = n("59688"),
  W = n("718582"),
  K = n("981631"),
  z = n("765305"),
  Z = n("689938"),
  X = n("569779");
(i = r || (r = {})).HANGOUT = "hangout", i.EMBEDDED_ACTIVITY = "embedded-activity", i.EVENT = "event", i.GAMING = "gaming", i.EMPTY = "empty";

function Q(e) {
  let {
    users: t,
    othersCount: n,
    extraPill: i
  } = e;
  return (0, a.jsxs)("div", {
    className: X.facepile,
    children: [t.map((e, i) => {
      let r = (0, a.jsx)(_.default, {
        user: e,
        size: d.AvatarSizes.SIZE_24,
        "aria-label": ""
      });
      return i === t.length - 1 && 0 === n ? (0, a.jsx)("div", {
        className: X.facePileItem,
        children: r
      }, e.id) : (0, a.jsx)(Y.default, {
        width: 24,
        height: 24,
        mask: Y.default.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
        className: X.facePileItem,
        children: r
      }, e.id)
    }), n > 0 && (0, a.jsxs)(d.Text, {
      color: "interactive-normal",
      variant: "text-xs/medium",
      className: X.othersCount,
      children: ["+", n]
    }), i]
  })
}

function q(e) {
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
    className: X.cardDetailsContainer,
    children: [(0, a.jsxs)("div", {
      className: X.cardDetailsTextContainer,
      children: ["title" === r && i, (0, a.jsx)(d.Heading, {
        color: "header-primary",
        variant: "heading-sm/semibold",
        lineClamp: 1,
        children: t
      })]
    }), (0, a.jsxs)("div", {
      className: X.cardDetailsTextContainer,
      children: ["subtitle" === r && i, (0, a.jsx)(d.Text, {
        color: "text-secondary",
        variant: "text-xs/medium",
        lineClamp: 1,
        children: n
      })]
    }), (0, a.jsx)(Q, {
      users: s,
      othersCount: o,
      extraPill: l
    })]
  })
}

function J(e) {
  let {
    onClick: t,
    disabled: n,
    inCall: i
  } = e, r = i ? Z.default.Messages.GUILD_POPOUT_JOINED : Z.default.Messages.JOIN, o = s.useCallback(e => {
    e.stopPropagation(), t()
  }, [t]);
  return (0, a.jsx)(d.Button, {
    size: d.Button.Sizes.SMALL,
    color: d.Button.Colors.GREEN,
    disabled: n,
    onClick: o,
    className: X.joinButton,
    children: r
  })
}

function $(e) {
  let {
    channelId: t,
    userIds: n,
    applicationId: i,
    guildId: r,
    isUserLurking: o,
    isUnverifiedAccount: l
  } = e, _ = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(t)), T = (0, u.useStateFromStores)([U.default], () => !U.default.can(K.Permissions.CONNECT, _)), {
    totalUsers: f,
    usersToShow: S,
    othersCount: h
  } = (0, W.useGetCardUsers)(n, r, t), A = (0, c.useGetOrFetchApplication)(i), {
    needSubscriptionToAccess: N
  } = (0, m.default)(null != t ? t : void 0), p = (0, u.useStateFromStores)([b.default], () => b.default.isInChannel(t)), O = s.useCallback(() => {
    (0, v.transitionToGuild)(r, t)
  }, [t, r]), C = s.useCallback(() => {
    null != _ && (_.type === K.ChannelTypes.GUILD_VOICE && E.default.handleVoiceConnect({
      channel: _,
      connected: p,
      needSubscriptionToAccess: N,
      locked: T
    }), (0, v.transitionToGuild)(r, t))
  }, [_, t, r, p, T, N]);
  if (null == A || null == _) return null;
  let R = (0, I.getSimpleChannelIconComponent)(_.type);
  return (0, a.jsxs)(d.ClickableContainer, {
    onClick: O,
    tag: "div",
    "aria-label": Z.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
      users: f,
      gameName: A.name,
      channelName: null == _ ? void 0 : _.name
    }),
    className: X.cardContainer,
    children: [(0, a.jsx)(G.default, {
      game: A,
      className: X.activityCardImage
    }), (0, a.jsx)(q, {
      title: A.name,
      subtitle: null == _ ? void 0 : _.name,
      icon: null != R ? (0, a.jsx)(R, {
        width: 12,
        height: 12,
        className: X.cardDetailsIcon
      }) : null,
      iconLocation: "subtitle",
      usersToShow: S,
      othersCount: h
    }), (0, a.jsx)(J, {
      onClick: C,
      disabled: T || o || l || p,
      inCall: p
    })]
  })
}

function ee(e) {
  var t, n;
  let {
    hangoutActivity: i,
    guildId: r,
    isUserLurking: o,
    isUnverifiedAccount: l
  } = e, {
    channelId: _,
    userIds: c
  } = i, I = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(_)), {
    needSubscriptionToAccess: T
  } = (0, m.default)(null !== (t = null == I ? void 0 : I.id) && void 0 !== t ? t : void 0), f = (0, u.useStateFromStores)([U.default], () => !U.default.can(K.Permissions.CONNECT, I)), S = (0, u.useStateFromStores)([b.default], () => b.default.isInChannel(_)), {
    totalUsers: h,
    usersToShow: A,
    othersCount: N,
    streamUserIds: p,
    streamerUsersText: O
  } = (0, W.useGetCardUsers)(c, r, _), C = s.useCallback(() => {
    (0, v.transitionToGuild)(r, _)
  }, [_, r]), R = s.useCallback(() => {
    null != I && E.default.handleVoiceConnect({
      channel: I,
      connected: S,
      needSubscriptionToAccess: T,
      locked: f
    })
  }, [I, S, f, T]);
  return (0, a.jsxs)(d.ClickableContainer, {
    onClick: C,
    tag: "div",
    "aria-label": Z.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
      users: h,
      channelName: null == I ? void 0 : I.name
    }),
    className: X.cardContainer,
    children: [(0, a.jsx)("div", {
      className: X.activityCardActivityIcon,
      children: p.length > 0 ? (0, a.jsx)(F.default, {
        width: 12,
        height: 12,
        color: "white"
      }) : (0, a.jsx)(H.default, {
        width: 12,
        height: 12,
        color: "white"
      })
    }), (0, a.jsx)(q, {
      title: null !== (n = null == I ? void 0 : I.name) && void 0 !== n ? n : "",
      subtitle: p.length > 0 ? O : "",
      icon: (0, a.jsx)(H.default, {
        width: 12,
        height: 12,
        className: X.cardDetailsIcon
      }),
      iconLocation: "title",
      usersToShow: A,
      othersCount: N
    }), (0, a.jsx)(J, {
      onClick: R,
      disabled: f || o || l || S,
      inCall: S
    })]
  })
}

function et(e) {
  var t;
  let {
    event: n,
    isUserLurking: i
  } = e, r = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(n.channel_id)), {
    needSubscriptionToAccess: o
  } = (0, m.default)(null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : void 0), l = (0, u.useStateFromStores)([U.default], () => !U.default.can(K.Permissions.CONNECT, r)), _ = (0, u.useStateFromStores)([b.default], () => b.default.isInChannel(null == r ? void 0 : r.id)), {
    usersToShow: c,
    othersCount: I,
    audienceCount: T
  } = (0, W.useGetEventCardUsers)(r), f = (0, p.getLocationDataForEvent)(n, r), S = null == f ? void 0 : f.locationName, h = null == f ? void 0 : f.IconComponent, A = s.useCallback(() => {
    !i && (0, N.openGuildEventDetails)({
      eventId: n.id
    })
  }, [n.id, i]), O = s.useCallback(() => {
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
    n.entity_type === z.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? (E.default.handleVoiceConnect({
      channel: r,
      connected: _,
      needSubscriptionToAccess: o,
      locked: l
    }), (0, v.transitionToGuild)(n.guild_id, r.id)) : n.entity_type === z.GuildScheduledEventEntityTypes.VOICE && e()
  }, [r, n.entity_type, n.guild_id, n.id, _, l, o]), C = null != T ? (0, a.jsxs)("div", {
    className: X.numberPill,
    children: [(0, a.jsx)(V.default, {
      width: 12,
      height: 12,
      className: X.cardDetailsIcon
    }), (0, a.jsx)(d.Text, {
      color: "text-normal",
      variant: "text-xs/normal",
      children: T
    })]
  }) : null;
  return (0, a.jsxs)(d.ClickableContainer, {
    onClick: A,
    tag: "div",
    "aria-label": Z.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
      eventName: n.name
    }),
    className: X.cardContainer,
    children: [(0, a.jsx)("div", {
      className: X.activityCardActivityIcon,
      children: (0, a.jsx)(k.default, {
        width: 12,
        height: 12,
        color: "white"
      })
    }), (0, a.jsx)(q, {
      title: n.name,
      subtitle: null != r ? r.name : S,
      icon: null != h ? (0, a.jsx)(h, {
        width: 12,
        height: 12,
        className: X.cardDetailsIcon
      }) : null,
      iconLocation: "subtitle",
      usersToShow: c,
      othersCount: I,
      extraPill: C
    }), (0, a.jsx)(J, {
      onClick: O,
      disabled: i || _,
      inCall: _
    })]
  })
}

function en(e) {
  var t;
  let {
    channelId: n,
    guildId: i,
    isUserLurking: r,
    isUnverifiedAccount: o
  } = e, _ = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(n)), {
    needSubscriptionToAccess: c
  } = (0, m.default)(null !== (t = null == _ ? void 0 : _.id) && void 0 !== t ? t : void 0), I = (0, u.useStateFromStores)([U.default], () => !U.default.can(K.Permissions.CONNECT, _)), T = s.useCallback(() => {
    (0, v.transitionToGuild)(i, n)
  }, [n, i]), f = s.useCallback(() => {
    null != _ && E.default.handleVoiceConnect({
      channel: _,
      connected: !1,
      needSubscriptionToAccess: c,
      locked: I
    })
  }, [_, I, c]);
  return (0, a.jsxs)(d.ClickableContainer, {
    onClick: T,
    tag: "div",
    "aria-label": Z.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_ARIA.format({
      channelName: null == _ ? void 0 : _.name
    }),
    className: l()(X.emptyActivityCardContainer, X.cardContainer),
    children: [(0, a.jsx)(H.default, {
      width: 12,
      height: 12,
      color: "white"
    }), (0, a.jsx)("div", {
      className: X.cardDetailsContainer,
      children: (0, a.jsx)(d.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        lineClamp: 1,
        children: null == _ ? void 0 : _.name
      })
    }), (0, a.jsx)(J, {
      onClick: f,
      disabled: I || r || o
    })]
  })
}

function ei(e) {
  let {
    guild: t
  } = e, i = (0, j.useCanShowNewGuildTooltipActivityEmptyState)(), {
    isUserLurking: r,
    isUnverifiedAccount: o
  } = (0, u.useStateFromStoresObject)([L.default, P.default], () => {
    let e = L.default.isLurking(t.id);
    return {
      isUserLurking: e,
      isUnverifiedAccount: !P.default.getCheck(t.id).canChat
    }
  }), l = (0, W.useGuildPopoutCards)(t), _ = s.useMemo(() => l.map(e => {
    if ("hangout" === e.category) return (0, a.jsx)(ee, {
      hangoutActivity: e,
      guildId: t.id,
      isUserLurking: r,
      isUnverifiedAccount: o
    }, "".concat(e.category, "-").concat(e.channelId));
    if ("event" === e.category) return (0, a.jsx)(et, {
      event: e.event,
      isUserLurking: r
    }, "".concat(e.category, "-").concat(e.event.id));
    if ("embedded-activity" === e.category) {
      let {
        channelId: n,
        applicationId: i,
        userIds: s
      } = e.embeddedActivity;
      return (0, a.jsx)($, {
        channelId: n,
        applicationId: i,
        userIds: Array.from(s),
        guildId: t.id,
        isUserLurking: r,
        isUnverifiedAccount: o
      }, "".concat(e.category, "-").concat(e.embeddedActivity.channelId))
    } else if ("gaming" === e.category) {
      let {
        channelId: n,
        game: i,
        voiceStates: s
      } = e;
      return (0, a.jsx)($, {
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
        isUnverifiedAccount: o
      }, "".concat(e.category, "-").concat(e.channelId))
    } else if ("empty" === e.category) return (0, a.jsx)(en, {
      channelId: e.channelId,
      guildId: t.id,
      isUserLurking: r,
      isUnverifiedAccount: o
    }, "".concat(e.category, "-").concat(e.channelId))
  }), [l, t.id, o, r]);
  if (0 === l.length) return null;
  if ("empty" === l[0].category) return i ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: X.emptyActivityCardPrompt,
      children: [(0, a.jsxs)("div", {
        className: X.emptyStateTextContainer,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-sm/semibold",
          color: "header-primary",
          children: Z.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_HEADER
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: Z.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_BODY
        })]
      }), (0, a.jsx)("img", {
        src: n("121727"),
        alt: ""
      })]
    }), _]
  }) : null;
  return (0, a.jsx)(a.Fragment, {
    children: _
  })
}

function er(e) {
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
    g.default.isFullServerPreview(t.id) && (0, v.transitionTo)(K.Routes.CHANNEL(t.id)), S.default.shouldShowOnboarding(t.id) && (f.default.finishOnboarding(t.id), (0, h.discardOnboardingPromise)(t.id)), (0, R.stopImpersonating)(t.id), C.default.open(t.id, o), o === K.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, A.announceDeleteTemplateChannels)(t.id)
  };
  return (0, a.jsxs)("div", {
    className: X.container,
    children: [(0, a.jsxs)("div", {
      className: X.header,
      children: [i ? (0, a.jsx)(B.default, {
        guild: t,
        size: 16,
        className: X.rowIconV2
      }) : (0, a.jsx)(w.default, {
        guild: t,
        size: 20,
        className: X.rowIcon
      }), (0, a.jsx)(d.Text, {
        variant: "text-md/bold",
        color: "header-primary",
        lineClamp: 1,
        children: t.name
      })]
    }), (0, a.jsx)(ei, {
      guild: t
    }), r ? (0, a.jsxs)("div", {
      className: X.footer,
      children: [(0, a.jsx)(x.default, {
        className: X.infoIcon
      }), (0, a.jsx)(d.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: Z.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
          onClick: () => {
            n(), C.default.open(t.id, K.GuildSettingsSections.INSTANT_INVITES)
          }
        })
      })]
    }) : null, s ? (0, a.jsxs)("div", {
      className: X.footer,
      children: [(0, a.jsx)(x.default, {
        className: X.infoIcon
      }), (0, a.jsx)(d.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: Z.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
          onClick: () => {
            n(), l()
          }
        })
      })]
    }) : null]
  })
}