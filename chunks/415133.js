"use strict";
n.r(t), n.d(t, {
  getUserAvatarURLForPomelo: function() {
    return E
  },
  getDefaultPomelo: function() {
    return f
  },
  shouldSkipToEditUsername: function() {
    return h
  },
  formatPomeloForEditing: function() {
    return m
  },
  getMemberSince: function() {
    return C
  },
  formatUsernameLiveCheckValidation: function() {
    return I
  },
  getLocalizedForcedUUDate: function() {
    return g
  }
}), n("781738"), n("222007"), n("794252");
var i = n("866227"),
  s = n.n(i),
  l = n("506838"),
  r = n("315102"),
  a = n("299039"),
  u = n("159885"),
  o = n("644417"),
  d = n("935583"),
  c = n("782340");

function E(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return r.default.getUserAvatarURL({
    id: e.id,
    avatar: e.avatar,
    bot: e.bot,
    discriminator: "0000"
  }, t, 80)
}

function f(e) {
  let t = (0, u.stripDiacritics)(e.username).replace(d.dirtyChars, "").replace(d.coalescePeriods, ".").toLowerCase();
  return "".concat(t).concat(e.discriminator).substring(0, 32)
}
let _ = ["@", "#", ":"],
  p = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
  S = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

function h(e) {
  var t, n;
  let i = e.username.toLowerCase();
  if ((t = i, n = d.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !n.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
  for (let e of _)
    if (i.includes(e)) return !0;
  for (let e of S)
    if (i === e.toLowerCase()) return !0;
  for (let e of p)
    if (i.includes(e.toLowerCase())) return !0;
  return !1
}

function m(e) {
  return e.toLowerCase().replace(/\s/g, "").replace("@", "")
}

function C(e) {
  let t = a.default.extractTimestamp(e);
  try {
    return s(new Date(t)).format("MMM DD, YYYY")
  } catch (e) {}
  return null
}

function I(e) {
  return (0, l.match)(e).with({
    rateLimited: !0
  }, () => ({
    type: o.NameValidationState.RATE_LIMIT,
    message: c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
  })).with({
    error: l.P.not(l.P.nullish)
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
    error: l.P.nullish
  }, () => ({
    type: o.NameValidationState.INTERNAL_ERROR,
    message: ""
  })).otherwise(() => void 0)
}

function g(e) {
  let t = new Date(2024, 2, 4);
  return t.toLocaleDateString(e, {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}