n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(653041);
var r = n(544891),
    l = n(881052),
    i = n(687294),
    a = n(476326),
    o = n(861990),
    u = n(388032);
class c extends i.Z {
    async uploadFiles(e, t) {
        let { addFilesTo: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: u.intl.string(u.t.jfKTen) }, t, e);
        let r = new AbortController();
        try {
            if (((this.files = e), this._aborted)) return;
            if ((this._handleStart(() => r.abort()), !(await this.compressAndCheckFileSize()))) return;
            this.setUploadingTextForUI(), await (0, i.$)(this.files, !0, this._recomputeProgress.bind(this));
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
        let i;
        let u = [];
        this.files.forEach((e, t) => {
            let n = (0, o.B)(e, t);
            e.item.platform === a.ow.WEB && u.push({ ...n });
        }),
            (i =
                null != n && null != t
                    ? this._addAttachmentsToPayload(t, n, u)
                    : {
                          ...t,
                          attachments: u
                      });
        let c = {
                url: this._url,
                body: i,
                signal: e,
                rejectWithError: !1
            },
            s = 'POST' === this._method ? r.tn.post : r.tn.patch;
        try {
            let e = await s(c);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            var d;
            if (this._raiseEndpointErrors) throw new l.Hx(e);
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
