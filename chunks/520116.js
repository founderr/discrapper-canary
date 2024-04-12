"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("913527"),
  i = n.n(s),
  r = n("924826"),
  o = n("442837"),
  u = n("481060"),
  d = n("135938"),
  c = n("900164"),
  f = n("554838"),
  h = n("493892"),
  E = n("37772"),
  m = n("695346"),
  p = n("314897"),
  S = n("496675"),
  g = n("594174"),
  _ = n("132338"),
  N = n("55935"),
  I = n("655354"),
  T = n("809780"),
  C = n("981631"),
  A = n("689938"),
  v = n("501247");
let R = {
  left: 4,
  right: -12
};

function x(e) {
  var t;
  let {
    channel: n,
    message: s,
    compact: i,
    isGroupStart: o,
    treatSpam: d,
    gotoChannel: c
  } = e, f = (0, r.useListItem)(null !== (t = s.id) && void 0 !== t ? t : ""), h = l.useCallback(e => {
    if ("ArrowLeft" === e.key) {
      var t;
      null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus()
    }
  }, [n.id]);
  return (0, a.jsx)(u.FocusRing, {
    offset: R,
    children: (0, a.jsxs)("div", {
      className: v.messageContainer,
      onKeyDown: h,
      ...f,
      children: [(0, a.jsx)(I.default, {
        className: v.jumpButton,
        onJump: e => c(e, s.id)
      }), (0, a.jsx)(E.default, {
        id: s.id,
        message: s,
        channel: n,
        className: v.message,
        compact: i,
        animateAvatar: !1,
        isGroupStart: o,
        onKeyDown: h,
        treatSpam: d
      })]
    }, s.id)
  })
}

function M(e) {
  var t, n;
  let {
    channel: l,
    channelRecord: s,
    gotoChannel: r
  } = e, {
    enabled: E
  } = d.default.useExperiment({
    location: "20e3b0_1"
  }, {
    autoTrackExposure: !1
  }), I = m.MessageDisplayCompact.useSetting(), R = (0, o.useStateFromStores)([S.default], () => S.default.can(C.Permissions.CREATE_INSTANT_INVITE, s)), M = (0, h.isSpamSupported)(s), L = !1, b = 0 === l.messages.length || i()(l.messages[0].timestamp).isSame(i()(), "day"), O = null !== (n = null === (t = g.default.getUser(p.default.getId())) || void 0 === t ? void 0 : t.hasFlag(C.UserFlags.SPAMMER)) && void 0 !== n && n, y = [];
  if (!l.collapsed) {
    let e = null,
      t = null,
      n = l.messages.slice(0, T.MAX_SHOWN_MESSAGES);
    n.forEach(n => {
      if (!(0, c.default)(n, R)) {
        if (!b && (null == e || !e.isSame(n.timestamp, "day"))) {
          let t = (0, N.dateFormat)(n.timestamp, "LL");
          y.push((0, a.jsx)(_.default, {
            className: v.divider,
            children: t
          }, t)), e = i()(n.timestamp)
        }
        let l = null == t || (0, f.default)(s, t, n);
        t = n, L = L || (0, h.isSpam)(n), y.push((0, a.jsx)(x, {
          channel: s,
          message: n,
          compact: I,
          isGroupStart: l,
          treatSpam: !O && E && (0, h.isSpam)(n) && M,
          gotoChannel: r
        }, n.id))
      }
    }), l.messages.length >= T.MAX_SHOWN_MESSAGES && y.push((0, a.jsxs)(u.Button, {
      color: u.Button.Colors.LINK,
      look: u.Button.Looks.LINK,
      onClick: e => r(e, n[n.length - 1].id),
      children: [A.default.Messages.UNREADS_VIEW_CHANNEL, " ›"]
    }, "view-all")), 0 === y.length && (y = [(0, a.jsx)(u.Spinner, {}, "spinner")])
  }
  return L && M && d.default.trackExposure({
    location: "20e3b0_2"
  }), (0, a.jsx)("div", {
    className: v.messages,
    children: y
  })
}