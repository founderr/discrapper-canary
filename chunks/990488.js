n.d(t, {
    W: function () {
        return j;
    },
    r: function () {
        return N;
    }
}),
    n(47120);
var l = n(200651),
    i = n(192379),
    s = n(442837),
    r = n(430824),
    a = n(594174),
    o = n(246364),
    d = n(866319),
    u = n(118346),
    c = n(186078),
    m = n(73880),
    x = n(276486),
    h = n(196345),
    f = n(707592),
    g = n(981631);
function v(e) {
    let { guildId: t, formFields: n, updateFormFields: i } = e,
        a = (0, s.e7)([r.Z], () => {
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
        x = (e, t) => {
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
                case o.QJ.TERMS:
                    return (0, l.jsx)(
                        h.dd,
                        {
                            channelId: a,
                            formField: e,
                            onChange: (e, n) => d(t, n)
                        },
                        t
                    );
                case o.QJ.TEXT_INPUT:
                    return (0, l.jsx)(
                        f.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => u(t, e)
                        },
                        t
                    );
                case o.QJ.PARAGRAPH:
                    return (0, l.jsx)(
                        m.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => u(t, e)
                        },
                        t
                    );
                case o.QJ.MULTIPLE_CHOICE:
                    return (0, l.jsx)(
                        c.sp,
                        {
                            formField: e,
                            onChange: (e) => x(t, e)
                        },
                        t
                    );
            }
        };
    return (0, l.jsx)(l.Fragment, { children: n.map((e, t) => g(e, t)) });
}
function j(e) {
    let { guildId: t, formFields: n, updateFormFields: i, disableVerification: o } = e,
        c = (0, s.e7)([r.Z], () => r.Z.getGuild(t)),
        m = (0, s.e7)([a.default], () => a.default.getCurrentUser()),
        h = (0, d.G)({ guildId: t }) ? x.l : u.b,
        f = !o && (null == c ? void 0 : c.hasFeature(g.oNc.COMMUNITY));
    return null == m
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  f && (0, l.jsx)(h, {}),
                  (0, l.jsx)(v, {
                      guildId: t,
                      formFields: n,
                      updateFormFields: i
                  })
              ]
          });
}
function N(e) {
    let { guildId: t, formFields: n, updateFormFields: o, disableVerification: c } = e,
        m = (0, s.e7)([r.Z], () => r.Z.getGuild(t)),
        h = (0, s.e7)([a.default], () => a.default.getCurrentUser()),
        { isPhoneVerificationLevel: f, isCurrentUserVerified: j } = (0, d.b)({ guildId: t }),
        N = i.useRef(j),
        p = f ? x.v : u.B,
        C = !c && (null == m ? void 0 : m.hasFeature(g.oNc.COMMUNITY)) && !N.current;
    return null == h
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  C && (0, l.jsx)(p, { isUserVerified: j }),
                  (0, l.jsx)(v, {
                      guildId: t,
                      formFields: n,
                      updateFormFields: o
                  })
              ]
          });
}
