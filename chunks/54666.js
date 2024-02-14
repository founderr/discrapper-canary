"use strict";
a.r(t), a.d(t, {
  default: function() {
    return K
  }
}), a("222007");
var l = a("37983"),
  i = a("884691"),
  s = a("414456"),
  n = a.n(s),
  r = a("748820"),
  o = a("446674"),
  u = a("819855"),
  d = a("77078"),
  E = a("385976"),
  _ = a("208548"),
  I = a("104945"),
  c = a("8731"),
  T = a("161778"),
  m = a("305961"),
  f = a("697218"),
  A = a("145131"),
  g = a("68238"),
  h = a("599110"),
  D = a("993105"),
  R = a("701909"),
  p = a("103603"),
  L = a("467094"),
  N = a("161585"),
  S = a("24373"),
  O = a("41170"),
  C = a("560241"),
  U = a("49111"),
  v = a("782340"),
  M = a("287065"),
  G = a("357450"),
  P = a("348919");
let w = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
  y = [{
    name: "Sticker file",
    extensions: ["json", "png", "apng", "gif"]
  }];

function x(e, t) {
  h.default.track(U.AnalyticEvents.STICKER_UPLOAD_COMPLETED, {
    successful: e,
    error: null != t ? t : ""
  })
}
let F = e => {
    let {
      stickerPreview: t
    } = e;
    return (0, l.jsxs)("div", {
      className: M.preview,
      children: [(0, l.jsx)("div", {
        className: M.previewDark,
        children: null != t ? t : (0, l.jsx)("img", {
          src: G,
          alt: v.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
        })
      }), (0, l.jsx)("div", {
        className: M.previewLight,
        children: null != t ? t : (0, l.jsx)("img", {
          src: P,
          alt: v.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
        })
      })]
    })
  },
  H = e => {
    let {
      sticker: t,
      previewData: a,
      onStickerError: i
    } = e;
    if (null != t) return (0, l.jsx)(O.default, {
      size: 160,
      sticker: t
    });
    if (null == a) return null;
    let {
      id: s,
      formatType: n,
      content: r
    } = a;
    return (0, l.jsx)(O.default, {
      assetData: r,
      fileUri: r,
      size: 160,
      sticker: {
        name: s,
        description: "",
        id: s,
        pack_id: "",
        format_type: n
      },
      onError: i
    }, s)
  };
async function j(e) {
  let t = await (0, p.readFileAsBase64)(e),
    a = new Image;
  a.src = t, await a.decode();
  let l = (0, c.downsizeImage)(a, 320, 320);
  return (0, p.dataUrlToFile)(l, e.name, e.type)
}

function K(e) {
  var t, a, s, c, O, G, P, K;
  let {
    transitionState: B,
    onClose: k,
    guildId: b,
    sticker: V
  } = e, z = (0, o.useStateFromStores)([T.default], () => T.default.theme), W = (0, o.useStateFromStores)([E.default], () => (null == V ? void 0 : V.tags) != null ? E.default.getCustomEmojiById(V.tags) : null), X = null !== (a = null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== a && a, Y = X ? C.STAFF_MAX_STICKER_FILE_SIZE : C.MAX_STICKER_FILE_SIZE, [Z, q] = i.useState(null), [J, Q] = i.useState(null !== (s = null == V ? void 0 : V.name) && void 0 !== s ? s : ""), [$, ee] = i.useState({
    file: null,
    filename: null !== (c = (0, S.getFilenameForSticker)(V)) && void 0 !== c ? c : ""
  }), [et, ea] = i.useState(null == W ? void 0 : W.id), [el, ei] = i.useState(null !== (O = null == W ? void 0 : W.name) && void 0 !== O ? O : null == V ? void 0 : V.tags), [es, en] = i.useState(null !== (G = null == V ? void 0 : V.description) && void 0 !== G ? G : ""), [er, eo] = i.useState(!1), [eu, ed] = i.useState(null), eE = (0, o.useStateFromStores)([m.default], () => m.default.getGuild(b)), e_ = (null == eE ? void 0 : eE.hasFeature(U.GuildFeatures.PARTNERED)) || (null == eE ? void 0 : eE.hasFeature(U.GuildFeatures.VERIFIED)), eI = null != V, ec = eI || (null == $ ? void 0 : $.file) != null, eT = 0 === es.length || es.length >= 2 && es.length <= 100, em = !er && (null == eu ? void 0 : eu.isBlocking) !== !0 && J.length >= 2 && (null != et || null != el || (null == V ? void 0 : V.tags) != null && (null == V ? void 0 : V.tags) !== "") && ec && eT, ef = async e => {
    var t;
    if (null == e) return;
    let a = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
    if (!w.has(a)) {
      ed({
        message: v.default.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
        isBlocking: !0
      });
      return
    }
    let l = e;
    if ("image/png" === a && e.size > Y && !await (0, p.isPNGAnimated)(e)) {
      l = await j(e);
      let t = l.size > Y;
      h.default.track(U.AnalyticEvents.STICKER_FILE_RESIZED, {
        original_file_size_bytes: e.size,
        resized_file_size_bytes: l.size,
        resized_file_too_big: t
      })
    }
    if (l.size > Y) {
      ed({
        message: v.default.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
          maxSize: (0, D.formatKbSize)(Y, {
            useKibibytes: !0
          })
        }),
        isBlocking: null == $.file
      }), h.default.track(U.AnalyticEvents.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
        size: l.size,
        filetype: a
      });
      return
    }
    let i = (0, S.getStickerFormatTypeFromFileType)(l.type),
      s = i === N.StickerFormat.LOTTIE;
    if (s) {
      if (!e_) {
        ed({
          message: v.default.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
            articleURL: R.default.getArticleURL(U.HelpdeskArticles.STICKERS_UPLOAD)
          }),
          isBlocking: !0
        });
        return
      }
      let e = new FileReader;
      e.addEventListener("load", () => {
        q({
          id: (0, r.v4)(),
          formatType: i,
          content: e.result
        }), ed(null)
      }), e.readAsText(l)
    } else {
      let e = await (0, p.readFileAsBase64)(l);
      q({
        id: (0, r.v4)(),
        formatType: i,
        content: e
      }), ed(null)
    }
    ee({
      file: l,
      filename: l.name
    })
  }, eA = async e => {
    var t, a, l, i, s, n;
    e.preventDefault();
    let r = null !== (a = null !== (t = null != et ? et : el) && void 0 !== t ? t : null == V ? void 0 : V.tags) && void 0 !== a ? a : "";
    try {
      if (eo(!0), eI) await (0, L.updateGuildSticker)(b, null !== (l = null == V ? void 0 : V.id) && void 0 !== l ? l : "", {
        name: J,
        tags: r,
        description: es
      });
      else {
        ;
        let e = new FormData;
        e.append("name", J), e.append("tags", r), e.append("description", es), (null == $ ? void 0 : $.file) != null && e.append("file", $.file), n = null !== (s = null === (i = $.file) || void 0 === i ? void 0 : i.type) && void 0 !== s ? s : "", h.default.track(U.AnalyticEvents.STICKER_UPLOAD_STARTED, {
          filetype: n
        }), await (0, L.createGuildSticker)(b, e), x(!0)
      }
      k()
    } catch (e) {
      ed({
        message: e.body.message,
        isBlocking: !1
      }), x(!1, e.body.message)
    } finally {
      eo(!1)
    }
  }, eg = i.useCallback(() => {
    ed({
      message: v.default.Messages.GUILD_STICKER_INVALID_STICKER,
      isBlocking: !0
    })
  }, []), eh = H({
    sticker: V,
    previewData: Z,
    onStickerError: eg
  }), eD = e_ ? v.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : v.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
  return (0, l.jsxs)(d.ModalRoot, {
    transitionState: B,
    "aria-labelledby": "STICKER_UPLOAD_MODAL",
    className: M.modal,
    children: [(0, l.jsx)(d.ModalCloseButton, {
      onClick: k,
      className: M.modalClose
    }), (0, l.jsxs)("form", {
      onSubmit: eA,
      className: M.form,
      children: [(0, l.jsxs)(d.ModalContent, {
        className: M.modalContent,
        children: [(0, l.jsxs)(d.ModalHeader, {
          direction: A.default.Direction.VERTICAL,
          separator: !1,
          className: M.modalHeader,
          children: [(0, l.jsx)(d.Heading, {
            variant: "heading-xl/semibold",
            className: M.modalHeaderTitle,
            children: v.default.Messages.GUILD_STICKER_UPLOAD_TITLE
          }), (0, l.jsx)(d.Text, {
            variant: "text-md/normal",
            children: eD.format({
              fileSize: (0, D.formatKbSize)(C.MAX_STICKER_FILE_SIZE, {
                useKibibytes: !0
              })
            })
          })]
        }), (0, l.jsx)(d.FormSection, {
          title: v.default.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
          className: M.formItem,
          children: (0, l.jsx)(F, {
            stickerPreview: eh
          })
        }), (0, l.jsxs)(d.FormSection, {
          className: n(M.formItem, M.formItemRow),
          children: [(0, l.jsx)(d.FormItem, {
            title: eI ? v.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : v.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
            required: !0,
            className: M.formItemRowChild,
            children: eI ? (0, l.jsx)(d.TextInput, {
              disabled: !0,
              value: null !== (P = null == $ ? void 0 : $.filename) && void 0 !== P ? P : ""
            }) : (0, l.jsx)(I.default, {
              buttonText: v.default.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
              filters: y,
              filename: null !== (K = null == $ ? void 0 : $.filename) && void 0 !== K ? K : "",
              placeholder: v.default.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
              onFileSelect: ef
            })
          }), (0, l.jsx)(_.default, {
            className: M.formItemRowChild,
            guildId: b,
            emojiId: et,
            emojiName: el,
            setEmojiId: ea,
            setEmojiName: ei,
            shouldUpdateBothEmojiFields: !0
          })]
        }), (0, l.jsx)(d.FormItem, {
          title: v.default.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
          required: !0,
          className: M.formItem,
          children: (0, l.jsx)(d.TextInput, {
            value: J,
            onChange: Q,
            placeholder: v.default.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
            maxLength: 30
          })
        }), (0, l.jsxs)("div", {
          className: M.formItem,
          children: [(0, l.jsxs)(d.FormTitle, {
            children: [v.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, l.jsx)(d.Tooltip, {
              text: v.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
              children: e => (0, l.jsx)(g.default, {
                className: M.infoIcon,
                ...e
              })
            })]
          }), (0, l.jsx)(d.TextArea, {
            value: es,
            onChange: en,
            placeholder: v.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
            maxLength: 100
          })]
        }), null != eu && (0, l.jsx)(d.Text, {
          className: M.formItem,
          variant: "text-sm/normal",
          color: "text-danger",
          children: eu.message
        })]
      }), (0, l.jsxs)(d.ModalFooter, {
        className: M.modalFooter,
        children: [(0, l.jsx)(d.Button, {
          type: "submit",
          disabled: !em,
          children: eI ? v.default.Messages.GUILD_STICKERS_UPDATE : v.default.Messages.UPLOAD
        }), (0, l.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          color: (0, u.isThemeLight)(z) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
          onClick: k,
          children: v.default.Messages.NEVERMIND
        })]
      })]
    })]
  })
}