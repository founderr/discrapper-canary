"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var n = l("735250"),
  a = l("470079"),
  s = l("481060"),
  i = l("932776"),
  r = l("680298"),
  o = l("289465"),
  d = l("689938"),
  u = l("869245");

function c(e) {
  let {
    applicationIcon: t,
    applicationName: l,
    canNavigate: c,
    guildId: f
  } = e, {
    results: I,
    query: m,
    setQuery: T,
    unfilteredCount: E
  } = (0, i.useIntegrationPermissionCommandSearch)();
  return (0, n.jsx)(a.Fragment, {
    children: null != I && E > 0 ? (0, n.jsx)(o.default, {
      bar: (0, n.jsx)(s.SearchBar, {
        query: m,
        onChange: T,
        onClear: () => T("")
      }),
      inModal: !1,
      title: d.default.Messages.COMMANDS,
      children: I.map((e, i) => (0, n.jsxs)(a.Fragment, {
        children: [(0, n.jsx)(r.default, {
          applicationIcon: t,
          applicationName: l,
          canNavigate: c,
          command: e,
          guildId: f
        }), i < I.length - 1 ? (0, n.jsx)(s.FormDivider, {}) : null]
      }, e.id))
    }) : (0, n.jsx)(s.Card, {
      className: u.emptyCard,
      editable: !0,
      children: (0, n.jsx)(s.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: d.default.Messages.INTEGRATIONS_APPLICATION_NO_COMMANDS
      })
    })
  })
}