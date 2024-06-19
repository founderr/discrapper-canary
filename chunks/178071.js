t.d(s, {
  y: function() {
    return T
  }
}), t(47120);
var n = t(735250),
  r = t(470079),
  i = t(442837),
  a = t(481060),
  l = t(239091),
  o = t(585237),
  c = t(551428),
  u = t(689938);

function I(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let T = {
  DropdownSizes: o.Z.DropdownSizes,
  Sizes: o.Z.Sizes,
  Colors: o.Z.Colors,
  Looks: o.Z.Looks
};
class d extends r.PureComponent {
  render() {
    let {
      storeListings: e,
      primaryStoreListing: s,
      skuId: t,
      onStoreListingSelect: r,
      currentStoreListingId: i,
      ...a
    } = this.props, l = null != s ? 1 : 0;
    return (l += e.length) < 2 ? null : (0, n.jsx)(o.Z, {
      onClick: this.handleContextMenu,
      onDropdownClick: this.handleContextMenu,
      onContextMenu: this.handleContextMenu,
      ...a,
      children: u.Z.Messages.APPLICATION_TEST_MODE_VIEW_OTHER_LISTINGS
    })
  }
  constructor(...e) {
    super(...e), I(this, "renderContextMenu", () => {
      let {
        storeListings: e,
        onStoreListingSelect: s,
        currentStoreListingId: t,
        onMenuSelect: r
      } = this.props, i = e.map(e => e.id !== t ? (0, n.jsx)(a.MenuItem, {
        id: "".concat(e.id),
        label: e.id,
        action: () => {
          l.Zy(), null == s || s(e)
        }
      }) : null);
      return (0, n.jsx)(a.Menu, {
        onSelect: r,
        navId: "test-store-listing",
        "aria-label": u.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: l.Zy,
        children: i
      })
    }), I(this, "handleContextMenu", e => {
      e.stopPropagation(), l.vq(e, this.renderContextMenu)
    })
  }
}
s.Z = i.ZP.connectStores([c.Z], e => {
  let {
    skuId: s
  } = e;
  return {
    storeListings: c.Z.getUnpublishedForSKU(s),
    primaryStoreListing: c.Z.getForSKU(s)
  }
})(d)