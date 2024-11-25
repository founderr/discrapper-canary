var i,
    r,
    s,
    l,
    a = n(200651),
    o = n(192379),
    c = n(525654),
    u = n.n(c),
    d = n(442837),
    h = n(893776),
    p = n(129293),
    g = n(388905),
    m = n(108427),
    f = n(314897),
    x = n(981631),
    _ = n(388032),
    E = n(232186);
d.ZP.initialize();
class v extends (l = o.PureComponent) {
    componentDidMount() {
        let e = (0, p.Z)(this.props.location);
        null != e && h.Z.authorizeIPAddress(e), (0, m.e)('authorize_ip');
    }
    renderLoginButton() {
        if ('Android' === u().os.family || 'iOS' === u().os.family) return null;
        let { transitionTo: e } = this.props;
        return (0, a.jsx)(g.zx, {
            onClick: () => e(x.Z5c.LOGIN),
            children: _.intl.string(_.t.dKhVQE)
        });
    }
    renderFailed() {
        return (0, a.jsxs)(g.ZP, {
            children: [
                (0, a.jsx)('img', {
                    alt: '',
                    src: n(262467),
                    className: E.marginBottom20
                }),
                (0, a.jsx)(g.Dx, {
                    className: E.marginBottom8,
                    children: _.intl.string(_.t['f/54a2'])
                }),
                (0, a.jsx)(g.DK, {
                    className: E.marginBottom40,
                    children: _.intl.string(_.t.i3ehMj)
                }),
                this.renderLoginButton()
            ]
        });
    }
    renderSucceeded() {
        return (0, a.jsxs)(g.ZP, {
            children: [
                (0, a.jsx)('img', {
                    alt: '',
                    src: n(640356),
                    className: E.marginBottom20
                }),
                (0, a.jsx)(g.Dx, {
                    className: E.marginBottom8,
                    children: _.intl.string(_.t.iG0SlJ)
                }),
                (0, a.jsx)(g.DK, {
                    className: E.marginBottom40,
                    children: _.intl.string(_.t['Elv+qq'])
                }),
                this.renderLoginButton()
            ]
        });
    }
    renderDefault() {
        return (0, a.jsxs)(g.ZP, {
            children: [(0, a.jsx)(g.Hh, {}), (0, a.jsx)(g.Dx, { children: _.intl.string(_.t['9exy+f']) })]
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
