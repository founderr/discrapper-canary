"use strict";
n.r(t), n.d(t, {
  backgroundImagePreloader: function() {
    return d
  }
}), n("424973");
var l = n("37983"),
  i = n("884691"),
  s = n("310013"),
  r = n.n(s),
  o = n("407063");
let a = /url\(['"](.*)['"]\)/,
  u = e => {
    if (null == e || "" === e || "none" === e) return null;
    let t = e.match(a);
    return null != t ? t[1] : e
  };

function d(e) {
  class t extends i.Component {
    componentDidUpdate(e, t) {
      if (t === this.state) return;
      let {
        cached: n,
        loaded: l
      } = this.state, {
        style: i
      } = this.props, s = null != i ? u(i.backgroundImage) : null;
      null == s && s !== n ? this.setState({
        loaded: !0,
        cached: s
      }) : this.cachedURLs.indexOf(s) >= 0 ? this.setState({
        loaded: !0,
        cached: s
      }) : null != s && s !== n && !0 === l && this.setState({
        loaded: !1
      }, () => this.preloadURL(s))
    }
    preloadURL(e) {
      this.canceller && this.canceller(), this.canceller = (0, o.loadImage)(e, t => {
        this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
          cached: e,
          loaded: !0
        }));
        let {
          onBackgroundImageLoad: n
        } = this.props;
        n && n(t, e)
      })
    }
    componentWillUnmount() {
      this.canceller && this.canceller(), this.cachedURLs.length = 0
    }
    render() {
      let {
        style: t,
        onBackgroundImageLoad: n,
        ...i
      } = this.props, {
        loaded: s,
        cached: r
      } = this.state;
      if (!s && null != t) {
        var o;
        t = {
          ...t,
          backgroundImage: null == (o = r) || "" === o || "none" === o ? "none" : "url(".concat(o, ")")
        }
      }
      return (0, l.jsx)(e, {
        style: t,
        ...i
      })
    }
    constructor(e) {
      super(e), this.cachedURLs = [], this.canceller = null;
      let {
        style: t
      } = e, n = null != t ? u(t.backgroundImage) : null;
      this.cachedURLs = [n], this.state = {
        cached: n,
        loaded: !0
      }
    }
  }
  return r(t, e), t
}