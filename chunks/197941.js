n(47120);
var i = n(735250);
n(470079);
var s = n(243814),
  l = n(481060),
  a = n(846027),
  r = n(872810),
  o = n(594190),
  c = n(989941),
  u = n(173507),
  d = n(199902),
  E = n(131951),
  h = n(449224),
  _ = n(358085),
  I = n(452426),
  m = n(736045),
  g = n(186901),
  p = n(981631);
t.Z = {
  [p.Etm.TOGGLE_VIDEO]: {
    scope: {
      [g.Gp.ALL]: [s.x.RPC, s.x.RPC_VIDEO_WRITE]
    },
    handler() {
      let e = E.Z.isVideoEnabled();
      if (null != (0, m.Z)()) e ? a.Z.setVideoEnabled(!1) : (0, u.Z)(() => a.Z.setVideoEnabled(!0), p.IlC.APP)
    }
  },
  [p.Etm.TOGGLE_SCREENSHARE]: {
    scope: {
      [g.Gp.ALL]: [s.x.RPC, s.x.RPC_SCREENSHARE_WRITE]
    },
    validation: e => (0, I.Z)(e).optional().keys({
      pid: e.number().optional().min(0)
    }),
    handler(e) {
      let {
        args: {
          pid: t
        }
      } = e, s = d.Z.getCurrentUserActiveStream(), a = d.Z.getStreamerActiveStreamMetadata(), u = (0, c.Z)(o.ZP, h.Z), E = (0, m.Z)();
      if (null != E) null != t && null != a && a.pid !== t && (0, _.isWindows)() ? (0, r.WH)(E.guild_id, E.id, {
        pid: t
      }) : null != s ? (0, r.L6)(!1) : null != t && (0, _.isWindows)() ? (0, r.WH)(E.guild_id, E.id, {
        pid: t
      }) : null != u ? (0, r.WH)(E.guild_id, E.id, {
        pid: u.pid
      }) : (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477")]).then(n.bind(n, 60594));
        return t => (0, i.jsx)(e, {
          ...t,
          guildId: E.guild_id,
          analyticsLocation: p.Sbl.ACTIVITY_RPC
        })
      })
    }
  }
}