"use strict";
l.r(t), l.d(t, {
  ActivityEmoji: function() {
    return M
  },
  default: function() {
    return O
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("446674"),
  u = l("77078"),
  o = l("430568"),
  c = l("309570"),
  d = l("29088"),
  f = l("867805"),
  T = l("699209"),
  E = l("32346"),
  A = l("342845"),
  _ = l("845579"),
  S = l("271938"),
  m = l("42203"),
  C = l("957255"),
  N = l("824563"),
  g = l("800762"),
  v = l("137783"),
  p = l("49111"),
  I = l("205341");

function M(e) {
  let {
    emoji: t,
    className: l,
    animate: n = !0,
    hideTooltip: s
  } = e, r = _.AnimateEmoji.useSetting(), c = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), d = {
    className: i(I.emoji, l),
    emojiId: t.id,
    emojiName: t.name,
    autoplay: !0,
    animated: !!(t.animated && r && n)
  };
  return s ? (0, a.jsx)(o.default, {
    ...d
  }) : (0, a.jsx)(u.Tooltip, {
    text: c,
    children: e => (0, a.jsx)(o.default, {
      ...e,
      ...d
    })
  })
}
let h = e => {
  let {
    className: t,
    text: l
  } = e, s = n.useRef(null), r = n.useRef(null), [o, c] = n.useState(!1);
  return n.useLayoutEffect(() => {
    let {
      current: e
    } = s, {
      current: t
    } = r;
    if (null == e || null == t) return;
    let l = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
    c(!l)
  }, [l]), (0, a.jsx)(u.Tooltip, {
    text: o || null == l || "" === l ? null : l,
    delay: 150,
    "aria-label": !1,
    children: e => (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        ...e,
        className: t,
        ref: s,
        children: l
      }), (0, a.jsx)("div", {
        className: i(I.textRuler, t),
        ref: r,
        "aria-hidden": !0,
        children: l
      })]
    })
  })
};
var O = e => {
  var t;
  let {
    activities: l,
    applicationStream: n,
    className: s,
    textClassName: i,
    emojiClassName: u,
    animate: o = !0,
    hideTooltip: f = !1,
    hideEmoji: _ = !1,
    user: O
  } = e, U = null != l ? l.find(e => e.type === p.ActivityTypes.CUSTOM_STATUS) : null, R = (0, r.useStateFromStores)([S.default], () => S.default.getId() === (null == O ? void 0 : O.id)), x = (0, r.useStateFromStores)([E.default], () => R ? E.default.getHangStatusActivity() : null != l ? l.find(e => e.type === p.ActivityTypes.HANG_STATUS) : null), y = (0, r.useStateFromStores)([g.default, m.default], () => {
    var e;
    return null != x && null != O ? m.default.getChannel(null === (e = g.default.getVoiceStateForUser(O.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), {
    enableHangStatus: j
  } = T.HangStatusExperiment.useExperiment({
    guildId: null == y ? void 0 : y.guild_id,
    location: "ActivityStatus"
  }), P = null, H = j && null != x && C.default.can(p.Permissions.CONNECT, y);
  H ? P = (0, a.jsx)(A.default, {
    className: u,
    hangStatusActivity: x
  }) : null != U && null != U.emoji && !_ && (P = (0, a.jsx)(M, {
    emoji: U.emoji,
    animate: o,
    hideTooltip: f,
    className: u
  }));
  let L = (0, r.useStateFromStores)([N.default], () => null != O ? N.default.getStatus(O.id) : null),
    G = null !== L && [p.StatusTypes.OFFLINE, p.StatusTypes.INVISIBLE].includes(L),
    D = null === (t = (0, d.default)(l, n, void 0, H)) || void 0 === t ? void 0 : t.activityText,
    B = null != D && D.length > 0;
  return G || null == P && !B ? null : (0, a.jsxs)("div", {
    className: s,
    children: [P, (0, a.jsx)(h, {
      text: D,
      className: i
    }), null != l && l.some(c.default) ? (0, a.jsx)(v.default, {
      width: 16,
      height: 16,
      className: I.icon
    }) : null]
  })
}