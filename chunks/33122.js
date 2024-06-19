s.d(t, {
  r: function() {
    return S
  }
}), s(47120);
var n, i = s(735250),
  a = s(470079),
  r = s(120356),
  l = s.n(r),
  o = s(748780),
  h = s(481060),
  d = s(112724),
  u = s(524444),
  c = s(494735),
  p = s(574735),
  m = s(529815),
  g = s(250496),
  I = s(552253),
  C = s(261922),
  x = s(259773),
  N = s(585483),
  v = s(981631),
  b = s(439334);

function f(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function P() {
  var e, t;
  let s = (e = ["grayscale(", ")"], !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  })));
  return P = function() {
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
  E = {
    width: 1920,
    height: 1080
  },
  L = {
    width: 1280,
    height: 720
  },
  O = e => (0, u.lV)({
    ...e,
    className: b.videoWrapper,
    mediaPlayerClassName: b.mediaPlayer
  }),
  y = e => (0, i.jsx)(C.Z, {
    ...e
  }),
  M = e => {
    let t, s, n, {
      item: a,
      size: r,
      onPlay: l,
      onEnded: o,
      onClick: d,
      playable: c,
      volume: p,
      isMuted: I,
      onVolumeChange: C,
      onMute: x
    } = e;
    if (a.type === v.s9s.YOUTUBE_VIDEO) t = {
      url: (0, v.n8r)(a.youtubeVideoId),
      ...E
    }, s = {
      url: "".concat((0, v.ivE)(a.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
      ...L
    }, n = g.pn.YOUTUBE;
    else {
      let e = null != a.width ? a.width : 0,
        n = null != a.height ? a.height : 0;
      t = {
        url: a.thumbnailSrc,
        width: e,
        height: n
      }, s = {
        url: a.src,
        proxyURL: a.src,
        width: e,
        height: n
      }
    }
    let N = (0, i.jsx)(m.BC, {
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
      className: b.video,
      volume: p,
      onVolumeChange: C,
      autoMute: I,
      onMute: x,
      autoPlay: c,
      renderVideoComponent: O,
      renderImageComponent: y,
      renderLinkComponent: u.iT
    });
    return c ? N : (0, i.jsx)(h.Clickable, {
      className: b.itemImageWrapper,
      onClick: d,
      children: N
    })
  },
  j = () => (0, i.jsx)("div", {
    className: b.paginationVideoOverlay,
    children: (0, i.jsx)(x.Z, {
      inactive: !0,
      className: b.paginationVideoPlayPill,
      renderLinkComponent: u.iT
    })
  });
class T extends(n = a.PureComponent) {
  componentDidMount() {
    N.S.subscribe(v.CkL.CAROUSEL_PREV, this.manualPrevious), N.S.subscribe(v.CkL.CAROUSEL_NEXT, this.manualNext)
  }
  componentWillUnmount() {
    N.S.unsubscribe(v.CkL.CAROUSEL_PREV, this.manualPrevious), N.S.unsubscribe(v.CkL.CAROUSEL_NEXT, this.manualNext)
  }
  getStyle(e, t) {
    let s = t.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: o.Z.Extrapolate.CLAMP
    });
    return {
      opacity: t.interpolate({
        inputRange: [0, 1],
        outputRange: [.3, 1],
        extrapolate: o.Z.Extrapolate.CLAMP
      }),
      filter: o.Z.template(P(), s)
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
      hoveringNextItem: a
    } = this.state, r = (0, i.jsx)(p.ZP, {
      items: e,
      itemSize: this.getItemSize(),
      renderItem: this.renderItem,
      currentIndex: t,
      animate: s,
      edgeItems: 2
    });
    return e.length <= 1 ? r : (0, i.jsxs)("div", {
      className: b.carouselButtonsContainer,
      children: [r, (0, i.jsx)(c.am, {
        onClick: this.manualPrevious,
        className: l()(b.arrow, {
          [b.arrowHovered]: n
        })
      }), (0, i.jsx)(c.Pz, {
        onClick: this.manualNext,
        className: l()(b.arrow, {
          [b.arrowHovered]: a
        })
      })]
    })
  }
  getPaginationSrc(e) {
    return e.type === v.s9s.YOUTUBE_VIDEO ? (0, v.n8r)(e.youtubeVideoId) : e.type === v.s9s.IMG ? e.src : e.type === v.s9s.VIDEO ? e.thumbnailSrc : null
  }
  render() {
    let {
      items: e,
      className: t,
      autoplayInterval: s,
      paused: n
    } = this.props, {
      currentIndex: a,
      playingVideo: r,
      hasInteracted: l
    } = this.state;
    return (0, i.jsxs)(I.Z, {
      pauseOnHover: !0,
      onInterval: this.autoNext,
      interval: s,
      className: t,
      disable: r || l || n,
      children: [this.renderCarousel(), (0, i.jsx)("div", {
        className: b.pagination,
        children: (0, i.jsx)(c.ZP, {
          renderItem: this.renderPaginationItem,
          scrollToPadding: 85,
          items: e,
          selectedIndex: a,
          onSetItem: e => this.setItem(e, !0),
          paginationContainerClass: b.scroller,
          align: e.length < 6 ? c.ZP.Align.LEFT : c.ZP.Align.CENTER
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), f(this, "state", {
      currentIndex: 0,
      animate: !0,
      playingVideo: !1,
      hasInteracted: !1,
      hoveringPreviousItem: !1,
      hoveringNextItem: !1,
      volume: 1,
      isMuted: !0
    }), f(this, "getItemSize", () => {
      let {
        width: e
      } = this.props, t = S.MEDIUM;
      return null != e && e < t.width && (t = S.SMALL), t
    }), f(this, "setItem", (e, t) => {
      let {
        props: {
          items: s,
          onIntentionalChange: n
        },
        state: {
          currentIndex: i
        }
      } = this, a = (0, p.gN)(i, s.length), r = (0, p.gN)(e, s.length), l = 1 === Math.abs(e - a) || e === s.length - 1 && 0 === a || 0 === e && a === s.length - 1;
      this.setState({
        playingVideo: !1,
        currentIndex: r,
        animate: l,
        hasInteracted: t
      }), t && null != n && n(s[r], a, r)
    }), f(this, "autoNext", () => {
      this.setItem(this.state.currentIndex + 1, !1)
    }), f(this, "manualNext", () => {
      this.setItem(this.state.currentIndex + 1, !0)
    }), f(this, "manualPrevious", () => {
      this.setItem(this.state.currentIndex - 1, !0)
    }), f(this, "handlePlay", e => this.setState({
      playingVideo: !0,
      hasInteracted: !e
    })), f(this, "handleEnded", () => {
      !this.state.hasInteracted && this.autoNext()
    }), f(this, "handleVolumeChange", e => {
      this.setState({
        volume: e,
        hasInteracted: !0
      })
    }), f(this, "handleMute", e => {
      this.setState({
        isMuted: e,
        hasInteracted: !0
      })
    }), f(this, "handleVideoClick", e => {
      this.setItem(e, !0)
    }), f(this, "handleEdgeItemMouseLeave", () => {
      this.setState({
        hoveringPreviousItem: !1,
        hoveringNextItem: !1
      })
    }), f(this, "renderCarouselImage", (e, t, s) => s ? (0, i.jsx)(h.Clickable, {
      onClick: () => this.handleCurrentItemClick(e, t),
      className: b.itemImageWrapper,
      children: (0, i.jsx)("img", {
        src: e.src,
        alt: "",
        className: b.currentImage
      })
    }) : (0, i.jsx)(h.Clickable, {
      onClick: () => this.setItem(t, !0),
      className: b.itemImageWrapper,
      children: (0, i.jsx)("img", {
        alt: "",
        className: b.itemImage,
        src: e.src,
        draggable: !1
      })
    })), f(this, "renderItem", (e, t, s) => {
      let {
        currentIndex: n,
        volume: a,
        isMuted: r
      } = this.state, h = t === (0, p.gN)(n, this.props.items.length);
      return (0, i.jsx)(o.Z.div, {
        className: l()(b.item, {
          [b.currentItem]: h
        }),
        style: null != s ? this.getStyle(t, s) : null,
        onMouseEnter: h ? null : () => this.handleEdgeItemMouseEnter(t),
        onMouseLeave: h ? null : this.handleEdgeItemMouseLeave,
        children: e.type === v.s9s.VIDEO || e.type === v.s9s.YOUTUBE_VIDEO ? (0, i.jsx)(M, {
          item: e,
          size: this.getItemSize(),
          onPlay: this.handlePlay,
          onEnded: this.handleEnded,
          playable: h,
          onClick: () => this.handleVideoClick(t),
          volume: a,
          onVolumeChange: this.handleVolumeChange,
          isMuted: r,
          onMute: this.handleMute
        }) : this.renderCarouselImage(e, t, h)
      })
    }), f(this, "renderPaginationItem", (e, t) => {
      let {
        currentIndex: s
      } = this.state, n = s === t;
      return (0, i.jsxs)("div", {
        className: l()(b.paginationItem, n ? b.selectedStorePaginationItem : b.unselectedStorePaginationItem),
        children: [(0, i.jsx)("img", {
          alt: null == e.alt ? t : e.alt,
          className: b.storePaginationImg,
          src: this.getPaginationSrc(e),
          draggable: !1
        }), e.type === v.s9s.YOUTUBE_VIDEO || e.type === v.s9s.VIDEO ? (0, i.jsx)(j, {}) : null, n ? (0, i.jsx)("div", {
          className: b.overlappingBorder
        }) : null]
      }, "page-".concat(t))
    })
  }
}
f(T, "defaultProps", {
  autoplayInterval: 8e3,
  paused: !1
}), t.Z = (0, d.Z)(T)