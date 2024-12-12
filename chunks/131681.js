r.d(n, {
    U: function () {
        return a;
    }
});
var i = r(695346);
let a = () => {
    var e;
    let { profanity: n = !1, slurs: r = !1, sexualContent: a = !1 } = i.gw.getSetting();
    return null !== (e = n || r || a) && void 0 !== e && e;
};
