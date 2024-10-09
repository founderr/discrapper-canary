a.d(n, {
    Z: function () {
        return c;
    }
}),
    a(653041);
var t = a(544891),
    r = a(881052),
    s = a(687294),
    i = a(476326),
    o = a(861990),
    l = a(689938);
class c extends s.Z {
    async uploadFiles(e, n) {
        let { addFilesTo: a } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: l.Z.Messages.ATTACHMENT_PROCESSING }, n, e);
        let t = new AbortController();
        try {
            if (((this.files = e), this._aborted)) return;
            if ((this._handleStart(() => t.abort()), !(await this.compressAndCheckFileSize()))) return;
            this.setUploadingTextForUI(), await (0, s.$)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (e) {
            this._handleException(e);
        }
        try {
            return await this._createMessage(t.signal, n, a);
        } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
        }
    }
    async _createMessage(e, n, a) {
        let s;
        let l = [];
        this.files.forEach((e, n) => {
            let a = (0, o.B)(e, n);
            e.item.platform === i.ow.WEB && l.push({ ...a });
        }),
            (s =
                null != a && null != n
                    ? this._addAttachmentsToPayload(n, a, l)
                    : {
                          ...n,
                          attachments: l
                      });
        let c = {
                url: this._url,
                body: s,
                signal: e
            },
            d = 'POST' === this._method ? t.tn.post : t.tn.patch;
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
    constructor(e, n = 'POST', a) {
        super(e, n, a);
    }
}
