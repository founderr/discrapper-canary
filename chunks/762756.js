n(47120);
var i,
    a = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(873546),
    c = n(481060),
    d = n(599857),
    u = n(600164),
    _ = n(63063),
    E = n(1964),
    h = n(981631),
    m = n(689938),
    I = n(311501),
    p = n(113207);
function g(e, t, n) {
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
let T = _.Z.getArticleURL(h.BhN.VERIFICATION_FAQ);
class S extends (i = s.PureComponent) {
    renderFields() {
        let { types: e, captchaKey: t, theme: n, onCaptchaVerify: i } = this.props;
        return (0, a.jsx)(a.Fragment, {
            children: e.map((e) =>
                e === h.PUi.CAPTCHA
                    ? (0, a.jsx)(
                          d.Z,
                          {
                              onVerify: i,
                              theme: n
                          },
                          t
                      )
                    : (0, a.jsx)(
                          c.Button,
                          {
                              className: l()(p.marginBottom20),
                              onClick: () => this.handleClick(e),
                              children: E.Z.getButtonTitle(e)
                          },
                          e
                      )
            )
        });
    }
    render() {
        return (0, a.jsxs)(u.Z, {
            className: I.verification,
            align: u.Z.Align.CENTER,
            direction: u.Z.Direction.VERTICAL,
            children: [
                (0, a.jsxs)(u.Z, {
                    className: l()(I.container, { [I.isMobile]: o.tq }),
                    direction: u.Z.Direction.VERTICAL,
                    align: u.Z.Align.CENTER,
                    justify: u.Z.Justify.CENTER,
                    children: [
                        (0, a.jsx)('div', { className: I.image }),
                        (0, a.jsx)('div', {
                            className: l()(I.title, p.marginTop20),
                            children: m.Z.Messages.VERIFICATION_TITLE
                        }),
                        (0, a.jsx)('div', {
                            className: l()(I.body, p.marginTop4, p.marginBottom20),
                            children: m.Z.Messages.VERIFICATION_BODY_WITH_HELP_LINK.format({ helpCenterURL: T })
                        }),
                        (0, a.jsx)(u.Z, {
                            grow: 0,
                            direction: u.Z.Direction.VERTICAL,
                            justify: u.Z.Justify.CENTER,
                            children: this.renderFields()
                        })
                    ]
                }),
                (0, a.jsx)('div', {
                    className: l()(I.footer, p.marginTop20),
                    children: m.Z.Messages.VERIFICATION_FOOTER
                }),
                (0, a.jsxs)(u.Z, {
                    className: l()(p.marginTop4, p.marginBottom20),
                    grow: 0,
                    children: [
                        (0, a.jsx)('div', {
                            className: l()(I.footer, I.footerAction),
                            children: m.Z.Messages.VERIFICATION_FOOTER_SUPPORT.format({ supportURL: _.Z.getSubmitRequestURL() })
                        }),
                        (0, a.jsx)('div', {
                            className: l()(I.footer, I.footerBullet),
                            children: '\u2022'
                        }),
                        (0, a.jsx)('div', {
                            className: l()(I.footer, I.footerAction),
                            children: m.Z.Messages.VERIFICATION_FOOTER_LOGOUT.format({ logoutOnClick: this.props.onLogout })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'handleClick', (e) => {
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
g(S, 'defaultProps', {
    types: [h.PUi.CAPTCHA],
    onCaptchaVerify: h.dG4,
    onLogout: h.dG4
}),
    (t.Z = S);
