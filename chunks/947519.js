"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("608787"),
  a = n("442837"),
  o = n("906467"),
  l = n("358085"),
  u = n("31336"),
  d = n("19759");
let _ = (0, s.makeLazy)({
  createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("40326"), n.e("23357"), n.e("70716"), n.e("23755"), n.e("30386"), n.e("80301"), n.e("80451"), n.e("28020"), n.e("32948"), n.e("20703"), n.e("29549"), n.e("15972"), n.e("58625"), n.e("61247"), n.e("6416"), n.e("63438"), n.e("58600"), n.e("31605"), n.e("33053"), n.e("56630"), n.e("6380"), n.e("11250"), n.e("57878"), n.e("49146"), n.e("4970"), n.e("77172"), n.e("95393"), n.e("67535"), n.e("86977"), n.e("18101"), n.e("17938"), n.e("81539"), n.e("58286"), n.e("76540"), n.e("8739"), n.e("41947"), n.e("30243"), n.e("3084"), n.e("62809"), n.e("38779"), n.e("29042"), n.e("59743"), n.e("65866"), n.e("23404"), n.e("99365"), n.e("97188"), n.e("15357"), n.e("10655"), n.e("3682"), n.e("18824"), n.e("88331"), n.e("49508"), n.e("5528"), n.e("9737"), n.e("89333"), n.e("27385"), n.e("30634"), n.e("91354"), n.e("55981"), n.e("54807"), n.e("14171")]).then(n.bind(n, "678717")),
  webpackId: "678717"
});

function c(e) {
  let {
    mobile: t
  } = e, n = (0, a.useStateFromStores)([o.default], () => o.default.isDeveloper), s = (0, a.useStateFromStores)([d.default], () => d.default.displayTools), c = r.useCallback(e => {
    ((0, l.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && "KeyO" === e.code && (0, u.toggleDisplayDevTools)()
  }, []);
  return (r.useLayoutEffect(() => (window.addEventListener("keydown", c), () => {
    window.removeEventListener("keydown", c)
  }), [c]), t ? n : s) ? (0, i.jsx)(_, {
    mobile: t
  }) : null
}