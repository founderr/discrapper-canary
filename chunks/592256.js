t.d(n, {
  Cx: function() {
return b;
  },
  j0: function() {
return _;
  },
  j9: function() {
return C;
  },
  nP: function() {
return g;
  }
}), t(47120);
var i = t(735250);
t(470079);
var o = t(374470),
  l = t(481060),
  a = t(794295),
  r = t(163268),
  s = t(768494),
  u = t(751586),
  d = t(254109),
  c = t(406432),
  p = t(52824),
  f = t(626135),
  h = t(591759),
  m = t(981631),
  I = t(595871);

function g(e, n) {
  let {
width: t,
height: o
  } = e, l = (0, p.q)(e);
  return {
component: (0, i.jsx)(u.y, {
  width: t,
  height: o,
  original: e.url,
  renderLinkComponent: e => (0, i.jsx)(a.Z, {
    ...e
  }),
  renderForwardComponent: n,
  src: l
}),
width: t,
height: o,
src: l
  };
}

function _(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
l = function(e, n) {
  var t, o;
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (!(0, c.tw)(e.contentType))
    return null;
  let d = null !== (t = e.width) && void 0 !== t ? t : 0,
    f = null !== (o = e.height) && void 0 !== o ? o : 0,
    h = (0, p.q)({
      proxyURL: e.proxyUrl,
      url: e.url
    });
  return {
    component: (0, i.jsx)(u.y, {
      width: d,
      height: f,
      original: e.url,
      renderLinkComponent: e => (0, i.jsx)(a.Z, {
        ...e
      }),
      renderForwardComponent: n,
      src: h,
      shouldHideMediaOptions: l,
      obscure: (0, r.KP)({
        type: r.lJ.GenericMedia,
        media: e
      }, s)
    }),
    width: d,
    height: f,
    src: h
  };
}(e, n, t, o);
  if (null != l)
return l;
  let s = function(e, n) {
var t, o;
let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
  s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
if (!(0, c.X2)(e.contentType))
  return null;
let d = null !== (t = e.width) && void 0 !== t ? t : 0,
  f = null !== (o = e.height) && void 0 !== o ? o : 0,
  m = (0, p.q)({
    proxyURL: e.proxyUrl,
    url: e.url
  }),
  I = h.Z.toURLSafe(e.proxyUrl);
return null == I ? null : (I.searchParams.append('format', 'jpeg'), {
  component: (0, i.jsx)(u.K, {
    width: d,
    height: f,
    poster: I.toString(),
    naturalWidth: d,
    naturalHeight: f,
    renderLinkComponent: e => (0, i.jsx)(a.Z, {
      ...e
    }),
    renderForwardComponent: n,
    src: m,
    shouldHideMediaOptions: l,
    obscure: (0, r.KP)({
      type: r.lJ.GenericMedia,
      media: e
    }, s)
  }),
  width: d,
  height: f,
  src: m
});
  }(e, n, t, o);
  return null != s ? s : null;
}

function C(e, n) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return _((0, s.VY)(e), n, t, i);
}

function b(e, n) {
  let a = {};
  for (let [r, s] of e.entries())
a[s.src] = a => function(e, n, a, r) {
  e.preventDefault(), (0, o.k)(e.currentTarget) && e.currentTarget.blur(), null != r && (f.default.track(m.rMx.OPEN_MODAL, {
    type: m.jXE.MEDIA_VIEWER,
    ...r
  }, {
    throttlePercent: 0.01
  }), (0, d.fS)(r.guild_id, r.channel_id, r.channel_type, n.length)), (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await t.e('99857').then(t.bind(t, 895023));
    return t => {
      let {
        ...o
      } = t;
      return (0, i.jsx)(e, {
        ...o,
        onIndexChange: null != r ? d.f0 : void 0,
        className: I.zoomedCarouselModalRoot,
        items: n,
        modalCarouselClassName: I.modalCarouselWrapper,
        startingIndex: a
      });
    };
  }, {
    onCloseCallback: null != r ? d.VO : void 0
  });
}(a, e, r, n);
  return a;
}