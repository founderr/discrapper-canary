n(411104), n(47120);
var s = n(72924),
  i = n(100527),
  l = n(367207),
  a = n(996106),
  r = n(452426),
  o = n(561205),
  c = n(334288),
  u = n(852926),
  d = n(186901),
  E = n(981631),
  h = n(474936);
let _ = [i.Z.RPC];

function I(e) {
  if (null == e) return {
    lock: E.VqG,
    context: E.IlC.APP
  };
  let t = (0, u.s0)(e);
  return {
    lock: t.lock,
    context: t.context
  }
}

function m(e, t) {
  let n = {
    subscriptionTier: h.Si.TIER_2,
    analyticsLocations: _,
    analyticsObject: t
  };
  switch (e) {
    case E.IlC.APP:
      return l.Z.openPremiumPaymentModalInApp(n);
    case E.IlC.OVERLAY:
      return l.Z.openPremiumPaymentModalInOverlay(n);
    default:
      throw Error("Unexpected app context: ".concat(e))
  }
}
t.Z = {
  [E.Etm.START_PURCHASE]: {
    [d.Gp.ANY]: [d.wE, d.lH],
    validation: e => (0, r.Z)(e).required().keys({
      sku_id: e.string().required(),
      pid: e.number().min(0)
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          sku_id: n,
          pid: i
        }
      } = e;
      (0, c.f)(t.transport);
      let l = t.application.id;
      if (null == l) throw new a.Z({
        errorCode: E.lTL.INVALID_COMMAND
      }, "No application.");
      let {
        lock: r,
        context: u
      } = I(t.transport !== d.He.POST_MESSAGE ? i : null);
      if (null == (0, o.Z)()) throw new a.Z({
        errorCode: E.lTL.INVALID_CHANNEL
      }, "Invalid channel");
      let h = {
        page: E.ZY5.IN_APP
      };
      return (async () => {
        try {
          let e = await (0, s.S)({
            applicationId: l,
            skuId: n,
            openPremiumPaymentModal: () => m(u, h),
            analyticsLocations: _,
            analyticsLocationObject: h,
            context: u
          });
          return r(), e
        } catch (e) {
          if (r(), null != e) {
            let t = "";
            throw t = "object" == typeof e && "message" in e && "string" == typeof e.message ? e.message : "string" == typeof e ? e : JSON.stringify(e), new a.Z({
              errorCode: E.lTL.PURCHASE_ERROR
            }, t)
          }
          throw new a.Z({
            errorCode: E.lTL.PURCHASE_CANCELED
          }, "Purchase was canceled by the user.")
        }
      })()
    }
  },
  [E.Etm.START_PREMIUM_PURCHASE]: {
    [d.Gp.ANY]: [d.wE, d.lH],
    validation: e => (0, r.Z)(e).keys({
      pid: e.number().min(0)
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          pid: n
        }
      } = e;
      if ((0, c.f)(t.transport), null == t.application.id) throw new a.Z({
        errorCode: E.lTL.INVALID_COMMAND
      }, "No application.");
      let {
        lock: s,
        context: i
      } = I(t.transport !== d.He.POST_MESSAGE ? n : null);
      return m(i, {
        page: E.ZY5.IN_APP
      }).then(() => {
        s()
      }, e => {
        if (s(), null != e) throw new a.Z({
          errorCode: E.lTL.PURCHASE_ERROR
        }, e);
        throw new a.Z({
          errorCode: E.lTL.PURCHASE_CANCELED
        }, "Purchase was canceled by the user.")
      })
    }
  }
}