n.d(t, {
    Z: function () {
        return f;
    },
    y: function () {
        return E;
    }
});
var r,
    i,
    a = n(735250),
    o = n(470079),
    s = n(392711),
    l = n.n(s),
    u = n(748780),
    c = n(451478);
function d(e, t, n) {
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
function _(e, t) {
    return {
        toValue: e,
        duration: null != t ? t : 300,
        easing: u.Z.Easing.inOut(u.Z.Easing.back())
    };
}
function E(e, t, n) {
    if (null != t) {
        let r = Math.ceil(Math.log10(e + 1));
        return null != n && n > 0 ? Math.min(r, n) * t : r * t;
    }
}
!(function (e) {
    (e[(e.ABOVE = 0)] = 'ABOVE'), (e[(e.VISIBLE = 1)] = 'VISIBLE'), (e[(e.BELOW = 2)] = 'BELOW');
})(r || (r = {}));
class f extends (i = o.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        let { prevValue: n, currValue: r, nextValue: i } = t;
        return null == n && r !== e.value
            ? {
                  prevValue: c.Z.isFocused() ? r : null,
                  currValue: e.value
              }
            : null != i && i !== e.value
              ? { nextValue: e.value }
              : null;
    }
    componentDidUpdate(e, t) {
        let { prevValue: n, currValue: r } = this.state;
        n !== t.prevValue && null != n && this.animateBetween(n, r);
    }
    animateBetween(e, t) {
        let n;
        let { forcePosition: r, animationSpeed: i } = this.props;
        this.prevAnimate.setValue(1), null != r ? (0 === r ? (this.currAnimate.setValue(0), (n = 2)) : 2 === r && (this.currAnimate.setValue(2), (n = 0))) : e > t ? (this.currAnimate.setValue(0), (n = 2)) : (this.currAnimate.setValue(2), (n = 0)), u.Z.parallel([u.Z.timing(this.prevAnimate, _(n, i)), u.Z.timing(this.currAnimate, _(1, i))]).start(this.animateNext);
    }
    getAnimatedStyle(e) {
        let { animationColor: t } = this.props;
        return {
            transform: [
                {
                    translateY: e.interpolate({
                        inputRange: [0, 1, 2],
                        outputRange: ['-100%', '0%', '100%']
                    })
                }
            ],
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            ...(null != t && { color: t })
        };
    }
    getMinWidth(e) {
        let { digitWidth: t, padStartLength: n } = this.props;
        return E(e, t, n);
    }
    padValue(e) {
        let { padStartLength: t } = this.props;
        return null != t ? String(e).padStart(t, '0') : e;
    }
    render() {
        let { prevValue: e, currValue: t } = this.state,
            { color: n, formatString: r } = this.props,
            i = l().omit(this.props, ['value', 'digitWidth', 'padStartLength', 'forcePosition']);
        if (null == e)
            return (0, a.jsx)('div', {
                ...i,
                style: {
                    color: n,
                    minWidth: this.getMinWidth(t)
                },
                children: null != r ? r(this.padValue(t)) : this.padValue(t)
            });
        let o = Math.max(e, t);
        return (0, a.jsxs)('div', {
            ...i,
            style: {
                color: n,
                position: 'relative',
                overflow: 'hidden'
            },
            children: [
                (0, a.jsx)('div', {
                    style: {
                        visibility: 'hidden',
                        minWidth: this.getMinWidth(o)
                    },
                    children: this.padValue(o)
                }),
                (0, a.jsx)(u.Z.div, {
                    style: {
                        color: n,
                        ...this.getAnimatedStyle(this.prevAnimate)
                    },
                    children: null != r ? r(this.padValue(e)) : this.padValue(e)
                }),
                (0, a.jsx)(u.Z.div, {
                    style: {
                        color: n,
                        ...this.getAnimatedStyle(this.currAnimate)
                    },
                    children: null != r ? r(this.padValue(t)) : this.padValue(t)
                })
            ]
        });
    }
    constructor(e) {
        super(e),
            d(this, 'prevAnimate', void 0),
            d(this, 'currAnimate', void 0),
            d(this, 'animateNext', () => {
                let { currValue: e, nextValue: t } = this.state;
                null != t
                    ? this.setState({
                          prevValue: c.Z.isFocused() ? e : null,
                          currValue: t,
                          nextValue: null
                      })
                    : this.setState({ prevValue: null });
            }),
            (this.state = {
                prevValue: null,
                currValue: e.value,
                nextValue: null
            }),
            (this.prevAnimate = new u.Z.Value(0)),
            (this.currAnimate = new u.Z.Value(1));
    }
}
d(f, 'Positions', r);
