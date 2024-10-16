a.d(n, {
    A: function () {
        return i;
    },
    L: function () {
        return s;
    }
});
var t = a(433517);
let r = 'GameFollowSurveyModal';
function s() {
    var e;
    return (null === (e = t.K.get(r)) || void 0 === e ? void 0 : e.hasInteractedWithSurvey) !== !0;
}
function i() {
    return t.K.set(r, { hasInteractedWithSurvey: !0 });
}
