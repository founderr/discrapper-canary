n(47120);
var i = n(570140),
    r = n(224706),
    a = n(710845),
    l = n(77498);
let s = {};
function o(e) {
    let { name: t, hash: n, missingData: i } = e;
    for (let e of (l.Z.markGameReported(t), i)) {
        if ('icon' === e) {
            let e = s[t];
            null != e && r.Z.uploadIcon(t, n, e);
            return;
        }
        new a.Z('GameStoreIconManager').log('Could not find missing data key: '.concat(e));
    }
}
function c(e) {
    let { gameName: t, icon: n } = e;
    s[t] = n;
}
t.Z = {
    initialize() {
        i.Z.subscribe('UNVERIFIED_GAME_UPDATE', o), i.Z.subscribe('GAME_ICON_UPDATE', c);
    }
};
