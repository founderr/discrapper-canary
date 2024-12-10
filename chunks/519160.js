n.d(t, {
    gN: function () {
        return g;
    }
}),
    n(47120),
    n(411104);
var s,
    i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(748780),
    h = n(112724),
    d = n(72714);
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
let u = {
        tension: 7,
        friction: 5,
        overshootClamping: !0
    },
    p = 'center',
    m = 'right';
function g(e, t) {
    return ((e % t) + t) % t;
}
class C extends (s = a.Component) {
    componentDidMount() {
        this.animatedIndex.setValue(this.props.currentIndex);
    }
    componentDidUpdate(e) {
        let { align: t, animate: n, currentIndex: s, items: i, width: a } = this.props,
            r = g(s, i.length),
            l = g(e.currentIndex, i.length);
        (r !== l || i.length !== e.items.length) && this.updateAnimatedIndex(r, l),
            a !== e.width
                ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t))
                : n &&
                  (t !== e.align || r !== l) &&
                  o.Z.spring(this.animatedAlignmentOffset, {
                      ...u,
                      toValue: this.getAlignmentOffset(t)
                  }).start();
    }
    getAlignmentOffset(e) {
        let { width: t, itemSize: n, currentIndex: s, gutter: i, items: a } = this.props,
            r = i * g(s, a.length) * 2;
        return e === p ? (t - n.width) / 2 + r : e === m ? t - n.width - i + r : i + r;
    }
    getCarouselTranslate() {
        let { itemSize: e, edgeItems: t } = this.props;
        return t * (e.width + e.margin);
    }
    animateToIndex(e, t) {
        let { animatedIndex: n } = this,
            { items: s, edgeItems: i } = this.props;
        i > 0 && (0 === e && t === s.length - 1 ? n.setValue(-1) : 0 === t && e === s.length - 1 && s.length > 2 && n.setValue(s.length)),
            o.Z.spring(n, {
                ...u,
                toValue: e
            }).start();
    }
    updateAnimatedIndex(e, t) {
        let { animatedIndex: n, animatedOpacity: s } = this,
            { animate: i } = this.props;
        i
            ? this.animateToIndex(e, t)
            : o.Z.timing(s, {
                  fromValue: 1,
                  toValue: 0,
                  duration: 100
              }).start(() => {
                  n.setValue(e),
                      o.Z.timing(s, {
                          fromValue: 0,
                          toValue: 1,
                          duration: 100
                      }).start();
              });
    }
    renderSingleItem() {
        let { renderItem: e, items: t, itemSize: n, className: s } = this.props;
        return (0, i.jsx)('div', {
            className: l()(d.singleItemWrapper, d.viewport, s),
            children: (0, i.jsx)('div', {
                className: d.singleItem,
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
        let { animatedIndex: t, animatedAlignmentOffset: n, animatedOpacity: s } = this,
            { renderItem: a, items: r, itemSize: l, edgeItems: h, gutter: c } = this.props,
            { margin: u, width: p } = l,
            m = this.getCarouselTranslate(),
            g = this.getItemStyle(),
            C = (e = h > 0 ? [...r.slice(-h), ...r, ...r.slice(0, h)] : r).map((e, t) =>
                (0, i.jsx)(
                    'div',
                    {
                        style: g,
                        className: d.item,
                        children: a(e, t - h, this.interpolateValueForItem(t - h))
                    },
                    t
                )
            );
        return (0, i.jsx)(o.Z.div, {
            className: d.carousel,
            style: {
                opacity: s,
                left: o.Z.add(
                    t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-m, -u - p - m - c * (r.length - 1)]
                    }),
                    n
                )
            },
            children: C
        });
    }
    render() {
        let { items: e, className: t, hideOverflow: n } = this.props;
        if (e.length <= 0) throw Error('Carousel has no items');
        return 1 === e.length
            ? this.renderSingleItem()
            : (0, i.jsx)('div', {
                  className: l()({ [d.viewport]: n }, t),
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
c(C, 'defaultProps', {
    animate: !0,
    edgeItems: 2,
    align: p,
    gutter: 0,
    hideOverflow: !0
}),
    (t.ZP = (0, h.Z)(C));
