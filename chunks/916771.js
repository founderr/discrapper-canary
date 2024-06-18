"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(872810),
  s = n(569545),
  o = n(63063),
  a = n(112560),
  l = n(981631),
  u = n(689938);
let _ = n(66737);

function c(e) {
  let {
    stream: t,
    width: n,
    selected: c = !1,
    noArt: d = !1
  } = e;
  return (0, i.jsx)(a.Z, {
    artURL: _,
    header: u.Z.Messages.STREAM_FAILED_TITLE,
    size: (0, a.L)(n),
    noArt: d,
    selected: c,
    description: u.Z.Messages.STREAM_FAILED_DESCRIPTION.format({
      helpUrl: o.Z.getArticleURL(l.BhN.STREAM_FAILED)
    }),
    onCTAClick: () => (0, r.aP)((0, s.V9)(t)),
    callToAction: u.Z.Messages.CLOSE_STREAM
  })
}