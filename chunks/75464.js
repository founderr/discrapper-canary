n(47120);
var i,
    l = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(153066),
    c = n(577064);
function d(e, t, n) {
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
let u = {
        XSMALL: c.xsmall,
        SMALL: c.small,
        MEDIUM: c.medium,
        LARGE: c.large
    },
    h = {
        DEFAULT: 'default',
        STATIC: 'static'
    };
class m extends (i = s.PureComponent) {
    render() {
        let { size: e, src: t, srcHover: n, className: i, ...s } = this.props,
            { hovered: r } = this.state,
            d = this.getMode();
        return (0, l.jsx)('button', {
            className: a()((0, o.l)(c, 'iconButton', d), i, e),
            style: { backgroundImage: "url('".concat(r && null != n ? n : t, "')") },
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...s
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'state', { hovered: !1 }),
            d(this, 'getMode', () => (null != this.props.srcHover ? h.STATIC : h.DEFAULT)),
            d(this, 'handleHover', (e) => {
                let { onMouseEnter: t } = this.props;
                null == t || t(e), !this.state.hovered && this.setState({ hovered: !0 });
            }),
            d(this, 'handleBlur', (e) => {
                let { onMouseLeave: t } = this.props;
                null == t || t(e), this.state.hovered && this.setState({ hovered: !1 });
            });
    }
}
d(m, 'Sizes', u),
    d(m, 'defaultProps', {
        size: u.MEDIUM,
        disabled: !1
    }),
    (t.Z = m);
