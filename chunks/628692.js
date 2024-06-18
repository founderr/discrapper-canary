"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(399606),
  l = n(481060),
  u = n(596454),
  _ = n(315744),
  c = n(208049),
  d = n(135869),
  E = n(763296),
  I = n(22382),
  T = n(747071),
  h = n(338672);
t.Z = function(e) {
  let {
    soundId: t,
    jumbo: n = !1
  } = e, {
    currentPreviewRef: s
  } = r.useContext(d.Z), S = (0, a.e7)([E.Z], () => E.Z.getSoundById(t)), f = (null == S ? void 0 : S.emojiId) != null || (null == S ? void 0 : S.emojiName) != null, [N, A] = r.useState(!1), m = (0, _.P)("soundmoji_chat_mention"), O = r.useCallback(() => {
    var e;
    null == S && (0, c.w)();
    let n = new Audio((0, I.Z)(t));
    null != s.current && s.current.pause(), s.current = n, n.currentTime = 0, n.volume = (0, T.Z)(null !== (e = null == S ? void 0 : S.volume) && void 0 !== e ? e : .5), A(!0), n.play(), n.addEventListener("ended", () => {
      A(!1)
    }, {
      once: !0
    })
  }, [t, S, s, A]);
  return m ? null == S ? (0, i.jsxs)(l.Clickable, {
    title: "Risky Click",
    tag: "span",
    onClick: O,
    className: h.container,
    children: [(0, i.jsx)(l.VoiceNormalIcon, {
      size: "md",
      color: "currentColor",
      className: h.unknownSound
    }), (0, i.jsx)(l.Text, {
      tag: "span",
      variant: "text-md/normal",
      color: "none",
      className: h.text,
      children: "Unknown"
    })]
  }) : n ? (0, i.jsxs)(l.Clickable, {
    onClick: O,
    className: h.jumboContainer,
    children: [(0, i.jsx)("div", {
      className: o()(h.jumboOverlay, {
        [h.playing]: N
      }),
      children: (0, i.jsx)(l.CirclePlayIcon, {
        size: "md",
        color: "currentColor",
        className: h.__invalid_jumboPlayIcon
      })
    }), f && (0, i.jsx)(u.Z, {
      emojiId: null == S ? void 0 : S.emojiId,
      emojiName: null == S ? void 0 : S.emojiName,
      className: h.jumboEmoji
    }), (0, i.jsx)(l.Text, {
      tag: "span",
      variant: "text-lg/normal",
      color: "none",
      className: h.text,
      children: S.name
    })]
  }) : (0, i.jsxs)(l.Clickable, {
    tag: "span",
    onClick: O,
    className: h.container,
    children: [f && (0, i.jsx)(u.Z, {
      emojiId: null == S ? void 0 : S.emojiId,
      emojiName: null == S ? void 0 : S.emojiName,
      className: h.emoji
    }), (0, i.jsx)(l.Text, {
      tag: "span",
      variant: "text-md/normal",
      color: "none",
      className: h.text,
      children: S.name
    })]
  }) : null
}