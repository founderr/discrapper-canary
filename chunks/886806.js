n(47120);
var i,
    r = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    c = n(893776),
    u = n(129293),
    d = n(388905),
    h = n(17894),
    g = n(108427),
    f = n(314897),
    m = n(626135),
    p = n(981631),
    _ = n(388032),
    x = n(960136),
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
        this.handleVerify(), (0, g.e)('verify_email');
    }
    renderVerifyFailed() {
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.Ee, {
                    src: n(375673),
                    className: l()(x.image, E.marginBottom20)
                }),
                (0, r.jsx)(d.Dx, {
                    className: E.marginBottom8,
                    children: _.intl.string(_.t.PCgG39)
                }),
                (0, r.jsx)(d.DK, {
                    className: E.marginBottom40,
                    children: _.intl.string(_.t.tQpeAw)
                }),
                (0, r.jsx)(d.zx, {
                    onClick: this.handleLogin,
                    children: _.intl.string(_.t.dKhVQE)
                })
            ]
        });
    }
    renderVerifySucceeded() {
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.Ee, {
                    src: n(73962),
                    className: l()(x.image, E.marginBottom20)
                }),
                (0, r.jsx)(d.Dx, {
                    className: E.marginBottom40,
                    children: _.intl.string(_.t.dAfGb2)
                }),
                (0, r.jsx)(d.zx, {
                    onClick: this.handleOpenApp,
                    children: _.intl.string(_.t.uJWIj4)
                })
            ]
        });
    }
    renderVerifying() {
        return (0, r.jsxs)(d.ZP, {
            children: [
                (0, r.jsx)(d.Ee, {
                    src: n(892235),
                    className: l()(x.image, E.marginBottom20)
                }),
                (0, r.jsx)(d.Dx, {
                    className: E.marginBottom8,
                    children: _.intl.string(_.t['0c8+5u'])
                }),
                (0, r.jsx)(d.DK, {
                    className: E.marginBottom40,
                    children: _.intl.string(_.t.ULTCBA)
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
                e(p.Z5c.LOGIN);
            }),
            v(this, 'handleOpenApp', () => {
                let { verifyingUserId: e } = this.props;
                m.default.track(p.rMx.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: e }), (0, h.Z)('verify_email');
            });
    }
}
v(I, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) }),
    (t.Z = o.ZP.connectStores([f.default], () => ({
        verifyFailed: f.default.didVerifyFail(),
        verifyErrors: f.default.getVerifyErrors(),
        verifySucceeded: f.default.didVerifySucceed(),
        fingerprint: f.default.getFingerprint(),
        verifyingUserId: f.default.getVerifyingUserId()
    }))(I));
