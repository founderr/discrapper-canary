n(47120), n(653041);
var i = n(496929),
  s = n(16084),
  l = n(558381),
  a = n(115130),
  r = n(106976),
  o = n(695103),
  c = n(996106),
  u = n(334288),
  d = n(186901),
  E = n(981631);
async function h(e, t) {
  let n = t.filter(e => e.type === E.epS.SUBSCRIPTION_GROUP),
    i = await Promise.all(n.map(async t => await (0, r.rx)(e, t.id))),
    s = [];
  return i.forEach(e => {
    if (null == e) return null;
    let n = e.subscription_listings;
    if (null == n) return null;
    let i = [];
    n.forEach(e => {
      e.subscription_plans.forEach(n => {
        var s;
        let l = null == n ? void 0 : n.price,
          a = t.find(e => e.id === n.sku_id);
        if (null == a) return;
        let r = {
          id: n.sku_id,
          name: a.name,
          type: a.type,
          price: {
            amount: l,
            currency: E.pKx.USD
          },
          application_id: e.application_id,
          flags: e.sku_flags,
          release_date: null !== (s = a.release_date) && void 0 !== s ? s : null
        };
        i.push(r)
      })
    }), i.filter(e => (null == e ? void 0 : e.price) != null).forEach(e => s.push(e))
  }), s
}
async function _(e) {
  let {
    socket: t
  } = e;
  (0, u.f)(t.transport);
  let n = t.application.id;
  if (null == n) throw new c.Z({
    errorCode: E.lTL.INVALID_COMMAND
  }, "No application.");
  if (o.Z.inTestModeForApplication(n) || a.Z.inDevModeForApplication(n)) {
    let e = await s.uE(n, !1),
      t = await h(n, e);
    return [...e.filter(e => null != e.price), ...t]
  }
  let i = await l.oJ(n),
    r = i.filter(e => e.sku.type !== E.epS.SUBSCRIPTION_GROUP).map(e => e.sku).filter(e => null != e.price);
  return [...r, ...await h(n, i.map(e => e.sku))]
}

function I(e) {
  let {
    socket: t
  } = e;
  (0, u.f)(t.transport);
  let n = t.application.id;
  if (null == n) throw new c.Z({
    errorCode: E.lTL.INVALID_COMMAND
  }, "No application.");
  return i.yD(n)
}
t.Z = {
  [E.Etm.GET_SKUS]: {
    [d.Gp.ANY]: [d.wE, d.lH],
    handler: _
  },
  [E.Etm.GET_ENTITLEMENTS]: {
    [d.Gp.ANY]: [d.wE, d.lH],
    handler: I
  },
  [E.Etm.GET_SKUS_EMBEDDED]: {
    [d.Gp.ANY]: [d.wE, d.lH],
    handler: async e => ({
      skus: await _(e)
    })
  },
  [E.Etm.GET_ENTITLEMENTS_EMBEDDED]: {
    [d.Gp.ANY]: [d.wE, d.lH],
    handler: async e => ({
      entitlements: await I(e)
    })
  }
}