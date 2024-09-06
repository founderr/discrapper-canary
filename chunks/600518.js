n.d(t, {
    v: function () {
        return s;
    },
    z: function () {
        return a;
    }
});
var i = n(570140);
function s(e) {
    i.Z.dispatch({
        type: 'STAGE_MUSIC_MUTE',
        muted: e
    });
}
function a(e) {
    i.Z.dispatch({
        type: 'STAGE_MUSIC_PLAY',
        play: e
    });
}
