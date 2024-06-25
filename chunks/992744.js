var l = n(735250),
  i = n(470079),
  s = n(780384),
  a = n(481060),
  r = n(410030),
  o = n(367907),
  c = n(984370),
  u = n(981631),
  d = n(689938),
  h = n(574827),
  m = n(66737),
  E = n(525377);
t.Z = () => {
  let e = (0, r.ZP)();
  i.useEffect(() => {
    o.ZP.trackWithMetadata(u.rMx.GUILD_OUTAGE_VIEWED, {})
  }, []);
  let t = (0, s.wj)(e) ? m : E;
  return (0, l.jsxs)("div", {
    className: h.container,
    children: [(0, l.jsxs)(c.Z, {
      toolbar: (0, l.jsx)(i.Fragment, {}),
      children: [(0, l.jsx)(c.Z.Icon, {
        icon: a.TextIcon,
        "aria-hidden": !0
      }), (0, l.jsx)(c.Z.Title, {
        children: d.Z.Messages.GUILD_UNAVAILABLE_HEADER
      })]
    }), (0, l.jsxs)("div", {
      className: h.content,
      children: [(0, l.jsx)("img", {
        alt: "",
        className: h.splashImage,
        src: t
      }), (0, l.jsx)(a.Heading, {
        className: h.splashHeader,
        variant: "heading-lg/medium",
        children: d.Z.Messages.GUILD_UNAVAILABLE_TITLE
      }), (0, l.jsx)(a.Text, {
        className: h.splashText,
        variant: "text-md/normal",
        children: d.Z.Messages.GUILD_UNAVAILABLE_BODY
      })]
    })]
  })
}