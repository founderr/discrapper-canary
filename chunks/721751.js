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
    g = n(133853),
    m = n(568154),
    p = n(353926),
    f = n(703656),
    _ = n(981631),
    x = n(687000);
let E = n(575703),
    I = n(2984),
    v = [_.Z5c.LOGIN, _.Z5c.LOGIN_HANDOFF, _.Z5c.REGISTER, _.Z5c.INVITE(''), _.Z5c.GIFT_CODE(''), _.Z5c.GUILD_TEMPLATE_LOGIN(''), _.Z5c.GUILD_TEMPLATE(''), _.Z5c.DISABLE_EMAIL_NOTIFICATIONS, _.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, _.Z5c.BILLING_PREMIUM_SUBSCRIBE, _.Z5c.BILLING_PAYMENT_SOURCES_CREATE, _.Z5c.BILLING_PAYMENTS, _.Z5c.BILLING_PREMIUM_SWITCH_PLAN, _.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, _.Z5c.VERIFY, _.Z5c.VERIFY_HUB_EMAIL, _.Z5c.REJECT_IP, _.Z5c.REJECT_MFA, _.Z5c.AUTHORIZE_IP, _.Z5c.AUTHORIZE_PAYMENT, _.Z5c.RESET, _.Z5c.HANDOFF, _.Z5c.REPORT, _.Z5c.REPORT_SECOND_LOOK, _.Z5c.ACCOUNT_REVERT('')];
function N(e) {
    return v.some((t) => e.startsWith(t));
}
let b = (e) => ((i = e), e);
function C(e) {
    let { children: t } = e;
    switch (
        (function () {
            let [e, t] = s.useState(!1),
                [n, r] = s.useState(true),
                l = (function () {
                    return null;
                })(),
                a = (0, c.e7)([p.Z], () => p.Z.hasLoadedExperiments);
            return ((0, d.Z)(() => {}, 300), void 0 !== i)
                ? i
                : !n && a
                  ? (!e && t(!0),
                    b(
                        (function (e) {
                            return 'default';
                        })(l)
                    ))
                  : n
                    ? b('default')
                    : 'loading';
        })()
    ) {
        case 'default':
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('img', {
                        className: x.artwork,
                        src: E,
                        alt: ''
                    }),
                    (0, r.jsx)('img', {
                        className: x.logoWithText,
                        src: I,
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
        if (N(e)) (0, f.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : ''.concat(e, '?').concat(n);
        }
    }
    mobileReplaceWith(e) {
        N(e) ? (0, f.dL)(e) : (window.location = e);
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
            className: x.characterBackground,
            children: (0, r.jsx)(u.HeadingLevel, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(g.Z, {
                                      show: !0,
                                      className: a()(x.logo)
                                  }),
                                  (0, r.jsx)(m.h, {
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
