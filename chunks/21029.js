"use strict";
n.r(t);
var s = n("735250");
n("470079");
var l = n("481060"),
  a = n("272008"),
  i = n("340747");
t.default = e => {
  let {
    quest: t
  } = e;
  return t.preview ? (0, s.jsxs)("div", {
    className: i.questControls,
    children: [(0, s.jsx)(l.Text, {
      variant: "text-sm/medium",
      className: i.questControlsTitle,
      children: "Preview Controls:"
    }), (0, s.jsx)(l.Button, {
      color: l.Button.Colors.PRIMARY,
      onClick: () => {
        (0, a.resetQuestDismissibilityStatus)(t.id)
      },
      children: "Reset Dismissibility"
    }), (0, s.jsx)(l.Button, {
      color: l.Button.Colors.PRIMARY,
      onClick: () => {
        (0, a.resetQuestPreviewStatus)(t.id)
      },
      children: "Reset Enrollment"
    }), (0, s.jsx)(l.Button, {
      color: l.Button.Colors.PRIMARY,
      onClick: () => {
        (0, a.completeQuestPreview)(t.id)
      },
      children: "Complete Quest"
    })]
  }) : null
}