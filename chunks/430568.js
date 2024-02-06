"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007"), n("70102"), n("843762"), n("424973");
var l = n("37983"),
  r = n("884691"),
  a = n("414456"),
  i = n.n(a),
  s = n("817736"),
  u = n.n(s),
  o = n("118810"),
  d = n("446674"),
  c = n("407063"),
  f = n("845579"),
  h = n("901165"),
  p = n("62843"),
  C = n("315102"),
  m = n("402671"),
  v = n("866190"),
  g = n("115279");
class E extends r.PureComponent {
  componentWillUnmount() {
    var e;
    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
  }
  getSrc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
      {
        src: t,
        emojiId: n,
        emojiName: l,
        animated: r,
        shouldAnimate: a,
        isFocused: i,
        isInteracting: s,
        size: u = "default"
      } = e,
      {
        hover: o
      } = this.state;
    if (null != t) return t;
    if (null != n) {
      let e = g.EMOJI_SIZE_MAP[u];
      return C.default.getEmojiURL({
        id: n,
        animated: i && !0 === r && (!0 === a || o || !0 === s),
        size: e
      })
    }
    if (null != l) return m.default.getURL(l)
  }
  render() {
    var e;
    let t;
    let {
      emojiName: n,
      animated: a,
      className: s,
      size: u = "default",
      alt: o,
      shouldAnimate: d,
      isFocused: c,
      emojiId: f,
      autoplay: h,
      isInteracting: p,
      ...C
    } = this.props, m = this.getSrc();
    return null == m || "" === m ? (0, l.jsx)("span", {
      className: i("emoji", "emoji-text"),
      children: n
    }) : (a && (t = {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }), (0, r.createElement)("img", {
      ...C,
      key: this.key,
      src: m,
      alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
      draggable: !1,
      ...t,
      className: i("emoji", s, {
        jumboable: "jumbo" === u
      }),
      onError: this.onError,
      "data-type": "emoji",
      ...null != f && "" !== f ? {
        "data-id": f
      } : {
        "data-name": n
      }
    }))
  }
  constructor(...e) {
    super(...e), this.state = {
      hover: !1
    }, this.key = void 0, this.onError = () => {
      let e = this.getSrc();
      null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
        !e && (this.key = Date.now(), this.forceUpdate())
      }))
    }, this.onMouseEnter = e => {
      this.setState({
        hover: !0
      });
      let {
        onMouseEnter: t
      } = this.props;
      null != t && t(e)
    }, this.onMouseLeave = e => {
      this.setState({
        hover: !1
      });
      let {
        onMouseLeave: t
      } = this.props;
      null != t && t(e)
    }
  }
}
E.defaultProps = {
  isInteracting: !1
};
let S = function(e) {
  if (null == window.IntersectionObserver) return function(t) {
    return (0, l.jsx)(e, {
      ...t,
      shouldAnimate: t.animated
    })
  };
  let t = [],
    n = [],
    a = new window.IntersectionObserver(e => {
      e.forEach(e => {
        let l = n.find(t => {
          let [n] = t;
          return n === e.target
        });
        if (null == l) return;
        let r = l[1];
        if (e.intersectionRatio >= .7) {
          var a, i;
          if (-1 !== t.indexOf(r)) return;
          let n = Math.abs(e.intersectionRect.bottom - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.top));
          n ? t.unshift(r) : t.push(r), r.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
        } else {
          let e = t.indexOf(r); - 1 !== e && (t.splice(e, 1), r.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
        }
      })
    }, {
      threshold: .7
    });

  function i(e) {
    let t = u.findDOMNode(e);
    (0, o.isElement)(t) && (n.push([t, e]), a.observe(t))
  }

  function s(e) {
    let l = u.findDOMNode(e);
    a.unobserve(l);
    let r = n.findIndex(t => {
      let [n, l] = t;
      return l === e
    }); - 1 !== r && (n.splice(r, 1), -1 !== (r = t.indexOf(e)) && (t.splice(r, 1), r < 100 && t.length >= 100 && t[99].forceUpdate()))
  }
  return class extends r.Component {
    shouldAutoplay(e) {
      return e.animated && e.autoplay
    }
    componentDidMount() {
      this.shouldAutoplay(this.props) && i(this)
    }
    componentDidUpdate(e) {
      let t = this.shouldAutoplay(e),
        n = this.shouldAutoplay(this.props);
      n !== t && (n ? i(this) : s(this))
    }
    componentWillUnmount() {
      this.shouldAutoplay(this.props) && s(this)
    }
    render() {
      let n = t.indexOf(this),
        {
          autoplay: r,
          allowAnimatedEmoji: a,
          ...i
        } = this.props;
      return (0, l.jsx)(p.MessagesInteractionContext.Consumer, {
        children: t => (0, l.jsx)(e, {
          ...i,
          autoplay: r || !1,
          shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && a
        })
      })
    }
  }
}(E);

function I(e) {
  let t = f.AnimateEmoji.useSetting(),
    n = {
      autoplay: null == e.autoplay ? t : e.autoplay,
      allowAnimatedEmoji: t
    },
    r = __OVERLAY__ ? (0, d.useStateFromStores)([h.default], () => h.default.isInstanceFocused()) : (0, v.useIsWindowFocused)();
  return (0, l.jsx)(S, {
    ...e,
    ...n,
    isFocused: r
  })
}