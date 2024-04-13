"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("570140"),
  i = a("536442"),
  r = a("810788"),
  o = a("592125"),
  u = a("131951"),
  d = a("944486"),
  c = a("556296"),
  f = a("131468"),
  E = a("208049"),
  h = a("763296"),
  _ = a("641015"),
  C = a("22382"),
  m = a("747071"),
  S = a("49230"),
  I = a("981631"),
  p = a("65154");

function T(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class g extends f.default {
  _initialize() {
    super._initialize(), !__OVERLAY__ && l.default.subscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  _terminate() {
    super._terminate(), !__OVERLAY__ && l.default.unsubscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  constructor(...e) {
    var t;
    super(...e), t = this, T(this, "playingSoundsWeb", new Map), T(this, "_stopAndClearSounds", () => {
      u.default.supports(p.Features.SAMPLE_PLAYBACK) && u.default.getMediaEngine().eachConnection(e => {
        e.stopAllSamplesLocalPlayback()
      }), this.playingSoundsWeb.forEach(e => {
        e.pause(), e.src = ""
      }), this.playingSoundsWeb = new Map
    }), T(this, "_playSound", async function(e) {
      let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        l = null != s && d.default.getVoiceChannelId() === s;
      if ((null == s || l) && !u.default.isDeaf() && !h.default.isLocalSoundboardMuted(n)) try {
        let s = {
          soundKey: "".concat(n, "-").concat(e),
          soundURL: (0, C.default)(e),
          soundVolume: (0, m.default)(a),
          reportSoundStartedPlaying: () => (0, E.reportSoundStartedPlaying)(e, n)
        };
        u.default.supports(p.Features.SAMPLE_PLAYBACK) ? await (0, S.playDesktopSound)(s) : await (0, S.playWebSound)(s, t.playingSoundsWeb)
      } finally {
        (0, E.reportSoundFinishedPlaying)(e, n)
      }
    }), T(this, "_handleOverlaySoundboardSoundsFetchRequest", () => {
      (0, E.maybeFetchSoundboardSounds)()
    }), T(this, "_handleOpenEducationModal", (e, t) => {
      if (null == e) return;
      let l = o.default.getChannel(t),
        u = c.default.getKeybindForAction(I.GlobalKeybindActions.SOUNDBOARD_HOLD);
      null != l && (0, _.default)(l) && null != u && r.default.hasHotspot(i.HotspotLocations.SOUNDBOARD_WHEEL_EDUCATION_MODAL) && (0, s.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([a.e("99387"), a.e("69208")]).then(a.bind(a, "490166"));
        return a => (0, n.jsx)(t, {
          ...a,
          guildId: e,
          keybind: u,
          channel: l
        })
      })
    })
  }
}
t.default = new g