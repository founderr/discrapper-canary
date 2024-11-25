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
    E = n(974042),
    I = n(451478),
    C = n(434184),
    v = n(701861),
    S = n(437314),
    N = n(696577),
    T = n(163417),
    A = n(830880),
    b = n(492347),
    x = n(42575),
    Z = n(617015),
    L = n(981631),
    y = n(388032),
    O = n(522756);
t.Z = function (e) {
    let { sectionFilter: t, titleId: l } = e,
        { analyticsLocations: R } = (0, p.ZP)(m.Z.FRIENDS_LIST),
        { rows: P, section: j } = (0, s.cj)([E.ZP], () => E.ZP.getState()),
        D = (0, s.e7)([I.Z], () => I.Z.isFocused()),
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
        V = r.useCallback(() => {
            U({
                ...k,
                [t]: ''
            });
        }, [k, t]),
        H = t === L.pJs.PENDING && (P.filter(L.pJs.SPAM).length > 0 || P.filter(L.pJs.PENDING_IGNORED).length > 0),
        F = P.filter(t, k[t]);
    if (
        (r.useEffect(() => {
            t === L.pJs.ALL && (0, g.d$)();
        }, [t]),
        0 === F.length && '' === k[t])
    )
        return (0, i.jsx)('div', {
            className: O.emptyStateContainer,
            children: (0, i.jsx)(
                S.Z,
                {
                    type: t,
                    onClick: H
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
        Y = 0 === F.length && '' !== k[t],
        W = F.filter((e) => e.type === L.OGo.PENDING_INCOMING).length,
        K = t === L.pJs.PENDING && W > 0 && W >= Z.yf;
    return (0, i.jsx)(p.Gt, {
        value: R,
        children: (0, i.jsxs)(u.Z, {
            section: L.jXE.FRIENDS_LIST,
            children: [
                w && (0, i.jsx)(A.R, {}),
                (0, i.jsx)(o.SearchBar, {
                    className: a()(O.searchBar, Y ? O.searchEmptyState : null),
                    query: k[t],
                    onChange: B,
                    onClear: V,
                    size: o.SearchBar.Sizes.MEDIUM
                }),
                (0, i.jsxs)('div', {
                    className: O.sectionTitle,
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
                                className: O.clearButton,
                                size: o.Button.Sizes.TINY,
                                onClick: (e) => {
                                    e.stopPropagation(), d.Z.confirmClearPendingRelationships(W);
                                },
                                'aria-label': y.intl.string(y.t.T3uOb2),
                                children: y.intl.string(y.t.T3uOb2)
                            })
                    ]
                }),
                Y
                    ? (0, i.jsx)('div', {
                          className: O.emptyStateContainer,
                          children: (0, i.jsx)(S.Z, { type: S.j.SECTION_NO_RESULTS }, j)
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
                          searchQuery: k[t],
                          useReducedMotion: h.Z.useReducedMotion,
                          footer: H
                              ? (0, i.jsx)(o.Button, {
                                    look: o.Button.Looks.LINK,
                                    color: O.viewSpamButtonColor,
                                    className: O.viewSpamButton,
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
