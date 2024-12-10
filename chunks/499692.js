n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(873199),
    s = n(442837),
    c = n(481060),
    d = n(434650),
    u = n(674588),
    h = n(368862),
    m = n(125909),
    p = n(857192),
    g = n(881294),
    f = n(797908),
    _ = n(292191),
    E = n(981631),
    I = n(318708);
function C(e) {
    let { collection: t, index: n, onSelectApplication: l } = e,
        o = (function (e) {
            let { collectionId: t, index: n } = e,
                [i, l] = r.useState(!1),
                a = (0, d.O)((e) => {
                    e && l(!0);
                });
            return (
                r.useEffect(() => {
                    i &&
                        (0, g.z)(E.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
                            collection_id: t,
                            collection_position: n
                        });
                }, [i, t, n]),
                a
            );
        })({
            collectionId: t.id,
            index: n
        }),
        s = r.useCallback(
            (e, i) => {
                (0, g.z)(E.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: i,
                    collection_position: n
                }),
                    l(e);
            },
            [t.id, n, l]
        );
    return (0, i.jsxs)('div', {
        ref: o,
        children: [
            (0, i.jsx)(c.Heading, {
                className: a()(I.sectionTitle, { [I.titleExtraPadding]: 0 === n }),
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: t.title
            }),
            (0, i.jsx)('div', {
                className: I.content,
                children: t.application_directory_collection_items.map((e, t) => {
                    let { id: n, application: r } = e;
                    return null == r
                        ? null
                        : (0, i.jsx)(
                              f.Z,
                              {
                                  application: r,
                                  onSelectApplication: () => s(r.id, t),
                                  showCategory: !0
                              },
                              n
                          );
                })
            })
        ]
    });
}
t.Z = function (e) {
    let { onSelectApplication: t } = e,
        n = (0, s.e7)([p.default], () => p.default.appDirectoryIncludesInactiveCollections),
        l = (0, s.e7)([h.Z], () => h.Z.getFetchState({ includesInactive: n })),
        a = (0, s.e7)([h.Z], () => h.Z.getCollections({ includesInactive: n }));
    r.useEffect(() => {
        u.bG({ includesInactive: n });
    }, [n]);
    let c = r.useMemo(() => (null == a ? void 0 : a.filter((e) => e.type !== o.o.GALLERY)), [a]);
    return l === h.M.ERROR
        ? (0, i.jsx)('div', {
              className: I.errorContainer,
              children: (0, i.jsx)(_.Z, { className: I.error })
          })
        : (0, i.jsx)(m.Z, {
              loading: l === h.M.FETCHING,
              children:
                  null == c
                      ? void 0
                      : c.map((e, n) =>
                            (0, i.jsx)(
                                C,
                                {
                                    collection: e,
                                    index: n,
                                    onSelectApplication: t
                                },
                                n
                            )
                        )
          });
};
