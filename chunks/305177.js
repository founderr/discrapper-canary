n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(748780),
  o = n(873546),
  c = n(846519),
  u = n(215569),
  d = n(481060),
  E = n(552253),
  _ = n(810090),
  I = n(788773);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class m extends i.Component {
  renderMedia() {
    let {
      src: e,
      className: t,
      title: n
    } = this.props, {
      imageLoading: i
    } = this.state;
    return (0, s.jsx)(r.Z.img, {
      className: a()({
        [I.imageLoading]: i
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
      imageLoadError: i,
      imageLoading: l
    } = this.state;
    return null == n || i ? (0, s.jsx)(r.Z.div, {
      className: a()(I.titleContainer, e),
      style: this.getImageStyle(),
      children: t
    }) : (0, s.jsxs)(r.Z.div, {
      className: a()(l ? I.loadingContainer : null, e),
      style: this.getImageStyle(),
      children: [l ? (0, s.jsx)(d.Spinner, {
        className: I.spinner,
        itemClassName: I.spinnerItem,
        type: d.Spinner.Type.PULSING_ELLIPSIS,
        animated: !0
      }) : null, this.renderMedia()]
    })
  }
  constructor(...e) {
    super(...e), T(this, "_animatedValue", new r.Z.Value(1)), T(this, "state", {
      imageLoadError: !1,
      imageLoading: !0
    }), T(this, "componentWillEnter", e => {
      this._animatedValue.setValue(0), r.Z.timing(this._animatedValue, {
        toValue: 1,
        duration: 400
      }).start(e)
    }), T(this, "componentWillLeave", e => {
      r.Z.timing(this._animatedValue, {
        toValue: 0,
        duration: 400
      }).start(e)
    }), T(this, "getImageStyle", () => ({
      opacity: this._animatedValue
    })), T(this, "handleImageError", () => {
      this.setState({
        imageLoadError: !0,
        imageLoading: !1
      })
    }), T(this, "handleImageLoaded", () => {
      this.setState({
        imageLoading: !1
      })
    })
  }
}
class N extends i.Component {
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
      title: i,
      splashClassName: l
    } = this.props;
    return null == t ? (0, s.jsx)(m, {
      className: a()(I.splash, l),
      src: n,
      title: i
    }, "image") : (0, s.jsx)(E.Z, {
      onInterval: this.nextItem,
      interval: 2e3,
      className: I.slideshowWrapper,
      disable: !e,
      children: (0, s.jsx)(u.W, {
        children: this.renderSlideItem(t)
      })
    })
  }
  render() {
    let {
      video: e,
      className: t,
      placeholder: n,
      renderMediaOverlay: i,
      playing: l
    } = this.props, {
      videoLoadError: r,
      videoLoaded: o
    } = this.state;
    return n ? (0, s.jsx)("div", {
      className: t
    }) : (0, s.jsxs)("figure", {
      className: a()(I.__invalid_tileMedia, t),
      children: [null == e || r ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(l && o)]
    })
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      currentIndex: 0,
      videoLoadError: !1,
      videoLoaded: !1
    }), T(this, "_video", i.createRef()), T(this, "videoTimeout", new c.V7), T(this, "videoPlaying", !1), T(this, "handleToggleMute", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onToggleMute: t
      } = this.props;
      null == t || t(e)
    }), T(this, "handleVideoError", () => {
      this.setState({
        videoLoadError: !0
      })
    }), T(this, "handleVideoLoaded", () => {
      this.setState({
        videoLoaded: !0
      })
    }), T(this, "renderTypeVideo", () => {
      let {
        videoLoaded: e
      } = this.state, {
        video: t,
        image: n,
        title: l,
        playing: r,
        muted: c,
        splashClassName: E,
        splashPlaceholderClassName: T,
        renderMediaOverlay: N
      } = this.props, h = c ? d.VoiceXIcon : d.VoiceNormalIcon;
      return (0, s.jsxs)(i.Fragment, {
        children: [o.tq ? null : (0, s.jsx)(_.Z, {
          className: a()(I.splash, E),
          muted: c,
          loop: !0,
          preload: "none",
          ref: this._video,
          onLoadedMetadata: this.handleVideoLoaded,
          onError: this.handleVideoError,
          children: (0, s.jsx)("source", {
            src: t,
            type: "video/mp4"
          })
        }), (0, s.jsx)(u.W, {
          children: r && e ? null : (0, s.jsx)(m, {
            className: a()(I.splashPlaceholder, T),
            src: n,
            title: l
          }, 0)
        }), (0, s.jsx)(d.Clickable, {
          className: a()(I.muteContainer, {
            [I.muteContainerPlaying]: r && e,
            [I.muteContainerMediaOverlay]: null != N
          }),
          onClick: this.handleToggleMute,
          children: r && e ? (0, s.jsx)(h, {
            className: I.mute
          }) : null
        })]
      })
    }), T(this, "nextItem", () => {
      let {
        slideImages: e
      } = this.props;
      null != e && this.setState({
        currentIndex: (this.state.currentIndex + 1) % e.length
      })
    }), T(this, "renderSlideItem", e => {
      let {
        image: t,
        title: n,
        playing: i,
        splashClassName: l
      } = this.props, {
        currentIndex: r
      } = this.state;
      return i ? (0, s.jsx)(m, {
        className: a()(I.splash, l),
        src: e[r],
        title: n
      }, r) : (0, s.jsx)(m, {
        className: a()(I.splash, l),
        src: t,
        title: n
      }, "image")
    })
  }
}
t.Z = N