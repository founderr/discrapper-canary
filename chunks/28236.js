"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("65597"),
  o = n("77078"),
  u = n("430568"),
  d = n("277855"),
  c = n("305122"),
  m = n("462550"),
  f = n("235004"),
  h = n("520497"),
  p = n("812809"),
  g = n("948613"),
  E = n("368121"),
  C = n("653110"),
  v = function(e) {
    let {
      soundId: t,
      jumbo: n = !1
    } = e, {
      currentPreviewRef: s
    } = a.useContext(m.default), v = (0, r.default)([f.default], () => f.default.getSoundById(t)), I = (null == v ? void 0 : v.emojiId) != null || (null == v ? void 0 : v.emojiName) != null, [S, x] = a.useState(!1), _ = (0, d.useSoundmojiExperiment)("soundmoji_chat_mention"), N = a.useCallback(() => {
      var e;
      null == v && (0, c.maybeFetchSoundboardSounds)();
      let n = new Audio((0, h.default)(t));
      null != s.current && s.current.pause(), s.current = n, n.currentTime = 0, n.volume = (0, p.default)(null !== (e = null == v ? void 0 : v.volume) && void 0 !== e ? e : .5), x(!0), n.play(), n.addEventListener("ended", () => {
        x(!1)
      }, {
        once: !0
      })
    }, [t, v, s, x]);
    return _ ? null == v ? (0, l.jsxs)(o.Clickable, {
      title: "Risky Click",
      tag: "span",
      onClick: N,
      className: C.container,
      children: [(0, l.jsx)(E.default, {
        className: C.unknownSound
      }), (0, l.jsx)(o.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "none",
        className: C.text,
        children: "Unknown"
      })]
    }) : n ? (0, l.jsxs)(o.Clickable, {
      onClick: N,
      className: C.jumboContainer,
      children: [(0, l.jsx)("div", {
        className: i(C.jumboOverlay, {
          [C.playing]: S
        }),
        children: (0, l.jsx)(g.default, {
          className: C.jumboPlayIcon
        })
      }), I && (0, l.jsx)(u.default, {
        emojiId: null == v ? void 0 : v.emojiId,
        emojiName: null == v ? void 0 : v.emojiName,
        className: C.jumboEmoji
      }), (0, l.jsx)(o.Text, {
        tag: "span",
        variant: "text-lg/normal",
        color: "none",
        className: C.text,
        children: v.name
      })]
    }) : (0, l.jsxs)(o.Clickable, {
      tag: "span",
      onClick: N,
      className: C.container,
      children: [I && (0, l.jsx)(u.default, {
        emojiId: null == v ? void 0 : v.emojiId,
        emojiName: null == v ? void 0 : v.emojiName,
        className: C.emoji
      }), (0, l.jsx)(o.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "none",
        className: C.text,
        children: v.name
      })]
    }) : null
  }