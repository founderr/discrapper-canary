"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var n = a("735250");
a("470079");
var s = a("180781"),
  l = a("321867"),
  r = a("486324");

function i(e) {
  let {
    type: t,
    analyticsPage: a,
    analyticsSection: i,
    isGIF: u,
    banner: o
  } = e;
  return [r.UploadTypes.BANNER, r.UploadTypes.AVATAR].includes(t) && u ? (0, n.jsx)(l.default, {
    analyticsSection: i,
    type: t
  }) : t === r.UploadTypes.GUILD_BANNER ? (0, n.jsx)(s.default, {
    analyticsSection: i,
    analyticsPage: a,
    isGIF: u,
    banner: o
  }) : null
}