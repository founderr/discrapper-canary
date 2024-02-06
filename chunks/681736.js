"use strict";
t.r(A), t.d(A, {
  default: function() {
    return a
  }
}), t("424973");
var a, n = t("872717"),
  l = t("448993"),
  r = t("981112"),
  s = t("966724"),
  o = t("980134"),
  i = t("782340");
a = class extends r.default {
  async uploadFiles(e, A) {
    let {
      addFilesTo: t
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    super.upload({
      name: i.default.Messages.ATTACHMENT_PROCESSING
    }, A, e);
    let a = new AbortController;
    try {
      if (this.files = e, this._aborted) return;
      if (this._handleStart(() => a.abort()), !await this.compressAndCheckFileSize()) return;
      this.setUploadingTextForUI(), await (0, r.stageAttachmentFiles)(this.files, !0, this._recomputeProgress.bind(this))
    } catch (e) {
      this._handleException(e)
    }
    try {
      return await this._createMessage(a.signal, A, t)
    } catch (e) {
      if (this._raiseEndpointErrors) throw e;
      this._handleException(e)
    }
  }
  async _createMessage(e, A, t) {
    let a;
    let r = [];
    this.files.forEach((e, A) => {
      let t = (0, o.getAttachmentPayload)(e, A);
      e.item.platform === s.UploadPlatform.WEB && r.push({
        ...t
      })
    }), a = null != t && null != A ? this._addAttachmentsToPayload(A, t, r) : {
      ...A,
      attachments: r
    };
    let i = {
        url: this._url,
        body: a,
        signal: e
      },
      d = "POST" === this._method ? n.default.post : n.default.patch;
    try {
      let e = await d(i);
      return this._handleComplete(e.body), e.body
    } catch (e) {
      var u;
      if (this._raiseEndpointErrors) throw new l.APIError(e);
      this._handleError({
        code: null == e ? void 0 : null === (u = e.body) || void 0 === u ? void 0 : u.code,
        body: null == e ? void 0 : e.body
      })
    }
  }
  constructor(e, A = "POST", t) {
    super(e, A, t)
  }
}