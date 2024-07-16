t.d(e, {
  Z: function() {
return C;
  }
});
var o = t(735250);
t(470079);
var r = t(212598),
  i = t(728151),
  s = t(981631),
  c = t(689938),
  l = t(344595),
  a = t(322539);

function C(n) {
  let {
isWaitingForConnection: e,
onWaitingForConnection: t,
expectedCallbackState: C,
onAuthToken: u,
onError: d,
onClose: _
  } = n, N = e ? (0, o.jsx)('img', {
src: a,
width: '168',
height: '124',
alt: ''
  }) : (0, o.jsx)('img', {
src: l,
width: '152',
height: '123',
alt: ''
  }), L = e ? c.Z.Messages.CRUNCHYROLL_DETAILS_TITLE_WAITING : c.Z.Messages.CRUNCHYROLL_DETAILS_TITLE, R = e ? c.Z.Messages.CRUNCHYROLL_DETAILS_BODY_WAITING : c.Z.Messages.CRUNCHYROLL_DETAILS_BODY;
  return (0, o.jsx)(r.t, {
platformType: s.ABu.CRUNCHYROLL,
isWaitingForConnection: e,
onWaitingForConnection: t,
expectedCallbackState: C,
onAuthToken: u,
onError: d,
onClose: _,
img: N,
title: L,
body: R,
redirectDestination: i.pY
  });
}