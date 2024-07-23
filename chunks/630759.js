t.d(s, {
  Dz: function() {
return h;
  },
  J6: function() {
return x;
  },
  KF: function() {
return g;
  },
  TQ: function() {
return O;
  },
  bo: function() {
return p;
  },
  om: function() {
return f;
  },
  uX: function() {
return P;
  }
});
var n = t(512722),
  a = t.n(n),
  i = t(913527),
  r = t.n(i),
  o = t(544891),
  l = t(314897),
  c = t(131951),
  d = t(594174),
  _ = t(70956),
  E = t(960048),
  u = t(51144),
  T = t(718629),
  I = t(615830),
  S = t(352954),
  N = t(571826);
t(760373);
var C = t(981631),
  m = t(231338),
  A = t(689938);

function h(e) {
  let s = d.default.getUser(e),
t = u.ZP.getName(s);
  S.Z.openSecureFramesUpdateConfirmation({
title: A.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({
  username: t
}),
subtitle: A.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
onConfirm: () => {
  (0, N.DF)();
}
  });
}

function g(e, s) {
  S.Z.openSecureFramesUpdateConfirmation({
title: A.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
subtitle: A.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
onConfirm: () => {
  (0, N.Pn)();
}
  });
}

function O(e, s, t, n) {
  return (0, N.M1)({
channelId: t,
userId: e,
analyticsLocation: n
  }), m.dG;
}

function p(e) {
  let s = r()(e),
t = r()().diff(s, 's');
  if (t > 12 * _.Z.Seconds.DAYS_30) {
let e = Math.round(t / (12 * _.Z.Seconds.DAYS_30));
return A.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({
  count: e
});
  }
  if (t > _.Z.Seconds.DAYS_30) {
let e = Math.round(t / _.Z.Seconds.DAYS_30);
return A.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
  count: e
});
  }
  if (t > 7 * _.Z.Seconds.DAY) {
let e = Math.round(t / (7 * _.Z.Seconds.DAY));
return A.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({
  count: e
});
  } else if (t > _.Z.Seconds.DAY) {
let e = Math.round(t / _.Z.Seconds.DAY);
return A.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({
  count: e
});
  } else if (t > _.Z.Seconds.HOUR) {
let e = Math.round(t / _.Z.Seconds.HOUR);
return A.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({
  count: e
});
  } else {
if (!(t > _.Z.Seconds.MINUTE))
  return A.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
    count: t
  });
let e = Math.round(t / _.Z.Seconds.MINUTE);
return A.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
  count: e
});
  }
}
async function R(e) {
  let s = l.default.getStaticAuthSessionId();
  return a()(null != s, '[getCurrentUserPublicKey] session id should not be null'), await c.Z.getMLSSigningKey(s, e);
}
async function x(e, s, t) {
  let n = new File([s], 'public_key'),
a = new FormData();
  a.append('public_key', n), a.append('key_version', ''.concat(t));
  try {
return (await o.tn.post({
  url: C.ANM.VOICE_MATCH_PUBLIC_KEY(e),
  body: a
})).body.is_match;
  } catch (e) {
throw E.Z.captureException(e), e;
  }
}
async function M(e) {
  let {
key: s,
signature: t
  } = await R(e), n = new File([s], 'public_key'), a = new File([t], 'signature'), i = new FormData();
  i.append('public_key', n), i.append('signature', a), i.append('key_version', ''.concat(e));
  try {
await o.tn.put({
  url: C.ANM.VOICE_PUBLIC_KEYS(),
  body: i
}), T.Z.addCurrentUserUploadedKeyVersionCached(e);
  } catch (e) {
throw E.Z.captureException(e), e;
  }
}

function D(e) {
  return I.Z.getUploadedKeyVersionsCached().includes(e);
}
async function f(e) {
  !D(e) && await M(e);
}
async function P(e) {
  if (!D(e))
return await M(e), !0;
  let s = l.default.getId(),
{
  key: t
} = await R(e),
n = await x(s, t, e);
  return !n && (0, N.KA)(e), n;
}