var r = n(411104);
var i = n(570140),
    a = n(846027),
    o = n(872810),
    s = n(710845),
    l = n(252759),
    u = n(361291),
    c = n(199902),
    d = n(314897),
    _ = n(569545),
    E = n(803647),
    f = n(981631),
    h = n(65154);
function p(e, t, n) {
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
class m {
    _onGameDetectionUpdate(e) {
        if (
            ((this.applications = e.map((e) => {
                var t, n;
                return {
                    applicationId: null !== (t = e.id) && void 0 !== t ? t : null,
                    processId: e.pid,
                    processPath: e.pidPath,
                    windowHandle: null !== (n = e.windowHandle) && void 0 !== n ? n : null,
                    executableName: e.exeName
                };
            })),
            'verbatim-source' !== this.mode)
        )
            this.director.onDetectionUpdate(this.applications);
    }
    _onStreamApplication(e, t) {
        (this.mode = 'application'), (this.streamKey = e), this.director.onStreamBegin(this.applications, t);
    }
    _onStreamDirectSource(e, t, n, r) {
        (this.mode = 'verbatim-source'),
            (this.streamKey = e),
            this._onDirectorAction({
                type: l.A.STREAM,
                sourceId: t,
                audioSourceId: n,
                sound: r
            });
    }
    _onStreamEnd(e) {
        if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
                case 'application':
                    this.director.onStreamEnd();
                    break;
                case 'verbatim-source':
                    this._onDirectorAction({ type: l.A.STOP });
                    break;
                default:
                    var t;
                    throw Error('unknown streaming mode: '.concat(null !== (t = this.mode) && void 0 !== t ? t : '(none)'));
            }
    }
    _onStreamKilled(e) {
        if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
                case 'application':
                    this.director.onStreamKilled();
                    break;
                case 'verbatim-source':
                    break;
                default:
                    var t;
                    throw Error('unknown streaming mode: '.concat(null !== (t = this.mode) && void 0 !== t ? t : '(none)'));
            }
    }
    _onDirectorAction(e) {
        let t = c.Z.getCurrentUserActiveStream(),
            n = u.Z.getState();
        switch (e.type) {
            case l.A.STREAM:
                if ((null != t && (0, o.tK)(t, !1), e.sourceId.startsWith('camera') && null != e.audioSourceId)) {
                    let t = e.sourceId.split(':')[1];
                    a.Z.setGoLiveSource({
                        cameraSettings: {
                            videoDeviceGuid: t,
                            audioDeviceGuid: e.audioSourceId
                        },
                        qualityOptions: {
                            preset: n.preset,
                            resolution: n.resolution,
                            frameRate: n.fps
                        },
                        context: h.Yn.STREAM
                    });
                } else {
                    var r;
                    a.Z.setGoLiveSource({
                        desktopSettings: {
                            sourceId: e.sourceId,
                            sound: null === (r = e.sound) || void 0 === r || r
                        },
                        qualityOptions: {
                            preset: n.preset,
                            resolution: n.resolution,
                            frameRate: n.fps
                        },
                        context: h.Yn.STREAM
                    });
                }
                break;
            case l.A.PAUSE:
                null != t && (0, o.tK)(t, !0);
                break;
            case l.A.STOP:
                null != t && (0, E.Z)(t);
                break;
            default:
                throw Error('unhandled stream action: '.concat(e.type));
        }
    }
    _onCapturePaused(e) {
        let t = c.Z.getCurrentUserActiveStream();
        null != t && (0, o.tK)(t, e);
    }
    _onCaptureEnded() {
        switch (this.mode) {
            case 'application':
                this._onCapturePaused(!0);
                break;
            case 'verbatim-source':
                null != this.streamKey && this._onStreamEnd(this.streamKey);
                break;
            default:
                var e;
                throw Error('unknown streaming mode: '.concat(null !== (e = this.mode) && void 0 !== e ? e : '(none)'));
        }
    }
    constructor() {
        p(this, 'director', void 0),
            p(this, 'applications', void 0),
            p(this, 'streamKey', void 0),
            p(this, 'mode', void 0),
            (this.mode = null),
            (this.applications = []),
            (this.director = new l.a((e) => this._onDirectorAction(e))),
            i.Z.subscribe('STREAM_START', (e) => {
                let { streamType: t, guildId: n, channelId: r, pid: i, sourceId: a, audioSourceId: o, sound: l } = e,
                    u = d.default.getId(),
                    c = (0, _.V9)({
                        streamType: t,
                        guildId: n,
                        channelId: r,
                        ownerId: u
                    });
                (null == i) != (null == a) ? (null != i && this._onStreamApplication(c, i), null != a && this._onStreamDirectSource(c, a, o, l)) : new s.Z('ApplicationSwitchingManager').warn('invalid start_stream: both application + display modes were specified (pid: '.concat(i, ', source-id: ').concat(a, ')'));
            }),
            i.Z.subscribe('STREAM_DELETE', (e) => {
                let { streamKey: t } = e;
                this._onStreamKilled(t);
            }),
            i.Z.subscribe('STREAM_STOP', (e) => {
                let { streamKey: t } = e;
                this._onStreamEnd(t);
            }),
            i.Z.subscribe('RUNNING_GAMES_CHANGE', (e) => {
                let { games: t } = e;
                this._onGameDetectionUpdate(t);
            }),
            i.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: t, context: n } = e;
                n === h.Yn.STREAM && this._onCapturePaused(t === f.FQ1.PAUSED);
            }),
            i.Z.subscribe('MEDIA_ENGINE_SET_GO_LIVE_SOURCE', (e) => {
                let { settings: t } = e;
                (null == t ? void 0 : t.context) === h.Yn.STREAM && (null == t ? void 0 : t.desktopSettings) == null && (null == t ? void 0 : t.cameraSettings) == null && this._onCaptureEnded();
            });
    }
}
t.Z = {
    instance: null,
    init() {
        null == this.instance && (this.instance = new m());
    }
};
