n.d(t, {
    W: function () {
        return j;
    },
    r: function () {
        return p;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    s = n(442837),
    r = n(430824),
    o = n(594174),
    a = n(246364),
    d = n(866319),
    u = n(118346),
    c = n(186078),
    m = n(73880),
    f = n(276486),
    x = n(196345),
    h = n(707592),
    g = n(981631);
function v(e) {
    let { guildId: t, formFields: n, updateFormFields: i } = e,
        o = (0, s.e7)([r.Z], () => {
            var e;
            return null === (e = r.Z.getGuild(t)) || void 0 === e ? void 0 : e.rulesChannelId;
        }),
        d = (e, t) => {
            let l = n[e];
            i([
                ...n.slice(0, e),
                {
                    ...l,
                    response: t
                },
                ...n.slice(e + 1)
            ]);
        },
        u = (e, t) => {
            let l = n[e];
            i([
                ...n.slice(0, e),
                {
                    ...l,
                    response: t
                },
                ...n.slice(e + 1)
            ]);
        },
        f = (e, t) => {
            let { value: l } = t,
                s = n[e];
            i([
                ...n.slice(0, e),
                {
                    ...s,
                    response: l
                },
                ...n.slice(e + 1)
            ]);
        },
        g = (e, t) => {
            switch (e.field_type) {
                case a.QJ.TERMS:
                    return (0, l.jsx)(
                        x.dd,
                        {
                            channelId: o,
                            formField: e,
                            onChange: (e, n) => d(t, n)
                        },
                        t
                    );
                case a.QJ.TEXT_INPUT:
                    return (0, l.jsx)(
                        h.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => u(t, e)
                        },
                        t
                    );
                case a.QJ.PARAGRAPH:
                    return (0, l.jsx)(
                        m.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => u(t, e)
                        },
                        t
                    );
                case a.QJ.MULTIPLE_CHOICE:
                    return (0, l.jsx)(
                        c.sp,
                        {
                            formField: e,
                            onChange: (e) => f(t, e)
                        },
                        t
                    );
            }
        };
    return (0, l.jsx)(l.Fragment, { children: n.map((e, t) => g(e, t)) });
}
function j(e) {
    let { guildId: t, formFields: n, updateFormFields: i, disableVerification: a } = e,
        c = (0, s.e7)([r.Z], () => r.Z.getGuild(t)),
        m = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
        x = (0, d.G)({ guildId: t }) ? f.l : u.b,
        h = !a && (null == c ? void 0 : c.hasFeature(g.oNc.COMMUNITY));
    return null == m
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  h && (0, l.jsx)(x, {}),
                  (0, l.jsx)(v, {
                      guildId: t,
                      formFields: n,
                      updateFormFields: i
                  })
              ]
          });
}
function p(e) {
    let { guildId: t, formFields: n, updateFormFields: a, disableVerification: c } = e,
        m = (0, s.e7)([r.Z], () => r.Z.getGuild(t)),
        x = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
        { isPhoneVerificationLevel: h, isCurrentUserVerified: j } = (0, d.b)({ guildId: t }),
        p = i.useRef(j),
        N = h ? f.v : u.B,
        C = !c && (null == m ? void 0 : m.hasFeature(g.oNc.COMMUNITY)) && !p.current;
    return null == x
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  C && (0, l.jsx)(N, { isUserVerified: j }),
                  (0, l.jsx)(v, {
                      guildId: t,
                      formFields: n,
                      updateFormFields: a
                  })
              ]
          });
}
