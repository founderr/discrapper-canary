"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var n = l("735250"),
  a = l("470079"),
  s = l("481060"),
  i = l("139387"),
  r = l("726542"),
  o = l("434404"),
  d = l("486199"),
  u = l("13051"),
  c = l("404638");

function f(e) {
  let {
    integrations: t,
    editedIntegration: l,
    guild: f,
    platformType: I,
    labelText: m,
    descriptionText: T,
    helpText: E,
    canNavigate: N
  } = e, _ = r.default.get(I), S = a.useCallback(async e => {
    N() && (await o.default.enableIntegration(f.id, e.type, e.id), i.default.startEditingIntegration(e.id))
  }, [N, f.id]), h = a.useCallback(e => {
    N() && (e.id === (null == l ? void 0 : l.id) && i.default.stopEditingIntegration(), o.default.disableIntegration(f.id, e.id))
  }, [N, l, f.id]), g = a.useCallback(e => {
    N() && (e === (null == l ? void 0 : l.id) ? i.default.stopEditingIntegration() : i.default.startEditingIntegration(e))
  }, [N, l]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(d.default, {
      name: m,
      icon: null == _ ? void 0 : _.icon.whiteSVG,
      iconBackgroundColor: null == _ ? void 0 : _.color,
      iconClassName: c.platformIcon,
      description: T,
      isHeader: !0
    }), (0, n.jsx)(s.FormDivider, {
      className: c.headerDivider
    }), t.map(e => (0, n.jsx)(u.default, {
      integration: e,
      editedIntegration: l,
      guild: f,
      isExpanded: (null == l ? void 0 : l.id) === e.id,
      onEnable: S,
      onDisable: h,
      onToggleExpand: () => g(e.id)
    }, e.id)), (0, n.jsx)(s.Text, {
      className: c.helpText,
      color: "text-muted",
      variant: "text-sm/normal",
      children: E
    })]
  })
}