c.r(t),
    c.d(t, {
        default: function () {
            return r;
        }
    });
var I = c(200651),
    a = c(192379),
    o = c(512969),
    i = c(608787),
    n = c(765717),
    _ = c(352057),
    P = c(156482),
    O = c(272242),
    p = c(981631);
let R = a.lazy(() =>
        (0, i.wE)({
            createPromise: () => Promise.all([c.e('73503'), c.e('6380'), c.e('72181'), c.e('65840'), c.e('74891'), c.e('18101'), c.e('21628'), c.e('11794'), c.e('77803'), c.e('28958'), c.e('39650'), c.e('19536')]).then(c.bind(c, 753450)),
            webpackId: 753450
        })
    ),
    E = a.lazy(() =>
        (0, i.wE)({
            createPromise: () => Promise.all([c.e('6380'), c.e('65840'), c.e('18101'), c.e('11794'), c.e('28958'), c.e('14835')]).then(c.bind(c, 74438)),
            webpackId: 74438
        })
    ),
    A = a.lazy(() =>
        (0, i.wE)({
            createPromise: () => Promise.all([c.e('6380'), c.e('65840'), c.e('18101'), c.e('11794'), c.e('28958'), c.e('37235')]).then(c.bind(c, 675869)),
            webpackId: 675869
        })
    );
function r() {
    return (0, _.h)({
        location: 'ApplicationDirectoryRoutes',
        autoTrackExposure: !1
    })
        ? (0, I.jsx)(o.AW, {
              path: p.Z5c.APPLICATION_DIRECTORY,
              component: P.Z
          })
        : (0, I.jsxs)(o.rs, {
              children: [
                  (0, I.jsx)(n.Z, {
                      path: p.Z5c.APPLICATION_DIRECTORY,
                      exact: !0,
                      component: E
                  }),
                  (0, I.jsx)(n.Z, {
                      path: p.Z5c.APPLICATION_DIRECTORY_SEARCH,
                      component: A
                  }),
                  (0, I.jsx)(o.l_, {
                      path: p.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', O.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED),
                      to: p.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', O.ApplicationDirectoryProfileSections.STORE)
                  }),
                  (0, I.jsx)(n.Z, {
                      path: p.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section?'),
                      component: R
                  })
              ]
          });
}
