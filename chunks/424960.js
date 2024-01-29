"use strict";
t.r(A), t.d(A, {
  default: function() {
    return r
  }
});
var a = t("336522"),
  l = t("254490"),
  n = t("782340");

function r(e) {
  (0, a.openUploadError)({
    title: n.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: n.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
      maxSize: (0, l.sizeString)(e)
    })
  })
}