i.d(n, {
  Np: function() {
return d;
  },
  l8: function() {
return r;
  },
  mc: function() {
return l;
  },
  so: function() {
return c;
  }
});
var t = i(735250);
i(470079);
var o = i(481060),
  a = i(822869);
let c = 'forward-modal';

function r(e) {
  let {
messageId: n,
channelId: r,
source: l,
initialSelectedDestinations: d = [],
forwardOptions: s,
onRequestSent: u
  } = e;
  (0, a.Lb)(r, n, l), (0, o.openModalLazy)(async () => {
let {
  ForwardModal: e
} = await Promise.all([
  i.e('6380'),
  i.e('89900')
]).then(i.bind(i, 930864));
return i => (0, t.jsx)(e, {
  ...i,
  channelId: r,
  messageId: n,
  initialSelectedDestinations: d,
  forwardOptions: s,
  onRequestSent: u
});
  }, {
modalKey: c
  });
}

function l() {
  (0, o.closeModal)(c);
}

function d(e) {
  let {
messageId: n,
channelId: a,
failedDestinations: c,
forwardOptions: r
  } = e;
  (0, o.openModalLazy)(async () => {
let {
  ForwardFailedAlertModal: e
} = await i.e('86590').then(i.bind(i, 384331));
return i => (0, t.jsx)(e, {
  ...i,
  messageId: n,
  channelId: a,
  failedDestinations: c,
  forwardOptions: r
});
  });
}