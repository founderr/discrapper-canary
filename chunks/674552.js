n.d(t, {
  Ne: function() {
    return p
  },
  Ny: function() {
    return g
  },
  Or: function() {
    return m
  },
  jt: function() {
    return C
  }
}), n(47120);
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(481060),
  a = n(44315),
  o = n(246364),
  u = n(460562),
  c = n(510601),
  d = n(981631),
  h = n(810817);

function p(e, t) {
  return (0, l.jsx)(r.NumberBadge, {
    count: e,
    color: t
  })
}

function g() {
  return (0, l.jsx)(r.IconBadge, {
    icon: (0, r.makeIconCompat)(u.Z),
    disableColor: !0,
    className: h.unavailableBadge
  })
}

function m(e) {
  let t, {
      audio: n,
      video: l,
      screenshare: i,
      isCurrentUserConnected: s,
      liveStage: a,
      activeEvent: o,
      activity: u,
      gaming: d
    } = e,
    h = (0, c.vg)("Guild Icon", !1);
  if (!o && !a && !u && !i && !l && d && c.ZP.trackExposure({
      location: "Guild Icon"
    }), o) t = r.CalendarIcon;
  else if (a) t = r.StageIcon;
  else if (u) t = r.ActivitiesIcon;
  else if (i) t = r.ScreenIcon;
  else if (l) t = r.VideoIcon;
  else if (d && h) t = r.GameControllerIcon;
  else {
    if (!n) return null;
    t = r.VoiceNormalIcon
  }
  return E({
    icon: t,
    isCurrentUserConnected: s
  })
}

function C(e) {
  let {
    guildJoinRequestStatus: t
  } = e, [n, l] = function(e) {
    switch (e) {
      case o.wB.SUBMITTED:
        return [void 0, r.ClockIcon];
      case o.wB.REJECTED:
        return [d.Ilk.RED_400, r.CloseSmallIcon];
      case o.wB.APPROVED:
        return [d.Ilk.GREEN_360, r.CheckmarkLargeIcon];
      default:
        return [void 0, r.PencilIcon]
    }
  }(t);
  return E({
    icon: l,
    color: n
  })
}

function E(e) {
  let {
    icon: t,
    color: n,
    isCurrentUserConnected: i
  } = e, o = null == n ? {
    disableColor: !0
  } : {
    color: (0, a.Lq)(n)
  };
  return (0, l.jsx)(r.IconBadge, {
    icon: t,
    className: s()(h.iconBadge, {
      [h.isCurrentUserConnected]: i
    }),
    ...o
  })
}