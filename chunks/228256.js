"use strict";
n.r(t), n.d(t, {
  LayerClassName: function() {
    return f
  },
  LayerProvider: function() {
    return E
  },
  LayerContainer: function() {
    return _
  },
  getParentLayerContainer: function() {
    return m
  },
  Layer: function() {
    return S
  },
  createLayer: function() {
    return g
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("627445"),
  l = n.n(o),
  u = n("817736"),
  c = n.n(u),
  d = n("117362"),
  p = n("411093"),
  h = n("855265");
let f = h.layerContainer;
class E extends r.Component {
  componentWillUnmount() {
    this.state.layerContainerElement = null
  }
  render() {
    let {
      layerContext: e,
      children: t
    } = this.props, {
      layerContainerElement: n
    } = this.state;
    return (0, i.jsx)(e.Provider, {
      value: this.getContextValue(n),
      children: t
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      layerContainerElement: null
    }, this.setLayerContainerElement = e => {
      this.setState({
        layerContainerElement: e
      })
    }, this.getContextValue = (0, d.cachedFunction)(e => [e, this.setLayerContainerElement])
  }
}
let _ = e => {
  let {
    layerContext: t,
    className: n
  } = e, [, s] = r.useContext(t);
  return (0, i.jsx)("div", {
    className: a(f, n),
    ref: s
  })
};

function m(e) {
  let t = (0, p.default)(e, h.layerContainer);
  return l(null != t, "Unexpected missing parent container"), t
}
let S = e => {
  let {
    layerContext: t,
    children: n
  } = e;
  return (0, i.jsx)(t.Consumer, {
    children: e => (function(e, t) {
      let [n] = e;
      return null == n ? null : c.createPortal(r.Children.only(t), n)
    })(e, n)
  })
};

function g(e) {
  let t = r.createContext([null, () => {}]),
    n = {
      LayerProvider: e => (0, i.jsx)(E, {
        layerContext: t,
        ...e
      }),
      LayerContainer: e => (0, i.jsx)(_, {
        layerContext: t,
        ...e
      }),
      Layer: e => (0, i.jsx)(S, {
        layerContext: t,
        ...e
      }),
      layerContext: t
    };
  return n.LayerProvider.displayName = "".concat(e, "LayerProvider"), n.LayerContainer.displayName = "".concat(e, "LayerContainer"), n.Layer.displayName = "".concat(e, "Layer"), n
}