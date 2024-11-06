n(47120);
var a,
    i,
    r,
    s,
    l = n(200651),
    o = n(192379),
    d = n(120356),
    u = n.n(d),
    c = n(392711),
    h = n.n(c),
    p = n(846519),
    m = n(481060),
    g = n(570140),
    f = n(578361),
    b = n(768762),
    C = n(259580),
    I = n(585483),
    x = n(981631),
    v = n(388032),
    _ = n(665923);
function P(e, t, n) {
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
let N = {
    JUMP: 'jump',
    NEXT: 'next',
    PREVIOUS: 'previous'
};
((s = a || (a = {})).ARROW = 'arrow'), (s.CARET = 'caret');
class E extends (i = o.PureComponent) {
    componentDidMount() {
        I.S.subscribe(x.CkL.CAROUSEL_PREV, this.handlePrevious), I.S.subscribe(x.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        I.S.unsubscribe(x.CkL.CAROUSEL_PREV, this.handlePrevious), I.S.unsubscribe(x.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let { current: e, count: t, includeHitboxPadding: n, arrowClassName: a, paginationDotClassName: i, paginationDotSelectedClassName: r, paginationArrowIconType: s = 'arrow' } = this.props,
            o = u()(_.arrowHitbox, { [_.arrowHitboxPadding]: n }, a);
        return (0, l.jsxs)('div', {
            className: u()(_.controls, this.props.className),
            children: [
                (0, l.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: o,
                    onClick: this.handlePrevious,
                    'aria-label': v.intl.string(v.t.vgfxaG),
                    children:
                        'caret' === s
                            ? (0, l.jsx)(C.Z, {
                                  className: _.arrow,
                                  direction: C.Z.Directions.LEFT
                              })
                            : (0, l.jsx)(b.Z, {
                                  className: _.arrow,
                                  direction: b.Z.Directions.LEFT
                              })
                }),
                (0, l.jsx)('div', {
                    className: _.dots,
                    children: h().times(t, (t) =>
                        (0, l.jsx)(
                            m.Button,
                            {
                                look: m.Button.Looks.BLANK,
                                size: m.Button.Sizes.NONE,
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? u()(_.dotSelected, r) : u()(_.dotNormal, i),
                                'aria-label': v.intl.formatToPlainString(v.t['2SXOrK'], { pageNumber: t + 1 })
                            },
                            'dot-'.concat(t)
                        )
                    )
                }),
                (0, l.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: o,
                    onClick: this.handleNext,
                    'aria-label': v.intl.string(v.t.XiOHRU),
                    children:
                        'caret' === s
                            ? (0, l.jsx)(C.Z, {
                                  className: _.arrow,
                                  direction: C.Z.Directions.RIGHT
                              })
                            : (0, l.jsx)(b.Z, {
                                  className: _.arrow,
                                  direction: b.Z.Directions.RIGHT
                              })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            P(this, 'handleDotClick', (e) => {
                let { onSetItem: t, onIntentionalChange: n, current: a } = this.props;
                null == n || n(a, e, N.JUMP), t(e);
            }),
            P(this, 'handleNext', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    a = n(1);
                null == e || e(t, a, N.NEXT);
            }),
            P(this, 'handlePrevious', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    a = n(-1);
                null == e || e(t, a, N.PREVIOUS);
            });
    }
}
P(E, 'defaultProps', { includeHitboxPadding: !0 });
class S extends (r = o.PureComponent) {
    componentDidMount() {
        g.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocusChange), !this.props.initialPaused && !this.state.paused && this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), g.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        let n, a, i, r;
        let s = ((n = this.props), (a = this.state), !n.initialPaused && !a.paused);
        let l = ((i = e), (r = t), !i.initialPaused && !r.paused);
        s && !l ? this.startTimer() : !s && l && this.stopTimer();
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
        let i = t > 0 ? f.n.LEFT : f.n.RIGHT;
        return (
            this.setState({
                visibleIndex: n,
                direction: i
            }),
            n
        );
    }
    render() {
        let { items: e, renderItem: t, className: n, slideAnimatorClassName: a, slideAnimatorSpringSettings: i, slideAnimatorFadeInOut: r, paginationClassName: s, paginationArrowClassName: o, paginationArrowIconType: d, paginationDotClassName: c, paginationDotSelectedClassName: h, themedPagination: p, includeHitboxPadding: m, style: g, aspectRatio: b, children: C } = this.props,
            { visibleIndex: I } = this.state;
        return (0, l.jsxs)('div', {
            className: _.root,
            children: [
                (0, l.jsxs)('div', {
                    className: u()(_.carouselContainer, n),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, l.jsx)('div', {
                            style: { aspectRatio: b },
                            children: (0, l.jsx)(f.Z, {
                                className: u()(_.carousel, a),
                                step: I,
                                direction: this.getCurrentDirection(),
                                springSettings: i,
                                fadeInOut: r,
                                children: t(e[I], I)
                            })
                        }),
                        e.length > 1 &&
                            (0, l.jsx)(E, {
                                className: u()(s, p ? _.themedPagination : _.pagination),
                                arrowClassName: o,
                                includeHitboxPadding: m,
                                current: I,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: d,
                                paginationDotClassName: c,
                                paginationDotSelectedClassName: h
                            })
                    ]
                }),
                null != C &&
                    C({
                        step: I,
                        direction: this.getCurrentDirection()
                    })
            ]
        });
    }
    constructor(e) {
        super(e),
            P(this, 'timer', new p.Xp()),
            P(this, 'handleWindowFocusChange', (e) => {
                let { focused: t } = e;
                this.setState({ paused: !t });
            }),
            P(this, 'getCurrentDirection', () => this.state.direction),
            P(this, 'nextItem', () => {
                let { items: e } = this.props;
                this.changeItem(e, 1);
            }),
            P(this, 'previousItem', () => {
                let { items: e } = this.props;
                this.changeItem(e, -1);
            }),
            P(this, 'handleSetItem', (e) => {
                let { visibleIndex: t } = this.state,
                    { items: n } = this.props;
                this.changeItem(n, e - t);
            }),
            P(this, 'handleMouseEnter', () => {
                this.setState({ paused: !0 });
            }),
            P(this, 'handleMouseLeave', () => {
                this.setState({ paused: !1 });
            }),
            P(this, 'handleIntentionalChange', (e, t, n) => {
                let { items: a, onIntentionalChange: i } = this.props;
                return null == i ? void 0 : i(a[t], e, t, n);
            }),
            (this.state = {
                visibleIndex: !0 === e.randomize ? h().random(0, e.items.length - 1) : 0,
                direction: f.n.LEFT,
                paused: !1
            });
    }
}
P(S, 'defaultProps', { aspectRatio: 16 / 9 }), (t.Z = S);
