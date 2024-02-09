"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("446674"),
  u = n("913144"),
  o = n("168067"),
  r = n("157246");
let a = {
  soundpack: r.Soundpacks.CLASSIC
};
class i extends s.default.PersistedStore {
  initialize(e) {
    o.default.subscribe({
      location: "1"
    }, () => this.emitChange()), null != e && (a = e)
  }
  getState() {
    return a
  }
  getSoundpack() {
    var e;
    let {
      allowAprilFoolsSoundpack: t
    } = o.default.getCurrentConfig({
      location: "37bac2_1"
    }, {
      autoTrackExposure: !1
    });
    return t && (e = a.soundpack, Object.values(r.Soundpacks).includes(e)) ? a.soundpack : r.Soundpacks.CLASSIC
  }
}
i.displayName = "SoundpackStore", i.persistKey = "SoundpackStore";
var c = new i(u.default, {
  SET_SOUNDPACK: function(e) {
    let {
      soundpack: t
    } = e;
    a = {
      soundpack: t
    }
  }
})