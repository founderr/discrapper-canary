"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(608787),
  o = n(442837),
  a = n(906467),
  l = n(358085),
  u = n(31336),
  _ = n(19759);
let c = (0, s.Un)({
  createPromise: () => Promise.all([n.e("96427"), n.e("77298"), n.e("23357"), n.e("23755"), n.e("19503"), n.e("89350"), n.e("39709"), n.e("80451"), n.e("3336"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("39612"), n.e("29549"), n.e("32776"), n.e("95900"), n.e("33053"), n.e("8016"), n.e("68136"), n.e("50654"), n.e("76540"), n.e("31605"), n.e("6380"), n.e("22646"), n.e("11250"), n.e("87624"), n.e("95854"), n.e("5528"), n.e("3746"), n.e("43331"), n.e("18101"), n.e("65840"), n.e("30419"), n.e("25788"), n.e("77172"), n.e("18824"), n.e("95393"), n.e("86977"), n.e("80229"), n.e("41662"), n.e("81539"), n.e("90508"), n.e("49508"), n.e("8739"), n.e("58286"), n.e("22173"), n.e("54535"), n.e("65371"), n.e("30243"), n.e("53917"), n.e("3084"), n.e("65392"), n.e("68241"), n.e("97458"), n.e("130"), n.e("36148"), n.e("62993"), n.e("30676"), n.e("14679"), n.e("36439"), n.e("30634"), n.e("13419")]).then(n.bind(n, 678717)),
  webpackId: 678717
});

function d(e) {
  let {
    mobile: t
  } = e, n = (0, o.e7)([a.Z], () => a.Z.isDeveloper), s = (0, o.e7)([_.Z], () => _.Z.displayTools), d = r.useCallback(e => {
    ((0, l.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && "KeyO" === e.code && (0, u.SO)()
  }, []);
  return (r.useLayoutEffect(() => (window.addEventListener("keydown", d), () => {
    window.removeEventListener("keydown", d)
  }), [d]), t ? n : s) ? (0, i.jsx)(c, {
    mobile: t
  }) : null
}