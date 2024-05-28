"use strict";
n.r(t), n.d(t, {
  CardAvatars: function() {
    return $
  },
  default: function() {
    return eo
  }
}), n("47120"), n("653041");
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
  M = n("800599"),
  y = n("594174"),
  P = n("940627"),
  U = n("705600"),
  b = n("242315"),
  G = n("507893"),
  w = n("645284"),
  k = n("632184"),
  B = n("170039"),
  V = n("806519"),
  x = n("626135"),
  F = n("5192"),
  H = n("59688"),
  Y = n("912787"),
  j = n("718582"),
  W = n("599539"),
  K = n("837771"),
  z = n("126134"),
  Z = n("981631"),
  X = n("765305"),
  Q = n("689938"),
  q = n("303820"),
  J = n("181096");

function $(e) {
  let {
    users: t,
    othersCount: n,
    extraPill: r
  } = e;
  return (0, i.jsxs)("div", {
    className: q.facepile,
    children: [t.map((e, r) => {
      let s = (0, i.jsx)(u.default, {
        user: e,
        size: l.AvatarSizes.SIZE_20,
        "aria-label": ""
      });
      return r === t.length - 1 && 0 === n ? (0, i.jsx)("div", {
        className: q.facePileItem,
        children: s
      }, e.id) : (0, i.jsx)(V.default, {
        width: 20,
        height: 20,
        mask: V.default.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
        className: q.facePileItem,
        children: s
      }, e.id)
    }), n > 0 && (0, i.jsxs)(l.Text, {
      color: "interactive-normal",
      variant: "text-xs/medium",
      className: q.othersCount,
      children: ["+", n]
    }), r]
  })
}

function ee(e) {
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
    className: J.content,
    children: [(0, i.jsx)(l.Heading, {
      color: "header-primary",
      variant: "heading-sm/semibold",
      className: u,
      children: t
    }), (0, i.jsxs)("div", {
      className: q.cardDetailsTextContainer,
      children: [a, (0, i.jsx)(l.Text, {
        color: "text-secondary",
        variant: "text-xs/medium",
        className: J.singleLineTitle,
        children: n
      })]
    }), (r.length > 0 || null != o) && (0, i.jsx)($, {
      users: r,
      othersCount: s,
      extraPill: o
    })]
  })
}

function et(e) {
  let {
    onClick: t,
    inCall: n
  } = e, s = n ? Q.default.Messages.GUILD_POPOUT_JOINED : Q.default.Messages.JOIN, a = r.useCallback(e => {
    e.stopPropagation(), t()
  }, [t]);
  return (0, i.jsx)(l.Button, {
    size: l.Button.Sizes.TINY,
    color: l.Button.Colors.GREEN,
    disabled: n,
    onClick: a,
    className: q.joinButton,
    children: s
  })
}

function en(e) {
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
  } = (0, j.useGetCardUsers)(n, u, t), m = (0, d.useGetOrFetchApplication)(s), N = (0, K.useImage)(E, u);
  if (null == m || null == f) return null;
  let p = (0, K.getClickHandler)(E, u, 0),
    O = (0, K.getJoinButton)(E, u, 0),
    C = (0, c.getSimpleChannelIconComponent)(f.type),
    R = _ > 0 ? (0, i.jsxs)("div", {
      className: J.pill,
      children: [(0, i.jsx)(w.default, {
        className: J.pillIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-normal",
        variant: "text-xs/medium",
        children: _
      })]
    }) : null;
  return (0, i.jsx)(l.ClickableContainer, {
    onClick: () => null == p ? void 0 : p(),
    tag: "div",
    "aria-label": Q.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
      users: S,
      gameName: m.name,
      channelName: null == f ? void 0 : f.name
    }),
    onMouseOver: () => T(!0),
    onMouseLeave: () => T(!1),
    children: (0, i.jsxs)("div", {
      className: J.container,
      children: [(0, i.jsx)("div", {
        className: J.image,
        children: N
      }), (0, i.jsx)(ee, {
        title: m.name,
        subtitle: null == f ? void 0 : f.name,
        icon: null != C ? (0, i.jsx)(C, {
          width: 12,
          height: 12,
          className: a()(q.cardIcon, q.cardDetailsIcon)
        }) : null,
        usersToShow: h,
        othersCount: A,
        extraPill: R,
        titleClassName: J.singleLineTitle
      }), I && O]
    })
  })
}

function ei(e) {
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
  } = (0, j.useGetCardUsers)(c, s, _, E), {
    usersToShow: m,
    othersCount: N,
    audienceCount: p
  } = (0, j.useGetEventCardUsers)(T), O = (0, K.getClickHandler)(n, s, 0), C = (0, K.getJoinButton)(n, s, 0), R = (0, K.useImage)(n, s), v = null == T ? void 0 : T.isGuildStageVoice(), D = A, M = (0, o.useStateFromStores)([g.default], () => {
    var e;
    return null === (e = g.default.getStageInstanceByChannel(_)) || void 0 === e ? void 0 : e.topic
  });
  if (v) D = null == T ? void 0 : T.name;
  else if (0 === E.length && I.length > 0) {
    let e = F.default.getName(s, _, y.default.getUser(I[0]));
    D = 1 === I.length ? Q.default.Messages.GUILD_POPOUT_USER_ON_VIDEO.format({
      username: e
    }) : Q.default.Messages.GUILD_POPOUT_USERS_ON_VIDEO.format({
      username: e,
      count: I.length - 1
    })
  }
  let P = null != p ? (0, i.jsxs)("div", {
    className: J.pill,
    children: [(0, i.jsx)(b.default, {
      className: J.pillIcon
    }), (0, i.jsx)(l.Text, {
      color: "text-normal",
      variant: "text-xs/medium",
      children: p
    })]
  }) : null;
  return (0, i.jsx)(l.ClickableContainer, {
    onClick: () => null == O ? void 0 : O(),
    tag: "div",
    "aria-label": Q.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
      users: f,
      channelName: null == T ? void 0 : T.name
    }),
    onMouseOver: () => d(!0),
    onMouseLeave: () => d(!1),
    children: (0, i.jsxs)("div", {
      className: J.container,
      children: [(0, i.jsx)("div", {
        className: J.image,
        children: R
      }), (0, i.jsx)(ee, {
        title: null !== (t = null != M ? M : null == T ? void 0 : T.name) && void 0 !== t ? t : "",
        subtitle: D,
        icon: v && (0, i.jsx)(B.default, {
          width: 12,
          height: 12,
          className: a()(q.cardIcon, q.cardDetailsIcon)
        }),
        usersToShow: v ? m : S,
        othersCount: v ? N : h,
        titleClassName: J.singleLineTitle,
        extraPill: P
      }), u && C]
    })
  })
}

function er(e) {
  let {
    event: t,
    cardData: n
  } = e, [s, u] = r.useState(!1), d = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(t.channel_id)), {
    usersToShow: _,
    othersCount: c,
    audienceCount: E
  } = (0, j.useGetEventCardUsers)(d), I = (0, A.getLocationDataForEvent)(t, d), T = null == I ? void 0 : I.locationName, f = null == I ? void 0 : I.IconComponent, S = (0, K.getClickHandler)(n, t.guild_id, 0), h = (0, K.getJoinButton)(n, t.guild_id, 0), m = (0, K.useImage)(n, t.guild_id), N = null != E ? (0, i.jsxs)("div", {
    className: J.pill,
    children: [(0, i.jsx)(b.default, {
      className: J.pillIcon
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
    "aria-label": Q.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
      eventName: t.name
    }),
    children: (0, i.jsxs)("div", {
      className: J.container,
      children: [(0, i.jsx)("div", {
        className: J.image,
        children: m
      }), (0, i.jsx)(ee, {
        title: t.name,
        subtitle: null != d ? d.name : T,
        icon: null != f ? (0, i.jsx)(f, {
          width: 12,
          height: 12,
          className: a()(q.cardIcon, q.cardDetailsIcon)
        }) : null,
        usersToShow: _,
        othersCount: c,
        extraPill: N,
        titleClassName: t.entity_type === X.GuildScheduledEventEntityTypes.EXTERNAL || t.entity_type === X.GuildScheduledEventEntityTypes.NONE ? J.multiLineTitle : J.singleLineTitle
      }), s && h]
    })
  })
}

function es(e) {
  var t;
  let {
    channelId: n,
    guildId: s
  } = e, a = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(n)), {
    needSubscriptionToAccess: u
  } = (0, h.default)(null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : void 0), d = (0, o.useStateFromStores)([D.default], () => !D.default.can(Z.Permissions.CONNECT, a)), c = r.useCallback(() => {
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
    "aria-label": Q.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_ARIA.format({
      channelName: null == a ? void 0 : a.name
    }),
    className: q.emptyStateCardContainer,
    children: [(0, i.jsx)(k.default, {
      width: 12,
      height: 12,
      className: q.cardIcon
    }), (0, i.jsx)("div", {
      className: q.cardDetailsContainer,
      children: (0, i.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        lineClamp: 1,
        children: null == a ? void 0 : a.name
      })
    }), (0, i.jsx)(et, {
      onClick: E
    })]
  })
}

function ea(e) {
  let {
    guild: t
  } = e, n = -1, s = (0, j.useGuildPopoutCards)(t), a = r.useMemo(() => s.map(e => {
    if (e.category !== z.CardCategory.EMPTY) {
      let r = null;
      return e.category === z.CardCategory.EMBEDDED_ACTIVITY ? r = e.embeddedActivities[0].channelId : e.category === z.CardCategory.HANGOUT || e.category === z.CardCategory.GAMING ? r = e.channelId : e.category === z.CardCategory.EVENT && (r = e.event.channel_id), n++, (0, i.jsx)(W.default, {
        cardData: e,
        guildId: t.id,
        cardIndex: n
      }, "".concat(e.category, "-").concat(r))
    }
    if (e.category === z.CardCategory.HANGOUT) return (0, i.jsx)(ei, {
      hangoutActivity: e,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId));
    if (e.category === z.CardCategory.EVENT) return (0, i.jsx)(er, {
      event: e.event,
      cardData: e
    }, "".concat(e.category, "-").concat(e.event.id));
    if (e.category === z.CardCategory.EMBEDDED_ACTIVITY) {
      let {
        channelId: n,
        applicationId: r,
        userIds: s
      } = e.embeddedActivities[0];
      return (0, i.jsx)(en, {
        channelId: n,
        applicationId: r,
        userIds: Array.from(s),
        guildId: t.id,
        streamersCount: e.streamersCount,
        cardType: z.CardCategory.EMBEDDED_ACTIVITY,
        cardData: e
      }, "".concat(e.category, "-").concat(e.embeddedActivities[0].channelId))
    } else if (e.category === z.CardCategory.GAMING) {
      let {
        channelId: n,
        games: r,
        voiceStates: s,
        streamersCount: a
      } = e;
      return (0, i.jsx)(en, {
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
        cardType: z.CardCategory.GAMING,
        cardData: e
      }, "".concat(e.category, "-").concat(e.channelId))
    } else if (e.category === z.CardCategory.EMPTY) return (0, i.jsx)(es, {
      channelId: e.channelId,
      guildId: t.id
    }, "".concat(e.category, "-").concat(e.channelId))
  }), [s, t.id, !0, n]);
  if (r.useEffect(() => {
      let e = [],
        n = [],
        i = [],
        r = [],
        a = {};
      for (let l of s) {
        var o;
        if (l.category === z.CardCategory.EMPTY) continue;
        if (3 === e.length) break;
        let s = null !== (o = (0, Y.getChannelIdFromCardData)(l)) && void 0 !== o ? o : "",
          u = (0, j.getVoiceChannelUsers)(s, t.id),
          d = e.length;
        e.push(l.category), i.push(u.length), r.push(u.length > 0 ? u[0].id : "0"), n.push(Math.min(u.length, 6)), a["position_".concat(d + 1, "_affinity_user_ids")] = u.slice(0, 6).map(e => e.id), a["position_".concat(d + 1, "_user_affinity_scores")] = u.slice(0, 6).map(e => {
          var t, n;
          return null !== (n = null === (t = M.default.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0
        })
      }
      0 !== e.length && (a.card_types = e, a.affinity_users_counts = n, a.total_users_counts = i, a.max_affinity_user_ids = r, x.default.track(Z.AnalyticEvents.GUILD_TOOLTIP_SHOWN, {
        ...a,
        guild_id: t.id
      }))
    }, []), 0 === s.length) return null;
  if (s[0].category === z.CardCategory.EMPTY) return null;
  return H.default.trackExposure({
    location: "guild_tooltip"
  }), (0, i.jsx)("div", {
    className: q.cards,
    children: a
  })
}

function eo(e) {
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
    O.default.isFullServerPreview(n.id) && (0, R.transitionTo)(Z.Routes.CHANNEL(n.id)), T.default.shouldShowOnboarding(n.id) && (I.default.finishOnboarding(n.id), (0, f.discardOnboardingPromise)(n.id)), (0, p.stopImpersonating)(n.id), N.default.open(n.id, h), h === Z.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, S.announceDeleteTemplateChannels)(n.id)
  }, D = null === (t = u.current) || void 0 === t ? void 0 : t.clientHeight, M = a + 14;
  return (0, i.jsxs)("div", {
    className: q.container,
    ref: u,
    children: [(0, i.jsx)("div", {
      className: q.tooltipPointer,
      style: {
        top: Math.min(M, null != D ? D - 22 : M)
      }
    }), (0, i.jsxs)("div", {
      className: q.header,
      children: [d ? (0, i.jsx)(U.default, {
        guild: n,
        size: 16,
        className: q.rowIconV2,
        tooltipColor: l.Tooltip.Colors.PRIMARY
      }) : (0, i.jsx)(P.default, {
        guild: n,
        size: 20,
        className: q.rowIcon
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/bold",
        color: "header-primary",
        children: n.name
      })]
    }), !A && !g && (0, i.jsx)(ea, {
      guild: n
    }), _ ? (0, i.jsxs)("div", {
      className: q.footer,
      children: [(0, i.jsx)(G.default, {
        width: 12,
        height: 12,
        className: q.infoIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: Q.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
          onClick: () => {
            s(), N.default.open(n.id, Z.GuildSettingsSections.INSTANT_INVITES)
          }
        })
      })]
    }) : null, c ? (0, i.jsxs)("div", {
      className: q.footer,
      children: [(0, i.jsx)(G.default, {
        width: 12,
        height: 12,
        className: q.infoIcon
      }), (0, i.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: Q.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
          onClick: () => {
            s(), L()
          }
        })
      })]
    }) : null]
  })
}