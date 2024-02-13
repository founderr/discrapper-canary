"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("629109"),
  i = n("990766"),
  r = n("375202"),
  o = n("727284"),
  u = n("373469"),
  d = n("42887"),
  c = n("568307"),
  f = n("703370"),
  E = n("773336"),
  h = n("716724"),
  _ = n("880553"),
  C = n("492249"),
  I = n("49111"),
  S = {
    [I.RPCCommands.TOGGLE_VIDEO]: {
      scope: {
        [C.RPC_SCOPE_CONFIG.ALL]: [I.OAuth2Scopes.RPC, I.OAuth2Scopes.RPC_VIDEO_WRITE]
      },
      handler() {
        let e = d.default.isVideoEnabled(),
          t = (0, _.default)();
        null != t && (e ? l.default.setVideoEnabled(!1) : (0, o.default)(() => l.default.setVideoEnabled(!0), I.AppContext.APP))
      }
    },
    [I.RPCCommands.TOGGLE_SCREENSHARE]: {
      scope: {
        [C.RPC_SCOPE_CONFIG.ALL]: [I.OAuth2Scopes.RPC, I.OAuth2Scopes.RPC_SCREENSHARE_WRITE]
      },
      validation: e => (0, h.default)(e).optional().keys({
        pid: e.number().optional().min(0)
      }),
      handler(e) {
        let {
          args: {
            pid: t
          }
        } = e, l = u.default.getCurrentUserActiveStream(), o = u.default.getStreamerActiveStreamMetadata(), d = (0, r.default)(c.default, f.default), h = (0, _.default)();
        null != h && (null != t && null != o && o.pid !== t && (0, E.isWindows)() ? (0, i.startStream)(h.guild_id, h.id, {
          pid: t
        }) : null != l ? (0, i.stopOwnStream)(!1) : null != t && (0, E.isWindows)() ? (0, i.startStream)(h.guild_id, h.id, {
          pid: t
        }) : null != d ? (0, i.startStream)(h.guild_id, h.id, {
          pid: d.pid
        }) : (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("451863").then(n.bind(n, "451863"));
          return t => (0, a.jsx)(e, {
            ...t,
            guildId: h.guild_id,
            analyticsLocation: I.AnalyticsLocations.ACTIVITY_RPC
          })
        }))
      }
    }
  }