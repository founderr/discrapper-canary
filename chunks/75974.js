"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
}), l("808653"), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("627445"),
  r = l.n(s),
  i = l("917351"),
  u = l.n(i),
  o = l("268258"),
  d = l("446674"),
  c = l("77078"),
  f = l("42887"),
  m = l("326620"),
  S = l("32649"),
  E = l("782340"),
  C = l("809213"),
  h = l("961523"),
  g = l("890957");

function _(e) {
  let {
    selectedSource: t,
    onChangeVideoDeviceSource: l,
    onChangeAudioDevice: s
  } = e;
  r(null != t, "Camera capture device cannot be null");
  let i = (0, S.default)(),
    _ = (0, d.useStateFromStores)([f.default], () => f.default.getInputDevices()),
    [N, p] = n.useState(function(e, t, l) {
      if (null != t && null != l) {
        let a = t.find(t => t.id === e);
        if (null == a) return;
        let n = u.reduce(l, (e, t) => (0, o.stringSimilarity)(a.name, t.name) > (0, o.stringSimilarity)(a.name, e.name) ? t : e);
        if (null != n) return n.id
      }
    }(t.id, i, _));
  return null != N && s(N), (0, a.jsx)(n.Fragment, {
    children: (0, a.jsxs)(c.FormItem, {
      title: "Capture Device",
      className: h.modalContent,
      children: [(0, a.jsx)(c.FormItem, {
        className: g.marginTop8,
        children: (0, a.jsxs)(m.default, {
          children: [(0, a.jsx)("span", {
            className: C.ellipsisText,
            children: t.name
          }), (0, a.jsx)(c.Button, {
            className: C.changeButton,
            color: c.Button.Colors.PRIMARY,
            size: c.Button.Sizes.SMALL,
            onClick: l,
            children: E.default.Messages.CHANGE
          })]
        })
      }), (0, a.jsx)(c.FormItem, {
        className: g.marginTop8,
        title: E.default.Messages.GO_LIVE_FORM_LABEL_AUDIO_DEVICE,
        children: (0, a.jsx)(c.SingleSelect, {
          value: N,
          className: g.marginaTop8,
          onChange: e => {
            p(e), s(e)
          },
          options: u.map(_, e => {
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