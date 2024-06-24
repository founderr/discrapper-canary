n.d(a, {
  Z: function() {
    return r
  }
});
var t = n(735250);
n(470079);
var i = n(481060),
  l = n(689938),
  s = n(482263);

function r(e) {
  let {
    imageSrc: a,
    header: n,
    description: r,
    secondaryInfo: c,
    mutualGuildCount: o,
    ctaLabel: d,
    onCtaClick: u,
    children: g
  } = e, m = (0, t.jsx)(t.Fragment, {
    children: (0, t.jsxs)("div", {
      className: s.topWrapper,
      children: [(0, t.jsx)("div", {
        className: s.__invalid_imageContainer,
        children: (0, t.jsx)("img", {
          alt: "",
          className: s.image,
          src: a
        })
      }), (0, t.jsxs)("div", {
        className: s.content,
        children: [(0, t.jsxs)("div", {
          className: s.header,
          children: [(0, t.jsxs)("div", {
            className: s.info,
            children: [(0, t.jsx)(i.Heading, {
              className: s.name,
              variant: "heading-md/semibold",
              children: n
            }), null != o ? o : (0, t.jsx)(t.Fragment, {
              children: (0, t.jsxs)("div", {
                className: s.details,
                children: [(0, t.jsx)(i.Text, {
                  tag: "span",
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children: l.Z.Messages.APP_DIRECTORY_MUSIC_CATEGORY
                }), null != c ? (0, t.jsxs)(t.Fragment, {
                  children: [(0, t.jsx)(i.Text, {
                    tag: "span",
                    color: "interactive-muted",
                    variant: "text-sm/normal",
                    className: s.bullet,
                    children: "•"
                  }), (0, t.jsx)(i.Text, {
                    tag: "span",
                    color: "header-secondary",
                    variant: "text-sm/medium",
                    children: c
                  })]
                }) : null]
              })
            })]
          }), null != u && null != d ? (0, t.jsx)(i.Button, {
            size: i.Button.Sizes.SMALL,
            onClick: u,
            className: s.__invalid_button,
            children: d
          }) : null]
        }), null != r ? (0, t.jsx)(i.Text, {
          className: s.listingDescription,
          variant: "text-md/normal",
          children: r
        }) : null, (0, t.jsx)("div", {
          className: s.children,
          children: g
        })]
      })]
    })
  });
  return (0, t.jsx)(i.FocusRing, {
    children: (0, t.jsx)("div", {
      className: s.listing,
      children: m
    })
  })
}