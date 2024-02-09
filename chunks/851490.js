"use strict";
s.r(t), s.d(t, {
  resetDefaultChannels: function() {
    return f
  },
  toggleDefaultChannel: function() {
    return T
  },
  saveDefaultChannels: function() {
    return S
  }
}), s("222007");
var a = s("913144"),
  l = s("404118"),
  n = s("448993"),
  i = s("863636"),
  r = s("380710"),
  o = s("42203"),
  d = s("449008"),
  u = s("653274"),
  c = s("330724"),
  E = s("136278"),
  _ = s("653138"),
  I = s("782340");

function f() {
  a.default.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_RESET"
  })
}

function T(e) {
  a.default.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE",
    channelId: e
  })
}
async function S(e) {
  let t = Array.from(u.default.editedDefaultChannelIds).filter(e => null != o.default.getChannel(e)),
    s = E.default.advancedMode,
    [f, T] = (0, r.getChattableDefaultChannels)(e.id, [...t]),
    S = (0, r.getMinimumSetOfDefaultChannelIds)(e.id, t, E.default.editedOnboardingPrompts),
    m = (0, r.getMinimumSetOfDefaultChannelIds)(e.id, t, E.default.editedOnboardingPrompts, r.isChattableChannelId);
  if (i.default.getEnabled(e.id) && (!s && (T.length < _.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING || f.length < _.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN) || s && (S.length < _.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING || m.length < _.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN))) {
    l.default.show({
      title: I.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
      body: I.default.Messages.DEFAULT_CHANNELS_SAVE_INVALID_DEFAULT_CHANNELS
    });
    return
  }
  if (u.default.hasChanges()) {
    a.default.dispatch({
      type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT"
    });
    try {
      await (0, c.editOnboarding)(e.id, {
        default_channel_ids: t
      }), a.default.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS",
        guildId: e.id,
        channelIds: t
      })
    } catch (s) {
      var N;
      let {
        fieldName: e,
        error: t
      } = null !== (N = new(0, n.APIError)(s).getAnyErrorMessageAndField()) && void 0 !== N ? N : {};
      l.default.show({
        title: I.default.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
        body: [e, t].filter(d.isNotNullish).join(": ")
      }), a.default.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED"
      })
    }
  }
}