"use strict";
n.d(t, {
  Z: function() {
    return E
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(2052),
  o = n(542094),
  a = n(513202),
  l = n(367907),
  u = n(895924),
  _ = n(499254),
  d = n(981631),
  c = n(689938);

function E(e) {
  var t;
  let {
    channel: n,
    application: E,
    sectionName: I,
    disabled: T
  } = e, h = (0, s.O)(), S = (0, o.Qv)({
    applicationId: E.id,
    channelId: n.id
  }), f = (0, o.w1)({
    applicationId: E.id,
    embeddedActivitiesManager: a.Z,
    channelId: n.id,
    guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
    locationObject: h.location,
    onActivityItemSelectedProp: e => {
      let {
        applicationId: t
      } = e;
      _.y(), (0, l.yw)(d.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
        location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW,
        application_id: t,
        section_name: I,
        action: S
      })
    }
  }), N = r.ButtonColors.BRAND, A = c.Z.Messages.LAUNCH;
  return S === o.JS.JOIN ? (N = r.ButtonColors.GREEN, A = c.Z.Messages.JOIN_ACTIVITY) : S === o.JS.LEAVE && (N = r.ButtonColors.RED, A = c.Z.Messages.LEAVE), (0, i.jsx)(r.Button, {
    type: "submit",
    size: r.ButtonSizes.MEDIUM,
    color: N,
    disabled: T,
    onClick: f,
    children: A
  })
}