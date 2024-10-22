n.d(t, {
    F: function () {
        return r;
    }
});
var o = n(918701),
    s = n(689938);
let r = (e) => {
    let t = (0, o.si)(e);
    return e.percentComplete > 0 ? s.Z.Messages.QUESTS_VIEW_MEDIA_CONTINUE_CTA.format({ remainTime: ''.concat(String(t.minutes).padStart(2, '0'), ':').concat(String(t.seconds).padStart(2, '0')) }) : s.Z.Messages.QUESTS_VIEW_MEDIA_CTA.format({ remainTime: ''.concat(String(t.minutes).padStart(2, '0'), ':').concat(String(t.seconds).padStart(2, '0')) });
};
