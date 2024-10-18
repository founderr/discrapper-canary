var t = n(735250);
n(470079);
var a = n(120356),
    l = n.n(a),
    r = n(91192),
    i = n(442837),
    o = n(481060),
    c = n(209613),
    d = n(430824),
    u = n(855981),
    I = n(55543),
    E = n(693546),
    _ = n(826581),
    T = n(246364),
    m = n(328977),
    R = n(571728),
    M = n(762660),
    N = n(689938),
    C = n(984221);
let x = () => null;
function h(e) {
    let { status: s } = e,
        n = N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE,
        a = N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
    switch (s) {
        case T.wB.REJECTED:
            (n = N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE), (a = N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY);
            break;
        case T.wB.APPROVED:
            (n = N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE), (a = N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY);
            break;
        default:
            (n = N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE), (a = N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY);
    }
    return (0, t.jsxs)('div', {
        className: C.emptyContainer,
        children: [
            (0, t.jsxs)('div', {
                className: C.emptyIcon,
                children: [
                    (0, t.jsx)(I.Z, { className: C.star }),
                    (0, t.jsx)(o.CheckmarkLargeIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: C.checkmark
                    }),
                    (0, t.jsx)(u.Z, { className: C.plus })
                ]
            }),
            (0, t.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, t.jsx)(o.Text, {
                color: 'header-secondary',
                className: C.emptyBody,
                variant: 'text-sm/normal',
                children: a
            })
        ]
    });
}
s.Z = function (e) {
    var s;
    let { applicationStatus: n, guildJoinRequests: a, guildId: u, onScroll: I, listRef: A, atMaxMemberCapacity: b } = e,
        S = (0, i.e7)([d.Z], () => d.Z.getGuild(u), [u]),
        j = (0, i.e7)([_.Z], () => _.Z.isFetching()),
        P = j ? [a.length + 25] : [a.length],
        p = (0, m.L)({ guildId: u }),
        g = null !== (s = (0, R.A)({ guildId: u })) && void 0 !== s ? s : 0,
        v = (0, c.Z)('guild-join-requests'),
        f = (e) => {
            let { row: s } = e,
                r = a[s];
            return null == r
                ? (0, t.jsx)(M.h, {}, s)
                : (0, t.jsx)(
                      M.C,
                      {
                          className: l()({
                              [C.selected]: p === r,
                              [C.siblingSelected]: p === a[s - 1]
                          }),
                          guild: S,
                          guildJoinRequest: r,
                          onClick: () => E.Z.setSelectedGuildJoinRequest(u, r),
                          applicationStatus: n,
                          atMaxMemberCapacity: b
                      },
                      ''.concat(r.userId, '-').concat(r.applicationStatus, '-').concat(s)
                  );
        };
    return j || 0 !== a.length
        ? (0, t.jsxs)(t.Fragment, {
              children: [
                  0 !== g &&
                      n === T.wB.SUBMITTED &&
                      (0, t.jsx)(o.Text, {
                          className: C.title,
                          variant: 'text-xs/semibold',
                          color: 'header-secondary',
                          children: (function (e, s) {
                              let n = s.toLocaleString();
                              switch (e) {
                                  case T.wB.SUBMITTED:
                                      return N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format({ count: n });
                                  case T.wB.REJECTED:
                                      return N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format({ count: n });
                                  case T.wB.APPROVED:
                                      return N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format({ count: n });
                                  default:
                                      return '';
                              }
                          })(n, g).toUpperCase()
                      }),
                  (0, t.jsx)(r.bG, {
                      navigator: v,
                      children: (0, t.jsx)(r.SJ, {
                          children: (e) => {
                              let { ref: s, role: n, ...a } = e;
                              return (0, t.jsx)(
                                  o.List,
                                  {
                                      innerRole: n,
                                      innerAriaLabel: N.Z.Messages.MEMBERS,
                                      ref: (e) => {
                                          var n;
                                          (A.current = e), (s.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null);
                                      },
                                      paddingTop: 0,
                                      paddingBottom: 16,
                                      sectionHeight: 0,
                                      rowHeight: 64,
                                      renderSection: x,
                                      renderRow: f,
                                      sections: P,
                                      onScroll: I,
                                      fade: !0,
                                      ...a
                                  },
                                  'guild-application-review'
                              );
                          }
                      })
                  })
              ]
          })
        : (0, t.jsx)(h, { status: n });
};
