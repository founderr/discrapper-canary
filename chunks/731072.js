t.d(n, {
  Z: function() {
    return I
  }
});
var i = t(735250),
  s = t(470079),
  l = t(481060),
  a = t(139387),
  r = t(726542),
  o = t(434404),
  c = t(486199),
  d = t(13051),
  u = t(216074);

function I(e) {
  let {
    integrations: n,
    editedIntegration: t,
    guild: I,
    platformType: N,
    labelText: E,
    descriptionText: T,
    helpText: m,
    canNavigate: _
  } = e, h = r.Z.get(N), O = s.useCallback(async e => {
    _() && (await o.Z.enableIntegration(I.id, e.type, e.id), a.Z.startEditingIntegration(e.id))
  }, [_, I.id]), g = s.useCallback(e => {
    _() && (e.id === (null == t ? void 0 : t.id) && a.Z.stopEditingIntegration(), o.Z.disableIntegration(I.id, e.id))
  }, [_, t, I.id]), A = s.useCallback(e => {
    _() && (e === (null == t ? void 0 : t.id) ? a.Z.stopEditingIntegration() : a.Z.startEditingIntegration(e))
  }, [_, t]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Z, {
      name: E,
      icon: null == h ? void 0 : h.icon.whiteSVG,
      iconBackgroundColor: null == h ? void 0 : h.color,
      iconClassName: u.platformIcon,
      description: T,
      isHeader: !0
    }), (0, i.jsx)(l.FormDivider, {
      className: u.headerDivider
    }), n.map(e => (0, i.jsx)(d.Z, {
      integration: e,
      editedIntegration: t,
      guild: I,
      isExpanded: (null == t ? void 0 : t.id) === e.id,
      onEnable: O,
      onDisable: g,
      onToggleExpand: () => A(e.id)
    }, e.id)), (0, i.jsx)(l.Text, {
      className: u.helpText,
      color: "text-muted",
      variant: "text-sm/normal",
      children: m
    })]
  })
}