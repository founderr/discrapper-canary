if (
    (n.d(t, {
        $: function () {
            return p;
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
    a = n(430824),
    s = n(496675),
    o = n(979651),
    c = n(938475),
    d = n(981631);
let u = 'DRAGGABLE_USER';
function h(e) {
    return (0, i.G)(
        u,
        {
            canDrop(e) {
                var t, n;
                let { channel: i } = e,
                    l = i.getGuildId(),
                    r = null !== (n = null === (t = a.Z.getGuild(l)) || void 0 === t ? void 0 : t.maxVideoChannelUsers) && void 0 !== n ? n : -1,
                    u = c.ZP.countVoiceStatesForChannel(i.id),
                    h = null != l && o.Z.hasVideo(i.id) && r > 0 && u >= r + 1;
                return s.Z.can(d.Plq.MOVE_MEMBERS, i) && s.Z.can(d.Plq.CONNECT, i) && !h;
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
function p(e) {
    return (0, l.E)(
        u,
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
