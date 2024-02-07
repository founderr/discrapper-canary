"use strict";
a.r(t), a.d(t, {
  ActivityEmoji: function() {
    return h
  },
  default: function() {
    return O
  }
}), a("222007");
var n = a("37983"),
  l = a("884691"),
  s = a("414456"),
  i = a.n(s),
  r = a("446674"),
  u = a("77078"),
  o = a("430568"),
  c = a("309570"),
  d = a("29088"),
  f = a("867805"),
  T = a("699209"),
  E = a("32346"),
  A = a("342845"),
  _ = a("845579"),
  S = a("271938"),
  m = a("42203"),
  C = a("957255"),
  g = a("824563"),
  N = a("800762"),
  v = a("137783"),
  p = a("49111"),
  I = a("205341");

function h(e) {
  let {
    emoji: t,
    className: a,
    animate: l = !0,
    hideTooltip: s
  } = e, r = _.AnimateEmoji.useSetting(), c = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), d = {
    className: i(I.emoji, a),
    emojiId: t.id,
    emojiName: t.name,
    autoplay: !0,
    animated: !!(t.animated && r && l)
  };
  return s ? (0, n.jsx)(o.default, {
    ...d
  }) : (0, n.jsx)(u.Tooltip, {
    text: c,
    children: e => (0, n.jsx)(o.default, {
      ...e,
      ...d
    })
  })
}
let M = e => {
  let {
    className: t,
    text: a
  } = e, s = l.useRef(null), r = l.useRef(null), [o, c] = l.useState(!1);
  return l.useLayoutEffect(() => {
    let {
      current: e
    } = s, {
      current: t
    } = r;
    if (null == e || null == t) return;
    let a = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
    c(!a)
  }, [a]), (0, n.jsx)(u.Tooltip, {
    text: o || null == a || "" === a ? null : a,
    delay: 150,
    "aria-label": !1,
    children: e => (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        ...e,
        className: t,
        ref: s,
        children: a
      }), (0, n.jsx)("div", {
        className: i(I.textRuler, t),
        ref: r,
        "aria-hidden": !0,
        children: a
      })]
    })
  })
};
var O = e => {
  var t;
  let {
    activities: a,
    applicationStream: l,
    className: s,
    textClassName: i,
    emojiClassName: u,
    animate: o = !0,
    hideTooltip: f = !1,
    hideEmoji: _ = !1,
    user: O
  } = e, U = null != a ? a.find(e => e.type === p.ActivityTypes.CUSTOM_STATUS) : null, x = (0, r.useStateFromStores)([S.default], () => S.default.getId() === (null == O ? void 0 : O.id)), R = (0, r.useStateFromStores)([E.default], () => x ? E.default.getHangStatusActivity() : null != a ? a.find(e => e.type === p.ActivityTypes.HANG_STATUS) : null), y = (0, r.useStateFromStores)([N.default, m.default], () => {
    var e;
    return null != R && null != O ? m.default.getChannel(null === (e = N.default.getVoiceStateForUser(O.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), {
    enableHangStatus: j
  } = T.HangStatusExperiment.useExperiment({
    guildId: null == y ? void 0 : y.guild_id,
    location: "ActivityStatus"
  }), P = null, H = j && null != R && C.default.can(p.Permissions.CONNECT, y);
  H ? P = (0, n.jsx)(A.default, {
    className: u,
    hangStatusActivity: R
  }) : null != U && null != U.emoji && !_ && (P = (0, n.jsx)(h, {
    emoji: U.emoji,
    animate: o,
    hideTooltip: f,
    className: u
  }));
  let L = (0, r.useStateFromStores)([g.default], () => null != O ? g.default.getStatus(O.id) : null),
    D = null !== L && [p.StatusTypes.OFFLINE, p.StatusTypes.INVISIBLE].includes(L),
    G = null === (t = (0, d.default)(a, l, void 0, H)) || void 0 === t ? void 0 : t.activityText,
    b = null != G && G.length > 0;
  return D || null == P && !b ? null : (0, n.jsxs)("div", {
    className: s,
    children: [P, (0, n.jsx)(M, {
      text: G,
      className: i
    }), null != a && a.some(c.default) ? (0, n.jsx)(v.default, {
      width: 16,
      height: 16,
      className: I.icon
    }) : null]
  })
}