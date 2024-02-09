"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  a = n("414456"),
  r = n.n(a),
  s = n("748820"),
  u = n("446674"),
  o = n("819855"),
  d = n("77078"),
  c = n("385976"),
  I = n("208548"),
  _ = n("104945"),
  E = n("8731"),
  f = n("161778"),
  T = n("305961"),
  S = n("697218"),
  D = n("145131"),
  N = n("68238"),
  A = n("599110"),
  m = n("993105"),
  h = n("701909"),
  L = n("103603"),
  g = n("467094"),
  R = n("161585"),
  G = n("24373"),
  p = n("41170"),
  U = n("560241"),
  M = n("49111"),
  v = n("782340"),
  C = n("735193"),
  O = n("357450"),
  P = n("348919");
let w = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
  y = [{
    name: "Sticker file",
    extensions: ["json", "png", "apng", "gif"]
  }];

function b(e, t) {
  A.default.track(M.AnalyticEvents.STICKER_UPLOAD_COMPLETED, {
    successful: e,
    error: null != t ? t : ""
  })
}
let x = e => {
    let {
      stickerPreview: t
    } = e;
    return (0, i.jsxs)("div", {
      className: C.preview,
      children: [(0, i.jsx)("div", {
        className: C.previewDark,
        children: null != t ? t : (0, i.jsx)("img", {
          src: O,
          alt: v.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
        })
      }), (0, i.jsx)("div", {
        className: C.previewLight,
        children: null != t ? t : (0, i.jsx)("img", {
          src: P,
          alt: v.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
        })
      })]
    })
  },
  B = e => {
    let {
      sticker: t,
      previewData: n,
      onStickerError: l
    } = e;
    if (null != t) return (0, i.jsx)(p.default, {
      size: 160,
      sticker: t
    });
    if (null == n) return null;
    let {
      id: a,
      formatType: r,
      content: s
    } = n;
    return (0, i.jsx)(p.default, {
      assetData: s,
      fileUri: s,
      size: 160,
      sticker: {
        name: a,
        description: "",
        id: a,
        pack_id: "",
        format_type: r
      },
      onError: l
    }, a)
  };
async function H(e) {
  let t = await (0, L.readFileAsBase64)(e),
    n = new Image;
  n.src = t, await n.decode();
  let i = (0, E.downsizeImage)(n, 320, 320);
  return (0, L.dataUrlToFile)(i, e.name, e.type)
}

function F(e) {
  var t, n, a, E, p, O, P, F;
  let {
    transitionState: V,
    onClose: j,
    guildId: K,
    sticker: Y
  } = e, k = (0, u.useStateFromStores)([f.default], () => f.default.theme), z = (0, u.useStateFromStores)([c.default], () => (null == Y ? void 0 : Y.tags) != null ? c.default.getCustomEmojiById(Y.tags) : null), W = null !== (n = null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n, Z = W ? U.STAFF_MAX_STICKER_FILE_SIZE : U.MAX_STICKER_FILE_SIZE, [X, J] = l.useState(null), [q, Q] = l.useState(null !== (a = null == Y ? void 0 : Y.name) && void 0 !== a ? a : ""), [$, ee] = l.useState({
    file: null,
    filename: null !== (E = (0, G.getFilenameForSticker)(Y)) && void 0 !== E ? E : ""
  }), [et, en] = l.useState(null == z ? void 0 : z.id), [ei, el] = l.useState(null !== (p = null == z ? void 0 : z.name) && void 0 !== p ? p : null == Y ? void 0 : Y.tags), [ea, er] = l.useState(null !== (O = null == Y ? void 0 : Y.description) && void 0 !== O ? O : ""), [es, eu] = l.useState(!1), [eo, ed] = l.useState(null), ec = (0, u.useStateFromStores)([T.default], () => T.default.getGuild(K)), eI = (null == ec ? void 0 : ec.hasFeature(M.GuildFeatures.PARTNERED)) || (null == ec ? void 0 : ec.hasFeature(M.GuildFeatures.VERIFIED)), e_ = null != Y, eE = e_ || (null == $ ? void 0 : $.file) != null, ef = 0 === ea.length || ea.length >= 2 && ea.length <= 100, eT = !es && (null == eo ? void 0 : eo.isBlocking) !== !0 && q.length >= 2 && (null != et || null != ei || (null == Y ? void 0 : Y.tags) != null && (null == Y ? void 0 : Y.tags) !== "") && eE && ef, eS = async e => {
    var t;
    if (null == e) return;
    let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
    if (!w.has(n)) {
      ed({
        message: v.default.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
        isBlocking: !0
      });
      return
    }
    let i = e;
    if ("image/png" === n && e.size > Z && !await (0, L.isPNGAnimated)(e)) {
      i = await H(e);
      let t = i.size > Z;
      A.default.track(M.AnalyticEvents.STICKER_FILE_RESIZED, {
        original_file_size_bytes: e.size,
        resized_file_size_bytes: i.size,
        resized_file_too_big: t
      })
    }
    if (i.size > Z) {
      ed({
        message: v.default.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
          maxSize: (0, m.formatKbSize)(Z, {
            useKibibytes: !0
          })
        }),
        isBlocking: null == $.file
      }), A.default.track(M.AnalyticEvents.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        size: i.size,
        filetype: n
      });
      return
    }
    let l = (0, G.getStickerFormatTypeFromFileType)(i.type),
      a = l === R.StickerFormat.LOTTIE;
    if (a) {
      if (!eI) {
        ed({
          message: v.default.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
            articleURL: h.default.getArticleURL(M.HelpdeskArticles.STICKERS_UPLOAD)
          }),
          isBlocking: !0
        });
        return
      }
      let e = new FileReader;
      e.addEventListener("load", () => {
        J({
          id: (0, s.v4)(),
          formatType: l,
          content: e.result
        }), ed(null)
      }), e.readAsText(i)
    } else {
      let e = await (0, L.readFileAsBase64)(i);
      J({
        id: (0, s.v4)(),
        formatType: l,
        content: e
      }), ed(null)
    }
    ee({
      file: i,
      filename: i.name
    })
  }, eD = async e => {
    var t, n, i, l, a, r;
    e.preventDefault();
    let s = null !== (n = null !== (t = null != et ? et : ei) && void 0 !== t ? t : null == Y ? void 0 : Y.tags) && void 0 !== n ? n : "";
    try {
      if (eu(!0), e_) await (0, g.updateGuildSticker)(K, null !== (i = null == Y ? void 0 : Y.id) && void 0 !== i ? i : "", {
        name: q,
        tags: s,
        description: ea
      });
      else {
        ;
        let e = new FormData;
        e.append("name", q), e.append("tags", s), e.append("description", ea), (null == $ ? void 0 : $.file) != null && e.append("file", $.file), r = null !== (a = null === (l = $.file) || void 0 === l ? void 0 : l.type) && void 0 !== a ? a : "", A.default.track(M.AnalyticEvents.STICKER_UPLOAD_STARTED, {
          filetype: r
        }), await (0, g.createGuildSticker)(K, e), b(!0)
      }
      j()
    } catch (e) {
      ed({
        message: e.body.message,
        isBlocking: !1
      }), b(!1, e.body.message)
    } finally {
      eu(!1)
    }
  }, eN = l.useCallback(() => {
    ed({
      message: v.default.Messages.GUILD_STICKER_INVALID_STICKER,
      isBlocking: !0
    })
  }, []), eA = B({
    sticker: Y,
    previewData: X,
    onStickerError: eN
  }), em = eI ? v.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : v.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
  return (0, i.jsxs)(d.ModalRoot, {
    transitionState: V,
    "aria-labelledby": "STICKER_UPLOAD_MODAL",
    className: C.modal,
    children: [(0, i.jsx)(d.ModalCloseButton, {
      onClick: j,
      className: C.modalClose
    }), (0, i.jsxs)("form", {
      onSubmit: eD,
      className: C.form,
      children: [(0, i.jsxs)(d.ModalContent, {
        className: C.modalContent,
        children: [(0, i.jsxs)(d.ModalHeader, {
          direction: D.default.Direction.VERTICAL,
          separator: !1,
          className: C.modalHeader,
          children: [(0, i.jsx)(d.Heading, {
            variant: "heading-xl/semibold",
            className: C.modalHeaderTitle,
            children: v.default.Messages.GUILD_STICKER_UPLOAD_TITLE
          }), (0, i.jsx)(d.Text, {
            variant: "text-md/normal",
            children: em.format({
              fileSize: (0, m.formatKbSize)(U.MAX_STICKER_FILE_SIZE, {
                useKibibytes: !0
              })
            })
          })]
        }), (0, i.jsx)(d.FormSection, {
          title: v.default.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
          className: C.formItem,
          children: (0, i.jsx)(x, {
            stickerPreview: eA
          })
        }), (0, i.jsxs)(d.FormSection, {
          className: r(C.formItem, C.formItemRow),
          children: [(0, i.jsx)(d.FormItem, {
            title: e_ ? v.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : v.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
            required: !0,
            className: C.formItemRowChild,
            children: e_ ? (0, i.jsx)(d.TextInput, {
              disabled: !0,
              value: null !== (P = null == $ ? void 0 : $.filename) && void 0 !== P ? P : ""
            }) : (0, i.jsx)(_.default, {
              buttonText: v.default.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
              filters: y,
              filename: null !== (F = null == $ ? void 0 : $.filename) && void 0 !== F ? F : "",
              placeholder: v.default.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
              onFileSelect: eS
            })
          }), (0, i.jsx)(I.default, {
            className: C.formItemRowChild,
            guildId: K,
            emojiId: et,
            emojiName: ei,
            setEmojiId: en,
            setEmojiName: el,
            shouldUpdateBothEmojiFields: !0
          })]
        }), (0, i.jsx)(d.FormItem, {
          title: v.default.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
          required: !0,
          className: C.formItem,
          children: (0, i.jsx)(d.TextInput, {
            value: q,
            onChange: Q,
            placeholder: v.default.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
            maxLength: 30
          })
        }), (0, i.jsxs)("div", {
          className: C.formItem,
          children: [(0, i.jsxs)(d.FormTitle, {
            children: [v.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, i.jsx)(d.Tooltip, {
              text: v.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
              children: e => (0, i.jsx)(N.default, {
                className: C.infoIcon,
                ...e
              })
            })]
          }), (0, i.jsx)(d.TextArea, {
            value: ea,
            onChange: er,
            placeholder: v.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
            maxLength: 100
          })]
        }), null != eo && (0, i.jsx)(d.Text, {
          className: C.formItem,
          variant: "text-sm/normal",
          color: "text-danger",
          children: eo.message
        })]
      }), (0, i.jsxs)(d.ModalFooter, {
        className: C.modalFooter,
        children: [(0, i.jsx)(d.Button, {
          type: "submit",
          disabled: !eT,
          children: e_ ? v.default.Messages.GUILD_STICKERS_UPDATE : v.default.Messages.UPLOAD
        }), (0, i.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          color: (0, o.isThemeLight)(k) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
          onClick: j,
          children: v.default.Messages.NEVERMIND
        })]
      })]
    })]
  })
}