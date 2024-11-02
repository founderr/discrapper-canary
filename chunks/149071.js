n(47120);
var r = n(544891),
    i = n(147913),
    a = n(680089),
    s = n(592125),
    o = n(70956),
    l = n(981631);
function u(e, t, n) {
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
let c = {},
    d = 0,
    f = 15 * o.Z.Millis.SECOND;
function _() {
    c = { ...a.Z.getCollapsedCategories() };
}
function h() {
    !__OVERLAY__ && (clearTimeout(d), (d = setTimeout(() => m({}), f)));
}
async function p(e, t) {
    null == e || e === l.ME
        ? await r.tn.patch({
              url: l.ANM.USER_GUILD_SETTINGS(l.ME),
              body: t
          })
        : await m(null != t ? { [null != e ? e : l.ME]: t } : {});
}
async function m(e) {
    clearTimeout(d);
    let t = 0 !== Object.keys(e).length,
        n = a.Z.getCollapsedCategories(),
        i = (function () {
            let e = {},
                t = a.Z.getCollapsedCategories();
            for (let n in t) t[n] !== c[n] && (e[n] = !0);
            for (let n in c) t[n] !== c[n] && (e[n] = !0);
            return e;
        })();
    for (let r in i) {
        let i = s.Z.getChannel(r);
        null != i &&
            null != i.guild_id &&
            (!(i.guild_id in e) && (e[i.guild_id] = {}),
            null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}),
            (e[i.guild_id].channel_overrides[i.id] = {
                ...e[i.guild_id].channel_overrides[i.id],
                collapsed: i.id in n
            }),
            (t = !0));
    }
    return t
        ? ((c = { ...n }),
          delete e[l.I_8],
          (
              await r.tn.patch({
                  url: l.ANM.USER_GUILD_SETTINGS_BULK,
                  body: { guilds: e }
              })
          ).body)
        : [];
}
function g() {
    c = { ...a.Z.getCollapsedCategories() };
}
class E extends i.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                CATEGORY_COLLAPSE: h,
                CATEGORY_EXPAND: h,
                CATEGORY_COLLAPSE_ALL: h,
                CATEGORY_EXPAND_ALL: h,
                POST_CONNECTION_OPEN: _,
                USER_GUILD_SETTINGS_FULL_UPDATE: g
            }),
            u(this, 'saveUserGuildSettings', p),
            u(this, 'saveUserGuildSettingsBulk', m);
    }
}
t.Z = new E();
