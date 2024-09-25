n.d(t, {
    G0: function () {
        return I;
    },
    u$: function () {
        return T;
    }
});
var r,
    i = n(47120);
var a = n(724458);
var o = n(735250),
    s = n(470079),
    l = n(392711),
    u = n.n(l),
    c = n(748780),
    d = n(692547),
    _ = n(990021);
function E(e, t, n) {
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
let f = 12,
    h = [d.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'];
class p extends s.PureComponent {
    render() {
        let {
            props: { height: e },
            state: { backgroundColor: t }
        } = this;
        return (0, o.jsx)('div', {
            style: {
                height: e,
                backgroundColor: t
            },
            className: _.gif
        });
    }
    constructor(...e) {
        super(...e), E(this, 'state', { backgroundColor: u().sample(h) });
    }
}
class m extends (r = s.Component) {
    componentDidMount() {
        this.animateSlide();
    }
    getAnimatedStyle() {
        let {
            props: { columns: e },
            state: { translateY: t }
        } = this;
        return {
            width: ''.concat(100 / e, '%'),
            transform: [
                {
                    translateY: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0px', '1px']
                    })
                }
            ]
        };
    }
    render() {
        let { blocks: e } = this.state;
        return (0, o.jsxs)(c.Z.div, {
            className: _.column,
            style: this.getAnimatedStyle(),
            children: [e.map((e, t) => (0, o.jsx)(p, { height: e }, t)), e.map((e, t) => (0, o.jsx)(p, { height: e }, 'alt'.concat(t)))]
        });
    }
    constructor(e) {
        super(e),
            E(this, 'animateSlide', () => {
                let {
                        props: { direction: e },
                        state: { translateY: t, height: n }
                    } = this,
                    r = e > 0 ? 0 : -n / 2 + f,
                    i = e > 0 ? -n / 2 + f : 0;
                t.setValue(r),
                    c.Z.timing(t, {
                        toValue: i,
                        duration: 800,
                        easing: c.Z.Easing.linear
                    }).start(this.animateSlide);
            });
        let t = Array(10)
            .fill(null)
            .map(() => u().random(40, 150));
        this.state = {
            blocks: t,
            height: 2 * t.reduce((e, t) => e + t + f, f),
            translateY: new c.Z.Value(0)
        };
    }
}
E(m, 'defaultProps', { direction: -1 });
let I = (e) => {
    let { columns: t } = e;
    return (0, o.jsx)('div', {
        className: _.column,
        style: { width: ''.concat(100 / t, '%') },
        children: [, , , ,].fill(null).map((e, t) => (0, o.jsx)('div', { className: _.categoryLoader }, t))
    });
};
class T extends s.PureComponent {
    render() {
        let { columns: e, renderColumn: t } = this.props;
        return (0, o.jsx)('div', {
            className: _.container,
            children: Array(e)
                .fill(null)
                .map((n, r) => t(e, r))
        });
    }
}
