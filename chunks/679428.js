"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
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
async function E(e, t) {
  null == e || e === o.ME ? await i.default.patch({
    url: o.Endpoints.USER_GUILD_SETTINGS(o.ME),
    body: t
  }) : await _(null != t ? {
    [null != e ? e : o.ME]: t
  } : {})
}
async function _(e) {
  clearTimeout(c);
  let t = 0 !== Object.keys(e).length,
    n = l.default.getCollapsedCategories(),
    r = function() {
      let e = {},
        t = l.default.getCollapsedCategories();
      for (let n in t) t[n] !== u[n] && (e[n] = !0);
      for (let n in u) t[n] !== u[n] && (e[n] = !0);
      return e
    }();
  for (let i in r) {
    let r = s.default.getChannel(i);
    null != r && null != r.guild_id && (!(r.guild_id in e) && (e[r.guild_id] = {}), null == e[r.guild_id].channel_overrides && (e[r.guild_id].channel_overrides = {}), e[r.guild_id].channel_overrides[r.id] = {
      ...e[r.guild_id].channel_overrides[r.id],
      collapsed: r.id in n
    }, t = !0)
  }
  return t ? (u = {
    ...n
  }, delete e[o.FAVORITES], (await i.default.patch({
    url: o.Endpoints.USER_GUILD_SETTINGS_BULK,
    body: {
      guilds: e
    }
  })).body) : []
}

function p() {
  u = {
    ...l.default.getCollapsedCategories()
  }
}
class v extends r.default {
  constructor(...e) {
    super(...e), this.actions = {
      CATEGORY_COLLAPSE: h,
      CATEGORY_EXPAND: h,
      CATEGORY_COLLAPSE_ALL: h,
      CATEGORY_EXPAND_ALL: h,
      POST_CONNECTION_OPEN: f,
      USER_GUILD_SETTINGS_FULL_UPDATE: p
    }, this.saveUserGuildSettings = E, this.saveUserGuildSettingsBulk = _
  }
}
var g = new v