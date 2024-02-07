"use strict";
n.r(t), n.d(t, {
  stageAttachmentFiles: function() {
    return f
  },
  default: function() {
    return l
  }
}), n("808653"), n("222007"), n("70102");
var l, i = n("811022"),
  o = n("994440"),
  a = n("282928"),
  r = n("142852"),
  s = n("402752"),
  u = n("572868"),
  c = n("49111"),
  d = n("894488"),
  p = n("782340");
let m = new i.default("CloudUploaderBase.tsx");
async function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0,
    l = e.map(e => new Promise((l, i) => {
      switch (e.status) {
        case a.CloudUploadStatus.NOT_STARTED:
          e.upload();
          break;
        case a.CloudUploadStatus.COMPLETED:
          l("complete");
          break;
        case a.CloudUploadStatus.ERROR:
          t && e.error !== c.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : i(Error("File failed to upload"));
          break;
        case a.CloudUploadStatus.CANCELED:
          i(Error("Upload is canceled"))
      }
      e.on("complete", () => {
        l("complete")
      }), e.on("error", () => {
        i(Error("File ".concat(e.id, " failed to upload")))
      }), e.on("progress", (e, t) => {
        null == n || n(e, t)
      })
    }));
  await Promise.all(l)
}
l = class extends u.default {
  _fileSize() {
    return this.files.reduce((e, t) => {
      var n;
      return e += null !== (n = t.currentSize) && void 0 !== n ? n : 0
    }, 0)
  }
  async compressAndCheckFileSize() {
    var e, t;
    let n = (0, r.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
    return this.files.length > n.getMaxAttachmentsCount() ? (m.log("Too many attachments for ".concat(this.id)), this._handleError({
      code: c.AbortCodes.TOO_MANY_ATTACHMENTS
    }), !1) : !(this._fileSize() > n.getMaxTotalAttachmentSize()) || (this._handleError({
      code: c.AbortCodes.ENTITY_TOO_LARGE,
      reason: {
        type: d.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
      }
    }), !1)
  }
  _filesTooLarge() {
    return this.files.some(e => e.error === c.AbortCodes.ENTITY_TOO_LARGE)
  }
  setUploadingTextForUI() {
    let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : p.default.Messages.UPLOADING_FILES.format({
        count: this.files.length
      }),
      t = this.files.some(e => e.isImage),
      n = this.files.some(e => e.isVideo),
      l = this._fileSize();
    m.log("setUploadingTextForUI - total content: ".concat(l, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
      ...this._file,
      totalPostCompressionSize: l,
      currentSize: l,
      name: e,
      hasVideo: n,
      hasImage: t,
      attachmentsCount: this.files.length,
      items: this.files
    }
  }
  _recomputeProgress() {
    let {
      loaded: e,
      total: t
    } = this._recomputeProgressTotal(), n = this._recomputeProgressByFile();
    this._handleProgress(e, t, n)
  }
  _recomputeProgressTotal() {
    let e = this._fileSize(),
      t = this.files.reduce((e, t) => {
        var n;
        return e += null !== (n = t.loaded) && void 0 !== n ? n : 0
      }, 0);
    return {
      loaded: t,
      total: e
    }
  }
  _recomputeProgressByFile() {
    let e = {};
    return this.files.forEach(t => {
      e[t.id] = (0, s.calculateProgress)(t.loaded, t.currentSize)
    }), e
  }
  cancel() {
    m.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(e => e.cancel()), this._handleComplete())
  }
  async cancelItem(e) {
    m.log("Cancel called for ".concat(this.id, " for item ").concat(e));
    let t = this.files.find(t => t.id === e);
    if (null == t || t.status === a.CloudUploadStatus.CANCELED) return;
    let n = this.files.indexOf(t);
    this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)], this._file = {
      ...this._file,
      items: this.files
    }, await (0, o.cancelGetAttachmentFile)(t), t.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
  }
  failed() {
    return this.files.some(e => e.status === a.CloudUploadStatus.ERROR)
  }
  _remainingUploadCount() {
    let e = this.files;
    return e.length - e.filter(e => e.status === a.CloudUploadStatus.COMPLETED).length
  }
  clear() {
    this.cancel(), this.files = []
  }
  constructor(...e) {
    super(...e), this.files = []
  }
}