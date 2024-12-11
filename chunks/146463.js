n.d(t, {
    u: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(91192),
    a = n(442837),
    o = n(481060),
    c = n(209613),
    d = n(430824),
    u = n(855981),
    m = n(55543),
    h = n(693546),
    x = n(826581),
    j = n(246364),
    g = n(328977),
    v = n(571728),
    C = n(762660),
    f = n(388032),
    R = n(372819);
let E = () => null;
function p(e) {
    let { status: t } = e,
        n = f.intl.string(f.t['/wqiSk']),
        s = f.intl.string(f.t.o47YZm);
    switch (t) {
        case j.wB.REJECTED:
            (n = f.intl.string(f.t['7YSJ6e'])), (s = f.intl.string(f.t.i05OUV));
            break;
        case j.wB.APPROVED:
            (n = f.intl.string(f.t.bv82GR)), (s = f.intl.string(f.t.D4OUHR));
            break;
        default:
            (n = f.intl.string(f.t['/wqiSk'])), (s = f.intl.string(f.t.o47YZm));
    }
    return (0, i.jsxs)('div', {
        className: R.emptyContainer,
        children: [
            (0, i.jsxs)('div', {
                className: R.emptyIcon,
                children: [
                    (0, i.jsx)(m.Z, { className: R.star }),
                    (0, i.jsx)(o.CheckmarkLargeIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: R.checkmark
                    }),
                    (0, i.jsx)(u.Z, { className: R.plus })
                ]
            }),
            (0, i.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, i.jsx)(o.Text, {
                color: 'header-secondary',
                className: R.emptyBody,
                variant: 'text-sm/normal',
                children: s
            })
        ]
    });
}
t.Z = function (e) {
    var t;
    let { applicationStatus: n, guildJoinRequests: s, guildId: u, onScroll: m, listRef: I, atMaxMemberCapacity: T } = e,
        N = (0, a.e7)([d.Z], () => d.Z.getGuild(u), [u]),
        b = (0, a.e7)([x.Z], () => x.Z.isFetching()),
        Z = b ? [s.length + 25] : [s.length],
        w = (0, g.L)({ guildId: u }),
        S = null !== (t = (0, v.A)({ guildId: u })) && void 0 !== t ? t : 0,
        k = (0, c.Z)('guild-join-requests'),
        A = (e) => {
            let { row: t } = e,
                l = s[t];
            return null == l
                ? (0, i.jsx)(C.h, {}, t)
                : (0, i.jsx)(
                      C.C,
                      {
                          className: r()({
                              [R.selected]: w === l,
                              [R.siblingSelected]: w === s[t - 1]
                          }),
                          guild: N,
                          guildJoinRequest: l,
                          onClick: () => h.Z.setSelectedGuildJoinRequest(u, l),
                          applicationStatus: n,
                          atMaxMemberCapacity: T
                      },
                      ''.concat(l.userId, '-').concat(l.applicationStatus, '-').concat(t)
                  );
        };
    return b || 0 !== s.length
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  0 !== S &&
                      n === j.wB.SUBMITTED &&
                      (0, i.jsx)(o.Text, {
                          className: R.title,
                          variant: 'text-xs/semibold',
                          color: 'header-secondary',
                          children: (function (e, t) {
                              let n = t.toLocaleString();
                              switch (e) {
                                  case j.wB.SUBMITTED:
                                      return f.intl.formatToPlainString(f.t['s/46en'], { count: n });
                                  case j.wB.REJECTED:
                                      return f.intl.formatToPlainString(f.t['9voQIC'], { count: n });
                                  case j.wB.APPROVED:
                                      return f.intl.formatToPlainString(f.t['8hLZsb'], { count: n });
                                  default:
                                      return '';
                              }
                          })(n, S).toUpperCase()
                      }),
                  (0, i.jsx)(l.bG, {
                      navigator: k,
                      children: (0, i.jsx)(l.SJ, {
                          children: (e) => {
                              let { ref: t, role: n, ...s } = e;
                              return (0, i.jsx)(
                                  o.List,
                                  {
                                      innerRole: n,
                                      innerAriaLabel: f.intl.string(f.t['9Oq93t']),
                                      ref: (e) => {
                                          var n;
                                          (I.current = e), (t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                                      },
                                      paddingTop: 0,
                                      paddingBottom: 16,
                                      sectionHeight: 0,
                                      rowHeight: 64,
                                      renderSection: E,
                                      renderRow: A,
                                      sections: Z,
                                      onScroll: m,
                                      fade: !0,
                                      ...s
                                  },
                                  'guild-application-review'
                              );
                          }
                      })
                  })
              ]
          })
        : (0, i.jsx)(p, { status: n });
};
