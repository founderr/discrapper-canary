s.d(n, {
  Z: function() {
    return u
  }
});
var t = s(735250);
s(470079);
var l = s(481060),
  o = s(596454),
  a = s(907040),
  i = s(273039),
  r = s(401227),
  d = s(185923);

function u(e) {
  let {
    className: n,
    emojiClassName: s,
    emoji: u,
    setEmoji: c,
    channel: N
  } = e, m = e => (n, s) => {
    var t, l;
    null != n && (null == n.id ? c({
      name: null !== (t = n.optionallyDiverseSequence) && void 0 !== t ? t : ""
    }) : c({
      id: n.id,
      name: null !== (l = n.originalName) && void 0 !== l ? l : n.name,
      animated: n.animated
    }), s && e())
  }, O = null == u || null == u.name ? null : () => {
    var e;
    return (0, t.jsx)(o.Z, {
      className: s,
      animated: null !== (e = u.animated) && void 0 !== e && e,
      emojiId: u.id,
      emojiName: u.name
    })
  };
  return (0, t.jsx)(i.Z, {
    hasSetEmoji: null != u && null != u.name,
    onClick: () => {
      c(null)
    },
    children: (0, t.jsx)(l.Popout, {
      position: "bottom",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, t.jsx)(a.Z, {
          closePopout: n,
          onSelectEmoji: m(n),
          pickerIntention: d.Hz.COMMUNITY_CONTENT,
          channel: N
        })
      },
      children: (e, s) => {
        let {
          isShown: l
        } = s;
        return (0, t.jsx)(r.Z, {
          ...e,
          tabIndex: 0,
          active: l,
          className: n,
          renderButtonContents: O
        })
      }
    })
  })
}