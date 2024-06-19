t.d(l, {
  Z: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var s = t(498607),
  a = t.n(s),
  o = t(913527),
  i = t.n(o),
  r = t(399606),
  C = t(893966),
  c = t(527379),
  d = t(932039),
  u = t(689938);

function E(e) {
  let {
    guildId: l,
    onClose: t
  } = e, s = (0, r.e7)([C.Z], () => C.Z.getSearchStateByGuildId(l), [l], a()), {
    selectedJoinDateOption: o
  } = s, {
    afterDate: E,
    beforeDate: m,
    optionId: _
  } = o, M = _ === d.Ol.CUSTOM, h = M && null != E ? i()(E).format(d.N2) : null, x = M && null != m ? i()(m).format(d.N2) : null;
  return (0, n.jsx)(d.ZP, {
    startDateLabel: h,
    endDateLabel: x,
    afterDate: E,
    beforeDate: m,
    selectedOption: _,
    isCustomDateRange: M,
    menuName: "joined-date",
    accessibilityLabel: u.Z.Messages.MEMBER_SAFETY_JOINED_DATE_LABEL,
    onClose: t,
    onSelectDateOption: function(e, t) {
      let n = null != t ? i()().subtract(t.input, t.unit).valueOf() : null;
      (0, c.Dr)(l, {
        ...s,
        selectedJoinDateOption: {
          optionId: e,
          afterDate: n,
          beforeDate: null
        }
      })
    },
    onToggleCustomDateRange: function() {
      (0, c.Dr)(l, {
        ...s,
        selectedJoinDateOption: {
          optionId: d.Ol.CUSTOM,
          afterDate: M ? E : null,
          beforeDate: M ? m : null
        }
      })
    },
    onSelectStartDate: function(e) {
      (0, c.Dr)(l, {
        ...s,
        selectedJoinDateOption: {
          optionId: d.Ol.CUSTOM,
          afterDate: e.valueOf(),
          beforeDate: m
        }
      })
    },
    onSelectEndDate: function(e) {
      (0, c.Dr)(l, {
        ...s,
        selectedJoinDateOption: {
          optionId: d.Ol.CUSTOM,
          afterDate: E,
          beforeDate: e.valueOf()
        }
      })
    }
  })
}