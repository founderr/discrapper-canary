n.d(t, {
    Cy: function () {
        return L;
    },
    DY: function () {
        return w;
    },
    FG: function () {
        return r;
    },
    u: function () {
        return U;
    }
});
var r,
    i,
    a = n(411104);
var o = n(47120);
var s = n(735250),
    l = n(470079),
    u = n(120356),
    c = n.n(u),
    d = n(699581),
    _ = n(526629),
    E = n(873546),
    f = n(374470),
    h = n(846519),
    p = n(377527),
    m = n(186325),
    I = n(481060),
    T = n(607070),
    g = n(314910),
    S = n(185349);
function A(e, t, n) {
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
!(function (e) {
    (e.PRIMARY = 'primary'), (e.NESTED = 'nested'), (e.BLACK = 'black'), (e.GREY = 'grey'), (e.BRAND = 'brand'), (e.GREEN = 'green'), (e.YELLOW = 'yellow'), (e.RED = 'red'), (e.CUSTOM = 'custom'), (e.PREMIUM = 'premium');
})(r || (r = {}));
let v = 16,
    N = 10,
    O = 8,
    R = Object.freeze({}),
    C = Object.freeze({
        top: S.tooltipTop,
        bottom: S.tooltipBottom,
        left: S.tooltipLeft,
        right: S.tooltipRight,
        center: S.tooltipCenter,
        window_center: S.tooltipCenter,
        primary: S.tooltipPrimary,
        nested: S.tooltipNested,
        black: S.tooltipBlack,
        grey: S.tooltipGrey,
        brand: S.tooltipBrand,
        green: S.tooltipGreen,
        yellow: S.tooltipYellow,
        red: S.tooltipRed,
        custom: null,
        premium: S.tooltipPremium
    });
function y(e, t, n) {
    let r = 'left' === e || 'right' === e,
        i = r ? 'top' : 'left',
        a = r ? 'top' : 'left',
        o = r ? 'bottom' : 'right',
        s = '50%',
        l = n;
    return t === a ? ((s = '0%'), (l += v)) : t === o && ((s = '100%'), (l -= N + N)), { [i]: 'calc('.concat(s, ' + ').concat(l, 'px)') };
}
let L = (e) => {
        let { targetElementRef: t, align: n = 'center', position: r, color: i, children: a, onNonAccessibleClick: o, tooltipClassName: l, tooltipStyle: u, tooltipContentClassName: d, spacing: E = O, animationStyle: f, disableTooltipPointerEvents: h = !1, allowOverflow: p = !1, tooltipPointerClassName: m } = e,
            I = ''.concat('string' == typeof a ? a : '', ':').concat(r);
        return (0, s.jsx)(g.W5, {
            disablePointerEvents: h,
            targetRef: t,
            position: r,
            autoInvert: !0,
            align: n,
            positionKey: I,
            spacing: E,
            nudgeAlignIntoViewport: !0,
            children: (e) => {
                let { position: t, nudge: E } = e;
                return (0, s.jsxs)(_.animated.div, {
                    onClick: o,
                    className: c()(S.tooltip, C[null != t ? t : r], C[i], { [S.tooltipDisablePointerEvents]: h }, l),
                    style: {
                        ...f,
                        ...u
                    },
                    children: [
                        (0, s.jsx)('div', {
                            className: c()(S.tooltipPointer, m),
                            style: y(null != t ? t : r, n, E)
                        }),
                        (0, s.jsx)('div', {
                            className: c()(S.tooltipContent, { [S.tooltipContentAllowOverflow]: p }, d),
                            children: a
                        })
                    ]
                });
            }
        });
    },
    b = {
        scale: 0.95,
        opacity: 0
    },
    D = {
        scale: 1,
        opacity: 0
    },
    M = {
        scale: 1,
        opacity: 1
    },
    P = (e) => {
        let { isVisible: t, onAnimationRest: n, targetElementRef: r, ...i } = e,
            { reducedMotion: a } = l.useContext(m.S);
        return (0, I.useTransition)(
            t,
            {
                keys: (e) => (e ? 'tooltip' : 'empty'),
                config: p.F,
                from: a.enabled ? D : b,
                enter: M,
                leave: a.enabled ? D : b,
                onRest: n
            },
            'animate-always'
        )((e, t) =>
            t
                ? (0, s.jsx)(L, {
                      animationStyle: e,
                      targetElementRef: r,
                      ...i
                  })
                : null
        );
    };
class U extends (i = l.Component) {
    static getDerivedStateFromProps(e, t) {
        return t.shouldShowTooltip && null == e.text ? { shouldShowTooltip: !1 } : null;
    }
    componentDidMount() {
        this.shouldShowTooltip(this.props, this.state) && this.setDomElement();
    }
    componentDidUpdate(e, t) {
        let n = this.shouldShowTooltip(this.props, this.state);
        n !== this.shouldShowTooltip(e, t) && (n ? this.setDomElement() : (this.hasDomElement = !1));
    }
    setDomElement() {
        let e = d.findDOMNode(this);
        if (!(0, f.k)(e)) throw Error('Tooltip cannot find DOM node');
        (this.domElementRef.current = e), (this.hasDomElement = !0), this.forceUpdate();
    }
    componentWillUnmount() {
        this.showTimeout.stop(), (this.domElementRef.current = null);
    }
    render() {
        let e;
        let { children: t, text: n, 'aria-label': r } = this.props;
        if (null == n) return t(R);
        'string' == typeof r ? (e = r) : 'string' == typeof n && !1 !== r && (e = n);
        let i = {
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onContextMenu: this.handleContextMenu,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
        };
        return (
            null != e && (i['aria-label'] = e),
            (0, s.jsxs)(l.Fragment, {
                children: [t(i), this.renderTooltip()]
            })
        );
    }
    shouldShowTooltip(e, t) {
        return e.shouldShow && (t.shouldShowTooltip || e.forceOpen);
    }
    renderTooltip() {
        let { text: e, align: t, position: n, color: r, spacing: i, tooltipClassName: a, tooltipStyle: o, tooltipContentClassName: l, disableTooltipPointerEvents: u, onAnimationRest: c, allowOverflow: d, clickableOnMobile: _, hideOnClick: f, tooltipPointerClassName: h } = this.props,
            p = (E.tq || E.Em) && !0 === _ && f,
            m = (!1 !== u && !p) || !0 === u,
            I = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            T = null;
        return (
            (T = e instanceof Function ? (I ? e() : null) : e),
            (0, s.jsx)(P, {
                disableTooltipPointerEvents: m,
                targetElementRef: this.domElementRef,
                tooltipStyle: o,
                tooltipClassName: a,
                tooltipContentClassName: l,
                tooltipPointerClassName: h,
                align: t,
                position: n,
                color: r,
                spacing: i,
                isVisible: I,
                onAnimationRest: c,
                onNonAccessibleClick: p ? this.handleClick : void 0,
                allowOverflow: d,
                children: T
            })
        );
    }
    show() {
        let { delay: e, overflowOnly: t } = this.props;
        if (t) {
            let e = d.findDOMNode(this);
            if (null == e || ((0, f.k)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth)) return;
        }
        null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0);
    }
    hide() {
        this.showTimeout.stop(), this.toggleShow(!1);
    }
    toggleShow(e) {
        if (this.state.shouldShowTooltip !== e) {
            var t, n, r, i;
            e ? null === (t = (n = this.props).onTooltipShow) || void 0 === t || t.call(n) : null === (r = (i = this.props).onTooltipHide) || void 0 === r || r.call(i),
                d.flushSync(() => {
                    this.setState({ shouldShowTooltip: e });
                });
        }
    }
    constructor(...e) {
        super(...e),
            A(this, 'showTimeout', new h.V7()),
            A(this, 'domElementRef', l.createRef()),
            A(this, 'hasDomElement', !1),
            A(this, 'state', { shouldShowTooltip: !1 }),
            A(this, 'handleMouseEnter', () => {
                !((E.tq || E.Em) && !0 === this.props.clickableOnMobile) && this.show();
            }),
            A(this, 'handleMouseLeave', () => {
                !((E.tq || E.Em) && !0 === this.props.clickableOnMobile) && this.hide();
            }),
            A(this, 'handleFocus', () => {
                T.Z.keyboardModeEnabled && this.show();
            }),
            A(this, 'handleBlur', () => {
                this.hide();
            }),
            A(this, 'handleClick', () => {
                let e = this.hasDomElement;
                e && this.props.hideOnClick ? this.hide() : !e && (E.tq || E.Em) && !0 === this.props.clickableOnMobile && this.show();
            }),
            A(this, 'handleContextMenu', () => {
                this.hide();
            });
    }
}
A(U, 'Colors', r),
    A(U, 'defaultProps', {
        hideOnClick: !0,
        position: 'top',
        color: 'primary',
        forceOpen: !1,
        spacing: O,
        shouldShow: !0,
        allowOverflow: !1,
        overflowOnly: !1
    });
let w = (e) => {
    let { children: t, className: n, element: r = 'div', ...i } = e;
    return (0, s.jsx)(U, {
        ...i,
        children: (e) =>
            l.createElement(
                r,
                null != n
                    ? {
                          ...e,
                          className: n
                      }
                    : e,
                t
            )
    });
};
