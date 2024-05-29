"use strict";
n.r(t), n.d(t, {
  GuildTooltipText: function() {
    return en
  },
  default: function() {
    return ei
  }
}), n("390547"), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("392711"),
  l = n.n(o),
  u = n("442837"),
  d = n("477690"),
  _ = n("481060"),
  c = n("317381"),
  E = n("666188"),
  I = n("246364"),
  T = n("746916"),
  f = n("965638"),
  S = n("160404"),
  h = n("41776"),
  A = n("777861"),
  m = n("565799"),
  N = n("501655"),
  p = n("517334"),
  O = n("344185"),
  C = n("199902"),
  R = n("77498"),
  g = n("984933"),
  L = n("607744"),
  v = n("158776"),
  D = n("9156"),
  M = n("594174"),
  y = n("938475"),
  P = n("940627"),
  U = n("705600"),
  b = n("737688"),
  G = n("242315"),
  w = n("944581"),
  k = n("632184"),
  B = n("170039"),
  V = n("761374"),
  x = n("602623"),
  F = n("624138"),
  H = n("510601"),
  Y = n("59688"),
  j = n("456774"),
  W = n("718582"),
  K = n("981631"),
  z = n("689938"),
  Z = n("952972"),
  X = n("81311");
let Q = (0, F.cssValueToNumber)(d.default.GUILD_TOOLTIP_ICON_SIZE),
  q = (0, F.cssValueToNumber)(d.default.GUILD_TOOLTIP_ICON_SIZE_V_2);

function J(e, t, n) {
  return 0 === t.length ? null : (0, i.jsxs)("div", {
    className: Z.row,
    children: [(0, i.jsx)(e, {
      className: Z.activityIcon
    }), (0, i.jsx)(x.default, {
      guildId: n,
      users: t,
      max: 6
    })]
  })
}

function $(e) {
  let {
    muteConfig: t,
    className: n
  } = e;
  return (null == t ? void 0 : t.end_time) == null ? (0, i.jsx)(_.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: z.default.Messages.FORM_LABEL_MUTED
  }) : (0, i.jsx)(A.default, {
    muteConfig: t,
    className: n
  })
}

function ee(e) {
  var t, n, s;
  let {
    guild: o
  } = e, d = o.id, E = (0, u.useStateFromStoresArray)([g.default, O.default], () => {
    let e = g.default.getChannels(d)[g.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === K.ChannelTypes.GUILD_VOICE
    }).map(e => {
      let {
        channel: t
      } = e;
      return t.id
    });
    return [...e, ...Object.values(O.default.getThreadsForGuild(d)).flatMap(e => Object.keys(e))]
  }, [d]), I = (0, p.default)(d), T = r.useMemo(() => I.map(e => e.id), [I]), f = (0, u.useStateFromStores)([y.default], () => y.default.getVoiceStates(d), [d]), S = l().flatMap(E, e => {
    var t;
    return e === o.afkChannelId ? [] : (null !== (t = f[e]) && void 0 !== t ? t : []).map(e => {
      let {
        user: t
      } = e;
      return t
    })
  }), h = (0, u.useStateFromStoresArray)([m.default], () => l().flatMap(T, e => e === o.afkChannelId ? [] : m.default.getMutableParticipants(e, N.StageChannelParticipantNamedIndex.SPEAKER).filter(e => e.type === N.StageChannelParticipantTypes.VOICE).map(e => {
    let {
      user: t
    } = e;
    return t
  }))), A = (0, u.useStateFromStores)([m.default], () => {
    let e = 0;
    for (let t of T) e += m.default.getParticipantCount(t, N.StageChannelParticipantNamedIndex.AUDIENCE);
    return e
  }), L = (0, u.useStateFromStoresArray)([C.default], () => C.default.getAllApplicationStreams().filter(e => e.guildId === d).map(e => e.ownerId), [d]), P = (0, H.useIsGamingVoiceActivityEnabled)("Guild Tooltip", !1), U = (0, u.useStateFromStoresArray)([v.default, R.default], () => S.filter(e => v.default.getActivities(e.id, d).some(e => (null == e ? void 0 : e.application_id) != null && null != R.default.getDetectableGame(null == e ? void 0 : e.application_id)))), F = J(b.default, U, d), j = P ? U.map(e => e.id) : [], W = (0, u.useStateFromStoresArray)([c.default], () => c.default.getEmbeddedActivitiesForGuild(d).flatMap(e => Array.from(e.userIds)), [d]), z = (0, u.useStateFromStoresArray)([M.default], () => W.map(e => M.default.getUser(e)), [W]), X = (0, u.useStateFromStoresArray)([M.default], () => L.map(e => M.default.getUser(e)), [L]), Q = J(k.default, S.filter(e => !L.includes(e.id) && !W.includes(e.id) && !j.includes(e.id)), d);
  let q = (t = d, n = h, s = A, 0 === n.length ? null : (0, i.jsxs)("div", {
      className: Z.row,
      children: [(0, i.jsx)(B.default, {
        className: Z.activityIcon
      }), (0, i.jsx)(x.default, {
        guildId: t,
        users: n,
        max: 3
      }), (0, i.jsxs)("div", {
        className: Z.stageListenerPill,
        children: [(0, i.jsx)(G.default, {
          width: 16,
          height: 16
        }), (0, i.jsx)(_.Text, {
          className: Z.stageListenerCount,
          color: "text-normal",
          variant: "text-xs/normal",
          children: s
        })]
      })]
    })),
    ee = J(V.default, X.filter(e => null != e && !W.includes(e.id)), d),
    et = J(w.default, z, d),
    {
      isMuted: en,
      muteConfig: ei
    } = (0, u.useStateFromStoresObject)([D.default], () => ({
      isMuted: D.default.isMuted(d),
      muteConfig: D.default.getMuteConfig(d)
    }), [d]);
  return null != F && H.default.trackExposure({
    location: "Guild Tooltip"
  }), (null != q || null != Q || null != ee || null != et) && Y.default.trackExposure({
    location: "guild_tooltip_original"
  }), (0, i.jsxs)(i.Fragment, {
    children: [q, Q, ee, P && F, et, en ? (0, i.jsx)($, {
      muteConfig: ei,
      className: a()(Z.muteText, {
        [Z.muteTextWithActivity]: null != Q || null != ee
      })
    }) : null]
  })
}

function et(e) {
  let {
    guildJoinRequestStatus: t
  } = e;
  return (0, i.jsx)(_.Text, {
    className: Z.viewAsRolesWarning,
    color: "text-normal",
    variant: "text-xs/normal",
    children: function(e) {
      switch (e) {
        case I.GuildJoinRequestApplicationStatuses.SUBMITTED:
          return z.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
        case I.GuildJoinRequestApplicationStatuses.REJECTED:
          return z.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
        case I.GuildJoinRequestApplicationStatuses.APPROVED:
          return z.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
        default:
          return z.default.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED
      }
    }(t)
  })
}

function en(e) {
  let {
    guild: t,
    includeActivity: n = !0
  } = e, r = (0, E.default)(t), s = (0, T.useCurrentUserGuildBadgeStatus)(t.id), o = null != s ? (0, i.jsx)(et, {
    guildJoinRequestStatus: s
  }) : null, l = n ? (0, i.jsx)(ee, {
    guild: t
  }) : null, d = (0, u.useStateFromStores)([S.default], () => S.default.isViewingRoles(t.id)), c = (0, f.useShouldShowInvitesDisabledNotif)(t);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: a()(Z.row, Z.rowGuildName),
      children: [r ? (0, i.jsx)(U.default, {
        guild: t,
        size: q,
        className: Z.rowIconV2
      }) : (0, i.jsx)(P.default, {
        guild: t,
        size: Q,
        className: Z.rowIcon
      }), (0, i.jsx)("span", {
        className: a()(Z.guildNameText, {
          [Z.guildNameTextLimitedSize]: null != l
        }),
        children: t.toString()
      })]
    }), c ? (0, i.jsx)(_.Text, {
      className: Z.invitesDisabledTooltip,
      color: "header-secondary",
      variant: "text-sm/medium",
      children: z.default.Messages.INVITES_DISABLED_TOOLTIP
    }) : null, d ? (0, i.jsx)(_.Text, {
      className: Z.viewAsRolesWarning,
      color: "text-normal",
      variant: "text-xs/normal",
      children: z.default.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
    }) : null != o ? o : l]
  })
}

function ei(e) {
  let {
    guild: t,
    disabled: n = !1,
    "aria-label": s = !1,
    children: a,
    includeActivity: o = !0,
    isDragging: l
  } = e, d = (0, Y.useCanShowNewGuildTooltip)("guilds_bar", !1), [c, E] = r.useState(!1), I = (0, W.useGuildPopoutCards)(t), {
    isUserLurking: T,
    isUnverifiedAccount: f
  } = (0, u.useStateFromStoresObject)([h.default, L.default], () => {
    let e = h.default.isLurking(t.id);
    return {
      isUserLurking: e,
      isUnverifiedAccount: !L.default.getCheck(t.id).canChat
    }
  });
  return r.useMemo(() => !T && !f && d && o && I.length > 0, [T, f, d, o, I.length]) ? (0, i.jsx)("div", {
    onMouseEnter: () => E(!0),
    onMouseLeave: () => E(!1),
    onFocus: () => E(!0),
    onBlur: () => E(!1),
    children: (0, i.jsx)(_.Popout, {
      position: "right",
      renderPopout: e => {
        var n;
        return (0, i.jsx)(j.default, {
          guild: t,
          closePopout: () => E(!1),
          nudge: null !== (n = e.nudge) && void 0 !== n ? n : 0
        })
      },
      spacing: 0,
      onRequestClose: () => E(!1),
      shouldShow: !l && c,
      children: e => (0, i.jsx)("div", {
        ...e,
        children: a
      })
    })
  }) : (0, i.jsx)(_.Tooltip, {
    hideOnClick: !0,
    spacing: 20,
    position: "right",
    text: n ? null : (0, i.jsx)(en, {
      guild: t,
      includeActivity: o && !d
    }),
    "aria-label": s,
    tooltipClassName: X.listItemTooltip,
    children: e => {
      let {
        onFocus: t,
        onBlur: n,
        ...s
      } = e;
      return (0, i.jsx)("div", {
        onFocus: t,
        onBlur: n,
        children: r.cloneElement(r.Children.only(a), {
          ...s
        })
      })
    }
  })
}