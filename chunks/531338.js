n.r(t), n(610138), n(216116), n(78328), n(815648), n(47120);
var s = n(735250);
n(470079);
var a = n(481060),
  r = n(457330),
  i = n(417663),
  o = n(726542),
  l = n(77987),
  c = n(787025),
  d = n(689938),
  u = n(368668);
t.default = (0, l.e)(function(e) {
  let {
    match: t
  } = e, n = t.params.type, l = o.Z.get(n);
  if (null == l) return (0, s.jsx)(c.G, {
    children: (0, s.jsx)(a.Text, {
      className: u.error,
      variant: "text-md/normal",
      color: "text-warning",
      children: d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_PLATFORM_UNKNOWN
    })
  });
  async function N() {
    var e, t, s;
    let a = new URLSearchParams(window.location.search),
      {
        body: i
      } = await r.Z.authorize(n, {
        location: "Connection Intermediate",
        twoWayLink: null != a.get("two_way_link") ? "true" === a.get("two_way_link") : void 0,
        twoWayLinkType: null !== (e = a.get("two_way_link_type")) && void 0 !== e ? e : void 0,
        userCode: null !== (t = a.get("two_way_user_code")) && void 0 !== t ? t : void 0,
        successRedirect: null !== (s = a.get("success_redirect")) && void 0 !== s ? s : void 0
      });
    window.location = i.url
  }
  return (0, s.jsx)(c.G, {
    wrapperClassName: u.wrapper,
    children: (0, s.jsxs)("div", {
      className: u.root,
      children: [(0, s.jsx)(i.LinkPlatformLogo, {
        className: u.logos,
        platform: l
      }), (0, s.jsx)(a.Heading, {
        variant: "text-lg/bold",
        className: u.header,
        children: d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_HEADER.format({
          provider: l.name
        })
      }), (0, s.jsx)(a.Text, {
        variant: "text-md/normal",
        className: u.body,
        children: d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_DESCRIPTION.format({
          provider: l.name
        })
      }), (0, s.jsx)(a.Button, {
        size: a.Button.Sizes.LARGE,
        color: a.Button.Colors.BRAND,
        onClick: N,
        children: d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_BUTTON
      })]
    })
  })
})