n.d(t, {
  Z: function() {
    return N
  },
  u: function() {
    return I
  }
});
var s = n(735250);
n(470079);
var r = n(120356),
  i = n.n(r),
  l = n(692547),
  a = n(481060),
  o = n(388905),
  u = n(285952),
  c = n(981631),
  d = n(689938),
  E = n(595927),
  _ = n(83922),
  h = n(331651);

function I(e) {
  let {
    text: t,
    buttonCta: r,
    onClick: c
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(o.Ee, {
      src: n(689411)
    }), (0, s.jsx)(o.Dx, {
      className: i()(h.marginTop20, h.marginBottom8, _.flexCenter),
      children: d.Z.Messages.DISCORD_DESC_SHORT
    }), (0, s.jsx)(o.DK, {
      className: h.marginBottom40,
      children: d.Z.Messages.DISCORD_DESC_LONG
    }), (0, s.jsxs)(a.Card, {
      className: E.card,
      type: a.Card.Types.CUSTOM,
      children: [(0, s.jsx)("img", {
        alt: "",
        className: E.cardAccentLeft,
        src: n(70519)
      }), (0, s.jsx)("img", {
        alt: "",
        className: E.cardAccentRight,
        src: n(806848)
      }), (0, s.jsxs)(u.Z, {
        className: E.cardContents,
        direction: u.Z.Direction.VERTICAL,
        align: u.Z.Align.STRETCH,
        grow: 0,
        children: [(0, s.jsx)(a.Text, {
          tag: "strong",
          className: E.buttonTitle,
          variant: "text-md/normal",
          style: {
            color: l.Z.unsafe_rawColors.PRIMARY_300.css
          },
          children: t
        }), (0, s.jsx)(o.zx, {
          className: E.button,
          onClick: c,
          children: r
        })]
      })]
    })]
  })
}

function N(e) {
  let {
    text: t,
    buttonCta: n,
    theme: r = c.BRd.DARK,
    onClick: i
  } = e;
  return (0, s.jsx)(o.ZP, {
    theme: r,
    children: (0, s.jsx)(I, {
      text: t,
      buttonCta: n,
      onClick: i
    })
  })
}