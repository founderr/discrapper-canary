r.r(n),
    r.d(n, {
        WebAudioAPISound: function () {
            return y;
        },
        WebAudioSound: function () {
            return b;
        },
        playGiftSound: function () {
            return I;
        }
    });
var i,
    a = r(47120);
var s = r(411104);
var o = r(392711),
    l = r.n(o),
    u = r(304809),
    c = r(22382),
    d = r(747071),
    f = r(131951),
    _ = r(358085);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = 'default',
    m = p;
!(function (e) {
    (e.Stopped = 'stopped'), (e.Playing = 'playing'), (e.Looping = 'looping'), (e.Paused = 'paused');
})(i || (i = {}));
let g = new Map();
async function E(e) {
    let n = await fetch(r(451343)('./'.concat(e, '.mp3'))).then((e) => e.arrayBuffer());
    return (0, u.N)().decodeAudioData(n);
}
async function v(e) {
    let n = g.get(e);
    return null == n && ((n = E(e)), g.set(e, n)), await n;
}
function I(e, n) {
    let r = new Audio((0, c.Z)(e));
    (r.volume = (0, d.Z)(n)), r.play();
}
function T() {
    if (null != window.navigator.mediaDevices)
        window.navigator.mediaDevices
            .enumerateDevices()
            .then((e) => {
                let n = f.Z.getOutputDevices(),
                    r = l()(n)
                        .sortBy((e) => e.index)
                        .findIndex((e) => e.id === f.Z.getOutputDeviceId()),
                    i = n[f.Z.getOutputDeviceId()],
                    a = e.filter((e) => 'audiooutput' === e.kind && 'communications' !== e.deviceId),
                    s = a[r];
                null != i && (null == s || s.label !== i.name) && (s = a.find((e) => e.label === i.name)), (m = null != s ? s.deviceId : p);
            })
            .catch(() => {
                m = p;
            });
}
_.isPlatformEmbedded && (f.Z.addChangeListener(T), T());
class b {
    get volume() {
        return this._volume;
    }
    set volume(e) {
        (this._volume = e), this._ensureAudio().then((n) => (n.volume = e));
    }
    loop() {
        this._ensureAudio().then((e) => {
            (e.loop = !0), e.play();
        });
    }
    play() {
        this._ensureAudio().then((e) => {
            (e.loop = !1), e.play();
        });
    }
    pause() {
        null != this._audio && this._audio.then((e) => e.pause());
    }
    stop() {
        this._destroyAudio();
    }
    playWithListener() {
        return new Promise((e, n) => {
            this._ensureAudio().then((r) => {
                (null == r.duration || 0 === r.duration) && n('sound has no duration'),
                    r.play(),
                    setTimeout(() => {
                        e(!0);
                    }, r.duration);
            });
        });
    }
    _destroyAudio() {
        null != this._audio &&
            (this._audio.then((e) => {
                e.pause(), (e.src = '');
            }),
            (this._audio = null));
    }
    _ensureAudio() {
        var e;
        return (
            (this._audio =
                null !== (e = this._audio) && void 0 !== e
                    ? e
                    : new Promise((e, n) => {
                          let i = new Audio();
                          (i.src = r(451343)('./'.concat(this.name, '.mp3'))),
                              (i.onloadeddata = () => {
                                  (i.volume = Math.min((f.Z.getOutputVolume() / 100) * this._volume, 1)), _.isPlatformEmbedded && i.setSinkId(m), e(i);
                              }),
                              (i.onerror = () => n(Error('could not play audio'))),
                              (i.onended = () => this._destroyAudio()),
                              i.load();
                      })),
            this._audio
        );
    }
    constructor(e, n, r) {
        h(this, 'name', void 0), h(this, '_volume', void 0), h(this, '_audio', void 0), (this.name = e), (this._volume = r);
    }
}
class y {
    get volume() {
        return this._volume;
    }
    set volume(e) {
        this._ensureAudio().then((n) => {
            let { gainNode: r, context: i } = n;
            (this._volume = e), r.gain.setValueAtTime(e, i.currentTime);
        });
    }
    loop() {
        if ('looping' !== this._state)
            (this._state = 'looping'),
                this._ensureAudio().then((e) => {
                    let { source: n } = e;
                    'looping' === this._state && ((n.loop = !0), n.start());
                });
    }
    play() {
        if ('playing' !== this._state)
            (this._state = 'playing'),
                this._ensureAudio().then((e) => {
                    let { source: n } = e;
                    'playing' === this._state && ((n.loop = !1), n.start());
                });
    }
    pause() {
        if ('paused' !== this._state)
            (this._state = 'paused'),
                this._ensureAudio().then((e) => {
                    let { source: n } = e;
                    'paused' === this._state && (n.stop(), (this._state = 'paused'));
                });
    }
    stop() {
        this._destroyAudio();
    }
    _destroyAudio() {
        if ('stopped' !== this._state)
            (this._state = 'stopped'),
                this._ensureAudio().then((e) => {
                    let { source: n } = e;
                    'stopped' === this._state && (n.disconnect(), n.stop(), (this._source = null), (this._buffer = null), (this._state = 'stopped'), (this._ensureAudioPromise = null));
                });
    }
    async _ensureAudio() {
        if (null == this._ensureAudioPromise) {
            let e = Math.min((f.Z.getOutputVolume() / 100) * this._volume, 1);
            this._ensureAudioPromise = v(this.name)
                .then((n) =>
                    null == n
                        ? Promise.reject(Error('Failed to load audio: '.concat(this.name)))
                        : ((this._audioContext = (0, u.N)()),
                          (this._gain = new GainNode(this._audioContext)),
                          (this._gain.gain.value = e),
                          _.isPlatformEmbedded && this._audioContext.setSinkId(m),
                          (this._buffer = n),
                          (this._source = this._audioContext.createBufferSource()),
                          (this._source.buffer = n),
                          this._source.connect(this._gain).connect(this._audioContext.destination),
                          (this._source.loop = !1),
                          (this._source.onended = () => this._destroyAudio()),
                          Promise.resolve({
                              context: this._audioContext,
                              gainNode: this._gain,
                              source: this._source
                          }))
                )
                .catch(() => Promise.reject(Error('Failed to load audio: '.concat(this.name))));
        }
        return await this._ensureAudioPromise;
    }
    constructor(e, n, r) {
        h(this, 'name', void 0), h(this, '_volume', void 0), h(this, '_audioContext', void 0), h(this, '_buffer', void 0), h(this, '_source', void 0), h(this, '_gain', void 0), h(this, '_state', void 0), h(this, '_ensureAudioPromise', void 0), (this.name = e), (this._volume = r), (this._audioContext = null), (this._buffer = null), (this._source = null), (this._state = 'stopped'), (this._ensureAudioPromise = null);
    }
}
