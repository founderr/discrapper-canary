t.d(A, {
    Z: function () {
        return r;
    }
});
var n = t(531643),
    a = t(403182),
    s = t(689938);
function r(e) {
    (0, n.openUploadError)({
        title: s.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
        help: s.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: (0, a.Ng)(e) })
    });
}
