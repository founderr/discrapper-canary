n.d(t, {
    B: function () {
        return Z;
    }
});
var i = n(735250);
n(470079);
var l = n(582966),
    r = n(895162),
    a = n(433517),
    s = n(481060),
    o = n(749210),
    c = n(170509),
    u = n(740504),
    d = n(117984),
    h = n(398758),
    p = n(680089),
    f = n(592125),
    m = n(324067),
    _ = n(984933),
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
    let l = _.ZP.getChannels(e),
        r = null !== (i = null !== (n = l[_.sH].find((e) => e.channel.id === t)) && void 0 !== n ? n : l[_.Zb].find((e) => e.channel.id === t)) && void 0 !== i ? i : l[x.d4z.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return null == r ? void 0 : r.channel;
}
function Z(e) {
    return (0, l.G)(
        S,
        {
            drop(e, t) {
                let n;
                let l = I.Z.getGuildId(),
                    r = t.getItem(),
                    a = (0, E.if)(v(l, r.id), r.position, e.channel, e.position, r.channelList);
                if (null == a) return;
                let u = v(l, r.id);
                if (null == u) return;
                let h = m.Z.getCategories(l),
                    p = g.Z.getGuild(l);
                if (null == p) return;
                let _ = (0, E.Dn)(u, v(l, a.referenceId), a.parentId, h);
                if (0 !== _.length) {
                    if (l === x.I_8) {
                        (0, d.s3)(_);
                        return;
                    }
                    if (
                        ((_ = _.filter((e) => {
                            let { id: t } = e,
                                n = f.Z.getChannel(t);
                            if (null == n) return !1;
                            let i = f.Z.getChannel(n.parent_id);
                            return n.type === x.d4z.GUILD_CATEGORY || null == i ? C.Z.can(x.Plq.MANAGE_CHANNELS, p) : C.Z.can(x.Plq.MANAGE_CHANNELS, i);
                        })),
                        u.parent_id !== a.parentId &&
                            _.find((e) => {
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
                                        null != n && ((n.lock_permissions = !0), o.Z.batchChannelUpdate(l, _));
                                    },
                                    onCancel: () => {
                                        null != n && o.Z.batchChannelUpdate(l, _);
                                    }
                                })
                            );
                    } else o.Z.batchChannelUpdate(l, _);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    i = f.Z.getChannel(n.id);
                if (null == i) return !1;
                let l = (0, E.if)(f.Z.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if (I.Z.getGuildId() === x.I_8) return !0;
                let r = g.Z.getGuild(n.guildId);
                if (null == r) return !1;
                let a = f.Z.getChannel(l.parentId),
                    s = f.Z.getChannel(i.parent_id),
                    o = C.Z.can(x.Plq.MANAGE_CHANNELS, r),
                    c = null != s ? C.Z.can(x.Plq.MANAGE_CHANNELS, s) : o,
                    u = null != a ? C.Z.can(x.Plq.MANAGE_CHANNELS, a) : o;
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
                    if (I.Z.getGuildId() === x.I_8) return !0;
                    let l = g.Z.getGuild(t.getGuildId());
                    if (null == l) return !1;
                    if ((0, h.r1)(l.id) && C.Z.can(x.Plq.MANAGE_CHANNELS, l))
                        return (
                            'true' !== a.K.get('doNotShowReorderModal') &&
                                (0, s.openModalLazy)(async () => {
                                    let { default: e } = await n.e('82560').then(n.bind(n, 391312));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                }),
                            !1
                        );
                    if (t.type === x.d4z.GUILD_CATEGORY) return C.Z.can(x.Plq.MANAGE_CHANNELS, l) && !(0, h.r1)(l.id);
                    let r = f.Z.getChannel(t.parent_id);
                    return (null != r && C.Z.can(x.Plq.MANAGE_CHANNELS, r)) || (null == r && C.Z.can(x.Plq.MANAGE_CHANNELS, l));
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: i, type: l },
                            position: r
                        } = e,
                        a = I.Z.getGuildId(),
                        s = m.Z.getCategories(a);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: r,
                        parentId: n,
                        type: l,
                        channelList: (0, u.Z)(s._categories, s, (e) => {
                            let { channel: t } = e;
                            if (t.type === x.d4z.GUILD_CATEGORY && null != s[t.id] && 0 === s[t.id].length) return a === x.I_8 || (C.Z.can(x.Plq.MANAGE_CHANNELS, t) && C.Z.can(x.Plq.VIEW_CHANNEL, t));
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
