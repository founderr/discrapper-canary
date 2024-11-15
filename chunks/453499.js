i(47120);
var n,
    a,
    r,
    o,
    l = i(200651),
    s = i(192379),
    c = i(120356),
    d = i.n(c),
    u = i(392711),
    h = i.n(u),
    p = i(846519),
    m = i(481060),
    _ = i(570140),
    f = i(578361),
    g = i(768762),
    x = i(259580),
    C = i(585483),
    b = i(981631),
    I = i(388032),
    v = i(644279);
function N(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
let L = {
    JUMP: 'jump',
    NEXT: 'next',
    PREVIOUS: 'previous'
};
((o = n || (n = {})).ARROW = 'arrow'), (o.CARET = 'caret');
class T extends (a = s.PureComponent) {
    componentDidMount() {
        C.S.subscribe(b.CkL.CAROUSEL_PREV, this.handlePrevious), C.S.subscribe(b.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        C.S.unsubscribe(b.CkL.CAROUSEL_PREV, this.handlePrevious), C.S.unsubscribe(b.CkL.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let { current: e, count: t, includeHitboxPadding: i, arrowClassName: n, paginationDotClassName: a, paginationDotSelectedClassName: r, paginationArrowIconType: o = 'arrow' } = this.props,
            s = d()(v.arrowHitbox, { [v.arrowHitboxPadding]: i }, n);
        return (0, l.jsxs)('div', {
            className: d()(v.controls, this.props.className),
            children: [
                (0, l.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: s,
                    onClick: this.handlePrevious,
                    'aria-label': I.intl.string(I.t.vgfxaG),
                    children:
                        'caret' === o
                            ? (0, l.jsx)(x.Z, {
                                  className: v.arrow,
                                  direction: x.Z.Directions.LEFT
                              })
                            : (0, l.jsx)(g.Z, {
                                  className: v.arrow,
                                  direction: g.Z.Directions.LEFT
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
                                className: t === e ? d()(v.dotSelected, r) : d()(v.dotNormal, a),
                                'aria-label': I.intl.formatToPlainString(I.t['2SXOrK'], { pageNumber: t + 1 })
                            },
                            'dot-'.concat(t)
                        )
                    )
                }),
                (0, l.jsx)(m.Button, {
                    look: m.Button.Looks.BLANK,
                    className: s,
                    onClick: this.handleNext,
                    'aria-label': I.intl.string(I.t.XiOHRU),
                    children:
                        'caret' === o
                            ? (0, l.jsx)(x.Z, {
                                  className: v.arrow,
                                  direction: x.Z.Directions.RIGHT
                              })
                            : (0, l.jsx)(g.Z, {
                                  className: v.arrow,
                                  direction: g.Z.Directions.RIGHT
                              })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'handleDotClick', (e) => {
                let { onSetItem: t, onIntentionalChange: i, current: n } = this.props;
                null == i || i(n, e, L.JUMP), t(e);
            }),
            N(this, 'handleNext', () => {
                let { onIntentionalChange: e, current: t, onChangePage: i } = this.props,
                    n = i(1);
                null == e || e(t, n, L.NEXT);
            }),
            N(this, 'handlePrevious', () => {
                let { onIntentionalChange: e, current: t, onChangePage: i } = this.props,
                    n = i(-1);
                null == e || e(t, n, L.PREVIOUS);
            });
    }
}
N(T, 'defaultProps', { includeHitboxPadding: !0 });
class j extends (r = s.PureComponent) {
    componentDidMount() {
        _.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocusChange), !this.props.initialPaused && !this.state.paused && this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), _.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        let i, n, a, r;
        let o = ((i = this.props), (n = this.state), !i.initialPaused && !n.paused);
        let l = ((a = e), (r = t), !a.initialPaused && !r.paused);
        o && !l ? this.startTimer() : !o && l && this.stopTimer();
        let { items: s } = this.props,
            { visibleIndex: c } = this.state;
        null == s[c] && this.changeItem(s, 1);
    }
    startTimer() {
        if (null != this.props.delay) this.timer.start(this.props.delay, this.nextItem);
    }
    stopTimer() {
        if (null != this.props.delay) this.timer.stop();
    }
    changeItem(e, t) {
        let i = this.state.visibleIndex + t;
        i < 0 ? (i = e.length - 1) : i > e.length - 1 && (i = 0);
        let { onChangeItem: n } = this.props;
        null == n || n(e[i], this.state.visibleIndex, i);
        let a = t > 0 ? f.n.LEFT : f.n.RIGHT;
        return (
            this.setState({
                visibleIndex: i,
                direction: a
            }),
            i
        );
    }
    render() {
        let { items: e, renderItem: t, className: i, slideAnimatorClassName: n, slideAnimatorSpringSettings: a, slideAnimatorFadeInOut: r, paginationClassName: o, paginationArrowClassName: s, paginationArrowIconType: c, paginationDotClassName: u, paginationDotSelectedClassName: h, themedPagination: p, includeHitboxPadding: m, style: _, aspectRatio: g, children: x } = this.props,
            { visibleIndex: C } = this.state;
        return (0, l.jsxs)('div', {
            className: v.root,
            children: [
                (0, l.jsxs)('div', {
                    className: d()(v.carouselContainer, i),
                    style: _,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, l.jsx)('div', {
                            style: { aspectRatio: g },
                            children: (0, l.jsx)(f.Z, {
                                className: d()(v.carousel, n),
                                step: C,
                                direction: this.getCurrentDirection(),
                                springSettings: a,
                                fadeInOut: r,
                                children: t(e[C], C)
                            })
                        }),
                        e.length > 1 &&
                            (0, l.jsx)(T, {
                                className: d()(o, p ? v.themedPagination : v.pagination),
                                arrowClassName: s,
                                includeHitboxPadding: m,
                                current: C,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: c,
                                paginationDotClassName: u,
                                paginationDotSelectedClassName: h
                            })
                    ]
                }),
                null != x &&
                    x({
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
                    { items: i } = this.props;
                this.changeItem(i, e - t);
            }),
            N(this, 'handleMouseEnter', () => {
                this.setState({ paused: !0 });
            }),
            N(this, 'handleMouseLeave', () => {
                this.setState({ paused: !1 });
            }),
            N(this, 'handleIntentionalChange', (e, t, i) => {
                let { items: n, onIntentionalChange: a } = this.props;
                return null == a ? void 0 : a(n[t], e, t, i);
            }),
            (this.state = {
                visibleIndex: !0 === e.randomize ? h().random(0, e.items.length - 1) : 0,
                direction: f.n.LEFT,
                paused: !1
            });
    }
}
N(j, 'defaultProps', { aspectRatio: 16 / 9 }), (t.Z = j);
