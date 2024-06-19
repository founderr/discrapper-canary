n.d(t, {
  Z: function() {
    return g
  }
}), n(390547);
var r = n(735250),
  s = n(470079),
  i = n(120356),
  o = n.n(i),
  a = n(658722),
  l = n.n(a),
  c = n(392711),
  u = n.n(c),
  d = n(217986),
  h = n(481060),
  p = n(133080),
  C = n(285952),
  f = n(689938),
  m = n(138792),
  x = n(972667);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class g extends s.PureComponent {
  renderItems() {
    let {
      query: e
    } = this.state, t = d.Z.flatMap((e, t) => {
      let {
        alpha2: n,
        phoneCountryCodes: s,
        name: i
      } = e, o = (0, p.q9)(n);
      return s.map(e => ({
        key: "".concat(t, "-").concat(e),
        name: i,
        translatedName: o,
        countryData: {
          name: i,
          alpha2: n,
          code: e
        },
        children: (0, r.jsxs)(C.Z, {
          className: m.countryItem,
          justify: C.Z.Justify.CENTER,
          align: C.Z.Align.CENTER,
          children: [(0, r.jsx)(C.Z.Child, {
            className: m.countryName,
            children: o
          }), (0, r.jsx)(C.Z.Child, {
            className: m.countryCode,
            grow: 0,
            shrink: 0,
            children: e
          })]
        })
      }))
    }), n = u()(t).filter(t => 0 === e.length || l()(e.toLowerCase(), t.name.toLowerCase()) || l()(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, s.createElement)(h.PopoutList.Item, {
      ...e,
      key: e.key,
      onClick: () => this.onClick(e.countryData)
    })).value();
    return 0 === n.length ? (0, r.jsx)(h.PopoutList.Empty, {
      children: f.Z.Messages.NONE
    }) : (0, r.jsx)(h.ScrollerAuto, {
      className: m.phoneFieldScroller,
      children: n
    })
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, r.jsxs)(h.PopoutList, {
      className: o()(m.phoneFieldPopout, x.elevationBorderLow, e),
      children: [(0, r.jsx)(h.PopoutList.SearchBar, {
        query: this.state.query,
        placeholder: f.Z.Messages.SEARCH_COUNTRY,
        onChange: this.onChangeQuery,
        onClear: this.onClearQuery,
        autoComplete: "off"
      }), (0, r.jsx)(h.PopoutList.Divider, {}), this.renderItems()]
    })
  }
  constructor(e) {
    super(e), N(this, "onChangeQuery", e => {
      this.setState({
        query: e
      })
    }), N(this, "onClearQuery", () => {
      this.setState({
        query: ""
      })
    }), N(this, "onClick", e => {
      var t, n;
      null === (t = (n = this.props).onClick) || void 0 === t || t.call(n, e)
    }), this.state = {
      query: ""
    }
  }
}