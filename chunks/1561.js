n.d(t, {
    P: function () {
        return E;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(532712),
    c = n(84735),
    d = n(981631);
function _(e, t, n) {
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
class E extends (r = o.Component) {
    renderNonInteractive() {
        let { tag: e, focusProps: t, innerRef: n, onClick: r, role: i, tabIndex: a, ...s } = this.props;
        return o.createElement(e, {
            ref: this.setRef,
            ...s
        });
    }
    renderInner() {
        let { tag: e, onClick: t, className: n, children: r, focusProps: i, innerRef: a, ...s } = this.props;
        return null == t
            ? o.createElement(
                  e,
                  {
                      ref: this.setRef,
                      className: l()(n),
                      ...s
                  },
                  r
              )
            : o.createElement(
                  e,
                  {
                      onClick: t,
                      ref: this.setRef,
                      onKeyPress: this.handleKeyPress,
                      className: l()(n),
                      ...s
                  },
                  r
              );
    }
    render() {
        return this.context
            ? this.renderNonInteractive()
            : (0, a.jsx)(c.t, {
                  ...this.props.focusProps,
                  children: this.renderInner()
              });
    }
    constructor(...e) {
        super(...e),
            _(this, 'ref', void 0),
            _(this, 'handleKeyPress', (e) => {
                let { onClick: t, href: n, onKeyPress: r, ignoreKeyPress: i } = this.props;
                !e.repeat && (!i && null != t && null != this.ref && (e.charCode === d.yXg.SPACE || e.charCode === d.yXg.ENTER) && (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()), null != r && r(e));
            }),
            _(this, 'setRef', (e) => {
                this.ref = e;
                let { innerRef: t } = this.props;
                null != t && ('function' == typeof t ? t(e) : t.hasOwnProperty('current') && (t.current = e));
            });
    }
}
_(E, 'contextType', u.g),
    _(E, 'defaultProps', {
        tag: 'div',
        role: 'button',
        tabIndex: 0
    });
