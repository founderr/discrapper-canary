l.d(t, {
    Z: function () {
        return R;
    }
}),
    l(47120);
var n = l(200651),
    a = l(192379),
    o = l(120356),
    s = l.n(o),
    i = l(498607),
    r = l.n(i),
    C = l(399606),
    c = l(433517),
    d = l(481060),
    u = l(430824),
    m = l(496675),
    _ = l(588215),
    E = l(241559),
    h = l(893966),
    M = l(256003),
    x = l(170323),
    b = l(434368),
    T = l(42170),
    L = l(123846),
    g = l(42551),
    H = l(981631),
    I = l(689938),
    f = l(443547),
    p = l(352533);
function N(e) {
    let { label: t, onFilter: l, isFiltered: a, isSorted: o, className: i, ...r } = e,
        C = a ? 'header-primary' : 'header-secondary';
    return (
        o && (C = 'text-brand'),
        (0, n.jsx)('th', {
            className: s()(f.tableHeaderCellContainer, i),
            children: (0, n.jsxs)(d.Clickable, {
                ...r,
                onClick: l,
                className: s()(f.tableHeaderCell, { [f.tableHeaderCellWithFilter]: null != l }),
                children: [
                    (0, n.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: C,
                        children: t
                    }),
                    null != l &&
                        (0, n.jsx)('div', {
                            className: f.filterIconButton,
                            children: (0, n.jsx)(d.FiltersHorizontalIcon, {
                                size: 'custom',
                                className: f.filterIcon,
                                color: a ? d.tokens.colors.CONTROL_BRAND_FOREGROUND.css : d.tokens.colors.TEXT_MUTED.css,
                                width: 16,
                                height: 16
                            })
                        })
                ]
            })
        })
    );
}
let A = 'member-safety-force-show-signals-tooltip';
function R(e) {
    let { guildId: t, currentPagedMembers: l } = e,
        o = (0, C.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], r()),
        i = (0, C.e7)([m.Z, u.Z], () => m.Z.can(H.Plq.MANAGE_GUILD, u.Z.getGuild(t)), [t]),
        { selectedUserIds: R, addUsers: S, clearSelection: Z } = (0, M.Z)(t),
        j = o.requireUnusualDmActivity || o.requireCommunicationDisabled || o.requireUnusualAccountActivity || o.requireUsernameQuarantined,
        v = o.selectedRoleIds.size > 0,
        D = null != o.selectedJoinDateOption.afterDate,
        B = o.selectedSort === _.d$.ORDER_BY_GUILD_JOINED_AT_ASC,
        O = null != o.selectedAccountAgeOption.afterDate,
        V = o.selectedSort === _.d$.ORDER_BY_USER_ID_ASC || o.selectedSort === _.d$.ORDER_BY_USER_ID_DESC,
        U = null != o.selectedSourceInviteCode && '' !== o.selectedSourceInviteCode,
        w = null != o.selectedJoinSourceType,
        k = U || w,
        [F, y] = a.useState(null == c.K.get(A, null)),
        P = a.useCallback(() => {
            c.K.set(A, Date.now()), y(!1);
        }, []),
        Y = (0, E.xC)(t),
        G = a.useMemo(() => l.filter((e) => (0, E.rX)(t, Y, e)), [Y, l, t]),
        z = G.length > 0,
        q = 0 === G.filter((e) => !R.has(e)).length,
        W = a.useCallback(() => {
            z && (q ? Z() : S(G));
        }, [z, q, Z, S, G]);
    return (0, n.jsx)('thead', {
        children: (0, n.jsxs)('tr', {
            className: f.tableHeaderRow,
            children: [
                Y &&
                    (0, n.jsx)('th', {
                        className: s()(f.tableHeaderCellContainer, p.xsmallCol),
                        children: (0, n.jsx)(d.Tooltip, {
                            shouldShow: !z,
                            text: I.Z.Messages.MEMBER_SAFETY_CANNOT_SELECT_ALL,
                            children: (e) =>
                                (0, n.jsx)(d.Clickable, {
                                    ...e,
                                    onClick: W,
                                    className: f.tableHeaderCell,
                                    children: (0, n.jsx)(d.Checkbox, {
                                        type: d.Checkbox.Types.INVERTED,
                                        value: q,
                                        disabled: !z
                                    })
                                })
                        })
                    }),
                (0, n.jsx)(N, { label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_NAME }),
                i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(d.Popout, {
                                  animation: d.Popout.Animation.FADE,
                                  position: 'bottom',
                                  spacing: 4,
                                  align: 'left',
                                  renderPopout: () =>
                                      (0, n.jsx)(T.Z, {
                                          guildId: t,
                                          onClose: H.dG4
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, n.jsx)(N, {
                                          label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
                                          onFilter: t,
                                          isFiltered: D,
                                          isSorted: B,
                                          className: p.smallCol,
                                          ...l
                                      });
                                  }
                              }),
                              (0, n.jsx)(d.Popout, {
                                  animation: d.Popout.Animation.FADE,
                                  position: 'bottom',
                                  spacing: 4,
                                  align: 'left',
                                  renderPopout: () =>
                                      (0, n.jsx)(x.Z, {
                                          guildId: t,
                                          onClose: H.dG4
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return (0, n.jsx)(N, {
                                          label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
                                          onFilter: t,
                                          isFiltered: O,
                                          isSorted: V,
                                          className: p.smallCol,
                                          ...l
                                      });
                                  }
                              })
                          ]
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(N, {
                                  label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
                                  className: p.smallCol
                              }),
                              (0, n.jsx)(N, {
                                  label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
                                  className: p.smallCol
                              })
                          ]
                      }),
                i
                    ? (0, n.jsx)(d.Popout, {
                          animation: d.Popout.Animation.FADE,
                          position: 'bottom',
                          spacing: 4,
                          align: 'left',
                          renderPopout: () =>
                              (0, n.jsx)(L.Z, {
                                  guildId: t,
                                  onClose: H.dG4
                              }),
                          children: (e) => {
                              let { onClick: t, ...l } = e;
                              return (0, n.jsx)(N, {
                                  label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
                                  onFilter: t,
                                  isFiltered: k,
                                  className: p.smallCol,
                                  ...l
                              });
                          }
                      })
                    : i &&
                      (0, n.jsx)(N, {
                          label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
                          className: p.smallCol
                      }),
                (0, n.jsx)(d.Popout, {
                    animation: d.Popout.Animation.FADE,
                    position: 'bottom',
                    spacing: 4,
                    align: 'left',
                    renderPopout: (e) => {
                        let { closePopout: l } = e;
                        return (0, n.jsx)(g.Z, {
                            guildId: t,
                            onClose: l
                        });
                    },
                    children: (e) => {
                        let { onClick: t, ...l } = e;
                        return (0, n.jsx)(N, {
                            label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_ROLES,
                            onFilter: t,
                            isFiltered: v,
                            className: s()(p.mediumCol),
                            ...l
                        });
                    }
                }),
                (0, n.jsx)(d.Tooltip, {
                    text: I.Z.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
                    position: 'top',
                    align: 'left',
                    forceOpen: F,
                    shouldShow: !0,
                    color: d.Tooltip.Colors.BRAND,
                    children: (e) =>
                        (0, n.jsx)(d.Popout, {
                            animation: d.Popout.Animation.FADE,
                            position: 'bottom',
                            spacing: 4,
                            align: 'left',
                            renderPopout: (e) => {
                                let { closePopout: l } = e;
                                return (0, n.jsx)(b.Z, {
                                    guildId: t,
                                    onClose: l
                                });
                            },
                            children: (t) =>
                                (0, n.jsx)(N, {
                                    label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
                                    'aria-label': I.Z.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
                                    onFilter: (l) => {
                                        var n, a;
                                        P(), null === (n = t.onClick) || void 0 === n || n.call(t, l), null === (a = e.onClick) || void 0 === a || a.call(e);
                                    },
                                    isFiltered: j,
                                    className: s()(p.smallCol),
                                    onMouseEnter: () => {
                                        var l, n;
                                        P(), null === (l = e.onMouseEnter) || void 0 === l || l.call(e), null === (n = t.onMouseEnter) || void 0 === n || n.call(t);
                                    },
                                    onMouseDown: t.onMouseDown,
                                    onMouseLeave: e.onMouseLeave,
                                    onBlur: e.onBlur,
                                    onFocus: e.onFocus,
                                    onKeyDown: t.onKeyDown,
                                    'aria-controls': t['aria-controls'],
                                    'aria-expanded': t['aria-expanded']
                                })
                        })
                }),
                (0, n.jsx)(N, {
                    label: I.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_ACTIONS,
                    className: p.smallCol
                })
            ]
        })
    });
}
