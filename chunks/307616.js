n.d(t, {
    n: function () {
        return y;
    },
    v: function () {
        return b;
    }
}),
    n(47120),
    n(411104),
    n(852437);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(215569),
    c = n(481060),
    d = n(40851),
    f = n(314910),
    _ = n(429142),
    h = n(585483),
    p = n(952265),
    m = n(602091),
    g = n(981631),
    E = n(77793);
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
let I = [f.ZP, _.ZP];
class S extends i.PureComponent {
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: i } = this.props,
            { transitionState: a } = this.state;
        return (
            (a === m.Dv.ENTERING || a === m.Dv.ENTERED) && !n && (a = m.Dv.HIDDEN),
            i && (a = m.Dv.ENTERED),
            (0, r.jsx)(t, {
                children: (0, r.jsx)('div', {
                    className: s()(E.layer, !n && E.hidden),
                    children: e({
                        transitionState: a,
                        onClose: this.close
                    })
                })
            })
        );
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', { transitionState: null }),
            v(this, 'componentWillAppear', (e) => {
                this.componentWillEnter(e);
            }),
            v(this, 'componentWillEnter', (e) => {
                let { instant: t } = this.props;
                this.setState({ transitionState: m.Dv.ENTERING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: m.Dv.ENTERED }), e();
                        },
                        t ? 0 : m.CT
                    );
            }),
            v(this, 'componentWillLeave', (e) => {
                let { instant: t } = this.props;
                this.setState({ transitionState: m.Dv.EXITING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: m.Dv.EXITED }), e();
                        },
                        t ? 0 : m.CT
                    );
            }),
            v(
                this,
                'close',
                () =>
                    new Promise((e) => {
                        this.props.closeModal(this.props.modalKey), setTimeout(() => e(), m.CT);
                    })
            );
    }
}
function b() {
    return (0, p.Vn)((0, d.bp)());
}
let T = [];
function y() {
    let e = b(),
        t = (0, p.s9)((t) => (void 0 !== t[e] ? t[e] : T)),
        n = i.useRef();
    i.useLayoutEffect(() => {
        n.current = t[t.length - 1];
    }, [t]);
    let a = t.length > 0;
    i.useLayoutEffect(() => {
        if (!a) return;
        let e = () => {
            let e = n.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        };
        return (
            h.S.subscribe(g.CkL.MODAL_CLOSE, e),
            () => {
                h.S.unsubscribe(g.CkL.MODAL_CLOSE, e);
            }
        );
    }, [a]);
    let s = i.useCallback(() => {
            let e = n.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        }, []),
        o = i.useCallback(
            (t) => {
                (0, p.Mr)(t, e);
            },
            [e]
        ),
        d = I.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === f.ZP)));
    return (0, r.jsxs)(u.W, {
        component: i.Fragment,
        children: [
            I.map((e, n) => {
                var i;
                let a = l().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === f.ZP));
                return (0, r.jsx)(
                    c.Backdrop,
                    {
                        isVisible: d[n],
                        backdropStyle: null !== (i = null == a ? void 0 : a.backdropStyle) && void 0 !== i ? i : c.BackdropStyles.DARK,
                        onClose: s,
                        LayerComponent: e,
                        backdropInstant: null == a ? void 0 : a.instant
                    },
                    'layer-'.concat(n)
                );
            }),
            t.map((e, n) => {
                let { key: i, Layer: a, render: s, instant: l } = e;
                return (0, r.jsx)(
                    S,
                    {
                        modalKey: i,
                        LayerComponent: null != a ? a : f.ZP,
                        isTopModal: n === t.length - 1,
                        render: s,
                        closeModal: o,
                        instant: l
                    },
                    i
                );
            })
        ]
    });
}
