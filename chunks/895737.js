"use strict";
n.r(t), n.d(t, {
  playGiftSound: function() {
    return l
  },
  WebAudioSound: function() {
    return m
  }
}), n("70102");
var s = n("917351"),
  u = n.n(s),
  o = n("804998"),
  i = n("520497"),
  r = n("812809"),
  a = n("42887"),
  c = n("773336");
let d = "default",
  p = d;

function l(e, t) {
  let n = new Audio((0, i.default)(e));
  n.volume = (0, r.default)(t), n.play()
}

function f() {
  null != window.navigator.mediaDevices && window.navigator.mediaDevices.enumerateDevices().then(e => {
    let t = a.default.getOutputDevices(),
      n = u(t).sortBy(e => e.index).findIndex(e => e.id === a.default.getOutputDeviceId()),
      s = t[a.default.getOutputDeviceId()],
      o = e.filter(e => "audiooutput" === e.kind && "communications" !== e.deviceId),
      i = o[n];
    null != s && (null == i || i.label !== s.name) && (i = o.find(e => e.label === s.name)), p = null != i ? i.deviceId : d
  }).catch(() => {
    p = d
  })
}
c.isPlatformEmbedded && (a.default.addChangeListener(f), f());
class m {
  get volume() {
    return this._volume
  }
  set volume(e) {
    this._volume = e, this._ensureAudio().then(() => {
      null != this._gainNode && (this._gainNode.gain.value = e)
    })
  }
  loop() {
    this._ensureAudio().then(e => {
      e.loop = !0, e.play()
    })
  }
  play() {
    this._ensureAudio().then(e => {
      e.loop = !1, e.play()
    })
  }
  pause() {
    null != this._audio && this._audio.then(e => e.pause())
  }
  stop() {
    this._destroyAudio()
  }
  playWithListener() {
    return new Promise((e, t) => {
      this._ensureAudio().then(n => {
        (null == n.duration || 0 === n.duration) && t("sound has no duration"), n.play(), setTimeout(() => {
          e(!0)
        }, n.duration)
      })
    })
  }
  _destroyAudio() {
    null != this._audio && (this._audio.then(e => {
      e.pause(), e.src = ""
    }), this._audio = null)
  }
  _ensureAudio() {
    var e;
    return this._audio = null !== (e = this._audio) && void 0 !== e ? e : new Promise((e, t) => {
      let s = new Audio;
      s.src = n("89400")("../../sounds/".concat(this.name, ".mp3").replace("../../sounds/", "./")), s.onloadeddata = () => {
        c.isPlatformEmbedded && s.setSinkId(p);
        let t = (0, o.getOrCreateAudioContext)();
        this._track = new MediaElementAudioSourceNode(t, {
          mediaElement: s
        });
        let n = Math.min(a.default.getOutputVolume() / 100 * this._volume, 1);
        this._gainNode = new GainNode(t), this._gainNode.gain.value = n, this._track.connect(this._gainNode).connect(t.destination), e(s)
      }, s.onerror = () => t(Error("could not play audio")), s.onended = () => this._destroyAudio(), s.load()
    }), this._audio
  }
  constructor(e, t, n) {
    this.name = e, this._volume = n
  }
}