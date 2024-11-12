n.d(t, {
    B: function () {
        return N;
    }
});
var i = n(200651);
n(192379);
var l = n(155281),
    r = n(222146),
    a = n(433517),
    o = n(481060),
    s = n(749210),
    c = n(170509),
    u = n(740504),
    d = n(117984),
    h = n(398758),
    p = n(680089),
    f = n(592125),
    m = n(324067),
    g = n(984933),
    C = n(430824),
    _ = n(496675),
    v = n(914010),
    x = n(281029),
    I = n(700785),
    b = n(981631);
let S = 'DRAGGABLE_GUILD_CHANNEL';
function E(e, t) {
    var n, i;
    if (null == e || null == t) return null;
    if (e !== b.I_8) return f.Z.getChannel(t);
    let l = g.ZP.getChannels(e),
        r = null !== (i = null !== (n = l[g.sH].find((e) => e.channel.id === t)) && void 0 !== n ? n : l[g.Zb].find((e) => e.channel.id === t)) && void 0 !== i ? i : l[b.d4z.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return null == r ? void 0 : r.channel;
}
function N(e) {
    return (0, l.G)(
        S,
        {
            drop(e, t) {
                let n;
                let l = v.Z.getGuildId(),
                    r = t.getItem(),
                    a = (0, x.if)(E(l, r.id), r.position, e.channel, e.position, r.channelList);
                if (null == a) return;
                let u = E(l, r.id);
                if (null == u) return;
                let h = m.Z.getCategories(l),
                    p = C.Z.getGuild(l);
                if (null == p) return;
                let g = (0, x.Dn)(u, E(l, a.referenceId), a.parentId, h);
                if (0 !== g.length) {
                    if (l === b.I_8) {
                        (0, d.s3)(g);
                        return;
                    }
                    if (
                        ((g = g.filter((e) => {
                            let { id: t } = e,
                                n = f.Z.getChannel(t);
                            if (null == n) return !1;
                            let i = f.Z.getChannel(n.parent_id);
                            return n.type === b.d4z.GUILD_CATEGORY || null == i ? _.Z.can(b.Plq.MANAGE_CHANNELS, p) : _.Z.can(b.Plq.MANAGE_CHANNELS, i);
                        })),
                        u.parent_id !== a.parentId &&
                            g.find((e) => {
                                if (e.id !== u.id) return !1;
                                let t = f.Z.getChannel(e.parent_id);
                                if (!(null != t && _.Z.can(b.Plq.MANAGE_ROLES, u) && _.Z.can(b.Plq.MANAGE_ROLES, t))) return !0;
                                let i = I.o4(u, t),
                                    l = I.o4(u, f.Z.getChannel(u.parent_id));
                                return ((null == u.parent_id && !i) || (l && !i)) && (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = f.Z.getChannel(n.parent_id);
                        null != e &&
                            (0, o.openModal)((t) =>
                                (0, i.jsx)(c.default, {
                                    ...t,
                                    channel: u,
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
                    i = f.Z.getChannel(n.id);
                if (null == i) return !1;
                let l = (0, x.if)(f.Z.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if (v.Z.getGuildId() === b.I_8) return !0;
                let r = C.Z.getGuild(n.guildId);
                if (null == r) return !1;
                let a = f.Z.getChannel(l.parentId),
                    o = f.Z.getChannel(i.parent_id),
                    s = _.Z.can(b.Plq.MANAGE_CHANNELS, r),
                    c = null != o ? _.Z.can(b.Plq.MANAGE_CHANNELS, o) : s,
                    u = null != a ? _.Z.can(b.Plq.MANAGE_CHANNELS, a) : s;
                return c && u;
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
            S,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if (v.Z.getGuildId() === b.I_8) return !0;
                    let l = C.Z.getGuild(t.getGuildId());
                    if (null == l) return !1;
                    if ((0, h.r1)(l.id) && _.Z.can(b.Plq.MANAGE_CHANNELS, l))
                        return (
                            'true' !== a.K.get('doNotShowReorderModal') &&
                                (0, o.openModalLazy)(async () => {
                                    let { default: e } = await n.e('82560').then(n.bind(n, 391312));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                }),
                            !1
                        );
                    if (t.type === b.d4z.GUILD_CATEGORY) return _.Z.can(b.Plq.MANAGE_CHANNELS, l) && !(0, h.r1)(l.id);
                    let r = f.Z.getChannel(t.parent_id);
                    return (null != r && _.Z.can(b.Plq.MANAGE_CHANNELS, r)) || (null == r && _.Z.can(b.Plq.MANAGE_CHANNELS, l));
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: i, type: l },
                            position: r
                        } = e,
                        a = v.Z.getGuildId(),
                        o = m.Z.getCategories(a);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: r,
                        parentId: n,
                        type: l,
                        channelList: (0, u.Z)(o._categories, o, (e) => {
                            let { channel: t } = e;
                            if (t.type === b.d4z.GUILD_CATEGORY && null != o[t.id] && 0 === o[t.id].length) return a === b.I_8 || (_.Z.can(b.Plq.MANAGE_CHANNELS, t) && _.Z.can(b.Plq.VIEW_CHANNEL, t));
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
