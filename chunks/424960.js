"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("336522"),
  a = n("254490"),
  i = n("782340");

function u(e) {
  (0, r.openUploadError)({
    title: i.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: i.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
      maxSize: (0, a.sizeString)(e)
    })
  })
}