n.d(t, {
    B: function () {
        return Z;
    }
});
var i = n(200651);
n(192379);
var l = n(155281),
    a = n(222146),
    r = n(433517),
    s = n(481060),
    o = n(749210),
    c = n(170509),
    u = n(740504),
    d = n(117984),
    h = n(398758),
    p = n(680089),
    f = n(592125),
    _ = n(324067),
    m = n(984933),
    g = n(430824),
    C = n(496675),
    I = n(914010),
    E = n(281029),
    N = n(700785),
    x = n(981631);
let S = 'DRAGGABLE_GUILD_CHANNEL';
function v(e, t) {
    var n, i;
    if (null == e || null == t) return null;
    if (e !== x.I_8) return f.Z.getChannel(t);
    let l = m.ZP.getChannels(e),
        a = null !== (i = null !== (n = l[m.sH].find((e) => e.channel.id === t)) && void 0 !== n ? n : l[m.Zb].find((e) => e.channel.id === t)) && void 0 !== i ? i : l[x.d4z.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return null == a ? void 0 : a.channel;
}
function Z(e) {
    return (0, l.G)(
        S,
        {
            drop(e, t) {
                let n;
                let l = I.Z.getGuildId(),
                    a = t.getItem(),
                    r = (0, E.if)(v(l, a.id), a.position, e.channel, e.position, a.channelList);
                if (null == r) return;
                let u = v(l, a.id);
                if (null == u) return;
                let h = _.Z.getCategories(l),
                    p = g.Z.getGuild(l);
                if (null == p) return;
                let m = (0, E.Dn)(u, v(l, r.referenceId), r.parentId, h);
                if (0 !== m.length) {
                    if (l === x.I_8) {
                        (0, d.s3)(m);
                        return;
                    }
                    if (
                        ((m = m.filter((e) => {
                            let { id: t } = e,
                                n = f.Z.getChannel(t);
                            if (null == n) return !1;
                            let i = f.Z.getChannel(n.parent_id);
                            return n.type === x.d4z.GUILD_CATEGORY || null == i ? C.Z.can(x.Plq.MANAGE_CHANNELS, p) : C.Z.can(x.Plq.MANAGE_CHANNELS, i);
                        })),
                        u.parent_id !== r.parentId &&
                            m.find((e) => {
                                if (e.id !== u.id) return !1;
                                let t = f.Z.getChannel(e.parent_id);
                                if (!(null != t && C.Z.can(x.Plq.MANAGE_ROLES, u) && C.Z.can(x.Plq.MANAGE_ROLES, t))) return !0;
                                let i = N.o4(u, t),
                                    l = N.o4(u, f.Z.getChannel(u.parent_id));
                                return ((null == u.parent_id && !i) || (l && !i)) && (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = f.Z.getChannel(n.parent_id);
                        null != e &&
                            (0, s.openModal)((t) =>
                                (0, i.jsx)(c.default, {
                                    ...t,
                                    channel: u,
                                    category: e,
                                    onConfirm: () => {
                                        null != n && ((n.lock_permissions = !0), o.Z.batchChannelUpdate(l, m));
                                    },
                                    onCancel: () => {
                                        null != n && o.Z.batchChannelUpdate(l, m);
                                    }
                                })
                            );
                    } else o.Z.batchChannelUpdate(l, m);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    i = f.Z.getChannel(n.id);
                if (null == i) return !1;
                let l = (0, E.if)(f.Z.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if (I.Z.getGuildId() === x.I_8) return !0;
                let a = g.Z.getGuild(n.guildId);
                if (null == a) return !1;
                let r = f.Z.getChannel(l.parentId),
                    s = f.Z.getChannel(i.parent_id),
                    o = C.Z.can(x.Plq.MANAGE_CHANNELS, a),
                    c = null != s ? C.Z.can(x.Plq.MANAGE_CHANNELS, s) : o,
                    u = null != r ? C.Z.can(x.Plq.MANAGE_CHANNELS, r) : o;
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
        (0, a.E)(
            S,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if (I.Z.getGuildId() === x.I_8) return !0;
                    let l = g.Z.getGuild(t.getGuildId());
                    if (null == l) return !1;
                    if ((0, h.r1)(l.id) && C.Z.can(x.Plq.MANAGE_CHANNELS, l))
                        return (
                            'true' !== r.K.get('doNotShowReorderModal') &&
                                (0, s.openModalLazy)(async () => {
                                    let { default: e } = await n.e('82560').then(n.bind(n, 391312));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                }),
                            !1
                        );
                    if (t.type === x.d4z.GUILD_CATEGORY) return C.Z.can(x.Plq.MANAGE_CHANNELS, l) && !(0, h.r1)(l.id);
                    let a = f.Z.getChannel(t.parent_id);
                    return (null != a && C.Z.can(x.Plq.MANAGE_CHANNELS, a)) || (null == a && C.Z.can(x.Plq.MANAGE_CHANNELS, l));
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: i, type: l },
                            position: a
                        } = e,
                        r = I.Z.getGuildId(),
                        s = _.Z.getCategories(r);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: a,
                        parentId: n,
                        type: l,
                        channelList: (0, u.Z)(s._categories, s, (e) => {
                            let { channel: t } = e;
                            if (t.type === x.d4z.GUILD_CATEGORY && null != s[t.id] && 0 === s[t.id].length) return r === x.I_8 || (C.Z.can(x.Plq.MANAGE_CHANNELS, t) && C.Z.can(x.Plq.VIEW_CHANNEL, t));
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
