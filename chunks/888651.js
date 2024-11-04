if (
    (n.d(t, {
        $: function () {
            return m;
        },
        Q: function () {
            return h;
        }
    }),
    12633 == n.j)
)
    var i = n(155281);
var l = n(222146),
    r = n(749210),
    s = n(430824),
    a = n(496675),
    o = n(979651),
    c = n(938475),
    u = n(981631);
let d = 'DRAGGABLE_USER';
function h(e) {
    return (0, i.G)(
        d,
        {
            canDrop(e) {
                var t, n;
                let { channel: i } = e,
                    l = i.getGuildId(),
                    r = null !== (n = null === (t = s.Z.getGuild(l)) || void 0 === t ? void 0 : t.maxVideoChannelUsers) && void 0 !== n ? n : -1,
                    d = c.ZP.countVoiceStatesForChannel(i.id),
                    h = null != l && o.Z.hasVideo(i.id) && r > 0 && d >= r + 1;
                return a.Z.can(u.Plq.MOVE_MEMBERS, i) && a.Z.can(u.Plq.CONNECT, i) && !h;
            },
            drop(e, t) {
                let { channel: n } = e,
                    i = o.Z.getVoiceStateForUser(t.getItem().user.id);
                (null == i ? void 0 : i.channelId) !== n.id && r.Z.setChannel(n.getGuildId(), t.getItem().user.id, n.id);
            }
        },
        (e, t) => ({
            connectUserDropTarget: e.dropTarget(),
            isUserOver: t.isOver() && t.canDrop()
        })
    )(e);
}
function m(e) {
    return (0, l.E)(
        d,
        {
            canDrag(e) {
                let { user: t, canDrag: n } = e;
                return null != n && n;
            },
            beginDrag(e) {
                let { user: t } = e;
                return { user: t };
            }
        },
        (e) => ({ connectUserDragSource: e.dragSource() })
    )(e);
}
