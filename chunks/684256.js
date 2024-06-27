t.d(n, {
  Z: function() {
    return m
  }
});
var i = t(735250),
  l = t(470079),
  a = t(481060),
  r = t(895924),
  s = t(424602),
  o = t(827498),
  c = t(98880),
  u = t(772606),
  d = t(838246);

function m(e) {
  let {
    channel: n,
    entrypoint: t,
    title: m,
    look: p,
    items: E,
    sectionName: h
  } = e, {
    clickOnHomeActivityOpensAppDetail: _
  } = s.m1.getCurrentConfig({
    location: "AppLauncherApplicationListViewScreen"
  }, {
    autoTrackExposure: !1
  }), N = l.useMemo(() => t === o._b.TEXT || _ ? c.kA : c.qR, [_, t]);
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsxs)("div", {
      className: d.header,
      children: [(0, i.jsx)(u.Z, {
        className: d.backButton
      }), (0, i.jsx)(a.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: m
      })]
    }), (0, i.jsx)(a.Scroller, {
      children: (0, i.jsx)("div", {
        className: d.appGrid,
        children: E.map(e => {
          let {
            application: t,
            isPartner: l
          } = e;
          return (0, i.jsx)(N, {
            channel: n,
            application: t,
            look: p,
            isPartner: l,
            sectionName: h,
            location: r.Vh.APP_LAUNCHER_LIST_VIEW_ALL
          }, t.id)
        })
      })
    })]
  })
}