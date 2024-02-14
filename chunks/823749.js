"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007"), n("70102");
var a, l, i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  u = n.n(r),
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
  _ = n("102432"),
  N = n("876189"),
  p = n("846325"),
  A = n("49111"),
  D = n("782340"),
  O = n("509252");
(l = a || (a = {})).READY = "ready", l.ENCODING_FAILED = "encoding-failed", l.ENCODING = "encoding", l.UPLOADING = "uploading";
let C = [{
  name: "audio",
  extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
}];

function b(e) {
  var t, n, a, l;
  let {
    guildId: r,
    sourceFile: o,
    existingSound: b,
    onClose: I,
    transitionState: x,
    showGuildPicker: M = !1
  } = e, [T, y] = s.useState(null !== (n = null !== (t = null == o ? void 0 : o.name) && void 0 !== t ? t : null == b ? void 0 : b.name) && void 0 !== n ? n : ""), [L, U] = s.useState(null !== (a = null == b ? void 0 : b.volume) && void 0 !== a ? a : 1), [R, w] = s.useState(null == b ? void 0 : b.emojiId), [P, j] = s.useState(null == b ? void 0 : b.emojiName), {
    file: F,
    loadAudioFromFile: V,
    maxVolume: k,
    setMaxVolume: B
  } = (0, v.useAudioTrimmerStore)(), [G, H] = s.useState(!1), [W, z] = s.useState(null), [Y, q] = s.useState(null), [X, K] = s.useState("ready"), [Z, J] = s.useState(r);
  async function Q(e) {
    try {
      await V(null != e ? e : null), K("ready"), z(null)
    } catch (e) {
      $(e)
    }
  }

  function $(e) {
    if (e instanceof f.default) z(e);
    else if (e instanceof Error) {
      let t = {
        status: 500,
        body: {
          message: e.message
        }
      };
      z(new f.default(t))
    } else z(new f.default(e))
  }
  s.useEffect(() => {
    (null == o ? void 0 : o.file) != null && e(o.file);
    async function e(e) {
      try {
        await V(e), K("ready"), z(null)
      } catch (e) {
        $(e)
      }
    }
  }, [null == o ? void 0 : o.file, V]);
  let ee = function(e) {
      switch (e) {
        case "encoding":
          return D.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
        case "encoding-failed":
          return D.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
        case "uploading":
          return D.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING
      }
      return null
    }(X),
    et = "uploading" === X || "encoding" === X,
    en = null != b,
    ea = T.length >= 2 && (en || null != F) && null != Z && function(e) {
      if (null == e) return !0;
      let t = (e.endMs - e.startMs) / 1e3;
      return t > 0 && t <= p.MAX_SOUND_LENGTH_SECONDS
    }(Y),
    el = s.useCallback(async (e, t) => {
      K("encoding");
      try {
        let n = await (0, _.trimAndEncodeAudio)(e, t);
        return K("ready"), n
      } catch (e) {
        throw K("encoding-failed"), e
      }
    }, []),
    ei = s.useCallback(async () => {
      if (null == F) return;
      d(null != Z, "Cannot submit soundboard sound with no guildId");
      let e = F;
      if (null != Y) {
        let t = await el(F, Y);
        if (null == t) return;
        e = t
      }
      let t = (0, _.getDataUrlFromFile)(e);
      K("uploading");
      try {
        await (0, _.uploadFileReadPromise)({
          readPromise: t,
          guildId: Z,
          name: T,
          volume: L,
          emojiId: R,
          emojiName: P
        }), K("ready")
      } catch (e) {
        throw new f.default(e)
      }
    }, [F, Z, T, el, Y, L, R, P]),
    es = s.useCallback(async () => {
      d(null != Z, "Cannot submit soundboard sound with no guildId"), H(!0), z(null);
      try {
        en ? await (0, E.updateSound)({
          guildId: Z,
          soundId: b.soundId,
          name: T,
          volume: L,
          emojiId: R,
          emojiName: P
        }) : await ei(), I()
      } catch (e) {
        $(e)
      } finally {
        K("ready"), H(!1), U(1), B(1)
      }
    }, [en, I, Z, b, T, L, R, P, ei, B]);
  s.useEffect(() => {
    V(null), g.default.track(A.AnalyticEvents.OPEN_MODAL, {
      type: "Soundboard Upload Sound",
      guild_id: Z
    })
  }, []), s.useEffect(() => {
    U(Math.min(L, k))
  }, [L, U, k]);
  let er = (0, i.jsx)(h.default, {
    guildId: Z,
    emojiId: R,
    emojiName: P,
    setEmojiId: w,
    setEmojiName: j,
    error: null == W ? void 0 : W.getFirstFieldErrorMessage("emoji"),
    isRequiredField: !1
  });
  return (0, i.jsxs)(c.ModalRoot, {
    transitionState: x,
    children: [(0, i.jsx)(c.ModalCloseButton, {
      onClick: I,
      className: O.modalClose
    }), (0, i.jsx)(c.ModalHeader, {
      className: O.headerContainer,
      separator: !1,
      children: (0, i.jsx)(c.Heading, {
        className: O.header,
        variant: "heading-xl/extrabold",
        children: en ? D.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : D.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
      })
    }), (0, i.jsxs)(c.ModalContent, {
      className: O.content,
      children: [null != W && !W.hasFieldErrors() && (0, i.jsx)(c.FormErrorBlock, {
        className: O.section,
        children: W.message
      }), M ? (0, i.jsx)(c.FormItem, {
        required: !0,
        className: O.section,
        title: D.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
        children: (0, i.jsx)(N.default, {
          value: Z,
          onChange: J
        })
      }) : null, (en || null != F) && (0, i.jsx)(S.default, {
        sound: b,
        volume: L,
        disabled: et,
        onChange: q
      }), en || null != o ? null : (0, i.jsx)(c.FormItem, {
        required: !0,
        error: null == W ? void 0 : W.getFirstFieldErrorMessage("sound"),
        className: O.section,
        title: D.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
        children: (0, i.jsx)(m.default, {
          filename: null !== (l = null == F ? void 0 : F.name) && void 0 !== l ? l : "",
          buttonText: D.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
          placeholder: D.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
          onFileSelect: Q,
          filters: C
        })
      }), (0, i.jsxs)("div", {
        className: O.multiInput,
        children: [(0, i.jsx)(c.FormItem, {
          required: !0,
          error: null == W ? void 0 : W.getFirstFieldErrorMessage("name"),
          className: u(O.section, O.halfInput),
          title: D.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
          children: (0, i.jsx)(c.TextInput, {
            placeholder: D.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
            value: T,
            onChange: y,
            maxLength: p.MAX_LENGTH_SOUND_NAME
          })
        }), er]
      }), (0, i.jsx)(c.FormItem, {
        error: null == W ? void 0 : W.getFirstFieldErrorMessage("volume"),
        className: O.section,
        title: D.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
        children: (0, i.jsx)(c.Slider, {
          initialValue: L,
          onValueChange: e => U(e),
          minValue: 0,
          maxValue: k
        })
      })]
    }), (0, i.jsxs)(c.ModalFooter, {
      children: [(0, i.jsx)(c.Button, {
        disabled: !ea,
        submitting: G,
        size: c.Button.Sizes.SMALL,
        onClick: es,
        children: en ? D.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : D.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
      }), (0, i.jsx)(c.Button, {
        disabled: G,
        onClick: I,
        size: c.Button.Sizes.SMALL,
        look: c.Button.Looks.LINK,
        color: c.Button.Colors.PRIMARY,
        children: D.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
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