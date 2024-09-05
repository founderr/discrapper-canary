n.d(t, {
    b6: function () {
        return E;
    },
    j3: function () {
        return f;
    },
    xC: function () {
        return h;
    }
}),
    n(47120);
var r = n(866442),
    i = n(503438),
    a = n(420660),
    s = n(168631),
    o = n(621853),
    l = n(981631),
    u = n(689938);
let c = (e) => (''.concat(e).length < 13 ? 1000 * e : e),
    d = (e) => {
        let t = Date.now() / 1000;
        return null != e.end
            ? _(t, c(e.end) / 1000)
            : null != e.start
              ? _(c(e.start) / 1000, t)
              : {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
    },
    _ = (e, t) => {
        let n = Math.max(t - e, 0),
            r = Math.floor(n) % 60,
            i = Math.floor(n / 60) % 60;
        return {
            hours: Math.floor(n / 3600) % 24,
            minutes: i,
            seconds: r
        };
    },
    E = (e) => {
        let t = d(e);
        return t.hours > 0 ? ''.concat(t.hours, ' hours') : t.minutes > 0 ? ''.concat(t.minutes, ' minutes') : ''.concat(t.seconds, ' seconds');
    },
    f = (e, t) => {
        var n;
        let i = o.Z.getUserProfile(e.id),
            [a, l] = null !== (n = null == i ? void 0 : i.themeColors) && void 0 !== n ? n : [],
            u = (0, s.V3)(a),
            c = null != l ? (0, r.Rf)(l) : t;
        return {
            color: c,
            theme: c === t ? 'dark' : u
        };
    },
    h = (e, t) =>
        (0, i.Z)(t)
            ? u.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_SPOTIFY.format({
                  username: e.username,
                  song: t.details,
                  artist: t.state
              })
            : t.type === l.IIU.PLAYING
              ? u.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
                    username: e.username,
                    activity: t.name
                })
              : t.type === l.IIU.WATCHING
                ? u.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
                      username: e.username,
                      activity: t.name
                  })
                : t.type === l.IIU.LISTENING
                  ? u.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
                        username: e.username,
                        activity: t.name
                    })
                  : (0, a.Z)(t) || t.type === l.IIU.STREAMING
                    ? u.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_STREAMING.format({
                          username: e.username,
                          activity: t.name
                      })
                    : u.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_BASE.format({
                          username: e.username,
                          activity: t.name
                      });
