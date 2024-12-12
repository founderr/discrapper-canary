n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(529103),
    d = n(194359),
    u = n(410575),
    h = n(607070),
    m = n(100527),
    p = n(906732),
    g = n(795448),
    f = n(922611),
    _ = n(699516),
    E = n(974042),
    I = n(451478),
    C = n(434184),
    v = n(701861),
    S = n(437314),
    N = n(696577),
    T = n(163417),
    b = n(830880),
    A = n(492347),
    x = n(42575),
    Z = n(617015),
    L = n(981631),
    y = n(388032),
    P = n(732144);
t.Z = function (e) {
    let { sectionFilter: t, titleId: l } = e,
        { analyticsLocations: O } = (0, p.ZP)(m.Z.FRIENDS_LIST),
        { rows: R, section: j } = (0, o.cj)([E.ZP], () => E.ZP.getState()),
        D = (0, o.e7)([I.Z], () => I.Z.isFocused()),
        { relationshipCount: M, hasBlockedOrIgnored: w } = (0, o.cj)([_.Z], () => ({
            relationshipCount: _.Z.getRelationshipCount(),
            hasBlockedOrIgnored: _.Z.getBlockedOrIgnoredIDs().length > 0
        })),
        k = (0, f.Do)({ location: 'PeopleList' }),
        [U, G] = r.useState(() => {
            let e = {};
            for (let t of Object.values(L.pJs)) e[t] = '';
            return e;
        }),
        B = () => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e('36312').then(n.bind(n, 153932));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        H = r.useCallback(
            (e) => {
                G({
                    ...U,
                    [t]: e
                });
            },
            [U, t]
        ),
        V = r.useCallback(() => {
            G({
                ...U,
                [t]: ''
            });
        }, [U, t]),
        F = t === L.pJs.PENDING && (R.filter(L.pJs.SPAM).length > 0 || R.filter(L.pJs.PENDING_IGNORED).length > 0),
        z = R.filter(t, U[t]);
    if (
        (r.useEffect(() => {
            t === L.pJs.ALL && (0, g.d$)();
        }, [t]),
        0 === z.length && '' === U[t])
    )
        return (0, i.jsx)('div', {
            className: P.emptyStateContainer,
            children: (0, i.jsx)(
                S.Z,
                {
                    type: t,
                    onClick: F
                        ? B
                        : t !== L.pJs.PENDING
                          ? () => {
                                c.Z.setSection(L.pJs.ADD_FRIEND);
                            }
                          : void 0
                },
                j
            )
        });
    let Y = [z],
        W = 0 === z.length && '' !== U[t],
        K = z.filter((e) => e.type === L.OGo.PENDING_INCOMING).length,
        q = t === L.pJs.PENDING && K > 0 && K >= Z.yf;
    return (0, i.jsx)(p.Gt, {
        value: O,
        children: (0, i.jsxs)(u.Z, {
            section: L.jXE.FRIENDS_LIST,
            children: [
                k && w && (0, i.jsx)(b.R, {}),
                (0, i.jsx)(s.SearchBar, {
                    className: a()(P.searchBar, W ? P.searchEmptyState : null),
                    query: U[t],
                    onChange: H,
                    onClear: V,
                    size: s.SearchBar.Sizes.MEDIUM
                }),
                (0, i.jsxs)('div', {
                    className: P.sectionTitle,
                    children: [
                        (0, i.jsx)(A.Z, {
                            id: l,
                            title: (function (e, t) {
                                switch (e) {
                                    case L.pJs.ONLINE:
                                        return y.intl.formatToPlainString(y.t.BagU2d, { online: t.toString() });
                                    case L.pJs.PENDING:
                                        return y.intl.formatToPlainString(y.t.XIpar6, { count: t.toString() });
                                    case L.pJs.SUGGESTIONS:
                                        return y.intl.formatToPlainString(y.t['DYMZ/v'], { count: t.toString() });
                                    case L.pJs.BLOCKED:
                                        return y.intl.formatToPlainString(y.t.M83kKy, { count: t.toString() });
                                    default:
                                        return y.intl.formatToPlainString(y.t.rHRrhI, { count: t.toString() });
                                }
                            })(t, z.length)
                        }),
                        q &&
                            (0, i.jsx)(s.Button, {
                                look: s.ButtonLooks.LINK,
                                color: s.ButtonColors.LINK,
                                className: P.clearButton,
                                size: s.Button.Sizes.TINY,
                                onClick: (e) => {
                                    e.stopPropagation(), d.Z.confirmClearPendingRelationships(K);
                                },
                                'aria-label': y.intl.string(y.t.T3uOb2),
                                children: y.intl.string(y.t.T3uOb2)
                            })
                    ]
                }),
                W
                    ? (0, i.jsx)('div', {
                          className: P.emptyStateContainer,
                          children: (0, i.jsx)(S.Z, { type: S.j.SECTION_NO_RESULTS }, j)
                      })
                    : (0, i.jsx)(T.Z, {
                          relationshipCount: M,
                          statusSections: Y,
                          renderRow: function (e) {
                              switch (t) {
                                  case L.pJs.BLOCKED:
                                      return (0, i.jsx)(C.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case L.pJs.PENDING:
                                      return (0, i.jsx)(N.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case L.pJs.SUGGESTIONS:
                                      return (0, i.jsx)(x.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case L.pJs.ONLINE:
                                  case L.pJs.ALL:
                                  default:
                                      let { key: n, ...r } = e;
                                      return (0, i.jsx)(
                                          v.Z,
                                          {
                                              ...r,
                                              isFocused: D
                                          },
                                          n
                                      );
                              }
                          },
                          sectionFilter: t,
                          searchQuery: U[t],
                          useReducedMotion: h.Z.useReducedMotion,
                          footer: F
                              ? (0, i.jsx)(s.Button, {
                                    look: s.Button.Looks.LINK,
                                    color: P.viewSpamButtonColor,
                                    className: P.viewSpamButton,
                                    onClick: () => B(),
                                    size: s.ButtonSizes.TINY,
                                    children: (0, i.jsx)(s.Text, {
                                        variant: 'text-xs/medium',
                                        children: k ? y.intl.string(y.t.R40bU1) : y.intl.string(y.t.rXl8fn)
                                    })
                                })
                              : null
                      })
            ]
        })
    });
};
