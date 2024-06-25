n.d(t, {
  a: function() {
    return E
  }
}), n(47120);
var l = n(392711),
  i = n.n(l),
  s = n(442837),
  a = n(544891),
  r = n(570140),
  o = n(375954),
  c = n(306680),
  u = n(748902),
  d = n(981631);
let h = new Set,
  m = null;

function E(e) {
  let {
    id: t
  } = e, {
    loaded: n,
    message: l,
    error: i
  } = (0, s.cj)([u.Z, o.Z, c.ZP], () => {
    let e = c.ZP.lastMessageId(t),
      n = u.Z.getMessageRequestPreview(t);
    if (null == n.message && null != e) {
      let n = o.Z.getMessage(t, e);
      if (null != n) return {
        loaded: !0,
        error: !1,
        message: n
      }
    }
    return n
  }, [t]), a = (0, s.e7)([u.Z], () => u.Z.shouldLoadMessageRequestPreview(t), [t]);
  return !n && null == l && a && function(e) {
    h.add(e), null == m && (m = setTimeout(p, 0))
  }(t), {
    loaded: n,
    error: i,
    message: l
  }
}
async function p() {
  try {
    for (; !i().isEmpty(h);) await g()
  } finally {
    m = null
  }
}
async function g() {
  let e = Array.from(h).slice(0, 25);
  try {
    let t = await a.tn.get({
      url: d.ANM.MESSAGE_REQUESTS_SUPPLEMENTAL_DATA,
      query: {
        channel_ids: e
      }
    });
    r.Z.dispatch({
      type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS",
      requestedChannelIds: e,
      supplementalData: t.body
    })
  } catch (t) {
    r.Z.dispatch({
      type: "LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR",
      requestedChannelIds: e
    })
  } finally {
    for (let t of e) h.delete(t)
  }
}