"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("77078"),
  a = n("913144"),
  l = n("373469"),
  s = n("42887"),
  r = n("568307"),
  o = n("56947"),
  u = n("111177"),
  d = n("386045"),
  c = n("18346"),
  f = n("803725"),
  E = n("80028"),
  h = n("782340");
class _ extends u.default {
  showClipsToast() {
    (0, i.showToast)({
      id: "CLIPS_IN_CALL_WARNING",
      message: h.default.Messages.CLIPS_IN_CALL_WARNING,
      type: i.ToastType.CLIP,
      options: {
        duration: E.CLIPS_TOAST_DURATION
      }
    })
  }
  applyNativeClipsSettings(e) {
    if (!(0, c.default)(s.default)) return;
    let t = (0, o.areClipsEnabled)(),
      n = d.default.getSettings(),
      i = (n.clipsEnabled || n.decoupledClipsEnabled) && t,
      a = s.default.getMediaEngine();
    if (a.setClipBufferLength(i ? n.clipsLength / 1e3 : 0), (null == e ? void 0 : e.settings.decoupledClipsEnabled) === !0 && this.fireClipsInitEvent(), null == e || (null == e ? void 0 : e.settings.clipsQuality) != null) {
      let {
        frameRate: t,
        resolution: i
      } = n.clipsQuality;
      !a.setClipsQualitySettings(i <= 480 ? i / 3 * 4 : i / 9 * 16, i, t) && null != e && this.fireClipsInitEvent()
    }
  }
  handleClipsInitOnToggleDetection(e) {
    let t = r.default.getVisibleGame();
    null != t && t.id === e.game.id && this.fireClipsInitEvent()
  }
  handleClipsInitOnGamesChange(e) {
    let t = r.default.getVisibleGame();
    if (null == t) return;
    let n = !!e.added.find(e => e.pid === t.pid);
    n ? setTimeout(() => this.fireClipsInitEvent(), E.CLIPS_RUNNING_GAME_CHANGE_CLIPS_INIT_DELAY) : this.fireClipsInitEvent()
  }
  fireClipsInitEvent() {
    if (!(0, c.default)(s.default)) return;
    let e = (0, o.areClipsEnabled)(),
      t = d.default.getSettings(),
      n = t.clipsEnabled && e;
    if (!n || null != l.default.getCurrentUserActiveStream()) return;
    let i = r.default.getVisibleGame();
    (null == i ? void 0 : i.pid) != null && (null == i ? void 0 : i.windowHandle) != null && null != i.name && "" !== i.name && a.default.dispatch({
      type: "CLIPS_INIT",
      sourceId: "window:".concat(null == i ? void 0 : i.windowHandle),
      applicationName: i.name,
      quality: t.clipsQuality
    })
  }
  handleMediaEngineSetHardwareH264(e) {
    let {
      enabled: t
    } = e;
    if (!t) {
      let {
        clipsEnabled: e
      } = d.default.getSettings();
      e && f.updateClipsEnabled({
        clipsEnabled: !1
      })
    }
  }
  disableClips() {
    f.updateClipsEnabled({
      clipsEnabled: !1,
      trackAnalytics: !1
    })
  }
}
var C = new _