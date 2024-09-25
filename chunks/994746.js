n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(627341);
var i = n(278074),
    a = n(90712),
    o = n(981631),
    s = n(689938);
function l(e) {
    let t = (0, a.Z)(e);
    return {
        text: (0, i.EQ)([e, null == t ? void 0 : t.type])
            .with([{ type: o.IIU.PLAYING }, o.ABu.XBOX], () => s.Z.Messages.UNFORMATTED_PLAYING_GAME.format({ game: s.Z.Messages.XBOX }))
            .with([{ type: o.IIU.PLAYING }, o.ABu.PLAYSTATION], () => s.Z.Messages.UNFORMATTED_PLAYING_GAME.format({ game: s.Z.Messages.PLAYSTATION }))
            .with([{ type: o.IIU.STREAMING }, o.ABu.TWITCH], () => s.Z.Messages.UNFORMATTED_STREAMING.format({ name: s.Z.Messages.INTEGRATIONS_TWITCH }))
            .with([{ type: o.IIU.STREAMING }, o.ABu.YOUTUBE], () => s.Z.Messages.UNFORMATTED_STREAMING.format({ name: s.Z.Messages.INTEGRATIONS_YOUTUBE }))
            .with([{ type: o.IIU.PLAYING }, i.P.any], () => s.Z.Messages.USER_ACTIVITY_PLAYING)
            .with([{ type: o.IIU.STREAMING }, i.P.any], () => s.Z.Messages.USER_ACTIVITY_STREAMING)
            .with(
                [
                    {
                        type: o.IIU.LISTENING,
                        details: i.P.string
                    },
                    i.P.any
                ],
                () => s.Z.Messages.UNFORMATTED_LISTENING_TO.format({ name: e.name })
            )
            .with([{ type: o.IIU.LISTENING }, i.P.any], () => s.Z.Messages.USER_ACTIVITY_LISTENING_TO)
            .with(
                [
                    {
                        type: o.IIU.WATCHING,
                        details: i.P.string
                    },
                    i.P.any
                ],
                () => s.Z.Messages.UNFORMATTED_WATCHING.format({ name: e.name })
            )
            .with([{ type: o.IIU.WATCHING }, i.P.any], () => s.Z.Messages.USER_ACTIVITY_WATCHING)
            .with(
                [
                    {
                        type: o.IIU.COMPETING,
                        details: i.P.string
                    },
                    i.P.any
                ],
                () => s.Z.Messages.UNFORMATTED_COMPETING.format({ name: e.name })
            )
            .with([{ type: o.IIU.COMPETING }, i.P.any], () => s.Z.Messages.USER_ACTIVITY_COMPETING_IN)
            .with([{ type: o.IIU.HANG_STATUS }, i.P.any], () => s.Z.Messages.USER_ACTIVITY_CURRENTLY)
            .otherwise(() => null),
        icon: null == t ? void 0 : t.icon
    };
}
