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
var s = n(222146),
    a = n(749210),
    l = n(430824),
    r = n(496675),
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
                    s = i.getGuildId(),
                    a = null !== (n = null === (t = l.Z.getGuild(s)) || void 0 === t ? void 0 : t.maxVideoChannelUsers) && void 0 !== n ? n : -1,
                    d = c.ZP.countVoiceStatesForChannel(i.id),
                    h = null != s && o.Z.hasVideo(i.id) && a > 0 && d >= a + 1;
                return r.Z.can(u.Plq.MOVE_MEMBERS, i) && r.Z.can(u.Plq.CONNECT, i) && !h;
            },
            drop(e, t) {
                let { channel: n } = e,
                    i = o.Z.getVoiceStateForUser(t.getItem().user.id);
                (null == i ? void 0 : i.channelId) !== n.id && a.Z.setChannel(n.getGuildId(), t.getItem().user.id, n.id);
            }
        },
        (e, t) => ({
            connectUserDropTarget: e.dropTarget(),
            isUserOver: t.isOver() && t.canDrop()
        })
    )(e);
}
function p(e) {
    return (0, s.E)(
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
