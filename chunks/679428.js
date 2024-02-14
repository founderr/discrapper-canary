"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var i = n("872717"),
  r = n("689988"),
  a = n("870691"),
  l = n("42203"),
  s = n("718517"),
  u = n("49111");
let o = {},
  c = 0,
  d = 15 * s.default.Millis.SECOND;

function f() {
  o = {
    ...a.default.getCollapsedCategories()
  }
}

function E() {
  !__OVERLAY__ && (clearTimeout(c), c = setTimeout(() => h({}), d))
}
async function _(e, t) {
  null == e || e === u.ME ? await i.default.patch({
    url: u.Endpoints.USER_GUILD_SETTINGS(u.ME),
    body: t
  }) : await h(null != t ? {
    [null != e ? e : u.ME]: t
  } : {})
}
async function h(e) {
  clearTimeout(c);
  let t = 0 !== Object.keys(e).length,
    n = a.default.getCollapsedCategories(),
    r = function() {
      let e = {},
        t = a.default.getCollapsedCategories();
      for (let n in t) t[n] !== o[n] && (e[n] = !0);
      for (let n in o) t[n] !== o[n] && (e[n] = !0);
      return e
    }();
  for (let i in r) {
    let r = l.default.getChannel(i);
    null != r && null != r.guild_id && (!(r.guild_id in e) && (e[r.guild_id] = {}), null == e[r.guild_id].channel_overrides && (e[r.guild_id].channel_overrides = {}), e[r.guild_id].channel_overrides[r.id] = {
      ...e[r.guild_id].channel_overrides[r.id],
      collapsed: r.id in n
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

function T() {
  o = {
    ...a.default.getCollapsedCategories()
  }
}
class S extends r.default {
  constructor(...e) {
    super(...e), this.actions = {
      CATEGORY_COLLAPSE: E,
      CATEGORY_EXPAND: E,
      CATEGORY_COLLAPSE_ALL: E,
      CATEGORY_EXPAND_ALL: E,
      POST_CONNECTION_OPEN: f,
      USER_GUILD_SETTINGS_FULL_UPDATE: T
    }, this.saveUserGuildSettings = _, this.saveUserGuildSettingsBulk = h
  }
}
var I = new S