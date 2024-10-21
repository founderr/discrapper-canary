n.d(t, {
    F: function () {
        return s;
    },
    u: function () {
        return a;
    }
});
var r = n(918701),
    i = n(689938);
function a(e) {
    return 'VIDEO-QUEST-'.concat(e);
}
let s = (e) => {
    let t = (0, r.si)(e);
    return e.percentComplete > 0 ? i.Z.Messages.QUESTS_VIEW_MEDIA_CONTINUE_CTA.format({ remainTime: ''.concat(String(t.minutes).padStart(2, '0'), ':').concat(String(t.seconds).padStart(2, '0')) }) : i.Z.Messages.QUESTS_VIEW_MEDIA_CTA.format({ remainTime: ''.concat(String(t.minutes).padStart(2, '0'), ':').concat(String(t.seconds).padStart(2, '0')) });
};
