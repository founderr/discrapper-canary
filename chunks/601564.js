n.r(t),
    n.d(t, {
        getPageSize: function () {
            return Z;
        }
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(593473),
    a = n(512969),
    o = n(442837),
    s = n(930118),
    c = n(355467),
    d = n(410575),
    u = n(666743),
    h = n(112724),
    m = n(447269),
    p = n(612226),
    g = n(714338),
    f = n(663993),
    _ = n(628123),
    E = n(703656),
    I = n(108427),
    C = n(911314),
    v = n(429899),
    N = n(843445),
    S = n(981631),
    T = n(388032),
    b = n(32304);
function x(e, t, n) {
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
let A = (0, f.Un)({
    createPromise: () => Promise.all([n.e('1868'), n.e('99838')]).then(n.bind(n, 496691)),
    webpackId: 496691
});
function Z(e) {
    return e < N.x ? N.b.SMALL : N.b.LARGE;
}
o.ZP.initialize();
class L extends r.PureComponent {
    componentDidMount() {
        (0, s.Y)(this.props.location),
            (this.stopListeningToHistory = (0, E.s1)().listen((e) => {
                e.pathname.startsWith(S.Z5c.APPLICATION_STORE) && (0, s.Y)(e);
            })),
            this.props.isAuthenticated && (0, c.tZ)(),
            g.Z.disable(),
            g.Z.setLayout(m.r),
            g.Z.enable(),
            (0, I.e)('application_store');
    }
    componentWillUnmount() {
        null != this.stopListeningToHistory && this.stopListeningToHistory(), g.Z.disable(), g.Z.setLayout(p.oT), g.Z.enable();
    }
    renderCustomErrorMessage() {
        return (0, i.jsxs)('div', {
            children: [(0, i.jsx)('p', { children: T.intl.string(T.t['1PZdFx']) }), (0, i.jsx)('p', { children: T.intl.string(T.t.CvQlAA) })]
        });
    }
    render() {
        let { isAuthenticated: e, location: t } = this.props,
            n = e
                ? (0, i.jsx)('div', {
                      className: b.applicationStore,
                      children: this.renderContent()
                  })
                : (0, i.jsx)(A, {
                      className: b.applicationStore,
                      location: t,
                      render: this.renderContent
                  });
        return (0, i.jsx)(_.Z, {
            renderCustomMessage: this.renderCustomErrorMessage,
            children: n
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'stopListeningToHistory', void 0),
            x(this, 'renderStoreListing', (e) => {
                let {
                        match: {
                            params: { skuId: t, applicationId: n, slug: r }
                        },
                        location: a
                    } = e,
                    { width: o } = this.props,
                    s = (0, l.parse)(a.search);
                return (0, i.jsx)(d.Z, {
                    page: S.ZY5.STORE_LISTING,
                    root: !0,
                    children: (0, i.jsx)(v.Z, {
                        skuId: t,
                        applicationId: n,
                        slug: r,
                        location: a,
                        storeListingId: s.store_listing_id,
                        pageSize: Z(o)
                    })
                });
            }),
            x(this, 'renderContent', () =>
                (0, i.jsxs)(a.rs, {
                    children: [
                        (0, i.jsx)(a.AW, {
                            path: S.Z5c.APPLICATION_STORE,
                            exact: !0,
                            render: () =>
                                (0, i.jsx)(d.Z, {
                                    page: S.ZY5.STORE_DIRECTORY_HOME,
                                    root: !0,
                                    children: (0, i.jsx)(C.Z, {})
                                })
                        }),
                        (0, i.jsx)(a.AW, {
                            path: S.Z5c.APPLICATION_STORE_LISTING_APPLICATION(':applicationId', ':slug'),
                            render: this.renderStoreListing
                        }),
                        (0, i.jsx)(a.AW, {
                            path: S.Z5c.APPLICATION_STORE_LISTING_APPLICATION(':applicationId'),
                            render: this.renderStoreListing
                        }),
                        (0, i.jsx)(a.AW, {
                            path: S.Z5c.APPLICATION_STORE_LISTING_SKU(':skuId', ':slug'),
                            render: this.renderStoreListing
                        }),
                        (0, i.jsx)(a.AW, {
                            path: S.Z5c.APPLICATION_STORE_LISTING_SKU(':skuId'),
                            render: this.renderStoreListing
                        }),
                        (0, i.jsx)(a.l_, { to: S.Z5c.APP })
                    ]
                })
            );
    }
}
t.default = (0, a.EN)((0, u.Z)((0, h.Z)(L)));
