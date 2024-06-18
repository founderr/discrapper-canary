"use strict";
n.d(t, {
  Z: function() {
    return O
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(570140),
  l = n(605236),
  u = n(837741),
  _ = n(804545),
  c = n(587446),
  d = n(996073),
  E = n(153124),
  I = n(327943),
  T = n(997945),
  h = n(401460),
  S = n(441319),
  f = n(921944),
  N = n(526761),
  A = n(689938),
  m = n(776327);

function O(e) {
  let {
    className: t,
    disabled: n,
    renderCTAButtons: O
  } = e, [R, p] = (0, s.Wu)([I.Z], () => [I.Z.getCurrentDesktopIcon(), I.Z.isEditorOpen]), g = r.useRef(null);
  (0, d.Z)(g, N.h1.CUSTOM_APP_ICONS);
  let C = (0, E.Dt)(),
    v = (0, o.useRadioGroup)({
      orientation: "horizontal",
      labelledBy: C
    }),
    L = e => {
      a.Z.dispatch({
        type: "APP_ICON_UPDATED",
        id: e
      });
      let t = T.Mw.get(e);
      null != t && (0, l.EW)(t, {
        dismissAction: f.L.TAKE_ACTION
      })
    },
    D = "AppIconSelectionGroup",
    {
      enabled: M
    } = (0, u.J)({
      location: D
    }),
    {
      enabled: P
    } = (0, _._)({
      location: D
    }),
    y = (e, t) => {
      let n = !1;
      switch (t) {
        case T.Ru.BLURPLE_TWILIGHT:
          n = M;
          break;
        case T.Ru.IN_RAINBOWS:
        case T.Ru.MIDNIGHT_PRISM:
        case T.Ru.COLOR_WAVE:
          n = P;
          break;
        default:
          n = !0
      }
      return n && !0 !== e
    },
    U = r.useMemo(() => e => {
      let t = T.Mw.get(e),
        i = null != t && !(0, l.un)(t);
      return n && i && setTimeout(() => (0, l.EW)(t, {
        dismissAction: f.L.AUTO_DISMISS
      }), 5e3), i
    }, [n]);
  return (0, i.jsx)("div", {
    ref: g,
    children: (0, i.jsx)("div", {
      ...v,
      className: m.__invalid_container,
      children: (0, i.jsxs)("div", {
        className: t,
        children: [(0, i.jsxs)("div", {
          className: m.header,
          children: [(0, i.jsxs)("div", {
            className: m.headings,
            children: [p ? null : (0, i.jsxs)("div", {
              className: m.title,
              children: [(0, i.jsx)(o.Heading, {
                variant: "text-md/medium",
                children: A.Z.Messages.APP_ICON_SETTINGS_TITLE
              }), (0, i.jsx)(c.Z, {
                className: m.premiumIcon
              })]
            }), (0, i.jsx)(o.Heading, {
              variant: "text-sm/normal",
              children: A.Z.Messages.APP_ICON_SETTINGS_DESCRIPTION
            })]
          }), null == O ? void 0 : O()]
        }), (0, i.jsx)("div", {
          className: m.presets,
          children: S.UZ.filter(e => {
            let {
              isHidden: t,
              id: n
            } = e;
            return y(t, n)
          }).map((e, t) => (0, i.jsx)(h.Z, {
            icon: e,
            isSelected: R === e.id,
            onSelect: e => L(e),
            disabled: n,
            tabIndex: 0 !== t || n ? void 0 : 0,
            isNew: U(e.id)
          }, e.id))
        })]
      })
    })
  })
}