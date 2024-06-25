n.d(t, {
  Z: function() {
    return j
  }
}), n(47120);
var s, r, i = n(735250),
  l = n(470079),
  a = n(920906),
  o = n(442837),
  u = n(481060),
  c = n(447543),
  d = n(587444),
  E = n(393238),
  _ = n(388905),
  h = n(108427),
  I = n(314897),
  N = n(701190),
  p = n(626135),
  g = n(768581),
  m = n(823379),
  T = n(264229),
  f = n(230224),
  A = n(617730),
  Z = n(258356),
  x = n(981631),
  O = n(689938),
  S = n(125739);

function v() {
  return (0, i.jsx)("div", {
    className: S.centerFlex,
    children: (0, i.jsx)(u.Spinner, {})
  })
}(r = s || (s = {}))[r.LOADING = 0] = "LOADING", r[r.DETAILS = 1] = "DETAILS", r[r.ERROR = 2] = "ERROR";
let P = e => {
  let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
  if (null == e || null == e.state || t) return 0;
  let n = e.state;
  switch (n) {
    case x.r2o.RESOLVED:
    case x.r2o.ACCEPTED:
    case x.r2o.APP_NOT_OPENED:
    case x.r2o.APP_OPENED:
    case x.r2o.ACCEPTING:
    case x.r2o.APP_OPENING:
      return 1;
    case x.r2o.EXPIRED:
    case x.r2o.BANNED:
    case x.r2o.ERROR:
      return 2;
    case x.r2o.RESOLVING:
      return 0;
    default:
      (0, m.vE)(n)
  }
};

function D(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e;
  if ((null == t ? void 0 : t.state) === x.r2o.BANNED) return (0, i.jsx)(d.u, {
    text: O.Z.Messages.AUTH_BANNED_INVITE_BODY,
    buttonCta: O.Z.Messages.INVITE_INVALID_CTA,
    onClick: n
  });
  return (0, i.jsx)(d.u, {
    text: O.Z.Messages.INVITE_INVALID_ERROR,
    buttonCta: O.Z.Messages.INVITE_INVALID_CTA,
    onClick: n
  })
}

function C(e) {
  let {
    children: t,
    cardChildren: n,
    startAnimHeightPx: s,
    innerStyle: r,
    ...o
  } = e, {
    invite: u
  } = o, [c, d] = l.useState(P(u)), {
    ref: _,
    height: h
  } = (0, E.Z)(), I = (0, a.useSpring)({
    height: null != h && 0 !== h ? "".concat(h, "px") : "".concat(s, "px"),
    config: a.config.stiff
  });
  return l.useEffect(() => {
    let e = P(u);
    e !== c && d(e)
  }, [u, c]), (0, i.jsxs)(a.animated.div, {
    className: S.inviteCard,
    style: I,
    children: [(0, i.jsx)(a.animated.div, {
      className: S.inviteChildContainer,
      style: I,
      children: (0, i.jsx)("section", {
        ref: _,
        className: null == r ? void 0 : r(c),
        children: t(c)
      })
    }), n]
  })
}

function R(e) {
  let {
    invite: t
  } = e;
  if (null == t || !(0, f.JI)(t)) return null;
  let n = e => {
    if (null == t) return null;
    if (1 === e) return (0, i.jsx)(Z.X, {
      invite: t
    });
    return null
  };
  return (0, i.jsx)(C, {
    startAnimHeightPx: 0,
    innerStyle: () => S.guildInfoInner,
    ...e,
    children: e => n(e)
  })
}

function L(e) {
  let {
    invite: t
  } = e, n = n => {
    if (null == t) return (0, i.jsx)(v, {});
    switch (n) {
      case 1:
        return (0, i.jsx)(A.Z, {
          ...e,
          invite: t
        });
      case 2:
        return (0, i.jsx)(D, {
          ...e,
          invite: t
        });
      default:
        return (0, i.jsx)(v, {})
    }
  }, s = {
    1: S.inviteCardInner,
    2: S.inviteCardInnerError,
    0: S.inviteCardInnerLoading
  };
  return (0, i.jsx)(C, {
    startAnimHeightPx: 200,
    innerStyle: e => s[e],
    ...e,
    children: e => n(e)
  })
}

function M(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e, {
    guild: s
  } = null != t ? t : {}, r = {};
  if ((null == s ? void 0 : s.splash) != null) {
    let e = g.ZP.getGuildSplashURL({
      id: s.id,
      splash: s.splash
    });
    null != e && (r.backgroundImage = "url(".concat(e, ")"), r.backgroundSize = "cover")
  }
  return (0, i.jsxs)(_.ZP, {
    theme: x.BRd.DARK,
    className: S.splashBackground,
    style: r,
    contentClassName: S.centerAuthBoxContent,
    children: [(0, i.jsx)(L, {
      ...e,
      onAcceptInvite: n
    }), (0, i.jsx)(R, {
      ...e
    })]
  })
}

function j(e) {
  let {
    inviteKey: t,
    transitionTo: n
  } = e, s = (0, o.e7)([N.Z], () => N.Z.getInvite(t));
  return l.useEffect(() => {
    (0, h.e)("invite_mobile")
  }, []), l.useEffect(() => {
    null != s && s.state === x.r2o.RESOLVED && p.default.track(x.rMx.INVITE_VIEWED, {
      invite_code: t,
      friends_count: null == s ? void 0 : s.friends_count
    }, {
      flush: !0
    })
  }, [s, t]), (0, i.jsx)(M, {
    invite: s,
    onAcceptInvite: e => {
      ! function(e, t, n) {
        var s, r, i;
        null == e || e.preventDefault(), p.default.track(x.rMx.INVITE_APP_OPENED, {
          invite_code: (0, T.jX)(t),
          guild_id: null == n ? void 0 : null === (s = n.guild) || void 0 === s ? void 0 : s.id,
          channel_id: null == n ? void 0 : null === (r = n.channel) || void 0 === r ? void 0 : r.id,
          inviter_id: null == n ? void 0 : null === (i = n.inviter) || void 0 === i ? void 0 : i.id
        });
        let l = null != n && n.state !== x.r2o.EXPIRED && n.state !== x.r2o.BANNED ? t : void 0,
          a = I.default.getFingerprint(),
          o = null != a ? a : I.default.getId(),
          u = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
        c.Z.openApp(l, void 0, o, void 0, u)
      }(e, t, s)
    },
    transitionTo: n
  })
}