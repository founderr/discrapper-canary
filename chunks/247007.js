n(47120);
var s = n(735250),
  a = n(470079),
  l = n(120356),
  i = n.n(l),
  r = n(658722),
  o = n.n(r),
  c = n(481060),
  d = n(231239),
  u = n(881052),
  _ = n(601964),
  N = n(346656),
  E = n(806519),
  m = n(768581),
  I = n(888592),
  C = n(689938),
  T = n(618036),
  h = n(216019);

function x(e) {
  var t;
  let {
    guildInfo: n,
    onClick: a,
    submitting: l
  } = e, i = null !== (t = m.ZP.getGuildIconURL({
    id: n.id,
    icon: n.icon,
    size: 40
  })) && void 0 !== t ? t : void 0;
  return (0, s.jsxs)(c.Clickable, {
    className: T.clickableGuildInfoRow,
    onClick: a,
    children: [(0, s.jsx)(E.ZP, {
      mask: E.ZP.Masks.AVATAR_DEFAULT,
      width: 40,
      height: 40,
      children: (0, s.jsx)(N.Z, {
        className: T.guildIcon,
        iconSrc: i,
        guild: new _.ZP(n),
        size: N.Z.Sizes.MEDIUM
      })
    }), (0, s.jsx)(c.Text, {
      className: T.guildName,
      variant: "text-md/semibold",
      children: n.name
    }), l ? (0, s.jsx)(c.Spinner, {
      type: c.Spinner.Type.PULSING_ELLIPSIS
    }) : (0, s.jsx)("img", {
      className: T.__invalid_arrow,
      alt: "",
      src: h
    })]
  })
}
t.Z = e => {
  let {
    setStep: t,
    email: n,
    guildsInfo: l,
    setGuildId: r,
    forceGuildScrollHeight: _
  } = e, [N, E] = a.useState(null), [m, h] = a.useState(void 0), [g, v] = a.useState(null), S = e => async () => {
    E(null), r(e), v(e);
    try {
      await d.Z.sendVerificationEmail(n, !0, e), t(I.tF.VERIFY_PIN)
    } catch (e) {
      E(new u.Hx(e))
    } finally {
      v(null)
    }
  }, A = () => t(I.tF.SUBMIT_SCHOOL), f = l;
  return null != m && "" !== m && (f = l.filter(e => o()(m.toLowerCase(), e.name.toLowerCase()))), (0, s.jsxs)("div", {
    className: T.container,
    children: [(0, s.jsx)(c.Heading, {
      className: i()(T.centerText, T.header),
      variant: "heading-xl/semibold",
      children: C.Z.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_HEADER
    }), (0, s.jsx)("div", {
      className: T.description,
      children: (0, s.jsx)(c.Text, {
        className: T.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: C.Z.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_SUBHEADER.format({
          onJoinWaitlist: A
        })
      })
    }), (0, s.jsxs)("div", {
      className: i()(T.guildList, {
        [T.forcedHeight]: _
      }),
      children: [(0, s.jsxs)("div", {
        className: T.searchContainer,
        children: [(0, s.jsx)(c.SearchBox, {
          placeholder: C.Z.Messages.SEARCH,
          className: T.searchBox,
          inputClassName: T.searchBoxInput,
          searchIconClassName: T.searchBoxIcon,
          closeIconClassName: T.searchBoxIcon,
          onChange: e => {
            h(e)
          },
          label: C.Z.Messages.SEARCH,
          searchTerm: m,
          onClear: () => {
            h(void 0)
          }
        }), (0, s.jsx)(c.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          children: null == N ? void 0 : N.getAnyErrorMessage()
        })]
      }), f.length > 0 ? (0, s.jsx)(c.ScrollerThin, {
        className: T.scroller,
        children: f.map(e => void 0 === e ? null : (0, s.jsx)(x, {
          guildInfo: e,
          onClick: S(e.id),
          submitting: g === e.id
        }, e.id))
      }) : (0, s.jsx)("div", {
        className: T.noResultsContainer,
        children: (0, s.jsxs)("div", {
          className: T.noResultsContent,
          children: [(0, s.jsx)("div", {
            className: T.noResultsImage
          }), (0, s.jsx)(c.Heading, {
            className: i()(T.centerText, T.header),
            variant: "heading-xl/semibold",
            children: C.Z.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_HEADER
          }), (0, s.jsx)(c.Text, {
            className: T.centerText,
            variant: "text-md/normal",
            children: C.Z.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_SUBHEADER.format({
              onJoinWaitlist: A
            })
          })]
        })
      })]
    })]
  })
}