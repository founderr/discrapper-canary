"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("735250");
n("470079");
var a = n("882037"),
  i = n("853268"),
  l = n("689938"),
  r = n("611273");

function o() {
  let {
    required: e,
    checked: t
  } = (0, a.usePromoEmailConsentStore)();
  return e ? (0, s.jsx)(i.default, {
    value: t,
    subText: l.default.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
    onChange: a.setPromoEmailConsentChecked,
    marginTopStyle: r.marginTop8,
    muted: !0
  }) : null
}