n.d(t, {
    q: function () {
        return I;
    }
});
var r,
    i,
    a,
    o,
    s = n(47120);
var l = n(735250),
    u = n(470079),
    c = n(120356),
    d = n.n(c),
    _ = n(748780),
    E = n(215569),
    f = n(186325),
    h = n(753625);
function p(e, t, n) {
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
!(function (e) {
    (e[(e.ENTERING = 0)] = 'ENTERING'), (e[(e.LEAVING = 1)] = 'LEAVING'), (e[(e.APPEARING = 2)] = 'APPEARING'), (e[(e.STATIC = 3)] = 'STATIC');
})(r || (r = {})),
    !(function (e) {
        (e.SLIDE = 'slide'), (e.LIFT = 'lift');
    })(i || (i = {}));
class m extends (a = u.PureComponent) {
    componentDidMount() {
        if (null != this._measureRef.current) {
            let { height: e } = this._measureRef.current.getBoundingClientRect();
            this.setState({
                targetHeight: e,
                baseHeight: this.props.getBaseHeight()
            });
        }
    }
    componentDidUpdate(e, t) {
        t.targetHeight !== this.state.targetHeight && this.props.setHeight(this.state.targetHeight);
    }
    componentWillAppear(e) {
        this.setState({ animationState: 2 }), e();
    }
    componentDidAppear() {
        let { animationProgress: e, targetHeight: t } = this.state;
        e.setValue(2),
            this.setState({
                animationState: 3,
                baseHeight: t
            });
    }
    componentWillEnter(e) {
        let { duration: t } = this.props,
            { animationProgress: n } = this.state;
        this.setState({ animationState: 0 }),
            this.props.setHeight(this.state.targetHeight),
            _.Z.timing(n, {
                toValue: 2,
                duration: t,
                delay: t / 2
            }).start(e);
    }
    componentDidEnter() {
        this.setState({ animationState: 3 });
    }
    componentWillLeave(e) {
        let { animationProgress: t } = this.state,
            { duration: n, getDirection: r } = this.props;
        (this.direction = r()),
            this.setState({ animationState: 1 }),
            _.Z.timing(t, {
                toValue: 0,
                duration: n
            }).start(e);
    }
    componentDidLeave() {
        this.setState({ animationState: 3 });
    }
    getMotionAnimation() {
        let { reducedMotion: e } = this.context;
        if (e.enabled) return null;
        let { animationMotionType: t } = this.props,
            { animationProgress: n, animationState: r } = this.state,
            i = (1 === r ? -1 : 1) * this.direction;
        switch (t) {
            case 'slide':
                return {
                    transform: [
                        {
                            translateX: n.interpolate({
                                inputRange: [0, 2],
                                outputRange: [''.concat(150 * i, '%'), '0%'],
                                extrapolate: 'clamp',
                                easing: _.Z.Easing.inOut(_.Z.Easing.ease)
                            })
                        }
                    ]
                };
            case 'lift':
                return {
                    transform: [
                        {
                            translateY: n.interpolate({
                                inputRange: [0, 2],
                                outputRange: [''.concat(10 * i, '%'), '0%'],
                                extrapolate: 'clamp',
                                easing: _.Z.Easing.inOut(_.Z.Easing.ease)
                            })
                        }
                    ]
                };
            default:
                return null;
        }
    }
    getAnimatedStyle() {
        var e, t;
        let { fillParent: n } = this.props,
            { animationProgress: r, animationState: i, baseHeight: a, targetHeight: o } = this.state,
            s = null !== (e = this.props.sideMargin) && void 0 !== e ? e : 0,
            l = null !== (t = this.props.verticalMargin) && void 0 !== t ? t : 0,
            u = 1 === i,
            c = 0 === i;
        return {
            overflow: c || u ? 'hidden' : 'visible',
            position: u ? 'absolute' : void 0,
            top: u ? l : void 0,
            left: u ? s : void 0,
            right: u ? s : void 0,
            bottom: u ? l : void 0,
            ...this.getMotionAnimation(),
            opacity: r.interpolate({
                inputRange: [0, 2],
                outputRange: [0, 1],
                extrapolate: 'clamp',
                easing: _.Z.Easing.inOut(_.Z.Easing.ease)
            }),
            height: c
                ? r.interpolate({
                      inputRange: [0, 1],
                      outputRange: [a, o],
                      extrapolate: 'clamp',
                      easing: _.Z.Easing.inOut(_.Z.Easing.ease)
                  })
                : n
                  ? '100%'
                  : 'auto'
        };
    }
    render() {
        let { fillParent: e, className: t, animatedNodeClassName: n, staticClassName: r } = this.props,
            { animationState: i } = this.state;
        return e
            ? (0, l.jsx)('div', {
                  ref: this._measureRef,
                  className: d()(h.measurementFill, t, { [d()(h.measurementFillStatic, r)]: 3 === i }),
                  children: (0, l.jsx)(_.Z.div, {
                      className: d()(h.animatedNode, n),
                      style: this.getAnimatedStyle(),
                      children: this.props.children
                  })
              })
            : (0, l.jsx)('div', {
                  ref: this._measureRef,
                  className: d()(h.measurement, t),
                  children: (0, l.jsx)(_.Z.div, {
                      className: d()(h.animatedNode, n),
                      style: this.getAnimatedStyle(),
                      children: this.props.children
                  })
              });
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', {
                animationProgress: new _.Z.Value(0),
                targetHeight: 0,
                baseHeight: 0,
                animationState: null
            }),
            p(this, 'direction', this.props.getDirection()),
            p(this, '_measureRef', u.createRef());
    }
}
p(m, 'contextType', f.S), p(m, 'defaultProps', { duration: 300 });
class I extends (o = u.Component) {
    componentDidMount() {
        this.setPrevSteps();
    }
    componentDidUpdate() {
        this.setPrevSteps();
    }
    setPrevSteps() {
        let { step: e, steps: t } = this.props;
        (this.prevStep = e), (this.prevSteps = t);
    }
    render() {
        let { step: e, className: t, innerClassName: n, animatedNodeClassName: r, staticClassName: i, sideMargin: a, verticalMargin: o, children: s, fillParent: u, animationMotionType: c } = this.props;
        return (0, l.jsx)(E.W, {
            component: 'div',
            className: d()(h.transitionGroup, t),
            children: (0, l.jsx)(
                m,
                {
                    fillParent: u,
                    sideMargin: a,
                    animationMotionType: null != c ? c : 'slide',
                    verticalMargin: o,
                    getDirection: this.getDirection,
                    getBaseHeight: this.getBaseHeight,
                    className: n,
                    animatedNodeClassName: r,
                    staticClassName: i,
                    setHeight: this.setHeight,
                    children: s
                },
                ''.concat(e)
            )
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'stepHeights', {}),
            p(this, 'prevStep', null),
            p(this, 'prevSteps', []),
            p(this, 'getBaseHeight', () => (null != this.prevStep && null != this.stepHeights[this.prevStep] ? this.stepHeights[this.prevStep] : 0)),
            p(this, 'getDirection', () => {
                let { steps: e, step: t } = this.props,
                    n = null != this.prevStep ? e.indexOf(this.prevStep) : -1,
                    r = -1 === n && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1;
                return Math.max(n, r) > e.indexOf(t) ? -1 : 1;
            }),
            p(this, 'setHeight', (e) => {
                let { step: t } = this.props;
                this.stepHeights[t] = e;
            });
    }
}
p(I, 'defaultProps', {
    fillParent: !1,
    animationMotionType: 'slide'
});
