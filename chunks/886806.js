n(47120);
var i,
    r = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(893776),
    u = n(129293),
    d = n(388905),
    h = n(17894),
    p = n(108427),
    g = n(314897),
    m = n(626135),
    f = n(981631),
    x = n(388032),
    _ = n(960136),
    E = n(971436);
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
o.ZP.initialize();
class I extends (i = s.PureComponent) {
    componentDidMount() {
        this.handleVerify(), (0, p.e)('verify_email');
    }
    renderVerifyFailed() {
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.Ee, {
                    src: n(375673),
                    className: a()(_.image, E.marginBottom20)
                }),
                (0, r.jsx)(d.Dx, {
                    className: E.marginBottom8,
                    children: x.intl.string(x.t.PCgG39)
                }),
                (0, r.jsx)(d.DK, {
                    className: E.marginBottom40,
                    children: x.intl.string(x.t.tQpeAw)
                }),
                (0, r.jsx)(d.zx, {
                    onClick: this.handleLogin,
                    children: x.intl.string(x.t.dKhVQE)
                })
            ]
        });
    }
    renderVerifySucceeded() {
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.Ee, {
                    src: n(73962),
                    className: a()(_.image, E.marginBottom20)
                }),
                (0, r.jsx)(d.Dx, {
                    className: E.marginBottom40,
                    children: x.intl.string(x.t.dAfGb2)
                }),
                (0, r.jsx)(d.zx, {
                    onClick: this.handleOpenApp,
                    children: x.intl.string(x.t.uJWIj4)
                })
            ]
        });
    }
    renderVerifying() {
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.Ee, {
                    src: n(892235),
                    className: a()(_.image, E.marginBottom20)
                }),
                (0, r.jsx)(d.Dx, {
                    className: E.marginBottom8,
                    children: x.intl.string(x.t['0c8+5u'])
                }),
                (0, r.jsx)(d.DK, {
                    className: E.marginBottom40,
                    children: x.intl.string(x.t.ULTCBA)
                }),
                (0, r.jsx)(d.zx, {
                    submitting: !0,
                    color: d.zx.Colors.PRIMARY
                })
            ]
        });
    }
    render() {
        let { verifyFailed: e, verifySucceeded: t } = this.props;
        return e ? this.renderVerifyFailed() : t ? this.renderVerifySucceeded() : this.renderVerifying();
    }
    constructor(...e) {
        super(...e),
            v(this, 'handleVerify', () => {
                let e = (0, u.Z)(this.props.location);
                null != e && c.Z.verify(e);
            }),
            v(this, 'handleLogin', () => {
                let { transitionTo: e } = this.props;
                e(f.Z5c.LOGIN);
            }),
            v(this, 'handleOpenApp', () => {
                let { verifyingUserId: e } = this.props;
                m.default.track(f.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: e }), (0, h.Z)('verify_email');
            });
    }
}
v(I, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) }),
    (t.Z = o.ZP.connectStores([g.default], () => ({
        verifyFailed: g.default.didVerifyFail(),
        verifyErrors: g.default.getVerifyErrors(),
        verifySucceeded: g.default.didVerifySucceed(),
        fingerprint: g.default.getFingerprint(),
        verifyingUserId: g.default.getVerifyingUserId()
    }))(I));
