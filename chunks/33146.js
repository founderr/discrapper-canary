n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(411104);
var i = n(200651);
n(192379);
var a = n(481060),
    l = n(34674),
    r = n(927356),
    c = n(388032);
function o(e) {
    let t,
        n,
        { category: o, className: s, onViewAll: d } = e;
    return (
        null == o || (0, l.m0)(o)
            ? ((t = c.intl.string(c.t.fAW3z8)), (n = c.intl.string(c.t.NrZdiY)))
            : ((t = c.intl.formatToPlainString(c.t['9wDqBA'], { categoryName: o.name })),
              (n = c.intl.format(c.t.iN55IS, {
                  viewAllHook: (e, t) =>
                      (0, i.jsx)(
                          a.Anchor,
                          {
                              onClick: d,
                              children: e
                          },
                          t
                      )
              }))),
        (0, i.jsx)(r.Z, {
            className: s,
            heading: t,
            body: n
        })
    );
}
