var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(91192),
    s = n(442837),
    o = n(481060),
    c = n(209613),
    d = n(430824),
    u = n(855981),
    m = n(55543),
    h = n(693546),
    x = n(826581),
    b = n(246364),
    j = n(328977),
    p = n(571728),
    g = n(762660),
    v = n(388032),
    f = n(984221);
let C = () => null;
function I(e) {
    let { status: t } = e,
        n = v.intl.string(v.t['/wqiSk']),
        l = v.intl.string(v.t.o47YZm);
    switch (t) {
        case b.wB.REJECTED:
            (n = v.intl.string(v.t['7YSJ6e'])), (l = v.intl.string(v.t.i05OUV));
            break;
        case b.wB.APPROVED:
            (n = v.intl.string(v.t.bv82GR)), (l = v.intl.string(v.t.D4OUHR));
            break;
        default:
            (n = v.intl.string(v.t['/wqiSk'])), (l = v.intl.string(v.t.o47YZm));
    }
    return (0, i.jsxs)('div', {
        className: f.emptyContainer,
        children: [
            (0, i.jsxs)('div', {
                className: f.emptyIcon,
                children: [
                    (0, i.jsx)(m.Z, { className: f.star }),
                    (0, i.jsx)(o.CheckmarkLargeIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: f.checkmark
                    }),
                    (0, i.jsx)(u.Z, { className: f.plus })
                ]
            }),
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, i.jsx)(o.Text, {
                color: 'header-secondary',
                className: f.emptyBody,
                variant: 'text-sm/normal',
                children: l
            })
        ]
    });
}
t.Z = function (e) {
    var t;
    let { applicationStatus: n, guildJoinRequests: l, guildId: u, onScroll: m, listRef: R, atMaxMemberCapacity: E } = e,
        T = (0, s.e7)([d.Z], () => d.Z.getGuild(u), [u]),
        S = (0, s.e7)([x.Z], () => x.Z.isFetching()),
        _ = S ? [l.length + 25] : [l.length],
        N = (0, j.L)({ guildId: u }),
        A = null !== (t = (0, p.A)({ guildId: u })) && void 0 !== t ? t : 0,
        Z = (0, c.Z)('guild-join-requests'),
        w = (e) => {
            let { row: t } = e,
                a = l[t];
            return null == a
                ? (0, i.jsx)(g.h, {}, t)
                : (0, i.jsx)(
                      g.C,
                      {
                          className: r()({
                              [f.selected]: N === a,
                              [f.siblingSelected]: N === l[t - 1]
                          }),
                          guild: T,
                          guildJoinRequest: a,
                          onClick: () => h.Z.setSelectedGuildJoinRequest(u, a),
                          applicationStatus: n,
                          atMaxMemberCapacity: E
                      },
                      ''.concat(a.userId, '-').concat(a.applicationStatus, '-').concat(t)
                  );
        };
    return S || 0 !== l.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  0 !== A &&
                      n === b.wB.SUBMITTED &&
                      (0, i.jsx)(o.Text, {
                          className: f.title,
                          variant: 'text-xs/semibold',
                          color: 'header-secondary',
                          children: (function (e, t) {
                              let n = t.toLocaleString();
                              switch (e) {
                                  case b.wB.SUBMITTED:
                                      return v.intl.formatToPlainString(v.t['s/46en'], { count: n });
                                  case b.wB.REJECTED:
                                      return v.intl.formatToPlainString(v.t['9voQIC'], { count: n });
                                  case b.wB.APPROVED:
                                      return v.intl.formatToPlainString(v.t['8hLZsb'], { count: n });
                                  default:
                                      return '';
                              }
                          })(n, A).toUpperCase()
                      }),
                  (0, i.jsx)(a.bG, {
                      navigator: Z,
                      children: (0, i.jsx)(a.SJ, {
                          children: (e) => {
                              let { ref: t, role: n, ...l } = e;
                              return (0, i.jsx)(
                                  o.List,
                                  {
                                      innerRole: n,
                                      innerAriaLabel: v.intl.string(v.t['9Oq93t']),
                                      ref: (e) => {
                                          var n;
                                          (R.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                                      },
                                      paddingTop: 0,
                                      paddingBottom: 16,
                                      sectionHeight: 0,
                                      rowHeight: 64,
                                      renderSection: C,
                                      renderRow: w,
                                      sections: _,
                                      onScroll: m,
                                      fade: !0,
                                      ...l
                                  },
                                  'guild-application-review'
                              );
                          }
                      })
                  })
              ]
          })
        : (0, i.jsx)(I, { status: n });
};
