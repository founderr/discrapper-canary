n.d(t, {
  DF: function() {
return f;
  },
  KA: function() {
return S;
  },
  M1: function() {
return l;
  },
  PM: function() {
return _;
  },
  Pn: function() {
return I;
  },
  Rq: function() {
return u;
  },
  s$: function() {
return d;
  },
  sN: function() {
return E;
  }
});
var r = n(367907),
  a = n(221292),
  o = n(592125),
  s = n(626135),
  i = n(981631);

function c(e) {
  var t;
  return null === (t = o.Z.getChannel(e)) || void 0 === t ? void 0 : t.guild_id;
}

function E(e) {
  let {
channelId: t,
selectedTab: n
  } = e;
  r.ZP.trackWithMetadata(i.rMx.RTC_PANEL_VIEWED, {
channel_id: t,
guild_id: c(t),
selected_tab: n
  });
}

function u(e) {
  let {
channelId: t,
userId: n
  } = e;
  r.ZP.trackWithMetadata(i.rMx.E2EE_USER_VERIFICATION_VIEWED, {
channel_id: t,
guild_id: c(t),
...(0, a.QN)(n)
  });
}

function l(e) {
  let {
channelId: t,
userId: n,
analyticsLocation: o
  } = e;
  r.ZP.trackWithMetadata(i.rMx.E2EE_USER_VERIFIED, {
channel_id: t,
guild_id: c(t),
location: o,
...(0, a.QN)(n)
  });
}

function d(e) {
  let {
channelId: t,
userId: n
  } = e;
  r.ZP.trackWithMetadata(i.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
channel_id: t,
guild_id: c(t),
...(0, a.QN)(n)
  });
}

function _(e) {
  let {
channelId: t
  } = e;
  r.ZP.trackWithMetadata(i.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
channel_id: t,
guild_id: c(t)
  });
}

function f() {
  s.default.track(i.rMx.E2EE_SETTINGS_USER_DELETE);
}

function I() {
  s.default.track(i.rMx.E2EE_SETTINGS_DEVICE_DELETE);
}

function S(e) {
  s.default.track(i.rMx.E2EE_PUBLIC_KEY_MISMATCH, {
key_version: ''.concat(e)
  });
}