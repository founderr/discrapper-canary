n.d(t, {
    F9: function () {
        return a;
    },
    JC: function () {
        return s;
    },
    yv: function () {
        return o;
    }
});
var r = n(918701),
    i = n(689938);
let a = (e) => {
        let t = (0, r.si)(e);
        return e.percentComplete > 0 ? i.Z.Messages.QUESTS_VIEW_MEDIA_CONTINUE_CTA.format({ remainTime: ''.concat(String(t.minutes).padStart(2, '0'), ':').concat(String(t.seconds).padStart(2, '0')) }) : i.Z.Messages.QUESTS_VIEW_MEDIA_CTA.format({ remainTime: ''.concat(String(t.minutes).padStart(2, '0'), ':').concat(String(t.seconds).padStart(2, '0')) });
    },
    s = (e) => null != e.text;
function o(e) {
    let t = 0 | Math.round(e),
        n = t % 60;
    return ''.concat((t - n) / 60, ':').concat(String(n).padStart(2, '0'));
}
