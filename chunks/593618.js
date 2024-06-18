"use strict";
n.d(t, {
  K: function() {
    return X
  },
  Z: function() {
    return Q
  }
}), n(390547), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(477690),
  c = n(481060),
  d = n(317381),
  E = n(666188),
  I = n(246364),
  T = n(746916),
  h = n(965638),
  S = n(160404),
  f = n(41776),
  N = n(777861),
  A = n(565799),
  m = n(501655),
  O = n(517334),
  R = n(344185),
  p = n(199902),
  g = n(77498),
  C = n(984933),
  v = n(607744),
  L = n(158776),
  D = n(9156),
  M = n(594174),
  P = n(938475),
  y = n(940627),
  U = n(705600),
  b = n(602623),
  G = n(624138),
  w = n(510601),
  k = n(59688),
  B = n(456774),
  x = n(718582),
  V = n(981631),
  Z = n(689938),
  H = n(907934),
  F = n(721690);
let Y = (0, G.Mg)(_.Z.GUILD_TOOLTIP_ICON_SIZE),
  j = (0, G.Mg)(_.Z.GUILD_TOOLTIP_ICON_SIZE_V_2);

function W(e, t, n) {
  return 0 === t.length ? null : (0, i.jsxs)("div", {
    className: H.row,
    children: [(0, i.jsx)(e, {
      className: H.activityIcon,
      color: "currentColor"
    }), (0, i.jsx)(b.Z, {
      guildId: n,
      users: t,
      max: 6
    })]
  })
}

function K(e) {
  let {
    muteConfig: t,
    className: n
  } = e;
  return (null == t ? void 0 : t.end_time) == null ? (0, i.jsx)(c.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: Z.Z.Messages.FORM_LABEL_MUTED
  }) : (0, i.jsx)(N.Z, {
    muteConfig: t,
    className: n
  })
}

function z(e) {
  var t, n, s;
  let {
    guild: a
  } = e, _ = a.id, {
    voiceUsersToShow: E,
    stageSpeakers: I,
    numStageListeners: T,
    streamUsersToShow: h,
    embeddedActivitiesUsers: S,
    gameUsers: f,
    shouldShowGameBadge: N
  } = function(e) {
    let t = e.id,
      n = (0, u.Wu)([C.ZP, R.Z], () => {
        let e = C.ZP.getChannels(t)[C.Zb].filter(e => {
          let {
            channel: t
          } = e;
          return t.type === V.d4z.GUILD_VOICE
        }).map(e => {
          let {
            channel: t
          } = e;
          return t.id
        });
        return [...e, ...Object.values(R.Z.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
      }, [t]),
      i = (0, O.ZP)(t),
      s = r.useMemo(() => i.map(e => e.id), [i]),
      o = (0, u.e7)([P.ZP], () => P.ZP.getVoiceStates(t), [t]),
      a = l().flatMap(n, t => {
        var n;
        return t === e.afkChannelId ? [] : (null !== (n = o[t]) && void 0 !== n ? n : []).map(e => {
          let {
            user: t
          } = e;
          return t
        })
      }),
      _ = (0, u.Wu)([A.Z], () => l().flatMap(s, t => t === e.afkChannelId ? [] : A.Z.getMutableParticipants(t, m.pV.SPEAKER).filter(e => e.type === m.Ui.VOICE).map(e => {
        let {
          user: t
        } = e;
        return t
      }))),
      c = (0, u.e7)([A.Z], () => {
        let e = 0;
        for (let t of s) e += A.Z.getParticipantCount(t, m.pV.AUDIENCE);
        return e
      }),
      E = (0, u.Wu)([p.Z], () => p.Z.getAllApplicationStreams().filter(e => e.guildId === t).map(e => e.ownerId), [t]),
      I = (0, u.Wu)([L.Z, g.Z], () => a.filter(e => L.Z.getActivities(e.id, t).some(e => (null == e ? void 0 : e.application_id) != null && null != g.Z.getDetectableGame(null == e ? void 0 : e.application_id)))),
      T = (0, w.kM)("Guild Tooltip", !1),
      h = T ? I.map(e => e.id) : [],
      S = (0, u.Wu)([d.ZP], () => d.ZP.getEmbeddedActivitiesForGuild(t).flatMap(e => Array.from(e.userIds)), [t]),
      f = (0, u.Wu)([M.default], () => S.map(e => M.default.getUser(e)), [S]),
      N = (0, u.Wu)([M.default], () => E.map(e => M.default.getUser(e)), [E]),
      v = a.filter(e => !E.includes(e.id) && !S.includes(e.id) && !h.includes(e.id)),
      D = N.filter(e => null != e && !S.includes(e.id)),
      y = _.length > 0 || v.length > 0 || D.length > 0 || f.length > 0;
    return {
      voiceUsersToShow: v,
      stageSpeakers: _,
      numStageListeners: c,
      streamUsersToShow: D,
      embeddedActivitiesUsers: f,
      gameUsers: I,
      shouldShowGameBadge: T,
      hasActivity: y
    }
  }(a), v = W(c.GameControllerIcon, f, _), y = W(c.VoiceNormalIcon, E, _);
  let U = (t = _, n = I, s = T, 0 === n.length ? null : (0, i.jsxs)("div", {
      className: H.row,
      children: [(0, i.jsx)(c.StageIcon, {
        size: "lg",
        color: "currentColor",
        className: H.activityIcon
      }), (0, i.jsx)(b.Z, {
        guildId: t,
        users: n,
        max: 3
      }), (0, i.jsxs)("div", {
        className: H.stageListenerPill,
        children: [(0, i.jsx)(c.HeadphonesIcon, {
          size: "xs",
          color: "currentColor"
        }), (0, i.jsx)(c.Text, {
          className: H.stageListenerCount,
          color: "text-normal",
          variant: "text-xs/normal",
          children: s
        })]
      })]
    })),
    G = W(c.ScreenArrowIcon, h, _),
    k = W(c.ActivitiesIcon, S, _),
    {
      isMuted: B,
      muteConfig: x
    } = (0, u.cj)([D.ZP], () => ({
      isMuted: D.ZP.isMuted(_),
      muteConfig: D.ZP.getMuteConfig(_)
    }), [_]);
  return null != v && w.ZP.trackExposure({
    location: "Guild Tooltip"
  }), (0, i.jsxs)(i.Fragment, {
    children: [U, y, G, N && v, k, B ? (0, i.jsx)(K, {
      muteConfig: x,
      className: o()(H.muteText, {
        [H.muteTextWithActivity]: null != y || null != G
      })
    }) : null]
  })
}

function q(e) {
  let {
    guildJoinRequestStatus: t
  } = e;
  return (0, i.jsx)(c.Text, {
    className: H.viewAsRolesWarning,
    color: "text-normal",
    variant: "text-xs/normal",
    children: function(e) {
      switch (e) {
        case I.wB.SUBMITTED:
          return Z.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
        case I.wB.REJECTED:
          return Z.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
        case I.wB.APPROVED:
          return Z.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
        default:
          return Z.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED
      }
    }(t)
  })
}

function X(e) {
  let {
    guild: t,
    includeActivity: n = !0
  } = e, r = (0, E.Z)(t), s = (0, T.E)(t.id), a = null != s ? (0, i.jsx)(q, {
    guildJoinRequestStatus: s
  }) : null, l = n ? (0, i.jsx)(z, {
    guild: t
  }) : null, _ = (0, u.e7)([S.Z], () => S.Z.isViewingRoles(t.id)), d = (0, h.Ij)(t);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: o()(H.row, H.rowGuildName),
      children: [r ? (0, i.jsx)(U.Z, {
        guild: t,
        size: j,
        className: H.rowIconV2
      }) : (0, i.jsx)(y.Z, {
        guild: t,
        size: Y,
        className: H.rowIcon
      }), (0, i.jsx)("span", {
        className: o()(H.guildNameText, {
          [H.guildNameTextLimitedSize]: null != l
        }),
        children: t.toString()
      })]
    }), d ? (0, i.jsx)(c.Text, {
      className: H.invitesDisabledTooltip,
      color: "header-secondary",
      variant: "text-sm/medium",
      children: Z.Z.Messages.INVITES_DISABLED_TOOLTIP
    }) : null, _ ? (0, i.jsx)(c.Text, {
      className: H.viewAsRolesWarning,
      color: "text-normal",
      variant: "text-xs/normal",
      children: Z.Z.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
    }) : null != a ? a : l]
  })
}

function Q(e) {
  let {
    guild: t,
    disabled: n = !1,
    "aria-label": s = !1,
    children: o,
    includeActivity: a = !0,
    isDragging: l
  } = e, _ = (0, k.o)("guilds_bar", !1), [d, E] = r.useState(!1), I = (0, x.V1)(t), {
    isUserLurking: T,
    isUnverifiedAccount: h
  } = (0, u.cj)([f.Z, v.Z], () => {
    let e = f.Z.isLurking(t.id);
    return {
      isUserLurking: e,
      isUnverifiedAccount: !v.Z.getCheck(t.id).canChat
    }
  }), S = r.useMemo(() => !T && !h && a && I.length > 0, [T, h, a, I.length]), N = () => {
    S && k.Z.trackExposure({
      location: "guild_tooltip"
    })
  }, A = () => {
    E(!0), N()
  };
  return S && _ ? (0, i.jsx)("div", {
    onMouseEnter: A,
    onMouseLeave: () => E(!1),
    onFocus: A,
    onBlur: () => E(!1),
    children: (0, i.jsx)(c.Popout, {
      position: "right",
      renderPopout: e => {
        var n;
        return (0, i.jsx)(B.Z, {
          guild: t,
          closePopout: () => E(!1),
          nudge: null !== (n = e.nudge) && void 0 !== n ? n : 0
        })
      },
      spacing: 0,
      onRequestClose: () => E(!1),
      shouldShow: !l && d,
      children: e => (0, i.jsx)("div", {
        ...e,
        children: o
      })
    })
  }) : (0, i.jsx)(c.Tooltip, {
    hideOnClick: !0,
    spacing: 20,
    position: "right",
    text: n ? null : (0, i.jsx)(X, {
      guild: t,
      includeActivity: a
    }),
    "aria-label": s,
    onTooltipShow: N,
    tooltipClassName: F.listItemTooltip,
    children: e => {
      let {
        onFocus: t,
        onBlur: n,
        ...s
      } = e;
      return (0, i.jsx)("div", {
        onFocus: t,
        onBlur: n,
        children: r.cloneElement(r.Children.only(o), {
          ...s
        })
      })
    }
  })
}