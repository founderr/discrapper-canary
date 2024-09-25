var r = n(653041);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(998698),
    c = n(824203),
    d = n(713583),
    _ = n(920455),
    E = n(931981),
    f = n(407661),
    h = n(933283);
let p = (e) => {
    let { channel: t, type: n, activeCommand: r, pendingReply: a } = e,
        { activeCommandOption: o, activeCommandOptionStates: p } = (0, l.cj)([u.Z], () => ({
            activeCommandOption: u.Z.getActiveOption(t.id),
            activeCommandOptionStates: u.Z.getOptionStates(t.id)
        })),
        m = (0, E.e)(t),
        I = (0, c.__)(r, t, { location: 'ChannelTextAreaBars' }),
        T = [];
    return (null != r &&
        (I && T.push((0, i.jsx)(_.Z, { activeCommand: r })),
        T.push(
            (0, i.jsx)(d.Z, {
                activeCommand: r,
                activeOption: null != o ? o : null,
                optionStates: p,
                channelId: t.id
            })
        )),
    null != a &&
        T.push(
            (0, i.jsx)(f.Z, {
                reply: a,
                chatInputType: n
            })
        ),
    m && T.push((0, i.jsx)(E.V, {})),
    0 ===
        (T = T.map((e, t) => {
            let n = t === T.length - 1;
            return (0, i.jsx)(
                'div',
                {
                    className: s()({ [h.stackedAttachedBar]: !n }),
                    children: e
                },
                t
            );
        })).length)
        ? null
        : (0, i.jsx)('div', {
              className: h.attachedBars,
              children: T
          });
};
t.Z = a.memo(p);
