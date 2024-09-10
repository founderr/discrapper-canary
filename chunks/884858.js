t.d(A, {
    Z: function () {
        return s;
    }
});
var a = t(531643),
    n = t(403182),
    r = t(689938);
function s(e) {
    (0, a.openUploadError)({
        title: r.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
        help: r.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: (0, n.Ng)(e) })
    });
}
