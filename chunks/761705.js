n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120),
    n(653041);
var a,
    i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(299608),
    d = n.n(o),
    u = n(748780),
    c = n(215569),
    h = n(376641),
    p = n(714338),
    m = n(134432),
    g = n(44488),
    f = n(585483),
    b = n(981631),
    C = n(31185);
function I(e, t, n) {
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
function v(e, t) {
    return ((e % t) + t) % t;
}
class _ extends r.Component {
    componentWillEnter(e) {
        let { directionHistory: t } = this.props,
            { translate: n, opacity: a } = this.state;
        n.setValue(t[t.length - 1]),
            a.setValue(0),
            e(),
            u.Z.parallel([
                u.Z.timing(a, {
                    toValue: 1,
                    easing: u.Z.Easing.out(u.Z.Easing.linear),
                    duration: 200
                }),
                u.Z.spring(n, {
                    toValue: 0,
                    ...x
                })
            ]).start();
    }
    componentWillLeave(e) {
        let { directionHistory: t } = this.props,
            { opacity: n, translate: a } = this.state;
        u.Z.parallel([
            u.Z.timing(n, {
                toValue: 0,
                easing: u.Z.Easing.in(u.Z.Easing.linear),
                duration: 200
            }),
            u.Z.spring(a, {
                toValue: -1 * t[t.length - 1],
                ...x
            })
        ]).start(e);
    }
    getStyle() {
        let { translate: e, opacity: t } = this.state;
        return u.Z.accelerate({
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
        return (0, i.jsx)(u.Z.img, {
            src: e.src,
            alt: '',
            className: l()(C.slide, t),
            style: this.getStyle()
        });
    }
    constructor(...e) {
        super(...e),
            I(this, 'state', {
                translate: new u.Z.Value(0),
                opacity: new u.Z.Value(1)
            });
    }
}
class P extends (a = r.Component) {
    componentDidMount() {
        this.preloadNextImages(), p.Z.disable(), p.Z.enableTemp(h.P), f.S.subscribe(b.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), f.S.subscribe(b.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    componentWillUnmount() {
        p.Z.disableTemp(), f.S.unsubscribe(b.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), f.S.unsubscribe(b.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    preloadNextImages() {
        var e, t;
        let { currentIndex: n } = this.state,
            { items: a } = this.props;
        let i = (((n + 1) % (e = a.length)) + e) % e;
        let r = (((n - 1) % (t = a.length)) + t) % t;
        this.preloadImage(a[i]), this.preloadImage(a[r]);
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
        let { directionHistory: i, currentIndex: r } = this.state;
        i.push(e - r),
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
            { modalCarouselItemClassName: r } = this.props,
            s = this.props.items[n],
            o = this.props.items;
        return (0, i.jsxs)(c.W, {
            component: 'div',
            className: l()(C.wrapper, t),
            children: [
                o.length > 1
                    ? (0, i.jsx)(g.am, {
                          className: C.navPrev,
                          onClick: this.gotoPrev
                      })
                    : null,
                null !== (e = s.component) && void 0 !== e
                    ? e
                    : (0, i.jsx)(
                          _,
                          {
                              item: s,
                              directionHistory: a,
                              className: r
                          },
                          s.src
                      ),
                o.length > 1
                    ? (0, i.jsx)(g.Pz, {
                          className: C.navNext,
                          onClick: this.gotoNext
                      })
                    : null
            ]
        });
    }
    constructor(e) {
        super(e),
            I(this, 'gotoNext', () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e + 1);
            }),
            I(this, 'gotoPrev', () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e - 1);
            }),
            I(this, 'gotoNextThrottled', d()(this.gotoNext, 300)),
            I(this, 'gotoPrevThrottled', d()(this.gotoPrev, 300)),
            (this.state = {
                currentIndex: e.startWith,
                directionHistory: []
            });
    }
}
I(P, 'defaultProps', { startWith: 0 });
