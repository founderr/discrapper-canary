"use strict";
n.r(t), n.d(t, {
  DefaultFallback: function() {
    return f
  },
  default: function() {
    return h
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("77078"),
  u = n("410348"),
  d = n("782340"),
  c = n("329422");

function f(e) {
  let {
    isLoading: t,
    noText: n,
    className: a
  } = e;
  return (0, l.jsx)("div", {
    className: i(c.emptyPreviewContainer, a),
    children: t ? (0, l.jsx)(o.Spinner, {}) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: c.emptyPreviewImage
      }), n ? null : (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: c.emptyPreviewText,
        children: d.default.Messages.STREAM_NO_PREVIEW
      })]
    })
  })
}

function h(e) {
  let {
    stream: t,
    className: n,
    noText: s = !1
  } = e, {
    url: o,
    isLoading: d
  } = (0, r.useStateFromStoresObject)([u.default], () => ({
    url: u.default.getPreviewURL(t.guildId, t.channelId, t.ownerId),
    isLoading: u.default.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId)
  })), h = a.useRef(d ? null : o);
  a.useEffect(() => {
    !d && (h.current = o)
  }, [o, d]);
  let m = null == o || d ? h.current : o;
  return null == m ? (0, l.jsx)(f, {
    className: n,
    isLoading: d,
    noText: s
  }) : (0, l.jsx)("div", {
    className: i(n, c.root),
    children: (0, l.jsx)("img", {
      src: m,
      alt: "",
      className: c.image
    })
  })
}