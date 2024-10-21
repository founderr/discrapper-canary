n.d(t, {
    Z: function () {
        return h;
    }
});
var l = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    r = n(481060),
    a = n(884338),
    o = n(933557),
    c = n(471445),
    d = n(5192),
    u = n(689938),
    f = n(532036);
function h(e) {
    let { channel: t, users: n, selected: s = !1 } = e,
        h = (0, o.ZP)(t),
        m = null;
    null != n &&
        n.length > 0 &&
        (m = (0, l.jsx)(a.Z, {
            guildId: t.guild_id,
            className: f.voiceUserList,
            users: n,
            renderUser: (e) => {
                if (null == e) return null;
                let n = d.ZP.getName(t.guild_id, t.id, e),
                    s = e.getAvatarURL(t.guild_id, 24);
                return (0, l.jsx)(r.TooltipContainer, {
                    text: n,
                    children: (0, l.jsx)('img', {
                        src: null != s ? s : void 0,
                        'aria-label': e.username,
                        alt: '',
                        className: f.avatar
                    })
                });
            },
            renderMoreUsers: (e) => {
                let s = (function (e, t) {
                    let n = t.id,
                        l = t.guild_id;
                    return e.length <= 1
                        ? null
                        : 2 === e.length
                          ? u.Z.Messages.GO_LIVE_MODAL_OVERFLOW_TWO_USERS.format({
                                nickname0: d.ZP.getName(l, n, e[0]),
                                nickname1: d.ZP.getName(l, n, e[1])
                            })
                          : 3 === e.length
                            ? u.Z.Messages.GO_LIVE_MODAL_OVERFLOW_THREE_USERS.format({
                                  nickname0: d.ZP.getName(l, n, e[0]),
                                  nickname1: d.ZP.getName(l, n, e[1]),
                                  nickname2: d.ZP.getName(l, n, e[2])
                              })
                            : u.Z.Messages.GO_LIVE_MODAL_OVERFLOW_FOUR_OR_MORE_USERS.format({
                                  nickname0: d.ZP.getName(l, n, e[0]),
                                  nickname1: d.ZP.getName(l, n, e[1]),
                                  remainingCount: e.length - 2
                              });
                })(n.slice(4), t);
                return (0, l.jsx)('div', {
                    children: (0, l.jsx)(r.TooltipContainer, {
                        text: s,
                        children: (0, l.jsx)('div', {
                            className: f.userListOverflow,
                            children: e
                        })
                    })
                });
            },
            max: 5,
            showUserPopout: !1
        }));
    let x = (0, c.KS)(t);
    return (0, l.jsxs)('div', {
        className: i()(f.channelInfo, { [f.selected]: s }),
        children: [
            (0, l.jsx)(x, { className: f.channelIcon }),
            (0, l.jsx)('div', {
                className: f.channelName,
                children: h
            }),
            m
        ]
    });
}
