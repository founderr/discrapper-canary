n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(653041);
var i = n(544891),
    a = n(881052),
    o = n(687294),
    s = n(476326),
    l = n(861990),
    u = n(689938);
class c extends o.Z {
    async uploadFiles(e, t) {
        let { addFilesTo: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: u.Z.Messages.ATTACHMENT_PROCESSING }, t, e);
        let r = new AbortController();
        try {
            if (((this.files = e), this._aborted)) return;
            if ((this._handleStart(() => r.abort()), !(await this.compressAndCheckFileSize()))) return;
            this.setUploadingTextForUI(), await (0, o.$)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (e) {
            this._handleException(e);
        }
        try {
            return await this._createMessage(r.signal, t, n);
        } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
        }
    }
    async _createMessage(e, t, n) {
        let r;
        let o = [];
        this.files.forEach((e, t) => {
            let n = (0, l.B)(e, t);
            e.item.platform === s.ow.WEB && o.push({ ...n });
        }),
            (r =
                null != n && null != t
                    ? this._addAttachmentsToPayload(t, n, o)
                    : {
                          ...t,
                          attachments: o
                      });
        let u = {
                url: this._url,
                body: r,
                signal: e
            },
            c = 'POST' === this._method ? i.tn.post : i.tn.patch;
        try {
            let e = await c(u);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            var d;
            if (this._raiseEndpointErrors) throw new a.Hx(e);
            this._handleError({
                code: null == e ? void 0 : null === (d = e.body) || void 0 === d ? void 0 : d.code,
                body: null == e ? void 0 : e.body
            });
        }
    }
    constructor(e, t = 'POST', n) {
        super(e, t, n);
    }
}
