n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(481060),
    c = n(600164),
    d = n(210080);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class h extends (i = a.PureComponent) {
    render() {
        let e;
        let { renderFooter: t, selectable: n, renderHeader: i, className: a, onClose: r, children: u } = this.props;
        return (
            null != t &&
                (e = (0, l.jsx)(o.ModalFooter, {
                    direction: c.Z.Direction.HORIZONTAL,
                    children: t()
                })),
            (0, l.jsx)(o.Modal, {
                onCloseRequest: r,
                renderModal: (t) => {
                    let { onClose: h, ...p } = t;
                    return (0, l.jsxs)(o.ModalRoot, {
                        className: d.modal,
                        ...p,
                        children: [
                            (0, l.jsxs)(o.ModalHeader, {
                                align: c.Z.Justify.BETWEEN,
                                separator: !1,
                                children: [
                                    i(),
                                    (0, l.jsx)(c.Z.Child, {
                                        grow: 0,
                                        children: (0, l.jsx)(o.ModalCloseButton, {
                                            onClick: () => {
                                                null != r && r(), h();
                                            }
                                        })
                                    })
                                ]
                            }),
                            (0, l.jsx)(o.ModalContent, {
                                className: s()(a, d.content, { selectable: n }),
                                scrollerRef: this.scrollerRef,
                                onScroll: this.handleScroll,
                                children: u
                            }),
                            e
                        ]
                    });
                }
            })
        );
    }
    constructor(...e) {
        super(...e),
            u(this, 'scrollerRef', a.createRef()),
            u(this, 'handleScroll', () => {
                let { current: e } = this.scrollerRef;
                if (null != e) {
                    var t, n;
                    null === (t = (n = this.props).onScroll) || void 0 === t || t.call(n, e);
                }
            });
    }
}
u(h, 'defaultProps', { selectable: !1 }), (t.Z = h);
