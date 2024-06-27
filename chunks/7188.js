"use strict";
n.d(t, {
  Z: function() {
    return p
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(158631),
  l = n(709369),
  u = n(544384),
  _ = n(76021),
  c = n(592125),
  d = n(594174),
  E = n(834348),
  I = n(806519),
  T = n(74538),
  h = n(618158),
  f = n(871499),
  S = n(981631),
  A = n(474936),
  N = n(689938),
  m = n(416555);

function O(e) {
  let {
    className: t
  } = e;
  return (0, i.jsx)(o.SettingsIcon, {
    size: "md",
    color: "currentColor",
    className: t
  })
}

function R(e) {
  let {
    className: t
  } = e;
  return (0, i.jsxs)(r.Fragment, {
    children: [(0, i.jsx)(I.ZP, {
      className: t,
      mask: I.ZP.Masks.HEADER_BAR_BADGE,
      children: (0, i.jsx)(O, {})
    }), (0, i.jsx)(E.Z, {
      className: m.badgeUpgrade
    })]
  })
}

function p(e) {
  let {
    hideBadges: t = !1,
    stream: n,
    ...E
  } = e, I = (0, s.e7)([d.default], () => T.ZP.isPremium(d.default.getCurrentUser(), A.p9.TIER_1)), m = (0, s.e7)([c.Z], () => c.Z.getChannel(null == n ? void 0 : n.channelId)), p = r.useMemo(() => null != n ? [n] : [], [n]), g = (0, a.zW)(null == m ? void 0 : m.id), C = r.useCallback(() => {
    null != m && (0, _.Z)(m.getGuildId(), m.id, S.jXE.STREAM_SETTINGS)
  }, [m]);
  if (null == n || null == m) return null;
  let v = O;
  return !t && !I && (v = R), (0, i.jsx)(o.Popout, {
    position: "top",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(h.Z, {
        children: g ? (0, i.jsx)(l.Z, {
          onClose: t
        }) : (0, i.jsx)(u.Z, {
          channel: m,
          currentUser: d.default.getCurrentUser(),
          activeStreams: p,
          onClose: t,
          showReportOption: !0,
          handleGoLive: C
        })
      })
    },
    animation: o.Popout.Animation.FADE,
    children: e => (0, i.jsx)(f.Z, {
      ...e,
      label: N.Z.Messages.STREAMER_SETTINGS_TITLE,
      iconComponent: v,
      ...E
    })
  })
}