"use strict";
n.r(t), n.d(t, {
  filesExceedUploadLimits: function() {
    return u
  },
  getErrorHelp: function() {
    return o
  },
  getWebUploadFiles: function() {
    return d
  }
}), n("724458"), n("653041");
var a = n("476326"),
  l = n("403182"),
  s = n("74538"),
  i = n("474936"),
  r = n("689938");

function o(e, t) {
  let n = l.sizeString(l.maxFileSize(t));
  return s.default.isPremium(e, i.PremiumTypes.TIER_2) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
    maxSize: n
  }) : s.default.isPremium(e, i.PremiumTypes.TIER_1) ? r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
    maxSize: n
  }) : r.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
    maxSize: n
  })
}

function u(e, t) {
  return l.anyFileTooLarge(e, t) || l.uploadSumTooLarge(e)
}

function d(e) {
  return e.reduce((e, t) => (t.item.platform === a.UploadPlatform.WEB && e.push(t.item.file), e), [])
}