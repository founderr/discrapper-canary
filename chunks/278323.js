var i = r(544891),
    a = r(570140),
    s = r(367907),
    o = r(957730),
    l = r(592125),
    u = r(493683),
    c = r(904245),
    d = r(981631);
n.Z = {
    updateActivity(e) {
        let { applicationId: n, distributor: r, shareActivity: s, token: o = null, duration: l = 0, closed: u = !1, exePath: c = null, voiceChannelId: f = null, sessionId: _ = null, mediaSessionId: h = null } = e;
        a.Z.wait(() =>
            a.Z.dispatch({
                type: 'ACTIVITY_UPDATE_START',
                applicationId: n,
                duration: l,
                distributor: r
            })
        ),
            i.tn
                .post({
                    url: d.ANM.ACTIVITIES,
                    body: {
                        application_id: n,
                        token: o,
                        duration: l,
                        share_activity: s,
                        distributor: r,
                        closed: u,
                        exePath: c,
                        voice_channel_id: f,
                        session_id: _,
                        media_session_id: h
                    },
                    retries: 1,
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then((e) => {
                    let {
                        body: { token: i }
                    } = e;
                    a.Z.dispatch({
                        type: 'ACTIVITY_UPDATE_SUCCESS',
                        applicationId: n,
                        token: i,
                        duration: l,
                        distributor: r
                    });
                })
                .catch(() => {
                    a.Z.dispatch({
                        type: 'ACTIVITY_UPDATE_FAIL',
                        applicationId: n
                    });
                });
    },
    sendActivityInvite(e) {
        let { channelId: n, type: r, activity: i, content: a, location: u } = e,
            f = l.Z.getChannel(n);
        if (null == f) return Promise.resolve(null);
        let _ = o.ZP.parse(f, null != a ? a : '');
        return c.Z.sendMessage(f.id, _, !1, {
            activityAction: {
                type: r,
                activity: i
            }
        }).then(
            (e) => (
                s.ZP.trackWithMetadata(d.rMx.INVITE_SENT, {
                    location: u,
                    invite_type: i.type === d.IIU.LISTENING ? d.dAT.SPOTIFY : d.dAT.APPLICATION,
                    application_id: i.application_id,
                    guild_id: f.getGuildId(),
                    channel_id: f.id,
                    message_id: null != e ? e.body.id : null
                }),
                Promise.resolve(f)
            ),
            (e) => Promise.reject(e)
        );
    },
    sendActivityInviteUser(e) {
        let { userId: n, type: r, activity: i, content: a, location: s } = e;
        return u.Z.ensurePrivateChannel(n).then((e) =>
            this.sendActivityInvite({
                channelId: e,
                type: r,
                activity: i,
                content: a,
                location: s
            })
        );
    },
    async getJoinSecret(e, n, r, a, s) {
        let o = {};
        return (
            null != a && (o.channel_id = a),
            null != s && (o.message_id = s),
            (
                await i.tn.get({
                    url: d.ANM.USER_ACTIVITY_JOIN(e, n, r),
                    retries: 3,
                    query: o,
                    rejectWithError: !1
                })
            ).body.secret
        );
    }
};
