"use strict";
a.r(t), a("47120"), a("653041");
var n = a("735250");
a("470079");
var s = a("803997"),
  l = a.n(s),
  i = a("153832"),
  r = a("481060"),
  o = a("465670"),
  u = a("729285"),
  d = a("227120"),
  c = a("924801"),
  f = a("571245"),
  E = a("308083"),
  h = a("689938"),
  _ = a("597338");
t.default = e => {
  let {
    handleUpdate: t,
    selectedTimes: a,
    error: s
  } = e, C = (e, n) => {
    let s = [...a];
    s[e].day = n, t({
      primetime: s
    })
  }, m = (e, n) => {
    let s = [...a];
    s[e].time = n, t({
      primetime: s
    })
  }, S = e => {
    let n = [...a];
    n.splice(e, 1), t({
      primetime: n
    })
  }, p = (0, c.getDayOptions)();
  return (0, n.jsxs)("div", {
    className: _.slideContent,
    children: [(0, n.jsx)(r.Heading, {
      variant: "heading-xxl/medium",
      className: _.title,
      children: h.default.Messages.CLAN_SETUP_PRIMETIME_TITLE
    }), (0, n.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: _.subtitle,
      children: h.default.Messages.CLAN_SETUP_PRIMETIME_SUBTITLE
    }), null != s && (0, n.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: _.errorText,
      children: s
    }), (0, n.jsxs)("div", {
      className: _.timeSelection,
      children: [a.map((e, t) => (0, n.jsxs)("div", {
        className: _.timeSelectorRow,
        children: [(0, n.jsx)(r.SearchableSelect, {
          value: e.day,
          options: p,
          placeholder: h.default.Messages.CLAN_PRIMETIME_PLACEHOLDER,
          onChange: e => C(t, e)
        }), (0, n.jsx)(f.default, {
          value: e.time,
          onChange: e => m(t, e)
        }), t > 0 && (0, n.jsx)(r.Clickable, {
          onClick: () => S(t),
          children: (0, n.jsx)(o.default, {
            className: l()(_.icon, _.clickable)
          })
        })]
      }, e.id)), a.length < E.MAX_GAME_HOURS && (0, n.jsxs)(r.Clickable, {
        className: l()(_.timeSelectorRow, _.clickable),
        onClick: () => {
          if (a.length >= E.MAX_GAME_HOURS) return;
          let e = [...a];
          e.push({
            id: (0, i.v4)(),
            day: void 0,
            time: d.ExtendedTimeOptions.MORNING
          }), t({
            primetime: e
          })
        },
        children: [(0, n.jsx)(u.default, {
          className: l()(_.icon, _.clickable)
        }), (0, n.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "none",
          className: _.addText,
          children: h.default.Messages.CLAN_SETUP_PRIMETIME_ADD
        })]
      })]
    })]
  })
}