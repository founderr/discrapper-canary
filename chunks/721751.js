let s;
n(47120);
var i = n(735250),
    r = n(470079),
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
    b = n(703656),
    m = n(981631),
    _ = n(504877);
let f = n(575703),
    T = n(2984),
    Z = [m.Z5c.LOGIN, m.Z5c.LOGIN_HANDOFF, m.Z5c.REGISTER, m.Z5c.INVITE(''), m.Z5c.GIFT_CODE(''), m.Z5c.GUILD_TEMPLATE_LOGIN(''), m.Z5c.GUILD_TEMPLATE(''), m.Z5c.DISABLE_EMAIL_NOTIFICATIONS, m.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, m.Z5c.BILLING_PREMIUM_SUBSCRIBE, m.Z5c.BILLING_PAYMENT_SOURCES_CREATE, m.Z5c.BILLING_PAYMENTS, m.Z5c.BILLING_PREMIUM_SWITCH_PLAN, m.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, m.Z5c.VERIFY, m.Z5c.VERIFY_HUB_EMAIL, m.Z5c.REJECT_IP, m.Z5c.REJECT_MFA, m.Z5c.AUTHORIZE_IP, m.Z5c.AUTHORIZE_PAYMENT, m.Z5c.RESET, m.Z5c.HANDOFF, m.Z5c.REPORT, m.Z5c.REPORT_SECOND_LOOK];
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
                        className: _.artwork,
                        src: f,
                        alt: ''
                    }),
                    (0, i.jsx)('img', {
                        className: _.logoWithText,
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
class S extends r.Component {
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (g(e)) (0, b.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : ''.concat(e, '?').concat(n);
        }
    }
    mobileReplaceWith(e) {
        g(e) ? (0, b.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, i.jsx)(h.Z, {
                component: r.Fragment,
                children: r.Children.map(this.props.children, (e) =>
                    r.cloneElement(e, {
                        transitionTo: b.uL,
                        replaceWith: b.dL
                    })
                )
            });
        return (0, i.jsx)('div', {
            className: _.characterBackground,
            children: (0, i.jsx)(d.HeadingLevel, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(p.Z, {
                                      show: !0,
                                      className: l()(_.logo)
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
t.Z = S;
