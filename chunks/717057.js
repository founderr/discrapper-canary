n.d(t, {
  Z: function() {
    return j
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(913527),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(410030),
  h = n(271383),
  m = n(430824),
  E = n(594174),
  p = n(153124),
  g = n(709054),
  f = n(931240),
  C = n(645896),
  _ = n(603368),
  I = n(532490),
  x = n(380365),
  T = n(979264),
  N = n(620929),
  Z = n(284019),
  S = n(308083),
  v = n(981631),
  A = n(689938),
  M = n(595737);

function R(e) {
  var t;
  let {
    guildId: n,
    clanInfo: s,
    onSignCharter: r
  } = e, c = i.useMemo(() => {
    let e = g.default.extractTimestamp(n);
    return o()(new Date(e)).format("MMMM YYYY")
  }, [n]), d = i.useMemo(() => new Set(s.games), [s.games]);
  return (0, l.jsx)(I.Z, {
    guildId: n,
    signHintPosition: I.p.LEFT,
    primaryColor: null === (t = s.branding) || void 0 === t ? void 0 : t.primaryColor,
    onSignCharter: r,
    children: (0, l.jsxs)("div", {
      className: M.scrollContentsContainer,
      children: [(0, l.jsx)(T.aG, {
        guildId: n,
        clanBadge: s.badge.imageHash,
        clanTag: s.tag,
        textVariant: "heading-lg/semibold",
        badgeSize: S.NC.SIZE_24,
        className: M.clanTagChiplet
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(u.Heading, {
          variant: "heading-xxl/normal",
          color: "text-muted",
          className: M.charterHeaderText,
          children: A.Z.Messages.CLAN_SETUP_OVERVIEW_TITLE
        }), (0, l.jsx)(u.Heading, {
          variant: "heading-xxl/bold",
          color: "interactive-active",
          className: M.charterHeaderText,
          children: s.name
        }), (0, l.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          className: M.establishedDate,
          children: A.Z.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
            date: c
          })
        })]
      }), (0, l.jsx)(N.p, {
        applicationIds: d,
        playstyle: s.playstyle,
        className: a()(M.charterBodyText, M.gameSection)
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: M.charterBodyText,
        children: A.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
      })]
    })
  })
}

function j(e) {
  var t;
  let {
    guildId: n,
    onClose: s,
    onAccept: r,
    ...o
  } = e, g = (0, p.Dt)(), I = (0, C.Cc)(n), T = (0, C.E8)(), [N, S] = i.useState(!0), [j, L] = i.useState(!1), O = i.useCallback(() => {
    r(), s()
  }, [r, s]);
  i.useEffect(() => {
    null == I && !T && O()
  }, [I, O, T]);
  let P = i.useCallback(() => {
      N && (0, f.nE)(n, N, v.Sbl.CREATE_JOIN_GUILD_MODAL), O()
    }, [n, O, N]),
    y = i.useCallback(() => {
      L(!0)
    }, []),
    b = (0, c.e7)([m.Z], () => m.Z.getGuild(n)),
    D = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
    U = (0, c.e7)([h.ZP], () => null != D ? h.ZP.getMember(n, D.id) : null),
    k = (0, d.ZP)(),
    w = (0, _.nP)(null == I ? void 0 : null === (t = I.branding) || void 0 === t ? void 0 : t.primaryColor, [u.tokens.colors.BG_BRAND, .7]),
    H = u.tokens.colors.BG_SURFACE_OVERLAY.resolve({
      theme: k,
      saturation: 1
    }).hex(),
    G = (0, _.nj)(w, H, "top center");
  return null == b || null == D || null == U || null == I ? null : (0, l.jsx)(u.ModalRoot, {
    ...o,
    transitionState: o.transitionState,
    "aria-labelledby": g,
    className: M.modal,
    size: u.ModalSize.DYNAMIC,
    children: (0, l.jsxs)(u.ModalContent, {
      className: M.content,
      style: G,
      children: [(0, l.jsxs)("div", {
        className: M.infoSide,
        children: [(0, l.jsxs)("div", {
          className: M.titlesContainer,
          children: [(0, l.jsx)("div", {
            className: M.title,
            children: (0, l.jsx)(u.Heading, {
              variant: "heading-xxl/medium",
              children: A.Z.Messages.CLAN_JOIN_SUCCESS_TITLE.format({
                name: b.name
              })
            })
          }), (0, l.jsx)(u.Text, {
            className: M.subtitle,
            variant: "text-md/normal",
            children: A.Z.Messages.CLAN_JOIN_SUCCESS_SUBTITLE
          })]
        }), (0, l.jsx)(x.Z, {
          guildId: n,
          isTagAdopted: N,
          onChangeUseTag: S
        })]
      }), (0, l.jsx)("div", {
        className: M.scrollMainContainer,
        children: (0, l.jsx)(R, {
          guildId: n,
          clanInfo: I,
          onSignCharter: y
        })
      }), (0, l.jsx)(Z.Z, {
        onClick: P,
        color: u.Button.Colors.BRAND,
        themeColor: w,
        fullWidth: !1,
        className: a()(M.ctaButton, j ? M.ctaButtonSigned : null),
        children: (0, l.jsxs)("div", {
          className: M.ctaButtonInner,
          children: [(0, l.jsx)(u.Text, {
            color: "currentColor",
            variant: "text-md/medium",
            children: A.Z.Messages.CLAN_JOIN_SUCCESS_MAIN_CTA
          }), (0, l.jsx)(u.ArrowLargeRightIcon, {
            size: "custom",
            width: 20,
            height: 20,
            color: null == w ? void 0 : (0, _.$0)(w).hex()
          })]
        })
      })]
    })
  })
}