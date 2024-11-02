n.d(t, {
    y: function () {
        return l;
    }
});
var i = n(603113),
    r = n(122810);
function l(e) {
    return {
        af_voice_chat: e.voiceChannels.length > 0,
        af_people_count: e.partiedMembers.length,
        af_rich_presence: e.currentActivities.some((e) => {
            let { activity: t } = e;
            return (0, r.Z)(t);
        }),
        game_platform: e.currentActivities.length > 0 ? (0, i.Z)(e.currentActivities[0].activity) : null
    };
}
