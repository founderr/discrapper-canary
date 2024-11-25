let i;
n(47120);
var r = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(980591),
    h = n(605782),
    p = n(133853),
    g = n(568154),
    m = n(353926),
    f = n(703656),
    x = n(981631),
    _ = n(687000);
let E = n(575703),
    v = n(2984),
    I = [x.Z5c.LOGIN, x.Z5c.LOGIN_HANDOFF, x.Z5c.REGISTER, x.Z5c.INVITE(''), x.Z5c.GIFT_CODE(''), x.Z5c.GUILD_TEMPLATE_LOGIN(''), x.Z5c.GUILD_TEMPLATE(''), x.Z5c.DISABLE_EMAIL_NOTIFICATIONS, x.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, x.Z5c.BILLING_PREMIUM_SUBSCRIBE, x.Z5c.BILLING_PAYMENT_SOURCES_CREATE, x.Z5c.BILLING_PAYMENTS, x.Z5c.BILLING_PREMIUM_SWITCH_PLAN, x.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, x.Z5c.VERIFY, x.Z5c.VERIFY_HUB_EMAIL, x.Z5c.REJECT_IP, x.Z5c.REJECT_MFA, x.Z5c.AUTHORIZE_IP, x.Z5c.AUTHORIZE_PAYMENT, x.Z5c.RESET, x.Z5c.HANDOFF, x.Z5c.REPORT, x.Z5c.REPORT_SECOND_LOOK, x.Z5c.ACCOUNT_REVERT('')];
function b(e) {
    return I.some((t) => e.startsWith(t));
}
let N = (e) => ((i = e), e);
function C(e) {
    let { children: t } = e;
    switch (
        (function () {
            let [e, t] = s.useState(!1),
                [n, r] = s.useState(true),
                l = (function () {
                    return null;
                })(),
                a = (0, c.e7)([m.Z], () => m.Z.hasLoadedExperiments);
            return ((0, d.Z)(() => {}, 300), void 0 !== i)
                ? i
                : !n && a
                  ? (!e && t(!0),
                    N(
                        (function (e) {
                            return 'default';
                        })(l)
                    ))
                  : n
                    ? N('default')
                    : 'loading';
        })()
    ) {
        case 'default':
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('img', {
                        className: _.artwork,
                        src: E,
                        alt: ''
                    }),
                    (0, r.jsx)('img', {
                        className: _.logoWithText,
                        src: v,
                        alt: ''
                    }),
                    t
                ]
            });
        case 'experimental':
        case 'loading':
            return null;
    }
}
class S extends s.Component {
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (b(e)) (0, f.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : ''.concat(e, '?').concat(n);
        }
    }
    mobileReplaceWith(e) {
        b(e) ? (0, f.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, r.jsx)(h.Z, {
                component: s.Fragment,
                children: s.Children.map(this.props.children, (e) =>
                    s.cloneElement(e, {
                        transitionTo: f.uL,
                        replaceWith: f.dL
                    })
                )
            });
        return (0, r.jsx)('div', {
            className: _.characterBackground,
            children: (0, r.jsx)(u.HeadingLevel, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(p.Z, {
                                      show: !0,
                                      className: a()(_.logo)
                                  }),
                                  (0, r.jsx)(g.h, {
                                      splash: e,
                                      children: t
                                  })
                              ]
                          })
                        : (0, r.jsx)(C, { children: t })
            })
        });
    }
    renderMobile() {
        return (0, r.jsx)(h.Z, {
            component: s.Fragment,
            children: s.Children.map(this.props.children, (e) =>
                s.cloneElement(e, {
                    transitionTo: this.mobileTransitionTo,
                    replaceWith: this.mobileReplaceWith
                })
            )
        });
    }
    render() {
        let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes('GameLauncher');
        return e || o.tq || o.Em || t ? this.renderMobile() : this.renderDefault();
    }
    constructor(e) {
        var t, n, i;
        super(e),
            (t = this),
            (n = 'handleResize'),
            (i = () => {
                this.setState({ isMobileWidth: window.innerWidth <= 485 });
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i),
            (this.state = { isMobileWidth: window.innerWidth <= 485 });
    }
}
t.Z = S;
