var i = r(47120);
var a = r(544891),
    s = r(147913),
    o = r(680089),
    l = r(592125),
    u = r(70956),
    c = r(981631);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = {},
    _ = 0,
    h = 15 * u.Z.Millis.SECOND;
function p() {
    f = { ...o.Z.getCollapsedCategories() };
}
function m() {
    !__OVERLAY__ && (clearTimeout(_), (_ = setTimeout(() => E({}), h)));
}
async function g(e, n) {
    null == e || e === c.ME
        ? await a.tn.patch({
              url: c.ANM.USER_GUILD_SETTINGS(c.ME),
              body: n,
              rejectWithError: !1
          })
        : await E(null != n ? { [null != e ? e : c.ME]: n } : {});
}
async function E(e) {
    clearTimeout(_);
    let n = 0 !== Object.keys(e).length,
        r = o.Z.getCollapsedCategories(),
        i = v();
    for (let a in i) {
        let i = l.Z.getChannel(a);
        null != i &&
            null != i.guild_id &&
            (!(i.guild_id in e) && (e[i.guild_id] = {}),
            null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}),
            (e[i.guild_id].channel_overrides[i.id] = {
                ...e[i.guild_id].channel_overrides[i.id],
                collapsed: i.id in r
            }),
            (n = !0));
    }
    return n
        ? ((f = { ...r }),
          delete e[c.I_8],
          (
              await a.tn.patch({
                  url: c.ANM.USER_GUILD_SETTINGS_BULK,
                  body: { guilds: e },
                  rejectWithError: !1
              })
          ).body)
        : [];
}
function v() {
    let e = {},
        n = o.Z.getCollapsedCategories();
    for (let r in n) n[r] !== f[r] && (e[r] = !0);
    for (let r in f) n[r] !== f[r] && (e[r] = !0);
    return e;
}
function I() {
    f = { ...o.Z.getCollapsedCategories() };
}
class T extends s.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', {
                CATEGORY_COLLAPSE: m,
                CATEGORY_EXPAND: m,
                CATEGORY_COLLAPSE_ALL: m,
                CATEGORY_EXPAND_ALL: m,
                POST_CONNECTION_OPEN: p,
                USER_GUILD_SETTINGS_FULL_UPDATE: I
            }),
            d(this, 'saveUserGuildSettings', g),
            d(this, 'saveUserGuildSettingsBulk', E);
    }
}
n.Z = new T();
