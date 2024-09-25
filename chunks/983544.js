n.d(t, {
    F: function () {
        return c;
    },
    e: function () {
        return r;
    }
});
var r,
    i = n(277985),
    a = n(592125),
    o = n(403182),
    s = n(861990),
    l = n(981631);
class u {
    getCreateAttachmentURL(e) {
        return l.ANM.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
        return l.ANM.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        let t = a.Z.getBasicChannel(e);
        return o.dg(null == t ? void 0 : t.guild_id);
    }
    getMaxAttachmentsCount() {
        return l.dN1;
    }
    getMaxTotalAttachmentSize() {
        return s.zz;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
function c(e) {
    if (1 === e) return new i.Z();
    return new u();
}
!(function (e) {
    (e[(e.MESSAGE_ATTACHMENT = 0)] = 'MESSAGE_ATTACHMENT'), (e[(e.GUILD_PRODUCT_ATTACHMENT = 1)] = 'GUILD_PRODUCT_ATTACHMENT');
})(r || (r = {}));
