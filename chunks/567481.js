n(47120);
var i = n(735250);
n(470079);
var s = n(481060),
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
  g = n(981631);
t.Z = {
  [g.Etm.SET_OVERLAY_LOCKED]: {
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
          application: i
        }
      } = e;
      if (null == i.id) throw new E.Z({
        errorCode: g.lTL.INVALID_COMMAND
      }, "No application.");
      o.Z.setLocked(t, n)
    }
  },
  [g.Etm.OPEN_OVERLAY_ACTIVITY_INVITE]: {
    scope: m.lH,
    validation: e => (0, _.Z)(e).required().keys({
      type: e.number().required().valid([g.mFx.JOIN]),
      pid: e.number().min(0).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: n,
          pid: i
        }
      } = e, s = t.application.id;
      if (null == s) throw new E.Z({
        errorCode: g.lTL.INVALID_COMMAND
      }, "No application.");
      let l = u.Z.getApplicationActivity(s);
      if (null == l || null == l.secrets || !(0, h.t9)(n, l.party, l.secrets)) throw new E.Z({
        errorCode: g.lTL.NO_ELIGIBLE_ACTIVITY
      }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
      let {
        lock: r
      } = (0, I.s0)(i), o = (0, c.Z)(l, d.Z);
      return (0, a.h7)(l, o).then(() => {
        if (r(), o) throw new E.Z({
          errorCode: g.lTL.NO_ELIGIBLE_ACTIVITY
        }, "No eligible activity for application. Ensure user does have have privacy enabled.")
      })
    }
  },
  [g.Etm.OPEN_OVERLAY_GUILD_INVITE]: {
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
        socket: i
      } = e;
      if (null == i.application.id) throw new E.Z({
        errorCode: g.lTL.INVALID_COMMAND
      }, "No application.");
      return r.Z.resolveInvite(t, "Game SDK").then(e => {
        let {
          invite: t,
          code: i
        } = e;
        if (null == t) throw new E.Z({
          errorCode: g.lTL.INVALID_INVITE
        }, "Invalid invite id: ".concat(i));
        let {
          context: s,
          lock: a
        } = (0, I.s0)(n);
        return new Promise(e => {
          l.Z.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: t,
            code: i,
            context: s,
            resolve: e
          })
        }).then(a)
      })
    }
  },
  [g.Etm.OPEN_OVERLAY_VOICE_SETTINGS]: {
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
        errorCode: g.lTL.INVALID_COMMAND
      }, "No application.");
      let {
        lock: r
      } = (0, I.s0)(t);
      return new Promise(e => {
        (0, s.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("84518")]).then(n.bind(n, 344516));
          return n => (0, i.jsx)(t, {
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