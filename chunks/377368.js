"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var s = n("481060"),
  i = n("570140"),
  l = n("536442"),
  r = n("810788"),
  o = n("592125"),
  u = n("131951"),
  d = n("944486"),
  c = n("556296"),
  f = n("131468"),
  E = n("208049"),
  h = n("763296"),
  _ = n("641015"),
  C = n("22382"),
  m = n("747071"),
  p = n("49230"),
  S = n("981631"),
  g = n("65154");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class T extends f.default {
  _initialize() {
    super._initialize(), !__OVERLAY__ && i.default.subscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  _terminate() {
    super._terminate(), !__OVERLAY__ && i.default.unsubscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  constructor(...e) {
    var t;
    super(...e), t = this, I(this, "playingSoundsWeb", new Map), I(this, "_stopAndClearSounds", () => {
      u.default.supports(g.Features.SAMPLE_PLAYBACK) && u.default.getMediaEngine().eachConnection(e => {
        e.stopAllSamplesLocalPlayback()
      }), this.playingSoundsWeb.forEach(e => {
        e.pause(), e.src = ""
      }), this.playingSoundsWeb = new Map
    }), I(this, "_playSound", async function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        a = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        i = null != s && d.default.getVoiceChannelId() === s;
      if ((null == s || i) && !u.default.isDeaf() && !h.default.isLocalSoundboardMuted(a)) try {
        let s = {
          soundKey: "".concat(a, "-").concat(e),
          soundURL: (0, C.default)(e),
          soundVolume: (0, m.default)(n),
          reportSoundStartedPlaying: () => (0, E.reportSoundStartedPlaying)(e, a)
        };
        u.default.supports(g.Features.SAMPLE_PLAYBACK) ? await (0, p.playDesktopSound)(s) : await (0, p.playWebSound)(s, t.playingSoundsWeb)
      } finally {
        (0, E.reportSoundFinishedPlaying)(e, a)
      }
    }), I(this, "_handleOverlaySoundboardSoundsFetchRequest", () => {
      (0, E.maybeFetchSoundboardSounds)()
    }), I(this, "_handleOpenEducationModal", (e, t) => {
      if (null == e) return;
      let i = o.default.getChannel(t),
        u = c.default.getKeybindForAction(S.GlobalKeybindActions.SOUNDBOARD_HOLD);
      null != i && (0, _.default)(i) && null != u && r.default.hasHotspot(l.HotspotLocations.SOUNDBOARD_WHEEL_EDUCATION_MODAL) && (0, s.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("69208")]).then(n.bind(n, "490166"));
        return n => (0, a.jsx)(t, {
          ...n,
          guildId: e,
          keybind: u,
          channel: i
        })
      })
    })
  }
}
t.default = new T