s.d(t, {
  J6: function() {
return M;
  },
  LO: function() {
return h;
  },
  TQ: function() {
return g;
  },
  Wg: function() {
return x;
  },
  ZU: function() {
return O;
  },
  Zn: function() {
return p;
  },
  bo: function() {
return R;
  },
  om: function() {
return P;
  },
  uX: function() {
return L;
  }
}), s(518263), s(970173), s(520712), s(268111), s(941497), s(32026), s(480839), s(744285), s(492257), s(873817);
var n = s(512722),
  a = s.n(n),
  i = s(913527),
  r = s.n(i),
  o = s(544891),
  l = s(253135),
  c = s(314897),
  d = s(131951),
  _ = s(594174),
  E = s(70956),
  u = s(960048),
  T = s(51144),
  I = s(718629),
  S = s(615830),
  N = s(352954),
  C = s(571826);
s(760373);
var m = s(981631),
  A = s(689938);

function g(e, t, s, n, a) {
  s ? I.Z.createVerifiedKey(e, t) : I.Z.createSecureFramesTransientKey(e, t), (0, C.M1)({
channelId: n,
userId: e,
analyticsLocation: a
  });
}

function h(e, t, s) {
  if (s) {
let s = (0, l.MK)(new Uint8Array(t));
I.Z.deleteVerifiedKey(e, s);
  } else
I.Z.deleteSecureFramesTransientKey(e);
}

function O(e, t) {
  N.Z.openSecureFramesUpdateConfirmation({
title: A.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
subtitle: A.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
onConfirm: () => {
  I.Z.deleteVerifiedKey(e, t), (0, C.Pn)();
}
  });
}

function p(e) {
  let t = _.default.getUser(e),
s = T.ZP.getName(t);
  N.Z.openSecureFramesUpdateConfirmation({
title: A.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format({
  username: s
}),
subtitle: A.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
onConfirm: () => {
  I.Z.deleteAllUserVerifiedKeys(e), (0, C.DF)();
}
  });
}

function R(e) {
  let t = r()(e),
s = r()().diff(t, 's');
  if (s > 12 * E.Z.Seconds.DAYS_30) {
let e = Math.round(s / (12 * E.Z.Seconds.DAYS_30));
return A.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({
  count: e
});
  }
  if (s > E.Z.Seconds.DAYS_30) {
let e = Math.round(s / E.Z.Seconds.DAYS_30);
return A.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
  count: e
});
  }
  if (s > 7 * E.Z.Seconds.DAY) {
let e = Math.round(s / (7 * E.Z.Seconds.DAY));
return A.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({
  count: e
});
  } else if (s > E.Z.Seconds.DAY) {
let e = Math.round(s / E.Z.Seconds.DAY);
return A.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({
  count: e
});
  } else if (s > E.Z.Seconds.HOUR) {
let e = Math.round(s / E.Z.Seconds.HOUR);
return A.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({
  count: e
});
  } else {
if (!(s > E.Z.Seconds.MINUTE))
  return A.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
    count: s
  });
let e = Math.round(s / E.Z.Seconds.MINUTE);
return A.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
  count: e
});
  }
}
async function x(e) {
  let t = c.default.getStaticAuthSessionId();
  return a()(null != t, '[getCurrentUserPublicKey] session id should not be null'), await d.Z.getMLSSigningKey(t, e);
}
async function M(e, t, s) {
  let n = new File([t], 'public_key'),
a = new FormData();
  a.append('public_key', n), a.append('key_version', ''.concat(s));
  try {
return (await o.tn.post({
  url: m.ANM.VOICE_MATCH_PUBLIC_KEY(e),
  body: a
})).body.is_match;
  } catch (e) {
throw u.Z.captureException(e), e;
  }
}
async function f(e) {
  let {
key: t,
signature: s
  } = await x(e), n = new File([t], 'public_key'), a = new File([s], 'signature'), i = new FormData();
  i.append('public_key', n), i.append('signature', a), i.append('key_version', ''.concat(e));
  try {
await o.tn.put({
  url: m.ANM.VOICE_PUBLIC_KEYS(),
  body: i
}), I.Z.addCurrentUserUploadedKeyVersionCached(e);
  } catch (e) {
throw u.Z.captureException(e), e;
  }
}

function D(e) {
  return S.Z.getUploadedKeyVersionsCached().includes(e);
}
async function P(e) {
  !D(e) && await f(e);
}
async function L(e) {
  let {
key: t
  } = await x(e);
  if (!D(e))
return await f(e), !0;
  let s = c.default.getId(),
n = await M(s, t, e);
  return !n && (0, C.KA)(e), n;
}