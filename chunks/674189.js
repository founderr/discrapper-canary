"use strict";
i.r(t), i.d(t, {
  default: function() {
    return p
  }
}), i("47120");
var l = i("735250"),
  s = i("470079"),
  u = i("512722"),
  a = i.n(u),
  n = i("481060"),
  d = i("560067"),
  r = i("434404"),
  o = i("430824"),
  c = i("153124"),
  S = i("313741"),
  I = i("526079"),
  E = i("689938"),
  G = i("328746");

function f(e) {
  let {
    className: t,
    guildId: i,
    onChange: s,
    isGuildIncluded: u
  } = e, {
    options: a
  } = (0, I.default)({
    isGuildIncluded: u
  });
  return (0, l.jsx)(n.SearchableSelect, {
    className: t,
    onChange: s,
    value: i,
    options: a,
    placeholder: E.default.Messages.GUILD_SELECT
  })
}

function p(e) {
  let {
    transitionState: t,
    onClose: i,
    feature: u,
    section: I,
    subsection: E
  } = e, p = (0, c.useUID)(), {
    canCreateGuild: T,
    createGuildCta: C,
    createGuildDescription: g,
    selectGuildCta: _,
    title: R,
    description: m,
    isGuildSupported: L
  } = (0, S.useGuildSettingsPickerFeature)(u), [N, b] = s.useState(), [M, O] = s.useState(!1), h = async () => {
    var e;
    O(!0);
    let t = await new Promise(e => {
      d.default.openCreateGuildModal({
        onSuccess: e
      })
    });
    await (e = t, new Promise(t => {
      o.default.addChangeListener(function i() {
        null != o.default.getGuild(e) && (o.default.removeChangeListener(i), t())
      })
    })), r.default.open(t, I, void 0, E), null == i || i()
  };
  return (0, l.jsxs)(n.ModalRoot, {
    transitionState: t,
    "aria-labelledby": p,
    children: [(0, l.jsxs)(n.ModalHeader, {
      className: G.modalHeader,
      separator: !1,
      children: [(0, l.jsx)(n.Heading, {
        id: p,
        variant: "heading-lg/medium",
        children: R
      }), (0, l.jsx)(n.ModalCloseButton, {
        onClick: i
      })]
    }), (0, l.jsxs)(n.ModalContent, {
      className: G.modalContent,
      children: [(0, l.jsx)(n.Text, {
        variant: "text-md/medium",
        children: m
      }), (0, l.jsx)(n.Spacer, {
        size: 16
      }), (0, l.jsxs)("div", {
        className: G.guildSelection,
        children: [(0, l.jsx)("div", {
          className: G.guildSelectorContainer,
          children: (0, l.jsx)(f, {
            guildId: N,
            onChange: b,
            isGuildIncluded: L
          })
        }), (0, l.jsx)(n.Button, {
          onClick: () => {
            a()(null != N, "Guild ID must not be null on click"), r.default.open(N, I, void 0, E), null == i || i()
          },
          disabled: null == N,
          children: _
        })]
      }), T && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(n.Spacer, {
          size: 32
        }), (0, l.jsx)(n.Text, {
          variant: "text-md/medium",
          children: g
        }), (0, l.jsx)(n.Spacer, {
          size: 8
        }), (0, l.jsx)(n.Button, {
          onClick: h,
          submitting: M,
          children: C
        })]
      })]
    })]
  })
}