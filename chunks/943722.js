"use strict";
a.r(t), a.d(t, {
  ActivityEmoji: function() {
    return h
  },
  default: function() {
    return x
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
  m = a("342845"),
  S = a("845579"),
  A = a("271938"),
  g = a("42203"),
  _ = a("957255"),
  C = a("824563"),
  p = a("800762"),
  v = a("137783"),
  N = a("49111"),
  I = a("205341");

function h(e) {
  let {
    emoji: t,
    className: a,
    animate: l = !0,
    hideTooltip: s
  } = e, r = S.AnimateEmoji.useSetting(), c = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), d = {
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
var x = e => {
  var t;
  let {
    activities: a,
    applicationStream: l,
    className: s,
    textClassName: i,
    emojiClassName: u,
    animate: o = !0,
    hideTooltip: f = !1,
    hideEmoji: S = !1,
    user: x
  } = e, O = null != a ? a.find(e => e.type === N.ActivityTypes.CUSTOM_STATUS) : null, y = (0, r.useStateFromStores)([A.default], () => A.default.getId() === (null == x ? void 0 : x.id)), R = (0, r.useStateFromStores)([E.default], () => y ? E.default.getHangStatusActivity() : null != a ? a.find(e => e.type === N.ActivityTypes.HANG_STATUS) : null), U = (0, r.useStateFromStores)([p.default, g.default], () => {
    var e;
    return null != R && null != x ? g.default.getChannel(null === (e = p.default.getVoiceStateForUser(x.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), {
    enableHangStatus: j
  } = T.HangStatusExperiment.useExperiment({
    guildId: null == U ? void 0 : U.guild_id,
    location: "ActivityStatus"
  }), P = null, H = j && null != R && _.default.can(N.Permissions.CONNECT, U);
  H ? P = (0, n.jsx)(m.default, {
    className: u,
    hangStatusActivity: R
  }) : null != O && null != O.emoji && !S && (P = (0, n.jsx)(h, {
    emoji: O.emoji,
    animate: o,
    hideTooltip: f,
    className: u
  }));
  let L = (0, r.useStateFromStores)([C.default], () => null != x ? C.default.getStatus(x.id) : null),
    D = null !== L && [N.StatusTypes.OFFLINE, N.StatusTypes.INVISIBLE].includes(L),
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