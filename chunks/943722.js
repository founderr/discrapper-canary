"use strict";
l.r(t), l.d(t, {
  ActivityEmoji: function() {
    return U
  },
  default: function() {
    return C
  }
}), l("222007");
var r = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  i = l("446674"),
  o = l("77078"),
  u = l("430568"),
  d = l("309570"),
  c = l("29088"),
  f = l("867805"),
  T = l("699209"),
  p = l("32346"),
  m = l("342845"),
  E = l("845579"),
  P = l("271938"),
  S = l("42203"),
  v = l("957255"),
  h = l("824563"),
  g = l("800762"),
  _ = l("137783"),
  N = l("49111"),
  O = l("205341");

function U(e) {
  let {
    emoji: t,
    className: l,
    animate: a = !0,
    hideTooltip: n
  } = e, i = E.AnimateEmoji.useSetting(), d = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), c = {
    className: s(O.emoji, l),
    emojiId: t.id,
    emojiName: t.name,
    autoplay: !0,
    animated: !!(t.animated && i && a)
  };
  return n ? (0, r.jsx)(u.default, {
    ...c
  }) : (0, r.jsx)(o.Tooltip, {
    text: d,
    children: e => (0, r.jsx)(u.default, {
      ...e,
      ...c
    })
  })
}
let A = e => {
  let {
    className: t,
    text: l
  } = e, n = a.useRef(null), i = a.useRef(null), [u, d] = a.useState(!1);
  return a.useLayoutEffect(() => {
    let {
      current: e
    } = n, {
      current: t
    } = i;
    if (null == e || null == t) return;
    let l = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
    d(!l)
  }, [l]), (0, r.jsx)(o.Tooltip, {
    text: u || null == l || "" === l ? null : l,
    delay: 150,
    "aria-label": !1,
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        ...e,
        className: t,
        ref: n,
        children: l
      }), (0, r.jsx)("div", {
        className: s(O.textRuler, t),
        ref: i,
        "aria-hidden": !0,
        children: l
      })]
    })
  })
};
var C = e => {
  var t;
  let {
    activities: l,
    applicationStream: a,
    className: n,
    textClassName: s,
    emojiClassName: o,
    animate: u = !0,
    hideTooltip: f = !1,
    hideEmoji: E = !1,
    user: C
  } = e, I = null != l ? l.find(e => e.type === N.ActivityTypes.CUSTOM_STATUS) : null, y = (0, i.useStateFromStores)([P.default], () => P.default.getId() === (null == C ? void 0 : C.id)), M = (0, i.useStateFromStores)([p.default], () => y ? p.default.getHangStatusActivity() : null != l ? l.find(e => e.type === N.ActivityTypes.HANG_STATUS) : null), x = (0, i.useStateFromStores)([g.default, S.default], () => {
    var e;
    return null != M && null != C ? S.default.getChannel(null === (e = g.default.getVoiceStateForUser(C.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), {
    enableHangStatus: L
  } = T.HangStatusExperiment.useExperiment({
    guildId: null == x ? void 0 : x.guild_id,
    location: "ActivityStatus"
  }, {
    autoTrackExposure: !1
  }), R = null, j = L && null != M && v.default.can(N.Permissions.CONNECT, x);
  j ? R = (0, r.jsx)(m.default, {
    className: o,
    hangStatusActivity: M
  }) : null != I && null != I.emoji && !E && (R = (0, r.jsx)(U, {
    emoji: I.emoji,
    animate: u,
    hideTooltip: f,
    className: o
  }));
  let b = (0, i.useStateFromStores)([h.default], () => null != C ? h.default.getStatus(C.id) : null),
    B = null !== b && [N.StatusTypes.OFFLINE, N.StatusTypes.INVISIBLE].includes(b),
    D = null === (t = (0, c.default)(l, a, void 0, j)) || void 0 === t ? void 0 : t.activityText,
    H = null != D && D.length > 0;
  return B || null == R && !H ? null : (0, r.jsxs)("div", {
    className: n,
    children: [R, (0, r.jsx)(A, {
      text: D,
      className: s
    }), null != l && l.some(d.default) ? (0, r.jsx)(_.default, {
      width: 16,
      height: 16,
      className: O.icon
    }) : null]
  })
}