n.r(t),
    n.d(t, {
        default: function () {
            return g;
        }
    });
var i = n(200651),
    r = n(192379),
    l = n(512969),
    a = n(608787),
    o = n(765717),
    s = n(352057),
    c = n(156482),
    d = n(272242),
    u = n(981631);
let h = r.lazy(() =>
        (0, a.wE)({
            createPromise: () => Promise.all([n.e('73503'), n.e('6380'), n.e('56630'), n.e('72181'), n.e('65840'), n.e('74891'), n.e('18101'), n.e('21628'), n.e('77803'), n.e('77642'), n.e('64676'), n.e('9808')]).then(n.bind(n, 753450)),
            webpackId: 753450
        })
    ),
    m = r.lazy(() =>
        (0, a.wE)({
            createPromise: () => Promise.all([n.e('6380'), n.e('56630'), n.e('65840'), n.e('18101'), n.e('77642'), n.e('14835')]).then(n.bind(n, 74438)),
            webpackId: 74438
        })
    ),
    p = r.lazy(() =>
        (0, a.wE)({
            createPromise: () => Promise.all([n.e('6380'), n.e('56630'), n.e('65840'), n.e('18101'), n.e('77642'), n.e('37235')]).then(n.bind(n, 675869)),
            webpackId: 675869
        })
    );
function g() {
    return (0, s.h$)({ location: 'ApplicationDirectoryRoutes' })
        ? (0, i.jsx)(l.AW, {
              path: u.Z5c.APPLICATION_DIRECTORY,
              component: c.Z
          })
        : (0, i.jsxs)(l.rs, {
              children: [
                  (0, i.jsx)(o.Z, {
                      path: u.Z5c.APPLICATION_DIRECTORY,
                      exact: !0,
                      component: m
                  }),
                  (0, i.jsx)(o.Z, {
                      path: u.Z5c.APPLICATION_DIRECTORY_SEARCH,
                      component: p
                  }),
                  (0, i.jsx)(l.l_, {
                      path: u.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', d.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED),
                      to: u.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', d.ApplicationDirectoryProfileSections.STORE)
                  }),
                  (0, i.jsx)(o.Z, {
                      path: u.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section?'),
                      component: h
                  })
              ]
          });
}
