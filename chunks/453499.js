s(47120);
var n,
    a,
    i,
    r,
    l = s(735250),
    o = s(470079),
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
    b = s(665923);
function P(e, t, s) {
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
let S = {
    JUMP: 'jump',
    NEXT: 'next',
    PREVIOUS: 'previous'
};
((r = n || (n = {})).ARROW = 'arrow'), (r.CARET = 'caret');
class y extends (a = o.PureComponent) {
    componentDidMount() {
        v.S.subscribe(N.CkL.CAROUSEL_PREV, this.handlePrevious), v.S.subscribe(N.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        v.S.unsubscribe(N.CkL.CAROUSEL_PREV, this.handlePrevious), v.S.unsubscribe(N.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let { current: e, count: t, includeHitboxPadding: s, arrowClassName: n, paginationDotClassName: a, paginationDotSelectedClassName: i, paginationArrowIconType: r = 'arrow' } = this.props,
            o = d()(b.arrowHitbox, { [b.arrowHitboxPadding]: s }, n);
        return (0, l.jsxs)('div', {
            className: d()(b.controls, this.props.className),
            children: [
                (0, l.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: o,
                    onClick: this.handlePrevious,
                    'aria-label': f.Z.Messages.PAGINATION_PREVIOUS,
                    children:
                        'caret' === r
                            ? (0, l.jsx)(C.Z, {
                                  className: b.arrow,
                                  direction: C.Z.Directions.LEFT
                              })
                            : (0, l.jsx)(x.Z, {
                                  className: b.arrow,
                                  direction: x.Z.Directions.LEFT
                              })
                }),
                (0, l.jsx)('div', {
                    className: b.dots,
                    children: c().times(t, (t) =>
                        (0, l.jsx)(
                            m.Button,
                            {
                                look: m.Button.Looks.BLANK,
                                size: m.Button.Sizes.NONE,
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? d()(b.dotSelected, i) : d()(b.dotNormal, a),
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
                                  className: b.arrow,
                                  direction: C.Z.Directions.RIGHT
                              })
                            : (0, l.jsx)(x.Z, {
                                  className: b.arrow,
                                  direction: x.Z.Directions.RIGHT
                              })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            P(this, 'handleDotClick', (e) => {
                let { onSetItem: t, onIntentionalChange: s, current: n } = this.props;
                null == s || s(n, e, S.JUMP), t(e);
            }),
            P(this, 'handleNext', () => {
                let { onIntentionalChange: e, current: t, onChangePage: s } = this.props,
                    n = s(1);
                null == e || e(t, n, S.NEXT);
            }),
            P(this, 'handlePrevious', () => {
                let { onIntentionalChange: e, current: t, onChangePage: s } = this.props,
                    n = s(-1);
                null == e || e(t, n, S.PREVIOUS);
            });
    }
}
P(y, 'defaultProps', { includeHitboxPadding: !0 });
class E extends (i = o.PureComponent) {
    componentDidMount() {
        g.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocusChange), !this.props.initialPaused && !this.state.paused && this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), g.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        let s, n, a, i;
        let r = ((s = this.props), (n = this.state), !s.initialPaused && !n.paused);
        let l = ((a = e), (i = t), !a.initialPaused && !i.paused);
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
        let a = t > 0 ? I.n.LEFT : I.n.RIGHT;
        return (
            this.setState({
                visibleIndex: s,
                direction: a
            }),
            s
        );
    }
    render() {
        let { items: e, renderItem: t, className: s, slideAnimatorClassName: n, slideAnimatorSpringSettings: a, slideAnimatorFadeInOut: i, paginationClassName: r, paginationArrowClassName: o, paginationArrowIconType: h, paginationDotClassName: u, paginationDotSelectedClassName: c, themedPagination: p, includeHitboxPadding: m, style: g, aspectRatio: x, children: C } = this.props,
            { visibleIndex: v } = this.state;
        return (0, l.jsxs)('div', {
            className: b.root,
            children: [
                (0, l.jsxs)('div', {
                    className: d()(b.carouselContainer, s),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, l.jsx)('div', {
                            style: { aspectRatio: x },
                            children: (0, l.jsx)(I.Z, {
                                className: d()(b.carousel, n),
                                step: v,
                                direction: this.getCurrentDirection(),
                                springSettings: a,
                                fadeInOut: i,
                                children: t(e[v], v)
                            })
                        }),
                        e.length > 1 &&
                            (0, l.jsx)(y, {
                                className: d()(r, p ? b.themedPagination : b.pagination),
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
                    { items: s } = this.props;
                this.changeItem(s, e - t);
            }),
            P(this, 'handleMouseEnter', () => {
                this.setState({ paused: !0 });
            }),
            P(this, 'handleMouseLeave', () => {
                this.setState({ paused: !1 });
            }),
            P(this, 'handleIntentionalChange', (e, t, s) => {
                let { items: n, onIntentionalChange: a } = this.props;
                return null == a ? void 0 : a(n[t], e, t, s);
            }),
            (this.state = {
                visibleIndex: !0 === e.randomize ? c().random(0, e.items.length - 1) : 0,
                direction: I.n.LEFT,
                paused: !1
            });
    }
}
P(E, 'defaultProps', { aspectRatio: 16 / 9 }), (t.Z = E);
