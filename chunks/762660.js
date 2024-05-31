"use strict";
s.r(t), s.d(t, {
  MemberApplicationsListRow: function() {
    return m
  },
  MemberApplicationsListRowPlaceholder: function() {
    return M
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
  E = s("263704"),
  I = s("465670"),
  T = s("808268"),
  f = s("768581"),
  R = s("693546"),
  _ = s("246364"),
  S = s("689938"),
  N = s("858347");

function A(e) {
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

function m(e) {
  let {
    applicationStatus: t,
    guild: i,
    guildJoinRequest: r,
    className: m,
    onClick: M
  } = e, [C, h] = l.useState(null), {
    user: p,
    createdAt: x
  } = r;
  if (null == p) throw Error("Missing user on this guild join request!");
  let g = l.useMemo(() => new c.default(p), [p]),
    P = f.default.getUserAvatarURL(g),
    j = t === _.GuildJoinRequestApplicationStatuses.SUBMITTED,
    v = l.useCallback(async (e, t) => {
      let {
        guildId: s,
        userId: a
      } = e;
      if (null == C) {
        h(t);
        try {
          await R.default.updateGuildJoinRequest(s, a, t)
        } catch (e) {
          (0, o.showToast)((0, o.createToast)(S.default.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE)), h(null)
        }
      }
    }, [C]),
    O = async () => {
      await v(r, _.GuildJoinRequestApplicationStatuses.APPROVED)
    }, G = async () => {
      await v(r, _.GuildJoinRequestApplicationStatuses.REJECTED)
    };
  return (0, a.jsxs)(o.Clickable, {
    className: n()(N.container, m),
    onClick: M,
    children: [(0, a.jsx)(o.Avatar, {
      src: P,
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
        children: u()(x).format("lll")
      })]
    }), j && (0, a.jsx)(A, {
      icon: E.default,
      onClick: O,
      submitting: C === _.GuildJoinRequestApplicationStatuses.APPROVED,
      disabled: null != C && C !== _.GuildJoinRequestApplicationStatuses.APPROVED
    }), j && (0, a.jsx)(A, {
      icon: I.default,
      onClick: G,
      submitting: C === _.GuildJoinRequestApplicationStatuses.REJECTED,
      disabled: null != C && C !== _.GuildJoinRequestApplicationStatuses.REJECTED
    }), (0, a.jsx)(o.Clickable, {
      className: n()(N.overflowMenuContainer, {
        [N.disabled]: null != C
      }),
      onClick: e => {
        (0, d.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await s.e("84259").then(s.bind(s, "597409"));
          return t => (0, a.jsx)(e, {
            ...t,
            guild: i,
            user: g
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

function M() {
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