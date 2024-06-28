"use strict";
n.d(t, {
  B: function() {
    return h
  },
  P: function() {
    return T
  }
});
var i = n(470079),
  r = n(392711),
  s = n(481060),
  o = n(2052),
  a = n(542094),
  l = n(513202),
  u = n(367907),
  _ = n(499254),
  c = n(541099),
  d = n(827498),
  E = n(981631),
  I = n(689938);

function T(e, t, n, i) {
  var r;
  let T = (0, o.O)(),
    h = (0, a.Qv)({
      applicationId: t.id,
      channelId: e.id
    }),
    f = (0, a.w1)({
      applicationId: t.id,
      embeddedActivitiesManager: l.Z,
      channelId: e.id,
      guildId: null !== (r = e.getGuildId()) && void 0 !== r ? r : void 0,
      locationObject: T.location,
      onActivityItemSelectedProp: e => {
        let {
          applicationId: t
        } = e, r = c.Z.entrypoint();
        _.y(d.ti.ACTIVITY), (0, u.yw)(E.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
          location: n,
          application_id: t,
          section_name: i,
          action: h,
          source: r
        })
      }
    }),
    S = s.ButtonColors.BRAND,
    A = I.Z.Messages.LAUNCH;
  return h === a.JS.JOIN ? (S = s.ButtonColors.GREEN, A = I.Z.Messages.JOIN_ACTIVITY) : h === a.JS.LEAVE && (S = s.ButtonColors.RED, A = I.Z.Messages.LEAVE), {
    onActivityItemSelected: f,
    activityAction: h,
    buttonColor: S,
    buttonText: A
  }
}

function h(e, t) {
  let n = c.Z.entrypoint(),
    s = i.useMemo(() => (0, r.debounce)((e, t) => {
      (0, u.yw)(E.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
        type: e,
        source: t
      })
    }, 400, {
      leading: !1,
      trailing: !0
    }), []);
  i.useEffect(() => {
    null != e && s(e, n)
  }, [e, t, n, s])
}