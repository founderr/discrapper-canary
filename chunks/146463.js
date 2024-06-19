var n = a(735250);
a(470079);
var t = a(120356),
  l = a.n(t),
  r = a(91192),
  i = a(442837),
  o = a(481060),
  c = a(209613),
  I = a(430824),
  d = a(855981),
  u = a(55543),
  E = a(693546),
  T = a(826581),
  _ = a(246364),
  N = a(328977),
  R = a(571728),
  M = a(762660),
  C = a(689938),
  m = a(425415);
let A = () => null;

function x(e) {
  let {
    status: s
  } = e, a = C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, t = C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY;
  switch (s) {
    case _.wB.REJECTED:
      a = C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_TITLE, t = C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_REJECTED_APPLICATIONS_BODY;
      break;
    case _.wB.APPROVED:
      a = C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_TITLE, t = C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_APPROVED_APPLICATIONS_BODY;
      break;
    default:
      a = C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_TITLE, t = C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_EMPTY_PENDING_APPLICATIONS_BODY
  }
  return (0, n.jsxs)("div", {
    className: m.emptyContainer,
    children: [(0, n.jsxs)("div", {
      className: m.emptyIcon,
      children: [(0, n.jsx)(u.Z, {
        className: m.star
      }), (0, n.jsx)(o.CheckmarkLargeIcon, {
        size: "md",
        color: "currentColor",
        className: m.checkmark
      }), (0, n.jsx)(d.Z, {
        className: m.plus
      })]
    }), (0, n.jsx)(o.Heading, {
      variant: "heading-xl/semibold",
      children: a
    }), (0, n.jsx)(o.Text, {
      color: "header-secondary",
      className: m.emptyBody,
      variant: "text-sm/normal",
      children: t
    })]
  })
}
s.Z = function(e) {
  var s;
  let {
    applicationStatus: a,
    guildJoinRequests: t,
    guildId: d,
    onScroll: u,
    listRef: h,
    atMaxMemberCapacity: S
  } = e, P = (0, i.e7)([I.Z], () => I.Z.getGuild(d), [d]), g = (0, i.e7)([T.Z], () => T.Z.isFetching()), j = g ? [t.length + 25] : [t.length], Z = (0, N.L)({
    guildId: d
  }), v = null !== (s = (0, R.A)({
    guildId: d
  })) && void 0 !== s ? s : 0, f = (0, c.Z)("guild-join-requests"), O = e => {
    let {
      row: s
    } = e, r = t[s];
    return null == r ? (0, n.jsx)(M.h, {}, s) : (0, n.jsx)(M.C, {
      className: l()({
        [m.selected]: Z === r,
        [m.siblingSelected]: Z === t[s - 1]
      }),
      guild: P,
      guildJoinRequest: r,
      onClick: () => E.Z.setSelectedGuildJoinRequest(d, r),
      applicationStatus: a,
      atMaxMemberCapacity: S
    }, "".concat(r.userId, "-").concat(r.applicationStatus, "-").concat(s))
  };
  return g || 0 !== t.length ? (0, n.jsxs)(n.Fragment, {
    children: [0 !== v && a === _.wB.SUBMITTED && (0, n.jsx)(o.Text, {
      className: m.title,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: (function(e, s) {
        let a = s.toLocaleString();
        switch (e) {
          case _.wB.SUBMITTED:
            return C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT_HYPEN.format({
              count: a
            });
          case _.wB.REJECTED:
            return C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED_COUNT_HYPEN.format({
              count: a
            });
          case _.wB.APPROVED:
            return C.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED_COUNT_HYPEN.format({
              count: a
            });
          default:
            return ""
        }
      })(a, v).toUpperCase()
    }), (0, n.jsx)(r.bG, {
      navigator: f,
      children: (0, n.jsx)(r.SJ, {
        children: e => {
          let {
            ref: s,
            role: a,
            ...t
          } = e;
          return (0, n.jsx)(o.List, {
            innerRole: a,
            innerAriaLabel: C.Z.Messages.MEMBERS,
            ref: e => {
              var a;
              h.current = e, s.current = null !== (a = null == e ? void 0 : e.getScrollerNode()) && void 0 !== a ? a : null
            },
            paddingTop: 0,
            paddingBottom: 16,
            sectionHeight: 0,
            rowHeight: 64,
            renderSection: A,
            renderRow: O,
            sections: j,
            onScroll: u,
            fade: !0,
            ...t
          }, "guild-application-review")
        }
      })
    })]
  }) : (0, n.jsx)(x, {
    status: a
  })
}