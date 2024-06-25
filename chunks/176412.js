"use strict";
n.d(t, {
  P: function() {
    return d
  }
});
var i = n(481060),
  r = n(2052),
  s = n(542094),
  o = n(513202),
  a = n(367907),
  l = n(895924),
  u = n(499254),
  _ = n(981631),
  c = n(689938);

function d(e, t, n) {
  var d;
  let E = (0, r.O)(),
    I = (0, s.Qv)({
      applicationId: t.id,
      channelId: e.id
    }),
    T = (0, s.w1)({
      applicationId: t.id,
      embeddedActivitiesManager: o.Z,
      channelId: e.id,
      guildId: null !== (d = e.getGuildId()) && void 0 !== d ? d : void 0,
      locationObject: E.location,
      onActivityItemSelectedProp: e => {
        let {
          applicationId: t
        } = e;
        u.y(), (0, a.yw)(_.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
          location: l.Vh.APP_LAUNCHER_APPLICATION_VIEW,
          application_id: t,
          section_name: n,
          action: I
        })
      }
    }),
    h = i.ButtonColors.BRAND,
    f = c.Z.Messages.LAUNCH;
  return I === s.JS.JOIN ? (h = i.ButtonColors.GREEN, f = c.Z.Messages.JOIN_ACTIVITY) : I === s.JS.LEAVE && (h = i.ButtonColors.RED, f = c.Z.Messages.LEAVE), {
    onActivityItemSelected: T,
    activityAction: I,
    buttonColor: h,
    buttonText: f
  }
}