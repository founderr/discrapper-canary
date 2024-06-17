"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  },
  useCustomizeGuildSlide: function() {
    return x
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("120356"),
  n = s.n(i),
  d = s("481060"),
  r = s("749210"),
  o = s("820160"),
  u = s("594174"),
  c = s("285952"),
  C = s("153124"),
  m = s("892880"),
  f = s("458879"),
  _ = s("981631"),
  E = s("689938"),
  T = s("445063");

function x(e) {
  var t;
  let {
    guildTemplate: s,
    onClose: i,
    onBack: x,
    onHubGuildInfoSet: I,
    onGuildCreated: L,
    isSlideReady: h,
    hasFooter: g = !0,
    isCommunity: S = !1
  } = e, [N, M] = a.useState(m.default.getGuildNameSuggestion()), [p, A] = a.useState(null), [j, U] = a.useState(!1), [B, D] = a.useState(null), H = !!(null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()), [O, G] = a.useState(H), R = (0, C.useUID)(), v = a.useRef(null);
  a.useEffect(() => {
    var e;
    h && (null === (e = v.current) || void 0 === e || e.focus())
  }, [h]);
  let y = a.useCallback(async e => {
      if (e.preventDefault(), null != s) {
        U(!0), D(null);
        try {
          if (null != I) I(N, p);
          else {
            let e = await f.default.createGuildFromTemplate(N, p, s, S, O);
            r.default.transitionToGuildSync(e.id), null == L || L(e.id)
          }
        } catch (e) {
          D(e)
        }
        U(!1)
      }
    }, [s, I, N, p, S, O, L]),
    b = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(d.Button, {
        color: d.Button.Colors.BRAND,
        onClick: y,
        disabled: 0 === N.length,
        submitting: j,
        children: null != I ? E.default.Messages.NEXT : E.default.Messages.CREATE
      }), (0, l.jsx)(d.Button, {
        className: T.backButton,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.MIN,
        onClick: x,
        children: E.default.Messages.BACK
      })]
    });
  return {
    content: (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(d.ModalHeader, {
        direction: c.default.Direction.VERTICAL,
        className: T.header,
        separator: !1,
        children: [(0, l.jsx)(d.Heading, {
          className: n()(T.title),
          variant: "heading-xl/semibold",
          children: E.default.Messages.NUF_CREATE_SERVER_CUSTOMIZE_HEADER
        }), (0, l.jsx)(d.Text, {
          className: T.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: E.default.Messages.NUF_CREATE_SERVER_CUSTOMIZE_SUBHEADER
        }), null != i && (0, l.jsx)(d.ModalCloseButton, {
          className: T.closeButton,
          onClick: i
        })]
      }), (0, l.jsxs)(d.ModalContent, {
        className: T.createGuild,
        children: [(0, l.jsx)("div", {
          className: T.uploadIcon,
          children: (0, l.jsx)(o.default, {
            icon: p,
            onChange: A
          })
        }), (0, l.jsxs)("form", {
          onSubmit: y,
          children: [(0, l.jsxs)(d.FormItem, {
            className: T.nameInput,
            error: null == B ? void 0 : B.getFirstFieldErrorMessage("name"),
            children: [(0, l.jsx)(d.FormTitle, {
              tag: "label",
              htmlFor: R,
              children: E.default.Messages.FORM_LABEL_SERVER_NAME
            }), (0, l.jsx)(d.TextInput, {
              type: "text",
              value: N,
              maxLength: 100,
              onChange: M,
              inputRef: v,
              id: R
            })]
          }), H && (0, l.jsx)(d.FormSwitch, {
            hideBorder: !0,
            value: O,
            onChange: e => G(e),
            note: E.default.Messages.GUILD_CREATE_STAFF_ONLY_HINT,
            className: T.formItemSpaced,
            children: (0, l.jsx)(d.FormTitle, {
              tag: "label",
              children: "Staff Only"
            })
          }), (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: T.guidelines,
            children: E.default.Messages.CREATE_SERVER_GUIDELINES.format({
              guidelinesURL: _.MarketingURLs.GUIDELINES
            })
          })]
        }), null == B || B.hasFieldErrors() ? null : (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: B.message
        })]
      }), g && (0, l.jsx)(d.ModalFooter, {
        justify: c.default.Justify.BETWEEN,
        children: b
      })]
    }),
    footer: b
  }
}

function I(e) {
  let {
    content: t
  } = x(e);
  return t
}