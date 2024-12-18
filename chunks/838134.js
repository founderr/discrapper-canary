c.r(t),
    c.d(t, {
        default: function () {
            return s;
        }
    });
var I = c(200651),
    a = c(192379),
    i = c(512969),
    o = c(608787),
    n = c(442837),
    P = c(765717),
    _ = c(926061),
    O = c(314897),
    p = c(156482),
    R = c(272242),
    l = c(981631);
let A = a.lazy(() =>
        (0, o.wE)({
            createPromise: () => Promise.all([c.e('73503'), c.e('6380'), c.e('56630'), c.e('72181'), c.e('65840'), c.e('74891'), c.e('21628'), c.e('18101'), c.e('24207'), c.e('77803'), c.e('77642'), c.e('64676'), c.e('9808')]).then(c.bind(c, 753450)),
            webpackId: 753450
        })
    ),
    E = a.lazy(() =>
        (0, o.wE)({
            createPromise: () => Promise.all([c.e('6380'), c.e('56630'), c.e('65840'), c.e('18101'), c.e('24207'), c.e('77642'), c.e('14835')]).then(c.bind(c, 74438)),
            webpackId: 74438
        })
    ),
    r = a.lazy(() =>
        (0, o.wE)({
            createPromise: () => Promise.all([c.e('6380'), c.e('56630'), c.e('65840'), c.e('18101'), c.e('24207'), c.e('77642'), c.e('37235')]).then(c.bind(c, 675869)),
            webpackId: 675869
        })
    );
function s() {
    let e = (0, n.e7)([O.default], () => O.default.isAuthenticated()),
        t = (0, _.YP)({ location: 'ApplicationDirectoryRoutes' });
    return e && t
        ? (0, I.jsx)(i.AW, {
              path: l.Z5c.APPLICATION_DIRECTORY,
              component: p.Z
          })
        : (0, I.jsxs)(i.rs, {
              children: [
                  (0, I.jsx)(P.Z, {
                      path: l.Z5c.APPLICATION_DIRECTORY,
                      exact: !0,
                      component: E
                  }),
                  (0, I.jsx)(P.Z, {
                      path: l.Z5c.APPLICATION_DIRECTORY_SEARCH,
                      component: r
                  }),
                  (0, I.jsx)(i.l_, {
                      path: l.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', R.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED),
                      to: l.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', R.ApplicationDirectoryProfileSections.STORE)
                  }),
                  (0, I.jsx)(P.Z, {
                      path: l.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section?'),
                      component: A
                  })
              ]
          });
}
