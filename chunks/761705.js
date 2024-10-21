s.d(t, {
    Z: function () {
        return b;
    }
}),
    s(47120),
    s(653041);
var n,
    i = s(200651),
    a = s(192379),
    r = s(120356),
    l = s.n(r),
    o = s(299608),
    h = s.n(o),
    d = s(748780),
    u = s(215569),
    c = s(376641),
    p = s(714338),
    m = s(134432),
    g = s(44488),
    I = s(585483),
    x = s(981631),
    C = s(31185);
function v(e, t, s) {
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
let N = {
    friction: 10,
    tension: 100
};
function f(e, t) {
    return ((e % t) + t) % t;
}
class E extends a.Component {
    componentWillEnter(e) {
        let { directionHistory: t } = this.props,
            { translate: s, opacity: n } = this.state;
        s.setValue(t[t.length - 1]),
            n.setValue(0),
            e(),
            d.Z.parallel([
                d.Z.timing(n, {
                    toValue: 1,
                    easing: d.Z.Easing.out(d.Z.Easing.linear),
                    duration: 200
                }),
                d.Z.spring(s, {
                    toValue: 0,
                    ...N
                })
            ]).start();
    }
    componentWillLeave(e) {
        let { directionHistory: t } = this.props,
            { opacity: s, translate: n } = this.state;
        d.Z.parallel([
            d.Z.timing(s, {
                toValue: 0,
                easing: d.Z.Easing.in(d.Z.Easing.linear),
                duration: 200
            }),
            d.Z.spring(n, {
                toValue: -1 * t[t.length - 1],
                ...N
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
            className: l()(C.slide, t),
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
class b extends (n = a.Component) {
    componentDidMount() {
        this.preloadNextImages(), p.Z.disable(), p.Z.enableTemp(c.P), I.S.subscribe(x.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), I.S.subscribe(x.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    componentWillUnmount() {
        p.Z.disableTemp(), I.S.unsubscribe(x.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), I.S.unsubscribe(x.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled);
    }
    preloadNextImages() {
        var e, t;
        let { currentIndex: s } = this.state,
            { items: n } = this.props;
        let i = (((s + 1) % (e = n.length)) + e) % e;
        let a = (((s - 1) % (t = n.length)) + t) % t;
        this.preloadImage(n[i]), this.preloadImage(n[a]);
    }
    preloadImage(e) {
        (0, m.po)(e.src);
    }
    componentDidUpdate(e, t) {
        let { currentIndex: s } = this.state;
        s !== t.currentIndex && this.preloadNextImages();
    }
    navigateTo(e) {
        var t, s, n;
        let { directionHistory: i, currentIndex: a } = this.state;
        i.push(e - a),
            (e = ((e % (n = this.props.items.length)) + n) % n),
            this.setState({
                currentIndex: e,
                directionHistory: i
            }),
            null === (t = (s = this.props).onIndexChange) || void 0 === t || t.call(s, e);
    }
    render() {
        var e;
        let { className: t } = this.props,
            { currentIndex: s, directionHistory: n } = this.state,
            { modalCarouselItemClassName: a } = this.props,
            r = this.props.items[s],
            o = this.props.items;
        return (0, i.jsxs)(u.W, {
            component: 'div',
            className: l()(C.wrapper, t),
            children: [
                o.length > 1
                    ? (0, i.jsx)(g.am, {
                          className: C.navPrev,
                          onClick: this.gotoPrev
                      })
                    : null,
                null !== (e = r.component) && void 0 !== e
                    ? e
                    : (0, i.jsx)(
                          E,
                          {
                              item: r,
                              directionHistory: n,
                              className: a
                          },
                          r.src
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
