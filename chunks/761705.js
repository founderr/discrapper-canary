n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120),
    n(653041);
var s,
    i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(299608),
    h = n.n(o),
    u = n(748780),
    d = n(215569),
    c = n(376641),
    p = n(714338),
    m = n(134432),
    g = n(44488),
    I = n(585483),
    C = n(981631),
    x = n(31185);
function f(e, t, n) {
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
let v = {
    friction: 10,
    tension: 100
};
function E(e, t) {
    return ((e % t) + t) % t;
}
class N extends a.Component {
    componentWillEnter(e) {
        let { directionHistory: t } = this.props,
            { translate: n, opacity: s } = this.state;
        n.setValue(t[t.length - 1]),
            s.setValue(0),
            e(),
            u.Z.parallel([
                u.Z.timing(s, {
                    toValue: 1,
                    easing: u.Z.Easing.out(u.Z.Easing.linear),
                    duration: 200
                }),
                u.Z.spring(n, {
                    toValue: 0,
                    ...v
                })
            ]).start();
    }
    componentWillLeave(e) {
        let { directionHistory: t } = this.props,
            { opacity: n, translate: s } = this.state;
        u.Z.parallel([
            u.Z.timing(n, {
                toValue: 0,
                easing: u.Z.Easing.in(u.Z.Easing.linear),
                duration: 200
            }),
            u.Z.spring(s, {
                toValue: -1 * t[t.length - 1],
                ...v
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
            className: l()(x.slide, t),
            style: this.getStyle()
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'state', {
                translate: new u.Z.Value(0),
                opacity: new u.Z.Value(1)
            });
    }
}
class b extends (s = a.Component) {
    componentDidMount() {
        this.preloadNextImages(), p.Z.disable(), p.Z.enableTemp(c.P), I.S.subscribe(C.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), I.S.subscribe(C.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    componentWillUnmount() {
        p.Z.disableTemp(), I.S.unsubscribe(C.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), I.S.unsubscribe(C.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    preloadNextImages() {
        var e, t;
        let { currentIndex: n } = this.state,
            { items: s } = this.props;
        let i = (((n + 1) % (e = s.length)) + e) % e;
        let a = (((n - 1) % (t = s.length)) + t) % t;
        this.preloadImage(s[i]), this.preloadImage(s[a]);
    }
    preloadImage(e) {
        (0, m.po)(e.src);
    }
    componentDidUpdate(e, t) {
        let { currentIndex: n } = this.state;
        n !== t.currentIndex && this.preloadNextImages();
    }
    navigateTo(e) {
        var t, n, s;
        let { directionHistory: i, currentIndex: a } = this.state;
        i.push(e - a),
            (e = ((e % (s = this.props.items.length)) + s) % s),
            this.setState({
                currentIndex: e,
                directionHistory: i
            }),
            null === (t = (n = this.props).onIndexChange) || void 0 === t || t.call(n, e);
    }
    render() {
        var e;
        let { className: t } = this.props,
            { currentIndex: n, directionHistory: s } = this.state,
            { modalCarouselItemClassName: a } = this.props,
            r = this.props.items[n],
            o = this.props.items;
        return (0, i.jsxs)(d.W, {
            component: 'div',
            className: l()(x.wrapper, t),
            children: [
                o.length > 1
                    ? (0, i.jsx)(g.am, {
                          className: x.navPrev,
                          onClick: this.gotoPrev
                      })
                    : null,
                null !== (e = r.component) && void 0 !== e
                    ? e
                    : (0, i.jsx)(
                          N,
                          {
                              item: r,
                              directionHistory: s,
                              className: a
                          },
                          r.src
                      ),
                o.length > 1
                    ? (0, i.jsx)(g.Pz, {
                          className: x.navNext,
                          onClick: this.gotoNext
                      })
                    : null
            ]
        });
    }
    constructor(e) {
        super(e),
            f(this, 'gotoNext', () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e + 1);
            }),
            f(this, 'gotoPrev', () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e - 1);
            }),
            f(this, 'gotoNextThrottled', h()(this.gotoNext, 300)),
            f(this, 'gotoPrevThrottled', h()(this.gotoPrev, 300)),
            (this.state = {
                currentIndex: e.startWith,
                directionHistory: []
            });
    }
}
f(b, 'defaultProps', { startWith: 0 });
