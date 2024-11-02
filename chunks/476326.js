n.d(t, {
    ZP: function () {
        return p;
    },
    ow: function () {
        return a;
    },
    rG: function () {
        return h;
    }
});
var r,
    i,
    a,
    s,
    o = n(836560),
    l = n(392711),
    u = n.n(l),
    c = n(772848),
    d = n(403182),
    f = n(861990);
function _(e, t, n) {
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
function h(e) {
    return void 0 !== e.isVideo && void 0 !== e.isImage;
}
((r = a || (a = {}))[(r.REACT_NATIVE = 0)] = 'REACT_NATIVE'), (r[(r.WEB = 1)] = 'WEB'), ((i = s || (s = {}))[(i.FILE_ATTACHMENT = 0)] = 'FILE_ATTACHMENT'), (i[(i.IMAGE_PICKER = 1)] = 'IMAGE_PICKER');
class p extends o.EventEmitter {
    cancel() {}
    resetState() {
        return this;
    }
    constructor(e, t) {
        var n, r;
        if ((super(), _(this, 'id', void 0), _(this, 'uniqueId', void 0), _(this, 'filename', void 0), _(this, 'item', void 0), _(this, 'spoiler', void 0), _(this, 'description', void 0), _(this, 'classification', void 0), _(this, 'isImage', void 0), _(this, 'isVideo', void 0), _(this, 'uploadedFilename', void 0), _(this, 'showLargeMessageDialog', void 0), _(this, 'mimeType', void 0), _(this, 'origin', void 0), _(this, 'durationSecs', void 0), _(this, 'waveform', void 0), _(this, 'isThumbnail', void 0), _(this, 'isRemix', void 0), _(this, 'clip', void 0), (this.item = e), 0 === e.platform)) {
            this.id = null !== (n = e.id) && void 0 !== n ? n : e.uri;
            let t = (0, f.hn)({
                uri: e.uri,
                overrideFilename: e.filename,
                overrideType: e.mimeType
            });
            (this.filename = t.filename), (this.isImage = t.isImage), (this.isVideo = t.isVideo), (this.mimeType = t.type), (this.origin = e.origin), (this.durationSecs = e.durationSecs), (this.waveform = e.waveform), (this.isRemix = e.isRemix);
        } else (this.id = null !== (r = e.id) && void 0 !== r ? r : u().uniqueId('upload')), (this.classification = d.f3(e.file)), (this.isImage = 'image' === this.classification), (this.isVideo = 'video' === this.classification), (this.filename = e.file.name), (this.mimeType = e.file.type);
        (this.isThumbnail = e.isThumbnail), (this.clip = e.clip), (this.uniqueId = (0, c.Z)()), (this.showLargeMessageDialog = t), (this.spoiler = !1), (this.description = null);
    }
}
