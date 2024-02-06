"use strict";
i.r(t), i.d(t, {
  GuildTooltipText: function() {
    return X
  },
  default: function() {
    return q
  }
}), i("881410"), i("222007");
var n = i("37983"),
  l = i("884691"),
  s = i("414456"),
  a = i.n(s),
  r = i("917351"),
  o = i.n(r),
  u = i("446674"),
  c = i("769846"),
  d = i("77078"),
  f = i("191225"),
  E = i("51565"),
  m = i("567054"),
  I = i("5367"),
  p = i("100835"),
  g = i("38654"),
  _ = i("319165"),
  S = i("488464"),
  h = i("998716"),
  C = i("170183"),
  T = i("689275"),
  N = i("373469"),
  v = i("546463"),
  A = i("923959"),
  y = i("824563"),
  j = i("282109"),
  R = i("697218"),
  O = i("316133"),
  M = i("580357"),
  x = i("40469"),
  P = i("351368"),
  L = i("272339"),
  D = i("82636"),
  b = i("368121"),
  U = i("228427"),
  w = i("619911"),
  G = i("811305"),
  k = i("159885"),
  V = i("471374"),
  F = i("49111"),
  H = i("782340"),
  K = i("455547"),
  B = i("805959");
let J = (0, k.cssValueToNumber)(c.default.GUILD_TOOLTIP_ICON_SIZE),
  W = (0, k.cssValueToNumber)(c.default.GUILD_TOOLTIP_ICON_SIZE_V_2);

function z(e, t, i) {
  return 0 === t.length ? null : (0, n.jsxs)("div", {
    className: K.row,
    children: [(0, n.jsx)(e, {
      className: K.activityIcon
    }), (0, n.jsx)(G.default, {
      guildId: i,
      users: t,
      max: 6
    })]
  })
}

function Z(e) {
  let {
    muteConfig: t,
    className: i
  } = e;
  return (null == t ? void 0 : t.end_time) == null ? (0, n.jsx)(d.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: i,
    children: H.default.Messages.FORM_LABEL_MUTED
  }) : (0, n.jsx)(_.default, {
    muteConfig: t,
    className: i
  })
}

function Y(e) {
  var t, i, s;
  let {
    guild: r
  } = e, c = r.id, E = (0, u.useStateFromStoresArray)([A.default, T.default], () => {
    let e = A.default.getChannels(c)[A.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
        let {
          channel: t
        } = e;
        return t.type === F.ChannelTypes.GUILD_VOICE
      }).map(e => {
        let {
          channel: t
        } = e;
        return t.id
      }),
      t = Object.values(T.default.getThreadsForGuild(c)).flatMap(e => Object.keys(e));
    return [...e, ...t]
  }, [c]), m = (0, C.default)(c), I = l.useMemo(() => m.map(e => e.id), [m]), p = (0, u.useStateFromStores)([O.default], () => O.default.getVoiceStates(c), [c]), g = o.flatMap(E, e => {
    var t;
    if (e === r.afkChannelId) return [];
    let i = null !== (t = p[e]) && void 0 !== t ? t : [];
    return i.map(e => {
      let {
        user: t
      } = e;
      return t
    })
  }), _ = (0, u.useStateFromStoresArray)([S.default], () => o.flatMap(I, e => {
    if (e === r.afkChannelId) return [];
    let t = S.default.getMutableParticipants(e, h.StageChannelParticipantNamedIndex.SPEAKER);
    return t.filter(e => e.type === h.StageChannelParticipantTypes.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    })
  })), M = (0, u.useStateFromStores)([S.default], () => {
    let e = 0;
    for (let t of I) e += S.default.getParticipantCount(t, h.StageChannelParticipantNamedIndex.AUDIENCE);
    return e
  }), x = (0, u.useStateFromStoresArray)([N.default], () => N.default.getAllApplicationStreams().filter(e => e.guildId === c).map(e => e.ownerId), [c]), k = (0, V.useIsGamingVoiceActivityEnabled)("Guild Tooltip", !1), H = (0, u.useStateFromStoresArray)([y.default, v.default], () => g.filter(e => y.default.getActivities(e.id, c).some(e => (null == e ? void 0 : e.application_id) != null && null != v.default.getDetectableGame(null == e ? void 0 : e.application_id)))), B = z(P.default, H, c), J = k ? H.map(e => e.id) : [], W = (0, u.useStateFromStoresArray)([f.default], () => f.default.getEmbeddedActivitiesForGuild(c).flatMap(e => Array.from(e.userIds)), [c]), Y = (0, u.useStateFromStoresArray)([R.default], () => W.map(e => R.default.getUser(e)), [W]), Q = (0, u.useStateFromStoresArray)([R.default], () => x.map(e => R.default.getUser(e)), [x]), X = z(b.default, g.filter(e => !x.includes(e.id) && !W.includes(e.id) && !J.includes(e.id)), c);
  let q = (t = c, i = _, s = M, 0 === i.length ? null : (0, n.jsxs)("div", {
      className: K.row,
      children: [(0, n.jsx)(U.default, {
        className: K.activityIcon
      }), (0, n.jsx)(G.default, {
        guildId: t,
        users: i,
        max: 3
      }), (0, n.jsxs)("div", {
        className: K.stageListenerPill,
        children: [(0, n.jsx)(L.default, {
          width: 16,
          height: 16
        }), (0, n.jsx)(d.Text, {
          className: K.stageListenerCount,
          color: "text-normal",
          variant: "text-xs/normal",
          children: s
        })]
      })]
    })),
    $ = z(w.default, Q.filter(e => null != e && !W.includes(e.id)), c),
    ee = z(D.default, Y, c),
    {
      isMuted: et,
      muteConfig: ei
    } = (0, u.useStateFromStoresObject)([j.default], () => ({
      isMuted: j.default.isMuted(c),
      muteConfig: j.default.getMuteConfig(c)
    }), [c]);
  return null != B && V.default.trackExposure({
    location: "Guild Tooltip"
  }), (0, n.jsxs)(n.Fragment, {
    children: [q, X, $, k && B, ee, et ? (0, n.jsx)(Z, {
      muteConfig: ei,
      className: a(K.muteText, {
        [K.muteTextWithActivity]: null != X || null != $
      })
    }) : null]
  })
}

function Q(e) {
  let {
    guildJoinRequestStatus: t
  } = e;
  return (0, n.jsx)(d.Text, {
    className: K.viewAsRolesWarning,
    color: "text-normal",
    variant: "text-xs/normal",
    children: function(e) {
      switch (e) {
        case m.GuildJoinRequestApplicationStatuses.SUBMITTED:
          return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
        case m.GuildJoinRequestApplicationStatuses.REJECTED:
          return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
        case m.GuildJoinRequestApplicationStatuses.APPROVED:
          return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
        default:
          return H.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED
      }
    }(t)
  })
}

function X(e) {
  let {
    guild: t,
    includeActivity: i = !0
  } = e, l = (0, E.default)(t), s = (0, I.useCurrentUserGuildBadgeStatus)(t.id), r = null != s ? (0, n.jsx)(Q, {
    guildJoinRequestStatus: s
  }) : null, o = i ? (0, n.jsx)(Y, {
    guild: t
  }) : null, c = (0, u.useStateFromStores)([g.default], () => g.default.isViewingRoles(t.id)), f = (0, p.useShouldShowInvitesDisabledNotif)(t);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: a(K.row, K.rowGuildName),
      children: [l ? (0, n.jsx)(x.default, {
        guild: t,
        size: W,
        className: K.rowIconV2
      }) : (0, n.jsx)(M.default, {
        guild: t,
        size: J,
        className: K.rowIcon
      }), (0, n.jsx)("span", {
        className: a(K.guildNameText, {
          [K.guildNameTextLimitedSize]: null != o
        }),
        children: t.toString()
      })]
    }), f ? (0, n.jsx)(d.Text, {
      className: K.invitesDisabledTooltip,
      color: "header-secondary",
      variant: "text-sm/medium",
      children: H.default.Messages.INVITES_DISABLED_TOOLTIP
    }) : null, c ? (0, n.jsx)(d.Text, {
      className: K.viewAsRolesWarning,
      color: "text-normal",
      variant: "text-xs/normal",
      children: H.default.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
    }) : null != r ? r : o]
  })
}

function q(e) {
  let {
    guild: t,
    disabled: i = !1,
    "aria-label": s = !1,
    children: a,
    includeActivity: r
  } = e;
  return (0, n.jsx)(d.Tooltip, {
    hideOnClick: !0,
    spacing: 20,
    position: "right",
    text: i ? null : (0, n.jsx)(X, {
      guild: t,
      includeActivity: r
    }),
    "aria-label": s,
    tooltipClassName: B.listItemTooltip,
    children: e => {
      let {
        onFocus: t,
        onBlur: i,
        ...s
      } = e;
      return (0, n.jsx)("div", {
        onFocus: t,
        onBlur: i,
        children: l.cloneElement(l.Children.only(a), {
          ...s
        })
      })
    }
  })
}