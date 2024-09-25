n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(836560);
var o = n(392711),
    s = n.n(o),
    l = n(710845),
    u = n(596956),
    c = n(959517);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = new l.Z('UploaderBase.tsx');
class E extends a.EventEmitter {
    _addAttachmentsToPayload(e, t, n) {
        let r = { ...e },
            i = [...s().get(r, t, []), ...n];
        return s().set(r, t, i);
    }
    clearProcessingMessageInterval() {
        null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), (this.processingMessageChangeInterval = void 0));
    }
    cancel() {
        _.log('cancel() for '.concat(this.id)), (this._aborted = !0), null != this._cancel && this._cancel(), this._handleComplete();
    }
    cancelItem(e) {
        throw Error('cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass');
    }
    upload(e, t, n) {
        if (null != this._cancel) throw Error('Uploader.upload(...): An upload is already in progress.');
        (this._lastUpdate = Date.now()),
            (this._loaded = 0),
            (this._file = {
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
            });
    }
    constructor(e, t = 'POST', n) {
        var r;
        super(),
            d(this, '_url', void 0),
            d(this, '_token', ''),
            d(this, '_cancel', void 0),
            d(this, '_lastUpdate', 0),
            d(this, '_loaded', 0),
            d(this, '_file', void 0),
            d(this, '_aborted', !1),
            d(this, '_errored', !1),
            d(this, '_method', void 0),
            d(this, '_raiseEndpointErrors', !1),
            d(this, 'alreadyStarted', !1),
            d(this, 'processingMessageChangeInterval', void 0),
            d(this, 'id', void 0),
            d(this, '_handleStart', (e) => {
                (this._cancel = e), !this.alreadyStarted && this.emit('start', this._file), (this.alreadyStarted = !0);
            }),
            d(this, '_handleProgress', (e, t, n) => {
                let r = Date.now(),
                    i = (0, u.S)(e, t),
                    a = Math.floor((e - this._loaded) / ((r - this._lastUpdate) / 1000));
                if (null != n) {
                    var o;
                    null === (o = this._file.items) ||
                        void 0 === o ||
                        o.forEach((e) => {
                            e.item.progress = n[e.id];
                        });
                }
                (this._lastUpdate = r),
                    (this._loaded = e),
                    (this._file = {
                        ...this._file,
                        currentSize: t,
                        progress: i,
                        rate: a
                    }),
                    this.emit('progress', this._file);
            }),
            d(this, '_handleException', (e) => {
                this._handleError({
                    reason: {
                        type: c.xi.ERROR_SOURCE_UNKNOWN,
                        msg: e.toString()
                    }
                });
            }),
            d(this, '_handleAborted', () => {
                this.clearProcessingMessageInterval();
            }),
            d(this, '_handleError', (e) => {
                let { code: t, reason: n, body: r } = e;
                if ((this.clearProcessingMessageInterval(), !this._aborted)) (this._errored = !0), _.log('_handleError: '.concat(t, ' (').concat(JSON.stringify(n), ') for ').concat(this.id)), this.emit('error', this._file, t, r, n), this.removeAllListeners();
            }),
            d(this, '_handleComplete', (e) => {
                this.clearProcessingMessageInterval(), _.log('_handleComplete for '.concat(this.id)), this.emit('complete', this._file, e), this.removeAllListeners();
            }),
            (this.id = s().uniqueId('Uploader')),
            (this._url = e),
            (this._method = t),
            (this._raiseEndpointErrors = null !== (r = null == n ? void 0 : n.raiseEndpointErrors) && void 0 !== r && r);
    }
}
