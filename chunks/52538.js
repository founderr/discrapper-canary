"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("524437"),
  l = a("765585"),
  i = a("16703"),
  r = a("300284"),
  o = a("689938"),
  u = a("303498");
t.default = () => {
  let e = (0, i.default)(),
    t = (0, r.default)({
      guild: e
    });
  return (0, n.jsx)(l.default, {
    isPremiumFeature: !0,
    shouldUseHorizontalButtons: !0,
    artClassName: u.coachmarkArt,
    headerClassName: u.coachmarkHeader,
    onTryFeature: t,
    tryItText: o.default.Messages.CHECK_IT_OUT,
    header: o.default.Messages.GUILD_IDENTITY_PFX_COACHMARK_TITLE,
    body: o.default.Messages.GUILD_IDENTITY_PFX_COACHMARK_BODY,
    dismissibleContent: s.DismissibleContent.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK,
    maxWidth: 320
  })
}