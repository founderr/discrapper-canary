n.d(t, {
    B: function () {
        return Z;
    }
});
var i = n(200651);
n(192379);
var l = n(155281),
    r = n(222146),
    o = n(433517),
    a = n(481060),
    s = n(749210),
    c = n(170509),
    d = n(740504),
    u = n(117984),
    h = n(398758),
    p = n(680089),
    m = n(592125),
    f = n(324067),
    g = n(984933),
    C = n(430824),
    v = n(496675),
    _ = n(914010),
    x = n(281029),
    I = n(700785),
    b = n(981631);
let E = 'DRAGGABLE_GUILD_CHANNEL';
function S(e, t) {
    var n, i;
    if (null == e || null == t) return null;
    if (e !== b.I_8) return m.Z.getChannel(t);
    let l = g.ZP.getChannels(e),
        r = null !== (i = null !== (n = l[g.sH].find((e) => e.channel.id === t)) && void 0 !== n ? n : l[g.Zb].find((e) => e.channel.id === t)) && void 0 !== i ? i : l[b.d4z.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return null == r ? void 0 : r.channel;
}
function Z(e) {
    return (0, l.G)(
        E,
        {
            drop(e, t) {
                let n;
                let l = _.Z.getGuildId(),
                    r = t.getItem(),
                    o = (0, x.if)(S(l, r.id), r.position, e.channel, e.position, r.channelList);
                if (null == o) return;
                let d = S(l, r.id);
                if (null == d) return;
                let h = f.Z.getCategories(l),
                    p = C.Z.getGuild(l);
                if (null == p) return;
                let g = (0, x.Dn)(d, S(l, o.referenceId), o.parentId, h);
                if (0 !== g.length) {
                    if (l === b.I_8) {
                        (0, u.s3)(g);
                        return;
                    }
                    if (
                        ((g = g.filter((e) => {
                            let { id: t } = e,
                                n = m.Z.getChannel(t);
                            if (null == n) return !1;
                            let i = m.Z.getChannel(n.parent_id);
                            return n.type === b.d4z.GUILD_CATEGORY || null == i ? v.Z.can(b.Plq.MANAGE_CHANNELS, p) : v.Z.can(b.Plq.MANAGE_CHANNELS, i);
                        })),
                        d.parent_id !== o.parentId &&
                            g.find((e) => {
                                if (e.id !== d.id) return !1;
                                let t = m.Z.getChannel(e.parent_id);
                                if (!(null != t && v.Z.can(b.Plq.MANAGE_ROLES, d) && v.Z.can(b.Plq.MANAGE_ROLES, t))) return !0;
                                let i = I.o4(d, t),
                                    l = I.o4(d, m.Z.getChannel(d.parent_id));
                                return ((null == d.parent_id && !i) || (l && !i)) && (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = m.Z.getChannel(n.parent_id);
                        null != e &&
                            (0, a.openModal)((t) =>
                                (0, i.jsx)(c.default, {
                                    ...t,
                                    channel: d,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), s.Z.batchChannelUpdate(l, g));
                                    },
                                    onCancel: () => {
                                        null != n && s.Z.batchChannelUpdate(l, g);
                                    }
                                })
                            );
                    } else s.Z.batchChannelUpdate(l, g);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    i = m.Z.getChannel(n.id);
                if (null == i) return !1;
                let l = (0, x.if)(m.Z.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if (_.Z.getGuildId() === b.I_8) return !0;
                let r = C.Z.getGuild(n.guildId);
                if (null == r) return !1;
                let o = m.Z.getChannel(l.parentId),
                    a = m.Z.getChannel(i.parent_id),
                    s = v.Z.can(b.Plq.MANAGE_CHANNELS, r),
                    c = null != a ? v.Z.can(b.Plq.MANAGE_CHANNELS, a) : s,
                    d = null != o ? v.Z.can(b.Plq.MANAGE_CHANNELS, o) : s;
                return c && d;
            }
        },
        (e, t) => {
            let n = t.getItem();
            return null == n || null == n.isChannelDrag
                ? {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !1,
                      sortingType: null,
                      sortingPosition: null,
                      sortingParent: null
                  }
                : {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !0,
                      sortingType: n.type,
                      sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
                      sortingParent: t.isOver() && t.canDrop() ? n.parentId : null
                  };
        }
    )(
        (0, r.E)(
            E,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if (_.Z.getGuildId() === b.I_8) return !0;
                    let l = C.Z.getGuild(t.getGuildId());
                    if (null == l) return !1;
                    if ((0, h.r1)(l.id) && v.Z.can(b.Plq.MANAGE_CHANNELS, l))
                        return (
                            'true' !== o.K.get('doNotShowReorderModal') &&
                                (0, a.openModalLazy)(async () => {
                                    let { default: e } = await n.e('82560').then(n.bind(n, 391312));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                }),
                            !1
                        );
                    if (t.type === b.d4z.GUILD_CATEGORY) return v.Z.can(b.Plq.MANAGE_CHANNELS, l) && !(0, h.r1)(l.id);
                    let r = m.Z.getChannel(t.parent_id);
                    return (null != r && v.Z.can(b.Plq.MANAGE_CHANNELS, r)) || (null == r && v.Z.can(b.Plq.MANAGE_CHANNELS, l));
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: i, type: l },
                            position: r
                        } = e,
                        o = _.Z.getGuildId(),
                        a = f.Z.getCategories(o);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: r,
                        parentId: n,
                        type: l,
                        channelList: (0, d.Z)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            if (t.type === b.d4z.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length) return o === b.I_8 || (v.Z.can(b.Plq.MANAGE_CHANNELS, t) && v.Z.can(b.Plq.VIEW_CHANNEL, t));
                            return !p.Z.isCollapsed(t.parent_id);
                        }),
                        guildId: i
                    };
                }
            },
            (e) => ({
                connectChannelDragSource: e.dragSource(),
                connectDragPreview: e.dragPreview()
            })
        )(e)
    );
}
