n.d(t, {
  UB: function() {
return A;
  },
  Uc: function() {
return c;
  }
});
var r, o, i, a, c, l, s = n(470079),
  u = n(442837),
  d = n(570140),
  f = n(872810),
  _ = n(998594),
  p = n(592125),
  m = n(430824),
  h = n(131951),
  g = n(496675),
  b = n(944486),
  C = n(382182),
  I = n(74299),
  v = n(65154);
(r = c || (c = {}))[r.Present = 0] = 'Present', r[r.Update = 1] = 'Update', r[r.Cancel = 2] = 'Cancel', r[r.Error = 3] = 'Error';
let S = 0,
  x = {};

function E() {
  return h.Z.supports(v.AN.NATIVE_SCREENSHARE_PICKER);
}

function N() {
  return E() && _.Z.getCurrentConfig({
location: 'NativeScreenSharePickerStore_enabled'
  }, {
autoTrackExposure: !1
  }).enableSystemPicker;
}

function T() {
  var e, t;
  null === (t = h.Z.getMediaEngine()) || void 0 === t || null === (e = t.releaseNativeDesktopVideoSourcePickerStream) || void 0 === e || e.call(t);
}

function A() {
  return (0, s.useEffect)(() => (S++, () => {
0 == --S && T();
  }), []);
}

function P(e) {
  if (N()) {
var t, n;
T();
let r = p.Z.getChannel(e),
  o = null != r && (0, I.Z)(h.Z) && (0, C.JL)(r, m.Z, g.Z, !1);
null === (n = h.Z.getMediaEngine()) || void 0 === n || null === (t = n.setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, o);
  }
}

function w() {
  T(), P(b.Z.getVoiceChannelId());
}
class k extends(l = u.ZP.Store) {
  initialize() {
this.syncWith([
  h.Z,
  b.Z,
  p.Z,
  m.Z,
  g.Z
], w), _.Z.subscribe({
  location: 'NativeScreenSharePickerStore_initialize'
}, w);
  }
  supported() {
return E();
  }
  enabled() {
return N();
  }
  presentPicker(e) {
var t, n;
x = {
  lastPickerAction: 0
}, null === (n = h.Z.getMediaEngine()) || void 0 === n || null === (t = n.presentNativeScreenSharePicker) || void 0 === t || t.call(n, e);
  }
  releasePickerStream() {
T();
  }
  getPickerState() {
return x;
  }
}
a = 'NativeScreenSharePickerStore', (i = 'displayName') in(o = k) ? Object.defineProperty(o, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[i] = a;
t.ZP = new k(d.Z, {
  NATIVE_SCREEN_SHARE_PICKER_UPDATE: function(e) {
let {
  existing: t
} = e;
if (x = {
    lastPickerAction: 1
  }, 0 === S && !t) {
  let e = p.Z.getChannel(b.Z.getVoiceChannelId());
  null != e && (0, I.Z)(h.Z) && (0, C.JL)(e, m.Z, g.Z, !1) && (0, f.WH)(e.getGuildId(), e.id, {
    sourceId: 'prepicked:0'
  });
}
  },
  NATIVE_SCREEN_SHARE_PICKER_CANCEL: function(e) {
let {} = e;
x = {
  lastPickerAction: 2
};
  },
  NATIVE_SCREEN_SHARE_PICKER_ERROR: function(e) {
let {
  error: t
} = e;
x = {
  lastPickerAction: 3,
  lastPickerError: t
};
  },
  VOICE_CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
P(t);
  }
});