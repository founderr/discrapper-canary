n.d(t, {
  Vk: function() {
    return E
  },
  g3: function() {
    return N
  },
  jF: function() {
    return _
  },
  jk: function() {
    return I
  },
  wt: function() {
    return T
  }
});
var s = n(990547),
  i = n(544891),
  l = n(283693),
  a = n(570140),
  r = n(695346),
  o = n(573261),
  c = n(140155),
  u = n(178480),
  d = n(981631);

function E(e) {
  a.Z.dispatch({
    type: "NOTIFICATION_CENTER_SET_ACTIVE",
    active: e
  })
}

function _() {
  a.Z.dispatch({
    type: "RESET_NOTIFICATION_CENTER"
  })
}
async function I(e, t) {
  if (c.Z.loading) return;
  await a.Z.dispatch({
    type: "LOAD_NOTIFICATION_CENTER_ITEMS"
  });
  let n = Math.ceil(c.Z.items.length / e.limit);
  try {
    let i = await o.Z.get({
      url: d.ANM.NOTIF_CENTER_ITEMS(),
      trackedActionData: {
        event: s.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
        properties: e => {
          var t;
          let s = ((null === (t = e.body) || void 0 === t ? void 0 : t.items) || []).map(e => e.type);
          return (0, l.iG)({
            page: n,
            items: s,
            item_count: s.length
          })
        }
      },
      query: {
        ...e
      }
    });
    null == t || t(), await a.Z.dispatch({
      type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
      items: i.body.items,
      cursor: i.body.cursor,
      hasMore: i.body.has_more
    })
  } catch (e) {
    null == t || t(), await a.Z.dispatch({
      type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE"
    })
  }
}

function T(e) {
  null != e.local_id ? function(e) {
    a.Z.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK",
      localIds: e
    })
  }([e.local_id]) : (0, u.RB)(e) ? function(e) {
    a.Z.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_ACK",
      optimistic: !0,
      ids: [e]
    })
  }(e.id) : m(e.id)
}
async function m(e) {
  try {
    a.Z.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_ACK",
      optimistic: !0,
      ids: [e]
    }), await i.tn.post({
      url: d.ANM.NOTIF_CENTER_ITEMS_ACK(e)
    })
  } catch (t) {
    a.Z.dispatch({
      type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE",
      ids: [e]
    })
  }
}
async function N(e) {
  let t = r.d$.getSetting();
  try {
    a.Z.dispatch({
      type: "NOTIFICATION_CENTER_ITEM_DELETE",
      id: e.id
    }), await o.Z.delete({
      url: d.ANM.NOTIF_CENTER_ITEMS(e.id),
      body: {
        item_type: (0, u.RB)(e) ? "mention" : "regular"
      },
      trackedActionData: {
        event: s.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
        properties: {
          notification_center_id: e.id,
          acked: (0, u.r)(e, t),
          item_type: e.type
        }
      }
    })
  } catch (t) {
    throw a.Z.dispatch({
      type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE",
      item: e
    }), t
  }
}