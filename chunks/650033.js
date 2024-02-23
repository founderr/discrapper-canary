"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var i = n("446674"),
  s = n("913144");
let l = {
    disable_alpha_voice_panel: "Disable new Voice Panel UI: Currently the new voice ui is defaulted ON for staff.  It's not feature complete so if there's something you are missing, or you find a problem, you can disable it here.",
    enable_recently_active: "Enable recently active channels",
    happening_main_tab: "Enable Happening tab containing summaries",
    enable_recently_active_summaries: "Enable summaries in recently active view",
    redesign_individual_feature_you_tab: "Enable You tab in the old UI",
    disable_theme_key: "Disable reloading the entire app when the theme changes",
    theme_setting_in_account_sheet: "Show theme settings in the Account action sheet",
    cozy_header: "Cozy header",
    mobile_profile_effect_debug_controls: "mobile_profile_effect_debug_controls",
    enable_new_search_filters: "Enables new search filters behavior",
    nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer",
    nav_experiment_server_drawer_no_activity: "[NavI] Hide activity in server drawer",
    nav_experiment_you_bar_grounded: "[NavI] Grounded you bar",
    nav_experiment_you_bar_large_buttons: "[NavI] Small buttons in you bar",
    force_channel_list_v2: "Force channel list V2",
    render_native_message_previews: "Render native message previews in search"
  },
  a = {};
class r extends i.default.DeviceSettingsStore {
  getUserAgnosticState() {
    return {
      toggleStates: a
    }
  }
  initialize(e) {
    for (var t in l) {
      var n, i;
      let s = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
      a[t] = s
    }
  }
  get(e) {
    var t;
    return null !== (t = a[e]) && void 0 !== t && t
  }
  set(e, t) {
    return a[e] = t, t
  }
  all() {
    return a
  }
  allWithDescriptions() {
    return Object.entries(a).map(e => {
      let [t, n] = e;
      return [t, n, l[t]]
    })
  }
}
r.displayName = "DevToolsDesignTogglesStore", r.persistKey = "DevToolsDesignTogglesStore";
var d = new r(s.default, {
  DEV_TOOLS_DESIGN_TOGGLE_SET: function(e) {
    a[e.toggle] = e.value
  }
})