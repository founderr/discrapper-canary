t(47120);
var i,
    l,
    r,
    s,
    a = t(392711),
    o = t.n(a),
    c = t(442837),
    d = t(570140),
    u = t(45966),
    m = t(999382),
    I = t(981631);
let h = !1,
    N = null,
    g = new Set();
function T() {
    (function () {
        (h = !1), (N = null);
    })(),
        null != (N = m.Z.getGuildId()) && m.Z.getSection() === I.pNK.ONBOARDING && (g = new Set(u.Z.getDefaultChannelIds(N)));
}
class f extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, u.Z);
    }
    hasChanges() {
        if (null == N) return !1;
        let e = u.Z.getDefaultChannelIds(N).sort(),
            n = Array.from(g).sort();
        return !o().isEqual(e, n);
    }
    get guildId() {
        return N;
    }
    get submitting() {
        return h;
    }
    get editedDefaultChannelIds() {
        return g;
    }
}
(s = 'GuildSettingsDefaultChannelsStore'),
    (r = 'displayName') in (l = f)
        ? Object.defineProperty(l, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = s),
    (n.Z = new f(d.Z, {
        GUILD_SETTINGS_INIT: T,
        GUILD_SETTINGS_SET_SECTION: T,
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: T,
        GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: T,
        GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: T,
        GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function () {
            h = !1;
        },
        GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function (e) {
            let { channelId: n } = e;
            (g = new Set(g)).has(n) ? g.delete(n) : g.add(n);
        },
        GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function () {
            h = !0;
        }
    }));
