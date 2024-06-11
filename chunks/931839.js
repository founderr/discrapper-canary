"use strict";
a.r(s), a.d(s, {
  Tab: function() {
    return l
  },
  default: function() {
    return u
  }
});
var t, l, i = a("735250");
a("470079");
var n = a("120356"),
  d = a.n(n),
  r = a("481060"),
  c = a("689938"),
  o = a("251476");

function u(e) {
  let {
    selectedTab: s,
    onClick: a,
    submitted: t
  } = e;
  return (0, i.jsxs)("div", {
    className: o.tabs,
    children: [(0, i.jsx)(h, {
      tab: 0,
      selectedTab: s,
      label: c.default.Messages.NOTIF_MIGRATION_INTRO_TAB,
      disabled: t,
      onClick: a
    }), (0, i.jsx)(h, {
      tab: 1,
      selectedTab: s,
      label: c.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TAB,
      disabled: t,
      onClick: a
    }), (0, i.jsx)(h, {
      tab: 2,
      selectedTab: s,
      label: c.default.Messages.NOTIF_MIGRATION_TIPS_TAB,
      disabled: !t,
      onClick: a
    })]
  })
}

function h(e) {
  let {
    tab: s,
    selectedTab: a,
    label: t,
    disabled: l,
    onClick: n
  } = e;
  return l ? (0, i.jsxs)("div", {
    className: d()(o.tab, {
      [o.current]: a === s
    }),
    children: [(0, i.jsx)("div", {
      className: o.progressBar
    }), (0, i.jsx)(r.Text, {
      variant: "text-xs/medium",
      color: a === s ? "text-brand" : "text-muted",
      children: t
    })]
  }) : (0, i.jsxs)(r.Clickable, {
    onClick: () => n(s),
    className: d()(o.tab, {
      [o.current]: a === s
    }),
    children: [(0, i.jsx)("div", {
      className: o.progressBar
    }), (0, i.jsx)(r.Text, {
      variant: "text-xs/medium",
      color: a === s ? "text-brand" : "text-muted",
      children: t
    })]
  })
}(t = l || (l = {}))[t.Intro = 0] = "Intro", t[t.Customize = 1] = "Customize", t[t.Tips = 2] = "Tips"