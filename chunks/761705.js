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
    d = n(748780),
    c = n(215569),
    u = n(376641),
    p = n(714338),
    m = n(134432),
    g = n(44488),
    C = n(585483),
    x = n(981631),
    I = n(707337);
function v(e, t, n) {
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
let f = {
    friction: 10,
    tension: 100
};
function N(e, t) {
    return ((e % t) + t) % t;
}
class E extends a.Component {
    componentWillEnter(e) {
        let { directionHistory: t } = this.props,
            { translate: n, opacity: s } = this.state;
        n.setValue(t[t.length - 1]),
            s.setValue(0),
            e(),
            d.Z.parallel([
                d.Z.timing(s, {
                    toValue: 1,
                    easing: d.Z.Easing.out(d.Z.Easing.linear),
                    duration: 200
                }),
                d.Z.spring(n, {
                    toValue: 0,
                    ...f
                })
            ]).start();
    }
    componentWillLeave(e) {
        let { directionHistory: t } = this.props,
            { opacity: n, translate: s } = this.state;
        d.Z.parallel([
            d.Z.timing(n, {
                toValue: 0,
                easing: d.Z.Easing.in(d.Z.Easing.linear),
                duration: 200
            }),
            d.Z.spring(s, {
                toValue: -1 * t[t.length - 1],
                ...f
            })
        ]).start(e);
    }
    getStyle() {
        let { translate: e, opacity: t } = this.state;
        return d.Z.accelerate({
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
        return (0, i.jsx)(d.Z.img, {
            src: e.src,
            alt: '',
            className: l()(I.slide, t),
            style: this.getStyle()
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', {
                translate: new d.Z.Value(0),
                opacity: new d.Z.Value(1)
            });
    }
}
class b extends (s = a.Component) {
    componentDidMount() {
        this.preloadNextImages(), p.Z.disable(), p.Z.enableTemp(u.P), C.S.subscribe(x.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), C.S.subscribe(x.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    componentWillUnmount() {
        p.Z.disableTemp(), C.S.unsubscribe(x.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), C.S.unsubscribe(x.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
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
        return (0, i.jsxs)(c.W, {
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
                          E,
                          {
                              item: r,
                              directionHistory: s,
                              className: a
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
            v(this, 'gotoNext', () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e + 1);
            }),
            v(this, 'gotoPrev', () => {
                let { currentIndex: e } = this.state;
                this.navigateTo(e - 1);
            }),
            v(this, 'gotoNextThrottled', h()(this.gotoNext, 300)),
            v(this, 'gotoPrevThrottled', h()(this.gotoPrev, 300)),
            (this.state = {
                currentIndex: e.startWith,
                directionHistory: []
            });
    }
}
v(b, 'defaultProps', { startWith: 0 });
