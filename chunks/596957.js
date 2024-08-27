n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(758059),
    d = n(194359),
    u = n(410575),
    _ = n(607070),
    h = n(100527),
    E = n(906732),
    m = n(205976),
    I = n(735778),
    g = n(699516),
    p = n(974042),
    T = n(451478),
    S = n(434184),
    f = n(701861),
    C = n(437314),
    N = n(696577),
    A = n(163417),
    v = n(492347),
    Z = n(42575),
    L = n(617015),
    O = n(981631),
    R = n(689938),
    x = n(49175);
t.Z = function (e) {
    let { sectionFilter: t, titleId: s } = e,
        { analyticsLocations: b } = (0, E.ZP)(h.Z.FRIENDS_LIST),
        { rows: P, section: M } = (0, l.cj)([p.ZP], () => p.ZP.getState()),
        D = (0, l.e7)([T.Z], () => T.Z.isFocused()),
        y = (0, l.e7)([g.Z], () => g.Z.getRelationshipCount()),
        [j, U] = a.useState(() => {
            let e = {};
            for (let t of Object.values(O.pJs)) e[t] = '';
            return e;
        }),
        G = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e('26177').then(n.bind(n, 158524));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        k = a.useCallback(
            (e) => {
                U({
                    ...j,
                    [t]: e
                });
            },
            [j, t]
        ),
        w = a.useCallback(() => {
            U({
                ...j,
                [t]: ''
            });
        }, [j, t]),
        B = (0, I.A)({ location: 'people_list' }) && t === O.pJs.PENDING && P.filter(O.pJs.SPAM).length > 0,
        H = P.filter(t, j[t]);
    if (0 === H.length && '' === j[t])
        return (0, i.jsxs)('div', {
            className: x.emptyStateContainer,
            children: [
                t === O.pJs.ONLINE && (0, i.jsx)(m.Z, {}),
                (0, i.jsx)(
                    C.Z,
                    {
                        type: t,
                        onClick: B
                            ? G
                            : t !== O.pJs.PENDING
                              ? () => {
                                    c.Z.setSection(O.pJs.ADD_FRIEND);
                                }
                              : void 0
                    },
                    M
                )
            ]
        });
    let V = [H],
        F = 0 === H.length && '' !== j[t],
        Y = H.filter((e) => e.type === O.OGo.PENDING_INCOMING).length,
        W = t === O.pJs.PENDING && Y > 0 && Y >= L.yf;
    return (0, i.jsx)(E.Gt, {
        value: b,
        children: (0, i.jsxs)(u.Z, {
            section: O.jXE.FRIENDS_LIST,
            children: [
                (0, i.jsx)(o.SearchBar, {
                    className: r()(x.searchBar, F ? x.searchEmptyState : null),
                    query: j[t],
                    onChange: k,
                    onClear: w,
                    size: o.SearchBar.Sizes.MEDIUM
                }),
                t === O.pJs.ONLINE && '' === j[t] && (0, i.jsx)(m.Z, {}),
                (0, i.jsxs)('div', {
                    className: x.sectionTitle,
                    children: [
                        (0, i.jsx)(v.Z, {
                            id: s,
                            title: (function (e, t) {
                                switch (e) {
                                    case O.pJs.ONLINE:
                                        return R.Z.Messages.FRIENDS_ONLINE_HEADER.format({ online: t.toString() });
                                    case O.pJs.PENDING:
                                        return R.Z.Messages.FRIENDS_PENDING_HEADER.format({ count: t.toString() });
                                    case O.pJs.SUGGESTIONS:
                                        return R.Z.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({ count: t.toString() });
                                    case O.pJs.BLOCKED:
                                        return R.Z.Messages.FRIENDS_BLOCKED_HEADER.format({ count: t.toString() });
                                    default:
                                        return R.Z.Messages.FRIENDS_ALL_HEADER.format({ count: t.toString() });
                                }
                            })(t, H.length)
                        }),
                        W &&
                            (0, i.jsx)(o.Button, {
                                look: o.ButtonLooks.LINK,
                                color: o.ButtonColors.LINK,
                                className: x.clearButton,
                                size: o.Button.Sizes.TINY,
                                onClick: (e) => {
                                    e.stopPropagation(), d.Z.confirmClearPendingRelationships(Y);
                                },
                                'aria-label': R.Z.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
                                children: R.Z.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
                            })
                    ]
                }),
                F
                    ? (0, i.jsx)('div', {
                          className: x.emptyStateContainer,
                          children: (0, i.jsx)(C.Z, { type: C.j.SECTION_NO_RESULTS }, M)
                      })
                    : (0, i.jsx)(A.Z, {
                          relationshipCount: y,
                          statusSections: V,
                          renderRow: function (e) {
                              switch (t) {
                                  case O.pJs.BLOCKED:
                                      return (0, i.jsx)(S.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case O.pJs.PENDING:
                                      return (0, i.jsx)(N.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case O.pJs.SUGGESTIONS:
                                      return (0, i.jsx)(Z.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case O.pJs.ONLINE:
                                  case O.pJs.ALL:
                                  default:
                                      return (0, i.jsx)(f.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                              }
                          },
                          sectionFilter: t,
                          searchQuery: j[t],
                          useReducedMotion: _.Z.useReducedMotion,
                          footer: B
                              ? (0, i.jsx)(o.Button, {
                                    look: o.Button.Looks.LINK,
                                    color: x.viewSpamButtonColor,
                                    className: x.viewSpamButton,
                                    onClick: () => G(),
                                    size: o.ButtonSizes.TINY,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        children: R.Z.Messages.FRIEND_REQUESTS_VIEW_SPAM_REQUESTS
                                    })
                                })
                              : null
                      })
            ]
        })
    });
};
