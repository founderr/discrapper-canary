"use strict";
n.d(t, {
  Y: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(704215),
  s = n(231757),
  o = n(63063),
  a = n(249881),
  l = n(981631),
  u = n(689938),
  _ = n(195794);
let c = () => {
  let e = o.Z.getArticleURL(l.BhN.XBOX_CONNECTION);
  return (0, i.jsx)(a.t, {
    title: u.Z.Messages.XBOX_TWO_WAY_UPSELL_TITLE,
    body: u.Z.Messages.XBOX_TWO_WAY_UPSELL_BODY.format({
      help_article: e
    }),
    img: (0, i.jsx)("img", {
      src: _,
      width: "auto",
      height: "45",
      alt: ""
    }),
    newIndicatorDismissibleContent: r.z.XBOX_ONE_WAY_RECONNECT,
    onClick: () => (0, s.Z)({
      platformType: l.ABu.XBOX,
      location: "Xbox two way upsell"
    })
  })
}