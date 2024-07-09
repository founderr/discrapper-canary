n(47120);
var r = n(147913), i = n(592125), a = n(699516), o = n(280006);
class s extends r.Z {
    intialize() {
        o.E.getCurrentConfig({ location: 'initializer' }, { autoTrackExposure: !1 });
    }
    handleChannelSelect(e) {
        let {channelId: t} = e, n = i.Z.getChannel(t);
        null != n && n.isGroupDM() && n.recipients.filter(e => a.Z.isBlocked(e)).length > 0 && o.E.getCurrentConfig({ location: 'channel_select' }, { autoTrackExposure: !0 }).showAsModal && n.blocked_user_warning_dismissed;
    }
    constructor(...e) {
        var t, n, r;
        super(...e), t = this, n = 'actions', r = { CHANNEL_SELECT: this.handleChannelSelect }, n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r;
    }
}
t.Z = new s();
