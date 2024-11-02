i.d(t, {
    Z: function () {
        return x;
    }
}),
    i(411104);
var n = i(200651),
    a = i(192379),
    r = i(120356),
    o = i.n(r),
    l = i(873199),
    s = i(442837),
    c = i(857192),
    d = i(674588),
    u = i(368862),
    h = i(927356),
    p = i(125909),
    m = i(185156),
    _ = i(87528),
    f = i(57348),
    g = i(354775);
function x() {
    let e = (0, s.e7)([c.default], () => c.default.appDirectoryIncludesInactiveCollections),
        t = (0, s.e7)([u.Z], () => u.Z.getFetchState({ includesInactive: e })),
        i = (0, s.e7)([u.Z], () => u.Z.getCollections({ includesInactive: e }));
    return (a.useEffect(() => {
        d.bG({ includesInactive: e });
    }, [e]),
    t === u.M.ERROR)
        ? (0, n.jsx)(h.Z, {})
        : (0, n.jsx)(p.Z, {
              loading: t === u.M.FETCHING,
              children:
                  null == i
                      ? void 0
                      : i.map((e, t) => {
                            let a;
                            let r = t > 0 && i[t - 1].type !== l.o.GALLERY;
                            switch (e.type) {
                                case l.o.LIST:
                                    a = (0, n.jsx)(_.Z, { collection: e });
                                    break;
                                case l.o.LIST_WITH_IMAGE:
                                    a = (0, n.jsx)(f.Z, { collection: e });
                                    break;
                                case l.o.GALLERY:
                                    a = (0, n.jsx)(m.Z, { collection: e });
                                    break;
                                default:
                                    return null;
                            }
                            return (0, n.jsx)(
                                'div',
                                {
                                    className: o()({ [g.topMargin]: r }),
                                    children: a
                                },
                                e.id
                            );
                        })
          });
}
