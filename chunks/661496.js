"use strict";
E.r(_), E.d(_, {
  default: function() {
    return r
  }
}), E("222007"), E("70102");
var t = E("37983"),
  o = E("884691"),
  I = E("233736"),
  T = E("995113"),
  r = function(e, _, E) {
    return null != E && E.forwardRef ? function(e, _) {
      return E => {
        let r = "FluxContainer(".concat(a(E), ")");
        class i extends o.Component {
          componentDidMount() {
            this.listener.attach(r)
          }
          componentWillUnmount() {
            this.listener.detach(), this.memoizedGetStateFromStores.clear()
          }
          render() {
            let {
              forwardedConnectStoresRef: e,
              childProps: _
            } = this.props, o = this.memoizedGetStateFromStores(_);
            return (0, t.jsx)(E, {
              ref: e,
              ..._,
              ...o
            })
          }
          constructor(...E) {
            super(...E), this.memoizedGetStateFromStores = n(_), this.listener = new T.default(e, () => {
              let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
              if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, I.default)(this.memoizedGetStateFromStores(this.props.childProps), e)))) this.forceUpdate()
            })
          }
        }
        i.displayName = r;
        let A = o.forwardRef((e, _) => (0, t.jsx)(i, {
          childProps: e,
          forwardedConnectStoresRef: _
        }));
        return A.displayName = "ForwardRef(".concat(r, ")"), A
      }
    }(e, _) : function(e, _) {
      return E => {
        let r = "FluxContainer(".concat(a(E), ")");
        class i extends o.Component {
          componentDidMount() {
            this.listener.attach(r)
          }
          componentWillUnmount() {
            this.listener.detach(), this.memoizedGetStateFromStores.clear()
          }
          render() {
            let e = this.memoizedGetStateFromStores(this.props);
            return (0, t.jsx)(E, {
              ...this.props,
              ...e
            })
          }
          constructor(...E) {
            super(...E), this.memoizedGetStateFromStores = n(_), this.listener = new T.default(e, () => {
              let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
              if (!(null != e && (this.memoizedGetStateFromStores.clear(), (0, I.default)(this.memoizedGetStateFromStores(this.props), e)))) this.forceUpdate()
            })
          }
        }
        return i.displayName = r, i
      }
    }(e, _)
  };

function a(e) {
  var _, E;
  return null !== (E = null !== (_ = e.displayName) && void 0 !== _ ? _ : e.name) && void 0 !== E ? E : "<Unknown>"
}

function n(e) {
  let _ = null,
    E = null,
    t = e => null != _ && null != E && (0, I.default)(_, e) ? E : null != _ && null != E && (0, I.default)(_, e) ? (_ = e, E) : null,
    o = o => {
      let I = t(o);
      return null != I ? I : E = e(_ = o)
    };
  return o.getCachedResult = t, o.clear = () => {
    _ = null, E = null
  }, o
}