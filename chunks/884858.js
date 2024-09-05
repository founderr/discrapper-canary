i.d(n, {
    Z: function () {
        return l;
    }
});
var a = i(531643),
    o = i(403182),
    t = i(689938);
function l(e) {
    (0, a.openUploadError)({
        title: t.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
        help: t.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({ maxSize: (0, o.Ng)(e) })
    });
}
