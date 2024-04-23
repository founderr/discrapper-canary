"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("653041");
var s = n("735250"),
  l = n("470079"),
  a = n("913527"),
  i = n.n(a),
  r = n("924826"),
  o = n("442837"),
  u = n("481060"),
  d = n("135938"),
  c = n("900164"),
  f = n("554838"),
  E = n("493892"),
  _ = n("37772"),
  m = n("695346"),
  T = n("314897"),
  I = n("496675"),
  p = n("594174"),
  h = n("132338"),
  N = n("55935"),
  S = n("655354"),
  C = n("809780"),
  A = n("981631"),
  g = n("689938"),
  M = n("501247");
let R = {
  left: 4,
  right: -12
};

function v(e) {
  var t;
  let {
    channel: n,
    message: a,
    compact: i,
    isGroupStart: o,
    treatSpam: d,
    gotoChannel: c
  } = e, f = (0, r.useListItem)(null !== (t = a.id) && void 0 !== t ? t : ""), E = l.useCallback(e => {
    if ("ArrowLeft" === e.key) {
      var t;
      null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus()
    }
  }, [n.id]);
  return (0, s.jsx)(u.FocusRing, {
    offset: R,
    children: (0, s.jsxs)("div", {
      className: M.messageContainer,
      onKeyDown: E,
      ...f,
      children: [(0, s.jsx)(S.default, {
        className: M.jumpButton,
        onJump: e => c(e, a.id)
      }), (0, s.jsx)(_.default, {
        id: a.id,
        message: a,
        channel: n,
        className: M.message,
        compact: i,
        animateAvatar: !1,
        isGroupStart: o,
        onKeyDown: E,
        treatSpam: d
      })]
    }, a.id)
  })
}

function O(e) {
  var t, n;
  let {
    channel: l,
    channelRecord: a,
    gotoChannel: r
  } = e, {
    enabled: _
  } = d.default.useExperiment({
    location: "20e3b0_1"
  }, {
    autoTrackExposure: !1
  }), S = m.MessageDisplayCompact.useSetting(), R = (0, o.useStateFromStores)([I.default], () => I.default.can(A.Permissions.CREATE_INSTANT_INVITE, a)), O = (0, E.isSpamSupported)(a), x = !1, L = 0 === l.messages.length || i()(l.messages[0].timestamp).isSame(i()(), "day"), D = null !== (n = null === (t = p.default.getUser(T.default.getId())) || void 0 === t ? void 0 : t.hasFlag(A.UserFlags.SPAMMER)) && void 0 !== n && n, P = [];
  if (!l.collapsed) {
    let e = null,
      t = null,
      n = l.messages.slice(0, C.MAX_SHOWN_MESSAGES);
    n.forEach(n => {
      if (!(0, c.default)(n, R)) {
        if (!L && (null == e || !e.isSame(n.timestamp, "day"))) {
          let t = (0, N.dateFormat)(n.timestamp, "LL");
          P.push((0, s.jsx)(h.default, {
            className: M.divider,
            children: t
          }, t)), e = i()(n.timestamp)
        }
        let l = null == t || (0, f.default)(a, t, n);
        t = n, x = x || (0, E.isSpam)(n), P.push((0, s.jsx)(v, {
          channel: a,
          message: n,
          compact: S,
          isGroupStart: l,
          treatSpam: !D && _ && (0, E.isSpam)(n) && O,
          gotoChannel: r
        }, n.id))
      }
    }), l.messages.length >= C.MAX_SHOWN_MESSAGES && P.push((0, s.jsxs)(u.Button, {
      color: u.Button.Colors.LINK,
      look: u.Button.Looks.LINK,
      onClick: e => r(e, n[n.length - 1].id),
      children: [g.default.Messages.UNREADS_VIEW_CHANNEL, " ›"]
    }, "view-all")), 0 === P.length && (P = [(0, s.jsx)(u.Spinner, {}, "spinner")])
  }
  return x && O && d.default.trackExposure({
    location: "20e3b0_2"
  }), (0, s.jsx)("div", {
    className: M.messages,
    children: P
  })
}