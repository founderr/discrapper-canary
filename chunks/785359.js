r.d(n, {
    x: function () {
        return s;
    }
});
var i = r(367907),
    a = r(981631);
function s(e) {
    var n, r;
    let s = null != e.fileItems ? o(e.fileItems) : [],
        l = null !== (n = e.errorMessage) && void 0 !== n ? n : void 0,
        u = null !== (r = e.failureCode) && void 0 !== r ? r : void 0;
    (0, i.yw)(a.rMx.SEND_MESSAGE_FAILURE, {
        failure_code: u,
        error_message: l,
        attachment_mimetypes: s
    });
}
function o(e) {
    return e.map((e) => {
        var n;
        return null !== (n = e.mimeType) && void 0 !== n ? n : 'unknown';
    });
}
