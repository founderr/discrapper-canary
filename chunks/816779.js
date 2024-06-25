n(47120), n(653041);
var l, i = n(735250),
  s = n(470079),
  r = n(120356),
  a = n.n(r),
  o = n(954955),
  u = n.n(o),
  c = n(748780),
  d = n(902704),
  h = n(481060),
  p = n(740933);

function g(e, t, n) {
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
    return !(0, d.Z)(this.props, e, ["animate"]) || !(0, d.Z)(this.state, t)
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
      c.Z.spring(e, {
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
    c.Z.spring(e, {
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
    return (0, i.jsx)(c.Z.div, {
      className: a()(p.bar, e),
      onClick: l,
      style: this.getAnimatedStyle(),
      "aria-hidden": n,
      children: (0, i.jsx)("span", {
        className: p.text,
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
    super(e), g(this, "_timeout", void 0), this.state = {
      translateY: new c.Z.Value,
      reduceMotion: !1
    }
  }
}
class E extends(l = s.PureComponent) {
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
      className: r,
      barClassName: o,
      hide: u,
      animate: c
    } = this.props, {
      reducedMotion: d
    } = this.context;
    return (0, i.jsx)("div", {
      className: null != r ? r : void 0,
      children: (0, i.jsx)(C, {
        hide: !0 === u || null == e && null == t,
        className: a()(o, null != t ? p.mention : p.unread),
        text: null != t ? n : l,
        reverse: s,
        animate: c && !d.enabled,
        onClick: this.handleClick
      })
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      unread: null,
      mention: null
    }), g(this, "calculateState", u()(() => {
      let {
        items: e,
        expandedFolders: t,
        isVisible: n,
        isUnread: l,
        isMentioned: i,
        reverse: s,
        onCalculate: r
      } = this.props, a = null, o = null, u = [];
      e.forEach(e => {
        "string" == typeof e ? u.push(e) : "object" == typeof e && null != e.folderId ? null != t && t.has(e.folderId) ? (u.push("folder:".concat(e.folderId)), e.guildIds.forEach(e => u.push(e))) : u.push(e.guildIds) : u.push(e.guildIds[0])
      });
      let c = e => {
          null == a && i(e, s, u) && (a = e), null == o && l(e, s, u) && (o = e)
        },
        d = s ? u.length - 1 : 0,
        h = u[d];
      for (; null != h;) {
        if ("string" == typeof h) {
          if (n(h, s, u)) break;
          c(h)
        } else {
          let e = !1;
          for (let t of h) {
            if (n(t, s, u)) {
              e = !0;
              break
            }
            c(t)
          }
          if (e) break
        }
        d += s ? -1 : 1, h = u[d]
      }
      null != r && r(a, o, s), this.setState({
        mention: a,
        unread: o
      })
    }, 200)), g(this, "handleClick", e => {
      e.preventDefault(), e.stopPropagation();
      let {
        unread: t,
        mention: n
      } = this.state, {
        onJumpTo: l
      } = this.props, i = null != n ? n : t;
      null != i && l(i, [n, t])
    })
  }
}
g(E, "contextType", h.AccessibilityPreferencesContext), g(E, "defaultProps", {
  className: p.container,
  reverse: !1,
  hide: !1,
  animate: !0
}), t.Z = E