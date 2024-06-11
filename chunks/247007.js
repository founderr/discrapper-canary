"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("658722"),
  o = s.n(r),
  c = s("481060"),
  d = s("231239"),
  u = s("881052"),
  _ = s("601964"),
  N = s("346656"),
  E = s("806519"),
  m = s("768581"),
  I = s("888592"),
  f = s("689938"),
  C = s("105008"),
  T = s("216019");

function S(e) {
  var t;
  let {
    guildInfo: s,
    onClick: n,
    submitting: l
  } = e, i = null !== (t = m.default.getGuildIconURL({
    id: s.id,
    icon: s.icon,
    size: 40
  })) && void 0 !== t ? t : void 0;
  return (0, a.jsxs)(c.Clickable, {
    className: C.clickableGuildInfoRow,
    onClick: n,
    children: [(0, a.jsx)(E.default, {
      mask: E.default.Masks.AVATAR_DEFAULT,
      width: 40,
      height: 40,
      children: (0, a.jsx)(N.default, {
        className: C.guildIcon,
        iconSrc: i,
        guild: new _.default(s),
        size: N.default.Sizes.MEDIUM
      })
    }), (0, a.jsx)(c.Text, {
      className: C.guildName,
      variant: "text-md/semibold",
      children: s.name
    }), l ? (0, a.jsx)(c.Spinner, {
      type: c.Spinner.Type.PULSING_ELLIPSIS
    }) : (0, a.jsx)("img", {
      className: C.__invalid_arrow,
      alt: "",
      src: T
    })]
  })
}
t.default = e => {
  let {
    setStep: t,
    email: s,
    guildsInfo: l,
    setGuildId: r,
    forceGuildScrollHeight: _
  } = e, [N, E] = n.useState(null), [m, T] = n.useState(void 0), [g, h] = n.useState(null), p = e => async () => {
    E(null), r(e), h(e);
    try {
      await d.default.sendVerificationEmail(s, !0, e), t(I.HubEmailConnectionSteps.VERIFY_PIN)
    } catch (e) {
      E(new u.APIError(e))
    } finally {
      h(null)
    }
  }, x = () => t(I.HubEmailConnectionSteps.SUBMIT_SCHOOL), A = l;
  return null != m && "" !== m && (A = l.filter(e => o()(m.toLowerCase(), e.name.toLowerCase()))), (0, a.jsxs)("div", {
    className: C.container,
    children: [(0, a.jsx)(c.Heading, {
      className: i()(C.centerText, C.header),
      variant: "heading-xl/semibold",
      children: f.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_HEADER
    }), (0, a.jsx)("div", {
      className: C.description,
      children: (0, a.jsx)(c.Text, {
        className: C.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: f.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_SUBHEADER.format({
          onJoinWaitlist: x
        })
      })
    }), (0, a.jsxs)("div", {
      className: i()(C.guildList, {
        [C.forcedHeight]: _
      }),
      children: [(0, a.jsxs)("div", {
        className: C.searchContainer,
        children: [(0, a.jsx)(c.SearchBox, {
          placeholder: f.default.Messages.SEARCH,
          className: C.searchBox,
          inputClassName: C.searchBoxInput,
          searchIconClassName: C.searchBoxIcon,
          closeIconClassName: C.searchBoxIcon,
          onChange: e => {
            T(e)
          },
          label: f.default.Messages.SEARCH,
          searchTerm: m,
          onClear: () => {
            T(void 0)
          }
        }), (0, a.jsx)(c.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          children: null == N ? void 0 : N.getAnyErrorMessage()
        })]
      }), A.length > 0 ? (0, a.jsx)(c.ScrollerThin, {
        className: C.scroller,
        children: A.map(e => void 0 === e ? null : (0, a.jsx)(S, {
          guildInfo: e,
          onClick: p(e.id),
          submitting: g === e.id
        }, e.id))
      }) : (0, a.jsx)("div", {
        className: C.noResultsContainer,
        children: (0, a.jsxs)("div", {
          className: C.noResultsContent,
          children: [(0, a.jsx)("div", {
            className: C.noResultsImage
          }), (0, a.jsx)(c.Heading, {
            className: i()(C.centerText, C.header),
            variant: "heading-xl/semibold",
            children: f.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_HEADER
          }), (0, a.jsx)(c.Text, {
            className: C.centerText,
            variant: "text-md/normal",
            children: f.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_SUBHEADER.format({
              onJoinWaitlist: x
            })
          })]
        })
      })]
    })]
  })
}