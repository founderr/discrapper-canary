"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("204097"),
  r = n("969832"),
  o = n("572004"),
  u = n("51144"),
  d = n("785717"),
  c = n("689938"),
  f = n("9842");

function E(e) {
  let {
    user: t,
    isHovering: n
  } = e, {
    trackUserProfileAction: s
  } = (0, d.useUserProfileAnalyticsContext)();
  return o.SUPPORTS_COPY ? (0, a.jsx)(r.CopiableField, {
    className: l()(f.copiable, {
      [f.visible]: n
    }),
    copyValue: u.default.getUserTag(t, {
      decoration: "never",
      identifiable: "always"
    }),
    copyTooltip: c.default.Messages.COPY_USERNAME,
    "aria-label": c.default.Messages.COPY_USERNAME,
    copyTooltipDelay: 0,
    disableCopy: !1,
    showCopyIcon: !1,
    onCopy: () => s({
      action: "COPY_USERNAME"
    }),
    children: (0, a.jsx)(i.CopyIcon, {
      width: 16,
      height: 16,
      color: "currentColor"
    })
  }) : null
}