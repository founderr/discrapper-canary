"use strict";
n.r(t), n.d(t, {
  playGiftSound: function() {
    return d
  },
  WebAudioSound: function() {
    return f
  }
}), n("70102");
var s = n("917351"),
  u = n.n(s),
  o = n("520497"),
  i = n("812809"),
  r = n("42887"),
  a = n("773336");
let c = "default",
  p = c;

function d(e, t) {
  let n = new Audio((0, o.default)(e));
  n.volume = (0, i.default)(t), n.play()
}

function l() {
  null != window.navigator.mediaDevices && window.navigator.mediaDevices.enumerateDevices().then(e => {
    let t = r.default.getOutputDevices(),
      n = u(t).sortBy(e => e.index).findIndex(e => e.id === r.default.getOutputDeviceId()),
      s = t[r.default.getOutputDeviceId()],
      o = e.filter(e => "audiooutput" === e.kind && "communications" !== e.deviceId),
      i = o[n];
    null != s && (null == i || i.label !== s.name) && (i = o.find(e => e.label === s.name)), p = null != i ? i.deviceId : c
  }).catch(() => {
    p = c
  })
}
a.isPlatformEmbedded && (r.default.addChangeListener(l), l());
class f {
  get volume() {
    return this._volume
  }
  set volume(e) {
    this._volume = e, this._ensureAudio().then(t => t.volume = e)
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
        s.volume = Math.min(r.default.getOutputVolume() / 100 * this._volume, 1), a.isPlatformEmbedded && s.setSinkId(p), e(s)
      }, s.onerror = () => t(Error("could not play audio")), s.onended = () => this._destroyAudio(), s.load()
    }), this._audio
  }
  constructor(e, t, n) {
    this.name = e, this._volume = n
  }
}