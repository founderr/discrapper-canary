"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("77078"),
  r = n("614175"),
  u = n("181114"),
  o = n("82636"),
  d = n("981913"),
  c = n("782340"),
  f = n("727433");

function h(e) {
  let t, {
      isActivityActive: n,
      ...a
    } = e,
    {
      enabled: h
    } = r.ActivitiesGameNightExperiment.useExperiment({
      location: "9ab33d_1"
    }, {
      autoTrackExposure: !1
    });
  return h ? (0, l.jsxs)(u.default, {
    disabled: a.disabled,
    onClick: a.onClick,
    onMouseEnter: a.onMouseEnter,
    onMouseLeave: a.onMouseLeave,
    look: i.Button.Looks.BLANK,
    size: i.Button.Sizes.XLARGE,
    className: s(f.gameNightButton, {
      [f.gameNightActivityIsActive]: n && !a.disabled
    }),
    innerClassName: f.gameNightButtonInner,
    children: [(0, l.jsx)(o.default, {
      className: f.gameNightRocket
    }), c.default.Messages.EMBEDDED_ACTIVITIES_GAME_NIGHT]
  }) : (0, l.jsx)(d.CenterControlButton, {
    isActive: n,
    color: t,
    iconComponent: o.default,
    ...a
  })
}