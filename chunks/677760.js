n.d(t, {
  Z: function() {
    return M
  }
}), n(47120);
var s, i, r = n(735250),
  a = n(470079),
  l = n(920906),
  o = n(442837),
  c = n(481060),
  u = n(447543),
  d = n(587444),
  _ = n(393238),
  E = n(388905),
  I = n(108427),
  h = n(314897),
  p = n(701190),
  g = n(626135),
  f = n(768581),
  N = n(823379),
  m = n(264229),
  T = n(230224),
  A = n(617730),
  Z = n(258356),
  x = n(981631),
  S = n(689938),
  O = n(125739);

function v() {
  return (0, r.jsx)("div", {
    className: O.centerFlex,
    children: (0, r.jsx)(c.Spinner, {})
  })
}(i = s || (s = {}))[i.LOADING = 0] = "LOADING", i[i.DETAILS = 1] = "DETAILS", i[i.ERROR = 2] = "ERROR";
let C = e => {
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
      (0, N.vE)(n)
  }
};

function D(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e;
  if ((null == t ? void 0 : t.state) === x.r2o.BANNED) return (0, r.jsx)(d.u, {
    text: S.Z.Messages.AUTH_BANNED_INVITE_BODY,
    buttonCta: S.Z.Messages.INVITE_INVALID_CTA,
    onClick: n
  });
  return (0, r.jsx)(d.u, {
    text: S.Z.Messages.INVITE_INVALID_ERROR,
    buttonCta: S.Z.Messages.INVITE_INVALID_CTA,
    onClick: n
  })
}

function P(e) {
  let {
    children: t,
    cardChildren: n,
    startAnimHeightPx: s,
    innerStyle: i,
    ...o
  } = e, {
    invite: c
  } = o, [u, d] = a.useState(C(c)), {
    ref: E,
    height: I
  } = (0, _.Z)(), h = (0, l.useSpring)({
    height: null != I && 0 !== I ? "".concat(I, "px") : "".concat(s, "px"),
    config: l.config.stiff
  });
  return a.useEffect(() => {
    let e = C(c);
    e !== u && d(e)
  }, [c, u]), (0, r.jsxs)(l.animated.div, {
    className: O.inviteCard,
    style: h,
    children: [(0, r.jsx)(l.animated.div, {
      className: O.inviteChildContainer,
      style: h,
      children: (0, r.jsx)("section", {
        ref: E,
        className: null == i ? void 0 : i(u),
        children: t(u)
      })
    }), n]
  })
}

function R(e) {
  let {
    invite: t
  } = e;
  if (null == t || !(0, T.JI)(t)) return null;
  let n = e => {
    if (null == t) return null;
    if (1 === e) return (0, r.jsx)(Z.X, {
      invite: t
    });
    return null
  };
  return (0, r.jsx)(P, {
    startAnimHeightPx: 0,
    innerStyle: () => O.guildInfoInner,
    ...e,
    children: e => n(e)
  })
}

function L(e) {
  let {
    invite: t
  } = e, n = n => {
    if (null == t) return (0, r.jsx)(v, {});
    switch (n) {
      case 1:
        return (0, r.jsx)(A.Z, {
          ...e,
          invite: t
        });
      case 2:
        return (0, r.jsx)(D, {
          ...e,
          invite: t
        });
      default:
        return (0, r.jsx)(v, {})
    }
  }, s = {
    1: O.inviteCardInner,
    2: O.inviteCardInnerError,
    0: O.inviteCardInnerLoading
  };
  return (0, r.jsx)(P, {
    startAnimHeightPx: 200,
    innerStyle: e => s[e],
    ...e,
    children: e => n(e)
  })
}

function b(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e, {
    guild: s
  } = null != t ? t : {}, i = {};
  if ((null == s ? void 0 : s.splash) != null) {
    let e = f.ZP.getGuildSplashURL({
      id: s.id,
      splash: s.splash
    });
    null != e && (i.backgroundImage = "url(".concat(e, ")"), i.backgroundSize = "cover")
  }
  return (0, r.jsxs)(E.ZP, {
    theme: x.BRd.DARK,
    className: O.splashBackground,
    style: i,
    contentClassName: O.centerAuthBoxContent,
    children: [(0, r.jsx)(L, {
      ...e,
      onAcceptInvite: n
    }), (0, r.jsx)(R, {
      ...e
    })]
  })
}

function M(e) {
  let {
    inviteKey: t,
    transitionTo: n
  } = e, s = (0, o.e7)([p.Z], () => p.Z.getInvite(t));
  return a.useEffect(() => {
    (0, I.e)("invite_mobile")
  }, []), a.useEffect(() => {
    null != s && s.state === x.r2o.RESOLVED && g.default.track(x.rMx.INVITE_VIEWED, {
      invite_code: t,
      friends_count: null == s ? void 0 : s.friends_count
    }, {
      flush: !0
    })
  }, [s, t]), (0, r.jsx)(b, {
    invite: s,
    onAcceptInvite: e => {
      ! function(e, t, n) {
        var s, i, r;
        null == e || e.preventDefault(), g.default.track(x.rMx.INVITE_APP_OPENED, {
          invite_code: (0, m.jX)(t),
          guild_id: null == n ? void 0 : null === (s = n.guild) || void 0 === s ? void 0 : s.id,
          channel_id: null == n ? void 0 : null === (i = n.channel) || void 0 === i ? void 0 : i.id,
          inviter_id: null == n ? void 0 : null === (r = n.inviter) || void 0 === r ? void 0 : r.id
        });
        let a = null != n && n.state !== x.r2o.EXPIRED && n.state !== x.r2o.BANNED ? t : void 0,
          l = h.default.getFingerprint(),
          o = null != l ? l : h.default.getId(),
          c = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
        u.Z.openApp(a, void 0, o, void 0, c)
      }(e, t, s)
    },
    transitionTo: n
  })
}