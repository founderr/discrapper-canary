"use strict";
n.r(t), n("47120"), n("653041");
var a = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  i = n("153832"),
  r = n("481060"),
  o = n("465670"),
  u = n("729285"),
  d = n("227120"),
  c = n("924801"),
  f = n("571245"),
  E = n("308083"),
  h = n("689938"),
  _ = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    selectedTimes: n,
    error: s
  } = e, C = (e, a) => {
    let s = [...n];
    s[e].day = a, t({
      primetime: s
    })
  }, m = (e, a) => {
    let s = [...n];
    s[e].time = a, t({
      primetime: s
    })
  }, S = e => {
    let a = [...n];
    a.splice(e, 1), t({
      primetime: a
    })
  }, I = (0, c.getDayOptions)();
  return (0, a.jsxs)("div", {
    className: _.slideContent,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: _.title,
      children: h.default.Messages.CLAN_SETUP_PRIMETIME_TITLE
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: _.subtitle,
      children: h.default.Messages.CLAN_SETUP_PRIMETIME_SUBTITLE
    }), null != s && (0, a.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: _.errorText,
      children: s
    }), (0, a.jsxs)("div", {
      className: _.timeSelection,
      children: [n.map((e, t) => (0, a.jsxs)("div", {
        className: _.timeSelectorRow,
        children: [(0, a.jsx)(r.SearchableSelect, {
          value: e.day,
          options: I,
          placeholder: h.default.Messages.CLAN_PRIMETIME_PLACEHOLDER,
          onChange: e => C(t, e)
        }), (0, a.jsx)(f.default, {
          value: e.time,
          onChange: e => m(t, e)
        }), t > 0 && (0, a.jsx)(r.Clickable, {
          onClick: () => S(t),
          children: (0, a.jsx)(o.default, {
            className: l()(_.icon, _.clickable)
          })
        })]
      }, e.id)), n.length < E.MAX_GAME_HOURS && (0, a.jsxs)(r.Clickable, {
        className: l()(_.timeSelectorRow, _.clickable),
        onClick: () => {
          if (n.length >= E.MAX_GAME_HOURS) return;
          let e = [...n];
          e.push({
            id: (0, i.v4)(),
            day: void 0,
            time: d.ExtendedTimeOptions.MORNING
          }), t({
            primetime: e
          })
        },
        children: [(0, a.jsx)(u.default, {
          className: l()(_.icon, _.clickable)
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "none",
          className: _.addText,
          children: h.default.Messages.CLAN_SETUP_PRIMETIME_ADD
        })]
      })]
    })]
  })
}