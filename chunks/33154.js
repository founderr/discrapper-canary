n.d(t, {
  s: function() {
    return i
  }
}), n(47120);
var i, s, a = n(735250),
  l = n(470079),
  o = n(442837),
  r = n(481060),
  u = n(749210),
  c = n(153124),
  d = n(823379),
  h = n(41776),
  m = n(981631),
  p = n(689938),
  g = n(995637);
(s = i || (i = {}))[s.CHAT = 0] = "CHAT", s[s.REACTIONS = 1] = "REACTIONS";
t.Z = e => {
  let {
    type: t,
    guild: i,
    closePopout: s,
    ctaRef: T
  } = e, f = (0, c.Dt)(), [v, E] = l.useState(!1), I = (0, o.e7)([h.Z], () => h.Z.isLurking(i.id), [i.id]);
  l.useEffect(() => {
    v && !I && s()
  }, [v, I, s]);
  let N = null,
    x = p.Z.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
  switch (t) {
    case 0:
      N = p.Z.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
      break;
    case 1:
      N = p.Z.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
      break;
    default:
      return (0, d.vE)(t)
  }
  if (null == N) return null;
  let S = async () => {
    E(!0);
    try {
      await u.Z.joinGuild(i.id, {
        source: m.vtS.CHAT_INPUT_BLOCKER
      }), s()
    } catch {
      E(!1)
    }
  };
  return (0, a.jsxs)(r.Dialog, {
    className: g.container,
    "aria-labelledby": f,
    children: [(0, a.jsx)("img", {
      alt: "",
      className: g.image,
      src: n(64395)
    }), (0, a.jsxs)("div", {
      className: g.content,
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        id: f,
        children: N
      }), (0, a.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: x
      }), (0, a.jsxs)("div", {
        className: g.buttonContainer,
        children: [(0, a.jsx)(r.Button, {
          buttonRef: T,
          onClick: S,
          submitting: v,
          children: p.Z.Messages.LURKER_MODE_POPOUT_JOIN
        }), (0, a.jsx)(r.Button, {
          onClick: s,
          look: r.Button.Looks.BLANK,
          className: g.cancel,
          children: p.Z.Messages.LURKER_MODE_POPOUT_CANCEL
        })]
      })]
    })]
  })
}