t.d(s, {
  Z: function() {
    return E
  },
  v: function() {
    return u
  }
});
var n = t(704215),
  a = t(605236),
  r = t(391110),
  i = t(75077),
  l = t(595878),
  o = t(314684),
  _ = t(735825),
  c = t(689938);

function E() {
  let e = (0, o.yQ)(),
    s = (0, l.c)({
      location: r.MQ.HOME
    });
  if (null != e && !!s) return {
    title: (0, i.k3)(e.nitroTenureStatus),
    subtitle: (0, i.vZ)(e.nitroTenureStatus, null == e ? void 0 : e.tenureRewardSkuId),
    description: (0, i.BS)(e.nitroTenureStatus),
    ctaDescription: (0, i.t2)(e.nitroTenureStatus, e.redeemableInDays),
    pillText: e.nitroTenureStatus === _.EB.PENDING ? c.Z.Messages.REWARD.toLocaleUpperCase() : void 0,
    dismissibleContentType: e.nitroTenureStatus === _.EB.REDEEMABLE ? n.z.TENURE_REWARD_REDEEMABLE_CONFETTI : void 0
  }
}

function u(e) {
  return (null == e ? void 0 : e.showNotification) === !0 && (0, o.rM)(e).some(e => !(0, a.un)(e))
}