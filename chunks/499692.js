var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(873199),
    o = n(442837),
    c = n(481060),
    d = n(674588),
    u = n(368862),
    _ = n(125909),
    E = n(857192),
    h = n(797908),
    m = n(292191),
    I = n(253509);
t.Z = function (e) {
    let { onSelectApplication: t } = e,
        n = (0, o.e7)([E.default], () => E.default.appDirectoryIncludesInactiveCollections),
        s = (0, o.e7)([u.Z], () => u.Z.getFetchState({ includesInactive: n })),
        p = (0, o.e7)([u.Z], () => u.Z.getCollections({ includesInactive: n }));
    a.useEffect(() => {
        d.bG({ includesInactive: n });
    }, [n]);
    let g = a.useMemo(() => (null == p ? void 0 : p.filter((e) => e.type !== l.o.GALLERY)), [p]);
    return s === u.M.ERROR
        ? (0, i.jsx)('div', {
              className: I.errorContainer,
              children: (0, i.jsx)(m.Z, { className: I.error })
          })
        : (0, i.jsx)(_.Z, {
              loading: s === u.M.FETCHING,
              children:
                  null == g
                      ? void 0
                      : g.map((e, n) =>
                            (0, i.jsxs)(
                                'div',
                                {
                                    children: [
                                        (0, i.jsx)(c.Heading, {
                                            className: r()(I.sectionTitle, { [I.titleExtraPadding]: 0 === n }),
                                            variant: 'heading-lg/semibold',
                                            color: 'header-primary',
                                            children: e.title
                                        }),
                                        (0, i.jsx)('div', {
                                            className: I.content,
                                            children: e.application_directory_collection_items.map((e) => {
                                                let { id: n, application: a } = e;
                                                return null == a
                                                    ? null
                                                    : (0, i.jsx)(
                                                          h.Z,
                                                          {
                                                              application: a,
                                                              onSelectApplication: t,
                                                              showCategory: !0
                                                          },
                                                          n
                                                      );
                                            })
                                        })
                                    ]
                                },
                                n
                            )
                        )
          });
};
