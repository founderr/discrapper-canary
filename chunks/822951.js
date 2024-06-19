n(47120);
var l, i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  o = n(481060),
  c = n(285952),
  u = n(372992);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class h extends(l = s.PureComponent) {
  render() {
    let e;
    let {
      renderFooter: t,
      selectable: n,
      renderHeader: l,
      className: s,
      onClose: a,
      children: d
    } = this.props;
    return null != t && (e = (0, i.jsx)(o.ModalFooter, {
      direction: c.Z.Direction.HORIZONTAL,
      children: t()
    })), (0, i.jsx)(o.Modal, {
      onCloseRequest: a,
      renderModal: t => {
        let {
          onClose: h,
          ...m
        } = t;
        return (0, i.jsxs)(o.ModalRoot, {
          className: u.modal,
          ...m,
          children: [(0, i.jsxs)(o.ModalHeader, {
            align: c.Z.Justify.BETWEEN,
            separator: !1,
            children: [l(), (0, i.jsx)(c.Z.Child, {
              grow: 0,
              children: (0, i.jsx)(o.ModalCloseButton, {
                onClick: () => {
                  null != a && a(), h()
                }
              })
            })]
          }), (0, i.jsx)(o.ModalContent, {
            className: r()(s, u.content, {
              selectable: n
            }),
            scrollerRef: this.scrollerRef,
            onScroll: this.handleScroll,
            children: d
          }), e]
        })
      }
    })
  }
  constructor(...e) {
    super(...e), d(this, "scrollerRef", s.createRef()), d(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null != e) {
        var t, n;
        null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e)
      }
    })
  }
}
d(h, "defaultProps", {
  selectable: !1
}), t.Z = h