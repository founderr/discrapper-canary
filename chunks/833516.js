"use strict";
n.r(t), n.d(t, {
  hasUserTrialOfferExpired: function() {
    return u
  },
  useTrialOffer: function() {
    return c
  }
}), n("222007");
var i = n("884691"),
  r = n("446674"),
  l = n("862337"),
  s = n("697218"),
  a = n("340412"),
  o = n("719923");

function u(e) {
  return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
}

function c(e) {
  let t = (0, r.useStateFromStores)([a.default], () => a.default.getUserTrialOffer(e)),
    [n, c] = i.useState(u(t)),
    d = (0, r.useStateFromStores)([s.default], () => (0, o.isPremium)(s.default.getCurrentUser()));
  return i.useEffect(() => {
    if (null != t && null != t.expires_at) {
      let e = new l.Timeout,
        i = () => {
          let r = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
          null == e || e.start(r, () => {
            !n && u(t) ? c(!0) : i()
          })
        };
      return i(), () => e.stop()
    }
  }, [n, t]), n || d ? null : t
}