r.d(n, {
    F: function () {
        return d;
    },
    e: function () {
        return i;
    }
});
var i,
    a = r(277985),
    s = r(592125),
    o = r(403182),
    l = r(861990),
    u = r(981631);
class c {
    getCreateAttachmentURL(e) {
        return u.ANM.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
        return u.ANM.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        let n = s.Z.getBasicChannel(e);
        return o.dg(null == n ? void 0 : n.guild_id);
    }
    getMaxAttachmentsCount() {
        return u.dN1;
    }
    getMaxTotalAttachmentSize() {
        return l.zz;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
function d(e) {
    if (1 === e) return new a.Z();
    return new c();
}
!(function (e) {
    (e[(e.MESSAGE_ATTACHMENT = 0)] = 'MESSAGE_ATTACHMENT'), (e[(e.GUILD_PRODUCT_ATTACHMENT = 1)] = 'GUILD_PRODUCT_ATTACHMENT');
})(i || (i = {}));
