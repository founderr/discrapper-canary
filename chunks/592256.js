n.d(l, {
  Cx: function() {
    return y
  },
  j0: function() {
    return x
  },
  j9: function() {
    return v
  },
  nP: function() {
    return b
  }
}), n(47120);
var t = n(735250);
n(470079);
var r = n(374470),
  i = n(481060),
  s = n(794295),
  a = n(163268),
  o = n(768494),
  u = n(254109),
  d = n(118139),
  h = n(926836),
  c = n(52824),
  m = n(626135),
  p = n(591759),
  g = n(981631),
  f = n(509649);

function b(e, l) {
  let {
    width: n,
    height: r
  } = e, i = (0, c.q)(e);
  return {
    component: (0, t.jsx)(h.y, {
      width: n,
      height: r,
      original: e.url,
      renderLinkComponent: e => (0, t.jsx)(s.Z, {
        ...e
      }),
      renderForwardComponent: l,
      src: i
    }),
    width: n,
    height: r,
    src: i
  }
}

function x(e, l) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    i = function(e, l) {
      var n, r;
      let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!(0, d.tw)(e.contentType)) return null;
      let u = null !== (n = e.width) && void 0 !== n ? n : 0,
        m = null !== (r = e.height) && void 0 !== r ? r : 0,
        p = (0, c.q)({
          proxyURL: e.proxyUrl,
          url: e.url
        });
      return {
        component: (0, t.jsx)(h.y, {
          width: u,
          height: m,
          original: e.url,
          renderLinkComponent: e => (0, t.jsx)(s.Z, {
            ...e
          }),
          renderForwardComponent: l,
          src: p,
          shouldHideMediaOptions: i,
          obscure: (0, a.KP)({
            type: a.lJ.GenericMedia,
            media: e
          }, o)
        }),
        width: u,
        height: m,
        src: p
      }
    }(e, l, n, r);
  if (null != i) return i;
  let o = function(e, l) {
    var n, r;
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!(0, d.X2)(e.contentType)) return null;
    let u = null !== (n = e.width) && void 0 !== n ? n : 0,
      m = null !== (r = e.height) && void 0 !== r ? r : 0,
      g = (0, c.q)({
        proxyURL: e.proxyUrl,
        url: e.url
      }),
      f = p.Z.toURLSafe(e.proxyUrl);
    return null == f ? null : (f.searchParams.append("format", "jpeg"), {
      component: (0, t.jsx)(h.K, {
        width: u,
        height: m,
        poster: f.toString(),
        naturalWidth: u,
        naturalHeight: m,
        renderLinkComponent: e => (0, t.jsx)(s.Z, {
          ...e
        }),
        renderForwardComponent: l,
        src: g,
        shouldHideMediaOptions: i,
        obscure: (0, a.KP)({
          type: a.lJ.GenericMedia,
          media: e
        }, o)
      }),
      width: u,
      height: m,
      src: g
    })
  }(e, l, n, r);
  return null != o ? o : null
}

function v(e, l) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return x((0, o.VY)(e), l, n, t)
}

function y(e, l) {
  let s = {};
  for (let [a, o] of e.entries()) s[o.src] = s => (function(e, l, s, a) {
    e.preventDefault(), (0, r.k)(e.currentTarget) && e.currentTarget.blur(), null != a && (m.default.track(g.rMx.OPEN_MODAL, {
      type: g.jXE.MEDIA_VIEWER,
      ...a
    }, {
      throttlePercent: .01
    }), (0, u.fS)(a.guild_id, a.channel_id, a.channel_type, l.length)), (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("99857")]).then(n.bind(n, 895023));
      return n => {
        let {
          ...r
        } = n;
        return (0, t.jsx)(e, {
          ...r,
          onIndexChange: null != a ? u.f0 : void 0,
          className: f.zoomedCarouselModalRoot,
          items: l,
          modalCarouselClassName: f.modalCarouselWrapper,
          startingIndex: s
        })
      }
    }, {
      onCloseCallback: null != a ? u.VO : void 0
    })
  })(s, e, a, l);
  return s
}