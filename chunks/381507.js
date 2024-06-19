var t = n(735250);
n(470079);
var i = n(780384),
  l = n(481060),
  r = n(410030),
  C = n(204197),
  a = n(51144),
  o = n(105759),
  d = n(898969),
  _ = n(703614),
  u = n(182294),
  c = n(689938),
  p = n(734449);
s.Z = () => {
  let e = (0, o.Z)(),
    {
      avatarSrc: s,
      eventHandlers: n
    } = (0, C.Z)({
      user: e,
      size: u.EF.SIZE_32,
      animateOnHover: !0
    }),
    x = (0, r.Fg)(),
    L = (0, i.ap)(x),
    I = a.ZP.getName(e),
    E = L ? d.Z : _.Z;
  return null == e ? null : (0, t.jsxs)("div", {
    className: p.attributionBannerContainer,
    children: [(0, t.jsx)("div", {
      className: p.avatarContainer,
      children: (0, t.jsx)(l.Avatar, {
        src: s,
        "aria-label": e.username,
        size: u.EF.SIZE_32,
        ...n
      })
    }), (0, t.jsx)(l.Text, {
      variant: "text-xs/bold",
      className: p.bannerHeader,
      children: c.Z.Messages.REFERRAL_PRORAM_PAYMENT_MODAL_BANNER.format({
        userName: I
      })
    }), (0, t.jsx)(E, {
      className: p.bannerIcon
    })]
  })
}