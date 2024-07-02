n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250), a = n(470079), s = n(778947), l = n(534761), r = n(901461), o = n(453687), c = n(507418), d = n(348238), u = n(981631);
let h = a.memo(function (e) {
        let {
                message: t,
                channel: n,
                compact: l = !1,
                groupId: r,
                isGroupStart: o,
                usernameProfile: h,
                avatarProfile: p,
                setPopout: m,
                author: _,
                repliedMessage: f,
                roleIcon: E
            } = e, C = (0, d.wq)(t.author.id, n.id), g = (0, d.XO)(t, n, h, m), I = (0, d.R9)(p, m), x = a.useCallback(() => m({
                usernameProfile: !1,
                avatarProfile: !1,
                referencedUsernameProfile: !1
            }), [m]);
        return (0, i.jsx)(s.ZP, {
            guildId: n.guild_id,
            message: t,
            channel: n,
            repliedMessage: f,
            author: _,
            compact: l,
            subscribeToGroupId: r,
            showTimestampOnHover: !o && l && t.type !== u.uaV.REPLY,
            renderPopout: c.Z,
            showAvatarPopout: p,
            showUsernamePopout: h,
            onClickAvatar: I,
            onClickUsername: g,
            onContextMenu: C,
            onPopoutRequestClose: x,
            roleIcon: E
        });
    }), p = a.memo(l.Z);
function m(e) {
    let {
            messageProps: t,
            setPopout: n,
            messagePopouts: a,
            replyReference: s,
            author: l,
            repliedMessage: c,
            roleIcon: d
        } = e, {
            message: u,
            compact: m,
            channel: _,
            groupId: f
        } = t, {
            usernameProfile: E,
            avatarProfile: C
        } = a;
    if ((0, r.Z)(u))
        return null;
    let g = u.id === f;
    return g || m || null != s ? (0, i.jsx)(h, {
        message: u,
        channel: _,
        compact: m,
        subscribeToGroupId: f,
        isGroupStart: g,
        groupId: f,
        setPopout: n,
        usernameProfile: E,
        avatarProfile: C,
        author: l,
        repliedMessage: c,
        roleIcon: d
    }) : (0, i.jsx)(p, {
        compact: !0,
        timestamp: u.timestamp,
        isInline: !1,
        id: (0, o.Dv)(u),
        isVisibleOnlyOnHover: !0,
        cozyAlt: !0
    });
}
