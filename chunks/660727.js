i.r(a), i(47120);
var o, l, n = i(735250),
  s = i(470079),
  t = i(120356),
  r = i.n(t),
  c = i(77866),
  d = i(481060),
  u = i(907040),
  p = i(906411),
  m = i(813197),
  v = i(984933),
  I = i(153124),
  N = i(768581),
  j = i(956664),
  _ = i(185923),
  b = i(689938),
  f = i(488436),
  h = i(84717);
(l = o || (o = {})).TAB_ID_FILE_UPLOAD = "tab-id-role-icon-file-upload", l.TAB_ID_EMOJI = "tab-id-role-icon-emoji";

function x() {
  return [{
    name: b.Z.Messages.IMAGES,
    extensions: ["jpg", "jpeg", "png"]
  }]
}
async function O(e) {
  let a = (0, N.gT)({
      id: e.id,
      animated: !1,
      size: 48,
      forcePNG: !0
    }),
    i = await fetch(a),
    o = await i.blob();
  return await (0, j.fD)(o)
}
a.default = function(e) {
  let {
    guildId: a,
    onUploadIcon: i,
    onSelectUnicodeEmoji: o,
    onClose: l,
    transitionState: t
  } = e, N = (0, I.Dt)(), j = v.ZP.getDefaultChannel(a), [E, B] = s.useState("tab-id-role-icon-file-upload"), [L, g] = s.useState(!1), C = (0, c.Z)(x);
  return s.useEffect(() => {
    g(!1)
  }, [E]), (0, n.jsx)(d.ModalRoot, {
    transitionState: t,
    "aria-labelledby": N,
    size: d.ModalSize.MEDIUM,
    className: f.modalRoot,
    children: (0, n.jsxs)("div", {
      className: f.contentWrapper,
      children: [(0, n.jsx)("nav", {
        className: r()(f.nav, {
          [f.navUploadSelected]: "tab-id-role-icon-file-upload" === E
        }),
        children: (0, n.jsxs)("div", {
          className: f.navList,
          role: "tablist",
          "aria-label": "Expression Picker",
          children: [(0, n.jsx)("div", {
            className: f.navItem,
            role: "tab",
            "aria-controls": "tab-id-role-icon-file-upload",
            "aria-selected": "tab-id-role-icon-file-upload" === E,
            children: (0, n.jsx)(d.Button, {
              onClick: () => {
                B("tab-id-role-icon-file-upload")
              },
              "aria-current": "page",
              className: r()(f.navButton, {
                [f.navButtonActive]: "tab-id-role-icon-file-upload" === E
              }),
              look: d.Button.Looks.BLANK,
              size: d.Button.Sizes.NONE,
              children: b.Z.Messages.ROLE_ICON_TAB_UPLOAD_IMAGE
            })
          }), (0, n.jsx)("div", {
            className: f.navItem,
            role: "tab",
            "aria-controls": "tab-id-role-icon-emoji",
            "aria-selected": "tab-id-role-icon-emoji" === E,
            children: (0, n.jsx)(d.Button, {
              onClick: () => {
                B("tab-id-role-icon-emoji")
              },
              "aria-current": "page",
              className: r()(f.navButton, {
                [f.navButtonActive]: "tab-id-role-icon-emoji" === E
              }),
              look: d.Button.Looks.BLANK,
              size: d.Button.Sizes.NONE,
              children: b.Z.Messages.ROLE_ICON_TAB_EMOJI
            })
          })]
        })
      }), "tab-id-role-icon-file-upload" === E ? (0, n.jsx)(d.ModalContent, {
        children: (0, n.jsxs)("div", {
          className: f.uploadContainer,
          children: [(0, n.jsxs)("div", {
            className: f.uploadIconOuterContainer,
            children: [(0, n.jsx)("img", {
              src: h,
              alt: "sparkles"
            }), (0, n.jsx)("div", {
              className: f.uploadIconInnerContainer,
              children: (0, n.jsx)(d.ImagePlusIcon, {
                size: "md",
                color: "currentColor",
                className: f.uploadIcon
              })
            })]
          }), (0, n.jsx)("div", {
            className: f.uploadInfo,
            children: b.Z.Messages.ROLE_ICON_UPLOAD_FILES_INFO
          }), (0, n.jsxs)(d.Button, {
            size: d.Button.Sizes.SMALL,
            children: [b.Z.Messages.ROLE_ICON_UPLOAD_BROWSE_FILES, (0, n.jsx)(m.ZP, {
              onChange: e => {
                g(!1), i(e), l()
              },
              onFileSizeError: () => {
                g(!0)
              },
              maxFileSizeBytes: 256e3,
              multiple: !1,
              filters: C
            })]
          }), L ? (0, n.jsx)(d.Text, {
            className: f.uploadError,
            color: "text-danger",
            variant: "text-sm/normal",
            children: b.Z.Messages.ROLE_ICON_UPLOAD_FILE_TOO_BIG
          }) : null]
        })
      }) : null, "tab-id-role-icon-emoji" === E ? (0, n.jsx)(u.Z, {
        hasTabWrapper: !0,
        closePopout: () => l(),
        onSelectEmoji: async e => {
          if ((null == e ? void 0 : e.id) != null)(null == e ? void 0 : e.type) === p.B.GUILD && i(await O(e));
          else if ((null == e ? void 0 : e.surrogates) != null) {
            var a, n;
            o(null !== (n = null === (a = e.defaultDiversityChild) || void 0 === a ? void 0 : a.surrogates) && void 0 !== n ? n : e.surrogates)
          }
          l()
        },
        pickerIntention: _.Hz.COMMUNITY_CONTENT,
        channel: j
      }) : null]
    })
  })
}