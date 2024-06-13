"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  s = n("2052"),
  a = n("542094"),
  o = n("513202"),
  l = n("367907"),
  u = n("895924"),
  d = n("499254"),
  _ = n("981631"),
  c = n("689938");

function E(e) {
  var t;
  let {
    channel: n,
    application: E,
    sectionName: I,
    disabled: T
  } = e, f = (0, s.useAnalyticsContext)(), S = (0, a.useActivityAction)({
    applicationId: E.id,
    channelId: n.id
  }), h = (0, a.useOnActivityItemSelected)({
    applicationId: E.id,
    embeddedActivitiesManager: o.default,
    channelId: n.id,
    guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
    locationObject: f.location,
    onActivityItemSelectedProp: e => {
      let {
        applicationId: t
      } = e;
      d.dismissAppLauncher(), (0, l.trackWithMetadata)(_.AnalyticEvents.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
        location: u.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW,
        application_id: t,
        section_name: I,
        action: S
      })
    }
  }), A = r.ButtonColors.BRAND, m = c.default.Messages.LAUNCH;
  return S === a.ActivityAction.JOIN ? (A = r.ButtonColors.GREEN, m = c.default.Messages.JOIN_ACTIVITY) : S === a.ActivityAction.LEAVE && (A = r.ButtonColors.RED, m = c.default.Messages.LEAVE), (0, i.jsx)(r.Button, {
    type: "submit",
    size: r.ButtonSizes.MEDIUM,
    color: A,
    disabled: T,
    onClick: h,
    children: m
  })
}