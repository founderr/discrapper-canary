r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(627341);
var a = r(278074),
    s = r(90712),
    o = r(981631),
    l = r(388032);
function u(e) {
    let n = (0, s.Z)(e);
    return {
        text: (0, a.EQ)([e, null == n ? void 0 : n.type])
            .with([{ type: o.IIU.PLAYING }, o.ABu.XBOX], () => l.intl.formatToPlainString(l.t.Sq9xJy, { game: l.intl.string(l.t['Nfvo7+']) }))
            .with([{ type: o.IIU.PLAYING }, o.ABu.PLAYSTATION], () => l.intl.formatToPlainString(l.t.Sq9xJy, { game: l.intl.string(l.t.fFl4jo) }))
            .with([{ type: o.IIU.STREAMING }, o.ABu.TWITCH], () => l.intl.formatToPlainString(l.t['4CQq9f'], { name: l.intl.string(l.t.q4pBGx) }))
            .with([{ type: o.IIU.STREAMING }, o.ABu.YOUTUBE], () => l.intl.formatToPlainString(l.t['4CQq9f'], { name: l.intl.string(l.t.aS6cKy) }))
            .with([{ type: o.IIU.PLAYING }, a.P.any], () => l.intl.string(l.t.BMTj29))
            .with([{ type: o.IIU.STREAMING }, a.P.any], () => l.intl.string(l.t['Jpkr/v']))
            .with(
                [
                    {
                        type: o.IIU.LISTENING,
                        details: a.P.string
                    },
                    a.P.any
                ],
                () => l.intl.formatToPlainString(l.t['b+lA5+'], { name: e.name })
            )
            .with([{ type: o.IIU.LISTENING }, a.P.any], () => l.intl.string(l.t.dBISa2))
            .with(
                [
                    {
                        type: o.IIU.WATCHING,
                        details: a.P.string
                    },
                    a.P.any
                ],
                () => l.intl.formatToPlainString(l.t.mqdfDQ, { name: e.name })
            )
            .with([{ type: o.IIU.WATCHING }, a.P.any], () => l.intl.string(l.t.GpNXjI))
            .with(
                [
                    {
                        type: o.IIU.COMPETING,
                        details: a.P.string
                    },
                    a.P.any
                ],
                () => l.intl.formatToPlainString(l.t.oHF7Cg, { name: e.name })
            )
            .with([{ type: o.IIU.COMPETING }, a.P.any], () => l.intl.string(l.t.OzCsIC))
            .with([{ type: o.IIU.HANG_STATUS }, a.P.any], () => l.intl.string(l.t['04B8fH']))
            .otherwise(() => void 0),
        platformIcon: null == n ? void 0 : n.icon
    };
}
