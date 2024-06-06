"use strict";
s.r(t), s.d(t, {
  MemberApplicationsListRow: function() {
    return M
  },
  MemberApplicationsListRowPlaceholder: function() {
    return A
  }
}), s("47120"), s("411104");
var a = s("735250"),
  l = s("470079"),
  i = s("120356"),
  n = s.n(i),
  r = s("913527"),
  u = s.n(r),
  o = s("481060"),
  d = s("239091"),
  c = s("598077"),
  I = s("263704"),
  E = s("465670"),
  T = s("808268"),
  f = s("768581"),
  _ = s("693546"),
  R = s("246364"),
  S = s("689938"),
  N = s("858347");

function m(e) {
  let {
    icon: t,
    onClick: s,
    submitting: l,
    disabled: i
  } = e;
  return (0, a.jsx)(o.Clickable, {
    className: n()(N.actionIconContainer, {
      [N.disabled]: i || l
    }),
    onClick: s,
    children: l ? (0, a.jsx)(o.Dots, {
      className: N.icon,
      dotRadius: 2,
      themed: !0
    }) : (0, a.jsx)(t, {
      className: N.icon,
      height: 12,
      width: 12
    })
  })
}

function M(e) {
  let {
    applicationStatus: t,
    guild: i,
    guildJoinRequest: r,
    className: M,
    onClick: A,
    atMaxMemberCapacity: C
  } = e, [h, x] = l.useState(null), {
    user: p,
    createdAt: g
  } = r;
  if (null == p) throw Error("Missing user on this guild join request!");
  let P = l.useMemo(() => new c.default(p), [p]),
    j = f.default.getUserAvatarURL(P),
    v = t === R.GuildJoinRequestApplicationStatuses.SUBMITTED,
    O = l.useCallback(async (e, t) => {
      let {
        guildId: s,
        userId: a
      } = e;
      if (null == h) {
        x(t);
        try {
          await _.default.updateGuildJoinRequest(s, a, t)
        } catch (e) {
          (0, o.showToast)((0, o.createToast)(S.default.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE)), x(null)
        }
      }
    }, [h]),
    G = async () => {
      await O(r, R.GuildJoinRequestApplicationStatuses.APPROVED)
    }, L = async () => {
      await O(r, R.GuildJoinRequestApplicationStatuses.REJECTED)
    };
  return (0, a.jsxs)(o.Clickable, {
    className: n()(N.container, M),
    onClick: A,
    children: [(0, a.jsx)(o.Avatar, {
      src: j,
      size: o.AvatarSizes.SIZE_40,
      "aria-label": p.username,
      className: N.__invalid_spacer
    }), (0, a.jsxs)("div", {
      className: N.userDetails,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: p.username
      }), (0, a.jsx)(o.Text, {
        className: N.createdAt,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: u()(g).format("lll")
      })]
    }), v && !C && (0, a.jsx)(m, {
      icon: I.default,
      onClick: G,
      submitting: h === R.GuildJoinRequestApplicationStatuses.APPROVED,
      disabled: null != h && h !== R.GuildJoinRequestApplicationStatuses.APPROVED
    }), v && (0, a.jsx)(m, {
      icon: E.default,
      onClick: L,
      submitting: h === R.GuildJoinRequestApplicationStatuses.REJECTED,
      disabled: null != h && h !== R.GuildJoinRequestApplicationStatuses.REJECTED
    }), (0, a.jsx)(o.Clickable, {
      className: n()(N.overflowMenuContainer, {
        [N.disabled]: null != h
      }),
      onClick: e => {
        (0, d.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await s.e("84259").then(s.bind(s, "597409"));
          return t => (0, a.jsx)(e, {
            ...t,
            guild: i,
            user: P
          })
        }, {
          position: "bottom",
          align: "right"
        })
      },
      children: (0, a.jsx)(T.default, {
        className: N.icon,
        width: 18
      })
    })]
  })
}

function A() {
  return (0, a.jsxs)("div", {
    className: N.placeholder,
    children: [(0, a.jsx)("div", {
      className: n()(N.placeholderAvatar)
    }), (0, a.jsxs)("div", {
      className: N.userDetails,
      children: [(0, a.jsx)("div", {
        className: N.placeholderUsername,
        style: {
          maxWidth: "".concat(Math.floor(50 * Math.random()) + 100, "px")
        }
      }), (0, a.jsx)("div", {
        className: N.placeholderCreatedAt,
        style: {
          maxWidth: "".concat(Math.floor(25 * Math.random()) + 50, "px")
        }
      })]
    })]
  })
}