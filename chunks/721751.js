let s;
n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(873546),
    c = n(442837),
    d = n(481060),
    u = n(980591),
    h = n(605782),
    p = n(133853),
    E = n(568154),
    I = n(353926),
    _ = n(703656),
    b = n(981631),
    m = n(504877);
let T = n(575703),
    f = n(2984),
    Z = [b.Z5c.LOGIN, b.Z5c.LOGIN_HANDOFF, b.Z5c.REGISTER, b.Z5c.INVITE(''), b.Z5c.GIFT_CODE(''), b.Z5c.GUILD_TEMPLATE_LOGIN(''), b.Z5c.GUILD_TEMPLATE(''), b.Z5c.DISABLE_EMAIL_NOTIFICATIONS, b.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, b.Z5c.BILLING_PREMIUM_SUBSCRIBE, b.Z5c.BILLING_PAYMENT_SOURCES_CREATE, b.Z5c.BILLING_PAYMENTS, b.Z5c.BILLING_PREMIUM_SWITCH_PLAN, b.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, b.Z5c.VERIFY, b.Z5c.VERIFY_HUB_EMAIL, b.Z5c.REJECT_IP, b.Z5c.REJECT_MFA, b.Z5c.AUTHORIZE_IP, b.Z5c.AUTHORIZE_PAYMENT, b.Z5c.RESET, b.Z5c.HANDOFF, b.Z5c.REPORT, b.Z5c.REPORT_SECOND_LOOK, b.Z5c.ACCOUNT_REVERT('')];
function g(e) {
    return Z.some((t) => e.startsWith(t));
}
let L = (e) => ((s = e), e);
function x(e) {
    let { children: t } = e;
    switch (
        (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(true),
                o = (function () {
                    return null;
                })(),
                l = (0, c.e7)([I.Z], () => I.Z.hasLoadedExperiments);
            return ((0, u.Z)(() => {}, 300), void 0 !== s)
                ? s
                : !n && l
                  ? (!e && t(!0),
                    L(
                        (function (e) {
                            return 'default';
                        })(o)
                    ))
                  : n
                    ? L('default')
                    : 'loading';
        })()
    ) {
        case 'default':
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('img', {
                        className: m.artwork,
                        src: T,
                        alt: ''
                    }),
                    (0, i.jsx)('img', {
                        className: m.logoWithText,
                        src: f,
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
        if (g(e)) (0, _.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : ''.concat(e, '?').concat(n);
        }
    }
    mobileReplaceWith(e) {
        g(e) ? (0, _.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, i.jsx)(h.Z, {
                component: r.Fragment,
                children: r.Children.map(this.props.children, (e) =>
                    r.cloneElement(e, {
                        transitionTo: _.uL,
                        replaceWith: _.dL
                    })
                )
            });
        return (0, i.jsx)('div', {
            className: m.characterBackground,
            children: (0, i.jsx)(d.HeadingLevel, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(p.Z, {
                                      show: !0,
                                      className: l()(m.logo)
                                  }),
                                  (0, i.jsx)(E.h, {
                                      splash: e,
                                      children: t
                                  })
                              ]
                          })
                        : (0, i.jsx)(x, { children: t })
            })
        });
    }
    renderMobile() {
        return (0, i.jsx)(h.Z, {
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
        var t, n, s;
        super(e),
            (t = this),
            (n = 'handleResize'),
            (s = () => {
                this.setState({ isMobileWidth: window.innerWidth <= 485 });
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = s),
            (this.state = { isMobileWidth: window.innerWidth <= 485 });
    }
}
t.Z = R;
