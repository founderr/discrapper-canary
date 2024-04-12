"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("430824"),
  r = n("869782"),
  o = n("630388"),
  u = n("35125"),
  d = n("523361"),
  c = n("981631");

function E(e) {
  var t, n;
  let {
    channel: E,
    message: f
  } = e, _ = null !== (n = null === (t = f.roleSubscriptionData) || void 0 === t ? void 0 : t.is_renewal) && void 0 !== n && n ? (0, d.getRenewButtonLabels)() : (0, d.getJoinButtonLabels)(), T = E.guild_id, I = (0, l.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getGuild(T)) || void 0 === e ? void 0 : e.systemChannelFlags
  }, [T]), m = null != I && (0, o.hasFlag)(I, c.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), p = a.useMemo(() => (0, u.getRoleSubscriptionPurchaseSystemMessageEventProperties)(E, f), [E, f]);
  return m ? null : (0, s.jsx)(r.default, {
    channel: E,
    message: f,
    buttonLabels: _,
    stickers: d.STICKERS,
    event: c.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
    eventProperties: p
  })
}