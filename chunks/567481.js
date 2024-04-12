"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("570140"),
  i = a("24124"),
  r = a("447543"),
  o = a("13245"),
  u = a("596223"),
  d = a("293273"),
  c = a("885110"),
  f = a("996106"),
  E = a("914946"),
  h = a("452426"),
  _ = a("852926"),
  C = a("186901"),
  m = a("981631");
t.default = {
  [m.RPCCommands.SET_OVERLAY_LOCKED]: {
    scope: C.RPC_LOCAL_SCOPE,
    validation: e => (0, h.default)(e).required().keys({
      locked: e.boolean().required(),
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        args: {
          locked: t,
          pid: a
        },
        socket: {
          application: n
        }
      } = e;
      if (null == n.id) throw new f.default({
        errorCode: m.RPCErrors.INVALID_COMMAND
      }, "No application.");
      o.default.setLocked(t, a)
    }
  },
  [m.RPCCommands.OPEN_OVERLAY_ACTIVITY_INVITE]: {
    scope: C.RPC_LOCAL_SCOPE,
    validation: e => (0, h.default)(e).required().keys({
      type: e.number().required().valid([m.ActivityActionTypes.JOIN]),
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: a,
          pid: n
        }
      } = e, s = t.application.id;
      if (null == s) throw new f.default({
        errorCode: m.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let l = d.default.getApplicationActivity(s);
      if (null == l || null == l.secrets || !(0, E.validateActivityInvite)(a, l.party, l.secrets)) throw new f.default({
        errorCode: m.RPCErrors.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
      let {
        lock: r
      } = (0, _.unlockOverlay)(n), o = (0, u.default)(l, c.default);
      return (0, i.openModal)(l, o).then(() => {
        if (r(), o) throw new f.default({
          errorCode: m.RPCErrors.NO_ELIGIBLE_ACTIVITY
        }, "No eligible activity for application. Ensure user does have have privacy enabled.")
      })
    }
  },
  [m.RPCCommands.OPEN_OVERLAY_GUILD_INVITE]: {
    scope: C.RPC_LOCAL_SCOPE,
    validation: e => (0, h.default)(e).required().keys({
      code: e.string().required(),
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        args: {
          code: t,
          pid: a
        },
        socket: n
      } = e;
      if (null == n.application.id) throw new f.default({
        errorCode: m.RPCErrors.INVALID_COMMAND
      }, "No application.");
      return r.default.resolveInvite(t, "Game SDK").then(e => {
        let {
          invite: t,
          code: n
        } = e;
        if (null == t) throw new f.default({
          errorCode: m.RPCErrors.INVALID_INVITE
        }, "Invalid invite id: ".concat(n));
        let {
          context: s,
          lock: i
        } = (0, _.unlockOverlay)(a);
        return new Promise(e => {
          l.default.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: t,
            code: n,
            context: s,
            resolve: e
          })
        }).then(i)
      })
    }
  },
  [m.RPCCommands.OPEN_OVERLAY_VOICE_SETTINGS]: {
    scope: C.RPC_LOCAL_SCOPE,
    validation: e => (0, h.default)(e).required().keys({
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        args: {
          pid: t
        },
        socket: l
      } = e, i = l.application.id;
      if (null == i) throw new f.default({
        errorCode: m.RPCErrors.INVALID_COMMAND
      }, "No application.");
      let {
        lock: r
      } = (0, _.unlockOverlay)(t);
      return new Promise(e => {
        (0, s.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([a.e("49237"), a.e("99387"), a.e("84518")]).then(a.bind(a, "344516"));
          return a => (0, n.jsx)(t, {
            ...a,
            mediaEngineContext: i,
            title: l.application.name,
            onClose: () => {
              a.onClose(), r(), e()
            }
          })
        })
      })
    }
  }
}