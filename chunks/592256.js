t.d(l, {
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
}), t(47120);
var n = t(735250);
t(470079);
var r = t(374470),
  i = t(481060),
  s = t(794295),
  a = t(163268),
  o = t(768494),
  d = t(751586),
  u = t(254109),
  h = t(406432),
  c = t(52824),
  m = t(626135),
  p = t(591759),
  g = t(981631),
  f = t(509649);

function b(e, l) {
  let {
    width: t,
    height: r
  } = e, i = (0, c.q)(e);
  return {
    component: (0, n.jsx)(d.y, {
      width: t,
      height: r,
      original: e.url,
      renderLinkComponent: e => (0, n.jsx)(s.Z, {
        ...e
      }),
      renderForwardComponent: l,
      src: i
    }),
    width: t,
    height: r,
    src: i
  }
}

function x(e, l) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    i = function(e, l) {
      var t, r;
      let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!(0, h.tw)(e.contentType)) return null;
      let u = null !== (t = e.width) && void 0 !== t ? t : 0,
        m = null !== (r = e.height) && void 0 !== r ? r : 0,
        p = (0, c.q)({
          proxyURL: e.proxyUrl,
          url: e.url
        });
      return {
        component: (0, n.jsx)(d.y, {
          width: u,
          height: m,
          original: e.url,
          renderLinkComponent: e => (0, n.jsx)(s.Z, {
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
    }(e, l, t, r);
  if (null != i) return i;
  let o = function(e, l) {
    var t, r;
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!(0, h.X2)(e.contentType)) return null;
    let u = null !== (t = e.width) && void 0 !== t ? t : 0,
      m = null !== (r = e.height) && void 0 !== r ? r : 0,
      g = (0, c.q)({
        proxyURL: e.proxyUrl,
        url: e.url
      }),
      f = p.Z.toURLSafe(e.proxyUrl);
    return null == f ? null : (f.searchParams.append("format", "jpeg"), {
      component: (0, n.jsx)(d.K, {
        width: u,
        height: m,
        poster: f.toString(),
        naturalWidth: u,
        naturalHeight: m,
        renderLinkComponent: e => (0, n.jsx)(s.Z, {
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
  }(e, l, t, r);
  return null != o ? o : null
}

function v(e, l) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return x((0, o.VY)(e), l, t, n)
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
      } = await Promise.all([t.e("49237"), t.e("99387"), t.e("99857")]).then(t.bind(t, 895023));
      return t => {
        let {
          ...r
        } = t;
        return (0, n.jsx)(e, {
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