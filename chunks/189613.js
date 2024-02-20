"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("881410");
var n, a = s("37983"),
  l = s("884691"),
  o = s("414456"),
  i = s.n(o),
  r = s("448105"),
  d = s.n(r),
  u = s("917351"),
  h = s.n(u),
  c = s("592861"),
  p = s("77078"),
  f = s("988415"),
  m = s("145131"),
  C = s("782340"),
  g = s("442363"),
  y = s("678016");
n = class extends l.PureComponent {
  renderItems() {
    let {
      query: e
    } = this.state, t = c.default.flatMap((e, t) => {
      let {
        alpha2: s,
        phoneCountryCodes: n,
        name: l
      } = e, o = (0, f.getI18NCountryName)(s);
      return n.map(e => ({
        key: "".concat(t, "-").concat(e),
        name: l,
        translatedName: o,
        countryData: {
          name: l,
          alpha2: s,
          code: e
        },
        children: (0, a.jsxs)(m.default, {
          className: g.countryItem,
          justify: m.default.Justify.CENTER,
          align: m.default.Align.CENTER,
          children: [(0, a.jsx)(m.default.Child, {
            className: g.countryName,
            children: o
          }), (0, a.jsx)(m.default.Child, {
            className: g.countryCode,
            grow: 0,
            shrink: 0,
            children: e
          })]
        })
      }))
    }), s = h(t).filter(t => 0 === e.length || d(e.toLowerCase(), t.name.toLowerCase()) || d(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, l.createElement)(p.PopoutList.Item, {
      ...e,
      key: e.key,
      onClick: () => this.onClick(e.countryData)
    })).value();
    return 0 === s.length ? (0, a.jsx)(p.PopoutList.Empty, {
      children: C.default.Messages.NONE
    }) : (0, a.jsx)(p.ScrollerAuto, {
      className: g.phoneFieldScroller,
      children: s
    })
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, a.jsxs)(p.PopoutList, {
      className: i(g.phoneFieldPopout, y.elevationBorderLow, e),
      children: [(0, a.jsx)(p.PopoutList.SearchBar, {
        query: this.state.query,
        placeholder: C.default.Messages.SEARCH_COUNTRY,
        onChange: this.onChangeQuery,
        onClear: this.onClearQuery,
        autoComplete: "off"
      }), (0, a.jsx)(p.PopoutList.Divider, {}), this.renderItems()]
    })
  }
  constructor(e) {
    super(e), this.onChangeQuery = e => {
      this.setState({
        query: e
      })
    }, this.onClearQuery = () => {
      this.setState({
        query: ""
      })
    }, this.onClick = e => {
      var t, s;
      null === (t = (s = this.props).onClick) || void 0 === t || t.call(s, e)
    }, this.state = {
      query: ""
    }
  }
}