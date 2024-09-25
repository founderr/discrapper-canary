n.d(t, {
    m: function () {
        return r;
    },
    n: function () {
        return y;
    }
});
var r,
    i = n(47120);
var a = n(411104);
var o = n(392711),
    s = n.n(o),
    l = n(261470),
    u = n(544891),
    c = n(710845),
    d = n(432877),
    _ = n(549464),
    E = n(671100),
    f = n(740492),
    h = n(866960),
    p = n(626135),
    m = n(510990),
    I = n(70956),
    T = n(960048),
    g = n(861990),
    S = n(476326),
    A = n(983544),
    v = n(981631);
function N(e, t, n) {
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
let O = new c.Z('CloudUpload.tsx'),
    R = n(224497).Z;
!(function (e) {
    (e.NOT_STARTED = 'NOT_STARTED'), (e.STARTED = 'STARTED'), (e.UPLOADING = 'UPLOADING'), (e.ERROR = 'ERROR'), (e.COMPLETED = 'COMPLETED'), (e.CANCELED = 'CANCELED');
})(r || (r = {}));
class C {
    constructor() {
        N(this, 'numChunks', void 0), N(this, 'totalRequestCount', void 0), N(this, 'timing', {}), N(this, 'compressAndExtractDisabled', void 0), N(this, 'fileAlreadyPrepped', void 0), N(this, 'imageCompressionQuality', void 0), N(this, 'videoCompressionQuality', void 0), N(this, 'convertedMimeType', void 0), N(this, 'sourceMediaWidth', void 0), N(this, 'sourceMediaHeight', void 0), N(this, 'sourceMediaFormat', void 0), N(this, 'sourceVideoBitrate', void 0);
    }
}
class y extends S.ZP {
    static fromJson(e) {
        let { item: t, channelId: n, showLargeMessageDialog: r, reactNativeFileIndex: i } = e,
            a = new y(t, n, r, i);
        return (
            'COMPLETED' !== a.status && (a.status = 'NOT_STARTED'),
            Object.entries(e).forEach((e) => {
                let [t, n] = e;
                if (!t.startsWith('_')) a[t] = n;
            }),
            a
        );
    }
    retryOpts() {
        if (this.item.platform === S.ow.REACT_NATIVE)
            return E.l.getCurrentConfig({ location: 'CloudUpload' }).enabled
                ? {
                      timeout: {
                          response: 10 * I.Z.Millis.SECOND,
                          deadline: 30 * I.Z.Millis.MINUTE
                      },
                      backoff: new l.Z(0.5 * I.Z.Millis.SECOND, 60 * I.Z.Millis.SECOND),
                      retries: 8
                  }
                : {
                      timeout: 1 * I.Z.Millis.HOUR,
                      backoff: new l.Z(0.5 * I.Z.Millis.SECOND, 30 * I.Z.Millis.MINUTE),
                      retries: 12
                  };
        return {
            timeout: 1 * I.Z.Millis.HOUR,
            retries: 12,
            backoff: new l.Z()
        };
    }
    async uploadFileToCloudAsChunks(e) {
        if (null == this.responseUrl || '' === this.responseUrl) throw Error('_uploadFileToCloudAsChunks - responseUrl is not set');
        let { contentType: t, fileSize: n, bufferedFileData: r } = await this.prepareChunkUploadItem(),
            i = Math.ceil(n / e);
        (this.uploadAnalytics.numChunks = i), (this.uploadAnalytics.totalRequestCount = 0);
        for (let a = 0; a < i; a++) {
            O.info(
                'Uploading chunk '
                    .concat(a + 1, ' of ')
                    .concat(i, ' for file id ')
                    .concat(this.id)
            );
            let o = a * e,
                s = Math.min(o + e, n),
                l = await this.getChunk(o, s, r);
            try {
                await this.uploadChunk({
                    chunk: l,
                    start: o,
                    end: s,
                    totalSize: n,
                    sessionUrl: this.responseUrl,
                    contentType: t
                });
            } catch (e) {
                throw (
                    (O.error(
                        'Error uploading chunk '
                            .concat(a + 1, ' for file id ')
                            .concat(this.id, ': ')
                            .concat(e)
                    ),
                    e)
                );
            }
        }
        O.log('Upload complete for file id '.concat(this.id));
    }
    async prepareChunkUploadItem() {
        let e, t, n;
        if (this.item.platform === S.ow.REACT_NATIVE) {
            let r = this.item;
            if (((e = null != r.mimeType && '' !== r.mimeType ? r.mimeType : 'application/octet-stream'), null == r.size || 0 === r.size || isNaN(r.size)))
                try {
                    t = await (0, g.Fm)(r.uri);
                } catch (e) {
                    O.warn('Failed to peek content length for file id '.concat(this.id, ', reading whole file instead: ').concat(e)), (t = (n = await (0, g.Lc)(r.uri)).size);
                }
            else t = r.size;
        } else (e = 'application/octet-stream'), (t = this.item.file.size);
        return {
            contentType: e,
            fileSize: t,
            bufferedFileData: n
        };
    }
    async getChunk(e, t, n) {
        return this.item.platform !== S.ow.REACT_NATIVE ? this.item.file.slice(e, t) : null != n ? n.slice(e, t) : await (0, g.U4)(this.item.uri, e, t);
    }
    async uploadChunk(e) {
        let t = {
                'Content-Type': e.contentType,
                'Content-Range': 'bytes '
                    .concat(e.start, '-')
                    .concat(e.end - 1, '/')
                    .concat(e.totalSize)
            },
            n = 3;
        for (let i = 1; i <= n; i++) {
            var r;
            (this.uploadAnalytics.totalRequestCount = (null !== (r = this.uploadAnalytics.totalRequestCount) && void 0 !== r ? r : 0) + 1),
                O.log(
                    'Attempt '
                        .concat(i, ' for file id ')
                        .concat(this.id, ' : Uploading chunk ')
                        .concat(e.start, '-')
                        .concat(e.end - 1, ' of ')
                        .concat(e.totalSize, ' bytes')
                );
            let n = s().throttle((t) => {
                let n = e.start + t.loaded;
                this.emit('progress', n, e.totalSize, n - this.loaded), (this.loaded = n);
            }, 50);
            try {
                if (
                    (
                        await u.tn.put({
                            url: e.sessionUrl,
                            body: e.chunk,
                            headers: t,
                            signal: this._abortController.signal,
                            onRequestProgress: n,
                            ...this.retryOpts()
                        })
                    ).ok
                )
                    return;
            } catch (t) {
                if (!this.RESUME_INCOMPLETE_CODES.includes(t.status)) throw t;
                if (this.isUnsuccessfulChunkUpload(t, e.end - 1)) {
                    O.error('Incomplete chunk upload for file id '.concat(this.id, ': ').concat(t.status));
                    continue;
                }
                return;
            }
        }
        throw Error('Failed to upload chunk');
    }
    isUnsuccessfulChunkUpload(e, t) {
        if (null == e.headers.range || '' === e.headers.range) return !0;
        let n = e.headers.range.match(/bytes=(\d+)-(\d+)/);
        return null !== n && parseInt(n[2], 10) !== t;
    }
    uploadFileToCloud() {
        let e, t;
        if (null == this.responseUrl) throw Error('_uploadFileToCloud - responseUrl is not set');
        O.log('Uploading '.concat(this.id)),
            this.item.platform === S.ow.REACT_NATIVE
                ? (t =
                      null !=
                          (e = {
                              type: this.item.mimeType,
                              uri: this.item.uri,
                              name: this.item.filename
                          }).type && 'application/json' !== e.type
                          ? e.type
                          : 'application/octet-stream')
                : ((e = this.item.file), (t = 'application/octet-stream'));
        let n = s().throttle((e) => {
                this.emit('progress', e.loaded, e.total, e.loaded - this.loaded), (this.loaded = e.loaded);
            }, 50),
            r = { 'Content-Type': t };
        return u.tn.put({
            url: this.responseUrl,
            body: e,
            headers: r,
            signal: this._abortController.signal,
            onRequestProgress: n,
            ...this.retryOpts()
        });
    }
    async getSize() {
        var e;
        return null !== (e = this.currentSize) && void 0 !== e ? e : 0;
    }
    async trackTime(e, t) {
        let n = performance.now();
        try {
            return await t();
        } finally {
            this.uploadAnalytics.timing[e] = performance.now() - n;
        }
    }
    async upload() {
        var e, t, n;
        if ('COMPLETED' === this.status) return;
        this.setStatus('STARTED'), (this.startTime = performance.now()), this.trackUploadStart();
        if ('CANCELED' === this.status) {
            this.handleComplete(this.id);
            return;
        }
        let r = await R.getUploadPayload(this),
            i = (0, A.F)(this.item.target);
        if (null == r.filename || '' === r.filename || 0 === this.currentSize) {
            O.error('File does not have a filename or size is 0.', JSON.stringify(r)), this.handleError(v.evJ.INVALID_FILE_ASSET);
            return;
        }
        if ((null !== (e = this.currentSize) && void 0 !== e ? e : 0) > i.getMaxFileSize(this.channelId)) {
            this.handleError(v.evJ.ENTITY_TOO_LARGE);
            return;
        }
        if (d.ZP.get('upload_fail_50') && 0.5 > Math.random()) {
            setTimeout(() => {
                this.handleError(500);
            }, 1000);
            return;
        }
        try {
            O.log('Requesting upload url for '.concat(this.id));
            let e = await this.trackTime(
                'getUploadUrlTimeMs',
                async () =>
                    await u.tn.post({
                        url: i.getCreateAttachmentURL(this.channelId),
                        body: { files: [r] },
                        ...this.retryOpts()
                    })
            );
            this.setResponseUrl(e.body.attachments[0].upload_url), this.setUploadedFilename(e.body.attachments[0].upload_filename);
        } catch (r) {
            let e = null !== (n = null == r ? void 0 : null === (t = r.body) || void 0 === t ? void 0 : t.code) && void 0 !== n ? n : r.status;
            e !== v.evJ.ENTITY_TOO_LARGE && (O.error('Requesting upload url failed with code '.concat(null != e ? e : JSON.stringify(r.body), ' for ').concat(this.id)), T.Z.captureException(r)), this.handleError(e);
            return;
        }
        try {
            let e;
            let t = _.Z.getCurrentConfig({ location: 'CloudUpload' }, { autoTrackExposure: !0 });
            (e = t.enabled && t.chunkSize > 0 ? await this.trackTime('uploadTimeMs', async () => await this.uploadFileToCloudAsChunks(t.chunkSize)) : await this.trackTime('uploadTimeMs', async () => await this.uploadFileToCloud())), this.trackUploadFinished('COMPLETED'), this.handleComplete(e);
        } catch (e) {
            'CANCELED' === this.status ? this.handleComplete(e) : (O.info('Error: status '.concat(e.status, ' for ').concat(this.id)), this.handleError(e));
        }
    }
    async reactNativeCompressAndExtractData() {
        var e;
        if (!(0, A.F)(this.item.target).shouldReactNativeCompressUploads) return (this.uploadAnalytics.compressAndExtractDisabled = !0), O.log('reactNativeCompressAndExtractData() disabled by upload target'), this;
        if (!0 === this.reactNativeFilePrepped) return (this.uploadAnalytics.fileAlreadyPrepped = !0), O.log('reactNativeCompressAndExtractData() file already prepped - '.concat(this.id)), this;
        O.log('Starting compression/conversion for '.concat(this.id));
        let t = await this.trackTime('compressTimeMs', async () => {
            var e;
            return await (0, m.J)(this, null !== (e = this.reactNativeFileIndex) && void 0 !== e ? e : 0);
        });
        if (null == t || null == t.file) return this;
        let n = t.uri,
            r = t.file.name,
            i = t.file.type;
        if (((0, S.rG)(t.file) && ((this.uploadAnalytics.imageCompressionQuality = t.file.imageCompressionQuality), (this.uploadAnalytics.videoCompressionQuality = t.file.videoCompressionQuality), (this.uploadAnalytics.convertedMimeType = t.file.type), void 0 !== t.file.videoMetadata && ((this.uploadAnalytics.sourceMediaWidth = t.file.videoMetadata.width), (this.uploadAnalytics.sourceMediaHeight = t.file.videoMetadata.height), (this.uploadAnalytics.sourceMediaFormat = t.file.videoMetadata.format), (this.uploadAnalytics.sourceVideoBitrate = t.file.videoMetadata.bitrate))), (this.filename = r), null == r || null == n || null == i))
            throw (
                (O.error(
                    'Insufficient file data: '
                        .concat(
                            {
                                filename: r,
                                uri: n,
                                mimeType: i
                            },
                            ' for '
                        )
                        .concat(this.id)
                ),
                Error(
                    'Insufficient file data: '.concat({
                        filename: r,
                        uri: n,
                        mimeType: i
                    })
                ))
            );
        let a = null !== (e = t.fileSize) && void 0 !== e ? e : (await (0, g.Lc)(n)).size;
        if (((this.postCompressionSize = a), (this.currentSize = a), null == a)) throw (O.error('Size missing from file data for '.concat(this.id)), Error('Size missing from file data'));
        O.log('Completed compression and conversion. Output size='.concat(a, ' bytes; filename=').concat(r, ' for ').concat(this.id));
        let o = {
            uri: n,
            filename: r,
            mimeType: i
        };
        return (
            (this.item = {
                ...this.item,
                ...o
            }),
            (this.reactNativeFilePrepped = !0),
            this
        );
    }
    handleError(e) {
        this.setStatus('ERROR'), (this.error = e), this.trackUploadFinished('ERROR');
        try {
            this.emit('error', e);
        } catch {}
        this.removeAllListeners();
    }
    handleComplete(e) {
        this.setStatus('COMPLETED'), O.log('Upload complete for '.concat(this.id)), this.emit('complete', e), this.removeAllListeners();
    }
    cancel() {
        O.log('Cancelled called for '.concat(this.id)), this._abortController.abort(), this.trackUploadFinished('CANCELED'), 'COMPLETED' === this.status && this.delete(), this.setStatus('CANCELED'), this.emit('complete'), this.removeAllListeners();
    }
    resetState() {
        return (this.status = 'NOT_STARTED'), (this.uploadedFilename = void 0), (this.responseUrl = void 0), (this.error = void 0), (this.startTime = void 0), (this.uploadAnalytics = new C()), (this._abortController = new AbortController()), super.resetState();
    }
    async delete() {
        if (null == this.uploadedFilename) return;
        let e = (0, A.F)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
        try {
            await u.tn.del(e);
        } catch {}
    }
    setResponseUrl(e) {
        this.responseUrl = e;
    }
    setStatus(e) {
        this.status = e;
    }
    setFilename(e) {
        this.filename = e;
    }
    setUploadedFilename(e) {
        this.uploadedFilename = e;
    }
    trackUploadStart() {
        var e;
        p.default.track(v.rMx.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: null !== (e = this.mimeType) && void 0 !== e ? e : 'unknown',
            video_upload_quality: f.ZP.videoUploadQuality,
            data_saving_mode: f.ZP.dataSavingMode,
            low_quality_image_mode: f.ZP.dataSavingMode,
            channel_id: this.channelId,
            connection_type: h.Z.getType(),
            effective_connection_speed: h.Z.getEffectiveConnectionSpeed(),
            service_provider: h.Z.getServiceProvider()
        });
    }
    trackUploadFinished(e) {
        var t, n, r, i, a;
        let o = null != this.startTime ? performance.now() - this.startTime : -1;
        p.default.track(v.rMx.ATTACHMENT_UPLOAD_FINISHED, {
            duration_ms: o,
            file_size: this.currentSize,
            pre_compression_file_size: this.preCompressionSize,
            final_state: e,
            mime_type: null !== (t = this.mimeType) && void 0 !== t ? t : 'unknown',
            num_chunks: this.uploadAnalytics.numChunks,
            num_upload_attempts: null !== (n = this.uploadAnalytics.totalRequestCount) && void 0 !== n ? n : 1,
            error_code: this.error,
            video_upload_quality: f.ZP.videoUploadQuality,
            data_saving_mode: f.ZP.dataSavingMode,
            low_quality_image_mode: f.ZP.dataSavingMode,
            compress_time_ms: this.uploadAnalytics.timing.compressTimeMs,
            get_upload_url_time_ms: this.uploadAnalytics.timing.getUploadUrlTimeMs,
            upload_time_ms: this.uploadAnalytics.timing.uploadTimeMs,
            converted_mime_type: null !== (r = this.uploadAnalytics.convertedMimeType) && void 0 !== r ? r : 'unknown',
            image_compression_quality: null !== (i = this.uploadAnalytics.imageCompressionQuality) && void 0 !== i ? i : 0,
            video_compression_quality: null !== (a = this.uploadAnalytics.videoCompressionQuality) && void 0 !== a ? a : 'unknown',
            was_converted: this.mimeType !== this.uploadAnalytics.convertedMimeType,
            was_compressed: this.currentSize < this.preCompressionSize,
            source_media_width: this.uploadAnalytics.sourceMediaWidth,
            source_media_height: this.uploadAnalytics.sourceMediaHeight,
            source_media_format: this.uploadAnalytics.sourceMediaFormat,
            source_video_bitrate: this.uploadAnalytics.sourceVideoBitrate,
            channel_id: this.channelId,
            connection_type: h.Z.getType(),
            effective_connection_speed: h.Z.getEffectiveConnectionSpeed(),
            service_provider: h.Z.getServiceProvider()
        });
    }
    constructor(e, t, n, r) {
        var i, a, o, s;
        super(e, n), N(this, 'RESUME_INCOMPLETE_CODES', [308]), N(this, 'status', 'NOT_STARTED'), N(this, 'channelId', void 0), N(this, 'responseUrl', void 0), N(this, 'currentSize', void 0), N(this, 'preCompressionSize', void 0), N(this, 'postCompressionSize', void 0), N(this, 'loaded', 0), N(this, 'reactNativeFileIndex', void 0), N(this, 'error', void 0), N(this, 'reactNativeFilePrepped', !1), N(this, 'startTime', void 0), N(this, 'uploadAnalytics', new C()), N(this, '_abortController', void 0), N(this, '_xhr', void 0), N(this, '_aborted', !1), (this.channelId = t), (this.preCompressionSize = null !== (o = null === (i = e.file) || void 0 === i ? void 0 : i.size) && void 0 !== o ? o : 0), (this.currentSize = null !== (s = null === (a = e.file) || void 0 === a ? void 0 : a.size) && void 0 !== s ? s : 0), (this.reactNativeFileIndex = r), (this._abortController = new AbortController());
    }
}
