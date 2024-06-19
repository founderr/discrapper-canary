s(47120), s(411104);
var n, i = s(735250),
  a = s(470079),
  r = s(120356),
  l = s.n(r),
  o = s(481060),
  h = s(33122),
  d = s(524444),
  u = s(731081),
  c = s(529815),
  p = s(250496),
  m = s(261922),
  g = s(133910),
  I = s(843445),
  C = s(981631),
  x = s(689938),
  N = s(782159);

function v(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let b = e => {
    let {
      className: t,
      ...s
    } = e;
    return (0, i.jsx)(g.Z, {
      ...s,
      className: l()(N.sizedToParent, t),
      mediaPlayerClassName: N.sizedToParent,
      renderLinkComponent: d.iT
    })
  },
  f = e => {
    let {
      containerClassName: t,
      className: s,
      ...n
    } = e;
    return (0, i.jsx)(m.Z, {
      ...n,
      className: l()(s, t)
    })
  },
  P = {
    width: 1280,
    height: 720
  },
  S = {
    width: 640,
    height: 360
  },
  E = e => {
    let t, s, n, {
      item: a,
      onPlay: r,
      volume: l,
      onVolumeChange: o,
      onMute: u,
      isMuted: m,
      autoPlay: g
    } = e;
    if (a.type === C.s9s.YOUTUBE_VIDEO) t = {
      url: (0, C.n8r)(a.youtubeVideoId),
      ...P
    }, s = {
      url: "".concat((0, C.ivE)(a.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
      ...S
    }, n = p.pn.YOUTUBE;
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
    return (0, i.jsx)("div", {
      className: N.embedContainer,
      children: (0, i.jsx)(c.BC, {
        className: N.sizedToParent,
        iframeWrapperClassName: N.sizedToParent,
        href: null,
        thumbnail: t,
        video: s,
        provider: n,
        maxHeight: h.r.SMALL.height,
        maxWidth: I.b.SMALL,
        onPlay: r,
        playable: !0,
        volume: l,
        onVolumeChange: o,
        autoMute: m,
        onMute: u,
        autoPlay: g,
        renderImageComponent: f,
        renderVideoComponent: b,
        renderLinkComponent: d.iT
      })
    })
  };
class L extends(n = a.PureComponent) {
  componentDidMount() {
    let {
      items: e
    } = this.props;
    e.length > 0 && e[0].type === C.s9s.IMG && this.setState({
      imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now())
    })
  }
  handleCurrentItemClick(e, t) {
    let {
      onCurrentItemClick: s
    } = this.props;
    null != s && s(e, t), this.setState({
      hasInteracted: !0
    })
  }
  render() {
    let {
      items: e,
      autoplayInterval: t,
      className: s,
      paused: n,
      themedPagination: a
    } = this.props, {
      hasInteracted: r
    } = this.state;
    return (0, i.jsx)(u.Z, {
      items: e.slice(0, 12),
      delay: t,
      initialPaused: n || r,
      renderItem: this.renderItem,
      className: l()(N.smallCarousel, s),
      themedPagination: a,
      onIntentionalChange: this.handleIntentionalChange,
      onChangeItem: this.handleChangeItem
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      hasInteracted: !1,
      isVideoPlaying: !1,
      isMuted: !0,
      volume: 1,
      status: new Map,
      imageLoadingStartTime: new Map
    }), v(this, "handlePlay", e => {
      this.setState({
        isVideoPlaying: !0,
        hasInteracted: !e
      })
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
    }), v(this, "handleChangeItem", e => {
      this.setState({
        isVideoPlaying: !1
      }), e.type === C.s9s.IMG && this.setState({
        imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now())
      })
    }), v(this, "handleIntentionalChange", (e, t, s, n) => {
      this.setState({
        hasInteracted: !0
      });
      let {
        onIntentionalChange: i
      } = this.props;
      null != i && i(e, t, s, n)
    }), v(this, "handleOnErrorImg", e => {
      this.setState({
        status: new Map(this.state.status).set(e.target.src, "errored")
      })
    }), v(this, "handleOnLoadImg", e => {
      let {
        onImageLoad: t
      } = this.props;
      this.setState({
        status: new Map(this.state.status).set(e.target.src, "loaded")
      });
      let s = this.state.imageLoadingStartTime.get(e.target.src),
        n = null != s ? Date.now() - s : void 0;
      null == t || t({
        src: e.target.src,
        loadTimeMs: n
      })
    }), v(this, "renderItem", (e, t) => {
      let s;
      let {
        isMuted: n,
        volume: a
      } = this.state, {
        videoAutoPlay: r
      } = this.props;
      switch (e.type) {
        case C.s9s.YOUTUBE_VIDEO:
        case C.s9s.VIDEO:
          s = (0, i.jsx)(E, {
            item: e,
            onPlay: this.handlePlay,
            isMuted: n,
            volume: a,
            onVolumeChange: this.handleVolumeChange,
            onMute: this.handleMute,
            autoPlay: r
          });
          break;
        case C.s9s.IMG:
          if ("errored" === this.state.status.get(e.src)) {
            let e = (0, i.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              children: x.Z.Messages.ERRORS_IMAGE_NOT_FOUND
            });
            return (0, i.jsx)("div", {
              className: N.errorContainer,
              children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
            })
          } {
            var h;
            let t = null !== (h = e.alt) && void 0 !== h ? h : x.Z.Messages.IMAGE;
            s = (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(o.Spinner, {
                className: l()(N.spinner, {
                  [N.hidden]: void 0 !== this.state.status.get(e.src)
                }),
                type: o.Spinner.Type.SPINNING_CIRCLE
              }), (0, i.jsx)("img", {
                onError: this.handleOnErrorImg,
                onLoad: this.handleOnLoadImg,
                className: l()(N.smallCarouselImage, {
                  [N.hidden]: "loaded" !== this.state.status.get(e.src)
                }),
                src: e.src,
                alt: t
              })]
            })
          }
          break;
        default:
          throw Error("Unexpected MediaType")
      }
      return (0, i.jsx)(o.Clickable, {
        className: N.smallCarouselItem,
        onClick: () => this.handleCurrentItemClick(e, t),
        children: s
      })
    })
  }
}
v(L, "defaultProps", {
  paused: !1,
  videoAutoPlay: !0
}), t.Z = L