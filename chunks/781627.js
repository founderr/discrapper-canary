"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var l = a("735250");
a("470079");
var i = a("481060"),
  n = a("689938"),
  s = a("56082");

function r(e) {
  let {
    imageSrc: t,
    header: a,
    description: r,
    secondaryInfo: c,
    mutualGuildCount: u,
    ctaLabel: d,
    onCtaClick: o,
    children: g
  } = e, m = (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)("div", {
      className: s.topWrapper,
      children: [(0, l.jsx)("div", {
        className: s.__invalid_imageContainer,
        children: (0, l.jsx)("img", {
          alt: "",
          className: s.image,
          src: t
        })
      }), (0, l.jsxs)("div", {
        className: s.content,
        children: [(0, l.jsxs)("div", {
          className: s.header,
          children: [(0, l.jsxs)("div", {
            className: s.info,
            children: [(0, l.jsx)(i.Heading, {
              className: s.name,
              variant: "heading-md/semibold",
              children: a
            }), null != u ? u : (0, l.jsx)(l.Fragment, {
              children: (0, l.jsxs)("div", {
                className: s.details,
                children: [(0, l.jsx)(i.Text, {
                  tag: "span",
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children: n.default.Messages.APP_DIRECTORY_MUSIC_CATEGORY
                }), null != c ? (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)(i.Text, {
                    tag: "span",
                    color: "interactive-muted",
                    variant: "text-sm/normal",
                    className: s.bullet,
                    children: "•"
                  }), (0, l.jsx)(i.Text, {
                    tag: "span",
                    color: "header-secondary",
                    variant: "text-sm/medium",
                    children: c
                  })]
                }) : null]
              })
            })]
          }), null != o && null != d ? (0, l.jsx)(i.Button, {
            size: i.Button.Sizes.SMALL,
            onClick: o,
            className: s.__invalid_button,
            children: d
          }) : null]
        }), null != r ? (0, l.jsx)(i.Text, {
          className: s.listingDescription,
          variant: "text-md/normal",
          children: r
        }) : null, (0, l.jsx)("div", {
          className: s.children,
          children: g
        })]
      })]
    })
  });
  return (0, l.jsx)(i.FocusRing, {
    children: (0, l.jsx)("div", {
      className: s.listing,
      children: m
    })
  })
}