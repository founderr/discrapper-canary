n(47120);
var s,
    i,
    a,
    r,
    l = n(200651),
    o = n(192379),
    h = n(120356),
    u = n.n(h),
    d = n(392711),
    c = n.n(d),
    p = n(846519),
    m = n(481060),
    g = n(570140),
    C = n(578361),
    I = n(768762),
    x = n(259580),
    f = n(585483),
    v = n(981631),
    b = n(388032),
    E = n(665923);
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
((r = s || (s = {})).ARROW = 'arrow'), (r.CARET = 'caret');
class S extends (i = o.PureComponent) {
    componentDidMount() {
        f.S.subscribe(v.CkL.CAROUSEL_PREV, this.handlePrevious), f.S.subscribe(v.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        f.S.unsubscribe(v.CkL.CAROUSEL_PREV, this.handlePrevious), f.S.unsubscribe(v.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let { current: e, count: t, includeHitboxPadding: n, arrowClassName: s, paginationDotClassName: i, paginationDotSelectedClassName: a, paginationArrowIconType: r = 'arrow' } = this.props,
            o = u()(E.arrowHitbox, { [E.arrowHitboxPadding]: n }, s);
        return (0, l.jsxs)('div', {
            className: u()(E.controls, this.props.className),
            children: [
                (0, l.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: o,
                    onClick: this.handlePrevious,
                    'aria-label': b.intl.string(b.t.vgfxaG),
                    children:
                        'caret' === r
                            ? (0, l.jsx)(x.Z, {
                                  className: E.arrow,
                                  direction: x.Z.Directions.LEFT
                              })
                            : (0, l.jsx)(I.Z, {
                                  className: E.arrow,
                                  direction: I.Z.Directions.LEFT
                              })
                }),
                (0, l.jsx)('div', {
                    className: E.dots,
                    children: c().times(t, (t) =>
                        (0, l.jsx)(
                            m.Button,
                            {
                                look: m.Button.Looks.BLANK,
                                size: m.Button.Sizes.NONE,
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? u()(E.dotSelected, a) : u()(E.dotNormal, i),
                                'aria-label': b.intl.formatToPlainString(b.t['2SXOrK'], { pageNumber: t + 1 })
                            },
                            'dot-'.concat(t)
                        )
                    )
                }),
                (0, l.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: o,
                    onClick: this.handleNext,
                    'aria-label': b.intl.string(b.t.XiOHRU),
                    children:
                        'caret' === r
                            ? (0, l.jsx)(x.Z, {
                                  className: E.arrow,
                                  direction: x.Z.Directions.RIGHT
                              })
                            : (0, l.jsx)(I.Z, {
                                  className: E.arrow,
                                  direction: I.Z.Directions.RIGHT
                              })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'handleDotClick', (e) => {
                let { onSetItem: t, onIntentionalChange: n, current: s } = this.props;
                null == n || n(s, e, P.JUMP), t(e);
            }),
            N(this, 'handleNext', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    s = n(1);
                null == e || e(t, s, P.NEXT);
            }),
            N(this, 'handlePrevious', () => {
                let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
                    s = n(-1);
                null == e || e(t, s, P.PREVIOUS);
            });
    }
}
N(S, 'defaultProps', { includeHitboxPadding: !0 });
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
        let { items: e, renderItem: t, className: n, slideAnimatorClassName: s, slideAnimatorSpringSettings: i, slideAnimatorFadeInOut: a, paginationClassName: r, paginationArrowClassName: o, paginationArrowIconType: h, paginationDotClassName: d, paginationDotSelectedClassName: c, themedPagination: p, includeHitboxPadding: m, style: g, aspectRatio: I, children: x } = this.props,
            { visibleIndex: f } = this.state;
        return (0, l.jsxs)('div', {
            className: E.root,
            children: [
                (0, l.jsxs)('div', {
                    className: u()(E.carouselContainer, n),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, l.jsx)('div', {
                            style: { aspectRatio: I },
                            children: (0, l.jsx)(C.Z, {
                                className: u()(E.carousel, s),
                                step: f,
                                direction: this.getCurrentDirection(),
                                springSettings: i,
                                fadeInOut: a,
                                children: t(e[f], f)
                            })
                        }),
                        e.length > 1 &&
                            (0, l.jsx)(S, {
                                className: u()(r, p ? E.themedPagination : E.pagination),
                                arrowClassName: o,
                                includeHitboxPadding: m,
                                current: f,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: h,
                                paginationDotClassName: d,
                                paginationDotSelectedClassName: c
                            })
                    ]
                }),
                null != x &&
                    x({
                        step: f,
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
                let { items: s, onIntentionalChange: i } = this.props;
                return null == i ? void 0 : i(s[t], e, t, n);
            }),
            (this.state = {
                visibleIndex: !0 === e.randomize ? c().random(0, e.items.length - 1) : 0,
                direction: C.n.LEFT,
                paused: !1
            });
    }
}
N(L, 'defaultProps', { aspectRatio: 16 / 9 }), (t.Z = L);
