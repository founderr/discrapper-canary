s(47120);
var n,
    i,
    a,
    r,
    l = s(200651),
    o = s(192379),
    h = s(120356),
    d = s.n(h),
    u = s(392711),
    c = s.n(u),
    p = s(846519),
    m = s(481060),
    g = s(570140),
    I = s(578361),
    x = s(768762),
    C = s(259580),
    v = s(585483),
    N = s(981631),
    f = s(689938),
    E = s(665923);
function b(e, t, s) {
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
let P = {
    JUMP: 'jump',
    NEXT: 'next',
    PREVIOUS: 'previous'
};
((r = n || (n = {})).ARROW = 'arrow'), (r.CARET = 'caret');
class S extends (i = o.PureComponent) {
    componentDidMount() {
        v.S.subscribe(N.CkL.CAROUSEL_PREV, this.handlePrevious), v.S.subscribe(N.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        v.S.unsubscribe(N.CkL.CAROUSEL_PREV, this.handlePrevious), v.S.unsubscribe(N.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let { current: e, count: t, includeHitboxPadding: s, arrowClassName: n, paginationDotClassName: i, paginationDotSelectedClassName: a, paginationArrowIconType: r = 'arrow' } = this.props,
            o = d()(E.arrowHitbox, { [E.arrowHitboxPadding]: s }, n);
        return (0, l.jsxs)('div', {
            className: d()(E.controls, this.props.className),
            children: [
                (0, l.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: o,
                    onClick: this.handlePrevious,
                    'aria-label': f.Z.Messages.PAGINATION_PREVIOUS,
                    children:
                        'caret' === r
                            ? (0, l.jsx)(C.Z, {
                                  className: E.arrow,
                                  direction: C.Z.Directions.LEFT
                              })
                            : (0, l.jsx)(x.Z, {
                                  className: E.arrow,
                                  direction: x.Z.Directions.LEFT
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
                                className: t === e ? d()(E.dotSelected, a) : d()(E.dotNormal, i),
                                'aria-label': f.Z.Messages.PAGINATION_SLIDE_LABEL.format({ pageNumber: t + 1 })
                            },
                            'dot-'.concat(t)
                        )
                    )
                }),
                (0, l.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: o,
                    onClick: this.handleNext,
                    'aria-label': f.Z.Messages.PAGINATION_NEXT,
                    children:
                        'caret' === r
                            ? (0, l.jsx)(C.Z, {
                                  className: E.arrow,
                                  direction: C.Z.Directions.RIGHT
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
                let { onSetItem: t, onIntentionalChange: s, current: n } = this.props;
                null == s || s(n, e, P.JUMP), t(e);
            }),
            b(this, 'handleNext', () => {
                let { onIntentionalChange: e, current: t, onChangePage: s } = this.props,
                    n = s(1);
                null == e || e(t, n, P.NEXT);
            }),
            b(this, 'handlePrevious', () => {
                let { onIntentionalChange: e, current: t, onChangePage: s } = this.props,
                    n = s(-1);
                null == e || e(t, n, P.PREVIOUS);
            });
    }
}
b(S, 'defaultProps', { includeHitboxPadding: !0 });
class y extends (a = o.PureComponent) {
    componentDidMount() {
        g.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocusChange), !this.props.initialPaused && !this.state.paused && this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), g.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        let s, n, i, a;
        let r = ((s = this.props), (n = this.state), !s.initialPaused && !n.paused);
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
        let s = this.state.visibleIndex + t;
        s < 0 ? (s = e.length - 1) : s > e.length - 1 && (s = 0);
        let { onChangeItem: n } = this.props;
        null == n || n(e[s], this.state.visibleIndex, s);
        let i = t > 0 ? I.n.LEFT : I.n.RIGHT;
        return (
            this.setState({
                visibleIndex: s,
                direction: i
            }),
            s
        );
    }
    render() {
        let { items: e, renderItem: t, className: s, slideAnimatorClassName: n, slideAnimatorSpringSettings: i, slideAnimatorFadeInOut: a, paginationClassName: r, paginationArrowClassName: o, paginationArrowIconType: h, paginationDotClassName: u, paginationDotSelectedClassName: c, themedPagination: p, includeHitboxPadding: m, style: g, aspectRatio: x, children: C } = this.props,
            { visibleIndex: v } = this.state;
        return (0, l.jsxs)('div', {
            className: E.root,
            children: [
                (0, l.jsxs)('div', {
                    className: d()(E.carouselContainer, s),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, l.jsx)('div', {
                            style: { aspectRatio: x },
                            children: (0, l.jsx)(I.Z, {
                                className: d()(E.carousel, n),
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
                                paginationDotClassName: u,
                                paginationDotSelectedClassName: c
                            })
                    ]
                }),
                null != C &&
                    C({
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
                    { items: s } = this.props;
                this.changeItem(s, e - t);
            }),
            b(this, 'handleMouseEnter', () => {
                this.setState({ paused: !0 });
            }),
            b(this, 'handleMouseLeave', () => {
                this.setState({ paused: !1 });
            }),
            b(this, 'handleIntentionalChange', (e, t, s) => {
                let { items: n, onIntentionalChange: i } = this.props;
                return null == i ? void 0 : i(n[t], e, t, s);
            }),
            (this.state = {
                visibleIndex: !0 === e.randomize ? c().random(0, e.items.length - 1) : 0,
                direction: I.n.LEFT,
                paused: !1
            });
    }
}
b(y, 'defaultProps', { aspectRatio: 16 / 9 }), (t.Z = y);
