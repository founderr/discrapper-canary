"use strict";
n.r(t), n.d(t, {
  GameDisplayModeStorage: function() {
    return l
  }
});
var i = n("95410"),
  a = n("115718");
class l {
  save() {
    let e = {
      games: this.games
    };
    i.default.set(l.storageKey, e)
  }
  static load() {
    return null == l._loaded && (l._loaded = l.loadInternal()), l._loaded
  }
  static loadInternal() {
    let e = i.default.get(l.storageKey);
    if (null != e) {
      var t;
      return new l(null !== (t = e.games) && void 0 !== t ? t : {})
    }
    let n = new l({});
    return n.save(), n
  }
  static getGameSettings(e) {
    var t;
    if (null == e) return null;
    let n = l.load();
    return null !== (t = n.games[e]) && void 0 !== t ? t : null
  }
  static updateGameSettings(e, t) {
    if (null == e) return;
    let n = l.load(),
      i = n.games[e];
    if (null == i) {
      n.games[e] = {
        screen: a.RunningProcessFullscreenType.UNKNOWN,
        date: Date.now(),
        ...t
      }, n.save();
      return
    }
    "boolean" == typeof t.disabled && (i.disabled = t.disabled), "number" == typeof t.screen && (i.screen = t.screen), i.date = Date.now(), n.save()
  }
  static isPromptingForGameDisable(e) {
    var t, n;
    return null !== (n = null === (t = l.getGameSettings(e)) || void 0 === t ? void 0 : t.disabled) && void 0 !== n && n
  }
  static setPromptingForGameDisable(e, t) {
    l.updateGameSettings(e, {
      disabled: t
    })
  }
  static getGameDisplayMode(e) {
    var t, n;
    return null == e ? null : null !== (n = null === (t = l.getGameSettings(e)) || void 0 === t ? void 0 : t.screen) && void 0 !== n ? n : null
  }
  static setGameDisplayMode(e, t) {
    l.updateGameSettings(e, {
      screen: t
    })
  }
  static clearOldGameSettings() {
    let e = l.load();
    if (null == e.games) return;
    let t = Date.now() - 31536e6;
    for (let n in e.games) {
      let i = e.games[n];
      i.date < t && delete e.games[n]
    }
    e.save()
  }
  static reset() {
    let e = l.load();
    e.games = {}, e.save()
  }
  static isTestMode() {
    var e;
    return e = !!window.__GAME_DISPLAY_MODE_TEST_MODE__, e
  }
  static isVerbose() {
    var e;
    return e = !!window.__GAME_DISPLAY_MODE_DEBUG__, e
  }
  constructor(e) {
    this.games = e
  }
}
l._loaded = null, l.storageKey = "GameDisplayModeStorage", setTimeout(() => l.clearOldGameSettings(), 6e4)