n.d(t, {
  Z: function() {
    return f
  }
}), n(47120), n(773603);
var s = n(735250),
  r = n(470079),
  i = n(593473),
  a = n(266067),
  o = n(442837),
  l = n(893776),
  c = n(899742),
  u = n(743142),
  d = n(703656),
  h = n(314897),
  E = n(781428),
  _ = n(981631),
  g = n(176505);

function f(e) {
  let t = r.useCallback(t => {
      if (function(e) {
          var t;
          let n = (0, a.LX)(e, {
            path: _.Z5c.CHANNEL(":guildId", ":channelId")
          });
          return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === g.oC.ROLE_SUBSCRIPTIONS || !1
        }(t)) d.dL(t);
      else {
        var n;
        (null !== (n = e.transitionTo) && void 0 !== n ? n : d.uL)(t)
      }
    }, [e.transitionTo]),
    {
      isAuthenticated: n,
      loginStatus: f
    } = (0, o.cj)([h.default], () => ({
      isAuthenticated: h.default.isAuthenticated(),
      loginStatus: h.default.getLoginStatus()
    })),
    {
      location: p,
      redirectTo: m
    } = e,
    [N, I] = r.useState(n);

  function A(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      handoffSource: s
    } = e;
    (0, c.Yz)({
      handoffKey: t,
      handoffToken: n,
      handoffSource: s
    }), I(!1)
  }
  return (r.useEffect(() => {
    if (null != p) {
      let {
        handoff_key: e,
        handoff_token: t
      } = (0, i.parse)(p.search);
      if (null != e && null != t) {
        let n = null != m ? (0, u.L)(m) : void 0;
        N ? l.Z.logout(null).finally(() => {
          A({
            handoffKey: e,
            handoffToken: t,
            handoffSource: n
          })
        }) : A({
          handoffKey: e,
          handoffToken: t,
          handoffSource: n
        })
      }
    }
  }, []), N || f === _.u34.LOGGING_IN) ? (0, s.jsx)(E.q, {}) : (0, s.jsx)(E.Z, {
    ...e,
    transitionTo: t
  })
}