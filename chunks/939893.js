"use strict";
i.r(t);
var l = i("735250");
i("470079");
var a = i("302454"),
  n = i.n(a),
  s = i("481060"),
  r = i("447543"),
  o = i("15470"),
  c = i("960904"),
  d = i("830121"),
  u = i("746878"),
  p = i("729035");
let m = /^discord.gg\/[a-zA-Z0-9-]+/,
  f = {
    ...p.default.rules,
    heading: {
      ...o.Rules.heading
    },
    image: {
      ...n().defaultRules.image
    },
    inviteLink: {
      order: p.default.rules.link.order + 1,
      match: (e, t) => t.inline ? m.exec(e) : null,
      parse: (e, t, i) => {
        let l = (0, d.findCodedLink)(e[0]);
        return null == l || l.type !== c.CodedLinkType.INVITE ? {
          type: "text",
          content: e[0]
        } : {
          type: "inviteLink",
          content: [{
            type: "text",
            content: e[0]
          }],
          onClick: () => {
            var e;
            r.default.acceptInviteAndTransitionToInviteChannel({
              inviteKey: l.code,
              context: {
                location: "Application Directory"
              }
            }), null === (e = i.closeModal) || void 0 === e || e.call(i)
          }
        }
      },
      react: (e, t, i) => (0, l.jsx)(s.Anchor, {
        onClick: t => {
          t.preventDefault(), e.onClick()
        },
        children: (0, u.smartOutput)(e, t, i)
      }, i.key)
    }
  };
t.default = f