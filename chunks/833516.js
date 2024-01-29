"use strict";
n.r(t), n.d(t, {
  hasUserTrialOfferExpired: function() {
    return u
  },
  useTrialOffer: function() {
    return d
  }
}), n("222007");
var i = n("884691"),
  l = n("446674"),
  r = n("862337"),
  s = n("697218"),
  a = n("340412"),
  o = n("719923");

function u(e) {
  return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
}

function d(e) {
  let t = (0, l.useStateFromStores)([a.default], () => a.default.getUserTrialOffer(e)),
    [n, d] = i.useState(u(t)),
    c = (0, l.useStateFromStores)([s.default], () => (0, o.isPremium)(s.default.getCurrentUser()));
  return i.useEffect(() => {
    if (null != t && null != t.expires_at) {
      let e = new r.Timeout,
        i = () => {
          let l = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
          null == e || e.start(l, () => {
            !n && u(t) ? d(!0) : i()
          })
        };
      return i(), () => e.stop()
    }
  }, [n, t]), n || c ? null : t
}