n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(653041);
var r = n(544891),
    i = n(881052),
    a = n(687294),
    l = n(476326),
    o = n(861990),
    s = n(388032);
class c extends a.Z {
    async uploadFiles(e, t) {
        let { addFilesTo: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        super.upload({ name: s.intl.string(s.t.jfKTen) }, t, e);
        let r = new AbortController();
        try {
            if (((this.files = e), this._aborted)) return;
            if ((this._handleStart(() => r.abort()), !(await this.compressAndCheckFileSize()))) return;
            this.setUploadingTextForUI(), await (0, a.$)(this.files, !0, this._recomputeProgress.bind(this));
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
        let a;
        let s = [];
        this.files.forEach((e, t) => {
            let n = (0, o.B)(e, t);
            e.item.platform === l.ow.WEB && s.push({ ...n });
        }),
            (a =
                null != n && null != t
                    ? this._addAttachmentsToPayload(t, n, s)
                    : {
                          ...t,
                          attachments: s
                      });
        let c = {
                url: this._url,
                body: a,
                signal: e
            },
            d = 'POST' === this._method ? r.tn.post : r.tn.patch;
        try {
            let e = await d(c);
            return this._handleComplete(e.body), e.body;
        } catch (e) {
            var u;
            if (this._raiseEndpointErrors) throw new i.Hx(e);
            this._handleError({
                code: null == e ? void 0 : null === (u = e.body) || void 0 === u ? void 0 : u.code,
                body: null == e ? void 0 : e.body
            });
        }
    }
    constructor(e, t = 'POST', n) {
        super(e, t, n);
    }
}
