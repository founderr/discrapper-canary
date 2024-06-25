n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(748780),
  o = n(91192),
  c = n(481060),
  u = n(239091),
  d = n(617015),
  E = n(844884);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class _ extends i.PureComponent {
  componentWillLeave(e) {
    r.Z.parallel([r.Z.timing(this.state.opacity, {
      toValue: 0,
      duration: 200
    }), r.Z.timing(this.state.height, {
      toValue: 0,
      duration: 200
    })]).start(e)
  }
  componentWillEnter(e) {
    this.state.opacity.setValue(0), this.state.height.setValue(0), r.Z.parallel([r.Z.timing(this.state.opacity, {
      toValue: 1,
      duration: 200
    }), r.Z.timing(this.state.height, {
      toValue: d.NV,
      duration: 200
    })]).start(e)
  }
  render() {
    let {
      height: e,
      opacity: t,
      hovered: n,
      isContextMenuActive: i
    } = this.state, {
      children: l,
      user: u,
      onClick: d,
      isActive: h
    } = this.props;
    return (0, s.jsx)(o.mh, {
      id: u.id,
      children: o => (0, s.jsx)(c.FocusRing, {
        offset: {
          left: -8,
          right: -8
        },
        children: (0, s.jsx)(r.Z.div, {
          className: a()(E.peopleListItem, {
            [E.active]: h || i
          }),
          onContextMenu: e => this.handleContextMenu(e, u),
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onClick: null != d ? d : void 0,
          style: {
            height: e,
            opacity: t
          },
          ...o,
          children: l(n || h || i)
        })
      })
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      height: new r.Z.Value(d.NV),
      opacity: new r.Z.Value(1),
      hovered: !1,
      isContextMenuActive: !1
    }), h(this, "handleMouseEnter", () => {
      let {
        isFocused: e,
        isActive: t,
        onOtherHover: n
      } = this.props, {
        isContextMenuActive: s
      } = this.state;
      this.setState({
        hovered: e
      }), e && !t && !s && (null == n || n())
    }), h(this, "handleMouseLeave", () => {
      this.setState({
        hovered: !1
      })
    }), h(this, "handleContextMenu", (e, t) => {
      this.setState({
        isContextMenuActive: !0
      }), (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("69220")]).then(n.bind(n, 881351));
        return n => (0, s.jsx)(e, {
          ...n,
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
t.Z = _