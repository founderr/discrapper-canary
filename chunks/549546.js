n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  l = n.n(s),
  a = n(481060),
  r = n(969832),
  o = n(572004),
  c = n(51144),
  u = n(785717),
  d = n(689938),
  E = n(194609);

function h(e) {
  let {
    user: t,
    isHovering: n
  } = e, {
    trackUserProfileAction: s
  } = (0, u.KZ)();
  return o.wS ? (0, i.jsx)(r.o, {
    className: l()(E.copiable, {
      [E.visible]: n
    }),
    copyValue: c.ZP.getUserTag(t, {
      decoration: "never",
      identifiable: "always"
    }),
    copyTooltip: d.Z.Messages.COPY_USERNAME,
    "aria-label": d.Z.Messages.COPY_USERNAME,
    copyTooltipDelay: 0,
    disableCopy: !1,
    showCopyIcon: !1,
    onCopy: () => s({
      action: "COPY_USERNAME"
    }),
    children: (0, i.jsx)(a.CopyIcon, {
      size: "xs",
      color: "currentColor"
    })
  }) : null
}