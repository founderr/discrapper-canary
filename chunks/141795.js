n.d(t, {
    m: function () {
        return r;
    },
    n: function () {
        return C;
    }
}),
    n(47120),
    n(411104);
var r,
    i,
    a = n(392711),
    s = n.n(a),
    o = n(261470),
    l = n(544891),
    u = n(710845),
    c = n(432877),
    d = n(549464),
    f = n(671100),
    _ = n(740492),
    p = n(866960),
    h = n(626135),
    m = n(510990),
    g = n(70956),
    E = n(960048),
    v = n(861990),
    I = n(476326),
    T = n(983544),
    b = n(981631);
function S(e, t, n) {
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
let y = new u.Z('CloudUpload.tsx'),
    A = n(224497).Z;
((i = r || (r = {})).NOT_STARTED = 'NOT_STARTED'), (i.STARTED = 'STARTED'), (i.UPLOADING = 'UPLOADING'), (i.ERROR = 'ERROR'), (i.COMPLETED = 'COMPLETED'), (i.CANCELED = 'CANCELED');
class N {
    constructor() {
        S(this, 'numChunks', void 0), S(this, 'totalRequestCount', void 0), S(this, 'timing', {}), S(this, 'compressAndExtractDisabled', void 0), S(this, 'fileAlreadyPrepped', void 0), S(this, 'imageCompressionQuality', void 0), S(this, 'videoCompressionQuality', void 0), S(this, 'convertedMimeType', void 0), S(this, 'sourceMediaWidth', void 0), S(this, 'sourceMediaHeight', void 0), S(this, 'sourceMediaFormat', void 0), S(this, 'sourceVideoBitrate', void 0);
    }
}
class C extends I.ZP {
    static fromJson(e) {
        let { item: t, channelId: n, showLargeMessageDialog: r, reactNativeFileIndex: i } = e,
            a = new C(t, n, r, i);
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
        return this.item.platform === I.ow.REACT_NATIVE
            ? {
                  timeout: 1 * g.Z.Millis.HOUR,
                  backoff: new o.Z(0.5 * g.Z.Millis.SECOND, 30 * g.Z.Millis.MINUTE),
                  retries: 12
              }
            : {
                  timeout: 1 * g.Z.Millis.HOUR,
                  retries: 12,
                  backoff: new o.Z()
              };
    }
    createAttachmentUrlRetryOpts() {
        return this.item.platform === I.ow.REACT_NATIVE && f.l.getCurrentConfig({ location: 'CloudUpload' }).enabled
            ? {
                  timeout: {
                      response: 30 * g.Z.Millis.SECOND,
                      deadline: 30 * g.Z.Millis.MINUTE
                  },
                  backoff: new o.Z(0.5 * g.Z.Millis.SECOND, 60 * g.Z.Millis.SECOND),
                  retries: 8
              }
            : this.retryOpts();
    }
    async uploadFileToCloudAsChunks(e) {
        if (null == this.responseUrl || '' === this.responseUrl) throw Error('_uploadFileToCloudAsChunks - responseUrl is not set');
        let { contentType: t, fileSize: n, bufferedFileData: r } = await this.prepareChunkUploadItem(),
            i = Math.ceil(n / e);
        (this.uploadAnalytics.numChunks = i), (this.uploadAnalytics.totalRequestCount = 0);
        for (let a = 0; a < i; a++) {
            y.info(
                'Uploading chunk '
                    .concat(a + 1, ' of ')
                    .concat(i, ' for file id ')
                    .concat(this.id)
            );
            let s = a * e,
                o = Math.min(s + e, n),
                l = await this.getChunk(s, o, r);
            try {
                await this.uploadChunk({
                    chunk: l,
                    start: s,
                    end: o,
                    totalSize: n,
                    sessionUrl: this.responseUrl,
                    contentType: t
                });
            } catch (e) {
                throw (
                    (y.error(
                        'Error uploading chunk '
                            .concat(a + 1, ' for file id ')
                            .concat(this.id, ': ')
                            .concat(e)
                    ),
                    e)
                );
            }
        }
        y.log('Upload complete for file id '.concat(this.id));
    }
    async prepareChunkUploadItem() {
        let e, t, n;
        if (this.item.platform === I.ow.REACT_NATIVE) {
            let r = this.item;
            if (((e = null != r.mimeType && '' !== r.mimeType ? r.mimeType : 'application/octet-stream'), null == r.size || 0 === r.size || isNaN(r.size)))
                try {
                    t = await (0, v.Fm)(r.uri);
                } catch (e) {
                    y.warn('Failed to peek content length for file id '.concat(this.id, ', reading whole file instead: ').concat(e)), (t = (n = await (0, v.Lc)(r.uri)).size);
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
        return this.item.platform !== I.ow.REACT_NATIVE ? this.item.file.slice(e, t) : null != n ? n.slice(e, t) : await (0, v.U4)(this.item.uri, e, t);
    }
    async uploadChunk(e) {
        let t = {
            'Content-Type': e.contentType,
            'Content-Range': 'bytes '
                .concat(e.start, '-')
                .concat(e.end - 1, '/')
                .concat(e.totalSize)
        };
        for (let r = 1; r <= 3; r++) {
            var n;
            (this.uploadAnalytics.totalRequestCount = (null !== (n = this.uploadAnalytics.totalRequestCount) && void 0 !== n ? n : 0) + 1),
                y.log(
                    'Attempt '
                        .concat(r, ' for file id ')
                        .concat(this.id, ' : Uploading chunk ')
                        .concat(e.start, '-')
                        .concat(e.end - 1, ' of ')
                        .concat(e.totalSize, ' bytes')
                );
            let i = s().throttle((t) => {
                let n = e.start + t.loaded;
                this.emit('progress', n, e.totalSize, n - this.loaded), (this.loaded = n);
            }, 50);
            try {
                if (
                    (
                        await l.tn.put({
                            url: e.sessionUrl,
                            body: e.chunk,
                            headers: t,
                            signal: this._abortController.signal,
                            onRequestProgress: i,
                            ...this.retryOpts(),
                            rejectWithError: !1
                        })
                    ).ok
                )
                    return;
            } catch (t) {
                if (!this.RESUME_INCOMPLETE_CODES.includes(t.status)) throw t;
                if (this.isUnsuccessfulChunkUpload(t, e.end - 1)) {
                    y.error('Incomplete chunk upload for file id '.concat(this.id, ': ').concat(t.status));
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
        y.log('Uploading '.concat(this.id)),
            this.item.platform === I.ow.REACT_NATIVE
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
        return l.tn.put({
            url: this.responseUrl,
            body: e,
            headers: r,
            signal: this._abortController.signal,
            onRequestProgress: n,
            ...this.retryOpts(),
            rejectWithError: !1
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
        let r = await A.getUploadPayload(this),
            i = (0, T.F)(this.item.target);
        if (null == r.filename || '' === r.filename || 0 === this.currentSize) {
            y.error('File does not have a filename or size is 0.', JSON.stringify(r)), this.handleError(b.evJ.INVALID_FILE_ASSET);
            return;
        }
        if ((null !== (e = this.currentSize) && void 0 !== e ? e : 0) > i.getMaxFileSize(this.channelId)) {
            this.handleError(b.evJ.ENTITY_TOO_LARGE);
            return;
        }
        if (c.ZP.get('upload_fail_50') && 0.5 > Math.random()) {
            setTimeout(() => {
                this.handleError(500);
            }, 1000);
            return;
        }
        try {
            y.log('Requesting upload url for '.concat(this.id));
            let e = await this.trackTime(
                'getUploadUrlTimeMs',
                async () =>
                    await l.tn.post({
                        url: i.getCreateAttachmentURL(this.channelId),
                        body: { files: [r] },
                        ...this.createAttachmentUrlRetryOpts(),
                        rejectWithError: !1
                    })
            );
            this.setResponseUrl(e.body.attachments[0].upload_url), this.setUploadedFilename(e.body.attachments[0].upload_filename);
        } catch (r) {
            let e = null !== (n = null == r ? void 0 : null === (t = r.body) || void 0 === t ? void 0 : t.code) && void 0 !== n ? n : r.status;
            e !== b.evJ.ENTITY_TOO_LARGE && (y.error('Requesting upload url failed with code '.concat(null != e ? e : JSON.stringify(r.body), ' for ').concat(this.id)), E.Z.captureException(r)), this.handleError(e);
            return;
        }
        try {
            let e;
            let t = d.Z.getCurrentConfig({ location: 'CloudUpload' }, { autoTrackExposure: !0 });
            (e = t.enabled && t.chunkSize > 0 ? await this.trackTime('uploadTimeMs', async () => await this.uploadFileToCloudAsChunks(t.chunkSize)) : await this.trackTime('uploadTimeMs', async () => await this.uploadFileToCloud())), this.trackUploadFinished('COMPLETED'), this.handleComplete(e);
        } catch (e) {
            'CANCELED' === this.status ? this.handleComplete(e) : (y.info('Error: status '.concat(e.status, ' for ').concat(this.id)), this.handleError(e));
        }
    }
    async reactNativeCompressAndExtractData() {
        var e;
        if (!(0, T.F)(this.item.target).shouldReactNativeCompressUploads) return (this.uploadAnalytics.compressAndExtractDisabled = !0), y.log('reactNativeCompressAndExtractData() disabled by upload target'), this;
        if (!0 === this.reactNativeFilePrepped) return (this.uploadAnalytics.fileAlreadyPrepped = !0), y.log('reactNativeCompressAndExtractData() file already prepped - '.concat(this.id)), this;
        y.log('Starting compression/conversion for '.concat(this.id));
        let t = await this.trackTime('compressTimeMs', async () => {
            var e;
            return await (0, m.J)(this, null !== (e = this.reactNativeFileIndex) && void 0 !== e ? e : 0);
        });
        if (null == t || null == t.file) return this;
        let n = t.uri,
            r = t.file.name,
            i = t.file.type;
        if (((0, I.rG)(t.file) && ((this.uploadAnalytics.imageCompressionQuality = t.file.imageCompressionQuality), (this.uploadAnalytics.videoCompressionQuality = t.file.videoCompressionQuality), (this.uploadAnalytics.convertedMimeType = t.file.type), void 0 !== t.file.videoMetadata && ((this.uploadAnalytics.sourceMediaWidth = t.file.videoMetadata.width), (this.uploadAnalytics.sourceMediaHeight = t.file.videoMetadata.height), (this.uploadAnalytics.sourceMediaFormat = t.file.videoMetadata.format), (this.uploadAnalytics.sourceVideoBitrate = t.file.videoMetadata.bitrate))), (this.filename = r), null == r || null == n || null == i))
            throw (
                (y.error(
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
        let a = null !== (e = t.fileSize) && void 0 !== e ? e : (await (0, v.Lc)(n)).size;
        if (((this.postCompressionSize = a), (this.currentSize = a), null == a)) throw (y.error('Size missing from file data for '.concat(this.id)), Error('Size missing from file data'));
        return (
            y.log('Completed compression and conversion. Output size='.concat(a, ' bytes; filename=').concat(r, ' for ').concat(this.id)),
            (this.item = {
                ...this.item,
                uri: n,
                filename: r,
                mimeType: i
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
        this.setStatus('COMPLETED'), y.log('Upload complete for '.concat(this.id)), this.emit('complete', e), this.removeAllListeners();
    }
    cancel() {
        y.log('Cancelled called for '.concat(this.id)), this._abortController.abort(), this.trackUploadFinished('CANCELED'), 'COMPLETED' === this.status && this.delete(), this.setStatus('CANCELED'), this.emit('complete'), this.removeAllListeners();
    }
    resetState() {
        return (this.status = 'NOT_STARTED'), (this.uploadedFilename = void 0), (this.responseUrl = void 0), (this.error = void 0), (this.startTime = void 0), (this.uploadAnalytics = new N()), (this._abortController = new AbortController()), super.resetState();
    }
    async delete() {
        if (null == this.uploadedFilename) return;
        let e = (0, T.F)(this.item.target).getDeleteUploadURL(this.uploadedFilename);
        try {
            await l.tn.del(e);
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
        h.default.track(b.rMx.ATTACHMENT_UPLOAD_STARTED, {
            file_size: this.currentSize,
            mime_type: null !== (e = this.mimeType) && void 0 !== e ? e : 'unknown',
            video_upload_quality: _.ZP.videoUploadQuality,
            data_saving_mode: _.ZP.dataSavingMode,
            low_quality_image_mode: _.ZP.dataSavingMode,
            channel_id: this.channelId,
            connection_type: p.Z.getType(),
            effective_connection_speed: p.Z.getEffectiveConnectionSpeed(),
            service_provider: p.Z.getServiceProvider()
        });
    }
    trackUploadFinished(e) {
        var t, n, r, i, a;
        let s = null != this.startTime ? performance.now() - this.startTime : -1;
        h.default.track(b.rMx.ATTACHMENT_UPLOAD_FINISHED, {
            duration_ms: s,
            file_size: this.currentSize,
            pre_compression_file_size: this.preCompressionSize,
            final_state: e,
            mime_type: null !== (t = this.mimeType) && void 0 !== t ? t : 'unknown',
            num_chunks: this.uploadAnalytics.numChunks,
            num_upload_attempts: null !== (n = this.uploadAnalytics.totalRequestCount) && void 0 !== n ? n : 1,
            error_code: this.error,
            video_upload_quality: _.ZP.videoUploadQuality,
            data_saving_mode: _.ZP.dataSavingMode,
            low_quality_image_mode: _.ZP.dataSavingMode,
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
            connection_type: p.Z.getType(),
            effective_connection_speed: p.Z.getEffectiveConnectionSpeed(),
            service_provider: p.Z.getServiceProvider()
        });
    }
    constructor(e, t, n, r) {
        var i, a, s, o;
        super(e, n), S(this, 'RESUME_INCOMPLETE_CODES', [308]), S(this, 'status', 'NOT_STARTED'), S(this, 'channelId', void 0), S(this, 'responseUrl', void 0), S(this, 'currentSize', void 0), S(this, 'preCompressionSize', void 0), S(this, 'postCompressionSize', void 0), S(this, 'loaded', 0), S(this, 'reactNativeFileIndex', void 0), S(this, 'error', void 0), S(this, 'reactNativeFilePrepped', !1), S(this, 'startTime', void 0), S(this, 'uploadAnalytics', new N()), S(this, '_abortController', void 0), S(this, '_xhr', void 0), S(this, '_aborted', !1), (this.channelId = t), (this.preCompressionSize = null !== (s = null === (i = e.file) || void 0 === i ? void 0 : i.size) && void 0 !== s ? s : 0), (this.currentSize = null !== (o = null === (a = e.file) || void 0 === a ? void 0 : a.size) && void 0 !== o ? o : 0), (this.reactNativeFileIndex = r), (this._abortController = new AbortController());
    }
}
