"use strict";
t.r(A), t.d(A, {
  default: function() {
    return r
  }
});
var a = t("336522"),
  n = t("254490"),
  l = t("782340");

function r(e) {
  (0, a.openUploadError)({
    title: l.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: l.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
      maxSize: (0, n.sizeString)(e)
    })
  })
}