"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007");
var i = n("37983"),
  l = n("884691"),
  r = n("414456"),
  a = n.n(r),
  s = n("748820"),
  u = n("446674"),
  o = n("819855"),
  d = n("77078"),
  c = n("385976"),
  _ = n("208548"),
  I = n("104945"),
  E = n("8731"),
  f = n("161778"),
  T = n("305961"),
  S = n("697218"),
  D = n("145131"),
  N = n("68238"),
  A = n("599110"),
  L = n("993105"),
  m = n("701909"),
  h = n("103603"),
  p = n("467094"),
  g = n("161585"),
  G = n("24373"),
  R = n("41170"),
  U = n("560241"),
  O = n("49111"),
  M = n("782340"),
  v = n("735193"),
  C = n("357450"),
  y = n("348919");
let P = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
  w = [{
    name: "Sticker file",
    extensions: ["json", "png", "apng", "gif"]
  }];

function b(e, t) {
  A.default.track(O.AnalyticEvents.STICKER_UPLOAD_COMPLETED, {
    successful: e,
    error: null != t ? t : ""
  })
}
let B = e => {
    let {
      stickerPreview: t
    } = e;
    return (0, i.jsxs)("div", {
      className: v.preview,
      children: [(0, i.jsx)("div", {
        className: v.previewDark,
        children: null != t ? t : (0, i.jsx)("img", {
          src: C,
          alt: M.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
        })
      }), (0, i.jsx)("div", {
        className: v.previewLight,
        children: null != t ? t : (0, i.jsx)("img", {
          src: y,
          alt: M.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
        })
      })]
    })
  },
  x = e => {
    let {
      sticker: t,
      previewData: n,
      onStickerError: l
    } = e;
    if (null != t) return (0, i.jsx)(R.default, {
      size: 160,
      sticker: t
    });
    if (null == n) return null;
    let {
      id: r,
      formatType: a,
      content: s
    } = n;
    return (0, i.jsx)(R.default, {
      assetData: s,
      fileUri: s,
      size: 160,
      sticker: {
        name: r,
        description: "",
        id: r,
        pack_id: "",
        format_type: a
      },
      onError: l
    }, r)
  };
async function F(e) {
  let t = await (0, h.readFileAsBase64)(e),
    n = new Image;
  n.src = t, await n.decode();
  let i = (0, E.downsizeImage)(n, 320, 320);
  return (0, h.dataUrlToFile)(i, e.name, e.type)
}

function H(e) {
  var t, n, r, E, R, C, y, H;
  let {
    transitionState: V,
    onClose: j,
    guildId: Y,
    sticker: K
  } = e, k = (0, u.useStateFromStores)([f.default], () => f.default.theme), Z = (0, u.useStateFromStores)([c.default], () => (null == K ? void 0 : K.tags) != null ? c.default.getCustomEmojiById(K.tags) : null), z = null !== (n = null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== n && n, W = z ? U.STAFF_MAX_STICKER_FILE_SIZE : U.MAX_STICKER_FILE_SIZE, [X, J] = l.useState(null), [q, Q] = l.useState(null !== (r = null == K ? void 0 : K.name) && void 0 !== r ? r : ""), [$, ee] = l.useState({
    file: null,
    filename: null !== (E = (0, G.getFilenameForSticker)(K)) && void 0 !== E ? E : ""
  }), [et, en] = l.useState(null == Z ? void 0 : Z.id), [ei, el] = l.useState(null !== (R = null == Z ? void 0 : Z.name) && void 0 !== R ? R : null == K ? void 0 : K.tags), [er, ea] = l.useState(null !== (C = null == K ? void 0 : K.description) && void 0 !== C ? C : ""), [es, eu] = l.useState(!1), [eo, ed] = l.useState(null), ec = (0, u.useStateFromStores)([T.default], () => T.default.getGuild(Y)), e_ = (null == ec ? void 0 : ec.hasFeature(O.GuildFeatures.PARTNERED)) || (null == ec ? void 0 : ec.hasFeature(O.GuildFeatures.VERIFIED)), eI = null != K, eE = eI || (null == $ ? void 0 : $.file) != null, ef = 0 === er.length || er.length >= 2 && er.length <= 100, eT = !es && (null == eo ? void 0 : eo.isBlocking) !== !0 && q.length >= 2 && (null != et || null != ei || (null == K ? void 0 : K.tags) != null && (null == K ? void 0 : K.tags) !== "") && eE && ef, eS = async e => {
    var t;
    if (null == e) return;
    let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
    if (!P.has(n)) {
      ed({
        message: M.default.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
        isBlocking: !0
      });
      return
    }
    let i = e;
    if ("image/png" === n && e.size > W && !await (0, h.isPNGAnimated)(e)) {
      i = await F(e);
      let t = i.size > W;
      A.default.track(O.AnalyticEvents.STICKER_FILE_RESIZED, {
        original_file_size_bytes: e.size,
        resized_file_size_bytes: i.size,
        resized_file_too_big: t
      })
    }
    if (i.size > W) {
      ed({
        message: M.default.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
          maxSize: (0, L.formatKbSize)(W, {
            useKibibytes: !0
          })
        }),
        isBlocking: null == $.file
      }), A.default.track(O.AnalyticEvents.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        size: i.size,
        filetype: n
      });
      return
    }
    let l = (0, G.getStickerFormatTypeFromFileType)(i.type),
      r = l === g.StickerFormat.LOTTIE;
    if (r) {
      if (!e_) {
        ed({
          message: M.default.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
            articleURL: m.default.getArticleURL(O.HelpdeskArticles.STICKERS_UPLOAD)
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
      let e = await (0, h.readFileAsBase64)(i);
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
    var t, n, i, l, r, a;
    e.preventDefault();
    let s = null !== (n = null !== (t = null != et ? et : ei) && void 0 !== t ? t : null == K ? void 0 : K.tags) && void 0 !== n ? n : "";
    try {
      if (eu(!0), eI) await (0, p.updateGuildSticker)(Y, null !== (i = null == K ? void 0 : K.id) && void 0 !== i ? i : "", {
        name: q,
        tags: s,
        description: er
      });
      else {
        ;
        let e = new FormData;
        e.append("name", q), e.append("tags", s), e.append("description", er), (null == $ ? void 0 : $.file) != null && e.append("file", $.file), a = null !== (r = null === (l = $.file) || void 0 === l ? void 0 : l.type) && void 0 !== r ? r : "", A.default.track(O.AnalyticEvents.STICKER_UPLOAD_STARTED, {
          filetype: a
        }), await (0, p.createGuildSticker)(Y, e), b(!0)
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
      message: M.default.Messages.GUILD_STICKER_INVALID_STICKER,
      isBlocking: !0
    })
  }, []), eA = x({
    sticker: K,
    previewData: X,
    onStickerError: eN
  }), eL = e_ ? M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
  return (0, i.jsxs)(d.ModalRoot, {
    transitionState: V,
    "aria-labelledby": "STICKER_UPLOAD_MODAL",
    className: v.modal,
    children: [(0, i.jsx)(d.ModalCloseButton, {
      onClick: j,
      className: v.modalClose
    }), (0, i.jsxs)("form", {
      onSubmit: eD,
      className: v.form,
      children: [(0, i.jsxs)(d.ModalContent, {
        className: v.modalContent,
        children: [(0, i.jsxs)(d.ModalHeader, {
          direction: D.default.Direction.VERTICAL,
          separator: !1,
          className: v.modalHeader,
          children: [(0, i.jsx)(d.Heading, {
            variant: "heading-xl/semibold",
            className: v.modalHeaderTitle,
            children: M.default.Messages.GUILD_STICKER_UPLOAD_TITLE
          }), (0, i.jsx)(d.Text, {
            variant: "text-md/normal",
            children: eL.format({
              fileSize: (0, L.formatKbSize)(U.MAX_STICKER_FILE_SIZE, {
                useKibibytes: !0
              })
            })
          })]
        }), (0, i.jsx)(d.FormSection, {
          title: M.default.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
          className: v.formItem,
          children: (0, i.jsx)(B, {
            stickerPreview: eA
          })
        }), (0, i.jsxs)(d.FormSection, {
          className: a(v.formItem, v.formItemRow),
          children: [(0, i.jsx)(d.FormItem, {
            title: eI ? M.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : M.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
            required: !0,
            className: v.formItemRowChild,
            children: eI ? (0, i.jsx)(d.TextInput, {
              disabled: !0,
              value: null !== (y = null == $ ? void 0 : $.filename) && void 0 !== y ? y : ""
            }) : (0, i.jsx)(I.default, {
              buttonText: M.default.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
              filters: w,
              filename: null !== (H = null == $ ? void 0 : $.filename) && void 0 !== H ? H : "",
              placeholder: M.default.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
              onFileSelect: eS
            })
          }), (0, i.jsx)(_.default, {
            className: v.formItemRowChild,
            guildId: Y,
            emojiId: et,
            emojiName: ei,
            setEmojiId: en,
            setEmojiName: el,
            shouldUpdateBothEmojiFields: !0
          })]
        }), (0, i.jsx)(d.FormItem, {
          title: M.default.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
          required: !0,
          className: v.formItem,
          children: (0, i.jsx)(d.TextInput, {
            value: q,
            onChange: Q,
            placeholder: M.default.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
            maxLength: 30
          })
        }), (0, i.jsxs)("div", {
          className: v.formItem,
          children: [(0, i.jsxs)(d.FormTitle, {
            children: [M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, i.jsx)(d.Tooltip, {
              text: M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
              children: e => (0, i.jsx)(N.default, {
                className: v.infoIcon,
                ...e
              })
            })]
          }), (0, i.jsx)(d.TextArea, {
            value: er,
            onChange: ea,
            placeholder: M.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
            maxLength: 100
          })]
        }), null != eo && (0, i.jsx)(d.Text, {
          className: v.formItem,
          variant: "text-sm/normal",
          color: "text-danger",
          children: eo.message
        })]
      }), (0, i.jsxs)(d.ModalFooter, {
        className: v.modalFooter,
        children: [(0, i.jsx)(d.Button, {
          type: "submit",
          disabled: !eT,
          children: eI ? M.default.Messages.GUILD_STICKERS_UPDATE : M.default.Messages.UPLOAD
        }), (0, i.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          color: (0, o.isThemeLight)(k) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
          onClick: j,
          children: M.default.Messages.NEVERMIND
        })]
      })]
    })]
  })
}