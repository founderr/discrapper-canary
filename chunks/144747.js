"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var r = n("446674"),
  i = n("913144"),
  o = n("659500"),
  l = n("49111");
let u = null,
  a = 0;

function s() {
  u = null
}
class E extends r.default.Store {
  isOpen() {
    return null != u
  }
  get version() {
    return a
  }
  getContextMenu() {
    return u
  }
  close() {
    return !!this.isOpen() && (o.ComponentDispatch.dispatch(l.ComponentActions.CONTEXT_MENU_CLOSE), !0)
  }
}
E.displayName = "ContextMenuStore";
var _ = new E(i.default, {
  CONTEXT_MENU_OPEN: function(e) {
    let {
      contextMenu: t
    } = e;
    a++, u = t
  },
  LAYER_PUSH: s,
  CONTEXT_MENU_CLOSE: s,
  OVERLAY_SET_UI_LOCKED: s,
  OVERLAY_DEACTIVATE_ALL_REGIONS: s
})