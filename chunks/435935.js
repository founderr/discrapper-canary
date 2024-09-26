n.d(t, {
    k: function () {
        return N;
    }
});
var s,
    a,
    r = n(735250),
    i = n(470079),
    l = n(557533),
    o = n.n(l),
    c = n(667718),
    d = n(187282);
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
let E = {
        VERTICAL: c.flexVertical,
        HORIZONTAL: c.flexHorizontal,
        HORIZONTAL_REVERSE: c.flexHorizontalReverse
    },
    u = {
        START: c.flexJustifyStart,
        END: c.flexJustifyEnd,
        CENTER: c.flexJustifyCenter,
        BETWEEN: c.flexJustifyBetween,
        AROUND: c.flexJustifyAround
    },
    T = {
        NO_WRAP: c.flexNowrap,
        WRAP: c.flexWrap,
        WRAP_REVERSE: c.flexWrapReverse
    },
    I = {
        START: c.flexAlignStart,
        END: c.flexAlignEnd,
        CENTER: c.flexAlignCenter,
        STRETCH: c.flexAlignStretch
    },
    R = {
        SMALL: d.flexGutterSmall,
        LARGE: d.flexGutterLarge
    };
class g extends (s = i.PureComponent) {
    render() {
        let { children: e, className: t, shrink: n, grow: s, basis: a, style: l, wrap: c, ..._ } = this.props,
            E = {
                style: {
                    flexGrow: s,
                    flexShrink: n,
                    flexBasis: a,
                    ...l
                },
                className: t === d.flexChild ? t : o()(d.flexChild, t),
                ..._
            };
        if (!c && 'string' != typeof e && 1 === i.Children.count(e)) {
            let n = i.Children.only(e);
            return (
                (E.style = {
                    ...E.style,
                    ...n.props.style
                }),
                (E.className = o()(n.props.className, t)),
                i.cloneElement(n, E)
            );
        }
        return (0, r.jsx)('div', {
            ...E,
            children: e
        });
    }
}
_(g, 'defaultProps', {
    className: d.flexChild,
    style: {},
    wrap: !1
});
class N extends (a = i.PureComponent) {
    render() {
        let { children: e, className: t, direction: n, justify: s, align: a, wrap: i, shrink: l, grow: c, basis: _, style: E, gutter: u, ...T } = this.props,
            I = {
                flexShrink: l,
                flexGrow: c,
                flexBasis: _,
                ...E
            };
        return (0, r.jsx)('div', {
            style: I,
            className: o()(d.flex, n, s, a, i, u, t),
            ...T,
            children: e
        });
    }
}
_(N, 'Child', g),
    _(N, 'Direction', E),
    _(N, 'Align', I),
    _(N, 'Justify', u),
    _(N, 'Wrap', T),
    _(N, 'Gutter', R),
    _(N, 'defaultProps', {
        direction: E.HORIZONTAL,
        justify: u.START,
        align: I.STRETCH,
        wrap: T.WRAP,
        shrink: 1,
        grow: 1,
        basis: 'auto',
        style: {}
    });
