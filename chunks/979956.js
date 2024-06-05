"use strict";
i.r(t), i.d(t, {
  filesExceedUploadLimits: function() {
    return d
  },
  getErrorHelp: function() {
    return r
  },
  getWebUploadFiles: function() {
    return u
  }
}), i("724458"), i("653041");
var l = i("476326"),
  a = i("403182"),
  s = i("74538"),
  n = i("474936"),
  o = i("689938");

function r(e, t) {
  let i = a.sizeString(a.maxFileSize(t));
  return s.default.isPremium(e, n.PremiumTypes.TIER_2) ? o.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
    maxSize: i
  }) : s.default.isPremium(e, n.PremiumTypes.TIER_1) ? o.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP_PREMIUM_TIER_1.format({
    maxSize: i
  }) : o.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
    maxSize: i
  })
}

function d(e, t) {
  return a.anyFileTooLarge(e, t) || a.uploadSumTooLarge(e)
}

function u(e) {
  return e.reduce((e, t) => (t.item.platform === l.UploadPlatform.WEB && e.push(t.item.file), e), [])
}