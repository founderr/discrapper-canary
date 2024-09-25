let s;
n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    l = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(980591),
    _ = n(605782),
    h = n(133853),
    E = n(568154),
    p = n(353926),
    g = n(703656),
    m = n(981631),
    f = n(504877);
let I = n(575703),
    N = n(2984),
    T = [m.Z5c.LOGIN, m.Z5c.LOGIN_HANDOFF, m.Z5c.REGISTER, m.Z5c.INVITE(''), m.Z5c.GIFT_CODE(''), m.Z5c.GUILD_TEMPLATE_LOGIN(''), m.Z5c.GUILD_TEMPLATE(''), m.Z5c.DISABLE_EMAIL_NOTIFICATIONS, m.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, m.Z5c.BILLING_PREMIUM_SUBSCRIBE, m.Z5c.BILLING_PAYMENT_SOURCES_CREATE, m.Z5c.BILLING_PAYMENTS, m.Z5c.BILLING_PREMIUM_SWITCH_PLAN, m.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, m.Z5c.VERIFY, m.Z5c.VERIFY_HUB_EMAIL, m.Z5c.REJECT_IP, m.Z5c.REJECT_MFA, m.Z5c.AUTHORIZE_IP, m.Z5c.AUTHORIZE_PAYMENT, m.Z5c.RESET, m.Z5c.HANDOFF, m.Z5c.REPORT, m.Z5c.REPORT_SECOND_LOOK];
function x(e) {
    return T.some((t) => e.startsWith(t));
}
let A = (e) => ((s = e), e);
function C(e) {
    let { children: t } = e;
    switch (
        (function () {
            let [e, t] = i.useState(!1),
                [n, r] = i.useState(true),
                a = (function () {
                    return null;
                })(),
                o = (0, c.e7)([p.Z], () => p.Z.hasLoadedExperiments);
            return ((0, d.Z)(() => {}, 300), void 0 !== s)
                ? s
                : !n && o
                  ? (!e && t(!0),
                    A(
                        (function (e) {
                            return 'default';
                        })(a)
                    ))
                  : n
                    ? A('default')
                    : 'loading';
        })()
    ) {
        case 'default':
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('img', {
                        className: f.artwork,
                        src: I,
                        alt: ''
                    }),
                    (0, r.jsx)('img', {
                        className: f.logoWithText,
                        src: N,
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
class Z extends i.Component {
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (x(e)) (0, g.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : ''.concat(e, '?').concat(n);
        }
    }
    mobileReplaceWith(e) {
        x(e) ? (0, g.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, r.jsx)(_.Z, {
                component: i.Fragment,
                children: i.Children.map(this.props.children, (e) =>
                    i.cloneElement(e, {
                        transitionTo: g.uL,
                        replaceWith: g.dL
                    })
                )
            });
        return (0, r.jsx)('div', {
            className: f.characterBackground,
            children: (0, r.jsx)(u.HeadingLevel, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(h.Z, {
                                      show: !0,
                                      className: o()(f.logo)
                                  }),
                                  (0, r.jsx)(E.h, {
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
        return (0, r.jsx)(_.Z, {
            component: i.Fragment,
            children: i.Children.map(this.props.children, (e) =>
                i.cloneElement(e, {
                    transitionTo: this.mobileTransitionTo,
                    replaceWith: this.mobileReplaceWith
                })
            )
        });
    }
    render() {
        let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes('GameLauncher');
        return e || l.tq || l.Em || t ? this.renderMobile() : this.renderDefault();
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
t.Z = Z;
