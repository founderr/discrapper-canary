"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("873546"),
  r = s("442837"),
  i = s("481060"),
  u = s("830064"),
  o = s("625128"),
  c = s("362762"),
  d = s("703656"),
  p = s("819570"),
  m = s("981631"),
  f = s("186901"),
  x = s("689938"),
  N = s("132054"),
  h = s("343407");
r.default.initialize();
let T = l.isMobile || l.isTablet,
  A = "inventory";

function g() {
  let e = (0, r.useStateFromStores)([c.default], () => c.default.getState("quests"));
  if (n.useEffect(() => {
      !T && (null == e ? o.default.openNativeAppModal("quests", m.RPCCommands.DEEP_LINK, {
        type: f.RPCDeepLinks.USER_SETTINGS,
        params: {
          section: A
        }
      }) : e === m.NativeAppStates.OPEN_FAIL && (0, d.replaceWith)(m.Routes.SETTINGS(A)))
    }, [e]), T) return (0, a.jsxs)("div", {
    className: N.mobileWebContainer,
    children: [(0, a.jsx)("img", {
      src: h,
      alt: "",
      className: N.mobileWebImage
    }), (0, a.jsx)(i.Heading, {
      variant: "display-lg",
      color: "text-brand",
      children: x.default.Messages.QUESTS_LANDING_PAGE_ERROR_HEADING
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      className: N.mobileWebCopy,
      children: x.default.Messages.QUESTS_LANDING_PAGE_MOBILE_WEB_BODY.format()
    })]
  });
  let t = null == e || e === m.NativeAppStates.OPENING || e === m.NativeAppStates.OPEN_FAIL;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.default, {
      className: N.backgroundArtwork,
      preserveAspectRatio: "xMinYMin slice"
    }), (0, a.jsx)("div", {
      className: N.container,
      children: (0, a.jsx)(p.default, {
        children: t ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(p.Title, {
            children: x.default.Messages.APP_OPENING
          }), (0, a.jsx)(p.AuthSpinner, {})]
        }) : (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(p.Title, {
            className: N.appOpenedTitle,
            children: x.default.Messages.APP_OPENED_TITLE
          }), (0, a.jsx)(p.SubTitle, {
            children: x.default.Messages.DEEPLINK_BROWSER_APP_OPENED
          })]
        })
      })
    })]
  })
}