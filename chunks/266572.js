n(47120);
var s = n(735250);
n(470079);
var i = n(544891),
  l = n(846519),
  a = n(481060),
  r = n(496929),
  o = n(115130),
  c = n(812206),
  u = n(594174),
  d = n(580130),
  E = n(695103),
  h = n(70956),
  _ = n(998502),
  I = n(996106),
  m = n(186901),
  T = n(981631);
let g = 10 * h.Z.Millis.SECOND;
t.Z = {
  [T.Etm.VALIDATE_APPLICATION]: {
    scope: m.lH,
    handler(e) {
      let {
        socket: t
      } = e, i = t.application.id;
      try {
        if (null == i) throw new I.Z({
          errorCode: T.lTL.INVALID_COMMAND
        }, "No application.");
        let e = c.Z.getApplication(i);
        if (null == e) throw new I.Z({
          errorCode: T.lTL.INVALID_ENTITLEMENT
        }, "SKU does not exist.");
        let t = e.primarySkuId;
        if (null == t) throw new I.Z({
          errorCode: T.lTL.INVALID_ENTITLEMENT
        }, "SKU does not exist.");
        return Promise.race([(function(e, t) {
          let n = d.Z.isEntitledToSku(u.default.getCurrentUser(), e, t);
          return null != n ? Promise.resolve(n) : (0, r.yD)(t).then(() => !0 === d.Z.isEntitledToSku(u.default.getCurrentUser(), e, t))
        })(t, e.id).then(e => {
          if (!e) throw new I.Z({
            errorCode: T.lTL.INVALID_ENTITLEMENT
          }, "User does not have entitlement.")
        }), (0, l.GR)(g).then(() => {
          throw new I.Z({
            errorCode: T.lTL.INVALID_ENTITLEMENT
          }, "Timed out fetching entitlement.")
        })])
      } catch (e) {
        throw e.code === T.lTL.INVALID_ENTITLEMENT && (_.ZP.focus(null, !0), (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("48748")]).then(n.bind(n, 52004));
          return t => (0, s.jsx)(e, {
            ...t,
            applicationId: i
          })
        })), e
      }
    }
  },
  [T.Etm.GET_ENTITLEMENT_TICKET]: {
    scope: m.lH,
    handler(e) {
      let {
        socket: t
      } = e, l = t.application.id;
      if (null == l) throw new I.Z({
        errorCode: T.lTL.INVALID_COMMAND
      }, "No application.");
      return i.tn.post({
        url: T.ANM.ENTITLEMENT_TICKET(l),
        body: {
          test_mode: E.Z.inTestModeForApplication(l) || o.Z.inDevModeForApplication(l)
        },
        retries: 3,
        oldFormErrors: !0
      }).then(e => {
        let {
          body: t
        } = e;
        return t
      }).catch(e => {
        throw _.ZP.focus(null, !0), (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("48748")]).then(n.bind(n, 52004));
          return t => (0, s.jsx)(e, {
            ...t,
            applicationId: l
          })
        }), e
      })
    }
  }
}