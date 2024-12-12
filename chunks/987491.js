t.d(n, {
    Z: function () {
        return D;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(913527),
    o = t.n(s),
    c = t(442837),
    d = t(481060),
    u = t(239091),
    m = t(700582),
    x = t(979264),
    h = t(693546),
    b = t(826581),
    C = t(246364),
    j = t(98493),
    g = t(328977),
    f = t(412222),
    v = t(223312),
    N = t(146463),
    _ = t(768762),
    E = t(171368),
    T = t(598077),
    I = t(430824),
    S = t(51144),
    p = t(388032),
    M = t(174598),
    R = t(676391),
    A = t(338648),
    Z = t(216412);
function k(e) {
    let { sortOrder: n, onSortChange: t } = e;
    return (0, l.jsx)('thead', {
        children: (0, l.jsxs)('tr', {
            className: A.tableHeaderRow,
            children: [
                (0, l.jsx)('th', {
                    className: M.headerCell,
                    children: (0, l.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: p.intl.string(p.t.Es7n9f)
                    })
                }),
                (0, l.jsx)('th', {
                    className: a()(M.headerCell, Z.mediumCol),
                    children: (0, l.jsxs)(d.Clickable, {
                        className: M.sortItem,
                        onClick: t,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: 'eyebrow',
                                color: 'interactive-normal',
                                children: p.intl.string(p.t.EZ5QWF)
                            }),
                            n === C.Nw.TIMESTAMP_ASC
                                ? (0, l.jsx)(_.Z, {
                                      className: M.sortIcon,
                                      direction: _.Z.Directions.UP
                                  })
                                : (0, l.jsx)(_.Z, {
                                      className: M.sortIcon,
                                      direction: _.Z.Directions.DOWN
                                  })
                        ]
                    })
                }),
                (0, l.jsx)('th', {
                    className: a()(M.headerCell, M.moreOptionsCol),
                    children: (0, l.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: p.intl.string(p.t['5Q9xGh'])
                    })
                })
            ]
        })
    });
}
let B = i.memo(function (e) {
        let { joinRequest: n, user: t } = e,
            { joinRequestId: r, guildId: a } = n,
            s = i.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, E.openUserProfileModal)({
                            userId: t.id,
                            joinRequestId: r
                        });
                },
                [t, r]
            );
        return (0, l.jsxs)('div', {
            className: Z.memberNameContainer,
            children: [
                (0, l.jsx)(d.Clickable, {
                    className: Z.memberAvatar,
                    onClick: s,
                    children: (0, l.jsx)(m.Z, { user: t })
                }),
                (0, l.jsx)('div', {
                    className: Z.memberName,
                    children: (0, l.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        children: (0, l.jsxs)(d.Clickable, {
                            onClick: s,
                            className: Z.nameContainer,
                            children: [
                                t.globalName,
                                (0, l.jsx)(x.ZP, {
                                    clan: null == t ? void 0 : t.clan,
                                    userId: null == t ? void 0 : t.id,
                                    contextGuildId: a,
                                    containerClassName: Z.memberClanTag
                                })
                            ]
                        })
                    })
                }),
                (0, l.jsx)('div', {
                    className: Z.memberGlobalName,
                    children: (0, l.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        tag: 'span',
                        children: (0, l.jsx)(d.Clickable, {
                            onClick: s,
                            tag: 'span',
                            children: S.ZP.getUserTag(t)
                        })
                    })
                })
            ]
        });
    }),
    w = i.memo(function (e) {
        let { joinRequest: n, onSelect: r } = e,
            { guildId: s, createdAt: m, applicationStatus: x } = n,
            h = i.useMemo(() => new T.Z(n.user), [n.user]),
            b = (0, g.L)({ guildId: s }),
            j = (0, c.e7)([I.Z], () => I.Z.getGuild(s)),
            f = x === C.wB.SUBMITTED,
            v = (e) => {
                (0, u.jW)(
                    e,
                    async () => {
                        let { default: e } = await t.e('84259').then(t.bind(t, 597409));
                        return (n) =>
                            (0, l.jsx)(e, {
                                ...n,
                                guild: j,
                                user: h
                            });
                    },
                    {
                        position: 'bottom',
                        align: 'right'
                    }
                );
            };
        return null == h
            ? null
            : (0, l.jsxs)('tr', {
                  onClick: r,
                  className: a()(Z.roundedRow, Z.memberRowContainer, { [Z.selected]: (null == b ? void 0 : b.joinRequestId) === n.joinRequestId }),
                  children: [
                      (0, l.jsx)('td', {
                          children: (0, l.jsx)(B, {
                              joinRequest: n,
                              user: h
                          })
                      }),
                      (0, l.jsx)('td', {
                          className: Z.mediumCol,
                          children: (0, l.jsx)(d.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: o()(m).format('lll')
                          })
                      }),
                      (0, l.jsx)('td', {
                          className: M.moreOptionsCol,
                          children:
                              f &&
                              (0, l.jsx)(d.Tooltip, {
                                  text: p.intl.string(p.t.x8Nn4O),
                                  children: (e) => {
                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                      return (0, l.jsx)(d.Clickable, {
                                          onMouseEnter: n,
                                          onMouseLeave: t,
                                          onClick: v,
                                          className: a()(Z.button),
                                          children: (0, l.jsx)(d.MoreVerticalIcon, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 18,
                                              height: 18
                                          })
                                      });
                                  }
                              })
                      })
                  ]
              });
    }),
    L = () => {
        let e = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
            n = ''.concat(Math.floor(50 * Math.random()) + 100, 'px'),
            t = ''.concat(Math.floor(25 * Math.random()) + 50, 'px');
        return (0, l.jsxs)('tr', {
            className: a()(Z.roundedRow, Z.memberRowContainer),
            children: [
                (0, l.jsx)('td', {
                    children: (0, l.jsxs)('div', {
                        className: Z.memberNameContainer,
                        children: [
                            (0, l.jsx)('div', { className: a()(M.placeholderAvatar, Z.memberAvatar) }),
                            (0, l.jsx)('div', {
                                className: Z.memberName,
                                children: (0, l.jsx)('div', {
                                    className: M.placeholderText,
                                    style: { width: e }
                                })
                            }),
                            (0, l.jsx)('div', {
                                className: Z.memberGlobalName,
                                children: (0, l.jsx)('div', {
                                    className: M.placeholderTextSmall,
                                    style: { width: n }
                                })
                            })
                        ]
                    })
                }),
                (0, l.jsx)('td', {
                    className: Z.mediumCol,
                    children: (0, l.jsx)('div', {
                        className: M.placeholderText,
                        style: { width: t }
                    })
                }),
                (0, l.jsx)('td', { className: M.moreOptionsCol })
            ]
        });
    };
function D(e) {
    let { guildId: n, currentTab: t } = e,
        r = i.useRef(null),
        s = (0, c.e7)([I.Z], () => I.Z.getGuild(n)),
        o = (0, f.C)({ guildId: n }),
        u = (0, c.e7)([b.Z], () => b.Z.isFetching()),
        { guildJoinRequests: m } = (0, v.j)({
            guildId: n,
            applicationStatus: t,
            sortOrder: o
        }),
        { fetchNextPage: x } = (0, j.m)({
            guildId: n,
            guildJoinRequests: m
        }),
        g = i.useCallback(async () => {
            let e = o === C.Nw.TIMESTAMP_ASC ? C.Nw.TIMESTAMP_DESC : C.Nw.TIMESTAMP_ASC;
            h.Z.setSelectedSortOrder(n, e), await x(e, t);
        }, [o, n, x, t]);
    return null == s
        ? null
        : (0, l.jsx)('div', {
              className: R.mainTableContainer,
              children: (0, l.jsx)(d.AdvancedScroller, {
                  className: R.horizatonalScroller,
                  ref: r,
                  orientation: 'horizontal',
                  children: (0, l.jsxs)('table', {
                      className: a()(M.table),
                      children: [
                          (0, l.jsx)(k, {
                              sortOrder: o,
                              onSortChange: g
                          }),
                          (0, l.jsx)('tbody', {
                              children: u
                                  ? [, , , , ,].fill(0).map((e, n) => (0, l.jsx)(L, {}, 'placeholder-'.concat(n)))
                                  : 0 === m.length
                                    ? (0, l.jsx)('td', {
                                          colSpan: 3,
                                          children: (0, l.jsx)(N.u, { status: t })
                                      })
                                    : m.map((e) =>
                                          (0, l.jsx)(
                                              w,
                                              {
                                                  joinRequest: e,
                                                  onSelect: () => h.Z.setSelectedGuildJoinRequest(n, e)
                                              },
                                              e.joinRequestId
                                          )
                                      )
                          })
                      ]
                  })
              })
          });
}
