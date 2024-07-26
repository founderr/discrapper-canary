s.d(t, {
  J6: function() {
return D;
  },
  LO: function() {
return O;
  },
  TQ: function() {
return h;
  },
  ZU: function() {
return p;
  },
  Zn: function() {
return R;
  },
  bo: function() {
return x;
  },
  om: function() {
return b;
  },
  uX: function() {
return Z;
  }
}), s(518263), s(970173), s(520712), s(268111), s(941497), s(32026), s(480839), s(744285), s(492257), s(873817);
var n = s(250683),
  a = s(512722),
  i = s.n(a),
  r = s(913527),
  o = s.n(r),
  l = s(544891),
  c = s(253135),
  d = s(314897),
  _ = s(131951),
  E = s(594174),
  u = s(70956),
  T = s(960048),
  I = s(51144),
  S = s(718629),
  N = s(615830),
  C = s(352954),
  m = s(571826);
s(760373);
var A = s(981631),
  g = s(689938);

function h(e, t, s, n, a) {
  s ? S.Z.createVerifiedKey(e, t) : S.Z.createSecureFramesTransientKey(e, t), (0, m.M1)({
channelId: n,
userId: e,
analyticsLocation: a
  });
}

function O(e, t, s) {
  if (s) {
let s = (0, c.MK)(new Uint8Array(t));
S.Z.deleteVerifiedKey(e, s);
  } else
S.Z.deleteSecureFramesTransientKey(e);
}

function p(e, t) {
  C.Z.openSecureFramesUpdateConfirmation({
title: g.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
subtitle: g.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
onConfirm: () => {
  S.Z.deleteVerifiedKey(e, t), (0, m.Pn)();
}
  });
}

function R(e) {
  let t = E.default.getUser(e),
s = I.ZP.getName(t);
  C.Z.openSecureFramesUpdateConfirmation({
title: g.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({
  username: s
}),
subtitle: g.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
onConfirm: () => {
  S.Z.deleteAllUserVerifiedKeys(e), (0, m.DF)();
}
  });
}

function x(e) {
  let t = o()(e),
s = o()().diff(t, 's');
  if (s > 12 * u.Z.Seconds.DAYS_30) {
let e = Math.round(s / (12 * u.Z.Seconds.DAYS_30));
return g.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({
  count: e
});
  }
  if (s > u.Z.Seconds.DAYS_30) {
let e = Math.round(s / u.Z.Seconds.DAYS_30);
return g.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
  count: e
});
  }
  if (s > 7 * u.Z.Seconds.DAY) {
let e = Math.round(s / (7 * u.Z.Seconds.DAY));
return g.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({
  count: e
});
  } else if (s > u.Z.Seconds.DAY) {
let e = Math.round(s / u.Z.Seconds.DAY);
return g.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({
  count: e
});
  } else if (s > u.Z.Seconds.HOUR) {
let e = Math.round(s / u.Z.Seconds.HOUR);
return g.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({
  count: e
});
  } else {
if (!(s > u.Z.Seconds.MINUTE))
  return g.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
    count: s
  });
let e = Math.round(s / u.Z.Seconds.MINUTE);
return g.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
  count: e
});
  }
}
async function M(e) {
  let t = d.default.getStaticAuthSessionId();
  return i()(null != t, '[getCurrentUserPublicKey] session id should not be null'), await _.Z.getMLSSigningKey(t, e);
}

function f(e) {
  let t = n.fromByteArray(new Uint8Array(e));
  return 'data:application/octet-stream;base64,'.concat(t);
}
async function D(e, t, s) {
  try {
return (await l.tn.post({
  url: A.ANM.VOICE_MATCH_PUBLIC_KEY(e),
  body: {
    public_key: f(t),
    key_version: s
  }
})).body.is_match;
  } catch (e) {
throw T.Z.captureException(e), e;
  }
}
async function P(e) {
  let {
key: t,
signature: s
  } = await M(e);
  try {
await l.tn.put({
  url: A.ANM.VOICE_PUBLIC_KEYS(),
  body: {
    public_key: f(t),
    signature: f(s),
    key_version: e
  }
}), S.Z.addCurrentUserUploadedKeyVersionCached(e);
  } catch (e) {
throw T.Z.captureException(e), e;
  }
}

function L(e) {
  return N.Z.getUploadedKeyVersionsCached().includes(e);
}
async function b(e) {
  !L(e) && await P(e);
}
async function Z(e) {
  if (!L(e))
return await P(e), !0;
  let t = d.default.getId(),
{
  key: s
} = await M(e),
n = await D(t, s, e);
  return !n && (0, m.KA)(e), n;
}