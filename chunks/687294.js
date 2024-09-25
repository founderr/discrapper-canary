n.d(t, {
    $: function () {
        return I;
    },
    Z: function () {
        return m;
    }
});
var r = n(724458);
var i = n(47120);
var a = n(411104);
var o = n(259443),
    s = n(510990),
    l = n(141795),
    u = n(983544),
    c = n(596956),
    d = n(865275),
    _ = n(981631),
    E = n(959517),
    f = n(689938);
function h(e, t, n) {
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
let p = new o.Y('CloudUploaderBase.tsx');
class m extends d.Z {
    _fileSize() {
        return this.files.reduce((e, t) => {
            var n;
            return (e += null !== (n = t.currentSize) && void 0 !== n ? n : 0);
        }, 0);
    }
    async compressAndCheckFileSize() {
        var e, t;
        let n = (0, u.F)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
        return this.files.length > n.getMaxAttachmentsCount()
            ? (p.log('Too many attachments for '.concat(this.id)), this._handleError({ code: _.evJ.TOO_MANY_ATTACHMENTS }), !1)
            : !(this._fileSize() > n.getMaxTotalAttachmentSize()) ||
                  (this._handleError({
                      code: _.evJ.ENTITY_TOO_LARGE,
                      reason: { type: E.xi.POSTCOMPRESSION_SUM_TOO_LARGE }
                  }),
                  !1);
    }
    _filesTooLarge() {
        return this.files.some((e) => e.error === _.evJ.ENTITY_TOO_LARGE);
    }
    setUploadingTextForUI() {
        let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : f.Z.Messages.UPLOADING_FILES.format({ count: this.files.length }),
            t = this.files.some((e) => e.isImage),
            n = this.files.some((e) => e.isVideo),
            r = this._fileSize();
        p.log('setUploadingTextForUI - total content: '.concat(r, ' bytes and ').concat(this.files.length, ' attachments for ').concat(this.id)),
            (this._file = {
                ...this._file,
                totalPostCompressionSize: r,
                currentSize: r,
                name: e,
                hasVideo: n,
                hasImage: t,
                attachmentsCount: this.files.length,
                items: this.files
            });
    }
    _recomputeProgress() {
        let { loaded: e, total: t } = this._recomputeProgressTotal(),
            n = this._recomputeProgressByFile();
        this._handleProgress(e, t, n);
    }
    _recomputeProgressTotal() {
        let e = this._fileSize();
        return {
            loaded: this.files.reduce((e, t) => {
                var n;
                return (e += null !== (n = t.loaded) && void 0 !== n ? n : 0);
            }, 0),
            total: e
        };
    }
    _recomputeProgressByFile() {
        let e = {};
        return (
            this.files.forEach((t) => {
                e[t.id] = (0, c.S)(t.loaded, t.currentSize);
            }),
            e
        );
    }
    cancel() {
        if ((p.log('Cancel called for '.concat(this.id)), !this._aborted)) (this._aborted = !0), null != this._cancel && this._cancel(), this.files.forEach((e) => e.cancel()), this._handleComplete();
    }
    async cancelItem(e) {
        p.log('Cancel called for '.concat(this.id, ' for item ').concat(e));
        let t = this.files.find((t) => t.id === e);
        if (null == t || t.status === l.m.CANCELED) return;
        let n = this.files.indexOf(t);
        (this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)]),
            (this._file = {
                ...this._file,
                items: this.files
            }),
            await (0, s.V)(t),
            t.cancel(),
            this.emit('cancel-upload-item', this._file),
            0 === this.files.length && this.cancel();
    }
    failed() {
        return this.files.some((e) => e.status === l.m.ERROR);
    }
    _remainingUploadCount() {
        let e = this.files;
        return e.length - e.filter((e) => e.status === l.m.COMPLETED).length;
    }
    clear() {
        this.cancel(), (this.files = []);
    }
    constructor(...e) {
        super(...e), h(this, 'files', []);
    }
}
async function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = e.map(
            (e) =>
                new Promise((r, i) => {
                    switch (e.status) {
                        case l.m.NOT_STARTED:
                            e.upload();
                            break;
                        case l.m.COMPLETED:
                            r('complete');
                            break;
                        case l.m.ERROR:
                            t && e.error !== _.evJ.ENTITY_TOO_LARGE ? e.upload() : i(Error('File failed to upload'));
                            break;
                        case l.m.CANCELED:
                            i(Error('Upload is canceled'));
                    }
                    e.on('complete', () => {
                        r('complete');
                    }),
                        e.on('error', () => {
                            i(Error('File '.concat(e.id, ' failed to upload')));
                        }),
                        e.on('progress', (e, t) => {
                            null == n || n(e, t);
                        });
                })
        );
    await Promise.all(r);
}
