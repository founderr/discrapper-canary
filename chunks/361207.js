n.d(t, {
  DW: function() {
return d;
  },
  Gn: function() {
return f;
  },
  t3: function() {
return h;
  },
  w4: function() {
return l;
  }
});
var i = n(525654),
  o = n.n(i),
  r = n(271579),
  a = n(314897),
  s = n(981631);
let c = 'linux';

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = arguments.length > 2 ? arguments[2] : void 0;
  return ''.concat(s.fzT.DESKTOP).concat(t ? '/ptb' : '', '?platform=').concat(e).concat(null != n ? '&format='.concat(n) : '');
}

function u() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = o().os) || void 0 === e ? void 0 : e.family;
  return null == t ? 'win' : -1 !== t.indexOf('Ubuntu') || -1 !== t.indexOf('Debian') || -1 !== t.indexOf('Fedora') || -1 !== t.indexOf('Red Hat') || -1 !== t.indexOf('SuSE') || -1 !== t.indexOf('Linux') ? c : -1 !== t.indexOf('OS X') ? 'osx' : 'win';
}

function d(e) {
  return {
win: 'Windows',
osx: 'Mac',
[c]: 'Linux'
  } [u(e)];
}

function h() {
  let e = u();
  return l(e, !1, e === c ? 'tar.gz' : null);
}

function f(e, t, n) {
  let i = null != n ? n.toString() : null;
  switch (t) {
case 'iOS':
  return (0, r.ZP)(null != i ? i : 'https://itunes.apple.com/us/app/discord-chat-for-games/id985746746', {
    utmSource: e,
    fingerprint: a.default.getFingerprint(),
    attemptId: (0, r.WS)()
  });
case 'Android':
  return (0, r.ZP)(null != i ? i : 'https://play.google.com/store/apps/details', {
    utmSource: e,
    id: 'com.discord',
    fingerprint: a.default.getFingerprint(),
    attemptId: (0, r.WS)()
  });
default:
  return null != i ? i : 'https://www.discord.com';
  }
}