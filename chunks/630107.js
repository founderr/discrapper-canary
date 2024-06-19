s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var n = s(735250),
  a = s(470079),
  r = s(873546),
  l = s(442837),
  i = s(481060),
  o = s(830064),
  c = s(388905),
  u = s(625128),
  d = s(362762),
  m = s(703656),
  p = s(981631),
  x = s(186901),
  N = s(689938),
  E = s(17747),
  f = s(343407);
l.ZP.initialize();
let h = r.tq || r.Em,
  j = "inventory";

function g() {
  let e = (0, l.e7)([d.Z], () => d.Z.getState("quests"));
  if (a.useEffect(() => {
      if (!h) null == e ? u.Z.openNativeAppModal("quests", p.Etm.DEEP_LINK, {
        type: x.jE.USER_SETTINGS,
        params: {
          section: j
        }
      }) : e === p.kEZ.OPEN_FAIL && (0, m.dL)(p.Z5c.SETTINGS(j))
    }, [e]), h) return (0, n.jsxs)("div", {
    className: E.mobileWebContainer,
    children: [(0, n.jsx)("img", {
      src: f,
      alt: "",
      className: E.mobileWebImage
    }), (0, n.jsx)(i.Heading, {
      variant: "display-lg",
      color: "text-brand",
      children: N.Z.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      className: E.mobileWebCopy,
      children: N.Z.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY.format()
    })]
  });
  let t = null == e || e === p.kEZ.OPENING || e === p.kEZ.OPEN_FAIL;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.Z, {
      className: E.backgroundArtwork,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, n.jsx)("div", {
      className: E.container,
      children: (0, n.jsx)(c.ZP, {
        children: t ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(c.Dx, {
            children: N.Z.Messages.APP_OPENING
          }), (0, n.jsx)(c.Hh, {})]
        }) : (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(c.Dx, {
            className: E.appOpenedTitle,
            children: N.Z.Messages.APP_OPENED_TITLE
          }), (0, n.jsx)(c.DK, {
            children: N.Z.Messages.DEEPLINK_BROWSER_APP_OPENED
          })]
        })
      })
    })]
  })
}