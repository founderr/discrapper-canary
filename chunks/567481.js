n(47120);
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(570140),
  a = n(988298),
  r = n(447543),
  o = n(13245),
  c = n(596223),
  u = n(293273),
  d = n(885110),
  E = n(996106),
  h = n(914946),
  _ = n(452426),
  I = n(852926),
  m = n(186901),
  T = n(981631);
t.Z = {
  [T.Etm.SET_OVERLAY_LOCKED]: {
    scope: m.lH,
    validation: e => (0, _.Z)(e).required().keys({
      locked: e.boolean().required(),
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        args: {
          locked: t,
          pid: n
        },
        socket: {
          application: s
        }
      } = e;
      if (null == s.id) throw new E.Z({
        errorCode: T.lTL.INVALID_COMMAND
      }, "No application.");
      o.Z.setLocked(t, n)
    }
  },
  [T.Etm.OPEN_OVERLAY_ACTIVITY_INVITE]: {
    scope: m.lH,
    validation: e => (0, _.Z)(e).required().keys({
      type: e.number().required().valid([T.mFx.JOIN]),
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: n,
          pid: s
        }
      } = e, i = t.application.id;
      if (null == i) throw new E.Z({
        errorCode: T.lTL.INVALID_COMMAND
      }, "No application.");
      let l = u.Z.getApplicationActivity(i);
      if (null == l || null == l.secrets || !(0, h.t9)(n, l.party, l.secrets)) throw new E.Z({
        errorCode: T.lTL.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
      let {
        lock: r
      } = (0, I.s0)(s), o = (0, c.Z)(l, d.Z);
      return (0, a.h7)(l, o).then(() => {
        if (r(), o) throw new E.Z({
          errorCode: T.lTL.NO_ELIGIBLE_ACTIVITY
        }, "No eligible activity for application. Ensure user does have have privacy enabled.")
      })
    }
  },
  [T.Etm.OPEN_OVERLAY_GUILD_INVITE]: {
    scope: m.lH,
    validation: e => (0, _.Z)(e).required().keys({
      code: e.string().required(),
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        args: {
          code: t,
          pid: n
        },
        socket: s
      } = e;
      if (null == s.application.id) throw new E.Z({
        errorCode: T.lTL.INVALID_COMMAND
      }, "No application.");
      return r.Z.resolveInvite(t, "Game SDK").then(e => {
        let {
          invite: t,
          code: s
        } = e;
        if (null == t) throw new E.Z({
          errorCode: T.lTL.INVALID_INVITE
        }, "Invalid invite id: ".concat(s));
        let {
          context: i,
          lock: a
        } = (0, I.s0)(n);
        return new Promise(e => {
          l.Z.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: t,
            code: s,
            context: i,
            resolve: e
          })
        }).then(a)
      })
    }
  },
  [T.Etm.OPEN_OVERLAY_VOICE_SETTINGS]: {
    scope: m.lH,
    validation: e => (0, _.Z)(e).required().keys({
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        args: {
          pid: t
        },
        socket: l
      } = e, a = l.application.id;
      if (null == a) throw new E.Z({
        errorCode: T.lTL.INVALID_COMMAND
      }, "No application.");
      let {
        lock: r
      } = (0, I.s0)(t);
      return new Promise(e => {
        (0, i.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("84518")]).then(n.bind(n, 344516));
          return n => (0, s.jsx)(t, {
            ...n,
            mediaEngineContext: a,
            title: l.application.name,
            onClose: () => {
              n.onClose(), r(), e()
            }
          })
        })
      })
    }
  }
}