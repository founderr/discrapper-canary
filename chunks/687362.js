s.d(t, {
  Z: function() {
    return _
  },
  v: function() {
    return u
  }
});
var n = s(704215),
  a = s(605236),
  i = s(391110),
  r = s(75077),
  l = s(595878),
  o = s(314684),
  c = s(735825),
  E = s(689938);

function _() {
  let e = (0, o.yQ)(),
    t = (0, l.c)({
      location: i.MQ.HOME
    });
  if (null != e && !!t) return {
    title: (0, r.k3)(e.nitroTenureStatus),
    subtitle: (0, r.vZ)(e.nitroTenureStatus, null == e ? void 0 : e.tenureRewardSkuId),
    description: (0, r.BS)(e.nitroTenureStatus),
    ctaDescription: (0, r.t2)(e.nitroTenureStatus, e.redeemableInDays),
    pillText: e.nitroTenureStatus === c.EB.PENDING ? E.Z.Messages.REWARD.toLocaleUpperCase() : void 0,
    dismissibleContentType: e.nitroTenureStatus === c.EB.REDEEMABLE ? n.z.TENURE_REWARD_REDEEMABLE_CONFETTI : void 0
  }
}

function u(e) {
  return (null == e ? void 0 : e.showNotification) === !0 && (0, o.rM)(e).some(e => !(0, a.un)(e))
}