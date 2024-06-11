"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("993365"),
  a = n("481060"),
  o = n("695676"),
  l = n("38658");

function u(e) {
  let {
    shelfItem: t
  } = e, {
    pushHistory: n
  } = (0, o.useAppLauncherHistoryContext)(), s = r.useCallback(e => {
    e.stopPropagation(), n({
      type: o.HistoryItemType.APPLICATION,
      application: t.application
    })
  }, [n, t.application]);
  return (0, i.jsx)(a.Clickable, {
    className: l.applicationDetails,
    onClick: s,
    children: (0, i.jsx)(a.Heading, {
      variant: "heading-md/medium",
      children: t.application.name
    })
  })
}

function d(e) {
  let {
    channel: t,
    shelfItems: n
  } = e, a = r.useMemo(() => n.map(e => (0, i.jsx)(u, {
    channel: t,
    shelfItem: e
  }, e.application.id)), [t, n]);
  return 0 === n.length ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(s.Text, {
      className: l.listHeading,
      variant: "text-sm/semibold",
      children: "Activities"
    }), (0, i.jsx)("ul", {
      className: l.applicationList,
      children: a
    })]
  })
}