"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007"), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("151426"),
  r = n("77078"),
  u = n("191145"),
  o = n("384997"),
  d = n("124824"),
  c = n("981913"),
  f = n("778588"),
  h = n("235660"),
  m = n("261552"),
  p = n("742898"),
  E = n("813893"),
  S = n("424024"),
  g = n("379304"),
  C = n("171644"),
  _ = n("49111"),
  I = n("994428"),
  T = n("782340"),
  v = n("819741");

function x(e) {
  let {
    onClose: t,
    channel: n
  } = e, a = (0, g.default)(n);
  return (0, l.jsx)(r.Menu, {
    onClose: t,
    onSelect: () => null,
    navId: "transfer-menu",
    "aria-label": T.default.Messages.TRANSFER,
    children: a
  })
}

function N(e) {
  let {
    channel: t,
    showLeftDivider: n = !1,
    ...g
  } = e, N = (0, m.default)(), A = (0, s.useStateFromStores)([h.default], () => {
    var e, t;
    return null === (e = h.default.getSessionById(null !== (t = null == N ? void 0 : N.sessionId) && void 0 !== t ? t : "")) || void 0 === e ? void 0 : e.clientInfo.os
  }), M = (0, s.useStateFromStores)([f.default], () => f.default.hasLayers()), [R, j] = (0, s.useStateFromStoresArray)([u.default], () => [u.default.getMode(t.id), u.default.getLayout(t.id)]), L = (0, r.useModalsStore)(r.hasAnyModalOpenSelector), y = (0, p.default)(), O = y.filter(e => e.twoWayLink), [P, b] = a.useState(!1);
  if (null == N && 0 === y.length || t.isBroadcastChannel()) return null;
  let D = _.ChannelModes.VOICE !== R && [_.ChannelLayouts.NO_CHAT, _.ChannelLayouts.FULL_SCREEN].includes(j) ? "top" : "bottom",
    U = [];
  return O.length > 0 && U.push(i.DismissibleContent.DONUT_DESKTOP_NUX), (0, l.jsx)(o.default, {
    contentTypes: U,
    children: e => {
      let {
        visibleContent: a,
        markAsDismissed: s
      } = e, u = a === i.DismissibleContent.DONUT_DESKTOP_NUX;
      return (0, l.jsxs)(l.Fragment, {
        children: [n ? (0, l.jsx)("div", {
          className: v.leftDivider
        }) : null, (0, l.jsx)(r.Popout, {
          position: D,
          spacing: u ? 16 : void 0,
          positionKey: "".concat(R, ":").concat(j),
          onRequestClose: () => b(!1),
          shouldShow: (u || P) && !M && !L,
          renderPopout: e => {
            let {
              closePopout: n
            } = e;
            return (0, l.jsx)(d.default, {
              children: u ? (0, l.jsx)(E.default, {
                popoutPosition: D,
                onDismiss: () => s(I.ContentDismissActionType.UNKNOWN),
                onAccept: () => {
                  s(I.ContentDismissActionType.UNKNOWN), b(!0)
                },
                gameConsoleAccounts: O
              }) : (0, l.jsx)(x, {
                onClose: () => {
                  n()
                },
                channel: t
              })
            })
          },
          children: e => {
            var t;
            return (0, l.jsx)(c.default, {
              ...e,
              ...g,
              onClick: () => b(!0),
              label: null != (t = A) ? t === C.GameConsoleTypes.XBOX ? T.default.Messages.XBOX_REMOTE_CONNECTED_RAW : T.default.Messages.PLAYSTATION_REMOTE_CONNECTED_RAW : T.default.Messages.CONSOLE_TRANSFER,
              iconComponent: (0, S.default)(A)
            })
          }
        })]
      })
    }
  })
}