"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(895924),
  a = n(424602),
  l = n(827498),
  u = n(98880),
  _ = n(772606),
  c = n(838246);

function d(e) {
  let {
    channel: t,
    entrypoint: n,
    title: d,
    look: E,
    items: I,
    sectionName: T
  } = e, {
    clickOnHomeActivityOpensAppDetail: h
  } = a.m1.getCurrentConfig({
    location: "AppLauncherApplicationListViewScreen"
  }, {
    autoTrackExposure: !1
  }), f = r.useMemo(() => n === l._b.TEXT || h ? u.kA : u.qR, [h, n]);
  return (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsxs)("div", {
      className: c.header,
      children: [(0, i.jsx)(_.Z, {
        className: c.backButton
      }), (0, i.jsx)(s.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: d
      })]
    }), (0, i.jsx)(s.Scroller, {
      children: (0, i.jsx)("div", {
        className: c.appGrid,
        children: I.map(e => {
          let {
            application: n,
            isPartner: r
          } = e;
          return (0, i.jsx)(f, {
            channel: t,
            application: n,
            look: E,
            isPartner: r,
            sectionName: T,
            location: o.Vh.APP_LAUNCHER_LIST_VIEW_ALL
          }, n.id)
        })
      })
    })]
  })
}