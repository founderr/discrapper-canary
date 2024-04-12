"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  r = n("369994"),
  i = n("781208"),
  d = n("689938"),
  u = n("949049");

function o(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: o
  } = e, [_, S] = l.useState([]), c = l.useCallback(() => {
    (0, r.trackReportRaidViewed)(t, _), (0, r.handleReportRaid)(t), o()
  }, [t, o, _]), I = l.useCallback(e => () => {
    S(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
  }, []), A = l.useCallback(() => {
    open(i.COMMUNITY_PORTAL_SERVER_SAFETY_PAGE)
  }, []);
  return (0, a.jsxs)(s.ModalRoot, {
    transitionState: n,
    size: s.ModalSize.SMALL,
    children: [(0, a.jsx)(s.ModalHeader, {
      separator: !1,
      children: (0, a.jsx)(s.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: d.default.Messages.GUILD_REPORT_RAID_MODAL_TITLE
      })
    }), (0, a.jsxs)(s.ModalContent, {
      children: [(0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: d.default.Messages.GUILD_REPORT_RAID_MODAL_DESCRIPTION_CLICKABLE.format({
          onClick: A
        })
      }), (0, a.jsx)("div", {
        className: u.mainCheckboxContainer,
        children: i.REPORT_RAID_OPTIONS.map(e => (0, a.jsxs)(s.Clickable, {
          className: u.checkboxContainer,
          onClick: I(e),
          children: [(0, a.jsx)(s.Checkbox, {
            type: s.Checkbox.Types.INVERTED,
            className: u.checkbox,
            value: _.includes(e),
            displayOnly: !0
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: (0, i.getReportRaidTypeLabel)(e)
          })]
        }, e))
      })]
    }), (0, a.jsxs)(s.ModalFooter, {
      children: [(0, a.jsx)(s.Button, {
        onClick: c,
        color: s.Button.Colors.BRAND_NEW,
        look: s.Button.Looks.FILLED,
        children: d.default.Messages.SUBMIT
      }), (0, a.jsx)(s.Button, {
        onClick: o,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        children: d.default.Messages.CANCEL
      })]
    })]
  })
}