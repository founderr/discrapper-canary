C.d(e, {
  i: function() {
    return T
  }
}), C(47120);
var a = C(735250),
  s = C(470079),
  t = C(120356),
  i = C.n(t),
  n = C(442837),
  l = C(481060),
  r = C(607070),
  H = C(100527),
  V = C(906732),
  c = C(626135),
  o = C(127255),
  d = C(239298),
  M = C(981631),
  Z = C(689938),
  E = C(79950),
  I = C(118805),
  _ = C(923666);

function T() {
  var L;
  let e = (0, n.e7)([r.Z], () => r.Z.useReducedMotion),
    [C] = s.useState(Math.random()),
    t = (0, o.Z)({
      guildId: null,
      channel: void 0
    }),
    {
      analyticsLocations: T
    } = (0, V.ZP)(H.Z.ACTIVITIES_IM_FEELING_LUCKY),
    u = Math.floor(C * t.length),
    h = null === (L = t[u]) || void 0 === L ? void 0 : L.application.id,
    m = null != h && "" !== h ? M.Z5c.ACTIVITY_DETAILS(h) : void 0;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("img", {
      src: I,
      alt: Z.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_KIT_BASH_ALT,
      className: E.kitBash
    }), void 0 !== m ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(d.o, {
        className: E.luckyButton,
        to: {
          pathname: m,
          state: {
            analyticsLocations: T
          }
        },
        onClick: () => c.default.track(M.rMx.ACTIVITIES_PAGE_FEELING_LUCKY_CLICKED, {
          application_id: h
        }),
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-lg/bold",
          children: Z.Z.Messages.EMBEDDED_ACTIVITIES_FEELING_LUCKY_TITLE
        }), (0, a.jsx)(l.Heading, {
          variant: "heading-sm/bold",
          children: Z.Z.Messages.EMBEDDED_ACTIVITIES_FEELING_LUCKY_DESCRIPTION
        })]
      }), (0, a.jsx)("img", {
        src: _,
        className: i()(E.wumpus, {
          [E.wumpusReducedMotion]: e
        }),
        alt: Z.Z.Messages.EMBEDDED_ACTIVITIES_WUMPUS_PEEKING_ALT
      })]
    }) : null]
  })
}