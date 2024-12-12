r.d(n, {
    P: function () {
        return h;
    }
});
var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(532712),
    d = r(84735),
    f = r(981631);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class h extends (i = o.Component) {
    renderNonInteractive() {
        let { tag: e, focusProps: n, innerRef: r, onClick: i, role: a, tabIndex: s, ...l } = this.props;
        return o.createElement(e, {
            ref: this.setRef,
            ...l
        });
    }
    renderInner() {
        let { tag: e, onClick: n, className: r, children: i, focusProps: a, innerRef: s, ...l } = this.props;
        return null == n
            ? o.createElement(
                  e,
                  {
                      ref: this.setRef,
                      className: u()(r),
                      ...l
                  },
                  i
              )
            : o.createElement(
                  e,
                  {
                      onClick: n,
                      ref: this.setRef,
                      onKeyPress: this.handleKeyPress,
                      className: u()(r),
                      ...l
                  },
                  i
              );
    }
    render() {
        return this.context
            ? this.renderNonInteractive()
            : (0, s.jsx)(d.t, {
                  ...this.props.focusProps,
                  children: this.renderInner()
              });
    }
    constructor(...e) {
        super(...e),
            _(this, 'ref', void 0),
            _(this, 'handleKeyPress', (e) => {
                let { onClick: n, href: r, onKeyPress: i, ignoreKeyPress: a } = this.props;
                !e.repeat && (!a && null != n && null != this.ref && (e.charCode === f.yXg.SPACE || e.charCode === f.yXg.ENTER) && (null == r && e.preventDefault(), null == this.ref.click ? n(e) : this.ref.click()), null != i && i(e));
            }),
            _(this, 'setRef', (e) => {
                this.ref = e;
                let { innerRef: n } = this.props;
                null != n && ('function' == typeof n ? n(e) : n.hasOwnProperty('current') && (n.current = e));
            });
    }
}
_(h, 'contextType', c.g),
    _(h, 'defaultProps', {
        tag: 'div',
        role: 'button',
        tabIndex: 0
    });
