"use strict";
let i;
n.d(t, {
  F: function() {
    return E
  },
  Z: function() {
    return I
  }
}), n(757143), n(653041);
var r = n(392711),
  s = n.n(r),
  o = n(579806),
  a = n(710845),
  l = n(358085),
  u = n(998502);
let _ = [];

function c(e) {
  return e = e.toLowerCase(), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, "")).replace(/\\/g, "/")), e
}

function d(e) {
  null != e && "" !== e && (!(e = c(e)).endsWith("/") && (e += "/"), _.push(e))
}

function E(e) {
  e = c(e);
  let t = !1;
  return (_.forEach(n => {
    !t && e.startsWith(n) && (e = e.substr(n.length), t = !0)
  }), t) ? e = e.includes("dosbox.exe") ? e.split("/").slice(-3).join("/") : e.split("/").slice(-2).join("/") : null
}
async function I() {
  if (null != i) return i;
  try {
    await u.ZP.ensureModule("discord_game_utils"), i = await u.ZP.requireModule("discord_game_utils")
  } catch (e) {
    new a.Z("GamesActionCreators").error("could not load discord_game_utils", e)
  }
  if ((0, l.isWindows)()) {
    let e = o.Z.process.env;
    d(e.LOCALAPPDATA), d(e["PROGRAMFILES(X86)"]), d(e.PROGRAMFILES), d(e.PROGRAMW6432), d(e.PROGRAMDATA), d("/games/"), d("/steamlibrary/steamapps/common/")
  }
  let e = o.Z.remoteApp.getPath;
  return d(await e("home")), d(await e("appData")), d(await e("desktop")), d(await e("documents")), d(await e("downloads")), (_ = s().uniq(_)).sort((e, t) => t.length - e.length), i
}