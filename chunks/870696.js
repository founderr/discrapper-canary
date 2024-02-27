"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("446674"),
  u = n("913144"),
  o = n("168067"),
  i = n("157246");
let r = {
  soundpack: i.Soundpacks.CLASSIC
};
class a extends s.default.PersistedStore {
  initialize(e) {
    o.default.subscribe({
      location: "1"
    }, () => this.emitChange()), null != e && (r = e)
  }
  getState() {
    return r
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
    return t && (e = r.soundpack, Object.values(i.Soundpacks).includes(e)) ? r.soundpack : i.Soundpacks.CLASSIC
  }
}
a.displayName = "SoundpackStore", a.persistKey = "SoundpackStore";
var c = new a(u.default, {
  SET_SOUNDPACK: function(e) {
    let {
      soundpack: t
    } = e;
    r = {
      soundpack: t
    }
  }
})