"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var s = a("524437"),
  l = a("230711"),
  i = a("765585"),
  r = a("981631"),
  o = a("921944"),
  u = a("689938"),
  d = a("549902");

function c(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, n.jsx)(i.default, {
    header: u.default.Messages.SOUNDBOARD_VOLUME_TOOLTIP_HEADER,
    body: u.default.Messages.SOUNDBOARD_VOLUME_TOOLTIP_BODY,
    tryItText: u.default.Messages.TAKE_ME_THERE,
    dismissibleContent: s.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION,
    artClassName: d.art,
    onTryFeature: () => {
      l.default.open(r.UserSettingsSections.VOICE), t(o.ContentDismissActionType.UNKNOWN)
    },
    onClose: () => t(o.ContentDismissActionType.UNKNOWN),
    shouldUseHorizontalButtons: !0,
    inlineArt: !0
  })
}