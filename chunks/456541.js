n.d(t, {
  P: function() {
    return h
  }
}), n(47120);
var l = n(470079),
  i = n(392711),
  s = n.n(i),
  r = n(367907),
  a = n(770471),
  o = n(158631),
  u = n(143614),
  c = n(981631);
let d = (e, t) => [...t].filter(t => !e.has(t)),
  h = () => {
    let e = (0, u.Z)(),
      t = (0, o.ZP)(),
      {
        canViewBroadcasts: n
      } = a.Z.useExperiment({
        location: "Home Button"
      }, {
        autoTrackExposure: !1
      }),
      i = l.useRef(t),
      h = l.useRef(new Set);
    l.useEffect(() => {
      let l = new Set(e.map(e => e.channelId)),
        a = !s().isEqual(h.current, l);
      if (n && a) {
        let n = d(h.current, l);
        r.ZP.trackWithMetadata(c.rMx.NEW_BROADCAST_DETECTED, {
          active_broadcast_highlight: e.length > 0,
          num_active_broadcasts: e.length,
          is_broadcasting: t,
          prev_is_broadcasting: i.current,
          prev_num_active_broadcasts: h.current.size,
          new_broadcast_channel_ids: n,
          broadcast_channel_ids: [...l]
        }), h.current = l, i.current = t
      }
    }, [e, t, n])
  }