"use strict";
s.r(t), s.d(t, {
  ItemSizes: function() {
    return S
  }
}), s("47120");
var n, a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  o = s("748780"),
  d = s("481060"),
  h = s("112724"),
  u = s("524444"),
  c = s("494735"),
  p = s("574735"),
  m = s("529815"),
  g = s("250496"),
  C = s("552253"),
  I = s("261922"),
  f = s("259773"),
  x = s("585483"),
  E = s("981631"),
  N = s("413527");

function v(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function b() {
  var e, t;
  let s = (e = ["grayscale(", ")"], !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  })));
  return b = function() {
    return s
  }, s
}
let S = {
    SMALL: {
      width: 640,
      height: 360,
      margin: 15
    },
    MEDIUM: {
      width: 880,
      height: 495,
      margin: 20
    }
  },
  P = {
    width: 1920,
    height: 1080
  },
  L = {
    width: 1280,
    height: 720
  },
  O = e => (0, u.renderVideoComponent)({
    ...e,
    className: N.videoWrapper,
    mediaPlayerClassName: N.mediaPlayer
  }),
  A = e => (0, a.jsx)(I.default, {
    ...e
  }),
  M = e => {
    let t, s, n, {
      item: i,
      size: r,
      onPlay: l,
      onEnded: o,
      onClick: h,
      playable: c,
      volume: p,
      isMuted: C,
      onVolumeChange: I,
      onMute: f
    } = e;
    if (i.type === E.CarouselMediaTypes.YOUTUBE_VIDEO) t = {
      url: (0, E.YOUTUBE_PREVIEW_URL)(i.youtubeVideoId),
      ...P
    }, s = {
      url: "".concat((0, E.YOUTUBE_EMBED_URL)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
      ...L
    }, n = g.SupportedEmbedIFrame.YOUTUBE;
    else {
      let e = null != i.width ? i.width : 0,
        n = null != i.height ? i.height : 0;
      t = {
        url: i.thumbnailSrc,
        width: e,
        height: n
      }, s = {
        url: i.src,
        proxyURL: i.src,
        width: e,
        height: n
      }
    }
    let x = (0, a.jsx)(m.EmbedVideo, {
      href: null,
      thumbnail: t,
      video: s,
      provider: n,
      allowFullScreen: !0,
      maxHeight: r.height,
      maxWidth: r.width,
      onPlay: l,
      onEnded: o,
      playable: c,
      className: N.video,
      volume: p,
      onVolumeChange: I,
      autoMute: C,
      onMute: f,
      autoPlay: c,
      renderVideoComponent: O,
      renderImageComponent: A,
      renderLinkComponent: u.renderMaskedLinkComponent
    });
    return c ? x : (0, a.jsx)(d.Clickable, {
      className: N.itemImageWrapper,
      onClick: h,
      children: x
    })
  },
  T = () => (0, a.jsx)("div", {
    className: N.paginationVideoOverlay,
    children: (0, a.jsx)(f.default, {
      inactive: !0,
      className: N.paginationVideoPlayPill,
      renderLinkComponent: u.renderMaskedLinkComponent
    })
  });
class y extends(n = i.PureComponent) {
  componentDidMount() {
    x.ComponentDispatch.subscribe(E.ComponentActions.CAROUSEL_PREV, this.manualPrevious), x.ComponentDispatch.subscribe(E.ComponentActions.CAROUSEL_NEXT, this.manualNext)
  }
  componentWillUnmount() {
    x.ComponentDispatch.unsubscribe(E.ComponentActions.CAROUSEL_PREV, this.manualPrevious), x.ComponentDispatch.unsubscribe(E.ComponentActions.CAROUSEL_NEXT, this.manualNext)
  }
  getStyle(e, t) {
    let s = t.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: o.default.Extrapolate.CLAMP
    });
    return {
      opacity: t.interpolate({
        inputRange: [0, 1],
        outputRange: [.3, 1],
        extrapolate: o.default.Extrapolate.CLAMP
      }),
      filter: o.default.template(b(), s)
    }
  }
  handleCurrentItemClick(e, t) {
    let {
      onCurrentItemClick: s
    } = this.props;
    null != s && s(e, t), this.setState({
      hasInteracted: !0
    })
  }
  handleEdgeItemMouseEnter(e) {
    let {
      currentIndex: t
    } = this.state;
    e < t ? this.setState({
      hoveringPreviousItem: !0
    }) : e > t && this.setState({
      hoveringNextItem: !0
    })
  }
  renderCarousel() {
    let {
      items: e
    } = this.props, {
      currentIndex: t,
      animate: s,
      hoveringPreviousItem: n,
      hoveringNextItem: i
    } = this.state, r = (0, a.jsx)(p.default, {
      items: e,
      itemSize: this.getItemSize(),
      renderItem: this.renderItem,
      currentIndex: t,
      animate: s,
      edgeItems: 2
    });
    return e.length <= 1 ? r : (0, a.jsxs)("div", {
      className: N.carouselButtonsContainer,
      children: [r, (0, a.jsx)(c.CarouselPrevious, {
        onClick: this.manualPrevious,
        className: l()(N.arrow, {
          [N.arrowHovered]: n
        })
      }), (0, a.jsx)(c.CarouselNext, {
        onClick: this.manualNext,
        className: l()(N.arrow, {
          [N.arrowHovered]: i
        })
      })]
    })
  }
  getPaginationSrc(e) {
    return e.type === E.CarouselMediaTypes.YOUTUBE_VIDEO ? (0, E.YOUTUBE_PREVIEW_URL)(e.youtubeVideoId) : e.type === E.CarouselMediaTypes.IMG ? e.src : e.type === E.CarouselMediaTypes.VIDEO ? e.thumbnailSrc : null
  }
  render() {
    let {
      items: e,
      className: t,
      autoplayInterval: s,
      paused: n
    } = this.props, {
      currentIndex: i,
      playingVideo: r,
      hasInteracted: l
    } = this.state;
    return (0, a.jsxs)(C.default, {
      pauseOnHover: !0,
      onInterval: this.autoNext,
      interval: s,
      className: t,
      disable: r || l || n,
      children: [this.renderCarousel(), (0, a.jsx)("div", {
        className: N.pagination,
        children: (0, a.jsx)(c.default, {
          renderItem: this.renderPaginationItem,
          scrollToPadding: 85,
          items: e,
          selectedIndex: i,
          onSetItem: e => this.setItem(e, !0),
          paginationContainerClass: N.scroller,
          align: e.length < 6 ? c.default.Align.LEFT : c.default.Align.CENTER
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      currentIndex: 0,
      animate: !0,
      playingVideo: !1,
      hasInteracted: !1,
      hoveringPreviousItem: !1,
      hoveringNextItem: !1,
      volume: 1,
      isMuted: !0
    }), v(this, "getItemSize", () => {
      let {
        width: e
      } = this.props, t = S.MEDIUM;
      return null != e && e < t.width && (t = S.SMALL), t
    }), v(this, "setItem", (e, t) => {
      let {
        props: {
          items: s,
          onIntentionalChange: n
        },
        state: {
          currentIndex: a
        }
      } = this, i = (0, p.normalizeIndex)(a, s.length), r = (0, p.normalizeIndex)(e, s.length), l = 1 === Math.abs(e - i) || e === s.length - 1 && 0 === i || 0 === e && i === s.length - 1;
      this.setState({
        playingVideo: !1,
        currentIndex: r,
        animate: l,
        hasInteracted: t
      }), t && null != n && n(s[r], i, r)
    }), v(this, "autoNext", () => {
      this.setItem(this.state.currentIndex + 1, !1)
    }), v(this, "manualNext", () => {
      this.setItem(this.state.currentIndex + 1, !0)
    }), v(this, "manualPrevious", () => {
      this.setItem(this.state.currentIndex - 1, !0)
    }), v(this, "handlePlay", e => this.setState({
      playingVideo: !0,
      hasInteracted: !e
    })), v(this, "handleEnded", () => {
      !this.state.hasInteracted && this.autoNext()
    }), v(this, "handleVolumeChange", e => {
      this.setState({
        volume: e,
        hasInteracted: !0
      })
    }), v(this, "handleMute", e => {
      this.setState({
        isMuted: e,
        hasInteracted: !0
      })
    }), v(this, "handleVideoClick", e => {
      this.setItem(e, !0)
    }), v(this, "handleEdgeItemMouseLeave", () => {
      this.setState({
        hoveringPreviousItem: !1,
        hoveringNextItem: !1
      })
    }), v(this, "renderCarouselImage", (e, t, s) => s ? (0, a.jsx)(d.Clickable, {
      onClick: () => this.handleCurrentItemClick(e, t),
      className: N.itemImageWrapper,
      children: (0, a.jsx)("img", {
        src: e.src,
        alt: "",
        className: N.currentImage
      })
    }) : (0, a.jsx)(d.Clickable, {
      onClick: () => this.setItem(t, !0),
      className: N.itemImageWrapper,
      children: (0, a.jsx)("img", {
        alt: "",
        className: N.itemImage,
        src: e.src,
        draggable: !1
      })
    })), v(this, "renderItem", (e, t, s) => {
      let {
        currentIndex: n,
        volume: i,
        isMuted: r
      } = this.state, d = t === (0, p.normalizeIndex)(n, this.props.items.length);
      return (0, a.jsx)(o.default.div, {
        className: l()(N.item, {
          [N.currentItem]: d
        }),
        style: null != s ? this.getStyle(t, s) : null,
        onMouseEnter: d ? null : () => this.handleEdgeItemMouseEnter(t),
        onMouseLeave: d ? null : this.handleEdgeItemMouseLeave,
        children: e.type === E.CarouselMediaTypes.VIDEO || e.type === E.CarouselMediaTypes.YOUTUBE_VIDEO ? (0, a.jsx)(M, {
          item: e,
          size: this.getItemSize(),
          onPlay: this.handlePlay,
          onEnded: this.handleEnded,
          playable: d,
          onClick: () => this.handleVideoClick(t),
          volume: i,
          onVolumeChange: this.handleVolumeChange,
          isMuted: r,
          onMute: this.handleMute
        }) : this.renderCarouselImage(e, t, d)
      })
    }), v(this, "renderPaginationItem", (e, t) => {
      let {
        currentIndex: s
      } = this.state, n = s === t;
      return (0, a.jsxs)("div", {
        className: l()(N.paginationItem, n ? N.selectedStorePaginationItem : N.unselectedStorePaginationItem),
        children: [(0, a.jsx)("img", {
          alt: null == e.alt ? t : e.alt,
          className: N.storePaginationImg,
          src: this.getPaginationSrc(e),
          draggable: !1
        }), e.type === E.CarouselMediaTypes.YOUTUBE_VIDEO || e.type === E.CarouselMediaTypes.VIDEO ? (0, a.jsx)(T, {}) : null, n ? (0, a.jsx)("div", {
          className: N.overlappingBorder
        }) : null]
      }, "page-".concat(t))
    })
  }
}
v(y, "defaultProps", {
  autoplayInterval: 8e3,
  paused: !1
}), t.default = (0, h.default)(y)