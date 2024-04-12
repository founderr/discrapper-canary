"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
});
var s = l("735250"),
  n = l("470079"),
  u = l("481060"),
  a = l("561716"),
  o = l("721383"),
  c = l("153124"),
  i = l("63063"),
  r = l("857595"),
  d = l("981631"),
  _ = l("689938"),
  p = l("556453");

function T(e) {
  let {
    transitionState: t,
    onClose: l
  } = e, T = (0, c.useUID)();
  return n.useEffect(() => {
    r.keyboardNavigationExplainerModalSeen()
  }, []), (0, s.jsxs)(u.ModalRoot, {
    transitionState: t,
    role: "alertdialog",
    "aria-labelledby": T,
    children: [(0, s.jsxs)(u.ModalContent, {
      className: p.content,
      children: [(0, s.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        id: T,
        className: p.header,
        children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_TITLE.format({
          tab: (e, t) => (0, s.jsx)(u.KeyCombo, {
            shortcut: "tab",
            className: p.headerShortcut
          }, t)
        })
      }), (0, s.jsx)(u.Text, {
        variant: "text-md/normal",
        children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_BODY
      }), (0, s.jsxs)("ul", {
        className: p.tips,
        children: [(0, s.jsxs)("li", {
          children: [(0, s.jsx)(u.KeyCombo, {
            shortcut: o.TOGGLE_HOTKEYS.binds["0"]
          }), (0, s.jsx)(u.Text, {
            variant: "text-md/normal",
            children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_LIST_SHORTCUT
          })]
        }), (0, s.jsxs)("li", {
          children: [(0, s.jsx)(u.KeyCombo, {
            shortcut: a.QUICKSWITCHER_SHOW.binds["0"]
          }), (0, s.jsx)(u.Text, {
            variant: "text-md/normal",
            children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_QUICKSWITCHER_SHORTCUT
          })]
        })]
      }), (0, s.jsx)(u.Text, {
        variant: "text-md/normal",
        children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_HELP_CENTER_LINK.format({
          link: i.default.getArticleURL(d.HelpdeskArticles.KEYBOARD_NAVIGATION)
        })
      })]
    }), (0, s.jsx)(u.ModalFooter, {
      children: (0, s.jsx)(u.Button, {
        onClick: l,
        color: u.Button.Colors.BRAND,
        size: u.Button.Sizes.SMALL,
        autoFocus: !0,
        children: _.default.Messages.OKAY
      })
    })]
  })
}