n.d(t, {
    ZP: function () {
        return E;
    },
    ow: function () {
        return r;
    },
    rG: function () {
        return _;
    }
});
var r,
    i,
    a = n(836560);
var o = n(392711),
    s = n.n(o),
    l = n(772848),
    u = n(403182),
    c = n(861990);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    return void 0 !== e.isVideo && void 0 !== e.isImage;
}
!(function (e) {
    (e[(e.REACT_NATIVE = 0)] = 'REACT_NATIVE'), (e[(e.WEB = 1)] = 'WEB');
})(r || (r = {})),
    !(function (e) {
        (e[(e.FILE_ATTACHMENT = 0)] = 'FILE_ATTACHMENT'), (e[(e.IMAGE_PICKER = 1)] = 'IMAGE_PICKER');
    })(i || (i = {}));
class E extends a.EventEmitter {
    cancel() {}
    resetState() {
        return this;
    }
    constructor(e, t) {
        var n, r;
        if ((super(), d(this, 'id', void 0), d(this, 'uniqueId', void 0), d(this, 'filename', void 0), d(this, 'item', void 0), d(this, 'spoiler', void 0), d(this, 'description', void 0), d(this, 'classification', void 0), d(this, 'isImage', void 0), d(this, 'isVideo', void 0), d(this, 'uploadedFilename', void 0), d(this, 'showLargeMessageDialog', void 0), d(this, 'mimeType', void 0), d(this, 'origin', void 0), d(this, 'durationSecs', void 0), d(this, 'waveform', void 0), d(this, 'isThumbnail', void 0), d(this, 'isRemix', void 0), d(this, 'clip', void 0), (this.item = e), 0 === e.platform)) {
            this.id = null !== (n = e.id) && void 0 !== n ? n : e.uri;
            let t = (0, c.hn)({
                uri: e.uri,
                overrideFilename: e.filename,
                overrideType: e.mimeType
            });
            (this.filename = t.filename), (this.isImage = t.isImage), (this.isVideo = t.isVideo), (this.mimeType = t.type), (this.origin = e.origin), (this.durationSecs = e.durationSecs), (this.waveform = e.waveform), (this.isRemix = e.isRemix);
        } else (this.id = null !== (r = e.id) && void 0 !== r ? r : s().uniqueId('upload')), (this.classification = u.f3(e.file)), (this.isImage = 'image' === this.classification), (this.isVideo = 'video' === this.classification), (this.filename = e.file.name), (this.mimeType = e.file.type);
        (this.isThumbnail = e.isThumbnail), (this.clip = e.clip), (this.uniqueId = (0, l.Z)()), (this.showLargeMessageDialog = t), (this.spoiler = !1), (this.description = null);
    }
}
