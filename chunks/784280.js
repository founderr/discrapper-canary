a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a(47120);
var n = a(735250),
  o = a(470079),
  s = a(442837),
  r = a(481060),
  i = a(881052),
  l = a(607070),
  d = a(745510),
  c = a(781792),
  u = a(430824),
  _ = a(285952),
  m = a(645792),
  f = a(981631),
  h = a(689938),
  E = a(399675);

function A(e) {
  let {
    guildId: t
  } = e, a = (0, s.e7)([u.Z], () => u.Z.getGuild(t)), [A, M] = o.useState(null), [g, x] = o.useState(""), {
    createMultipleConfettiAt: b
  } = o.useContext(d.h), H = (0, s.e7)([l.Z], () => l.Z.useReducedMotion, []), R = async t => {
    let {
      onClose: a,
      guildId: n
    } = e;
    t.preventDefault(), M(null);
    try {
      await (0, c.e)(n, {
        nick: g
      }), null == a || a()
    } catch (e) {
      M(new i.Hx(e))
    }
  }, {
    transitionState: N
  } = e, L = Object.values(u.Z.getGuilds()).filter(e => e.id !== t && e.hasFeature(f.oNc.HUB)).length > 0, p = !H && !L && (null == a ? void 0 : a.hasFeature(f.oNc.HUB)) && (0, m.b)();
  return o.useEffect(() => {
    if (p) {
      let e = window.innerWidth / 2;
      b(e, window.innerHeight / 2)
    }
  }, [b, p]), (0, n.jsxs)(r.ModalRoot, {
    className: E.__invalid_modalRoot,
    transitionState: N,
    "aria-label": h.Z.Messages.HUB_REAL_NAME_MODAL_HEADER.format({
      guildName: null == a ? void 0 : a.name
    }),
    children: [(0, n.jsxs)(r.ModalHeader, {
      separator: !1,
      className: E.formHeaderContainer,
      direction: _.Z.Direction.VERTICAL,
      children: [(0, n.jsx)("div", {
        className: E.formImage
      }), (0, n.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        className: E.formHeader,
        children: h.Z.Messages.HUB_REAL_NAME_MODAL_HEADER.format({
          guildName: null == a ? void 0 : a.name
        })
      }), (0, n.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        className: E.formSubHeader,
        children: h.Z.Messages.HUB_REAL_NAME_MODAL_SUBHEADER
      })]
    }), (0, n.jsxs)("form", {
      className: E.formContent,
      onSubmit: R,
      children: [(0, n.jsx)(r.ModalContent, {
        children: (0, n.jsx)(r.FormItem, {
          title: h.Z.Messages.HUB_REAL_NAME_MODAL_FORM_TITLE,
          children: (0, n.jsx)(r.TextInput, {
            placeholder: h.Z.Messages.HUB_REAL_NAME_MODAL_FORM_PLACEHOLDER,
            onChange: e => {
              x(e)
            },
            error: null == A ? void 0 : A.getFirstFieldErrorMessage("name"),
            value: g
          })
        })
      }), (0, n.jsx)(r.ModalFooter, {
        className: E.formFooter,
        direction: _.Z.Direction.VERTICAL,
        children: (0, n.jsx)(r.Button, {
          type: "submit",
          size: r.Button.Sizes.LARGE,
          color: r.Button.Colors.BRAND,
          children: h.Z.Messages.HUB_REAL_NAME_CTA
        })
      })]
    })]
  })
}