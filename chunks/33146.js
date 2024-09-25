t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(411104);
var a = t(735250);
t(470079);
var i = t(481060),
    l = t(34674),
    s = t(927356),
    r = t(689938);
function c(e) {
    let n,
        t,
        { category: c, className: o, onViewAll: d } = e;
    return (
        null == c || (0, l.m0)(c)
            ? ((n = r.Z.Messages.APP_DIRECTORY_EMPTY_SEARCH_HEADING), (t = r.Z.Messages.APP_DIRECTORY_EMPTY_SEARCH_SUBHEADING))
            : ((n = r.Z.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_HEADING.format({ categoryName: c.name })),
              (t = r.Z.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_SUBHEADING.format({
                  viewAllHook: (e, n) =>
                      (0, a.jsx)(
                          i.Anchor,
                          {
                              onClick: d,
                              children: e
                          },
                          n
                      )
              }))),
        (0, a.jsx)(s.Z, {
            className: o,
            heading: n,
            body: t
        })
    );
}
