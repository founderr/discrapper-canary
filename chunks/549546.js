n.d(t, {
  Z: function() {
    return h
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
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
    trackUserProfileAction: i
  } = (0, u.KZ)();
  return o.wS ? (0, s.jsx)(r.o, {
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
    onCopy: () => i({
      action: "COPY_USERNAME"
    }),
    children: (0, s.jsx)(a.CopyIcon, {
      size: "xs",
      color: "currentColor"
    })
  }) : null
}