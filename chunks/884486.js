"use strict";
n.r(t), n("47120"), n("653041");
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("481060"),
  r = n("465670"),
  o = n("729285"),
  u = n("227120"),
  d = n("924801"),
  c = n("571245"),
  f = n("308083"),
  E = n("689938"),
  _ = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    selectedTimes: n
  } = e, s = (e, a) => {
    let s = [...n];
    s[e].day = a, t({
      primetime: s
    })
  }, h = (e, a) => {
    let s = [...n];
    s[e].time = a, t({
      primetime: s
    })
  }, C = e => {
    let a = [...n];
    a.splice(e, 1), t({
      primetime: a
    })
  }, m = (0, d.getDayOptions)();
  return (0, a.jsxs)("div", {
    className: _.slideContent,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: _.title,
      children: E.default.Messages.CLAN_SETUP_PRIMETIME_TITLE
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: _.subtitle,
      children: E.default.Messages.CLAN_SETUP_PRIMETIME_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: _.timeSelection,
      children: [n.map((e, t) => (0, a.jsxs)("div", {
        className: _.timeSelectorRow,
        children: [(0, a.jsx)(i.SearchableSelect, {
          value: e.day,
          options: m,
          placeholder: E.default.Messages.CLAN_PRIMETIME_PLACEHOLDER,
          onChange: e => s(t, e)
        }), (0, a.jsx)(c.default, {
          value: e.time,
          onChange: e => h(t, e)
        }), t > 0 && (0, a.jsx)(i.Clickable, {
          onClick: () => C(t),
          children: (0, a.jsx)(r.default, {
            className: l()(_.icon, _.clickable)
          })
        })]
      }, "time-".concat(t))), n.length < f.MAX_GAME_HOURS && (0, a.jsxs)(i.Clickable, {
        className: l()(_.timeSelectorRow, _.clickable),
        onClick: () => {
          if (n.length >= f.MAX_GAME_HOURS) return;
          let e = [...n];
          e.push({
            day: void 0,
            time: u.ExtendedTimeOptions.MORNING
          }), t({
            primetime: e
          })
        },
        children: [(0, a.jsx)(o.default, {
          className: l()(_.icon, _.clickable)
        }), (0, a.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "none",
          className: _.addText,
          children: E.default.Messages.CLAN_SETUP_PRIMETIME_ADD
        })]
      })]
    })]
  })
}