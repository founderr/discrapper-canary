"use strict";
t.r(e), t.d(e, {
  useChannelEmojiAndColor: function() {
    return d
  }
}), t("222007"), t("884691");
var E = t("446674"),
  n = t("36763");
t("18054");
var l = t("362391"),
  C = t("385976");
t("872173");
var F = t("374363");
t("42203");
var i = t("284679"),
  u = t("21121"),
  a = t("934306"),
  r = t("807362"),
  o = t("132568");

function D(B) {
  return "#" + B.toString(16).toUpperCase()
}

function d(B) {
  var e, t, d, s, A, c;
  let f, _, N = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    T = function() {
      let B = (0, l.default)("enable_channel_emojis"),
        e = (0, a.useOnNewPanels)(),
        t = (0, u.useInMainTabsExperiment)();
      return B || t && !e
    }(),
    h = (0, l.default)("user_channel_emoji_overrides"),
    {
      emoji: m,
      color: v
    } = function(B) {
      var e, t, n, l, C, i, u;
      let a = (0, E.useStateFromStores)([F.default], () => {
          var e, t, E;
          let n = null === (e = F.default.settings.guilds) || void 0 === e ? void 0 : e.guilds;
          return null != B ? null == n ? void 0 : null === (E = n[B.guild_id]) || void 0 === E ? void 0 : null === (t = E.channels) || void 0 === t ? void 0 : t[B.id] : null
        }),
        r = null == a ? void 0 : a.iconEmoji;
      return {
        emoji: (null == r ? void 0 : null === (e = r.id) || void 0 === e ? void 0 : e.value) != null || (null == r ? void 0 : null === (t = r.name) || void 0 === t ? void 0 : t.value) != null ? {
          id: null !== (i = null == r ? void 0 : null === (n = r.id) || void 0 === n ? void 0 : n.value) && void 0 !== i ? i : null,
          name: null !== (u = null == r ? void 0 : null === (l = r.name) || void 0 === l ? void 0 : l.value) && void 0 !== u ? u : null
        } : null,
        color: (null == r ? void 0 : null === (C = r.color) || void 0 === C ? void 0 : C.value) != null ? D(Number(r.color.value)) : null
      }
    }(B),
    {
      emoji: I,
      color: S
    } = function(B) {
      var e, t, E;
      let n = null !== (e = null == B ? void 0 : B.iconEmoji) && void 0 !== e ? e : null;
      return {
        emoji: null != n ? {
          id: null !== (t = n.id) && void 0 !== t ? t : null,
          name: null !== (E = n.name) && void 0 !== E ? E : null
        } : null,
        color: (null == B ? void 0 : B.themeColor) != null ? D(B.themeColor) : null
      }
    }(B),
    p = function() {
      let {
        theme: B
      } = (0, n.useThemeContext)();
      return "dark" === B ? o.CHANNEL_EMOJI_BACKGROUND_OPACITY_DARK : o.CHANNEL_EMOJI_BACKGROUND_OPACITY_LIGHT
    }();
  if ((null == m ? void 0 : m.name) != null && h) {
    let B = null !== (e = null != v ? v : (null == m ? void 0 : m.id) == null ? r.default[m.name] : null) && void 0 !== e ? e : o.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
    f = {
      id: null !== (t = null == m ? void 0 : m.id) && void 0 !== t ? t : null,
      name: null !== (d = null == m ? void 0 : m.name) && void 0 !== d ? d : o.DEFAULT_CHANNEL_EMOJI,
      url: void 0
    }, _ = N ? (0, i.hexWithOpacity)(B, p) : B
  } else {
    let B = null !== (s = null != S ? S : (null == I ? void 0 : I.name) != null && (null == I ? void 0 : I.id) == null ? r.default[I.name] : null) && void 0 !== s ? s : o.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
    f = {
      id: null !== (A = null == I ? void 0 : I.id) && void 0 !== A ? A : null,
      name: null !== (c = null == I ? void 0 : I.name) && void 0 !== c ? c : o.DEFAULT_CHANNEL_EMOJI,
      url: void 0
    }, _ = N ? (0, i.hexWithOpacity)(B, p) : B
  }
  let L = (0, E.useStateFromStores)([C.default], () => null != f.id ? C.default.getUsableCustomEmojiById(f.id) : null);
  return T ? {
    emoji: null != f.id && null != L ? {
      ...f,
      url: L.url
    } : f,
    color: _
  } : {
    color: N ? (0, i.hexWithOpacity)(o.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR, p) : o.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR,
    emoji: {
      name: o.DEFAULT_CHANNEL_EMOJI,
      id: null,
      url: void 0
    }
  }
}