"use strict";
n.r(t), n.d(t, {
  IMAGE_GIF_RE: function() {
    return E
  },
  default: function() {
    return i
  }
}), n("222007");
var l, i, a = n("37983"),
  s = n("884691"),
  r = n("917351"),
  o = n("290381"),
  u = n("407063"),
  d = n("315102"),
  c = n("103603"),
  f = n("275623"),
  m = n("594098"),
  p = n("719347"),
  h = n("49111");
let E = /\.gif($|\?|#)/i,
  g = /\.png($|\?|#)/i;
(l = class e extends s.Component {
  static isAnimated(e) {
    let {
      src: t,
      original: n,
      animated: l
    } = e;
    return l || E.test(null != n && "" !== n ? n : t)
  }
  static isSrcPNG(e) {
    let {
      src: t
    } = e;
    return g.test(t)
  }
  componentDidMount() {
    let {
      readyState: t
    } = this.state;
    t === h.ImageReadyStates.LOADING && this.loadImage(this.getSrc(this.getRatio(), e.isAnimated(this.props)), this.handleImageLoad), e.isAnimated(this.props) && this.observeVisibility()
  }
  componentDidUpdate(t) {
    let n = e.isAnimated(this.props),
      l = e.isAnimated(t);
    l !== n && (n ? this.observeVisibility() : this.unobserveVisibility())
  }
  componentWillUnmount() {
    e.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach(e => e()), this._cancellers.clear()
  }
  getSrc(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      {
        src: l,
        width: i,
        height: a,
        maxWidth: s,
        maxHeight: r,
        mediaLayoutType: o
      } = this.props,
      c = null,
      f = null;
    return d.SUPPORTS_WEBP && (n || !e.isAnimated(this.props)) ? (c = "webp", e.isSrcPNG(this.props) && (f = "lossless")) : n && (c = "png"), (0, u.getImageSrc)({
      src: l,
      width: i,
      height: a,
      ratio: t,
      maxWidth: o === p.MediaLayoutType.MOSAIC ? s : void 0,
      maxHeight: o === p.MediaLayoutType.MOSAIC ? r : void 0,
      format: c,
      quality: f
    })
  }
  getRatio() {
    let {
      width: e,
      height: t,
      maxWidth: n = 400,
      maxHeight: l = 300,
      mediaLayoutType: i,
      useFullWidth: a
    } = this.props;
    return i === p.MediaLayoutType.MOSAIC && a ? (0, c.getCoverRatio)({
      width: e,
      height: t,
      maxWidth: n,
      maxHeight: l
    }) : (0, c.getRatio)({
      width: e,
      height: t,
      maxWidth: n,
      maxHeight: l
    })
  }
  getType() {
    let {
      mediaLayoutType: e,
      responsive: t
    } = this.props;
    return null != e ? e : t ? p.MediaLayoutType.RESPONSIVE : p.MediaLayoutType.STATIC
  }
  loadImage(e, t) {
    let {
      width: n,
      height: l
    } = this.props;
    if (1 === n && 1 === l) return;
    let i = (0, u.loadImage)(e, (e, n) => {
      null != i && this._cancellers.delete(i), null == t || t(e, n)
    });
    null != i && this._cancellers.add(i)
  }
  render() {
    let {
      alt: t,
      zoomThumbnailPlaceholder: n,
      onZoom: l,
      shouldLink: i,
      onContextMenu: s,
      autoPlay: o,
      original: u,
      className: d,
      imageClassName: c,
      children: f,
      animated: p,
      shouldAnimate: E,
      width: g,
      height: S,
      minWidth: C,
      minHeight: T,
      maxWidth: v,
      maxHeight: I,
      renderItem: _,
      onClick: N,
      renderAccessory: A,
      tabIndex: y,
      limitResponsiveWidth: x,
      useFullWidth: O,
      placeholder: R,
      placeholderVersion: M,
      showThumbhashPlaceholder: L
    } = this.props, {
      readyState: P,
      hasMouseOver: b,
      hasFocus: j
    } = this.state, U = null != l, D = this.getRatio(), k = (0, r.clamp)(Math.round(g * D), null != C ? C : 0, null != v ? v : 1 / 0), w = (0, r.clamp)(Math.round(S * D), null != T ? T : 0, null != I ? I : 1 / 0), F = {
      alt: t,
      readyState: P,
      onContextMenu: null != s ? s : void 0,
      zoomable: U,
      className: d,
      imageClassName: c,
      minWidth: C,
      minHeight: T,
      mediaLayoutType: this.getType(),
      limitResponsiveWidth: x,
      useFullWidth: O,
      tabIndex: y,
      width: k,
      height: w,
      renderItem: _,
      src: "",
      placeholder: R,
      placeholderVersion: M,
      showThumbhashPlaceholder: L,
      children: null != f ? e => {
        let {
          src: t,
          size: n,
          alt: l,
          mediaLayoutType: i
        } = e;
        return f({
          src: t,
          size: n,
          alt: l,
          mediaLayoutType: i
        })
      } : void 0,
      onMouseEnter: this.onMouseEnter,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };
    if (1 === F.width && 1 === F.height) return null;
    switch ((U || null != N) && (F.onClick = this.onClick), i && (F.original = null != u && "" !== u ? u : F.src), P) {
      case h.ImageReadyStates.LOADING:
        null != n && (F.src = n);
        break;
      case h.ImageReadyStates.READY:
        if (e.isAnimated(this.props)) {
          F.onMouseLeave = this.onMouseLeave;
          let t = (o || b || j) && (null == E || E) && e.visibilityObserver.isVisible(this);
          t ? (F.src = this.getSrc(D), F.renderAccessory = A) : (F.src = this.getSrc(D, !p || !o), F.renderAccessory = this.renderAccessory), null != f && (F.children = e => {
            let {
              src: n,
              size: l,
              alt: i,
              mediaLayoutType: a
            } = e;
            return f({
              src: n,
              size: l,
              animating: t,
              alt: i,
              mediaLayoutType: a
            })
          })
        } else F.src = this.getSrc(D)
    }
    return (0, a.jsx)(m.default, {
      ...F
    })
  }
  constructor(t) {
    super(t), this.state = {
      readyState: h.ImageReadyStates.LOADING,
      hasMouseOver: !1,
      hasFocus: !1
    }, this._cancellers = new Set, this.observeVisibility = () => {
      e.visibilityObserver.observe(this)
    }, this.unobserveVisibility = () => {
      e.visibilityObserver.unobserve(this)
    }, this.handleImageLoad = e => this.setState({
      readyState: e ? h.ImageReadyStates.ERROR : h.ImageReadyStates.READY
    }), this.preloadImage = (e, t) => {
      let {
        width: n,
        height: l
      } = e, {
        width: i,
        height: a
      } = this.props;
      (1 !== i || 1 !== a) && this.loadImage(this.getSrc((0, c.getRatio)({
        width: i,
        height: a,
        maxWidth: n,
        maxHeight: l
      })), t)
    }, this.onMouseEnter = t => {
      e.isAnimated(this.props) && this.setState({
        hasMouseOver: !0
      });
      let {
        onMouseEnter: n
      } = this.props;
      null != n && n(t, {
        preloadImage: this.preloadImage
      })
    }, this.onFocus = t => {
      e.isAnimated(this.props) && this.setState({
        hasFocus: !0
      })
    }, this.onBlur = e => {
      let {
        currentTarget: t,
        relatedTarget: n
      } = e;
      !t.contains(n) && this.setState({
        hasFocus: !1
      })
    }, this.onMouseLeave = () => this.setState({
      hasMouseOver: !1
    }), this.onClick = e => {
      let {
        onZoom: t,
        onClick: n
      } = this.props;
      null != n ? n(e) : null != t && (e.preventDefault(), t(e, {
        zoomThumbnailPlaceholder: this.getSrc(this.getRatio())
      }))
    }, this.renderAccessory = () => {
      let {
        hasMouseOver: e,
        hasFocus: t
      } = this.state, n = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
      return this.props.shouldRenderAccessory ? e || t ? n : (0, a.jsx)(f.default, {}) : null
    }, (0, u.isImageLoaded)(this.getSrc(this.getRatio(), e.isAnimated(this.props))) && (this.state.readyState = h.ImageReadyStates.READY)
  }
}).visibilityObserver = new o.VisibilityObserver({
  threshold: .7
}), l.defaultProps = {
  shouldLink: !1,
  autoPlay: !1,
  animated: !1,
  minWidth: 0,
  minHeight: 0,
  shouldRenderAccessory: !0
}, i = l