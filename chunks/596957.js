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
    m = n(735778),
    I = n(699516),
    g = n(974042),
    p = n(451478),
    T = n(434184),
    S = n(701861),
    f = n(437314),
    C = n(696577),
    N = n(163417),
    A = n(492347),
    v = n(42575),
    Z = n(617015),
    L = n(981631),
    R = n(689938),
    O = n(522756);
t.Z = function (e) {
    let { sectionFilter: t, titleId: s } = e,
        { analyticsLocations: x } = (0, E.ZP)(h.Z.FRIENDS_LIST),
        { rows: b, section: P } = (0, l.cj)([g.ZP], () => g.ZP.getState()),
        M = (0, l.e7)([p.Z], () => p.Z.isFocused()),
        D = (0, l.e7)([I.Z], () => I.Z.getRelationshipCount()),
        [y, j] = a.useState(() => {
            let e = {};
            for (let t of Object.values(L.pJs)) e[t] = '';
            return e;
        }),
        U = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e('26177').then(n.bind(n, 158524));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        G = a.useCallback(
            (e) => {
                j({
                    ...y,
                    [t]: e
                });
            },
            [y, t]
        ),
        w = a.useCallback(() => {
            j({
                ...y,
                [t]: ''
            });
        }, [y, t]),
        k = (0, m.A)({ location: 'people_list' }) && t === L.pJs.PENDING && b.filter(L.pJs.SPAM).length > 0,
        B = b.filter(t, y[t]);
    if (0 === B.length && '' === y[t])
        return (0, i.jsx)('div', {
            className: O.emptyStateContainer,
            children: (0, i.jsx)(
                f.Z,
                {
                    type: t,
                    onClick: k
                        ? U
                        : t !== L.pJs.PENDING
                          ? () => {
                                c.Z.setSection(L.pJs.ADD_FRIEND);
                            }
                          : void 0
                },
                P
            )
        });
    let H = [B],
        V = 0 === B.length && '' !== y[t],
        F = B.filter((e) => e.type === L.OGo.PENDING_INCOMING).length,
        Y = t === L.pJs.PENDING && F > 0 && F >= Z.yf;
    return (0, i.jsx)(E.Gt, {
        value: x,
        children: (0, i.jsxs)(u.Z, {
            section: L.jXE.FRIENDS_LIST,
            children: [
                (0, i.jsx)(o.SearchBar, {
                    className: r()(O.searchBar, V ? O.searchEmptyState : null),
                    query: y[t],
                    onChange: G,
                    onClear: w,
                    size: o.SearchBar.Sizes.MEDIUM
                }),
                (0, i.jsxs)('div', {
                    className: O.sectionTitle,
                    children: [
                        (0, i.jsx)(A.Z, {
                            id: s,
                            title: (function (e, t) {
                                switch (e) {
                                    case L.pJs.ONLINE:
                                        return R.Z.Messages.FRIENDS_ONLINE_HEADER.format({ online: t.toString() });
                                    case L.pJs.PENDING:
                                        return R.Z.Messages.FRIENDS_PENDING_HEADER.format({ count: t.toString() });
                                    case L.pJs.SUGGESTIONS:
                                        return R.Z.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({ count: t.toString() });
                                    case L.pJs.BLOCKED:
                                        return R.Z.Messages.FRIENDS_BLOCKED_HEADER.format({ count: t.toString() });
                                    default:
                                        return R.Z.Messages.FRIENDS_ALL_HEADER.format({ count: t.toString() });
                                }
                            })(t, B.length)
                        }),
                        Y &&
                            (0, i.jsx)(o.Button, {
                                look: o.ButtonLooks.LINK,
                                color: o.ButtonColors.LINK,
                                className: O.clearButton,
                                size: o.Button.Sizes.TINY,
                                onClick: (e) => {
                                    e.stopPropagation(), d.Z.confirmClearPendingRelationships(F);
                                },
                                'aria-label': R.Z.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
                                children: R.Z.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
                            })
                    ]
                }),
                V
                    ? (0, i.jsx)('div', {
                          className: O.emptyStateContainer,
                          children: (0, i.jsx)(f.Z, { type: f.j.SECTION_NO_RESULTS }, P)
                      })
                    : (0, i.jsx)(N.Z, {
                          relationshipCount: D,
                          statusSections: H,
                          renderRow: function (e) {
                              switch (t) {
                                  case L.pJs.BLOCKED:
                                      return (0, i.jsx)(T.Z, {
                                          ...e,
                                          isFocused: M
                                      });
                                  case L.pJs.PENDING:
                                      return (0, i.jsx)(C.Z, {
                                          ...e,
                                          isFocused: M
                                      });
                                  case L.pJs.SUGGESTIONS:
                                      return (0, i.jsx)(v.Z, {
                                          ...e,
                                          isFocused: M
                                      });
                                  case L.pJs.ONLINE:
                                  case L.pJs.ALL:
                                  default:
                                      return (0, i.jsx)(S.Z, {
                                          ...e,
                                          isFocused: M
                                      });
                              }
                          },
                          sectionFilter: t,
                          searchQuery: y[t],
                          useReducedMotion: _.Z.useReducedMotion,
                          footer: k
                              ? (0, i.jsx)(o.Button, {
                                    look: o.Button.Looks.LINK,
                                    color: O.viewSpamButtonColor,
                                    className: O.viewSpamButton,
                                    onClick: () => U(),
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
