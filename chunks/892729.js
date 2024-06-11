"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("470079"),
  n = s("442837"),
  i = s("355467"),
  l = s("78839"),
  r = s("261744"),
  o = s("293810");
let d = [];

function u() {
  let {
    ensureFresh: e = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, r.default)() === o.UserGuildRoleSubscriptionRelationship.SUBSCRIBED, s = (0, n.useStateFromStores)([l.default], () => l.default.getActiveGuildSubscriptions()), u = a.useRef(!1);
  return a.useEffect(() => {
    (function(e) {
      var t;
      let {
        ensureFresh: s,
        hasFetched: a,
        hasRoleSubscriptions: n
      } = e, i = l.default.getActiveGuildSubscriptions();
      return (null !== (t = null == i ? void 0 : i.length) && void 0 !== t ? t : 0) === 0 && !!n || !!s && !a || !a && !l.default.hasFetchedSubscriptions()
    })({
      ensureFresh: e,
      hasRoleSubscriptions: t,
      hasFetched: u.current
    }) && (u.current = !0, i.fetchSubscriptions())
  }, [e, t]), null != s ? s : d
}