"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("851387"),
  u = s("534291"),
  c = s("206230"),
  E = s("126383"),
  _ = s("49111"),
  I = s("782340"),
  f = s("680451");

function T(e) {
  let {
    color: t,
    children: s
  } = e;
  return (0, a.jsxs)("div", {
    className: f.roleTag,
    children: [(0, a.jsx)(o.RoleCircle, {
      className: f.roleDot,
      color: t
    }), (0, a.jsx)("span", {
      className: f.roleText,
      children: s
    })]
  })
}

function S(e) {
  let {
    guild: t,
    display: s
  } = e;
  return (0, a.jsxs)("div", {
    className: i(f.banner, t.backgroundClass, {
      [f.bannerOut]: !s
    }),
    children: [(0, a.jsx)("div", {
      className: f.roles,
      children: t.roles.map((e, t) => (0, a.jsx)("div", {
        className: f.rolesRow,
        children: e.map(e => (0, a.jsx)(T, {
          color: e.color,
          children: e.name
        }, e.name))
      }, t))
    }), (0, a.jsx)("div", {
      className: f.profileCard,
      children: (0, a.jsxs)("div", {
        className: f.avatarContainer,
        children: [(0, a.jsx)(o.Avatar, {
          size: o.AvatarSizes.SIZE_56,
          "aria-hidden": !0,
          status: _.StatusTypes.ONLINE,
          src: t.avatar
        }), (0, a.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/bold",
          className: f.avatarName,
          children: t.username
        })]
      })
    })]
  })
}

function m() {
  let e = (0, r.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    t = l.useMemo(() => [{
      backgroundClass: f.bannerClubs,
      username: "Wumpus#0000",
      avatar: s("896122"),
      roles: [
        [{
          name: I.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_1,
          color: "#7e00fc"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_2,
          color: "#faa61a"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_3,
          color: "#f06ea8"
        }],
        [{
          name: I.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_4,
          color: "#45ddc0"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_5,
          color: "#00b0f4"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_CLUBS_ROLE_6,
          color: "#ba1616"
        }]
      ]
    }, {
      backgroundClass: f.bannerGaming,
      username: "Graggle#0000",
      avatar: s("352683"),
      roles: [
        [{
          name: I.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_1,
          color: "#4a76e6"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_2,
          color: "#ad87ff"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_3,
          color: "#6defcf"
        }],
        [{
          name: I.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_4,
          color: "#ff73fa"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_5,
          color: "#3ba55c"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_GAMING_ROLE_6,
          color: "#ff1b66"
        }]
      ]
    }, {
      backgroundClass: f.bannerHobbies,
      username: "Mallow#0000",
      avatar: s("380476"),
      roles: [
        [{
          name: I.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_1,
          color: "#20d6b8"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_2,
          color: "#236136"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_3,
          color: "#ff9a15"
        }],
        [{
          name: I.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_4,
          color: "#ff78b9"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_5,
          color: "#00b0f4"
        }, {
          name: I.default.Messages.ROLE_EMPTY_STATE_HOBBIES_ROLE_6,
          color: "#6f52e4"
        }]
      ]
    }], []),
    [n, i] = l.useState(0);
  return l.useEffect(() => {
    if (e) return;
    let s = setTimeout(() => i((n + 1) % t.length), 6332);
    return () => clearTimeout(s)
  }, [n]), (0, a.jsx)("div", {
    className: f.bannerContainer,
    "aria-hidden": !0,
    children: t.map((e, t) => (0, a.jsx)(S, {
      guild: e,
      display: t === n
    }, t))
  })
}

function N(e) {
  let {
    guild: t,
    everyoneRole: s,
    setEditRoleId: n
  } = e, [i, r] = l.useState(!1), c = async () => {
    r(!0), await d.default.createRole(t.id), r(!1)
  }, _ = l.useCallback(() => {
    n(s.id)
  }, [n, s.id]);
  return (0, a.jsx)(u.DefaultCustomContentScroller, {
    children: (0, a.jsxs)(o.FormSection, {
      className: f.section,
      title: I.default.Messages.ROLES,
      tag: o.FormTitleTags.H2,
      children: [(0, a.jsxs)("div", {
        className: f.container,
        children: [(0, a.jsx)(m, {}), (0, a.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          children: I.default.Messages.ROLE_OVERVIEW_EMPTY_SUBHEADER
        }), (0, a.jsx)(o.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          className: f.introBody,
          children: I.default.Messages.ROLE_OVERVIEW_DESCRIPTION
        }), (0, a.jsx)(o.Button, {
          className: f.button,
          size: o.Button.Sizes.MEDIUM,
          onClick: c,
          submitting: i,
          children: I.default.Messages.ROLE_CREATE_CTA
        })]
      }), (0, a.jsx)(o.FormDivider, {
        className: f.divider
      }), (0, a.jsx)(E.default, {
        role: s,
        onClick: _
      })]
    })
  })
}