var s, i, l, a, r = n(913527),
  o = n.n(r),
  c = n(442837),
  u = n(570140),
  d = n(255078),
  E = n(594174),
  _ = n(74538);
let I = !1;
class T extends(a = c.ZP.Store) {
  shouldShowReactivateNotice() {
    let e = E.default.getCurrentUser();
    return !(0, _.I5)(e) && I
  }
}
l = "SubscriptionRemindersStore", (i = "displayName") in(s = T) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new T(u.Z, {
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscription: t
    } = e;
    if (null != t) {
      var n;
      let e = d.Z.createFromServer(t);
      if (null == (0, _.Af)(e) || (null === (n = e.metadata) || void 0 === n ? void 0 : n.ended_at) == null) return;
      let s = o()(e.metadata.ended_at);
      o()().isBetween(s.clone().add(4, "days"), s.clone().add(11, "days")) && (I = !0)
    }
  }
})