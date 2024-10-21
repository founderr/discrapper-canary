t.d(n, {
    n: function () {
        return a;
    }
});
var i,
    a,
    r = t(200651),
    o = t(192379),
    s = t(120356),
    l = t.n(s),
    c = t(748780),
    d = t(215569),
    u = t(189682);
((i = a || (a = {}))[(i.RIGHT = -1)] = 'RIGHT'), (i[(i.LEFT = 1)] = 'LEFT');
let _ = {
    friction: 7,
    tension: 40,
    clamp: !0
};
class p extends o.PureComponent {
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
        var n, t, i;
        super(e),
            (n = this),
            (i = void 0),
            (t = '_animated') in n
                ? Object.defineProperty(n, t, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (n[t] = i),
            (this._animated = new c.Z.Value(-1 * e.direction));
    }
}
n.Z = (e) => {
    let { children: n, step: t, direction: i, className: a, springSettings: o = _, fadeInOut: s = !1 } = e;
    return (0, r.jsx)(d.W, {
        component: 'div',
        className: l()(u.animator, a),
        children: (0, r.jsx)(
            p,
            {
                direction: i,
                springSettings: o,
                fadeInOut: s,
                children: n
            },
            t
        )
    });
};
