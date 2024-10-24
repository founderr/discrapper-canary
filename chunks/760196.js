n.d(t, {
    Z: function () {
        return p;
    },
    c: function () {
        return h;
    }
}),
    n(653041);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(998698),
    o = n(824203),
    l = n(713583),
    u = n(920455),
    c = n(931981),
    d = n(898188),
    _ = n(541716),
    E = n(407661),
    f = n(703130);
function h(e) {
    let { channel: t, type: n, activeCommand: h, pendingReply: p } = e,
        { activeCommandOption: I, activeCommandOptionStates: m } = (0, a.cj)([s.Z], () => ({
            activeCommandOption: s.Z.getActiveOption(t.id),
            activeCommandOptionStates: s.Z.getOptionStates(t.id)
        })),
        T = (0, c.e)(t),
        S = (0, o.__)(h, t, { location: 'ChannelTextAreaBars' });
    return i.useMemo(() => {
        let e = [],
            i = [];
        return (
            null != t.guild_id &&
                n !== _.I.SIDEBAR &&
                i.push(
                    (0, r.jsx)(d.Z, {
                        guildId: t.guild_id,
                        channel: t,
                        className: f.newMemberActionBar
                    })
                ),
            null != h &&
                (S && e.push((0, r.jsx)(u.Z, { activeCommand: h })),
                e.push(
                    (0, r.jsx)(l.Z, {
                        activeCommand: h,
                        activeOption: null != I ? I : null,
                        optionStates: m,
                        channelId: t.id
                    })
                )),
            null != p &&
                e.push(
                    (0, r.jsx)(E.Z, {
                        reply: p,
                        chatInputType: n
                    })
                ),
            T && e.push((0, r.jsx)(c.V, {})),
            {
                stacked: e,
                floating: i
            }
        );
    }, [h, I, m, t, p, T, S, n]);
}
function p(e) {
    let { bars: t } = e,
        n = t.stacked.map((e, t) => (0, r.jsx)('div', { children: e }, t)),
        a = t.floating.map((e, t) => (0, r.jsx)(i.Fragment, { children: e }, t));
    return 0 === n.length && 0 === a.length
        ? null
        : (0, r.jsxs)(i.Fragment, {
              children: [
                  a.length > 0 &&
                      (0, r.jsx)('div', {
                          className: f.floatingBars,
                          children: a
                      }),
                  n.length > 0 &&
                      (0, r.jsx)('div', {
                          className: f.stackedBars,
                          children: n
                      })
              ]
          });
}
