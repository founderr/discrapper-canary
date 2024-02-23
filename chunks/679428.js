"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var i = n("872717"),
  a = n("689988"),
  r = n("870691"),
  s = n("42203"),
  l = n("718517"),
  u = n("49111");
let o = {},
  d = 0,
  c = 15 * l.default.Millis.SECOND;

function f() {
  o = {
    ...r.default.getCollapsedCategories()
  }
}

function E() {
  !__OVERLAY__ && (clearTimeout(d), d = setTimeout(() => _({}), c))
}
async function p(e, t) {
  null == e || e === u.ME ? await i.default.patch({
    url: u.Endpoints.USER_GUILD_SETTINGS(u.ME),
    body: t
  }) : await _(null != t ? {
    [null != e ? e : u.ME]: t
  } : {})
}
async function _(e) {
  clearTimeout(d);
  let t = 0 !== Object.keys(e).length,
    n = r.default.getCollapsedCategories(),
    a = function() {
      let e = {},
        t = r.default.getCollapsedCategories();
      for (let n in t) t[n] !== o[n] && (e[n] = !0);
      for (let n in o) t[n] !== o[n] && (e[n] = !0);
      return e
    }();
  for (let i in a) {
    let a = s.default.getChannel(i);
    null != a && null != a.guild_id && (!(a.guild_id in e) && (e[a.guild_id] = {}), null == e[a.guild_id].channel_overrides && (e[a.guild_id].channel_overrides = {}), e[a.guild_id].channel_overrides[a.id] = {
      ...e[a.guild_id].channel_overrides[a.id],
      collapsed: a.id in n
    }, t = !0)
  }
  return t ? (o = {
    ...n
  }, delete e[u.FAVORITES], (await i.default.patch({
    url: u.Endpoints.USER_GUILD_SETTINGS_BULK,
    body: {
      guilds: e
    }
  })).body) : []
}

function C() {
  o = {
    ...r.default.getCollapsedCategories()
  }
}
class I extends a.default {
  constructor(...e) {
    super(...e), this.actions = {
      CATEGORY_COLLAPSE: E,
      CATEGORY_EXPAND: E,
      CATEGORY_COLLAPSE_ALL: E,
      CATEGORY_EXPAND_ALL: E,
      POST_CONNECTION_OPEN: f,
      USER_GUILD_SETTINGS_FULL_UPDATE: C
    }, this.saveUserGuildSettings = p, this.saveUserGuildSettingsBulk = _
  }
}
var h = new I