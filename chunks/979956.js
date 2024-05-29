"use strict";
l.r(t), l.d(t, {
  filesExceedUploadLimits: function() {
    return u
  },
  getErrorHelp: function() {
    return o
  },
  getWebUploadFiles: function() {
    return d
  }
}), l("724458"), l("653041");
var a = l("476326"),
  n = l("403182"),
  i = l("74538"),
  s = l("474936"),
  r = l("689938");

function o(e, t) {
  let l = n.sizeString(n.maxFileSize(t));
  return i.default.isPremium(e, s.PremiumTypes.TIER_2) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
    maxSize: l
  }) : i.default.isPremium(e, s.PremiumTypes.TIER_1) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
    maxSize: l
  }) : r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
    maxSize: l
  })
}

function u(e, t) {
  return n.anyFileTooLarge(e, t) || n.uploadSumTooLarge(e)
}

function d(e) {
  return e.reduce((e, t) => (t.item.platform === a.UploadPlatform.WEB && e.push(t.item.file), e), [])
}