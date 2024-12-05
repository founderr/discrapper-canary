n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(653041);
var A = n(544891),
    r = n(881052),
    a = n(687294),
    l = n(476326),
    i = n(861990),
    o = n(388032);
class s extends a.Z {
    async uploadFiles(e, t) {
        let { addFilesTo: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: o.intl.string(o.t.jfKTen) }, t, e);
        let A = new AbortController();
        try {
            if (((this.files = e), this._aborted)) return;
            if ((this._handleStart(() => A.abort()), !(await this.compressAndCheckFileSize()))) return;
            this.setUploadingTextForUI(), await (0, a.$)(this.files, !0, this._recomputeProgress.bind(this));
        } catch (e) {
            this._handleException(e);
        }
        try {
            return await this._createMessage(A.signal, t, n);
        } catch (e) {
            if (this._raiseEndpointErrors) throw e;
            this._handleException(e);
        }
    }
    async _createMessage(e, t, n) {
        let a;
        let o = [];
        this.files.forEach((e, t) => {
            let n = (0, i.B)(e, t);
            e.item.platform === l.ow.WEB && o.push({ ...n });
        }),
            (a =
                null != n && null != t
                    ? this._addAttachmentsToPayload(t, n, o)
                    : {
                          ...t,
                          attachments: o
                      });
        let s = {
                url: this._url,
                body: a,
                signal: e,
                rejectWithError: !1
            },
            d = 'POST' === this._method ? A.tn.post : A.tn.patch;
        try {
            let e = await d(s);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            var c;
            if (this._raiseEndpointErrors) throw new r.Hx(e);
            this._handleError({
                code: null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.code,
                body: null == e ? void 0 : e.body
            });
        }
    }
    constructor(e, t = 'POST', n) {
        super(e, t, n);
    }
}
