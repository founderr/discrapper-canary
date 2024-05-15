"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("423875"),
  s = n("481060"),
  i = n("908841"),
  r = n("689938"),
  o = n("952853");
let u = {
  [l.ContentInventoryListenedMediaProvider.PROVIDER_UNSPECIFIED]: null,
  [l.ContentInventoryListenedMediaProvider.SPOTIFY]: {
    getLabel: () => r.default.Messages.SPOTIFY,
    Icon: i.default
  }
};

function d(e) {
  var t;
  let {
    onClick: n,
    provider: l,
    "aria-label": i
  } = e, r = (0, s.useToken)(s.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), {
    Icon: d,
    getLabel: c
  } = null !== (t = u[l]) && void 0 !== t ? t : {};
  return null == d ? null : (0, a.jsx)(s.BlockInteractionsContext.Provider, {
    value: null == n,
    children: (0, a.jsx)(s.Clickable, {
      className: o.container,
      onClick: n,
      "aria-label": null != i ? i : null == c ? void 0 : c(),
      children: (0, a.jsx)(d, {
        color: r.hex(),
        width: 16,
        height: 16
      })
    })
  })
}