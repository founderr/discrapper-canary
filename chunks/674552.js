"use strict";
n.r(t), n.d(t, {
  renderGuildJoinRequestBadge: function() {
    return x
  },
  renderMediaBadge: function() {
    return v
  },
  renderMentionBadge: function() {
    return A
  },
  renderUnavailableBadge: function() {
    return L
  }
}), n("47120");
var l = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  i = n("481060"),
  r = n("44315"),
  o = n("246364"),
  u = n("460562"),
  d = n("305878"),
  c = n("119828"),
  f = n("263704"),
  h = n("465670"),
  m = n("737688"),
  C = n("497309"),
  p = n("169278"),
  g = n("185403"),
  E = n("944581"),
  S = n("632184"),
  _ = n("170039"),
  I = n("510601"),
  N = n("981631"),
  T = n("126702");

function A(e, t) {
  return (0, l.jsx)(i.NumberBadge, {
    count: e,
    color: t
  })
}

function L() {
  return (0, l.jsx)(i.IconBadge, {
    icon: u.default,
    disableColor: !0,
    className: T.unavailableBadge
  })
}

function v(e) {
  let t, {
      audio: n,
      video: l,
      screenshare: a,
      isCurrentUserConnected: s,
      liveStage: i,
      activeEvent: r,
      activity: o,
      gaming: u
    } = e,
    f = (0, I.isGamingVoiceActivityEnabled)("Guild Icon", !1);
  if (!r && !i && !o && !a && !l && u && I.default.trackExposure({
      location: "Guild Icon"
    }), r) t = d.default;
  else if (i) t = _.default;
  else if (o) t = E.default;
  else if (a) t = p.default;
  else if (l) t = c.default;
  else if (u && f) t = m.default;
  else {
    if (!n) return null;
    t = S.default
  }
  return R({
    icon: t,
    isCurrentUserConnected: s
  })
}

function x(e) {
  let {
    guildJoinRequestStatus: t
  } = e, [n, l] = function(e) {
    switch (e) {
      case o.GuildJoinRequestApplicationStatuses.SUBMITTED:
        return [void 0, C.default];
      case o.GuildJoinRequestApplicationStatuses.REJECTED:
        return [N.Color.RED_400, h.default];
      case o.GuildJoinRequestApplicationStatuses.APPROVED:
        return [N.Color.GREEN_360, f.default];
      default:
        return [void 0, g.default]
    }
  }(t);
  return R({
    icon: l,
    color: n
  })
}

function R(e) {
  let {
    icon: t,
    color: n,
    isCurrentUserConnected: a
  } = e, o = null == n ? {
    disableColor: !0
  } : {
    color: (0, r.getColor)(n)
  };
  return (0, l.jsx)(i.IconBadge, {
    icon: t,
    className: s()(T.iconBadge, {
      [T.isCurrentUserConnected]: a
    }),
    ...o
  })
}