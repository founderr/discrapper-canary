o.d(n, {
  Cx: function() {
return g;
  },
  j0: function() {
return b;
  },
  j9: function() {
return C;
  },
  nP: function() {
return h;
  }
}), o(47120);
var t = o(735250);
o(470079);
var i = o(374470),
  a = o(481060),
  r = o(794295),
  l = o(163268),
  c = o(768494),
  d = o(751586),
  s = o(254109),
  u = o(406432),
  f = o(52824),
  _ = o(626135),
  m = o(591759),
  p = o(981631),
  I = o(772370);

function h(e, n) {
  let {
width: o,
height: i
  } = e, a = (0, f.q)(e);
  return {
component: (0, t.jsx)(d.y, {
  width: o,
  height: i,
  original: e.url,
  renderLinkComponent: e => (0, t.jsx)(r.Z, {
    ...e
  }),
  renderForwardComponent: n,
  src: a
}),
width: o,
height: i,
src: a
  };
}

function b(e, n) {
  let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
a = function(e, n) {
  var o, i;
  let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (!(0, u.tw)(e.contentType))
    return null;
  let s = null !== (o = e.width) && void 0 !== o ? o : 0,
    _ = null !== (i = e.height) && void 0 !== i ? i : 0,
    m = (0, f.q)({
      proxyURL: e.proxyUrl,
      url: e.url
    });
  return {
    component: (0, t.jsx)(d.y, {
      width: s,
      height: _,
      original: e.url,
      renderLinkComponent: e => (0, t.jsx)(r.Z, {
        ...e
      }),
      renderForwardComponent: n,
      src: m,
      shouldHideMediaOptions: a,
      obscure: (0, l.KP)({
        type: l.lJ.GenericMedia,
        media: e
      }, c)
    }),
    width: s,
    height: _,
    src: m
  };
}(e, n, o, i);
  if (null != a)
return a;
  let c = function(e, n) {
var o, i;
let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
  c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
if (!(0, u.X2)(e.contentType))
  return null;
let s = null !== (o = e.width) && void 0 !== o ? o : 0,
  _ = null !== (i = e.height) && void 0 !== i ? i : 0,
  p = (0, f.q)({
    proxyURL: e.proxyUrl,
    url: e.url
  }),
  I = m.Z.toURLSafe(e.proxyUrl);
return null == I ? null : (I.searchParams.append('format', 'jpeg'), {
  component: (0, t.jsx)(d.K, {
    width: s,
    height: _,
    poster: I.toString(),
    naturalWidth: s,
    naturalHeight: _,
    renderLinkComponent: e => (0, t.jsx)(r.Z, {
      ...e
    }),
    renderForwardComponent: n,
    src: p,
    shouldHideMediaOptions: a,
    obscure: (0, l.KP)({
      type: l.lJ.GenericMedia,
      media: e
    }, c)
  }),
  width: s,
  height: _,
  src: p
});
  }(e, n, o, i);
  return null != c ? c : null;
}

function C(e, n) {
  let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return b((0, c.VY)(e), n, o, t);
}

function g(e, n) {
  let r = {};
  for (let [l, c] of e.entries())
r[c.src] = r => function(e, n, r, l) {
  e.preventDefault(), (0, i.k)(e.currentTarget) && e.currentTarget.blur(), null != l && (_.default.track(p.rMx.OPEN_MODAL, {
    type: p.jXE.MEDIA_VIEWER,
    ...l
  }, {
    throttlePercent: 0.01
  }), (0, s.fS)(l.guild_id, l.channel_id, l.channel_type, n.length)), (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await o.e('99857').then(o.bind(o, 895023));
    return o => {
      let {
        ...i
      } = o;
      return (0, t.jsx)(e, {
        ...i,
        onIndexChange: null != l ? s.f0 : void 0,
        className: I.zoomedCarouselModalRoot,
        items: n,
        modalCarouselClassName: I.modalCarouselWrapper,
        startingIndex: r
      });
    };
  }, {
    onCloseCallback: null != l ? s.VO : void 0
  });
}(r, e, l, n);
  return r;
}