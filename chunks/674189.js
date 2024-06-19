t.r(i), t.d(i, {
  default: function() {
    return T
  }
}), t(47120);
var s = t(735250),
  n = t(470079),
  l = t(512722),
  a = t.n(l),
  u = t(481060),
  d = t(560067),
  r = t(434404),
  o = t(430824),
  c = t(153124),
  I = t(313741),
  S = t(526079),
  E = t(689938),
  p = t(451535);

function G(e) {
  let {
    className: i,
    guildId: t,
    onChange: n,
    isGuildIncluded: l
  } = e, {
    options: a
  } = (0, S.Z)({
    isGuildIncluded: l
  });
  return (0, s.jsx)(u.SearchableSelect, {
    className: i,
    onChange: n,
    value: t,
    options: a,
    placeholder: E.Z.Messages.GUILD_SELECT
  })
}

function T(e) {
  let {
    transitionState: i,
    onClose: t,
    feature: l,
    section: S,
    subsection: E
  } = e, T = (0, c.Dt)(), {
    canCreateGuild: C,
    createGuildCta: _,
    createGuildDescription: g,
    selectGuildCta: R,
    title: Z,
    description: L,
    isGuildSupported: N
  } = (0, I.K)(l), [D, h] = n.useState(), [O, v] = n.useState(!1), m = async () => {
    var e;
    v(!0);
    let i = await new Promise(e => {
      d.Z.openCreateGuildModal({
        onSuccess: e
      })
    });
    await (e = i, new Promise(i => {
      o.Z.addChangeListener(function t() {
        null != o.Z.getGuild(e) && (o.Z.removeChangeListener(t), i())
      })
    })), r.Z.open(i, S, void 0, E), null == t || t()
  };
  return (0, s.jsxs)(u.ModalRoot, {
    transitionState: i,
    "aria-labelledby": T,
    children: [(0, s.jsxs)(u.ModalHeader, {
      className: p.modalHeader,
      separator: !1,
      children: [(0, s.jsx)(u.Heading, {
        id: T,
        variant: "heading-lg/medium",
        children: Z
      }), (0, s.jsx)(u.ModalCloseButton, {
        onClick: t
      })]
    }), (0, s.jsxs)(u.ModalContent, {
      className: p.modalContent,
      children: [(0, s.jsx)(u.Text, {
        variant: "text-md/medium",
        children: L
      }), (0, s.jsx)(u.Spacer, {
        size: 16
      }), (0, s.jsxs)("div", {
        className: p.guildSelection,
        children: [(0, s.jsx)("div", {
          className: p.guildSelectorContainer,
          children: (0, s.jsx)(G, {
            guildId: D,
            onChange: h,
            isGuildIncluded: N
          })
        }), (0, s.jsx)(u.Button, {
          onClick: () => {
            a()(null != D, "Guild ID must not be null on click"), r.Z.open(D, S, void 0, E), null == t || t()
          },
          disabled: null == D,
          children: R
        })]
      }), C && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(u.Spacer, {
          size: 32
        }), (0, s.jsx)(u.Text, {
          variant: "text-md/medium",
          children: g
        }), (0, s.jsx)(u.Spacer, {
          size: 8
        }), (0, s.jsx)(u.Button, {
          onClick: m,
          submitting: O,
          children: _
        })]
      })]
    })]
  })
}