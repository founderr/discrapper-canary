n.d(t, {
    n: function () {
        return C;
    },
    v: function () {
        return O;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(852437);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(392711),
    d = n.n(c),
    _ = n(215569),
    E = n(481060),
    f = n(40851),
    h = n(314910),
    p = n(429142),
    m = n(585483),
    I = n(952265),
    T = n(602091),
    g = n(981631),
    S = n(66904);
function A(e, t, n) {
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
let v = [h.ZP, p.ZP];
class N extends s.PureComponent {
    render() {
        let { render: e, LayerComponent: t, isTopModal: n, instant: r } = this.props,
            { transitionState: i } = this.state;
        return (
            (i === T.Dv.ENTERING || i === T.Dv.ENTERED) && !n && (i = T.Dv.HIDDEN),
            r && (i = T.Dv.ENTERED),
            (0, o.jsx)(t, {
                children: (0, o.jsx)('div', {
                    className: u()(S.layer, !n && S.hidden),
                    children: e({
                        transitionState: i,
                        onClose: this.close
                    })
                })
            })
        );
    }
    constructor(...e) {
        super(...e),
            A(this, 'state', { transitionState: null }),
            A(this, 'componentWillAppear', (e) => {
                this.componentWillEnter(e);
            }),
            A(this, 'componentWillEnter', (e) => {
                let { instant: t } = this.props;
                this.setState({ transitionState: T.Dv.ENTERING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: T.Dv.ENTERED }), e();
                        },
                        t ? 0 : T.CT
                    );
            }),
            A(this, 'componentWillLeave', (e) => {
                let { instant: t } = this.props;
                this.setState({ transitionState: T.Dv.EXITING }),
                    setTimeout(
                        () => {
                            this.setState({ transitionState: T.Dv.EXITED }), e();
                        },
                        t ? 0 : T.CT
                    );
            }),
            A(
                this,
                'close',
                () =>
                    new Promise((e) => {
                        this.props.closeModal(this.props.modalKey), setTimeout(() => e(), T.CT);
                    })
            );
    }
}
function O() {
    return (0, I.Vn)((0, f.bp)());
}
let R = [];
function C() {
    let e = O(),
        t = (0, I.s9)((t) => (void 0 !== t[e] ? t[e] : R)),
        n = s.useRef();
    s.useLayoutEffect(() => {
        n.current = t[t.length - 1];
    }, [t]);
    let r = t.length > 0;
    s.useLayoutEffect(() => {
        if (!r) return;
        let e = () => {
            let e = n.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        };
        return (
            m.S.subscribe(g.CkL.MODAL_CLOSE, e),
            () => {
                m.S.unsubscribe(g.CkL.MODAL_CLOSE, e);
            }
        );
    }, [r]);
    let i = s.useCallback(() => {
            let e = n.current;
            null != e && null != e.onCloseRequest && e.onCloseRequest();
        }, []),
        a = s.useCallback(
            (t) => {
                (0, I.Mr)(t, e);
            },
            [e]
        ),
        l = v.map((e) => t.some((t) => t.Layer === e || (null == t.Layer && e === h.ZP)));
    return (0, o.jsxs)(_.W, {
        component: s.Fragment,
        children: [
            v.map((e, n) => {
                var r;
                let a = d().findLast(t, (t) => t.Layer === e || (null == t.Layer && e === h.ZP));
                return (0, o.jsx)(
                    E.Backdrop,
                    {
                        isVisible: l[n],
                        backdropStyle: null !== (r = null == a ? void 0 : a.backdropStyle) && void 0 !== r ? r : E.BackdropStyles.DARK,
                        onClose: i,
                        LayerComponent: e,
                        backdropInstant: null == a ? void 0 : a.instant
                    },
                    'layer-'.concat(n)
                );
            }),
            t.map((e, n) => {
                let { key: r, Layer: i, render: s, instant: l } = e;
                return (0, o.jsx)(
                    N,
                    {
                        modalKey: r,
                        LayerComponent: null != i ? i : h.ZP,
                        isTopModal: n === t.length - 1,
                        render: s,
                        closeModal: a,
                        instant: l
                    },
                    r
                );
            })
        ]
    });
}
