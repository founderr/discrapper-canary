n.r(t),
    n.d(t, {
        default: function () {
            return _;
        }
    });
var i = n(200651),
    r = n(192379),
    l = n(512969),
    a = n(608787),
    o = n(442837),
    s = n(765717),
    c = n(926061),
    d = n(314897),
    u = n(156482),
    h = n(272242),
    m = n(981631);
let p = r.lazy(() =>
        (0, a.wE)({
            createPromise: () => Promise.all([n.e('73503'), n.e('6380'), n.e('56630'), n.e('72181'), n.e('65840'), n.e('74891'), n.e('18101'), n.e('21628'), n.e('77803'), n.e('77642'), n.e('64676'), n.e('9808')]).then(n.bind(n, 753450)),
            webpackId: 753450
        })
    ),
    g = r.lazy(() =>
        (0, a.wE)({
            createPromise: () => Promise.all([n.e('6380'), n.e('56630'), n.e('65840'), n.e('18101'), n.e('77642'), n.e('14835')]).then(n.bind(n, 74438)),
            webpackId: 74438
        })
    ),
    f = r.lazy(() =>
        (0, a.wE)({
            createPromise: () => Promise.all([n.e('6380'), n.e('56630'), n.e('65840'), n.e('18101'), n.e('77642'), n.e('37235')]).then(n.bind(n, 675869)),
            webpackId: 675869
        })
    );
function _() {
    let e = (0, o.e7)([d.default], () => d.default.isAuthenticated()),
        t = (0, c.YP)({ location: 'ApplicationDirectoryRoutes' });
    return e && t
        ? (0, i.jsx)(l.AW, {
              path: m.Z5c.APPLICATION_DIRECTORY,
              component: u.Z
          })
        : (0, i.jsxs)(l.rs, {
              children: [
                  (0, i.jsx)(s.Z, {
                      path: m.Z5c.APPLICATION_DIRECTORY,
                      exact: !0,
                      component: g
                  }),
                  (0, i.jsx)(s.Z, {
                      path: m.Z5c.APPLICATION_DIRECTORY_SEARCH,
                      component: f
                  }),
                  (0, i.jsx)(l.l_, {
                      path: m.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', h.ApplicationDirectoryProfileSections.PREMIUM_DEPRECATED),
                      to: m.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', h.ApplicationDirectoryProfileSections.STORE)
                  }),
                  (0, i.jsx)(s.Z, {
                      path: m.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', ':section?'),
                      component: p
                  })
              ]
          });
}
