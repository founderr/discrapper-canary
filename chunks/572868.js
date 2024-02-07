"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007"), n("70102");
var l, i = n("44170"),
  o = n("917351"),
  a = n.n(o),
  r = n("605250"),
  s = n("402752"),
  u = n("894488");
let c = new r.default("UploaderBase.tsx");
l = class extends i.EventEmitter {
  _addAttachmentsToPayload(e, t, n) {
    let l = {
        ...e
      },
      i = [...a.get(l, t, []), ...n];
    return a.set(l, t, i)
  }
  clearProcessingMessageInterval() {
    null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), this.processingMessageChangeInterval = void 0)
  }
  cancel() {
    c.log("cancel() for ".concat(this.id)), this._aborted = !0, null != this._cancel && this._cancel(), this._handleComplete()
  }
  cancelItem(e) {
    throw Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
  }
  upload(e, t, n) {
    if (null != this._cancel) throw Error("Uploader.upload(...): An upload is already in progress.");
    this._lastUpdate = Date.now(), this._loaded = 0, this._file = {
      id: this.id,
      name: e.name,
      currentSize: 0,
      totalPreCompressionSize: 0,
      compressionProgress: 0,
      progress: 0,
      rate: 0,
      hasImage: !1,
      hasVideo: !1,
      attachmentsCount: 0,
      draftContent: null == t ? void 0 : t.content,
      channelId: null == t ? void 0 : t.channel_id,
      items: n
    }
  }
  constructor(e, t = "POST", n) {
    var l;
    super(), this._token = "", this._lastUpdate = 0, this._loaded = 0, this._aborted = !1, this._errored = !1, this._raiseEndpointErrors = !1, this.alreadyStarted = !1, this._handleStart = e => {
      this._cancel = e, !this.alreadyStarted && this.emit("start", this._file), this.alreadyStarted = !0
    }, this._handleProgress = (e, t, n) => {
      let l = Date.now(),
        i = (0, s.calculateProgress)(e, t),
        o = Math.floor((e - this._loaded) / ((l - this._lastUpdate) / 1e3));
      if (null != n) {
        var a;
        null === (a = this._file.items) || void 0 === a || a.forEach(e => {
          e.item.progress = n[e.id]
        })
      }
      this._lastUpdate = l, this._loaded = e, this._file = {
        ...this._file,
        currentSize: t,
        progress: i,
        rate: o
      }, this.emit("progress", this._file)
    }, this._handleException = e => {
      this._handleError({
        reason: {
          type: u.FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN,
          msg: e.toString()
        }
      })
    }, this._handleAborted = () => {
      this.clearProcessingMessageInterval()
    }, this._handleError = e => {
      let {
        code: t,
        reason: n,
        body: l
      } = e;
      this.clearProcessingMessageInterval(), !this._aborted && (this._errored = !0, c.log("_handleError: ".concat(t, " (").concat(JSON.stringify(n), ") for ").concat(this.id)), this.emit("error", this._file, t, l, n), this.removeAllListeners())
    }, this._handleComplete = e => {
      this.clearProcessingMessageInterval(), c.log("_handleComplete for ".concat(this.id)), this.emit("complete", this._file, e), this.removeAllListeners()
    }, this.id = a.uniqueId("Uploader"), this._url = e, this._method = t, this._raiseEndpointErrors = null !== (l = null == n ? void 0 : n.raiseEndpointErrors) && void 0 !== l && l
  }
}