"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007"), n("70102");
var a, r, i = n("37983"),
  l = n("884691"),
  s = n("414456"),
  u = n.n(s),
  o = n("627445"),
  d = n.n(o),
  c = n("77078"),
  f = n("599417"),
  h = n("208548"),
  m = n("104945"),
  g = n("599110"),
  p = n("305122"),
  v = n("664113"),
  S = n("129722"),
  C = n("102432"),
  E = n("876189"),
  _ = n("846325"),
  N = n("49111"),
  I = n("782340"),
  O = n("921389");
(r = a || (a = {})).READY = "ready", r.ENCODING_FAILED = "encoding-failed", r.ENCODING = "encoding", r.UPLOADING = "uploading";
let A = [{
  name: "audio",
  extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
}];

function D(e) {
  var t, n, a, r;
  let {
    guildId: s,
    sourceFile: o,
    existingSound: D,
    onClose: M,
    transitionState: y,
    showGuildPicker: b = !1
  } = e, [x, w] = l.useState(null !== (n = null !== (t = null == o ? void 0 : o.name) && void 0 !== t ? t : null == D ? void 0 : D.name) && void 0 !== n ? n : ""), [T, L] = l.useState(null !== (a = null == D ? void 0 : D.volume) && void 0 !== a ? a : 1), [R, U] = l.useState(null == D ? void 0 : D.emojiId), [P, j] = l.useState(null == D ? void 0 : D.emojiName), {
    file: k,
    loadAudioFromFile: F,
    maxVolume: B,
    setMaxVolume: V
  } = (0, S.useAudioTrimmerStore)(), [H, G] = l.useState(!1), [W, K] = l.useState(null), [z, Z] = l.useState(null), [q, Y] = l.useState("ready"), [Q, X] = l.useState(s);
  async function J(e) {
    try {
      await F(null != e ? e : null), Y("ready"), K(null)
    } catch (e) {
      $(e)
    }
  }

  function $(e) {
    if (e instanceof f.default) K(e);
    else if (e instanceof Error) {
      let t = {
        status: 500,
        body: {
          message: e.message
        }
      };
      K(new f.default(t))
    } else K(new f.default(e))
  }
  l.useEffect(() => {
    (null == o ? void 0 : o.file) != null && e(o.file);
    async function e(e) {
      try {
        await F(e), Y("ready"), K(null)
      } catch (e) {
        $(e)
      }
    }
  }, [null == o ? void 0 : o.file, F]);
  let ee = function(e) {
      switch (e) {
        case "encoding":
          return I.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
        case "encoding-failed":
          return I.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
        case "uploading":
          return I.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING
      }
      return null
    }(q),
    et = "uploading" === q || "encoding" === q,
    en = null != D,
    ea = x.length >= 2 && (en || null != k) && null != Q && function(e) {
      if (null == e) return !0;
      let t = (e.endMs - e.startMs) / 1e3;
      return t > 0 && t <= _.MAX_SOUND_LENGTH_SECONDS
    }(z),
    er = l.useCallback(async (e, t) => {
      Y("encoding");
      try {
        let n = await (0, C.trimAndEncodeAudio)(e, t);
        return Y("ready"), n
      } catch (e) {
        throw Y("encoding-failed"), e
      }
    }, []),
    ei = l.useCallback(async () => {
      if (null == k) return;
      d(null != Q, "Cannot submit soundboard sound with no guildId");
      let e = k;
      if (null != z) {
        let t = await er(k, z);
        if (null == t) return;
        e = t
      }
      let t = (0, C.getDataUrlFromFile)(e);
      Y("uploading");
      try {
        await (0, C.uploadFileReadPromise)({
          readPromise: t,
          guildId: Q,
          name: x,
          volume: T,
          emojiId: R,
          emojiName: P
        }), Y("ready")
      } catch (e) {
        throw new f.default(e)
      }
    }, [k, Q, x, er, z, T, R, P]),
    el = l.useCallback(async () => {
      d(null != Q, "Cannot submit soundboard sound with no guildId"), G(!0), K(null);
      try {
        en ? await (0, p.updateSound)({
          guildId: Q,
          soundId: D.soundId,
          name: x,
          volume: T,
          emojiId: R,
          emojiName: P
        }) : await ei(), M()
      } catch (e) {
        $(e)
      } finally {
        Y("ready"), G(!1), L(1), V(1)
      }
    }, [en, M, Q, D, x, T, R, P, ei, V]);
  l.useEffect(() => {
    F(null), g.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: "Soundboard Upload Sound",
      guild_id: Q
    })
  }, []), l.useEffect(() => {
    L(Math.min(T, B))
  }, [T, L, B]);
  let es = (0, i.jsx)(h.default, {
    guildId: Q,
    emojiId: R,
    emojiName: P,
    setEmojiId: U,
    setEmojiName: j,
    error: null == W ? void 0 : W.getFirstFieldErrorMessage("emoji"),
    isRequiredField: !1
  });
  return (0, i.jsxs)(c.ModalRoot, {
    transitionState: y,
    children: [(0, i.jsx)(c.ModalCloseButton, {
      onClick: M,
      className: O.modalClose
    }), (0, i.jsx)(c.ModalHeader, {
      className: O.headerContainer,
      separator: !1,
      children: (0, i.jsx)(c.Heading, {
        className: O.header,
        variant: "heading-xl/extrabold",
        children: en ? I.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
      })
    }), (0, i.jsxs)(c.ModalContent, {
      className: O.content,
      children: [null != W && !W.hasFieldErrors() && (0, i.jsx)(c.FormErrorBlock, {
        className: O.section,
        children: W.message
      }), b ? (0, i.jsx)(c.FormItem, {
        required: !0,
        className: O.section,
        title: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
        children: (0, i.jsx)(E.default, {
          value: Q,
          onChange: X
        })
      }) : null, (en || null != k) && (0, i.jsx)(v.default, {
        sound: D,
        volume: T,
        disabled: et,
        onChange: Z
      }), en || null != o ? null : (0, i.jsx)(c.FormItem, {
        required: !0,
        error: null == W ? void 0 : W.getFirstFieldErrorMessage("sound"),
        className: O.section,
        title: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
        children: (0, i.jsx)(m.default, {
          filename: null !== (r = null == k ? void 0 : k.name) && void 0 !== r ? r : "",
          buttonText: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
          placeholder: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
          onFileSelect: J,
          filters: A
        })
      }), (0, i.jsxs)("div", {
        className: O.multiInput,
        children: [(0, i.jsx)(c.FormItem, {
          required: !0,
          error: null == W ? void 0 : W.getFirstFieldErrorMessage("name"),
          className: u(O.section, O.halfInput),
          title: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
          children: (0, i.jsx)(c.TextInput, {
            placeholder: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
            value: x,
            onChange: w,
            maxLength: _.MAX_LENGTH_SOUND_NAME
          })
        }), es]
      }), (0, i.jsx)(c.FormItem, {
        error: null == W ? void 0 : W.getFirstFieldErrorMessage("volume"),
        className: O.section,
        title: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
        children: (0, i.jsx)(c.Slider, {
          initialValue: T,
          onValueChange: e => L(e),
          minValue: 0,
          maxValue: B
        })
      })]
    }), (0, i.jsxs)(c.ModalFooter, {
      children: [(0, i.jsx)(c.Button, {
        disabled: !ea,
        submitting: H,
        size: c.Button.Sizes.SMALL,
        onClick: el,
        children: en ? I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
      }), (0, i.jsx)(c.Button, {
        disabled: H,
        onClick: M,
        size: c.Button.Sizes.SMALL,
        look: c.Button.Looks.LINK,
        color: c.Button.Colors.PRIMARY,
        children: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
      }), null != ee && (0, i.jsx)("div", {
        className: O.soundStateHint,
        children: (0, i.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ee
        })
      })]
    })]
  })
}