"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("222007"), n("70102"), n("843762"), n("424973");
var s = n("37983"),
  i = n("884691"),
  a = n("414456"),
  l = n.n(a),
  r = n("817736"),
  u = n.n(r),
  o = n("118810"),
  d = n("446674"),
  c = n("407063"),
  h = n("845579"),
  f = n("901165"),
  E = n("62843"),
  I = n("315102"),
  m = n("402671"),
  _ = n("866190"),
  p = n("115279");
class T extends i.PureComponent {
  componentWillUnmount() {
    var e;
    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
  }
  getSrc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
      {
        src: t,
        emojiId: n,
        emojiName: s,
        animated: i,
        shouldAnimate: a,
        isFocused: l,
        isInteracting: r,
        size: u = "default"
      } = e,
      {
        hover: o
      } = this.state;
    if (null != t) return t;
    if (null != n) {
      let e = p.EMOJI_SIZE_MAP[u];
      return I.default.getEmojiURL({
        id: n,
        animated: l && !0 === i && (!0 === a || o || !0 === r),
        size: e
      })
    }
    if (null != s) return m.default.getURL(s)
  }
  render() {
    var e;
    let t;
    let {
      emojiName: n,
      animated: a,
      className: r,
      size: u = "default",
      alt: o,
      shouldAnimate: d,
      isFocused: c,
      emojiId: h,
      autoplay: f,
      isInteracting: E,
      ...I
    } = this.props, m = this.getSrc();
    return null == m || "" === m ? (0, s.jsx)("span", {
      className: l("emoji", "emoji-text"),
      children: n
    }) : (a && (t = {
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }), (0, i.createElement)("img", {
      ...I,
      key: this.key,
      src: m,
      alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
      draggable: !1,
      ...t,
      className: l("emoji", r, {
        jumboable: "jumbo" === u
      }),
      onError: this.onError,
      "data-type": "emoji",
      ...null != h && "" !== h ? {
        "data-id": h
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
T.defaultProps = {
  isInteracting: !1
};
let M = function(e) {
  if (null == window.IntersectionObserver) return function(t) {
    return (0, s.jsx)(e, {
      ...t,
      shouldAnimate: t.animated
    })
  };
  let t = [],
    n = [],
    a = new window.IntersectionObserver(e => {
      e.forEach(e => {
        let s = n.find(t => {
          let [n] = t;
          return n === e.target
        });
        if (null == s) return;
        let i = s[1];
        if (e.intersectionRatio >= .7) {
          var a, l;
          if (-1 !== t.indexOf(i)) return;
          let n = Math.abs(e.intersectionRect.bottom - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.top));
          n ? t.unshift(i) : t.push(i), i.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
        } else {
          let e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), i.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
        }
      })
    }, {
      threshold: .7
    });

  function l(e) {
    let t = u.findDOMNode(e);
    (0, o.isElement)(t) && (n.push([t, e]), a.observe(t))
  }

  function r(e) {
    let s = u.findDOMNode(e);
    a.unobserve(s);
    let i = n.findIndex(t => {
      let [n, s] = t;
      return s === e
    }); - 1 !== i && (n.splice(i, 1), -1 !== (i = t.indexOf(e)) && (t.splice(i, 1), i < 100 && t.length >= 100 && t[99].forceUpdate()))
  }
  return class extends i.Component {
    shouldAutoplay(e) {
      return e.animated && e.autoplay
    }
    componentDidMount() {
      this.shouldAutoplay(this.props) && l(this)
    }
    componentDidUpdate(e) {
      let t = this.shouldAutoplay(e),
        n = this.shouldAutoplay(this.props);
      n !== t && (n ? l(this) : r(this))
    }
    componentWillUnmount() {
      this.shouldAutoplay(this.props) && r(this)
    }
    render() {
      let n = t.indexOf(this),
        {
          autoplay: i,
          allowAnimatedEmoji: a,
          ...l
        } = this.props;
      return (0, s.jsx)(E.MessagesInteractionContext.Consumer, {
        children: t => (0, s.jsx)(e, {
          ...l,
          autoplay: i || !1,
          shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && a
        })
      })
    }
  }
}(T);

function F(e) {
  let t = h.AnimateEmoji.useSetting(),
    n = {
      autoplay: null == e.autoplay ? t : e.autoplay,
      allowAnimatedEmoji: t
    },
    i = __OVERLAY__ ? (0, d.useStateFromStores)([f.default], () => f.default.isInstanceFocused()) : (0, _.useIsWindowFocused)();
  return (0, s.jsx)(M, {
    ...e,
    ...n,
    isFocused: i
  })
}