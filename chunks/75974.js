"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
}), l("808653"), l("222007");
var n = l("37983"),
  s = l("884691"),
  a = l("627445"),
  r = l.n(a),
  i = l("917351"),
  u = l.n(i),
  o = l("268258"),
  d = l("446674"),
  c = l("77078"),
  f = l("42887"),
  m = l("326620"),
  S = l("32649"),
  h = l("782340"),
  C = l("389915"),
  E = l("770420"),
  p = l("926622");

function N(e) {
  let {
    selectedSource: t,
    onChangeVideoDeviceSource: l,
    onChangeAudioDevice: a
  } = e;
  r(null != t, "Camera capture device cannot be null");
  let i = (0, S.default)(),
    N = (0, d.useStateFromStores)([f.default], () => f.default.getInputDevices()),
    [g, _] = s.useState(function(e, t, l) {
      if (null != t && null != l) {
        let n = t.find(t => t.id === e);
        if (null == n) return;
        let s = u.reduce(l, (e, t) => (0, o.stringSimilarity)(n.name, t.name) > (0, o.stringSimilarity)(n.name, e.name) ? t : e);
        if (null != s) return s.id
      }
    }(t.id, i, N));
  return null != g && a(g), (0, n.jsx)(s.Fragment, {
    children: (0, n.jsxs)(c.FormItem, {
      title: "Capture Device",
      className: E.modalContent,
      children: [(0, n.jsx)(c.FormItem, {
        className: p.marginTop8,
        children: (0, n.jsxs)(m.default, {
          children: [(0, n.jsx)("span", {
            className: C.ellipsisText,
            children: t.name
          }), (0, n.jsx)(c.Button, {
            className: C.changeButton,
            color: c.Button.Colors.PRIMARY,
            size: c.Button.Sizes.SMALL,
            onClick: l,
            children: h.default.Messages.CHANGE
          })]
        })
      }), (0, n.jsx)(c.FormItem, {
        className: p.marginTop8,
        title: h.default.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
        children: (0, n.jsx)(c.SingleSelect, {
          value: g,
          className: p.marginaTop8,
          onChange: e => {
            _(e), a(e)
          },
          options: u.map(N, e => {
            let {
              id: t,
              name: l
            } = e;
            return {
              value: t,
              label: l
            }
          })
        })
      })]
    })
  })
}