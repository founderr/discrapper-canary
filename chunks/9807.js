"use strict";
s.r(t), s("47120"), s("411104");
var n, a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  o = s("481060"),
  d = s("33122"),
  h = s("524444"),
  u = s("731081"),
  c = s("529815"),
  p = s("250496"),
  m = s("261922"),
  g = s("133910"),
  C = s("843445"),
  I = s("981631"),
  f = s("689938"),
  x = s("744898");

function E(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let N = e => {
    let {
      className: t,
      ...s
    } = e;
    return (0, a.jsx)(g.default, {
      ...s,
      className: l()(x.sizedToParent, t),
      mediaPlayerClassName: x.sizedToParent,
      renderLinkComponent: h.renderMaskedLinkComponent
    })
  },
  v = e => {
    let {
      containerClassName: t,
      className: s,
      ...n
    } = e;
    return (0, a.jsx)(m.default, {
      ...n,
      className: l()(s, t)
    })
  },
  b = {
    width: 1280,
    height: 720
  },
  S = {
    width: 640,
    height: 360
  },
  P = e => {
    let t, s, n, {
      item: i,
      onPlay: r,
      volume: l,
      onVolumeChange: o,
      onMute: u,
      isMuted: m,
      autoPlay: g
    } = e;
    if (i.type === I.CarouselMediaTypes.YOUTUBE_VIDEO) t = {
      url: (0, I.YOUTUBE_PREVIEW_URL)(i.youtubeVideoId),
      ...b
    }, s = {
      url: "".concat((0, I.YOUTUBE_EMBED_URL)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1"),
      ...S
    }, n = p.SupportedEmbedIFrame.YOUTUBE;
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
    return (0, a.jsx)("div", {
      className: x.embedContainer,
      children: (0, a.jsx)(c.EmbedVideo, {
        className: x.sizedToParent,
        iframeWrapperClassName: x.sizedToParent,
        href: null,
        thumbnail: t,
        video: s,
        provider: n,
        maxHeight: d.ItemSizes.SMALL.height,
        maxWidth: C.PageSizes.SMALL,
        onPlay: r,
        playable: !0,
        volume: l,
        onVolumeChange: o,
        autoMute: m,
        onMute: u,
        autoPlay: g,
        renderImageComponent: v,
        renderVideoComponent: N,
        renderLinkComponent: h.renderMaskedLinkComponent
      })
    })
  };
class L extends(n = i.PureComponent) {
  componentDidMount() {
    let {
      items: e
    } = this.props;
    e.length > 0 && e[0].type === I.CarouselMediaTypes.IMG && this.setState({
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
      themedPagination: i
    } = this.props, {
      hasInteracted: r
    } = this.state;
    return (0, a.jsx)(u.default, {
      items: e.slice(0, 12),
      delay: t,
      paused: n || r,
      renderItem: this.renderItem,
      className: l()(x.smallCarousel, s),
      themedPagination: i,
      onIntentionalChange: this.handleIntentionalChange,
      onChangeItem: this.handleChangeItem
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      hasInteracted: !1,
      isVideoPlaying: !1,
      isMuted: !0,
      volume: 1,
      status: new Map,
      imageLoadingStartTime: new Map
    }), E(this, "handlePlay", e => {
      this.setState({
        isVideoPlaying: !0,
        hasInteracted: !e
      })
    }), E(this, "handleVolumeChange", e => {
      this.setState({
        volume: e,
        hasInteracted: !0
      })
    }), E(this, "handleMute", e => {
      this.setState({
        isMuted: e,
        hasInteracted: !0
      })
    }), E(this, "handleChangeItem", e => {
      this.setState({
        isVideoPlaying: !1
      }), e.type === I.CarouselMediaTypes.IMG && this.setState({
        imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now())
      })
    }), E(this, "handleIntentionalChange", (e, t, s, n) => {
      this.setState({
        hasInteracted: !0
      });
      let {
        onIntentionalChange: a
      } = this.props;
      null != a && a(e, t, s, n)
    }), E(this, "handleOnErrorImg", e => {
      this.setState({
        status: new Map(this.state.status).set(e.target.src, "errored")
      })
    }), E(this, "handleOnLoadImg", e => {
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
    }), E(this, "renderItem", (e, t) => {
      let s;
      let {
        isMuted: n,
        volume: i
      } = this.state, {
        videoAutoPlay: r
      } = this.props;
      switch (e.type) {
        case I.CarouselMediaTypes.YOUTUBE_VIDEO:
        case I.CarouselMediaTypes.VIDEO:
          s = (0, a.jsx)(P, {
            item: e,
            onPlay: this.handlePlay,
            isMuted: n,
            volume: i,
            onVolumeChange: this.handleVolumeChange,
            onMute: this.handleMute,
            autoPlay: r
          });
          break;
        case I.CarouselMediaTypes.IMG:
          if ("errored" === this.state.status.get(e.src)) {
            let e = (0, a.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              children: f.default.Messages.ERRORS_IMAGE_NOT_FOUND
            });
            return (0, a.jsx)("div", {
              className: x.errorContainer,
              children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
            })
          } {
            var d;
            let t = null !== (d = e.alt) && void 0 !== d ? d : f.default.Messages.IMAGE;
            s = (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(o.Spinner, {
                className: l()(x.spinner, {
                  [x.hidden]: void 0 !== this.state.status.get(e.src)
                }),
                type: o.Spinner.Type.SPINNING_CIRCLE
              }), (0, a.jsx)("img", {
                onError: this.handleOnErrorImg,
                onLoad: this.handleOnLoadImg,
                className: l()(x.smallCarouselImage, {
                  [x.hidden]: "loaded" !== this.state.status.get(e.src)
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
      return (0, a.jsx)(o.Clickable, {
        className: x.smallCarouselItem,
        onClick: () => this.handleCurrentItemClick(e, t),
        children: s
      })
    })
  }
}
E(L, "defaultProps", {
  paused: !1,
  videoAutoPlay: !0
}), t.default = L