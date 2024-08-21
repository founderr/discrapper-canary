t.r(s),
    t.d(s, {
        AccountConnectionResult: function () {
            return v;
        },
        LinkPlatformLogo: function () {
            return h;
        }
    }),
    t(47120);
var n = t(735250),
    r = t(470079),
    a = t(120356),
    o = t.n(a),
    i = t(593473),
    l = t(873546),
    c = t(481060),
    d = t(457330),
    u = t(726542),
    N = t(536285),
    C = t(981631),
    _ = t(689938),
    m = t(957636);
function f(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
let g = null != window.opener,
    p = 'https://dis.gd/Amazon-Music-Connection';
function h(e) {
    let { platform: s, className: t } = e;
    return (0, n.jsxs)('div', {
        className: o()(m.logos, t),
        children: [
            (0, n.jsx)('div', { className: o()(m.logo, m.logoDiscord) }),
            (0, n.jsx)('div', { className: m.logosDivider }),
            (0, n.jsx)('div', {
                className: m.logo,
                style: { backgroundImage: 'url("'.concat(s.icon.whiteSVG, '")') }
            })
        ]
    });
}
function v(e) {
    let s,
        t,
        { verifying: a, verified: i, platformType: d } = e,
        N = u.Z.get(d),
        f = r.useCallback(() => {
            window.close();
        }, []);
    return (
        (s = a
            ? (0, n.jsx)('div', {
                  className: m.message,
                  children: _.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({ name: N.name })
              })
            : i
              ? (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('div', {
                            className: m.message,
                            children: _.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format({ name: N.name })
                        }),
                        (0, n.jsx)('div', {
                            className: o()(m.message, m.details),
                            children: _.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS
                        })
                    ]
                })
              : (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('div', {
                            className: o()(m.message, m.error),
                            children: _.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({ name: N.name })
                        }),
                        (0, n.jsx)('div', {
                            className: o()(m.message, m.details),
                            children: _.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS
                        }),
                        d !== C.ABu.AMAZON_MUSIC
                            ? null
                            : (0, n.jsx)('div', {
                                  className: o()(m.message, m.details),
                                  children: l.tq
                                      ? _.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE_MOBILE.format({
                                            link: () =>
                                                (0, n.jsx)(c.Anchor, {
                                                    href: p,
                                                    children: p
                                                })
                                        })
                                      : _.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format({
                                            link: () =>
                                                (0, n.jsx)(c.Anchor, {
                                                    href: p,
                                                    children: p
                                                })
                                        })
                              })
                    ]
                })),
        (g || a) &&
            (t = (0, n.jsx)(c.Button, {
                className: m.btn,
                disabled: a,
                onClick: f,
                children: a ? (0, n.jsx)(c.Spinner, { itemClassName: m.spinnerItem }) : _.Z.Messages.DONE
            })),
        (0, n.jsx)('div', {
            className: m.verifyConnectedAccount,
            children: (0, n.jsxs)('div', {
                children: [(0, n.jsx)(h, { platform: N }), s, t]
            })
        })
    );
}
class E extends r.Component {
    componentDidMount() {
        let e;
        let s = (0, i.parse)(this.props.location.search),
            { code: t, state: n, oauth_verifier: r, loading: a } = s;
        if (null != a) return;
        null != r && (t = r),
            Object.keys(s).forEach((t) => {
                if (!!t.startsWith('openid.')) null == e && (e = {}), (e[t] = s[t]);
            });
        let o = (e) => {
                let { status: s, body: t } = e;
                this.setState(
                    {
                        verifying: !1,
                        verified: 204 === s || 200 === s
                    },
                    () => {
                        this.state.verified && g && window.close();
                    }
                ),
                    (null == t ? void 0 : t.redirect) != null && (window.location = t.redirect);
            },
            l = {
                code: t,
                openid_params: e,
                state: n
            },
            c = (e) => d.Z.callback(this.getType(), l, e).then(o, o);
        if (g) {
            c(!1);
            return;
        }
        N.default
            .request(C.Etm.CONNECTIONS_CALLBACK, {
                ...l,
                providerType: this.getType()
            })
            .then(o, (e) => c('RPCError' !== e.name))
            .then(() => N.default.disconnect());
    }
    render() {
        let { verifying: e, verified: s } = this.state,
            t = this.getType();
        return u.Z.isSupported(t)
            ? (0, n.jsx)(v, {
                  platformType: this.getType(),
                  verifying: e,
                  verified: s
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            f(this, 'state', {
                verifying: !0,
                verified: !1
            }),
            f(this, 'getType', () => this.props.match.params.type);
    }
}
s.default = E;
