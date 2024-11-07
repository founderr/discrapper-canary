n.r(t),
    n.d(t, {
        default: function () {
            return m;
        }
    });
var i = n(200651),
    r = n(192379),
    l = n(512969),
    a = n(608787),
    s = n(765717),
    o = n(272242),
    c = n(981631);
let d = r.lazy(() =>
        (0, a.wE)({
            createPromise: () => Promise.all([n.e('29549'), n.e('6380'), n.e('31605'), n.e('65840'), n.e('72181'), n.e('13513'), n.e('41309'), n.e('60365'), n.e('18101'), n.e('57358'), n.e('77803'), n.e('28958'), n.e('9095'), n.e('83374')]).then(n.bind(n, 753450)),
            webpackId: 753450
        })
    ),
    u = r.lazy(() =>
        (0, a.wE)({
            createPromise: () => Promise.all([n.e('6380'), n.e('65840'), n.e('13513'), n.e('18101'), n.e('57358'), n.e('28958'), n.e('81176')]).then(n.bind(n, 74438)),
            webpackId: 74438
        })
    ),
    h = r.lazy(() =>
        (0, a.wE)({
            createPromise: () => Promise.all([n.e('6380'), n.e('65840'), n.e('13513'), n.e('18101'), n.e('57358'), n.e('28958'), n.e('80171')]).then(n.bind(n, 675869)),
            webpackId: 675869
        })
    );
function m() {
    return (0, i.jsxs)(l.rs, {
        children: [
            (0, i.jsx)(s.Z, {
                path: c.Z5c.APPLICATION_DIRECTORY,
                exact: !0,
                component: u
            }),
            (0, i.jsx)(s.Z, {
                path: c.Z5c.APPLICATION_DIRECTORY_SEARCH,
                component: h
            }),
            (0, i.jsx)(l.l_, {
                path: c.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', o.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED),
                to: c.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', o.ApplicationDirectoryProfileSections.STORE)
            }),
            (0, i.jsx)(s.Z, {
                path: c.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section?'),
                component: d
            })
        ]
    });
}
