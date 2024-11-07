n(47120);
var s = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(772848),
    r = n(990547),
    h = n(481060),
    u = n(600164),
    d = n(7557),
    c = n(200357),
    p = n(388032),
    m = n(645623),
    f = n(639944),
    g = n(971436);
function C(e, t, n) {
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
class y extends i.PureComponent {
    async componentDidMount() {
        let [e, { default: t }] = await Promise.all([n.e('93198').then(n.t.bind(n, 140523, 19)), n.e('23755').then(n.t.bind(n, 500923, 23))]);
        null != this._lottieRef &&
            (this._animItem = t.loadAnimation({
                container: this._lottieRef,
                renderer: 'svg',
                loop: !0,
                autoplay: !1,
                animationData: e
            }));
    }
    componentWillUnmount() {
        null != this._animItem && (this._animItem.destroy(), (this._animItem = void 0));
    }
    render() {
        let e, t, n;
        let { error: i, working: o, transitionState: a, validPhone: C } = this.props;
        return (
            (e =
                null != i && '' !== i
                    ? (0, s.jsx)('div', {
                          className: l()(m.description, m.error, g.marginBottom20),
                          children: i
                      })
                    : C
                      ? (0, s.jsx)('div', {
                            className: l()(m.description, g.marginBottom20),
                            children: p.intl.string(p.t['4qMI6O'])
                        })
                      : (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)('div', {
                                    className: l()(m.description, g.marginBottom20),
                                    children: p.intl.string(p.t.Vp9je3)
                                }),
                                (0, s.jsx)('div', {
                                    className: l()(m.description, g.marginBottom20),
                                    children: p.intl.format(p.t['3BTmqa'], {})
                                })
                            ]
                        })),
            (t = C
                ? (0, s.jsxs)(u.Z, {
                      className: m.field,
                      direction: u.Z.Direction.VERTICAL,
                      align: u.Z.Align.CENTER,
                      children: [
                          (0, s.jsx)(d.Z, { onSubmit: this.handleVerifyPhone }),
                          (0, s.jsx)(h.Button, {
                              className: g.marginTop8,
                              size: h.ButtonSizes.SMALL,
                              look: h.ButtonLooks.LINK,
                              color: h.ButtonColors.PRIMARY,
                              onClick: this.handleResendCode,
                              children: p.intl.string(p.t['5b60go'])
                          })
                      ]
                  })
                : (0, s.jsx)(c.Z, {
                      className: m.field,
                      onSubmit: this.handleAddPhone,
                      submitting: o
                  })),
            (n = C ? p.intl.string(p.t.Xclkxs) : p.intl.string(p.t.uR76s7)),
            (0, s.jsxs)(h.ModalRoot, {
                impression: { impressionName: r.ImpressionNames.USER_VERIFY_PHONE },
                transitionState: a,
                className: l()(m.phoneVerificationModal, f.vertical, f.alignCenter, f.justifyCenter, g.marginTop60),
                'aria-labelledby': this.headerId,
                children: [
                    (0, s.jsx)('div', {
                        className: m.animationContainer,
                        ref: this.setLottieRef
                    }),
                    (0, s.jsx)('div', {
                        className: l()(m.title, g.marginBottom8),
                        id: this.headerId,
                        children: n
                    }),
                    e,
                    t
                ]
            })
        );
    }
    constructor(e) {
        super(e),
            C(this, '_animItem', null),
            C(this, '_lottieRef', void 0),
            C(this, 'headerId', (0, a.Z)()),
            C(this, 'setLottieRef', (e) => {
                this._lottieRef = e;
            }),
            C(this, 'handleAddPhone', (e) => {
                this.state.animated || null == this._animItem
                    ? this.setState({ phone: e })
                    : (this._animItem.play(),
                      this.setState({
                          animated: !0,
                          phone: e
                      }));
                let { onAddPhone: t } = this.props;
                null == t || t(e);
            }),
            C(this, 'handleVerifyPhone', (e) => {
                let { onVerifyPhone: t } = this.props;
                null == t || t(e);
            }),
            C(this, 'handleResendCode', () => {
                let { onAddPhone: e } = this.props;
                null == e || e(this.state.phone);
            }),
            (this.state = {
                animated: !1,
                phone: ''
            });
    }
}
t.Z = y;
