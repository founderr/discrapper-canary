n.d(t, {
    Z: function () {
        return p;
    },
    r: function () {
        return i;
    }
}),
    n(653041);
var i,
    s,
    a = n(481060),
    l = n(620662),
    r = n(933557),
    o = n(377171),
    c = n(699516),
    u = n(594174),
    d = n(981631),
    h = n(689938);
function p(e) {
    let { canAttachFiles: t, canStartThreads: n, useSlate: i, canUseApplicationCommands: s, hasClips: p, channel: m, activities: _, newClipsCount: f, canPostPolls: E, canLaunchActivities: g, appContext: C } = e,
        I = [];
    return (
        t &&
            (I.push({
                type: 'UPLOAD_A_FILE',
                icon: a.FileUpIcon,
                display: h.Z.Messages.CHAT_ATTACH_UPLOAD_A_FILE
            }),
            I.push({
                type: 'UPLOAD_TEXT_AS_FILE',
                icon: a.FileUpIcon,
                display: h.Z.Messages.CHAT_ATTACH_UPLOAD_TEXT_AS_FILE
            })),
        p &&
            t &&
            C !== d.IlC.POPOUT &&
            I.push({
                type: 'CLIPS',
                icon: a.ClipsIcon,
                display: h.Z.Messages.CLIPS_SHARE_A_CLIP,
                badgeVal: f,
                badgeColor: o.Z.BG_BRAND
            }),
        n &&
            I.push({
                type: 'CREATE_THREAD',
                icon: a.ThreadPlusIcon,
                display: h.Z.Messages.CREATE_THREAD
            }),
        E &&
            I.push({
                type: 'POLL',
                icon: a.PollsIcon,
                display: h.Z.Messages.CREATE_POLL
            }),
        i &&
            s &&
            I.push({
                type: 'SLASH_COMMAND',
                icon: a.AppsIcon,
                display: h.Z.Messages.CHAT_ATTACH_USE_SLASH_COMMAND
            }),
        g &&
            I.push({
                type: 'ACTIVITY',
                icon: a.ActivitiesIcon,
                display: h.Z.Messages.EMBEDDED_ACTIVITIES_START_ACTIVITY_LABEL
            }),
        _.forEach((e) => {
            if (!(0, l.Z)(e, d.xjy.EMBEDDED))
                e.type === d.IIU.PLAYING &&
                    (0, l.Z)(e, d.xjy.JOIN) &&
                    I.push({
                        type: 'INVITE_TO_GAME',
                        icon: a.DpadIcon,
                        display: h.Z.Messages.CHAT_ATTACH_INVITE_TO_PLAY_GAME.format({
                            channel: (0, r.F6)(m, u.default, c.Z, !0),
                            game: null != e ? e.name : ''
                        }),
                        activity: e
                    }),
                    e.type === d.IIU.LISTENING &&
                        (0, l.Z)(e, d.xjy.SYNC) &&
                        I.push({
                            type: 'INVITE_TO_LISTEN',
                            icon: a.UserPlayIcon,
                            display: h.Z.Messages.CHAT_ATTACH_INVITE_TO_LISTEN.format({
                                channel: (0, r.F6)(m, u.default, c.Z, !0),
                                name: null != e ? e.name : ''
                            }),
                            activity: e
                        }),
                    e.type === d.IIU.WATCHING &&
                        (0, l.Z)(e, d.xjy.SYNC) &&
                        I.push({
                            type: 'INVITE_TO_WATCH',
                            icon: a.EyeIcon,
                            display: h.Z.Messages.CHAT_ATTACH_INVITE_TO_WATCH.format({
                                channel: (0, r.F6)(m, u.default, c.Z, !0),
                                name: null != e ? e.name : ''
                            }),
                            activity: e
                        });
        }),
        I
    );
}
((s = i || (i = {})).UPLOAD_A_FILE = 'UPLOAD_A_FILE'), (s.UPLOAD_TEXT_AS_FILE = 'UPLOAD_TEXT_AS_FILE'), (s.INVITE_TO_PLAY_GAME = 'INVITE_TO_GAME'), (s.INVITE_TO_LISTEN = 'INVITE_TO_LISTEN'), (s.INVITE_TO_WATCH = 'INVITE_TO_WATCH'), (s.CREATE_THREAD = 'CREATE_THREAD'), (s.SLASH_COMMAND = 'SLASH_COMMAND'), (s.CLIPS = 'CLIPS'), (s.POLL = 'POLL'), (s.ACTIVITY = 'ACTIVITY');
