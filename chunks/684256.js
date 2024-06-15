"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250"),
  r = n("481060"),
  s = n("695676"),
  a = n("98880"),
  o = n("772606"),
  l = n("274017");

function u(e) {
  let {
    title: t,
    look: n,
    items: u
  } = e, {
    pushHistory: d
  } = (0, s.useAppLauncherHistoryContext)();
  return (0, i.jsxs)("div", {
    className: l.container,
    children: [(0, i.jsxs)("div", {
      className: l.header,
      children: [(0, i.jsx)(o.default, {
        className: l.backButton
      }), (0, i.jsx)(r.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: t
      })]
    }), (0, i.jsx)(r.Scroller, {
      children: (0, i.jsx)("div", {
        className: l.appGrid,
        children: u.map(e => {
          let {
            application: t,
            isPartner: r
          } = e;
          return (0, i.jsx)(a.default, {
            application: t,
            look: n,
            onClick: e => {
              e.stopPropagation(), d({
                type: s.HistoryItemType.APPLICATION,
                application: t
              })
            },
            isPartner: r
          }, t.id)
        })
      })
    })]
  })
}