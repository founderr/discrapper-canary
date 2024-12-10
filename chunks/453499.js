n(47120);
var s,
    i,
    a,
    r,
    l = n(200651),
    o = n(192379),
    h = n(120356),
    d = n.n(h),
    c = n(392711),
    u = n.n(c),
    p = n(846519),
    m = n(481060),
    g = n(570140),
    C = n(578361),
    x = n(768762),
    I = n(259580),
    v = n(585483),
    f = n(981631),
    N = n(388032),
    E = n(262309);
function b(e, t, n) {
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
((r = s || (s = {})).ARROW = 'arrow'), (r.CARET = 'caret');
class S extends (i = o.PureComponent) {
    componentDidMount() {
        v.S.subscribe(f.CkL.CAROUSEL_PREV, this.handlePrevious), v.S.subscribe(f.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        v.S.unsubscribe(f.CkL.CAROUSEL_PREV, this.handlePrevious), v.S.unsubscribe(f.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let { current: e, count: t, includeHitboxPadding: n, arrowClassName: s, paginationDotClassName: i, paginationDotSelectedClassName: a, paginationArrowIconType: r = 'arrow' } = this.props,
            o = d()(E.arrowHitbox, { [E.arrowHitboxPadding]: n }, s);
        return (0, l.jsxs)('div', {
            className: d()(E.controls, this.props.className),
            children: [
                (0, l.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: o,
                    onClick: this.handlePrevious,
                    'aria-label': N.intl.string(N.t.vgfxaG),
                    children:
                        'caret' === r
                            ? (0, l.jsx)(I.Z, {
                                  className: E.arrow,
                                  direction: I.Z.Directions.LEFT
                              })
                            : (0, l.jsx)(x.Z, {
                                  className: E.arrow,
                                  direction: x.Z.Directions.LEFT
                              })
                }),
                (0, l.jsx)('div', {
                    className: E.dots,
                    children: u().times(t, (t) =>
                        (0, l.jsx)(
                            m.Button,
                            {
                                look: m.Button.Looks.BLANK,
                                size: m.Button.Sizes.NONE,
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? d()(E.dotSelected, a) : d()(E.dotNormal, i),
                                'aria-label': N.intl.formatToPlainString(N.t['2SXOrK'], { pageNumber: t + 1 })
                            },
                            'dot-'.concat(t)
                        )
                    )
                }),
                (0, l.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: o,
                    onClick: this.handleNext,
                    'aria-label': N.intl.string(N.t.XiOHRU),
                    children:
                        'caret' === r
                            ? (0, l.jsx)(I.Z, {
                                  className: E.arrow,
                                  direction: I.Z.Directions.RIGHT
                              })
                            : (0, l.jsx)(x.Z, {
                                  className: E.arrow,
                                  direction: x.Z.Directions.RIGHT
                              })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'handleDotClick', (e) => {
                let { onSetItem: t, onIntentionalChange: n, current: s } = this.props;
                null == n || n(s, e, P.JUMP), t(e);
            }),
            b(this, 'handleNext', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    s = n(1);
                null == e || e(t, s, P.NEXT);
            }),
            b(this, 'handlePrevious', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    s = n(-1);
                null == e || e(t, s, P.PREVIOUS);
            });
    }
}
b(S, 'defaultProps', { includeHitboxPadding: !0 });
class L extends (a = o.PureComponent) {
    componentDidMount() {
        g.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocusChange), !this.props.initialPaused && !this.state.paused && this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), g.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        let n, s, i, a;
        let r = ((n = this.props), (s = this.state), !n.initialPaused && !s.paused);
        let l = ((i = e), (a = t), !i.initialPaused && !a.paused);
        r && !l ? this.startTimer() : !r && l && this.stopTimer();
        let { items: o } = this.props,
            { visibleIndex: h } = this.state;
        null == o[h] && this.changeItem(o, 1);
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
        let { onChangeItem: s } = this.props;
        null == s || s(e[n], this.state.visibleIndex, n);
        let i = t > 0 ? C.n.LEFT : C.n.RIGHT;
        return (
            this.setState({
                visibleIndex: n,
                direction: i
            }),
            n
        );
    }
    render() {
        let { items: e, renderItem: t, className: n, slideAnimatorClassName: s, slideAnimatorSpringSettings: i, slideAnimatorFadeInOut: a, paginationClassName: r, paginationArrowClassName: o, paginationArrowIconType: h, paginationDotClassName: c, paginationDotSelectedClassName: u, themedPagination: p, includeHitboxPadding: m, style: g, aspectRatio: x, children: I } = this.props,
            { visibleIndex: v } = this.state;
        return (0, l.jsxs)('div', {
            className: E.root,
            children: [
                (0, l.jsxs)('div', {
                    className: d()(E.carouselContainer, n),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, l.jsx)('div', {
                            style: { aspectRatio: x },
                            children: (0, l.jsx)(C.Z, {
                                className: d()(E.carousel, s),
                                step: v,
                                direction: this.getCurrentDirection(),
                                springSettings: i,
                                fadeInOut: a,
                                children: t(e[v], v)
                            })
                        }),
                        e.length > 1 &&
                            (0, l.jsx)(S, {
                                className: d()(r, p ? E.themedPagination : E.pagination),
                                arrowClassName: o,
                                includeHitboxPadding: m,
                                current: v,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: h,
                                paginationDotClassName: c,
                                paginationDotSelectedClassName: u
                            })
                    ]
                }),
                null != I &&
                    I({
                        step: v,
                        direction: this.getCurrentDirection()
                    })
            ]
        });
    }
    constructor(e) {
        super(e),
            b(this, 'timer', new p.Xp()),
            b(this, 'handleWindowFocusChange', (e) => {
                let { focused: t } = e;
                this.setState({ paused: !t });
            }),
            b(this, 'getCurrentDirection', () => this.state.direction),
            b(this, 'nextItem', () => {
                let { items: e } = this.props;
                this.changeItem(e, 1);
            }),
            b(this, 'previousItem', () => {
                let { items: e } = this.props;
                this.changeItem(e, -1);
            }),
            b(this, 'handleSetItem', (e) => {
                let { visibleIndex: t } = this.state,
                    { items: n } = this.props;
                this.changeItem(n, e - t);
            }),
            b(this, 'handleMouseEnter', () => {
                this.setState({ paused: !0 });
            }),
            b(this, 'handleMouseLeave', () => {
                this.setState({ paused: !1 });
            }),
            b(this, 'handleIntentionalChange', (e, t, n) => {
                let { items: s, onIntentionalChange: i } = this.props;
                return null == i ? void 0 : i(s[t], e, t, n);
            }),
            (this.state = {
                visibleIndex: !0 === e.randomize ? u().random(0, e.items.length - 1) : 0,
                direction: C.n.LEFT,
                paused: !1
            });
    }
}
b(L, 'defaultProps', { aspectRatio: 16 / 9 }), (t.Z = L);
