"use strict";
r.r(t), r.d(t, {
  default: function() {
    return C
  }
});
var n = r("639519"),
  o = r.n(n),
  a = r("470079"),
  i = r.n(a),
  s = r("595490"),
  l = r.n(s),
  c = r("788253"),
  u = r.n(c),
  d = Object.defineProperty,
  p = Object.defineProperties,
  f = Object.getOwnPropertyDescriptors,
  h = Object.getOwnPropertySymbols,
  y = Object.prototype.hasOwnProperty,
  g = Object.prototype.propertyIsEnumerable,
  m = (e, t, r) => t in e ? d(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
  }) : e[t] = r,
  v = (e, t) => {
    for (var r in t || (t = {})) y.call(t, r) && m(e, r, t[r]);
    if (h)
      for (var r of h(t)) g.call(t, r) && m(e, r, t[r]);
    return e
  },
  b = (e, t) => p(e, f(t)),
  w = (e, t, r) => new Promise((n, o) => {
    var a = e => {
        try {
          s(r.next(e))
        } catch (e) {
          o(e)
        }
      },
      i = e => {
        try {
          s(r.throw(e))
        } catch (e) {
          o(e)
        }
      },
      s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(a, i);
    s((r = r.apply(e, t)).next())
  });

function x(e = {}) {
  return b(v({}, e), {
    height: 0,
    width: 0,
    playerVars: b(v({}, e.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  })
}
var P = {
    videoId: o().string,
    id: o().string,
    className: o().string,
    iframeClassName: o().string,
    style: o().object,
    title: o().string,
    loading: o().oneOf(["lazy", "eager"]),
    opts: o().objectOf(o().any),
    onReady: o().func,
    onError: o().func,
    onPlay: o().func,
    onPause: o().func,
    onEnd: o().func,
    onStateChange: o().func,
    onPlaybackRateChange: o().func,
    onPlaybackQualityChange: o().func
  },
  E = class extends i().Component {
    constructor(e) {
      super(e), this.destroyPlayerPromise = void 0, this.onPlayerReady = e => {
        var t, r;
        return null == (r = (t = this.props).onReady) ? void 0 : r.call(t, e)
      }, this.onPlayerError = e => {
        var t, r;
        return null == (r = (t = this.props).onError) ? void 0 : r.call(t, e)
      }, this.onPlayerStateChange = e => {
        var t, r, n, o, a, i, s, l;
        switch (null == (r = (t = this.props).onStateChange) || r.call(t, e), e.data) {
          case E.PlayerState.ENDED:
            null == (o = (n = this.props).onEnd) || o.call(n, e);
            break;
          case E.PlayerState.PLAYING:
            null == (i = (a = this.props).onPlay) || i.call(a, e);
            break;
          case E.PlayerState.PAUSED:
            null == (l = (s = this.props).onPause) || l.call(s, e)
        }
      }, this.onPlayerPlaybackRateChange = e => {
        var t, r;
        return null == (r = (t = this.props).onPlaybackRateChange) ? void 0 : r.call(t, e)
      }, this.onPlayerPlaybackQualityChange = e => {
        var t, r;
        return null == (r = (t = this.props).onPlaybackQualityChange) ? void 0 : r.call(t, e)
      }, this.destroyPlayer = () => this.internalPlayer ? (this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0), this.destroyPlayerPromise) : Promise.resolve(), this.createPlayer = () => {
        if ("undefined" == typeof document) return;
        if (this.destroyPlayerPromise) {
          this.destroyPlayerPromise.then(this.createPlayer);
          return
        }
        let e = b(v({}, this.props.opts), {
          videoId: this.props.videoId
        });
        this.internalPlayer = u()(this.container, e), this.internalPlayer.on("ready", this.onPlayerReady), this.internalPlayer.on("error", this.onPlayerError), this.internalPlayer.on("stateChange", this.onPlayerStateChange), this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange), this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange), (this.props.title || this.props.loading) && this.internalPlayer.getIframe().then(e => {
          this.props.title && e.setAttribute("title", this.props.title), this.props.loading && e.setAttribute("loading", this.props.loading)
        })
      }, this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer), this.updatePlayer = () => {
        var e;
        null == (e = this.internalPlayer) || e.getIframe().then(e => {
          this.props.id ? e.setAttribute("id", this.props.id) : e.removeAttribute("id"), this.props.iframeClassName ? e.setAttribute("class", this.props.iframeClassName) : e.removeAttribute("class"), this.props.opts && this.props.opts.width ? e.setAttribute("width", this.props.opts.width.toString()) : e.removeAttribute("width"), this.props.opts && this.props.opts.height ? e.setAttribute("height", this.props.opts.height.toString()) : e.removeAttribute("height"), this.props.title ? e.setAttribute("title", this.props.title) : e.setAttribute("title", "YouTube video player"), this.props.loading ? e.setAttribute("loading", this.props.loading) : e.removeAttribute("loading")
        })
      }, this.getInternalPlayer = () => this.internalPlayer, this.updateVideo = () => {
        var e, t, r, n;
        if (void 0 === this.props.videoId || null === this.props.videoId) {
          null == (e = this.internalPlayer) || e.stopVideo();
          return
        }
        let o = !1,
          a = {
            videoId: this.props.videoId
          };
        if ((null == (t = this.props.opts) ? void 0 : t.playerVars) && (o = 1 === this.props.opts.playerVars.autoplay, "start" in this.props.opts.playerVars && (a.startSeconds = this.props.opts.playerVars.start), "end" in this.props.opts.playerVars && (a.endSeconds = this.props.opts.playerVars.end)), o) {
          null == (r = this.internalPlayer) || r.loadVideoById(a);
          return
        }
        null == (n = this.internalPlayer) || n.cueVideoById(a)
      }, this.refContainer = e => {
        this.container = e
      }, this.container = null, this.internalPlayer = null
    }
    componentDidMount() {
      this.createPlayer()
    }
    componentDidUpdate(e) {
      return w(this, null, function*() {
        var t, r, n, o, a, i, s, c;
        if (t = e, r = this.props, t.id !== r.id || t.className !== r.className || (null == (n = t.opts) ? void 0 : n.width) !== (null == (o = r.opts) ? void 0 : o.width) || (null == (a = t.opts) ? void 0 : a.height) !== (null == (i = r.opts) ? void 0 : i.height) || t.iframeClassName !== r.iframeClassName || t.title !== r.title) this.updatePlayer();
        if (s = e, c = this.props, s.videoId !== c.videoId || !l()(x(s.opts), x(c.opts))) yield this.resetPlayer();
        (function(e, t) {
          var r, n;
          if (e.videoId !== t.videoId) return !0;
          let o = (null == (r = e.opts) ? void 0 : r.playerVars) || {},
            a = (null == (n = t.opts) ? void 0 : n.playerVars) || {};
          return o.start !== a.start || o.end !== a.end
        })(e, this.props) && this.updateVideo()
      })
    }
    componentWillUnmount() {
      this.destroyPlayer()
    }
    render() {
      return i().createElement("div", {
        className: this.props.className,
        style: this.props.style
      }, i().createElement("div", {
        id: this.props.id,
        className: this.props.iframeClassName,
        ref: this.refContainer
      }))
    }
  };
E.propTypes = P, E.defaultProps = {
  videoId: "",
  id: "",
  className: "",
  iframeClassName: "",
  style: {},
  title: "",
  loading: void 0,
  opts: {},
  onReady: () => {},
  onError: () => {},
  onPlay: () => {},
  onPause: () => {},
  onEnd: () => {},
  onStateChange: () => {},
  onPlaybackRateChange: () => {},
  onPlaybackQualityChange: () => {}
}, E.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var C = E