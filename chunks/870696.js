"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("446674"),
  i = n("913144"),
  u = n("168067"),
  a = n("157246");
let o = {
  soundpack: a.Soundpacks.CLASSIC
};
class d extends s.default.PersistedStore {
  initialize(e) {
    u.default.subscribe({
      location: "1"
    }, () => this.emitChange()), null != e && (o = e)
  }
  getState() {
    return o
  }
  getSoundpack() {
    var e;
    let {
      allowAprilFoolsSoundpack: t
    } = u.default.getCurrentConfig({
      location: "37bac2_1"
    }, {
      autoTrackExposure: !1
    });
    return t && (e = o.soundpack, Object.values(a.Soundpacks).includes(e)) ? o.soundpack : a.Soundpacks.CLASSIC
  }
}
d.displayName = "SoundpackStore", d.persistKey = "SoundpackStore";
var c = new d(i.default, {
  SET_SOUNDPACK: function(e) {
    let {
      soundpack: t
    } = e;
    o = {
      soundpack: t
    }
  }
})