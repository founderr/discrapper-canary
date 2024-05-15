"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("524437"),
  i = n("765585"),
  l = n("16703"),
  r = n("300284"),
  o = n("689938"),
  u = n("145146");
t.default = () => {
  let e = (0, l.default)(),
    t = (0, r.default)({
      guild: e
    });
  return (0, a.jsx)(i.default, {
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