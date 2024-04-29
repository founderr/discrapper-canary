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
  E = s("408814"),
  m = s("806519"),
  I = s("768581"),
  f = s("888592"),
  C = s("689938"),
  T = s("105008"),
  S = s("216019");

function g(e) {
  var t;
  let {
    guildInfo: s,
    onClick: n,
    submitting: l
  } = e, i = null !== (t = I.default.getGuildIconURL({
    id: s.id,
    icon: s.icon,
    size: 40
  })) && void 0 !== t ? t : void 0;
  return (0, a.jsxs)(c.Clickable, {
    className: T.clickableGuildInfoRow,
    onClick: n,
    children: [(0, a.jsx)(m.default, {
      mask: m.default.Masks.AVATAR_DEFAULT,
      width: 40,
      height: 40,
      children: (0, a.jsx)(N.default, {
        className: T.guildIcon,
        iconSrc: i,
        guild: new _.default(s),
        size: N.default.Sizes.MEDIUM
      })
    }), (0, a.jsx)(c.Text, {
      className: T.guildName,
      variant: "text-md/semibold",
      children: s.name
    }), l ? (0, a.jsx)(c.Spinner, {
      type: c.Spinner.Type.PULSING_ELLIPSIS
    }) : (0, a.jsx)("img", {
      className: T.__invalid_arrow,
      alt: "",
      src: S
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
  } = e, [N, m] = n.useState(null), [I, S] = n.useState(void 0), [h, p] = n.useState(null), x = e => async () => {
    m(null), r(e), p(e);
    try {
      await d.default.sendVerificationEmail(s, !0, e), t(f.HubEmailConnectionSteps.VERIFY_PIN)
    } catch (e) {
      m(new u.APIError(e))
    } finally {
      p(null)
    }
  }, A = () => t(f.HubEmailConnectionSteps.SUBMIT_SCHOOL), v = l;
  return null != I && "" !== I && (v = l.filter(e => o()(I.toLowerCase(), e.name.toLowerCase()))), (0, a.jsxs)("div", {
    className: T.container,
    children: [(0, a.jsx)(c.Heading, {
      className: i()(T.centerText, T.header),
      variant: "heading-xl/semibold",
      children: C.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_HEADER
    }), (0, a.jsx)("div", {
      className: T.description,
      children: (0, a.jsx)(c.Text, {
        className: T.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: C.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_SUBHEADER.format({
          onJoinWaitlist: A
        })
      })
    }), (0, a.jsxs)("div", {
      className: i()(T.guildList, {
        [T.forcedHeight]: _
      }),
      children: [(0, a.jsxs)("div", {
        className: T.searchContainer,
        children: [(0, a.jsx)(E.default, {
          placeholder: C.default.Messages.SEARCH,
          className: T.searchBox,
          inputClassName: T.searchBoxInput,
          searchIconClassName: T.searchBoxIcon,
          closeIconClassName: T.searchBoxIcon,
          onChange: e => {
            S(e)
          },
          label: C.default.Messages.SEARCH,
          searchTerm: I,
          onClear: () => {
            S(void 0)
          }
        }), (0, a.jsx)(c.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          children: null == N ? void 0 : N.getAnyErrorMessage()
        })]
      }), v.length > 0 ? (0, a.jsx)(c.ScrollerThin, {
        className: T.scroller,
        children: v.map(e => void 0 === e ? null : (0, a.jsx)(g, {
          guildInfo: e,
          onClick: x(e.id),
          submitting: h === e.id
        }, e.id))
      }) : (0, a.jsx)("div", {
        className: T.noResultsContainer,
        children: (0, a.jsxs)("div", {
          className: T.noResultsContent,
          children: [(0, a.jsx)("div", {
            className: T.noResultsImage
          }), (0, a.jsx)(c.Heading, {
            className: i()(T.centerText, T.header),
            variant: "heading-xl/semibold",
            children: C.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_HEADER
          }), (0, a.jsx)(c.Text, {
            className: T.centerText,
            variant: "text-md/normal",
            children: C.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_SUBHEADER.format({
              onJoinWaitlist: A
            })
          })]
        })
      })]
    })]
  })
}