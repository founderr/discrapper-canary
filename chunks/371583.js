r.d(n, {
    I: function () {
        return s;
    },
    K: function () {
        return a;
    }
});
var i = r(99815);
function a(e) {
    var n;
    let a = e.users[0],
        s = null == a ? void 0 : null === (n = a.statistics[i.E.LOL_MOST_PLAYED_CHAMPION_ID]) || void 0 === n ? void 0 : n.value;
    try {
        return null != s ? r(624119)('./champion_'.concat(s, '.jpg')).default : r(721191).Z;
    } catch {
        return r(721191).Z;
    }
}
function s(e) {
    try {
        return null != e ? r(692425)('./champion_'.concat(e, '.jpg')).default : null;
    } catch {
        return null;
    }
}
