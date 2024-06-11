"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("481060"),
  o = s("749210"),
  d = s("63063"),
  u = s("714939"),
  c = s("494831"),
  E = s("981631"),
  _ = s("689938"),
  I = s("793577");

function T(e) {
  let {
    guild: t,
    everyoneRole: s,
    filteredRoles: n,
    setEditRoleId: i,
    query: o,
    setQuery: d,
    setHeaderHeight: u
  } = e, E = l.useRef(null);
  l.useEffect(() => {
    var e, t;
    u(null !== (t = null === (e = E.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : c.DEFAULT_HEADER_HEIGHT_PX)
  }, [u]);
  let T = l.useCallback(() => {
    i(s.id)
  }, [i, s.id]);
  return (0, a.jsxs)("div", {
    ref: E,
    children: [(0, a.jsx)(r.FormTitle, {
      tag: r.FormTitleTags.H1,
      children: _.default.Messages.ROLES
    }), (0, a.jsx)(r.Text, {
      className: I.description,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: _.default.Messages.ROLE_OVERVIEW_DESCRIPTION
    }), (0, a.jsx)(S, {
      guild: t,
      everyoneRole: s,
      filteredRoles: n,
      query: o,
      setQuery: d,
      onEveryoneRoleClick: T
    })]
  })
}

function S(e) {
  let {
    guild: t,
    everyoneRole: s,
    filteredRoles: l,
    query: n,
    setQuery: o,
    onEveryoneRoleClick: c
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.default, {
      role: s,
      onClick: c
    }), (0, a.jsx)(f, {
      guild: t,
      query: n,
      setQuery: o
    }), (0, a.jsx)(r.Text, {
      className: I.helpText,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: _.default.Messages.ROLE_LIST_BODY_WITH_HELP.format({
        articleURL: d.default.getArticleURL(E.HelpdeskArticles.PERMISSIONS_TUTORIAL)
      })
    }), (0, a.jsx)("div", {
      className: I.rolesTable,
      children: (0, a.jsxs)("div", {
        className: I.tableHeader,
        children: [(0, a.jsx)("div", {
          className: I.dragSpacing
        }), (0, a.jsx)(r.Text, {
          className: i()(I.tableTitle, I.roleNameSpacing),
          variant: "text-sm/normal",
          children: _.default.Messages.ROLE_LIST_HEADER.format({
            numRoles: String(l.length)
          })
        }), (0, a.jsx)(r.Text, {
          className: i()(I.tableTitle, I.memberSpacing),
          variant: "text-sm/normal",
          children: _.default.Messages.MEMBERS
        }), (0, a.jsx)("div", {
          className: I.buttonsSpacing
        })]
      })
    })]
  })
}

function f(e) {
  let {
    guild: t,
    query: s,
    setQuery: n
  } = e, [i, d] = l.useState(!1), u = l.useCallback(e => {
    n(e)
  }, [n]), c = l.useCallback(() => {
    n("")
  }, [n]), E = async () => {
    d(!0), await o.default.createRole(t.id), d(!1)
  };
  return (0, a.jsx)("div", {
    className: I.__invalid_rolesList,
    children: (0, a.jsxs)("div", {
      className: I.searchContainer,
      children: [(0, a.jsx)(r.SearchBar, {
        size: r.SearchBar.Sizes.MEDIUM,
        query: s,
        onChange: u,
        onClear: c,
        placeholder: _.default.Messages.SEARCH_ROLES,
        "aria-label": _.default.Messages.SEARCH_ROLES
      }), (0, a.jsx)(r.Button, {
        className: I.createButton,
        size: r.Button.Sizes.SMALL,
        onClick: E,
        submitting: i,
        children: _.default.Messages.ROLE_CREATE_CTA
      })]
    })
  })
}