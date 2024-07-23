r(47120);
var a, n = r(442837),
  i = r(570140);

function o(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
value: r,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = r, e;
}
let l = {
disable_alpha_voice_panel: 'Disable new Voice Panel UI: Currently the new voice ui is defaulted ON for staff.  It\'s not feature complete so if there\'s something you are missing, or you find a problem, you can disable it here.',
enable_recently_active: 'Enable recently active channels',
happening_main_tab: 'Enable Happening tab containing summaries',
enable_recently_active_summaries: 'Enable summaries in recently active view',
disable_theme_key: 'Disable reloading the entire app when the theme changes',
theme_setting_in_account_sheet: 'Show theme settings in the Account action sheet',
cozy_header: 'Cozy header',
mobile_profile_effect_debug_controls: 'mobile_profile_effect_debug_controls',
nav_experiment_server_drawer_enabled: '[NavI] Enable expandable server drawer',
nav_experiment_server_drawer_no_activity: '[NavI] Hide activity in server drawer',
nav_experiment_you_bar_grounded: '[NavI] Grounded you bar',
nav_experiment_you_bar_large_buttons: '[NavI] Small buttons in you bar',
nav_experiment_you_bar_large_messages: '[NavI] Large avatars in messages',
force_channel_list_v2: 'Force channel list V2',
shop_include_unpublished: '[Shop] show unpublished items in shop',
disable_channel_list: 'Disable channel list -- for performance testing. You probably don\'t want to turn this on, lol',
show_icymi_debug_scores: 'Show ICYMI debug scores',
only_channel_screen: 'Down with PanelsView, rely on only ChannelScreen!'
  },
  c = {};
class s extends(a = n.ZP.DeviceSettingsStore) {
  getUserAgnosticState() {
return {
  toggleStates: c
};
  }
  initialize(e) {
for (var t in l) {
  var r, a;
  let n = null !== (a = null == e ? void 0 : null === (r = e.toggleStates) || void 0 === r ? void 0 : r[t]) && void 0 !== a && a;
  c[t] = n;
}
  }
  get(e) {
var t;
return null !== (t = c[e]) && void 0 !== t && t;
  }
  set(e, t) {
return c[e] = t, t;
  }
  all() {
return c;
  }
  allWithDescriptions() {
return Object.entries(c).map(e => {
  let [t, r] = e;
  return [
    t,
    r,
    l[t]
  ];
});
  }
}
o(s, 'displayName', 'DevToolsDesignTogglesStore'), o(s, 'persistKey', 'DevToolsDesignTogglesStore'), t.Z = new s(i.Z, {
  DEV_TOOLS_DESIGN_TOGGLE_SET: function(e) {
c[e.toggle] = e.value;
  }
});