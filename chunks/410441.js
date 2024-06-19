n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250);
n(470079);
var i = n(423875),
  s = n(481060),
  a = n(908841),
  r = n(689938),
  o = n(346737);
let c = {
  [i.p.PROVIDER_UNSPECIFIED]: null,
  [i.p.SPOTIFY]: {
    getLabel: () => r.Z.Messages.SPOTIFY,
    Icon: a.Z
  }
};

function u(e) {
  var t;
  let {
    onClick: n,
    provider: i,
    "aria-label": a
  } = e, r = (0, s.useToken)(s.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), {
    Icon: u,
    getLabel: d
  } = null !== (t = c[i]) && void 0 !== t ? t : {};
  if (null == u) return null;
  let h = null != a ? a : null == d ? void 0 : d(),
    m = (0, l.jsx)(u, {
      color: r.hex(),
      width: 16,
      height: 16
    });
  return null == n ? (0, l.jsx)("div", {
    className: o.container,
    "aria-label": h,
    children: m
  }) : (0, l.jsx)(s.Tooltip, {
    text: h,
    children: e => (0, l.jsx)(s.Clickable, {
      className: o.container,
      ...e,
      onClick: n,
      children: m
    })
  })
}