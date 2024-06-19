s.r(a), s(47120);
var l = s(735250),
  t = s(470079),
  i = s(688619),
  n = s.n(i),
  d = s(442837),
  r = s(481060),
  c = s(271383),
  o = s(430824),
  x = s(594174),
  m = s(153124),
  S = s(931240),
  u = s(970606),
  h = s(979264),
  v = s(284019),
  g = s(308083),
  C = s(981631),
  N = s(689938),
  j = s(235978);
a.default = e => {
  var a, s, i, _;
  let {
    guildId: T,
    tag: E,
    brandPrimaryColor: A,
    transitionState: p,
    onClose: L
  } = e, b = (0, m.Dt)(), [Z, M] = t.useState(!0), U = (0, d.e7)([o.Z], () => o.Z.getGuild(T)), f = (0, d.e7)([x.default], () => x.default.getCurrentUser()), k = (0, d.e7)([c.ZP], () => null != f ? c.ZP.getMember(T, f.id) : null);
  if (t.useEffect(() => {
      (0, u.dx)(T)
    }, [T]), null == U || null == f || null == k) return null;
  let w = null != A ? {
    background: "radial-gradient(circle at top, ".concat(n()(A).alpha(.3).hex(), " 0%, transparent 50%)")
  } : void 0;
  return (0, l.jsx)(r.ModalRoot, {
    className: j.modal,
    transitionState: p,
    "aria-labelledby": b,
    size: r.ModalSize.SMALL,
    children: (0, l.jsxs)("div", {
      className: j.content,
      style: w,
      children: [(0, l.jsx)(h.aG, {
        guildId: T,
        clanTag: E,
        clanBadge: null === (a = U.clan) || void 0 === a ? void 0 : a.badge,
        className: j.tagPreview,
        textClassName: j.tagText,
        textVariant: "heading-xxl/semibold",
        badgeSize: g.NC.SIZE_36
      }), (0, l.jsx)(r.Heading, {
        variant: "heading-xxl/medium",
        children: N.Z.Messages.CLAN_SUCCESS_TITLE.format({
          name: U.name
        })
      }), (0, l.jsx)(r.Text, {
        className: j.subtitle,
        variant: "text-md/normal",
        children: N.Z.Messages.CLAN_SUCCESS_SUBTITLE
      }), (0, l.jsxs)("div", {
        className: j.previewSection,
        children: [(0, l.jsxs)("div", {
          className: j.chatPreview,
          children: [(0, l.jsx)(r.Avatar, {
            src: f.getAvatarURL(T, 40),
            size: r.AvatarSizes.SIZE_40,
            "aria-hidden": !0
          }), (0, l.jsxs)("div", {
            className: j.previewText,
            children: [(0, l.jsxs)("div", {
              className: j.userName,
              children: [(0, l.jsx)(r.NameWithRole, {
                className: j.userName,
                name: null !== (i = k.nick) && void 0 !== i ? i : f.username,
                color: null !== (_ = k.colorString) && void 0 !== _ ? _ : void 0
              }), Z && (0, l.jsx)(h.aG, {
                guildId: T,
                clanBadge: null === (s = U.clan) || void 0 === s ? void 0 : s.badge,
                clanTag: E,
                badgeSize: g.NC.SIZE_12,
                textVariant: "text-xs/semibold"
              })]
            }), (0, l.jsx)("div", {
              className: j.fakeMessage,
              style: {
                width: "80%"
              }
            }), (0, l.jsx)("div", {
              className: j.fakeMessage,
              style: {
                width: "50%"
              }
            })]
          })]
        }), (0, l.jsx)("div", {
          className: j.divider
        }), (0, l.jsxs)("div", {
          className: j.settingSection,
          children: [(0, l.jsxs)("div", {
            children: [(0, l.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: N.Z.Messages.CLAN_SUCCESS_USE_TAG_TEXT
            }), (0, l.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: N.Z.Messages.CLAN_SUCCESS_USE_TAG_HELP
            })]
          }), (0, l.jsx)(r.Switch, {
            onChange: () => M(!Z),
            checked: Z
          })]
        })]
      }), (0, l.jsx)(v.Z, {
        size: r.Button.Sizes.LARGE,
        themeColor: A,
        onClick: () => {
          Z && (0, S.nE)(T, Z, C.Sbl.CLAN_SETUP_MODAL), (0, u.B3)(T, Z), L()
        },
        children: (0, l.jsx)(r.Text, {
          color: "none",
          variant: "text-md/medium",
          children: N.Z.Messages.CLAN_SUCCESS_CTA
        })
      }), (0, l.jsx)(r.Text, {
        className: j.postscript,
        variant: "text-xs/normal",
        color: "header-secondary",
        children: N.Z.Messages.CLAN_SUCCESS_POSTSCRIPT
      })]
    })
  })
}