let i;
n(47120);
var s = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(873546),
    c = n(442837),
    d = n(481060),
    u = n(980591),
    h = n(605782),
    p = n(133853),
    E = n(568154),
    b = n(353926),
    m = n(703656),
    _ = n(981631),
    f = n(504877);
let I = n(575703),
    T = n(2984),
    Z = [_.Z5c.LOGIN, _.Z5c.LOGIN_HANDOFF, _.Z5c.REGISTER, _.Z5c.INVITE(''), _.Z5c.GIFT_CODE(''), _.Z5c.GUILD_TEMPLATE_LOGIN(''), _.Z5c.GUILD_TEMPLATE(''), _.Z5c.DISABLE_EMAIL_NOTIFICATIONS, _.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, _.Z5c.BILLING_PREMIUM_SUBSCRIBE, _.Z5c.BILLING_PAYMENT_SOURCES_CREATE, _.Z5c.BILLING_PAYMENTS, _.Z5c.BILLING_PREMIUM_SWITCH_PLAN, _.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, _.Z5c.VERIFY, _.Z5c.VERIFY_HUB_EMAIL, _.Z5c.REJECT_IP, _.Z5c.REJECT_MFA, _.Z5c.AUTHORIZE_IP, _.Z5c.AUTHORIZE_PAYMENT, _.Z5c.RESET, _.Z5c.HANDOFF, _.Z5c.REPORT, _.Z5c.REPORT_SECOND_LOOK, _.Z5c.ACCOUNT_REVERT('')];
function g(e) {
    return Z.some((t) => e.startsWith(t));
}
let L = (e) => ((i = e), e);
function x(e) {
    let { children: t } = e;
    switch (
        (function () {
            let [e, t] = r.useState(!1),
                [n, s] = r.useState(true),
                l = (function () {
                    return null;
                })(),
                o = (0, c.e7)([b.Z], () => b.Z.hasLoadedExperiments);
            return ((0, u.Z)(() => {}, 300), void 0 !== i)
                ? i
                : !n && o
                  ? (!e && t(!0),
                    L(
                        (function (e) {
                            return 'default';
                        })(l)
                    ))
                  : n
                    ? L('default')
                    : 'loading';
        })()
    ) {
        case 'default':
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)('img', {
                        className: f.artwork,
                        src: I,
                        alt: ''
                    }),
                    (0, s.jsx)('img', {
                        className: f.logoWithText,
                        src: T,
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
class R extends r.Component {
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (g(e)) (0, m.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : ''.concat(e, '?').concat(n);
        }
    }
    mobileReplaceWith(e) {
        g(e) ? (0, m.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, s.jsx)(h.Z, {
                component: r.Fragment,
                children: r.Children.map(this.props.children, (e) =>
                    r.cloneElement(e, {
                        transitionTo: m.uL,
                        replaceWith: m.dL
                    })
                )
            });
        return (0, s.jsx)('div', {
            className: f.characterBackground,
            children: (0, s.jsx)(d.HeadingLevel, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(p.Z, {
                                      show: !0,
                                      className: o()(f.logo)
                                  }),
                                  (0, s.jsx)(E.h, {
                                      splash: e,
                                      children: t
                                  })
                              ]
                          })
                        : (0, s.jsx)(x, { children: t })
            })
        });
    }
    renderMobile() {
        return (0, s.jsx)(h.Z, {
            component: r.Fragment,
            children: r.Children.map(this.props.children, (e) =>
                r.cloneElement(e, {
                    transitionTo: this.mobileTransitionTo,
                    replaceWith: this.mobileReplaceWith
                })
            )
        });
    }
    render() {
        let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes('GameLauncher');
        return e || a.tq || a.Em || t ? this.renderMobile() : this.renderDefault();
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
t.Z = R;
