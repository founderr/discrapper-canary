c.r(t),
    c.d(t, {
        default: function () {
            return R;
        }
    });
var n = c(200651),
    a = c(192379),
    o = c(512969),
    i = c(608787),
    I = c(765717),
    r = c(352057),
    _ = c(156482),
    l = c(272242),
    p = c(981631);
let P = a.lazy(() =>
        (0, i.wE)({
            createPromise: () => Promise.all([c.e('29549'), c.e('31605'), c.e('6380'), c.e('72181'), c.e('65840'), c.e('74891'), c.e('18101'), c.e('60365'), c.e('11794'), c.e('77803'), c.e('28958'), c.e('52903'), c.e('83374')]).then(c.bind(c, 753450)),
            webpackId: 753450
        })
    ),
    O = a.lazy(() =>
        (0, i.wE)({
            createPromise: () => Promise.all([c.e('6380'), c.e('65840'), c.e('18101'), c.e('11794'), c.e('28958'), c.e('81176')]).then(c.bind(c, 74438)),
            webpackId: 74438
        })
    ),
    E = a.lazy(() =>
        (0, i.wE)({
            createPromise: () => Promise.all([c.e('6380'), c.e('65840'), c.e('18101'), c.e('11794'), c.e('28958'), c.e('80171')]).then(c.bind(c, 675869)),
            webpackId: 675869
        })
    );
function R() {
    return (0, r.h)({
        location: 'ApplicationDirectoryRoutes',
        autoTrackExposure: !1
    })
        ? (0, n.jsx)(o.AW, {
              path: p.Z5c.APPLICATION_DIRECTORY,
              component: _.Z
          })
        : (0, n.jsxs)(o.rs, {
              children: [
                  (0, n.jsx)(I.Z, {
                      path: p.Z5c.APPLICATION_DIRECTORY,
                      exact: !0,
                      component: O
                  }),
                  (0, n.jsx)(I.Z, {
                      path: p.Z5c.APPLICATION_DIRECTORY_SEARCH,
                      component: E
                  }),
                  (0, n.jsx)(o.l_, {
                      path: p.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', l.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED),
                      to: p.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', l.ApplicationDirectoryProfileSections.STORE)
                  }),
                  (0, n.jsx)(I.Z, {
                      path: p.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section?'),
                      component: P
                  })
              ]
          });
}
