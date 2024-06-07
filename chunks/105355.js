"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("993365"),
  a = n("481060"),
  o = n("826298"),
  l = n("240991"),
  u = n("695676"),
  d = n("38658");

function _(e) {
  var t;
  let {
    channel: n,
    applicationSection: _
  } = e, {
    pushHistory: c
  } = (0, u.useAppLauncherHistoryContext)(), E = (0, o.getIconComponent)(_), I = r.useMemo(() => {
    var e, t;
    return (0, l.parseBioReactWithoutScrolling)(null !== (t = null === (e = _.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
  }, [null === (t = _.application) || void 0 === t ? void 0 : t.description]), T = r.useCallback(e => {
    e.stopPropagation(), c({
      type: u.HistoryItemType.APPLICATION,
      application: _.application
    })
  }, [_, c]);
  return (0, i.jsxs)("li", {
    className: d.application,
    onClick: T,
    children: [(0, i.jsx)(E, {
      className: d.applicationIcon,
      channel: n,
      section: _,
      width: 32,
      height: 32
    }), (0, i.jsxs)("div", {
      className: d.applicationDetails,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-md/medium",
        children: _.name
      }), (0, i.jsx)(s.Text, {
        className: d.applicationDescription,
        variant: "text-xs/medium",
        color: "text-muted",
        lineClamp: 1,
        children: I
      })]
    })]
  })
}

function c(e) {
  let {
    channel: t,
    applications: n
  } = e, a = n.slice(0, 50), o = r.useMemo(() => a.map(e => (0, i.jsx)(_, {
    channel: t,
    applicationSection: e
  }, e.id)), [t, a]);
  return 0 === a.length ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(s.Text, {
      className: d.listHeading,
      variant: "text-sm/semibold",
      children: "Server Apps"
    }), (0, i.jsx)("ul", {
      className: d.applicationList,
      children: o
    })]
  })
}