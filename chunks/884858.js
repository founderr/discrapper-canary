i.d(n, {
  Z: function() {
    return t
  }
});
var a = i(531643),
  s = i(403182),
  l = i(689938);

function t(e) {
  (0, a.openUploadError)({
    title: l.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: l.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
      maxSize: (0, s.Ng)(e)
    })
  })
}