n.d(t, {
  Z: function() {
    return g
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(543882),
  u = n(592125),
  d = n(496675),
  h = n(981631),
  m = n(689938),
  E = n(654984);

function p(e) {
  let {
    isLoading: t,
    noText: n,
    previewText: i,
    className: s
  } = e;
  return (0, l.jsx)("div", {
    className: a()(E.emptyPreviewContainer, s),
    children: t ? (0, l.jsx)(o.Spinner, {}) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: E.emptyPreviewImage
      }), n ? null : (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "none",
        className: E.emptyPreviewText,
        children: null != i ? i : m.Z.Messages.STREAM_NO_PREVIEW
      })]
    })
  })
}

function g(e) {
  let {
    stream: t,
    className: n,
    noText: s = !1
  } = e, o = (0, r.e7)([u.Z], () => u.Z.getBasicChannel(t.channelId)), g = (0, r.e7)([d.Z], () => null != o && d.Z.canBasicChannel(h.S7T.CONNECT, o)), {
    url: f,
    isLoading: C
  } = (0, r.cj)([c.Z], () => ({
    url: g ? c.Z.getPreviewURL(t.guildId, t.channelId, t.ownerId) : null,
    isLoading: g && c.Z.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId)
  })), _ = i.useRef(C ? null : f);
  i.useEffect(() => {
    !C && (_.current = f)
  }, [f, C]);
  let I = null == f || C ? _.current : f;
  return null == I ? (0, l.jsx)(p, {
    className: n,
    isLoading: C,
    noText: s,
    previewText: g ? void 0 : m.Z.Messages.STREAM_NO_PERMISSION_CTA
  }) : (0, l.jsx)("div", {
    className: a()(n, E.root),
    children: (0, l.jsx)("img", {
      src: I,
      alt: "",
      className: E.image
    })
  })
}