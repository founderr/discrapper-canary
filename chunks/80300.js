"use strict";
n.r(t), n.d(t, {
  backgroundImagePreloader: function() {
    return d
  }
}), n("424973");
var l = n("37983"),
  s = n("884691"),
  i = n("310013"),
  r = n.n(i),
  o = n("407063");
let a = /url\(['"](.*)['"]\)/,
  u = e => {
    if (null == e || "" === e || "none" === e) return null;
    let t = e.match(a);
    return null != t ? t[1] : e
  };

function d(e) {
  class t extends s.Component {
    componentDidUpdate(e, t) {
      if (t === this.state) return;
      let {
        cached: n,
        loaded: l
      } = this.state, {
        style: s
      } = this.props, i = null != s ? u(s.backgroundImage) : null;
      null == i && i !== n ? this.setState({
        loaded: !0,
        cached: i
      }) : this.cachedURLs.indexOf(i) >= 0 ? this.setState({
        loaded: !0,
        cached: i
      }) : null != i && i !== n && !0 === l && this.setState({
        loaded: !1
      }, () => this.preloadURL(i))
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
        ...s
      } = this.props, {
        loaded: i,
        cached: r
      } = this.state;
      if (!i && null != t) {
        var o;
        t = {
          ...t,
          backgroundImage: null == (o = r) || "" === o || "none" === o ? "none" : "url(".concat(o, ")")
        }
      }
      return (0, l.jsx)(e, {
        style: t,
        ...s
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