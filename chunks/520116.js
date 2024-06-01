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
  N = n("132338"),
  _ = n("55935"),
  I = n("655354"),
  T = n("809780"),
  C = n("981631"),
  A = n("689938"),
  v = n("443039");
let x = {
  left: 4,
  right: -12
};

function R(e) {
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
    offset: x,
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
  }), I = m.MessageDisplayCompact.useSetting(), x = (0, o.useStateFromStores)([S.default], () => S.default.can(C.Permissions.CREATE_INSTANT_INVITE, s)), M = (0, h.isSpamSupported)(s), b = !1, O = 0 === l.messages.length || i()(l.messages[0].timestamp).isSame(i()(), "day"), y = null !== (n = null === (t = g.default.getUser(p.default.getId())) || void 0 === t ? void 0 : t.hasFlag(C.UserFlags.SPAMMER)) && void 0 !== n && n, L = [];
  if (!l.collapsed) {
    let e = null,
      t = null,
      n = l.messages.slice(0, T.MAX_SHOWN_MESSAGES);
    n.forEach(n => {
      if (!(0, c.default)(n, x)) {
        if (!O && (null == e || !e.isSame(n.timestamp, "day"))) {
          let t = (0, _.dateFormat)(n.timestamp, "LL");
          L.push((0, a.jsx)(N.default, {
            className: v.divider,
            children: t
          }, t)), e = i()(n.timestamp)
        }
        let l = null == t || (0, f.default)(s, t, n);
        t = n, b = b || (0, h.isSpam)(n), L.push((0, a.jsx)(R, {
          channel: s,
          message: n,
          compact: I,
          isGroupStart: l,
          treatSpam: !y && E && (0, h.isSpam)(n) && M,
          gotoChannel: r
        }, n.id))
      }
    }), l.messages.length >= T.MAX_SHOWN_MESSAGES && L.push((0, a.jsxs)(u.Button, {
      color: u.Button.Colors.LINK,
      look: u.Button.Looks.LINK,
      onClick: e => r(e, n[n.length - 1].id),
      children: [A.default.Messages.UNREADS_VIEW_CHANNEL, " ›"]
    }, "view-all")), 0 === L.length && (L = [(0, a.jsx)(u.Spinner, {}, "spinner")])
  }
  return b && M && d.default.trackExposure({
    location: "20e3b0_2"
  }), (0, a.jsx)("div", {
    className: v.messages,
    children: L
  })
}