a.d(s, {
  C: function() {
    return M
  },
  h: function() {
    return C
  }
}), a(47120), a(411104);
var n = a(735250),
  t = a(470079),
  l = a(120356),
  r = a.n(l),
  i = a(913527),
  o = a.n(i),
  c = a(481060),
  I = a(239091),
  d = a(598077),
  u = a(768581),
  E = a(693546),
  T = a(246364),
  _ = a(689938),
  N = a(425415);

function R(e) {
  let {
    icon: s,
    onClick: a,
    submitting: t,
    disabled: l
  } = e;
  return (0, n.jsx)(c.Clickable, {
    className: r()(N.actionIconContainer, {
      [N.disabled]: l || t
    }),
    onClick: a,
    children: t ? (0, n.jsx)(c.Dots, {
      className: N.icon,
      dotRadius: 2,
      themed: !0
    }) : (0, n.jsx)(s, {
      className: N.icon,
      size: "xxs",
      color: "currentColor"
    })
  })
}

function M(e) {
  let {
    applicationStatus: s,
    guild: l,
    guildJoinRequest: i,
    className: M,
    onClick: C,
    atMaxMemberCapacity: m
  } = e, [A, x] = t.useState(null), {
    user: h,
    createdAt: S
  } = i;
  if (null == h) throw Error("Missing user on this guild join request!");
  let P = t.useMemo(() => new d.Z(h), [h]),
    g = u.ZP.getUserAvatarURL(P),
    j = s === T.wB.SUBMITTED,
    Z = t.useCallback(async (e, s) => {
      let {
        guildId: a,
        userId: n
      } = e;
      if (null == A) {
        x(s);
        try {
          await E.Z.updateGuildJoinRequest(a, n, s)
        } catch (e) {
          (0, c.showToast)((0, c.createToast)(_.Z.Messages.ERROR_GENERIC_TITLE, c.ToastType.FAILURE)), x(null)
        }
      }
    }, [A]),
    v = async () => {
      await Z(i, T.wB.APPROVED)
    }, f = async () => {
      await Z(i, T.wB.REJECTED)
    };
  return (0, n.jsxs)(c.Clickable, {
    className: r()(N.container, M),
    onClick: C,
    children: [(0, n.jsx)(c.Avatar, {
      src: g,
      size: c.AvatarSizes.SIZE_40,
      "aria-label": h.username,
      className: N.__invalid_spacer
    }), (0, n.jsxs)("div", {
      className: N.userDetails,
      children: [(0, n.jsx)(c.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: h.username
      }), (0, n.jsx)(c.Text, {
        className: N.createdAt,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o()(S).format("lll")
      })]
    }), j && !m && (0, n.jsx)(R, {
      icon: c.CheckmarkLargeIcon,
      onClick: v,
      submitting: A === T.wB.APPROVED,
      disabled: null != A && A !== T.wB.APPROVED
    }), j && (0, n.jsx)(R, {
      icon: c.CloseSmallIcon,
      onClick: f,
      submitting: A === T.wB.REJECTED,
      disabled: null != A && A !== T.wB.REJECTED
    }), (0, n.jsx)(c.Clickable, {
      className: r()(N.overflowMenuContainer, {
        [N.disabled]: null != A
      }),
      onClick: e => {
        (0, I.jW)(e, async () => {
          let {
            default: e
          } = await a.e("84259").then(a.bind(a, 597409));
          return s => (0, n.jsx)(e, {
            ...s,
            guild: l,
            user: P
          })
        }, {
          position: "bottom",
          align: "right"
        })
      },
      children: (0, n.jsx)(c.MoreHorizontalIcon, {
        size: "custom",
        color: "currentColor",
        className: N.icon,
        width: 18
      })
    })]
  })
}

function C() {
  let e = "".concat(Math.floor(50 * Math.random()) + 100, "px"),
    s = "".concat(Math.floor(25 * Math.random()) + 50, "px");
  return (0, n.jsxs)("div", {
    className: N.placeholder,
    children: [(0, n.jsx)("div", {
      className: r()(N.placeholderAvatar)
    }), (0, n.jsxs)("div", {
      className: N.userDetails,
      children: [(0, n.jsx)("div", {
        className: N.placeholderUsername,
        style: {
          maxWidth: e
        }
      }), (0, n.jsx)("div", {
        className: N.placeholderCreatedAt,
        style: {
          maxWidth: s
        }
      })]
    })]
  })
}