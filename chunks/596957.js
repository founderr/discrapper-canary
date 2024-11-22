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
    N = n(437314),
    T = n(696577),
    S = n(163417),
    A = n(492347),
    x = n(42575),
    b = n(617015),
    Z = n(981631),
    L = n(388032),
    y = n(522756);
t.Z = function (e) {
    let { sectionFilter: t, titleId: l } = e,
        { analyticsLocations: P } = (0, p.ZP)(m.Z.FRIENDS_LIST),
        { rows: O, section: R } = (0, s.cj)([E.ZP], () => E.ZP.getState()),
        j = (0, s.e7)([I.Z], () => I.Z.isFocused()),
        D = (0, s.e7)([_.Z], () => _.Z.getRelationshipCount()),
        M = (0, f.Do)({ location: 'PeopleList' }),
        [w, k] = r.useState(() => {
            let e = {};
            for (let t of Object.values(Z.pJs)) e[t] = '';
            return e;
        }),
        U = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e('36312').then(n.bind(n, 153932));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        G = r.useCallback(
            (e) => {
                k({
                    ...w,
                    [t]: e
                });
            },
            [w, t]
        ),
        B = r.useCallback(() => {
            k({
                ...w,
                [t]: ''
            });
        }, [w, t]),
        H = t === Z.pJs.PENDING && (O.filter(Z.pJs.SPAM).length > 0 || O.filter(Z.pJs.PENDING_IGNORED).length > 0),
        V = O.filter(t, w[t]);
    if (
        (r.useEffect(() => {
            t === Z.pJs.ALL && (0, g.d$)();
        }, [t]),
        0 === V.length && '' === w[t])
    )
        return (0, i.jsx)('div', {
            className: y.emptyStateContainer,
            children: (0, i.jsx)(
                N.Z,
                {
                    type: t,
                    onClick: H
                        ? U
                        : t !== Z.pJs.PENDING
                          ? () => {
                                c.Z.setSection(Z.pJs.ADD_FRIEND);
                            }
                          : void 0
                },
                R
            )
        });
    let F = [V],
        z = 0 === V.length && '' !== w[t],
        W = V.filter((e) => e.type === Z.OGo.PENDING_INCOMING).length,
        Y = t === Z.pJs.PENDING && W > 0 && W >= b.yf;
    return (0, i.jsx)(p.Gt, {
        value: P,
        children: (0, i.jsxs)(u.Z, {
            section: Z.jXE.FRIENDS_LIST,
            children: [
                (0, i.jsx)(o.SearchBar, {
                    className: a()(y.searchBar, z ? y.searchEmptyState : null),
                    query: w[t],
                    onChange: G,
                    onClear: B,
                    size: o.SearchBar.Sizes.MEDIUM
                }),
                (0, i.jsxs)('div', {
                    className: y.sectionTitle,
                    children: [
                        (0, i.jsx)(A.Z, {
                            id: l,
                            title: (function (e, t) {
                                switch (e) {
                                    case Z.pJs.ONLINE:
                                        return L.intl.formatToPlainString(L.t.BagU2d, { online: t.toString() });
                                    case Z.pJs.PENDING:
                                        return L.intl.formatToPlainString(L.t.XIpar6, { count: t.toString() });
                                    case Z.pJs.SUGGESTIONS:
                                        return L.intl.formatToPlainString(L.t['DYMZ/v'], { count: t.toString() });
                                    case Z.pJs.BLOCKED:
                                        return L.intl.formatToPlainString(L.t.M83kKy, { count: t.toString() });
                                    default:
                                        return L.intl.formatToPlainString(L.t.rHRrhI, { count: t.toString() });
                                }
                            })(t, V.length)
                        }),
                        Y &&
                            (0, i.jsx)(o.Button, {
                                look: o.ButtonLooks.LINK,
                                color: o.ButtonColors.LINK,
                                className: y.clearButton,
                                size: o.Button.Sizes.TINY,
                                onClick: (e) => {
                                    e.stopPropagation(), d.Z.confirmClearPendingRelationships(W);
                                },
                                'aria-label': L.intl.string(L.t.T3uOb2),
                                children: L.intl.string(L.t.T3uOb2)
                            })
                    ]
                }),
                z
                    ? (0, i.jsx)('div', {
                          className: y.emptyStateContainer,
                          children: (0, i.jsx)(N.Z, { type: N.j.SECTION_NO_RESULTS }, R)
                      })
                    : (0, i.jsx)(S.Z, {
                          relationshipCount: D,
                          statusSections: F,
                          renderRow: function (e) {
                              switch (t) {
                                  case Z.pJs.BLOCKED:
                                      return (0, i.jsx)(C.Z, {
                                          ...e,
                                          isFocused: j
                                      });
                                  case Z.pJs.PENDING:
                                      return (0, i.jsx)(T.Z, {
                                          ...e,
                                          isFocused: j
                                      });
                                  case Z.pJs.SUGGESTIONS:
                                      return (0, i.jsx)(x.Z, {
                                          ...e,
                                          isFocused: j
                                      });
                                  case Z.pJs.ONLINE:
                                  case Z.pJs.ALL:
                                  default:
                                      let { key: n, ...r } = e;
                                      return (0, i.jsx)(
                                          v.Z,
                                          {
                                              ...r,
                                              isFocused: j
                                          },
                                          n
                                      );
                              }
                          },
                          sectionFilter: t,
                          searchQuery: w[t],
                          useReducedMotion: h.Z.useReducedMotion,
                          footer: H
                              ? (0, i.jsx)(o.Button, {
                                    look: o.Button.Looks.LINK,
                                    color: y.viewSpamButtonColor,
                                    className: y.viewSpamButton,
                                    onClick: () => U(),
                                    size: o.ButtonSizes.TINY,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        children: M ? L.intl.string(L.t.R40bU1) : L.intl.string(L.t.rXl8fn)
                                    })
                                })
                              : null
                      })
            ]
        })
    });
};
