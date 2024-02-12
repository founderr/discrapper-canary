"use strict";
a.r(t), a.d(t, {
  getUserAvatarURLForPomelo: function() {
    return E
  },
  getDefaultPomelo: function() {
    return f
  },
  shouldSkipToEditUsername: function() {
    return _
  },
  formatPomeloForEditing: function() {
    return I
  },
  getMemberSince: function() {
    return T
  },
  formatUsernameLiveCheckValidation: function() {
    return h
  },
  getLocalizedForcedUUDate: function() {
    return O
  }
}), a("781738"), a("222007"), a("794252");
var s = a("866227"),
  n = a.n(s),
  i = a("506838"),
  l = a("315102"),
  r = a("299039"),
  o = a("159885"),
  d = a("644417"),
  u = a("935583"),
  c = a("782340");

function E(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return l.default.getUserAvatarURL({
    id: e.id,
    avatar: e.avatar,
    bot: e.bot,
    discriminator: "0000"
  }, t, 80)
}

function f(e) {
  let t = (0, o.stripDiacritics)(e.username).replace(u.dirtyChars, "").replace(u.coalescePeriods, ".").toLowerCase();
  return "".concat(t).concat(e.discriminator).substring(0, 32)
}
let m = ["@", "#", ":"],
  S = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
  g = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

function _(e) {
  var t, a;
  let s = e.username.toLowerCase();
  if ((t = s, a = u.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !a.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
  for (let e of m)
    if (s.includes(e)) return !0;
  for (let e of g)
    if (s === e.toLowerCase()) return !0;
  for (let e of S)
    if (s.includes(e.toLowerCase())) return !0;
  return !1
}

function I(e) {
  return e.toLowerCase().replace(/\s/g, "").replace("@", "")
}

function T(e) {
  let t = r.default.extractTimestamp(e);
  try {
    return n(new Date(t)).format("MMM DD, YYYY")
  } catch (e) {}
  return null
}

function h(e) {
  return (0, i.match)(e).with({
    rateLimited: !0
  }, () => ({
    type: d.NameValidationState.RATE_LIMIT,
    message: c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
  })).with({
    error: i.P.not(i.P.nullish)
  }, e => {
    let {
      error: t
    } = e;
    return {
      type: d.NameValidationState.ERROR,
      message: t
    }
  }).with({
    taken: !1
  }, () => ({
    type: d.NameValidationState.AVAILABLE,
    message: c.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE
  })).with({
    taken: !0
  }, () => ({
    type: d.NameValidationState.ERROR,
    message: c.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
  })).with({
    error: i.P.nullish
  }, () => ({
    type: d.NameValidationState.INTERNAL_ERROR,
    message: ""
  })).otherwise(() => void 0)
}

function O(e) {
  let t = new Date(2024, 2, 4);
  return t.toLocaleDateString(e, {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}