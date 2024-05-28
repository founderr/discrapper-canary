"use strict";
n.r(t), n.d(t, {
  PerksDiscoverabilityMarketingMomentWhatsNewBadge: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var s = n("734741"),
  l = n("673591"),
  i = n("689938");
let r = () => {
  let e = (0, s.useShouldShowAppStylesBadge)(),
    t = i.default.Messages.NEW;
  return e && (t = i.default.Messages.PREMIUM_MARKETING_WHATS_NEW_SO_NEW_BADGE), (0, a.jsx)(l.default, {
    copy: t
  })
};
t.default = e => {
  let {
    copy: t
  } = e;
  return (0, a.jsx)(l.default, {
    copy: null != t ? t : i.default.Messages.NEW
  })
}