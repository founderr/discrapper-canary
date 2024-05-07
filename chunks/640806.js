"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var s = n("524437"),
  i = n("230711"),
  l = n("765585"),
  r = n("981631"),
  o = n("921944"),
  u = n("689938"),
  d = n("549902");

function c(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, a.jsx)(l.default, {
    header: u.default.Messages.SOUNDBOARD_VOLUME_TOOLTIP_HEADER,
    body: u.default.Messages.SOUNDBOARD_VOLUME_TOOLTIP_BODY,
    tryItText: u.default.Messages.TAKE_ME_THERE,
    dismissibleContent: s.DismissibleContent.SOUNDBOARD_VOLUME_EDUCATION,
    artClassName: d.art,
    onTryFeature: () => {
      i.default.open(r.UserSettingsSections.VOICE), t(o.ContentDismissActionType.UNKNOWN)
    },
    onClose: () => t(o.ContentDismissActionType.UNKNOWN),
    shouldUseHorizontalButtons: !0,
    inlineArt: !0
  })
}