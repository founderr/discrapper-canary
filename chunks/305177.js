"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("748780"),
  o = n("873546"),
  u = n("846519"),
  d = n("215569"),
  c = n("481060"),
  E = n("552253"),
  f = n("632184"),
  _ = n("82965"),
  T = n("810090"),
  I = n("976576");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p extends a.Component {
  renderMedia() {
    let {
      src: e,
      className: t,
      title: n
    } = this.props, {
      imageLoading: a
    } = this.state;
    return (0, s.jsx)(r.default.img, {
      className: i()({
        [I.imageLoading]: a
      }, t),
      src: e,
      alt: n,
      style: this.getImageStyle(),
      onError: this.handleImageError,
      onLoad: this.handleImageLoaded
    })
  }
  render() {
    let {
      className: e,
      title: t,
      src: n
    } = this.props, {
      imageLoadError: a,
      imageLoading: l
    } = this.state;
    return null == n || a ? (0, s.jsx)(r.default.div, {
      className: i()(I.titleContainer, e),
      style: this.getImageStyle(),
      children: t
    }) : (0, s.jsxs)(r.default.div, {
      className: i()(l ? I.loadingContainer : null, e),
      style: this.getImageStyle(),
      children: [l ? (0, s.jsx)(c.Spinner, {
        className: I.spinner,
        itemClassName: I.spinnerItem,
        type: c.Spinner.Type.PULSING_ELLIPSIS,
        animated: !0
      }) : null, this.renderMedia()]
    })
  }
  constructor(...e) {
    super(...e), m(this, "_animatedValue", new r.default.Value(1)), m(this, "state", {
      imageLoadError: !1,
      imageLoading: !0
    }), m(this, "componentWillEnter", e => {
      this._animatedValue.setValue(0), r.default.timing(this._animatedValue, {
        toValue: 1,
        duration: 400
      }).start(e)
    }), m(this, "componentWillLeave", e => {
      r.default.timing(this._animatedValue, {
        toValue: 0,
        duration: 400
      }).start(e)
    }), m(this, "getImageStyle", () => ({
      opacity: this._animatedValue
    })), m(this, "handleImageError", () => {
      this.setState({
        imageLoadError: !0,
        imageLoading: !1
      })
    }), m(this, "handleImageLoaded", () => {
      this.setState({
        imageLoading: !1
      })
    })
  }
}
class N extends a.Component {
  componentWillUnmount() {
    this.videoTimeout.stop()
  }
  componentDidUpdate(e) {
    let {
      playing: t
    } = this.props, n = this._video.current;
    if (null != n) {
      if (t && !e.playing) {
        this.videoTimeout.stop(), isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0), n.volume = .3;
        let e = n.play();
        null != e && e.then(() => {
          this.videoPlaying = !0
        })
      } else e.playing && !t && this.videoTimeout.start(400, () => {
        this.videoPlaying && (n.pause(), this.videoPlaying = !1)
      })
    }
  }
  renderTypeImage() {
    let {
      playing: e,
      slideImages: t,
      image: n,
      title: a,
      splashClassName: l
    } = this.props;
    return null == t ? (0, s.jsx)(p, {
      className: i()(I.splash, l),
      src: n,
      title: a
    }, "image") : (0, s.jsx)(E.default, {
      onInterval: this.nextItem,
      interval: 2e3,
      className: I.slideshowWrapper,
      disable: !e,
      children: (0, s.jsx)(d.TransitionGroup, {
        children: this.renderSlideItem(t)
      })
    })
  }
  render() {
    let {
      video: e,
      className: t,
      placeholder: n,
      renderMediaOverlay: a,
      playing: l
    } = this.props, {
      videoLoadError: r,
      videoLoaded: o
    } = this.state;
    return n ? (0, s.jsx)("div", {
      className: t
    }) : (0, s.jsxs)("figure", {
      className: i()(I.__invalid_tileMedia, t),
      children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != a && a(l && o)]
    })
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      currentIndex: 0,
      videoLoadError: !1,
      videoLoaded: !1
    }), m(this, "_video", a.createRef()), m(this, "videoTimeout", new u.Timeout), m(this, "videoPlaying", !1), m(this, "handleToggleMute", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onToggleMute: t
      } = this.props;
      null == t || t(e)
    }), m(this, "handleVideoError", () => {
      this.setState({
        videoLoadError: !0
      })
    }), m(this, "handleVideoLoaded", () => {
      this.setState({
        videoLoaded: !0
      })
    }), m(this, "renderTypeVideo", () => {
      let {
        videoLoaded: e
      } = this.state, {
        video: t,
        image: n,
        title: l,
        playing: r,
        muted: u,
        splashClassName: E,
        splashPlaceholderClassName: m,
        renderMediaOverlay: N
      } = this.props, S = u ? _.default : f.default;
      return (0, s.jsxs)(a.Fragment, {
        children: [o.isMobile ? null : (0, s.jsx)(T.default, {
          className: i()(I.splash, E),
          muted: u,
          loop: !0,
          preload: "none",
          ref: this._video,
          onLoadedMetadata: this.handleVideoLoaded,
          onError: this.handleVideoError,
          children: (0, s.jsx)("source", {
            src: t,
            type: "video/mp4"
          })
        }), (0, s.jsx)(d.TransitionGroup, {
          children: r && e ? null : (0, s.jsx)(p, {
            className: i()(I.splashPlaceholder, m),
            src: n,
            title: l
          }, 0)
        }), (0, s.jsx)(c.Clickable, {
          className: i()(I.muteContainer, {
            [I.muteContainerPlaying]: r && e,
            [I.muteContainerMediaOverlay]: null != N
          }),
          onClick: this.handleToggleMute,
          children: r && e ? (0, s.jsx)(S, {
            className: I.mute
          }) : null
        })]
      })
    }), m(this, "nextItem", () => {
      let {
        slideImages: e
      } = this.props;
      null != e && this.setState({
        currentIndex: (this.state.currentIndex + 1) % e.length
      })
    }), m(this, "renderSlideItem", e => {
      let {
        image: t,
        title: n,
        playing: a,
        splashClassName: l
      } = this.props, {
        currentIndex: r
      } = this.state;
      return a ? (0, s.jsx)(p, {
        className: i()(I.splash, l),
        src: e[r],
        title: n
      }, r) : (0, s.jsx)(p, {
        className: i()(I.splash, l),
        src: t,
        title: n
      }, "image")
    })
  }
}
t.default = N