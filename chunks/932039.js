t.d(l, {
  N2: function() {
    return h
  },
  Ol: function() {
    return n
  },
  ZP: function() {
    return L
  }
}), t(47120);
var n, s, a = t(735250),
  o = t(470079),
  i = t(120356),
  r = t.n(i),
  C = t(913527),
  c = t.n(C),
  d = t(608787),
  u = t(481060),
  E = t(553826),
  m = t(981631),
  _ = t(689938),
  M = t(10924);
let h = "MMM Do, YYYY",
  x = c()("2015-05-15").local(),
  T = (0, d.Un)({
    createPromise: () => Promise.resolve().then(t.bind(t, 547800)),
    webpackId: 547800
  });
(s = n || (n = {}))[s.ALL = 0] = "ALL", s[s["1_HOUR"] = 1] = "1_HOUR", s[s["24_HOURS"] = 2] = "24_HOURS", s[s["7_DAYS"] = 3] = "7_DAYS", s[s["2_WEEKS"] = 4] = "2_WEEKS", s[s["4_WEEKS"] = 5] = "4_WEEKS", s[s["3_MONTHS"] = 6] = "3_MONTHS", s[s.CUSTOM = 7] = "CUSTOM";

function L(e) {
  let {
    startDateLabel: l,
    endDateLabel: t,
    afterDate: n,
    beforeDate: s,
    selectedOption: i,
    isCustomDateRange: C,
    menuName: d,
    onClose: h,
    onSelectDateOption: L,
    onToggleCustomDateRange: H,
    onSelectStartDate: g,
    onSelectEndDate: A
  } = e, I = [{
    id: 0,
    option: null,
    label: _.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_ALL
  }, {
    id: 1,
    option: {
      input: 1,
      unit: "h"
    },
    label: _.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_1_HOUR
  }, {
    id: 2,
    option: {
      input: 24,
      unit: "h"
    },
    label: _.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_24_HOURS
  }, {
    id: 3,
    option: {
      input: 7,
      unit: "d"
    },
    label: _.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_7_DAYS
  }, {
    id: 4,
    option: {
      input: 2,
      unit: "w"
    },
    label: _.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_2_WEEKS
  }, {
    id: 5,
    option: {
      input: 4,
      unit: "w"
    },
    label: _.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_4_WEEKS
  }, {
    id: 6,
    option: {
      input: 3,
      unit: "M"
    },
    label: _.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_3_MONTHS
  }], [N, R] = o.useState(!1), p = function() {
    if (7 !== i) return null;
    if (null != l && null != t) return "".concat(l, " - ").concat(t);
    if (null != l) return _.Z.Messages.MEMBER_SAFETY_DATE_OPTION_AFTER_ONLY.format({
      date: l
    });
    if (null != t) return _.Z.Messages.MEMBER_SAFETY_DATE_OPTION_BEFORE_ONLY.format({
      date: t
    });
    return null
  }(), S = o.useCallback(() => {
    R(!0), H()
  }, [H]), Z = o.useCallback(e => {
    g(e)
  }, [g]), j = o.useCallback(e => {
    A(e)
  }, [A]), v = o.useCallback(() => {
    null == s && null == n && L(0, null), R(!1)
  }, [n, s, L]);
  return (0, a.jsx)(u.Menu, {
    navId: "member-safety-guild-member-".concat(d, "-menu"),
    onClose: h,
    "aria-label": _.Z.Messages.MEMBER_SAFETY_TABLE_FLAGS_POPOUT_TITLE,
    onSelect: m.dG4,
    children: (0, a.jsx)(u.MenuGroup, {
      children: N ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.MenuItem, {
          id: "back",
          action: v,
          render: e => (0, a.jsxs)("span", {
            ...e,
            className: M.nagivateBackContainer,
            children: [(0, a.jsx)(u.ChevronSmallLeftIcon, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16
            }), (0, a.jsx)(u.Text, {
              variant: "eyebrow",
              color: "header-primary",
              children: _.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_CUSTOM
            })]
          })
        }), (0, a.jsx)(u.MenuItem, {
          id: "after-date-menu-item",
          label: _.Z.Messages.MEMBER_SAFETY_DATE_OPTION_AFTER,
          subtext: l,
          subMenuClassName: M.calendarContainer,
          children: (0, a.jsx)(u.MenuItem, {
            id: "after-date-picker",
            render: e => (0, a.jsx)(T, {
              ...e,
              calendarClassName: M.calendar,
              value: C && null != n ? c()(n) : void 0,
              onSelect: Z,
              maxDate: c()().local(),
              minDate: x
            })
          })
        }), (0, a.jsx)(u.MenuItem, {
          id: "before-date-menu-item",
          label: _.Z.Messages.MEMBER_SAFETY_DATE_OPTION_BEFORE,
          subtext: t,
          subMenuClassName: M.calendarContainer,
          children: (0, a.jsx)(u.MenuItem, {
            id: "before-date-picker",
            render: e => (0, a.jsx)(T, {
              ...e,
              calendarClassName: M.calendar,
              value: C && null != s ? c()(s) : void 0,
              onSelect: j,
              maxDate: c()().local(),
              minDate: C && null != n ? c()(n) : x
            })
          })
        })]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [I.map(e => {
          let {
            id: l,
            option: t,
            label: n
          } = e;
          return (0, a.jsx)(u.MenuRadioItem, {
            group: "member-safety-guild-member-".concat(d, "-menu"),
            id: "guild-member-".concat(d, "-option-").concat(l),
            label: n,
            action: () => L(l, t),
            checked: l === i
          }, "option-".concat(l))
        }), (0, a.jsx)(u.MenuSeparator, {}), (0, a.jsx)(u.MenuItem, {
          id: "guild-member-".concat(d, "-custom-option}"),
          action: S,
          render: e => (0, a.jsxs)("div", {
            className: r()(M.otherDatesContainer, {
              [M.focused]: e.isFocused
            }),
            children: [(0, a.jsxs)("div", {
              className: M.leftContainer,
              children: [(0, a.jsx)(u.Text, {
                className: r()(M.otherDateLabel, {
                  [M.focused]: e.isFocused
                }),
                variant: "text-sm/medium",
                children: _.Z.Messages.MEMBER_SAFETY_DATE_OPTION_LABEL_CUSTOM
              }), null != p && (0, a.jsx)(u.Text, {
                className: r()(M.otherDateLabel, {
                  [M.focused]: e.isFocused
                }),
                color: "text-muted",
                variant: "text-xxs/medium",
                children: p
              })]
            }), 7 === i ? (0, a.jsx)(E.Z, {
              foreground: M.radioSelection,
              width: 18,
              height: 18
            }) : (0, a.jsx)(u.ChevronSmallRightIcon, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16,
              className: r()(M.otherDateLabel, {
                [M.focused]: e.isFocused
              })
            })]
          })
        })]
      })
    })
  })
}