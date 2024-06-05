"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var n = l("735250"),
  a = l("470079"),
  s = l("481060"),
  i = l("6048"),
  r = l("932776"),
  o = l("680298"),
  d = l("289465"),
  u = l("689938"),
  c = l("869245");

function f(e) {
  let {
    applicationIcon: t,
    applicationName: l,
    canNavigate: f,
    guildId: I
  } = e, {
    results: m,
    query: T,
    setQuery: E,
    unfilteredCount: N
  } = (0, r.useIntegrationPermissionCommandSearch)();
  return (0, n.jsx)(a.Fragment, {
    children: null != m && N > 0 ? (0, n.jsx)(d.default, {
      bar: (0, n.jsx)(i.default, {
        query: T,
        onChange: E,
        onClear: () => E("")
      }),
      inModal: !1,
      title: u.default.Messages.COMMANDS,
      children: m.map((e, i) => (0, n.jsxs)(a.Fragment, {
        children: [(0, n.jsx)(o.default, {
          applicationIcon: t,
          applicationName: l,
          canNavigate: f,
          command: e,
          guildId: I
        }), i < m.length - 1 ? (0, n.jsx)(s.FormDivider, {}) : null]
      }, e.id))
    }) : (0, n.jsx)(s.Card, {
      className: c.emptyCard,
      editable: !0,
      children: (0, n.jsx)(s.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: u.default.Messages.INTEGRATIONS_APPLICATION_NO_COMMANDS
      })
    })
  })
}