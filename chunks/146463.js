n.d(t, {
    u: function () {
        return j;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    o = n(91192),
    l = n(442837),
    c = n(481060),
    s = n(209613),
    d = n(430824),
    u = n(855981),
    m = n(55543),
    f = n(693546),
    b = n(826581),
    x = n(246364),
    p = n(328977),
    h = n(571728),
    C = n(762660),
    g = n(388032),
    _ = n(372819);
let v = () => null;
function j(e) {
    let { status: t } = e,
        n = g.intl.string(g.t['/wqiSk']),
        r = g.intl.string(g.t.o47YZm);
    switch (t) {
        case x.wB.REJECTED:
            (n = g.intl.string(g.t['7YSJ6e'])), (r = g.intl.string(g.t.i05OUV));
            break;
        case x.wB.APPROVED:
            (n = g.intl.string(g.t.bv82GR)), (r = g.intl.string(g.t.D4OUHR));
            break;
        default:
            (n = g.intl.string(g.t['/wqiSk'])), (r = g.intl.string(g.t.o47YZm));
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
        R = (0, l.e7)([d.Z], () => d.Z.getGuild(u), [u]),
        E = (0, l.e7)([b.Z], () => b.Z.isFetching()),
        S = E ? [r.length + 25] : [r.length],
        w = (0, p.L)({ guildId: u }),
        A = null !== (t = (0, h.A)({ guildId: u })) && void 0 !== t ? t : 0,
        N = (0, s.Z)('guild-join-requests'),
        B = (e) => {
            let { row: t } = e,
                o = r[t];
            return null == o
                ? (0, i.jsx)(C.h, {}, t)
                : (0, i.jsx)(
                      C.C,
                      {
                          className: a()({
                              [_.selected]: w === o,
                              [_.siblingSelected]: w === r[t - 1]
                          }),
                          guild: R,
                          guildJoinRequest: o,
                          onClick: () => f.Z.setSelectedGuildJoinRequest(u, o),
                          applicationStatus: n,
                          atMaxMemberCapacity: T
                      },
                      ''.concat(o.userId, '-').concat(o.applicationStatus, '-').concat(t)
                  );
        };
    return E || 0 !== r.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  0 !== A &&
                      n === x.wB.SUBMITTED &&
                      (0, i.jsx)(c.Text, {
                          className: _.title,
                          variant: 'text-xs/semibold',
                          color: 'header-secondary',
                          children: (function (e, t) {
                              let n = t.toLocaleString();
                              switch (e) {
                                  case x.wB.SUBMITTED:
                                      return g.intl.formatToPlainString(g.t['s/46en'], { count: n });
                                  case x.wB.REJECTED:
                                      return g.intl.formatToPlainString(g.t['9voQIC'], { count: n });
                                  case x.wB.APPROVED:
                                      return g.intl.formatToPlainString(g.t['8hLZsb'], { count: n });
                                  default:
                                      return '';
                              }
                          })(n, A).toUpperCase()
                      }),
                  (0, i.jsx)(o.bG, {
                      navigator: N,
                      children: (0, i.jsx)(o.SJ, {
                          children: (e) => {
                              let { ref: t, role: n, ...r } = e;
                              return (0, i.jsx)(
                                  c.List,
                                  {
                                      innerRole: n,
                                      innerAriaLabel: g.intl.string(g.t['9Oq93t']),
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
