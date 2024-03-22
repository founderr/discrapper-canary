"use strict";
s.r(t), s.d(t, {
  TestModeStoreListingButtonEnums: function() {
    return c
  },
  default: function() {
    return E
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("446674"),
  i = s("77078"),
  l = s("272030"),
  o = s("741130"),
  u = s("698041"),
  d = s("782340");
let c = {
  DropdownSizes: o.default.DropdownSizes,
  Sizes: o.default.Sizes,
  Colors: o.default.Colors,
  Looks: o.default.Looks
};
class _ extends r.PureComponent {
  render() {
    let {
      storeListings: e,
      primaryStoreListing: t,
      skuId: s,
      onStoreListingSelect: r,
      currentStoreListingId: n,
      ...i
    } = this.props, l = null != t ? 1 : 0;
    return (l += e.length) < 2 ? null : (0, a.jsx)(o.default, {
      onClick: this.handleContextMenu,
      onDropdownClick: this.handleContextMenu,
      onContextMenu: this.handleContextMenu,
      ...i,
      children: d.default.Messages.APPLICATION_TEST_MODE_VIEW_OTHER_LISTINGS
    })
  }
  constructor(...e) {
    super(...e), this.renderContextMenu = () => {
      let {
        storeListings: e,
        onStoreListingSelect: t,
        currentStoreListingId: s,
        onMenuSelect: r
      } = this.props, n = e.map(e => e.id !== s ? (0, a.jsx)(i.MenuItem, {
        id: "".concat(e.id),
        label: e.id,
        action: () => {
          l.closeContextMenu(), null == t || t(e)
        }
      }) : null);
      return (0, a.jsx)(i.Menu, {
        onSelect: r,
        navId: "test-store-listing",
        "aria-label": d.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: l.closeContextMenu,
        children: n
      })
    }, this.handleContextMenu = e => {
      e.stopPropagation(), l.openContextMenu(e, this.renderContextMenu)
    }
  }
}
var E = n.default.connectStores([u.default], e => {
  let {
    skuId: t
  } = e;
  return {
    storeListings: u.default.getUnpublishedForSKU(t),
    primaryStoreListing: u.default.getForSKU(t)
  }
})(_)