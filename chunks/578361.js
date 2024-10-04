n.d(a, {
    n: function () {
        return t;
    }
});
var i,
    t,
    r = n(735250),
    l = n(470079),
    s = n(120356),
    o = n.n(s),
    c = n(748780),
    d = n(215569),
    u = n(189682);
((i = t || (t = {}))[(i.RIGHT = -1)] = 'RIGHT'), (i[(i.LEFT = 1)] = 'LEFT');
let _ = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class p extends l.PureComponent {
    componentWillEnter(e) {
        this._animated.setValue(-this.props.direction),
            c.Z.spring(this._animated, {
                toValue: 0,
                ...this.props.springSettings
            }).start(e);
    }
    componentDidAppear() {
        this._animated.setValue(0);
    }
    componentWillLeave(e) {
        c.Z.spring(this._animated, {
            toValue: this.props.direction,
            ...this.props.springSettings
        }).start(e);
    }
    getStyle() {
        let e = c.Z.accelerate({
            transform: [
                {
                    translateX: this._animated.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', '-100%']
                    })
                }
            ]
        });
        return (
            this.props.fadeInOut &&
                (e.opacity = this._animated.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0, 1, 0]
                })),
            e
        );
    }
    render() {
        return (0, r.jsx)(c.Z.div, {
            style: this.getStyle(),
            className: u.item,
            children: this.props.children
        });
    }
    constructor(e) {
        var a, n, i;
        super(e),
            (a = this),
            (i = void 0),
            (n = '_animated') in a
                ? Object.defineProperty(a, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (a[n] = i),
            (this._animated = new c.Z.Value(-1 * e.direction));
    }
}
a.Z = (e) => {
    let { children: a, step: n, direction: i, className: t, springSettings: l = _, fadeInOut: s = !1 } = e;
    return (0, r.jsx)(d.W, {
        component: 'div',
        className: o()(u.animator, t),
        children: (0, r.jsx)(
            p,
            {
                direction: i,
                springSettings: l,
                fadeInOut: s,
                children: a
            },
            n
        )
    });
};
