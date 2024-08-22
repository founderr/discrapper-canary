n(47120);
var r,
    o = n(442837),
    i = n(570140);
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
let l = {
        enable_recently_active: 'Enable recently active channels',
        happening_main_tab: 'Enable Happening tab containing summaries',
        theme_setting_in_account_sheet: 'Show theme settings in the Account action sheet',
        cozy_header: 'Cozy header',
        mobile_profile_effect_debug_controls: 'mobile_profile_effect_debug_controls',
        nav_experiment_server_drawer_enabled: '[NavI] Enable expandable server drawer',
        shop_include_unpublished: '[Shop] show unpublished items in shop',
        disable_channel_list: "Disable channel list -- for performance testing. You probably don't want to turn this on, lol",
        show_icymi_debug_scores: 'Show ICYMI debug scores',
        only_channel_screen: 'Down with PanelsView, rely on only ChannelScreen!'
    },
    a = {};
class u extends (r = o.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: a };
    }
    initialize(e) {
        for (var t in l) {
            var n, r;
            let o = null !== (r = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== r && r;
            a[t] = o;
        }
    }
    get(e) {
        var t;
        return null !== (t = a[e]) && void 0 !== t && t;
    }
    set(e, t) {
        return (a[e] = t), t;
    }
    all() {
        return a;
    }
    allWithDescriptions() {
        return Object.entries(a).map((e) => {
            let [t, n] = e;
            return [t, n, l[t]];
        });
    }
}
c(u, 'displayName', 'DevToolsDesignTogglesStore'),
    c(u, 'persistKey', 'DevToolsDesignTogglesStore'),
    (t.Z = new u(i.Z, {
        DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
            a[e.toggle] = e.value;
        }
    }));
