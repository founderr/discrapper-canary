"use strict";
t.r(s), t("47120");
var i = t("735250"),
  l = t("470079"),
  C = t.n(l),
  a = t("597312"),
  r = t("481060"),
  n = t("434650"),
  o = t("332475"),
  d = t("6048"),
  c = t("281494"),
  x = t("529840"),
  f = t("689938"),
  u = t("415687"),
  h = t("99713"),
  p = t("7234");

function _(e) {
  let {
    onClose: s
  } = e;
  return (0, i.jsxs)("div", {
    className: u.erroredContainer,
    children: [(0, i.jsxs)("div", {
      className: u.erroredHeader,
      children: [(0, i.jsx)("div", {
        className: u.title,
        children: (0, i.jsx)(r.Heading, {
          variant: "heading-xl/bold",
          children: f.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_HEADER
        })
      }), (0, i.jsx)(r.Text, {
        className: u.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: f.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_SUBHEADER
      })]
    }), (0, i.jsx)("div", {
      className: u.erroredContent,
      children: (0, i.jsx)(o.default, {
        src: h,
        width: 178,
        height: 190
      })
    }), (0, i.jsx)("div", {
      className: u.footer,
      children: (0, i.jsx)(r.Button, {
        className: u.submit,
        onClick: () => s(),
        children: f.default.Messages.REFERRAL_PROGRAM_CLOSE
      })
    })]
  })
}
s.default = function(e) {
  let {
    onClose: s,
    onShare: t,
    setSelectedUsers: l
  } = e, [h, L] = C().useState(0), [j, m] = C().useState(""), [E, R] = C().useState([]), [g, S] = C().useState(!1), [v, y] = C().useState(!1), A = function(e, s) {
    let [t, i] = C().useState(e);
    return C().useEffect(() => {
      let t = setTimeout(() => {
        i(e)
      }, s);
      return () => {
        clearTimeout(t)
      }
    }, [e, s]), t
  }(j, 400);
  C().useEffect(() => {
    R([]), L(0)
  }, [A]);
  let O = async () => {
    try {
      if (null == h) return;
      S(!0);
      let e = await (0, c.fetchReferralEligibleUsers)(h, A),
        s = e.users.map(e => (0, i.jsx)(x.default, {
          user: e,
          onChange: function(e, s) {
            l(t => {
              let i = new Set(t);
              return s ? i.add(e) : i.delete(e), i
            })
          }
        }, e.id));
      R(e => [...e, ...s]), L(e.nextIndex)
    } catch (e) {
      y(!0)
    } finally {
      S(!1)
    }
  }, M = (0, n.useIsVisible)(e => {
    e && !g && O()
  });
  return v ? (0, i.jsx)(_, {
    onClose: s
  }) : (0, i.jsxs)("div", {
    className: u.container,
    children: [(0, i.jsxs)("div", {
      className: u.header,
      children: [(0, i.jsxs)("div", {
        className: u.title,
        children: [(0, i.jsx)(o.default, {
          className: u.titleImage,
          src: p,
          width: 55,
          height: 38
        }), (0, i.jsx)(r.Heading, {
          variant: "heading-xl/bold",
          children: f.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
        })]
      }), (0, i.jsx)(r.Text, {
        className: u.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: f.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
          numReferrals: 3
        })
      }), (0, i.jsx)(d.default, {
        className: u.searchbar,
        query: j,
        onChange: m
      })]
    }), (0, i.jsxs)(a.ScrollerAuto, {
      className: u.list,
      children: [E, g && (0, i.jsx)(r.Spinner, {}), (0, i.jsx)("div", {
        ref: M
      })]
    }), (0, i.jsx)("div", {
      className: u.footer,
      children: (0, i.jsx)(r.Button, {
        className: u.submit,
        onClick: () => t(),
        children: f.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}