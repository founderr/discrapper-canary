t.d(n, {
  B: function() {
    return _
  },
  P: function() {
    return h
  }
});
var i = t(470079),
  l = t(392711),
  a = t(481060),
  r = t(2052),
  s = t(542094),
  o = t(513202),
  c = t(367907),
  u = t(499254),
  d = t(541099),
  m = t(827498),
  p = t(981631),
  E = t(689938);

function h(e, n, t, i) {
  var l;
  let h = (0, r.O)(),
    _ = (0, s.Qv)({
      applicationId: n.id,
      channelId: e.id
    }),
    N = (0, s.w1)({
      applicationId: n.id,
      embeddedActivitiesManager: o.Z,
      channelId: e.id,
      guildId: null !== (l = e.getGuildId()) && void 0 !== l ? l : void 0,
      locationObject: h.location,
      onActivityItemSelectedProp: e => {
        let {
          applicationId: n
        } = e, l = d.Z.entrypoint();
        u.y(m.ti.ACTIVITY), (0, c.yw)(p.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
          location: t,
          application_id: n,
          section_name: i,
          action: _,
          source: l
        })
      }
    }),
    A = a.ButtonColors.BRAND,
    C = E.Z.Messages.LAUNCH;
  return _ === s.JS.JOIN ? (A = a.ButtonColors.GREEN, C = E.Z.Messages.JOIN_ACTIVITY) : _ === s.JS.LEAVE && (A = a.ButtonColors.RED, C = E.Z.Messages.LEAVE), {
    onActivityItemSelected: N,
    activityAction: _,
    buttonColor: A,
    buttonText: C
  }
}

function _(e, n) {
  let t = d.Z.entrypoint(),
    a = i.useMemo(() => (0, l.debounce)((e, n) => {
      (0, c.yw)(p.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
        type: e,
        source: n
      })
    }, 400, {
      leading: !1,
      trailing: !0
    }), []);
  i.useEffect(() => {
    null != e && a(e, t)
  }, [e, n, t, a])
}