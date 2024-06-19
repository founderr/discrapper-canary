r.d(t, {
  IE: function() {
    return h
  },
  K9: function() {
    return _
  },
  NX: function() {
    return I
  },
  R_: function() {
    return m
  },
  e$: function() {
    return l
  },
  ti: function() {
    return g
  },
  zV: function() {
    return f
  }
}), r(757143), r(47120), r(627341);
var n = r(913527),
  s = r.n(n),
  i = r(278074),
  o = r(768581),
  a = r(709054),
  u = r(624138),
  c = r(219496),
  R = r(801461),
  L = r(689938);

function f(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return o.ZP.getUserAvatarURL({
    id: e.id,
    avatar: e.avatar,
    bot: e.bot,
    discriminator: "0000"
  }, t, 80)
}

function l(e) {
  let t = (0, u._I)(e.username).replace(R.RN, "").replace(R.iF, ".").toLowerCase();
  return "".concat(t).concat(e.discriminator).substring(0, 32)
}
let d = ["@", "#", ":"],
  E = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
  A = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

function I(e) {
  var t, r;
  let n = e.username.toLowerCase();
  if ((t = n, r = R.kt, t.split("").filter(e => !r.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
  for (let e of d)
    if (n.includes(e)) return !0;
  for (let e of A)
    if (n === e.toLowerCase()) return !0;
  for (let e of E)
    if (n.includes(e.toLowerCase())) return !0;
  return !1
}

function m(e) {
  return e.toLowerCase().replace(/\s/g, "").replace("@", "")
}

function _(e) {
  let t = a.default.extractTimestamp(e);
  try {
    return s()(new Date(t)).format("MMM DD, YYYY")
  } catch (e) {}
  return null
}

function g(e) {
  return (0, i.EQ)(e).with({
    rateLimited: !0
  }, () => ({
    type: c.K.RATE_LIMIT,
    message: L.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
  })).with({
    error: i.P.not(i.P.nullish)
  }, e => {
    let {
      error: t
    } = e;
    return {
      type: c.K.ERROR,
      message: t
    }
  }).with({
    taken: !1
  }, () => ({
    type: c.K.AVAILABLE,
    message: L.Z.Messages.POMELO_EXISTING_FLOW_AVAILABLE
  })).with({
    taken: !0
  }, () => ({
    type: c.K.ERROR,
    message: L.Z.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
  })).with({
    error: i.P.nullish
  }, () => ({
    type: c.K.INTERNAL_ERROR,
    message: ""
  })).otherwise(() => void 0)
}

function h(e) {
  return new Date(2024, 2, 4).toLocaleDateString(e, {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}