n(47120);
var a,
    i,
    s,
    r,
    l = n(200651),
    o = n(192379),
    d = n(120356),
    c = n.n(d),
    u = n(392711),
    h = n.n(u),
    p = n(846519),
    m = n(481060),
    g = n(570140),
    b = n(578361),
    f = n(768762),
    I = n(259580),
    C = n(585483),
    x = n(981631),
    _ = n(388032),
    v = n(665923);
function N(e, t, n) {
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
let P = {
    JUMP: 'jump',
    NEXT: 'next',
    PREVIOUS: 'previous'
};
((r = a || (a = {})).ARROW = 'arrow'), (r.CARET = 'caret');
class E extends (i = o.PureComponent) {
    componentDidMount() {
        C.S.subscribe(x.CkL.CAROUSEL_PREV, this.handlePrevious), C.S.subscribe(x.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        C.S.unsubscribe(x.CkL.CAROUSEL_PREV, this.handlePrevious), C.S.unsubscribe(x.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let { current: e, count: t, includeHitboxPadding: n, arrowClassName: a, paginationDotClassName: i, paginationDotSelectedClassName: s, paginationArrowIconType: r = 'arrow' } = this.props,
            o = c()(v.arrowHitbox, { [v.arrowHitboxPadding]: n }, a);
        return (0, l.jsxs)('div', {
            className: c()(v.controls, this.props.className),
            children: [
                (0, l.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: o,
                    onClick: this.handlePrevious,
                    'aria-label': _.intl.string(_.t.vgfxaG),
                    children:
                        'caret' === r
                            ? (0, l.jsx)(I.Z, {
                                  className: v.arrow,
                                  direction: I.Z.Directions.LEFT
                              })
                            : (0, l.jsx)(f.Z, {
                                  className: v.arrow,
                                  direction: f.Z.Directions.LEFT
                              })
                }),
                (0, l.jsx)('div', {
                    className: v.dots,
                    children: h().times(t, (t) =>
                        (0, l.jsx)(
                            m.Button,
                            {
                                look: m.Button.Looks.BLANK,
                                size: m.Button.Sizes.NONE,
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? c()(v.dotSelected, s) : c()(v.dotNormal, i),
                                'aria-label': _.intl.formatToPlainString(_.t['2SXOrK'], { pageNumber: t + 1 })
                            },
                            'dot-'.concat(t)
                        )
                    )
                }),
                (0, l.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: o,
                    onClick: this.handleNext,
                    'aria-label': _.intl.string(_.t.XiOHRU),
                    children:
                        'caret' === r
                            ? (0, l.jsx)(I.Z, {
                                  className: v.arrow,
                                  direction: I.Z.Directions.RIGHT
                              })
                            : (0, l.jsx)(f.Z, {
                                  className: v.arrow,
                                  direction: f.Z.Directions.RIGHT
                              })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'handleDotClick', (e) => {
                let { onSetItem: t, onIntentionalChange: n, current: a } = this.props;
                null == n || n(a, e, P.JUMP), t(e);
            }),
            N(this, 'handleNext', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    a = n(1);
                null == e || e(t, a, P.NEXT);
            }),
            N(this, 'handlePrevious', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    a = n(-1);
                null == e || e(t, a, P.PREVIOUS);
            });
    }
}
N(E, 'defaultProps', { includeHitboxPadding: !0 });
class S extends (s = o.PureComponent) {
    componentDidMount() {
        g.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocusChange), !this.props.initialPaused && !this.state.paused && this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), g.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        let n, a, i, s;
        let r = ((n = this.props), (a = this.state), !n.initialPaused && !a.paused);
        let l = ((i = e), (s = t), !i.initialPaused && !s.paused);
        r && !l ? this.startTimer() : !r && l && this.stopTimer();
        let { items: o } = this.props,
            { visibleIndex: d } = this.state;
        null == o[d] && this.changeItem(o, 1);
    }
    startTimer() {
        if (null != this.props.delay) this.timer.start(this.props.delay, this.nextItem);
    }
    stopTimer() {
        if (null != this.props.delay) this.timer.stop();
    }
    changeItem(e, t) {
        let n = this.state.visibleIndex + t;
        n < 0 ? (n = e.length - 1) : n > e.length - 1 && (n = 0);
        let { onChangeItem: a } = this.props;
        null == a || a(e[n], this.state.visibleIndex, n);
        let i = t > 0 ? b.n.LEFT : b.n.RIGHT;
        return (
            this.setState({
                visibleIndex: n,
                direction: i
            }),
            n
        );
    }
    render() {
        let { items: e, renderItem: t, className: n, slideAnimatorClassName: a, slideAnimatorSpringSettings: i, slideAnimatorFadeInOut: s, paginationClassName: r, paginationArrowClassName: o, paginationArrowIconType: d, paginationDotClassName: u, paginationDotSelectedClassName: h, themedPagination: p, includeHitboxPadding: m, style: g, aspectRatio: f, children: I } = this.props,
            { visibleIndex: C } = this.state;
        return (0, l.jsxs)('div', {
            className: v.root,
            children: [
                (0, l.jsxs)('div', {
                    className: c()(v.carouselContainer, n),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, l.jsx)('div', {
                            style: { aspectRatio: f },
                            children: (0, l.jsx)(b.Z, {
                                className: c()(v.carousel, a),
                                step: C,
                                direction: this.getCurrentDirection(),
                                springSettings: i,
                                fadeInOut: s,
                                children: t(e[C], C)
                            })
                        }),
                        e.length > 1 &&
                            (0, l.jsx)(E, {
                                className: c()(r, p ? v.themedPagination : v.pagination),
                                arrowClassName: o,
                                includeHitboxPadding: m,
                                current: C,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: d,
                                paginationDotClassName: u,
                                paginationDotSelectedClassName: h
                            })
                    ]
                }),
                null != I &&
                    I({
                        step: C,
                        direction: this.getCurrentDirection()
                    })
            ]
        });
    }
    constructor(e) {
        super(e),
            N(this, 'timer', new p.Xp()),
            N(this, 'handleWindowFocusChange', (e) => {
                let { focused: t } = e;
                this.setState({ paused: !t });
            }),
            N(this, 'getCurrentDirection', () => this.state.direction),
            N(this, 'nextItem', () => {
                let { items: e } = this.props;
                this.changeItem(e, 1);
            }),
            N(this, 'previousItem', () => {
                let { items: e } = this.props;
                this.changeItem(e, -1);
            }),
            N(this, 'handleSetItem', (e) => {
                let { visibleIndex: t } = this.state,
                    { items: n } = this.props;
                this.changeItem(n, e - t);
            }),
            N(this, 'handleMouseEnter', () => {
                this.setState({ paused: !0 });
            }),
            N(this, 'handleMouseLeave', () => {
                this.setState({ paused: !1 });
            }),
            N(this, 'handleIntentionalChange', (e, t, n) => {
                let { items: a, onIntentionalChange: i } = this.props;
                return null == i ? void 0 : i(a[t], e, t, n);
            }),
            (this.state = {
                visibleIndex: !0 === e.randomize ? h().random(0, e.items.length - 1) : 0,
                direction: b.n.LEFT,
                paused: !1
            });
    }
}
N(S, 'defaultProps', { aspectRatio: 16 / 9 }), (t.Z = S);
