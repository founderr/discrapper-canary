var r = n(47120);
var i = n(147913),
    a = n(367907),
    o = n(728345),
    s = n(812206),
    l = n(574176),
    u = n(314897),
    c = n(592125),
    d = n(944486),
    _ = n(885110),
    E = n(649739),
    f = n(981631);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    return e.filter((e) => e.type === f.IIU.PLAYING && e.application_id).map((e) => e.application_id);
}
async function m(e) {
    await o.ZP.fetchApplications(e, !1);
}
async function I(e) {
    if (null == e) return;
    let t = c.Z.getChannel(e),
        { enableHangStatus: n } = l.n.getCurrentConfig({ location: 'GameActivityManager' }, { autoTrackExposure: !1 });
    if (null == t || !((0, E.Ku)('running_games_change', !1) || n)) return;
    let r = _.Z.getActivities();
    if (0 === r.length) return;
    let i = p([...r]);
    await m([...i]);
    let o = s.Z.getApplication(i[0]);
    null != o &&
        a.ZP.trackWithMetadata(f.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
            channel_id: e,
            guild_id: t.guild_id,
            game_name: o.name,
            user_id: u.default.getId()
        });
}
class T extends i.Z {
    handleRunningGamesChange() {
        I(d.Z.getVoiceChannelId());
    }
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        I(t);
    }
    constructor(...e) {
        super(...e),
            h(this, 'actions', {
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            });
    }
}
t.Z = new T();
