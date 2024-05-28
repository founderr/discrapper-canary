"use strict";
s.r(t), s.d(t, {
  Rules: function() {
    return I
  }
}), s("47120");
var n = s("735250"),
  a = s("470079"),
  i = s("120356"),
  r = s.n(i),
  l = s("302454"),
  o = s.n(l),
  d = s("481060"),
  h = s("378720"),
  u = s("729035"),
  c = s("73346"),
  p = s("689938"),
  m = s("254077");

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let C = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
  I = {
    ...u.default.rules,
    heading: {
      ...u.default.rules.heading,
      react(e, t, s) {
        let a = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
        return (0, n.jsx)(h.default, {
          tag: a,
          children: t(e.content, s)
        }, s.key)
      }
    },
    assetImage: {
      order: 5,
      match(e, t) {
        let s = e.match(C);
        if (null != s) {
          let e = s[2],
            n = t.assets.find(t => t.id === e);
          return null != n && [...s, n, t.applicationId]
        }
        return !1
      },
      parse: e => ({
        asset: e[3],
        alt: e[1],
        applicationId: e[4]
      }),
      react: (e, t, s) => (0, n.jsx)("div", {
        className: m.assetWrapper,
        children: (0, n.jsx)("img", {
          alt: e.alt,
          src: (0, c.getAssetURL)(e.applicationId, e.asset, 800),
          className: m.asset
        })
      }, s.key)
    }
  },
  f = o().parserFor(I),
  x = o().reactFor(o().ruleOutput(I, "react"));
class E extends a.PureComponent {
  componentDidMount() {
    if (null != this._container) {
      let {
        height: e
      } = this._container.getBoundingClientRect();
      this.setState({
        collapsable: e > 400
      })
    }
  }
  render() {
    let {
      applicationId: e,
      description: t,
      blurb: s,
      className: a,
      assets: i
    } = this.props, {
      collapsed: l,
      collapsable: o
    } = this.state;
    return (0, n.jsxs)("div", {
      className: a,
      children: [(0, n.jsx)("div", {
        className: r()({
          [m.collapsed]: o && l
        }),
        children: (0, n.jsxs)("div", {
          ref: this.setContentContainerRef,
          children: [(0, n.jsx)("div", {
            className: m.blurb,
            children: s
          }), (0, n.jsx)(u.default, {
            className: m.description,
            parser: f,
            output: x,
            state: {
              assets: i,
              applicationId: e
            },
            children: t
          })]
        })
      }), o ? (0, n.jsx)(d.Button, {
        className: m.toggleCollapseButton,
        onClick: this.handleToggleCollapse,
        color: d.Button.Colors.PRIMARY,
        children: l ? p.default.Messages.APPLICATION_STORE_DESCRIPTION_READ_MORE : p.default.Messages.APPLICATION_STORE_DESCRIPTION_READ_LESS
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      collapsed: !0,
      collapsable: !0
    }), g(this, "_container", void 0), g(this, "handleToggleCollapse", () => {
      this.setState({
        collapsed: !this.state.collapsed
      })
    }), g(this, "setContentContainerRef", e => {
      this._container = e
    })
  }
}
t.default = E