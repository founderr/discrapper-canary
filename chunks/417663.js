t.r(s),
    t.d(s, {
        AccountConnectionResult: function () {
            return h;
        },
        LinkPlatformLogo: function () {
            return p;
        }
    }),
    t(47120);
var n = t(735250),
    r = t(470079),
    a = t(120356),
    o = t.n(a),
    i = t(593473),
    l = t(481060),
    c = t(457330),
    d = t(726542),
    u = t(536285),
    N = t(981631),
    m = t(689938),
    C = t(957636);
function _(e, s, t) {
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
let f = null != window.opener,
    g = 'https://dis.gd/Amazon-Music-Connection';
function p(e) {
    let { platform: s, className: t } = e;
    return (0, n.jsxs)('div', {
        className: o()(C.logos, t),
        children: [
            (0, n.jsx)('div', { className: o()(C.logo, C.logoDiscord) }),
            (0, n.jsx)('div', { className: C.logosDivider }),
            (0, n.jsx)('div', {
                className: C.logo,
                style: { backgroundImage: 'url("'.concat(s.icon.whiteSVG, '")') }
            })
        ]
    });
}
function h(e) {
    let s,
        t,
        { verifying: a, verified: i, platformType: c } = e,
        u = d.Z.get(c),
        _ = r.useCallback(() => {
            window.close();
        }, []);
    return (
        (s = a
            ? (0, n.jsx)('div', {
                  className: C.message,
                  children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFYING.format({ name: u.name })
              })
            : i
              ? (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('div', {
                            className: C.message,
                            children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS.format({ name: u.name })
                        }),
                        (0, n.jsx)('div', {
                            className: o()(C.message, C.details),
                            children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_SUCCESS_DETAILS
                        })
                    ]
                })
              : (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('div', {
                            className: o()(C.message, C.error),
                            children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE.format({ name: u.name })
                        }),
                        (0, n.jsx)('div', {
                            className: o()(C.message, C.details),
                            children: m.Z.Messages.CONNECTED_ACCOUNT_VERIFY_FAILURE_DETAILS
                        }),
                        c !== N.ABu.AMAZON_MUSIC
                            ? null
                            : (0, n.jsx)('div', {
                                  className: o()(C.message, C.details),
                                  children: m.Z.Messages.CONNECTED_ACCOUNT_HELP_CENTER_ARTICLE.format({
                                      link: () =>
                                          (0, n.jsx)(l.Anchor, {
                                              href: g,
                                              children: g
                                          })
                                  })
                              })
                    ]
                })),
        (f || a) &&
            (t = (0, n.jsx)(l.Button, {
                className: C.btn,
                disabled: a,
                onClick: _,
                children: a ? (0, n.jsx)(l.Spinner, { itemClassName: C.spinnerItem }) : m.Z.Messages.DONE
            })),
        (0, n.jsx)('div', {
            className: C.verifyConnectedAccount,
            children: (0, n.jsxs)('div', {
                children: [(0, n.jsx)(p, { platform: u }), s, t]
            })
        })
    );
}
class v extends r.Component {
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
                        this.state.verified && f && window.close();
                    }
                ),
                    (null == t ? void 0 : t.redirect) != null && (window.location = t.redirect);
            },
            l = {
                code: t,
                openid_params: e,
                state: n
            },
            d = (e) => c.Z.callback(this.getType(), l, e).then(o, o);
        if (f) {
            d(!1);
            return;
        }
        u.default
            .request(N.Etm.CONNECTIONS_CALLBACK, {
                ...l,
                providerType: this.getType()
            })
            .then(o, (e) => d('RPCError' !== e.name))
            .then(() => u.default.disconnect());
    }
    render() {
        let { verifying: e, verified: s } = this.state,
            t = this.getType();
        return d.Z.isSupported(t)
            ? (0, n.jsx)(h, {
                  platformType: this.getType(),
                  verifying: e,
                  verified: s
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                verifying: !0,
                verified: !1
            }),
            _(this, 'getType', () => this.props.match.params.type);
    }
}
s.default = v;
