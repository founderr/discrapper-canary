n.d(t, {
  y: function() {
    return E
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(239091),
  o = n(585237),
  c = n(551428),
  u = n(689938);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = {
  DropdownSizes: o.Z.DropdownSizes,
  Sizes: o.Z.Sizes,
  Colors: o.Z.Colors,
  Looks: o.Z.Looks
};
class h extends i.PureComponent {
  render() {
    let {
      storeListings: e,
      primaryStoreListing: t,
      skuId: n,
      onStoreListingSelect: i,
      currentStoreListingId: l,
      ...a
    } = this.props, r = null != t ? 1 : 0;
    return (r += e.length) < 2 ? null : (0, s.jsx)(o.Z, {
      onClick: this.handleContextMenu,
      onDropdownClick: this.handleContextMenu,
      onContextMenu: this.handleContextMenu,
      ...a,
      children: u.Z.Messages.APPLICATION_TEST_MODE_VIEW_OTHER_LISTINGS
    })
  }
  constructor(...e) {
    super(...e), d(this, "renderContextMenu", () => {
      let {
        storeListings: e,
        onStoreListingSelect: t,
        currentStoreListingId: n,
        onMenuSelect: i
      } = this.props, l = e.map(e => e.id !== n ? (0, s.jsx)(a.MenuItem, {
        id: "".concat(e.id),
        label: e.id,
        action: () => {
          r.Zy(), null == t || t(e)
        }
      }) : null);
      return (0, s.jsx)(a.Menu, {
        onSelect: i,
        navId: "test-store-listing",
        "aria-label": u.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: r.Zy,
        children: l
      })
    }), d(this, "handleContextMenu", e => {
      e.stopPropagation(), r.vq(e, this.renderContextMenu)
    })
  }
}
t.Z = l.ZP.connectStores([c.Z], e => {
  let {
    skuId: t
  } = e;
  return {
    storeListings: c.Z.getUnpublishedForSKU(t),
    primaryStoreListing: c.Z.getForSKU(t)
  }
})(h)