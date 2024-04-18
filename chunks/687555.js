"use strict";
t.r(s), t("47120");
var i = t("735250"),
  l = t("470079"),
  a = t("512722"),
  r = t.n(a),
  C = t("597312"),
  n = t("442837"),
  d = t("481060"),
  o = t("434650"),
  c = t("332475"),
  x = t("6048"),
  u = t("281494"),
  f = t("276444"),
  h = t("529840"),
  p = t("689938"),
  _ = t("415687"),
  j = t("99713"),
  L = t("334202"),
  m = t("7234");

function R() {
  let e = (0, n.useStateFromStores)([f.default], () => f.default.getReferralsRemaining());
  return r()(null != e, "Referrals remaining should not be null"), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: _.title,
      children: [(0, i.jsx)(c.default, {
        className: _.titleImage,
        src: m,
        width: 55,
        height: 38
      }), (0, i.jsx)(d.Heading, {
        variant: "heading-xl/bold",
        children: p.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
      })]
    }), (0, i.jsx)(d.Text, {
      className: _.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: p.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
        numReferrals: e
      })
    })]
  })
}

function E() {
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: _.title,
      children: (0, i.jsx)(d.Heading, {
        variant: "heading-xl/bold",
        children: p.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS_NO_RESULTS_HEADER
      })
    }), (0, i.jsx)(d.Text, {
      className: _.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: p.default.Messages.REFERRAL_PROGRAM_SELCT_FRIENDS_NO_RESULTS_SUBHEADER
    })]
  })
}

function g() {
  return (0, i.jsx)("div", {
    className: _.erroredContent,
    children: (0, i.jsx)(c.default, {
      src: L,
      width: 225,
      height: 160
    })
  })
}

function S(e) {
  let {
    onClose: s
  } = e;
  return (0, i.jsxs)("div", {
    className: _.erroredContainer,
    children: [(0, i.jsxs)("div", {
      className: _.erroredHeader,
      children: [(0, i.jsx)("div", {
        className: _.title,
        children: (0, i.jsx)(d.Heading, {
          variant: "heading-xl/bold",
          children: p.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_HEADER
        })
      }), (0, i.jsx)(d.Text, {
        className: _.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: p.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_SUBHEADER
      })]
    }), (0, i.jsx)("div", {
      className: _.erroredContent,
      children: (0, i.jsx)(c.default, {
        src: j,
        width: 178,
        height: 190
      })
    }), (0, i.jsx)("div", {
      className: _.separator
    }), (0, i.jsx)("div", {
      className: _.footer,
      children: (0, i.jsx)(d.Button, {
        className: _.submit,
        onClick: () => s(),
        children: p.default.Messages.REFERRAL_PROGRAM_CLOSE
      })
    })]
  })
}
s.default = function(e) {
  let {
    onClose: s,
    onShare: t
  } = e, a = (0, n.useStateFromStores)([f.default], () => f.default.getReferralsRemaining()), [c, j] = l.useState(0), [L, m] = l.useState(""), [v, y] = l.useState([]), [A, M] = l.useState(!1), [F, O] = l.useState(!1), N = function(e, s) {
    let [t, i] = l.useState(e);
    return l.useEffect(() => {
      let t = setTimeout(() => {
        i(e)
      }, s);
      return () => {
        clearTimeout(t)
      }
    }, [e, s]), t
  }(L, 400), [w, B] = l.useState(new Map);
  l.useEffect(() => {
    U(0)
  }, [N]), r()(null != a, "Referrals remaining should not be null");
  let U = async e => {
    try {
      if (null == e) return;
      M(!0);
      let s = await (0, u.fetchReferralEligibleUsers)(e, N);
      y(t => {
        let i = s.users.filter(e => !w.has(e.id));
        return 0 === e ? [...w.values(), ...i] : [...t, ...i]
      }), j(s.nextIndex)
    } catch (e) {
      O(!0)
    } finally {
      M(!1)
    }
  }, I = (0, o.useIsVisible)(e => {
    e && !A && U(c)
  });
  if (F) return (0, i.jsx)(S, {
    onClose: s
  });
  let G = N.length > 0 && 0 === v.length;
  return (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsxs)("div", {
      className: _.header,
      children: [G ? (0, i.jsx)(E, {}) : (0, i.jsx)(R, {}), (0, i.jsx)(x.default, {
        className: _.searchbar,
        query: L,
        onChange: m,
        onClear: () => m("")
      })]
    }), G ? (0, i.jsx)(g, {}) : (0, i.jsxs)(C.ScrollerAuto, {
      className: _.list,
      children: [v.map(e => (0, i.jsx)(h.default, {
        disabled: w.size >= a && !w.has(e.id),
        checked: w.has(e.id),
        user: e,
        onChange: (e, s) => {
          B(t => {
            let i = new Map(t);
            return s ? i.set(e.id, e) : i.delete(e.id), i
          })
        }
      }, e.id)), A && (0, i.jsx)(d.Spinner, {}), (0, i.jsx)("div", {
        ref: I
      })]
    }), (0, i.jsx)("div", {
      className: _.separator
    }), (0, i.jsx)("div", {
      className: _.footer,
      children: (0, i.jsx)(d.Button, {
        className: _.submit,
        onClick: () => {
          if (G) {
            s();
            return
          }
          t([...w.values()])
        },
        children: G ? p.default.Messages.REFERRAL_PROGRAM_CLOSE : p.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}