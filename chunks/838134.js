n.r(t),
    n.d(t, {
        default: function () {
            return E;
        }
    });
var i = n(735250),
    a = n(470079),
    s = n(266067),
    r = n(608787),
    l = n(765717),
    o = n(272242),
    c = n(981631);
let d = a.lazy(() =>
        (0, r.wE)({
            createPromise: () => Promise.all([n.e('29549'), n.e('6380'), n.e('31605'), n.e('22878'), n.e('65840'), n.e('81272'), n.e('18101'), n.e('56602'), n.e('26124'), n.e('77803'), n.e('11256'), n.e('71979')]).then(n.bind(n, 753450)),
            webpackId: 753450
        })
    ),
    u = a.lazy(() =>
        (0, r.wE)({
            createPromise: () => Promise.all([n.e('6380'), n.e('65840'), n.e('18101'), n.e('26124'), n.e('12110')]).then(n.bind(n, 74438)),
            webpackId: 74438
        })
    ),
    _ = a.lazy(() =>
        (0, r.wE)({
            createPromise: () => Promise.all([n.e('6380'), n.e('65840'), n.e('18101'), n.e('26124'), n.e('64965')]).then(n.bind(n, 675869)),
            webpackId: 675869
        })
    );
function E() {
    return (0, i.jsxs)(s.rs, {
        children: [
            (0, i.jsx)(l.Z, {
                path: c.Z5c.APPLICATION_DIRECTORY,
                exact: !0,
                component: u
            }),
            (0, i.jsx)(l.Z, {
                path: c.Z5c.APPLICATION_DIRECTORY_SEARCH,
                component: _
            }),
            (0, i.jsx)(s.l_, {
                path: c.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', o.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED),
                to: c.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', o.ApplicationDirectoryProfileSections.STORE)
            }),
            (0, i.jsx)(l.Z, {
                path: c.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section?'),
                component: d
            })
        ]
    });
}
