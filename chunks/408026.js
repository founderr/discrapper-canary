n(47120);
var s = n(570140),
  i = n(224706),
  l = n(710845),
  a = n(77498);
let r = {};

function o(e) {
  let {
    name: t,
    hash: n,
    missingData: s
  } = e;
  for (let e of (a.Z.markGameReported(t), s)) {
    if ("icon" === e) {
      let e = r[t];
      null != e && i.Z.uploadIcon(t, n, e);
      return
    }
    new l.Z("GameStoreIconManager").log("Could not find missing data key: ".concat(e))
  }
}

function c(e) {
  let {
    gameName: t,
    icon: n
  } = e;
  r[t] = n
}
t.Z = {
  initialize() {
    s.Z.subscribe("UNVERIFIED_GAME_UPDATE", o), s.Z.subscribe("GAME_ICON_UPDATE", c)
  }
}