"use strict";
n.r(t), n.d(t, {
  useAppStorefrontAvailable: function() {
    return o
  }
});
var i = n("442837"),
  r = n("264043"),
  s = n("812206"),
  a = n("621853");

function o(e) {
  return (0, i.useStateFromStores)([s.default, a.default, r.default], () => {
    var t, n, i, o, l, u, d;
    return null !== (d = null !== (u = null !== (l = null === (t = s.default.getApplication(e)) || void 0 === t ? void 0 : t.storefront_available) && void 0 !== l ? l : null === (i = a.default.getUserProfile(e)) || void 0 === i ? void 0 : null === (n = i.application) || void 0 === n ? void 0 : n.storefront_available) && void 0 !== u ? u : null === (o = r.default.getApplication(e)) || void 0 === o ? void 0 : o.storefront_available) && void 0 !== d && d
  }, [e])
}