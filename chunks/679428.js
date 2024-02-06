"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var i = n("872717"),
  l = n("689988"),
  r = n("870691"),
  o = n("42203"),
  a = n("718517"),
  s = n("49111");
let u = {},
  c = 0,
  d = 15 * a.default.Millis.SECOND;

function f() {
  u = {
    ...r.default.getCollapsedCategories()
  }
}

function E() {
  !__OVERLAY__ && (clearTimeout(c), c = setTimeout(() => h({}), d))
}
async function p(e, t) {
  null == e || e === s.ME ? await i.default.patch({
    url: s.Endpoints.USER_GUILD_SETTINGS(s.ME),
    body: t
  }) : await h(null != t ? {
    [null != e ? e : s.ME]: t
  } : {})
}
async function h(e) {
  clearTimeout(c);
  let t = 0 !== Object.keys(e).length,
    n = r.default.getCollapsedCategories(),
    l = function() {
      let e = {},
        t = r.default.getCollapsedCategories();
      for (let n in t) t[n] !== u[n] && (e[n] = !0);
      for (let n in u) t[n] !== u[n] && (e[n] = !0);
      return e
    }();
  for (let i in l) {
    let l = o.default.getChannel(i);
    null != l && null != l.guild_id && (!(l.guild_id in e) && (e[l.guild_id] = {}), null == e[l.guild_id].channel_overrides && (e[l.guild_id].channel_overrides = {}), e[l.guild_id].channel_overrides[l.id] = {
      ...e[l.guild_id].channel_overrides[l.id],
      collapsed: l.id in n
    }, t = !0)
  }
  return t ? (u = {
    ...n
  }, delete e[s.FAVORITES], (await i.default.patch({
    url: s.Endpoints.USER_GUILD_SETTINGS_BULK,
    body: {
      guilds: e
    }
  })).body) : []
}

function _() {
  u = {
    ...r.default.getCollapsedCategories()
  }
}
class C extends l.default {
  constructor(...e) {
    super(...e), this.actions = {
      CATEGORY_COLLAPSE: E,
      CATEGORY_EXPAND: E,
      CATEGORY_COLLAPSE_ALL: E,
      CATEGORY_EXPAND_ALL: E,
      POST_CONNECTION_OPEN: f,
      USER_GUILD_SETTINGS_FULL_UPDATE: _
    }, this.saveUserGuildSettings = p, this.saveUserGuildSettingsBulk = h
  }
}
var S = new C