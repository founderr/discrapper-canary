"use strict";
t.r(s), t("47120"), t("653041");
var i = t("735250"),
  a = t("470079"),
  l = t("512722"),
  r = t.n(l),
  C = t("597312"),
  n = t("442837"),
  d = t("481060"),
  o = t("232567"),
  c = t("434650"),
  u = t("332475"),
  f = t("6048"),
  x = t("281494"),
  h = t("276444"),
  p = t("529840"),
  _ = t("689938"),
  j = t("415687"),
  L = t("99713"),
  m = t("334202"),
  R = t("7234");

function E() {
  let e = (0, n.useStateFromStores)([h.default], () => h.default.getReferralsRemaining());
  return r()(null != e, "Referrals remaining should not be null"), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: j.title,
      children: [(0, i.jsx)(u.default, {
        className: j.titleImage,
        src: R,
        width: 55,
        height: 38
      }), (0, i.jsx)(d.Heading, {
        variant: "heading-xl/bold",
        children: _.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
      })]
    }), (0, i.jsx)(d.Text, {
      className: j.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: _.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
        numReferrals: e
      })
    })]
  })
}

function g() {
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: j.title,
      children: (0, i.jsx)(d.Heading, {
        variant: "heading-xl/bold",
        children: _.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS_NO_RESULTS_HEADER
      })
    }), (0, i.jsx)(d.Text, {
      className: j.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: _.default.Messages.REFERRAL_PROGRAM_SELCT_FRIENDS_NO_RESULTS_SUBHEADER
    })]
  })
}

function S() {
  return (0, i.jsx)("div", {
    className: j.erroredContent,
    children: (0, i.jsx)(u.default, {
      src: m,
      width: 225,
      height: 160
    })
  })
}

function v(e) {
  let {
    onClose: s
  } = e;
  return (0, i.jsxs)("div", {
    className: j.erroredContainer,
    children: [(0, i.jsxs)("div", {
      className: j.erroredHeader,
      children: [(0, i.jsx)("div", {
        className: j.title,
        children: (0, i.jsx)(d.Heading, {
          variant: "heading-xl/bold",
          children: _.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_HEADER
        })
      }), (0, i.jsx)(d.Text, {
        className: j.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: _.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_SUBHEADER
      })]
    }), (0, i.jsx)("div", {
      className: j.erroredContent,
      children: (0, i.jsx)(u.default, {
        src: L,
        width: 178,
        height: 190
      })
    }), (0, i.jsx)("div", {
      className: j.separator
    }), (0, i.jsx)("div", {
      className: j.footer,
      children: (0, i.jsx)(d.Button, {
        className: j.submit,
        onClick: () => s(),
        children: _.default.Messages.REFERRAL_PROGRAM_CLOSE
      })
    })]
  })
}
s.default = function(e) {
  let {
    onClose: s,
    onShare: t
  } = e, l = (0, n.useStateFromStores)([h.default], () => h.default.getReferralsRemaining()), u = (0, n.useStateFromStores)([h.default], () => h.default.getRecipientStatus()), [L, m] = a.useState(0), [R, y] = a.useState(""), [A, M] = a.useState([]), [F, O] = a.useState(!1), [N, w] = a.useState(!1), B = function(e, s) {
    let [t, i] = a.useState(e);
    return a.useEffect(() => {
      let t = setTimeout(() => {
        i(e)
      }, s);
      return () => {
        clearTimeout(t)
      }
    }, [e, s]), t
  }(R, 400), [U, I] = a.useState(new Map), [G, T] = a.useState(new Map);
  a.useEffect(() => {
    k(0)
  }, [B]), r()(null != l, "Referrals remaining should not be null");
  let k = async e => {
    try {
      if (null == e) return;
      O(!0);
      let s = [...G.values()];
      for (let [e, t] of u)
        if (t === x.ReferralOfferStatus.PENDING && !G.has(e)) {
          let t = await (0, o.getUser)(e);
          s.push(t)
        } let t = await (0, x.fetchReferralEligibleUsers)(e, B);
      M(i => {
        let a = t.users.filter(e => !U.has(e.id));
        return (s = s.filter(e => !U.has(e.id)), 0 === e) ? [...U.values(), ...s.values(), ...a] : [...i, ...a]
      }), T(e => {
        let t = new Map(e);
        for (let e of s) t.set(e.id, e);
        return t
      }), m(t.nextIndex)
    } catch (e) {
      w(!0)
    } finally {
      O(!1)
    }
  }, b = (0, c.useIsVisible)(e => {
    e && !F && k(L)
  });
  if (N) return (0, i.jsx)(v, {
    onClose: s
  });
  let Z = B.length > 0 && 0 === A.length;
  return (0, i.jsxs)("div", {
    className: j.container,
    children: [(0, i.jsxs)("div", {
      className: j.header,
      children: [Z ? (0, i.jsx)(g, {}) : (0, i.jsx)(E, {}), (0, i.jsx)(f.default, {
        className: j.searchbar,
        query: R,
        onChange: y,
        onClear: () => y("")
      })]
    }), Z ? (0, i.jsx)(S, {}) : (0, i.jsxs)(C.ScrollerAuto, {
      className: j.list,
      children: [A.map(e => (0, i.jsx)(p.default, {
        disabled: [...U.values()].filter(e => !G.has(e.id)).length >= l && !U.has(e.id) && !G.has(e.id),
        checked: U.has(e.id),
        user: e,
        onChange: (e, s) => {
          I(t => {
            let i = new Map(t);
            return s ? i.set(e.id, e) : i.delete(e.id), i
          })
        }
      }, e.id)), F && (0, i.jsx)(d.Spinner, {}), (0, i.jsx)("div", {
        ref: b
      })]
    }), (0, i.jsx)("div", {
      className: j.separator
    }), (0, i.jsx)("div", {
      className: j.footer,
      children: (0, i.jsx)(d.Button, {
        className: j.submit,
        disabled: 0 === U.size && !Z,
        onClick: () => {
          if (Z) {
            s();
            return
          }
          t([...U.values()])
        },
        children: Z ? _.default.Messages.REFERRAL_PROGRAM_CLOSE : _.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}