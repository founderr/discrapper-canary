c.d(t, {
    Z: function () {
        return r;
    }
}),
    c(610138),
    c(216116),
    c(78328),
    c(815648),
    c(47120);
var n = c(200651);
c(192379);
var a = c(512969),
    o = c(272242),
    i = c(981631),
    I = c(979007);
function r() {
    let e = new URLSearchParams(location.search),
        t = e.get('q'),
        c = e.get('category_id');
    return (
        e.delete('page'),
        (0, n.jsxs)(a.rs, {
            children: [
                null != c && null == t
                    ? (0, n.jsx)(a.l_, {
                          path: i.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          to: ''.concat(i.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(''.concat(c)))
                      })
                    : (0, n.jsx)(a.l_, {
                          path: i.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          to: ''.concat(i.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, '?').concat(e.toString())
                      }),
                (0, n.jsx)(a.l_, {
                    path: i.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                    to: i.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')
                }),
                (0, n.jsx)(a.l_, {
                    path: i.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', o.ApplicationDirectoryProfileSections.STORE),
                    to: i.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', I.Wc.STORE)
                }),
                (0, n.jsx)(a.l_, {
                    path: i.Z5c.APPLICATION_DIRECTORY_PROFILE(':applicationId'),
                    to: i.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId')
                }),
                (0, n.jsx)(a.l_, {
                    path: i.Z5c.APPLICATION_DIRECTORY,
                    to: i.Z5c.GLOBAL_DISCOVERY_APPS
                })
            ]
        })
    );
}
