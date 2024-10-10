t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(653041);
var a = t(544891),
    r = t(881052),
    s = t(687294),
    i = t(476326),
    o = t(861990),
    l = t(689938);
class c extends s.Z {
    async uploadFiles(e, n) {
        let { addFilesTo: t } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: l.Z.Messages.ATTACHMENT_PROCESSING }, n, e);
        let a = new AbortController();
        try {
            if (((this.files = e), this._aborted)) return;
            if ((this._handleStart(() => a.abort()), !(await this.compressAndCheckFileSize()))) return;
            this.setUploadingTextForUI(), await (0, s.$)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (e) {
            this._handleException(e);
        }
        try {
            return await this._createMessage(a.signal, n, t);
        } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
        }
    }
    async _createMessage(e, n, t) {
        let s;
        let l = [];
        this.files.forEach((e, n) => {
            let t = (0, o.B)(e, n);
            e.item.platform === i.ow.WEB && l.push({ ...t });
        }),
            (s =
                null != t && null != n
                    ? this._addAttachmentsToPayload(n, t, l)
                    : {
                          ...n,
                          attachments: l
                      });
        let c = {
                url: this._url,
                body: s,
                signal: e
            },
            d = 'POST' === this._method ? a.tn.post : a.tn.patch;
        try {
            let e = await d(c);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            var u;
            if (this._raiseEndpointErrors) throw new r.Hx(e);
            this._handleError({
                code: null == e ? void 0 : null === (u = e.body) || void 0 === u ? void 0 : u.code,
                body: null == e ? void 0 : e.body
            });
        }
    }
    constructor(e, n = 'POST', t) {
        super(e, n, t);
    }
}
