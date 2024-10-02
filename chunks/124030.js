a.d(n, {
    A: function () {
        return r;
    },
    L: function () {
        return o;
    }
});
var t = a(433517);
let i = 'GameFollowSurveyModal';
function o() {
    var e;
    return (null === (e = t.K.get(i)) || void 0 === e ? void 0 : e.hasInteractedWithSurvey) !== !0;
}
function r() {
    return t.K.set(i, { hasInteractedWithSurvey: !0 });
}
