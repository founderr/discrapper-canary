"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("748780"),
  o = a("924826"),
  u = a("481060"),
  d = a("239091"),
  c = a("617015"),
  f = a("886795");

function E(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class h extends s.PureComponent {
  componentWillLeave(e) {
    r.default.parallel([r.default.timing(this.state.opacity, {
      toValue: 0,
      duration: 200
    }), r.default.timing(this.state.height, {
      toValue: 0,
      duration: 200
    })]).start(e)
  }
  componentWillEnter(e) {
    this.state.opacity.setValue(0), this.state.height.setValue(0), r.default.parallel([r.default.timing(this.state.opacity, {
      toValue: 1,
      duration: 200
    }), r.default.timing(this.state.height, {
      toValue: c.PEOPLE_LIST_ITEM_HEIGHT,
      duration: 200
    })]).start(e)
  }
  render() {
    let {
      height: e,
      opacity: t,
      hovered: a,
      isContextMenuActive: s
    } = this.state, {
      children: l,
      user: d,
      onClick: c,
      isActive: E
    } = this.props;
    return (0, n.jsx)(o.ListNavigatorItem, {
      id: d.id,
      children: o => (0, n.jsx)(u.FocusRing, {
        offset: {
          left: -8,
          right: -8
        },
        children: (0, n.jsx)(r.default.div, {
          className: i()(f.peopleListItem, {
            [f.active]: E || s
          }),
          onContextMenu: e => this.handleContextMenu(e, d),
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onClick: null != c ? c : void 0,
          style: {
            height: e,
            opacity: t
          },
          ...o,
          children: l(a || E || s)
        })
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      height: new r.default.Value(c.PEOPLE_LIST_ITEM_HEIGHT),
      opacity: new r.default.Value(1),
      hovered: !1,
      isContextMenuActive: !1
    }), E(this, "handleMouseEnter", () => {
      let {
        isFocused: e,
        isActive: t,
        onOtherHover: a
      } = this.props, {
        isContextMenuActive: n
      } = this.state;
      this.setState({
        hovered: e
      }), e && !t && !n && (null == a || a())
    }), E(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), E(this, "handleContextMenu", (e, t) => {
      this.setState({
        isContextMenuActive: !0
      }), (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("79695"), a.e("1502"), a.e("64409")]).then(a.bind(a, "881351"));
        return a => (0, n.jsx)(e, {
          ...a,
          user: t
        })
      }, {
        onClose: () => {
          this.setState({
            isContextMenuActive: !1
          })
        }
      })
    })
  }
}
t.default = h