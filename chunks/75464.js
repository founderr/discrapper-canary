s(47120);
var n,
    l = s(200651),
    i = s(192379),
    a = s(120356),
    r = s.n(a),
    o = s(153066),
    c = s(577064);
function d(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
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
class m extends (n = i.PureComponent) {
    render() {
        let { size: e, src: t, srcHover: s, className: n, ...i } = this.props,
            { hovered: a } = this.state,
            d = this.getMode();
        return (0, l.jsx)('button', {
            className: r()((0, o.l)(c, 'iconButton', d), n, e),
            style: { backgroundImage: "url('".concat(a && null != s ? s : t, "')") },
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...i
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
