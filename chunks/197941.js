"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("846027"),
  i = a("872810"),
  r = a("594190"),
  o = a("989941"),
  u = a("173507"),
  d = a("199902"),
  c = a("131951"),
  f = a("449224"),
  E = a("358085"),
  h = a("452426"),
  _ = a("736045"),
  C = a("186901"),
  m = a("981631");
t.default = {
  [m.RPCCommands.TOGGLE_VIDEO]: {
    scope: {
      [C.RPC_SCOPE_CONFIG.ALL]: [m.OAuth2Scopes.RPC, m.OAuth2Scopes.RPC_VIDEO_WRITE]
    },
    handler() {
      let e = c.default.isVideoEnabled();
      null != (0, _.default)() && (e ? l.default.setVideoEnabled(!1) : (0, u.default)(() => l.default.setVideoEnabled(!0), m.AppContext.APP))
    }
  },
  [m.RPCCommands.TOGGLE_SCREENSHARE]: {
    scope: {
      [C.RPC_SCOPE_CONFIG.ALL]: [m.OAuth2Scopes.RPC, m.OAuth2Scopes.RPC_SCREENSHARE_WRITE]
    },
    validation: e => (0, h.default)(e).optional().keys({
      pid: e.number().optional().min(0)
    }),
    handler(e) {
      let {
        args: {
          pid: t
        }
      } = e, l = d.default.getCurrentUserActiveStream(), u = d.default.getStreamerActiveStreamMetadata(), c = (0, o.default)(r.default, f.default), h = (0, _.default)();
      null != h && (null != t && null != u && u.pid !== t && (0, E.isWindows)() ? (0, i.startStream)(h.guild_id, h.id, {
        pid: t
      }) : null != l ? (0, i.stopOwnStream)(!1) : null != t && (0, E.isWindows)() ? (0, i.startStream)(h.guild_id, h.id, {
        pid: t
      }) : null != c ? (0, i.startStream)(h.guild_id, h.id, {
        pid: c.pid
      }) : (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("49237"), a.e("99387"), a.e("79477")]).then(a.bind(a, "60594"));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: h.guild_id,
          analyticsLocation: m.AnalyticsLocations.ACTIVITY_RPC
        })
      }))
    }
  }
}