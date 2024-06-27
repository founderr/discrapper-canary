"use strict";
n.d(t, {
  L9: function() {
    return E
  },
  LY: function() {
    return i
  },
  ND: function() {
    return T
  },
  WC: function() {
    return f
  },
  aW: function() {
    return d
  },
  af: function() {
    return O
  },
  k0: function() {
    return m
  },
  km: function() {
    return N
  },
  no: function() {
    return I
  },
  o6: function() {
    return A
  },
  tI: function() {
    return s
  },
  ws: function() {
    return r
  },
  z8: function() {
    return S
  }
}), n(411104);
var i, r, s, o, a, l, u = n(981631),
  _ = n(474936),
  c = n(689938);

function d(e) {
  switch (e) {
    case 480:
      return 480;
    case 720:
      return 720;
    case 1080:
      return 1080;
    case 1440:
      return 1440;
    case 0:
      return 0;
    default:
      throw Error("Unknown resolution: ".concat(e))
  }
}

function E(e) {
  switch (e) {
    case 5:
      return 5;
    case 15:
      return 15;
    case 30:
      return 30;
    case 60:
      return 60;
    default:
      throw Error("Unknown frame rate: ".concat(e))
  }
}(o = i || (i = {}))[o.RESOLUTION_480 = 480] = "RESOLUTION_480", o[o.RESOLUTION_720 = 720] = "RESOLUTION_720", o[o.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", o[o.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", o[o.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (a = r || (r = {}))[a.FPS_5 = 5] = "FPS_5", a[a.FPS_15 = 15] = "FPS_15", a[a.FPS_30 = 30] = "FPS_30", a[a.FPS_60 = 60] = "FPS_60", (l = s || (s = {}))[l.PRESET_VIDEO = 1] = "PRESET_VIDEO", l[l.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", l[l.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
let I = {
    2: [{
      resolution: 0,
      fps: 15
    }, {
      resolution: 0,
      fps: 5
    }],
    1: [{
      resolution: 1440,
      fps: 60
    }, {
      resolution: 1080,
      fps: 60
    }, {
      resolution: 720,
      fps: 60
    }, {
      resolution: 720,
      fps: 30
    }],
    3: []
  },
  T = [{
    resolution: 0,
    fps: 60,
    quality: _.ys.HIGH_STREAMING_QUALITY
  }, {
    resolution: 0,
    fps: 30,
    quality: _.ys.HIGH_STREAMING_QUALITY
  }, {
    resolution: 0,
    fps: 15,
    quality: _.ys.HIGH_STREAMING_QUALITY
  }, {
    resolution: 0,
    fps: 5,
    preset: 2
  }, {
    resolution: 1440,
    fps: 60,
    guildPremiumTier: u.Eu4.TIER_2,
    quality: _.ys.MID_STREAMING_QUALITY
  }, {
    resolution: 1440,
    fps: 30,
    guildPremiumTier: u.Eu4.TIER_2,
    quality: _.ys.MID_STREAMING_QUALITY
  }, {
    resolution: 1440,
    fps: 15,
    guildPremiumTier: u.Eu4.TIER_2,
    quality: _.ys.MID_STREAMING_QUALITY
  }, {
    resolution: 1080,
    fps: 60,
    guildPremiumTier: u.Eu4.TIER_2,
    quality: _.ys.MID_STREAMING_QUALITY
  }, {
    resolution: 1080,
    fps: 30,
    guildPremiumTier: u.Eu4.TIER_2,
    quality: _.ys.MID_STREAMING_QUALITY
  }, {
    resolution: 1080,
    fps: 15,
    guildPremiumTier: u.Eu4.TIER_2,
    quality: _.ys.MID_STREAMING_QUALITY
  }, {
    resolution: 720,
    fps: 60,
    guildPremiumTier: u.Eu4.TIER_1,
    quality: _.ys.MID_STREAMING_QUALITY
  }, {
    resolution: 720,
    fps: 30
  }, {
    resolution: 720,
    fps: 15
  }, {
    resolution: 720,
    fps: 5
  }, {
    resolution: 480,
    fps: 60,
    guildPremiumTier: u.Eu4.TIER_1,
    quality: _.ys.MID_STREAMING_QUALITY
  }, {
    resolution: 480,
    fps: 30
  }, {
    resolution: 480,
    fps: 15
  }, {
    resolution: 480,
    fps: 5
  }];

function h(e, t) {
  return {
    value: e,
    get label() {
      return null != t ? t() : e
    }
  }
}
let f = [h(720), h(1080), h(1440), h(0, () => c.Z.Messages.SCREENSHARE_SOURCE)],
  S = [h(720), h(1080), h(1440)],
  A = e => 0 === e ? c.Z.Messages.SCREENSHARE_SOURCE : c.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
    resolution: e
  }),
  N = [h(480, () => A(480)), h(720, () => A(720)), h(1080, () => A(1080)), h(1440, () => A(1440)), h(0, () => A(0))],
  m = [h(15), h(30), h(60)],
  O = [h(15, () => c.Z.Messages.STREAM_FPS_OPTION.format({
    value: 15
  })), h(30, () => c.Z.Messages.STREAM_FPS_OPTION.format({
    value: 30
  })), h(60, () => c.Z.Messages.STREAM_FPS_OPTION.format({
    value: 60
  }))]