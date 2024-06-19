n.d(e, {
  Je: function() {
    return c
  },
  gs: function() {
    return s
  },
  mh: function() {
    return a
  },
  p9: function() {
    return d
  },
  uV: function() {
    return o
  }
});
var r = n(544891),
  u = n(881052),
  i = n(73346),
  l = n(981631);
let c = async (t, e, n) => {
  let {
    priceTier: i,
    imageName: c,
    createNewRole: a,
    unlinkRole: o,
    ...d
  } = n;
  try {
    return (await r.tn.patch({
      url: l.ANM.GUILD_PRODUCT_LISTINGS(t, e),
      body: {
        ...d,
        image_name: c,
        price_tier: i,
        create_new_role: a,
        unlink_role: o
      }
    })).body
  } catch (t) {
    throw new u.Hx(t)
  }
}, a = async (t, e) => {
  try {
    await r.tn.del({
      url: l.ANM.GUILD_PRODUCT_LISTINGS(t, e)
    })
  } catch (t) {
    throw new u.Hx(t)
  }
}, o = async t => {
  try {
    return (await (0, i.Kb)({
      url: l.ANM.GUILD_PRODUCT_LISTINGS(t)
    })).body.listings
  } catch (t) {
    throw new u.Hx(t)
  }
}, d = async (t, e) => {
  try {
    return (await (0, i.Kb)({
      url: l.ANM.GUILD_PRODUCT_LISTINGS(t, e)
    })).body
  } catch (t) {
    throw new u.Hx(t)
  }
}, s = async t => {
  let {
    guildId: e,
    productId: n,
    attachmentId: i
  } = t;
  try {
    return (await r.tn.post({
      url: l.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, n, i)
    })).body
  } catch (t) {
    throw new u.Hx(t)
  }
}