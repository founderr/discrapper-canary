n.d(t, {
  Z: function() {
    return A
  }
}), n(47120), n(390547), n(653041);
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(392711),
  a = n.n(r),
  o = n(442837),
  u = n(481060),
  c = n(317381),
  d = n(565799),
  h = n(501655),
  p = n(199902),
  g = n(592125),
  m = n(594174),
  C = n(938475),
  E = n(602623),
  f = n(823379),
  _ = n(709054),
  I = n(853856),
  N = n(981631),
  Z = n(689938),
  S = n(907934),
  x = n(721690);

function L(e, t) {
  return 0 === t.length ? null : (0, l.jsxs)("div", {
    className: S.row,
    children: [(0, l.jsx)(e, {
      className: S.activityIcon,
      color: "currentColor"
    }), (0, l.jsx)(E.Z, {
      guildId: void 0,
      users: t,
      max: 6
    })]
  })
}

function T() {
  var e, t;
  let n = (0, o.Wu)([I.Z, g.Z], () => _.default.keys(I.Z.getFavoriteChannels()).map(e => g.Z.getChannel(e)).filter(f.lm)),
    i = n.map(e => e.id),
    s = n.filter(e => e.type === N.d4z.GUILD_VOICE),
    r = n.filter(e => e.type === N.d4z.GUILD_STAGE_VOICE).map(e => e.id),
    Z = (0, o.Wu)([C.ZP], () => a().flatMap(s, e => C.ZP.getVoiceStatesForChannel(e).map(e => {
      let {
        user: t
      } = e;
      return t
    })), [s]),
    x = (0, o.Wu)([d.Z], () => a().flatMap(r, e => d.Z.getMutableParticipants(e, h.pV.SPEAKER).filter(e => e.type === h.Ui.VOICE).map(e => {
      let {
        user: t
      } = e;
      return t
    }))),
    T = (0, o.e7)([d.Z], () => {
      let e = 0;
      for (let t of r) e += d.Z.getParticipantCount(t, h.pV.AUDIENCE);
      return e
    }),
    v = (0, o.Wu)([p.Z], () => p.Z.getAllApplicationStreams().filter(e => i.includes(e.channelId)).map(e => e.ownerId), [i]),
    A = (0, o.Wu)([c.ZP], () => {
      let e = c.ZP.getEmbeddedActivitiesByChannel(),
        t = [];
      for (let s of i) {
        var n, l;
        t.push(...null !== (l = null === (n = e.get(s)) || void 0 === n ? void 0 : n.flatMap(e => Array.from(e.userIds))) && void 0 !== l ? l : [])
      }
      return t
    }, [i]),
    M = (0, o.Wu)([m.default], () => A.map(e => m.default.getUser(e)), [A]),
    R = (0, o.Wu)([m.default], () => v.map(e => m.default.getUser(e)), [v]),
    O = L(u.VoiceNormalIcon, Z.filter(e => !v.includes(e.id) && !A.includes(e.id)));
  let P = (e = x, t = T, 0 === e.length ? null : (0, l.jsxs)("div", {
      className: S.row,
      children: [(0, l.jsx)(u.StageIcon, {
        size: "lg",
        color: "currentColor",
        className: S.activityIcon
      }), (0, l.jsx)(E.Z, {
        guildId: void 0,
        users: e,
        max: 3
      }), (0, l.jsxs)("div", {
        className: S.stageListenerPill,
        children: [(0, l.jsx)(u.HeadphonesIcon, {
          size: "xs",
          color: "currentColor"
        }), (0, l.jsx)(u.Text, {
          className: S.stageListenerCount,
          color: "text-normal",
          variant: "text-xs/medium",
          children: t
        })]
      })]
    })),
    b = L(u.ScreenArrowIcon, R.filter(e => null != e && !A.includes(e.id))),
    j = L(u.ActivitiesIcon, M);
  return (0, l.jsxs)(l.Fragment, {
    children: [P, O, b, j]
  })
}

function v() {
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: s()(S.row, S.rowGuildName),
      children: (0, l.jsx)("span", {
        className: s()(S.guildNameText, S.guildNameTextLimitedSize),
        children: Z.Z.Messages.FAVORITES_GUILD_NAME
      })
    }), (0, l.jsx)(T, {})]
  })
}

function A(e) {
  let {
    "aria-label": t = !1,
    onShow: n,
    children: i
  } = e;
  return (0, l.jsx)(u.Tooltip, {
    hideOnClick: !0,
    spacing: 20,
    position: "right",
    text: (0, l.jsx)(v, {}),
    "aria-label": t,
    tooltipClassName: x.listItemTooltip,
    onTooltipShow: n,
    children: e => (0, l.jsx)("div", {
      ...e,
      children: i
    })
  })
}