"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007");
var s, a, l = n("37983"),
  i = n("884691"),
  r = n("146606"),
  u = n("446674"),
  o = n("77078"),
  d = n("970728"),
  c = n("724853"),
  f = n("731898"),
  E = n("970366"),
  _ = n("271938"),
  I = n("337543"),
  h = n("124969"),
  p = n("599110"),
  T = n("315102"),
  N = n("449008"),
  m = n("9294"),
  A = n("800118"),
  g = n("243961"),
  S = n("570683"),
  v = n("49111"),
  O = n("782340"),
  C = n("46121");

function R() {
  return (0, l.jsx)("div", {
    className: C.centerFlex,
    children: (0, l.jsx)(o.Spinner, {})
  })
}(a = s || (s = {}))[a.LOADING = 0] = "LOADING", a[a.DETAILS = 1] = "DETAILS", a[a.ERROR = 2] = "ERROR";
let L = e => {
  let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
  if (null == e || null == e.state || t) return 0;
  let n = e.state;
  switch (n) {
    case v.InviteStates.RESOLVED:
    case v.InviteStates.ACCEPTED:
    case v.InviteStates.APP_NOT_OPENED:
    case v.InviteStates.APP_OPENED:
    case v.InviteStates.ACCEPTING:
    case v.InviteStates.APP_OPENING:
      return 1;
    case v.InviteStates.EXPIRED:
    case v.InviteStates.BANNED:
    case v.InviteStates.ERROR:
      return 2;
    case v.InviteStates.RESOLVING:
      return 0;
    default:
      (0, N.assertNever)(n)
  }
};

function D(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e;
  if ((null == t ? void 0 : t.state) === v.InviteStates.BANNED) return (0, l.jsx)(c.InvalidMobileCodedLinkInner, {
    text: O.default.Messages.AUTH_BANNED_INVITE_BODY,
    buttonCta: O.default.Messages.INVITE_INVALID_CTA,
    onClick: n
  });
  return (0, l.jsx)(c.InvalidMobileCodedLinkInner, {
    text: O.default.Messages.INVITE_INVALID_ERROR,
    buttonCta: O.default.Messages.INVITE_INVALID_CTA,
    onClick: n
  })
}

function x(e) {
  let {
    children: t,
    cardChildren: n,
    startAnimHeightPx: s,
    innerStyle: a,
    ...u
  } = e, {
    invite: o
  } = u, [d, c] = i.useState(L(o)), {
    ref: E,
    height: _
  } = (0, f.default)(), I = (0, r.useSpring)({
    height: null != _ && 0 !== _ ? "".concat(_, "px") : "".concat(s, "px"),
    config: r.config.stiff
  });
  return i.useEffect(() => {
    let e = L(o);
    e !== d && c(e)
  }, [o, d]), (0, l.jsxs)(r.animated.div, {
    className: C.inviteCard,
    style: I,
    children: [(0, l.jsx)(r.animated.div, {
      className: C.inviteChildContainer,
      style: I,
      children: (0, l.jsx)("section", {
        ref: E,
        className: null == a ? void 0 : a(d),
        children: t(d)
      })
    }), n]
  })
}

function M(e) {
  let {
    invite: t
  } = e;
  if (null == t || !(0, A.isEnhancedCommunityInvite)(t)) return null;
  let n = e => {
    if (null == t) return null;
    if (1 === e) return (0, l.jsx)(S.GuildInfoCard, {
      invite: t
    });
    return null
  };
  return (0, l.jsx)(x, {
    startAnimHeightPx: 0,
    innerStyle: () => C.guildInfoInner,
    ...e,
    children: e => n(e)
  })
}

function P(e) {
  let {
    invite: t
  } = e, n = n => {
    if (null == t) return (0, l.jsx)(R, {});
    switch (n) {
      case 1:
        return (0, l.jsx)(g.default, {
          ...e,
          invite: t
        });
      case 2:
        return (0, l.jsx)(D, {
          ...e,
          invite: t
        });
      default:
        return (0, l.jsx)(R, {})
    }
  }, s = {
    1: C.inviteCardInner,
    2: C.inviteCardInnerError,
    0: C.inviteCardInnerLoading
  };
  return (0, l.jsx)(x, {
    startAnimHeightPx: 200,
    innerStyle: e => s[e],
    ...e,
    children: e => n(e)
  })
}

function U(e) {
  let {
    invite: t,
    onAcceptInvite: n
  } = e, {
    guild: s
  } = null != t ? t : {}, a = {};
  if ((null == s ? void 0 : s.splash) != null) {
    let e = T.default.getGuildSplashURL({
      id: s.id,
      splash: s.splash
    });
    null != e && (a.backgroundImage = "url(".concat(e, ")"), a.backgroundSize = "cover")
  }
  return (0, l.jsxs)(h.default, {
    theme: v.ThemeTypes.DARK,
    className: C.splashBackground,
    style: a,
    contentClassName: C.centerAuthBoxContent,
    children: [(0, l.jsx)(P, {
      ...e,
      onAcceptInvite: n
    }), (0, l.jsx)(M, {
      ...e
    })]
  })
}

function b(e) {
  let {
    inviteKey: t,
    transitionTo: n
  } = e, s = (0, u.useStateFromStores)([I.default], () => I.default.getInvite(t));
  return i.useEffect(() => {
    (0, E.trackAppUIViewed)("invite_mobile")
  }, []), i.useEffect(() => {
    null != s && s.state === v.InviteStates.RESOLVED && p.default.track(v.AnalyticEvents.INVITE_VIEWED, {
      invite_code: t,
      friends_count: null == s ? void 0 : s.friends_count
    }, {
      flush: !0
    })
  }, [s, t]), (0, l.jsx)(U, {
    invite: s,
    onAcceptInvite: e => {
      ! function(e, t, n) {
        var s, a, l;
        null == e || e.preventDefault(), p.default.track(v.AnalyticEvents.INVITE_APP_OPENED, {
          invite_code: (0, m.parseInviteCodeFromInviteKey)(t),
          guild_id: null == n ? void 0 : null === (s = n.guild) || void 0 === s ? void 0 : s.id,
          channel_id: null == n ? void 0 : null === (a = n.channel) || void 0 === a ? void 0 : a.id,
          inviter_id: null == n ? void 0 : null === (l = n.inviter) || void 0 === l ? void 0 : l.id
        });
        let i = null != n && n.state !== v.InviteStates.EXPIRED && n.state !== v.InviteStates.BANNED ? t : void 0,
          r = _.default.getFingerprint(),
          u = null != r ? r : _.default.getId(),
          o = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
        d.default.openApp(i, void 0, u, void 0, o)
      }(e, t, s)
    },
    transitionTo: n
  })
}