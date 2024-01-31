"use strict";
s.r(t), s.d(t, {
  getUserAvatarURLForPomelo: function() {
    return f
  },
  getDefaultPomelo: function() {
    return E
  },
  shouldSkipToEditUsername: function() {
    return _
  },
  formatPomeloForEditing: function() {
    return N
  },
  getMemberSince: function() {
    return S
  },
  formatUsernameLiveCheckValidation: function() {
    return P
  },
  getLocalizedForcedUUDate: function() {
    return R
  }
}), s("781738"), s("222007"), s("794252");
var a = s("866227"),
  n = s.n(a),
  i = s("506838"),
  r = s("315102"),
  l = s("299039"),
  u = s("159885"),
  o = s("644417"),
  d = s("935583"),
  c = s("782340");

function f(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return r.default.getUserAvatarURL({
    id: e.id,
    avatar: e.avatar,
    bot: e.bot,
    discriminator: "0000"
  }, t, 80)
}

function E(e) {
  let t = (0, u.stripDiacritics)(e.username).replace(d.dirtyChars, "").replace(d.coalescePeriods, ".").toLowerCase();
  return "".concat(t).concat(e.discriminator).substring(0, 32)
}
let p = ["@", "#", ":"],
  I = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
  m = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

function _(e) {
  var t, s;
  let a = e.username.toLowerCase();
  if ((t = a, s = d.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !s.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
  for (let e of p)
    if (a.includes(e)) return !0;
  for (let e of m)
    if (a === e.toLowerCase()) return !0;
  for (let e of I)
    if (a.includes(e.toLowerCase())) return !0;
  return !1
}

function N(e) {
  return e.toLowerCase().replace(/\s/g, "").replace("@", "")
}

function S(e) {
  let t = l.default.extractTimestamp(e);
  try {
    return n(new Date(t)).format("MMM DD, YYYY")
  } catch (e) {}
  return null
}

function P(e) {
  return (0, i.match)(e).with({
    rateLimited: !0
  }, () => ({
    type: o.NameValidationState.RATE_LIMIT,
    message: c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
  })).with({
    error: i.P.not(i.P.nullish)
  }, e => {
    let {
      error: t
    } = e;
    return {
      type: o.NameValidationState.ERROR,
      message: t
    }
  }).with({
    taken: !1
  }, () => ({
    type: o.NameValidationState.AVAILABLE,
    message: c.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE
  })).with({
    taken: !0
  }, () => ({
    type: o.NameValidationState.ERROR,
    message: c.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
  })).with({
    error: i.P.nullish
  }, () => ({
    type: o.NameValidationState.INTERNAL_ERROR,
    message: ""
  })).otherwise(() => void 0)
}

function R(e) {
  let t = new Date(2024, 2, 4);
  return t.toLocaleDateString(e, {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}