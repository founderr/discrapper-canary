n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(833858),
    a = n(657305),
    o = n(841784),
    s = n(420660),
    l = n(981631),
    u = n(689938);
function c(e) {
    return {
        [l.IIU.STREAMING]: e ? u.Z.Messages.UNFORMATTED_STREAMING : u.Z.Messages.STREAMING,
        [l.IIU.LISTENING]: e ? u.Z.Messages.UNFORMATTED_LISTENING_TO : u.Z.Messages.LISTENING_TO,
        [l.IIU.WATCHING]: e ? u.Z.Messages.UNFORMATTED_WATCHING : u.Z.Messages.WATCHING,
        [l.IIU.COMPETING]: e ? u.Z.Messages.UNFORMATTED_COMPETING : u.Z.Messages.COMPETING
    };
}
function d(e, t, n) {
    let r = c(n);
    switch (e) {
        case l.IIU.LISTENING:
        case l.IIU.WATCHING:
        case l.IIU.COMPETING:
            return r[e].format({ name: t });
        case l.IIU.CUSTOM_STATUS:
        case l.IIU.HANG_STATUS:
            return null;
        case l.IIU.PLAYING:
        default:
            return n ? u.Z.Messages.UNFORMATTED_PLAYING_GAME.format({ game: t }) : u.Z.Messages.PLAYING_GAME.format({ game: t });
    }
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (null != e && e.type === l.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== l.IIU.PLAYING ? u.Z.Messages.SHARING_SCREEN : c(n)[l.IIU.STREAMING].format({ name: e.name });
    if (r && null != e && e.type === l.IIU.HANG_STATUS) return (0, i.O8)(e);
    if (null == e || null == e.name) return null;
    if ((0, s.Z)(e)) {
        let t = null != e.details && '' !== e.details ? e.details : e.name;
        return c(n)[l.IIU.STREAMING].format({ name: t });
    }
    return (0, o.Z)(e) ? (0, a.Z)(e.name) : d(e.type, e.name, n);
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0,
        i = arguments.length > 4 ? arguments[4] : void 0;
    if (Array.isArray(e)) {
        let a = e;
        null != t && (!i || !1 !== t.discoverable) && (a = [...a, null]);
        let o = null;
        for (let e of a) {
            let i = _(e, t, n, r);
            if (null != i)
                return {
                    activity: e,
                    activityText: i
                };
            (null == e ? void 0 : e.type) === l.IIU.CUSTOM_STATUS && null != e.emoji && (o = e);
        }
        return (null == o ? void 0 : o.emoji) != null
            ? {
                  activity: o,
                  activityText: null
              }
            : null;
    }
    return _(e, t, n, r);
}
