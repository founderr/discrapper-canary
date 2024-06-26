"use strict";
n.d(t, {
  I: function() {
    return v
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(596454),
  _ = n(122810),
  c = n(74433),
  d = n(44315),
  E = n(633302),
  I = n(574176),
  T = n(106301),
  h = n(223135),
  f = n(695346),
  S = n(314897),
  N = n(592125),
  A = n(496675),
  m = n(158776),
  O = n(979651),
  p = n(6074),
  R = n(981631),
  g = n(577029);
let C = "14px";

function v(e) {
  let {
    emoji: t,
    className: n,
    animate: r = !0,
    hideTooltip: s,
    tooltipDelay: a
  } = e, _ = f.Yk.useSetting(), c = null != t.id ? ":".concat(t.name, ":") : E.ZP.translateSurrogatesToInlineEmoji(t.name), d = {
    className: o()(g.emoji, n),
    emojiId: t.id,
    emojiName: t.name,
    autoplay: !0,
    animated: !!(t.animated && _ && r)
  };
  return s ? (0, i.jsx)(u.Z, {
    ...d
  }) : (0, i.jsx)(l.Tooltip, {
    text: c,
    delay: a,
    children: e => (0, i.jsx)(u.Z, {
      ...e,
      ...d
    })
  })
}
let L = e => {
  let {
    className: t,
    text: n
  } = e, s = r.useRef(null), a = r.useRef(null), [u, _] = r.useState(!1);
  return r.useLayoutEffect(() => {
    let {
      current: e
    } = s, {
      current: t
    } = a;
    if (null != e && null != t) _(!(e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight))
  }, [n]), (0, i.jsx)(l.Tooltip, {
    text: u || null == n || "" === n ? null : n,
    delay: 150,
    "aria-label": !1,
    children: e => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        ...e,
        className: t,
        ref: s,
        children: n
      }), (0, i.jsx)("div", {
        className: o()(g.textRuler, t),
        ref: a,
        "aria-hidden": !0,
        children: n
      })]
    })
  })
};
t.Z = e => {
  var t;
  let {
    activities: n,
    applicationStream: r,
    className: s,
    textClassName: o,
    emojiClassName: u,
    animate: E = !0,
    hideTooltip: f = !1,
    hideEmoji: D = !1,
    user: M,
    hasQuest: P
  } = e, y = null != n ? n.find(e => e.type === R.IIU.CUSTOM_STATUS) : null, U = (0, a.e7)([S.default], () => S.default.getId() === (null == M ? void 0 : M.id)), b = (0, a.e7)([T.Z], () => U ? T.Z.getHangStatusActivity() : null != n ? n.find(e => e.type === R.IIU.HANG_STATUS) : null), G = (0, a.e7)([O.Z, N.Z], () => {
    var e;
    return null != b && null != M ? N.Z.getChannel(null === (e = O.Z.getVoiceStateForUser(M.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), {
    enableHangStatus: w
  } = I.n.useExperiment({
    guildId: null == G ? void 0 : G.guild_id,
    location: "ActivityStatus"
  }, {
    autoTrackExposure: !1
  }), x = (0, d.Sl)(R.Ilk.BRAND_345), B = null, k = w && null != b && A.Z.can(R.Plq.CONNECT, G);
  k ? B = (0, i.jsx)(h.Z, {
    className: u,
    hangStatusActivity: b
  }) : null != y && null != y.emoji && !D && (B = (0, i.jsx)(v, {
    emoji: y.emoji,
    animate: E,
    hideTooltip: f,
    className: u
  }));
  let V = (0, a.e7)([m.Z], () => null != M ? m.Z.getStatus(M.id) : null),
    Z = null !== V && [R.Skl.OFFLINE, R.Skl.INVISIBLE].includes(V),
    H = null === (t = (0, c.Z)(n, r, void 0, k)) || void 0 === t ? void 0 : t.activityText,
    F = null != H && H.length > 0;
  return Z || null == B && !F ? null : (0, i.jsxs)("div", {
    className: s,
    children: [B, (0, i.jsx)(L, {
      text: H,
      className: o
    }), P && (0, i.jsx)(l.QuestsIcon, {
      size: "custom",
      className: g.questsIcon,
      height: C,
      width: C,
      color: x.hex
    }), null != n && n.some(e => (0, _.Z)(e, k)) ? (0, i.jsx)(p.Z, {
      width: 16,
      height: 16,
      className: g.icon
    }) : null]
  })
}