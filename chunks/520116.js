n.d(t, {
  Z: function() {
    return x
  }
}), n(653041);
var s = n(735250),
  i = n(470079),
  l = n(913527),
  a = n.n(l),
  r = n(91192),
  o = n(442837),
  c = n(481060),
  u = n(135938),
  d = n(900164),
  E = n(554838),
  _ = n(493892),
  I = n(661824),
  T = n(37772),
  N = n(695346),
  m = n(314897),
  h = n(496675),
  C = n(594174),
  S = n(55935),
  A = n(655354),
  p = n(809780),
  g = n(981631),
  f = n(689938),
  O = n(131132);
let R = {
  left: 4,
  right: -12
};

function M(e) {
  var t;
  let {
    channel: n,
    message: l,
    compact: a,
    isGroupStart: o,
    treatSpam: u,
    gotoChannel: d
  } = e, E = (0, r.JA)(null !== (t = l.id) && void 0 !== t ? t : ""), _ = i.useCallback(e => {
    if ("ArrowLeft" === e.key) {
      var t;
      null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus()
    }
  }, [n.id]);
  return (0, s.jsx)(c.FocusRing, {
    offset: R,
    children: (0, s.jsxs)("div", {
      className: O.messageContainer,
      onKeyDown: _,
      ...E,
      children: [(0, s.jsx)(A.Z, {
        className: O.jumpButton,
        onJump: e => d(e, l.id)
      }), (0, s.jsx)(T.Z, {
        id: l.id,
        message: l,
        channel: n,
        className: O.message,
        compact: a,
        animateAvatar: !1,
        isGroupStart: o,
        onKeyDown: _,
        treatSpam: u
      })]
    }, l.id)
  })
}

function x(e) {
  var t, n;
  let {
    channel: i,
    channelRecord: l,
    gotoChannel: r
  } = e, {
    enabled: T
  } = u.Z.useExperiment({
    location: "20e3b0_1"
  }, {
    autoTrackExposure: !1
  }), A = N.jU.useSetting(), R = (0, o.e7)([h.Z], () => h.Z.can(g.Plq.CREATE_INSTANT_INVITE, l)), x = (0, _.P1)(l), v = !1, L = 0 === i.messages.length || a()(i.messages[0].timestamp).isSame(a()(), "day"), Z = null !== (n = null === (t = C.default.getUser(m.default.getId())) || void 0 === t ? void 0 : t.hasFlag(g.xW$.SPAMMER)) && void 0 !== n && n, P = [];
  if (!i.collapsed) {
    let e = null,
      t = null,
      n = i.messages.slice(0, p.hC);
    n.forEach(n => {
      if (!(0, d.Z)(n, R)) {
        if (!L && (null == e || !e.isSame(n.timestamp, "day"))) {
          let t = (0, S.vc)(n.timestamp, "LL");
          P.push((0, s.jsx)(I.Z, {
            className: O.divider,
            children: t
          }, t)), e = a()(n.timestamp)
        }
        let i = null == t || (0, E.Z)(l, t, n);
        t = n, v = v || (0, _.DQ)(n), P.push((0, s.jsx)(M, {
          channel: l,
          message: n,
          compact: A,
          isGroupStart: i,
          treatSpam: !Z && T && (0, _.DQ)(n) && x,
          gotoChannel: r
        }, n.id))
      }
    }), i.messages.length >= p.hC && P.push((0, s.jsxs)(c.Button, {
      color: c.Button.Colors.LINK,
      look: c.Button.Looks.LINK,
      onClick: e => r(e, n[n.length - 1].id),
      children: [f.Z.Messages.UNREADS_VIEW_CHANNEL, " ›"]
    }, "view-all")), 0 === P.length && (P = [(0, s.jsx)(c.Spinner, {}, "spinner")])
  }
  return v && x && u.Z.trackExposure({
    location: "20e3b0_2"
  }), (0, s.jsx)("div", {
    className: O.messages,
    children: P
  })
}