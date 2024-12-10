n.r(t),
    n.d(t, {
        default: function () {
            return s;
        }
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(200651);
n(192379);
var r = n(512969),
    l = n(272242),
    a = n(981631),
    o = n(979007);
function s() {
    let e = new URLSearchParams(location.search);
    return (
        e.delete('page'),
        (0, i.jsxs)(r.rs, {
            children: [
                (0, i.jsx)(r.l_, {
                    path: a.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId'),
                    to: ''.concat(a.Z5c.APPLICATION_DIRECTORY_SEARCH, '?category_id=:categoryId')
                }),
                (0, i.jsx)(r.l_, {
                    path: a.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
                    to: ''.concat(a.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(e.toString())
                }),
                (0, i.jsx)(r.l_, {
                    path: a.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                    to: a.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(':applicationId', ':skuId')
                }),
                (0, i.jsx)(r.l_, {
                    path: a.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', o.GlobalDiscoveryAppsSections.STORE),
                    to: a.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', l.ApplicationDirectoryProfileSections.STORE)
                }),
                (0, i.jsx)(r.l_, {
                    path: a.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'),
                    to: a.Z5c.APPLICATION_DIRECTORY_PROFILE(':applicationId')
                }),
                (0, i.jsx)(r.l_, {
                    path: a.Z5c.GLOBAL_DISCOVERY_APPS,
                    to: a.Z5c.APPLICATION_DIRECTORY
                })
            ]
        })
    );
}
