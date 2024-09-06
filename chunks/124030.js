t.d(n, {
    A: function () {
        return o;
    },
    L: function () {
        return s;
    }
});
var a = t(433517);
let r = 'GameFollowSurveyModal';
function s() {
    var e;
    return (null === (e = a.K.get(r)) || void 0 === e ? void 0 : e.hasInteractedWithSurvey) !== !0;
}
function o() {
    return a.K.set(r, { hasInteractedWithSurvey: !0 });
}
