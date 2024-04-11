"use strict";
s.r(t), s.d(t, {
  TestModeStoreListingButtonEnums: function() {
    return _
  }
}), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("442837"),
  l = s("481060"),
  n = s("239091"),
  o = s("585237"),
  u = s("551428"),
  d = s("689938");

function c(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let _ = {
  DropdownSizes: o.default.DropdownSizes,
  Sizes: o.default.Sizes,
  Colors: o.default.Colors,
  Looks: o.default.Looks
};
class E extends i.PureComponent {
  render() {
    let {
      storeListings: e,
      primaryStoreListing: t,
      skuId: s,
      onStoreListingSelect: i,
      currentStoreListingId: r,
      ...l
    } = this.props, n = null != t ? 1 : 0;
    return (n += e.length) < 2 ? null : (0, a.jsx)(o.default, {
      onClick: this.handleContextMenu,
      onDropdownClick: this.handleContextMenu,
      onContextMenu: this.handleContextMenu,
      ...l,
      children: d.default.Messages.APPLICATION_TEST_MODE_VIEW_OTHER_LISTINGS
    })
  }
  constructor(...e) {
    super(...e), c(this, "renderContextMenu", () => {
      let {
        storeListings: e,
        onStoreListingSelect: t,
        currentStoreListingId: s,
        onMenuSelect: i
      } = this.props, r = e.map(e => e.id !== s ? (0, a.jsx)(l.MenuItem, {
        id: "".concat(e.id),
        label: e.id,
        action: () => {
          n.closeContextMenu(), null == t || t(e)
        }
      }) : null);
      return (0, a.jsx)(l.Menu, {
        onSelect: i,
        navId: "test-store-listing",
        "aria-label": d.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: n.closeContextMenu,
        children: r
      })
    }), c(this, "handleContextMenu", e => {
      e.stopPropagation(), n.openContextMenu(e, this.renderContextMenu)
    })
  }
}
t.default = r.default.connectStores([u.default], e => {
  let {
    skuId: t
  } = e;
  return {
    storeListings: u.default.getUnpublishedForSKU(t),
    primaryStoreListing: u.default.getForSKU(t)
  }
})(E)