n.r(t), n(47120);
var s = n(200651),
    a = n(192379),
    i = n(481060),
    c = n(233787),
    l = n(388032);
function o(e, t, n) {
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
class r extends a.Component {
    render() {
        let { transitionState: e } = this.props;
        return (0, s.jsxs)(c.Z, {
            transitionState: e,
            'aria-label': l.intl.string(l.t.Nn0Px8),
            children: [
                (0, s.jsx)(c.Z.Header, { children: l.intl.string(l.t.Nn0Px8) }),
                (0, s.jsx)(c.Z.Content, {
                    type: c.Z.Types.UNCLAIMED,
                    children: l.intl.string(l.t['7btfmJ'])
                }),
                (0, s.jsx)(c.Z.Footer, {
                    secondary: {
                        onClick: this.cancel,
                        label: l.intl.string(l.t.oEAioK)
                    },
                    primary: {
                        onClick: this.claimAccount,
                        label: l.intl.string(l.t.fiNVio)
                    }
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            o(this, 'cancel', () => {
                let { onClose: e } = this.props;
                null == e || e();
            }),
            o(this, 'claimAccount', () => {
                let { onClose: e } = this.props;
                null == e || e(),
                    (0, i.openModalLazy)(async () => {
                        let { default: e } = await n.e('60827').then(n.bind(n, 324239));
                        return (t) => (0, s.jsx)(e, { ...t });
                    });
            });
    }
}
t.default = r;
