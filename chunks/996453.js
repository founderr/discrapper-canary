t.d(s, {
  G: function() {
    return I
  },
  Z: function() {
    return T
  }
}), t(47120);
var a = t(735250),
  l = t(470079),
  n = t(120356),
  i = t.n(n),
  o = t(481060),
  r = t(749210),
  c = t(820160),
  d = t(594174),
  u = t(285952),
  C = t(153124),
  m = t(892880),
  E = t(458879),
  _ = t(981631),
  x = t(689938),
  L = t(807299);

function I(e) {
  var s;
  let {
    guildTemplate: t,
    onClose: n,
    onBack: I,
    onHubGuildInfoSet: T,
    onGuildCreated: h,
    isSlideReady: g,
    hasFooter: N = !0,
    isCommunity: M = !1
  } = e, [Z, j] = l.useState(m.Z.getGuildNameSuggestion()), [S, U] = l.useState(null), [B, p] = l.useState(!1), [f, A] = l.useState(null), D = !!(null === (s = d.default.getCurrentUser()) || void 0 === s ? void 0 : s.isStaff()), [R, H] = l.useState(D), O = (0, C.Dt)(), v = l.useRef(null);
  l.useEffect(() => {
    var e;
    g && (null === (e = v.current) || void 0 === e || e.focus())
  }, [g]);
  let G = l.useCallback(async e => {
      if (e.preventDefault(), null != t) {
        p(!0), A(null);
        try {
          if (null != T) T(Z, S);
          else {
            let e = await E.Z.createGuildFromTemplate(Z, S, t, M, R);
            r.Z.transitionToGuildSync(e.id), null == h || h(e.id)
          }
        } catch (e) {
          A(e)
        }
        p(!1)
      }
    }, [t, T, Z, S, M, R, h]),
    b = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.Button, {
        color: o.Button.Colors.BRAND,
        onClick: G,
        disabled: 0 === Z.length,
        submitting: B,
        children: null != T ? x.Z.Messages.NEXT : x.Z.Messages.CREATE
      }), (0, a.jsx)(o.Button, {
        className: L.backButton,
        look: o.Button.Looks.BLANK,
        size: o.Button.Sizes.MIN,
        onClick: I,
        children: x.Z.Messages.BACK
      })]
    });
  return {
    content: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(o.ModalHeader, {
        direction: u.Z.Direction.VERTICAL,
        className: L.header,
        separator: !1,
        children: [(0, a.jsx)(o.Heading, {
          className: i()(L.title),
          variant: "heading-xl/semibold",
          children: x.Z.Messages.NUF_CREATE_SERVER_CUSTOMIZE_HEADER
        }), (0, a.jsx)(o.Text, {
          className: L.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: x.Z.Messages.NUF_CREATE_SERVER_CUSTOMIZE_SUBHEADER
        }), null != n && (0, a.jsx)(o.ModalCloseButton, {
          className: L.closeButton,
          onClick: n
        })]
      }), (0, a.jsxs)(o.ModalContent, {
        className: L.createGuild,
        children: [(0, a.jsx)("div", {
          className: L.uploadIcon,
          children: (0, a.jsx)(c.Z, {
            icon: S,
            onChange: U
          })
        }), (0, a.jsxs)("form", {
          onSubmit: G,
          children: [(0, a.jsxs)(o.FormItem, {
            className: L.nameInput,
            error: null == f ? void 0 : f.getFirstFieldErrorMessage("name"),
            children: [(0, a.jsx)(o.FormTitle, {
              tag: "label",
              htmlFor: O,
              children: x.Z.Messages.FORM_LABEL_SERVER_NAME
            }), (0, a.jsx)(o.TextInput, {
              type: "text",
              value: Z,
              maxLength: 100,
              onChange: j,
              inputRef: v,
              id: O
            })]
          }), D && (0, a.jsx)(o.FormSwitch, {
            hideBorder: !0,
            value: R,
            onChange: e => H(e),
            note: x.Z.Messages.GUILD_CREATE_STAFF_ONLY_HINT,
            className: L.formItemSpaced,
            children: (0, a.jsx)(o.FormTitle, {
              tag: "label",
              children: "Staff Only"
            })
          }), (0, a.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: L.guidelines,
            children: x.Z.Messages.CREATE_SERVER_GUIDELINES.format({
              guidelinesURL: _.EYA.GUIDELINES
            })
          })]
        }), null == f || f.hasFieldErrors() ? null : (0, a.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: f.message
        })]
      }), N && (0, a.jsx)(o.ModalFooter, {
        justify: u.Z.Justify.BETWEEN,
        children: b
      })]
    }),
    footer: b
  }
}

function T(e) {
  let {
    content: s
  } = I(e);
  return s
}