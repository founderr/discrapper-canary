n(47120);
var i = n(735250);
n(470079);
var s = n(481060),
  l = n(570140),
  a = n(536442),
  r = n(810788),
  o = n(592125),
  c = n(131951),
  u = n(944486),
  d = n(556296),
  E = n(131468),
  h = n(208049),
  _ = n(763296),
  I = n(641015),
  m = n(22382),
  g = n(747071),
  p = n(49230),
  T = n(981631),
  N = n(65154);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class C extends E.Z {
  _initialize() {
    super._initialize(), !__OVERLAY__ && l.Z.subscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  _terminate() {
    super._terminate(), !__OVERLAY__ && l.Z.unsubscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  constructor(...e) {
    var t;
    super(...e), t = this, S(this, "playingSoundsWeb", new Map), S(this, "_stopAndClearSounds", () => {
      c.Z.supports(N.AN.SAMPLE_PLAYBACK) && c.Z.getMediaEngine().eachConnection(e => {
        e.stopAllSamplesLocalPlayback()
      }), this.playingSoundsWeb.forEach(e => {
        e.pause(), e.src = ""
      }), this.playingSoundsWeb = new Map
    }), S(this, "_playSound", async function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        i = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        l = null != s && u.Z.getVoiceChannelId() === s;
      if ((null == s || l) && !c.Z.isDeaf() && !_.Z.isLocalSoundboardMuted(i)) try {
        let s = {
          soundKey: "".concat(i, "-").concat(e),
          soundURL: (0, m.Z)(e),
          soundVolume: (0, g.Z)(n),
          reportSoundStartedPlaying: () => (0, h.xR)(e, i)
        };
        c.Z.supports(N.AN.SAMPLE_PLAYBACK) ? await (0, p.$)(s) : await (0, p.h)(s, t.playingSoundsWeb)
      } finally {
        (0, h.R)(e, i)
      }
    }), S(this, "_handleOverlaySoundboardSoundsFetchRequest", () => {
      (0, h.w)()
    }), S(this, "_handleOpenEducationModal", (e, t) => {
      if (null == e) return;
      let l = o.Z.getChannel(t),
        c = d.Z.getKeybindForAction(T.kg4.SOUNDBOARD_HOLD);
      null != l && (0, I.Z)(l) && null != c && r.Z.hasHotspot(a.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL) && (0, s.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("69208")]).then(n.bind(n, 490166));
        return n => (0, i.jsx)(t, {
          ...n,
          guildId: e,
          keybind: c,
          channel: l
        })
      })
    })
  }
}
t.Z = new C