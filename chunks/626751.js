n.d(t, {
  Z: function() {
    return E
  }
});
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(430824),
  r = n(869782),
  o = n(630388),
  c = n(35125),
  u = n(523361),
  d = n(981631);

function E(e) {
  var t, n;
  let {
    channel: E,
    message: _
  } = e, I = null !== (n = null === (t = _.roleSubscriptionData) || void 0 === t ? void 0 : t.is_renewal) && void 0 !== n && n ? (0, u.Md)() : (0, u.Q8)(), T = E.guild_id, m = (0, l.e7)([a.Z], () => {
    var e;
    return null === (e = a.Z.getGuild(T)) || void 0 === e ? void 0 : e.systemChannelFlags
  }, [T]), N = null != m && (0, o.yE)(m, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), h = i.useMemo(() => (0, c._i)(E, _), [E, _]);
  return N ? null : (0, s.jsx)(r.Z, {
    channel: E,
    message: _,
    buttonLabels: I,
    stickers: u.HG,
    event: d.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
    eventProperties: h
  })
}