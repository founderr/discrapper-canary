c.d(t, {
    Z: function () {
        return P;
    }
}),
    c(610138),
    c(216116),
    c(78328),
    c(815648),
    c(47120);
var I = c(200651);
c(192379);
var a = c(512969),
    i = c(272242),
    o = c(981631),
    n = c(979007);
function P() {
    let e = new URLSearchParams(location.search),
        t = e.get('q'),
        c = e.get('category_id');
    return (
        e.delete('page'),
        (0, I.jsxs)(a.rs, {
            children: [
                null != c && null == t
                    ? (0, I.jsx)(a.l_, {
                          path: o.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          to: ''.concat(o.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(''.concat(c)))
                      })
                    : (0, I.jsx)(a.l_, {
                          path: o.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          to: ''.concat(o.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, '?').concat(e.toString())
                      }),
                (0, I.jsx)(a.l_, {
                    path: o.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                    to: o.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')
                }),
                (0, I.jsx)(a.l_, {
                    path: o.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', i.ApplicationDirectoryProfileSections.STORE),
                    to: o.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', n.GlobalDiscoveryAppsSections.STORE)
                }),
                (0, I.jsx)(a.l_, {
                    path: o.Z5c.APPLICATION_DIRECTORY_PROFILE(':applicationId'),
                    to: o.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId')
                }),
                (0, I.jsx)(a.l_, {
                    path: o.Z5c.APPLICATION_DIRECTORY,
                    to: o.Z5c.GLOBAL_DISCOVERY_APPS
                })
            ]
        })
    );
}
