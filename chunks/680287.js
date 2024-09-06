t.d(A, {
    Z: function () {
        return i;
    }
}),
    t(653041);
var a = t(544891),
    n = t(881052),
    r = t(687294),
    s = t(476326),
    o = t(861990),
    l = t(689938);
class i extends r.Z {
    async uploadFiles(e, A) {
        let { addFilesTo: t } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: l.Z.Messages.ATTACHMENT_PROCESSING }, A, e);
        let a = new AbortController();
        try {
            if (((this.files = e), this._aborted)) return;
            if ((this._handleStart(() => a.abort()), !(await this.compressAndCheckFileSize()))) return;
            this.setUploadingTextForUI(), await (0, r.$)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (e) {
            this._handleException(e);
        }
        try {
            return await this._createMessage(a.signal, A, t);
        } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
        }
    }
    async _createMessage(e, A, t) {
        let r;
        let l = [];
        this.files.forEach((e, A) => {
            let t = (0, o.B)(e, A);
            e.item.platform === s.ow.WEB && l.push({ ...t });
        }),
            (r =
                null != t && null != A
                    ? this._addAttachmentsToPayload(A, t, l)
                    : {
                          ...A,
                          attachments: l
                      });
        let i = {
                url: this._url,
                body: r,
                signal: e
            },
            d = 'POST' === this._method ? a.tn.post : a.tn.patch;
        try {
            let e = await d(i);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            var c;
            if (this._raiseEndpointErrors) throw new n.Hx(e);
            this._handleError({
                code: null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.code,
                body: null == e ? void 0 : e.body
            });
        }
    }
    constructor(e, A = 'POST', t) {
        super(e, A, t);
    }
}
