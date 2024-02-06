"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007"), n("70102");
var i, l, s = n("37983"),
  r = n("884691"),
  a = n("414456"),
  u = n.n(a),
  o = n("627445"),
  d = n.n(o),
  c = n("77078"),
  f = n("599417"),
  h = n("208548"),
  m = n("104945"),
  g = n("599110"),
  E = n("305122"),
  S = n("664113"),
  v = n("129722"),
  p = n("102432"),
  _ = n("876189"),
  N = n("846325"),
  C = n("49111"),
  I = n("782340"),
  O = n("921389");
(l = i || (i = {})).READY = "ready", l.ENCODING_FAILED = "encoding-failed", l.ENCODING = "encoding", l.UPLOADING = "uploading";
let A = [{
  name: "audio",
  extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
}];

function x(e) {
  var t, n, i, l;
  let {
    guildId: a,
    sourceFile: o,
    existingSound: x,
    onClose: D,
    transitionState: L,
    showGuildPicker: M = !1
  } = e, [b, R] = r.useState(null !== (n = null !== (t = null == o ? void 0 : o.name) && void 0 !== t ? t : null == x ? void 0 : x.name) && void 0 !== n ? n : ""), [T, U] = r.useState(null !== (i = null == x ? void 0 : x.volume) && void 0 !== i ? i : 1), [y, w] = r.useState(null == x ? void 0 : x.emojiId), [P, j] = r.useState(null == x ? void 0 : x.emojiName), {
    file: F,
    loadAudioFromFile: V,
    maxVolume: k,
    setMaxVolume: B
  } = (0, v.useAudioTrimmerStore)(), [H, G] = r.useState(!1), [W, K] = r.useState(null), [Z, z] = r.useState(null), [Y, q] = r.useState("ready"), [X, J] = r.useState(a);
  async function Q(e) {
    try {
      await V(null != e ? e : null), q("ready"), K(null)
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
  r.useEffect(() => {
    (null == o ? void 0 : o.file) != null && e(o.file);
    async function e(e) {
      try {
        await V(e), q("ready"), K(null)
      } catch (e) {
        $(e)
      }
    }
  }, [null == o ? void 0 : o.file, V]);
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
    }(Y),
    et = "uploading" === Y || "encoding" === Y,
    en = null != x,
    ei = b.length >= 2 && (en || null != F) && null != X && function(e) {
      if (null == e) return !0;
      let t = (e.endMs - e.startMs) / 1e3;
      return t > 0 && t <= N.MAX_SOUND_LENGTH_SECONDS
    }(Z),
    el = r.useCallback(async (e, t) => {
      q("encoding");
      try {
        let n = await (0, p.trimAndEncodeAudio)(e, t);
        return q("ready"), n
      } catch (e) {
        throw q("encoding-failed"), e
      }
    }, []),
    es = r.useCallback(async () => {
      if (null == F) return;
      d(null != X, "Cannot submit soundboard sound with no guildId");
      let e = F;
      if (null != Z) {
        let t = await el(F, Z);
        if (null == t) return;
        e = t
      }
      let t = (0, p.getDataUrlFromFile)(e);
      q("uploading");
      try {
        await (0, p.uploadFileReadPromise)({
          readPromise: t,
          guildId: X,
          name: b,
          volume: T,
          emojiId: y,
          emojiName: P
        }), q("ready")
      } catch (e) {
        throw new f.default(e)
      }
    }, [F, X, b, el, Z, T, y, P]),
    er = r.useCallback(async () => {
      d(null != X, "Cannot submit soundboard sound with no guildId"), G(!0), K(null);
      try {
        en ? await (0, E.updateSound)({
          guildId: X,
          soundId: x.soundId,
          name: b,
          volume: T,
          emojiId: y,
          emojiName: P
        }) : await es(), D()
      } catch (e) {
        $(e)
      } finally {
        q("ready"), G(!1), U(1), B(1)
      }
    }, [en, D, X, x, b, T, y, P, es, B]);
  r.useEffect(() => {
    V(null), g.default.track(C.AnalyticEvents.OPEN_MODAL, {
      type: "Soundboard Upload Sound",
      guild_id: X
    })
  }, []), r.useEffect(() => {
    U(Math.min(T, k))
  }, [T, U, k]);
  let ea = (0, s.jsx)(h.default, {
    guildId: X,
    emojiId: y,
    emojiName: P,
    setEmojiId: w,
    setEmojiName: j,
    error: null == W ? void 0 : W.getFirstFieldErrorMessage("emoji"),
    isRequiredField: !1
  });
  return (0, s.jsxs)(c.ModalRoot, {
    transitionState: L,
    children: [(0, s.jsx)(c.ModalCloseButton, {
      onClick: D,
      className: O.modalClose
    }), (0, s.jsx)(c.ModalHeader, {
      className: O.headerContainer,
      separator: !1,
      children: (0, s.jsx)(c.Heading, {
        className: O.header,
        variant: "heading-xl/extrabold",
        children: en ? I.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
      })
    }), (0, s.jsxs)(c.ModalContent, {
      className: O.content,
      children: [null != W && !W.hasFieldErrors() && (0, s.jsx)(c.FormErrorBlock, {
        className: O.section,
        children: W.message
      }), M ? (0, s.jsx)(c.FormItem, {
        required: !0,
        className: O.section,
        title: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
        children: (0, s.jsx)(_.default, {
          value: X,
          onChange: J
        })
      }) : null, (en || null != F) && (0, s.jsx)(S.default, {
        sound: x,
        volume: T,
        disabled: et,
        onChange: z
      }), en || null != o ? null : (0, s.jsx)(c.FormItem, {
        required: !0,
        error: null == W ? void 0 : W.getFirstFieldErrorMessage("sound"),
        className: O.section,
        title: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
        children: (0, s.jsx)(m.default, {
          filename: null !== (l = null == F ? void 0 : F.name) && void 0 !== l ? l : "",
          buttonText: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
          placeholder: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
          onFileSelect: Q,
          filters: A
        })
      }), (0, s.jsxs)("div", {
        className: O.multiInput,
        children: [(0, s.jsx)(c.FormItem, {
          required: !0,
          error: null == W ? void 0 : W.getFirstFieldErrorMessage("name"),
          className: u(O.section, O.halfInput),
          title: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
          children: (0, s.jsx)(c.TextInput, {
            placeholder: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
            value: b,
            onChange: R,
            maxLength: N.MAX_LENGTH_SOUND_NAME
          })
        }), ea]
      }), (0, s.jsx)(c.FormItem, {
        error: null == W ? void 0 : W.getFirstFieldErrorMessage("volume"),
        className: O.section,
        title: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
        children: (0, s.jsx)(c.Slider, {
          initialValue: T,
          onValueChange: e => U(e),
          minValue: 0,
          maxValue: k
        })
      })]
    }), (0, s.jsxs)(c.ModalFooter, {
      children: [(0, s.jsx)(c.Button, {
        disabled: !ei,
        submitting: H,
        size: c.Button.Sizes.SMALL,
        onClick: er,
        children: en ? I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
      }), (0, s.jsx)(c.Button, {
        disabled: H,
        onClick: D,
        size: c.Button.Sizes.SMALL,
        look: c.Button.Looks.LINK,
        color: c.Button.Colors.PRIMARY,
        children: I.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
      }), null != ee && (0, s.jsx)("div", {
        className: O.soundStateHint,
        children: (0, s.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ee
        })
      })]
    })]
  })
}