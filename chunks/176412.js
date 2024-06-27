t.d(n, {
  B: function() {
    return _
  },
  P: function() {
    return N
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
  h = t(689938);

function N(e, n, t, i) {
  var l;
  let N = (0, r.O)(),
    _ = (0, s.Qv)({
      applicationId: n.id,
      channelId: e.id
    }),
    E = (0, s.w1)({
      applicationId: n.id,
      embeddedActivitiesManager: o.Z,
      channelId: e.id,
      guildId: null !== (l = e.getGuildId()) && void 0 !== l ? l : void 0,
      locationObject: N.location,
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
    C = a.ButtonColors.BRAND,
    A = h.Z.Messages.LAUNCH;
  return _ === s.JS.JOIN ? (C = a.ButtonColors.GREEN, A = h.Z.Messages.JOIN_ACTIVITY) : _ === s.JS.LEAVE && (C = a.ButtonColors.RED, A = h.Z.Messages.LEAVE), {
    onActivityItemSelected: E,
    activityAction: _,
    buttonColor: C,
    buttonText: A
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