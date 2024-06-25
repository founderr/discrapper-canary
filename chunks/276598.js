n.d(t, {
  Z: function() {
    return S
  }
}), n(47120), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(704215),
  r = n(481060),
  o = n(358221),
  c = n(243778),
  u = n(390322),
  d = n(871499),
  h = n(819640),
  m = n(797258),
  E = n(446226),
  p = n(937393),
  g = n(43982),
  f = n(721351),
  C = n(420529),
  _ = n(927923),
  I = n(981631),
  x = n(921944),
  T = n(689938),
  N = n(40275);

function Z(e) {
  let {
    onClose: t,
    channel: n
  } = e, i = (0, C.Z)(n);
  return (0, l.jsx)(r.Menu, {
    onClose: t,
    onSelect: () => null,
    navId: "transfer-menu",
    "aria-label": T.Z.Messages.TRANSFER,
    children: i
  })
}

function S(e) {
  let {
    channel: t,
    showLeftDivider: n = !1,
    ...C
  } = e, S = (0, E.Z)(), v = (0, s.e7)([m.Z], () => {
    var e, t;
    return null === (e = m.Z.getSessionById(null !== (t = null == S ? void 0 : S.sessionId) && void 0 !== t ? t : "")) || void 0 === e ? void 0 : e.clientInfo.os
  }), A = (0, s.e7)([h.Z], () => h.Z.hasLayers()), [M, R] = (0, s.Wu)([o.Z], () => [o.Z.getMode(t.id), o.Z.getLayout(t.id)]), j = (0, r.useModalsStore)(r.hasAnyModalOpenSelector), L = (0, p.Z)(), O = L.filter(e => e.twoWayLink), [P, y] = i.useState(!1);
  if (null == S && 0 === L.length || t.isBroadcastChannel()) return null;
  let b = I.WtW.VOICE !== M && [I.AEg.NO_CHAT, I.AEg.FULL_SCREEN].includes(R) ? "top" : "bottom",
    D = [];
  return O.length > 0 && D.push(a.z.DONUT_DESKTOP_NUX), (0, l.jsx)(c.Z, {
    contentTypes: D,
    children: e => {
      let {
        visibleContent: i,
        markAsDismissed: s
      } = e, o = i === a.z.DONUT_DESKTOP_NUX;
      return (0, l.jsxs)(l.Fragment, {
        children: [n ? (0, l.jsx)("div", {
          className: N.leftDivider
        }) : null, (0, l.jsx)(r.Popout, {
          position: b,
          spacing: o ? 16 : void 0,
          positionKey: "".concat(M, ":").concat(R),
          onRequestClose: () => y(!1),
          shouldShow: (o || P) && !A && !j,
          renderPopout: e => {
            let {
              closePopout: n
            } = e;
            return (0, l.jsx)(u.Z, {
              children: o ? (0, l.jsx)(g.Z, {
                popoutPosition: b,
                onDismiss: () => s(x.L.UNKNOWN),
                onAccept: () => {
                  s(x.L.UNKNOWN), y(!0)
                },
                gameConsoleAccounts: O
              }) : (0, l.jsx)(Z, {
                onClose: () => {
                  n()
                },
                channel: t
              })
            })
          },
          children: e => {
            var t;
            return (0, l.jsx)(d.Z, {
              ...e,
              ...C,
              onClick: () => y(!0),
              label: null != (t = v) ? t === _.YE.XBOX ? T.Z.Messages.XBOX_REMOTE_CONNECTED_RAW : T.Z.Messages.PLAYSTATION_REMOTE_CONNECTED_RAW : T.Z.Messages.CONSOLE_TRANSFER,
              iconComponent: (0, f.Z)(v)
            })
          }
        })]
      })
    }
  })
}