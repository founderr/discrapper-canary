n.d(t, {
    gN: function () {
        return g;
    }
}),
    n(47120),
    n(411104);
var a,
    i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(748780),
    d = n(112724),
    u = n(744184);
function c(e, t, n) {
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
let h = {
        tension: 7,
        friction: 5,
        overshootClamping: !0
    },
    p = 'center',
    m = 'right';
function g(e, t) {
    return ((e % t) + t) % t;
}
class f extends (a = r.Component) {
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex);
    }
    componentDidUpdate(e) {
        let { align: t, animate: n, currentIndex: a, items: i, width: r } = this.props,
            s = g(a, i.length),
            l = g(e.currentIndex, i.length);
        (s !== l || i.length !== e.items.length) && this.updateAnimatedIndex(s, l),
            r !== e.width
                ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t))
                : n &&
                  (t !== e.align || s !== l) &&
                  o.Z.spring(this.animatedAlignmentOffset, {
                      ...h,
                      toValue: this.getAlignmentOffset(t)
                  }).start();
    }
    getAlignmentOffset(e) {
        let { width: t, itemSize: n, currentIndex: a, gutter: i, items: r } = this.props,
            s = i * g(a, r.length) * 2;
        return e === p ? (t - n.width) / 2 + s : e === m ? t - n.width - i + s : i + s;
    }
    getCarouselTranslate() {
        let { itemSize: e, edgeItems: t } = this.props;
        return t * (e.width + e.margin);
    }
    animateToIndex(e, t) {
        let { animatedIndex: n } = this,
            { items: a, edgeItems: i } = this.props;
        i > 0 && (0 === e && t === a.length - 1 ? n.setValue(-1) : 0 === t && e === a.length - 1 && a.length > 2 && n.setValue(a.length)),
            o.Z.spring(n, {
                ...h,
                toValue: e
            }).start();
    }
    updateAnimatedIndex(e, t) {
        let { animatedIndex: n, animatedOpacity: a } = this,
            { animate: i } = this.props;
        i
            ? this.animateToIndex(e, t)
            : o.Z.timing(a, {
                  fromValue: 1,
                  toValue: 0,
                  duration: 100
              }).start(() => {
                  n.setValue(e),
                      o.Z.timing(a, {
                          fromValue: 0,
                          toValue: 1,
                          duration: 100
                      }).start();
              });
    }
    renderSingleItem() {
        let { renderItem: e, items: t, itemSize: n, className: a } = this.props;
        return (0, i.jsx)('div', {
            className: l()(u.singleItemWrapper, u.viewport, a),
            children: (0, i.jsx)('div', {
                className: u.singleItem,
                style: {
                    width: n.width,
                    height: n.height
                },
                children: e(t[0], 0)
            })
        });
    }
    renderCarouselItems() {
        let e;
        let { animatedIndex: t, animatedAlignmentOffset: n, animatedOpacity: a } = this,
            { renderItem: r, items: s, itemSize: l, edgeItems: d, gutter: c } = this.props,
            { margin: h, width: p } = l,
            m = this.getCarouselTranslate(),
            g = this.getItemStyle(),
            f = (e = d > 0 ? [...s.slice(-d), ...s, ...s.slice(0, d)] : s).map((e, t) =>
                (0, i.jsx)(
                    'div',
                    {
                        style: g,
                        className: u.item,
                        children: r(e, t - d, this.interpolateValueForItem(t - d))
                    },
                    t
                )
            );
        return (0, i.jsx)(o.Z.div, {
            className: u.carousel,
            style: {
                opacity: a,
                left: o.Z.add(
                    t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-m, -h - p - m - c * (s.length - 1)]
                    }),
                    n
                )
            },
            children: f
        });
    }
    render() {
        let { items: e, className: t, hideOverflow: n } = this.props;
        if (e.length <= 0) throw Error('Carousel has no items');
        return 1 === e.length
            ? this.renderSingleItem()
            : (0, i.jsx)('div', {
                  className: l()({ [u.viewport]: n }, t),
                  children: this.renderCarouselItems()
              });
    }
    constructor(...e) {
        super(...e),
            c(this, 'animatedIndex', new o.Z.Value(this.props.currentIndex)),
            c(this, 'animatedAlignmentOffset', new o.Z.Value(this.getAlignmentOffset(this.props.align))),
            c(this, 'animatedOpacity', new o.Z.Value(1)),
            c(this, 'getItemStyle', () => {
                let {
                    itemSize: { width: e, margin: t, height: n }
                } = this.props;
                return {
                    flexBasis: e,
                    marginRight: t,
                    height: n,
                    width: e,
                    maxWidth: e
                };
            }),
            c(this, 'interpolateValueForItem', (e) =>
                this.animatedIndex.interpolate({
                    inputRange: [e - 1, e, e + 1],
                    outputRange: [0, 1, 0],
                    extrapolate: 'clamp'
                })
            );
    }
}
c(f, 'defaultProps', {
    animate: !0,
    edgeItems: 2,
    align: p,
    gutter: 0,
    hideOverflow: !0
}),
    (t.ZP = (0, d.Z)(f));
