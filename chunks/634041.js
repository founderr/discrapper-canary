"use strict";
n(724458);
var i, r, s, o, a = n(442837),
  l = n(46973),
  u = n(570140),
  _ = n(581883),
  c = n(131951),
  d = n(944486),
  E = n(594174),
  I = n(647177);
let T = !1,
  h = null,
  f = !1,
  S = {};

function N(e) {
  var t;
  let n = E.default.getCurrentUser();
  if (null == n) return !1;
  let i = null != e ? e : (0, I.Gx)(null === (t = _.Z.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, n.id);
  return null != d.Z.getVoiceChannelId() && c.Z.isVideoEnabled() && null != i
}

function A() {
  h !== d.Z.getVoiceChannelId() && (f = !1), N() && (f = !0), h = d.Z.getVoiceChannelId()
}
class m extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(_.Z, d.Z, c.Z), this.syncWith([d.Z, c.Z], A)
  }
  get videoFilterAssets() {
    return S
  }
  get hasBeenApplied() {
    return T
  }
  get hasUsedBackgroundInCall() {
    return f
  }
}
o = "VideoBackgroundStore", (s = "displayName") in(r = m) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new m(u.Z, {
  VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function(e) {
    let {
      assets: t
    } = e;
    S = t.reduce((e, t) => ({
      ...e,
      [t.id]: t
    }), {})
  },
  VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function(e) {
    let {
      videoFilterAsset: t
    } = e;
    S = {
      ...S,
      [t.id]: t
    }
  },
  VIDEO_FILTER_ASSET_DELETE_SUCCESS: function(e) {
    let {
      videoFilterAsset: t
    } = e;
    S = {
      ...S
    }, delete S[t.id]
  },
  VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function(e) {
    let {
      backgroundOption: t
    } = e;
    N(t) && (f = !0)
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    l.TO.CAMERA_BACKGROUND_LIVE in t && (T = !0)
  }
})