"use strict";
s.r(t), s.d(t, {
  XboxTwoWayLinkUpsell: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var n = s("704215"),
  i = s("231757"),
  l = s("63063"),
  r = s("249881"),
  o = s("981631"),
  d = s("689938"),
  u = s("195794");
let c = () => {
  let e = l.default.getArticleURL(o.HelpdeskArticles.XBOX_CONNECTION);
  return (0, a.jsx)(r.OneWayToTwoWayLinkUpsell, {
    title: d.default.Messages.XBOX_TWO_WAY_UPSELL_TITLE,
    body: d.default.Messages.XBOX_TWO_WAY_UPSELL_BODY.format({
      help_article: e
    }),
    img: (0, a.jsx)("img", {
      src: u,
      width: "auto",
      height: "45",
      alt: ""
    }),
    newIndicatorDismissibleContent: n.DismissibleContent.XBOX_ONE_WAY_RECONNECT,
    onClick: () => (0, i.default)({
      platformType: o.PlatformTypes.XBOX,
      location: "Xbox two way upsell"
    })
  })
}