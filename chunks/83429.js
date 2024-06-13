"use strict";
t.r(a), t.d(a, {
  default: function() {
    return o
  }
});
var l = t("735250");
t("470079");
var i = t("993409"),
  r = t("901952"),
  n = t("689938"),
  s = t("758283");

function o(e) {
  let {
    user: a,
    hideMessageInput: t,
    hideExampleButton: o
  } = e;
  return t ? (0, l.jsx)("footer", {
    className: s.footer,
    children: !o && (0, l.jsx)(i.default, {
      variant: "text",
      text: n.default.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
      fullWidth: !0
    })
  }) : (0, l.jsx)("footer", {
    inert: "",
    className: s.footer,
    children: (0, l.jsx)(r.default, {
      user: a
    })
  })
}