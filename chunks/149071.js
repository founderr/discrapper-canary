var r = n(47120);
var i = n(544891),
    a = n(147913),
    o = n(680089),
    s = n(592125),
    l = n(70956),
    u = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = {},
    _ = 0,
    E = 15 * l.Z.Millis.SECOND;
function f() {
    d = { ...o.Z.getCollapsedCategories() };
}
function h() {
    !__OVERLAY__ && (clearTimeout(_), (_ = setTimeout(() => m({}), E)));
}
async function p(e, t) {
    null == e || e === u.ME
        ? await i.tn.patch({
              url: u.ANM.USER_GUILD_SETTINGS(u.ME),
              body: t
          })
        : await m(null != t ? { [null != e ? e : u.ME]: t } : {});
}
async function m(e) {
    clearTimeout(_);
    let t = 0 !== Object.keys(e).length,
        n = o.Z.getCollapsedCategories(),
        r = I();
    for (let i in r) {
        let r = s.Z.getChannel(i);
        null != r &&
            null != r.guild_id &&
            (!(r.guild_id in e) && (e[r.guild_id] = {}),
            null == e[r.guild_id].channel_overrides && (e[r.guild_id].channel_overrides = {}),
            (e[r.guild_id].channel_overrides[r.id] = {
                ...e[r.guild_id].channel_overrides[r.id],
                collapsed: r.id in n
            }),
            (t = !0));
    }
    return t
        ? ((d = { ...n }),
          delete e[u.I_8],
          (
              await i.tn.patch({
                  url: u.ANM.USER_GUILD_SETTINGS_BULK,
                  body: { guilds: e }
              })
          ).body)
        : [];
}
function I() {
    let e = {},
        t = o.Z.getCollapsedCategories();
    for (let n in t) t[n] !== d[n] && (e[n] = !0);
    for (let n in d) t[n] !== d[n] && (e[n] = !0);
    return e;
}
function T() {
    d = { ...o.Z.getCollapsedCategories() };
}
class g extends a.Z {
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                CATEGORY_COLLAPSE: h,
                CATEGORY_EXPAND: h,
                CATEGORY_COLLAPSE_ALL: h,
                CATEGORY_EXPAND_ALL: h,
                POST_CONNECTION_OPEN: f,
                USER_GUILD_SETTINGS_FULL_UPDATE: T
            }),
            c(this, 'saveUserGuildSettings', p),
            c(this, 'saveUserGuildSettingsBulk', m);
    }
}
t.Z = new g();
