s.d(t, {
  Dz: function() {
return g;
  },
  J6: function() {
return x;
  },
  KF: function() {
return h;
  },
  TQ: function() {
return O;
  },
  bo: function() {
return p;
  },
  om: function() {
return D;
  },
  uX: function() {
return P;
  }
});
var n = s(512722),
  a = s.n(n),
  i = s(913527),
  r = s.n(i),
  o = s(544891),
  l = s(314897),
  c = s(131951),
  d = s(594174),
  _ = s(70956),
  E = s(960048),
  u = s(51144),
  T = s(718629),
  I = s(615830),
  S = s(352954),
  N = s(571826);
s(760373);
var C = s(981631),
  m = s(231338),
  A = s(689938);

function g(e) {
  let t = d.default.getUser(e),
s = u.ZP.getName(t);
  S.Z.openSecureFramesUpdateConfirmation({
title: A.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({
  username: s
}),
subtitle: A.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
onConfirm: () => {
  (0, N.DF)();
}
  });
}

function h(e, t) {
  S.Z.openSecureFramesUpdateConfirmation({
title: A.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
subtitle: A.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
onConfirm: () => {
  (0, N.Pn)();
}
  });
}

function O(e, t, s, n) {
  return (0, N.M1)({
channelId: s,
userId: e,
analyticsLocation: n
  }), m.dG;
}

function p(e) {
  let t = r()(e),
s = r()().diff(t, 's');
  if (s > 12 * _.Z.Seconds.DAYS_30) {
let e = Math.round(s / (12 * _.Z.Seconds.DAYS_30));
return A.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({
  count: e
});
  }
  if (s > _.Z.Seconds.DAYS_30) {
let e = Math.round(s / _.Z.Seconds.DAYS_30);
return A.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
  count: e
});
  }
  if (s > 7 * _.Z.Seconds.DAY) {
let e = Math.round(s / (7 * _.Z.Seconds.DAY));
return A.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({
  count: e
});
  } else if (s > _.Z.Seconds.DAY) {
let e = Math.round(s / _.Z.Seconds.DAY);
return A.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({
  count: e
});
  } else if (s > _.Z.Seconds.HOUR) {
let e = Math.round(s / _.Z.Seconds.HOUR);
return A.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({
  count: e
});
  } else {
if (!(s > _.Z.Seconds.MINUTE))
  return A.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
    count: s
  });
let e = Math.round(s / _.Z.Seconds.MINUTE);
return A.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
  count: e
});
  }
}
async function R(e) {
  let t = l.default.getStaticAuthSessionId();
  return a()(null != t, '[getCurrentUserPublicKey] session id should not be null'), await c.Z.getMLSSigningKey(t, e);
}
async function x(e, t, s) {
  let n = new File([t], 'public_key'),
a = new FormData();
  a.append('public_key', n), a.append('key_version', ''.concat(s));
  try {
return (await o.tn.post({
  url: C.ANM.VOICE_MATCH_PUBLIC_KEY(e),
  body: a
})).body.is_match;
  } catch (e) {
throw E.Z.captureException(e), e;
  }
}
async function f(e) {
  let {
key: t,
signature: s
  } = await R(e), n = new File([t], 'public_key'), a = new File([s], 'signature'), i = new FormData();
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

function M(e) {
  return I.Z.getUploadedKeyVersionsCached().includes(e);
}
async function D(e) {
  !M(e) && await f(e);
}
async function P(e) {
  if (!M(e))
return await f(e), !0;
  let t = l.default.getId(),
{
  key: s
} = await R(e),
n = await x(t, s, e);
  return !n && (0, N.KA)(e), n;
}