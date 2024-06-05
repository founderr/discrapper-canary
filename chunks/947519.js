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
  createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("40326"), n.e("23357"), n.e("49368"), n.e("70716"), n.e("23755"), n.e("30386"), n.e("80301"), n.e("80451"), n.e("22578"), n.e("32948"), n.e("3336"), n.e("29549"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("31605"), n.e("32776"), n.e("95900"), n.e("56630"), n.e("6380"), n.e("11250"), n.e("57878"), n.e("33053"), n.e("77172"), n.e("95393"), n.e("88390"), n.e("8016"), n.e("46136"), n.e("4970"), n.e("81539"), n.e("8739"), n.e("58286"), n.e("86977"), n.e("18101"), n.e("3084"), n.e("30243"), n.e("68136"), n.e("14767"), n.e("75837"), n.e("89585"), n.e("7620"), n.e("69563"), n.e("41947"), n.e("29042"), n.e("76540"), n.e("22646"), n.e("4934"), n.e("52000"), n.e("99365"), n.e("87624"), n.e("64403"), n.e("90779"), n.e("84184"), n.e("3682"), n.e("43331"), n.e("18824"), n.e("30419"), n.e("88331"), n.e("35522"), n.e("49508"), n.e("5528"), n.e("34446"), n.e("27385"), n.e("30634"), n.e("91354"), n.e("66153"), n.e("54807"), n.e("73989")]).then(n.bind(n, "678717")),
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