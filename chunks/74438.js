i.r(t),
    i.d(t, {
        default: function () {
            return f;
        }
    });
var n = i(200651),
    a = i(192379),
    r = i(399606),
    o = i(626135),
    l = i(894653),
    s = i(738130),
    c = i(132871),
    d = i(961106),
    u = i(62413),
    h = i(603406),
    p = i(165209),
    m = i(981631),
    _ = i(498889);
function f() {
    let e = (0, c.useApplicationDirectoryHistory)((e) => e.guildId),
        t = (0, r.e7)([l.Z], () => l.Z.getCategories()),
        i = (0, c.getPreviousView)();
    return (
        a.useEffect(() => {
            o.default.track(m.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: c.ApplicationDirectoryViews.HOME,
                previous_page: null == i ? void 0 : i.type,
                guild_id: e,
                referrer: document.referrer
            });
        }, [e, i]),
        (0, n.jsxs)(s.Z, {
            children: [
                (0, n.jsx)(h.Z, {}),
                null != t && t.length > 0 && (0, n.jsx)(d.Z, { className: _.categoryList }),
                (0, n.jsx)('main', {
                    className: _.collectionsContainer,
                    children: (0, n.jsx)(u.Z, {})
                }),
                (0, n.jsx)(p.Z, {})
            ]
        })
    );
}
