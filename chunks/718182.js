var i,
    r,
    s,
    a,
    l = n(200651),
    o = n(192379),
    c = n(525654),
    u = n.n(c),
    d = n(442837),
    h = n(893776),
    g = n(129293),
    m = n(388905),
    p = n(108427),
    f = n(314897),
    _ = n(981631),
    x = n(388032),
    E = n(113207);
d.ZP.initialize();
class v extends (a = o.PureComponent) {
    componentDidMount() {
        let e = (0, g.Z)(this.props.location);
        null != e && h.Z.authorizeIPAddress(e), (0, p.e)('authorize_ip');
    }
    renderLoginButton() {
        if ('Android' === u().os.family || 'iOS' === u().os.family) return null;
        let { transitionTo: e } = this.props;
        return (0, l.jsx)(m.zx, {
            onClick: () => e(_.Z5c.LOGIN),
            children: x.intl.string(x.t.dKhVQE)
        });
    }
    renderFailed() {
        return (0, l.jsxs)(m.ZP, {
            children: [
                (0, l.jsx)('img', {
                    alt: '',
                    src: n(262467),
                    className: E.marginBottom20
                }),
                (0, l.jsx)(m.Dx, {
                    className: E.marginBottom8,
                    children: x.intl.string(x.t['f/54a2'])
                }),
                (0, l.jsx)(m.DK, {
                    className: E.marginBottom40,
                    children: x.intl.string(x.t.i3ehMj)
                }),
                this.renderLoginButton()
            ]
        });
    }
    renderSucceeded() {
        return (0, l.jsxs)(m.ZP, {
            children: [
                (0, l.jsx)('img', {
                    alt: '',
                    src: n(640356),
                    className: E.marginBottom20
                }),
                (0, l.jsx)(m.Dx, {
                    className: E.marginBottom8,
                    children: x.intl.string(x.t.iG0SlJ)
                }),
                (0, l.jsx)(m.DK, {
                    className: E.marginBottom40,
                    children: x.intl.string(x.t['Elv+qq'])
                }),
                this.renderLoginButton()
            ]
        });
    }
    renderDefault() {
        return (0, l.jsxs)(m.ZP, {
            children: [(0, l.jsx)(m.Hh, {}), (0, l.jsx)(m.Dx, { children: x.intl.string(x.t['9exy+f']) })]
        });
    }
    render() {
        let { verifyFailed: e, verifySucceeded: t } = this.props;
        return e ? this.renderFailed() : t ? this.renderSucceeded() : this.renderDefault();
    }
}
(i = v),
    (r = 'defaultProps'),
    (s = { transitionTo: (e) => n.g.location.assign(e) }),
    r in i
        ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = s),
    (t.Z = d.ZP.connectStores([f.default], () => ({
        verifyFailed: f.default.didVerifyFail(),
        verifySucceeded: f.default.didVerifySucceed()
    }))(v));
