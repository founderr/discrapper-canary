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
    f = n(922611),
    _ = n(699516),
    I = n(974042),
    E = n(451478),
    C = n(434184),
    v = n(701861),
    N = n(437314),
    S = n(696577),
    T = n(163417),
    x = n(830880),
    b = n(492347),
    A = n(42575),
    Z = n(617015),
    L = n(981631),
    y = n(388032),
    P = n(732144);
t.Z = function (e) {
    let { sectionFilter: t, titleId: l } = e,
        { analyticsLocations: O } = (0, p.ZP)(m.Z.FRIENDS_LIST),
        { rows: R, section: j } = (0, s.cj)([I.ZP], () => I.ZP.getState()),
        D = (0, s.e7)([E.Z], () => E.Z.isFocused()),
        M = (0, s.e7)([_.Z], () => _.Z.getRelationshipCount()),
        w = (0, f.Do)({ location: 'PeopleList' }),
        [k, U] = r.useState(() => {
            let e = {};
            for (let t of Object.values(L.pJs)) e[t] = '';
            return e;
        }),
        G = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e('36312').then(n.bind(n, 153932));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        B = r.useCallback(
            (e) => {
                U({
                    ...k,
                    [t]: e
                });
            },
            [k, t]
        ),
        H = r.useCallback(() => {
            U({
                ...k,
                [t]: ''
            });
        }, [k, t]),
        V = t === L.pJs.PENDING && (R.filter(L.pJs.SPAM).length > 0 || R.filter(L.pJs.PENDING_IGNORED).length > 0),
        F = R.filter(t, k[t]);
    if (
        (r.useEffect(() => {
            t === L.pJs.ALL && (0, g.d$)();
        }, [t]),
        0 === F.length && '' === k[t])
    )
        return (0, i.jsx)('div', {
            className: P.emptyStateContainer,
            children: (0, i.jsx)(
                N.Z,
                {
                    type: t,
                    onClick: V
                        ? G
                        : t !== L.pJs.PENDING
                          ? () => {
                                c.Z.setSection(L.pJs.ADD_FRIEND);
                            }
                          : void 0
                },
                j
            )
        });
    let z = [F],
        W = 0 === F.length && '' !== k[t],
        Y = F.filter((e) => e.type === L.OGo.PENDING_INCOMING).length,
        K = t === L.pJs.PENDING && Y > 0 && Y >= Z.yf;
    return (0, i.jsx)(p.Gt, {
        value: O,
        children: (0, i.jsxs)(u.Z, {
            section: L.jXE.FRIENDS_LIST,
            children: [
                w && (0, i.jsx)(x.R, {}),
                (0, i.jsx)(o.SearchBar, {
                    className: a()(P.searchBar, W ? P.searchEmptyState : null),
                    query: k[t],
                    onChange: B,
                    onClear: H,
                    size: o.SearchBar.Sizes.MEDIUM
                }),
                (0, i.jsxs)('div', {
                    className: P.sectionTitle,
                    children: [
                        (0, i.jsx)(b.Z, {
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
                            })(t, F.length)
                        }),
                        K &&
                            (0, i.jsx)(o.Button, {
                                look: o.ButtonLooks.LINK,
                                color: o.ButtonColors.LINK,
                                className: P.clearButton,
                                size: o.Button.Sizes.TINY,
                                onClick: (e) => {
                                    e.stopPropagation(), d.Z.confirmClearPendingRelationships(Y);
                                },
                                'aria-label': y.intl.string(y.t.T3uOb2),
                                children: y.intl.string(y.t.T3uOb2)
                            })
                    ]
                }),
                W
                    ? (0, i.jsx)('div', {
                          className: P.emptyStateContainer,
                          children: (0, i.jsx)(N.Z, { type: N.j.SECTION_NO_RESULTS }, j)
                      })
                    : (0, i.jsx)(T.Z, {
                          relationshipCount: M,
                          statusSections: z,
                          renderRow: function (e) {
                              switch (t) {
                                  case L.pJs.BLOCKED:
                                      return (0, i.jsx)(C.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case L.pJs.PENDING:
                                      return (0, i.jsx)(S.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case L.pJs.SUGGESTIONS:
                                      return (0, i.jsx)(A.Z, {
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
                          searchQuery: k[t],
                          useReducedMotion: h.Z.useReducedMotion,
                          footer: V
                              ? (0, i.jsx)(o.Button, {
                                    look: o.Button.Looks.LINK,
                                    color: P.viewSpamButtonColor,
                                    className: P.viewSpamButton,
                                    onClick: () => G(),
                                    size: o.ButtonSizes.TINY,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        children: w ? y.intl.string(y.t.R40bU1) : y.intl.string(y.t.rXl8fn)
                                    })
                                })
                              : null
                      })
            ]
        })
    });
};
