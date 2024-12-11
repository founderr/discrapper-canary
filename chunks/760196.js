n.d(t, {
    Z: function () {
        return p;
    },
    c: function () {
        return _;
    }
}),
    n(653041);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(998698),
    o = n(713583),
    l = n(931981),
    u = n(898188),
    c = n(541716),
    d = n(407661),
    f = n(553796);
function _(e) {
    let { channel: t, type: n, activeCommand: _, pendingReply: p } = e,
        { activeCommandOption: h, activeCommandOptionStates: m } = (0, a.cj)([s.Z], () => ({
            activeCommandOption: s.Z.getActiveOption(t.id),
            activeCommandOptionStates: s.Z.getOptionStates(t.id)
        })),
        g = (0, l.e)(t);
    return i.useMemo(() => {
        let e = [],
            i = [];
        return (
            null != t.guild_id &&
                n !== c.Ie.SIDEBAR &&
                i.push(
                    (0, r.jsx)(u.Z, {
                        guildId: t.guild_id,
                        channel: t,
                        className: f.newMemberActionBar
                    })
                ),
            null != _ &&
                e.push(
                    (0, r.jsx)(o.Z, {
                        activeCommand: _,
                        activeOption: null != h ? h : null,
                        optionStates: m,
                        channelId: t.id
                    })
                ),
            null != p &&
                e.push(
                    (0, r.jsx)(d.Z, {
                        reply: p,
                        chatInputType: n
                    })
                ),
            g && e.push((0, r.jsx)(l.V, {})),
            {
                stacked: e,
                floating: i
            }
        );
    }, [_, h, m, t, p, g, n]);
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
