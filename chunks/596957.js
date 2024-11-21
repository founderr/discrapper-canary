n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(529103),
    d = n(194359),
    u = n(410575),
    h = n(607070),
    m = n(100527),
    p = n(906732),
    g = n(795448),
    f = n(699516),
    _ = n(974042),
    E = n(451478),
    I = n(434184),
    C = n(701861),
    v = n(437314),
    N = n(696577),
    T = n(163417),
    S = n(492347),
    A = n(42575),
    x = n(617015),
    b = n(981631),
    Z = n(388032),
    L = n(522756);
t.Z = function (e) {
    let { sectionFilter: t, titleId: l } = e,
        { analyticsLocations: y } = (0, p.ZP)(m.Z.FRIENDS_LIST),
        { rows: P, section: O } = (0, s.cj)([_.ZP], () => _.ZP.getState()),
        R = (0, s.e7)([E.Z], () => E.Z.isFocused()),
        j = (0, s.e7)([f.Z], () => f.Z.getRelationshipCount()),
        [D, M] = r.useState(() => {
            let e = {};
            for (let t of Object.values(b.pJs)) e[t] = '';
            return e;
        }),
        w = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e('26177').then(n.bind(n, 158524));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        k = r.useCallback(
            (e) => {
                M({
                    ...D,
                    [t]: e
                });
            },
            [D, t]
        ),
        U = r.useCallback(() => {
            M({
                ...D,
                [t]: ''
            });
        }, [D, t]),
        G = t === b.pJs.PENDING && (P.filter(b.pJs.SPAM).length > 0 || P.filter(b.pJs.PENDING_IGNORED).length > 0),
        B = P.filter(t, D[t]);
    if (
        (r.useEffect(() => {
            t === b.pJs.ALL && (0, g.d$)();
        }, [t]),
        0 === B.length && '' === D[t])
    )
        return (0, i.jsx)('div', {
            className: L.emptyStateContainer,
            children: (0, i.jsx)(
                v.Z,
                {
                    type: t,
                    onClick: G
                        ? w
                        : t !== b.pJs.PENDING
                          ? () => {
                                c.Z.setSection(b.pJs.ADD_FRIEND);
                            }
                          : void 0
                },
                O
            )
        });
    let H = [B],
        V = 0 === B.length && '' !== D[t],
        F = B.filter((e) => e.type === b.OGo.PENDING_INCOMING).length,
        z = t === b.pJs.PENDING && F > 0 && F >= x.yf;
    return (0, i.jsx)(p.Gt, {
        value: y,
        children: (0, i.jsxs)(u.Z, {
            section: b.jXE.FRIENDS_LIST,
            children: [
                (0, i.jsx)(o.SearchBar, {
                    className: a()(L.searchBar, V ? L.searchEmptyState : null),
                    query: D[t],
                    onChange: k,
                    onClear: U,
                    size: o.SearchBar.Sizes.MEDIUM
                }),
                (0, i.jsxs)('div', {
                    className: L.sectionTitle,
                    children: [
                        (0, i.jsx)(S.Z, {
                            id: l,
                            title: (function (e, t) {
                                switch (e) {
                                    case b.pJs.ONLINE:
                                        return Z.intl.formatToPlainString(Z.t.BagU2d, { online: t.toString() });
                                    case b.pJs.PENDING:
                                        return Z.intl.formatToPlainString(Z.t.XIpar6, { count: t.toString() });
                                    case b.pJs.SUGGESTIONS:
                                        return Z.intl.formatToPlainString(Z.t['DYMZ/v'], { count: t.toString() });
                                    case b.pJs.BLOCKED:
                                        return Z.intl.formatToPlainString(Z.t.M83kKy, { count: t.toString() });
                                    default:
                                        return Z.intl.formatToPlainString(Z.t.rHRrhI, { count: t.toString() });
                                }
                            })(t, B.length)
                        }),
                        z &&
                            (0, i.jsx)(o.Button, {
                                look: o.ButtonLooks.LINK,
                                color: o.ButtonColors.LINK,
                                className: L.clearButton,
                                size: o.Button.Sizes.TINY,
                                onClick: (e) => {
                                    e.stopPropagation(), d.Z.confirmClearPendingRelationships(F);
                                },
                                'aria-label': Z.intl.string(Z.t.T3uOb2),
                                children: Z.intl.string(Z.t.T3uOb2)
                            })
                    ]
                }),
                V
                    ? (0, i.jsx)('div', {
                          className: L.emptyStateContainer,
                          children: (0, i.jsx)(v.Z, { type: v.j.SECTION_NO_RESULTS }, O)
                      })
                    : (0, i.jsx)(T.Z, {
                          relationshipCount: j,
                          statusSections: H,
                          renderRow: function (e) {
                              switch (t) {
                                  case b.pJs.BLOCKED:
                                      return (0, i.jsx)(I.Z, {
                                          ...e,
                                          isFocused: R
                                      });
                                  case b.pJs.PENDING:
                                      return (0, i.jsx)(N.Z, {
                                          ...e,
                                          isFocused: R
                                      });
                                  case b.pJs.SUGGESTIONS:
                                      return (0, i.jsx)(A.Z, {
                                          ...e,
                                          isFocused: R
                                      });
                                  case b.pJs.ONLINE:
                                  case b.pJs.ALL:
                                  default:
                                      let { key: n, ...r } = e;
                                      return (0, i.jsx)(
                                          C.Z,
                                          {
                                              ...r,
                                              isFocused: R
                                          },
                                          n
                                      );
                              }
                          },
                          sectionFilter: t,
                          searchQuery: D[t],
                          useReducedMotion: h.Z.useReducedMotion,
                          footer: G
                              ? (0, i.jsx)(o.Button, {
                                    look: o.Button.Looks.LINK,
                                    color: L.viewSpamButtonColor,
                                    className: L.viewSpamButton,
                                    onClick: () => w(),
                                    size: o.ButtonSizes.TINY,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        children: Z.intl.string(Z.t.rXl8fn)
                                    })
                                })
                              : null
                      })
            ]
        })
    });
};
