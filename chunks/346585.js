"use strict";
r.r(t), r.d(t, {
  formatPomeloForEditing: function() {
    return g
  },
  formatUsernameLiveCheckValidation: function() {
    return I
  },
  getDefaultPomelo: function() {
    return m
  },
  getLocalizedForcedUUDate: function() {
    return _
  },
  getMemberSince: function() {
    return h
  },
  getUserAvatarURLForPomelo: function() {
    return R
  },
  shouldSkipToEditUsername: function() {
    return A
  }
}), r("757143"), r("47120"), r("627341");
var a = r("913527"),
  n = r.n(a),
  i = r("278074"),
  o = r("768581"),
  s = r("709054"),
  u = r("624138"),
  c = r("219496"),
  l = r("801461"),
  d = r("689938");

function R(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return o.default.getUserAvatarURL({
    id: e.id,
    avatar: e.avatar,
    bot: e.bot,
    discriminator: "0000"
  }, t, 80)
}

function m(e) {
  let t = (0, u.stripDiacritics)(e.username).replace(l.dirtyChars, "").replace(l.coalescePeriods, ".").toLowerCase();
  return "".concat(t).concat(e.discriminator).substring(0, 32)
}
let f = ["@", "#", ":"],
  L = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
  E = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

function A(e) {
  var t, r;
  let a = e.username.toLowerCase();
  if ((t = a, r = l.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !r.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
  for (let e of f)
    if (a.includes(e)) return !0;
  for (let e of E)
    if (a === e.toLowerCase()) return !0;
  for (let e of L)
    if (a.includes(e.toLowerCase())) return !0;
  return !1
}

function g(e) {
  return e.toLowerCase().replace(/\s/g, "").replace("@", "")
}

function h(e) {
  let t = s.default.extractTimestamp(e);
  try {
    return n()(new Date(t)).format("MMM DD, YYYY")
  } catch (e) {}
  return null
}

function I(e) {
  return (0, i.match)(e).with({
    rateLimited: !0
  }, () => ({
    type: c.NameValidationState.RATE_LIMIT,
    message: d.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
  })).with({
    error: i.P.not(i.P.nullish)
  }, e => {
    let {
      error: t
    } = e;
    return {
      type: c.NameValidationState.ERROR,
      message: t
    }
  }).with({
    taken: !1
  }, () => ({
    type: c.NameValidationState.AVAILABLE,
    message: d.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE
  })).with({
    taken: !0
  }, () => ({
    type: c.NameValidationState.ERROR,
    message: d.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
  })).with({
    error: i.P.nullish
  }, () => ({
    type: c.NameValidationState.INTERNAL_ERROR,
    message: ""
  })).otherwise(() => void 0)
}

function _(e) {
  return new Date(2024, 2, 4).toLocaleDateString(e, {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}