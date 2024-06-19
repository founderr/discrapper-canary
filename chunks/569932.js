t.d(n, {
  A: function() {
    return T
  }
});
var i = t(735250);
t(470079);
var o = t(362470),
  s = t(961842),
  r = t(63063),
  C = t(921869),
  l = t(514161),
  a = t(981631),
  d = t(689938),
  c = t(913045);

function u() {
  let e = [d.Z.Messages.PS_VALUE_PROP_VOICE, d.Z.Messages.PS_VALUE_PROP_GAME],
    n = [d.Z.Messages.PS_VALUE_PROP_GAME];
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.yC, {
      children: (0, i.jsx)(l.pT, {
        icon: (0, i.jsx)(s.Z, {}),
        title: d.Z.Messages.PS5,
        bulletPoints: e
      })
    }), (0, i.jsx)(l.yC, {
      children: (0, i.jsx)(l.pT, {
        icon: (0, i.jsx)(o.Z, {}),
        title: d.Z.Messages.PS4,
        bulletPoints: n
      })
    })]
  })
}

function T(e) {
  let {
    platformType: n,
    onContinue: t,
    onClose: o
  } = e;
  return (0, i.jsx)(C.m, {
    platformType: n,
    headerConnect: d.Z.Messages.CONNECT_PS_LANDING_TITLE,
    headerReconnect: d.Z.Messages.RECONNECT_PS_LANDING_TITLE,
    body: d.Z.Messages.CONNECT_PS_LANDING_BODY,
    onClose: o,
    onContinue: t,
    img: (0, i.jsx)("img", {
      src: c,
      width: 230,
      height: 138,
      alt: ""
    }),
    valueProps: (0, i.jsx)(u, {}),
    learnMoreLink: r.Z.getArticleURL(a.BhN.PS_CONNECTION)
  })
}