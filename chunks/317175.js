"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("390547");
var s = n("735250"),
  r = n("470079"),
  a = n("120356"),
  o = n.n(a),
  i = n("658722"),
  l = n.n(i),
  u = n("392711"),
  c = n.n(u),
  d = n("217986"),
  h = n("481060"),
  f = n("133080"),
  p = n("285952"),
  C = n("689938"),
  m = n("375958"),
  x = n("661781");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class g extends r.PureComponent {
  renderItems() {
    let {
      query: e
    } = this.state, t = d.default.flatMap((e, t) => {
      let {
        alpha2: n,
        phoneCountryCodes: r,
        name: a
      } = e, o = (0, f.getI18NCountryName)(n);
      return r.map(e => ({
        key: "".concat(t, "-").concat(e),
        name: a,
        translatedName: o,
        countryData: {
          name: a,
          alpha2: n,
          code: e
        },
        children: (0, s.jsxs)(p.default, {
          className: m.countryItem,
          justify: p.default.Justify.CENTER,
          align: p.default.Align.CENTER,
          children: [(0, s.jsx)(p.default.Child, {
            className: m.countryName,
            children: o
          }), (0, s.jsx)(p.default.Child, {
            className: m.countryCode,
            grow: 0,
            shrink: 0,
            children: e
          })]
        })
      }))
    }), n = c()(t).filter(t => 0 === e.length || l()(e.toLowerCase(), t.name.toLowerCase()) || l()(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, r.createElement)(h.PopoutList.Item, {
      ...e,
      key: e.key,
      onClick: () => this.onClick(e.countryData)
    })).value();
    return 0 === n.length ? (0, s.jsx)(h.PopoutList.Empty, {
      children: C.default.Messages.NONE
    }) : (0, s.jsx)(h.ScrollerAuto, {
      className: m.phoneFieldScroller,
      children: n
    })
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, s.jsxs)(h.PopoutList, {
      className: o()(m.phoneFieldPopout, x.elevationBorderLow, e),
      children: [(0, s.jsx)(h.PopoutList.SearchBar, {
        query: this.state.query,
        placeholder: C.default.Messages.SEARCH_COUNTRY,
        onChange: this.onChangeQuery,
        onClear: this.onClearQuery,
        autoComplete: "off"
      }), (0, s.jsx)(h.PopoutList.Divider, {}), this.renderItems()]
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