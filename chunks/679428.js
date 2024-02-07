"use strict";
n.r(e), n.d(e, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("872717"),
  r = n("689988"),
  l = n("870691"),
  s = n("42203"),
  a = n("718517"),
  o = n("49111");
let u = {},
  c = 0,
  d = 15 * a.default.Millis.SECOND;

function f() {
  u = {
    ...l.default.getCollapsedCategories()
  }
}

function h() {
  !__OVERLAY__ && (clearTimeout(c), c = setTimeout(() => _({}), d))
}
async function p(t, e) {
  null == t || t === o.ME ? await i.default.patch({
    url: o.Endpoints.USER_GUILD_SETTINGS(o.ME),
    body: e
  }) : await _(null != e ? {
    [null != t ? t : o.ME]: e
  } : {})
}
async function _(t) {
  clearTimeout(c);
  let e = 0 !== Object.keys(t).length,
    n = l.default.getCollapsedCategories(),
    r = function() {
      let t = {},
        e = l.default.getCollapsedCategories();
      for (let n in e) e[n] !== u[n] && (t[n] = !0);
      for (let n in u) e[n] !== u[n] && (t[n] = !0);
      return t
    }();
  for (let i in r) {
    let r = s.default.getChannel(i);
    null != r && null != r.guild_id && (!(r.guild_id in t) && (t[r.guild_id] = {}), null == t[r.guild_id].channel_overrides && (t[r.guild_id].channel_overrides = {}), t[r.guild_id].channel_overrides[r.id] = {
      ...t[r.guild_id].channel_overrides[r.id],
      collapsed: r.id in n
    }, e = !0)
  }
  return e ? (u = {
    ...n
  }, delete t[o.FAVORITES], (await i.default.patch({
    url: o.Endpoints.USER_GUILD_SETTINGS_BULK,
    body: {
      guilds: t
    }
  })).body) : []
}

function v() {
  u = {
    ...l.default.getCollapsedCategories()
  }
}
class C extends r.default {
  constructor(...t) {
    super(...t), this.actions = {
      CATEGORY_COLLAPSE: h,
      CATEGORY_EXPAND: h,
      CATEGORY_COLLAPSE_ALL: h,
      CATEGORY_EXPAND_ALL: h,
      POST_CONNECTION_OPEN: f,
      USER_GUILD_SETTINGS_FULL_UPDATE: v
    }, this.saveUserGuildSettings = p, this.saveUserGuildSettingsBulk = _
  }
}
var E = new C