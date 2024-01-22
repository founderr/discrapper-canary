"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007"), n("506083");
var s = n("37983"),
  a = n("884691"),
  l = n("730290"),
  r = n("803182"),
  i = n("446674"),
  o = n("437822"),
  u = n("697796"),
  d = n("524824"),
  c = n("393414"),
  E = n("271938"),
  f = n("291850"),
  h = n("49111"),
  _ = n("724210");

function g(e) {
  let t = a.useCallback(t => {
      if (function(e) {
          var t;
          let n = (0, r.matchPath)(e, {
            path: h.Routes.CHANNEL(":guildId", ":channelId")
          });
          return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === _.StaticChannelRoute.ROLE_SUBSCRIPTIONS || !1
        }(t)) c.replaceWith(t);
      else {
        var n;
        (null !== (n = e.transitionTo) && void 0 !== n ? n : c.transitionTo)(t)
      }
    }, [e.transitionTo]),
    {
      isAuthenticated: n,
      loginStatus: g
    } = (0, i.useStateFromStoresObject)([E.default], () => ({
      isAuthenticated: E.default.isAuthenticated(),
      loginStatus: E.default.getLoginStatus()
    })),
    {
      location: m,
      redirectTo: p
    } = e,
    [A, T] = a.useState(n);

  function R(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      handoffSource: s
    } = e;
    (0, u.handoffFromApp)({
      handoffKey: t,
      handoffToken: n,
      handoffSource: s
    }), T(!1)
  }
  return (a.useEffect(() => {
    if (null != m) {
      let {
        handoff_key: e,
        handoff_token: t
      } = (0, l.parse)(m.search);
      if (null != e && null != t) {
        let n = null != p ? (0, d.getLoginHandoffSourceFromRedirectTo)(p) : void 0;
        A ? o.default.logout(null).finally(() => {
          R({
            handoffKey: e,
            handoffToken: t,
            handoffSource: n
          })
        }) : R({
          handoffKey: e,
          handoffToken: t,
          handoffSource: n
        })
      }
    }
  }, []), A || g === h.LoginStates.LOGGING_IN) ? (0, s.jsx)(f.LoginSpinner, {}) : (0, s.jsx)(f.default, {
    ...e,
    transitionTo: t
  })
}