var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(748780),
    u = n(873546),
    c = n(846519),
    d = n(215569),
    _ = n(481060),
    E = n(679056),
    f = n(70097),
    h = n(10963);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = 2000,
    I = 400,
    T = 0.3;
class g extends a.Component {
    renderMedia() {
        let { src: e, className: t, title: n } = this.props,
            { imageLoading: r } = this.state;
        return (0, i.jsx)(l.Z.img, {
            className: s()({ [h.imageLoading]: r }, t),
            src: e,
            alt: n,
            style: this.getImageStyle(),
            onError: this.handleImageError,
            onLoad: this.handleImageLoaded
        });
    }
    render() {
        let { className: e, title: t, src: n } = this.props,
            { imageLoadError: r, imageLoading: a } = this.state;
        return null == n || r
            ? (0, i.jsx)(l.Z.div, {
                  className: s()(h.titleContainer, e),
                  style: this.getImageStyle(),
                  children: t
              })
            : (0, i.jsxs)(l.Z.div, {
                  className: s()(a ? h.loadingContainer : null, e),
                  style: this.getImageStyle(),
                  children: [
                      a
                          ? (0, i.jsx)(_.Spinner, {
                                className: h.spinner,
                                itemClassName: h.spinnerItem,
                                type: _.Spinner.Type.PULSING_ELLIPSIS,
                                animated: !0
                            })
                          : null,
                      this.renderMedia()
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            p(this, '_animatedValue', new l.Z.Value(1)),
            p(this, 'state', {
                imageLoadError: !1,
                imageLoading: !0
            }),
            p(this, 'componentWillEnter', (e) => {
                this._animatedValue.setValue(0),
                    l.Z.timing(this._animatedValue, {
                        toValue: 1,
                        duration: I
                    }).start(e);
            }),
            p(this, 'componentWillLeave', (e) => {
                l.Z.timing(this._animatedValue, {
                    toValue: 0,
                    duration: I
                }).start(e);
            }),
            p(this, 'getImageStyle', () => ({ opacity: this._animatedValue })),
            p(this, 'handleImageError', () => {
                this.setState({
                    imageLoadError: !0,
                    imageLoading: !1
                });
            }),
            p(this, 'handleImageLoaded', () => {
                this.setState({ imageLoading: !1 });
            });
    }
}
class S extends a.Component {
    componentWillUnmount() {
        this.videoTimeout.stop();
    }
    componentDidUpdate(e) {
        let { playing: t } = this.props,
            n = this._video.current;
        if (null != n) {
            if (t && !e.playing) {
                this.videoTimeout.stop(), isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0), (n.volume = T);
                let e = n.play();
                null != e &&
                    e.then(() => {
                        this.videoPlaying = !0;
                    });
            } else
                e.playing &&
                    !t &&
                    this.videoTimeout.start(I, () => {
                        this.videoPlaying && (n.pause(), (this.videoPlaying = !1));
                    });
        }
    }
    renderTypeImage() {
        let { playing: e, slideImages: t, image: n, title: r, splashClassName: a } = this.props;
        return null == t
            ? (0, i.jsx)(
                  g,
                  {
                      className: s()(h.splash, a),
                      src: n,
                      title: r
                  },
                  'image'
              )
            : (0, i.jsx)(E.Z, {
                  onInterval: this.nextItem,
                  interval: m,
                  className: h.slideshowWrapper,
                  disable: !e,
                  children: (0, i.jsx)(d.W, { children: this.renderSlideItem(t) })
              });
    }
    render() {
        let { video: e, className: t, placeholder: n, renderMediaOverlay: r, playing: a } = this.props,
            { videoLoadError: o, videoLoaded: l } = this.state;
        return n
            ? (0, i.jsx)('div', { className: t })
            : (0, i.jsxs)('figure', {
                  className: s()(h.__invalid_tileMedia, t),
                  children: [null == e || o ? this.renderTypeImage() : this.renderTypeVideo(), null != r && r(a && l)]
              });
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', {
                currentIndex: 0,
                videoLoadError: !1,
                videoLoaded: !1
            }),
            p(this, '_video', a.createRef()),
            p(this, 'videoTimeout', new c.V7()),
            p(this, 'videoPlaying', !1),
            p(this, 'handleToggleMute', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onToggleMute: t } = this.props;
                null == t || t(e);
            }),
            p(this, 'handleVideoError', () => {
                this.setState({ videoLoadError: !0 });
            }),
            p(this, 'handleVideoLoaded', () => {
                this.setState({ videoLoaded: !0 });
            }),
            p(this, 'renderTypeVideo', () => {
                let { videoLoaded: e } = this.state,
                    { video: t, image: n, title: r, playing: o, muted: l, splashClassName: c, splashPlaceholderClassName: E, renderMediaOverlay: p } = this.props,
                    m = l ? _.VoiceXIcon : _.VoiceNormalIcon;
                return (0, i.jsxs)(a.Fragment, {
                    children: [
                        u.tq
                            ? null
                            : (0, i.jsx)(f.Z, {
                                  className: s()(h.splash, c),
                                  muted: l,
                                  loop: !0,
                                  preload: 'none',
                                  ref: this._video,
                                  onLoadedMetadata: this.handleVideoLoaded,
                                  onError: this.handleVideoError,
                                  children: (0, i.jsx)('source', {
                                      src: t,
                                      type: 'video/mp4'
                                  })
                              }),
                        (0, i.jsx)(d.W, {
                            children:
                                o && e
                                    ? null
                                    : (0, i.jsx)(
                                          g,
                                          {
                                              className: s()(h.splashPlaceholder, E),
                                              src: n,
                                              title: r
                                          },
                                          0
                                      )
                        }),
                        (0, i.jsx)(_.Clickable, {
                            className: s()(h.muteContainer, {
                                [h.muteContainerPlaying]: o && e,
                                [h.muteContainerMediaOverlay]: null != p
                            }),
                            onClick: this.handleToggleMute,
                            children: o && e ? (0, i.jsx)(m, { className: h.mute }) : null
                        })
                    ]
                });
            }),
            p(this, 'nextItem', () => {
                let { slideImages: e } = this.props;
                null != e && this.setState({ currentIndex: (this.state.currentIndex + 1) % e.length });
            }),
            p(this, 'renderSlideItem', (e) => {
                let { image: t, title: n, playing: r, splashClassName: a } = this.props,
                    { currentIndex: o } = this.state;
                return r
                    ? (0, i.jsx)(
                          g,
                          {
                              className: s()(h.splash, a),
                              src: e[o],
                              title: n
                          },
                          o
                      )
                    : (0, i.jsx)(
                          g,
                          {
                              className: s()(h.splash, a),
                              src: t,
                              title: n
                          },
                          'image'
                      );
            });
    }
}
t.Z = S;
