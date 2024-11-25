n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120),
    n(653041);
var a,
    i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(299608),
    d = n.n(o),
    c = n(748780),
    u = n(215569),
    h = n(376641),
    p = n(714338),
    m = n(134432),
    g = n(44488),
    b = n(585483),
    f = n(981631),
    I = n(707337);
function C(e, t, n) {
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
let x = {
    friction: 10,
    tension: 100
};
function _(e, t) {
    return ((e % t) + t) % t;
}
class v extends s.Component {
    componentWillEnter(e) {
        let { directionHistory: t } = this.props,
            { translate: n, opacity: a } = this.state;
        n.setValue(t[t.length - 1]),
            a.setValue(0),
            e(),
            c.Z.parallel([
                c.Z.timing(a, {
                    toValue: 1,
                    easing: c.Z.Easing.out(c.Z.Easing.linear),
                    duration: 200
                }),
                c.Z.spring(n, {
                    toValue: 0,
                    ...x
                })
            ]).start();
    }
    componentWillLeave(e) {
        let { directionHistory: t } = this.props,
            { opacity: n, translate: a } = this.state;
        c.Z.parallel([
            c.Z.timing(n, {
                toValue: 0,
                easing: c.Z.Easing.in(c.Z.Easing.linear),
                duration: 200
            }),
            c.Z.spring(a, {
                toValue: -1 * t[t.length - 1],
                ...x
            })
        ]).start(e);
    }
    getStyle() {
        let { translate: e, opacity: t } = this.state;
        return c.Z.accelerate({
            opacity: t,
            transform: [
                {
                    translateX: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0px', '300px']
                    })
                }
            ]
        });
    }
    render() {
        let { item: e } = this.props,
            { className: t } = this.props;
        return (0, i.jsx)(c.Z.img, {
            src: e.src,
            alt: '',
            className: l()(I.slide, t),
            style: this.getStyle()
        });
    }
    constructor(...e) {
        super(...e),
            C(this, 'state', {
                translate: new c.Z.Value(0),
                opacity: new c.Z.Value(1)
            });
    }
}
class N extends (a = s.Component) {
    componentDidMount() {
        this.preloadNextImages(), p.Z.disable(), p.Z.enableTemp(h.P), b.S.subscribe(f.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), b.S.subscribe(f.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    componentWillUnmount() {
        p.Z.disableTemp(), b.S.unsubscribe(f.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), b.S.unsubscribe(f.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    preloadNextImages() {
        var e, t;
        let { currentIndex: n } = this.state,
            { items: a } = this.props;
        let i = (((n + 1) % (e = a.length)) + e) % e;
        let s = (((n - 1) % (t = a.length)) + t) % t;
        this.preloadImage(a[i]), this.preloadImage(a[s]);
    }
    preloadImage(e) {
        (0, m.po)(e.src);
    }
    componentDidUpdate(e, t) {
        let { currentIndex: n } = this.state;
        n !== t.currentIndex && this.preloadNextImages();
    }
    navigateTo(e) {
        var t, n, a;
        let { directionHistory: i, currentIndex: s } = this.state;
        i.push(e - s),
            (e = ((e % (a = this.props.items.length)) + a) % a),
            this.setState({
                currentIndex: e,
                directionHistory: i
            }),
            null === (t = (n = this.props).onIndexChange) || void 0 === t || t.call(n, e);
    }
    render() {
        var e;
        let { className: t } = this.props,
            { currentIndex: n, directionHistory: a } = this.state,
            { modalCarouselItemClassName: s } = this.props,
            r = this.props.items[n],
            o = this.props.items;
        return (0, i.jsxs)(u.W, {
            component: 'div',
            className: l()(I.wrapper, t),
            children: [
                o.length > 1
                    ? (0, i.jsx)(g.am, {
                          className: I.navPrev,
                          onClick: this.gotoPrev
                      })
                    : null,
                null !== (e = r.component) && void 0 !== e
                    ? e
                    : (0, i.jsx)(
                          v,
                          {
                              item: r,
                              directionHistory: a,
                              className: s
                          },
                          r.src
                      ),
                o.length > 1
                    ? (0, i.jsx)(g.Pz, {
                          className: I.navNext,
                          onClick: this.gotoNext
                      })
                    : null
            ]
        });
    }
    constructor(e) {
        super(e),
            C(this, 'gotoNext', () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e + 1);
            }),
            C(this, 'gotoPrev', () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e - 1);
            }),
            C(this, 'gotoNextThrottled', d()(this.gotoNext, 300)),
            C(this, 'gotoPrevThrottled', d()(this.gotoPrev, 300)),
            (this.state = {
                currentIndex: e.startWith,
                directionHistory: []
            });
    }
}
C(N, 'defaultProps', { startWith: 0 });
