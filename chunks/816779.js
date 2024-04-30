"use strict";
n.r(t), n("47120"), n("653041");
var l, a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  r = n.n(i),
  o = n("954955"),
  u = n.n(o),
  d = n("748780"),
  c = n("902704"),
  f = n("481060"),
  h = n("465409");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let m = {
  friction: 10,
  tension: 300
};
class C extends s.Component {
  shouldComponentUpdate(e, t) {
    return !(0, c.default)(this.props, e, ["animate"]) || !(0, c.default)(this.state, t)
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
      d.default.spring(e, {
        toValue: 0,
        ...m
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
    d.default.spring(e, {
      toValue: 1,
      ...m
    }).start()
  }
  render() {
    let {
      className: e,
      text: t,
      hide: n,
      onClick: l
    } = this.props;
    return (0, a.jsx)(d.default.div, {
      className: r()(h.bar, e),
      onClick: l,
      style: this.getAnimatedStyle(),
      "aria-hidden": n,
      children: (0, a.jsx)("span", {
        className: h.text,
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
    super(e), p(this, "_timeout", void 0), this.state = {
      translateY: new d.default.Value,
      reduceMotion: !1
    }
  }
}
class g extends(l = s.PureComponent) {
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
      textUnread: l,
      reverse: s,
      className: i,
      barClassName: o,
      hide: u,
      animate: d
    } = this.props, {
      reducedMotion: c
    } = this.context;
    return (0, a.jsx)("div", {
      className: null != i ? i : void 0,
      children: (0, a.jsx)(C, {
        hide: !0 === u || null == e && null == t,
        className: r()(o, null != t ? h.mention : h.unread),
        text: null != t ? n : l,
        reverse: s,
        animate: d && !c.enabled,
        onClick: this.handleClick
      })
    })
  }
  constructor(...e) {
    super(...e), p(this, "state", {
      unread: null,
      mention: null
    }), p(this, "calculateState", u()(() => {
      let {
        items: e,
        expandedFolders: t,
        isVisible: n,
        isUnread: l,
        isMentioned: a,
        reverse: s,
        onCalculate: i
      } = this.props, r = null, o = null, u = [];
      e.forEach(e => {
        "string" == typeof e ? u.push(e) : "object" == typeof e && null != e.folderId ? null != t && t.has(e.folderId) ? (u.push("folder:".concat(e.folderId)), e.guildIds.forEach(e => u.push(e))) : u.push(e.guildIds) : u.push(e.guildIds[0])
      });
      let d = e => {
          null == r && a(e, s, u) && (r = e), null == o && l(e, s, u) && (o = e)
        },
        c = s ? u.length - 1 : 0,
        f = u[c];
      for (; null != f;) {
        if ("string" == typeof f) {
          if (n(f, s, u)) break;
          d(f)
        } else {
          let e = !1;
          for (let t of f) {
            if (n(t, s, u)) {
              e = !0;
              break
            }
            d(t)
          }
          if (e) break
        }
        c += s ? -1 : 1, f = u[c]
      }
      null != i && i(r, o, s), this.setState({
        mention: r,
        unread: o
      })
    }, 200)), p(this, "handleClick", e => {
      e.preventDefault(), e.stopPropagation();
      let {
        unread: t,
        mention: n
      } = this.state, {
        onJumpTo: l
      } = this.props, a = null != n ? n : t;
      null != a && l(a, [n, t])
    })
  }
}
p(g, "contextType", f.AccessibilityPreferencesContext), p(g, "defaultProps", {
  className: h.container,
  reverse: !1,
  hide: !1,
  animate: !0
}), t.default = g