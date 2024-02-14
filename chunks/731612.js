"use strict";
l.r(t), l.d(t, {
  MENU_DATE_FORMAT: function() {
    return T
  },
  DATE_OPTION: function() {
    return a
  },
  default: function() {
    return A
  }
}), l("222007");
var a, n, s = l("37983"),
  i = l("884691"),
  o = l("414456"),
  d = l.n(o),
  r = l("866227"),
  u = l.n(r),
  C = l("868233"),
  c = l("77078"),
  f = l("980428"),
  E = l("875436"),
  m = l("772280"),
  M = l("49111"),
  h = l("782340"),
  _ = l("470869");
let T = "MMM Do, YYYY",
  x = u("2015-05-15").local(),
  S = (0, C.makeLazy)({
    createPromise: () => l.el("201959").then(l.bind(l, "201959")),
    webpackId: "201959"
  });
(n = a || (a = {}))[n.ALL = 0] = "ALL", n[n["1_HOUR"] = 1] = "1_HOUR", n[n["24_HOURS"] = 2] = "24_HOURS", n[n["7_DAYS"] = 3] = "7_DAYS", n[n["2_WEEKS"] = 4] = "2_WEEKS", n[n["4_WEEKS"] = 5] = "4_WEEKS", n[n["3_MONTHS"] = 6] = "3_MONTHS", n[n.CUSTOM = 7] = "CUSTOM";

function A(e) {
  let {
    startDateLabel: t,
    endDateLabel: l,
    afterDate: a,
    beforeDate: n,
    selectedOption: o,
    isCustomDateRange: r,
    menuName: C,
    onClose: T,
    onSelectDateOption: A,
    onToggleCustomDateRange: g,
    onSelectStartDate: p,
    onSelectEndDate: L
  } = e, H = [{
    id: 0,
    option: null,
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_ALL
  }, {
    id: 1,
    option: {
      input: 1,
      unit: "h"
    },
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_1_HOUR
  }, {
    id: 2,
    option: {
      input: 24,
      unit: "h"
    },
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_24_HOURS
  }, {
    id: 3,
    option: {
      input: 7,
      unit: "d"
    },
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_7_DAYS
  }, {
    id: 4,
    option: {
      input: 2,
      unit: "w"
    },
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_2_WEEKS
  }, {
    id: 5,
    option: {
      input: 4,
      unit: "w"
    },
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_4_WEEKS
  }, {
    id: 6,
    option: {
      input: 3,
      unit: "M"
    },
    label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_3_MONTHS
  }], [N, I] = i.useState(!1), R = function() {
    if (7 !== o) return null;
    if (null != t && null != l) return "".concat(t, " - ").concat(l);
    if (null != t) return h.default.Messages.MEMBER_SAFETY_DATE_OPTION_AFTER_ONLY.format({
      date: t
    });
    if (null != l) return h.default.Messages.MEMBER_SAFETY_DATE_OPTION_BEFORE_ONLY.format({
      date: l
    });
    return null
  }(), v = i.useCallback(() => {
    I(!0), g()
  }, [g]), j = i.useCallback(e => {
    p(e)
  }, [p]), D = i.useCallback(e => {
    L(e)
  }, [L]), b = i.useCallback(() => {
    null == n && null == a && A(0, null), I(!1)
  }, [a, n, A]);
  return (0, s.jsx)(c.Menu, {
    navId: "member-safety-guild-member-".concat(C, "-menu"),
    onClose: T,
    "aria-label": h.default.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
    onSelect: M.NOOP,
    children: (0, s.jsx)(c.MenuGroup, {
      children: N ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(c.MenuItem, {
          id: "back",
          action: b,
          render: e => (0, s.jsxs)("span", {
            ...e,
            className: _.nagivateBackContainer,
            children: [(0, s.jsx)(f.default, {
              width: 16,
              height: 16
            }), (0, s.jsx)(c.Text, {
              variant: "eyebrow",
              color: "header-primary",
              children: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_CUSTOM
            })]
          })
        }), (0, s.jsx)(c.MenuItem, {
          id: "after-date-menu-item",
          label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_AFTER,
          subtext: t,
          subMenuClassName: _.calendarContainer,
          children: (0, s.jsx)(c.MenuItem, {
            id: "after-date-picker",
            render: e => (0, s.jsx)(S, {
              ...e,
              calendarClassName: _.calendar,
              value: r && null != a ? u(a) : void 0,
              onSelect: j,
              maxDate: u().local(),
              minDate: x
            })
          })
        }), (0, s.jsx)(c.MenuItem, {
          id: "before-date-menu-item",
          label: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_BEFORE,
          subtext: l,
          subMenuClassName: _.calendarContainer,
          children: (0, s.jsx)(c.MenuItem, {
            id: "before-date-picker",
            render: e => (0, s.jsx)(S, {
              ...e,
              calendarClassName: _.calendar,
              value: r && null != n ? u(n) : void 0,
              onSelect: D,
              maxDate: u().local(),
              minDate: r && null != a ? u(a) : x
            })
          })
        })]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [H.map(e => {
          let {
            id: t,
            option: l,
            label: a
          } = e;
          return (0, s.jsx)(c.MenuRadioItem, {
            group: "member-safety-guild-member-".concat(C, "-menu"),
            id: "guild-member-".concat(C, "-option-").concat(t),
            label: a,
            action: () => A(t, l),
            checked: t === o
          }, "option-".concat(t))
        }), (0, s.jsx)(c.MenuSeparator, {}), (0, s.jsx)(c.MenuItem, {
          id: "guild-member-".concat(C, "-custom-option}"),
          action: v,
          render: e => (0, s.jsxs)("div", {
            className: d(_.otherDatesContainer, {
              [_.focused]: e.isFocused
            }),
            children: [(0, s.jsxs)("div", {
              className: _.leftContainer,
              children: [(0, s.jsx)(c.Text, {
                className: d(_.otherDateLabel, {
                  [_.focused]: e.isFocused
                }),
                variant: "text-sm/medium",
                children: h.default.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_CUSTOM
              }), null != R && (0, s.jsx)(c.Text, {
                className: d(_.otherDateLabel, {
                  [_.focused]: e.isFocused
                }),
                color: "text-muted",
                variant: "text-xxs/medium",
                children: R
              })]
            }), 7 === o ? (0, s.jsx)(E.default, {
              foreground: _.radioSelection,
              width: 18,
              height: 18
            }) : (0, s.jsx)(m.default, {
              width: 16,
              height: 16,
              className: d(_.otherDateLabel, {
                [_.focused]: e.isFocused
              })
            })]
          })
        })]
      })
    })
  })
}