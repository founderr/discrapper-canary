n.d(t, {
    Vk: function () {
        return _;
    },
    g3: function () {
        return T;
    },
    jF: function () {
        return E;
    },
    jk: function () {
        return f;
    },
    wt: function () {
        return h;
    }
});
var r = n(990547),
    i = n(544891),
    a = n(283693),
    o = n(570140),
    s = n(695346),
    l = n(573261),
    u = n(140155),
    c = n(178480),
    d = n(981631);
function _(e) {
    o.Z.dispatch({
        type: 'NOTIFICATION_CENTER_SET_ACTIVE',
        active: e
    });
}
function E() {
    o.Z.dispatch({ type: 'RESET_NOTIFICATION_CENTER' });
}
async function f(e, t) {
    if (u.Z.loading) return;
    await o.Z.dispatch({ type: 'LOAD_NOTIFICATION_CENTER_ITEMS' });
    let n = Math.ceil(u.Z.items.length / e.limit);
    try {
        let i = await l.Z.get({
            url: d.ANM.NOTIF_CENTER_ITEMS(),
            trackedActionData: {
                event: r.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
                properties: (e) => {
                    var t;
                    let r = ((null === (t = e.body) || void 0 === t ? void 0 : t.items) || []).map((e) => e.type);
                    return (0, a.iG)({
                        page: n,
                        items: r,
                        item_count: r.length
                    });
                }
            },
            query: { ...e }
        });
        null == t || t(),
            await o.Z.dispatch({
                type: 'LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS',
                items: i.body.items,
                cursor: i.body.cursor,
                hasMore: i.body.has_more
            });
    } catch (e) {
        null == t || t(), await o.Z.dispatch({ type: 'LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE' });
    }
}
function h(e) {
    null != e.local_id ? p([e.local_id]) : (0, c.RB)(e) ? I(e.id) : m(e.id);
}
function p(e) {
    o.Z.dispatch({
        type: 'NOTIFICATION_CENTER_ITEMS_LOCAL_ACK',
        localIds: e
    });
}
async function m(e) {
    try {
        o.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK',
            optimistic: !0,
            ids: [e]
        }),
            await i.tn.post({ url: d.ANM.NOTIF_CENTER_ITEMS_ACK(e) });
    } catch (t) {
        o.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK_FAILURE',
            ids: [e]
        });
    }
}
function I(e) {
    o.Z.dispatch({
        type: 'NOTIFICATION_CENTER_ITEMS_ACK',
        optimistic: !0,
        ids: [e]
    });
}
async function T(e) {
    let t = s.d$.getSetting();
    try {
        o.Z.dispatch({
            type: 'NOTIFICATION_CENTER_ITEM_DELETE',
            id: e.id
        }),
            await l.Z.delete({
                url: d.ANM.NOTIF_CENTER_ITEMS(e.id),
                body: { item_type: (0, c.RB)(e) ? 'mention' : 'regular' },
                trackedActionData: {
                    event: r.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
                    properties: {
                        notification_center_id: e.id,
                        acked: (0, c.r)(e, t),
                        item_type: e.type
                    }
                }
            });
    } catch (t) {
        throw (
            (o.Z.dispatch({
                type: 'NOTIFICATION_CENTER_ITEM_DELETE_FAILURE',
                item: e
            }),
            t)
        );
    }
}
