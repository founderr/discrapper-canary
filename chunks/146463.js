var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    l = n(91192),
    o = n(442837),
    c = n(481060),
    s = n(209613),
    d = n(430824),
    u = n(855981),
    m = n(55543),
    f = n(693546),
    b = n(826581),
    x = n(246364),
    h = n(328977),
    p = n(571728),
    g = n(762660),
    C = n(388032),
    _ = n(372819);
let v = () => null;
function j(e) {
    let { status: t } = e,
        n = C.intl.string(C.t['/wqiSk']),
        r = C.intl.string(C.t.o47YZm);
    switch (t) {
        case x.wB.REJECTED:
            (n = C.intl.string(C.t['7YSJ6e'])), (r = C.intl.string(C.t.i05OUV));
            break;
        case x.wB.APPROVED:
            (n = C.intl.string(C.t.bv82GR)), (r = C.intl.string(C.t.D4OUHR));
            break;
        default:
            (n = C.intl.string(C.t['/wqiSk'])), (r = C.intl.string(C.t.o47YZm));
    }
    return (0, i.jsxs)('div', {
        className: _.emptyContainer,
        children: [
            (0, i.jsxs)('div', {
                className: _.emptyIcon,
                children: [
                    (0, i.jsx)(m.Z, { className: _.star }),
                    (0, i.jsx)(c.CheckmarkLargeIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: _.checkmark
                    }),
                    (0, i.jsx)(u.Z, { className: _.plus })
                ]
            }),
            (0, i.jsx)(c.Heading, {
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, i.jsx)(c.Text, {
                color: 'header-secondary',
                className: _.emptyBody,
                variant: 'text-sm/normal',
                children: r
            })
        ]
    });
}
t.Z = function (e) {
    var t;
    let { applicationStatus: n, guildJoinRequests: r, guildId: u, onScroll: m, listRef: I, atMaxMemberCapacity: T } = e,
        R = (0, o.e7)([d.Z], () => d.Z.getGuild(u), [u]),
        E = (0, o.e7)([b.Z], () => b.Z.isFetching()),
        S = E ? [r.length + 25] : [r.length],
        w = (0, h.L)({ guildId: u }),
        N = null !== (t = (0, p.A)({ guildId: u })) && void 0 !== t ? t : 0,
        A = (0, s.Z)('guild-join-requests'),
        B = (e) => {
            let { row: t } = e,
                l = r[t];
            return null == l
                ? (0, i.jsx)(g.h, {}, t)
                : (0, i.jsx)(
                      g.C,
                      {
                          className: a()({
                              [_.selected]: w === l,
                              [_.siblingSelected]: w === r[t - 1]
                          }),
                          guild: R,
                          guildJoinRequest: l,
                          onClick: () => f.Z.setSelectedGuildJoinRequest(u, l),
                          applicationStatus: n,
                          atMaxMemberCapacity: T
                      },
                      ''.concat(l.userId, '-').concat(l.applicationStatus, '-').concat(t)
                  );
        };
    return E || 0 !== r.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  0 !== N &&
                      n === x.wB.SUBMITTED &&
                      (0, i.jsx)(c.Text, {
                          className: _.title,
                          variant: 'text-xs/semibold',
                          color: 'header-secondary',
                          children: (function (e, t) {
                              let n = t.toLocaleString();
                              switch (e) {
                                  case x.wB.SUBMITTED:
                                      return C.intl.formatToPlainString(C.t['s/46en'], { count: n });
                                  case x.wB.REJECTED:
                                      return C.intl.formatToPlainString(C.t['9voQIC'], { count: n });
                                  case x.wB.APPROVED:
                                      return C.intl.formatToPlainString(C.t['8hLZsb'], { count: n });
                                  default:
                                      return '';
                              }
                          })(n, N).toUpperCase()
                      }),
                  (0, i.jsx)(l.bG, {
                      navigator: A,
                      children: (0, i.jsx)(l.SJ, {
                          children: (e) => {
                              let { ref: t, role: n, ...r } = e;
                              return (0, i.jsx)(
                                  c.List,
                                  {
                                      innerRole: n,
                                      innerAriaLabel: C.intl.string(C.t['9Oq93t']),
                                      ref: (e) => {
                                          var n;
                                          (I.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                                      },
                                      paddingTop: 0,
                                      paddingBottom: 16,
                                      sectionHeight: 0,
                                      rowHeight: 64,
                                      renderSection: v,
                                      renderRow: B,
                                      sections: S,
                                      onScroll: m,
                                      fade: !0,
                                      ...r
                                  },
                                  'guild-application-review'
                              );
                          }
                      })
                  })
              ]
          })
        : (0, i.jsx)(j, { status: n });
};
