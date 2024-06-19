n.d(t, {
  E: function() {
    return I
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(239091),
  o = n(585237),
  c = n(812206),
  u = n(55563),
  d = n(73346),
  E = n(689938);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = {
  DropdownSizes: o.Z.DropdownSizes,
  Sizes: o.Z.Sizes,
  Colors: o.Z.Colors,
  Looks: o.Z.Looks
};
class T extends i.PureComponent {
  render() {
    let {
      skus: e,
      children: t,
      applicationId: n,
      primarySKU: i,
      onSKUSelect: l,
      ...a
    } = this.props;
    return (0, s.jsx)(o.Z, {
      onClick: this.handleClick,
      onDropdownClick: e.length > 0 ? this.handleContextMenu : null,
      onContextMenu: e.length > 0 ? this.handleContextMenu : void 0,
      ...a,
      children: t
    })
  }
  constructor(...e) {
    super(...e), _(this, "renderContextMenu", () => {
      let {
        skus: e,
        onSKUSelect: t,
        onMenuSelect: n
      } = this.props;
      return (0, s.jsx)(a.Menu, {
        onSelect: n,
        navId: "test-skus",
        "aria-label": E.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: r.Zy,
        children: e.map(e => (0, s.jsx)(a.MenuItem, {
          id: "".concat(e.id),
          label: e.name,
          action: () => {
            null == t || t(e)
          }
        }, "".concat(e.id)))
      })
    }), _(this, "handleContextMenu", e => {
      e.stopPropagation(), r.vq(e, this.renderContextMenu)
    }), _(this, "handleClick", () => {
      let {
        onSKUSelect: e,
        primarySKU: t
      } = this.props;
      null != t && (null == e || e(t))
    })
  }
}
t.Z = l.ZP.connectStores([u.Z, c.Z], e => {
  var t;
  let {
    applicationId: n
  } = e, s = (0, d.uF)(n, c.Z, u.Z);
  return {
    skus: (null !== (t = u.Z.getForApplication(n)) && void 0 !== t ? t : []).sort((e, t) => null != s && e.id === s.id ? -1 : null != s && t.id === s.id ? 1 : e.name >= t.name ? -1 : 1),
    primarySKU: s
  }
})(T)