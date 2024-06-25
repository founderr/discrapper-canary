"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(424602),
  a = n(827498),
  l = n(98880),
  u = n(772606),
  _ = n(838246);

function c(e) {
  let {
    channel: t,
    entrypoint: n,
    title: c,
    look: d,
    items: E
  } = e, {
    clickOnHomeActivityOpensAppDetail: I
  } = o.m1.getCurrentConfig({
    location: "AppLauncherApplicationListViewScreen"
  }, {
    autoTrackExposure: !1
  }), T = r.useMemo(() => n === a._b.TEXT || I ? l.kA : l.qR, [I, n]);
  return (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsxs)("div", {
      className: _.header,
      children: [(0, i.jsx)(u.Z, {
        className: _.backButton
      }), (0, i.jsx)(s.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: c
      })]
    }), (0, i.jsx)(s.Scroller, {
      children: (0, i.jsx)("div", {
        className: _.appGrid,
        children: E.map(e => {
          let {
            application: n,
            isPartner: r
          } = e;
          return (0, i.jsx)(T, {
            channel: t,
            application: n,
            look: d,
            isPartner: r
          }, n.id)
        })
      })
    })]
  })
}