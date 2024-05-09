"use strict";
t.r(L), t.d(L, {
  BirthdayKitBash: function() {
    return Z
  }
}), t("47120");
var a = t("735250"),
  C = t("470079"),
  s = t("120356"),
  i = t.n(s),
  l = t("442837"),
  n = t("481060"),
  r = t("607070"),
  H = t("100527"),
  d = t("906732"),
  V = t("626135"),
  c = t("127255"),
  o = t("239298"),
  M = t("981631"),
  u = t("689938"),
  E = t("744389"),
  I = t("118805"),
  _ = t("923666");

function Z() {
  var e;
  let L = (0, l.useStateFromStores)([r.default], () => r.default.useReducedMotion),
    [t] = C.useState(Math.random()),
    s = (0, c.default)({
      guildId: null,
      channel: void 0
    }),
    {
      analyticsLocations: Z
    } = (0, d.default)(H.default.ACTIVITIES_IM_FEELING_LUCKY),
    T = Math.floor(t * s.length),
    f = null === (e = s[T]) || void 0 === e ? void 0 : e.application.id,
    h = null != f && "" !== f ? M.Routes.ACTIVITY_DETAILS(f) : void 0;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("img", {
      src: I,
      alt: u.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_KIT_BASH_ALT,
      className: E.kitBash
    }), void 0 !== h ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(o.ClickableLink, {
        className: E.luckyButton,
        to: {
          pathname: h,
          state: {
            analyticsLocations: Z
          }
        },
        onClick: () => V.default.track(M.AnalyticEvents.ACTIVITIES_PAGE_FEELING_LUCKY_CLICKED, {
          application_id: f
        }),
        children: [(0, a.jsx)(n.Heading, {
          variant: "heading-lg/bold",
          children: u.default.Messages.EMBEDDED_ACTIVITIES_FEELING_LUCKY_TITLE
        }), (0, a.jsx)(n.Heading, {
          variant: "heading-sm/bold",
          children: u.default.Messages.EMBEDDED_ACTIVITIES_FEELING_LUCKY_DESCRIPTION
        })]
      }), (0, a.jsx)("img", {
        src: _,
        className: i()(E.wumpus, {
          [E.wumpusReducedMotion]: L
        }),
        alt: u.default.Messages.EMBEDDED_ACTIVITIES_WUMPUS_PEEKING_ALT
      })]
    }) : null]
  })
}