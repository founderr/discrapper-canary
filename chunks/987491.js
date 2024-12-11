t.d(n, {
    Z: function () {
        return y;
    }
});
var l = t(200651),
    r = t(192379),
    i = t(120356),
    a = t.n(i),
    o = t(913527),
    s = t.n(o),
    c = t(442837),
    d = t(481060),
    u = t(239091),
    x = t(700582),
    m = t(979264),
    h = t(693546),
    b = t(826581),
    _ = t(246364),
    C = t(98493),
    j = t(328977),
    g = t(412222),
    f = t(223312),
    v = t(146463),
    p = t(768762),
    N = t(171368),
    S = t(598077),
    T = t(430824),
    E = t(51144),
    I = t(388032),
    M = t(174598),
    A = t(676391),
    R = t(338648),
    Z = t(216412);
function k(e) {
    let { sortOrder: n, onSortChange: t } = e;
    return (0, l.jsx)('thead', {
        children: (0, l.jsxs)('tr', {
            className: R.tableHeaderRow,
            children: [
                (0, l.jsx)('th', {
                    className: M.headerCell,
                    children: (0, l.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: I.intl.string(I.t.Es7n9f)
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
                                children: I.intl.string(I.t.EZ5QWF)
                            }),
                            n === _.Nw.TIMESTAMP_ASC
                                ? (0, l.jsx)(p.Z, {
                                      className: M.sortIcon,
                                      direction: p.Z.Directions.UP
                                  })
                                : (0, l.jsx)(p.Z, {
                                      className: M.sortIcon,
                                      direction: p.Z.Directions.DOWN
                                  })
                        ]
                    })
                }),
                (0, l.jsx)('th', {
                    className: a()(M.headerCell, Z.xsmallCol),
                    children: (0, l.jsx)(d.Text, {
                        variant: 'eyebrow',
                        color: 'interactive-normal',
                        children: I.intl.string(I.t['5Q9xGh'])
                    })
                })
            ]
        })
    });
}
let B = r.memo(function (e) {
        let { joinRequest: n, user: t } = e,
            { joinRequestId: i, guildId: a } = n,
            o = r.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, N.openUserProfileModal)({
                            userId: t.id,
                            joinRequestId: i
                        });
                },
                [t, i]
            );
        return (0, l.jsxs)('div', {
            className: Z.memberNameContainer,
            children: [
                (0, l.jsx)(d.Clickable, {
                    className: Z.memberAvatar,
                    onClick: o,
                    children: (0, l.jsx)(x.Z, { user: t })
                }),
                (0, l.jsx)('div', {
                    className: Z.memberName,
                    children: (0, l.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        children: (0, l.jsxs)(d.Clickable, {
                            onClick: o,
                            className: Z.nameContainer,
                            children: [
                                t.globalName,
                                (0, l.jsx)(m.ZP, {
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
                            onClick: o,
                            tag: 'span',
                            children: E.ZP.getUserTag(t)
                        })
                    })
                })
            ]
        });
    }),
    L = r.memo(function (e) {
        let { joinRequest: n, onSelect: i } = e,
            { guildId: o, createdAt: x, applicationStatus: m } = n,
            h = r.useMemo(() => new S.Z(n.user), [n.user]),
            b = (0, j.L)({ guildId: o }),
            C = (0, c.e7)([T.Z], () => T.Z.getGuild(o)),
            g = m === _.wB.SUBMITTED,
            f = (e) => {
                (0, u.jW)(
                    e,
                    async () => {
                        let { default: e } = await t.e('84259').then(t.bind(t, 597409));
                        return (n) =>
                            (0, l.jsx)(e, {
                                ...n,
                                guild: C,
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
                  onClick: i,
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
                              children: s()(x).format('lll')
                          })
                      }),
                      (0, l.jsx)('td', {
                          className: Z.xsmallCol,
                          children:
                              g &&
                              (0, l.jsx)(d.Tooltip, {
                                  text: I.intl.string(I.t.x8Nn4O),
                                  children: (e) => {
                                      let { onMouseEnter: n, onMouseLeave: t } = e;
                                      return (0, l.jsx)(d.Clickable, {
                                          onMouseEnter: n,
                                          onMouseLeave: t,
                                          onClick: f,
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
    w = () => {
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
                (0, l.jsx)('td', { className: Z.xsmallCol })
            ]
        });
    };
function y(e) {
    let { guildId: n, currentTab: t } = e,
        i = r.useRef(null),
        o = (0, c.e7)([T.Z], () => T.Z.getGuild(n)),
        s = (0, g.C)({ guildId: n }),
        u = (0, c.e7)([b.Z], () => b.Z.isFetching()),
        { guildJoinRequests: x } = (0, f.j)({
            guildId: n,
            applicationStatus: t,
            sortOrder: s
        }),
        { fetchNextPage: m } = (0, C.m)({
            guildId: n,
            guildJoinRequests: x
        }),
        j = r.useCallback(async () => {
            let e = s === _.Nw.TIMESTAMP_ASC ? _.Nw.TIMESTAMP_DESC : _.Nw.TIMESTAMP_ASC;
            h.Z.setSelectedSortOrder(n, e), await m(e, t);
        }, [s, n, m, t]);
    return null == o
        ? null
        : (0, l.jsx)('div', {
              className: A.mainTableContainer,
              children: (0, l.jsx)(d.AdvancedScroller, {
                  className: A.horizatonalScroller,
                  ref: i,
                  orientation: 'horizontal',
                  children: (0, l.jsxs)('table', {
                      className: a()(M.table),
                      children: [
                          (0, l.jsx)(k, {
                              sortOrder: s,
                              onSortChange: j
                          }),
                          (0, l.jsx)('tbody', {
                              children: u
                                  ? [, , , , ,].fill(0).map((e, n) => (0, l.jsx)(w, {}, 'placeholder-'.concat(n)))
                                  : 0 === x.length
                                    ? (0, l.jsx)('td', {
                                          colSpan: 3,
                                          children: (0, l.jsx)(v.u, { status: t })
                                      })
                                    : x.map((e) =>
                                          (0, l.jsx)(
                                              L,
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
