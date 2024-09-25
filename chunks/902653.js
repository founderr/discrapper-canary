n.r(t),
    n.d(t, {
        WebAudioAPISound: function () {
            return A;
        },
        WebAudioSound: function () {
            return S;
        },
        playGiftSound: function () {
            return T;
        }
    });
var r,
    i = n(47120);
var a = n(411104);
var o = n(392711),
    s = n.n(o),
    l = n(304809),
    u = n(22382),
    c = n(747071),
    d = n(131951),
    _ = n(358085);
function E(e, t, n) {
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
let f = 'default',
    h = f;
!(function (e) {
    (e.Stopped = 'stopped'), (e.Playing = 'playing'), (e.Looping = 'looping'), (e.Paused = 'paused');
})(r || (r = {}));
let p = new Map();
async function m(e) {
    let t = await fetch(n(451343)('./'.concat(e, '.mp3'))).then((e) => e.arrayBuffer());
    return (0, l.N)().decodeAudioData(t);
}
async function I(e) {
    let t = p.get(e);
    return null == t && ((t = m(e)), p.set(e, t)), await t;
}
function T(e, t) {
    let n = new Audio((0, u.Z)(e));
    (n.volume = (0, c.Z)(t)), n.play();
}
function g() {
    if (null != window.navigator.mediaDevices)
        window.navigator.mediaDevices
            .enumerateDevices()
            .then((e) => {
                let t = d.Z.getOutputDevices(),
                    n = s()(t)
                        .sortBy((e) => e.index)
                        .findIndex((e) => e.id === d.Z.getOutputDeviceId()),
                    r = t[d.Z.getOutputDeviceId()],
                    i = e.filter((e) => 'audiooutput' === e.kind && 'communications' !== e.deviceId),
                    a = i[n];
                null != r && (null == a || a.label !== r.name) && (a = i.find((e) => e.label === r.name)), (h = null != a ? a.deviceId : f);
            })
            .catch(() => {
                h = f;
            });
}
_.isPlatformEmbedded && (d.Z.addChangeListener(g), g());
class S {
    get volume() {
        return this._volume;
    }
    set volume(e) {
        (this._volume = e), this._ensureAudio().then((t) => (t.volume = e));
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
        return new Promise((e, t) => {
            this._ensureAudio().then((n) => {
                (null == n.duration || 0 === n.duration) && t('sound has no duration'),
                    n.play(),
                    setTimeout(() => {
                        e(!0);
                    }, n.duration);
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
                    : new Promise((e, t) => {
                          let r = new Audio();
                          (r.src = n(451343)('./'.concat(this.name, '.mp3'))),
                              (r.onloadeddata = () => {
                                  (r.volume = Math.min((d.Z.getOutputVolume() / 100) * this._volume, 1)), _.isPlatformEmbedded && r.setSinkId(h), e(r);
                              }),
                              (r.onerror = () => t(Error('could not play audio'))),
                              (r.onended = () => this._destroyAudio()),
                              r.load();
                      })),
            this._audio
        );
    }
    constructor(e, t, n) {
        E(this, 'name', void 0), E(this, '_volume', void 0), E(this, '_audio', void 0), (this.name = e), (this._volume = n);
    }
}
class A {
    get volume() {
        return this._volume;
    }
    set volume(e) {
        this._ensureAudio().then((t) => {
            let { gainNode: n, context: r } = t;
            (this._volume = e), n.gain.setValueAtTime(e, r.currentTime);
        });
    }
    loop() {
        if ('looping' !== this._state)
            (this._state = 'looping'),
                this._ensureAudio().then((e) => {
                    let { source: t } = e;
                    'looping' === this._state && ((t.loop = !0), t.start());
                });
    }
    play() {
        if ('playing' !== this._state)
            (this._state = 'playing'),
                this._ensureAudio().then((e) => {
                    let { source: t } = e;
                    'playing' === this._state && ((t.loop = !1), t.start());
                });
    }
    pause() {
        if ('paused' !== this._state)
            (this._state = 'paused'),
                this._ensureAudio().then((e) => {
                    let { source: t } = e;
                    'paused' === this._state && (t.stop(), (this._state = 'paused'));
                });
    }
    stop() {
        this._destroyAudio();
    }
    _destroyAudio() {
        if ('stopped' !== this._state)
            (this._state = 'stopped'),
                this._ensureAudio().then((e) => {
                    let { source: t } = e;
                    'stopped' === this._state && (t.disconnect(), t.stop(), (this._source = null), (this._buffer = null), (this._state = 'stopped'), (this._ensureAudioPromise = null));
                });
    }
    async _ensureAudio() {
        if (null == this._ensureAudioPromise) {
            let e = Math.min((d.Z.getOutputVolume() / 100) * this._volume, 1);
            this._ensureAudioPromise = I(this.name)
                .then((t) =>
                    null == t
                        ? Promise.reject(Error('Failed to load audio: '.concat(this.name)))
                        : ((this._audioContext = (0, l.N)()),
                          (this._gain = new GainNode(this._audioContext)),
                          (this._gain.gain.value = e),
                          _.isPlatformEmbedded && this._audioContext.setSinkId(h),
                          (this._buffer = t),
                          (this._source = this._audioContext.createBufferSource()),
                          (this._source.buffer = t),
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
    constructor(e, t, n) {
        E(this, 'name', void 0), E(this, '_volume', void 0), E(this, '_audioContext', void 0), E(this, '_buffer', void 0), E(this, '_source', void 0), E(this, '_gain', void 0), E(this, '_state', void 0), E(this, '_ensureAudioPromise', void 0), (this.name = e), (this._volume = n), (this._audioContext = null), (this._buffer = null), (this._source = null), (this._state = 'stopped'), (this._ensureAudioPromise = null);
    }
}
