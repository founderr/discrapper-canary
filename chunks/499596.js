n.d(t, {
    Z: function () {
        return h;
    }
});
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    s = n(481060),
    a = n(884338),
    o = n(933557),
    c = n(471445),
    d = n(5192),
    u = n(388032),
    f = n(894305);
function h(e) {
    let { channel: t, users: n, selected: i = !1 } = e,
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
                    i = e.getAvatarURL(t.guild_id, 24);
                return (0, l.jsx)(s.TooltipContainer, {
                    text: n,
                    children: (0, l.jsx)('img', {
                        src: null != i ? i : void 0,
                        'aria-label': e.username,
                        alt: '',
                        className: f.avatar
                    })
                });
            },
            renderMoreUsers: (e) => {
                let i = (function (e, t) {
                    let n = t.id,
                        l = t.guild_id;
                    return e.length <= 1
                        ? null
                        : 2 === e.length
                          ? u.intl.formatToPlainString(u.t.MlgLFx, {
                                nickname0: d.ZP.getName(l, n, e[0]),
                                nickname1: d.ZP.getName(l, n, e[1])
                            })
                          : 3 === e.length
                            ? u.intl.formatToPlainString(u.t.sihix8, {
                                  nickname0: d.ZP.getName(l, n, e[0]),
                                  nickname1: d.ZP.getName(l, n, e[1]),
                                  nickname2: d.ZP.getName(l, n, e[2])
                              })
                            : u.intl.formatToPlainString(u.t['824IXV'], {
                                  nickname0: d.ZP.getName(l, n, e[0]),
                                  nickname1: d.ZP.getName(l, n, e[1]),
                                  remainingCount: e.length - 2
                              });
                })(n.slice(4), t);
                return (0, l.jsx)('div', {
                    children: (0, l.jsx)(s.TooltipContainer, {
                        text: i,
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
        className: r()(f.channelInfo, { [f.selected]: i }),
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
