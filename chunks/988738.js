"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
  s = n("817736"),
  i = n("759843"),
  l = n("446674"),
  o = n("77078"),
  u = n("272030"),
  d = n("244201"),
  c = n("428958"),
  f = n("161778"),
  h = n("144747"),
  p = n("983782"),
  m = n("659500"),
  C = n("452453"),
  E = n("49111");
let g = e => {
  let {
    children: t,
    close: n,
    onUnmount: l,
    rect: u,
    position: f,
    align: h,
    impressionName: m,
    impressionProperties: C
  } = e, g = r.useRef(null);
  r.useEffect(() => {
    var e, t;
    let a = (0, s.findDOMNode)(g.current);
    if (null == a) return;
    let r = e => {
      let t = e.target,
        a = (0, s.findDOMNode)(g.current);
      !(null != a && (0, o.referencePortalAwareContains)(a, t)) && (window.getSelection().removeAllRanges(), n())
    };
    return null === (e = a.ownerDocument) || void 0 === e || e.addEventListener("click", r, !0), null === (t = a.ownerDocument) || void 0 === t || t.addEventListener("contextmenu", r, !0), () => {
      var e, t;
      null === (e = a.ownerDocument) || void 0 === e || e.removeEventListener("click", r, !0), null === (t = a.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", r, !0)
    }
  }, [n]);
  let S = r.useRef(l);
  r.useEffect(() => void(S.current = l)), r.useEffect(() => () => {
    var e;
    return null === (e = S.current) || void 0 === e ? void 0 : e.call(S)
  }, []), r.useLayoutEffect(() => {
    var e;
    null === (e = g.current) || void 0 === e || e.updatePosition()
  }), (0, c.default)({
    type: i.ImpressionTypes.MENU,
    name: m,
    properties: C
  });
  let v = (0, d.useWindowDispatch)(),
    _ = r.useCallback(() => {
      v.dispatch(E.ComponentActions.POPOUT_SHOW)
    }, [v]),
    T = r.useCallback(() => {
      v.dispatch(E.ComponentActions.POPOUT_HIDE)
    }, [v]);
  return (0, a.jsx)(p.AppReferencePositionLayer, {
    onMount: _,
    onUnmount: T,
    reference: () => u,
    position: null != f ? f : "right",
    align: null != h ? h : "top",
    autoInvert: !0,
    ref: g,
    nudgeAlignIntoViewport: !0,
    children: t
  })
};
class S extends r.PureComponent {
  componentDidMount() {
    let {
      renderLazy: e,
      renderWindow: t
    } = this.props;
    if (t.addEventListener("resize", this.closeResize, !0), m.ComponentDispatch.subscribe(E.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
      let t = setTimeout(() => {
        this.setState({
          render: () => (0, a.jsx)(o.MenuSpinner, {})
        })
      }, 300);
      e().then(e => {
        this.setState({
          render: e
        }), clearTimeout(t)
      })
    }
  }
  componentDidUpdate(e) {
    let {
      isOpen: t
    } = this.props;
    if (!t && e.isOpen) {
      var n, a;
      null === (a = e.config) || void 0 === a || null === (n = a.onClose) || void 0 === n || n.call(a)
    }
  }
  componentWillUnmount() {
    let {
      renderWindow: e
    } = this.props;
    e.removeEventListener("resize", this.closeResize, !0), m.ComponentDispatch.unsubscribe(E.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
  }
  render() {
    var e;
    let {
      appContext: t,
      target: n,
      isOpen: r,
      theme: s,
      config: i,
      rect: l
    } = this.props, o = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
    return r && null != l && null != i && null != n && null != o && i.context === t ? (0, a.jsx)(g, {
      rect: l,
      close: this.close,
      onUnmount: i.onClose,
      align: i.align,
      position: i.position,
      impressionName: i.impressionName,
      impressionProperties: i.impressionProperties,
      children: (e, a) => {
        let {
          position: r
        } = e;
        return o({
          className: C.ContextMenuClassName,
          position: r,
          theme: s,
          onHeightUpdate: a,
          config: i,
          target: n,
          context: t
        })
      }
    }) : null
  }
  constructor(...e) {
    super(...e), this.state = {
      render: void 0
    }, this.closeResize = e => {
      let {
        renderWindow: t
      } = this.props;
      e.target === t && this.close()
    }, this.close = () => {
      let {
        isOpen: e,
        closeContextMenu: t
      } = this.props;
      e && t()
    }
  }
}

function v() {
  let {
    contextMenu: e,
    version: t,
    isOpen: n
  } = (0, l.useStateFromStoresObject)([h.default], () => ({
    contextMenu: h.default.getContextMenu(),
    version: h.default.version,
    isOpen: h.default.isOpen()
  })), s = (0, l.useStateFromStores)([f.default], () => f.default.theme), {
    appContext: i,
    renderWindow: o
  } = r.useContext(d.default);
  return (0, a.jsx)(S, {
    appContext: i,
    renderWindow: o,
    ...e,
    isOpen: n,
    theme: s,
    closeContextMenu: u.closeContextMenu
  }, t)
}