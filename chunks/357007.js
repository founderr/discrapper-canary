"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007"), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("483366"),
  u = n.n(r),
  o = n("458960"),
  d = n("233736"),
  c = n("77078"),
  f = n("662721");
let h = {
  friction: 10,
  tension: 300
};
class C extends a.Component {
  shouldComponentUpdate(e, t) {
    return !(0, d.default)(this.props, e, ["animate"]) || !(0, d.default)(this.state, t)
  }
  componentDidMount() {
    let {
      hide: e
    } = this.props;
    e ? this.state.translateY.setValue(1) : this.state.translateY.setValue(0)
  }
  componentDidUpdate(e) {
    let {
      hide: t
    } = e, {
      hide: n
    } = this.props;
    n && !t ? this.animateOut() : !n && t && this.animateIn()
  }
  componentWillUnmount() {
    null != this._timeout && clearTimeout(this._timeout)
  }
  animateIn() {
    let {
      translateY: e
    } = this.state;
    if (null != this._timeout && clearTimeout(this._timeout), !this.props.animate) {
      e.setValue(0);
      return
    }
    this._timeout = setTimeout(() => {
      o.default.spring(e, {
        toValue: 0,
        ...h
      }).start()
    }, 100)
  }
  animateOut() {
    let {
      translateY: e
    } = this.state;
    if (null != this._timeout && clearTimeout(this._timeout), !this.props.animate) {
      e.setValue(1);
      return
    }
    o.default.spring(e, {
      toValue: 1,
      ...h
    }).start()
  }
  render() {
    let {
      className: e,
      text: t,
      hide: n,
      onClick: a
    } = this.props;
    return (0, l.jsx)(o.default.div, {
      className: i(f.bar, e),
      onClick: a,
      style: this.getAnimatedStyle(),
      "aria-hidden": n,
      children: (0, l.jsx)("span", {
        className: f.text,
        children: t
      })
    })
  }
  getAnimatedStyle() {
    let {
      translateY: e
    } = this.state, {
      reverse: t
    } = this.props;
    return {
      transform: [{
        translateY: e.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", t ? "180%" : "-180%"]
        })
      }]
    }
  }
  constructor(e) {
    super(e), this.state = {
      translateY: new o.default.Value,
      reduceMotion: !1
    }
  }
}
class p extends a.PureComponent {
  componentDidMount() {
    this.calculateState()
  }
  componentDidUpdate() {
    this.calculateState()
  }
  componentWillUnmount() {
    this.calculateState.cancel()
  }
  render() {
    let {
      unread: e,
      mention: t
    } = this.state, {
      textMention: n,
      textUnread: a,
      reverse: s,
      className: r,
      barClassName: u,
      hide: o,
      animate: d
    } = this.props, {
      reducedMotion: c
    } = this.context;
    return (0, l.jsx)("div", {
      className: null != r ? r : void 0,
      children: (0, l.jsx)(C, {
        hide: !0 === o || null == e && null == t,
        className: i(u, null != t ? f.mention : f.unread),
        text: null != t ? n : a,
        reverse: s,
        animate: d && !c.enabled,
        onClick: this.handleClick
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      unread: null,
      mention: null
    }, this.calculateState = u(() => {
      let {
        items: e,
        expandedFolders: t,
        isVisible: n,
        isUnread: l,
        isMentioned: a,
        reverse: s,
        onCalculate: i
      } = this.props, r = null, u = null, o = [];
      e.forEach(e => {
        "string" == typeof e ? o.push(e) : "object" == typeof e && null != e.folderId ? null != t && t.has(e.folderId) ? (o.push("folder:".concat(e.folderId)), e.guildIds.forEach(e => o.push(e))) : o.push(e.guildIds) : o.push(e.guildIds[0])
      });
      let d = e => {
          null == r && a(e, s, o) && (r = e), null == u && l(e, s, o) && (u = e)
        },
        c = s ? o.length - 1 : 0,
        f = o[c];
      for (; null != f;) {
        if ("string" == typeof f) {
          if (n(f, s, o)) break;
          d(f)
        } else {
          let e = !1;
          for (let t of f) {
            if (n(t, s, o)) {
              e = !0;
              break
            }
            d(t)
          }
          if (e) break
        }
        c += s ? -1 : 1, f = o[c]
      }
      null != i && i(r, u, s), this.setState({
        mention: r,
        unread: u
      })
    }, 200), this.handleClick = e => {
      e.preventDefault(), e.stopPropagation();
      let {
        unread: t,
        mention: n
      } = this.state, {
        onJumpTo: l
      } = this.props, a = null != n ? n : t;
      null != a && l(a, [n, t])
    }
  }
}
p.contextType = c.AccessibilityPreferencesContext, p.defaultProps = {
  className: f.container,
  reverse: !1,
  hide: !1,
  animate: !0
};
var m = p