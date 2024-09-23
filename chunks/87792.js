n(47120);
var s = n(735250),
    a = n(470079),
    r = n(512722),
    i = n.n(r),
    o = n(399606),
    l = n(481060),
    c = n(626135),
    d = n(709054),
    _ = n(914788),
    u = n(546791),
    E = n(259756),
    T = n(785681),
    I = n(985002),
    R = n(858719),
    m = n(780985),
    g = n(880257),
    N = n(631885),
    C = n(240351),
    p = n(792258),
    f = n(657825),
    A = n(198952),
    S = n(329242),
    h = n(895328),
    M = n(292352),
    x = n(981631),
    b = n(689938),
    O = n(555825);
function v() {
    let e = a.useCallback(() => {
        (0, l.openModalLazy)(async () => {
            let { default: e } = await n.e('66462').then(n.bind(n, 756226));
            return (t) => (0, s.jsx)(e, { ...t });
        });
    }, []);
    return (0, s.jsx)(l.Clickable, {
        className: O.tooltip,
        onClick: e,
        children: (0, s.jsx)(l.CircleInformationIcon, {
            size: 'custom',
            color: 'currentColor',
            className: O.icon,
            width: 15,
            height: 15
        })
    });
}
function P(e) {
    let { displayType: t } = e,
        n = a.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(b.Z.Messages.FAMILY_CENTER_ERROR_GENERIC_TOAST, l.ToastType.FAILURE));
        }, []),
        r = (0, g.Z)(),
        o = (0, R.ws)(t),
        c = (0, R.C7)(t),
        { loadMore: _, isMoreLoading: T } = (0, I.G)({ onError: n }),
        m = M.tx.get(t),
        [N, C] = a.useState(M.iB),
        A = (0, E.Xi)({ location: 'family_center_activity_section_web' }),
        S = a.useCallback(() => {
            C((e) => e + M.iB), _(t);
        }, [t, _]);
    i()(m, 'No text for action type');
    let h = m.sectionHeader(c),
        x = a.useCallback(
            (e) => {
                let { row: t } = e,
                    n = o[t];
                return (0, u.iB)(n)
                    ? (0, s.jsx)(
                          f.Z,
                          {
                              userId: n.entity_id,
                              timestamp: d.default.extractTimestamp(n.event_id),
                              timestampFormatter: m.timestampFormatter
                          },
                          n.event_id
                      )
                    : (0, u.f0)(n)
                      ? (0, s.jsx)(p.Z, { guildId: n.entity_id }, n.event_id)
                      : void 0;
            },
            [o, m.timestampFormatter]
        ),
        v = a.useCallback(
            () =>
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(l.Text, {
                            className: O.sectionHeader,
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: h
                        }),
                        void 0 !== m.sectionDescription
                            ? (0, s.jsx)(l.Text, {
                                  className: O.sectionDescription,
                                  variant: 'text-md/medium',
                                  color: 'text-muted',
                                  children: m.sectionDescription(null != r && r, A)
                              })
                            : null
                    ]
                }),
            [h, m, r, A]
        );
    if (0 === o.length) return null;
    let P = o.slice(0, N);
    return (0, s.jsxs)('div', {
        className: O.actionSection,
        children: [
            v(),
            (0, s.jsx)('div', {
                className: O.actions,
                style: { maxHeight: 65 * P.length },
                children: P.map((e, t) => x({ row: t }))
            }),
            P.length !== c
                ? (0, s.jsx)(l.Clickable, {
                      className: O.loadMoreBar,
                      onClick: S,
                      role: 'button',
                      children: T
                          ? (0, s.jsx)(l.Spinner, {
                                type: l.Spinner.Type.PULSING_ELLIPSIS,
                                className: O.spinner
                            })
                          : (0, s.jsx)(l.Text, {
                                className: O.loadMore,
                                variant: 'text-sm/bold',
                                children: b.Z.Messages.FAMILY_CENTER_ACTIVITY_MORE.format({ pageSize: Math.min(c - P.length, M.iB) })
                            })
                  })
                : null
        ]
    });
}
let L = () => {
        let e = (0, g.Z)(),
            t = (0, N.mq)(M.ne.ACTIVE),
            n = (0, T.o)(b.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_TEEN.format({ activeLinks: t.length }), b.Z.Messages.FAMILY_CENTER_ACTIVITY_OVERVIEW_PREFACE_PARENT),
            a = (0, u.Qr)(!!e),
            r = (0, N.Rd)(a);
        return e && t.length > 1
            ? (0, s.jsx)(l.Text, {
                  variant: 'eyebrow',
                  children: r
              })
            : (0, s.jsxs)(s.Fragment, {
                  children: [
                      e
                          ? null
                          : (0, s.jsx)(l.EyeIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: O.icon
                            }),
                      (0, s.jsx)(l.Text, {
                          variant: 'eyebrow',
                          children: n
                      })
                  ]
              });
    },
    Z = (e) => {
        let { userId: t, subText: n, avatarSize: a = l.AvatarSizes.SIZE_40 } = e,
            r = (0, m.I)(t);
        return void 0 === r
            ? null
            : (0, s.jsxs)('div', {
                  className: O.accountRow,
                  children: [
                      (0, s.jsx)(A.r, {
                          user: r,
                          avatarSize: a
                      }),
                      (0, s.jsxs)('div', {
                          className: O.headerText,
                          children: [
                              (0, s.jsx)(S.Z, { user: r }),
                              void 0 !== n
                                  ? (0, s.jsx)(l.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'text-muted',
                                        children: n
                                    })
                                  : null
                          ]
                      })
                  ]
              });
    },
    D = () => {
        let e = (0, N.mq)(M.ne.ACTIVE),
            t = (0, o.e7)([_.Z], () => _.Z.getSelectedTeenId()),
            { selectTeenUser: n } = (0, I.G)({}),
            r = e.map((e) => ({
                label: e.id,
                value: e.id
            })),
            i = a.useCallback(
                (e) =>
                    (0, s.jsx)(Z, {
                        userId: e.value,
                        avatarSize: l.AvatarSizes.SIZE_24
                    }),
                []
            );
        return (0, s.jsx)(l.Select, {
            className: O.select,
            renderOptionLabel: i,
            renderOptionValue: (e) => {
                let [t] = e;
                return i(t);
            },
            serialize: (e) => e,
            select: (e) => {
                n(e), c.default.track(x.rMx.FAMILY_CENTER_ACTION, { action: M.YC.SelectTeen });
            },
            isSelected: (e) => e === t,
            options: r
        });
    },
    B = (e) => {
        let { userId: t } = e,
            n = (0, g.Z)(),
            a = (0, N.mq)(M.ne.ACTIVE),
            r = (0, u.Qr)(!!n),
            i = (0, N.Rd)(r);
        return n && 1 !== a.length
            ? (0, s.jsx)(D, {})
            : (0, s.jsx)(Z, {
                  userId: t,
                  subText: i
              });
    };
t.Z = (e) => {
    let { user: t } = e,
        n = Array.from(M.tx.entries()),
        a = (0, R.kE)(),
        r = (0, u.t3)(),
        i = (0, N.Rd)(r);
    return (0, s.jsxs)('div', {
        className: O.container,
        children: [
            (0, s.jsxs)('div', {
                className: O.connectedCounter,
                children: [(0, s.jsx)(L, {}), (0, s.jsx)(v, {})]
            }),
            (0, s.jsxs)('div', {
                className: O.card,
                children: [
                    (0, s.jsx)('div', {
                        className: O.header,
                        children: (0, s.jsx)(B, { userId: t.id })
                    }),
                    (0, s.jsxs)('div', {
                        className: O.content,
                        children: [
                            (0, s.jsx)('div', {
                                className: O.activityCounterRow,
                                children: n.map((e) => {
                                    let [t, n] = e;
                                    return (0, s.jsx)(
                                        C.Z,
                                        {
                                            displayType: t,
                                            header: n.tooltipHeader()
                                        },
                                        'counter-'.concat(t)
                                    );
                                })
                            }),
                            (0, s.jsx)('div', {
                                className: O.activityOverview,
                                children: a
                                    ? n.map((e) => {
                                          let [t] = e;
                                          return (0, s.jsx)(P, { displayType: t }, ''.concat(t, '-list'));
                                      })
                                    : (0, s.jsx)(h.Z, {
                                          className: O.emptyActivity,
                                          text: null != i ? i : ''
                                      })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
