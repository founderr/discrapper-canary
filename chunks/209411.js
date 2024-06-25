n.d(t, {
  Z: function() {
    return g
  }
}), n(47120), n(773603);
var r = n(735250),
  s = n(470079),
  i = n(593473),
  a = n(266067),
  o = n(442837),
  l = n(893776),
  c = n(899742),
  u = n(743142),
  d = n(703656),
  h = n(314897),
  _ = n(781428),
  p = n(981631),
  f = n(176505);

function g(e) {
  let t = s.useCallback(t => {
      if (function(e) {
          var t;
          let n = (0, a.LX)(e, {
            path: p.Z5c.CHANNEL(":guildId", ":channelId")
          });
          return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === f.oC.ROLE_SUBSCRIPTIONS || !1
        }(t)) d.dL(t);
      else {
        var n;
        (null !== (n = e.transitionTo) && void 0 !== n ? n : d.uL)(t)
      }
    }, [e.transitionTo]),
    {
      isAuthenticated: n,
      loginStatus: g
    } = (0, o.cj)([h.default], () => ({
      isAuthenticated: h.default.isAuthenticated(),
      loginStatus: h.default.getLoginStatus()
    })),
    {
      location: E,
      redirectTo: m
    } = e,
    [I, A] = s.useState(n);

  function N(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      handoffSource: r
    } = e;
    (0, c.Yz)({
      handoffKey: t,
      handoffToken: n,
      handoffSource: r
    }), A(!1)
  }
  return (s.useEffect(() => {
    if (null != E) {
      let {
        handoff_key: e,
        handoff_token: t
      } = (0, i.parse)(E.search);
      if (null != e && null != t) {
        let n = null != m ? (0, u.L)(m) : void 0;
        I ? l.Z.logout(null).finally(() => {
          N({
            handoffKey: e,
            handoffToken: t,
            handoffSource: n
          })
        }) : N({
          handoffKey: e,
          handoffToken: t,
          handoffSource: n
        })
      }
    }
  }, []), I || g === p.u34.LOGGING_IN) ? (0, r.jsx)(_.q, {}) : (0, r.jsx)(_.Z, {
    ...e,
    transitionTo: t
  })
}