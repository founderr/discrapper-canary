var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(748780),
    c = n(230333);
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
let _ = {
        friction: 14,
        tension: 200
    },
    E = {
        DURATION: 'DURATION',
        VOLUME: 'VOLUME'
    };
function f(e) {
    let t = 0 | e,
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
class h extends (r = o.Component) {
    componentDidMount() {
        let { previewWidth: e, animatedProgress: t } = this.state;
        (this._previewId = e.addListener(this.handlePreviewChange)), (this._progressId = t.addListener(this.handleAnimatedChange));
    }
    componentWillUnmount() {
        let { previewWidth: e, animatedProgress: t } = this.state;
        e.removeListener(this._previewId), t.removeListener(this._progressId), window.removeEventListener('mouseup', this.handleDragEnd, !1), window.removeEventListener('mousemove', this.handleDragMove, !1);
    }
    componentDidUpdate(e, t) {
        let { dragging: n, previewWidth: r, animatedProgress: i } = this.state;
        !n && t.dragging && r.setValue(i._value);
    }
    setGrabber(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            { animatedProgress: n } = this.state;
        t
            ? u.Z.spring(n, {
                  toValue: e,
                  ..._
              }).start()
            : n.setValue(e);
    }
    calculatePercentage(e, t) {
        let {
            wrapper: n,
            props: { type: r }
        } = this;
        if (null == n) return 0;
        let { left: i, width: a, bottom: o, height: s } = n.getBoundingClientRect();
        return Math.min(1, Math.max(0, r === E.VOLUME ? (o - t) / s : (e - i) / a));
    }
    render() {
        let { buffers: e, type: t, className: n, sliderClassName: r } = this.props,
            { dragging: i, previewWidth: o, animatedProgress: s } = this.state,
            d = i ? s : o;
        return (0, a.jsx)('div', {
            className: l()(n, t === E.VOLUME ? c.vertical : c.horizontal),
            children: (0, a.jsx)('div', {
                className: l()(r, i ? c.mediaBarInteractionDragging : c.mediaBarInteraction, t === E.VOLUME ? c.mediaBarInteractionVolume : null),
                onMouseDown: this.handleDragStart,
                onMouseMove: this.handleMouseMove,
                ref: (e) => (this.wrapper = e),
                children: (0, a.jsxs)('div', {
                    className: l()(c.mediaBarWrapper, t === E.VOLUME ? c.mediaBarWrapperVolume : null),
                    children: [
                        null != e
                            ? e.map((e, t) => {
                                  let [n, r] = e;
                                  return (0, a.jsx)(
                                      'div',
                                      {
                                          className: c.buffer,
                                          style: {
                                              width: ''.concat(100 * r, '%'),
                                              left: ''.concat(100 * n, '%')
                                          }
                                      },
                                      t
                                  );
                              })
                            : null,
                        t === E.DURATION
                            ? (0, a.jsx)(u.Z.div, {
                                  className: c.mediaBarPreview,
                                  style: {
                                      width: o.interpolate({
                                          inputRange: [0, 1],
                                          outputRange: ['0%', '100%']
                                      })
                                  }
                              })
                            : null,
                        (0, a.jsx)(u.Z.div, {
                            className: c.mediaBarProgress,
                            style: {
                                width: s.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0%', '100%']
                                })
                            },
                            children: (0, a.jsx)('span', { className: c.mediaBarGrabber })
                        }),
                        t === E.DURATION
                            ? (0, a.jsx)(u.Z.div, {
                                  ref: this.setBubbleRef,
                                  className: c.bubble,
                                  style: {
                                      left: d.interpolate({
                                          inputRange: [0, 1],
                                          outputRange: ['0%', '100%']
                                      })
                                  }
                              })
                            : null
                    ]
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'state', {
                animatedProgress: new u.Z.Value(0),
                dragging: !1,
                offsetLeft: 0,
                offsetWidth: 0,
                previewWidth: new u.Z.Value(0)
            }),
            d(this, 'wrapper', void 0),
            d(this, 'bubble', void 0),
            d(this, '_previewId', void 0),
            d(this, '_progressId', void 0),
            d(this, 'handlePreviewChange', () => {
                let {
                    bubble: e,
                    state: { dragging: t, previewWidth: n },
                    props: { value: r }
                } = this;
                if (!t && null != e) e.innerText = f(n._value * r);
            }),
            d(this, 'handleAnimatedChange', () => {
                let {
                    bubble: e,
                    state: { dragging: t, animatedProgress: n },
                    props: { value: r }
                } = this;
                if (!!t && null != e) e.innerText = f(n._value * r);
            }),
            d(this, 'handleMouseMove', (e) => {
                let { dragging: t, previewWidth: n } = this.state;
                if (t) return;
                let { clientX: r, clientY: i } = e;
                n.setValue(this.calculatePercentage(r, i));
            }),
            d(this, 'handleDragMove', (e) => {
                let { onDrag: t, type: n } = this.props,
                    { clientX: r, clientY: i } = e;
                t(this.calculatePercentage(r, i), n);
            }),
            d(this, 'handleDragStart', (e) => {
                let { onDragStart: t, onDrag: n, type: r, currentWindow: i } = this.props,
                    { clientX: a, clientY: o } = e;
                if ((e.preventDefault(), null == this.wrapper)) return;
                let { left: s, width: l } = this.wrapper.getBoundingClientRect();
                this.setState(
                    {
                        dragging: !0,
                        offsetLeft: s,
                        offsetWidth: l
                    },
                    () => {
                        t(r), n(this.calculatePercentage(a, o), r), i.removeEventListener('mouseup', this.handleDragEnd, !1), i.removeEventListener('mousemove', this.handleDragMove, !1), i.addEventListener('mouseup', this.handleDragEnd, !1), i.addEventListener('mousemove', this.handleDragMove, !1);
                    }
                );
            }),
            d(this, 'handleDragEnd', () => {
                let { onDragEnd: e, currentWindow: t } = this.props;
                e(), t.removeEventListener('mouseup', this.handleDragEnd, !1), t.removeEventListener('mousemove', this.handleDragMove, !1), this.setState({ dragging: !1 });
            }),
            d(this, 'setBubbleRef', (e) => {
                null == e ? (this.bubble = null) : null != e.componentRef ? (this.bubble = e.componentRef) : null != e.refs && (this.bubble = e.refs.node);
            });
    }
}
d(h, 'Types', E), d(h, 'defaultProps', { currentWindow: window }), (t.Z = h);
